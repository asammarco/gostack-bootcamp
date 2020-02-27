import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default {
  async loggedIn(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: 'Token not provided' });
    }

    const [, token] = authHeader.split(' ');

    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      if (!decoded) {
        return res.status(401).json({ error: 'Token invalid' });
      }

      req.userId = decoded.id;
      req.isAdmin = decoded.isAdmin;

      return next();
    } catch (err) {
      return res.status(401).json({ error: 'Token invalid' });
    }
  },
  checkAdmin(req, res, next) {
    if (!req.isAdmin) {
      return res.status(401).json({ error: "User isn't Admin" });
    }

    return next();
  },
};
