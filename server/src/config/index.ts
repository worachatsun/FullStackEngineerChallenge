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
    HOST: 'localhost',
    USER: 'sa',
    PORT: 1433,
    PASSWORD: 'reallyStrongPwd123',
    DB: 'master',
    dialect: 'mssql',
    pool: {
      acquire: 30000,
      idle: 10000,
    },
  },
};
