// index.js
const express = require('express');
const mysql = require('mysql2');
const config = require('./config');

const app = express();
const PORT = 3000;

// ✅ Create DB connection using config.js credentials
const connection = mysql.createConnection(config);

connection.connect(err => {
  if (err) {
    console.error('❌ Database connection failed:', err.stack);
    process.exit(1);
  }
  console.log('✅ Connected to MySQL Database');
});

app.get('/', (req, res) => {
  res.send('🚀 Hello from Node Backend + MySQL!');
});

app.listen(PORT,"0.0.0.0", () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});

