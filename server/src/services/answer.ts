import { Answer } from '../models/Answer';
import { Review } from '../models/Review';
import dotenv from 'dotenv';

dotenv.config();

interface IAnswerPayload {
  questionId: number;
  answer: string;
  reviewId: number;
}

export default class AnswerService {
  private AnswerModel = Answer;
  private ReviewModel = Review;

  public setMultiAnswer = async (answers: IAnswerPayload[]) => {
    try {
      const res = await this.AnswerModel.bulkCreate(answers, {
        updateOnDuplicate: ['questionId', 'reviewId'],
      });
      await this.ReviewModel.update(
        { isReview: true },
        {
          where: {
            id: answers[0].reviewId,
          },
        }
      );
      return res;
    } catch (e) {
      console.log(e);
    }
  };
}
