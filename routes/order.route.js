import express from "express";
import {
    getOrderByID,getOrders,postOrder,deleteOrder,changeUserInOrder,removeUserFromOrder
}from '../controller/order.controller.js';

const order_route = express.Router();


order_route.get("/", getOrders);
order_route.get("/:id", getOrderByID);
order_route.post("/",postOrder);
order_route.delete("/:id",deleteOrder);
order_route.delete("/:id/:userId", removeUserFromOrder);
order_route.put("/:id/:userId", changeUserInOrder);
 

export default order_route;
