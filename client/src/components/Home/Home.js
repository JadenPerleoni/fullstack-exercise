import { useState, useEffect } from "react";
import { createTransaction,getBalance } from "../../api/index.js";

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

function Home() {
  const [form, setForm] = useState({
    amount: "",
  });
  const [balance, setBalance] = useState(0);


  const token = getToken();
  const username = getUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    createTransaction(token, form);
  };

  useEffect(() => {
    let response = getBalance(token,{username: username});
    console.log(response);
  },[]);

  console.log(balance);

  return (
    <div>
      <h2>Hello, {username}</h2>

      <div className="App">
        <div className="login-form">
          <h1>Create Transaction</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Amount:
              <input
                type="text"
                name="amount"
                value={form.amount || ""}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
