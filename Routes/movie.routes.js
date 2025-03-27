import express from "express";
import {
  addMovie,
  getMovieById,
  getAllMovies,
  deleteMovie,
  updateMovie,
} from "../controller/movie.controller.js";
import AuthMiddleWare from "../Middleware/auth.middleware.js";
import isAdminMiddleWare from "../Middleware/isAdmin.middleware.js";
const router = express.Router();

//add theater
router.post("/", AuthMiddleWare, isAdminMiddleWare, addMovie);
router.get("/:theaterId", getMovieById);
// get all theaters
// get theaters by owners
router.get("/getTheaters", getAllMovies);
// update theaters
router.put("/:theaterId", AuthMiddleWare, isAdminMiddleWare, updateMovie);
// delete theater
router.delete("/:theaterId", AuthMiddleWare, isAdminMiddleWare, deleteMovie);

export default router;
