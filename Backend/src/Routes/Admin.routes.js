import { Router } from "express";
import { getUsers } from "../Controller/Admin.controller.js";

const adminRoutes = Router();

adminRoutes.route("/users").get( getUsers )


export default adminRoutes;