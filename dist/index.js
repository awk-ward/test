!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(2)},function(t,e){let n,r;function o(t,e,...n){const r=document.createElement(t);return r.classList.add(e,...n),r}fetch("https://my-json-server.typicode.com/awk-ward/test/db").then((function(t){t.json().then((function(t){n=t.categories,r=t.products,function(){const t=document.querySelector(".widget"),e=n.length;for(let n=0;n<e;n++){const e=o("input","widget__input"),r=o("label","widget__label");e.type="radio",e.name="tabs",e.id=`tab${n+1}`,r.setAttribute("for",`tab${n+1}`),t.appendChild(e),t.appendChild(r)}document.querySelector(".widget__input").checked="true";for(let n=0;n<e;n++){const e=o("section","widget__content");e.id=`content${n+1}`;const r=5;for(let t=0;t<r;t++){const t=o("div","content__card"),n=o("img","content__picture"),r=o("p","content__name");n.src="http://rrstatic.retailrocket.net/test_task/tovar.jpg",e.appendChild(t),t.appendChild(n),t.appendChild(r)}t.appendChild(e)}const i=document.querySelectorAll(".content__name"),a=document.querySelectorAll(".widget__label");r.sort((function(t,e){return t.categoryId-e.categoryId})),a.forEach((function(t,e){t.textContent=n[e].categoryName})),i.forEach((function(t,e){t.textContent=r[e].productName}))}()}))}))},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){},function(t,e,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function c(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function s(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(b(r.parts[a],e))}else{for(var c=[];a<r.parts.length;a++)c.push(b(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:c}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&t.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,v=0;function b(t,e){var n,r,o;if(e.singleton){var i=v++;n=h||(h=u(e)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=c(t,e);return s(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i],u=o[a.id];u&&(u.refs--,r.push(u))}t&&s(c(t,e),e);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete o[d.id]}}}}}]);