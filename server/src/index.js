const express = require('express');
require('dotenv').config();
const dbConnect = require('./config/database');
const cors = require('cors');
const routes = require('./routes/routes');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

const corsOptions = {
    origin: process.env.NODE_ENV === 'production' ? 'https://furnicure-c615f.web.app' : 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

dbConnect();

app.use('/stripeWebhook', bodyParser.raw({ type: 'application/json' }));

app.use(routes);

app.listen(PORT, () => console.log(`App is listening on PORT: ${PORT}`));