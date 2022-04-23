import { TaskQuery } from '../task/task-queries';
import { TaskGroup } from './task-group';
import { TaskGroupQuery } from './task-group-queries';

class TaskGroupRepository {
  private taskGroupQueries;
  private taskQueries;

  constructor() {
    this.taskGroupQueries = new TaskGroupQuery();
    this.taskQueries = new TaskQuery();
  }

  getAll = async (): Promise<TaskGroup[]> => {
    return (await this.taskGroupQueries.findAll()).rows
      .map(taskGroup => ({ id: taskGroup.id, title: taskGroup.title, updatedAt: taskGroup.updated_at }));
  }

  getById = async (id: number): Promise<TaskGroup | undefined> => {
    return (await this.taskGroupQueries.findByPk(id)).rows
      .map(taskGroup => ({ id: taskGroup.id, title: taskGroup.title, updatedAt: taskGroup.updated_at })).shift();
  }

  getAllTasksById = async (id: number): Promise<TaskGroup | undefined> => {
    const taskGroup = await this.getById(id);
    if (taskGroup) {
      taskGroup.tasks = (await this.taskQueries.findAllByTaskGroupId(id)).rows
        .map(task => ({ id: task.id, title: task.title, updatedAt: task.updated_at }));
    }

    return taskGroup;
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

export default new TaskGroupRepository();
