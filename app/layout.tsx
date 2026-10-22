import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StoreProvider } from "@/lib/store";
export const metadata:Metadata={
 title:{default:"Zarika — Sarees, Co-ords & Jewellery",template:"%s | Zarika"},
 description:"Discover sarees, co-ord sets, kurta sets, lehengas and jewellery at Zarika. Occasion-ready style with a modern Indian soul.",
 metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"https://zarika-store-premium.vercel.app"),
 openGraph:{title:"Zarika — Style that feels like you",description:"Indian occasion wear and everyday favourites.",type:"website"}
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#7b2340"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><StoreProvider><Header/><main>{children}</main><Footer/></StoreProvider></body></html>}