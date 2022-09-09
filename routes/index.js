var express = require('express');
var router = express.Router();
var Hero = require("../models/hunter").Hunter

/* GET home page. */
router.get('/', function(req, res, next) {
    Hero.find({},{_id:0,title:1,nick:1},function(err,menu){
            req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Сумеречные охотники', menu:menu });
    })
});

module.exports = router;
