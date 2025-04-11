import prisma from '../../config/prismaClient.js';

export const findSuggestedUsers = async (currentId) => {
  return await prisma.user.findMany({
    where: currentId
      ? {
          AND: [
            { id: { not: currentId } },
            {
              followers: {
                none: {
                  followerId: currentId,
                },
              },
            },
          ],
        }
      : undefined,
    orderBy: [{ totalFollowers: 'desc' }, { createdAt: 'desc' }],
    take: 5,
    select: {
      id: true,
      username: true,
      name: true,
      profileImage: true,
      totalFollowers: true,
      totalArticles: true,
    },
  });
};
