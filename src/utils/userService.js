import { authHeader } from "./utils";

const login = async (email, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch(
    `/users/authenticate`,
    requestOptions
  );

  const user = await handleResponse(response);
  localStorage.setItem("user", JSON.stringify(user));
  return user;
};
const notes = async (pageNumber) => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
    params: { date: "", page: pageNumber },
  };
  return fetch(`/notes`, requestOptions).then((response) => JSON.parse(response.text()));
};
const logout = () => {
  localStorage.removeItem("user");
};

const getAll = () => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`/users`, requestOptions).then(
    handleResponse
  );
};

const register = (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`/users/register`, requestOptions).then(
    handleResponse
  );
};

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export const userService = {
  login,
  logout,
  register,
  getAll,
  notes,
};
