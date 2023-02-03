import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {

    amount: Number,
    type: String,
    createdBy: String,
    accountNumber: Number,
    note: String,
    id: Number,
    createdAt: Date,
  },
  { timestamps: true }
);

const TransactionData = mongoose.model("TransactionData", transactionSchema);

export default TransactionData;
