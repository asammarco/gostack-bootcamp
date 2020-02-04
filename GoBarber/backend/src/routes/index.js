import { Router } from 'express';
import User from '../app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Diego Fernandes',
    email: 'diego@mmm',
    password_hash: '123456',
  });

  res.send(user);
});

export default routes;
