import { Question } from '../models/Question';
import dotenv from 'dotenv';
import { Op } from 'sequelize';

dotenv.config();

export default class UserService {
  private QuestionModel = Question;

  public getAllQuestion = async () => {
    try {
      const res = await this.QuestionModel.findAll({
        attributes: ['question', 'id'],
        raw: true,
      });
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  public getQuestionByIds = async (ids: string[]) => {
    try {
      const res = await this.QuestionModel.findAll({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
        raw: true,
      });
      return res;
    } catch (e) {
      console.log(e);
    }
  };
}
