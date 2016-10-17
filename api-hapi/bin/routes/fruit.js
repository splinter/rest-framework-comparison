"use strict";
var route_utils_js_1 = require("../modules/route-utils.js");
module.exports = function (server) {
    return new Fruit(server);
};
var Fruit = (function () {
    function Fruit(server) {
        this._routes = [{
                method: route_utils_js_1.default.HttpGet,
                path: "/fruit/{id}",
                handler: Fruit.getFruit
            }];
        console.log(Object.keys(route_utils_js_1.default));
        this._routes.map(function (mapping) {
            var method = mapping.method, path = mapping.path, handler = mapping.handler;
            console.log("Mapping " + path + " to " + method);
            server.route({
                method: method,
                path: path,
                handler: handler
            });
        });
    }
    Fruit.getFruit = function (req, reply) {
        reply("Done");
    };
    return Fruit;
}());
