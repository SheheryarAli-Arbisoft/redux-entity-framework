const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model('comment', CommentSchema);
