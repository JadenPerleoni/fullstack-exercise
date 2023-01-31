import { useState, useEffect } from "react";
import { createTransaction, getAccounts } from "../../api/index.js";

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

  const [form, setForm] = useState({
    amount: 0,
    type: "credit",
    createdBy: username,
    accountNumber: 0,
  });


  const handleSubmit = async (event) => {
    event.preventDefault();
    createTransaction(token, form);

  };

  useEffect(() => {
    getAccounts(token, { username: username }).then((res) =>
      setAccounts(res.data)
    );
  }, [token, username]);

  return (
    <div>
      <h2>Hello, {username}</h2>
      <h2>Your accounts:</h2>
      <table>
        <tbody>
          <tr>
            <th>Account id</th>
            <th>Account number</th>
            <th>Balance</th>
          </tr>
          {accounts.map((account, key) => {
            return (
              <tr key={key}>
                <td>{account.accountId}</td>
                <td>{account.accountNumber}</td>
                <td>${account.balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>Past transactions: {}</h2>

      <div className="App">
        <div className="login-form">
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
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Createtrans;
