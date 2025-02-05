import { Router } from "express";
import { login , register } from "../Controller/User.controller.js";

const userRoute = Router();

// Authentication
userRoute.route("/register").post(register)
userRoute.route("/login").post(login)



export default userRoute;