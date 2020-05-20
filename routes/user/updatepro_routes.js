var exp = require('express');
var router = exp.Router();
var product = require('../../models/product_model');

router.put('/:pro_id', function (req, res, next) {
    console.log('update product');
    product.EditProduct(req.params.pro_id, req.body, function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;
