import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  amount: Number,
});

const TransactionData = mongoose.model('TransactionData',transactionSchema);

export default TransactionData;