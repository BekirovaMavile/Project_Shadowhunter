var express = require('express');
var router = express.Router();
var Hero = require("../models/hunter").Hunter
var User = require("../models/user").User


/* GET home page. */
router.get('/', function(req, res, next) {
            req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Сумеречные охотники', counter:req.session.counter  });
});
/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
res.render('logreg',{title: 'Вход', error:null});
});

/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
    User.findOne({username:username},function(err,user){
        if(err) return next(err)
        if(user){
            if(user.checkPassword(password)){
                req.session.user = user._id
                res.redirect('/')
            } else {
                    res.render('logreg', {title: 'Вход', error:"Пароль не верный"})
            }
       } else {
       var user = new User({username:username,password:password})
            user.save(function(err,user){
                if(err) return next(err)
                req.session.user = user._id
                res.redirect('/')
            })        
      }
    })
});



module.exports = router;
