var express = require('express');
var router = express.Router();
var models = require('../../sql/db');
var $sql = require('../../sql/sqlMap');
var mysql = require('mysql');

var pool = mysql.createPool(models.mysql);
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json({
            status: 200,
            data: ret
        });
    }
};
router.get('/api/userinfo', function(req, res, next) {
    var sql = $sql.index.checkUser;
    var params = req.body;
    pool.query(sql, [params.user_name, params.user_pwd], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            jsonWrite(res, results);
        }
    })
});


module.exports = router;