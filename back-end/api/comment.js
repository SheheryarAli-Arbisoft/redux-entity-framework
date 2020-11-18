const express = require('express');
const Comment = require('../models/Comment');

const commentRouter = express.Router();

commentRouter.post('/', async (req, res) => {
  const { comments } = req.body;

  try {
    const result = await Comment.find({ _id: { $in: comments } });
    return res.json(result);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

module.exports = { commentRouter };
