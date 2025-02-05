import { Router } from "express";
import { login , register, userProfile } from "../Controller/User.controller.js";
import tokenCheck from "../Middleware/Aut.js";

const userRoute = Router();

// Authentication
userRoute.route("/register").post( register )
userRoute.route("/login").post( login )

// Get user information
userRoute.route("/user").get( tokenCheck , userProfile )



export default userRoute;