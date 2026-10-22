# Zarika production launch checklist

Do not accept live orders until all blocking items below are complete and verified.

## Business details — TODO_REPLACE
- [ ] TODO_REPLACE: legal seller name, business address and customer-care contact.
- [ ] TODO_REPLACE: support email and phone number.
- [ ] TODO_REPLACE: grievance officer name, contact and response timeframe.
- [ ] TODO_REPLACE: GSTIN and applicable tax registration details.
- [ ] TODO_REPLACE: shipping/courier account, pickup address and return address.
- [ ] TODO_REPLACE: final return, exchange, cancellation and refund policies reviewed for the actual business.
- [ ] TODO_REPLACE: confirm product prices, stock, size charts, fabric/specifications and country of origin.
- [ ] TODO_REPLACE: approve product images and confirm usage rights.
- [ ] TODO_REPLACE: production domain and social profile links.

## Infrastructure and secrets
- [ ] Provision Neon PostgreSQL and set DATABASE_URL in local/Vercel environments.
- [ ] Run Prisma migrations and seed the database after seed scripts are implemented.
- [ ] Set NEXTAUTH_SECRET, NEXTAUTH_URL and Google OAuth credentials.
- [ ] Configure Razorpay test keys, webhook secret and endpoint; test signatures before live keys.
- [ ] Set Resend API key and verified EMAIL_FROM sender.
- [ ] Configure Cloudinary or Vercel Blob for uploads.
- [ ] Configure NEXT_PUBLIC_WHATSAPP using digits only.
- [ ] Configure analytics IDs only after consent controls and privacy notice are reviewed.
- [ ] Configure rate limits, monitoring, backups and error alerts.

## Required verification before launch
- [ ] Clean CI passes npm ci, npm run typecheck and npm run build.
- [ ] Test payment success/failure, abandoned checkout, duplicate webhook and invalid signature.
- [ ] Test COD cap/fee, shipping threshold, GST calculations and address validation.
- [ ] Verify server-side price calculation and atomic stock decrement.
- [ ] Verify customer order access and server-side ADMIN authorization.
- [ ] Verify email, tracking, refund flow and invoices.
- [ ] Run mobile QA at 360, 390 and 430 px and Lighthouse on home, category and product pages.
- [ ] Remove demo/test payment copy from production-facing UI.
- [ ] Do not show fabricated reviews as real customer feedback.
- [ ] Review privacy, terms, shipping, cancellation and returns content with qualified counsel.

## Current implementation status
This repository started as a frontend prototype with localStorage cart behavior and no real payment backend. The database schema and utility foundation are only the first step; they do not make checkout production-ready. Keep live payment acceptance disabled until payment, stock, authentication, email and admin workflows are implemented and tested.
