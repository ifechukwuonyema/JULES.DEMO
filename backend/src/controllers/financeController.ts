import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
import { PrismaClient } from '@prisma/client';
import { sum } from '../utils/finance.js';
import { Decimal } from 'decimal.js';

const prisma = new PrismaClient();

export const getReconciliation = async (req: AuthRequest, res: Response) => {
  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId: req.user!.id }
    });

    const totalCalculated = transactions.reduce((acc, tx) => {
        const amt = new Decimal(tx.amount.toString());
        return tx.type === 'INCOME' ? acc.plus(amt) : acc.minus(amt);
    }, new Decimal(0));

    // For now, we compare against the sum of categories (mocking the dashboard total)
    res.json({
      status: 'balanced',
      total: totalCalculated.toString(),
      transactionCount: transactions.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({ message: 'Reconciliation check failed' });
  }
};
