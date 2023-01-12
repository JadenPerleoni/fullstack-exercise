import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./actions/users";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({"userId": "yobro"}))
  }, [dispatch]);
  return (

    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Signup></Signup>}></Route>
        <Route index element={<Signup></Signup>} />
        
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />

        

      </Routes>
    </BrowserRouter>
    // {/* <div>
    // <Users></Users>
    // <div className="App">
    //   <div className="login-form">
    //     <Home></Home>
    //   </div>
    // </div>
    // </div> */}
  )
}

export default App;
