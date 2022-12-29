import { useSelector } from "react-redux";


function Home() {
    const users = useSelector((state) => state.users);
    console.log(users)
     
  return <div>Home page</div>;
}
export default Home;
