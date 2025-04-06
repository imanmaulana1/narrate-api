import { config } from 'dotenv';

config();

export const { PORT, SIGNING_SECRET, CLERK_PUBLISHABLE_KEY } = process.env;
