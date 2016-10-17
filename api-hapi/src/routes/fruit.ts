"use strict";
import RouteUtils from "../modules/route-utils.js";
import MessageUtils from "../modules/message-utils";


module.exports = function(server: any) {
    return new Fruit(server);
};

class Fruit {
    private _routes = [{
        method: RouteUtils.HttpGet,
        path: "/fruit/{id}",
        handler: Fruit.getFruit
    }];
    constructor(server: any) {
        console.log(Object.keys(RouteUtils));
        this._routes.map(mapping => {
            let {method, path, handler} = mapping;
            console.log(`Mapping ${path} to ${method}`);
            server.route({
                method,
                path,
                handler
            });
        });
    }
    static getFruit(req: any, reply: any) {
        reply("Done");
    }
}
