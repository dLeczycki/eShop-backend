import { NextFunction, Request, Response } from "express";
import { Log } from "../utils/log";

export const logRequest = (req: Request, res: Response, next: NextFunction) => {
  const { params, query } = req;
  Log.info(`${req.method} on ${req.path}`);

  Log.data({
    params,
    query,
  });

  next();
}