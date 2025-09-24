import jwt from 'jsonwebtoken';
import Config from '../config';
import { NextFunction, Request, Response } from 'express';

const JWT_SECRET = Config.jwt_secret as string;

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if(!token) {
    res.status(401).send({message: "Invalid token. Access denied."});
    return
  }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if(err) {
      res.status(401).send({message: "Invalid token. Access denied."});
      return
    }
    (req as any).decoded = decoded;
    next();
  })
}