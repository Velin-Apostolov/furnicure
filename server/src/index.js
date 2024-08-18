const express = require('express');
require('dotenv').config();
const dbConnect = require('./config/database');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));

dbConnect();

app.listen(3000, () => console.log(`App is listening on PORT: ${PORT}`));