const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors')


var location = require('./models/Location');

require('dotenv').config()

const path = require('path'); //node core module

const app = express();
const port = process.env.PORT || 5000;

const {
    mongoURI
} = require('./config/keys');

app.use(cors())
app.use(express.static(path.resolve('public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

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
    })

/* ROUTES */
app.use('/api/user', require('./routes/user'));
app.use("/", require('./routes/carDeal'));

app.post('/test', (req, res) => {
    console.log(req.body);
    res.json({
        "test": "OK"
    });
})



app.listen(port, () => console.log(`Server running on port ${port}`));