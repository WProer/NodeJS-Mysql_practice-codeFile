const http = require("http");
const fs = require("fs");
const path = require("path");

const StaticServer = (RootPath, request, response) => {
    fs.readFile(path.join(RootPath, request.url), (err, data) => {
        if (err) {
            response.setHeader("Content-Type", "text/plain;charset=utf-8");
            response.end("500 服务器开小差啦...");
            console.log("出错啦...");
        } else {
            response.write(data);
            console.log("request.url --->", request.url);
            response.end();
        }
    });
};

let RootPath = path.join(__dirname, "www");

let server = http.createServer((request, response) => {
    if (request.url === "/favicon.ico") {
        response.writeHead(200, { "Conten-Type": "text/plain" });
        response.end();
    } else if (request.url === "/index.html") {
        StaticServer(RootPath, request, response);
    } else if (request.url === "/index.css") {
        StaticServer(RootPath, request, response);
    } else if (request.url === "/index.js") {
        StaticServer(RootPath, request, response);
    } else {
        response.setHeader("Content-Type", "text/plain;charset=utf-8");
        console.log("request.url --->", request.url);
        response.end("404页面！！！！");
    }
});

server.listen(8080, () => {
    console.log("Server is running...");
});
