import * as api from "../api";
// Action creators

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const login = (userInfo) => async (dispatch) => {
  try {
    const {data} = await api.login(userInfo);

    dispatch({ type: "LOGIN", payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

export const validate = (token) => async (dispatch) => {
  try {
    const { data } = await api.validate(token);
    console.log(data)
    dispatch({ type: "AUTH", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
