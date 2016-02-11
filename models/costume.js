var mongoose = require('mongoose');

// costume is returned as result of wearer/theme so does it need to be in schema?

var costumeSchema = new mongoose.Schema({
  costume: { type: String, required: true },
  wearer: { type: String, required: true },
  theme: { type: String, required: true }
});

//custom method to find costume match from DB call and render through index.ejs

  Costume.find(costume, function(err, costumes) {
        if (err) console.log(err);
        res.render("index", costume);
    });

var Costume = mongoose.model('Costume', costumeSchema);
// Make this available to our other files
module.exports = Costume;
