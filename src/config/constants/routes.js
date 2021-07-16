const ROUTES =[
    {
        path:"/auth",
        component:'AuthFormContainer',
        title: "Log In",
        isLink:false
    },
    {
        path:"/notes",
        component:'MyNotesContainer',
        title: "notes",
        isLink:true
    },
    {
        path:"/about",
        component:'About',
        title: "About",
        isLink:true
    },
    {
        path:"/shared-notes",
        component:'SharedNotesContainer',
        title: "Shared Notes",
        isLink:true
    },
    {
        path:"/not-found",
        component:'Page404Container',
        title: "Page 404",
        isLink:false
    },
    {
        path:"/",
        component:'MyNotesContainer',
        title: "notes",
        isLink:false
    }
]

export default ROUTES;