import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${URI}/${DB_NAME}`);
        console.log(`MongoDB connected: ${connectInstance.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}



export default connectDB;