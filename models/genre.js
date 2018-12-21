var mongoose = require('mongoose');

var Schema = new mongoose.Schema;

var GenreSchema = new mongoose.Schema(
  {
    name: {type: String, required: true, max: 100}
  }
);

// Virtual for genre's URL

GenreSchema
.virtual('url')
.get(function() {
  return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema)