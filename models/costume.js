var mongoose = require('mongoose');

var costumeSchema = new mongoose.Schema({
  costume: { type: String, required: true },
  wearer: { type: String, required: true, unique: true },
  theme: { type: String}
});

var Costume = mongoose.model('Costume', costumeSchema);

// Make this available to our other files
module.exports = Costume;
