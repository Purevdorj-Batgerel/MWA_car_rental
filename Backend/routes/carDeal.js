const express = require('express');
const router = express.Router();
var carDeals = require('../models/CarDeals');


router.get('/API/Insert', (req, res) => {

      var test = new carDeals({
        tittle : "I need travel to Texas",
        dealtype: "Travel",
        fromlocation: {"locationname":"Boston",coordinate: {x:41.013415,y:-91.962262}},
        tolocation:  {"locationname" :"Texas",coordinate: {x:41.973883,y:-87.906388}},
        departureDate: new Date(2019,01,30),
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
      })

      test.save((err)=>{

        if(err) console.log(err);
        res.json({
            success: true
        });
      })

});

router.post('/API/Update/:id', (req, res) => {
    res.json({
        success: true
    });
});

router.get('/API/CarDealList', (req, res) => {
   
    var recentDate = new Date();
    carDeals.find({}).sort({createdDate:1})
    .exec((err,data)=>{
                        
                          res.json(data);
                      })
});

router.get('/API/Search', (req, res) => {
    res.json({
        success: true
    });
});




module.exports = router;