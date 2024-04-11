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
};
//filter orders by id 
const filteredOrders= async(req,res)=>{
    try {
        const SQL ='SELECT * FROM orders ORDER by order_id ';
        const result = await queryPromise(SQL);
        res.json(result);  
    } catch (err) {
        console.error(err.message);
    }
};
//filter products in order
const filteredOrdersByID = async(req,res)=>{
    try {
        const params ={
            id: req.params.id
        };
        const parameters = [params.id];
        const SQL =`SELECT * FROM orders WHERE order_id=? ORDER BY product`;
        const result = await queryPromise(SQL, parameters);
        res.json(result);  
    } catch (err) {
        console.error(err.message);
    }
};
export{
    filteredOrders,filteredOrdersByID
}
