
import express from "express";
const user_route = express.Router();
import { getAllUsers,getUserByID,postUser,changeUser,deleteUser } from "../controller/user.controller.js";

user_route.get("/", getAllUsers);
user_route.get("/:id", getUserByID);
user_route.post("/",postUser);
user_route.put("/:id", changeUser);
user_route.delete("/:id", deleteUser);

export default user_route; 