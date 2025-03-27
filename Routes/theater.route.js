import express from "express";
import {
  addTheater,
  getAllTheater,
  updateTheater,
  deleteTheater,
  getTheaterById,
} from "../controller/theater.controller.js";
import AuthMiddleWare from "../Middleware/auth.middleware.js";
const router = express.Router();

//add theater
router.post("/", AuthMiddleWare, addTheater);
router.get("/:theaterId", getTheaterById);
// get all theaters
// get theaters by owners
router.get("/getTheaters", getAllTheater);
// update theaters
router.put("/:theaterId", updateTheater);
// delete theater
router.delete("/:theaterId", deleteTheater);

export default router;
