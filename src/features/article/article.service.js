import slugify from 'slugify';
import cloudinary from '../../config/cloudinary.js';
import { generateReadingTime } from '../../utils/helper.js';
import {
  saveArticle,
  findRecentArticles,
  findFollowingArticles,
} from './article.repository.js';

export const getRecentArticles = async (limit, page, currentId) => {
  const data = await findRecentArticles(limit, page, currentId);

  const recentArticleData = data.map(
    ({ authorId, content, status, viewCount, updatedAt, likes, ...rest }) => ({
      ...rest,
      isLiked: currentId ? likes.length > 0 : false,
    })
  );

  return recentArticleData;
};

export const getFollowingArticles = async (limit, page, currentId) => {
  const data = await findFollowingArticles(limit, page, currentId);

  const followingArticleData = data.map(
    ({ authorId, content, status, viewCount, updatedAt, likes, ...rest }) => ({
      ...rest,
      isLiked: currentId ? likes.length > 0 : false,
    })
  );

  return followingArticleData;
};

export const createArticle = async (data) => {
  const slug = slugify(data.title, { lower: true, strict: true });

  const tags = data.tags.map((tag) => ({
    slug: slugify(tag, { lower: true, strict: true }),
    name: tag.toLowerCase(),
  }));

  const readingTime = generateReadingTime(data.content);

  const payload = {
    ...data,
    coverImage: data.coverImage ? data.coverImage.url : null,
    slug,
    tags,
    readingTime,
  };

  const article = await saveArticle(payload);

  return article.status;
};

export const deleteTempImages = async (images = [], coverImage) => {
  const imagesToDelete = images.filter((img) => {
    return (
      img?.publicId?.includes('narrate/articles/assets') &&
      img.publicId !== coverImage.publicId
    );
  });

  const results = await Promise.all(
    imagesToDelete.map((image) => cloudinary.uploader.destroy(image.publicId))
  );

  return results;
};
