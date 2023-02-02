import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Createacc from "../Createacc/Createacc";
import Createtrans from "../Createtrans/Createtrans";

function getUser() {
  let username = sessionStorage.getItem("username");
  username = JSON.parse(username);
  return username;
}

function Home() {
  const navigate = useNavigate();
  const username = getUser();
  const [accountsClicked, setAccountsClicked] = useState(false);
  const [transactionsClicked, setTransactionsClicked] = useState(false);

  const createAcc = () => {
    if (transactionsClicked) {
      setTransactionsClicked(!transactionsClicked);
    }

    setAccountsClicked(!accountsClicked);
    // navigate(`../createacc`);
  };
  const createTrans = () => {
    if (accountsClicked) {
      setAccountsClicked(!accountsClicked);
    }

    setTransactionsClicked(!transactionsClicked);
    // navigate(`../createtrans`);
  };

  return (
    <div>
      <div className="sidebar">
        <h1 className="home-user">Hello, {username}</h1>
        <hr></hr>
        <div className="sidebar-content">
          <button
            className="button-style"
            onClick={createAcc}
            style={{
              backgroundColor: accountsClicked
                ? "#349beb"
                : "rgb(223, 228, 231)",
              color: accountsClicked ? "rgb(223, 228, 231)" : "",
            }}
          >
            Accounts
          </button>
          <button
            className="button-style"
            onClick={createTrans}
            style={{
              backgroundColor: transactionsClicked
                ? "#349beb"
                : "rgb(223, 228, 231)",
              color: transactionsClicked ? "rgb(223, 228, 231)" : "",
            }}
          >
            Transactions
          </button>
        </div>
      </div>
      {accountsClicked ? <Createacc></Createacc> : ""}
      {transactionsClicked ? <Createtrans></Createtrans> : ""}

      <div className="App"></div>
    </div>
  );
}

export default Home;
