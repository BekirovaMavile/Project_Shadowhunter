// import db from "../database.js";
var db = require('../database.js');
var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с hunter');
// });

/* Страница охотников */
router.get('/:nick', function(req, res, next) {
    db.query(`SELECT * FROM hunter WHERE hunter.nick = '${req.params.nick}'`, (err, hunters) => {             
        if(err) {
            console.log(err);
            if(err) return next(err)
        } else {
            // console.log(hunter[0])
            if(hunters.length == 0) return next(new Error("Нет такого охотника в книге"))
            var hunter = hunters[0];
            res.render('hunter', {
            title: hunter.title,
            picture: hunter.avatar,
            desc: hunter.desc
        })
            // result(null, results);
        }
    })
    // Cat.findOne({nick:req.params.nick}, function(err,cat){
    //     if(err) return next(err)
    //     if(!hunter) return next(new Error("Нет такого охотника в книге"))
    //     res.render('hunter', {
    //         title: hunter.title,
    //         picture: hunter.avatar,
    //         desc: hunter.desc
    //     })
    // })
})

module.exports = router;
