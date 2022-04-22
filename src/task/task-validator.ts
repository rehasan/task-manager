import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';

interface TaskRequest extends Request {
  value?: { body?: string };
}

export class TaskValidator {
  validateBody = (schema: any) => {
    return async (req: TaskRequest, res: Response, next: NextFunction) => {
      try {
        const value = await schema.validateAsync(req.body);
        req.value = req.value ?? {};
        req.value.body = req.value.body ?? value;
        next();
      } catch (error) {
        res.status(400).json(error);
      }
    };
  }
}

export const taskSchema = Joi.object().keys({
  title: Joi.string().trim().required()
});
