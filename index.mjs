// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";var m=s,a=t,n=e,r=i;var d=function(s,t,e){var i,d,o,p;return m(s)||m(t)||m(e)||s<=0||t<=0?NaN:s<=4?r:(d=a(1-1/s),o=a(1-2/s),p=a(1-3/s),i=(a(1-4/s)-4*p*d+3*o*o)/n(o-d*d,2),i-=6)};export{d as default};
//# sourceMappingURL=index.mjs.map
