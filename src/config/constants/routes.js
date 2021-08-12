const ROUTESPATHS = {
  login: "/login",
  register: "/register",
  notes: "/notes",
  about: "/about",
  sharedNotes: "/shared-notes",
  notFound: "/not-found",
};
const API_ROUTES = {
  auth: `/users/authenticate`,
  notes: `/notes`,
  sharednotes: `/sharednotes/get`,
  setsharednotes: `/sharednotes/set`,
  users: `/users`,
  register: `/users/register`,
  recipients: `/sharednotes/getrecipients`,
};
const ROUTES = [
  {
    path: ROUTESPATHS.login,
    component: "LoginContainer",
    title: "Log In",
    isLink: false,
    private: false,
  },
  {
    path: ROUTESPATHS.register,
    component: "RegisterContainer",
    title: "Register",
    isLink: false,
    private: false,
  },
  {
    path: ROUTESPATHS.notes,
    component: "MyNotesContainer",
    title: "notes",
    isLink: true,
    private: true,
  },
  {
    path: ROUTESPATHS.about,
    component: "About",
    title: "About",
    isLink: true,
    private: false,
  },
  {
    path: ROUTESPATHS.sharedNotes,
    component: "SharedNotesContainer",
    title: "Shared Notes",
    isLink: true,
    private: true,
  },
  {
    path: ROUTESPATHS.notFound,
    component: "Page404Container",
    title: "Page 404",
    isLink: false,
    private: false,
  },
  {
    path: ROUTESPATHS.login,
    component: "LoginContainer",
    title: "Log out",
    isLink: false,
    private: true,
  },
  {
    path: "/",
    component: "MyNotesContainer",
    title: "notes",
    isLink: false,
    private: true,
  },
];

export { ROUTES, ROUTESPATHS, API_ROUTES };
