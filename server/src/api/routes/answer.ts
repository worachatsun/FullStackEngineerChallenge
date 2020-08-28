import { Router, Response } from 'express';
import authenticateToken, { IUserAuthRequest } from '../middlewares/isAuth';
import Answer from '../../services/answer';
const route = Router();

export default (app: Router) => {
  app.use('/answer', route);

  route.post(
    '/',
    authenticateToken,
    async (req: IUserAuthRequest, res: Response) => {
      const { answers } = req.body;
      const answerService = new Answer();
      const payload = await answerService.setMultiAnswer(answers);
      return res.json(payload).status(200);
    }
  );
};
