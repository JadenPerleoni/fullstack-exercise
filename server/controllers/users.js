import UserLogin from "../models/userInfo.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

dotenv.config();

export const getUsers = async (req, res) => {
  try {
    const users = await UserLogin.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const userId = req.body;

  try {
    const users = await UserLogin.findOne(userId);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

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

export const generateToken = async (req, res) => {
  const userData = req.body;
  console.log(userData);

  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  const token = jwt.sign(userData, jwtSecretKey);

  res.send(token);
};

export const validateToken = async (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.header(tokenHeaderKey);
    console.log(token);

    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.send("Successfully Verified");
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied
    return res.status(401).send(error);
  }
};

export const login = async (req, res, next) => {
  let { username, password } = req.body;
  let existingUser;
  console.log(req.body);

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
