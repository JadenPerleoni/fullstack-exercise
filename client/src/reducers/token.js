export default (token = [""], action) => {
    switch (token) {
      case "AUTH":
        return [...token, action.payload];
      default:
        return token;
    }
  };
  