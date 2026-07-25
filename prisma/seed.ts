import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const services = [
    { name: "Exquisite Decoration", slug: "decoration", category: "DECORATION", description: "Bespoke floral arrangements." },
    { name: "Ambient Lighting", slug: "lighting", category: "LIGHTING", description: "Cinematic illumination." },
    { name: "Premium Structures", slug: "tent-house", category: "TENT_HOUSE", description: "Luxury marquees." },
    { name: "Culinary Excellence", slug: "buffet", category: "BUFFET", description: "Gourmet catering." },
    { name: "Live Orchestra", slug: "orchestra", category: "ORCHESTRA", description: "Musical performances." },
    { name: "Curated Partners", slug: "other-vendors", category: "OTHER", description: "Elite photographers and entertainers." }
  ];

  console.log("Seeding database...");
  for (const s of services) {
    // upsert means "update if exists, otherwise create" - so you can run this safely multiple times
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: {},
      // @ts-ignore
      create: s, 
    });
  }
  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });