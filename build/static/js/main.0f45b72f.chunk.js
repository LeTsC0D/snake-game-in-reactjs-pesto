(this["webpackJsonpreact-snake"]=this["webpackJsonpreact-snake"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(4),u=n.n(a),i=n(5),o=n(1);var f=[800,800],l=[[8,7],[8,8]],s=[8,3],b={38:[0,-1],40:[0,1],37:[-1,0],39:[1,0]},v=function(){var t=Object(r.useRef)(),e=Object(r.useState)(l),n=Object(o.a)(e,2),a=n[0],u=n[1],v=Object(r.useState)(s),O=Object(o.a)(v,2),d=O[0],j=O[1],h=Object(r.useState)([0,-1]),p=Object(o.a)(h,2),E=p[0],m=p[1],S=Object(r.useState)(null),y=Object(o.a)(S,2),k=y[0],w=y[1],g=Object(r.useState)(!1),x=Object(o.a)(g,2),R=x[0],I=x[1];!function(t,e){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=t}),[t]),Object(r.useEffect)((function(){if(null!==e){var t=setInterval((function(){n.current()}),e);return function(){return clearInterval(t)}}}),[e])}((function(){return M()}),k);var J=function(){return d.map((function(t,e){return Math.floor(Math.random()*(f[e]/40))}))},C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;if(40*t[0]>=f[0]||t[0]<0||40*t[1]>=f[1]||t[1]<0)return!0;var n,r=Object(i.a)(e);try{for(r.s();!(n=r.n()).done;){var c=n.value;if(t[0]===c[0]&&t[1]===c[1])return!0}}catch(u){r.e(u)}finally{r.f()}return!1},M=function(){var t=JSON.parse(JSON.stringify(a)),e=[t[0][0]+E[0],t[0][1]+E[1]];t.unshift(e),C(e)&&(w(null),I(!0)),function(t){if(t[0][0]===d[0]&&t[0][1]===d[1]){for(var e=J();C(e,t);)e=J();return j(e),!0}return!1}(t)||t.pop(),u(t)};return Object(r.useEffect)((function(){var e=t.current.getContext("2d");e.setTransform(40,0,0,40,0,0),e.clearRect(0,0,window.innerWidth,window.innerHeight),e.fillStyle="pink",a.forEach((function(t){var n=Object(o.a)(t,2),r=n[0],c=n[1];return e.fillRect(r,c,1,1)})),e.fillStyle="lightblue",e.fillRect(d[0],d[1],1,1)}),[a,d,R]),c.a.createElement("div",{role:"button",tabIndex:"0",onKeyDown:function(t){return function(t){var e=t.keyCode;return e>=37&&e<=40&&m(b[e])}(t)}},c.a.createElement("canvas",{style:{border:"1px solid black"},ref:t,width:"".concat(f[0],"px"),height:"".concat(f[1],"px")}),R&&c.a.createElement("div",null,"GAME OVER!"),c.a.createElement("button",{onClick:function(){u(l),j(s),m([0,-1]),w(100),I(!1)}},"Start Game"))};u.a.render(c.a.createElement(v,null),document.getElementById("root"))},6:function(t,e,n){t.exports=n(11)}},[[6,1,2]]]);
//# sourceMappingURL=main.0f45b72f.chunk.js.map