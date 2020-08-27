import { Router, Response } from 'express';
import authenticateToken, { IUserAuthRequest } from '../middlewares/isAuth';
import QuestionService from '../../services/question';
const route = Router();

export default (app: Router) => {
  app.use('/questions', route);

  route.get(
    '/',
    authenticateToken,
    async (_: IUserAuthRequest, res: Response) => {
      const questionService = new QuestionService();
      const questions = await questionService.getAllQuestion();
      return res.json(questions).status(200);
    }
  );

  route.post(
    '/',
    authenticateToken,
    async (req: IUserAuthRequest, res: Response) => {
      const { questionIds } = req.body;
      const questionService = new QuestionService();
      const questions = await questionService.getQuestionByIds(questionIds);
      return res.json(questions).status(200);
    }
  );
};
