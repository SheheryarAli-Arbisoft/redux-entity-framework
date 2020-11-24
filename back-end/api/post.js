const express = require('express');
const { check, validationResult } = require('express-validator');
const Post = require('../models/Post');
const { isAuthenticated } = require('../handlers');

const postRouter = express.Router();

postRouter.get('/', async (req, res) => {
  const currentPage = req.query.currentPage || 1;
  const pageSize = req.query.pageSize || 25;
  const totalRecords = req.query.totalRecords || (await Post.count());
  const { startId } = req.query;

  const options = {};
  if (startId) {
    options._id = startId;
  }

  try {
    const result = {};
    const posts = await Post.find(options)
      .skip((parseInt(currentPage, 10) - 1) * pageSize)
      .limit(pageSize)
      .sort({ timestamp: -1 });

    posts.forEach(post => {
      result[post.id] = post;
    });

    const hasMoreRecords = posts.length >= pageSize;
    const pagination = {
      currentPage,
      pageSize,
      totalRecords,
      hasMoreRecords,
      startId: currentPage === 1 ? posts[0].id : startId,
    };

    res.json({ posts: result, pagination });
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

postRouter.put('/like/:post_id', isAuthenticated, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    const index = post.likes.indexOf(req.user.id);
    if (index === -1) {
      post.likes.push(req.user.id);
    }
    await post.save();
    res.json(post);
  } catch (err) {
    return res.status(500).json({ msg: 'Server error' });
  }
});

postRouter.put('/unlike/:post_id', isAuthenticated, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    const removeIndex = post.likes.indexOf(req.user.id);
    if (removeIndex !== -1) {
      post.likes.splice(removeIndex, 1);
    }
    await post.save();
    res.json(post);
  } catch (err) {
    return res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = { postRouter };
