import { Router } from "express";
import { GProduct, hearoInformation, heroInformation, oneUser, product, thatUser, theUser, Users } from "../Controller/Admin.controller.js";
import adminAuth from "../Middleware/AutAdmin.js";
import { uploader } from './../Middleware/Multer.js';

const adminRoutes = Router();

// Admin Check
adminRoutes.use(adminAuth);

// Upload Hero information
adminRoutes.route("/hero").post( uploader.fields([ { name : "heroImages" , maxCount: 5 } ]) , hearoInformation ).put( uploader.fields([ { name : "heroImages" , maxCount: 5 } ]) , heroInformation );// Update hero schema information
// Get all users
adminRoutes.route("/users").get( Users );
// get a user
adminRoutes.route("/user").post( oneUser ).put( thatUser ).delete( theUser );
// create product
adminRoutes.route("/product").get( GProduct ).post(  uploader.fields([ { name : "images" , maxCount: 3 } ]) , product );

export default adminRoutes;