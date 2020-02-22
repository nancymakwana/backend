var exp=require('express');
var router=exp.Router();
var category=require('../models/category_model');
router.get('/',function(req,res,next){
    category.getAllCaetgory(function(rows,err){
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

router.delete('/:cat_id', function (req,res,next) {
    category.deleteCategory(req.params.cat_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
            console.log(rows);
        }
    });
});

router.get('/:cat_id', function (req,res,next) {
    category.getCategoryById(req.params.cat_id,function (err, rows) {
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
    category.addCategory(req.body,function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:cat_id',function (req,res,next) {
    
    category.updateCategory(req.params.cat_id,req.body,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports=router;
