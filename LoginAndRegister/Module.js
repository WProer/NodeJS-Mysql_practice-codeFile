const fs = require("fs");
const path = require("path");

let mime = require("./public/mime.json");

module.exports = (RootPath, request, response) => {
    fs.readFile(path.join(RootPath, request.url), (err, data) => {
        if (err) {
            response.setHeader("Content-Type", "text/plain;charset=utf-8");
            response.end("500 服务器开小差啦...");
            console.log("出错啦...");
            console.log(err);
        } else {
           // req.url  -->  /index.html

           let mimeType = "text/plain";

           let ext = path.extname(request.url);
           // console.log('ext ---->', ext);

           mimeType = mime[ext];

           if(mimeType.startsWith('text')){
               mimeType = mimeType+'; charset=utf8';
           }
            response.writeHead(200,"ok!", { "Conten-Type": mimeType });
            response.write(data);
            console.log("request.url --->", request.url);
            response.end();
        }
    });
};