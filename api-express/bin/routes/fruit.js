/*export default function(router:any){
  return new Fruit(router);
}*/
"use strict";
var message_utils_js_1 = require('../modules/message-utils.js');
module.exports = function (router) {
    return new Fruit(router);
};
var Fruit = (function () {
    function Fruit(app) {
        app.get('/fruit/:id', this.get);
        app.get('/fruit/:id/move-fruit', this.moveFruit);
    }
    Fruit.prototype.get = function (req, res) {
        console.log('Fruit has been request');
        res.send(message_utils_js_1["default"].SuccessMsg('Here is your fruit'));
    };
    Fruit.prototype.moveFruit = function (req, res) {
    };
    return Fruit;
}());
