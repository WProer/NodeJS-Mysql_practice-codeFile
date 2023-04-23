const express = require("express");

let router = express.Router();

router.get("/",(req,res)=>{
    res.send("用户列表的首页");
});
router.get("/:id",(req,res)=>{
    res.send(`${req.params.id}的用户首页`);
});
router.get("/:id/detail",(req,res)=>{
    res.send(`${req.params.id}的用户详情页`);
});

module.exports = router;