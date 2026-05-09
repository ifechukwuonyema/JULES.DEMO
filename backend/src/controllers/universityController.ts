import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthRequest } from '../middleware/auth.js';

const prisma = new PrismaClient();

export const getUniversities = async (req: Request, res: Response) => {
  try {
    const universities = await prisma.university.findMany({
      include: { _count: { select: { merchants: true, items: true } } }
    });
    res.json(universities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching universities' });
  }
};

export const getUniversityItems = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { category } = req.query;

  try {
    const items = await prisma.item.findMany({
      where: {
        universityId: Array.isArray(id) ? id[0] : id,
        ...(category ? { category: Array.isArray(category) ? String(category[0]) : String(category) } : {}),
      },
      include: { merchant: true },
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
};

export const upsertItem = async (req: AuthRequest, res: Response) => {
  const { name, price, category, universityId, merchantId, id } = req.body;

  // Basic security check: Only MERCHANTS or ADMINS can add items
  if (req.user?.role !== 'MERCHANT' && req.user?.role !== 'ADMIN') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  try {
    const item = id
      ? await prisma.item.update({ where: { id }, data: { name, price, category } })
      : await prisma.item.create({
          data: { name, price, category, universityId, merchantId }
        });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error saving item' });
  }
};
