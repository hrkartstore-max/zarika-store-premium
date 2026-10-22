import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./reference.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {StoreProvider} from "@/lib/store";
export const metadata:Metadata={
 title:{default:"Zarika — Sarees, Co-ords & Jewellery Seen on Instagram",template:"%s | Zarika"},
 description:"Shop sarees, kurta sets, co-ords, lehengas and jhumkas from Zarika. Cash on Delivery, easy 7-day returns and pan-India shipping.",
 metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"https://zarika.shipauk.com"),
 openGraph:{siteName:"Zarika",type:"website",title:"Zarika — Sarees, Co-ords & Jewellery Seen on Instagram",description:"Sarees, co-ords, festive clothing and jewellery, styled on Instagram and delivered across India."}
};
export const viewport:Viewport={themeColor:"#8b1e3f",width:"device-width",initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><StoreProvider><Header/><main>{children}</main><Footer/></StoreProvider></body></html>}