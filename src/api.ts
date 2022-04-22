import cors from 'cors';
import express, { Application, urlencoded, json } from 'express';

import Routes from './routes';

const app: Application = express();

class Api {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public config = (app: Application): void => {
    app.use(cors({ origin: '*' }));
    app.use(urlencoded({ extended: true }));
    app.use(json());
  }
}

new Api(app);

export const api = app;
