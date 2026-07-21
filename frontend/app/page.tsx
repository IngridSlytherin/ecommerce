import Link from "next/link";
import { ArrowRight, LucideIcon, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { categories, products, themes } from "@/lib/demo-data";

export default function HomePage() {
  const featured = products.filter((product) => product.tags.includes("destaque")).slice(0, 8);
  const trustBlocks: Array<[string, string, LucideIcon]> = [
    ["Sandbox", "Pagamentos teste Mercado Pago, Stripe e PayPal.", Sparkles],
    ["Frete", "Configuracao de envio e estoque reservado.", Truck],
    ["Seguranca", "JWT, refresh token, bcrypt, rate limit e auditoria.", ShieldCheck]
  ];

  return (
    <main>
      <section className="bg-[#eef7f4]">
        <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-10 px-4 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-brand">White label completo</p>
            <h1 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">Commerce WL</h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">Instale, personalize e venda produtos fisicos ou digitais com checkout sandbox, painel administrativo, temas e construtor visual.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/install"><Button>Comecar instalacao <ArrowRight size={18} /></Button></Link>
              <Link href="/admin"><Button variant="secondary">Ver painel</Button></Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {themes.slice(0, 4).map((theme) => (
              <div key={theme.id} className="rounded-lg border border-white/70 bg-white p-5 shadow-panel">
                <div className="mb-5 flex gap-2">
                  <span className="h-8 w-8 rounded-full" style={{ background: `rgb(${theme.brand})` }} />
                  <span className="h-8 w-8 rounded-full" style={{ background: `rgb(${theme.accent})` }} />
                </div>
                <h2 className="font-bold">{theme.name}</h2>
                <p className="mt-2 text-sm text-slate-600">{theme.banner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-3 md:grid-cols-3">
          {trustBlocks.map(([title, text, Icon]) => (
            <div key={String(title)} className="rounded-lg border border-slate-200 bg-white p-5">
              <Icon className="mb-4 text-brand" />
              <h2 className="font-bold">{title}</h2>
              <p className="mt-1 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="mb-6 text-2xl font-black">Categorias</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 hover:border-brand">
              <h3 className="font-bold">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-black">Produtos em destaque</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  );
}
