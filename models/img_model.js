var db = require("../dbconnection");
var product_img = {
    getAllImage: function (callback) {
        return db.query('select p.*,i.* from product_tbl p,pro_img_tbl i where p.pro_id=i.fk_pro_id', callback);
    },
    deleteImage: function (pro_img_id, callback) {
        return db.query('delete from pro_img_tbl where pro_img_id=?', [pro_img_id], callback);
    },
    // getImageById: function (pro_img_id, callback) {
    //     return db.query('select p.*,i.* from product_tbl p,pro_img_tbl i where i.fk_pro_id=p.pro_id and i.pro_img_id=?', [pro_img_id], callback);
    // },
    getImageById: function (pro_id, callback) {
        return db.query('select * from pro_img_tbl  where fk_pro_id=?',[pro_id], callback);
    },
    addImage: function (fk_pro_id,item,filename, callback) {
        return db.query('insert into pro_img_tbl values(?,?,?)', [item.pro_img_id,fk_pro_id,filename], callback);
    },
    UpdateImage: function ( pro_img_id,filename, callback) {
        return db.query('update pro_img_tbl  set img1=? where pro_img_id=?',
         [filename,pro_img_id,], callback);
    }
};

module.exports = product_img;