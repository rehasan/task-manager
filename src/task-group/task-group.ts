import { Task } from '../task/task';

export interface TaskGroup {
  id: number,
  title: string,
  updatedAt: Date
  tasks?: Task[]
}