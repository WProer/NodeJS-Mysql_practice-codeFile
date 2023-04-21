const express = require("express")
const app = express();
const path = require("path")

app.use("/file",express.static(path.join(__dirname,"static")));
app.use("/file",express.static(path.join(__dirname,"public")));

app.listen(8080,()=>{
    console.log("Server is Running...");
})