import { API_ROUTES } from "config/constants/routes";
import { authHeader } from "./utils";

const DEFAULTHEADER = { "Content-Type": "application/json" };
const METHOD = {
  get: "GET",
  post: "POST",
};
const getDefaultOptions = (params = null) => ({
  method: METHOD.get,
  headers: authHeader(),
  params: params,
});
const postDefaultOptions = (body) => ({
  method: METHOD.post,
  headers: DEFAULTHEADER,
  body: JSON.stringify(body),
});
const login = async (email, password) => {
  const requestOptions = postDefaultOptions({ email, password });
  const response = await fetch(API_ROUTES.auth, requestOptions);
  const user = await handleResponse(response);
  localStorage.setItem("user", JSON.stringify(user));
  return user;
};
const notes = async (pageNumber) => {
  const requestOptions = getDefaultOptions({ date: "", page: pageNumber });
  return fetch(API_ROUTES.notes, requestOptions).then((response) =>
    JSON.parse(response.text())
  );
};
const sharedNotes = async (pageNumber) => {
  const requestOptions = getDefaultOptions({ page: pageNumber });
  return fetch(API_ROUTES.sharednotes, requestOptions).then((response) =>
    JSON.parse(response.text())
  );
};
const logout = () => {
  localStorage.removeItem("user");
};
const getAll = () => {
  const requestOptions = getDefaultOptions();
  return fetch(API_ROUTES.users, requestOptions).then((response) => {
    return JSON.parse(response.text());
  });
};
const register = (user) => {
  const requestOptions = postDefaultOptions(user);
  return fetch(API_ROUTES.register, requestOptions).then(handleResponse);
};
const setSharedNotes = (sharedNotes) => {
  const requestOptions = postDefaultOptions(sharedNotes);
  return fetch(API_ROUTES.setsharednotes, requestOptions).then(handleResponse);
};
const getRecipientsOfNote = ({ note_id, user_id }) => {
  const requestOptions = getDefaultOptions({
    note_id: note_id,
    user_id: user_id,
  });
  return fetch(API_ROUTES.recipients, requestOptions).then((response) => {
    return JSON.parse(response.text());
  });
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
  setSharedNotes,
  getRecipientsOfNote,
  sharedNotes,
};
