import { Router } from 'express';
import { getTransactions, createTransaction } from '../controllers/transactionController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.use(authenticate);
router.get('/', getTransactions);
router.post('/', createTransaction);

export default router;
