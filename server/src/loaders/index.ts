import express from 'express';
import { sequelize } from './mysql';
import expressLoader from './express';
// import { User } from '../models/User';
// import { Question } from '../models/Question';
// import AuthService from '../services/auth';

export default async ({ expressApp }: { expressApp: express.Application }) => {
  await sequelize.sync();
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }

  await expressLoader({ app: expressApp });
};

// .then(() => {
//   const questions = ['Quality of work', 'Productivity', 'Knowledge of job'];
//   questions.map((question: string) => {
//     Question.create({
//       question,
//     });
//   });
//   // Back door but for easier for demo
//   return User.create({
//     username: 'admin',
//     password: new AuthService().passwordGenerator('admin'),
//     isAdmin: true,
//   });
// });
