import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export function GET() {
  const configured = {
    siteUrl: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
    database: Boolean(process.env.DATABASE_URL),
    razorpay: Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET && process.env.RAZORPAY_WEBHOOK_SECRET),
    email: Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM),
    whatsapp: Boolean(process.env.NEXT_PUBLIC_WHATSAPP),
  };
  return NextResponse.json({ ok: true, service: "zarika-store-premium", mode: "storefront", paymentsReady: configured.razorpay, orderPersistenceReady: configured.database, emailReady: configured.email, configured, timestamp: new Date().toISOString() }, { headers: { "Cache-Control": "no-store" } });
}
