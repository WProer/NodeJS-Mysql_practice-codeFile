const http = require("http");
const path = require("path");

let StaticServer = require('./Module.js');
let RootPath = path.join(__dirname,"page");

http.createServer((req, res) => {
    if (req.url == "/favicon.ico") {
        res.end();
        return;
    }
    console.log("req.url", req.url);

    StaticServer(RootPath,req,res);
}).listen(8000, () => {
    console.log("Server is Running...");
})