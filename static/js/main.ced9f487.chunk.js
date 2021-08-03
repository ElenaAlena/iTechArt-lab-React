(this["webpackJsonpitechart-lab-react"]=this["webpackJsonpitechart-lab-react"]||[]).push([[0],{126:function(e,t,r){},127:function(e,t,r){},135:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(12),o=r.n(i),s=r(22),c=(r(126),r(15)),u=r(24),l=(r(127),r(188)),d=r(72),m=r(174),f=r(175),p=r(44),h=r(169),g=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},navLink:{color:"#fff",padding:"6px 8px",fontSize:"0.875rem",minWidth:"64px",boxSizing:"border-box",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"500",lineHeight:"1.75",borderRadius:"4px",letterSpacing:"0.02857em",textTransform:"uppercase",textDecoration:"none"},active:{color:"pink"}}})),b=[{path:"/login",component:"LoginContainer",title:"Log In",isLink:!1,private:!1},{path:"/register",component:"RegisterContainer",title:"Register",isLink:!1,private:!1},{path:"/notes",component:"MyNotesContainer",title:"notes",isLink:!0,private:!0},{path:"/about",component:"About",title:"About",isLink:!0,private:!1},{path:"/shared-notes",component:"SharedNotesContainer",title:"Shared Notes",isLink:!0,private:!0},{path:"/not-found",component:"Page404Container",title:"Page 404",isLink:!1,private:!1},{path:"/login",component:"LoginContainer",title:"Log out",isLink:!1,private:!0},{path:"/",component:"MyNotesContainer",title:"notes",isLink:!1,private:!0}],v=r(187),j=r(2),O=function(e){var t=e.alert;return t?Object(j.jsx)(v.a,{severity:t.type||"info",children:t.text}):null},x="ALERT_SUCCESS",N="ALERT_ERROR",S="ALERT_CLEAR",y=function(e){return{type:x,message:e}},I=function(e){return{type:N,message:e}},w=function(){return{type:S}},C=new l.a({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),L=function(e){var t=e.children,r=g(),i=Object(s.c)((function(e){return e.alertReducer})),o=Object(s.c)((function(e){return e.authenticationReducer.user})),l=Object(c.g)(),h=Object(s.b)();Object(n.useEffect)((function(){l.listen((function(e,t){h(w())}))}),[]);var v=o&&o.firstName?"HI ".concat(o.firstName):"";return Object(j.jsx)(d.a,{client:C,contextSharing:!0,children:Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("div",{className:r.root,children:Object(j.jsx)(m.a,{position:"static",children:Object(j.jsxs)(f.a,{children:[Object(j.jsx)(p.a,{variant:"h6",className:r.title,children:v}),b.map((function(e,t){return e.isLink&&Object(j.jsx)(u.b,{className:r.navLink,to:e.path,activeClassName:r.active,children:e.title},t)})),o&&Object(j.jsx)(u.b,{className:r.navLink,to:"/login",activeClassName:r.active,children:"LogOut"})]})})}),i.message&&Object(j.jsx)(O,{alert:{type:i.type,text:i.message}}),t]})})},E=r(31),k=r(3),R=["component","roles"],A=function(e){var t=e.component,r=(e.roles,Object(k.a)(e,R));return Object(j.jsx)(c.b,Object(E.a)(Object(E.a)({},r),{},{render:function(e){return localStorage.getItem("user")?Object(j.jsx)(t,Object(E.a)({},e)):Object(j.jsx)(c.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},T=r(17),_=r(95),D=r.n(_),U=r(191),P=r(176),J=r(104),q=r(185),F=r(184),M=r(181),B=r(183),G=r(96),W=r.n(G),V=r(97),H=r.n(V),Q=r(98),z=r.n(Q),Z=r(173),$=r(182),K=function(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}},X=function(e,t){return e.order>t.order?-1:1},Y=r(189),ee=r(186),te=r(178),re=r(192),ne=r(194),ae=r(177),ie=r(180),oe=Object(h.a)((function(e){return{formControl:{width:"100%"},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}})),se=r(18),ce=r.n(se),ue=r(33),le=function(){var e=Object(ue.a)(ce.a.mark((function e(t,r){var n,a,i;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:r})},e.next=3,fetch("/users/authenticate",n);case 3:return a=e.sent,e.next=6,me(a);case 6:return i=e.sent,localStorage.setItem("user",JSON.stringify(i)),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),de=function(){localStorage.removeItem("user")},me=function(e){return e.text().then((function(t){var r=t&&JSON.parse(t);if(!e.ok){401===e.status&&(de(),window.location.reload(!0));var n=r&&r.message||e.statusText;return Promise.reject(n)}return r}))},fe={login:le,logout:de,register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("/users/register",t).then(me)},getAll:function(){var e={method:"GET",headers:K()};return fetch("/users",e).then((function(e){return JSON.parse(e.text())}))},notes:function(){var e=Object(ue.a)(ce.a.mark((function e(t){var r;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",headers:K(),params:{date:"",page:t}},e.abrupt("return",fetch("/notes",r).then((function(e){return JSON.parse(e.text())})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setSharedNotes:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("/sharednotes/set",t).then(me)},getRecipientsOfNote:function(e){var t=e.note_id,r=e.user_id,n={method:"GET",headers:K(),params:{note_id:t,user_id:r}};return fetch("/sharednotes/getrecipients",n).then((function(e){return JSON.parse(e.text())}))},sharedNotes:function(){var e=Object(ue.a)(ce.a.mark((function e(t){var r;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",headers:K(),params:{page:t}},e.abrupt("return",fetch("/sharednotes/get",r).then((function(e){return JSON.parse(e.text())})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pe={getNotes:function(){var e=Object(ue.a)(ce.a.mark((function e(t){var r,n,a;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.pageParam,n=void 0===r?0:r,e.next=3,fe.notes(n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getNotesOptions:{getNextPageParam:function(e){return e?e.nextId:null!==1&&1}},getAllUsers:function(){var e=Object(ue.a)(ce.a.mark((function e(){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.getAll();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getRecipientsOfNote:function(){var e=Object(ue.a)(ce.a.mark((function e(t){var r,n,a;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.note_id,n=t.user_id,e.next=3,fe.getRecipientsOfNote({note_id:r,user_id:n});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),sharedNotes:function(){var e=Object(ue.a)(ce.a.mark((function e(t){var r,n,a;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.pageParam,n=void 0===r?0:r,e.next=3,fe.sharedNotes(n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he={PaperProps:{style:{maxHeight:224,width:250}}},ge=function(e){var t=e.allUsersData,r=e.noteId,a=Object(n.useState)([]),i=Object(T.a)(a,2),o=i[0],c=i[1],u=Object(s.d)().getState().authenticationReducer.user,l=oe(),d=Object(Y.a)(fe.setSharedNotes),m=Object(P.a)(["recipients",r,u.email,o],(function(){return pe.getRecipientsOfNote({note_id:r,user_id:u.email})}),{enabled:!o.length});return Object(n.useEffect)((function(){c([])}),[r]),m.isSuccess||m.isIdle?Object(j.jsxs)(ae.a,{className:l.formControl,children:[Object(j.jsx)(re.a,{id:"demo-mutiple-name-label",children:"Share to"}),Object(j.jsx)(ee.a,{className:l.formControl,labelId:"demo-mutiple-name-label",id:"demo-mutiple-name",multiple:!0,value:o.length?o:m.data,onChange:function(e){e.stopPropagation(),c(e.target.value),d.mutate({recipients:e.target.value,note_id:r,user_id:u.email})},input:Object(j.jsx)(te.a,{}),renderValue:function(e){return e.join(", ")},MenuProps:he,children:t.map((function(e){return Object(j.jsx)(ne.a,{value:e.email,children:Object(j.jsx)(ie.a,{primary:"".concat(u.firstName," ").concat(u.lastName)})},e.email)}))})]}):Object(j.jsx)("p",{})},be=Object(h.a)({root:{marginBottom:"12px",textAlign:"right",cursor:"grab"},text:{textAlign:"left",background:"inherit"},meta:{fontSize:10,textAlign:"right"},active:{backgroundColor:"aliceblue"},btn:{padding:"3px"}}),ve=function(e){var t,r,n,a=e.note,i=e.activeNoteId,o=e.setActiveNoteId,s=e.isEditMode,c=e.setIsEditMode,u=e.isSharedMode,l=e.onDeleteNote,d=e.getAllUsersSuccess,m=e.allUsersData,f=e.dragService,h=e.setCurrentNote,g=e.reOrder,b=be(),v=[b.root,a&&a.id===i?b.active:""].join(" ");return a&&Object(j.jsxs)(M.a,{className:v,onClick:function(){return e=a.id,!u&&c(!1),void o(e);var e},onDragStart:function(){return f.dragStartHandler(a,h)},onDragLeave:function(e){return f.dragLeaveHandler(e)},onDragEnd:function(e){return f.dragLeaveHandler(e)},onDragOver:function(e){return f.dragOverHandler(e)},onDrop:function(e){return f.dropHandler(e,a,g)},draggable:!0,children:[Object(j.jsx)($.a,{className:b.text,action:Object(j.jsxs)("div",{children:[a.id===i&&!s&&Object(j.jsx)(Z.a,{"aria-label":"close",className:b.btn,onClick:function(e){return function(e){e.stopPropagation(),o(-1)}(e)},children:Object(j.jsx)(W.a,{})}),!u&&Object(j.jsx)(Z.a,{"aria-label":"edit",className:b.btn,onClick:function(e){return function(e){e.stopPropagation(),o(a.id),c(!0)}(e)},children:Object(j.jsx)(H.a,{})}),!u&&Object(j.jsx)(Z.a,{"aria-label":"Delete",className:b.btn,onClick:function(e){return function(e,t){e.stopPropagation(),o(""),l(a.id)}(e,a.id)},children:Object(j.jsx)(z.a,{})})]}),title:a.title}),Object(j.jsxs)(B.a,{children:[Object(j.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",className:b.text,children:a.description&&(r=a.description,n=20,r.substr(0,n)+"...")}),Object(j.jsxs)(p.a,{className:b.meta,color:"textSecondary",gutterBottom:!0,children:["Date of creation ",(t=a.dateCreation,new Date(t).toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit"}))]}),u&&Object(j.jsxs)(p.a,{className:b.meta,color:"textSecondary",gutterBottom:!0,children:["by ",a.authorName]}),d&&m&&Object(j.jsx)(ge,{noteId:a.id,allUsersData:m})]})]})},je={noteList:{}},Oe=function(e){var t=e.notes,r=e.activeNoteId,n=e.setActiveNoteId,a=e.isEditMode,i=e.setIsEditMode,o=e.isSharedMode,s=void 0!==o&&o,c=e.onDeleteNote,u=e.getAllUsersSuccess,l=e.allUsersData,d=e.setCurrentNote,m=e.dragService,f=e.reOrder;return Object(j.jsx)("div",{style:je.noteList,children:t&&t.map((function(e,t){return Object(j.jsx)(ve,{note:e,activeNoteId:r,setActiveNoteId:n,isEditMode:a,setIsEditMode:i,isSharedMode:s,onDeleteNote:c,getAllUsersSuccess:u,allUsersData:l,dragService:m,setCurrentNote:d,reOrder:f},t)}))})},xe=r(190),Ne=Object(h.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),marginTop:0,marginBottom:0,width:"25ch"}}})),Se=function(e){var t=e.onFilterByDate,r=Ne();return Object(j.jsx)(xe.a,{label:"Filter by Date",id:"filterNotes",defaultValue:"",type:"date",className:r.textField,margin:"dense",variant:"outlined",onChange:function(e){t(e.target.value)},InputLabelProps:{shrink:!0}})},ye=function(e){var t=e.onFilterByTitle,r=Ne();return Object(j.jsx)(xe.a,{label:"Filter by Note Title",id:"filterTitles",defaultValue:"",className:r.textField,margin:"dense",variant:"outlined",onChange:function(e){t(e.target.value)},InputLabelProps:{shrink:!0}})},Ie=function(e){var t=e.activeNote;return t?Object(j.jsx)("p",{children:t.description}):Object(j.jsx)("div",{children:"No Active Note"})},we=r(21),Ce=r(136),Le=Object(h.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}},formElementContainer:{width:"100%"},formElement:{width:"100%"}}})),Ee=function(e){var t=e.activeNote,r=e.onUpdateNote,a=Le(),i=Object(n.useState)(Object(E.a)({},t)),o=Object(T.a)(i,2),s=o[0],c=o[1];s.id!==t.id&&c(Object(E.a)({},t));var u=function(e,t){c(Object(E.a)(Object(E.a)({},s),{},Object(we.a)({},e,t)))};return Object(j.jsxs)("form",{className:a.root,noValidate:!0,autoComplete:"off",children:[Object(j.jsx)("div",{className:a.formElementContainer,children:Object(j.jsx)(xe.a,{id:"outlined-basic",label:"Note Title",variant:"outlined",value:s.title,onChange:function(e){return u("title",e.target.value)},fullWidth:!0})}),Object(j.jsx)("div",{className:a.formElementContainer,children:Object(j.jsx)(Ce.a,{"aria-label":"minimum height",minRows:10,placeholder:"Add description for note",value:s.description,className:a.formElement,onChange:function(e){return u("description",e.target.value)}})}),Object(j.jsx)(F.a,{variant:"contained",color:"primary",onClick:function(){r(s)},children:"Save Note"})]})},ke=Object(h.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},alignLeft:{textAlign:"left"},headerBtn:{margin:"0 20px"}}})),Re=function(e){var t=e.notes,r=e.activeNoteId,n=e.setActiveNoteId,a=e.getActiveNote,i=e.isEditMode,o=e.setIsEditMode,s=e.onUpdateNote,c=e.onAddNote,u=e.onDeleteNote,l=e.onFilterByDate,d=e.onFilterByTitle,m=e.getAllUsersSuccess,f=e.allUsersData,p=e.dragService,h=e.setCurrentNote,g=e.reOrder,b=ke();return Object(j.jsx)("div",{className:b.root,children:Object(j.jsxs)(q.a,{container:!0,spacing:3,children:[Object(j.jsx)(q.a,{item:!0,xs:12,children:Object(j.jsx)("h1",{children:"My list of Notes"})}),Object(j.jsxs)(q.a,{item:!0,xs:12,className:b.alignLeft,children:[Object(j.jsx)(F.a,{variant:"contained",className:b.headerBtn,onClick:c,children:"Add Note"}),Object(j.jsx)(Se,{onFilterByDate:l}),Object(j.jsx)(ye,{onFilterByTitle:d})]}),Object(j.jsx)(q.a,{item:!0,xs:4,children:t&&t.pages.map((function(e,t){return Object(j.jsx)(Oe,{notes:e.data,activeNoteId:r,setActiveNoteId:n,isEditMode:i,setIsEditMode:o,onDeleteNote:u,getAllUsersSuccess:m,allUsersData:f,dragService:p,setCurrentNote:h,reOrder:g},t)}))}),Object(j.jsx)(q.a,{item:!0,xs:8,children:Object(j.jsx)(J.a,{className:b.paper,children:i&&a()?Object(j.jsx)(Ee,{activeNote:a(),onUpdateNote:s}):Object(j.jsx)(Ie,{activeNote:a()})})})]})})},Ae=function(e){var t=e.noteId,r=e.user,n=JSON.parse(localStorage.getItem("sharednotes"))||[],a=null===n||void 0===n?void 0:n.filter((function(e){return e.user_id!==r&&e.note_id!==t}));localStorage.setItem("sharednotes",JSON.stringify(a))},Te=r(28),_e=function(){var e=Object(ue.a)(ce.a.mark((function e(t){var r,n,a;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.newNote,n=t.queryClient,a=t.queryName,n.setQueryData(a,(function(e){var t;return{pages:null!==(t=null===e||void 0===e?void 0:e.pages.map((function(e,t){return 0===t&&(e.data=[r].concat(Object(Te.a)(e.data))),e})))&&void 0!==t?t:[],pageParams:e.pageParams}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=r(7),Ue=r.n(De),Pe={dragStartHandler:function(e,t){t(e)},dragLeaveHandler:function(e){},dragOverHandler:function(e){e.preventDefault()},dropHandler:function(e,t,r){e.preventDefault(),r(t)}};Pe.propTypes={e:Ue.a.any,card:Ue.a.array,reOrder:Ue.a.func};var Je=Pe,qe=function(){var e=Object(d.b)(),t=Object(s.d)().getState().authenticationReducer.user,r=Object(n.useState)(null),i=Object(T.a)(r,2),o=i[0],c=i[1],u=Object(n.useState)(!1),l=Object(T.a)(u,2),m=l[0],f=l[1],p=Object(n.useState)(""),h=Object(T.a)(p,2),g=h[0],b=h[1],v=Object(n.useState)(""),O=Object(T.a)(v,2),x=O[0],N=O[1],S=Object(n.useState)(null),y=Object(T.a)(S,2),I=y[0],w=y[1],C=Object(n.useState)(null),L=Object(T.a)(C,2),E=L[0],k=L[1],R=[Object(U.a)("notes",pe.getNotes,pe.getNotesOptions),Object(P.a)("getUsers",(function(){return pe.getAllUsers()}))],A=Object(T.a)(R,2),_=A[0],J=_.data,q=_.error,F=_.fetchNextPage,M=_.hasNextPage,B=_.isFetching,G=(_.isFetchingNextPage,_.status),W=A[1],V=(W.isLoading,W.error,W.data),H=W.isSuccess,Q=Object(n.useRef)(),z=Object(n.useCallback)((function(e){B||(Q.current&&Q.current.disconnect(),Q.current=new IntersectionObserver((function(e){e[0].isIntersecting&&M&&F()})),e&&Q.current.observe(e))}),[B,M,F]),Z=Je;Object(n.useEffect)((function(){x||g?$():w(null)}),[J,x,g]);var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(null);var t=e.text?e.text:x,r=e.date?e.date:g,n=[];null===J||void 0===J||J.pages.forEach((function(e,a){n[a]={},n[a].data=e.data.filter((function(e){if(e){var n=!0;return t&&(n=e.title.toLowerCase().includes(t.toLowerCase())),r&&(n=n&&new Date(e.dateCreation).toDateString()===new Date(r).toDateString()),n}return!1}))})),w({pages:n})};return"loading"===G?Object(j.jsx)("p",{children:"Loading..."}):"error"===G?Object(j.jsxs)("p",{children:["Error: ",q.message]}):Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(Re,{notes:I||J||[],activeNoteId:o,setActiveNoteId:c,getActiveNote:function(){var e=null;if(o){var t=null===J||void 0===J?void 0:J.pages.reduce((function(e,t){var r=t.data.filter((function(e){return(null===e||void 0===e?void 0:e.id)===o}));return r&&r.length&&(e=r),e}),[]);t.length?e=t[0]:(c(""),f(!1))}return e},isEditMode:m,setIsEditMode:f,onUpdateNote:function(r){!function(e){var t=e.updatedNote,r=e.user,n=JSON.parse(localStorage.getItem("notes"))||{},a=null===n||void 0===n?void 0:n[r.email];if(a){var i=a.map((function(e){return e.id===t.id?t:e}));n[r.email]=i.sort(X),localStorage.setItem("notes",JSON.stringify(n))}}({updatedNote:r,user:t}),function(e){var t=e.updatedNote,r=e.queryClient,n=e.queryName;r.setQueryData(n,(function(e){var r;return{pages:null!==(r=null===e||void 0===e?void 0:e.pages.map((function(e){return e.data=e.data.map((function(e){return(null===e||void 0===e?void 0:e.id)===t.id?t:e})),e})))&&void 0!==r?r:[],pageParams:e.pageParams}}))}({updatedNote:r,queryClient:e,queryName:"notes"}),(x||g)&&$()},onAddNote:function(){var r=JSON.parse(localStorage.getItem("notes"))||{},n=(null===r||void 0===r?void 0:r[t.email])||[],a={id:D()(),title:"Untitled Note",description:"",dateCreation:Date.now(),authorName:t.firstName,order:n.length+1};!function(e){var t=e.newNote,r=e.user,n=JSON.parse(localStorage.getItem("notes"))||{},a=(null===n||void 0===n?void 0:n[r.email])||[];a.unshift(t),n[r.email]=a.sort(X),localStorage.setItem("notes",JSON.stringify(n))}({newNote:a,user:t}),_e({newNote:a,queryClient:e,queryName:"notes"}).then((function(){c(a.id),f(!0)}))},onDeleteNote:function(r){if(function(e){var t,r,n=e.noteId,a=e.user,i=JSON.parse(localStorage.getItem("notes"))||{},o=null===i||void 0===i?void 0:i[a.email].sort(X);o=(o=null===(t=o)||void 0===t?void 0:t.filter((function(e){var t=e.id,a=e.order;return r=a,t!==n}))).map((function(e){if(r<e.order){var t=[e.order,r];r=t[0],e.order=t[1]}return e})),i[a.email]=o.sort(X),localStorage.setItem("notes",JSON.stringify(i)),Ae({noteId:n,user:a})}({noteId:r,user:t}),function(e){var t=e.noteId,r=e.queryClient,n=e.queryName;r.setQueryData(n,(function(e){var r,n;return{pages:null!==(r=null===e||void 0===e?void 0:e.pages.map((function(e,r){var a;return e.data=e.data.map((function(e){if((null===e||void 0===e?void 0:e.id)===t&&(n=e.order),e&&n<(null===e||void 0===e?void 0:e.order)){var r=[e.order,n];n=r[0],e.order=r[1]}return e})),e.data=null===(a=e.data)||void 0===a?void 0:a.filter((function(e){return(null===e||void 0===e?void 0:e.id)!==t})),e})))&&void 0!==r?r:[],pageParams:e.pageParams}}))}({noteId:r,queryClient:e,queryName:"notes"}),x||g){var n,a=null!==(n=I.pages.map((function(e){var t;return e.data=null===(t=e.data)||void 0===t?void 0:t.filter((function(e){return(null===e||void 0===e?void 0:e.id)!==r})),e})))&&void 0!==n?n:[];w({pages:a})}},onFilterByDate:function(e){b(e),$({date:e})},onFilterByTitle:function(e){N(e),$({text:e})},getAllUsersSuccess:H,allUsersData:V,dragService:Z,setCurrentNote:k,reOrder:function(r){!function(e){var t=e.note,r=e.currentNote,n=e.user,a=JSON.parse(localStorage.getItem("notes"))||{},i=null===a||void 0===a?void 0:a[n.email];i=i.map((function(e){return e.id===t.id&&(e.order=r.order),e.id===r.id&&(e.order=t.order),e})),a[n.email]=i.sort(X),localStorage.setItem("notes",JSON.stringify(a))}({note:r,currentNote:E,user:t}),function(e){var t=e.updatedNote,r=e.currentNote,n=e.queryClient,a=e.queryName,i=[r.order,t.order];t.order=i[0],r.order=i[1],n.setQueryData(a,(function(e){var n;return{pages:null!==(n=null===e||void 0===e?void 0:e.pages.map((function(e){return e.data=e.data.map((function(e){return e.id===t.id?r:e.id===r.id?t:e})),e})))&&void 0!==n?n:[],pageParams:e.pageParams}}))}({updatedNote:r,currentNote:E,queryClient:e,queryName:"notes"})}}),Object(j.jsx)("div",{ref:z})]})},Fe=function(){return Object(j.jsx)("h1",{children:"About"})},Me=function(){return Object(j.jsx)(Fe,{})},Be=Object(h.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),Ge=function(e){var t=e.notes,r=e.activeNoteId,n=e.setActiveNoteId,a=e.getActiveNote,i=e.getAllUsersSuccess,o=Be();return Object(j.jsx)("div",{className:o.root,children:Object(j.jsxs)(q.a,{container:!0,spacing:3,children:[Object(j.jsx)(q.a,{item:!0,xs:12,children:Object(j.jsx)(J.a,{className:o.paper,children:Object(j.jsx)("h1",{children:"My Shared list of Notes"})})}),Object(j.jsx)(q.a,{item:!0,xs:4,children:Object(j.jsx)(Oe,{notes:t,activeNoteId:r,setActiveNoteId:n,isEditMode:!1,setIsEditMode:null,isSharedMode:!0,getAllUsersSuccess:i})}),Object(j.jsx)(q.a,{item:!0,xs:8,children:Object(j.jsx)(J.a,{className:o.paper,children:a()?Object(j.jsx)("p",{children:a().description}):Object(j.jsx)("div",{children:"No Active Note"})})})]})})},We=function(){var e=Object(P.a)("getNotes",(function(){return pe.sharedNotes({pageParam:0})})),t=e.isSuccess,r=(e.isError,e.data),a=(e.error,Object(n.useState)(null)),i=Object(T.a)(a,2),o=i[0],s=i[1];return t?Object(j.jsx)(Ge,{notes:r.data,activeNoteId:o,setActiveNoteId:s,getActiveNote:function(){var e;return null===r||void 0===r||null===(e=r.data)||void 0===e?void 0:e.find((function(e){return e.id===o}))},getAllUsersSuccess:!1}):""},Ve=function(){var e=Object(c.g)();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Unfortunately, there is no such page."}),Object(j.jsx)(F.a,{variant:"contained",color:"primary",onClick:function(){e.goBack()},children:"Back"})]})},He=function(){return Object(j.jsx)(Ve,{})},Qe=r(75),ze=[{id:"email",label:"Email Address",name:"email",type:"email",required:!0,initialValue:"",forLogin:!0},{id:"firstName",label:"First Name",name:"firstName",type:"text",required:!0,initialValue:""},{id:"lastName",label:"Last Name",name:"lastName",type:"text",required:!0,initialValue:""},{id:"dateOfBirth",label:"Date of birth",name:"dateOfBirth",type:"date",required:!0,initialValue:""},{id:"password",label:"Enter Password",name:"password",type:"password",required:!0,initialValue:"",forLogin:!0},{id:"confirmpassword",label:"Confirm password",name:"confirmpassword",type:"password",required:!0,initialValue:""}],Ze=Object(h.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},formContainer:{width:"fit-content",maxWidth:"30%",padding:"30px"},textField:{},btn:{marginRight:"10px"}}})),$e=function(e){var t=e.formik,r=Ze();return Object(j.jsxs)("div",{className:r.root,children:[Object(j.jsx)("h1",{children:"AuthForm"}),Object(j.jsx)(J.a,{className:r.formContainer,children:Object(j.jsxs)("form",{onSubmit:t.handleSubmit,children:[ze.map((function(e,n){return Object(j.jsx)("div",{children:Object(j.jsx)(xe.a,{id:e.id,required:e.required,label:e.label,variant:"outlined",name:e.name,type:e.type,onChange:t.handleChange,value:t.values[e.id],InputLabelProps:{shrink:!0},fullWidth:!0,className:r.textField,margin:"dense",error:!!t.errors[e.id],helperText:t.errors[e.id]})},n)})),Object(j.jsx)(F.a,{type:"submit",variant:"contained",className:r.btn,children:"Register"}),Object(j.jsx)(u.b,{className:r.navLink,to:"/login",activeClassName:r.active,children:"Log In"})]})})]})},Ke="USERS_REGISTER_REQUEST",Xe="USERS_REGISTER_SUCCESS",Ye="USERS_REGISTER_FAILURE",et="USERS_LOGIN_REQUEST",tt="USERS_LOGIN_SUCCESS",rt="USERS_LOGIN_FAILURE",nt="USERS_LOGOUT",at="USERS_GETALL_REQUEST",it="USERS_GETALL_SUCCESS",ot="USERS_GETALL_FAILURE",st=function(e,t){return function(r){r({type:et,user:{email:e}}),fe.login(e,t).then((function(e){r(function(e){return{type:tt,user:e}}(e))}),(function(e){r(function(e){return{type:rt,error:e}}(e.toString())),r(I(e.toString()))}))}},ct=function(){return fe.logout(),{type:nt}},ut=function(e){return function(t){t(function(e){return{type:Ke,user:e}}(e)),fe.register(e).then((function(e){t(function(e){return{type:Xe,user:e}}()),t(y("Registration successful"))}),(function(e){t(function(e){return{type:Ye,error:e}}(e.toString())),t(I(e.toString()))}))}},lt=function(e){var t={};return e.firstName?e.firstName.length>15&&(t.firstName="Must be 15 characters or less"):t.firstName="Required",e.lastName?e.lastName.length>20&&(t.lastName="Must be 20 characters or less"):t.lastName="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.dateOfBirth||(t.dateOfBirth="Required"),e.password?e.password!==e.confirmpassword&&(t.password="Passwords mismatch"):t.password="Required",e.confirmpassword||(t.confirmpassword="Required"),t},dt=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.registrationReducer.registered}));Object(n.useEffect)((function(){e(ct())}),[]);var r=ze.reduce((function(e,t){return e[t.id]=t.initialValue,e}),{}),a=Object(Qe.a)({initialValues:r,validate:lt,onSubmit:function(t){t&&e(ut(t))}});return t?Object(j.jsx)(c.a,{to:"/login"}):Object(j.jsx)($e,{formik:a})},mt=Object(h.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},formContainer:{width:"fit-content",maxWidth:"30%",padding:"30px"},textField:{},btn:{marginRight:"10px"}}})),ft=function(e){var t=e.formik,r=mt();return Object(j.jsxs)("div",{className:r.root,children:[Object(j.jsx)("h1",{children:"LoginForm"}),Object(j.jsx)(J.a,{className:r.formContainer,children:Object(j.jsxs)("form",{onSubmit:t.handleSubmit,children:[ze.map((function(e,n){return e.forLogin&&Object(j.jsx)("div",{children:Object(j.jsx)(xe.a,{id:e.id,required:e.required,label:e.label,variant:"outlined",name:e.name,type:e.type,onChange:t.handleChange,value:t.values[e.id],InputLabelProps:{shrink:!0},fullWidth:!0,className:r.textField,margin:"dense",error:!!t.errors[e.id],helperText:t.errors[e.id]})},n)})),Object(j.jsx)(F.a,{type:"submit",variant:"contained",className:r.btn,children:"Login"}),Object(j.jsx)(u.b,{className:r.navLink,to:"/register",activeClassName:r.active,children:"Register"})]})})]})},pt=function(e){var t={};return e.email||(t.email="Required"),e.password||(t.password="Required"),t},ht={MyNotesContainer:qe,RegisterContainer:dt,SharedNotesContainer:We,Page404Container:He,About:Me,LoginContainer:function(){var e=Object(s.c)((function(e){return e.authenticationReducer.user})),t=Object(s.b)(),r=Object(c.h)();Object(n.useEffect)((function(){t(ct())}),[]);var a=ze.reduce((function(e,t){return e[t.id]=t.initialValue,e}),{}),i=Object(Qe.a)({initialValues:a,validate:pt,onSubmit:function(e){e&&t(st(e.email,e.password))}});return e?Object(j.jsx)(c.a,{to:r.state||{from:{pathname:"/"}}}):Object(j.jsx)(ft,{formik:i})}};var gt=function(){return Object(j.jsx)(u.a,{basename:"/iTechArt-lab-React",children:Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(L,{children:Object(j.jsxs)(c.d,{children:[b.map((function(e,t){return e.private?Object(j.jsx)(A,{exact:!0,path:e.path,component:ht[e.component]},t):Object(j.jsx)(c.b,{exact:!0,path:e.path,component:ht[e.component]},t)})),Object(j.jsx)(c.b,{path:"*",children:Object(j.jsx)(c.a,{to:"/not-found"})})]})})})})},bt=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,195)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),i(e),o(e)}))},vt=r(56),jt=r(101),Ot=r(102),xt=r(103),Nt=JSON.parse(localStorage.getItem("user")),St=Nt?{loggedIn:!0,user:Nt}:{};var yt=Object(vt.combineReducers)({alertReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{type:"success",message:t.message};case N:return{type:"error",message:t.message};case S:return{};default:return e}},authenticationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case et:return{loggingIn:!0,user:t.user};case tt:return{loggedIn:!0,user:t.user};case rt:case nt:return{};default:return e}},registrationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ke:return{registering:!0};case Xe:return{registered:!0};case Ye:return{};default:return e}},usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case at:return{loading:!0};case it:return{items:t.users};case ot:return{error:t.error};default:return e}}}),It=(Object(xt.createLogger)(),Object(vt.createStore)(yt,Object(jt.composeWithDevTools)(Object(vt.applyMiddleware)(Ot.a)))),wt=[{title:"What is Lorem Ipsum?",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",dateCreation:new Date("Jul 20 2021").toDateString(),id:"1",authorName:"Anna",authorEmail:"some@tut.by",order:1},{title:"Why do we use it?",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",dateCreation:(new Date).toDateString(),id:"2",authorName:"Anna",authorEmail:"some@tut.by",order:2},{title:"Where does it come from?",description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.       The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',dateCreation:(new Date).toDateString(),id:"3",authorName:"Anna",authorEmail:"some@tut.by",order:3},{title:"Where can I get some?",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",dateCreation:(new Date).toDateString(),id:"4",authorName:"Anna",authorEmail:"some@tut.by",order:4}],Ct=JSON.parse(localStorage.getItem("users"))||[],Lt=function(){var e=window.fetch;window.fetch=function(t,r){var n=r.method,a=r.headers,i=r.body&&JSON.parse(r.body);return new Promise((function(o,s){var c=function(){var e=i.email,t=i.password,r=Ct.find((function(r){return r.email===e&&r.password===t}));return r?g({id:r.id,email:r.email,firstName:r.firstName,lastName:r.lastName,token:"fake-jwt-token"}):j("Username or password is incorrect")},u=function(){var e=i;return Ct.find((function(t){return t.email===e.email}))?j("Username  ".concat(e.email," is already taken")):(e.id=Ct.length?Math.max.apply(Math,Object(Te.a)(Ct.map((function(e){return e.id}))))+1:1,Ct.push(e),localStorage.setItem("users",JSON.stringify(Ct)),function(e){var t=JSON.parse(localStorage.getItem("notes"));t?t[e]||(t[e]=wt,localStorage.setItem("notes",JSON.stringify(t))):localStorage.setItem("notes",JSON.stringify(Object(we.a)({},e,wt)))}(e.email),g())},l=function(){var e,t=i,r=JSON.parse(localStorage.getItem("sharednotes"))||[];return r=null===(e=r)||void 0===e?void 0:e.filter((function(e){return e.note_id!==t.note_id||e.user_id!==t.user_id})),t.recipients.forEach((function(e){r.push({user_id:t.user_id,note_id:t.note_id,recipient_id:e})})),localStorage.setItem("sharednotes",JSON.stringify(r)),v()},d=function(){var e=JSON.parse(localStorage.getItem("sharednotes"))||[],t=null===e||void 0===e?void 0:e.filter((function(e){return e.note_id===r.params.note_id&&e.user_id===r.params.user_id}));return h(t.map((function(e){return e.recipient_id})))},m=function(){return O()?h(Ct):b()},f=function(){var e=[],t=JSON.parse(localStorage.getItem("user"));if(t){var n=t.email,a=JSON.parse(localStorage.getItem("notes"));(e=(null===a||void 0===a?void 0:a[n].map((function(e,t){return e.order=e.order?e.order:t+1,e})))||[]).sort(X)}var i=r.params.page+1>=e.length?null:r.params.page+1;return h({data:[e[r.params.page]],nextId:i})},p=function(){var e=[],t=JSON.parse(localStorage.getItem("user"));if(t){var n=JSON.parse(localStorage.getItem("sharednotes")||[]);e=(null===n||void 0===n?void 0:n.filter((function(e){return e.recipient_id===t.email})))||[]}var a=JSON.parse(localStorage.getItem("notes")),i=e.map((function(e){return a[e.user_id].filter((function(t){return t.id===e.note_id}))})).flat(1),o=r.params.page+1>=e.length?null:r.params.page+1;return h({data:i,nextId:o})},h=function(e){o({ok:!0,text:function(){return JSON.stringify(e)}})},g=function(e){o({ok:!0,text:function(){return Promise.resolve(JSON.stringify(e))}})},b=function(){o({status:401,text:function(){return Promise.resolve(JSON.stringify({message:"Unauthorized"}))}})},v=function(){o({ok:!0,text:function(){return Promise.resolve(JSON.stringify({message:"Note was shared"}))}})},j=function(e){o({status:400,text:function(){return Promise.resolve(JSON.stringify({message:e}))}})},O=function(){return"Bearer fake-jwt-token"===a.Authorization};setTimeout((function(){switch(!0){case t.endsWith("/users/authenticate")&&"POST"===n:return c();case t.endsWith("/users/register")&&"POST"===n:return u();case t.endsWith("/users")&&"GET"===n:return m();case t.endsWith("/notes")&&"GET"===n:return f();case t.endsWith("/sharednotes/set")&&"POST"===n:return l();case t.endsWith("/sharednotes/get")&&"GET"===n:return p();case t.endsWith("/sharednotes/getrecipients")&&"GET"===n:return d();default:return e(t,r).then((function(e){return o(e)})).catch((function(e){return s(e)}))}}),500)}))}};Lt(),o.a.render(Object(j.jsx)(s.a,{store:It,children:Object(j.jsx)(gt,{})}),document.getElementById("root")),bt()}},[[135,1,2]]]);
//# sourceMappingURL=main.ced9f487.chunk.js.map