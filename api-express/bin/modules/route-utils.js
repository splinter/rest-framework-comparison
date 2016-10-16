"use strict";
var fs = require('fs');
var RouteUtils = (function () {
    function RouteUtils() {
    }
    RouteUtils.readRoutes = function (routeDir) {
        var files = [];
        if (!fs.existsSync(routeDir))
            return files;
        files = fs.readdirSync(routeDir);
        return files.map(function (file) { return [routeDir, file].join('/'); });
    };
    RouteUtils.registerRoutes = function (router, routes) {
        routes.forEach(function (route) {
            if (!fs.existsSync(route))
                return;
            require(route)(router);
        });
    };
    return RouteUtils;
}());
exports.__esModule = true;
exports["default"] = RouteUtils;
