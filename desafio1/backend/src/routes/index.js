const { Router } = require('express');
const ProjectController = require('../controllers/ProjectController');
const mwe = require('../middlewares/index');

const routes = Router();

routes.use(mwe.logRequisisoes);

routes.post('/projects', mwe.checkProjectId, ProjectController.store);
routes.get('/projects', ProjectController.index);
routes.delete(`/projects/:id`, mwe.checkProjectExist, ProjectController.destroy);
routes.put(`/projects/:id`, mwe.checkProjectExist, ProjectController.update);
routes.post(`/projects/:id/tasks/`, mwe.checkProjectExist, ProjectController.storeTask);

module.exports = routes;