const express = require("express")
const url = require("url")
const app = express();

app.listen(8080,()=>{
    console.log("Server is Running...");
})

app.get("/index",(req,res)=>{
    console.log("数据",req.query);
    console.log("get数据a",req.query.a);
    console.log("get数据b",req.query.b);
    res.send("访问成功！！！");
})