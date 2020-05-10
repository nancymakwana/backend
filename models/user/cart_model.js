var db = require("../../dbconnection");
var cart = {
    getcartByUserId: function (user_id,callback) {
    return db.query('SELECT c.*,u.user_id,p.*,i.* FROM cart_tbl c,pro_img_tbl i,product_tbl p,user_tbl u WHERE p.pro_id=i.fk_pro_id and u.user_id=c.fk_user_id and c.fk_pro_id=p.pro_id and fk_user_id=?',[user_id],callback);
    },
    deleteCartItems: function (cart_id, callback) {
        return db.query('delete from cart_tbl where cart_id=?', [cart_id], callback);
    },
    addInCart:function(item,callback){
        return db.query('insert into cart_tbl values(?,?,?,?,?)',[item.cart_id,item.fk_pro_id,item.fk_user_id,item.items,item.total],callback);
    },
    
    updateCart:function(cart_id,item,callback)
    {
        console.log(item);
        return db.query('update cart_tbl set items=?,total=? where cart_id=?'
        ,[item.items,item.total,cart_id],callback);
    }
    
};

module.exports = cart;