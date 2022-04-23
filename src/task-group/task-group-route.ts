import { Router } from 'express';

import TaskGroupController from './task-controller';
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
    this.router.route('/')
      .post(this.taskGroupValidator.validateBody(taskGroupSchema), this.taskGroupCtrl.createTaskGroup);
    this.router.route('/:id')
      .put(this.taskGroupValidator.validateBody(taskGroupSchema), this.taskGroupCtrl.updateTaskGroup);
    this.router.route('/:id')
      .delete(this.taskGroupCtrl.deleteTaskGroup);
  }
}

export default new TaskGroupRoute().router;
