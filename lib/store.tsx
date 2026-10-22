"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
type CartLine = { slug:string; quantity:number };
type StoreContextValue = { cart:CartLine[]; wishlist:string[]; addToCart:(slug:string)=>void; removeFromCart:(slug:string)=>void; setQuantity:(slug:string,quantity:number)=>void; toggleWishlist:(slug:string)=>void; clearCart:()=>void; cartCount:number };
const StoreContext = createContext<StoreContextValue | null>(null);
export function StoreProvider({children}:{children:React.ReactNode}) {
  const [cart,setCart] = useState<CartLine[]>([]);
  const [wishlist,setWishlist] = useState<string[]>([]);
  const [ready,setReady] = useState(false);
  useEffect(()=>{try{setCart(JSON.parse(localStorage.getItem("zarika-cart")||"[]"));setWishlist(JSON.parse(localStorage.getItem("zarika-wishlist")||"[]"));}catch{}setReady(true);},[]);
  useEffect(()=>{if(ready)localStorage.setItem("zarika-cart",JSON.stringify(cart));},[cart,ready]);
  useEffect(()=>{if(ready)localStorage.setItem("zarika-wishlist",JSON.stringify(wishlist));},[wishlist,ready]);
  const value = useMemo<Omit<StoreContextValue,"cartCount">>(()=>({
    cart,wishlist,
    addToCart:(slug)=>setCart(old=>{const line=old.find(x=>x.slug===slug);return line?old.map(x=>x.slug===slug?{...x,quantity:x.quantity+1}:x):[...old,{slug,quantity:1}]}),
    removeFromCart:(slug)=>setCart(old=>old.filter(x=>x.slug!==slug)),
    setQuantity:(slug,quantity)=>setCart(old=>quantity<1?old.filter(x=>x.slug!==slug):old.map(x=>x.slug===slug?{...x,quantity}:x)),
    toggleWishlist:(slug)=>setWishlist(old=>old.includes(slug)?old.filter(x=>x!==slug):[...old,slug]),
    clearCart:()=>setCart([])
  }),[cart,wishlist]);
  return <StoreContext.Provider value={{...value,cartCount:cart.reduce((sum,x)=>sum+x.quantity,0)}}>{children}</StoreContext.Provider>;
}
export function useStore(){const value=useContext(StoreContext);if(!value)throw new Error("useStore must be used inside StoreProvider");return value;}