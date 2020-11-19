const express = require('express');
const { check, validationResult } = require('express-validator');
const Post = require('../models/Post');

const postRouter = express.Router();

postRouter.get('/', async (req, res) => {
  const limit = parseInt(req.query.limit, 10);
  const skip = (parseInt(req.query.page, 10) - 1) * limit;

  try {
    const posts = await Post.find().skip(skip).limit(limit);
    return res.json(posts);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

postRouter.post(
  '/new',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: 'Please fill all required fields' });
    }

    const { title, content } = req.body;

    console.log('Title:', title);
    console.log('Content:', content);

    return res.send('Post created');
  }
);

module.exports = { postRouter };
