import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import roomRoute from "./routes/rooms.js"
import hotelRoute from "./routes/hotels.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app=express()
dotenv.config()

const connect=async ()=>{

    try{
       await mongoose.connect('mongodb://localhost:27017/admin') 
       console.log("connected to mongo")
    }catch(error){
        throw error
    }
};
mongoose.connection.on("disconnected",()=>{
    console.log("Mongodb disconnected")
})


//middleware
app.use(cors())

app.use(cookieParser())

app.use(express.json())

app.use("/auth",authRoute)
app.use("/users",userRoute)
app.use("/hotels",hotelRoute)
app.use("/rooms",roomRoute)

app.use((err,req,res,next)=>{
    const errorStatus= err.status ||500
    const errorMessage=err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})


app.listen(3000,()=>{
    connect()
    console.log("Connected to backend on 3000")
})