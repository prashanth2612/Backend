import express from "express"
import cors from "cors"
import cookieParser, { signedCookies } from "cookie-parser"

const app = express()
//for setting up middle ware we will use the app.use()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({

    limit:"16kb"
}))
// url whould be encoded in % 
app.use(express.urlencoded(
    {
    extended:true,
    limit:"16kb"
}))

app.use(express.static("public"))

// the above public is just name to store assests

app.use(signedCookies())


export {app}