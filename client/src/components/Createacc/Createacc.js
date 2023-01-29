import { useState } from "react";
import { createAccount } from "../../api/index.js";

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

function Createacc() {
  const username = getUser();
  const [form, setForm] = useState({
    username: username,
    accountId: "",
    balance: 0,
  });
  const token = getToken();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    await createAccount(token, form);
  };

  return (
    <div>
      <div className="App">
        <div className="login-form">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Account id:
              <input
                type="text"
                name="accountid"
                value={form.accountId || ""}
                onChange={(e) => setForm({ ...form, accountId: e.target.value })}
              />
            </label>
            <label>
              Balance:
              <input
                type="number"
                name="balance"
                value={form.balance || ""}
                onChange={(e) => setForm({ ...form, balance: e.target.value })}
              />
            </label>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Createacc;
