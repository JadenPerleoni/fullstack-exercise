import express from "express";
import { createUser, getUser, login,validate } from "../controllers/users.js";

const router = express.Router();

//localhost:5000/users
router.post("/getuser", getUser);
router.post("/create", createUser);
router.post("/login", login);
router.get("/validate", validate);


export default router;
