const express = require('express');
const router = express.Router();

const carDeals = require('../models/CarDeals');


router.get('/API/Insert', (req, res) => {
    var test = new carDeals({
        tittle: "I need travel to Texas",
        username : "Huu Thai",
        dealtype: "Travel",
        fromlocation: { "locationname": "Fairfield", coordinate: { x: 41.013415, y: -91.962262 } },
        tolocation: { "locationname": "Chicago", coordinate: { x: 41.973883, y: -87.906388 } },
        departureDate: new Date(2019, 01, 30),
        bids: [{
            diverID: "0001",
            driverName: "Huu Thai Ho",
            offerCost: 200,
            biddingDate: new Date(),
            isConfirmed: 0
        },
        {
            diverID: "0002",
            driverName: "Yafei",
            offerCost: 180,
            biddingDate: new Date(),
            isConfirmed: 0
        }
        ],
        status: "New Deal"
    });

    test.save((err) => {

        if (err) console.log(err);
        res.json({
            success: true
        });
    })

});

/** GET Car deal detail */
router.get('/API/CarDeal/:_id', (req, res) => {
    carDeals.findOne({_id: req.params._id}, (err, result) => {
        if(err) throw err;
        res.status(200).json(result);
    })
});


router.post('/API/carDeal', (req, res) => {
    const newCarDeal = new carDeals(req.body);
    newCarDeal.save((err) => {
        if (err) throw err;
        res.json({ success: "Inserted New cardeal to database" })
    });
})

router.patch('/API/OfferCost', (req, res) => {

    let ojb = req.body;
    carDeals.findById(ojb._id,(err,data)=>{
     if(err) throw err;

     let bid ={
        diverID: ojb.diverID,
        driverName: ojb.driverName,
        offerCost: ojb.offerCost,
        biddingDate: new Date(),
        isConfirmed: 0
     }

     data.bids.push(bid);
     data.save((err)=>{
        if(err) throw err;
        res.json({ success: "Offer was updated" });
     });

    })
});

router.get('/API/CarDealList', (req, res) => {
    // var recentDate = new Date();
    carDeals.find({}).sort({ createdDate: 1 })
        .exec((err, data) => {
            res.json(data);
        })

});

router.get('/API/dealdetail/:id', (req, res) => {
    // var recentDate = new Date();

    console.log("abc");
    carDeals.find({_id:req.query.id})
            .exec((err, data) => {
            res.json(data);
        })

});

router.post('/API/CarDealSearch', (req, res) => {
    // var recentDate = new Date();
    let param = req.body;
    console.log(param);

    carDeals.find()
        .where('dealtype').equals(param.dealtype)
        .where('fromlocation.locationname').equals(param.locationfrom)
        .where('tolocation.locationname').equals(param.locationto)
        .sort({ createdDate: 1 })
        .exec((err, data) => {
            res.json(data);
        })

});

router.get('/API/Search', (req, res) => {
    res.json({
        success: true
    });
});

module.exports = router;