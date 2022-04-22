import { Task } from './task';
import { TaskQuery } from './task-queries';

class TaskRepository {
  private taskQueries;

  constructor() {
    this.taskQueries = new TaskQuery();
  }

  getAll = async (): Promise<Task[]> => {
    return (await this.taskQueries.findAll()).rows
      .map(task => ({ id: task.id, title: task.title, updatedAt: task.updated_at }));
  }

  getById = async (id: number): Promise<Task | undefined> => {
    return (await this.taskQueries.findByPk(id)).rows
      .map(task => ({ id: task.id, title: task.title, updatedAt: task.updated_at })).shift();
  }

  getByTaskGroupId = async (id: number): Promise<Task[]> => {
    return (await this.taskQueries.findAllByTaskGroupId(id)).rows
      .map(task => ({ id: task.id, title: task.title, updatedAt: task.updated_at }));
  }

  create = async (props: Task): Promise<Task | undefined> => {
    return (await this.taskQueries.create(props)).rows
      .map(task => ({ id: task.id, title: task.title, updatedAt: task.updated_at })).shift();
  }

  update = async (id: number, props: Task) => {
    await this.taskQueries.update(id, props);
  }

  delete = async (id: number) => {
    await this.taskQueries.destroy(id);
  }
}

export default new TaskRepository();
