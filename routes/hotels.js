import express from "express"
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router=express.Router()


// router.get("/",(req,res)=>{
//   res.send("Hello this is hotel endpoint")
// })


//create
router.post("/",verifyAdmin,createHotel);

//Update
router.put("/:id",verifyAdmin,updateHotel);
//Delete

router.delete("/:id",verifyAdmin,deleteHotel);

//get

router.get("/find/:id",getHotel);
//get all


router.get("/",getHotels);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);
router.get("/room/:id",getHotelRooms);

export default router