const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost', // replace with your MySQL host
  user: 'root', // replace with your MySQL username
  password: '', // replace with your MySQL password
  database: 'portfolio', // replace with your MySQL database name
});

module.exports = pool.promise(); 


// const sql = require('mssql');

// // SQL Server configuration
// const config = {
//   user: 'sa', // replace with your SQL Server username
//   password: '', // replace with your SQL Server password
//   server: 'localhost', // replace with your SQL Server host
//   database: 'portfolio', // replace with your SQL Server database name
//   options: {
//     encrypt: false, // Use true for Azure; set false for local SQL Server
//     trustServerCertificate: true, // Required for self-signed certificates
//   },
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000,
//   },
// };

// // Create a connection pool
// const pool = new sql.ConnectionPool(config);

// const poolConnect = pool.connect().then(() => {
//   console.log('Connected to SQL Server');
// }).catch(err => {
//   console.error('Database connection failed:', err);
// });

// module.exports = {
//   pool,
//   sql, // Export `sql` for creating queries
//   poolConnect, // Ensure the pool is connected before using it
// };

