var express = require('express');
var router = express.Router();
// var Costume = require('../models/costume');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Costume Construction Zone' });
});

module.exports = router;
