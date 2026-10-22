import {notFound} from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import {categories,products} from "@/lib/products";
import CollectionControls from "@/components/CollectionControls";
export function generateStaticParams(){return categories.map(c=>({slug:c.slug}));}
export default async function CategoryPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const category=categories.find(c=>c.slug===slug);if(!category)notFound();
 let items=products;
 if(slug==="new-arrivals")items=products;
 else if(slug==="under-999")items=products.filter(p=>p.price<1000);
 else if(slug==="festive-edit")items=products.filter(p=>["Lehengas","Sarees"].includes(p.category));
 else if(slug==="earrings")items=products.filter(p=>p.category==="Jewellery"&&/jhumka|earring/i.test(p.name));
 else if(slug==="necklace-sets")items=products.filter(p=>p.category==="Jewellery"&&/necklace|choker/i.test(p.name));
 else if(slug==="bangles")items=products.filter(p=>p.category==="Jewellery"&&/bangle|kada/i.test(p.name));
 else if(slug==="clothing")items=products.filter(p=>p.category!=="Jewellery");
 else if(slug==="jewellery")items=products.filter(p=>p.category==="Jewellery");
 else items=products.filter(p=>p.category.toLowerCase().replaceAll(" ","-")===slug);
 return <div className="page-wrap collection-page"><div className="page-heading"><div className="crumb"><Link href="/">Home</Link> / {category.name}</div><span className="eyebrow">The Zarika edit</span><h1>{category.name}</h1><p>{category.note||"A considered collection of favourites, chosen for your next lovely moment."}</p></div><CollectionControls products={items}/>{items.length===0&&<div className="empty-state"><h1>Something lovely is coming.</h1><p>We’re refreshing this collection. Explore our latest arrivals in the meantime.</p><Link className="button button-dark" href="/category/new-arrivals">Shop new arrivals</Link></div>}</div>;
}