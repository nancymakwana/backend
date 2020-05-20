var db = require("../../dbconnection");
var pro = {
    getProductByFashion: function (fashion,callback) {
    return db.query('select i.*,p.* from product_tbl p join pro_img_tbl i on p.pro_id=i.fk_pro_id and p.soh>0 and  fashion= ? GROUP BY i.fk_pro_id',[fashion],callback);
    },
};

module.exports = pro;