"use client";

import { Check, Palette, UploadCloud } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { themes } from "@/lib/demo-data";

export default function InstallPage() {
  const [theme, setTheme] = useState(themes[0]);
  const [done, setDone] = useState(false);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-black">Assistente de instalacao</h1>
      <p className="mt-2 text-slate-600">Configure a loja como no WordPress e publique sem programar.</p>
      {done ? (
        <section className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-8">
          <Check className="text-emerald-700" />
          <h2 className="mt-3 text-2xl font-black">Loja pronta para uso</h2>
          <p className="mt-2">Dados demo, temas, pagamentos sandbox e frete foram ativados.</p>
        </section>
      ) : (
        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <form className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 md:grid-cols-2">
            {["Nome da loja", "Dominio", "E-mail administrativo", "Moeda"].map((field) => (
              <label key={field} className="text-sm font-semibold text-slate-700">
                {field}
                <input className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2" placeholder={field} />
              </label>
            ))}
            <label className="text-sm font-semibold text-slate-700">
              Logo
              <span className="mt-2 flex h-28 items-center justify-center gap-2 rounded-md border border-dashed border-slate-300 bg-slate-50"><UploadCloud size={18} /> Upload</span>
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Favicon
              <span className="mt-2 flex h-28 items-center justify-center gap-2 rounded-md border border-dashed border-slate-300 bg-slate-50"><UploadCloud size={18} /> Upload</span>
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Pagamentos
              <select className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2">
                <option>Stripe, Mercado Pago e PayPal sandbox</option>
              </select>
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Frete
              <select className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2">
                <option>Correios + retirada local</option>
              </select>
            </label>
          </form>
          <aside className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="flex items-center gap-2 font-bold"><Palette size={18} /> Tema</h2>
            <div className="mt-4 space-y-2">
              {themes.map((preset) => (
                <button key={preset.id} onClick={() => setTheme(preset)} className="flex w-full items-center justify-between rounded-md border border-slate-200 p-3 text-left hover:border-brand">
                  <span>{preset.name}</span>
                  <span className="flex gap-1"><i className="h-5 w-5 rounded-full" style={{ background: `rgb(${preset.brand})` }} /><i className="h-5 w-5 rounded-full" style={{ background: `rgb(${preset.accent})` }} /></span>
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">Selecionado: {theme.name}</p>
            <Button className="mt-5 w-full" onClick={() => setDone(true)}>Finalizar instalacao</Button>
          </aside>
        </section>
      )}
    </main>
  );
}
