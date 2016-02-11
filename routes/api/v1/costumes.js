var express = require('express');
var router = express.Router();
var theme = require('../../../models/costume');

router.get('/:id', function(req, res) {

    var costume = {
        theme: req.body.theme,
        wearer: req.body.wearer
    };
    // Costume.find(costume, function(err, costumes) {
    //     if (err) console.log(err);
    //     res.render("index", costume);
    // });
});






module.exports = router;
