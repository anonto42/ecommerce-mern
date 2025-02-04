import jwt from "jsonwebtoken";
import Responce from "../Lib/Responce.js";
import { UserModel } from "../Model/User.model.js";


const tokenCheck = async (req,res,next) => {
    try {
        // get cookie
        const cookie = req.cookies.e-comm-user-data;
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
        req.user = user;

        next();

        
    } catch (error) {
        console.log(error.message)
    }
}

export default tokenCheck;