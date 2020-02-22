import { Router } from 'express';

import SessionController from './app/Controllers/SessionController';
import RecipientController from './app/Controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.get('/recipients', RecipientController.index);

// Somente rotas com autenticação
routes.use(authMiddleware.loggedIn);
routes.put(`/recipients/:id`, RecipientController.update);

// Somente rotas com autenticação e role de Admin
routes.use(authMiddleware.checkAdmin);
routes.post('/recipients', RecipientController.store);
routes.delete(`/recipients/:id`, RecipientController.delete);

export default routes;
