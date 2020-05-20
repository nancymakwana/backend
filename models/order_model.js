var db = require("../dbconnection");
var order = {
    getAllOrder: function (callback) {
        return db.query('select o.*,u.*  from order_tbl o,user_tbl u  where u.user_id=o.fk_user_id', callback);
    },
    getAllAssignedOrder: function (callback) {
        return db.query('select u.*,o.*,d.*  from user_tbl u,order_tbl o,order_delivery_tbl d where u.user_id=d.dm_user_id and o.order_id=d.fk_order_id', callback);
    },
    getNotAssignedOrder: function (callback) {
        return db.query('SELECT u.*,o.* FROM user_tbl u,order_tbl o WHERE o.fk_user_id=u.user_id and o.order_id not in (select fk_order_id from order_delivery_tbl)', callback);
    },
    //admin side
    getOrderById: function (order_id, callback) {
        return db.query('select od.*,o.*,u.*,p.* from order_details_tbl od,order_tbl o,user_tbl u,product_tbl p where o.order_id=od.fk_order_id and p.pro_id=od.fk_pro_id and u.user_id=o.fk_user_id  and  o.order_id=?', [order_id], callback);
    },
    // getviewmore:function(order_id,callback){
    //     return db.query('select o.*,d.*,u.*,od.*,p.* from user_tbl u,order_tbl o,order_details_tbl od,product_tbl p,order_delivery_tbl d where od.fk_pro_id=p.pro_id  and o.order_id=od.fk_order_id and o.order_id=d.fk_order_id and u.user_id=o.fk_user_id and o.order_id=?',[order_id],callback);
    // },
    UpdateOrder: function (user_id, item, callback) {
        return db.query('update user_tbl  set user_email=?,password=?,fname=?,lname=?,address=?,city=?,pincode=?,mob_no=?,gender=?,img=?,type=? where user_id=?'
            , [item.user_email, item.password, item.fname, item.lname, item.address, item.city, item.pincode, item.mob_no, item.gender, filename, item.type, user_id], callback);
    },
    getDeliveryById: function (fk_order_id, callback) {
        return db.query('select d.*,u.* from user_tbl u,order_delivery_tbl d where u.user_id=d.dm_user_id and d.fk_order_id=?', [fk_order_id], callback);
    },

    //user site
    deleteOrder: function (order_id, callback) {
        return db.query('delete from order_tbl where order_id=?', [order_id], callback);
    },
    addOrder: function (item, callback) {
        // console.log('order'+item);
        return db.query('insert into order_tbl values(?,?,?,?,?,?,?)',
            [item.order_id, item.amount, item.date,item.days,
            item.address, 0, item.fk_user_id], callback);
    },
    addOrderDetails(item, callback) {
        console.log(item);
        return db.query('insert into order_details_tbl values(?,?,?,?)', [item.order_details_id, item.fk_order_id, item.fk_pro_id, item.qty], callback);
    },
    getOrderByUserId(fk_user_id, callback) {
        console.log(fk_user_id);
        return db.query('select o.* from order_tbl o WHERE  o.order_id not in (select fk_order_id from order_details_tbl)  and o.fk_user_id = ?', [fk_user_id], callback);
    },
    getOrderByOrderId(order_id,callback)
    {
        return db.query('select DISTINCT o.*,od.*,d.*,p.*,i.*,u.* from order_tbl o,order_details_tbl od,order_delivery_tbl d,product_tbl p,pro_img_tbl i,user_tbl u where o.order_id=od.fk_order_id and p.pro_id=od.fk_pro_id and o.order_id=d.fk_order_id and p.pro_id=i.fk_pro_id and u.user_id=o.fk_user_id  and o.order_id=?',[order_id],callback);
    },
    CurrentOrder(fk_user_id,callback)
    {
        console.log(fk_user_id);
        return db.query('select DISTINCT o.*,od.*,d.*,p.*,i.* from order_tbl o,order_details_tbl od,order_delivery_tbl d,product_tbl p,pro_img_tbl i where o.order_id=od.fk_order_id and p.pro_id=od.fk_pro_id and o.order_id=d.fk_order_id and p.pro_id=i.fk_pro_id and d.delivery_status="not-delivered" and o.fk_user_id=?',[fk_user_id],callback);
    },
    PastOrder(fk_user_id,callback)
    {
      return db.query('select DISTINCT o.*,od.*,d.*,p.*,i.* from order_tbl o,order_details_tbl od,order_delivery_tbl d,product_tbl p,pro_img_tbl i where o.order_id=od.fk_order_id and p.pro_id=od.fk_pro_id and o.order_id=d.fk_order_id and p.pro_id=i.fk_pro_id and d.delivery_status="delivered" and o.fk_user_id=?',[fk_user_id],callback);  
    }
};

module.exports = order;