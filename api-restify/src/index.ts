"use strict"

import RouteUtils from './modules/route-utils.js'

let restify = require('restify');
let port = 8080;
let server = restify.createServer();

let routes = RouteUtils.readRoutes(__dirname+'/routes');
RouteUtils.registerRoutes(server,routes);

server.listen(port,()=> {
  console.log(`Server listening at ${port}`);
});
