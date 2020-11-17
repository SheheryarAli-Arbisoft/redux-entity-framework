require('dotenv').config();
const express = require('express');
const { connecDb } = require('./config/db');
const { userRouter, postRouter, commentRouter } = require('./api');

connecDb();

const app = express();

app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/comments', commentRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
