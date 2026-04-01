"use client";

import { Client, Room } from "colyseus.js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ProjectSpot } from "@game-office/shared";
import { GameRoom, scaleSpotFromServer } from "@/components/game/game-room";
import { PlayerInfo } from "@/components/game/player-info";

const GAME_W = 600;
const GAME_H = 550;
const SERVER_W = 800;
const SERVER_H = 480;

function toServerCoords(x: number, y: number) {
  return {
    x: Math.max(32, Math.min(768, (x / GAME_W) * SERVER_W)),
    y: Math.max(32, Math.min(448, (y / GAME_H) * SERVER_H))
  };
}

function fromServerCoords(x: number, y: number) {
  return {
    x: (x / SERVER_W) * GAME_W,
    y: (y / SERVER_H) * GAME_H
  };
}

type Props = {
  role: string;
  playerName: string;
  spots: ProjectSpot[];
  onInspect: (spot: ProjectSpot) => void;
  onRealtimeError?: (message: string | null) => void;
};

export function GameCanvas({ role, playerName, spots, onInspect, onRealtimeError }: Props) {
  const [playerPosition, setPlayerPosition] = useState({ x: 200, y: 300 });
  const [playerDirection, setPlayerDirection] = useState<"up" | "down" | "left" | "right">("down");
  const [remotePlayers, setRemotePlayers] = useState<{ id: string; name: string; x: number; y: number }[]>([]);
  const roomRef = useRef<Room | null>(null);

  const scaledSpots = useMemo(() => spots.map(scaleSpotFromServer), [spots]);

  const inspectById = useCallback(
    (spotId: string) => {
      const s = spots.find((x) => x.id === spotId);
      if (s) onInspect(s);
    },
    [spots, onInspect]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const speed = 8;
      setPlayerPosition((prev) => {
        let newX = prev.x;
        let newY = prev.y;
        switch (e.key) {
          case "ArrowUp":
          case "w":
          case "W":
            newY = Math.max(60, prev.y - speed);
            setPlayerDirection("up");
            break;
          case "ArrowDown":
          case "s":
          case "S":
            newY = Math.min(513, prev.y + speed);
            setPlayerDirection("down");
            break;
          case "ArrowLeft":
          case "a":
          case "A":
            newX = Math.max(20, prev.x - speed);
            setPlayerDirection("left");
            break;
          case "ArrowRight":
          case "d":
          case "D":
            newX = Math.min(580, prev.x + speed);
            setPlayerDirection("right");
            break;
          case "e":
          case "E": {
            const nearest = scaledSpots.find((spot) => {
              const dx = spot.x - prev.x;
              const dy = spot.y - prev.y;
              return Math.hypot(dx, dy) < 88;
            });
            if (nearest) inspectById(nearest.id);
            return prev;
          }
          default:
            return prev;
        }
        return { x: newX, y: newY };
      });
    },
    [inspectById, scaledSpots]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const r = roomRef.current;
    if (!r) return;
    const { x, y } = toServerCoords(playerPosition.x, playerPosition.y);
    r.send("move", { x, y });
  }, [playerPosition]);

  useEffect(() => {
    let disposed = false;
    const realtimeUrl = process.env.NEXT_PUBLIC_REALTIME_URL ?? "ws://localhost:2567";
    const client = new Client(realtimeUrl);

    void (async () => {
      let room: Room | null = null;
      try {
        room = await client.joinOrCreate("main-room", { name: playerName, role });
        if (disposed) {
          room.leave();
          return;
        }
        roomRef.current = room;
        onRealtimeError?.(null);

        const syncRemote = (sessionId: string, player: { name: string; x: number; y: number }) => {
          const pos = fromServerCoords(player.x, player.y);
          setRemotePlayers((prev) => {
            const others = prev.filter((p) => p.id !== sessionId);
            return [...others, { id: sessionId, name: player.name, x: pos.x, y: pos.y }];
          });
        };

        room.state.players.onAdd((player: { name: string; x: number; y: number; onChange?: (cb: () => void) => void }, sessionId: string) => {
          if (!room) return;
          if (sessionId === room.sessionId) {
            const pos = fromServerCoords(player.x, player.y);
            setPlayerPosition({ x: pos.x, y: pos.y });
            return;
          }
          syncRemote(sessionId, player);
          player.onChange?.(() => syncRemote(sessionId, player));
        });

        room.state.players.onRemove((_player: unknown, sessionId: string) => {
          if (!room || sessionId === room.sessionId) return;
          setRemotePlayers((prev) => prev.filter((p) => p.id !== sessionId));
        });
      } catch (error) {
        console.error("Falha ao conectar no realtime:", error);
        onRealtimeError?.("Nao foi possivel conectar ao servidor multiplayer.");
      }
    })();

    return () => {
      disposed = true;
      roomRef.current?.leave();
      roomRef.current = null;
    };
  }, [playerName, role, onRealtimeError]);

  return (
    <div className="relative mx-auto w-fit max-w-full">
      <PlayerInfo />
      <div className="rounded-lg bg-amber-100 p-2 shadow-2xl">
        <div className="mb-2 rounded bg-stone-200 px-4 py-1 text-center text-sm font-medium text-stone-600">Product team</div>
        <GameRoom
          playerPosition={playerPosition}
          playerDirection={playerDirection}
          remotePlayers={remotePlayers}
          spots={scaledSpots}
          onInspectSpot={inspectById}
        />
      </div>
      <div className="mt-4 text-center text-sm text-stone-400">Use as setas ou WASD para mover</div>
    </div>
  );
}
