# White-Label E-commerce Platform

A white-label online store starter: a merchant runs a setup wizard once, and gets a branded storefront, a one-page checkout and an admin dashboard.

> Screenshot: add `docs/storefront.png` and `docs/admin.png` here.

## What it does

- **Setup wizard** (`/install`): store name, brand, domain, shipping, payment methods and theme.
- **Storefront**: home, category pages, product pages, a persistent cart and a one-page checkout. Includes `sitemap.xml` and `robots.txt` for SEO.
- **Sandbox payments**: Stripe, Mercado Pago and PayPal flows return a simulated authorization, so the checkout can be tested without real charges.
- **Admin** (`/admin`): KPIs, charts, orders, products, stock, customers, marketing and reports.
- **Demo data**: 20 products, 5 categories, 10 customers and 30 orders, so the store looks alive on first run.

## Stack

| Layer | Technologies |
| --- | --- |
| Frontend | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Zustand, TanStack Query |
| Backend | NestJS 11, TypeScript, JWT, class-validator, rate limiting |
| Infrastructure | Docker Compose with PostgreSQL, Redis and MinIO |

## Project structure

```txt
frontend/   Next.js storefront and admin
backend/    NestJS API: catalog, orders, payments, installer, analytics, health
docker-compose.yml
```

## Running locally

```bash
cp .env.example .env
docker compose up -d     # PostgreSQL, Redis, MinIO
npm install
npm run dev              # frontend + backend together
```

- Storefront: http://localhost:3000
- API: http://localhost:3333

## Status and next steps

This is an early-stage base. The backend currently serves demo data; next steps are persisting catalog and orders in PostgreSQL, real payment provider integrations and automated tests.

---

Built by [Ingrid Padilha](https://www.linkedin.com/in/ingrid-padilha/).
