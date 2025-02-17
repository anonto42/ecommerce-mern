import Responce from "../Lib/Responce.js";
import { cookieOption, jwtToken } from "../Lib/SendJwtToken.js";
import { UserModel } from "../Model/User.model.js";
import { HeroModel } from './../Model/Hero.model.js';
import { ProductModel } from './../Model/Product.model.js';
import { CartModel } from './../Model/Cart.model.js';
import { OrderModel } from "../Model/Order.model.js";
import { VisitorsModel } from "../Model/Visitors.model.js";
import { v4 as uuidv4 } from 'uuid';
import SSLCommerzPayment from 'sslcommerz-lts';
import bcrypt from 'bcrypt';



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
        const user = req.user;
        // get user data
        const userData = await UserModel.aggregate(
            [
                {
                    $match:{
                        _id: user._id
                    }
                },
                {
                    $project:{
                        password:0
                    }
                },
                {
                    $lookup: {
                      from: "carts",
                      localField: "_id",
                      foreignField: "user",
                      as: "cart"
                    }
                },
                {
                  $unwind: "$cart"
                },
                {
                  $lookup: {
                    from: "products",
                    localField: "cart.product",
                    foreignField: "_id",
                    as: "cart.product"
                  }
                },
                {
                  $project: {
                    _id: 1,
                    number:1,
                    city:1,
                    name: 1,
                    thana:1,
                    area:1,
                    location:1,
                    orders:1,
                    wishlist:1,
                    userType:1,
                    isBlocked:1,
                    email: 1,
                    cart: {
                      _id: 1,
                      user: 1,
                      product: 1,
                      size: 1,
                      product: { $arrayElemAt: ["$cart.product", 0] }
                    }
                  }
                },
                {
                    $group: {
                      _id: "$_id", // Group by user idnumber:1,
                      city:{ $first: "$city" },
                      thana:{ $first: "$thana" },
                      area:{ $first: "$area" },
                      location:{ $first: "$location" },
                      orders:{ $first: "$orders" },
                      wishlist:{ $first: "$wishlist" },
                      userType:{ $first: "$userType" },
                      isBlocked:{ $first: "$isBlocked" },
                      name: { $first: "$name" },
                      email: { $first: "$email" },
                      cart: { $push: "$cart" } // Push the cart back into the array
                    }
                }
                
            ]
        )

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
                Responce.success( "Done to get the profile" , userData[0] , true )
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

