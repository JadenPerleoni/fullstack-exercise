import { useNavigate } from "react-router-dom";

function getUser() {
  let username = sessionStorage.getItem("username");
  username = JSON.parse(username);
  return username;
}

function Home() {
  const navigate = useNavigate();
  const username = getUser();

  const createAcc = () => {
    navigate(`../createacc`)
  }
  const createTrans = () => {
    navigate(`../createtrans`)
  }

  return (
    <div>
      <h1>Hello, {username}</h1>

      <div className="App">
        <div className="login-form">
          Would you like to
          <button onClick={createAcc}>Create an account</button>
          <button onClick={createTrans}>Create a transaction</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
