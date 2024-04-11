import express from "express";
const filtered_route = express.Router();
import{
    filteredOrders,filteredOrdersByID
}from '../controller/filtered_orders.controller.js';

filtered_route.get("/", filteredOrders);
filtered_route.get("/:id", filteredOrdersByID);

export default filtered_route;