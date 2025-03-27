import expressAsyncHandler from 'express-async-handler';
import { fetchTagsService } from './tag.service.js';

export const fetchTags = expressAsyncHandler(async (req, res) => {
  const limitValue = parseInt(req.query.limit) || 0;

  const tags = await fetchTagsService(limitValue);

  res.status(200).json({
    success: true,
    message: 'Tags fetched successfully',
    data: tags,
  });
});
