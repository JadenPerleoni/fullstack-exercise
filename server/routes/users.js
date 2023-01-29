import express from "express";
import {
  login,
  validate,
  createTransaction,
  createAccount,
} from "../controllers/users.js";

const router = express.Router();

//localhost:5000/users
router.post("/create",validate, createAccount);
router.post("/login", login);
router.get("/validate", validate);


router.post("/createtransaction", validate, createTransaction);

export default router;
