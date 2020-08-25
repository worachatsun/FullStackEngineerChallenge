import { Router, Request, Response, NextFunction } from 'express';
import { authSchema } from '../../validates/auth';
import AuthService from '../../services/auth';
import { IUser } from '../../services/auth';
import { User } from '../../models/User';

const route = Router();

export default (app: Router) => {
  app.use('/auth', route);

  route.get('/', async (req, res, next) => {
    try {
      res.json(await User.findAll());
    } catch (e) {
      next(e);
    }
  });

  route.post(
    '/signup',
    authSchema,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const auth = new AuthService();
        const user = await auth.SignUp(req.body as IUser);
        return res.status(201).json({ user });
      } catch (e) {
        return res.status(401).json({ error: e.message });
      }
    }
  );

  route.post(
    '/signin',
    authSchema,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { username, password } = req.body;
        const auth = new AuthService();
        const user = await auth.SignIn(username, password);
        return res.json({ user }).status(200);
      } catch (e) {
        return res.status(401).json({ error: e.message });
      }
    }
  );
};
