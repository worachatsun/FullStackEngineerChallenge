import { User, IUserModel } from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

export default class UserService {
  private UserModel = User;

  public getAllUserExceptAdmin = async () => {
    try {
      const res = await this.UserModel.findAll({
        where: { isAdmin: false },
        attributes: { exclude: ['password'] },
        raw: true,
      });
      return res;
    } catch (e) {
      console.log(e);
    }
  };
}
