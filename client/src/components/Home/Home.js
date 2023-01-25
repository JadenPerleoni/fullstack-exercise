
function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
}

function getUser() {
  let username = sessionStorage.getItem("username");
  username = JSON.parse(username);
  return username;
}

function Home() {
  const username = getUser();

  const token = getToken();
  console.log(token)

  return <div>Hello, {username}</div>;
}

export default Home;
