import axios from "axios";

const url = "http://localhost:5000/users/";

export const createUser = (newUser) => axios.post(`${url}/create`, newUser);
export const login = (user) =>
  axios.post(`${url}/login`, user).then((res) => {
    // Stores the auth token in session storage
    sessionStorage.setItem("token", JSON.stringify(res.data.data.token));
    sessionStorage.setItem("username", JSON.stringify(user.username));
  });
export const validate = (token) =>
  axios.get(`${url}/validate`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const test = (token) =>
  axios
    .get(`${url}/test`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.json());
