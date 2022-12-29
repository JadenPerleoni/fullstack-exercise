import "./App.css";
import Login from './components/Login/Login'
import { useDispatch } from "react-redux";

function App() {

  // PAUSED AT 58:20
  const dispatch = useDispatch();
  return <div className="App">
  <Login></Login>
  </div>;
}

export default App;
