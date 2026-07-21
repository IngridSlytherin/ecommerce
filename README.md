# Ecommerce White Label Platform

Plataforma inicial de e-commerce White Label com loja pública, assistente de instalação, checkout sandbox, painel administrativo, temas, marketing, relatórios e dados de demonstração.

## Stack

- Frontend: Next.js, React 19, TypeScript, Tailwind CSS, Zustand, TanStack Query, Shadcn-style UI.
- Backend: NestJS, TypeScript, JWT, rate limit e módulos de catálogo, pedidos, pagamentos sandbox, instalação e analytics.
- Infra: PostgreSQL, Redis e MinIO via Docker Compose.

## Rodando localmente

```bash
cp .env.example .env
docker compose up -d
npm install
npm run dev
```

Frontend: `http://localhost:3000`

Backend: `http://localhost:3333`

## Fluxos implementados nesta base

- Primeiro acesso em `/install`, com nome da loja, marca, domínio, frete, pagamentos e tema.
- Loja pública com home, categorias, produto, carrinho persistente e checkout de uma página.
- Sandbox de pagamento para Mercado Pago, Stripe e PayPal, sem cobrança real.
- Admin em `/admin` com KPIs, gráficos, pedidos, produtos, estoque, clientes, marketing, relatórios, IA e construtor visual.
- Dados demo: 20 produtos, 5 categorias, 10 clientes e 30 pedidos fictícios.
