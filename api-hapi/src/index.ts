"use strict";

import RouteUtils from "./modules/route-utils";

const Hapi = require("hapi");
const server = new Hapi.Server();
const port = 8080;
const host = "localhost";

server.connection({
    port,
    host
});

let routes = RouteUtils.readRoutes(__dirname + "/routes");
RouteUtils.registerRoutes(server, routes);

server.start((err) => {
    if (err) throw err;
    console.log(`Server running at : ${port}`);
});
