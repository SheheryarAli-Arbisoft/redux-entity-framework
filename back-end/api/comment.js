const express = require('express');
const { check, validationResult } = require('express-validator');
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const { isAuthenticated } = require('../handlers');

const commentRouter = express.Router();

commentRouter.post(
  '/create/:post_id',
  [isAuthenticated, check('comment', 'Comment is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: 'Please fill all required fields' });
    }

    const { comment } = req.body;

    try {
      const newComment = new Comment({
        user: req.user.id,
        content: comment,
      });
      await newComment.save();

      const post = await Post.findById(req.params.post_id);
      post.comments.push(newComment.id);
      await post.save();

      res.json(newComment);
    } catch (error) {
      return res.status(500).json({ msg: 'Server error' });
    }
  }
);

commentRouter.post('/', async (req, res) => {
  const { comments: commentsList } = req.body;

  try {
    const result = {};
    const comments = await Comment.find({ _id: { $in: commentsList } });

    comments.forEach(comment => {
      result[comment.id] = comment;
    });
    res.json(result);
  } catch (err) {
    return res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = { commentRouter };
