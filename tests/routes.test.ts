import request from 'supertest';

import { pool } from '../src/database';
import { api } from '../src/api';

describe('API Endpoints', () => {
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
        "title": "task b",
        "updated_at": "2022-04-22T11:04:32.370Z"
      },
      {
        "id": 2,
        "title": "task a",
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
})
