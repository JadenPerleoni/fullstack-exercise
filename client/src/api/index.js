import axios from "axios";
const url = "http://localhost:5000/users/";

export const createAccount = (token,newUser) => axios.post(`${url}/create`, newUser, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
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
export const createTransaction = (token, transaction) =>
  axios.post(`${url}/createtransaction`, transaction, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getBalance = (token, username) =>
  axios.post(`${url}balance`, username, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
