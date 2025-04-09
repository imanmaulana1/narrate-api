import { getAuth } from '@clerk/express';
import UnAuthorizedError from '../errors/unauthorize.error.js';
import { findUserIdByClerkId } from '../features/auth/auth.repository.js';

export const verifyToken = async (req, res, next) => {
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
};
