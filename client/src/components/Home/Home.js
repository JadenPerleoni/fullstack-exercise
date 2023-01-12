import { useSelector } from "react-redux";

function Home() {




  // THIS IS HOW WE get the data from the DISPATCH
  const users = useSelector((state) => state.users);
  return (
    <div>
      <h3> Logged in as {users.userId}</h3>
      <h3> Account number: {users.accountNumber}</h3>

      <h3> Your balance is: ${users.balance}</h3>
    </div>
  );
}

export default Home;
