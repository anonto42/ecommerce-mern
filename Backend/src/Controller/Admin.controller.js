import Responce from "../Lib/Responce.js";
import { uploadOnCloudinary } from "../Middleware/Cloudnary.js";
import { UserModel } from "../Model/User.model.js"
import { HeroModel } from './../Model/Hero.model.js';


async function hearoInformation ( req , res ){
    try {
        const { heroImages } = req.files;
        const { topText } = req.body;
        
        if(!heroImages) {
            return res
               .status(404)
               .json(
                    Responce.error( "No image founded!" , false )
                )
        };
        // get the images path
        const images = heroImages.map( file => file.path );
        const cldResponse = await uploadOnCloudinary(images);
        // uploadable data 
        const Data = {
            topText,
            images : cldResponse
        }
        // s
        // save the images in the database
        const responce = await HeroModel.create( Data );
        if(!responce) {
            return res
               .status(404)
               .json(
                    Responce.error( "Failed to save images!" , false )
                )
        }

        return res
         .status(200)
         .json(
            Responce.success( "Images saved successfully!" , responce , true )
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

async function heroInformation(req,res){
    try {
        const { heroImages } = req.files;
        const { topText } = req.body;
        
        if(!heroImages) {
            return res
               .status(404)
               .json(
                    Responce.error( "No image founded!" , false )
                )
        };
        // get the images path
        const images = heroImages.map( file => file.path );
        const cldResponse = await uploadOnCloudinary(images);
        // uploadable data 
        const Data = {
            topText,
            images : cldResponse
        }
        // save the images in the database
        const responce = await HeroModel.findByIdAndUpdate( "67a50aeb81e26bbdb35d5354" , Data );
        if(!responce) {
            return res
               .status(404)
               .json(
                    Responce.error( "Failed to save images!" , false )
                )
        }

        return res
         .status(200)
         .json(
            Responce.success( "Updated the hero data successfully!" , responce , true )
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

async function Users(req, res) {
    try {

        const user = await UserModel.find({});

        return res
            .status(200)
            .json(
                Responce.success( "Get all user Succesfully." , user , true )
            )
        
    } catch (error) {
        console.log(error)
        return res
            .status(200)
            .json(
                Responce.error( "Something wrong!" , error , false )
            )
    }
}

async function oneUser(req, res) {
    try {

        const { email } = req.body
        if(!email) {
            return res
                .status(404)
                .json(
                    Responce.error( "Please provide the user email." , false )
                )
        }

        const user = await UserModel.findOne({ email });
        if(!user) {
            return res
                .status(404)
                .json(
                    Responce.error( "User not found." , false )
                )
        }

        return res
            .status(200)
            .json(
                Responce.success( "Got a user succesfully" , user , true )
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

async function thatUser(req, res) {
    try {

        const { email , block } = req.body

        if(!email && !block) {
            return res
                .status(404)
                .json(
                    Responce.error( "Please provide the user email." , false )
                )
        }

        const user = await UserModel.updateOne( { email } , { isBlocked : block } );
        if(!user) {
            return res
                .status(404)
                .json(
                    Responce.error( "User not found." , false )
                )
        }

        return res
            .status(200)
            .json(
                Responce.success( "Got a user succesfully" , user , true )
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

async function theUser(req, res) {
    try {

        const { email } = req.body

        if(!email) {
            return res
                .status(404)
                .json(
                    Responce.error( "Please provide the user email." , false )
                )
        }
        const user = await UserModel.deleteOne( email );
        if(!user) {
            return res
                .status(404)
                .json(
                    Responce.error( "User not found." , false )
                )
        }

        return res
            .status(200)
            .json(
                Responce.success( "Delete user succesfully" , user , true )
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

async function product(req,res) {
    try {

        const { } = req.body;
        
    } catch (error) {
        console.log(error)
        return res
            .status(404)
            .json(
                Responce.error( "Something wrong!" , error , false )
            )
    }
}

export { hearoInformation , heroInformation , Users , oneUser , thatUser , theUser , product }