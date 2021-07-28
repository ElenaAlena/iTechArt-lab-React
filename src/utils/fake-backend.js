import NOTES from "config/constants/notes.js";

let users = JSON.parse(localStorage.getItem("users")) || [];

const setDefaultNotes = (userEmail) => {
  const notes = JSON.parse(localStorage.getItem("notes"));
  if (!notes) {
    localStorage.setItem("notes", JSON.stringify({ [userEmail]: NOTES }));
  } else if (!notes[userEmail]) {
    notes[userEmail] = NOTES;
    localStorage.setItem("notes", JSON.stringify(notes));
  }
};
export const configureFakeBackend = () => {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    const { method, headers } = opts;
    const body = opts.body && JSON.parse(opts.body);

    return new Promise((resolve, reject) => {
      const handleRoute = () => {
        switch (true) {
          case url.endsWith("/users/authenticate") && method === "POST":
            return authenticate();
          case url.endsWith("/users/register") && method === "POST":
            return register();
          case url.endsWith("/users") && method === "GET":
            return getUsers();
          case url.endsWith("/notes") && method === "GET":
            return getNotes();
          default:
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }
      };
      // route functions
      const authenticate = () => {
        const { email, password } = body;
        const user = users.find(
          (x) => x.email === email && x.password === password
        );
        if (!user) return error("Username or password is incorrect");

        return okResult({
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          token: "fake-token",
        });
      };

      const register = () => {
        const user = body;

        if (users.find((x) => x.email === user.email)) {
          return error(`Username  ${user.email} is already taken`);
        }

        user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        setDefaultNotes(user.email);

        return okResult();
      };

      const getUsers = () => {
        if (!isLoggedIn()) return unauthorized();

        return ok(users);
      };

      const getNotes = () => {
        let notesList = [];
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          const userEmail = user["email"];
          const allNotes = JSON.parse(localStorage.getItem("notes"))
          notesList = allNotes?.[userEmail] || [];
        }
        const pageId =
          opts.params.page + 1 >= notesList.length
            ? null
            : opts.params.page + 1;
        return ok({ data: [notesList[opts.params.page]], nextId: pageId });
      };

      // helper functions
      const ok = (body) => {
        resolve({
          ok: true,
          text: () => JSON.stringify(body),
        });
      };
      const okResult = (body) => {
        resolve({
          ok: true,
          text: () => Promise.resolve(JSON.stringify(body)),
        });
      };

      const unauthorized = () => {
        resolve({
          status: 401,
          text: () =>
            Promise.resolve(JSON.stringify({ message: "Unauthorized" })),
          //JSON.stringify({ message: "Unauthorized" })
        });
      };

      const error = (message) => {
        resolve({
          status: 400,
          text: () => Promise.resolve(JSON.stringify({ message })),
          //text: () => JSON.stringify({ message }),
        });
      };

      const isLoggedIn = () => {
        return headers["Authorization"] === "Bearer fake-jwt-token";
      };

      setTimeout(handleRoute, 500);
    });
  };
};

export default configureFakeBackend;
