import { Router, Response, Request } from 'express';
import authenticateToken, { IUserAuthRequest } from '../middlewares/isAuth';
import UserService from '../../services/user';
const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  route.get(
    '/list',
    authenticateToken,
    async (req: IUserAuthRequest, res: Response) => {
      const user = req.user;
      const userService = new UserService();
      const users = await userService.getAllUserExceptAdmin(
        user?.username as string
      );
      return res.json(users).status(200);
    }
  );

  route.get(
    '/',
    authenticateToken,
    async (req: IUserAuthRequest, res: Response) => {
      const userService = new UserService();
      const user = await userService.getUser(req.user?.username || '');
      console.log(user);
      return res.json(user).status(200);
    }
  );
};
