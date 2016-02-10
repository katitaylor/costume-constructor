var express = require('express');
var router = express.Router();
// Require the User model
// var Costume = require('../models/costume');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// /* POST costume. */
// router.post('/', function(req, res, next) {
//   res.render('costumes', { wearers: themes });
// });



module.exports = router;
