import { TaskGroup } from '../task-group/task-group';

export interface Task {
  id: number,
  title: string,
  updatedAt: Date,
  taskGroups?: TaskGroup[]
}