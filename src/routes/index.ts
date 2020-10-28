import { Router } from "express";
import providersRouter from "../routes/providers.routes";

const routes = Router();

routes.use('/providers',providersRouter);

export default routes;