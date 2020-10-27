import { Router } from "express";
import providerController from './app/controllers/ProvidersController';

const routes = Router();

routes.use('/providers', providerController);

export default routes;