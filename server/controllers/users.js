import UserInfo from "../models/userInfo.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserInfo.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  const newUser = new UserInfo(user);

  try {
    await newUser.save();
    
    res.status(201).json(newPost);

  } catch (error) {
    res.status(409).json({message: error.message})
  }
};
