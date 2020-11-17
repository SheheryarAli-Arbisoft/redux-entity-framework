const express = require('express');
const Post = require('../models/Post');

const postRouter = express.Router();

postRouter.get('/', async (_, res) => {
  try {
    const posts = await Post.find();
    return res.json(posts);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

module.exports = { postRouter };
