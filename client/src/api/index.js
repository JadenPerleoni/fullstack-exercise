import axios from "axios";

const url = "http://localhost:5000/users/";

export const fetchUsers = () => axios.get(url);
export const createUser = (newUser) => axios.post(`${url}/create`, newUser);
export const fetchUser = (id) => axios.post(url, id);
export const login = (user) =>
  axios.post(`${url}/login`, user).then((res) => {
    // Stores the auth token in session storage
    sessionStorage.setItem("token", JSON.stringify(res.data.data.token));
  });
export const validate = (token) =>
  axios.get(`${url}/validate`, { headers: {
    Authorization: `Bearer ${token}`
  } });
