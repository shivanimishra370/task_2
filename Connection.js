var mysql=require("mysql")
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Sbmsa@12345',
    database:'demo'
});
module.exports=db;