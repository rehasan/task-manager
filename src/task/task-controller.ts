import { Response } from 'express';

import { ApiRequest } from '../helpers/api-request';
import { apiErrorHandler } from '../helpers/error-handler';
import { Task } from './task';
import TaskRepository from './task-repository';

export default class TaskController {
  getAllTasks = async (req: ApiRequest<Task>, res: Response) => {
    try {
      const tasks = await TaskRepository.getAll();
      res.json(tasks);
    } catch (error) {
      apiErrorHandler(error, req, res, 'Task: Get all failed.');
    }
  }

  getTaskById = async (req: ApiRequest<Task>, res: Response) => {
    try {
      const result = await TaskRepository.getById(parseInt(req.params.id));
      if (result) {
        return res.json(result);
      } else {
        res.status(404).send(`Task: ${req.params.id} not found.`);
      }
    } catch (error) {
      apiErrorHandler(error, req, res, `Task: ${req.params.id} failed.`);
    }
  }

  getAllTaskGroupsById = async (req: ApiRequest<Task>, res: Response) => {
    try {
      const task = await TaskRepository.getAllTaskGroupsById(parseInt(req.params.id));
      res.status(200).json(task);
    } catch (error) {
      apiErrorHandler(
        error,
        req,
        res,
        `Task: Get all by Task Group ${req.params.id} failed.`
      );
    }
  }

  createTask = async (req: ApiRequest<Task>, res: Response) => {
    try {
      const result = await TaskRepository.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      apiErrorHandler(error, req, res, 'Task: creation failed.');
    }
  }

  updateTask = async (req: ApiRequest<Task>, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      await TaskRepository.update(id, req.body);
      res.status(204).json({});
    } catch (error) {
      apiErrorHandler(
        error,
        req,
        res,
        `Task: updation of ${req.params.id} failed.`
      );
    }
  }

  deleteTask = async (req: ApiRequest<Task>, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      await TaskRepository.delete(id);
      res.status(204).json({});
    } catch (error) {
      apiErrorHandler(
        error,
        req,
        res,
        `Task: deletion of ${req.params.id} failed.`
      );
    }
  }
}
