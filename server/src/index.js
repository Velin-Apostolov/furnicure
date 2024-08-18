const express = require('express');
require('dotenv').config();
const dbConnect = require('./config/database');
const cors = require('cors');
const routes = require('./routes/routes');

const PORT = process.env.PORT || 3000;

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dbConnect();

app.use(routes);

app.listen(3000, () => console.log(`App is listening on PORT: ${PORT}`));