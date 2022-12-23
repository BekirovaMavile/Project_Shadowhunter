var express = require('express');
var mysql      = require('mysql2');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var cookieParser = require('cookie-parser');

var app = express();

var options = {
   host     : '127.0.0.1',
  port: '3306',
  user     : 'root',
  password : '',
  database: 'shadowhunter'
};
var connection = mysql.createConnection(options)
var sessionStore = new MySQLStore( options, connection);

app.use(cookieParser());
app.use(session({
                  secret: 'keyboardCat',
                  key: 'sid',
                  store: sessionStore,
                  resave: true,
                  saveUninitialized: true,
                  cookie: { path: '/',
                            httpOnly: true, 
                            maxAge: null
                          }
                  }));
