import express from "express";
import {
  createUser,
  login,
  getUserDetails,
} from "../controller/user.controller.js";

const router = express.Router();

router.get("/", getUserDetails);
router.post("/register", createUser);
router.post("/login", login);

export default router;
