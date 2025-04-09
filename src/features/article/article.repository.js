import prisma from '../../config/prismaClient.js';

export const createArticle = async (data) => {
  const {
    title,
    content,
    excerpt,
    tags,
    coverImage,
    status,
    authorId,
    slug,
    readingTime,
  } = data;

  return await prisma.article.create({
    data: {
      title,
      slug,
      content: JSON.stringify(content),
      excerpt,
      coverImage,
      status,
      readingTime,
      tags: {
        create: tags.map((tag) => ({
          tag: {
            connectOrCreate: {
              where: {
                slug: tag.slug,
              },
              create: {
                name: tag.name,
                slug: tag.slug,
              },
            },
          },
        })),
      },
      author: {
        connect: {
          id: authorId,
        },
      },
    },
  });
};
