var express = require('express');
var router = express.Router();
var mysql = require('mysql');     //引入mysql模块
var app = express();        //创建express的实例
 
var pool = mysql.createPool({      //创建mysql实例
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'root',
    database:'mall'
});
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json({
            status:200,
            data: ret
        });
    }
};
router.get('/api/userinfo', function(req, res, next) {
    var sql = "select * from user_info";
    var params = req.body;
    pool.query(sql, [params.user_name, params.user_pwd], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            jsonWrite(res, results);
        }
    })
});


module.exports = router;