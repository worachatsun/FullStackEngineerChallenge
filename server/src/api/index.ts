import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import review from './routes/review';

export default () => {
  const app = Router();
  auth(app);
  user(app);
  review(app);
  return app;
};
