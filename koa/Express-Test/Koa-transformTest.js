const Koa = require("koa")
const router = require("koa-simple-router")
const fs = require("fs")
const path = require("path")

const app = new Koa;

app.listen(8080, () => {
    console.log("Server is Running...");
})

let count = 0;

app.use(router(_ => {
    _.get('/', (context, next) => {
        context.type = "html";
        context.body = fs.readFileSync(path.join(__dirname, "request.html"))
    });
    _.get('/index', async (context, next) => {
        if (count >= 3) {
            context.status = 500;
            context.body = "请求次数过多，请稍后重试！";
            return;
        }

        await next();

        if (context.bool) {
            count++
        }
    });
    _.get('/index', async (context, next) => {
        let random = Math.random() * 10;

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (random > 5) {
                    context.body = `"Rquest Success!!!"${random} > 5`;
                    context.bool = true;
                    resolve();
                } else {
                    context.body = `"Rquest Success!!!"${random} < 5`;
                    resolve();
                }
            }, 2000);
        })

    });
}))