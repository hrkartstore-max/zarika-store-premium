"use client";
import Link from "next/link";
import { Product, money } from "@/lib/products";
import { useStore } from "@/lib/store";
export default function ProductCard({product}:{product:Product}){
 const {addToCart,toggleWishlist,wishlist}=useStore(); const saved=wishlist.includes(product.slug);
 return <article className="product-card"><div className="product-image"><Link href={"/product/"+product.slug} aria-label={product.name}><img src={product.image} alt={product.imageAlt} loading="lazy"/></Link>{product.badge&&<span className="product-badge">{product.badge}</span>}<button className={saved?"heart saved":"heart"} onClick={()=>toggleWishlist(product.slug)} aria-label={saved?"Remove from wishlist":"Add to wishlist"}>{saved?"♥":"♡"}</button><button className="quick-add" onClick={()=>addToCart(product.slug)}>＋ Quick add</button></div><div className="product-info"><p className="product-category">{product.category}</p><Link className="product-name" href={"/product/"+product.slug}>{product.name}</Link><div className="price-line"><b>{money(product.price)}</b>{product.compareAt&&<s>{money(product.compareAt)}</s>}{product.compareAt&&<span>{Math.round((1-product.price/product.compareAt)*100)}% off</span>}</div></div></article>;
}