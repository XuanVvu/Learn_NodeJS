// get the client
// const mysql = require('mysql2');
import mysql from 'mysql';

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '',
    database: 'blog',
});

// simple query
// connection.query('SELECT * FROM `user`', function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
// });
module.exports = connection;
