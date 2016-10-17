"use strict";

import fs = require("fs");
export default class RouteUtils {

    public static HttpGet = "GET";
    public static HttpPost = "POST";
    public static HttpDelete = "DELETE";
    public static HttpPut = "PUT";
    static readRoutes(routeDir: string) {
        let files = [];
        if (!fs.existsSync(routeDir)) return files;
        files = fs.readdirSync(routeDir);
        return files.map(file => [routeDir, file].join("/"));
    }

    static registerRoutes(server: any, routes: any) {
        routes.forEach(route => {
            if (!fs.existsSync(route)) return;
            require(route)(server);
        });
    }

    static defineMethod(method: string , path: string) {
      return {
        method,
        path
      };
    }
}
