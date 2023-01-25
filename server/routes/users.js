import express from "express";
import { createUser, login,validate } from "../controllers/users.js";

const router = express.Router();

//localhost:5000/users
router.post("/create", createUser);
router.post("/login", login);
router.get("/validate", validate);


export default router;
