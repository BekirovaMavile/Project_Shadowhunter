var express = require('express');
var router = express.Router();
var Hero = require("../models/hunter").Hunter

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Сумеречные охотники' });
});

/* Страница Клэри Фэйрчайлд */
router.get('/clary', function(req, res, next) {
    res.render('hero', {
        title: "Клэри Фэйрчайлд",
        picture: "images/clary.webp",
        desc: "Сумеречная охотница, которая может воссоздавать мощные древние руны, не написанные в Серой Книге"
    });
});
/* Страница Джейса Эрондейла */
router.get('/jace', function(req, res, next) {
  res.render('hero', {
        title: "Джейс Эрондейл",
        picture: "images/jace.webp",
        desc: "Cо-глава Института Нью-Йорка. Может активировать руны без стеле"
    });
});
/* Страница Алека Лайтвуда */
router.get('/alec', function(req, res, next) {
  res.render('hero', {
        title: "Алек Лайтвуд",
        picture: "images/alec.webp",
        desc: "Консул Конклава-в-изгнании"
    });
});
/* Страница Магнуса Бейна */
router.get('/magnus', function(req, res, next) {
  res.render('hero', {
        title: "Магнус Бейн",
        picture: "images/magnus.webp",
        desc: "Верховный Маг Бруклина"
    });
});
/* Страница Изабель Лайтвуд */
router.get('/isabel', function(req, res, next) {
  res.render('hero', {
        title: "Изабель Лайтвуд",
        picture: "images/isabel.webp",
        desc: "Сумеречная охотница. Младшая сестра Алека"
    });
});
module.exports = router;
