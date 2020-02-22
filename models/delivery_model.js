var db = require("../dbconnection");
var delivery = {
    getAllDelivery: function (callback) {
        return db.query('select o.*,u.*,od.*,p.*,d.* from order_tbl o, user_tbl u, order_details_tbl od,product_tbl p,order_delivery_tbl d where u.user_id=o.fk_user_id and o.order_id=od.fk_order_id and p.pro_id=od.fk_pro_id and o.order_id=d.fk_order_id', callback);
    },
    getDeliveryById: function (order_delivery_id, callback) {
        return db.query('select od.*,o.*,u.* from order_delivery_tbl od,order_tbl o,user_tbl u where od.fk_order_id=o.order_id and u.user_id=od.fk_user_id and od.order_delivery_id=?', [order_delivery_id], callback);
    },
    addOrder:function (fk_order_id,item,callback) {
       // console.log(item);
        
        return db.query('insert into order_delivery_tbl values(?,?,?,?,?,?,?)',
         [item.order_delivery_id,fk_order_id,item.dm_user_id,item.comment,"not-delivered",item.date,item.dig_sign], callback);
    }
};

module.exports = delivery;