import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const sharePlan = async (req: AuthRequest, res: Response) => {
  const { title, content } = req.body;
  try {
    const sharedPlan = await prisma.sharedPlan.create({
      data: {
        title,
        content,
        userId: req.user!.id,
      },
    });
    res.status(201).json(sharedPlan);
  } catch (error) {
    res.status(500).json({ message: 'Error sharing plan' });
  }
};

export const getFeed = async (req: AuthRequest, res: Response) => {
  try {
    const plans = await prisma.sharedPlan.findMany({
      include: {
        user: { select: { name: true, university: { select: { name: true } } } },
        _count: { select: { upvotes: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feed' });
  }
};

export const upvotePlan = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: 'Missing plan ID' });

  try {
    await prisma.upvote.upsert({
      where: {
        userId_sharedPlanId: {
          userId: req.user!.id,
          sharedPlanId: Array.isArray(id) ? id[0] : id,
        },
      },
      update: {},
      create: {
        userId: req.user!.id,
        sharedPlanId: Array.isArray(id) ? id[0] : id,
      },
    });
    res.json({ message: 'Upvoted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error upvoting' });
  }
};

export const getLeaderboard = async (req: AuthRequest, res: Response) => {
  try {
    const topPlans = await prisma.sharedPlan.findMany({
      include: {
        user: { select: { name: true } },
        _count: { select: { upvotes: true } },
      },
      orderBy: {
        upvotes: { _count: 'desc' },
      },
      take: 10,
    });
    res.json(topPlans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching leaderboard' });
  }
};
