"use client";
import {useMemo,useState} from "react";
import ProductCard from "@/components/ProductCard";
import {Product} from "@/lib/products";
type SortMode="featured"|"price-low"|"price-high"|"name";
export default function CollectionControls({products}:{products:Product[]}){
 const [sort,setSort]=useState<SortMode>("featured");
 const [filterOpen,setFilterOpen]=useState(false);
 const [maxPrice,setMaxPrice]=useState(10000);
 const [saleOnly,setSaleOnly]=useState(false);
 const [selectedColors,setSelectedColors]=useState<string[]>([]);
 const colors=useMemo(()=>Array.from(new Set(products.map(p=>p.color))).sort(),[products]);
 const visible=useMemo(()=>products.filter(p=>p.price<=maxPrice&&(!saleOnly||Boolean(p.compareAt&&p.compareAt>p.price))&&(!selectedColors.length||selectedColors.includes(p.color))).sort((a,b)=>sort==="price-low"?a.price-b.price:sort==="price-high"?b.price-a.price:sort==="name"?a.name.localeCompare(b.name):0),[products,sort,maxPrice,saleOnly,selectedColors]);
 const toggleColor=(color:string)=>setSelectedColors(current=>current.includes(color)?current.filter(c=>c!==color):[...current,color]);
 const clear=()=>{setMaxPrice(10000);setSaleOnly(false);setSelectedColors([]);setSort("featured")};
 return <section className="collection-controls" aria-label="Collection products">
  <div className="collection-toolbar"><div><b>{visible.length}</b><span> styles to love</span></div><div className="collection-toolbar-actions"><button type="button" className={filterOpen?"collection-filter-button active":"collection-filter-button"} onClick={()=>setFilterOpen(v=>!v)} aria-expanded={filterOpen}>☷ Filters {filterOpen?"−":"＋"}</button><label className="collection-sort"><span>Sort by</span><select value={sort} onChange={e=>setSort(e.target.value as SortMode)} aria-label="Sort products"><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name: A–Z</option></select></label></div></div>
  {filterOpen&&<div className="collection-filter-panel"><div className="collection-filter-heading"><div><span className="eyebrow">Refine your edit</span><h2>Find your favourite</h2></div><button type="button" onClick={clear}>Clear all ↺</button></div><div className="collection-filter-grid"><div className="collection-filter-group"><label htmlFor="collection-price">Maximum price <b>₹{maxPrice.toLocaleString("en-IN")}</b></label><input id="collection-price" type="range" min="500" max="10000" step="250" value={maxPrice} onChange={e=>setMaxPrice(Number(e.target.value))}/><div className="collection-range-labels"><span>₹500</span><span>₹10,000+</span></div></div><div className="collection-filter-group"><span className="collection-filter-label">Colour</span><div className="collection-color-options">{colors.map(color=><button key={color} type="button" onClick={()=>toggleColor(color)} className={selectedColors.includes(color)?"selected":""} aria-pressed={selectedColors.includes(color)}>{color}</button>)}</div></div><label className="collection-sale-toggle"><input type="checkbox" checked={saleOnly} onChange={e=>setSaleOnly(e.target.checked)}/><span>Only show discounted styles</span></label></div></div>}
  {(selectedColors.length>0||saleOnly||maxPrice<10000)&&<div className="collection-active-filters">{selectedColors.map(color=><button key={color} onClick={()=>toggleColor(color)} type="button">{color} ×</button>)}{saleOnly&&<button type="button" onClick={()=>setSaleOnly(false)}>On sale ×</button>}{maxPrice<10000&&<button type="button" onClick={()=>setMaxPrice(10000)}>Up to ₹{maxPrice.toLocaleString("en-IN")} ×</button>}<button type="button" className="collection-clear-inline" onClick={clear}>Clear filters</button></div>}
  {visible.length?<div className="product-grid">{visible.map(p=><ProductCard key={p.slug} product={p}/>)}</div>:<div className="empty-state collection-empty"><h2>No styles match those filters.</h2><p>Try a higher price limit or clear a filter to explore the full collection.</p><button className="button button-dark" type="button" onClick={clear}>Clear all filters</button></div>}
 </section>
}