import express from 'express';
import { sequelize } from './mysql';
import expressLoader from './express';
import { User } from '../models/User';
import AuthService from '../services/auth';

export default async ({ expressApp }: { expressApp: express.Application }) => {
  await sequelize.sync({ force: true }).then(() => {
    // Back door but for easier for demo
    return User.create({
      username: 'admin',
      password: new AuthService().passwordGenerator('admin'),
      isAdmin: true,
    });
  });
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }

  await expressLoader({ app: expressApp });
};
