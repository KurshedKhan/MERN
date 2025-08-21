const mysql = require('mysql2');

const connection = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : 'kurshed@123123',
  database : 'electronicdb'
})

module.exports = connection.promise();