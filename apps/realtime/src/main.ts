import "dotenv/config";
import express from "express";
import { Server, Room, matchMaker } from "@colyseus/core";
import { WebSocketTransport } from "@colyseus/ws-transport";
import { Schema, type, MapSchema } from "@colyseus/schema";

class Player extends Schema {
  @type("string") name = "Colaborador";
  @type("number") x = 400;
  @type("number") y = 240;
  @type("string") role = "OUTRO";
}

class RoomState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
}

class MainRoom extends Room {
  onCreate() {
    this.setState(new RoomState());
    this.onMessage("move", (client, data: { x: number; y: number }) => {
      const state = this.state as RoomState;
      const player = state.players.get(client.sessionId);
      if (!player) return;
      player.x = Math.max(32, Math.min(768, data.x));
      player.y = Math.max(32, Math.min(448, data.y));
    });
  }

  onJoin(client: any, options: { name?: string; role?: string }) {
    const player = new Player();
    player.name = options.name ?? "Colaborador";
    player.role = options.role ?? "OUTRO";
    (this.state as RoomState).players.set(client.sessionId, player);
  }

  onLeave(client: any) {
    (this.state as RoomState).players.delete(client.sessionId);
  }
}

async function bootstrap() {
  const allowedOrigin = process.env.CORS_ORIGIN ?? "http://localhost:3000";
  matchMaker.controller.getCorsHeaders = (headers: Headers) => {
    const origin = headers.get("origin");
    const originToUse = origin && origin === allowedOrigin ? origin : allowedOrigin;
    return {
      "Access-Control-Allow-Origin": originToUse
    };
  };

  const gameServer = new Server({
    transport: new WebSocketTransport(),
    express: (app) => {
      app.use((_req, res, next) => {
        const requestOrigin = _req.headers.origin;
        const originToUse = requestOrigin && requestOrigin === allowedOrigin ? requestOrigin : allowedOrigin;
        res.header("Access-Control-Allow-Origin", originToUse);
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
        if (_req.method === "OPTIONS") {
          return res.status(204).send();
        }
        next();
      });
      app.get("/health", (_req, res) => res.json({ ok: true }));
    }
  });

  gameServer.define("main-room", MainRoom);

  const port = Number(process.env.REALTIME_PORT ?? 2567);
  await gameServer.listen(port, "0.0.0.0");
  console.log(`Realtime running on :${port}`);
}

bootstrap().catch((error) => {
  console.error("Falha ao iniciar realtime", error);
  process.exit(1);
});
