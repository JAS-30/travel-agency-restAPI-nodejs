const mysql = require("mysql");

//connect to mysql database
const db = mysql.createConnection({
    host: "localhost",
  port: "3306",
  user: "root",
  password: "**YOUR MYSQL PASSWORD**",       //your Mysql passsword
  database: "orizon"
});

db.connect((err)=>{
    if(err){
        console.log("Unable to connect to DB");
    }
    console.log("Database connencted successfully");
});

module.exports = db;