var exp=require('express');
var router=exp.Router();

var order=require('../../models/order_model');
router.post('/',function (req, res, next) {
    console.log("Order details ma aayu");
    order.addOrderDetails(req.body,function (err, rows) {
      //  console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/:order_id', function (req,res,next) {
    order.getOrderByOrderId(req.params.order_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports=router;
