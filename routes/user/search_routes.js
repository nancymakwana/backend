var exp = require('express');
var router = exp.Router();
var product = require('../../models/user/search_model');
router.get('/:cat_id', function (req, res, next) {
    console.log("category");
    product.getProductByCategory(req.params.cat_id, function (err, rows) {
        console.log(req.params.cat_id);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;
