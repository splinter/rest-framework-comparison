"uses strict"

let express = require('express');
let app = express();
import RouteUtils from "./modules/route-utils.js"

console.log('Current directory is ' + __dirname);

let routes = RouteUtils.readRoutes(__dirname+"/routes");
RouteUtils.registerRoutes(app,routes);

app.get('/', (req,res) => {
  res.send('Hi, hello world!');
});

app.listen(3000, () => {
    console.log("Example express api listening on port 3000");
});


