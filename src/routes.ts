import { Application } from 'express';

import taskRouter from './task/task-route';
import taskGroupRouter from './task-group/task-group-route';

export default class Routes {

  constructor(app: Application) {
    app.use('/api/tasks', taskRouter);
    app.use('/api/task-groups', taskGroupRouter);
  }
}
