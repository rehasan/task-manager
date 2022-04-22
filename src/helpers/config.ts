import dotenv from 'dotenv';

dotenv.config();

export default {
  ServerHost: process.env.SERVER_HOST || 'localhost',
  ServerPort: parseInt(process.env.SERVER_PORT || '3000'),
  DbUser: process.env.DB_USER || '',
  DbHost: process.env.DB_HOST || '',
  DbName: process.env.DB_NAME || '',
  DbPassword: process.env.DB_PASSWORD || '',
  DbPort: parseInt(process.env.DB_PORT || '')
}
