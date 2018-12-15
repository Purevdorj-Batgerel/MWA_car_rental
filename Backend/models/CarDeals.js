const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const CarDealSchema = new Schema({
    dealtype: {
        type: String,
        required: true
    },
    fromlocation: {
        name: String,
        coordinate: {
            x: Number,
            y: Number
        }
    },
    tolocation: {
        name: String,
        coordinate: {
            x: Number,
            y: Number
        }
    },

    departureDate: Date,
    bids: [{
        diverID: String,
        driverName: String,
        offerCost: Number,
        biddingDate: Date,
        isConfirmed: Boolean

    }],

    status: String,
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = CarDeals = mongoose.model('cardeals', CarDealSchema);