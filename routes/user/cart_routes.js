var exp = require('express');
var router = exp.Router();
var cart = require('../../models/user/cart_model');
router.delete('/:cart_id', function (req, res, next) {
    cart.deleteCartItems(req.params.cart_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
            console.log(rows);
        }
    });
});

router.get('/:cart_id', function (req, res, next) {
    cart.getcartByUserId(req.params.cart_id, function (err, rows) {
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
    cart.addInCart(req.body,function (err, rows) {
        console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:cart_id', function (req, res, next) {
console.log('update');
    cart.updateCart(req.params.cart_id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;
