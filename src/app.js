import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';

import { PORT } from './config/env.js';

import webhookRoutes from './features/webhook/webhook.route.js';
import tagRoutes from './features/tag/tag.route.js';

import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

import { clerkMiddleware } from '@clerk/express';
import { verifyToken } from './middlewares/auth.middleware.js';

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(clerkMiddleware());

app.use('/test-token', verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'User verified',
  });
});

app.use('/api/v1/webhooks', webhookRoutes);
app.use('/api/v1/tags', tagRoutes);

app.use(errorMiddleware);

// ROUTE LAINNYA NANTI

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
