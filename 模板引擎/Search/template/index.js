const http = require('http')
const fs = require('fs')
const url = require("url");
const path = require('path');
const user = require('./user.json');
const template = require('art-template')
template.defaults.imports.map = function (data) {
    switch (data) {
        case "name":
            return "姓名";
        case 'age':
            return "年龄";
        case "job":
            return "工作";


    }
}

http.createServer((req, res) => {
    let { pathname, query: { id } } = url.parse(req.url, true);
    if (req.url === "/favicon.ico") {
        res.end("ok!!!");
        return
    }
    // res.end("ok!!!");

    if (pathname === "/search") {
        let html = template(path.join(__dirname, "views", "Search.html"), {});
        res.end(html);
    }

    if (pathname === "/result") {
        let users = user[id]
        let html = template(path.join(__dirname, "views", "result.html"), {
            users

        });
        res.end(html);
    }

    if (pathname === "/all") {
        let arr = [];
        for (const key in user) {
            arr.push(user[key]);
        }
        let html = template(path.join(__dirname, "views", "all.html"), {
            arr

        });
        res.end(html);
    }
}).listen(8000, () => {
    console.log("Server is Running...");
})