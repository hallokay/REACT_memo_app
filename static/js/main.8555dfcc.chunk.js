(this.webpackJsonpnotepad=this.webpackJsonpnotepad||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),r=n.n(s),o=(n(14),n(8)),i=n(2),d=(n(15),n(5)),l=n(0),j=function(e){var t=e.id,n=e.text,c=e.date,a=e.handleDelNote;return Object(l.jsxs)("div",{className:"note",children:[Object(l.jsxs)("p",{children:[" ",n," "]}),Object(l.jsxs)("div",{className:"note_footer",children:[Object(l.jsx)("small",{children:c}),Object(l.jsx)(d.a,{className:"del_icon",size:"1.3rem",onClick:function(){return a(t)}})]})]})},u=function(e){var t=e.handleAddNote,n=Object(c.useState)(""),a=Object(i.a)(n,2),s=a[0],r=a[1];return Object(l.jsxs)("div",{className:"note new",children:[Object(l.jsx)("textarea",{name:"",id:"",cols:"10",rows:"8",placeholder:"\uba54\ubaa8\ub97c \uc785\ub825\ud558\uc138\uc694",value:s,onChange:function(e){var t=e.target.value;500-t.length>=0&&r(t)}}),Object(l.jsxs)("div",{className:"note_footer",children:[Object(l.jsxs)("small",{children:[500-s.length," Remaining"]}),Object(l.jsx)("button",{className:"save",onClick:function(){s.trim().length>0&&(t(s),r(""))},children:"Save"})]})]})},b=function(e){var t=e.notes,n=e.handleAddNote,c=e.handleDelNote;return Object(l.jsxs)("div",{className:"notes_list",children:[Object(l.jsx)(u,{handleAddNote:n}),t.map((function(e){return Object(l.jsx)(j,{id:e.id,text:e.text,date:e.date,handleDelNote:c},e.id)}))]})},h=n(9),O=function(e){var t=e.handelSearch;return Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)(d.b,{className:"search_icon",size:"1.3rem"}),Object(l.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"search"})]})},x=function(e){var t=e.darkMode;return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{children:"Notes"}),Object(l.jsx)("button",{className:"save",onClick:function(){t((function(e){return!e}))},children:"Toggle Mode"})]})};var f=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),d=r[0],j=r[1],u=Object(c.useState)(!1),f=Object(i.a)(u,2),v=f[0],m=f[1];return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("note_data"));e&&a(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("note_data",JSON.stringify(n))}),[n]),Object(l.jsxs)("div",{className:"App ".concat(v?"dark_mode":""),children:[Object(l.jsx)(x,{darkMode:m}),Object(l.jsx)(O,{handelSearch:j}),Object(l.jsx)(b,{notes:n.filter((function(e){return e.text.toLowerCase().includes(d)})),handleAddNote:function(e){var t=new Date,c={id:Object(h.a)(),text:e,date:t.toLocaleDateString()},s=[].concat(Object(o.a)(n),[c]);a(s)},handleDelNote:function(e){var t=n.filter((function(t){return t.id!==e}));a(t)}})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8555dfcc.chunk.js.map