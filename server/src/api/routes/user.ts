import { Router, Response, Request } from 'express';
import authenticateToken from '../middlewares/isAuth';
import UserService from '../../services/user';
const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  route.get('/', authenticateToken, async (_: Request, res: Response) => {
    const userService = new UserService();
    const users = await userService.getAllUserExceptAdmin();
    return res.json(users).status(200);
  });
};
