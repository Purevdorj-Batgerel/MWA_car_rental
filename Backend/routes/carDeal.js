const express = require('express');
const router = express.Router();

const carDeals = require('../models/CarDeals');


/** GET Car deal detail */
router.get('/API/CarDeal/:_id', (req, res) => {
    carDeals.findOne({
        _id: req.params._id
    }, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    })
});


router.post('/API/carDeal', (req, res) => {
    const newCarDeal = new carDeals(req.body);
    newCarDeal.save((err) => {
        if (err) throw err;
        res.json({
            success: "Inserted New cardeal to database"
        })
    });
})

router.patch('/API/OfferCost', (req, res) => {

    let ojb = req.body;
    carDeals.findById(ojb._id, (err, data) => {
        if (err) throw err;

        let bid = {
            diverID: ojb.diverID,
            driverName: ojb.driverName,
            offerCost: ojb.offerCost,
            biddingDate: new Date(),
            isConfirmed: "Not yet"
        }

        data.bids.push(bid);
        data.save((err) => {
            if (err) throw err;
            res.json({
                success: "Offer was updated"
            });
        });

    })
});

router.get('/API/CarDealList', (req, res) => {
    // var recentDate = new Date();
    carDeals.find({}).sort({
            createdDate: 1
        })
        .exec((err, data) => {
            res.json(data);
        })

});

router.get('/API/dealList/:username', (req, res) => {
    console.log('get historyRequists');
    //getting data from MongoDB (mLab)
    carDeals.find({
            username: req.params.username
        })
        .exec((err, result) => {
            if (err) {
                console.log('Error to get requist');
            } else {
                res.json(result);
            }
        })
})

router.get('/API/dealdetail/:id', (req, res) => {
    // var recentDate = new Date();
    console.log("abc");
    carDeals.find({
            _id: req.query.id
        })
        .exec((err, data) => {
            res.json(data);
        })
});

router.post('/API/CarDealSearch', (req, res) => {
    // var recentDate = new Date();
    const param = req.body;
    let searchParam = {};

    if (param.dealtype != '0') {
        searchParam.dealtype =  param.dealtype;
    }
    if (param.locationfrom != '0') {
       
        searchParam["fromlocation.locationname"] = param.locationfrom;
    }
    if (param.locationto != '0') {
        
        searchParam["tolocation.locationname"] = param.locationto;
    }

    console.log();
    carDeals.find(searchParam)
            .sort({ createdDate: 1 })
            .exec((err, data) => {
                res.json(data);
            })
});

// Get Offer List of specific driver
router.post('/API/OfferHistory', (req, res) => {
  
    const param = req.body;
    console.log();
    carDeals.aggregate([{ "$unwind": "$bids"},{"$match" : {"bids.driverName":param.drivername}}])
            .exec((err, data) => {
             res.json(data);
             });
});

module.exports = router;