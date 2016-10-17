"use strict";
module.exports = function (server) {
    return new Fruit(server);
};
var Fruit = (function () {
    function Fruit(server) {
        server.get('/fruit/:id', Fruit.getFruit);
    }
    Fruit.getFruit = function (req, res) {
        res.send('This is a fruit');
    };
    return Fruit;
}());
