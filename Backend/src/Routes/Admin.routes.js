import { Router } from "express";
import { DProduct, GProduct, hearoInformation, heroInformation, oneUser, orders, product, SProduct, thatUser, theUser, UProduct, Users } from "../Controller/Admin.controller.js";
import adminAuth from "../Middleware/AutAdmin.js";
import { uploader } from './../Middleware/Multer.js';

const adminRoutes = Router();

// Admin Check
adminRoutes.use(adminAuth);

// Upload Hero information
adminRoutes.route("/hero").post( uploader.fields([ { name : "heroImages" , maxCount: 5 } ]) , hearoInformation ).put( uploader.fields([ { name : "heroImages" , maxCount: 5 } ]) , heroInformation );// Update hero schema information
// Get all users
adminRoutes.route("/users").get( Users );
// user opations
adminRoutes.route("/user").post( oneUser ).put( thatUser )
adminRoutes.route("/duser").post( theUser );
// product opations
adminRoutes.route("/product").get( GProduct ).post(  uploader.fields([ { name : "images" , maxCount: 3 } ]) , product ).put( uploader.fields([ { name : "images" , maxCount: 3 } ]) , UProduct);
// delete product
adminRoutes.route("/dproduct").post( DProduct );
// get a singel product
adminRoutes.route("/sproduct").post( SProduct );
// all orders
adminRoutes.route("/orders").get( orders );



export default adminRoutes;