import { Router } from "express";
import { getUsers, hearoInformation, heroInformation } from "../Controller/Admin.controller.js";
import adminAuth from "../Middleware/AutAdmin.js";
import { uploader } from './../Middleware/Multer.js';

const adminRoutes = Router();

// Admin Check
adminRoutes.use(adminAuth);
// Get users
adminRoutes.route("/users").get( getUsers );
// Upload Hero information
adminRoutes.route("/hero").post( uploader.fields([ { name : "heroImages" , maxCount: 5 } ]) , hearoInformation );   // Upload hero information
adminRoutes.route("/hero").put( uploader.fields([ { name : "heroImages" , maxCount: 5 } ]) , heroInformation );     // Update hero schema information

export default adminRoutes;