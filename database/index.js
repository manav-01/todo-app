import mongoose from "mongoose";
import {DBNAME} from "@/app/more-file/constant.js"

const connectDB = async () => {
    try {

        // if (mongoose.connection.isConnected) {
        //   return;
        // }

        console.log("URL:", process.env.MONGODB_URI);

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DBNAME}`)

         console.log(
           `\n MONGODB Connected !! DB Host: ${connectionInstance.connection.host}`
         );        

    } catch (error) {
        console.log("ERROR:: MONGODB Connection Failed:: ", error);
        process.exit(1);
    }
};

export default connectDB;