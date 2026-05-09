import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getHealth = async (req: AuthRequest, res: Response) => {
  try {
    // Check DB connection
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      status: 'healthy',
      database: 'connected',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      services: {
        ai: 'operational',
        bankSync: 'operational (mock)'
      }
    });
  } catch (error) {
    res.status(503).json({ status: 'unhealthy', database: 'disconnected' });
  }
};
