(this["webpackJsonpitechart-lab-react"]=this["webpackJsonpitechart-lab-react"]||[]).push([[0],{29:function(e,t,o){},30:function(e,t,o){},36:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o(8),a=o.n(i),r=(o(29),o(30),o(15)),s=o(56),c=o(59),d=o(62),l=o(60),m=o(63),u=o(3),h=Object(s.a)({note:{marginBottom:12,textAlign:"right"},text:{textAlign:"left"},meta:{fontSize:10,textAlign:"right"},active:{backgroundColor:"aliceblue"}});var p=function(e){var t=e.notes,o=e.activeNoteId,n=e.setActiveNoteId,i=h();return Object(u.jsx)("div",{className:"notes-list",children:t.map((function(e){return Object(u.jsx)(c.a,{className:(i.note,e.id===o?i.active:""),onClick:function(){return n(e.id)},children:Object(u.jsx)(d.a,{children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",className:i.text,children:e.title}),Object(u.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",className:i.text,children:e.description&&e.description.substr(0,100)+"..."}),Object(u.jsxs)(m.a,{className:i.meta,color:"textSecondary",gutterBottom:!0,children:["Date of creation"," ",new Date(e.dateCreation).toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit"})]})]})})},e.id)}))})},b=function(e){var t=e.activeNote;return t?Object(u.jsx)("p",{children:t.description}):Object(u.jsx)("div",{className:"no-active-note",style:{flex:"3"},children:"No Active Note"})},f=[{title:"What is Lorem Ipsum?",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",dateCreation:(new Date).toDateString(),id:1},{title:"Why do we use it?",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",dateCreation:(new Date).toDateString(),id:2},{title:"Where does it come from?",description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.       The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',dateCreation:(new Date).toDateString(),id:3},{title:"Where can I get some?",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",dateCreation:(new Date).toDateString(),id:4}],g=o(37),j=o(61),y=Object(s.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var v=function(){var e=y(),t=Object(n.useState)(f),o=Object(r.a)(t,1)[0],i=Object(n.useState)(!1),a=Object(r.a)(i,2),s=a[0],c=a[1];return Object(u.jsx)("div",{className:e.root,children:Object(u.jsxs)(j.a,{container:!0,spacing:3,children:[Object(u.jsx)(j.a,{item:!0,xs:12,children:Object(u.jsx)(g.a,{className:e.paper,children:Object(u.jsx)("h1",{children:"My list of Notes"})})}),Object(u.jsx)(j.a,{item:!0,xs:4,children:Object(u.jsx)(p,{notes:o,activeNoteId:s,setActiveNoteId:c})}),Object(u.jsx)(j.a,{item:!0,xs:8,children:Object(u.jsx)(g.a,{className:e.paper,children:Object(u.jsx)(b,{activeNote:o.find((function(e){return e.id===s}))})})})]})})};var x=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(v,{})})},w=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,65)).then((function(t){var o=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;o(e),n(e),i(e),a(e),r(e)}))};a.a.render(Object(u.jsx)(x,{}),document.getElementById("root")),w()}},[[36,1,2]]]);
//# sourceMappingURL=main.bd2d430d.chunk.js.map