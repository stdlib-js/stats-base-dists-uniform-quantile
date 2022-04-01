// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var e=n;var s=r,i=n;var a=function(t,n,r){return e(n)||e(r)||n>=r||e(t)||t<0||t>1?NaN:n+t*(r-n)},o=function(t,n){return i(t)||i(n)||t>=n?s(NaN):function(r){if(i(r)||r<0||r>1)return NaN;return t+r*(n-t)}};t(a,"factory",o);var d=a;export{d as default,o as factory};
//# sourceMappingURL=index.mjs.map
