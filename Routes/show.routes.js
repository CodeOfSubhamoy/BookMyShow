import express from "express";
import AuthMiddleWare from "../Middleware/auth.middleware.js";
import isTheaterOwnerMiddleware from "../Middleware/isTheaterOwner.middleware.js";
import {
  addShow,
  deleteShow,
  updateShow,
  getShowById,
  getShowByFilter,
} from "../controller/show.controller.js";
const router = express.Router();

//Add show
router.post("/", AuthMiddleWare, isTheaterOwnerMiddleware, addShow);
//update show
router.put("/:showId", AuthMiddleWare, isTheaterOwnerMiddleware, updateShow);
// delete show
router.delete("/:showId", AuthMiddleWare, isTheaterOwnerMiddleware, deleteShow);
//get show by Id
router.get("/:showId", getShowById);
// get all shoe by movie
//get all show by theater
router.get("/getShowByFilter", getShowByFilter);
export default router;
