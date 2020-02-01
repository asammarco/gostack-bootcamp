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
    const check =  projectController.projectExist(request.params.id);
    if(!check){            
      return response.status(400).json({error: "Project doesn't exist"});
    }
    return next();
  },  
  requestLog(request,response, next){
    console.log('Total de requisições:', countRequests+=1);
    return next();
  }
}