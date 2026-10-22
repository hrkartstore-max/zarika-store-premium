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
    <div className="lyvora-main-image"><img src={p.image} alt={p.imageAlt}/><span className="lyvora-image-count">01 / 04</span><span className="lyvora-gallery-badge">NEW SEASON</span></div>
    <div className="lyvora-thumbnails"><button className="active"><img src={p.image} alt="Product front view"/></button><button aria-label="View detail"><img src={p.image} alt="Product detail"/></button><button aria-label="View styling"><img src={p.image} alt="Product styling"/></button><button aria-label="View fabric"><img src={p.image} alt="Fabric detail"/></button></div>
   </div>
   <div className="lyvora-info">
    <div className="lyvora-eyebrow">{p.category} <span>·</span> LYVORA EDIT</div>
    <h1>{p.name}</h1>
    <div className="lyvora-rating"><span>★★★★★</span> <b>4.8</b> <a href="#reviews">(128 reviews)</a></div>
    <div className="lyvora-price"><strong>{money(p.price)}</strong>{p.compareAt&&<><del>{money(p.compareAt)}</del><span className="lyvora-discount">{Math.round((1-p.price/p.compareAt)*100)}% OFF</span></>}</div>
    <div className="lyvora-tax">Inclusive of all taxes <span>⌄</span></div>
    <div className="lyvora-delivery"><span><i/> In stock</span><span>♧ Get it by <b>Fri, 30 Oct</b></span><span>♔ Earn {Math.max(1,Math.round(p.price/50))} coins</span></div>
    <p className="lyvora-description">{p.description||"A statement piece made for everyday moments and special occasions alike."}</p>
    <div className="lyvora-size-heading"><b>SELECT SIZE <small>· XS</small></b><button>SIZE CHART <span>›</span></button></div>
    <ProductActions slug={p.slug}/>
    <div className="lyvora-benefits"><div><span>♧</span><p><b>Free shipping</b><small>On eligible orders</small></p></div><div><span>↻</span><p><b>Easy returns</b><small>7-day return window</small></p></div><div><span>▤</span><p><b>Secure checkout</b><small>Safe payment options</small></p></div></div>
    <details className="lyvora-accordion" open><summary>Product highlights <span>−</span></summary><p>Thoughtfully selected for comfort, versatility and an elevated everyday look.</p></details>
    <details className="lyvora-accordion"><summary>Fabric & care <span>＋</span></summary><p>Please refer to the product label for fabric composition and care instructions.</p></details>
    <details className="lyvora-accordion"><summary>Delivery & returns <span>＋</span></summary><p>Delivery estimates and return eligibility are confirmed at checkout.</p></details>
    <p className="lyvora-demo-note">Store preview: live stock, delivery estimates and payments are not connected yet.</p>
   </div>
  </div>
  {related.length>0&&<section className="section lyvora-related" id="reviews"><div className="section-row"><div><span className="eyebrow">COMPLETE THE LOOK</span><h2>You may also love</h2></div><Link href={"/category/"+p.category.toLowerCase().replaceAll(" ","-")}>View all →</Link></div><div className="product-grid">{related.map(item=><ProductCard key={item.slug} product={item}/>)}</div></section>}
 </div>;
}