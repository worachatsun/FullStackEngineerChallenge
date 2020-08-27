import { Router, Response, Request } from 'express';
import authenticateToken, { IUserAuthRequest } from '../middlewares/isAuth';
import ReviewService from '../../services/review';
const route = Router();

export default (app: Router) => {
  app.use('/review', route);

  route.post(
    '/',
    authenticateToken,
    async (req: IUserAuthRequest, res: Response) => {
      let { assignee, users } = req.body;
      users = users.map((user: { value: string }) => user.value);
      const reviewService = new ReviewService();
      const reviews = await reviewService.assignReviwer(assignee, users);
      return res.json(reviews).status(200);
    }
  );

  route.get(
    '/users',
    authenticateToken,
    async (req: IUserAuthRequest, res: Response) => {
      const { reviewTo } = req.query;
      const reviewService = new ReviewService();
      const users =
        (await reviewService.getReviewUsers(reviewTo as string)) || [];
      let reviews: string[] = [];
      users.map((user: { reviewBy: string }) => {
        reviews.push(user.reviewBy);
      });
      console.log(reviews);
      return res.json(reviews).status(200);
    }
  );

  route.get(
    '/list',
    authenticateToken,
    async (req: IUserAuthRequest, res: Response) => {
      const { username } = req.query;
      const reviewService = new ReviewService();
      const reviews = await reviewService.getReviewsByUsername(
        username as string
      );
      return res.json(reviews).status(200);
    }
  );

  route.get(
    '/reviewed',
    authenticateToken,
    async (req: IUserAuthRequest, res: Response) => {
      const reviewService = new ReviewService();
      const reviews = await reviewService.getAllReviewed();
      return res.json(reviews).status(200);
    }
  );
};
