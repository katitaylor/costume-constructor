var express = require('express');
var router = express.Router();
var Costume = require('../../../models/costume');

// "Index" action to list all costumes
router.get('/', function(req, res) {

  Costume.find({}, function(err, results) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.status(200).json(results);
  });

});

// "Show" action to show one costume
router.get('/:id', function(req, res) {

  Costume.findOne({ _id: req.params.id }, function(err, costume) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.status(200).json(costume);
  });

});

// "Create" action to create a new costume
router.post('/', function(req, res) {

  var costume = new Costume({
    theme: req.body.artist,
    wearer: req.body.venue,
    image: req.body.image,
  });

  costume.save(function(err, costume) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.status(200).json(costume);
  });
});

// Action to create a new costume
router.put('/:id', function(req, res) {

  Costume.findByIdAndUpdate(req.params.id, {
    theme: req.body.artist,
    wearer: req.body.venue,
    image: req.body.image,
  }, function(err, costume) {
    if (err) {
      console.log(err);
      throw err;
    }

    res.json(costume);
  });

});

router.delete('/:id', function(req, res) {

  Costume.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.status(200).json({});
  });

});

module.exports = router;
