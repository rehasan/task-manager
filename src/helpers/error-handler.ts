import { Request, Response } from 'express';

export function apiErrorHandler(
  err: any,
  req: Request,
  res: Response,
  message: string,
) {
  const error: object = { Message: message, Request: req, Stack: err };
  console.log(error);
  res.json({ Message: message });
}
