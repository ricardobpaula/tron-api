import { getRepository } from "typeorm";
import { compare } from 'bcryptjs';
import { sign } from "jsonwebtoken";
import authConfig from '../config/auth';

import AppError from '../errors/AppError';

import User from '../models/User';
import Role from "../models/Role";

interface Request {
  userName: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ userName, password }:Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ 
      where: { userName },
      join: {
        alias: 'roles',
        innerJoin: {role: 'role'},
      }
    });

    if(!user){
      throw new AppError('Incorrect user name/password combination', 401);
    }
    
    const passwordChecked = await compare(password, user.password);

    if(!passwordChecked){
      throw new AppError('Incorrect user name/password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id.toString(),
      expiresIn,
    });

    return {
      user,
      token,
    }
  }
}

export default AuthenticateUserService;