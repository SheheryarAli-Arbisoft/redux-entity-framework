const express = require('express');
const Comment = require('../models/Comment');

const commentRouter = express.Router();

commentRouter.get('/', async (_, res) => {
  try {
    const comments = await Comment.find();
    return res.json(comments);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

module.exports = { commentRouter };
