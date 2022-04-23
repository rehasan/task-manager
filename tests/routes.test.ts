import request from 'supertest';

import { pool } from '../src/database';
import { api } from '../src/api';

describe('/tasks: API Endpoints', () => {
  beforeEach(() => {
    (pool as any).query = jest.fn().mockReturnThis();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should return all the tasks', async () => {
    const data = [
      {
        "id": 1,
        "title": "task a",
        "updated_at": "2022-04-22T11:04:32.370Z"
      },
      {
        "id": 2,
        "title": "task b",
        "updated_at": "2022-04-22T11:05:01.084Z"
      }
    ];

    (pool as any).query.mockResolvedValueOnce({ rows: data });

    const body = data.map(task => ({ id: task.id, title: task.title, updatedAt: task.updated_at }));
    const respose = await request(api).get('/api/tasks');

    expect(respose.statusCode).toEqual(200);
    expect(respose.body).toEqual(expect.arrayContaining(body));
    expect(respose.body.length).toEqual(body.length);
  });

  test('should return a task', async () => {
    const data = [
      {
        "id": 1,
        "title": "task a",
        "updated_at": "2022-04-22T11:04:32.370Z"
      }
    ];

    (pool as any).query.mockResolvedValueOnce({ rows: data });

    const body = data.map(task => ({ id: task.id, title: task.title, updatedAt: task.updated_at }));
    const respose = await request(api).get(`/api/tasks/${data[0]?.id}`);

    expect(respose.statusCode).toEqual(200);
    expect(respose.body).toEqual(body[0]);
    expect(respose.body.id).toEqual(data.shift()?.id);
  });
});

describe('/task-groups: API Endpoints', () => {
  beforeEach(() => {
    (pool as any).query = jest.fn().mockReturnThis();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should return all the task-groups', async () => {
    const data = [
      {
        "id": 1,
        "title": "task group a",
        "updated_at": "2022-04-22T11:04:32.370Z"
      },
      {
        "id": 2,
        "title": "task group b",
        "updated_at": "2022-04-22T11:05:01.084Z"
      }
    ];

    (pool as any).query.mockResolvedValueOnce({ rows: data });

    const body = data.map(task => ({ id: task.id, title: task.title, updatedAt: task.updated_at }));
    const respose = await request(api).get('/api/task-groups');

    expect(respose.statusCode).toEqual(200);
    expect(respose.body).toEqual(expect.arrayContaining(body));
    expect(respose.body.length).toEqual(body.length);
  });

  test('should return a task-group', async () => {
    const data = [
      {
        "id": 1,
        "title": "task group a",
        "updated_at": "2022-04-22T11:04:32.370Z"
      }
    ];

    (pool as any).query.mockResolvedValueOnce({ rows: data });

    const body = data.map(task => ({ id: task.id, title: task.title, updatedAt: task.updated_at }));
    const respose = await request(api).get(`/api/task-groups/${data[0]?.id}`);

    expect(respose.statusCode).toEqual(200);
    expect(respose.body).toEqual(body[0]);
    expect(respose.body.id).toEqual(data.shift()?.id);
  });
})
