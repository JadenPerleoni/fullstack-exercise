import mongoose from "mongoose";
import TransactionData from "./transactionData.js";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  accounts: [{accountId: String, accountNumber: Number, balance: Number}]
});

const UserLogin = mongoose.model('UserLogin',userSchema);

export default UserLogin;