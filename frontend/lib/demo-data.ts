import { Category, Customer, Order, Product, ThemePreset } from "./types";

export const themes: ThemePreset[] = [
  { id: "fashion", name: "Moda", font: "Inter", brand: "14 116 144", accent: "219 39 119", banner: "Colecao nova com curadoria premium" },
  { id: "tech", name: "Tecnologia", font: "Inter", brand: "30 64 175", accent: "22 163 74", banner: "Gadgets, setup e produtividade" },
  { id: "food", name: "Alimentacao", font: "Inter", brand: "101 85 41", accent: "220 38 38", banner: "Sabores selecionados para o dia a dia" },
  { id: "beauty", name: "Cosmeticos", font: "Inter", brand: "157 23 77", accent: "13 148 136", banner: "Rotinas de beleza com compra facil" },
  { id: "pet", name: "Pet Shop", font: "Inter", brand: "21 128 61", accent: "202 138 4", banner: "Tudo para cuidar melhor do seu pet" }
];

export const categories: Category[] = [
  { id: "c1", name: "Moda", slug: "moda", description: "Roupas, calcados e acessorios." },
  { id: "c2", name: "Tecnologia", slug: "tecnologia", description: "Eletronicos e itens digitais." },
  { id: "c3", name: "Casa", slug: "casa", description: "Decoracao, utilidades e conforto." },
  { id: "c4", name: "Beleza", slug: "beleza", description: "Cosmeticos e autocuidado." },
  { id: "c5", name: "Pet", slug: "pet", description: "Produtos para animais." }
];

const images = [
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80"
];

export const products: Product[] = Array.from({ length: 20 }, (_, index) => {
  const category = categories[index % categories.length];
  const digital = index % 6 === 1;
  return {
    id: `p${index + 1}`,
    name: digital ? `Pack Digital Pro ${index + 1}` : `Produto White Label ${index + 1}`,
    slug: `produto-${index + 1}`,
    sku: `WL-${String(index + 1).padStart(4, "0")}`,
    category: category.slug,
    brand: ["North", "Atlas", "Viva", "Core"][index % 4],
    price: 49.9 + index * 13,
    stock: index % 7 === 0 ? 4 : 18 + index,
    type: digital ? "digital" : "physical",
    rating: 4 + (index % 10) / 10,
    color: ["Preto", "Azul", "Verde", "Rosa"][index % 4],
    size: ["P", "M", "G", "Unico"][index % 4],
    image: images[index % images.length],
    description: "Produto demonstrativo com descricao gerada para venda, SEO, campanhas e vitrines personalizadas.",
    tags: index % 2 === 0 ? ["destaque", "mais-vendido"] : ["recente"]
  };
});

export const customers: Customer[] = Array.from({ length: 10 }, (_, index) => ({
  id: `u${index + 1}`,
  name: `Cliente Demo ${index + 1}`,
  email: `cliente${index + 1}@demo.com`,
  orders: 1 + (index % 5),
  lifetimeValue: 180 + index * 93
}));

export const orders: Order[] = Array.from({ length: 30 }, (_, index) => ({
  id: `PED-${String(index + 1).padStart(5, "0")}`,
  customer: customers[index % customers.length].name,
  total: 89 + index * 27,
  status: ["Novo", "Pago", "Separacao", "Enviado", "Entregue", "Cancelado"][index % 6] as Order["status"],
  channel: ["Loja", "Marketplace", "Social"][index % 3] as Order["channel"],
  createdAt: `2026-06-${String((index % 28) + 1).padStart(2, "0")}`
}));

export const money = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
