import type { MetadataRoute } from "next";
import { site, getCanonicalUrl } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/checkout", "/account", "/admin"] }], sitemap: getCanonicalUrl("/sitemap.xml"), host: site.url };
}
