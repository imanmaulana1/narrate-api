import prisma from '../../config/prismaClient.js';

export const findAllTags = async (limit) => {
  const tags = await prisma.category.findMany({
    take: limit || undefined,
  });
  return tags;
};
