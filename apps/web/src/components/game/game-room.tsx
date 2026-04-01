"use client";

import type { ProjectSpot } from "@game-office/shared";
import { Furniture } from "./furniture";
import { NPC } from "./npc";
import { Player } from "./player";
import { RemotePlayer } from "./remote-player";

const GAME_W = 600;
const SERVER_W = 800;
const GAME_H = 550;
const SERVER_H = 480;

export function scaleSpotFromServer(spot: ProjectSpot): ProjectSpot {
  return {
    ...spot,
    x: (spot.x / SERVER_W) * GAME_W,
    y: (spot.y / SERVER_H) * GAME_H,
    w: (spot.w / SERVER_W) * GAME_W,
    h: (spot.h / SERVER_H) * GAME_H
  };
}

interface RemoteEntry {
  id: string;
  name: string;
  x: number;
  y: number;
}

interface GameRoomProps {
  playerPosition: { x: number; y: number };
  playerDirection: "up" | "down" | "left" | "right";
  remotePlayers: RemoteEntry[];
  spots: ProjectSpot[];
  onInspectSpot: (spotId: string) => void;
}

export function GameRoom({
  playerPosition,
  playerDirection,
  remotePlayers,
  spots,
  onInspectSpot
}: GameRoomProps) {
  const npcs = [
    { id: 1, name: "Brad", x: 180, y: 220, color: "#8B4513", direction: "up" as const },
    { id: 2, name: "Alison", x: 420, y: 250, color: "#654321", direction: "down" as const }
  ];

  return (
    <div
      className="relative h-[550px] w-[600px] overflow-hidden"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 16px,
            rgba(0,0,0,0.03) 16px,
            rgba(0,0,0,0.03) 32px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 16px,
            rgba(0,0,0,0.03) 16px,
            rgba(0,0,0,0.03) 32px
          )
        `,
        backgroundColor: "#e8dcc8"
      }}
    >
      <div className="absolute left-0 right-0 top-0 h-[280px] border-b-4 border-stone-400 bg-stone-300/50">
        <Furniture type="desk" x={80} y={20} variant="computer-setup" />
        <Furniture type="desk" x={200} y={20} variant="dual-monitor" />
        <Furniture type="desk" x={320} y={20} variant="gaming" />
        <Furniture type="desk" x={440} y={20} variant="laptop" />

        <Furniture type="plant" x={50} y={30} />
        <Furniture type="plant" x={530} y={30} />

        <Furniture type="trophy" x={520} y={15} />

        <Furniture type="chair" x={100} y={90} />
        <Furniture type="chair" x={220} y={90} />
        <Furniture type="chair" x={340} y={90} />
        <Furniture type="chair" x={460} y={90} />

        <Furniture type="desk" x={80} y={160} variant="workstation" />
        <Furniture type="desk" x={200} y={160} variant="computer-setup" />
        <Furniture type="desk" x={320} y={160} variant="dual-monitor" />
        <Furniture type="desk" x={440} y={160} variant="messy" />

        <Furniture type="backpack" x={280} y={120} />

        <Furniture type="watercooler" x={15} y={200} />

        <Furniture type="chair" x={100} y={230} />
        <Furniture type="chair" x={220} y={230} />
        <Furniture type="chair" x={340} y={230} />
        <Furniture type="chair" x={460} y={230} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[260px]">
        <div className="absolute left-[120px] top-[60px] h-[140px] w-[360px] rounded-sm bg-indigo-400/60" />

        <Furniture type="bamboo" x={130} y={320} />
        <Furniture type="bamboo" x={180} y={320} />

        <Furniture type="pingpong" x={40} y={420} />

        <Furniture type="sofa" x={300} y={340} variant="orange-left" />
        <Furniture type="sofa" x={380} y={340} variant="orange-right" />
        <Furniture type="sofa" x={340} y={380} variant="beige" />

        <Furniture type="coffeetable" x={330} y={360} />

        <Furniture type="lamp" x={270} y={320} />

        <Furniture type="bigtree" x={480} y={320} />

        <Furniture type="tv" x={380} y={470} />

        <Furniture type="sofa" x={260} y={470} variant="small" />
        <Furniture type="sofa" x={480} y={470} variant="small" />

        <Furniture type="plant" x={220} y={480} />
        <Furniture type="flowerpot" x={550} y={480} />
      </div>

      {spots.map((spot) => (
        <button
          key={spot.id}
          type="button"
          className="absolute z-[12] cursor-pointer rounded-sm border border-transparent bg-amber-400/0 transition hover:bg-amber-400/25"
          style={{
            left: spot.x - spot.w / 2,
            top: spot.y - spot.h / 2,
            width: spot.w,
            height: spot.h
          }}
          aria-label={`Inspecionar ${spot.name}`}
          onClick={() => onInspectSpot(spot.id)}
        />
      ))}

      {npcs.map((npc) => (
        <NPC key={npc.id} {...npc} />
      ))}

      {remotePlayers.map((p) => (
        <RemotePlayer key={p.id} x={p.x} y={p.y} name={p.name} />
      ))}

      <Player x={playerPosition.x} y={playerPosition.y} direction={playerDirection} />
    </div>
  );
}
