import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

// Get a new token
sessionsRouter.post('/', async (request, response) => {
  const { userName, password } = request.body;

  const authService = new AuthenticateUserService();
  
  const { user, token } = await authService.execute({
    userName,
    password
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

  return response.status(200).json({ user: userReturned, token });

});

export default sessionsRouter;