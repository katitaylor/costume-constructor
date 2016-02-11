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

router.post('/:id', function(req, res) {
    Costume.find({
        _id: req.params.id
    }, function(err, costume) {
        if (err) throw err;
        res.render('index', {
            costume: results
        });
    });
});




// /* POST costume. */
// router.post('/', function(req, res, next) {
//   res.render('costume', );
// });

module.exports = router; // added to try to troubleshoot err_refused
