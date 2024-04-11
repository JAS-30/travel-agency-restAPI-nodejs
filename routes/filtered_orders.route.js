import express from "express";
import{
    filteredOrders,filteredOrdersByID
}from '../controller/filtered_orders.controller.js';

const filtered_route = express.Router();


filtered_route.get("/", filteredOrders);
filtered_route.get("/:id", filteredOrdersByID);

export default filtered_route;
