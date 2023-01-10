const mysql = require('mysql2/promise');
require('dotenv').config();

const conn = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'cadastro',
  port: process.env.MYSQL_PORT || '3306',
});

module.exports = conn;
