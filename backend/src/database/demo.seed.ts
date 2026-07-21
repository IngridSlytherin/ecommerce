export const demoCategories = [
  { id: "c1", name: "Moda", slug: "moda" },
  { id: "c2", name: "Tecnologia", slug: "tecnologia" },
  { id: "c3", name: "Casa", slug: "casa" },
  { id: "c4", name: "Beleza", slug: "beleza" },
  { id: "c5", name: "Pet", slug: "pet" }
];

export const demoProducts = Array.from({ length: 20 }, (_, index) => ({
  id: `p${index + 1}`,
  name: index % 6 === 1 ? `Pack Digital Pro ${index + 1}` : `Produto White Label ${index + 1}`,
  sku: `WL-${String(index + 1).padStart(4, "0")}`,
  category: demoCategories[index % demoCategories.length].slug,
  brand: ["North", "Atlas", "Viva", "Core"][index % 4],
  price: 49.9 + index * 13,
  stock: index % 7 === 0 ? 4 : 18 + index,
  type: index % 6 === 1 ? "digital" : "physical"
}));

export const demoCustomers = Array.from({ length: 10 }, (_, index) => ({
  id: `u${index + 1}`,
  name: `Cliente Demo ${index + 1}`,
  email: `cliente${index + 1}@demo.com`
}));

export const demoOrders = Array.from({ length: 30 }, (_, index) => ({
  id: `PED-${String(index + 1).padStart(5, "0")}`,
  customerId: demoCustomers[index % demoCustomers.length].id,
  total: 89 + index * 27,
  status: ["Novo", "Pago", "Separacao", "Enviado", "Entregue", "Cancelado"][index % 6],
  createdAt: `2026-06-${String((index % 28) + 1).padStart(2, "0")}`
}));
