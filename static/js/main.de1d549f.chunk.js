(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),i=n.n(c),o=(n(14),n(2)),u=n(1);function p(e){var t=e.dispatch,n=e.digit;return r.a.createElement("button",{onClick:function(){return t({type:d.ADD_DIGIT,payload:{digit:n}})}},n)}function l(e){var t=e.dispatch,n=e.operation;return r.a.createElement("button",{onClick:function(){return t({type:d.CHOOSE_OPERATION,payload:{operation:n}})}},n)}n(15);var d={ADD_DIGIT:"add-digit",CHOOSE_OPERATION:"choose-operation",CLEAR:"clear",DELETE_DIGIT:"delete-digit",EVALUATE:"evaluate"};function s(e,t){var n=t.type,a=t.payload;switch(n){case d.ADD_DIGIT:return e.overwrite?Object(u.a)({},e,{currentOperand:a.digit,overwrite:!1}):"0"===a.digit&&"0"===e.currentOperand?e:"."===a.digit&&e.currentOperand.includes(".")?e:Object(u.a)({},e,{currentOperand:"".concat(e.currentOperand||"").concat(a.digit)});case d.CLEAR:return{};case d.CHOOSE_OPERATION:return null==e.currentOperand&&null==e.previousOperand?e:null==e.currentOperand?Object(u.a)({},e,{operation:a.operation}):null==e.previousOperand?Object(u.a)({},e,{operation:a.operation,previousOperand:e.currentOperand,currentOperand:null}):Object(u.a)({},e,{operation:a.operation,previousOperand:E(e),currentOperand:null});case d.EVALUATE:return null==e.operation||null==e.currentOperand||null==e.previousOperand?e:Object(u.a)({},e,{overwrite:!0,previousOperand:null,currentOperand:E(e),operation:null});case d.DELETE_DIGIT:return e.overwrite?Object(u.a)({},e,{overwrite:!1,currentOperand:null}):null==e.currentOperand?e:1===e.currentOperand.length?Object(u.a)({},e,{currentOperand:null}):Object(u.a)({},e,{currentOperand:e.currentOperand.slice(0,-1)})}}function E(e){var t=e.currentOperand,n=e.previousOperand,a=e.operation,r=parseFloat(n),c=parseFloat(t);if(isNaN(r)||isNaN(c))return"";var i="";switch(a){case"+":i=r+c;break;case"-":i=r-c;break;case"*":i=r*c;break;case"/":i=r/c}return i.toString()}var O=new Intl.NumberFormat("en-us",{maximumFractionDigits:0});function m(e){if(null!=e){var t=e.split("."),n=Object(o.a)(t,2),a=n[0],r=n[1];return null==r?O.format(a):"".concat(O.format(a),".").concat(r)}}var v=function(){var e=Object(a.useReducer)(s,{}),t=Object(o.a)(e,2),n=t[0],c=n.currentOperand,i=n.previousOperand,u=n.operation,E=t[1];return r.a.createElement("div",{className:"calculator-grid"},r.a.createElement("div",{className:"output"},r.a.createElement("div",{className:"previous-operand"},m(i)," ",u),r.a.createElement("div",{className:"current-operand"},m(c))),r.a.createElement("button",{className:"span-two",onClick:function(){E({type:d.CLEAR})}},"AC"),r.a.createElement("button",{onClick:function(){E({type:d.DELETE_DIGIT})}},"DEL"),r.a.createElement(l,{operation:"/",dispatch:E}),r.a.createElement(p,{digit:"1",dispatch:E}),r.a.createElement(p,{digit:"2",dispatch:E}),r.a.createElement(p,{digit:"3",dispatch:E}),r.a.createElement(l,{operation:"*",dispatch:E}),r.a.createElement(p,{digit:"4",dispatch:E}),r.a.createElement(p,{digit:"5",dispatch:E}),r.a.createElement(p,{digit:"6",dispatch:E}),r.a.createElement(l,{operation:"+",dispatch:E}),r.a.createElement(p,{digit:"7",dispatch:E}),r.a.createElement(p,{digit:"8",dispatch:E}),r.a.createElement(p,{digit:"9",dispatch:E}),r.a.createElement(l,{operation:"-",dispatch:E}),r.a.createElement(p,{digit:".",dispatch:E}),r.a.createElement(p,{digit:"0",dispatch:E}),r.a.createElement("button",{className:"span-two",onClick:function(){E({type:d.EVALUATE})}},"="))},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null))),g()},5:function(e,t,n){e.exports=n(16)}},[[5,1,2]]]);
//# sourceMappingURL=main.de1d549f.chunk.js.map