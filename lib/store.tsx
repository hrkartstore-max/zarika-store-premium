"use client";
import {createContext,useContext,useEffect,useMemo,useState} from "react";
type CartLine={slug:string;quantity:number;size?:string};
type StoreContextValue={cart:CartLine[];wishlist:string[];addToCart:(slug:string,quantity?:number,size?:string)=>void;removeFromCart:(slug:string,size?:string)=>void;setQuantity:(slug:string,quantity:number,size?:string)=>void;toggleWishlist:(slug:string)=>void;clearCart:()=>void;cartCount:number;drawerOpen:boolean;setDrawer:(open:boolean)=>void};
const StoreContext=createContext<StoreContextValue|null>(null);
export function StoreProvider({children}:{children:React.ReactNode}){
 const [cart,setCart]=useState<CartLine[]>([]);const [wishlist,setWishlist]=useState<string[]>([]);const [ready,setReady]=useState(false);const [drawerOpen,setDrawer]=useState(false);
 useEffect(()=>{try{setCart(JSON.parse(localStorage.getItem("zarika-cart")||"[]"));setWishlist(JSON.parse(localStorage.getItem("zarika-wishlist")||"[]"));}catch{}setReady(true);},[]);
 useEffect(()=>{if(ready)localStorage.setItem("zarika-cart",JSON.stringify(cart));},[cart,ready]);
 useEffect(()=>{if(ready)localStorage.setItem("zarika-wishlist",JSON.stringify(wishlist));},[wishlist,ready]);
 const value=useMemo<Omit<StoreContextValue,"cartCount"|"drawerOpen"|"setDrawer">>(()=>({
 cart,wishlist,
 addToCart:(slug,quantity=1,size)=>{const safeQuantity=Math.max(1,Math.min(10,Math.floor(quantity)||1));setCart(old=>{const line=old.find(x=>x.slug===slug&&x.size===size);return line?old.map(x=>x.slug===slug&&x.size===size?{...x,quantity:Math.min(99,x.quantity+safeQuantity)}:x):[...old,{slug,quantity:safeQuantity,...(size?{size}:{})}]});setDrawer(true);},
 removeFromCart:(slug,size)=>setCart(old=>old.filter(x=>!(x.slug===slug&&x.size===size))),
 setQuantity:(slug,quantity,size)=>setCart(old=>quantity<1?old.filter(x=>!(x.slug===slug&&x.size===size)):old.map(x=>x.slug===slug&&x.size===size?{...x,quantity:Math.max(1,Math.min(99,Math.floor(quantity)||1))}:x)),
 toggleWishlist:(slug)=>setWishlist(old=>old.includes(slug)?old.filter(x=>x!==slug):[...old,slug]),
 clearCart:()=>setCart([])
 }),[cart,wishlist]);
 return <StoreContext.Provider value={{...value,cartCount:cart.reduce((sum,x)=>sum+x.quantity,0),drawerOpen,setDrawer}}>{children}</StoreContext.Provider>;
}
export function useStore(){const value=useContext(StoreContext);if(!value)throw new Error("useStore must be used inside StoreProvider");return value;}