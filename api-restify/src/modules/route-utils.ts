"use strict"

import fs = require('fs');
export default class RouteUtils {

  static readRoutes(routeDir:string){
     let files = [];
     if(!fs.existsSync(routeDir)) return files;
     files = fs.readdirSync(routeDir);
     return files.map( file => [routeDir,file].join('/'));
  }
 
  static registerRoutes(server:any,routes:any) {
     routes.forEach(route => {
 
        if (!fs.existsSync(route)) return;
        console.log(`Route ${route} registered`);
        require(route)(server);
     });
  }
}
