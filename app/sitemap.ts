import type { MetadataRoute } from "next";
import { products, categories } from "@/lib/products";
import { getCanonicalUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: getCanonicalUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...categories.map((category) => ({ url: getCanonicalUrl("/category/" + category.slug), lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...products.map((product) => ({ url: getCanonicalUrl("/product/" + product.slug), lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 })),
    ...["/pages/contact", "/pages/shipping", "/pages/faq", "/blog"].map((path) => ({ url: getCanonicalUrl(path), lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 })),
  ];
}
