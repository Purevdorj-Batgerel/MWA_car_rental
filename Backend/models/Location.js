const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const LocationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    }
});

module.exports = Locations = mongoose.model('locations', LocationSchema);