"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {useStore} from "@/lib/store";
const sizeRows=[["XS","32–34","26–28","35–37"],["S","34–36","28–30","37–39"],["M","36–38","30–32","39–41"],["L","38–40","32–34","41–43"],["XL","40–42","34–36","43–45"]];
export default function ProductActions({slug,category}:{slug:string;category:string}){
 const {addToCart,toggleWishlist,wishlist}=useStore();
 const router=useRouter();
 const apparel=["Co-ord Sets","Kurta Sets","Lehengas","Clothing"].includes(category);
 const sizes=apparel?["XS","S","M","L","XL"]:["Free size"];
 const [size,setSize]=useState(sizes[0]);
 const [qty,setQty]=useState(1);
 const [notice,setNotice]=useState("");
 const [chartOpen,setChartOpen]=useState(false);
 const saved=wishlist.includes(slug);
 const add=()=>{addToCart(slug,qty,size);setNotice(`Added ${qty} item${qty===1?"":"s"} (${size}) to your bag`);};
 const buyNow=()=>{addToCart(slug,qty,size);router.push("/checkout");};
 return <div className="lyvora-actions">
  {apparel?<><div className="lyvora-size-heading"><b>SELECT SIZE <small>· {size}</small></b><button type="button" onClick={()=>setChartOpen(true)}>SIZE CHART <span>›</span></button></div><div className="lyvora-sizes" role="group" aria-label="Select size">{sizes.map(s=><button type="button" key={s} className={size===s?"selected":""} onClick={()=>setSize(s)} aria-pressed={size===s}>{s}</button>)}</div><button type="button" className="lyvora-find-size" onClick={()=>setChartOpen(true)}>⌁ <span>Find my size</span></button></>:<div className="lyvora-size-heading"><b>SIZE <small>· ONE SIZE</small></b><span className="lyvora-one-size">One size fits the style</span></div>}
  <button type="button" className="lyvora-wholesale" onClick={()=>setNotice("Wholesale enquiries: please contact the store team.")}>▤ <span>Wholesale prices for businesses</span> <b>→</b></button>
  <div className="lyvora-bulk"><div className="lyvora-bulk-head"><b>◇ &nbsp; Buy more, save more</b><span>Save up to 10%</span></div><button type="button" onClick={()=>{setQty(2);setNotice("Quantity set to 2. A 5% quantity discount will apply in the cart.");}}><i className={qty>=2?"checked":""}/><b>Buy 2+</b><span>5% OFF</span></button><button type="button" onClick={()=>{setQty(3);setNotice("Quantity set to 3. A 10% quantity discount will apply in the cart.");}}><i className={qty>=3?"checked":""}/><b>Buy 3+</b><span>10% OFF</span></button><small>{qty===1?"Select quantity 2 to save 5%":qty===2?"Select quantity 3 to save 10%":"10% quantity discount selected"}</small></div>
  <div className="lyvora-quantity"><div><button type="button" aria-label="Decrease quantity" onClick={()=>setQty(Math.max(1,qty-1))}>−</button><b>{qty}</b><button type="button" aria-label="Increase quantity" onClick={()=>setQty(Math.min(10,qty+1))}>＋</button></div><span>Quantity</span></div>
  <div className="lyvora-quick-actions"><button type="button" onClick={()=>{toggleWishlist(slug);setNotice(saved?"Removed from wishlist":"Saved to wishlist");}}>{saved?"♥":"♡"} &nbsp; Wishlist</button><button type="button" onClick={()=>setNotice("Compare feature coming soon.")}>▥ &nbsp; Compare</button><button type="button" onClick={()=>setNotice("Price drop alerts are not connected yet.")}>⌁ &nbsp; Price drop alert</button><button type="button" onClick={()=>{if(typeof navigator!=="undefined"&&navigator.share)navigator.share({title:"Shop this style",url:location.href}).catch(()=>{});else setNotice("Copy this product link from your browser to share.");}}>♧ &nbsp; Share</button></div>
  {notice&&<p className="lyvora-action-notice" role="status">{notice}</p>}
  <div className="lyvora-sticky-buy"><button type="button" className="lyvora-add" onClick={add}>Add to cart</button><button type="button" className="lyvora-buy" onClick={buyNow}>ϟ &nbsp; Buy now</button></div>
  {chartOpen&&<div className="lyvora-modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setChartOpen(false)}}><section className="lyvora-size-modal" role="dialog" aria-modal="true" aria-labelledby="lyvora-size-title"><button className="lyvora-modal-close" type="button" aria-label="Close size guide" onClick={()=>setChartOpen(false)}>×</button><span className="eyebrow">FIT GUIDE</span><h2 id="lyvora-size-title">Find your size</h2><p>Measurements are in inches. Use this as a general guide; individual product fits may vary.</p><div className="lyvora-chart-scroll"><table><thead><tr><th>Size</th><th>Bust</th><th>Waist</th><th>Hip</th></tr></thead><tbody>{sizeRows.map(row=><tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td></tr>)}</tbody></table></div><button className="lyvora-chart-confirm" type="button" onClick={()=>setChartOpen(false)}>Done</button></section></div>}
 </div>;
}