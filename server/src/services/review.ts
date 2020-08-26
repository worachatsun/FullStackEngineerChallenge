import { Review } from '../models/Review';
import { User } from '../models/User';
import dotenv from 'dotenv';
import { Op } from 'sequelize';

dotenv.config();

export default class ReviewService {
  private ReviewModel = Review;
  private UserModel = User;

  public assignReviwer = async (assignee: string, users: string[]) => {
    try {
      const reviews = this.mapReview(assignee, users);
      const res = await this.ReviewModel.bulkCreate(reviews, {
        updateOnDuplicate: ['reviewTo', 'reviewBy'],
      });
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  public getReviewUsers = async (reviewTo: string) => {
    try {
      const reviews = await this.ReviewModel.findAll({
        attributes: ['reviewBy'],
        where: { reviewTo },
        raw: true,
      });
      return reviews;
    } catch (e) {
      console.log(e);
    }
  };

  private mapReview = (assignee: string, users: string[]) => {
    let reviews: object[] = [];
    users.map((user: string) => {
      reviews.push({ reviewTo: assignee, reviewBy: user });
    });
    return reviews;
  };
}
