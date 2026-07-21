import type { MetadataRoute } from "next";
import { categories, products } from "@/lib/demo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  return [
    { url: base },
    ...categories.map((category) => ({ url: `${base}/category/${category.slug}` })),
    ...products.map((product) => ({ url: `${base}/product/${product.slug}` }))
  ];
}
