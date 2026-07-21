"use client";

import { useState } from "react";
import { Facebook, Google } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Acesso</p>
          <h1 className="mt-4 text-3xl font-black">Entrar na loja</h1>
          <p className="mt-2 text-slate-600">Use seu e-mail e senha ou continue com Google e Facebook.</p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block text-sm font-semibold text-slate-700">
              E-mail
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2"
                placeholder="seu@exemplo.com"
                required
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Senha
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2"
                placeholder="********"
                required
              />
            </label>
            <Button type="submit" className="w-full">Entrar</Button>
            {submitted && <p className="text-sm text-emerald-700">Login simulado realizado com sucesso.</p>}
          </form>
        </section>
        <aside className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Login Social</p>
          <div className="grid gap-3">
            <Button variant="secondary" className="w-full justify-center">
              <Google size={18} /> Entrar com Google
            </Button>
            <Button variant="secondary" className="w-full justify-center">
              <Facebook size={18} /> Entrar com Facebook
            </Button>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Sem programacao</p>
            <p className="mt-2">Este login e simulado para demonstracao do fluxo de usuarios e da interface White Label.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
