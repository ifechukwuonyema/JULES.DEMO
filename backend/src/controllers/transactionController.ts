import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTransactions = async (req: AuthRequest, res: Response) => {
  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId: req.user?.id },
      orderBy: { date: 'desc' },
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions' });
  }
};

export const createTransaction = async (req: AuthRequest, res: Response) => {
  const { amount, type, category, description } = req.body;
  try {
    const transaction = await prisma.transaction.create({
      data: {
        amount,
        type,
        category,
        description,
        userId: req.user!.id,
      },
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Error creating transaction' });
  }
};
