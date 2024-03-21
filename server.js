//get express
const express = require("express");

app = express();
//body parse
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000,()=>{
    console.log("Server started at port 3000");
});

const db = require("./db");

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


//post user
app.post('/users', async(req, res)=>{
    try {
        let {first_name, surname, email} = req.body;
        const user = [first_name, surname, email];
        const SQL = "INSERT INTO user (first_name,surname,email) VALUES (?,?,?)";
        const result = await queryPromise(SQL, user);
        res.json({first_name,surname,email});

    } catch (err) {
        console.error(err.message);
    }
});
//post product
app.post('/products', async(req, res)=>{
    try {
        let {product_name} = req.body;
        const product = [product_name];
        const SQL = "INSERT INTO product (product_name) VALUES (?)";
        const result = await queryPromise(SQL, product);
        res.json({product_name});

    } catch (err) {
        console.error(err.message);
    }
});
//post order or add customer to order
app.post('/orders', async(req, res)=>{
    try {
        let {order_id,user_id,user_name,user_surname,user_email,product} = req.body;
        const newOrder = [order_id,user_id,user_name,user_surname,user_email,product];
        const SQL = "INSERT INTO orders (order_id,user_id,user_name,user_surname,user_email,product) VALUES (?,?,?,?,?,?)";
        const result = await queryPromise(SQL, newOrder);
        res.json({order_id,user_id,user_name,user_surname,user_email,product});

    } catch (err) {
        console.error(err.message);
    }
});
// get all users
app.get('/users', async(req,res)=>{
    try {
       const SQL = "Select * from user";
       const result = await queryPromise(SQL, values=[]) ;
       res.json(result);
    } catch (err) {
        console.error(err.message);
    }
});
//get user by ID
app.get('/users/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        const user_id =[id];
        const SQL ='SELECT * FROM user WHERE user_id=?';
        const result = await queryPromise(SQL, user_id);
        res.json(result);  
    } catch (err) {
        console.error(err.message);
    }
})
//get all products
app.get('/products', async(req,res)=>{
    try {
       const SQL = "Select * from product";
       const result = await queryPromise(SQL, values=[]) ;
       res.json(result);
    } catch (err) {
        console.error(err.message);
    }
});
//get product by ID
app.get('/products/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        const product_id =[id];
        const SQL ='SELECT * FROM product WHERE product_id=?';
        const result = await queryPromise(SQL, product_id);
        res.json(result);  
    } catch (err) {
        console.error(err.message);
    }
});
//get all orders
app.get('/orders', async(req,res)=>{
    try {
       const SQL = "Select * from orders";
       const result = await queryPromise(SQL, values=[]) ;
       res.json(result);
    } catch (err) {
        console.error(err.message);
    }
});
//get order by ID
app.get('/orders/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        const order_id =[id];
        const SQL ='SELECT * FROM orders WHERE order_id=?';
        const result = await queryPromise(SQL, order_id);
        res.json(result);  
    } catch (err) {
        console.error(err.message);
    }
});
//delete user by ID
app.delete('/users/:id', async(req,res)=>{
    try {
        const {id}= req.params;
        const user_id= [id];
        const SQL = 'DELETE FROM user WHERE user_id =?';
        const result = await queryPromise(SQL, user_id);
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
});
//delete product by ID
app.delete('/products/:id', async(req,res)=>{
    try {
        const {id}= req.params;
        const product_id= [id];
        const SQL = 'DELETE FROM product WHERE product_id=?';
        const result = await queryPromise(SQL, product_id);
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
});
//delete order by ID
app.delete('/orders/:id', async(req,res)=>{
    try {
        const {id}= req.params;
        const order_id= [id];
        const SQL = 'DELETE FROM orders WHERE order_id =?';
        const result = await queryPromise(SQL, order_id);
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
});
//change user data 
app.put('/users/:id', async(req,res)=>{
    try {
        let {first_name,surname,email}=req.body;
        const {id} = req.params;
        const user_id =[id];
        const newUser = [first_name,surname,email];
        const SQL = `UPDATE user SET first_name=?, surname=?, email=? WHERE user_id=${user_id}`;
        const result = await queryPromise(SQL,newUser);
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
});
//change product data
app.put('/products/:id', async(req,res)=>{
    try {
        let {product_name}=req.body;
        const {id} = req.params;
        const product_id =[id];
        const newProduct = [product_name];
        const SQL = `UPDATE product SET product_name=? WHERE product_id=${product_id}`;
        const result = await queryPromise(SQL,newProduct);
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
});
//change user data in order
app.put('/orders/:id/:userId', async(req,res)=>{
    try {
        let {product,user_name,user_surname,user_email}=req.body;
        let params = {
            id : req.params.id,
            userId : req.params.userId
        };
        
        const newOrder = [product,user_name,user_surname,user_email];
        const SQL = `UPDATE orders SET product=?,user_name=?,user_surname=?,user_email=? WHERE order_id=${params.id} AND user_id=${params.userId}`;
        const result = await queryPromise(SQL,newOrder);
        res.json(result);
      
    } catch (err) {
        console.error(err.message);
    }
});
//remove user from order
app.delete('/orders/:id/:userId',async(req,res)=>{
    try {
        let params = {
            id : req.params.id,
            userId : req.params.userId
        };
        const SQL = `DELETE FROM orders WHERE order_id=${params.id} AND user_id=${params.userId}`;
        const result = await queryPromise(SQL,value=[]);
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
});
//filter orders by id
app.get('/filtered-orders', async(req,res)=>{
    try {
        const SQL ='SELECT * FROM orders ORDER by order_id ';
        const result = await queryPromise(SQL, values=[]);
        res.json(result);  
    } catch (err) {
        console.error(err.message);
    }
});
//filter products in order
app.get('/filtered-orders/:id', async(req,res)=>{
    try {
        const params ={
            id: req.params.id
        };
        const SQL =`SELECT * FROM orders WHERE order_id=${params.id} ORDER BY product`;
        const result = await queryPromise(SQL, values=[]);
        res.json(result);  
    } catch (err) {
        console.error(err.message);
    }
})

