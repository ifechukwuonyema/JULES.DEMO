import { Router } from 'express';
import { generateSpendPlan } from '../controllers/aiController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.use(authenticate);
router.post('/generate-plan', generateSpendPlan);

export default router;
