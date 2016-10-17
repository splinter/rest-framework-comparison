"use strict";
var route_utils_1 = require("./modules/route-utils");
var Hapi = require("hapi");
var server = new Hapi.Server();
var port = 8080;
var host = "localhost";
server.connection({
    port: port,
    host: host
});
var routes = route_utils_1.default.readRoutes(__dirname + "/routes");
route_utils_1.default.registerRoutes(server, routes);
server.start(function (err) {
    if (err)
        throw err;
    console.log("Server running at : " + port);
});
