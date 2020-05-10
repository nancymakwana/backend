var exp=require('express');
var router=exp.Router();

var order=require('../models/order_model');
router.get('/',function(req,res,next){
    order.getAllOrder(function(rows,err){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});

router.post('/',function (req, res, next) {
    //console.log("post ma aayu");
    order.addOrder(req.body,function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
// router.post('/:fk_order_id',function (req, res, next) {
//     console.log("Order details ma aayu");
//     order.addOrderDetails(req.params.fk_order_id,req.body,function (err, rows) {
//         console.log(req.body);
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows);
//         }
//     });
// });

router.get('/:order_id', function (req,res,next) {
    order.getOrderById(req.params.order_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/:order_id',function (req,res,next) {
    order.UpdateOrder(req.body,req.params.order_id,function (err, rows) {
       // console.log(req.file.filename);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports=router;
