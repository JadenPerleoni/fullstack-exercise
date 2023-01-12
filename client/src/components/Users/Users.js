import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUser } from "../../actions/users";

function Users() {
  const dispatch = useDispatch();

  console.log(dispatch(getUser("yobro")))
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

export default Users;
