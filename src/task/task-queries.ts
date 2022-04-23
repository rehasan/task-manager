import { QueryResult } from 'pg';

import { pool } from '../database';
import { Task } from './task';

export class TaskQuery {
  findAll = async (): Promise<QueryResult> =>
    pool.query('SELECT * FROM task_manager.task ORDER BY id ASC');

  findByPk = (id: number): Promise<QueryResult> =>
    pool.query('SELECT * FROM task_manager.task WHERE id = $1', [id]);

  findAllByTaskGroupId = (id: number): Promise<QueryResult> =>
    pool.query('SELECT task.* FROM task_manager.task ' +
      'JOIN task_manager.task_group_task ON (task.id = task_group_task.task_id) ' +
      'WHERE task_group_task.task_group_id = $1',
      [id]);

  create = (props: Task): Promise<QueryResult> =>
    pool.query('INSERT INTO task_manager.task (title) VALUES ($1) RETURNING *', [props.title]);

  update = (id: number, props: Task) => {
    pool.query('UPDATE task_manager.task SET title = $1 WHERE id = $2', [props.title, id]);
  };

  destroy = (id: number) => {
    pool.query('DELETE FROM task_manager.task WHERE id = $1', [id]);
  };
}
