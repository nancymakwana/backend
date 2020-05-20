
//not useful

var exp=require('express');
var router=exp.Router();

var order=require('../../models/order_model');

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
