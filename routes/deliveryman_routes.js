var exp=require('express');
var router=exp.Router();
var multer=require('multer');
var path=require('path');
var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images/deliveryman_images/');
    },
    filename:(req,file,cb)=>{
        x=file.fieldname+'-'+Date.now()+path.extname(file.originalname)
        cb(null,x);
    }
});
var upload=multer({storage:storage});
var deliveryman=require('../models/deliveryman_model');


router.get('/',function(req,res,next){
    deliveryman.getAllDeliveryman(function(rows,err){
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

router.delete('/:user_id', function (req,res,next) {
    deliveryman.deleteDeliveryman(req.params.user_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:user_id', function (req,res,next) {
    deliveryman.getDeliverymanById(req.params.user_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.post('/', upload.single('img'),function (req, res, next) {
    console.log("post ma aayu");
    deliveryman.addDeliveryman(req.body, req.file.filename,function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:user_id', upload.single('img'),function (req,res,next) {
    console.log("update");
    deliveryman.UpdateDeliveryman(req.params.user_id,req.body,req.file!=null?req.file.filename:req.body.img,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports=router;
