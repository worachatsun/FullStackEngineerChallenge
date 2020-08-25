import { Sequelize } from 'sequelize';
import config from '../config';

export const sequelize = new Sequelize(
  config.mySQL.DB,
  config.mySQL.USER,
  config.mySQL.PASSWORD,
  {
    host: config.mySQL.HOST,
    port: config.mySQL.PORT,
    dialect: 'mssql',
    pool: {
      acquire: config.mySQL.pool.acquire,
      idle: config.mySQL.pool.idle,
    },
  }
);
