import { PrismaClient } from '@prisma/client';
import { Decimal } from 'decimal.js';

const prisma = new PrismaClient();

async function main() {
  const universities = [
    'University of Lagos (UNILAG)',
    'University of Ibadan (UI)',
    'Obafemi Awolowo University (OAU)',
    'University of Benin (UNIBEN)',
    'University of Nigeria, Nsukka (UNN)',
    'Ahmadu Bello University (ABU)',
    'Lagos State University (LASU)',
    'Bayero University Kano (BUK)',
    'Covenant University',
    'Afe Babalola University (ABUAD)',
    'Pan-Atlantic University',
    'Babcock University',
    'Bowen University',
    'Landmark University',
    'Lead City University',
    'Nile University of Nigeria',
    'Veritas University',
    'Caleb University',
    'Baze University',
  ];

  for (const name of universities) {
    const uni = await prisma.university.upsert({
      where: { name },
      update: {},
      create: { name },
    });

    const merchant = await prisma.merchant.create({
      data: {
        name: `${name} Cafeteria`,
        universityId: uni.id,
      },
    });

    // Seed student-centric categories
    const categories = [
      { name: "Ramen-tier Groceries", price: 200 },
      { name: "Standard Jollof", price: 800 },
      { name: "Engineering Textbook (Used)", price: 4500 },
      { name: "Lab Manual", price: 1200 },
      { name: "Quick Haircut", price: 500 },
      { name: "Barbershop Special", price: 2500 },
      { name: "thrifted T-Shirt", price: 1500 },
    ];

    for (const cat of categories) {
      await prisma.item.create({
        data: {
          name: cat.name,
          price: new Decimal(cat.price),
          category: cat.name.includes("Rice") || cat.name.includes("Jollof") ? "Cafeteria" : "General",
          universityId: uni.id,
          merchantId: merchant.id,
        },
      });
    }
  }

  console.log('Seeding completed with Decimal precision.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
