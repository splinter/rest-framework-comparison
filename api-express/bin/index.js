"uses strict";
"use strict";
var express = require('express');
var app = express();
var route_utils_js_1 = require("./modules/route-utils.js");
console.log('Current directory is ' + __dirname);
var routes = route_utils_js_1["default"].readRoutes(__dirname + "/routes");
route_utils_js_1["default"].registerRoutes(app, routes);
app.get('/', function (req, res) {
    res.send('Hi, hello world!');
});
app.listen(3000, function () {
    console.log("Example express api listening on port 3000");
});
