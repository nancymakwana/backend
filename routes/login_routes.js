
var exp=require('express');
var router=exp.Router();
var user=require('../models/user/loginuser_model');
router.post('/',function (req, res, next) {
// console.log("post ma aayu");
    user.LoginUser(req.body,function (err, rows) {
      // console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


module.exports=router;
