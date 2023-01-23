import express from 'express';
import { getUsers,createUser, getUser } from '../controllers/users.js';

const router = express.Router();

//localhost:5000/users
router.post("/", getUser);
router.post("/create", createUser);


export default router;