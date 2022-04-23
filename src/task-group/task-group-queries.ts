import { QueryResult } from 'pg';

import { pool } from '../database';
import { TaskGroup } from './task-group';

export class TaskGroupQuery {
  findAll = async (): Promise<QueryResult> =>
    pool.query('SELECT * FROM task_manager.task_group ORDER BY id ASC');

  findByPk = (id: number): Promise<QueryResult> =>
    pool.query('SELECT * FROM task_manager.task_group WHERE id = $1', [id]);

  findAllByTaskId = (id: number): Promise<QueryResult> =>
    pool.query('SELECT task_group.* FROM task_manager.task_group CROSS JOIN task_manager.task_group_task WHERE task_group_task.task_id = $1',
      [id]);

  create = (props: TaskGroup): Promise<QueryResult> =>
    pool.query('INSERT INTO task_manager.task_group (title) VALUES ($1) RETURNING *', [props.title]);

  update = (id: number, props: TaskGroup) => {
    pool.query('UPDATE task_manager.task_group SET title = $1 WHERE id = $2', [props.title, id]);
  };

  destroy = (id: number) => {
    pool.query('DELETE FROM task_manager.task_group WHERE id = $1', [id]);
  };
}
