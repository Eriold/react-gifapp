(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),u=a.n(c),i=a(1),l=a(8),o=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(i.a)(a,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t((function(e){return[u].concat(Object(l.a)(e))})),o("")}},r.a.createElement("input",{type:"text",value:u,onChange:function(e){o(e.target.value)}}))},m=a(4),s=a.n(m),p=a(7),d=function(){var e=Object(p.a)(s.a.mark((function e(t){var a,n,r,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0oAvb77jb8jk1M3qMdCpX7VkQhZIY3HM",a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=").concat("0oAvb77jb8jk1M3qMdCpX7VkQhZIY3HM"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,c=r.data,u=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){e.id;var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__bounce"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},g=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,u=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),u&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Cargando..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}))))},v=function(){var e=Object(n.useState)(["One Punch"]),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};a(15);u.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0fd3cdb6.chunk.js.map