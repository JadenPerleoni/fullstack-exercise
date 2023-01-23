import express from "express";
import { createUser, getUser, generateToken,validateToken,login } from "../controllers/users.js";

const router = express.Router();

//localhost:5000/users
router.post("/getuser", getUser);
router.post("/create", createUser);
router.post("/generate", generateToken);
router.get("/validate", validateToken);
router.post("/login", login);


export default router;
