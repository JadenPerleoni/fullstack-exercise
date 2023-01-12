export default (users = [""], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...users, action.payload];

    case "FETCH_ONE":
      return users.filter((filter) => filter.userId !== action.payload)
    default:
      return users;
  }
};
