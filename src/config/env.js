import { config } from 'dotenv';

config();

export const { PORT, SIGNING_SECRET, CLERK_PUBLISHABLE_KEY, BLOB_READ_WRITE_TOKEN } = process.env;
