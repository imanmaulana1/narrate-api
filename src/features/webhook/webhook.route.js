import express from 'express';
import { verifyClerkWebhook } from '../../middlewares/clerk-webhook.middleware.js';
import { handleWebhook } from './webhook.controller.js';
import bodyParser from 'body-parser';

const router = express.Router();

router.post('/webhooks',  bodyParser.raw({ type: 'application/json' }), verifyClerkWebhook, handleWebhook);

export default router;
