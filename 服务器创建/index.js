const http = require("http");
const url = require("url");
const querystring = require("querystring");


http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    if (req.url == "/favicon.ico") {
        res.end();
        return;
    }
    console.log("req.url", req.url);

    // get数据处理
    console.log("get数据处理----------->");
    let { query: { a, b } } = url.parse(req.url, true)
    console.log("a:", a);
    console.log("b:", b);

    // post数据处理
    console.log("post数据处理----------->");
    let str = '';
    req.on("data", information => {
        str += information
    });
    req.on("end", () => {
        console.log("接收数据完成");
        let obj = querystring.parse(str);
        // 将obj中的内容解构出来
        let { username, iphone } = obj;
        console.log("username:", username, "\niphone:", iphone);
    });
    console.log("浏览了服务器");
    res.end("{'code':0}");
}).listen(8000, () => {
    console.log("Server is Running...");
})