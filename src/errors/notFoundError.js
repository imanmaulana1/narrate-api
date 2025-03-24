import AppError from './appError.js';

class NotFoundError extends AppError {
  constructor(
    message = 'Resource Not Found',
    code = 'NOT_FOUND_ERROR',
    details = []
  ) {
    super(message, 404, code, details);
  }
}

export default NotFoundError;
