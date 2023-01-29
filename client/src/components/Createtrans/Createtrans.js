import { useState, useEffect } from "react";
import { createTransaction } from "../../api/index.js";


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

  const [form, setForm] = useState({
    amount: 0,
    type: "credit",
    createdBy: username
  });

  const token = getToken();

  const handleSubmit = (event) => {
    event.preventDefault();
    createTransaction(token, form);
  };

  // TODO: get accounts



  return (
    <div>
      <h2>Hello, {username}</h2>
      <h2>Available accounts: {}</h2>

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
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Createtrans;
