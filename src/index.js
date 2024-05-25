import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js"
dotenv.config({path: "./env"});




connectDB()
    .then(() => {
    app.on("error", (err) => console.log(err));
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
    .catch((err) => {
    console.error("Mongodb connection failed: ", err);
})

 /* 

import express from "express";

const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error) => {
            console.error(error);
            throw error; 
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
})()

*/
