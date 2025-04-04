import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import  { v2 as CloudiNary } from "cloudinary";
import userRoute from './Routes/User.routes.js';
import connectDB from './DB/ConnectDB.js';
import adminRoutes from './Routes/Admin.routes.js';

dotenv.config(
    {
        path:"./.env"
    }
);

const app = express();
const port = process.env.PORT;

// configarations
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(
    {
        // origin:process.env.ORIGIN,
        origin:"https://e-commerce-ten-alpha-81.vercel.app",
        credentials:true,
    }
));
CloudiNary.config(
    {
        cloud_name:process.env.CDRY_CLOUD_NAME,
        api_key:process.env.CDRY_API_KEY,
        api_secret:process.env.CDRY_API_SECRET
    }
);

// Route add on hare
app.use("/api/user",userRoute);
app.use("/api/admin",adminRoutes);


// DB connect
connectDB()
.then( () => (
    // server setup
    app.listen( port , ()=>{
        console.log(`Your server is listening on port : ${port}`);
    })
))
.catch( error => console.error(`DB Connection error... :-> ` + error) );
