import express from "express";
const product_route = express.Router();
import{
    changeProduct,deleteProduct, postProduct,getProductByID,getProducts
}from '../controller/product.controller.js';

product_route.get("/", getProducts);
product_route.get("/:id",getProductByID);
product_route.post("/",postProduct);
product_route.put("/:id",changeProduct);
product_route.delete("/:id", deleteProduct);

export default product_route; 