// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,_=function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(i.call(e,r)||l.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},f=r()?c:_;var p=function(e){return e!=e},b=p;var v=function(e){return function(){return e}},y=p;var d=function(e,r,t){return b(r)||b(t)||r>=t||b(e)||e<0||e>1?NaN:r+e*(t-r)},s=function(e,r){return y(e)||y(r)||e>=r?v(NaN):function(t){if(y(t)||t<0||t>1)return NaN;return e+t*(r-e)}};(function(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})})(d,"factory",s);var j=d;export{j as default,s as factory};
//# sourceMappingURL=mod.js.map
