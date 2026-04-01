import "dotenv/config";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import Fastify from "fastify";
import { RoleSchema } from "@game-office/shared";
import { projectSpots } from "./data";

const app = Fastify({
  logger: {
    transport: {
      target: "pino-pretty"
    }
  }
});

const allowedDomain = (process.env.ALLOWED_EMAIL_DOMAIN ?? "").trim();

app.get("/health", async () => ({ ok: true }));

app.get("/me", async (req) => {
  const email = req.headers["x-user-email"]?.toString() ?? "colaborador@empresa.com";
  if (allowedDomain && !email.endsWith(`@${allowedDomain}`)) {
    return { authorized: false };
  }
  return {
    authorized: true,
    email,
    name: req.headers["x-user-name"]?.toString() ?? "Colaborador"
  };
});

app.post("/profile/role", async (req, reply) => {
  const body = req.body as { role?: string };
  const parsed = RoleSchema.safeParse(body.role);
  if (!parsed.success) {
    return reply.status(400).send({ error: "Cargo inválido" });
  }
  return { ok: true, role: parsed.data };
});

app.get("/rooms/:id/projects", async (req) => {
  const params = req.params as { id: string };
  return projectSpots.filter((spot) => spot.roomId === params.id);
});

async function bootstrap() {
  await app.register(cors, {
    origin: true,
    credentials: true
  });

  await app.register(rateLimit, {
    max: 100,
    timeWindow: "1 minute"
  });

  const port = Number(process.env.API_PORT ?? 4000);
  await app.listen({ port, host: "0.0.0.0" });
}

bootstrap().catch((error) => {
  app.log.error(error);
  process.exit(1);
});
