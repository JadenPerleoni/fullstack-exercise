import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  accountNumber: String,
  balance: {
    type: Number,
    default: 0,
  },
});

const UserInfo = mongoose.model('UserInfo',userSchema);

export default UserInfo;