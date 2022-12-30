import UserInfo from "../models/userInfo.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserInfo.find();
    console.log(users);
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
    
    res.status(201).json(newUser);

  } catch (error) {
    console.log('error: ' + error)
    res.status(409).json({message: error})
  }
};
