"use strict";var c=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var a=c(function(w,q){
var s=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-gamma/dist'),f=require('@stdlib/math-base-special-pow/dist'),m=require('@stdlib/constants-float64-pinf/dist');function N(r,e,v){var n,i,u,o,g;return s(r)||s(e)||s(v)||r<=0||e<=0?NaN:r<=4?m:(i=t(1-1/r),u=t(1-2/r),o=t(1-3/r),g=t(1-4/r),n=(g-4*o*i+3*u*u)/f(u-i*i,2),n-=6,n)}q.exports=N
});var x=a();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
