var mysql = require('mysql');

// 创建链接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'sys'
});


// 执行链接
connection.connect();


// 操作数据库

connection.query(`SELECT COUNT(*) AS lengths FROM user`, (error, results) => {
    if (error) {
        console.log("出错啦！！！------>",error);
    }
    console.log("数据查询成功！！！-------->",results);
    console.log("数据查询成功！！！-------->",results[0].lengths);
});


// 关闭连接
connection.end();