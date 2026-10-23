export const site = {
  name: "Zarika",
  tagline: "Indian occasionwear and everyday favourites",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zarika.shipauk.com",
  instagram: "https://www.instagram.com/zarika.studio/",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
  // TODO: Replace these launch-critical details with verified business information.
  business: {
    legalName: "TODO: Legal seller name",
    address: "TODO: Registered business address",
    supportEmail: "TODO: Customer support email",
    supportPhone: "TODO: Customer support phone",
    grievanceOfficer: "TODO: Grievance officer name and contact",
    gstin: "TODO: GSTIN, if applicable",
  },
  shipping: {
    freeShippingThreshold: 999,
    standardShippingFee: 79,
    dispatchPromise: "TODO: Confirm actual dispatch timeframe before launch",
    returnsSummary: "TODO: Publish verified return, exchange and refund terms",
  },
} as const;

export function getCanonicalUrl(path = "/") {
  const base = site.url.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
