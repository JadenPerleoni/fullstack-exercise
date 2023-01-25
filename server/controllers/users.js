import UserLogin from "../models/userInfo.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserLogin(user);

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.log("error: " + error);
    res.status(409).json({ message: error });
  }
};


// Checks if user exists and if password is correct, then generates jwt
// TODO: Store in browser to authenticate for every request.
export const login = async (req, res, next) => {
  let { username, password } = req.body;
  let existingUser;

  try {
    existingUser = await UserLogin.findOne({ username: username });
  } catch {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  if (!existingUser || existingUser.password != password) {
    const error = Error("Invalid login");
    return next(error);
  }
  let token;
  try {
    //Creating jwt token
    token = jwt.sign(
      { userId: existingUser.id, username: existingUser.username },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );
  } catch (err) {
    console.log(err);
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }

  res.status(200).json({
    success: true,
    data: {
      userId: existingUser.id,
      username: existingUser.username,
      token: token,
    },
  });
};

export const validate = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res
      .status(200)
      .json({ success: false, message: "Error! Token was not provided." });
  }
  try {
    const decodedToken = jwt.verify(token, "secretkeyappearshere");
    res
      .status(200)
      .json({
        success: true,
        data: { userId: decodedToken.userId, username: decodedToken.username },
      });
      console.log(`${decodedToken.username} has made an api request`)
  } catch (error) {
    res.status(401).json(error.message);
  }

};
