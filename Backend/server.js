const express = require('express');
const mongoose = require('mongoose');

const logger = require('morgan');
const app = express();
const port = process.env.PORT || 5000;

const dbURI = require('./config/keys').mongoURI;

app.use(express.static(path.resolve('public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

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

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

app.listen(port, () => console.log(`Server running on port ${port}`));