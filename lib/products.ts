export type Product = {
  slug: string; name: string; category: string; price: number; compareAt?: number;
  badge?: string; color: string; image: string; imageAlt: string; description: string;
};
const photo = (id: string, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
export const products: Product[] = [
  { slug:"red-banarasi-saree", name:"Red Banarasi Silk Saree", category:"Sarees", price:4299, compareAt:5999, badge:"Bestseller", color:"Crimson", image:photo("photo-1610030469983-98e550d6193c"), imageAlt:"Traditional red silk saree", description:"A statement Banarasi-inspired drape for celebrations, weddings and treasured occasions." },
  { slug:"emerald-silk-saree", name:"Emerald Silk Occasion Saree", category:"Sarees", price:3899, compareAt:4999, badge:"Just dropped", color:"Emerald", image:photo("photo-1583391733956-6c78276477e5"), imageAlt:"Elegant green ethnic outfit", description:"Rich colour, graceful drape and a timeless silhouette for your next celebration." },
  { slug:"ikat-bloom-co-ord", name:"Ikat Bloom Co-ord Set", category:"Co-ord Sets", price:2199, compareAt:2799, badge:"Trending", color:"Indigo", image:photo("photo-1617627143750-d86bc21e42bb"), imageAlt:"Printed Indian co-ord outfit", description:"An easy, polished two-piece set made for brunch dates and everyday statement dressing." },
  { slug:"ivory-kurta-set", name:"Ivory Embroidered Kurta Set", category:"Kurta Sets", price:2499, compareAt:3299, color:"Ivory", image:photo("photo-1597983073493-88cd35cf93e0"), imageAlt:"Ivory Indian kurta set", description:"Soft neutral tones and delicate detailing for effortless festive elegance." },
  { slug:"sky-blue-net-lehenga", name:"Sky Blue Celebration Lehenga", category:"Lehengas", price:6999, compareAt:8999, badge:"Occasion edit", color:"Sky blue", image:photo("photo-1595777457583-95e059d581b8"), imageAlt:"Blue festive dress", description:"A dreamy occasion look for sangeet nights, receptions and memorable celebrations." },
  { slug:"crimson-embroidered-co-ord", name:"Crimson Embroidered Co-ord", category:"Co-ord Sets", price:2799, compareAt:3499, color:"Crimson", image:photo("photo-1617019114583-affb34d1b3cd"), imageAlt:"Crimson Indian festive wear", description:"A modern festive co-ord with rich colour and a flattering, easy-to-style fit." },
  { slug:"kundan-jhumka-set", name:"Kundan Jhumka Earrings", category:"Jewellery", price:799, compareAt:1199, badge:"Under ₹999", color:"Gold", image:photo("photo-1535632066927-ab7c9ab60908"), imageAlt:"Gold statement earrings", description:"Light-catching statement jhumkas to finish your festive and wedding guest looks." },
  { slug:"temple-necklace-set", name:"Temple Necklace Set", category:"Jewellery", price:1499, compareAt:1999, color:"Antique gold", image:photo("photo-1611652022419-a9419f74343d"), imageAlt:"Traditional gold necklace", description:"A traditional-inspired necklace set designed to complement silk sarees and occasion wear." },
  { slug:"rose-gold-bangles", name:"Rose Gold Bangle Stack", category:"Jewellery", price:599, compareAt:899, badge:"Customer favourite", color:"Rose gold", image:photo("photo-1617038220319-276d3cfab638"), imageAlt:"Gold bangles", description:"A versatile bangle stack for mixing, matching and gifting." },
  { slug:"kalamkari-silk-saree", name:"Kalamkari Silk Blend Saree", category:"Sarees", price:3299, compareAt:4299, color:"Earth tones", image:photo("photo-1610189012906-4c5f4c2e2f2d"), imageAlt:"Printed Indian saree", description:"Art-inspired motifs and warm tones bring a distinctive finish to this graceful drape." },
  { slug:"festive-kurta-set", name:"Festive Printed Kurta Set", category:"Kurta Sets", price:1899, compareAt:2499, badge:"New", color:"Multicolour", image:photo("photo-1609357605129-26f69add5d6e"), imageAlt:"Printed festive kurta", description:"A versatile set for family gatherings, celebrations and elevated everyday wear." },
  { slug:"pearl-drop-earrings", name:"Pearl Drop Earrings", category:"Jewellery", price:649, compareAt:999, color:"Pearl", image:photo("photo-1630019852942-f89202989a59"), imageAlt:"Pearl drop earrings", description:"Elegant pearl-inspired drops that work beautifully from day events to evening dinners." }
];
export const categories = [
  { name:"Sarees", slug:"sarees", image:photo("photo-1610030469983-98e550d6193c",500), note:"Timeless drapes, modern stories" },
  { name:"Co-ord Sets", slug:"co-ord-sets", image:photo("photo-1617627143750-d86bc21e42bb",500), note:"Made for your everyday plans" },
  { name:"Kurta Sets", slug:"kurta-sets", image:photo("photo-1597983073493-88cd35cf93e0",500), note:"Effortless festive dressing" },
  { name:"Lehengas", slug:"lehengas", image:photo("photo-1595777457583-95e059d581b8",500), note:"For your big moments" },
  { name:"Jewellery", slug:"jewellery", image:photo("photo-1535632066927-ab7c9ab60908",500), note:"The finishing touch" }
];
export const money = (amount:number) => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(amount);
export const productBySlug = (slug:string) => products.find(p=>p.slug===slug);
export const categoryBySlug = (slug:string) => categories.find(c=>c.slug===slug);