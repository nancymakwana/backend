var exp=require('express');
var router=exp.Router();

var order=require('../../models/order_model');

router.get('/:fk_user_id', function (req,res,next) {
    console.log("get order");
    order.getOrderByUserId(req.params.fk_user_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports=router;
