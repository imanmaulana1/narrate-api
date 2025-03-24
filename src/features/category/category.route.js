import { Router } from 'express';
import { fetchCategories } from './category.controller.js';

const router = Router();

router.get('/', fetchCategories);

export default router;
