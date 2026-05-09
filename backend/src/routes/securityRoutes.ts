import { Router } from 'express';
import { forgotPassword, resetPassword, verifyEmail } from '../controllers/securityController.js';

const router = Router();

router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/verify-email', verifyEmail);

export default router;
