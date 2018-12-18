const express = require('express');
const router = express.Router();
var location = require('../models/Location');

router.get('/getAll', (req, res) => {
    location.find({},(error,data)=>{
        if(error) { res.send("Could not read location List")};
        res.status(200).json(data);
    });
});


module.exports = router;