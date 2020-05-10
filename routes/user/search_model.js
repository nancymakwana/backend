var exp = require('express');
var router = exp.Router();
var product = require('../../models/user/search_model');
router.get('/:cat_id', function (req, res, next) {
    console.log('cate');
    product.getProductByCategory(req.params.cat_id, function (err, rows) {
        
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/', function (req, res, next) {
    console.log('product');
    product.getProductForKids(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;
