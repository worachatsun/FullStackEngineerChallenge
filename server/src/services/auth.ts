import { User } from '../models';
import { genSaltSync, hashSync, compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export interface IUser {
  username: string;
  password: string;
}

export default class AuthService {
  private UserModel = User;

  public SignUp = async (user: IUser) => {
    const hash = this.passwordGenerator(user.password);
    user.password = hash;
    try {
      const res = await this.UserModel.create(user);
      const userJson = res.toJSON();
      Reflect.deleteProperty(userJson, 'password');
      const token = this.JWTTokenGenerator({ username: res.username });
      return { user: userJson, token };
    } catch (e) {
      throw new Error('User not registered');
    }
  };

  public passwordGenerator = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };

  public SignIn = async (username: string, password: string) => {
    const res = await this.UserModel.findOne({ where: { username } });
    if (!res) {
      throw new Error('Invalid Username');
    }

    if (compareSync(password, res.password)) {
      const token = this.JWTTokenGenerator({ username: res.username });
      const user = res.toJSON();
      Reflect.deleteProperty(user, 'password');
      return { user, token };
    } else {
      throw new Error('Invalid Password');
    }
  };

  public Remove = async (username: string) => {
    const res = await this.UserModel.destroy({ where: { username } });
    if (!res) {
      throw new Error('Cannot remove user');
    }
    return res;
  };

  private JWTTokenGenerator = (data: object) => {
    return sign(data, process.env.JWT_SECRET as string);
  };
}
