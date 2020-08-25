import express from 'express';
import { sequelize } from './mysql';
import expressLoader from './express';

export default async ({ expressApp }: { expressApp: express.Application }) => {
  await sequelize.sync({ force: true });
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }

  await expressLoader({ app: expressApp });
};
