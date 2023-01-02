import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "./actions/users";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers({id: "jp420"}));
  }, [dispatch]);
  return (
    <div>
    <Users></Users>
    <div className="App">
      <div className="login-form">
        <Home></Home>
      </div>
    </div>
    </div>
  );
}

export default App;
