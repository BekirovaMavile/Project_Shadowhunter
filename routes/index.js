var express = require('express');
var router = express.Router();

/* Страница Клэри Фэйрчайлд */
router.get('/clary', function(req, res, next) {
  res.send("<h1>Страница Клэри Фэйрчайлд</h1>")
});
/* Страница Джейса Эрондейла */
router.get('/jace', function(req, res, next) {
  res.send("<h1>Страница Джейса Эрондейла</h1>")
});
/* Страница Алека Лайтвуда */
router.get('/alec', function(req, res, next) {
  res.send("<h1>Страница Алека Лайтвуда</h1>")
});
/* Страница Магнуса Бейна */
router.get('/magnus', function(req, res, next) {
  res.send("<h1>Страница Магнуса Бейна</h1>")
});
/* Страница Изабель Лайтвуд */
router.get('/isabel', function(req, res, next) {
  res.send("<h1>Страница Изабель Лайтвуд</h1>")
});
module.exports = router;
