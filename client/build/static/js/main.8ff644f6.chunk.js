(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{67:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c,a,r,i,s,o=n(0),l=n.n(o),d=n(36),j=n.n(d),u=(n(67),n(8)),b=n(12),O=n(4),h=n(84),p=n(57),m=n(1),f=function(){return Object(m.jsx)("div",{className:"container"})},x=n(7),g=n(58),v=n(14),y=n(6),w=n(11),k=n(10),N=n(54),_=n(82),C=n(16),S=n(85),T=Object(S.a)(c||(c=Object(C.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),E=Object(S.a)(a||(a=Object(C.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),A=(Object(S.a)(r||(r=Object(C.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(S.a)(i||(i=Object(C.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"]))),Object(S.a)(s||(s=Object(C.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))));function $(e,t,n){return new Promise((function(c,a){var r,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,i=r.transaction(e,"readwrite"),s=i.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var l=s.getAll();l.onsuccess=function(){c(l.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){r.close()}}}))}var D="UPDATE_PRODUCTS",I="ADD_TO_CART",P="ADD_MULTIPLE_TO_CART",R="REMOVE_FROM_CART",Q="CLEAR_CART",F="UPDATE_CART_QUANTITY",U="TOGGLE_CART",L="UPDATE_CATEGORIES",W="UPDATE_CURRENT_CATEGORY",q=function(e){var t=e.item,n=Object(v.b)();return Object(m.jsxs)("div",{className:"flex-row",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[t.name,", $",t.price]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Qty:"}),Object(m.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var c=e.target.value;"0"===c?(n({type:R,_id:t._id}),$("cart","delete",Object(u.a)({},t))):(n({type:F,_id:t._id,purchaseQuantity:parseInt(c)}),$("cart","put",Object(u.a)(Object(u.a)({},t),{},{purchaseQuantity:parseInt(c)})))}}),Object(m.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:R,_id:e._id}),$("cart","delete",Object(u.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},B=n(18),G=n(19),M=n(44),Y=n.n(M),H=new(function(){function e(){Object(B.a)(this,e)}return Object(G.a)(e,[{key:"getProfile",value:function(){return Y()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Y()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),J=(n(76),Object(N.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),z=function(){var e=Object(v.c)((function(e){return e})),t=Object(v.b)(),n=Object(_.a)(E),c=Object(x.a)(n,2),a=c[0],r=c[1].data;function i(){t({type:U})}return Object(o.useEffect)((function(){r&&J.then((function(e){e.redirectToCheckout({sessionId:r.checkout.session})}))}),[r]),Object(o.useEffect)((function(){function n(){return(n=Object(k.a)(Object(y.a)().mark((function e(){var n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$("cart","get");case 2:n=e.sent,t({type:P,products:Object(w.a)(n)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.cart.length||function(){n.apply(this,arguments)}()}),[e.cart.length,t]),e.cartOpen?Object(m.jsxs)("div",{className:"cart",children:[Object(m.jsx)("div",{className:"close",onClick:i,children:"[close]"}),Object(m.jsx)("h2",{children:"Shopping Cart"}),e.cart.length?Object(m.jsxs)("div",{children:[e.cart.map((function(e){return Object(m.jsx)(q,{item:e},e._id)})),Object(m.jsxs)("div",{className:"flex-row space-between",children:[Object(m.jsxs)("strong",{children:["Total: $",function(){var t=0;return e.cart.forEach((function(e){t+=e.price*e.purchaseQuantity})),t.toFixed(2)}()]}),H.loggedIn()?Object(m.jsx)("button",{onClick:function(){var t=[];e.cart.forEach((function(e){for(var n=0;n<e.purchaseQuantity;n++)t.push(e._id)})),a({variables:{products:t}})},children:"Checkout"}):Object(m.jsx)("span",{children:"(log in to check out)"})]})]}):Object(m.jsxs)("h3",{children:[Object(m.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(m.jsx)("div",{className:"cart-closed",onClick:i,children:Object(m.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},V=n.p+"static/media/spinner.7e729fec.gif";var K=function(){var e=Object(v.c)((function(e){return e})),t=Object(v.b)(),n=Object(O.n)().id,c=Object(o.useState)({}),a=Object(x.a)(c,2),r=a[0],i=a[1],s=Object(g.b)(T),l=s.loading,d=s.data,j=e.products,h=e.cart;return Object(o.useEffect)((function(){j.length?i(j.find((function(e){return e._id===n}))):d?(t({type:D,products:d.products}),d.products.forEach((function(e){$("products","put",e)}))):l||$("products","get").then((function(e){t({type:D,products:e})}))}),[j,d,l,t,n]),Object(m.jsxs)(m.Fragment,{children:[r&&h?Object(m.jsxs)("div",{className:"container my-1",children:[Object(m.jsx)(b.b,{to:"/",children:"\u2190 Back to Products"}),Object(m.jsx)("h2",{children:r.name}),Object(m.jsx)("p",{children:r.description}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Price:"}),"$",r.price," ",Object(m.jsx)("button",{onClick:function(){var e=h.find((function(e){return e._id===n}));e?(t({type:F,_id:n,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),$("cart","put",Object(u.a)(Object(u.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(t({type:I,product:Object(u.a)(Object(u.a)({},r),{},{purchaseQuantity:1})}),$("cart","put",Object(u.a)(Object(u.a)({},r),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(m.jsx)("button",{disabled:!h.find((function(e){return e._id===r._id})),onClick:function(){t({type:R,_id:r._id}),$("cart","delete",Object(u.a)({},r))},children:"Remove from Cart"})]}),Object(m.jsx)("img",{src:"/images/".concat(r.image),alt:r.name})]}):null,l?Object(m.jsx)("img",{src:V,alt:"loading"}):null,Object(m.jsx)(z,{})]})};var X,Z,ee,te=function(e){var t=e.children;return Object(m.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},ne=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(te,{children:[Object(m.jsx)("h1",{children:"404 Page Not Found"}),Object(m.jsx)("h1",{children:Object(m.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},ce=n(9),ae=n(83),re=Object(S.a)(X||(X=Object(C.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ie=Object(S.a)(Z||(Z=Object(C.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),se=Object(S.a)(ee||(ee=Object(C.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var oe=function(e){var t=Object(o.useState)({email:"",password:""}),n=Object(x.a)(t,2),c=n[0],a=n[1],r=Object(ae.a)(re),i=Object(x.a)(r,2),s=i[0],l=i[1].error,d=function(){var e=Object(k.a)(Object(y.a)().mark((function e(t){var n,a;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,s({variables:{email:c.email,password:c.password}});case 4:n=e.sent,a=n.data.login.token,H.login(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,r=t.value;a(Object(u.a)(Object(u.a)({},c),{},Object(ce.a)({},n,r)))};return Object(m.jsxs)("div",{className:"container my-1",children:[Object(m.jsx)(b.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(m.jsx)("h2",{children:"Login"}),Object(m.jsxs)("form",{onSubmit:d,children:[Object(m.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(m.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(m.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(m.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(m.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),l?Object(m.jsx)("div",{children:Object(m.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(m.jsx)("div",{className:"flex-row flex-end",children:Object(m.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var le=function(e){var t=Object(o.useState)({email:"",password:""}),n=Object(x.a)(t,2),c=n[0],a=n[1],r=Object(ae.a)(se),i=Object(x.a)(r,1)[0],s=function(){var e=Object(k.a)(Object(y.a)().mark((function e(t){var n,a;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:n=e.sent,a=n.data.addUser.token,H.login(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){var t=e.target,n=t.name,r=t.value;a(Object(u.a)(Object(u.a)({},c),{},Object(ce.a)({},n,r)))};return Object(m.jsxs)("div",{className:"container my-1",children:[Object(m.jsx)(b.b,{to:"/login",children:"\u2190 Go to Login"}),Object(m.jsx)("h2",{children:"Signup"}),Object(m.jsxs)("form",{onSubmit:s,children:[Object(m.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(m.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(m.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:l})]}),Object(m.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(m.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(m.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:l})]}),Object(m.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:l})]}),Object(m.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(m.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(m.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:l})]}),Object(m.jsx)("div",{className:"flex-row flex-end",children:Object(m.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var de=function(){return Object(m.jsxs)("header",{className:"flex-row px-1",children:[Object(m.jsx)("h1",{children:Object(m.jsxs)(b.b,{to:"/",children:[Object(m.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udecd\ufe0f"}),"-Shop-Shop"]})}),Object(m.jsx)("nav",{children:H.loggedIn()?Object(m.jsxs)("ul",{className:"flex-row",children:[Object(m.jsx)("li",{className:"mx-1",children:Object(m.jsx)(b.b,{to:"/orderHistory",children:"Order History"})}),Object(m.jsx)("li",{className:"mx-1",children:Object(m.jsx)("a",{href:"/",onClick:function(){return H.logout()},children:"Logout"})})]}):Object(m.jsxs)("ul",{className:"flex-row",children:[Object(m.jsx)("li",{className:"mx-1",children:Object(m.jsx)(b.b,{to:"/signup",children:"Signup"})}),Object(m.jsx)("li",{className:"mx-1",children:Object(m.jsx)(b.b,{to:"/login",children:"Login"})})]})})]})};var je=function(){var e=Object(ae.a)(ie),t=Object(x.a)(e,1)[0];return Object(o.useEffect)((function(){function e(){return(e=Object(k.a)(Object(y.a)().mark((function e(){var n,c,a,r;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){$("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(m.jsx)("div",{children:Object(m.jsxs)(te,{children:[Object(m.jsx)("h1",{children:"Success!"}),Object(m.jsx)("h2",{children:"Thank you for your purchase!"}),Object(m.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var ue=function(){var e,t=Object(g.b)(A).data;return t&&(e=t.user),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"container my-1",children:[Object(m.jsx)(b.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(m.jsxs)("div",{className:"my-2",children:[Object(m.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(m.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,a=e.name,r=e.price;return Object(m.jsxs)("div",{className:"card px-1 py-1",children:[Object(m.jsxs)(b.b,{to:"/products/".concat(n),children:[Object(m.jsx)("img",{alt:a,src:"/images/".concat(c)}),Object(m.jsx)("p",{children:a})]}),Object(m.jsx)("div",{children:Object(m.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})},be={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""};function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(u.a)(Object(u.a)({},e),{},{products:Object(w.a)(t.products)});case I:return Object(u.a)(Object(u.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(w.a)(e.cart),[t.product])});case P:return Object(u.a)(Object(u.a)({},e),{},{cart:[].concat(Object(w.a)(e.cart),Object(w.a)(t.products))});case F:return Object(u.a)(Object(u.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case R:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(u.a)(Object(u.a)({},e),{},{cartOpen:n.length>0,cart:n});case Q:return Object(u.a)(Object(u.a)({},e),{},{cartOpen:!1,cart:[]});case U:return Object(u.a)(Object(u.a)({},e),{},{cartOpen:!e.cartOpen});case L:return Object(u.a)(Object(u.a)({},e),{},{categories:Object(w.a)(t.categories)});case W:return Object(u.a)(Object(u.a)({},e),{},{currentCategory:t.currentCategory});default:return e}}var he=n(56),pe=Object(he.a)(Oe);Object(h.a)({uri:"/graphql"}),Object(p.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(u.a)(Object(u.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}}));var me=function(){return Object(m.jsx)(v.a,{store:pe,children:Object(m.jsx)(b.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(de,{}),Object(m.jsxs)(O.c,{children:[Object(m.jsx)(O.a,{path:"/",element:Object(m.jsx)(f,{})}),Object(m.jsx)(O.a,{path:"/login",element:Object(m.jsx)(oe,{})}),Object(m.jsx)(O.a,{path:"/signup",element:Object(m.jsx)(le,{})}),Object(m.jsx)(O.a,{path:"/success",element:Object(m.jsx)(je,{})}),Object(m.jsx)(O.a,{path:"/orderHistory",element:Object(m.jsx)(ue,{})}),Object(m.jsx)(O.a,{path:"/products/:id",element:Object(m.jsx)(K,{})}),Object(m.jsx)(O.a,{path:"*",element:Object(m.jsx)(ne,{})})]})]})})})},fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function xe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}j.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(me,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):xe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):xe(t,e)}))}}()}},[[78,1,2]]]);
//# sourceMappingURL=main.8ff644f6.chunk.js.map