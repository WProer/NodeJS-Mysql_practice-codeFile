const express = require("express");
const path = require("path")

const app = express();

let count = 0;

app.listen(8080,()=>{
    console.log("Server is Running...");
})

app.get("/favicon.ico",(req,res)=>{
    res.send("请求成功");
    return;
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"request.html"))
})

app.get("/index",(req,res,next)=>{
    if (count >= 3) {
        res.status(500).send("请求次数过多，请稍后重试！");
        return;
    }

    next();

    if(req.bool){
        count++
    }
})

app.get("/index",(req,res)=>{
    let random = Math.random()*10;

    if(random>5){
        res.send(`"Rquest Success!!!"${random} > 5`);
        req.bool = true;
    }else{
        res.send(`"Rquest Success!!!"${random} < 5`);
    }
})