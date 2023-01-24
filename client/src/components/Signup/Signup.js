import { useDispatch } from "react-redux";
import { useState } from "react";
import { createUser } from "../../actions/users";



function Signup() {
    const dispatch = useDispatch()
    const [userInfo, setUserInfo] = useState({
      username: "",
      password: "",
    });
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(userInfo);
      dispatch(createUser(userInfo))
    };
  
    const users = useSelector((state) => state.users);
  
    return (
      <div className="App">
        <div className="login-form">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={userInfo.username || ""}
              onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={userInfo.password || ""}
              onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      
      </div>
    );
}

export default Signup;