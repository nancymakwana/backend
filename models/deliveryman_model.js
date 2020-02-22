var db = require("../dbconnection");
var deliveryman = {
    getAllDeliveryman: function (callback) {
        return db.query('select * from user_tbl where type="deliveryman"', callback);
    },
    deleteDeliveryman: function (user_id, callback) {
        return db.query('delete from user_tbl where user_id=?', [user_id], callback);
    },
    getDeliverymanById: function (user_id, callback) {
        return db.query('select * from user_tbl where user_id=?', [user_id], callback);
    },
    addDeliveryman: function (item, filename, callback) {
        return db.query('insert into user_tbl values(?,?,?,?,?,?,?,?,?,?,?,?)', [item.user_id, item.user_email, item.password, item.fname, item.lname, item.address, item.city, item.pincode, item.mob_no, item.gender, filename, item.type], callback);
    },
    UpdateDeliveryman: function (user_id, item, filename, callback) {
        return db.query('update user_tbl  set user_email=?,password=?,fname=?,lname=?,address=?,city=?,pincode=?,mob_no=?,gender=?,img=?,type=? where user_id=?'
            , [item.user_email, item.password, item.fname, item.lname, item.address, item.city, item.pincode, item.mob_no, item.gender, filename, item.type, user_id], callback);
    }
};
module.exports = deliveryman;