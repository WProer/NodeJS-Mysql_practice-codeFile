const express = require("express");
let router = express.Router();
router.get("/",(req,res)=>{
    res.send("文章首页");
});

router.get("/:id",(req,res)=>{
    res.send(`你正在阅读${req.params.id}`);
});

router.get("/:id/comment",(req,res)=>{
    res.send(`你正在查看${req.params.id}评论`);
});

router.get("/:id/edit",(req,res)=>{
    res.send(`你正在编辑${req.params.id}内容`);
});

module.exports = router;