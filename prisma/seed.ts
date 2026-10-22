import { PrismaClient, ProductStatus } from "@prisma/client";
import { categories, products } from "../lib/products";

const prisma = new PrismaClient();
const categoryAliases: Record<string, string[]> = {
  "Sarees": ["sarees", "clothing", "new-arrivals"],
  "Co-ord Sets": ["co-ord-sets", "clothing", "new-arrivals"],
  "Kurta Sets": ["kurta-sets", "clothing", "new-arrivals"],
  "Lehengas": ["lehengas", "festive-edit", "clothing", "new-arrivals"],
  "Jewellery": ["jewellery", "new-arrivals"],
};

async function main() {
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: { name: category.name, description: category.note, imageUrl: category.image, isActive: true },
      create: { slug: category.slug, name: category.name, description: category.note, imageUrl: category.image },
    });
  }

  for (const item of products) {
    const matching = new Set(categoryAliases[item.category] ?? []);
    if (item.price < 1000) matching.add("under-999");
    if (/jhumka|earring/i.test(item.name)) matching.add("earrings");
    if (/necklace|choker/i.test(item.name)) matching.add("necklace-sets");
    if (/bangle|kada/i.test(item.name)) matching.add("bangles");
    if (["Sarees", "Lehengas"].includes(item.category)) matching.add("festive-edit");

    const row = await prisma.product.upsert({
      where: { slug: item.slug },
      update: {
        name: item.name, description: item.description, price: item.price,
        compareAtPrice: item.compareAt, color: item.color, status: ProductStatus.PUBLISHED,
        publishedAt: new Date(), stock: 10, countryOfOrigin: "India",
      },
      create: {
        slug: item.slug, name: item.name, description: item.description,
        price: item.price, compareAtPrice: item.compareAt, color: item.color,
        status: ProductStatus.PUBLISHED, publishedAt: new Date(), stock: 10,
        countryOfOrigin: "India",
      },
    });

    await prisma.productImage.deleteMany({ where: { productId: row.id } });
    await prisma.productImage.create({ data: { productId: row.id, url: item.image, alt: item.imageAlt, sortOrder: 0 } });
    await prisma.productCategory.deleteMany({ where: { productId: row.id } });
    for (const slug of matching) {
      const category = await prisma.category.findUnique({ where: { slug } });
      if (category) await prisma.productCategory.create({ data: { productId: row.id, categoryId: category.id } });
    }
    if (item.badge) {
      await prisma.productBadge.upsert({
        where: { productId_label: { productId: row.id, label: item.badge } },
        update: {},
        create: { productId: row.id, label: item.badge },
      });
    }
  }
  console.info(`Seeded ${categories.length} categories and ${products.length} products.`);
}

main().catch((error) => {
  console.error("Database seed failed", error);
  process.exitCode = 1;
}).finally(async () => {
  await prisma.$disconnect();
});
