const express = require('express');
const queryString = require('query-string');
const User = require('../models/User');

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const { list } = req.query;
  const data = queryString.parse(list);

  try {
    const result = await User.find({ _id: { $in: data.users } });
    return res.json(result);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

module.exports = { userRouter };
