import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/lib/demo-data";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug) ?? categories[0];
  const items = products.filter((product) => product.category === category.slug);

  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[260px_1fr]">
      <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5">
        <h1 className="text-xl font-black">{category.name}</h1>
        {["Preco", "Marca", "Cor", "Tamanho", "Avaliacao"].map((filter) => (
          <label key={filter} className="mt-4 block text-sm font-semibold text-slate-700">
            {filter}
            <select className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2">
              <option>Todos</option>
              <option>Promocao</option>
            </select>
          </label>
        ))}
      </aside>
      <section>
        <p className="mb-5 text-slate-600">{items.length} produtos encontrados.</p>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  );
}
