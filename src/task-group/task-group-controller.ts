import { Request, Response } from 'express';

import { ApiRequest } from '../helpers/api-request';
import { apiErrorHandler } from '../helpers/error-handler';
import { TaskGroup } from './task-group';
import TaskGroupRepository from './task-group-repository';

export default class TaskGroupController {
  getAllTaskGroups = async (req: ApiRequest<TaskGroup>, res: Response) => {
    try {
      const tasks = await TaskGroupRepository.getAll();
      res.json(tasks);
    } catch (error) {
      apiErrorHandler(error, req, res, 'TaskGroup: Get all failed.');
    }
  }

  getTaskGroupById = async (req: ApiRequest<TaskGroup>, res: Response) => {
    try {
      const result = await TaskGroupRepository.getById(parseInt(req.params.id));
      if (result) {
        return res.json(result);
      } else {
        res.status(404).send(`TaskGroup: ${req.params.id} not found.`);
      }
    } catch (error) {
      apiErrorHandler(error, req, res, `TaskGroup: ${req.params.id} failed.`);
    }
  }

  getAllTasksById = async (req: ApiRequest<TaskGroup>, res: Response) => {
    try {
      const taskGroup = await TaskGroupRepository.getAllTasksById(parseInt(req.params.id));
      res.status(200).json(taskGroup);
    } catch (error) {
      apiErrorHandler(
        error,
        req,
        res,
        `TaskGroup: Get all tasks by Task Group ${req.params.id} failed.`
      );
    }
  }

  createTaskGroup = async (req: ApiRequest<TaskGroup>, res: Response) => {
    try {
      const result = await TaskGroupRepository.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      apiErrorHandler(error, req, res, 'TaskGroup: creation failed.');
    }
  }

  updateTaskGroup = async (req: ApiRequest<TaskGroup>, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      await TaskGroupRepository.update(id, req.body);
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
      await TaskGroupRepository.delete(id);
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

  addToATaskGroup = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const taskId = parseInt(req.params.taskId);
    try {
      await TaskGroupRepository.addATask(id, taskId);
      res.status(204).json({});
    } catch (error) {
      apiErrorHandler(
        error,
        req,
        res,
        `TaskGroup: adding a task to a task group of ${req.params.id} failed.`
      );
    }
  }

  removeFromATaskGroup = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const taskId = parseInt(req.params.taskId);
    try {
      await TaskGroupRepository.removeATask(id, taskId);
      res.status(204).json({});
    } catch (error) {
      apiErrorHandler(
        error,
        req,
        res,
        `TaskGroup: removal a task from a task group of ${req.params.id} failed.`
      );
    }
  }
}
