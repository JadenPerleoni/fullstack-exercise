import { validate } from "../../actions/users";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
}

function Home() {
  const dispatch = useDispatch();

  const token = getToken();
  console.log(token)

  useEffect(() => {
    dispatch(validate(token));
  },
    [dispatch]);
  return <div>Hello, </div>;
}

export default Home;
