import express from "express";
const order_route = express.Router();
import {
    getOrderByID,getOrders,postOrder,deleteOrder,changeUserInOrder,removeUserFromOrder
}from '../controller/order.controller.js';

order_route.get("/", getOrders);
order_route.get("/:id", getOrderByID);
order_route.post("/",postOrder);
order_route.delete("/:id",deleteOrder);
order_route.delete("/:id/:userId", removeUserFromOrder);
order_route.put("/:id/:userId", changeUserInOrder);
 

export default order_route;