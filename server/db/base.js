const mysql = require('mysql')

module.exports = (sql, params, callback) => {
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'wangzhe_admin',
        password: '123123'
    })
    connection.connect();
    connection.query(sql, params, (err, results, fields) => {
        if (err) throw err;
        callback(results)
    })
    connection.end()
}