require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'dpg-d0mgs2u3jp1c738bg0o0-a.pg.render.com',
  user: process.env.DB_USER || 'andrei',      // your database username
  password: process.env.DB_PASS || 'kksWqZQfxBUA0rUHLXQBjWibUT2kq382',  // your database password
  database: process.env.DB_NAME || 'asia_db_mubo',  // fallback to 'asia_db' if env var missing
  port: 5432,
  ssl: {
    rejectUnauthorized: true      // enable if your DB requires SSL
  }
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the MySQL database!');
});

module.exports = db;
