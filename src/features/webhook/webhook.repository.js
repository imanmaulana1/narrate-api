import prisma from '../../config/prismaClient.js';

export const createUser = async (userData) => {
  const {
    id: clerkId,
    username,
    first_name: firstName,
    last_name: lastName,
    email_addresses: emailAddresses,
    image_url: profileImage,
  } = userData;
  try {
    const result = await prisma.$transaction(async (prisma) => {
      const user = await prisma.user.create({
        data: {
          clerkId,
          username,
          name: `${firstName} ${lastName}`,
          email: emailAddresses[0].email_address,
          profileImage,
        },
      });

      const savedItem = await prisma.collection.create({
        data: {
          name: 'Saved',
          description:
            'Your default collection for saving articles you want to revisit later access your favorite content anytime.',
          isDefault: true,
          ownerId: user.id,
        },
      });

      return { user, savedItem };
    });

    return result;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userData) => {
  const { id: clerkId, username, image_url: profileImage } = userData;

  if (!clerkId) throw new Error();

  try {
    const result = await prisma.user.update({
      where: {
        clerkId,
      },
      data: {
        clerkId,
        username,
        profileImage,
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  if (!id) throw new Error();

  try {
    const result = await prisma.user.delete({
      where: {
        clerkId: id,
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
};
