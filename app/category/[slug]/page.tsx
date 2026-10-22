import {notFound} from "next/navigation";
import ProductCard from "@/components/ProductCard";
import {categories,products} from "@/lib/products";
export function generateStaticParams(){return [...categories.map(c=>({slug:c.slug})),{slug:"new-arrivals"},{slug:"under-999"},{slug:"festive-edit"}];}
export default async function CategoryPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const category=categories.find(c=>c.slug===slug);
 let items=slug==="new-arrivals"?products:slug==="under-999"?products.filter(p=>p.price<1000):slug==="festive-edit"?products.filter(p=>["Lehengas","Sarees"].includes(p.category)):products.filter(p=>p.category.toLowerCase().replaceAll(" ","-")===slug);
 if(!category&&!["new-arrivals","under-999","festive-edit"].includes(slug))notFound();
 const title=category?.name||(slug==="new-arrivals"?"New arrivals":slug==="under-999"?"Lovely finds under ₹999":"The festive edit");
 return <div className="page-wrap"><div className="page-heading"><div className="crumb"><a href="/">Home</a> / {title}</div><span className="eyebrow">The Zarika edit</span><h1>{title}</h1><p>{category?.note||"A considered collection of favourites, chosen for your next lovely moment."}</p></div><div className="product-grid">{items.map(p=><ProductCard key={p.slug} product={p}/>)}</div>{items.length===0&&<div className="empty-state"><h1>Something lovely is coming.</h1><p>We’re refreshing this collection. Explore our latest arrivals in the meantime.</p><a className="button button-dark" href="/category/new-arrivals">Shop new arrivals</a></div>}</div>;
}