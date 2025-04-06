import { getAuth } from '@clerk/express';
import UnAuthorizedError from '../errors/unauthorize.error.js';

export const verifyToken = (req, res, next) => {
  const auth = getAuth(req);

  if (!auth || !auth.userId) {
    throw new UnAuthorizedError('Please sign in to continue.');
  }
  req.user = auth;
  next();
};
