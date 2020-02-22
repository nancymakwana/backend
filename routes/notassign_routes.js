var exp=require('express');
var router=exp.Router();

var order=require('../models/order_model');

router.get('/', function (req,res,next) {
    console.log("get ma aayu");
    order.getNotAssignedOrder(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports=router;
