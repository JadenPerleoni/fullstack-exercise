import { useState } from "react";
import { login } from "../../actions/users";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: JWT??? AND HANDLE LOGIN
    console.log(loginInfo);

    dispatch(login(loginInfo));
    setTimeout(1000);
  
    navigate(`Home`)


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
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, username: e.target.value })
              }
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={loginInfo.password || ""}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
export default Login;
