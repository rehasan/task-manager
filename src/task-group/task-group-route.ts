import { Router } from 'express';

import TaskGroupController from './task-group-controller';
import { TaskGroupValidator, taskGroupSchema } from './task-group-validator';

class TaskGroupRoute {
  public router = Router();
  private readonly taskGroupCtrl = new TaskGroupController();
  private readonly taskGroupValidator = new TaskGroupValidator();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes = () => {
    this.router.route('/')
      .get(this.taskGroupCtrl.getAllTaskGroups);
    this.router.route('/:id')
      .get(this.taskGroupCtrl.getTaskGroupById);
    this.router.route('/:id/tasks')
      .get(this.taskGroupCtrl.getAllTasksById);
    this.router.route('/')
      .post(this.taskGroupValidator.validateBody(taskGroupSchema), this.taskGroupCtrl.createTaskGroup);
    this.router.route('/:id')
      .put(this.taskGroupValidator.validateBody(taskGroupSchema), this.taskGroupCtrl.updateTaskGroup);
    this.router.route('/:id')
      .delete(this.taskGroupCtrl.deleteTaskGroup);
    this.router.route('/:id/tasks/:taskId')
      .put(this.taskGroupCtrl.addToATaskGroup);
    this.router.route('/:id/tasks/:taskId')
      .delete(this.taskGroupCtrl.removeFromATaskGroup);
  }
}

export default new TaskGroupRoute().router;
