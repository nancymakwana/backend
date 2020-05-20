var db = require("../../dbconnection");
var pro = {
    // getProductByCategory: function (cat_id,callback) {
    // return db.query('SELECT p.*,i.*,c.* FROM product_tbl p,pro_img_tbl i,category_tbl c WHERE p.pro_id=i.fk_pro_id and  c.cat_id=p.fk_cat_id and p.soh>0 and cat_id=? ',[cat_id],callback);
    // },
    getProductByCategory: function (cat_id,callback) {
        return db.query('select p.*,i.*,c.* from product_tbl p join pro_img_tbl i join category_tbl c on p.pro_id=i.fk_pro_id and c.cat_id=p.fk_cat_id and p.soh>0 and cat_id = ? GROUP BY i.fk_pro_id',[cat_id],callback);
        },
};

module.exports = pro;