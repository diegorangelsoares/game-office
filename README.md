# Game Office (MVP)

Jogo corporativo 2D online com login Google, seleção de cargo, navegação por sala e inspeção de projetos.

## Serviços

- `apps/web`: Next.js + Phaser (cliente).
- `apps/api`: API HTTP para perfil/projetos.
- `apps/realtime`: Colyseus para multiplayer em tempo real.
- `packages/shared`: contratos e tipos compartilhados.

## Executar com Docker Compose

1. Preencha credenciais Google em `apps/web/.env.example` (ou copie para `.env`).
2. Suba tudo:

```bash
npm run compose:up
```

3. Acesse:
- Web: `http://localhost:3000`
- API health: `http://localhost:4000/health`
- Realtime health: `http://localhost:2567/health`

## Fluxo do usuário no MVP

1. Login com Google corporativo.
2. Seleção de cargo.
3. Entrada na sala principal (spawn central).
4. Movimento (WASD/setas) e visualização dos colegas online.
5. Clique em hotspots para abrir docs e app dos projetos.
