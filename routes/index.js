var express = require('express');
var router = express.Router();
// var Costume = require('../models/costume');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Costume Construction Zone!',
        theme: Theme.find({}, function(err, themes) {
            // themes is an array from db
        });
    });
});

// /* POST costume. */
// router.post('/', function(req, res, next) {
//   res.render('costume', );
// });

module.exports = router; // added to try to troubleshoot err_refused
