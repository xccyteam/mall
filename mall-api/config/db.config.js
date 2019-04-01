var mysql = require("mysql");
var pool = mysql.createPool({
    host: "",
    user: "root",
    password: "",
    database: "",
    port: 3306
});

function query(sql, callback) {
    pool.getConnection(function(err, connection) {
        connection.query(sql, function(err, rows) {
            callback(err, rows);
            connection.release();
        });
    });
}

exports.query = query;