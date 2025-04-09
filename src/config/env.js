import { config } from 'dotenv';

config();

export const { PORT, SIGNING_SECRET, CLERK_PUBLISHABLE_KEY, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } = process.env;
