const http = require('http')
const fs = require('fs')
const url = require("url");
const path = require('path');
const user = require('./user.json');

http.createServer((req, res) => {
    let { pathname, query:{id} } = url.parse(req.url,true);
    if (req.url === "/favicon.ico") {
        res.end("ok!!!");
        return
    }
    // res.end("ok!!!");

    if (pathname === "/search") {
        let readable = fs.createReadStream(path.join(__dirname, "views", "Search.html"));
        readable.pipe(res);
    }

    if (pathname === "/result") {
        let readable = fs.createReadStream(path.join(__dirname, "views", "result.html"));
        let str = "";
        readable.on('data',information =>{
            str += information;
        });
        readable.on("end",()=>{
            // console.log("str------",str);
            let user_id = user[id];
            // console.log(user_id);
            str = str.replace("{{name}}",user_id.name);
            str = str.replace("{{age}}",user_id.age);
            str = str.replace("{{job}}",user_id.job);
            res.end(str);
        });
    }
}).listen(8000, () => {
    console.log("Server is Running...");
})