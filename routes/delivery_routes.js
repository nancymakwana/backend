
var exp=require('express');
var router=exp.Router();
var multer=require('multer');
var delivery=require('../models/delivery_model');
var path=require('path');
var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images/delivery_images/');
    },
    filename:(req,file,cb)=>{
        x=file.fieldname+'-'+Date.now()+path.extname(file.originalname)
        cb(null,x);
    }
});
var upload=multer({storage:storage});
router.get('/',function(req,res,next){
    delivery.getAllDelivery(function(rows,err){
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

router.get('/:order_delivery_id', function (req,res,next) {
    delivery.getDeliveryById(req.params.order_delivery_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.post('/:fk_order_id',function (req, res, next) {
    console.log("post ma aayu");
    delivery.addOrder(req.params.fk_order_id,req.body,function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports=router;
