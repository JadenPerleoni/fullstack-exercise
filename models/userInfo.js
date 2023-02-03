import mongoose from "mongoose";
import crypto from "crypto";

const accountSchema = mongoose.Schema({
  accountNumber: {
    type: Number,
    required: true,
    default: function () {
      return parseInt(crypto.randomBytes(8).toString("hex"), 16)
        .toString()
        .slice(0, 16);
    },
    unique: true,
  },
  accountId: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: String,
    required: true
  }
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accounts: [accountSchema],
});

const UserLogin = mongoose.model("UserLogin", userSchema);
export const AccountData = mongoose.model("AccountData", accountSchema);

export default UserLogin;
