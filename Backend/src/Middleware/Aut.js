import jwt from "jsonwebtoken";
import Responce from "../Lib/Responce.js";
import { UserModel } from "../Model/User.model.js";


const tokenCheck = async (req,res,next) => {
    try {
        // get cookie
        const cookie = req.cookies.eCommUserData;
        if(!cookie) {
            return res
                .status(403)
                .json(
                    Responce.error( "You are not authenticated" , false )
                )
        };
        // decode the cookie
        const decodedToken = jwt.verify( cookie , process.env.JWT_SECRET_KEY );
        if(!decodedToken) {
            return res
                .status(403)
                .json(
                    Responce.error( "You are not authenticated" , false )
                )
        }
        // send the data on the rext request
        const user = await UserModel.findById( decodedToken._id ).select("-password");
        if(!user){
            return res
                .status(403)
                .json(
                    Responce.error( "You are not Authenticated" , false )
                )
        };
        // send the data
        req.user = user;
        next();
    } catch (error) {
        return res
            .status(404)
            .json(
                Responce.error( "Sommthing was wrong!" , null ,false )
            )
    }
}

export default tokenCheck;