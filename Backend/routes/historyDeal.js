const express=require('express');
const router=express.Router();

const carDeals = require('../models/CarDeals');

router.get('API/HistoryDealList/:username',(req,res)=>{
    console.log('get historyRequists')
    carDeals.find({username:req.params.username})
        .exec((err,result)=>{
            if(err){
                console.log('Error to get requist');
            }else{
                res.json(result);
            }
        })
})


module.exports=router;

