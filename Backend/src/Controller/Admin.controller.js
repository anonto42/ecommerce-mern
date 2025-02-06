import Responce from "../Lib/Responce.js";
import { UserModel } from "../Model/User.model.js"
import { HeroModel } from './../Model/Hero.model.js';


async function getUsers (req,res){
    try {

        const users = await UserModel.find()
        return res.status(200).json(users)
        
    } catch (error) {
        return res
            .status(404)
            .json(
                Responce.error( "Somethig was wrong!" , error , false )
            )
    }
}

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
        // uploadable data 
        const Data = {
            topText,
            images
        }
        // save the images in the database
        const responce = await HeroModel.create( Data );
        console.log(responce)
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

export { getUsers , hearoInformation }