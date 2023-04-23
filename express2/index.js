const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, () => {
    console.log("Server is Running...");
})

app.use(express.static(path.join(__dirname,"static")))

app.get("/index",(req,res)=>{
    res.sendFile(path.join(__dirname,"static","Post.html"));
})

app.get('/search',(req,res)=>{
    // res.sendFile(path.join(__dirname,"static","Post.html"))

    res.redirect(`https://www.baidu.com/s?wd=${req.query.username}`);
});