async function AProduct(req , res) {
    try {

        const { id } = req.body;
        if(!id) {
            return res
                .status(400)
                .json(
                    Responce.error( "Please provide product id" , false )
                )
        }
        const product = await ProductModel.findById({ _id:id });
        if(!product) {
            return res
                .status(404)
                .json(
                    Responce.error( "Product not found" , false )
                )
        }
        
        return res
            .status(200)
            .json(
                Responce.success( "Get the product", product , true )
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

async function ACart(req , res) {
    try {
        const { id,size } = req.body;
        const { _id } = req.user;
        if(!_id) {
            return res
                .status(400)
                .json(
                    Responce.error( "Please login your accout first!" , false )
                )
        }

        const cart = await CartModel.findOne({ product:id });
        if(cart) {
            return res
                .status(404)
                .json(
                    Responce.error( "Product was also added" , false )
                )
        }

        const cartCreate = await CartModel.create(
            {
                product:id,
                user:_id,
                size
            }
        )
        if(!cartCreate) {
            return res
                .status(404)
                .json(
                    Responce.error( "something was wrong!" , false )
                )
        }
        
        return res
            .status(200)
            .json(
                Responce.success( "added the product on cart", cartCreate , true )
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

async function DCartItem(req,res){
    try {
        const { id } = req.body;
        console.log(id)

        const cart = await CartModel.findOne({ _id:id });
        console.log(cart)
        if(!cart) {
            return res
                .status(404)
                .json(
                    Responce.error( "Cart not found!" , false )
                )
        }

        const deletedCart = await CartModel.deleteOne( { _id:cart._id } )
        if(!deletedCart) {
            return res
                .status(404)
                .json(
                    Responce.error( "something was wrong!" , false )
                )
        }
        
        return res
            .status(200)
            .json(
                Responce.success( "Successfuly deleted the cart item", true )
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

async function order(req,res){
    try {
        const { userId , product , quantity , productPrice , totalPriceWithDelivery , paymentMethod , paymentStatus , shippingAddress} = req.body;

        if(!userId && !product && !quantity && !productPrice && !totalPriceWithDelivery && !paymentMethod && !paymentStatus) {
            return res
                .status(404)
                .json(
                    Responce.error( "Sommting was missing to place the order!" , false )
                )
        }

        const order = await OrderModel.create(
            {
                userId,
                product,
                quantity,
                productPrice,
                totalPriceWithDelivery,
                shippingAddress,
                paymentMethod:"Cash-On-Delivery"
            }
        )
        if(!order) {
            return res
                .status(500)
                .json(
                    Responce.error( "Sommting was error on place the order!" , false )
                )
        }

        return res
            .status(200)
            .json(
                Responce.success( "Order placed successfully" , order , true )
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

async function payOnline(req,res){
    try {
        const { userId , cartId , product , quantity , productPrice , totalPriceWithDelivery , paymentMethod , paymentStatus , shippingAddress} = req.body;

        const unicTran = uuidv4();
        const hashedTran = await bcrypt.hash( unicTran , 5 )

        if(!userId && !product && !shippingAddress && !quantity && !productPrice && !totalPriceWithDelivery && !paymentMethod && !paymentStatus) {
            return res
                .status(404)
                .json(
                    Responce.error( "Sommting was missing to place the order!" , false )
                )
        }

        const theCart = await CartModel.findById({_id:cartId}) 
        if(!theCart) {
            return res
                .status(404)
                .json(
                    Responce.error( "cart not exist!" , false )
                )
        }

        const productData = await ProductModel.findById({_id:theCart.product})
        if(productData.quantity <= 0 ) {
            return res
                .status(404)
                .json(
                    Responce.error( "prodcuct was stock out!" , false )
                )
        }

        const order = await OrderModel.create(
            {
                userId,
                product,
                quantity,
                productPrice,
                totalPriceWithDelivery,
                shippingAddress,
                paymentMethod:"Online Payment",
                tran_id: hashedTran
            }
        )
        if(!order) {
            return res
                .status(500)
                .json(
                    Responce.error( "Sommting was error on place the order!" , false )
                )
        }

        const user = await UserModel.findById({_id:userId})
        if(!user) {
            return res
                .status(500)
                .json(
                    Responce.error( "Sommting was error on place the order!" , false )
                )
        }

        const delavaryCharge = shippingAddress.city.toLowerCase() === "dhaka" ? 80 :  160
        const store_id = process.env.SSL_STORE_ID
        const store_passwd = process.env.SOTRE_PASSWORD
        const isLive = false
        const totalAmount = (delavaryCharge + ( productData.price * quantity ));

        const data = {
            total_amount: totalAmount,
            currency: 'BDT',
            tran_id: hashedTran.toString(), // use unique tran_id for each api call
            success_url: `${process.env.SERVER_URL}/api/user/payed?tran_id=${unicTran}&id=${order._id}&cartId=${cartId}`,
            fail_url: `${process.env.SERVER_URL}/api/user/failed?tran_id=${unicTran}&id=${order._id}`,
            cancel_url: `${process.env.SERVER_URL}/api/user/cansled?tran_id=${unicTran}&id=${order._id}`,
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: `${productData.name}`,
            product_category: `${productData.category}` ,
            product_profile: `${productData.brand}`,
            cus_name: `${user.name}`,
            cus_email: `${user.email}`,
            cus_add1: `${user.city}`,
            cus_add2: 'Dhaka',
            cus_city: `${user.city}`,
            cus_state: `${user.city}`,
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: `${user.number}`,
            cus_fax: `${user.number}`,
            ship_name: `${user.name}`,
            ship_add1: `${user.location}`,
            ship_add2: `${user.thana}`,
            ship_city: `${user.city}`,
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };

        const sslcz = new SSLCommerzPayment(store_id, store_passwd, isLive)

        await sslcz.init(data).then(apiResponse => {

            let GatewayPageURL = apiResponse.GatewayPageURL
            
            res.status(200).json({ paymentUrl : GatewayPageURL})

        });

        return;
        
    } catch (error) {
        console.log(error)
        return res
            .status(404)
            .json(
                Responce.error( "Something wrong!" , error , false )
            )
    }
}

function vesite(req,res){
    try {
        
        const visitorIP = req.ip;
        if (!visitorIP) return;

        const visitor = VisitorsModel.findOne({ ip:visitorIP });
        if (visitor) return;

        const newVisitor = VisitorsModel.create({ ip: visitorIP });
        if (!newVisitor) return;

        return res
            .status(200)
            .json(
                Responce.success( "Visitor Logged" , newVisitor , true )
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

async function paied(req,res) {
    try {

        const { tran_id , id , cartId } = req.query;
        
        if (!tran_id && !id && !cartId) return res.send("Somting wrong on update the product data...");

        const order = await OrderModel.findOne({_id:id});
        if(!order) {
            return res
                .status(404)
                .send("Order not found!")
        };
        const hashedTran = await bcrypt.compare( tran_id , order.tran_id )
        if(!hashedTran) {
            return res
                .status(404)
                .send("Invalid Transaction ID!")
        };
        await OrderModel.findByIdAndUpdate( {_id:order._id} , {paymentStatus : "Payed"});
        
        await CartModel.deleteOne({_id:cartId})
        
        return res.send(`
                            <html>
                                <head>
                                    <title>Payment Status</title>
                                </head>
                                <body>
                                    <h1>Payment Successful</h1>
                                    <a href="${process.env.ORIGIN}" style="display: inline-block; margin-top: 10px;">Go to Home</a>
                                    <br>
                                    <button onclick="window.location.href='${process.env.ORIGIN}'" style="margin-top: 10px;">Go Back</button>
                                </body>
                            </html>
                        `)

    } catch (error) {
        console.log(error)
    }
}

function canseld(req,res) {
    try {

        return res.send(`
            <html>
                <head>
                    <title>Payment cancelled!</title>
                </head>
                <body>
                    <h1>Payment </h1>
                    <a href="${process.env.ORIGIN}" style="display: inline-block; margin-top: 10px;">Go to Home</a>
                    <br>
                    <button onclick="window.location.href='${process.env.ORIGIN}'" style="margin-top: 10px;">Go Back</button>
                </body>
            </html>
        `)
        
    } catch (error) {
        console.log(error)
    }
}

function faild(req,res) {
    try {

        return res.send(`
            <html>
                <head>
                    <title>Payment cancelled!</title>
                </head>
                <body>
                    <h1>Payment was faild</h1>
                    <a href="${process.env.ORIGIN}" style="display: inline-block; margin-top: 10px;">Go to Home</a>
                    <br>
                    <button onclick="window.location.href='${process.env.ORIGIN}'" style="margin-top: 10px;">Go Back</button>
                </body>
            </html>
        `)
        
    } catch (error) {
        console.log(error)
    }
}


export { login , register , userProfile , logout , updateUserProfile , Heros , specialOffers , bestSellingProduct , hotItem , catagorys , AProduct , ACart , DCartItem , order , payOnline , vesite , paied , canseld , faild}