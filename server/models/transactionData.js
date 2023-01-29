import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  amount: Number,
  type: String,
});

const TransactionData = mongoose.model('TransactionData',transactionSchema);

export default TransactionData;