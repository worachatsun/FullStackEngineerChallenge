import { User } from '../models';
import dotenv from 'dotenv';
import { Op } from 'sequelize';

dotenv.config();

export default class UserService {
  private UserModel = User;

  public getUser = async (username: string) => {
    try {
      const res = await this.UserModel.findOne({
        where: { username },
        attributes: { exclude: ['password'] },
        raw: true,
      });
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  public getAllUserExceptAdmin = async (username: string) => {
    try {
      const res = await this.UserModel.findAll({
        where: { isAdmin: false, [Op.not]: { username } },
        attributes: { exclude: ['password'] },
        raw: true,
      });
      return res;
    } catch (e) {
      console.log(e);
    }
  };
}
