import { Pool } from 'pg';

import config from './helpers/config';

if (!config.DbUser || !config.DbHost || !config.DbName || !config.DbPassword || !config.DbPort) {
  console.log('Env DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, & DB_PORT should be defined');
  process.exit(0);
}

export const pool: Pool = new Pool({
  user: config.DbUser,
  host: config.DbHost,
  database: config.DbName,
  password: config.DbPassword,
  port: config.DbPort
});
