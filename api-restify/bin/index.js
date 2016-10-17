"use strict";
var route_utils_js_1 = require('./modules/route-utils.js');
var restify = require('restify');
var port = 8080;
var server = restify.createServer();
var routes = route_utils_js_1["default"].readRoutes(__dirname + '/routes');
route_utils_js_1["default"].registerRoutes(server, routes);
server.listen(port, function () {
    console.log("Server listening at " + port);
});
