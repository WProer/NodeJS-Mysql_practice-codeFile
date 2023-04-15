const http = require("http");
const url = require("url");
const path = require("path");
const querystring = require("querystring");

let staticServer = require("./Module.js");
let RootPath = path.join(__dirname, "page");
let user = {};

http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        res.end();
        return;
    }

    // get请求，登录功能
    let { pathname, query: { username, PassWord} } = url.parse(req.url, true);
    console.log("登录时用户输入的username：",username);
    console.log("登录时用户输入的PassWord：",PassWord);
    // let obj = url.parse(req.url,true);
    // console.log("obj:",obj);

    // post请求，注册功能
    let data = "";
    req.on("data", information => {
        data += information
    })
    req.on("end", () => {

        if(pathname === "/login"){

            res.setHeader("Content-Type", "text/plain;charset=utf-8");
            if(user[username] && user[username] === PassWord){
                res.end("登录成功！！！");
            }else{
                res.end("登录不成功，请核对你所输入的用户名或密码是否正确！");
            }

        }else if (req.url === "/register") {

            res.setHeader("Content-Type", "text/plain;charset=utf-8");
            let { username:POST_username, PassWord:POST_PassWord } = querystring.parse(data);
            console.log("注册时用户输入的username:", POST_username);
            console.log("注册时用户输入的PassWord:", POST_PassWord);

            if (!POST_username) {
                res.end('请输入用户名！');
            } else if (!POST_PassWord) {
                res.end('请输入密码！');
            } else if (user[POST_username]) {
                res.end('用户名已注册过了！');
            } else {
                res.end('注册成功！');
                user[POST_username] = POST_PassWord;
            }
            console.log("user:", user);

        } else {
            staticServer(RootPath, req, res);
        }
    })



    // res.end('{"code":0}');
}).listen(8080, () => {
    console.log("Server is Running...");
})