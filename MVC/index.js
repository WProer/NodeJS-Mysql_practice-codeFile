const Koa = require("koa")
const path = require("path")
const render = require('koa-art-template');

const app = new Koa;

// 模板引擎
render(app, {
    root: path.join(__dirname, 'Views'),
    extname: '.html'
})
let Controller = require("./Controllers/index.js");
Controller(app);


app.listen(8080, () => {
    console.log("Server is Running...");
})