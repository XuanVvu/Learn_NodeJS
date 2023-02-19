// get the client
// const mysql = require('mysql2');
import mysql from 'mysql2/promise';

// create the connection to database
const connection = mysql.createPool({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '',
    database: 'nodejs',
});

// simple query
// connection.query('SELECT * FROM `user`', function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
// });

export default connection;
