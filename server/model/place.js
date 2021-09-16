const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Place = new Schema({
  city: String,
  title: String,
  type: String,
  description: String,
  img: String,
  lat: Number,
  lng: Number,
  like: Number
});

const User = new Schema ({
  email: String,
  local: Boolean,
  tourist: Boolean,
  posts: [Place],

})

const UserModel = mongoose.model('User', User);
const PlaceModel = mongoose.model('Place', Place);

module.exports = PlaceModel;
