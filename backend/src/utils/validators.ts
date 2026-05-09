import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2),
  universityId: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const transactionSchema = z.object({
  amount: z.number().positive(),
  type: z.enum(['INCOME', 'EXPENSE']),
  category: z.string(),
  description: z.string().optional(),
});

export const spendPlanSchema = z.object({
  allowance: z.number().positive(),
  tier: z.enum(['LAPO', 'YANGA', 'COOL_KIDS', 'NEPO', 'CUSTOM']),
  universityId: z.string(),
  spendingCycle: z.string().optional(),
});
