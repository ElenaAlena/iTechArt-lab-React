const ROUTES =[
    {
        path:"/login",
        component:'LoginContainer',
        title: "Log In",
        isLink:false,
        private:false         
    },
    {
        path:"/register",
        component:'RegisterContainer',
        title: "Register",
        isLink:false,
        private:false
    },
    {
        path:"/notes",
        component:'MyNotesContainer',
        title: "notes",
        isLink:true,
        private:true
    },
    {
        path:"/about",
        component:'About',
        title: "About",
        isLink:true,
        private:false
    },
    {
        path:"/shared-notes",
        component:'SharedNotesContainer',
        title: "Shared Notes",
        isLink:true,
        private:true
    },
    {
        path:"/not-found",
        component:'Page404Container',
        title: "Page 404",
        isLink:false,
        private:false
    },
    {
        path:"/login",
        component:'LoginContainer',
        title: "Log out",
        isLink:false,
        private:true
    },
    {
        path:"/",
        component:'MyNotesContainer',
        title: "notes",
        isLink:false,
        private:true
    }
]

export default ROUTES;