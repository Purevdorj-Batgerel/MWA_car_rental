const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors')


var location = require('./models/Location');

require('dotenv').config()

const path = require('path'); //node core module

const app = express();
const port = process.env.PORT || 5000;

const dbURI = require('./config/keys').mongoURI;

app.use(cors())
app.use(express.static(path.resolve('public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

/** MongoDB connection */
mongoose
    .connect(dbURI, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('MongoDB Connected')
        
    })
    .catch(err => {
        console.error(err);
    })

/* ROUTES */
app.use('/api/user',require('./routes/user'));
app.use("/",require('./routes/carDeal'));



app.listen(port, () => console.log(`Server running on port ${port}`));