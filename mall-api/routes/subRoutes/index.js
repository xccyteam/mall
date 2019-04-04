var express = require('express');
var router = express.Router();
var models = require('../../sql/db');
var $sql = require('../../sql/sqlMap');
var mysql = require('mysql');

var db = require("../../config/db.config.js");
var tokenFunc = require('../../config/token.config')

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

router.post('/token', function(req, res, next) {
    let { username, password } = req.body;
    let sqlString = `SELECT id FROM user WHERE username='${username}' AND password='${password}'`;
    db.query(sqlString, function(err, rows) {
        if (err) {
            return res.json({
                code: '0020',
                message: err.message
            });
        } else if (!rows.length) {
            return res.json(global.ResponseCode._0002_NO_DATA);
        } else {
            let token = tokenFunc.createToken({
                username: username,
                password: password
            }, 60 * 1);
            res.json({
                code: 200,
                data: token,
            })
        }
    })
})

router.get('/api/userinfo', function(req, res, next) {
    var sql = $sql.index.checkUser;
    var params = req.body;
    // 验证token(判断decode true/ false)
    // const token = req.get('Authorization');
    // const decode = tokenFunc.checkToken(token);

    pool.query(sql, [params.user_name, params.user_pwd], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            jsonWrite(res, results);
        }
    })
});


module.exports = router;