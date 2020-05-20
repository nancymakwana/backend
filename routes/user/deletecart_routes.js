var exp = require('express');
var router = exp.Router();
var cart = require('../../models/user/cart_model');
router.delete('/:user_id', function (req, res, next) {
    cart.deleteCart(req.params.user_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
            console.log(rows);
        }
    });
});

module.exports = router;
