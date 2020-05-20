var exp = require('express');
var router = exp.Router();
var feedback = require('../../models/user/feedeback_model');
router.post('/', function (req, res, next) {
    console.log('feedback ma aayu');
    feedback.addFeedback(req.body,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:fk_pro_id', function (req,res,next) {
    feedback.getFeedbackById(req.params.fk_pro_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;
