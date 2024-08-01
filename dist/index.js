"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=c(function(w,g){
var n=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-gamma/dist'),f=require('@stdlib/math-base-special-pow/dist'),m=require('@stdlib/constants-float64-pinf/dist');function N(r,e,a){var v,i,u,s,o;return n(r)||n(e)||n(a)||r<=0||e<=0?NaN:r<=4?m:(i=t(1-1/r),u=t(1-2/r),s=t(1-3/r),o=t(1-4/r),v=(o-4*s*i+3*u*u)/f(u-i*i,2),v-=6,v)}g.exports=N
});var x=q();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
