(this["webpackJsonpconway-game-of-life"]=this["webpackJsonpconway-game-of-life"]||[]).push([[0],{10:function(n,t,r){},11:function(n,t,r){},13:function(n,t,r){"use strict";r.r(t);var e=r(1),c=r.n(e),a=r(5),o=r.n(a),i=(r(10),r(2)),u=(r(11),r(4)),s=r(0),f=50,b=[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]];var l=function(){var n=Object(e.useState)((function(){for(var n=[],t=0;t<30;t++)n.push(Array.from(Array(f),(function(){return 0})));return n})),t=Object(i.a)(n,2),r=t[0],a=t[1],o=Object(e.useState)(!1),l=Object(i.a)(o,2),j=l[0],d=l[1],m=Object(e.useRef)(j);m.current=j;var p=Object(e.useCallback)((function(){m.current&&(a((function(n){return Object(u.a)(n,(function(t){for(var r=function(r){for(var e=function(e){var c=0;b.forEach((function(t){var a=Object(i.a)(t,2),o=a[0],u=a[1],s=r+o,b=e+u;s>=0&&s<30&&b>=0&&b<f&&(c+=n[s][b])})),c<2||c>3?t[r][e]=0:0===n[r][e]&&3===c&&(t[r][e]=1)},c=0;c<f;c++)e(c)},e=0;e<30;e++)r(e)}))})),setTimeout(p,500))}),[]);return Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsxs)("div",{className:"button-container",children:[Object(s.jsx)("button",{className:"btn btn-primary",onClick:function(){d(!j),j||(m.current=!0,p())},children:j?"stop":"start"}),Object(s.jsx)("button",{className:"btn btn-primary",onClick:function(){a(function(){for(var n=[],t=0;t<30;t++)n.push(Array.from(Array(f),(function(){return 0})));return n}())},children:"Clear"}),Object(s.jsx)("button",{className:"btn btn-primary",onClick:function(){for(var n=[],t=0;t<30;t++)n.push(Array.from(Array(f),(function(){return Math.random()>.7?1:0})));a(n)},children:"Random"})]}),Object(s.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(f,", 25px)")},className:"App",children:r.map((function(n,t){return n.map((function(n,e){return Object(s.jsx)("div",{onClick:function(){var n=Object(u.a)(r,(function(n){n[t][e]=r[t][e]?0:1}));a(n)},style:{width:20,height:20,backgroundColor:r[t][e]?"pink":void 0,border:"solid 2px #3F3F3F"}},"".concat(t,"-").concat(e))}))}))})]})},j=function(n){n&&n instanceof Function&&r.e(3).then(r.bind(null,14)).then((function(t){var r=t.getCLS,e=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;r(n),e(n),c(n),a(n),o(n)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root")),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.aec81564.chunk.js.map