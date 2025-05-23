import AppError from './app.error.js';

class ConflictError extends AppError {
  constructor(message = 'Conflict', code = 'CONFLICT_ERROR', details = []) {
    super(message, 409, code, details);
  }
}

export default ConflictError;
