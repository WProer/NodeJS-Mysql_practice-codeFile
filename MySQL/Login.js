const Koa = require("koa");
const router = require('koa-simple-router');
const Static = require("koa-static");
const path = require('path');
const { koaBody } = require("koa-body");
const db = require("./SQLPromise.js");

const app = new Koa();

app.use(Static(path.join(__dirname, "views")))
app.use(koaBody());
/* 
    注册功能：
        method：POST  /register
        返回{
            code : 0,
            message:"注册成功"
        }

    登录功能：
        method：POST  /login
        返回{
            code : 0,
            message:"登录成功"
        }

    失败返回：{
        code:1,
        message："登陆失败"
    }

*/
app.use(router(_ => {
    // 注册功能：
    _.post("/register", async (ctx, next) => {
        let sql = `INSERT INTO users SET ?`;
        let { username, password } = ctx.request.body
        // console.log("data",username,password);
        let data = {
            username: username,
            password: password
        };
        let results = {
            code: 0,
            message: ""
        }
        try {
            let datas = await db.query(sql, data);
            if (datas.affectedRows) {
                results.message = "注册成功！",
                    ctx.body = results
            }
        } catch (error) {
            console.log("错误", error);
        }
    })

    // 登录功能：
    _.post("/login", async (ctx, next) => {
        let sql = `SELECT * FROM users WHERE username=? AND password=?`;
        let { username, password } = ctx.request.body
        // console.log("data",username,password);
        let data = [
            username,
            password
        ];
        let results = {
            code: 0,
            message: ""
        }
        try {
            let datas = await db.query(sql, data);
            console.log("数据：------>",datas);
            if (datas.length > 0) {
                results.message = "登录成功！";
                ctx.body = results;
            } else {
                results.message = "用户名或密码错误";
                results.code = 1;
                ctx.body = results;
            }
        } catch (error) {
            console.log("错误", error);
            results.message = "An error occurred";
            results.code = 1;
            ctx.body = results;
        }
    })
}))

app.listen(8080, () => {
    console.log("Server is Running...");
});