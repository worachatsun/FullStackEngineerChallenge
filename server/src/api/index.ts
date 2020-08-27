import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import review from './routes/review';
import question from './routes/question';
import answer from './routes/answer';

export default () => {
  const app = Router();
  auth(app);
  user(app);
  review(app);
  question(app);
  answer(app);
  return app;
};
