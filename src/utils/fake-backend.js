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
          case url.endsWith("/sharednotes/set") && method === "POST":
            return setSharedNotes();
          case url.endsWith("/sharednotes/get") && method === "GET":
            return getSharedNotes();
          case url.endsWith("/sharednotes/getrecipients") && method === "GET":
            return getRecipientsOfNote();
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
          token: "fake-jwt-token",
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

      const setSharedNotes = () => {
        const sharedNote = body;
        let sharedNotesData =
          JSON.parse(localStorage.getItem("sharednotes")) || [];
        sharedNotesData = sharedNotesData?.filter(
          (item) =>
            item.note_id !== sharedNote.note_id ||
            item.user_id !== sharedNote.user_id
        );

        sharedNote.recipients.forEach((recipient) => {
          sharedNotesData.push({
            user_id: sharedNote.user_id,
            note_id: sharedNote.note_id,
            recipient_id: recipient,
          });
        });
        localStorage.setItem("sharednotes", JSON.stringify(sharedNotesData));
        return saveSharedNotes();
      };
      const getRecipientsOfNote = () => {
        let sharedNotesData =
          JSON.parse(localStorage.getItem("sharednotes")) || [];
        const recipients = sharedNotesData?.filter(
          (item) =>
            item.note_id === opts.params.note_id &&
            item.user_id === opts.params.user_id
        );
        return ok(recipients.map((recipient) => recipient.recipient_id));
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
          const allNotes = JSON.parse(localStorage.getItem("notes"));
          notesList = allNotes?.[userEmail] || [];
        }
        const pageId =
          opts.params.page + 1 >= notesList.length
            ? null
            : opts.params.page + 1;
        return ok({ data: [notesList[opts.params.page]], nextId: pageId });
      };
      const getSharedNotes = () => {
        let notesList = [];
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          const allNotes = JSON.parse(
            localStorage.getItem("sharednotes") || []
          );
          notesList =
            allNotes?.filter((note) => note.recipient_id === user["email"]) ||
            [];
        }
        const holeNotes = JSON.parse(localStorage.getItem("notes"));
        const sharedNotes = notesList.map((note)=>holeNotes[note.user_id].filter((noteItem)=>noteItem.id===note.note_id)).flat(1);
        const pageId =
          opts.params.page + 1 >= notesList.length
            ? null
            : opts.params.page + 1;
        //return ok({ data: [notesList[opts.params.page]], nextId: pageId });
        return ok({ data: sharedNotes, nextId: pageId });
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
      const saveSharedNotes = () => {
        resolve({
          ok: true,
          text: () =>
            Promise.resolve(JSON.stringify({ message: "Note was shared" })),
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
