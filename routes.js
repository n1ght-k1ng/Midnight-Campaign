const routes = require('next-routes')(); 
// this means that the require statement returns a function
routes
.add('/campaigns/new','/campaigns/new')
.add('/campaigns/:address','/campaigns/show')  // ':' indicates that the part is dynamic
.add('/campaigns/:address/requests','/campaigns/requests/index')
module.exports = routes;
