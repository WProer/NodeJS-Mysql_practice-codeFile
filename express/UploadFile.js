const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const fs = require("fs");

app.listen(8080, () => {
    console.log("Server is Running...");
})
app.use(express.static(path.join(__dirname,"static")))
// 使用body-parser第三方中间件 
app.use(multer({ dest: path.join(__dirname,"uploads/") }).any())
app.post("/upload", (req, res) => {
    
    console.log("Upload File Data:",req.files);
    let oldPath = req.files[0].path;
    let newPath = req.files[0].path + path.extname(req.files[0].originalname)
    fs.rename(oldPath,newPath,(err)=>{
        console.log(err);
    })
    res.send("请求成功！！！");
})