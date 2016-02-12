var express = require('express');
var router = express.Router();
var Costume = require('../../../models/costume');

router.get('/', function(req, res) {

    Costume.find({
      person: req.query.person,
      theme: req.query.theme
    }, function(err, results) {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = router;
