import express from "express";
import {
  login,
  validate,
  createTransaction,
  createAccount,
  getAccounts
} from "../controllers/users.js";

const router = express.Router();

//localhost:5000/users
router.post("/create",validate, createAccount);
router.post("/login", login);
router.get("/validate", validate);

router.post("/getaccounts", validate, getAccounts);


router.post("/createtransaction", validate, createTransaction);

export default router;
