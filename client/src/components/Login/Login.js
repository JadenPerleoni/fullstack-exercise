import { useState } from "react";


function Login() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: JWT??? AND HANDLE LOGIN
    console.log(loginInfo);
  };

  

  return (
    <div className="App">
      <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={loginInfo.username || ""}
            onChange={(e) => setLoginInfo({...loginInfo, username: e.target.value})}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginInfo.password || ""}
            onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value})}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
  );
}
export default Login;
