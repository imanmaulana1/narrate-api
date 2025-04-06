import { Router } from 'express';
import { verifyClerkWebhook } from '../../middlewares/clerk.middleware.js';
import { handleWebhook } from './webhook.controller.js';
import bodyParser from 'body-parser';

const router = Router();

router.post(
  '/',
  bodyParser.raw({ type: 'application/json' }),
  verifyClerkWebhook,
  handleWebhook
);

export default router;
