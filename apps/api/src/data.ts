import type { ProjectSpot } from "@game-office/shared";

export const projectSpots: ProjectSpot[] = [
  {
    id: "projeto-alpha",
    roomId: "main-room",
    name: "Projeto Alpha",
    description: "Plataforma de atendimento ao cliente.",
    docsUrl: "https://example.com/docs/alpha",
    appUrl: "https://example.com/apps/alpha",
    thumbUrl: "https://picsum.photos/seed/alpha/320/180",
    x: 320,
    y: 180,
    w: 96,
    h: 96
  },
  {
    id: "projeto-beta",
    roomId: "main-room",
    name: "Projeto Beta",
    description: "Dashboard de dados internos da empresa.",
    docsUrl: "https://example.com/docs/beta",
    appUrl: "https://example.com/apps/beta",
    thumbUrl: "https://picsum.photos/seed/beta/320/180",
    x: 520,
    y: 220,
    w: 96,
    h: 96
  }
];
