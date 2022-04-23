import { Router } from 'express';

import TaskController from './task-controller';
import { TaskValidator, taskSchema } from './task-validator';

class TaskRoute {
  public router = Router();
  private readonly taskCtrl = new TaskController();
  private readonly taskValidator = new TaskValidator();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes = () => {
    this.router.route('/')
      .get(this.taskCtrl.getAllTasks);
    this.router.route('/:id')
      .get(this.taskCtrl.getTaskById);
    this.router.route('/:id/task-groups')
      .get(this.taskCtrl.getAllTaskGroupsById);
    this.router.route('/')
      .post(this.taskValidator.validateBody(taskSchema), this.taskCtrl.createTask);
    this.router.route('/:id')
      .put(this.taskValidator.validateBody(taskSchema), this.taskCtrl.updateTask);
    this.router.route('/:id')
      .delete(this.taskCtrl.deleteTask);
  }
}

export default new TaskRoute().router;
