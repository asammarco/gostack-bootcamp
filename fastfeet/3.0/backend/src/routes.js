import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/Controllers/SessionController';
import RecipientController from './app/Controllers/RecipientController';
import FileController from './app/Controllers/FileController';
import DeliverymanController from './app/Controllers/DeliverymanController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const uploads = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.get('/recipients', RecipientController.index);

// Somente rotas com autenticação
routes.use(authMiddleware.loggedIn);
routes.put(`/recipients/:id`, RecipientController.update);

// Somente rotas com autenticação e role de Admin

routes.use(authMiddleware.checkAdmin);

// Recipients
routes.post('/recipients', RecipientController.store);
routes.delete(`/recipients/:id`, RecipientController.destroy);

// Files
routes.post('/files', uploads.single('file'), FileController.store);

// Deliveryman
routes.post('/deliverymen', DeliverymanController.store);
routes.put(`/deliverymen/:id`, DeliverymanController.update);

export default routes;
