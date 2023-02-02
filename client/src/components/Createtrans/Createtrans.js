import { useState, useEffect } from "react";
import TransactionInfo from "../TransactionInfo/TransactioInfo.js";

import {
  createTransaction,
  getAccounts,
  getTransactions,
} from "../../api/index.js";

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
}

function getUser() {
  let username = sessionStorage.getItem("username");
  username = JSON.parse(username);
  return username;
}

function Createtrans() {
  const username = getUser();
  const token = getToken();
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const [form, setForm] = useState({
    amount: 0,
    type: "credit",
    createdBy: username,
    accountNumber: 0,
    note: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createTransaction(token, form);
    getAccounts(token, { username: username }).then((res) =>
      setAccounts(res.data)
    );
    getTransactions(token, { username: username }).then((res) =>
      setTransactions(res.data)
    );
  };

  useEffect(() => {
    getTransactions(token, { username: username }).then((res) =>
      setTransactions(res.data)
    );
  }, [token, username]);
  useEffect(() => {
    getAccounts(token, { username: username }).then((res) =>
      setAccounts(res.data)
    );
  }, [token, username]);

  return (
    <div>
      <div className="transaction-content">
        <table>
          <tbody>
            <tr>
              <th>Id:</th>
              <th>Date:</th>
              <th>Transaction Type</th>
              <th>Account Number</th>
              <th>Note</th>
              <th>Amount</th>
            </tr>
            {transactions.map((transaction, key) => {
              return (
                <TransactionInfo
                  value={transaction}
                  key={key}
                ></TransactionInfo>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="container">
        <div className="trans-form">
          <h1>Create Transaction</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Amount:
              <input
                type="number"
                name="amount"
                value={form.amount || ""}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
              />
            </label>
            <label>
              Type:
              <select
                value={form.type || ""}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </select>
            </label>
            <label>
              Which account:
              <select
                value={form.accountNumber || ""}
                onChange={(e) =>
                  setForm({ ...form, accountNumber: e.target.value })
                }
              >
                <option>Select one</option>
                {accounts.map((account, key) => {
                  return (
                    <option key={key} value={account.accountNumber}>
                      {account.accountId}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              Note:
              <input
                type="text"
                name="note"
                value={form.note || ""}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Createtrans;
