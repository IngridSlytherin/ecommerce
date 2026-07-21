import { BarChart3, Bot, Boxes, Brush, ChartPie, FileDown, LucideIcon, Megaphone, Package, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { customers, money, orders, products } from "@/lib/demo-data";

export default function AdminPage() {
  const revenue = orders.reduce((sum, order) => sum + order.total, 0);
  const lowStock = products.filter((product) => product.stock <= 5);
  const chartBlocks: Array<[string, string, LucideIcon]> = [
    ["Linha", "Faturamento por periodo", BarChart3],
    ["Barras", "Produtos mais vendidos", BarChart3],
    ["Pizza", "Vendas por categoria", ChartPie],
    ["Funil", "Conversao por etapa", BarChart3]
  ];
  const modules: Array<[LucideIcon, string, string]> = [
    [Boxes, "Estoque", `${lowStock.length} alertas de baixo estoque`],
    [Users, "Clientes", "Historico, enderecos, cupons e carrinhos abandonados"],
    [Megaphone, "Marketing", "Cupons, cashback, fidelidade e popups"],
    [FileDown, "Relatorios", "Exportacao Excel, PDF e CSV"],
    [Bot, "IA", "Descricoes, SEO, campanhas, banners e promocoes"],
    [Brush, "Construtor visual", "Arraste secoes, paginas, banners e landing pages"]
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-brand">Painel administrativo</p>
          <h1 className="text-3xl font-black">Dashboard</h1>
        </div>
      </div>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {[
          ["Faturamento", money(revenue)],
          ["Pedidos", String(orders.length)],
          ["Conversao", "3,8%"],
          ["Ticket medio", money(revenue / orders.length)],
          ["Clientes", String(customers.length)]
        ].map(([label, value]) => (
          <Card key={label}>
            <p className="text-sm text-slate-600">{label}</p>
            <strong className="mt-2 block text-2xl">{value}</strong>
          </Card>
        ))}
      </section>
      <section className="mt-6 grid gap-4 lg:grid-cols-4">
        {chartBlocks.map(([kind, text, Icon]) => (
          <Card key={String(kind)} className="min-h-44">
            <Icon className="text-brand" />
            <h2 className="mt-4 font-bold">{kind}</h2>
            <p className="text-sm text-slate-600">{text}</p>
            <div className="mt-5 h-16 rounded-md bg-gradient-to-r from-brand/20 via-accent/20 to-emerald-200" />
          </Card>
        ))}
      </section>
      <section className="mt-6 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <h2 className="mb-4 flex items-center gap-2 font-bold"><Package size={18} /> Pedidos</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead><tr className="border-b"><th className="py-2">Pedido</th><th>Cliente</th><th>Status</th><th>Total</th><th>Canal</th></tr></thead>
              <tbody>
                {orders.slice(0, 8).map((order) => (
                  <tr key={order.id} className="border-b border-slate-100"><td className="py-3 font-semibold">{order.id}</td><td>{order.customer}</td><td>{order.status}</td><td>{money(order.total)}</td><td>{order.channel}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <div className="grid gap-4">
          {modules.map(([Icon, title, text]) => (
            <Card key={String(title)} className="flex items-start gap-3">
              <Icon className="mt-1 text-brand" size={20} />
              <div><h2 className="font-bold">{title}</h2><p className="text-sm text-slate-600">{text}</p></div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
