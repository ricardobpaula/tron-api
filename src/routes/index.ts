import { Router } from "express";
import providersRouter from "./providers.routes";
import sessionsRouter from "./sessions.routes";
import usersRouter from './users.routes';

const routes = Router();

routes.use('/login', sessionsRouter);
routes.use('/providers',providersRouter);
routes.use('/users',usersRouter);

export default routes;