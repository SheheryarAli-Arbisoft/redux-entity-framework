const express = require('express');
const Comment = require('../models/Comment');

const commentRouter = express.Router();

commentRouter.get('/', async (req, res) => {
  const { comments } = req.query;
  const commentsList = JSON.parse(comments);

  try {
    const result = await Comment.find({ _id: { $in: commentsList } });
    return res.json(result);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

module.exports = { commentRouter };
