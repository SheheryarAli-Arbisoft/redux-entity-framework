const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: Number,
  },
});

module.exports = mongoose.model('user', UserSchema);
