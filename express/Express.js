const express = require('express')
const app = express()


app.use((req,res,next)=>{
    res.send("访问成功");
})

app.listen(8080,()=>{
    console.log("Server is Running...");
})