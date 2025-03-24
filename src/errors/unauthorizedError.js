import AppError from './appError.js';

class UnauthorizedError extends AppError {
  constructor(
    message = 'Unauthorized',
    code = 'UNAUTHORIZED_ERROR',
    details = []
  ) {
    super(message, 401, code, details);
  }
}

export default UnauthorizedError;
