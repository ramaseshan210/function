(this.webpackJsonpfunction=this.webpackJsonpfunction||[]).push([[0],{180:function(e,t,a){},181:function(e,t,a){},185:function(e,t,a){},525:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(0),l=a.n(n),s=a(14),r=a.n(s),b=(a(180),a(79)),o=a(80),i=a(85),j=a(84),d=(a(181),a(8)),h=(a(87),a(542)),O=function(e){Object(i.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(b.a)(this,a);for(var c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={colour:"",label:"",border:0,check:!1,load:!1},e.handle=function(t){console.log(t.target.value),e.setState(Object(d.a)({},t.target.name,t.target.value))},e.getValue=function(t){!1===e.state.check?e.setState(Object(d.a)({},t.target.name,!0)):e.setState(Object(d.a)({},t.target.name,!1))},e.loadValue=function(t){!1===e.state.check?!1===e.state.load?(e.setState(Object(d.a)({},t.target.name,!0)),e.condition=1):(e.setState(Object(d.a)({},t.target.name,!1)),e.condition=0):!0===e.state.check&&(!0===e.state.load?(e.setState(Object(d.a)({},t.target.name,!1)),e.condition=0):!1===e.state.load&&(e.setState(Object(d.a)({},t.target.name,!0)),e.condition=1))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"lbn",children:[Object(c.jsx)("label",{children:"input"}),Object(c.jsx)("input",{type:"text",name:"colour",value:this.state.colour,onChange:this.handle})]}),Object(c.jsxs)("div",{className:"lbn",children:[Object(c.jsx)("label",{children:"label"}),Object(c.jsx)("input",{type:"text",name:"label",value:this.state.label,onChange:this.handle})]}),Object(c.jsxs)("div",{className:"lbn",children:[Object(c.jsx)("label",{children:"border radius"}),Object(c.jsx)("input",{type:"number",name:"border",value:this.state.border,onChange:this.handle})]}),Object(c.jsx)("div",{className:"lbn",children:Object(c.jsx)(h.a,{color:"primary",size:"large",checked:this.state.check,name:"check",onChange:this.getValue})}),Object(c.jsx)("div",{className:"lbn",children:Object(c.jsx)(h.a,{color:"primary",size:"large",checked:this.state.load,name:"load",onChange:this.loadValue})})]}),Object(c.jsx)("div",{class:"side",children:Object(c.jsx)("button",{disabled:1===this.condition?this.state.load:this.state.check,style:{borderRadius:"".concat(this.state.border,"px"),backgroundColor:this.state.colour},children:this.state.label})})]})}}]),a}(n.Component),u=(a(185),a(58));var x=function(){return Object(c.jsxs)("header",{children:[Object(c.jsx)(u.b,{to:"/",children:"Home"}),Object(c.jsx)(u.b,{to:"/ram",children:"About"}),Object(c.jsx)(u.b,{to:"/use",children:"Use"})]})},m=a(7),g=a(38);var v=a(541),p=a(52);a(187),a(190);var f=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],l=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(p.a,{options:[{value:"red",label:"red"},{value:"yellow",label:"yellow"},{value:"green",label:"green"}],onChange:function(e){console.log(e.value),l(e.value),console.log("runnning")}}),a,Object(c.jsx)(v.a,{children:"hello"}),Object(c.jsx)("button",{type:"text",children:"hello "})]})},y=a(169);var k=a(109),N=a.n(k),C=[{value:"primary",label:"primary"},{value:"secondary",label:"secondary"},{value:"default",label:"default"}];var S=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)({label:"",border:0,check:!1,load:!1}),r=Object(g.a)(s,2),b=r[0],o=r[1],i=Object(n.useState)(0),j=Object(g.a)(i,2),O=j[0],u=j[1],x=function(e){console.log(e.target.value),o(Object(m.a)(Object(m.a)({},b),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(y.a)(),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"body",children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"lbn",children:[Object(c.jsx)("label",{children:"input"}),Object(c.jsx)(p.a,{className:"select",type:"text",name:"colour",options:C,onChange:function(e){var t,a;l((t=e.value,a=Object(g.a)(t,1),e.name=a[0],t),console.log(e.label)),console.log(e.value)}})]}),Object(c.jsxs)("div",{className:"lbn",children:[Object(c.jsx)("label",{children:"label"}),Object(c.jsx)("input",{type:"text",name:"label",value:b.label,onChange:x})]}),Object(c.jsxs)("div",{className:"lbn",children:[Object(c.jsx)("label",{children:"border radius"}),Object(c.jsx)("input",{type:"number",name:"border",value:b.border,onChange:x})]}),Object(c.jsxs)("div",{className:"lbn",children:[Object(c.jsx)("label",{className:"labelClass",children:"disabled"}),Object(c.jsx)(h.a,{className:"switchMargin",color:"primary",size:"small",checked:b.check,name:"check",onChange:function(e){!1===b.check?o(Object(m.a)(Object(m.a)({},b),{},Object(d.a)({},e.target.name,!0))):o(Object(m.a)(Object(m.a)({},b),{},Object(d.a)({},e.target.name,!1)))}})]}),Object(c.jsxs)("div",{className:"lbn",children:[Object(c.jsx)("label",{className:"labelClass",children:"loading"}),Object(c.jsx)("span",{}),Object(c.jsx)(h.a,{className:"switchMargin",color:"primary",size:"small",checked:b.load,name:"load",onChange:function(e){!1===b.check?!1===b.load?(o(Object(m.a)(Object(m.a)({},b),{},Object(d.a)({},e.target.name,!0))),u(1),console.log(O)):(o(Object(m.a)(Object(m.a)({},b),{},Object(d.a)({},e.target.name,!1))),u(0),console.log(O)):!0===b.check&&(!0===b.load?(o(Object(m.a)(Object(m.a)({},b),{},Object(d.a)({},e.target.name,!1))),u(0)):!1===b.load&&(o(Object(m.a)(Object(m.a)({},b),{},Object(d.a)({},e.target.name,!0))),u(1)))}})]})]}),Object(c.jsx)("div",{className:"side",children:Object(c.jsxs)(v.a,{type:"text",variant:"contained",color:a,disabled:b.check,style:{borderRadius:"".concat(b.border,"px")},children:[" ",!0===b.load&&!1===b.check&&Object(c.jsx)(N.a,{})," ",!1===b.check&&!1===b.load?b.label:!b.label]})})]})})},w=a(11),z=function(e){Object(i.a)(a,e);var t=Object(j.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(x,{}),Object(c.jsxs)(w.c,{children:[Object(c.jsx)(w.a,{exact:!0,path:"/",component:O}),Object(c.jsx)(w.a,{exact:!0,path:"/ram",component:f}),Object(c.jsx)(w.a,{exact:!0,path:"/use",component:S})]})]})})}}]),a}(n.Component),F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,543)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),l(e),s(e)}))};r.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(z,{})}),document.getElementById("root")),F()},87:function(e,t,a){}},[[525,1,2]]]);
//# sourceMappingURL=main.38eea87b.chunk.js.map