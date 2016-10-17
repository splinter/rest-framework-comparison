"use strict";
var message_utils_js_1 = require("../modules/message-utils.js");
module.exports = function (server) {
    return new Fruit(server);
};
var Fruit = (function () {
    function Fruit(server) {
        server.get("/fruit/:id", Fruit.getFruit);
    }
    Fruit.getFruit = function (req, res) {
        res.send(message_utils_js_1.default.successMsg("orange"));
    };
    return Fruit;
}());
