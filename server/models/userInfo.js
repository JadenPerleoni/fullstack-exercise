import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  balance: Number,
});

const UserLogin = mongoose.model('UserLogin',userSchema);

export default UserLogin;