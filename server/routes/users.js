import express from 'express';
import { getUsers,createUser, getUser } from '../controllers/users.js';

const router = express.Router();

//localhost:5000/users
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:userId", getUser);


export default router;