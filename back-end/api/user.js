const express = require('express');
const { check, validationResult } = require('express-validator');
const bcyrpt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const userRouter = express.Router();

userRouter.post('/', async (req, res) => {
  const { users } = req.body;

  try {
    const result = await User.find({ _id: { $in: users } });
    res.json(result);
  } catch (err) {
    return res.status(500).send('Server error');
  }
});

userRouter.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ msg: 'Please fill all required fields' });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ msg: 'User with this email already exists' });
      }

      const salt = await bcyrpt.genSalt();
      const hashedPassword = await bcyrpt.hash(password, salt);

      user = new User({
        name,
        email,
        password: hashedPassword,
      });
      await user.save();

      const token = jwt.sign(
        {
          user: {
            id: user.id,
          },
        },
        process.env.JWT_SECRET,
        {
          expiresIn: 86400,
        }
      );

      res.json({ token });
    } catch (err) {
      return res.status(500).json({ msg: 'Server error' });
    }
  }
);

module.exports = { userRouter };
