# Zarika Store Premium

Mobile-first Next.js 15 / React 19 storefront for Indian ethnic wear and jewellery. The repository is being upgraded from a frontend prototype toward a production commerce application.

## Local development

1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env` and fill in local values.
3. Install dependencies with `npm install` (a lockfile must be generated and committed before relying on `npm ci` in CI).
4. Generate the Prisma client: `npm run db:generate`.
5. Create and apply a local migration: `npm run db:migrate`.
6. Seed the catalogue: `npm run db:seed`.
7. Start Next.js: `npm run dev`.

## Database

Neon PostgreSQL is the recommended hosted database. The Prisma schema models products, variants, categories, images, specifications, badges, customers, addresses, orders, payment events, order timelines, coupons, reviews, newsletter subscribers and wishlists.

Useful commands:
- `npm run db:generate` — generate Prisma client.
- `npm run db:migrate` — create/apply a development migration.
- `npm run db:deploy` — apply committed migrations in deployment.
- `npm run db:seed` — seed the existing prototype catalogue.

## Production deployment

Import the repository into Vercel and configure environment variables from `.env.example`. Provision the database and apply migrations as part of the deployment workflow. Configure Razorpay webhooks to a dedicated HTTPS endpoint only after signature verification and idempotency behavior are implemented and tested.

**Important:** the existing storefront originated as a frontend demo. The schema and seed setup do not mean real payment processing, customer authentication, secure checkout, stock reservation, order tracking or admin workflows are finished. Do not accept live orders until the relevant items in `LAUNCH_CHECKLIST.md` are complete and independently tested.

## Required business setup

See `LAUNCH_CHECKLIST.md` for all `TODO_REPLACE` business details, payment credentials, email sender, courier details, legal policies and launch tests.
