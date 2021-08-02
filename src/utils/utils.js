const cutDescription = (description, length) => description.substr(0, length);

const dateFormatter = (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

const authHeader = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  return (user && user.token) ? { Authorization: "Bearer " + user.token } : {};
};

export { cutDescription, dateFormatter, authHeader };