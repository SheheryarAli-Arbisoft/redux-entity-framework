const express = require('express');
const User = require('../models/User');

const userRouter = express.Router();

userRouter.get('/', async (_, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

module.exports = { userRouter };
