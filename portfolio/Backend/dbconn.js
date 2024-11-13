// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost', // replace with your MySQL host
  user: 'root', // replace with your MySQL username
  password: '', // replace with your MySQL password
  database: 'portfolio', // replace with your MySQL database name
});

module.exports = pool.promise(); // Using promise-based connections for async/await support
