(this.webpackJsonptodolistreact=this.webpackJsonptodolistreact||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),i=n(5),o=n.n(i),r=n(7),l=n(6),a=function(t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("li",{children:[t.item,Object(c.jsx)("button",{className:"deletebutton",onClick:function(){t.onselect(t.id)},children:"x"})]})})},j=function(){var t=Object(s.useState)(""),e=Object(l.a)(t,2),n=e[0],i=e[1],o=Object(s.useState)([]),j=Object(l.a)(o,2),u=j[0],d=j[1],b=function(t){console.log("Deleted"),d((function(e){return e.filter((function(e,n){return n!==t}))}))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"main_class",children:Object(c.jsxs)("div",{className:"child_class",children:[Object(c.jsx)("h1",{children:"ToDo List"}),Object(c.jsx)("input",{type:"text",placeholder:"Add Items",value:n,onChange:function(t){i(t.target.value)}}),Object(c.jsx)("button",{onClick:function(){d((function(t){return[].concat(Object(r.a)(t),[n])})),i("")},children:"+"}),Object(c.jsx)("ol",{children:u.map((function(t,e){return Object(c.jsx)(a,{item:t,id:e,onselect:b},e)}))})]})})})};o.a.render(Object(c.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.acb75dc1.chunk.js.map