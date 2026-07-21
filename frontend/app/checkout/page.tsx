"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { money } from "@/lib/demo-data";
import { useCartStore } from "@/store/cart-store";

export default function CheckoutPage() {
  const [approved, setApproved] = useState(false);
  const [provider, setProvider] = useState("Stripe Sandbox");
  const { items, clear } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function approveOrder() {
    setApproved(true);
    clear();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-black">Checkout em uma pagina</h1>
      {approved ? (
        <section className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-8">
          <CheckCircle2 className="text-emerald-600" size={42} />
          <h2 className="mt-4 text-2xl font-black">Pedido aprovado no sandbox</h2>
          <p className="mt-2 text-slate-700">Nenhuma cobranca real foi feita. O pedido ja aparece no painel administrativo como pago.</p>
        </section>
      ) : (
        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <form className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 md:grid-cols-2">
            {["Nome completo", "E-mail", "Telefone", "CPF", "CEP", "Endereco", "Numero", "Cidade"].map((field) => (
              <label key={field} className="text-sm font-semibold text-slate-700">
                {field}
                <input className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2" placeholder={field} />
              </label>
            ))}
            <label className="text-sm font-semibold text-slate-700">
              Frete
              <select className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2">
                <option>Correios PAC - R$ 19,90</option>
                <option>Retirada local - Gratis</option>
              </select>
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Pagamento teste
              <select value={provider} onChange={(event) => setProvider(event.target.value)} className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2">
                <option>Stripe Sandbox</option>
                <option>Mercado Pago Sandbox</option>
                <option>PayPal Sandbox</option>
              </select>
            </label>
          </form>
          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="font-bold">Resumo</h2>
            <p className="mt-3 text-sm text-slate-600">{items.length} itens · {provider}</p>
            <strong className="mt-4 block text-3xl">{money(total)}</strong>
            <Button className="mt-5 w-full" onClick={approveOrder}>Pagar em modo teste</Button>
          </aside>
        </section>
      )}
    </main>
  );
}
