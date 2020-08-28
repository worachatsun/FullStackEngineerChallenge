import { Answer, Review } from '../models';
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
      answers.map(async ({ questionId, answer, reviewId }: IAnswerPayload) => {
        const res = await this.AnswerModel.findOne({
          where: {
            questionId,
            reviewId,
          },
        });
        if (!res) {
          await this.AnswerModel.create({ questionId, answer, reviewId });
        } else {
          await this.AnswerModel.update(
            { answer },
            {
              where: {
                questionId,
                reviewId,
              },
            }
          );
        }
      });
      await this.ReviewModel.update(
        { isReview: true },
        {
          where: {
            id: answers[0].reviewId,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
    return true;
  };
}
