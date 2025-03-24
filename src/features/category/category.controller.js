import expressAsyncHandler from 'express-async-handler';
import { fetchCategoriesService } from './category.service.js';

export const fetchCategories = expressAsyncHandler(async (req, res) => {
  const limitValue = parseInt(req.query.limit) || 0;

  const categories = await fetchCategoriesService(limitValue);

  res.status(200).json({
    success: true,
    message: 'Categories fetched successfully',
    data: categories,
  });
});
