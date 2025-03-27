import { Router } from 'express';
import { fetchTags } from './tag.controller.js';

const router = Router();

router.get('/', fetchTags);

export default router;
