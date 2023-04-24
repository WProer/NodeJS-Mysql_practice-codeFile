const router = require("koa-simple-router")
const database = require("../Models/index.js")


let controller = (app) => {
    app.use(router(_ => {
        _.get('/', (context, next) => {
            context.render("view")
        });

        // get数据处理
        _.get('/index1', async (context, next) => {
            let data1 = await database[0];
            context.render("index1",{
                data1,
                title:"这是index1跳转的页面"
            })
        });

        _.get('/index2', async (context, next) => {
            let data2 = await database[1];
            context.render("index2",{
                data2,
                title:"这是index2跳转的页面"
            })
        });
    }))
}


module.exports = controller;