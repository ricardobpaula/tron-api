import { Router } from "express";

import ProvidersController from './app/controllers/ProvidersController';

const routes = Router();

routes.get('/providers', ProvidersController.index);

export default routes;