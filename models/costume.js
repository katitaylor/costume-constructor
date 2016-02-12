var mongoose = require('mongoose');

// costume is returned as result of wearer/theme so does it need to be in schema?

var costumeSchema = new mongoose.Schema({
  costume: { type: String, required: true },
  wearer: { type: String, required: true },
  theme: { type: String, required: true }
});

//location of var Object important
var Costume = mongoose.model('Costume', costumeSchema);

// Make this available to our other files
module.exports = Costume;
