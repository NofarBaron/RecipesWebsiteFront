(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[860],{8860:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>h});var n=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"container"},[e.recipe?n("div",[n("div",{staticClass:"recipe-header mt-3 mb-4"},[n("h1",[e._v(e._s(e.recipe.title))]),n("img",{staticClass:"center",attrs:{src:e.recipe.image}}),e.$root.store.username?n("span",[this.favorite?n("span",[n("b-button",{attrs:{variant:"outline-success",disabled:!1},on:{click:e.addToFavorite}},[n("b-icon-star")],1)],1):n("span",[n("b-button",{attrs:{variant:"outline-dark"},on:{click:e.addToFavorite}},[n("b-icon-star")],1)],1)]):e._e()]),n("div",{staticClass:"recipe-body"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapped"},[n("div",{staticClass:"mb-3"},[n("div",[e._v("Ready in: "+e._s(e.recipe.readyInMinutes)+" minutes")]),n("div",[e._v("Likes: "+e._s(e.recipe.aggregateLikes)+" likes")]),n("div",[e._v("Servings: "+e._s(e.recipe.servings))]),e.recipe.vegan?n("div",[n("b-avatar",{staticStyle:{width:"2.5em",height:"3.3em"},attrs:{variant:"tranparent",src:t(3238)}})],1):e._e(),e.recipe.vegetarian?n("div",[n("b-avatar",{staticStyle:{width:"4.5em",height:"3em"},attrs:{variant:"tranparent",src:t(7221)}})],1):e._e(),e.recipe.glutenFree?n("div",[n("b-avatar",{staticStyle:{width:"3.8em",height:"3em"},attrs:{variant:"tranparent",src:t(785)}})],1):e._e()]),e._v(" Ingredients: "),n("ul",e._l(e.recipe.ingredients,(function(r,t){return n("li",{key:t+"_"+r.id},[e._v(" "+e._s(r.original)+" ")])})),0)]),n("div",{staticClass:"wrapped"},[e._v(" Instructions: "),n("ol",e._l(e.recipe._instructions,(function(r){return n("li",{key:r.number},[e._v(" "+e._s(r.step)+" ")])})),0)])])])]):e._e()])},a=[],i=t(124),s=(t(9070),t(3336));t(6649),t(6078),t(2526),t(1817),t(1539),t(1703),t(6647),t(9653);function o(e,r){if("object"!==(0,s.Z)(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==(0,s.Z)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function c(e){var r=o(e,"string");return"symbol"===(0,s.Z)(r)?r:String(r)}function u(e,r,t){return r=c(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var v=t(5957),l=t(8534);t(4916),t(5306),t(5827),t(1249),t(8309),t(2222);const p={data:function(){return{recipe:null,favorite:!1}},created:function(){var e=this;return(0,l.Z)((0,i.Z)().mark((function r(){var t,n,a,s,o,c,l,p,d,f,g,h,m,b;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.prev=1,r.next=4,e.axios.get(e.$root.store.server_domain+"/recipes/fullDetailes?recipeid="+e.$route.params.recipeId+"&username="+e.$root.store.username);case 4:t=r.sent,200!==t.status&&e.$router.replace("/NotFound"),r.next=13;break;case 8:return r.prev=8,r.t0=r["catch"](1),console.log("error.response.status",r.t0.response.status),e.$router.replace("/NotFound"),r.abrupt("return");case 13:n=t.data,a=n.instructions,s=n.ingredients,o=n.aggregateLikes,c=n.readyInMinutes,l=n.image,p=n.title,d=n.servings,f=n.vegan,g=n.vegetarian,h=n.glutenFree,m=a.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,r){return[].concat((0,v.Z)(e),(0,v.Z)(r))}),[]),b=u({instructions:a,_instructions:m,ingredients:s,aggregateLikes:o,readyInMinutes:c,image:l,title:p,servings:d,vegan:f,vegetarian:g,glutenFree:h},"servings",d),e.recipe=b,e.checkIfFavorite(),r.next=23;break;case 20:r.prev=20,r.t1=r["catch"](0),console.log(r.t1);case 23:case"end":return r.stop()}}),r,null,[[0,20],[1,8]])})))()},methods:{addToFavorite:function(){var e=this;return(0,l.Z)((0,i.Z)().mark((function r(){var t,n;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t={recipeId:e.$route.params.recipeId},n=e.$root.store.username,r.prev=2,e.checkIfFavorite(),1!=e.favorite){r.next=11;break}return r.next=7,e.axios.post(e.$root.store.server_domain+"/users/removefavorites",{recipeId:t.recipeId,username:n,withCredentials:!0});case 7:r.sent,e.favorite=!1,r.next=15;break;case 11:return r.next=13,e.axios.post(e.$root.store.server_domain+"/users/favorites",{recipeId:t.recipeId,username:n,withCredentials:!0});case 13:r.sent,e.favorite=!0;case 15:console.log("is the recipe "+t.recipeId+" favor? "+e.favorite),r.next=21;break;case 18:r.prev=18,r.t0=r["catch"](2),console.log(r.t0.response);case 21:case"end":return r.stop()}}),r,null,[[2,18]])})))()},checkIfFavorite:function(){var e=this;return(0,l.Z)((0,i.Z)().mark((function r(){var t,n,a;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t={recipeId:e.$route.params.recipeId},a=e.$root.store.username,r.prev=2,r.next=5,e.axios.get(e.$root.store.server_domain+"/users/isAFavorites?recipeId="+t.recipeId+"&username="+a,{withCredentials:!0});case 5:n=r.sent,void 0!=n&&1==n.data&&(e.favorite=!0),console.log(n),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](2),console.log("err.response ->>>"+r.t0.response);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()}}},d=p;var f=t(1001),g=(0,f.Z)(d,n,a,!1,null,"00093f7b",null);const h=g.exports},1530:(e,r,t)=>{"use strict";var n=t(8710).charAt;e.exports=function(e,r,t){return r+(t?n(e,r).length:1)}},3671:(e,r,t)=>{var n=t(9662),a=t(7908),i=t(8361),s=t(6244),o=TypeError,c=function(e){return function(r,t,c,u){n(t);var v=a(r),l=i(v),p=s(v),d=e?p-1:0,f=e?-1:1;if(c<2)while(1){if(d in l){u=l[d],d+=f;break}if(d+=f,e?d<0:p<=d)throw o("Reduce of empty array with no initial value")}for(;e?d>=0:p>d;d+=f)d in l&&(u=t(u,l[d],d,v));return u}};e.exports={left:c(!1),right:c(!0)}},8709:(e,r,t)=>{"use strict";var n=t(9670),a=t(2140),i=TypeError;e.exports=function(e){if(n(this),"string"===e||"default"===e)e="string";else if("number"!==e)throw i("Incorrect hint");return a(this,e)}},7007:(e,r,t)=>{"use strict";t(4916);var n=t(1470),a=t(8052),i=t(2261),s=t(7293),o=t(5112),c=t(8880),u=o("species"),v=RegExp.prototype;e.exports=function(e,r,t,l){var p=o(e),d=!s((function(){var r={};return r[p]=function(){return 7},7!=""[e](r)})),f=d&&!s((function(){var r=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[u]=function(){return t},t.flags="",t[p]=/./[p]),t.exec=function(){return r=!0,null},t[p](""),!r}));if(!d||!f||t){var g=n(/./[p]),h=r(p,""[e],(function(e,r,t,a,s){var o=n(e),c=r.exec;return c===i||c===v.exec?d&&!s?{done:!0,value:g(r,t,a)}:{done:!0,value:o(t,r,a)}:{done:!1}}));a(String.prototype,e,h[0]),a(v,p,h[1])}l&&c(v[p],"sham",!0)}},647:(e,r,t)=>{var n=t(1702),a=t(7908),i=Math.floor,s=n("".charAt),o=n("".replace),c=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,v=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,t,n,l,p){var d=t+e.length,f=n.length,g=v;return void 0!==l&&(l=a(l),g=u),o(p,g,(function(a,o){var u;switch(s(o,0)){case"$":return"$";case"&":return e;case"`":return c(r,0,t);case"'":return c(r,d);case"<":u=l[c(o,1,-1)];break;default:var v=+o;if(0===v)return a;if(v>f){var p=i(v/10);return 0===p?a:p<=f?void 0===n[p-1]?s(o,1):n[p-1]+s(o,1):a}u=n[v-1]}return void 0===u?"":u}))}},7651:(e,r,t)=>{var n=t(6916),a=t(9670),i=t(614),s=t(4326),o=t(2261),c=TypeError;e.exports=function(e,r){var t=e.exec;if(i(t)){var u=n(t,e,r);return null!==u&&a(u),u}if("RegExp"===s(e))return n(o,e,r);throw c("RegExp#exec called on incompatible receiver")}},2222:(e,r,t)=>{"use strict";var n=t(2109),a=t(7293),i=t(3157),s=t(111),o=t(7908),c=t(6244),u=t(7207),v=t(6135),l=t(5417),p=t(1194),d=t(5112),f=t(7392),g=d("isConcatSpreadable"),h=f>=51||!a((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),m=function(e){if(!s(e))return!1;var r=e[g];return void 0!==r?!!r:i(e)},b=!h||!p("concat");n({target:"Array",proto:!0,arity:1,forced:b},{concat:function(e){var r,t,n,a,i,s=o(this),p=l(s,0),d=0;for(r=-1,n=arguments.length;r<n;r++)if(i=-1===r?s:arguments[r],m(i))for(a=c(i),u(d+a),t=0;t<a;t++,d++)t in i&&v(p,d,i[t]);else u(d+1),v(p,d++,i);return p.length=d,p}})},1249:(e,r,t)=>{"use strict";var n=t(2109),a=t(2092).map,i=t(1194),s=i("map");n({target:"Array",proto:!0,forced:!s},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5827:(e,r,t)=>{"use strict";var n=t(2109),a=t(3671).left,i=t(9341),s=t(7392),o=t(5268),c=!o&&s>79&&s<83,u=c||!i("reduce");n({target:"Array",proto:!0,forced:u},{reduce:function(e){var r=arguments.length;return a(this,e,r,r>1?arguments[1]:void 0)}})},6078:(e,r,t)=>{var n=t(2597),a=t(8052),i=t(8709),s=t(5112),o=s("toPrimitive"),c=Date.prototype;n(c,o)||a(c,o,i)},5306:(e,r,t)=>{"use strict";var n=t(2104),a=t(6916),i=t(1702),s=t(7007),o=t(7293),c=t(9670),u=t(614),v=t(8554),l=t(9303),p=t(7466),d=t(1340),f=t(4488),g=t(1530),h=t(8173),m=t(647),b=t(7651),x=t(5112),_=x("replace"),k=Math.max,w=Math.min,y=i([].concat),$=i([].push),I=i("".indexOf),Z=i("".slice),C=function(e){return void 0===e?e:String(e)},F=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[_]&&""===/./[_]("a","$0")}(),E=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,r,t){var i=S?"$":"$0";return[function(e,t){var n=f(this),i=v(e)?void 0:h(e,_);return i?a(i,e,n,t):a(r,d(n),e,t)},function(e,a){var s=c(this),o=d(e);if("string"==typeof a&&-1===I(a,i)&&-1===I(a,"$<")){var v=t(r,s,o,a);if(v.done)return v.value}var f=u(a);f||(a=d(a));var h=s.global;if(h){var x=s.unicode;s.lastIndex=0}var _=[];while(1){var F=b(s,o);if(null===F)break;if($(_,F),!h)break;var S=d(F[0]);""===S&&(s.lastIndex=g(o,p(s.lastIndex),x))}for(var E="",T=0,A=0;A<_.length;A++){F=_[A];for(var M=d(F[0]),P=k(w(l(F.index),o.length),0),R=[],L=1;L<F.length;L++)$(R,C(F[L]));var j=F.groups;if(f){var N=y([M],R,P,o);void 0!==j&&$(N,j);var D=d(n(a,void 0,N))}else D=m(M,o,P,R,j,a);P>=T&&(E+=Z(o,T,P)+D,T=P+M.length)}return E+Z(o,T)}]}),!E||!F||S)},6649:(e,r,t)=>{var n=t(6800),a=t(6532);n("toPrimitive"),a()}}]);
//# sourceMappingURL=860.52403a98.js.map