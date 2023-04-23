const express = require("express");
const path = require("path");

const template = require("express-art-template");

const app = express();

app.listen(8080,()=>{
    console.log("Server is Running...");
})

app.set('views',path.join(__dirname,"template"));//specify the views directory 指定视图目录
app.set("view engine","html");//register the template regine  注册模板引擎
app.engine("html",template);

app.get('/', function (req, res) {
    res.render('index.html',{
        title:"Hello NodeJS!!!"
    } );
});