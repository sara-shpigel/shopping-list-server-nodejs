const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));
  
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'shopping-list'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Sql connect');
});

app.get('/categories', (req, res) => {
  const sql = 'SELECT * FROM categories';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`The server in port: ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error in the server!');
});
