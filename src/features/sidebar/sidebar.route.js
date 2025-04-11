import { Router } from 'express';
import { optionalAuth } from '../../middlewares/auth.middleware.js';
import { getSidebar } from './sidebar.controller.js';

const router = Router();

router.get('/', optionalAuth, getSidebar);

export default router;
