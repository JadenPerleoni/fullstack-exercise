export default (users = [""], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...users, action.payload];

    case "FETCH_ONE":
      return action.payload;
    case "LOGIN":
      return [...users, action.payload];

    default:
      return users;
  }
};
