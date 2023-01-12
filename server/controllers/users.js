import UserInfo from "../models/userInfo.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserInfo.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const userId  = req.body;
  console.log(userId)

  try {
    const users = await UserInfo.findOne(userId);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  console.log(user);
  const newUser = new UserInfo(user);

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.log("error: " + error);
    res.status(409).json({ message: error });
  }
};
