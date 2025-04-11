import { clerkMiddleware } from '@clerk/express';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';

import { PORT } from './config/env.js';

import webhookRoutes from './features/webhook/webhook.route.js';
import tagRoutes from './features/tag/tag.route.js';
import articleRoutes from './features/article/article.route.js';
import sidebarRoutes from './features/sidebar/sidebar.route.js';

import errorHandler from './middlewares/error.middleware.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(clerkMiddleware());

app.use('/api/v1/webhooks', webhookRoutes);
app.use('/api/v1/tags', tagRoutes);
app.use('/api/v1/articles', articleRoutes);
app.use('/api/v1/sidebar', sidebarRoutes);

app.use(errorHandler);

// ROUTE LAINNYA NANTI

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
