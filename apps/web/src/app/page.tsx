"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { GameCanvas } from "@/components/GameCanvas";
import type { ProjectSpot } from "@game-office/shared";

const roles = ["DEV", "PM", "DESIGN", "QA", "OUTRO"] as const;

export default function HomePage() {
  const { data: session, status } = useSession();
  const [role, setRole] = useState<string>("");
  const [saved, setSaved] = useState(false);
  const [spots, setSpots] = useState<ProjectSpot[]>([]);
  const [selectedSpot, setSelectedSpot] = useState<ProjectSpot | null>(null);
  const [realtimeError, setRealtimeError] = useState<string | null>(null);

  const apiBase = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

  useEffect(() => {
    const cachedRole = localStorage.getItem("selectedRole");
    if (cachedRole) {
      setRole(cachedRole);
      setSaved(true);
    }
  }, []);

  useEffect(() => {
    if (!session?.user) return;
    fetch(`${apiBase}/rooms/main-room/projects`)
      .then((r) => r.json())
      .then((data) => setSpots(data))
      .catch(() => setSpots([]));
  }, [apiBase, session?.user]);

  const doSaveRole = useCallback(async () => {
    if (!role) return;
    await fetch(`${apiBase}/profile/role`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role })
    });
    localStorage.setItem("selectedRole", role);
    setSaved(true);
  }, [apiBase, role]);

  const playerName = useMemo(() => session?.user?.name ?? "Colaborador", [session?.user?.name]);

  if (status === "loading") return <main className="p-8">Carregando...</main>;

  if (!session) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#0f172a] text-slate-100">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <section className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center p-6">
          <div className="grid w-full gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur md:grid-cols-2 md:p-10">
            <div className="flex flex-col justify-center">
              <p className="mb-3 inline-flex w-fit items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
                GAME-OFFICE
              </p>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">Entre na sala de projetos da equipe</h1>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Um ambiente gamificado para explorar iniciativas, alinhar times e acompanhar produtos de forma mais visual.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                <li>🎮 Navegação por mapa interativo</li>
                <li>🤝 Presença em tempo real com o time</li>
                <li>🚀 Acesso rápido a docs e apps</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-xl md:p-6">
              <h2 className="text-lg font-semibold">Acessar plataforma</h2>
              <p className="mt-1 text-sm text-slate-400">Use sua conta Google corporativa para continuar.</p>

              <button
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 font-medium text-white transition hover:from-blue-500 hover:to-indigo-500"
                onClick={() => signIn("google")}
              >
                <span className="text-base">🔐</span>
                Entrar com Google
              </button>

              <p className="mt-3 text-center text-xs text-slate-500">Login seguro • Somente domínio corporativo</p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (!saved) {
    return (
      <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-4 p-6">
        <h2 className="text-xl font-semibold">Selecione seu cargo</h2>
        <select
          className="rounded border border-slate-600 bg-slate-900 p-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Selecione...</option>
          {roles.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button className="rounded bg-emerald-600 px-4 py-2 disabled:opacity-50" disabled={!role} onClick={doSaveRole}>
          Entrar na sala
        </button>
        <button className="rounded border border-slate-500 px-4 py-2" onClick={() => signOut()}>
          Sair
        </button>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#211D1B] p-4">
      <div className="absolute right-4 top-4 z-40 flex flex-wrap items-center justify-end gap-3 text-right text-sm text-stone-400">
        <span>
          {playerName} · {role}
        </span>
        <button type="button" className="rounded border border-stone-600 px-3 py-1 text-stone-300 hover:bg-stone-800" onClick={() => signOut()}>
          Sair
        </button>
      </div>

      {realtimeError ? (
        <section className="mx-auto mb-4 max-w-2xl rounded-lg border border-amber-700 bg-amber-900/30 px-3 py-2 text-center text-sm text-amber-200">
          {realtimeError}
        </section>
      ) : null}

      <div className="flex min-h-[calc(100vh-2rem)] items-center justify-center">
        <GameCanvas role={role} playerName={playerName} spots={spots} onInspect={setSelectedSpot} onRealtimeError={setRealtimeError} />
      </div>

      {selectedSpot ? (
        <section className="mx-auto mt-6 max-w-xl rounded-xl border border-stone-700 bg-stone-900/95 p-4 shadow-lg">
          <div className="mb-3 overflow-hidden rounded-lg border border-stone-700">
            <img
              src={selectedSpot.thumbUrl || "https://picsum.photos/seed/projeto/640/240"}
              alt={`Preview do ${selectedSpot.name}`}
              className="h-40 w-full object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold text-stone-100">{selectedSpot.name}</h2>
          <p className="mt-1 text-sm text-stone-300">{selectedSpot.description}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              className="rounded bg-indigo-600 px-3 py-2 text-white transition hover:bg-indigo-500"
              href={selectedSpot.docsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ver docs
            </a>
            <a
              className="rounded bg-emerald-600 px-3 py-2 text-white transition hover:bg-emerald-500"
              href={selectedSpot.appUrl}
              target="_blank"
              rel="noreferrer"
            >
              Abrir app
            </a>
            <button type="button" className="rounded border border-stone-600 px-3 py-2 text-stone-300 hover:bg-stone-800" onClick={() => setSelectedSpot(null)}>
              Fechar
            </button>
          </div>
        </section>
      ) : null}
    </main>
  );
}
