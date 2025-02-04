import mongoose from "mongoose";


const connectDB = async () => {
    try {
        
        const db = await mongoose.connect(`${process.env.DB_HOST_URI}/${process.env.DB_NAME}`);
        console.log(`Your database connection on : `, db.connection.host );

    } catch (error) {
        console.log(`DB Connection error... :-> ` + error)
    }
}


export default connectDB;