import "../App.css";
import { useState } from "react";

function App() {
  const [loginInfo, setLoginInfo] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginInfo((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Username: ${loginInfo.username} password: ${loginInfo.password}`
    );
  };

  return (
    <div className="App">
      <div className="login-form">
        <h3>Please login: </h3>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={loginInfo.username || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={loginInfo.password || ""}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
