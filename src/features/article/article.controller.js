import asyncHandler from 'express-async-handler';
import {
  createArticle,
  deleteTempImages,
  getRecentArticles,
  getFollowingArticles,
} from './article.service.js';
import BadRequestError from '../../errors/bad-request.error.js';

export const createArticleHandler = asyncHandler(async (req, res, next) => {
  const { title, content, excerpt, tags, coverImage, tempImages, status } =
    req.body;

  const { id: userId } = req.user;

  if (!title || !content || !tags) {
    throw new BadRequestError('Please provide title, content, tags');
  }

  if (title.length < 5) {
    throw new BadRequestError('Title must be at least 5 characters');
  }

  const validStatus = ['DRAFT', 'PUBLISHED'];
  if (!validStatus.includes(status)) {
    throw new BadRequestError('Invalid status');
  }

  if (!Array.isArray(tags) || tags.length === 0) {
    throw new BadRequestError('Please provide at least one tag');
  }

  // Delete tempImages
  if (
    tempImages?.length > 0 &&
    coverImage?.publicId &&
    coverImage?.url.includes('cloudinary')
  ) {
    await deleteTempImages(tempImages, coverImage);
  }

  const article = await createArticle({
    title,
    content,
    tags,
    coverImage,
    status,
    excerpt,
    authorId: userId,
  });

  res.status(201).json({
    success: true,
    message:
      article === 'DRAFT'
        ? 'Your draft has been saved 💾'
        : 'Your article has been published 📝',
  });
});

export const getRecentArticlesHandler = asyncHandler(
  async (req, res, next) => {
    const { id: currentId } = req.user;
    const { limit, page } = req.query;

    const limitValue = parseInt(limit) || 20;
    const pageValue = parseInt(page) || 1;

    const data = await getRecentArticles(limitValue, pageValue, currentId);

    res.status(200).json({
      success: true,
      message: 'Articles fetched successfully',
      data,
      meta: {
        totalItems: data.length,
        currentPage: pageValue,
        totalPages: Math.ceil(data.length / limitValue),
      },
    });
  }
);

export const getFollowingArticlesHandler = asyncHandler(
  async (req, res, next) => {
    const { id: currentId } = req.user;
    const { limit, page } = req.query;

    const limitValue = parseInt(limit) || 20;
    const pageValue = parseInt(page) || 1;

    const data = await getFollowingArticles(limitValue, pageValue, currentId);

    res.status(200).json({
      success: true,
      message: 'Articles fetched successfully',
      data,
      meta: {
        totalItems: data.length,
        currentPage: pageValue,
        totalPages: Math.ceil(data.length / limitValue),
      },
    });
  }
);
