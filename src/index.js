

import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})

const app = express();




connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR: ",error);
        
    })
    app.listen(process.env.PORT||8000),
    ()=>{
        console.log(` Server is running at port : ${process.env.PORT}`);
        
    }

})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED !!!",err);
    
})






























// import express from "express"


// (async (params) => {

//     try {

//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // app.on("error",(error)=>{
        //     console.log("ERROR: ",error);
            
        // })

//         app.listen(process.env.PORT,()=>{
//          console.log(`App is listening on port ${process.env.PORT}`);
         
//         })
        
//     } catch (error) {

//         console.error("Error: ", error)
//         throw err
        
//     }
    
// })()