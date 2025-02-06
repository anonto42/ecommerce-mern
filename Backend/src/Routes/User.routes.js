import { Router } from "express";
import { Heros, login , logout, register, updateUserProfile, userProfile } from "../Controller/User.controller.js";
import tokenCheck from "../Middleware/Aut.js";

const userRoute = Router();

// Authentication
userRoute.route("/register").post( register )
userRoute.route("/login").post( login )
// logout user profile
userRoute.route("/logout").delete( logout )
// Get user information
userRoute.route("/user").get( tokenCheck , userProfile )
// update user profile
userRoute.route("/update").put( tokenCheck , updateUserProfile )
// get hero information
userRoute.route("/hero").get( Heros );


export default userRoute;