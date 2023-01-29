import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Createacc from "./components/Createacc/Createacc";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route index element={<Login></Login>} />
        <Route path="home" element={<Home />} />
        <Route path="createacc" element={<Createacc />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
