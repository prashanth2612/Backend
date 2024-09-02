import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async ()=>{

    try {

        const connecionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MogoDB !! Sucessfully connected: ${connecionInstance.connection.host}`);
        
        
    } catch (error) {

        console.log("MOngodb Error ",error);
        process.exit(1);
        
        
        
        
    }
}

export default connectDB