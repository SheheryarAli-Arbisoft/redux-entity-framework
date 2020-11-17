const express = require('express');
const User = require('../models/User');

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const { users } = req.query;
  const usersList = JSON.parse(users);

  try {
    const result = await User.find({ _id: { $in: usersList } });
    return res.json(result);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

module.exports = { userRouter };
