import Responce from "../Lib/Responce.js";
import { cookieOption, jwtToken } from "../Lib/SendJwtToken.js";
import { UserModel } from "../Model/User.model.js";
import { HeroModel } from './../Model/Hero.model.js';
import { ProductModel } from './../Model/Product.model.js';


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
            .cookie( "eCommUserData" , jwtToken( newUser ) , cookieOption )
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
            .cookie( "eCommUserData" , jwtToken( user ) , cookieOption )
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

function logout (req,res){
    return res
        .status(200)
        .cookie( "eCommUserData" , "" , cookieOption )
        .json(
            Responce.error("Logout done", true)
        )
}

async function userProfile(req,res) {
    try {
        // get user id from middleware
        const user = req.user ;
        // get user data
        const userData = await UserModel.findById( user._id ).select("-password");
        if(!userData){
            return res
                .status(404)
                .json(
                    Responce.error( "User not found" , false )
                )
        }        
        // send responce
        return res
            .status(200)
            .json(
                Responce.success( "Done to get the profile" , user , true )
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

async function updateUserProfile(req,res) {
    try {
        const { number,city,thana,area,location } = req.body;
        const user = req.user._id;
        
        const updateData = {
            number,
            city,
            thana,
            area,
            location
        }

        const userData = await UserModel.findByIdAndUpdate( user , updateData );
        if(!userData) {
            return res
            .status(405)
            .json(
                Responce.error("Somting was wrong" , false )
            )
        };


        return res
            .status(200)
            .json(
                Responce.success( "User information updated successfully" , userData , true )
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

async function Heros (req,res){
    try {
        const responce = await HeroModel.findById( "67a50aeb81e26bbdb35d5354" );
        if(!responce) {
            return res
               .status(404)
               .json(
                    Responce.error( "Failed to get!" , false )
                )
        }

        return res
         .status(200)
         .json(
            Responce.success( "Hero section data!" , responce , true )
        )


    } catch (error) {
        console.log(error)
        return res
            .status(404)
            .json(
                Responce.error( "Something wrong!" , error , false )
            )
    }
}

async function specialOffers(req,res) {
    try {

        const products = await ProductModel.find();
        if(!products) {
            return res
                .status(404)
                .json(
                    Responce.error( "Something wrong!", false )
                )
        }
        
        const filltredOffers = products.filter( data => data.tagOfEvent === "Special-Offers");

        return res
                .status(200)
                .json(
                    Responce.success( "Get the offerd products", filltredOffers , false )
                )
    } catch (error) {
        console.log(error)
        return res
            .status(404)
            .json(
                Responce.error( "Something wrong!" , error , false )
            )
    }
}

async function bestSellingProduct(req,res) {
    try {

        const products = await ProductModel.find();
        if(!products) {
            return res
                .status(404)
                .json(
                    Responce.error( "Something wrong!", false )
                )
        }
        
        const filltredOffers = products.filter( data => data.tagOfEvent === "Best-Selling");

        return res
                .status(200)
                .json(
                    Responce.success( "Get the Best-Selling products", filltredOffers , false )
                )
    } catch (error) {
        console.log(error)
        return res
            .status(404)
            .json(
                Responce.error( "Something wrong!" , error , false )
            )
    }
}

async function hotItem(req,res) {
    try {

        const products = await ProductModel.find();
        if(!products) {
            return res
                .status(404)
                .json(
                    Responce.error( "Something wrong!", false )
                )
        }

        const filltredOffers = products.filter( data => data.tagOfEvent === "Hot-Item");

        return res
                .status(200)
                .json(
                    Responce.success( "Get the Hot-Item products", filltredOffers , false )
                )
    } catch (error) {
        console.log(error)
        return res
            .status(404)
            .json(
                Responce.error( "Something wrong!" , error , false )
            )
    }
}

async function catagorys(req,res) {
    try {

        const products = await ProductModel.find();
        if(!products) {
            return res
                .status(404)
                .json(
                    Responce.error( "Something wrong!", false )
                )
        }

        const uniqueCategories = [...new Set(products.map(p => p.category))];

        return res
                .status(200)
                .json(
                    Responce.success( "Geted all the catagorys", uniqueCategories , false )
                )
                
    } catch (error) {
        console.log(error)
        return res
            .status(404)
            .json(
                Responce.error( "Something wrong!" , error , false )
            )
    }
}


export { login , register , userProfile , logout , updateUserProfile , Heros , specialOffers , bestSellingProduct , hotItem , catagorys}