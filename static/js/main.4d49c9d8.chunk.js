(this.webpackJsonpmenu=this.webpackJsonpmenu||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(6),i=c.n(r),a=(c(19),c(20),c(3)),s=c(4),l="ADD_SERVICE",j="REMOVE_SERVICE",u="CHANGE_SERVICE_FIELD",d="EDIT_SERVICE",o="CLEAR_SERVICE_FIELD",b="CANCEL_EDIT";function m(){return{type:o}}function O(){var e=Object(a.c)((function(e){return e.serviceAdd})),t=Object(a.c)((function(e){return e.serviceList})),c=Object(a.b)(),r=function(e){var t=e.target,n=t.name,r=t.value;c(function(e,t){return{type:u,payload:{name:e,value:t}}}(n,r))};return Object(n.jsxs)("form",{onReset:function(e){e.preventDefault(),c(m())},children:[Object(n.jsxs)("div",{className:"input_row",children:[Object(n.jsx)("label",{htmlFor:"name",children:"Service:"}),Object(n.jsx)("input",{name:"name",onChange:r,value:e.name,placeholder:"Service name"})]}),Object(n.jsxs)("div",{className:"input_row",children:[Object(n.jsx)("label",{htmlFor:"price",children:"Price:"}),Object(n.jsx)("input",{name:"price",type:"number",onChange:r,value:e.price,placeholder:"Service price"})]}),Object(n.jsxs)("div",{className:"btn_row",children:[Object(n.jsx)("button",{type:"submit",className:"form_btn".concat(e.name.trim()&&e.price.trim()?" ":" inactive"),onClick:function(t){t.preventDefault(),c(function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object(s.a)();return{type:l,payload:{name:e,price:t,id:c}}}(e.name,e.price)),c(m())},children:"Save"}),Object(n.jsx)("button",{type:"reset",className:"form_btn".concat(e.name.trim()&&e.price.trim()?" ":" inactive"),children:"Clear"}),Object(n.jsx)("button",{type:"button",onClick:function(e){c({type:b}),c(m())},className:"form_btn".concat(t.selected?"":" hidden"),children:"Cancel"})]})]})}function p(){var e=Object(a.c)((function(e){return e.serviceList})),t=Object(a.b)(),c=function(c){t(function(e){return{type:j,payload:{id:e}}}(c)),c===e.selected&&t(m())},r=function(c){var n=e.services.find((function(e){return e.id===c}));t(function(e,t,c){return{type:d,payload:{name:e,price:t,id:c}}}(n.name,""+n.price,c))};return Object(n.jsxs)("div",{className:"list_container",children:[Object(n.jsx)("h3",{children:"Service List"}),0===e.services.length?"\u041d\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432":e.services.map((function(e){return Object(n.jsxs)("div",{className:"servise__list__row",children:[Object(n.jsx)("span",{className:"row_name",children:e.name}),Object(n.jsx)("span",{className:"row_price",children:e.price}),Object(n.jsxs)("div",{className:"btn_box",children:[Object(n.jsx)("button",{onClick:function(){return r(e.id)},children:Object(n.jsx)("span",{className:"material-icons",children:"edit"})}),Object(n.jsx)("button",{onClick:function(){return c(e.id)},children:Object(n.jsx)("span",{className:"material-icons",children:"delete"})})]})]},e.id)}))]})}var v=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"task-title",children:"Sevice List"}),Object(n.jsx)(O,{}),Object(n.jsx)(p,{})]})},h=c(5),f=c(7),x=c(2),_={name:"",price:""};var E=c(13),y={selected:null,services:[{id:Object(s.a)(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0441\u0442\u0435\u043a\u043b\u0430",price:1e4},{id:Object(s.a)(),name:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u041e\u0421",price:2e3}]};var C=Object(h.b)({serviceAdd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case u:var r=n.name,i=n.value;return Object(x.a)(Object(x.a)({},e),{},Object(f.a)({},r,i));case o:return Object(x.a)({},_);case d:return Object(x.a)(Object(x.a)({},e),{},{name:n.name,price:n.price});default:return e}},serviceList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case l:var r=n.name,i=n.price;return e.selected?Object(x.a)(Object(x.a)({},e),{},{selected:null,services:e.services.map((function(t){return t.id===e.selected?Object(x.a)(Object(x.a)({},t),{},{name:r,price:+i}):Object(x.a)({},t)}))}):Object(x.a)(Object(x.a)({},e),{},{services:[].concat(Object(E.a)(e.services),[{id:Object(s.a)(),name:r,price:+i}])});case j:return Object(x.a)(Object(x.a)({},e),{},{selected:n.id===e.selected?null:e.selected,services:e.services.filter((function(e){return e.id!==n.id}))});case d:return Object(x.a)(Object(x.a)({},e),{},{selected:n.id});case b:return Object(x.a)(Object(x.a)({},e),{},{selected:null});default:return e}}}),N=Object(h.c)(C);i.a.render(Object(n.jsx)(a.a,{store:N,children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4d49c9d8.chunk.js.map