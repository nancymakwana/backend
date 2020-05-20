var db = require("../../dbconnection");
var feedback = {
    addFeedback(item, callback) {
        console.log(item);
        return db.query('insert into feedback_tbl values(?,?,?,?)', [item.feedback_id, item.fk_user_id, item.fk_pro_id, item.msg], callback);
    },
    getFeedbackById(fk_pro_id,callback)
    {
        return db.query('select f.*,u.* from feedback_tbl f,user_tbl u where u.user_id=f.fk_user_id and  fk_pro_id=?',[fk_pro_id],callback);
    }
};
module.exports = feedback;