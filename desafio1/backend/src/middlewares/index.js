var projectController = require('../controllers/ProjectController');
var countRequests = 0;

module.exports = {
  checkProjectId(request,response,next){
    if(!request.body.id){
      return response.status(400).json({error: "Project id is required"});        
    }
    return next();
  },
  checkProjectExist(request,response,next){
    const checkProjects = projectController.projects.some( 
      item => item.id == request.params.id
    );

    if(!checkProjects){            
      return response.status(400).json({error: "Project doesn't exist"});
    }
    return next();
  },  
  logRequisisoes(request,response, next){
    console.log('Total de requisições:', countRequests+=1);
    return next();
  }
}