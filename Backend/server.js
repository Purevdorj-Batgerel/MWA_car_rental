const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path'); //node core module

require('dotenv').config();

const {
    mongoURI
} = require('./config/keys');
const tokenVerifier = require('./middlewares/tokenVerifier');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 5000;

/** Configurations */
app.use(cors());
app.use(helmet());
app.use(express.static(path.resolve('public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

/** Middlewares */
app.use('/API', tokenVerifier());

/** MongoDB connection */
mongoose
    .connect(mongoURI, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch(err => {
        console.error(err);
    });

/* ROUTES */
app.use('/API/user', require('./routes/user'));
app.use("/", require('./routes/carDeal'));
app.use("/API/location", require('./routes/location'));

/** PASS SPA HTML */
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public','index.html'));
});

/** Error Handling */
app.use(errorHandler());

/** Bootup */
app.listen(port, () => console.log(`Server running on port ${port}`));