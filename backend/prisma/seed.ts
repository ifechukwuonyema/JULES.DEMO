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

  const MOCK_PHOTOS = {
    "Cafeteria": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400",
    "Bookstore": "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?auto=format&fit=crop&q=80&w=400",
    "Fashion": "https://images.unsplash.com/photo-1523381235312-da59b932166a?auto=format&fit=crop&q=80&w=400",
    "General": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=400",
    "Hair": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400",
  };

  for (const name of universities) {
    const uni = await prisma.university.upsert({
      where: { name },
      update: {},
      create: { name },
    });

    const merchant = await prisma.merchant.create({
      data: {
        name: `${name} Marketplace`,
        universityId: uni.id,
      },
    });

    const items = [
      { name: "Salo Jollof Rice", price: 1200, category: "Cafeteria", img: MOCK_PHOTOS.Cafeteria },
      { name: "Engineering Lab Manual", price: 2500, category: "Bookstore", img: MOCK_PHOTOS.Bookstore },
      { name: "Vintage Uni Hoodie", price: 8500, category: "Fashion", img: MOCK_PHOTOS.Fashion },
      { name: "Campus Fade Haircut", price: 1500, category: "Hair and Beauty", img: MOCK_PHOTOS.Hair },
      { name: "Indomie Survival Pack", price: 500, category: "Cafeteria", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=400" },
    ];

    for (const item of items) {
      await prisma.item.create({
        data: {
          name: item.name,
          price: new Decimal(item.price),
          category: item.category,
          imageUrl: item.img,
          universityId: uni.id,
          merchantId: merchant.id,
        },
      });
    }
  }

  console.log('Seeding completed with mock photos.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
