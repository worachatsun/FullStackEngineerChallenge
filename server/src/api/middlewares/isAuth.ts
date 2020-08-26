import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export interface IUserAuthRequest extends Request {
  user?: { username: string; iat: number };
}

const authenticateToken = (
  req: IUserAuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req['user'] = user;
    next();
  });
};

export default authenticateToken;
