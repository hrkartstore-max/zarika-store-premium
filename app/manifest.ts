import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Zarika — Ethnic Wear & Jewellery", short_name: "Zarika", description: "Indian occasionwear and everyday favourites.", start_url: "/", display: "standalone", background_color: "#fffaf6", theme_color: "#8b1e3f", lang: "en-IN", icons: [] };
}
