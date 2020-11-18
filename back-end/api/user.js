const express = require('express');
const User = require('../models/User');

const userRouter = express.Router();

userRouter.post('/', async (req, res) => {
  const { users } = req.body;

  try {
    const result = await User.find({ _id: { $in: users } });
    return res.json(result);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

module.exports = { userRouter };
