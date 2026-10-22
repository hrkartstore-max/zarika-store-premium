"use client";
import {useState} from "react";
import {useStore} from "@/lib/store";
export default function ProductActions({slug}:{slug:string}){
 const {addToCart,toggleWishlist,wishlist}=useStore();
 const [size,setSize]=useState("XS");
 const [qty,setQty]=useState(1);
 const [notice,setNotice]=useState("");
 const saved=wishlist.includes(slug);
 const add=()=>{addToCart(slug,qty);setNotice(`Added ${qty} item${qty===1?"":"s"} to your bag`);};
 return <div className="lyvora-actions">
  <div className="lyvora-sizes" role="group" aria-label="Select size">{["XS","S","M","L","XL"].map(s=><button key={s} className={size===s?"selected":""} onClick={()=>setSize(s)} aria-pressed={size===s}>{s}</button>)}</div>
  <button className="lyvora-find-size" onClick={()=>setNotice("For the best fit, compare your measurements with the size chart.")}>⌁ <span>Find my size</span></button>
  <button className="lyvora-wholesale" onClick={()=>setNotice("Wholesale enquiries: please contact the store team.")}>▤ <span>Wholesale prices for businesses</span> <b>→</b></button>
  <div className="lyvora-bulk"><div className="lyvora-bulk-head"><b>◇ &nbsp; Buy more, save more</b><span>Save up to 10%</span></div><button onClick={()=>{setQty(2);setNotice("Quantity set to 2. Bulk discount is a display preview.");}}><i className={qty>=2?"checked":""}/><b>Buy 2+</b><span>5% OFF</span></button><button onClick={()=>{setQty(3);setNotice("Quantity set to 3. Bulk discount is a display preview.");}}><i className={qty>=3?"checked":""}/><b>Buy 3+</b><span>10% OFF</span></button><small>{qty===1?"Add 1 more to save 5%":qty===2?"Add 1 more to save 10%":"10% bulk offer selected"}</small></div>
  <div className="lyvora-quantity"><div><button aria-label="Decrease quantity" onClick={()=>setQty(Math.max(1,qty-1))}>−</button><b>{qty}</b><button aria-label="Increase quantity" onClick={()=>setQty(Math.min(10,qty+1))}>＋</button></div><span>Quantity</span></div>
  <div className="lyvora-quick-actions"><button onClick={()=>{toggleWishlist(slug);setNotice(saved?"Removed from wishlist":"Saved to wishlist");}}>{saved?"♥":"♡"} &nbsp; Wishlist</button><button onClick={()=>setNotice("Compare feature coming soon.")}>▥ &nbsp; Compare</button><button onClick={()=>setNotice("Price drop alerts coming soon.")}>⌁ &nbsp; Price drop alert</button><button onClick={()=>{if(typeof navigator!=="undefined"&&navigator.share)navigator.share({title:"Shop this style",url:location.href}).catch(()=>{});else setNotice("Copy this product link from your browser to share.");}}>♧ &nbsp; Share</button></div>
  {notice&&<p className="lyvora-action-notice" role="status">{notice}</p>}
  <div className="lyvora-sticky-buy"><button className="lyvora-add" onClick={add}>Add to cart</button><button className="lyvora-buy" onClick={add}>ϟ &nbsp; Buy now</button></div>
 </div>;
}