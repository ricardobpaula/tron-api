import { Router } from "express";
import CreateUserService from "../services/CreateUserService";

const usersRouter = Router();

// Creating a new User
usersRouter.post('/', async (request, respose) => {
  const {
    firstName, 
    lastName, 
    userName, 
    email, 
    password, 
    roleName } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      firstName, 
      lastName, 
      userName, 
      email, 
      password, 
      roleName
    });

    const userReturned = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      role: user.role.name,
    }

    return respose.status(201).json(userReturned);  

});

export default usersRouter;