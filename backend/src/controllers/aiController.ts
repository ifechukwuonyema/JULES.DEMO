import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
import { PrismaClient } from '@prisma/client';
import { Decimal } from 'decimal.js';

const prisma = new PrismaClient();

export const generateSpendPlan = async (req: AuthRequest, res: Response) => {
  const { allowance, tier, universityId } = req.body;

  try {
    const items = await prisma.item.findMany({
      where: { universityId, deletedAt: null },
    });

    let planItems: any[] = [];
    let totalCost = new Decimal(0);
    const allowanceDec = new Decimal(allowance);

    const categories = ["Cafeteria", "Bookstore", "General"];

    for (const cat of categories) {
        const catItems = items.filter(i => i.category === cat);
        if (catItems.length > 0) {
            catItems.sort((a, b) =>
                tier === 'LAPO'
                    ? new Decimal(a.price).minus(new Decimal(b.price)).toNumber()
                    : new Decimal(b.price).minus(new Decimal(a.price)).toNumber()
            );

            const selected = catItems[0];
            if (totalCost.plus(selected.price).lte(allowanceDec)) {
                planItems.push(selected);
                totalCost = totalCost.plus(selected.price);
            }
        }
    }

    const savings = allowanceDec.minus(totalCost);
    const advice = `Based on your ${tier} lifestyle and weekly allowance of ₦${allowance}, we recommend prioritizing these essential categories. This plan saves you ₦${savings.toString()} for emergencies.`;

    res.json({
      planItems,
      totalCost: totalCost.toString(),
      savings: savings.toString(),
      advice,
      tier,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error generating spend plan' });
  }
};
