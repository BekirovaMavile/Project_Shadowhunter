var express = require('express');
var router = express.Router();
var Hero = require("../models/hunter").Hunter

/* GET home page. */
router.get('/', function(req, res, next) {
            req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Сумеречные охотники', counter:req.session.counter  });
});

module.exports = router;
