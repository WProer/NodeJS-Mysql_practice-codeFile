const express = require("express");

const app = express();

app.listen(8080,()=>{
    console.log("Server is Running...");
})

const ArticleRouter = require("./router/article.js");
const UserRouter = require("./router/user.js");

app.use("/article",ArticleRouter);
app.use("/user",UserRouter);
