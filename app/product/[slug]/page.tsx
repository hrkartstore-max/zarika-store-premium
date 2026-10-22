import {notFound} from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductActions from "@/components/ProductActions";
import {products,productBySlug,money} from "@/lib/products";
export function generateStaticParams(){return products.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=productBySlug(slug);return {title:p?.name||"Product",description:p?.description};}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const p=productBySlug(slug);if(!p)notFound();
 const related=products.filter(x=>x.category===p.category&&x.slug!==p.slug).slice(0,4);
 return <div className="lyvora-page">
  <div className="lyvora-breadcrumb"><Link href="/">Home</Link><span>›</span><Link href={"/category/"+p.category.toLowerCase().replaceAll(" ","-")}>{p.category}</Link><span>›</span><span>{p.name}</span></div>
  <div className="lyvora-product">
   <div className="lyvora-gallery">
    <div className="lyvora-main-image"><img src={p.image} alt={p.imageAlt}/><span className="lyvora-gallery-badge">{p.badge||"ZARIKA EDIT"}</span></div>
   </div>
   <div className="lyvora-info">
    <div className="lyvora-eyebrow">{p.category} <span>·</span> LYVORA EDIT</div>
    <h1>{p.name}</h1>
    <div className="lyvora-rating"><span>✦</span> <b>Zarika collection</b> <span>·</span> <span>Product details</span></div>
    <div className="lyvora-price"><strong>{money(p.price)}</strong>{p.compareAt&&<><del>{money(p.compareAt)}</del><span className="lyvora-discount">{Math.round((1-p.price/p.compareAt)*100)}% OFF</span></>}</div>
    <div className="lyvora-tax">Inclusive of all taxes <span>⌄</span></div>
    <div className="lyvora-delivery"><span><i/> Product preview</span><span>♧ Delivery estimate confirmed at checkout</span></div>
    <p className="lyvora-description">{p.description||"A statement piece made for everyday moments and special occasions alike."}</p>
    <ProductActions slug={p.slug} category={p.category}/>
    <div className="lyvora-benefits"><div><span>♧</span><p><b>Free shipping</b><small>On eligible orders</small></p></div><div><span>↻</span><p><b>Easy returns</b><small>7-day return window</small></p></div><div><span>▤</span><p><b>Secure checkout</b><small>Safe payment options</small></p></div></div>
    <details className="lyvora-accordion" open><summary>Product highlights <span>−</span></summary><p>Thoughtfully selected for comfort, versatility and an elevated everyday look.</p></details>
    <details className="lyvora-accordion"><summary>Fabric & care <span>＋</span></summary><p>Please refer to the product label for fabric composition and care instructions.</p></details>
    <details className="lyvora-accordion"><summary>Delivery & returns <span>＋</span></summary><p>Delivery estimates and return eligibility are confirmed at checkout.</p></details>
    <p className="lyvora-demo-note">Store preview: inventory, delivery estimates, customer reviews and payments are not connected. Please confirm product details and availability before purchase.</p>
   </div>
  </div>
  {related.length>0&&<section className="section lyvora-related" id="reviews"><div className="section-row"><div><span className="eyebrow">COMPLETE THE LOOK</span><h2>You may also love</h2></div><Link href={"/category/"+p.category.toLowerCase().replaceAll(" ","-")}>View all →</Link></div><div className="product-grid">{related.map(item=><ProductCard key={item.slug} product={item}/>)}</div></section>}
 </div>;
}