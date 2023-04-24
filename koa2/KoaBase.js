const Koa = require("koa")
const router = require("koa-simple-router")
const path = require("path")
const static = require("koa-static")
const KoaBody = require("koa-better-body")
const Koaconvert = require("koa-convert")

const app = new Koa;
app.use(Koaconvert(KoaBody({
    uploadDir:path.join(__dirname,"uploads"),  //提交文件保存的路径
    keepExtensions:true  //保留后缀名
})))


app.listen(8080, () => {
    console.log("Server is Running...");
})
app.use(router(_ => {
    _.get('/', (context, next) => {
        context.body = "Hello Koa!!!"
    });

    // get数据处理
    _.get('/index', (context, next) => {
        // const { query: { a, b } } = context.request;
        // console.log("get获取到的数据a:", a);
        // console.log("get获取到的数据b:", b);
        context.body = "get获取数据成功"
    });

    // post数据处理
    // 普通的数据处理
    // 文件数据处理
    _.post("/index",(context,next)=>{
        context.body = "post获取数据成功"
        console.log("context.request.files:",context.request.files);
        console.log("context.request.fields:",context.request.fields);
    })
}))

app.use(static(path.join(__dirname,"static")))