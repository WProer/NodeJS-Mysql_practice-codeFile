const db = require("./SQL-encapsulation.js");

// 查询操作
let sql = `INSERT INTO user SET ?`;
let data = {
    name:"使用封装操作插入的数据",
    birthday:"1989-09-16",
    sex:"女",
    class_id:"4"
};
let cf = (error,results)=>{
    if (error) {
        console.log("链接数据处理出错",error);
    }else{
        console.log("链接数据库车成功！",results);
    }
}
db.query(sql,data,cf);