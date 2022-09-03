var express = require('express');
var router = express.Router();
var Hero = require("../models/hunter").Hunter


/* Страница героев */
router.get('/:nick', function(req, res, next) {
    Hero.findOne({nick:req.params.nick}, function(err,hero){
        if(err) return next(err)
        if(!hero) return next(new Error("Нет такого героя в этой книжке"))
        res.render('hero', {
            title: hero.title,
            picture: hero.avatar,
            desc: hero.desc
        })
    })
})

module.exports = router;
