var exp = require('express');
var router = exp.Router();
var product = require('../../models/user/pro_model');
router.get('/:fashion', function (req, res, next) {
    console.log('product');
    product.getProductByFashion(req.params.fashion, function (err, rows) {
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
