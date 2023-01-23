import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
});

const UserLogin = mongoose.model('UserLogin',userSchema);

export default UserLogin;