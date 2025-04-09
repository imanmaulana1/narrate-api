import prisma from '../../config/prismaClient.js';

export const findUserIdByClerkId = async (clerkId) => {
  return await prisma.user.findUnique({
    where: {
      clerkId,
    },
    select: {
      id: true,
    },
  });
};
