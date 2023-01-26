import { useState, useEffect } from "react";
import { test } from "../../actions/users";

import axios from "axios";

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
  const client = axios.create({
    baseURL: "http://localhost:5000/users/createTransaction",
  });

  const token = getToken();
  // useEffect(() => {
  //   client.post("", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     amount: form.amount,
  //   });
  // }, []);

  const username = getUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    client
      .post("", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.json()));
  };

  // TODO: CREATE TRANSACTION ROUTE
  return (
    <div className="App">
      <h2>Hello, {username}</h2>
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
  );
}

export default Home;
