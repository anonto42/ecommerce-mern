import Responce from "../Lib/Responce.js";
import { cookieOption, jwtToken } from "../Lib/SendJwtToken.js";
import { UserModel } from "../Model/User.model.js";


async function register (req,res) {
    try {
        // take data from user
        const { name , email , password } = req.body;
        if( email === "" || name === "" || password === "" ) {
            return res
                .status(404)
                .json(
                    Responce.success( "Please fill up the form" , false )
                )
        }
        // get user
        const user = await UserModel.findOne({email:email});
        if(user) {
            return res
                .status(400)
                .json(
                    Responce.error( "User already exists" , false )
                )
        };
        // create new user
        const data = { name , email , password };
        const newUser = await UserModel.create( data );
        if(!newUser){
            return res
                .status(500)
                .json(
                    Responce.error( "Failed to create user. Please try again" , false )
                )
        }
        // send responce
        return res
            .status(200)
            .cookie( "e-comm-user-data" , jwtToken( newUser ) , cookieOption )
            .json(
                Responce.success( "User created successfully" , true )
            )


    } catch (error) {
        console.log(error.message)
        return res
            .status(404)
            .json(
                Responce.error("Failed to create user. Please try again", false)
            )
    }
}

async function login (req,res) {
    try {
        // take data from user
        const {  email , password } = req.body;
        if( email === "" || password === "" ) {
            return res
                .status(404)
                .json(
                    Responce.success( "Please fill up the form" , false )
                )
        };
        // get user
        const user = await UserModel.findOne( { email:email } );
        if(!user) {
            return res
                .status(400)
                .json(
                    Responce.error( "User not exists" , false )
                )
        };
        // check password
        const isMatch = await user.isPasswordCorrect( password );
        if(!isMatch){
            return res
                .status(400)
                .json(
                    Responce.error( "Incorrect password" , false )
                )
        }
        // send responce
        return res
            .status(200)
            .cookie( "e-comm-user-data" , jwtToken( user ) , cookieOption )
            .json(
                Responce.success( "User login successfully" , true )
            )
    } catch (error) {
        console.log(error.message)
        return res
            .status(404)
            .json(
                Responce.error("Please try again", false)
            )
    }
}


export { login , register }