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

//post user user_route.post('/users',)
const postUser= async(req, res)=>{
    try {
        let {first_name, surname, email} = req.body;
        const user = [first_name, surname, email];
        const SQL = "INSERT INTO user (first_name,surname,email) VALUES (?,?,?)";
        const result = await queryPromise(SQL, user);
        res.json({first_name,surname,email});

    } catch (err) {
        console.error(err.message);
    }
}; 

// get all users 
const getAllUsers= async(req,res)=>{
    try {
       const SQL = "Select * from user";
       const result = await queryPromise(SQL) ;
       res.json(result);
    } catch (err) {
        console.error(err.message);
    }
};
//get user by ID 
const getUserByID = async(req,res)=>{
    try {
        const {id}=req.params;
        const user_id =[id];
        const SQL ='SELECT * FROM user WHERE user_id=?';
        const result = await queryPromise(SQL, user_id);
        res.json(result);  
    } catch (err) {
        console.error(err.message);
    }
};
//delete user by ID 
const deleteUser = async(req,res)=>{
    try {
        const {id}= req.params;
        const user_id= [id];
        const SQL = 'DELETE FROM user WHERE user_id =?';
        const result = await queryPromise(SQL, user_id);
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
};
//change user data 
const changeUser = async(req,res)=>{
    try {
        let {first_name,surname,email}=req.body;
        const {id} = req.params;
        const user_id =[id];
        const newUser = [first_name,surname,email];
        const query_data = newUser.concat(user_id);
        const SQL = "UPDATE user SET first_name=?, surname=?, email=? WHERE user_id=?";
        const result = await queryPromise(SQL,query_data);
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
}; 
export{postUser, getAllUsers, getUserByID, deleteUser, changeUser};
