var express = require('express');
var router = express.Router();
var models = require('../sql/db');
var $sql = require('../sql/sqlMap');
var mysql = require('mysql');     
var app = express();        //创建express的实例
 
var pool = mysql.createPool(models.mysql);
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
router.get('', function(req, res, next) {
    
});


module.exports = router;