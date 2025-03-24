import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';

import AppError from '../errors/appError.js';
import ConflictError from '../errors/conflictError.js';
import BadRequestError from '../errors/badRequestError.js';

const errorHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    const details = err.issues.map((issue) => ({
      field: issue.path.join('.'),
      message: issue.message,
    }));

    err = new BadRequestError(
      'Request validation error',
      'VALIDATION_ERROR',
      details
    );
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case 'P2002':
        err = new ConflictError(
          'Duplicate entry',
          'DUPLICATE_ENTRY',
          err.meta?.target?.map((field) => ({
            field,
            message: `${field} already exists`,
          }))
        );
        break;
      case 'P2003':
        err = new BadRequestError(
          'Invalid reference to another resource',
          'FOREIGN_KEY_CONSTRAINT'
        );
        break;
      case 'P2025':
        err = new NotFoundError('Record not found');
        break;
      default:
        return res.status(500).json({
          success: false,
          error: {
            message: 'Database error occurred',
            status: 500,
            code: 'PRISMA_ERROR',
            details: [{ code: err.code, message: err.message }],
          },
        });
    }
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: {
        message: err.message,
        status: err.statusCode,
        code: err.code,
        details: err.details,
      },
    });
  }

  return res.status(500).json({
    success: false,
    error: {
      message: 'Internal Server Error',
      status: 500,
      code: 'SERVER_ERROR',
    },
  });
};

export default errorHandler;
