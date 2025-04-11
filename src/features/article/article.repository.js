import prisma from '../../config/prismaClient.js';

export const saveArticle = async (data) => {
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

export const findRecentArticles = async (limit, page, currentId) => {
  return await prisma.article.findMany({
    take: limit,
    skip: (page - 1) * limit,
    orderBy: [
      {
        createdAt: 'desc',
      },
      {
        id: 'desc',
      },
    ],
    where: {
      status: 'PUBLISHED',
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          username: true,
          profileImage: true,
        },
      },
      likes: currentId
        ? {
            where: { userId: currentId },
            select: {
              id: true,
            },
          }
        : false,
    },
  });
};

export const findFollowingArticles = async (limit, page, currentId) => {
  return await prisma.article.findMany({
    take: limit,
    skip: (page - 1) * limit,
    orderBy: [
      {
        createdAt: 'desc',
      },
      {
        id: 'desc',
      },
    ],
    where: {
      status: 'PUBLISHED',
      author: {
        followers: {
          some: {
            followerId: currentId,
          },
        },
      },
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          username: true,
          profileImage: true,
        },
      },
      likes: {
        where: { userId: currentId },
        select: {
          id: true,
        },
      },
    },
  });
};

export const findTrendingArticles = async (limit) => {
  return await prisma.article.findMany({
    take: limit,
    orderBy: [
      {
        viewCount: 'desc',
      },
      {
        totalLikes: 'desc',
      },
    ],
    where: {
      status: 'PUBLISHED',
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          profileImage: true,
        },
      },
    },
  });
};
