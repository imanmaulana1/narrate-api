import expressAsyncHandler from 'express-async-handler';
import { fetchTagsService } from './tag.service.js';

export const fetchTags = expressAsyncHandler(async (req, res) => {
  const { limit, search } = req.query;

  const limitValue = parseInt(limit) || undefined;
  const searchValue = search || undefined;

  const data = await fetchTagsService(limitValue, searchValue);

  res.status(200).json({
    success: true,
    message: 'Tags fetched successfully',
    data,
  });
});
