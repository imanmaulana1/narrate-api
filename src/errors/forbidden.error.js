import AppError from './appError.js';

class ForbiddenError extends AppError {
  constructor(message = 'Forbidden', code = 'FORBIDDEN_ERROR', details = []) {
    super(message, 403, code, details);
  }
}

export default ForbiddenError;
