const express = require('express');
const router = express.Router();

const carDeals = require('../models/CarDeals');


router.get('/API/Insert', (req, res) => {
      var test = new carDeals({
        dealtype: "Travel",
        fromlocation: {"locationname":"FairField",coordinate: {x:41.013415,y:-91.962262}},
        tolocation:  {"locationname" :"Chicago",coordinate: {x:41.973883,y:-87.906388}},
        departureDate: new Date(2018,12,30),
        bids: [],
        status: "New Deal"
      });

      test.save((err)=>{

        if(err) console.log(err);
        res.json({
            success: true
        });
      })

});

router.post('/API/carDeal',(req, res) => {
    const newCarDeal = new carDeals(req.body);
    newCarDeal.save((err) => {
        if(err) throw err;
        res.json({success:"Inserted New cardeal to database"})
    });
})

router.post('/API/Update/:id', (req, res) => {
    res.json({
        success: true
    });
});

router.get('/API/CarDealList', (req, res) => {

    carDeals.find({},(error,data)=>{
        if(error) { res.send("Could not read Car Deal List")};
        res.status(200).json(data);
    });
});

router.get('/API/Search', (req, res) => {
    res.json({
        success: true
    });
});




module.exports = router;