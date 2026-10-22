"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect,useState} from "react";
import {useStore} from "@/lib/store";
const logo="https://shipauk.com/storage/merchants/6eb4b413-87cf-4217-80c3-273ad9d70880/2026/10/bygoAeJrOIc3pyiziKUb5plN8EUUaIVI.png";
const nav=[{href:"/category/clothing",label:"Clothing",sub:[["Sarees","sarees"],["Co-ord Sets","co-ord-sets"],["Kurta Sets","kurta-sets"],["Lehengas","lehengas"]]},{href:"/category/jewellery",label:"Jewellery",sub:[["Earrings & Jhumkas","earrings"],["Necklace Sets","necklace-sets"],["Bangles","bangles"]]},{href:"/category/new-arrivals",label:"New In",tag:"New"},{href:"/category/festive-edit",label:"Festive Edit"},{href:"/category/under-999",label:"Under ₹999",tag:"Sale"},{href:"/blog",label:"Style Notes"}];
export default function Header(){
 const {cartCount,wishlist,setDrawer}=useStore();const router=useRouter();const [open,setOpen]=useState(false);const [q,setQ]=useState("");const [searchOpen,setSearchOpen]=useState(false);const [stuck,setStuck]=useState(false);
 useEffect(()=>{const on=()=>setStuck(window.scrollY>8);on();window.addEventListener("scroll",on,{passive:true});return()=>window.removeEventListener("scroll",on);},[]);
 useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow="";};},[open]);
 const submit=(e:React.FormEvent)=>{e.preventDefault();if(q.trim()){router.push("/search?q="+encodeURIComponent(q.trim()));setSearchOpen(false);setOpen(false);}};
 return <>
 <div className="announce"><div className="announce-inner"><ul className="announce-l"><li>♧ Cash on Delivery available</li><li>✦ Free shipping above ₹999</li><li>↺ Easy 7-day returns</li></ul><p className="announce-c">The Festive Drop is live — up to 30% off</p><div className="announce-r"><span>Follow us</span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a></div></div></div>
 <header className={"header reference-header "+(stuck?"stuck":"")}><div className="header-inner">
 <button className="icon-btn only-mobile" onClick={()=>setOpen(true)} aria-label="Open menu">☰</button>
 <Link href="/" className="logo" aria-label="Zarika home"><img src={logo} alt="Zarika" /></Link>
 <nav className="nav" aria-label="Primary">{nav.map(n=><div key={n.href} className="nav-item"><Link href={n.href}>{n.label}{n.tag&&<span className={"tag tag-"+n.tag.toLowerCase()}>{n.tag}</span>}{n.sub&&<span className="chev">⌄</span>}</Link>{n.sub&&<div className="dropdown">{n.sub.map(([label,slug])=><Link key={slug} href={"/category/"+slug}>{label}</Link>)}<Link href={n.href} className="all">Shop all ↗</Link></div>}</div>)}</nav>
 <div className="header-actions"><form className="search-d" onSubmit={submit}><span>⌕</span><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search sarees, co-ords, jhumkas…" aria-label="Search"/></form><button className="icon-btn only-mobile-lg" onClick={()=>setSearchOpen(x=>!x)} aria-label="Search">⌕</button><Link className="icon-btn hide-sm" href="/account" aria-label="Account">♙</Link><Link className="icon-btn" href="/wishlist" aria-label="Wishlist">♡{wishlist.length>0&&<span className="dot">{wishlist.length}</span>}</Link><button className="icon-btn" onClick={()=>setDrawer(true)} aria-label="Open cart">♧{cartCount>0&&<span className="dot">{cartCount}</span>}</button></div></div>
 {searchOpen&&<form className="search-m" onSubmit={submit}><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Search sarees, co-ords, jhumkas…"/><button>Search</button></form>}</header>
 {open&&<div className="scrim" onClick={()=>setOpen(false)}/>}<aside className={"mnav "+(open?"open":"")} aria-hidden={!open}><div className="mnav-head"><img src={logo} alt="Zarika"/><button className="icon-btn" onClick={()=>setOpen(false)} aria-label="Close menu">×</button></div><form className="search-m" onSubmit={submit}><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search Zarika…"/><button>Search</button></form>{nav.map(n=><div key={n.href} className="mnav-item"><Link href={n.href} onClick={()=>setOpen(false)}>{n.label} ↗</Link>{n.sub?.map(([label,slug])=><Link key={slug} href={"/category/"+slug} onClick={()=>setOpen(false)}>{label}</Link>)}</div>)}</aside>
 </>;
}