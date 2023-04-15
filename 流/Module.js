const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

let mime = require("./public/mime.json");

module.exports = (RootPath, request, response) => {
    let readable = fs.createReadStream(path.join(RootPath, request.url));
    let gz = zlib.createGzip();
    readable.on("error", err => {
        response.removeHeader("Content-Encoding");
        response.removeHeader("Content-Type");
        response.writeHeader(200, { "Content-Type": "text/plain;charset=utf-8" });
        console.log("出错啦！");
        response.end("404 请求资源不存在！");
    })
    let mimeType = "text/plain";
    let ext = path.extname(request.url);
    // console.log('ext ---->', ext);
    mimeType = mime[ext];
    if (mimeType) {
        if (mimeType.startsWith('text')) {
            mimeType = mimeType + '; charset=utf8';
        }
        response.setHeader("Conten-Type", mimeType);

    }

    response.setHeader("content-encoding", "gzip");
    readable.pipe(gz).pipe(response);

};