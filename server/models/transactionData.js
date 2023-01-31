import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {
    amount: Number,
    type: String,
    createdBy: String,
    accountId: String,
    note: String,
  },
  { timestamps: true }
);

const TransactionData = mongoose.model("TransactionData", transactionSchema);

export default TransactionData;
