var exp=require('express');
var router=exp.Router();

var order=require('../models/order_model');


router.get('/:fk_order_id', function (req,res,next) {
    console.log("get ma aayu");
    order.getDeliveryById(req.params.fk_order_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/', function (req,res,next) {
    console.log("get ma aayu");
    order.getAllAssignedOrder(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports=router;
