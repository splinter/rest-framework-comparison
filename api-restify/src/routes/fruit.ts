"use strict";

import MessageUtils from "../modules/message-utils.js";

module.exports = function(server: any) {
    return new Fruit(server);
};

class Fruit {

    constructor(server: any) {
        server.get("/fruit/:id", Fruit.getFruit);
    }

    private static getFruit(req: any, res: any) {
        res.send(MessageUtils.successMsg("orange"));
    }

}
