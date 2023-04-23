const express = require("express");

const app = express();

app.listen(8080,()=>{
    console.log("Server is Running...");
})

const Pages = require("./router/abc.js");

app.use("/pages",Pages);
