var express = require('express');
var router = express.Router();
var Costume = require('../../../models/costume');

router.get('/:id', function(req, res) {
    Costume.find({
      wearer: req.body.wearer,
      theme: req.body.theme
    }, function(err, results) {
        if (err) throw err;
        res.render('index');
    });
});

module.exports = router;
