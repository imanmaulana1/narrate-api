import asyncHandler from 'express-async-handler';

import { Router } from 'express';
import { verifyToken } from '../../middlewares/auth.middleware.js';
import { createArticleController } from './article.controller.js';

const router = Router();

// List all published
router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    res.send('Articles');
  })
);

// List all draft
router.get('/drafts', verifyToken);

// Create
router.post('/', verifyToken, createArticleController);

export default router;
