"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { money } from "@/lib/demo-data";
import { useCartStore } from "@/store/cart-store";

export default function CartPage() {
  const { items, removeItem } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-black">Carrinho</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="space-y-3">
          {items.length === 0 && <div className="rounded-lg border border-slate-200 bg-white p-6">Seu carrinho esta vazio.</div>}
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4">
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p className="text-sm text-slate-600">Quantidade {item.quantity} · {money(item.price)}</p>
              </div>
              <Button variant="ghost" onClick={() => removeItem(item.id)} aria-label="Remover"><Trash2 size={18} /></Button>
            </div>
          ))}
        </section>
        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-600">Total</p>
          <strong className="text-3xl">{money(total)}</strong>
          <Link href="/checkout"><Button className="mt-5 w-full" disabled={items.length === 0}>Finalizar compra</Button></Link>
        </aside>
      </div>
    </main>
  );
}
