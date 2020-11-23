const express = require('express');
const { check, validationResult } = require('express-validator');
const Post = require('../models/Post');
const { isAuthenticated } = require('../handlers');

const postRouter = express.Router();

postRouter.get('/', async (req, res) => {
  const limit = parseInt(req.query.limit, 10);
  const skip = (parseInt(req.query.page, 10) - 1) * limit;

  try {
    const posts = await Post.find()
      .skip(skip)
      .limit(limit)
      .sort({ timestamp: -1 });
    res.json(posts);
  } catch (err) {
    return res.status(500).json({ msg: 'Server error' });
  }
});

postRouter.post(
  '/create',
  [
    isAuthenticated,
    check('title', 'Title is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: 'Please fill all required fields' });
    }

    const { title, content } = req.body;

    try {
      const post = new Post({
        user: req.user.id,
        title,
        content,
      });

      await post.save();
      res.json({ msg: 'Post created successfully' });
    } catch (err) {
      return res.status(500).json({ msg: 'Server error' });
    }
  }
);

module.exports = { postRouter };
