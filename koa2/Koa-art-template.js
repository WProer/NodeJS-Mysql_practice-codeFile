const Koa = require("koa")
const router = require("koa-simple-router")
const path = require("path")
const static = require("koa-static")
const render = require('koa-art-template');
const app = new Koa;




// 模板引擎
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html'
})



app.listen(8080, () => {
    console.log("Server is Running...");
})
app.use(router(_ => {
    _.get('/', (context, next) => {
        context.body = "Hello Koa!!!"
    });

    // get数据处理  art-template模板引擎
    _.get('/art', (context, next) => {
        context.render("index",{
            title:"Hello koa-art-template!!!"
        })
    });
}))

app.use(static(path.join(__dirname, "static")))