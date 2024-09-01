// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function s(t,e,s){return n(e)||n(s)||e>=s||n(t)||t<0||t>1?NaN:e+t*(s-e)}function r(t,s){return n(t)||n(s)||t>=s?e(NaN):function(e){if(n(e)||e<0||e>1)return NaN;return t+e*(s-t)}}t(s,"factory",r);export{s as default,r as factory};
//# sourceMappingURL=index.mjs.map
