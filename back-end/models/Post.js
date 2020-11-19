const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    },
  ],
  comments: [
    {
      comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment',
      },
    },
  ],
});

module.exports = mongoose.model('post', PostSchema);
