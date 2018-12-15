const express = require('express');
const router = express.Router();
var carDeals = require('../models/CarDeals');


router.post('/API/Insert', (req, res) => {
    res.json({
        success: true
    });
});

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