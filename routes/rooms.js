import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router=express()


//create
router.post("/:hotelId",verifyAdmin,createRoom);

//Update
router.put("/:id",verifyAdmin,updateRoom);
//Delete

router.delete("/:id/:hotelId",verifyAdmin,deleteRoom);

//get

router.get("/:id",getRoom);
//get all


router.get("/",getRooms);

export default router