"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=a(function(m,s){
var i=require('@stdlib/math-base-assert-is-nan/dist');function N(e,r,t){return i(r)||i(t)||r>=t?NaN:i(e)||e<0||e>1?NaN:r+e*(t-r)}s.exports=N
});var f=a(function(F,o){
var v=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist');function y(e,r){if(u(e)||u(r)||e>=r)return v(NaN);return t;function t(n){return u(n)||n<0||n>1?NaN:e+n*(r-e)}}o.exports=y
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=c(),x=f();l(q,"factory",x);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
