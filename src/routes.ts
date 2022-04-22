import { Application } from 'express';

import taskRouter from './task/task-route';

export default class Routes {

  constructor(app: Application) {
    app.use('/api/tasks', taskRouter);
  }
}
