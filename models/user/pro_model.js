var db = require("../../dbconnection");
var pro = {
    getProductByFashion: function (fashion,callback) {
    return db.query('SELECT p.*,i.* FROM product_tbl p,pro_img_tbl i WHERE p.pro_id=i.fk_pro_id and  fashion=?',[fashion],callback);
    },
    getProductForKids: function (callback) {
        return db.query('SELECT p.*,i.* FROM product_tbl p,pro_img_tbl i WHERE fashion="girl" or fashion="boy" or fashion="both"',callback);
    },
};

module.exports = pro;