export type Product = {
  slug: string; name: string; category: string; price: number; compareAt?: number;
  badge?: string; color: string; image: string; imageAlt: string; description: string;
};
const image = (file: string) => `https://shipauk.com/storage/merchants/6eb4b413-87cf-4217-80c3-273ad9d70880/2026/10/${file}`;
export const products: Product[] = [
  { slug:"red-banarasi-saree", name:"Red Banarasi Silk Saree", category:"Sarees", price:4299, compareAt:5999, badge:"Bestseller", color:"Crimson", image:image("C1j4R1KzqVvigW6BRttyfCf5VbfCKObn.jpg"), imageAlt:"Red Banarasi silk saree with gold detailing", description:"Classic red Banarasi silk with gold zari buttis and a rich pallu — the saree every wardrobe needs." },
  { slug:"emerald-silk-saree", name:"Emerald Silk Saree", category:"Sarees", price:2999, compareAt:3999, badge:"Trending", color:"Emerald", image:image("9xy1C87W72ONYCMsgEYsJTChO7l0nWqF.jpg"), imageAlt:"Emerald green silk saree", description:"Rich emerald silk with a contrast border — twirl-ready for festive evenings." },
  { slug:"ikat-bloom-co-ord", name:"Ikat Bloom Co-ord Set", category:"Co-ord Sets", price:1699, compareAt:2199, badge:"New", color:"Indigo", image:image("Y5czlvHLr84RatGOdxdmCoJN49rmfVjm.jpg"), imageAlt:"Ikat floral co-ord set", description:"A breezy printed co-ord in ikat florals — shirt-style top with matching relaxed pants." },
  { slug:"block-print-kurta-set", name:"Block Print Kurta Set", category:"Kurta Sets", price:1799, compareAt:2399, color:"Ivory", image:image("hJ4U1Zfn7HUhmVUkeSdQ4xHgywQ9efan.jpg"), imageAlt:"Ivory block print kurta set", description:"Ivory kurta set with hand block floral prints — fresh, light and perfect for day events." },
  { slug:"sky-blue-net-lehenga", name:"Sky Blue Net Lehenga", category:"Lehengas", price:6999, compareAt:8999, badge:"Festive edit", color:"Sky blue", image:image("nW0LGZaWIiCcq8Z4bdMBNxAocK55ho8B.jpg"), imageAlt:"Sky blue occasion lehenga", description:"Sangeet-night sorted — a sky blue net lehenga with sequin work and a flowing flare." },
  { slug:"crimson-embroidered-co-ord", name:"Crimson Embroidered Co-ord", category:"Co-ord Sets", price:1899, compareAt:2499, color:"Crimson", image:image("4ksliX4TSJLvIXT93vWFRUso5AOaD5ow.jpg"), imageAlt:"Crimson embroidered co-ord set", description:"Festive but comfy — a crimson floral co-ord with delicate embroidery detailing." },
  { slug:"paisley-gold-jhumkas", name:"Paisley Gold Jhumkas", category:"Jewellery", price:699, compareAt:999, badge:"Bestseller", color:"Gold", image:image("UhgK4VgznpOTx07wgjzFCGC61lBpeEb4.jpg"), imageAlt:"Gold paisley jhumka earrings", description:"Gold-tone paisley jhumkas with delicate filigree — light enough to wear all day." },
  { slug:"temple-dome-jhumkas", name:"Temple Dome Jhumkas", category:"Jewellery", price:599, compareAt:899, color:"Antique gold", image:image("GoFHHwuUwsoxFXMwSbSQc6FHi3ge0IK1.jpg"), imageAlt:"Traditional temple dome jhumkas", description:"Classic temple-style dome jhumkas with intricate gold detailing." },
  { slug:"oxidised-silver-jhumkas", name:"Oxidised Silver Jhumkas", category:"Jewellery", price:449, compareAt:649, badge:"Under ₹999", color:"Silver", image:image("YLbpAeM7qL1H9xipfNzJfQgrhLjVLCSy.jpg"), imageAlt:"Oxidised silver jhumka earrings", description:"Oxidised silver jhumkas with pearl drops — the finishing touch for cotton and chikankari." },
  { slug:"kalamkari-silk-saree", name:"Kalamkari Print Silk Saree", category:"Sarees", price:2799, compareAt:3499, color:"Earth tones", image:image("ZdTkPE5tFIWoxPcB0w7ZjZ83lQoyRF13.jpg"), imageAlt:"Kalamkari print silk saree", description:"Hand-inspired Kalamkari prints on a silky drape in a riot of festive colour." },
  { slug:"pastel-kundan-choker-set", name:"Pastel Kundan Choker Set", category:"Jewellery", price:1299, compareAt:1799, badge:"New", color:"Pastel", image:image("2QWTn4sNM0F5qHixbpDwEdAqJSnJjawZ.jpg"), imageAlt:"Pastel kundan choker set", description:"Pastel kundan choker with matching jhumkas — soft pinks, mint and pearls." },
  { slug:"ruby-kada-bangles", name:"Ruby Kada Bangles (Pair)", category:"Jewellery", price:999, compareAt:1399, color:"Ruby red", image:image("01cpbIu6yUAhbkfM8p9LyFX6HTcvi053.jpg"), imageAlt:"Ruby red kada bangles", description:"A pair of ruby-red stone kadas in antique gold finish — stack them or wear solo." }
];
export const categories = [
  { name:"New Arrivals", slug:"new-arrivals", image:image("4ksliX4TSJLvIXT93vWFRUso5AOaD5ow.jpg"), note:"Just dropped this week" },
  { name:"Sarees", slug:"sarees", image:image("wVM33BvXZiWePWDzpUF5wbfmBYa5HyiU.jpg"), note:"Banarasi, jamdani and silk drapes" },
  { name:"Co-ord Sets", slug:"co-ord-sets", image:image("F3Ta90Gplm1WMAOz7yHyxwTqOotfjjZw.jpg"), note:"Printed, breezy and easy to style" },
  { name:"Kurta Sets", slug:"kurta-sets", image:image("hJ4U1Zfn7HUhmVUkeSdQ4xHgywQ9efan.jpg"), note:"Everyday ethnic, elevated" },
  { name:"Lehengas", slug:"lehengas", image:image("rV8Zd5HPfHYV8VGS7ZeKGerHH8hpgXbf.jpg"), note:"Sangeet, mehendi and the big day" },
  { name:"Earrings & Jhumkas", slug:"earrings", image:image("vVq3ZSq0uIhwuYh40rNJfijIa3MAoUHM.jpg"), note:"Temple, oxidised and kundan" },
  { name:"Necklace Sets", slug:"necklace-sets", image:image("ERwzd4bnTQvzrD4HpV6aCwP5Zo0v8q7N.jpg"), note:"Statement sets with matching earrings" },
  { name:"Bangles", slug:"bangles", image:image("D3Hdr4vG4p4QOMkmcjFv5EFeJ3dDdpit.jpg"), note:"Stacked and styled" },
  { name:"Festive Edit", slug:"festive-edit", image:image("ikLo64IVX25JEtaxAKED28dkEszJ2n2Y.jpg"), note:"Wedding-season picks" },
  { name:"Under ₹999", slug:"under-999", image:image("UbPhBM5SSiqBbQq5Zo3jMqSLSh4MyT52.jpg"), note:"Jewellery that won't dent the budget" },
  { name:"Clothing", slug:"clothing", image:image("wVM33BvXZiWePWDzpUF5wbfmBYa5HyiU.jpg"), note:"Sarees, co-ords, kurtas and lehengas" },
  { name:"Jewellery", slug:"jewellery", image:image("vVq3ZSq0uIhwuYh40rNJfijIa3MAoUHM.jpg"), note:"The finishing touch" }
];
export const money = (amount:number) => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(amount);
export const productBySlug = (slug:string) => products.find(p=>p.slug===slug);
export const categoryBySlug = (slug:string) => categories.find(c=>c.slug===slug);
