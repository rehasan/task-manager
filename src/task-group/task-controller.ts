import { Response } from 'express';

import { ApiRequest } from '../helpers/api-request';
import { apiErrorHandler } from '../helpers/error-handler';
import { TaskGroup } from './task-group';
import TaskRepository from './task-group-repository';

export default class TaskGroupController {
  getAllTaskGroups = async (req: ApiRequest<TaskGroup>, res: Response) => {
    try {
      const tasks = await TaskRepository.getAll();
      res.json(tasks);
    } catch (error) {
      apiErrorHandler(error, req, res, 'TaskGroup: Get all failed.');
    }
  }

  getTaskGroupById = async (req: ApiRequest<TaskGroup>, res: Response) => {
    try {
      const result = await TaskRepository.getById(parseInt(req.params.id));
      if (result) {
        return res.json(result);
      } else {
        res.status(404).send(`TaskGroup: ${req.params.id} not found.`);
      }
    } catch (error) {
      apiErrorHandler(error, req, res, `TaskGroup: ${req.params.id} failed.`);
    }
  }

  createTaskGroup = async (req: ApiRequest<TaskGroup>, res: Response) => {
    try {
      const result = await TaskRepository.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      apiErrorHandler(error, req, res, 'TaskGroup: creation failed.');
    }
  }

  updateTaskGroup = async (req: ApiRequest<TaskGroup>, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      await TaskRepository.update(id, req.body);
      res.status(204).json({});
    } catch (error) {
      apiErrorHandler(
        error,
        req,
        res,
        `TaskGroup: updation of ${req.params.id} failed.`
      );
    }
  }

  deleteTaskGroup = async (req: ApiRequest<TaskGroup>, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      await TaskRepository.delete(id);
      res.status(204).json({});
    } catch (error) {
      apiErrorHandler(
        error,
        req,
        res,
        `TaskGroup: deletion of ${req.params.id} failed.`
      );
    }
  }
}
