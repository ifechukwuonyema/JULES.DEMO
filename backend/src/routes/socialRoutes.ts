import { Router } from 'express';
import { sharePlan, getFeed, upvotePlan, getLeaderboard } from '../controllers/socialController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.use(authenticate);
router.post('/share', sharePlan);
router.get('/feed', getFeed);
router.post('/:id/upvote', upvotePlan);
router.get('/leaderboard', getLeaderboard);

export default router;
