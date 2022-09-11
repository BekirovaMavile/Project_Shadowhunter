var express = require('express');
var router = express.Router();
var Hero = require("../models/hunter").Hunter

/* GET home page. */
router.get('/', function(req, res, next) {
            req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Сумеречные охотники', counter:req.session.counter  });
});
/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
res.render('logreg',{title: 'Вход'});
});


module.exports = router;
