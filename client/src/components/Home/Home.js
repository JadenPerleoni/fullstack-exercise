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
  const [form, setForm] = useState([]);
  const client = axios.create({
    baseURL: "http://localhost:5000/users/test",
  });

  const token = getToken();
  useEffect(() => {
    client
      .get('',{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data);
      });
  }, []);

  console.log(data);

  const username = getUser();

const handleSubmit = () => {

}

  // TODO: CREATE TRANSACTION ROUTE
  return (
    <div className="App">
    <div className="login-form">
      <h1>Create Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="text"
            name="username"
            value={loginInfo.username || ""}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
  );
}

export default Home;
