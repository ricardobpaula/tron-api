import { Router } from "express";
import providersRouter from "./providers.routes";
import usersRouter from './users.routes';

const routes = Router();

routes.use('/providers',providersRouter);
routes.use('/users',usersRouter);

export default routes;