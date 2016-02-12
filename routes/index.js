var express = require('express');
var router = express.Router();
var Theme = require('../models/theme');
var Costume = require('../models/costume');

/* GET home page. */
router.get('/', function(req, res, next) {
    Theme.find({}, function(err, results) {
        if (err) throw err;
        res.render('index', {
            title: 'Costume Construction Zone!',
            themes: results
        });
    });

});

module.exports = router; // added to try to troubleshoot err_refused
