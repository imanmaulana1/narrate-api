import AppError from './app.error.js';

class BadRequestError extends AppError {
  constructor(
    message = 'Bad Request',
    code = 'BAD_REQUEST_ERROR',
    details = []
  ) {
    super(message, 400, code, details);
  }
}

export default BadRequestError;
