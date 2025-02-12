import Responce from "../Lib/Responce.js";
import { uploadOnCloudinary } from "../Middleware/Cloudnary.js";
import { UserModel } from "../Model/User.model.js"
import { HeroModel } from './../Model/Hero.model.js';
import { ProductModel } from './../Model/Product.model.js';


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

async function heroInformation(req , res){
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

async function Users(req , res) {
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

async function oneUser(req , res) {
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

async function thatUser(req , res) {
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

async function theUser(req , res) {
    try {

        const { email } = req.body

        if(!email) {
            return res
                .status(404)
                .json(
                    Responce.error( "Please provide the user email." , false )
                )
        }
        const user = await UserModel.deleteOne( { email } );
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

async function product(req , res) {
    try {

        const { size , quantity , category, description , price , name , tag } = req.body;
        const { images } = req.files;
        const { _id } = req.user;

        if( !size && !quantity && category && !description && !price && !name ){
            return res
                .status(404)
                .json(
                    Responce.error( "Please provide all the product details." , false )
                )
        }
        if(!images) {
            return res
               .status(404)
               .json(
                    Responce.error( "No image founded!" , false )
                )
        };

        const files = images.map( file => file.path );
        const cldResponse = await uploadOnCloudinary(files);
        if(!cldResponse){
            return res
                .status(404)
                .json(
                    Responce.error( "Can't upload files in the cloud." , false )
                )
        }
        // uploadable data 
        const Data = { 
            size, 
            quantity, 
            category, 
            images : cldResponse, 
            description, 
            price, 
            name,
            createdBy: _id,
            tagOfEvent : tag
        }

        const product = await ProductModel.create( Data );
        if(!product){
            return res
                .status(404)
                .json(
                    Responce.error( "Failed to create product." , false )
                )
        }

        return res
            .status(200)
            .json(
                Responce.success( "Product created successfully!" , product , true )
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

async function GProduct(req , res) {
    try {

        const product = await ProductModel.aggregate(
            [
                {
                    $lookup: {
                      from: "users",
                      localField: "createdBy",
                      foreignField: "_id",
                      as: "creator",
                    },
                  },
                  {
                    $set: {
                      creator: { $arrayElemAt: ["$creator.name", 0] },
                    },
                  },
              
            ]
        );
        if(!product){
            return res
                .status(404)
                .json(
                    Responce.error( "Failed to create product." , false )
                )
        }

        return res
            .status(200)
            .json(
                Responce.success( "Product get successfully!" , product , true )
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

async function SProduct(req , res){
    try {
        const { id , name } = req.body; 
        if( id == "" || name == "" ){
            return res
                .status(404)
                .json(
                    Responce.error( "Please provide the product id or name." , false )
                )
        }
        const product = await ProductModel.findOne(
            {
                $or:[
                    { 
                        _id:id
                    },
                    {
                        name
                    }
                ]
            }
        );
        if(!product){
            return res
                .status(404)
                .json(
                    Responce.error( "Product not exiest." , false )
                )
        }
        
        return res
        .status(200)
        .json(
                Responce.success( "Product found successfully!" , product , true )
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

async function UProduct(req , res) {
    try {
        const { id , size , quantity , category, description , price , name , tag } = req.body; 
        const { images } = req.files;
        if( !id ){
            return res
                .status(404)
                .json(
                    Responce.error( "Please provide the product id or name." , false )
                )
            }

        let cldResponse;

        if(images) {
            const files = images.map( file => file.path );
            cldResponse = await uploadOnCloudinary(files); 
        }
            
        const data = images?
        {
            size,
            quantity,
            category,
            images : cldResponse,
            description,
            price,
            name,
            tagOfEvent : tag
        }:{
            size,
            quantity,
            category,
            description,
            price,
            name,
            tagOfEvent : tag
        }
        const product = await ProductModel.updateOne(
            {
                $or:[
                    { 
                        _id:id
                    },
                    {
                        name
                    }
                ]
            },
            data
        );
        if(!product){
            return res
                .status(404)
                .json(
                    Responce.error( "Product not exiest." , false )
                )
        }

        return res
            .status(200)
            .json(
                Responce.success( "Product Updated successfully!" , product , true )
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

async function DProduct(req , res){
    try {
        const { id , name } = req.body; 
        if( id == "" || name == "" ){
            return res
                .status(404)
                .json(
                    Responce.error( "Please provide the product id or name." , false )
                )
        }
        const product = await ProductModel.deleteOne(
            {
                $or:[
                    { 
                        _id:id
                    },
                    {
                        name
                    }
                ]
            }
        );
        if(!product){
            return res
                .status(404)
                .json(
                    Responce.error( "Product not exiest." , false )
                )
        }
        
        return res
        .status(200)
        .json(
                Responce.success( "Product was deleted successfully!" , product , true )
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

export { hearoInformation , heroInformation , Users , oneUser , thatUser , theUser , product , GProduct , UProduct , SProduct , DProduct }