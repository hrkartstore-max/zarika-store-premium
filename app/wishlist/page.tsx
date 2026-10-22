"use client";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import {products} from "@/lib/products";
import {useStore} from "@/lib/store";
export default function WishlistPage(){const {wishlist}=useStore();const items=products.filter(p=>wishlist.includes(p.slug));return <div className="page-wrap"><div className="page-heading"><span className="eyebrow">Saved for later</span><h1>Your wishlist</h1><p>All the pieces you’ve had your eye on.</p></div>{items.length?<div className="product-grid">{items.map(p=><ProductCard key={p.slug} product={p}/>)}</div>:<div className="empty-state"><h1>Keep the lovely ones close.</h1><p>Tap the heart on any product to save it here.</p><Link className="button button-dark" href="/category/new-arrivals">Find your favourites</Link></div>}</div>}