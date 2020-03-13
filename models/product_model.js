var db = require("../dbconnection");
var product = {
    getAllProduct: function (callback) {
        return db.query('select p.*,c.* from product_tbl p,category_tbl c  where c.cat_id=p.fk_cat_id ', callback);
    },
    deleteProduct: function (pro_id, callback) {
        return db.query('delete from product_tbl where pro_id=?', [pro_id], callback);
    },
    getProductById: function (pro_id, callback) {
        return db.query('select p.*,c.*,i.* from product_tbl p,category_tbl c,pro_img_tbl i where p.fk_cat_id=c.cat_id and p.pro_id=i.fk_pro_id and p.pro_id=?', [pro_id], callback);
    },
    addProduct: function (item,callback) {
        return db.query('insert into product_tbl  values(?,?,?,?,?,?,?,?,?,?)', [item.pro_id, item.pro_name, item.info, item.size, item.color, item.rent, item.soh,item.fashion, item.sp_instruction, item.fk_cat_id], callback);
    },
    UpdateProduct: function (pro_id,item,callback) {
        return db.query('update product_tbl set pro_name=?,info=?,size=?,color=?,rent=?,soh=?,sp_instruction=?,fk_cat_id=? where pro_id=?',[item.pro_name, item.info, item.size, item.color, item.rent, item.soh, item.sp_instruction, item.fk_cat_id,pro_id], callback);
    }
};

module.exports = product;