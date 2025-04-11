import { Router } from 'express';
import {
  optionalAuth,
  requireAuth,
} from '../../middlewares/auth.middleware.js';
import {
  createArticleHandler,
  getRecentArticlesHandler,
  getFollowingArticlesHandler,
} from './article.controller.js';

const router = Router();

// Recent articles
router.get('/', optionalAuth, getRecentArticlesHandler);

// Feed following articles
router.get('/following', requireAuth, getFollowingArticlesHandler);

// List all draft
router.get('/drafts', requireAuth);

// Create
router.post('/', requireAuth, createArticleHandler);

export default router;
