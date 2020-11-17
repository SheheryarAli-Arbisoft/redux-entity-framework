const express = require('express');
const Post = require('../models/Post');

const postRouter = express.Router();

postRouter.get('/', async (req, res) => {
  const skip = parseInt(req.query.skip, 10);
  const limit = parseInt(req.query.limit, 10);

  try {
    const posts = await Post.find().skip(skip).limit(limit);
    return res.json(posts);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

module.exports = { postRouter };
