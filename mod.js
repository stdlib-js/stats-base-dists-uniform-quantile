// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;function c(e){return e!=e}function _(e,t,r){return c(t)||c(r)||t>=r||c(e)||e<0||e>1?NaN:t+e*(r-t)}function f(e,t){return c(e)||c(t)||e>=t?(r=NaN,function(){return r}):function(r){if(c(r)||r<0||r>1)return NaN;return e+r*(t-e)};var r}t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((_="value"in r)&&(i.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),f="get"in r,p="set"in r,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,t,r.get),p&&u&&u.call(e,t,r.set),e},t(_,"factory",{configurable:!1,enumerable:!1,writable:!1,value:f});export{_ as default,f as factory};
//# sourceMappingURL=mod.js.map