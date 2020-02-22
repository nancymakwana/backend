var exp=require('express');
var router=exp.Router();
var product=require('../models/product_model');
var multer=require('multer');
var path=require('path');
var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images/product_images/');
    },
    filename:(req,file,cb)=>{
        x=file.fieldname+'-'+Date.now()+path.extname(file.originalname)
        cb(null,x);
    }
});
var upload=multer({storage:storage});


router.get('/',function(req,res,next){
    product.getAllProduct(function(rows,err){
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

router.delete('/:pro_id', function (req,res,next) {
    product.deleteProduct(req.params.pro_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
            console.log(rows);
        }
    });
});

router.get('/:pro_id', function (req,res,next) {
   console.log('product');
    product.getProductById(req.params.pro_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.post('/',function (req, res, next) {
    console.log("post ma aayu");
    product.addProduct(req.body,function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:pro_id',function (req,res,next) {
    
    product.UpdateProduct(req.params.pro_id,req.body,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports=router;
