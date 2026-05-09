import { Router } from 'express';
import { getUniversities, getUniversityItems, upsertItem } from '../controllers/universityController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.get('/', getUniversities);
router.get('/:id/items', getUniversityItems);
router.post('/items', authenticate, upsertItem);

export default router;
