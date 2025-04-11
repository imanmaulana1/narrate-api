import { getAuth } from '@clerk/express';
import UnAuthorizedError from '../errors/unauthorize.error.js';
import { findUserIdByClerkId } from '../features/auth/auth.repository.js';

export const requireAuth = async (req, res, next) => {
  try {
    const auth = getAuth(req);

    if (!auth || !auth.userId) {
      throw new UnAuthorizedError('Please sign in to continue.');
    }

    const user = await findUserIdByClerkId(auth.userId);

    if (!user) {
      throw new UnAuthorizedError('Please sign in to continue.');
    }

    req.user = {
      ...auth,
      id: user.id,
    };

    next();
  } catch (error) {
    next(error);
  }
};

export const optionalAuth = async (req, res, next) => {
  try {
    const auth = getAuth(req);

    if (auth?.userId) {
      const user = await findUserIdByClerkId(auth.userId);

      req.user = {
        ...auth,
        id: user?.id || null,
      };
    } else {
      req.user = {
        id: null,
      };
    }

    next();
  } catch (error) {
    next(error);
  }
};
