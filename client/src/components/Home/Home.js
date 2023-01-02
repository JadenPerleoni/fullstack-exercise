import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../actions/users";


function Home() {
  const dispatch = useDispatch()
  const [transactionInfo, setTransactionInfo] = useState({
    userId: "",
    accountNumber: 0,
    balance: 0,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser(transactionInfo))
    console.log('working!')
  };

  

  return (
    <div>
      <h1>Create transaction</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User id:
          <input
            type="text"
            name="userId"
            value={transactionInfo.userId || ""}
            onChange={(e) => setTransactionInfo({...transactionInfo, userId: e.target.value})}
          />
        </label>
        <label>
          Account number:
          <input
            type="text"
            name="accountNumber"
            value={transactionInfo.accountNumber || ""}
            onChange={(e) => setTransactionInfo({...transactionInfo, accountNumber: e.target.value})}
          />
        </label>
        <label>
          Balance:
          <input
            type="text"
            name="balance"
            value={transactionInfo.balance || ""}
            onChange={(e) => setTransactionInfo({...transactionInfo, balance: e.target.value})}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Home;
