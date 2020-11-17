require('dotenv').config();
const express = require('express');
const { connecDb } = require('./config/db');

connecDb();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT);
