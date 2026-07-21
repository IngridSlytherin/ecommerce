"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, WandSparkles } from "lucide-react";
import { use } from "react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { money, products } from "@/lib/demo-data";
import { useCartStore } from "@/store/cart-store";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((item) => item.slug === slug);
  const addItem = useCartStore((state) => state.addItem);
  if (!product) notFound();
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-100">
          <Image src={product.image} alt={product.name} fill className="object-cover transition hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="space-y-5">
          <p className="text-sm font-bold uppercase tracking-wide text-brand">{product.brand} · SKU {product.sku}</p>
          <h1 className="text-4xl font-black text-slate-950">{product.name}</h1>
          <div className="flex items-center gap-2 text-amber-500"><Star size={18} fill="currentColor" /> {product.rating.toFixed(1)} avaliacoes</div>
          <p className="text-lg leading-8 text-slate-700">{product.description}</p>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <strong className="text-3xl">{money(product.price)}</strong>
            <p className="mt-2 text-sm text-slate-600">Estoque: {product.stock} · {product.type === "digital" ? "Entrega digital" : "Produto fisico"}</p>
            <Button className="mt-5 w-full" onClick={() => addItem(product)}>Adicionar ao carrinho</Button>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="flex items-center gap-2 font-bold"><WandSparkles size={18} /> IA integrada</h2>
            <p className="mt-2 text-sm text-slate-600">Sugestao: destaque beneficios, inclua palavras-chave SEO e crie campanha de recuperacao para visitantes deste produto.</p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <h2 className="mb-5 text-2xl font-black">Produtos relacionados</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>
    </main>
  );
}
