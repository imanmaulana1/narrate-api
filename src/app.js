import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';

import webhookRoutes from './features/webhook/webhook.route.js';

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(compression());
app.use(helmet());
app.use(express.json());

app.use('/api/v1', webhookRoutes);

// ROUTE LAINNYA NANTI

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
