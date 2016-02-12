var mongoose = require('mongoose');

var themeSchema = new mongoose.Schema({
  theme: { type: String, required: true}
});

var Theme = mongoose.model('Theme', themeSchema);

// Make this available to our other files
module.exports = Theme;
