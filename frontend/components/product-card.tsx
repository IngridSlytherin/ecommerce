"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/lib/types";
import { money } from "@/lib/demo-data";
import { useCartStore } from "@/store/cart-store";
import { Button } from "./ui/button";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <Link href={`/product/${product.slug}`} className="relative block aspect-[4/3] bg-slate-100">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
      </Link>
      <div className="space-y-3 p-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand">{product.brand} · {product.type === "digital" ? "Digital" : "Fisico"}</p>
          <Link href={`/product/${product.slug}`} className="mt-1 block font-semibold text-slate-950">{product.name}</Link>
        </div>
        <div className="flex items-center justify-between gap-3">
          <strong>{money(product.price)}</strong>
          <Button onClick={() => addItem(product)} aria-label="Adicionar ao carrinho"><ShoppingBag size={16} /></Button>
        </div>
      </div>
    </article>
  );
}
