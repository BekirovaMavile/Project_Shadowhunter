var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
var Hero = require("./models/hunter").Hunter

var hero = new Hero({
    title: "Алек Лайтвуд",
    nick: "alec"
})

console.log(hero)
hero.save(function(){
    console.log(arguments)
})

