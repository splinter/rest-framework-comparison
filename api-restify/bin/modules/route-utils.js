"use strict";
var fs = require("fs");
var RouteUtils = (function () {
    function RouteUtils() {
    }
    RouteUtils.readRoutes = function (routeDir) {
        var files = [];
        if (!fs.existsSync(routeDir))
            return files;
        files = fs.readdirSync(routeDir);
        return files.map(function (file) { return [routeDir, file].join("/"); });
    };
    RouteUtils.registerRoutes = function (server, routes) {
        routes.forEach(function (route) {
            if (!fs.existsSync(route))
                return;
            console.log("Route " + route + " registered");
            require(route)(server);
        });
    };
    return RouteUtils;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RouteUtils;
