(this.webpackJsonpday_08=this.webpackJsonpday_08||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),o=(n(12),n(4)),i=n(5),h=n(7),u=n(6),l=(n(13),n(14),n(15),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2"),alt:""}),Object(l.jsx)("h1",{children:e.monster.name}),Object(l.jsx)("h2",{children:e.monster.email})]})},j=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.mon.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})},m=(n(17),function(e){var t=e.placeholder,n=e.EventHandler;return Object(l.jsx)("input",{className:"searchBox",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monster:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monster:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monster,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"h1",children:"Monster"}),Object(l.jsx)(m,{placeholder:"search hear",EventHandler:this.handleChange}),Object(l.jsx)(j,{mon:c})]})}}]),n}(r.a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.596fe352.chunk.js.map