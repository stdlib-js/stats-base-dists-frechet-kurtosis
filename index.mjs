// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";function m(m,n,a){var d,r,o,p;return s(m)||s(n)||s(a)||m<=0||n<=0?NaN:m<=4?i:(r=t(1-1/m),o=t(1-2/m),p=t(1-3/m),d=(t(1-4/m)-4*p*r+3*o*o)/e(o-r*r,2),d-=6)}export{m as default};
//# sourceMappingURL=index.mjs.map
