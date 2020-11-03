import { getRepository } from 'typeorm';

import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';
import Role from '../models/Role';

interface Request { 
  firstName: string, 
  lastName: string, 
  userName: string, 
  email: string, 
  password: string, 
  roleName:string 
}

class CreateUserService {
  public async execute({ firstName, lastName, userName, email, password, roleName }:Request): Promise<User> {
    const usersRepository = getRepository(User);
    const rolesRepository = getRepository(Role);

    const checkUserExists = await usersRepository.findOne({
      where: [{userName}, {email}]
    });
    
    if(checkUserExists){
      throw new AppError('Username or email already used');
    }

    const role = await rolesRepository.findOne({where: {name:roleName}});

    if (!role){
      throw new AppError(`Role ${roleName} do not exist.`);
      
    }
    
    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      firstName, 
      lastName, 
      userName, 
      email, 
      password: hashedPassword, 
      role,
      avatar: 'default.png'
    });

    await usersRepository.save(user);
    
    return user;

  }
}

export default CreateUserService;