
var exp=require('express');
var router=exp.Router();
var multer=require('multer');
var path=require('path');
var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images/product_images/');
    },
    filename:(req,file,cb)=>{
        x=file.fieldname+'-'+Date.now()+path.extname(file.fieldname)
        cb(null,x);
    }
});
var upload=multer({storage:storage});

var product_img=require('../models/img_model');
router.get('/',function(req,res,next){
    product_img.getAllImage(function(rows,err){
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

router.delete('/:pro_img_id', function (req,res,next) {
    product_img.deleteImage(req.params.pro_img_id,function (err, rows) {
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
    product_img.getImageById(req.params.pro_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.post('/:fk_pro_id',upload.single('img'),function (req, res, next) {
    console.log("post ma aayu");
    product_img.addImage(req.params.fk_pro_id,req.body,req.file.filename,function (err, rows) {
        console.log(req.file.filename);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:pro_img_id',  upload.single('img'),function (req,res,next) {
    product_img.UpdateImage(req.params.pro_img_id, req.file!=null?req.file.filename:req.body.img, function (err, rows) {
        
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports=router;
