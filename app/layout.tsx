import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Bodoni_Moda, Figtree } from "next/font/google";
import "./reference.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import {StoreProvider} from "@/lib/store";
import {site,getCanonicalUrl} from "@/lib/site";
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-bodoni", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-figtree", display: "swap" });
export const metadata:Metadata={
 title:{default:"Zarika — Sarees, Co-ords & Jewellery Seen on Instagram",template:"%s | Zarika"},
 description:"Shop sarees, kurta sets, co-ords, lehengas and jhumkas from Zarika. Cash on Delivery, easy 7-day returns and pan-India shipping.",
 metadataBase:new URL(site.url),
 alternates:{canonical:getCanonicalUrl("/")},
 openGraph:{siteName:"Zarika",type:"website",title:"Zarika — Sarees, Co-ords & Jewellery Seen on Instagram",description:"Sarees, co-ords, festive clothing and jewellery, styled on Instagram and delivered across India."}
};
export const viewport:Viewport={themeColor:"#8b1e3f",width:"device-width",initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}) {
 const organizationJsonLd = {"@context":"https://schema.org","@type":"Organization","name":site.name,"url":site.url,"sameAs":[site.instagram]};
 return <html lang="en-IN" className={`${bodoni.variable} ${figtree.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd).replace(/</g,"\\u003c")}}/><StoreProvider><Header/><main>{children}</main><Footer/><CartDrawer/></StoreProvider></body></html>;
}