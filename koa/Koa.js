const Koa = require("koa")

const app = new Koa;

app.listen(8080,()=>{
    console.log("Server is Running...");
})

app.use((context,next)=>{
    context.body = [1,2,3]
})