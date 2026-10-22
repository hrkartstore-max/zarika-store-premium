"use client";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/lib/store";
export default function Header(){
  const {cartCount,wishlist}=useStore(); const [open,setOpen]=useState(false);
  return <><div className="announcement">A little celebration in every parcel <span>✦</span> Free shipping over ₹1,999</div>
  <header className="header"><div className="header-inner">
    <button className="menu-toggle" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?"✕":"☰"}</button>
    <Link className="brand" href="/"><span className="brand-mark">Z</span><span>ZARIKA<small>STYLE THAT FEELS LIKE YOU</small></span></Link>
    <nav className={open?"nav nav-open":"nav"} onClick={()=>setOpen(false)}>
      <Link href="/category/sarees">Sarees</Link><Link href="/category/co-ord-sets">Co-ord sets</Link><Link href="/category/kurta-sets">Kurta sets</Link><Link href="/category/lehengas">Lehengas</Link><Link href="/category/jewellery">Jewellery</Link>
    </nav>
    <div className="header-actions"><Link aria-label="Search" href="/search" className="icon-link">⌕</Link><Link aria-label="Wishlist" href="/wishlist" className="icon-link">♡<i>{wishlist.length}</i></Link><Link aria-label="Shopping bag" href="/cart" className="icon-link bag-link">♧<i>{cartCount}</i></Link></div>
  </div></header></>;
}