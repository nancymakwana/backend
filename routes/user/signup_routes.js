
var exp=require('express');
var router=exp.Router();
var user=require('../../models/user/loginuser_model');
router.post('/',function (req, res, next) {
    console.log("post ma aayu");
    user.addUser(req.body,function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


// router.put('/:user_id', upload.single('img') ,function (req,res,next) {
//     console.log("update");
//     user.UpdateUser(req.params.user_id,req.body,req.file.filename,function (err, rows) {
//         console.log(req.file.filename);
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows);
//         }
//     });
// });
module.exports=router;
