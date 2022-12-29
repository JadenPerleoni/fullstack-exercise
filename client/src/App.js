import "./App.css";
import Login from './components/Login/Login'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "./actions/users";
import Home from "./components/Home/Home";

function App() {

  // PAUSED AT 58:20
  const dispatch = useDispatch();

  useEffect(() => { 
      dispatch(getUsers())
  }, [dispatch])
  return <div className="App">
  <Home></Home>
  </div>;
}

export default App;
