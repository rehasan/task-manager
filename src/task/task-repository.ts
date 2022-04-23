import { Task } from './task';
import { TaskGroupQuery } from '../task-group/task-group-queries';
import { TaskQuery } from './task-queries';

class TaskRepository {
  private taskQueries;
  private taskGroupQueries;

  constructor() {
    this.taskQueries = new TaskQuery();
    this.taskGroupQueries = new TaskGroupQuery();
  }

  getAll = async (): Promise<Task[]> => {
    return (await this.taskQueries.findAll()).rows
      .map(task => ({ id: task.id, title: task.title, updatedAt: task.updated_at }));
  }

  getById = async (id: number): Promise<Task | undefined> => {
    return (await this.taskQueries.findByPk(id)).rows
      .map(task => ({ id: task.id, title: task.title, updatedAt: task.updated_at })).shift();
  }

  getAllTaskGroupsById = async (id: number): Promise<Task | undefined> => {
    const task = await this.getById(id);
    if (task) {
      task.taskGroups = (await this.taskGroupQueries.findAllByTaskId(id)).rows
        .map(task => ({ id: task.id, title: task.title, updatedAt: task.updated_at }));
    }

    return task;
  }

  create = async (props: Task): Promise<Task | undefined> => {
    return (await this.taskQueries.create(props)).rows
      .map(task => ({ id: task.id, title: task.title, updatedAt: task.updated_at })).shift();
  }

  update = async (id: number, props: Task) => {
    this.taskQueries.update(id, props);
  }

  delete = async (id: number) => {
    this.taskQueries.destroy(id);
  }
}

export default new TaskRepository();
