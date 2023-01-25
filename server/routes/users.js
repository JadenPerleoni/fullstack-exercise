import express from "express";
import { createUser, login,validate,test } from "../controllers/users.js";

const router = express.Router();

//localhost:5000/users
router.post("/create", createUser);
router.post("/login", login);
router.get("/validate", validate);
router.get("/test",validate, test);



export default router;
