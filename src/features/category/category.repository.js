import prisma from '../../config/prismaClient.js';

export const findAllCategories = async (limit) => {
  const categories = await prisma.category.findMany({
    take: limit || undefined,
  });
  return categories;
};
