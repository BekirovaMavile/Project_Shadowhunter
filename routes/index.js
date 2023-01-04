var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Сумеречные охотники', counter:req.session.counter  });
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
res.render('logreg',{title: 'Вход', error: null});
});

/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  // console.log("hey")
  db.query (`SELECT * FROM user WHERE user.username = '${req.body.username}'`, function(err,users){
        if(err) return next(err)
        // console.log("hey1")
        // console.log(users)
        // console.log(err)
        if(users.length > 0) {
          // console.log("hey3")
          var user = users[0];
          if (password == user.password){
            req.session.user = user.user_id
            res.redirect('/')
          } else {
            res.render('logreg', {title: 'Вход', error: 'Пароль не верный'})
          }
        } else {
          db.query(`INSERT INTO user (username, password) VALUES ('${username}', '${password}')`, function(err, user){
            // console.log(user)
            // console.log(err)
            if(err) return next(err)
            req.session.user = user.user_id
            res.redirect('/')
          })
        }
})
});
module.exports = router;
