import db from '../server.js';
 
// function that resolves the sql query if valid
function queryPromise(sql, values=[]){
   return new Promise((resolve, reject)=>{
       db.query(sql, values, (error, results)=>{
           if(error){
               reject(error);
           }else {
               resolve(results);
           }
       });
   });
}
//post order or add customer to order
const postOrder = async(req, res)=>{
    try {
        let {order_id,user_id,user_name,user_surname,user_email,product} = req.body;
        const newOrder = [order_id,user_id,user_name,user_surname,user_email,product];
        const SQL = "INSERT INTO orders (order_id,user_id,user_name,user_surname,user_email,product) VALUES (?,?,?,?,?,?)";
        const result = await queryPromise(SQL, newOrder);
        res.json({order_id,user_id,user_name,user_surname,user_email,product});

    } catch (err) {
        console.error(err.message);
    }
};
//get all orders 
const getOrders= async(req,res)=>{
    try {
       const SQL = "Select * from orders";
       const result = await queryPromise(SQL) ;
       res.json(result);
    } catch (err) {
        console.error(err.message);
    }
};
//get order by ID 
const getOrderByID = async(req,res)=>{
    try {
        const {id}=req.params;
        const order_id =[id];
        const SQL ='SELECT * FROM orders WHERE order_id=?';
        const result = await queryPromise(SQL, order_id);
        res.json(result);  
    } catch (err) {
        console.error(err.message);
    }
};
//delete order by ID 
const deleteOrder = async(req,res)=>{
    try {
        const {id}= req.params;
        const order_id= [id];
        const SQL = 'DELETE FROM orders WHERE order_id =?';
        const result = await queryPromise(SQL, order_id);
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
};
//change user data in order 
const changeUserInOrder = async(req,res)=>{
    try {
        let {product,user_name,user_surname,user_email}=req.body;
        let params = {
            id : req.params.id,
            userId : req.params.userId
        };
        const parameters = [params.id, params.userId];
        const newOrder = [product,user_name,user_surname,user_email];
        const query_data= newOrder.concat(parameters);
        const SQL = "UPDATE orders SET product=?,user_name=?,user_surname=?,user_email=? WHERE order_id=? AND user_id=?";
        const result = await queryPromise(SQL,query_data);
        res.json(result);
      
    } catch (err) {
        console.error(err.message);
    }
};
//remove user from order 
const removeUserFromOrder = async(req,res)=>{
    try {
        let params = {
            id : req.params.id,
            userId : req.params.userId
        };
        const parameters = [params.id, params.userId];
        const SQL = "DELETE FROM orders WHERE order_id=? AND user_id=?";
        const result = await queryPromise(SQL,parameters);
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
};
export{ getOrderByID,getOrders,postOrder,deleteOrder,changeUserInOrder,removeUserFromOrder};