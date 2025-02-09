import jwt from "jsonwebtoken";
import Responce from "../Lib/Responce.js";
import { UserModel } from "../Model/User.model.js";


const adminAuth = async (req,res,next) => {
    try {
        // get cookie
        const cookie = req.cookies.eCommUserData;
        if(!cookie) {
            return res
                .status(403)
                .json(
                    Responce.error( "You are not authorized! Cooki not founded." , false )
                )
        };
        // decode the cookie
        const decodedToken = jwt.verify( cookie , process.env.JWT_SECRET_KEY );
        if(!decodedToken) {
            return res
                .status(403)
                .json(
                    Responce.error( "You are not authorized. by cooke" , false )
                )
        };
        // send the data on the rext request
        const user = await UserModel.findById( decodedToken._id ).select("-password");
        if(!user){
            return res
                .status(403)
                .json(
                    Responce.error( "You accound not founded" , false )
                )
        };
        // Check if Authorized
        if(!user.userType === "admin"){
            return res
                .status(404)
                .json(
                    Responce.error( "You are not authorized to access the admin informaiton's" , null ,false )
                )
        };
        // Send data to the next stage
        req.user = user;

        next();

        
    } catch (error) {
        console.log(error)
        return res
            .status(404)
            .json(
                Responce.error( "Sommthing was wrong!" , null ,false )
            )
    }
}

export default adminAuth;