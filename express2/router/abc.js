const express = require("express");
let router = express.Router();
let ABC = require("./AbcHeader.js");
let abc = new ABC;
router.get("/",(req,res)=>{
    res.send("首页");
});

router.get("/a",abc.a());

router.get("/b",abc.b());

router.get("/c",abc.c());

module.exports = router;