import UserLogin from "../models/userInfo.js";
import TransactionData from "../models/transactionData.js";
import { AccountData } from "../models/userInfo.js";

import jwt from "jsonwebtoken";

export const createAccount = async (req, res) => {
  let { username } = req.body;

  const accountData = new AccountData({
    accountId: req.body.accountId,
    balance: req.body.balance,
    createdBy: req.body.username,
  });

  let newAccount = {
    accounts: { accountId: req.body.accountId, balance: req.body.balance },
  };
  console.log(accountData);
  try {
    let user = await UserLogin.findOneAndUpdate(
      { username: username },
      { $push: { accounts: accountData } }
    );
    await accountData.save();
    res.status(201).json({ newAccount });
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
  let { accountId } = req.body;

  let newBalance = 0;
  let update, user;
  let account = await AccountData.findOne({
    createdBy: req.body.createdBy,
    accountId: accountId,
  });

  console.log(account);
  const transaction = new TransactionData(req.body);

  if (req.body.type === "credit") {
    try {
      newBalance = parseInt(account.balance) + parseInt(req.body.amount);
      update = { balance: newBalance };
      await AccountData.findOneAndUpdate({ accountId: accountId }, update);
      await transaction.save();

      res.status(201).json(transaction);
    } catch (error) {
      res.status(401).json(error.message);
    }
  } else if (req.body.type === "debit") {
    try {
      newBalance = parseInt(account.balance) - parseInt(req.body.amount);
      update = { balance: newBalance };
      await AccountData.findOneAndUpdate({ accountId: accountId }, update);
      await transaction.save();

      res.status(201).json(transaction);
    } catch (error) {
      res.status(401).json(error.message);
    }
  }
};

export const getAccounts = async (req, res) => {
  let { username } = req.body;

  try {
    let accounts = await AccountData.find({ createdBy: username });
    res.status(201).json(accounts);
  } catch (error) {
    res.status(401).json(error.message);
  }
};

export const getTransactions = async (req, res) => {
  let { username } = req.body;

  try {
    let transactions = await TransactionData.find({ createdBy: username });
    res.status(201).json(transactions);
  } catch (error) {
    res.status(401).json(error.message);
  }
};
