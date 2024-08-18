const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = require('./config/database');

const PORT = process.env.PORT || 3000;

const app = express();

dbConnect();

app.listen(3000, () => console.log(`App is listening on PORT: ${PORT}`));