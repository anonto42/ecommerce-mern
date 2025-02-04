import { Router } from "express";
import { login } from "../Controller/User.controller.js";

const userRoute = Router();


userRoute.route("/login").get(login)



export default userRoute;