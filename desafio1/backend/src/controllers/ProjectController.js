var projects = require('../models/Project');

module.exports = {
  projects,
  index(request,response){
    return response.json(projects);
  },
  store(request,response){
    const project = {id, title, tasks} = request.body;
    projects.push(project);
    return response.json(project);
  },
  destroy(request,response){        
    const { id } = request.params;    
    projects = projects.filter(item => item.id != id);
    response.send();
  },
  update(request,response){
    const { id } = request.params;
    const { title } = request.body;
    const project = projects.filter(item => item.id == id);
    project.map(item => item.title = title)
    response.send(project);
  },
  storeTask(request,response){
    const { id } = request.params;
    const { title } = request.body;
    const project = projects.filter(item => item.id == id);
    project.map(item => item.tasks.push(title));
    response.send(project);
  }
}