"use client";

import Link from "next/link";
import { ShoppingCart, Store, UserRound } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { Button } from "./ui/button";

export function SiteHeader() {
  const count = useCartStore((state) => state.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-950">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand text-white"><Store size={19} /></span>
          Commerce WL
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/category/moda">Categorias</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/install">Instalador</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" aria-label="Conta"><UserRound size={18} /></Button>
          <Link href="/cart" className="relative inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white">
            <ShoppingCart size={18} />
            {count > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-accent px-1.5 text-xs font-bold text-white">{count}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
