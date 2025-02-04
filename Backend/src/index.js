import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import  { v2 as CloudiNary } from "cloudinary";
import userRoute from './Routes/User.routes.js';
import connectDB from './DB/ConnectDB.js';


const app = express();
const port = process.env.PORT || 3500

// configarations
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
dotenv.config(
    {
        path:"./.env"
    }
);
app.use(cors(
    {
        credentials:true,
        origin:process.env.FRONTEND_URL
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
app.use("/user/api",userRoute);


// DB connect
await connectDB();

// server setup
app.listen( port , ()=>{
    console.log(`Your server is listening on port : ${port}`);
})
