import AppError from './app.error.js';

class UnAuthorizedError extends AppError {
  constructor(
    message = 'Unauthorized',
    code = 'UNAUTHORIZED_ERROR',
    details = []
  ) {
    super(message, 401, code, details);
  }
}

export default UnAuthorizedError;
