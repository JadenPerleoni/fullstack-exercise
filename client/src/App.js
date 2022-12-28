import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [loginInfo, setLoginInfo] = useState({});
  const [message, setMessage] = useState("");


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginInfo((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Username: ${loginInfo.username} password: ${loginInfo.password}`);
  };
  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <div className="login-form">
      <h3>Please login: </h3>
      <h1>{message}</h1>
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
