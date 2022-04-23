import { TaskGroup } from './task-group';
import { TaskGroupQuery } from './task-group-queries';

class TaskRepository {
  private taskGroupQueries;

  constructor() {
    this.taskGroupQueries = new TaskGroupQuery();
  }

  getAll = async (): Promise<TaskGroup[]> => {
    return (await this.taskGroupQueries.findAll()).rows
      .map(taskGroup => ({ id: taskGroup.id, title: taskGroup.title, updatedAt: taskGroup.updated_at }));
  }

  getById = async (id: number): Promise<TaskGroup | undefined> => {
    return (await this.taskGroupQueries.findByPk(id)).rows
      .map(taskGroup => ({ id: taskGroup.id, title: taskGroup.title, updatedAt: taskGroup.updated_at })).shift();
  }

  create = async (props: TaskGroup): Promise<TaskGroup | undefined> => {
    return (await this.taskGroupQueries.create(props)).rows
      .map(taskGroup => ({ id: taskGroup.id, title: taskGroup.title, updatedAt: taskGroup.updated_at })).shift();
  }

  update = async (id: number, props: TaskGroup) => {
    this.taskGroupQueries.update(id, props);
  }

  delete = async (id: number) => {
    this.taskGroupQueries.destroy(id);
  }
}

export default new TaskRepository();
