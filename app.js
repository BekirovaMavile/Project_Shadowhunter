var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var mysql = require('mysql2')
// var db = require('./database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hunter = require('./routes/hunter');

var app = express();

// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(function(req,res,next){
// res.locals.nav = []

// // router.get({title, nick}, function(req, res, next) {
//     db.query(`SELECT * FROM hunter WHERE hunter.nick = '${req.params.nick}' and hunter.title = '${req.params.title}`, (err, hunters) => {  
//         if(err) throw err
//         res.locals.nav = hunters
//         next()
//     })
//   // })
// })
app.use(require("./middleware/createMenu.js"))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hunter', hunter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title:"404", picture:"./public/images/error.jpeg", menu: []});
});


module.exports = app;
