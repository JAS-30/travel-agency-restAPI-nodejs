//get express
import express from "express";
import mysql from "mysql";
const app = express();

//body parse
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//routing
import user_route from "./routes/user.route.js"; 
import product_route from"./routes/product.route.js";
import order_route from"./routes/order.route.js";
import filtered_route from"./routes/filtered_orders.route.js"; 


//connect to mysql database
const db = mysql.createPool({
    host: "localhost",
  port: "3306",
  user: "root",
  password: "YOUR_MYSQL_PASSWORD",       
  database: "orizon"
});

db.getConnection((err)=>{
    if(err){
        console.log("Unable to connect to DB");
        console.log(err.message);
    }
    console.log("Database connencted successfully");
});

export default  db;


app.use("/users", user_route);
app.use("/products", product_route);
app.use("/orders", order_route);
app.use("/filtered-orders", filtered_route);


app.listen(3000,()=>{
    console.log("Server started at port 3000");
});





