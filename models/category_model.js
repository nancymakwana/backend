var db=require("../dbconnection");
var category={
getAllCaetgory:function(callback){
    return db.query('select * from category_tbl',callback);
},
deleteCategory: function (cat_id, callback) {
    return db.query('delete from category_tbl where cat_id=?', [cat_id], callback);
},
getCategoryById: function (cat_id, callback) {
    return db.query('select * from category_tbl where cat_id=?', [cat_id], callback);
},
addCategory:function(item,callback){
    return db.query('insert into category_tbl values(?,?)',[item.cat_id,item.cat_name],callback);
},

updateCategory:function(cat_id,item,callback)
{
    console.log(item);
    return db.query('update category_tbl set cat_name=? where cat_id=?'
    ,[item.cat_name,cat_id],callback);
}
};

module.exports=category;