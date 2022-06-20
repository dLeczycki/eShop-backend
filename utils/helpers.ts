import { NextFunction, Request, Response } from "express";

class ValidationError extends Error { }

export const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`⛔ ${err}`);

  if (err.name === 'UnauthorizedError') {
    return res
      .status(401)
      .json({ message: "Dostęp zabroniony" });
  }

  return res
    .status(err instanceof ValidationError ? 400 : 500)
    .json({
      message: err instanceof ValidationError ? err.message : 'Przepraszamy, spróbuj ponownie za kilka minut.'
    })
}

export const handleNotFound = (req: Request, res: Response) => res.status(404).json({ message: 'Nie odnaleziono zasobu' });