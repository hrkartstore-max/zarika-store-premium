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
    <article className="product-card zarika-card">
      <div className="product-image zarika-card-image">
        <Link href={"/product/" + product.slug} aria-label={"View " + product.name}>
          <img src={product.image} alt={product.imageAlt || product.name} loading="lazy" />
        </Link>
        {product.badge && <span className="zarika-badge">{product.badge}</span>}
        {!product.badge && discount > 0 && <span className="zarika-badge zarika-discount">{discount}% off</span>}
        <button className={saved ? "heart saved zarika-heart" : "heart zarika-heart"} onClick={() => toggleWishlist(product.slug)} aria-label={saved ? "Remove from wishlist" : "Add to wishlist"} aria-pressed={saved}>{saved ? "♥" : "♡"}</button>
        <button className="zarika-add" onClick={() => addToCart(product.slug)}>Add to bag <span aria-hidden="true">＋</span></button>
      </div>
      <div className="product-info zarika-card-info">
        <p className="zarika-category">{product.category}</p>
        <Link className="product-name zarika-product-name" href={"/product/" + product.slug}>{product.name}</Link>
        <div className="zarika-price"><b>{money(product.price)}</b>{product.compareAt && product.compareAt > product.price && <><s>{money(product.compareAt)}</s><span>{discount}% off</span></>}</div>
      </div>
    </article>
  );
}
