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

//post product 
const postProduct= async(req, res)=>{
    try {
        let {product_name} = req.body;
        const product = [product_name];
        const SQL = "INSERT INTO product (product_name) VALUES (?)";
        const result = await queryPromise(SQL, product);
        res.json({product_name});

    } catch (err) {
        console.error(err.message);
    }
};

//get all products 
const getProducts = async(req,res)=>{
    try {
       const SQL = "Select * from product";
       const result = await queryPromise(SQL);
       res.json(result);
    } catch (err) {
        console.error(err.message);
    }
};
//get product by ID 
const getProductByID = async(req,res)=>{
    try {
        const {id}=req.params;
        const product_id =[id];
        const SQL ='SELECT * FROM product WHERE product_id=?';
        const result = await queryPromise(SQL, product_id);
        res.json(result);  
    } catch (err) {
        console.error(err.message);
    }
};


//delete product by ID 
const deleteProduct = async(req,res)=>{
    try {
        const {id}= req.params;
        const product_id= [id];
        const SQL = 'DELETE FROM product WHERE product_id=?';
        const result = await queryPromise(SQL, product_id);
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
};


//change product data 
const changeProduct = async(req,res)=>{
    try {
        let {product_name}=req.body;
        const {id} = req.params;
        const product_id =[id];
        const newProduct = [product_name];
        const query_data = newProduct.concat(product_id);
        const SQL = "UPDATE product SET product_name=? WHERE product_id=?";
        const result = await queryPromise(SQL,query_data);
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
};
export{changeProduct,deleteProduct, postProduct,getProductByID,getProducts};