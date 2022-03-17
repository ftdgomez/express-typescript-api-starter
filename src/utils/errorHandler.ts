import { NextFunction, Request, Response } from "express"
import logger from "./logger"

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (process.env.NODE_ENV === 'development') {
    logger.error(err.message);
    logger.error(err);
  }
  res.status(500).json({
    success: false,
    message: err.message || 'Internal server error',
  });
}
