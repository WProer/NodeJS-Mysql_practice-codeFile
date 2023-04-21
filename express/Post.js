const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser")

app.listen(8080, () => {
    console.log("Server is Running...");
})
app.use(express.static(path.join(__dirname,"static")))
// 使用body-parser第三方中间件
app.use(bodyParser.urlencoded({extended:false}))
app.post("/data", (req, res) => {
    console.log("post处理数据：",req.body);
    res.send("请求成功！！！");
})