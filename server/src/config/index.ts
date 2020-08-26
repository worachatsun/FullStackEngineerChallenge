import dotenv from 'dotenv';
dotenv.config();

// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  port: parseInt(process.env.PORT as string, 10),
  databaseURL: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  api: {
    prefix: '/api',
  },
  mySQL: {
    HOST: process.env.MYSQL_HOST || 'localhost',
    USER: process.env.MYSQL_USER || 'root',
    PORT: parseInt(process.env.MYSQL_PORT || '3306'),
    PASSWORD: process.env.MYSQL_PASSWORD || '',
    DB: process.env.MYSQL_DB || 'paypay',
    dialect: 'mysql',
    pool: {
      acquire: 30000,
      idle: 10000,
    },
  },
};
