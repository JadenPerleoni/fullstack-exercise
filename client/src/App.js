import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Createacc from "./components/Createacc/Createacc";
import Createtrans from "./components/Createtrans/Createtrans";



import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route index element={<Login></Login>} />
        <Route path="home" element={<Home />} />
        <Route path="createacc" element={<Createacc />} />
        <Route path="createtrans" element={<Createtrans />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
