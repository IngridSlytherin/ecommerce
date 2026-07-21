export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  sku: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  type: "physical" | "digital";
  rating: number;
  color: string;
  size: string;
  image: string;
  description: string;
  tags: string[];
};

export type Order = {
  id: string;
  customer: string;
  total: number;
  status: "Novo" | "Pago" | "Separacao" | "Enviado" | "Entregue" | "Cancelado";
  channel: "Loja" | "Marketplace" | "Social";
  createdAt: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  orders: number;
  lifetimeValue: number;
};

export type ThemePreset = {
  id: string;
  name: string;
  font: string;
  brand: string;
  accent: string;
  banner: string;
};
