const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    unique: true,
    type: String
  },
  password: String,
  favorites: Array //reference to data pulled from API
})