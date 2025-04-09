import slugify from 'slugify';
import cloudinary from '../../config/cloudinary.js';
import { generateReadingTime } from '../../utils/helper.js';
import { createArticle } from './article.repository.js';

export const fetchArticlesService = async (limit, search) => {
  return await prisma.article.findMany({
    where: search
      ? { title: { contains: search, mode: 'insensitive' } }
      : undefined,
    take: limit || undefined,
  });
};

export const createArticleService = async (data) => {
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

  const article = await createArticle(payload);

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
