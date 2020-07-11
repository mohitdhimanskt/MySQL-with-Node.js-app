const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();


// Create DB
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Database created...');
  });
});


// Create table
app.get('/createpoststable', (req, res) => {
  let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
  db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Posts table created...');
  });
});