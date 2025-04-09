import prisma from '../../config/prismaClient.js';

export const findAllTags = (limit, search) => {
  return prisma.tag.findMany({
    where: search
      ? { name: { contains: search, mode: 'insensitive' } }
      : undefined,
    take: limit || undefined,
  });
};
