var db = require("../../dbconnection");
var pro = {
    getProductByCategory: function (cat_id,callback) {
    return db.query('SELECT p.*,i.*,c.* FROM product_tbl p,pro_img_tbl i,category_tbl c WHERE p.pro_id=i.fk_pro_id and  c.cat_id=p.fk_cat_id and cat_id=? ',[cat_id],callback);
    },
    getProductForKids: function (callback) {
        return db.query('SELECT p.*,i.* FROM product_tbl p,pro_img_tbl i WHERE fashion="girl" or fashion="boy" or fashion="both"',callback);
    },
};

module.exports = pro;