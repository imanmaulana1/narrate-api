import { config } from 'dotenv';

config();

export const { PORT, SIGNING_SECRET } = process.env;
