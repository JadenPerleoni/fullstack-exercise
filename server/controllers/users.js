import UserLogin from "../models/userInfo.js";
import TransactionData from "../models/transactionData.js";

import jwt from "jsonwebtoken";

export const createAccount = async (req, res) => {
  let { username } = req.body;

  let newAccount = {
    accounts: { accountId: req.body.accountId, balance: req.body.balance },
  };
  console.log(newAccount);
  try {
    let user = await UserLogin.findOneAndUpdate(
      { username: username },
      { $push: newAccount }
    );
    res.status(201).json({newAccount });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }

};

// Checks if user exists and if password is correct, then generates jwt
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

  console.log(`${existingUser.username} has logged in`);

  res.status(200).json({
    success: true,
    data: {
      userId: existingUser.id,
      username: existingUser.username,
      token: token,
    },
  });
};

export const validate = async (req, res, next) => {
  let token;
  try {
    token = req.headers.authorization.split(" ")[1];
  } catch (error) {
    return res.status(200).json("Token was not provided");
  }

  try {
    const decodedToken = jwt.verify(token, "secretkeyappearshere");
    console.log(`${decodedToken.username} has made an api request`);
    next();
  } catch (error) {
    return res.status(401).json(error.message);
  }
};

export const createTransaction = async (req, res) => {
  let username = req.body.createdBy;
  let update, user;
  let createdBy = await UserLogin.findOne({ username: username });

  const transaction = new TransactionData(req.body);
  let newBalance = 0;

  // TODO: check the type of transaction and then subtract/add it from the user's balance.
  if (req.body.type === "credit") {
    try {
      await transaction.save();

      newBalance = parseInt(createdBy.balance) + parseInt(req.body.amount);
      update = { balance: newBalance };
      user = await UserLogin.findOneAndUpdate({ username: username }, update);

      res.status(201).json(transaction);
    } catch (error) {
      res.status(401).json(error.message);
    }
  } else if (req.body.type === "debit") {
    try {
      await transaction.save();
      newBalance = parseInt(createdBy.balance) - parseInt(req.body.amount);
      update = { balance: newBalance };
      user = await UserLogin.findOneAndUpdate({ username: username }, update);

      res.status(201).json(transaction);
    } catch (error) {
      res.status(401).json(error.message);
    }
  }
};
