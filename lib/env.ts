import { z } from "zod";
const schema = z.object({
 DATABASE_URL: z.string().url().optional(),
 NEXTAUTH_SECRET: z.string().min(32).optional(),
 NEXTAUTH_URL: z.string().url().optional(),
 NEXT_PUBLIC_SITE_URL: z.string().url().default("https://zarika.shipauk.com"),
 NEXT_PUBLIC_WHATSAPP: z.string().regex(/^\\d*$/).optional(),
 RAZORPAY_KEY_ID: z.string().optional(),
 RAZORPAY_KEY_SECRET: z.string().optional(),
 RAZORPAY_WEBHOOK_SECRET: z.string().optional(),
 RESEND_API_KEY: z.string().optional(),
 EMAIL_FROM: z.string().email().optional(),
 CLOUDINARY_URL: z.string().optional(),
 BLOB_READ_WRITE_TOKEN: z.string().optional(),
 NEXT_PUBLIC_GA_ID: z.string().optional(),
 NEXT_PUBLIC_META_PIXEL_ID: z.string().optional(),
 ADMIN_EMAIL: z.string().email().optional()
});
export const env = schema.parse({
 DATABASE_URL:process.env.DATABASE_URL,NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,NEXTAUTH_URL:process.env.NEXTAUTH_URL,
 NEXT_PUBLIC_SITE_URL:process.env.NEXT_PUBLIC_SITE_URL,NEXT_PUBLIC_WHATSAPP:process.env.NEXT_PUBLIC_WHATSAPP,
 RAZORPAY_KEY_ID:process.env.RAZORPAY_KEY_ID,RAZORPAY_KEY_SECRET:process.env.RAZORPAY_KEY_SECRET,
 RAZORPAY_WEBHOOK_SECRET:process.env.RAZORPAY_WEBHOOK_SECRET,RESEND_API_KEY:process.env.RESEND_API_KEY,
 EMAIL_FROM:process.env.EMAIL_FROM,CLOUDINARY_URL:process.env.CLOUDINARY_URL,
 BLOB_READ_WRITE_TOKEN:process.env.BLOB_READ_WRITE_TOKEN,NEXT_PUBLIC_GA_ID:process.env.NEXT_PUBLIC_GA_ID,
 NEXT_PUBLIC_META_PIXEL_ID:process.env.NEXT_PUBLIC_META_PIXEL_ID,ADMIN_EMAIL:process.env.ADMIN_EMAIL
});
