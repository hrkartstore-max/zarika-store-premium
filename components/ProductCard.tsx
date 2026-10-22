"use client";

import Link from "next/link";
import { Product, money } from "@/lib/products";
import { useStore } from "@/lib/store";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const saved = wishlist.includes(product.slug);
  const discount = product.compareAt && product.compareAt > product.price
    ? Math.round((1 - product.price / product.compareAt) * 100)
    : 0;

  return (
    <article className="product-card premium-product-card">
      <div className="product-image premium-product-image">
        <Link href={"/product/" + product.slug} aria-label={"View " + product.name}>
          <img src={product.image} alt={product.imageAlt || product.name} loading="lazy" />
        </Link>
        <div className="product-card-topline">
          {product.badge ? <span className="product-badge">{product.badge}</span> : discount > 0 ? <span className="product-badge sale-badge">{discount}% OFF</span> : <span />}
          <button className={saved ? "heart saved" : "heart"} onClick={() => toggleWishlist(product.slug)} aria-label={saved ? "Remove from wishlist" : "Add to wishlist"} aria-pressed={saved}>{saved ? "♥" : "♡"}</button>
        </div>
        <button className="quick-add premium-quick-add" onClick={() => addToCart(product.slug)}><span>＋</span> Quick add <span aria-hidden="true">↗</span></button>
        <span className="product-image-caption">MADE FOR YOUR MOMENTS</span>
      </div>
      <div className="product-info premium-product-info">
        <div className="product-meta-row"><p className="product-category">{product.category}</p><span className="product-rating" aria-label="Customer favourite">✦ <span>Customer favourite</span></span></div>
        <Link className="product-name premium-product-name" href={"/product/" + product.slug}>{product.name}</Link>
        <div className="price-line premium-price-line"><b>{money(product.price)}</b>{product.compareAt && product.compareAt > product.price && <><s>{money(product.compareAt)}</s><span className="discount-copy">Save {discount}%</span></>}</div>
        <div className="product-card-footer"><span><i aria-hidden="true">✓</i> Easy returns</span><span><i aria-hidden="true">♡</i> Thoughtfully picked</span></div>
      </div>
    </article>
  );
}
