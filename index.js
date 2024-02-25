// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Math.floor;function n(r){return e(r)===r}var t=Number.NEGATIVE_INFINITY;function i(r){return Math.abs(r)}var a,o=2147483647,u=2146435072,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,s=Object.prototype.hasOwnProperty,l="function"==typeof Symbol?Symbol:void 0,p="function"==typeof l?l.toStringTag:"",y=f&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return c.call(r);n=r[p],a=p,e=null!=(i=r)&&s.call(i,a);try{r[p]=void 0}catch(e){return c.call(r)}return t=c.call(r),e?r[p]=n:delete r[p],t}:function(r){return c.call(r)},g="function"==typeof Uint32Array,v="function"==typeof Uint32Array?Uint32Array:null,d="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,e,n;if("function"!=typeof v)return!1;try{e=new v(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(g&&n instanceof Uint32Array||"[object Uint32Array]"===y(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h,w=a,b="function"==typeof Float64Array,m="function"==typeof Float64Array?Float64Array:null,A="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,e,n;if("function"!=typeof m)return!1;try{e=new m([1,3.14,-3.14,NaN]),n=e,r=(b&&n instanceof Float64Array||"[object Float64Array]"===y(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,E=h,N="function"==typeof Uint8Array,U="function"==typeof Uint8Array?Uint8Array:null,I="function"==typeof Uint8Array?Uint8Array:void 0;_=function(){var r,e,n;if("function"!=typeof U)return!1;try{e=new U(e=[1,3.14,-3.14,256,257]),n=e,r=(N&&n instanceof Uint8Array||"[object Uint8Array]"===y(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var S,k=_,x="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var r,e,n;if("function"!=typeof F)return!1;try{e=new F(e=[1,3.14,-3.14,65536,65537]),n=e,r=(x&&n instanceof Uint16Array||"[object Uint16Array]"===y(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?j:function(){throw new Error("not implemented")};var T,O={uint16:S,uint8:k};(T=new O.uint16(1))[0]=4660;var V=52===new O.uint8(T.buffer)[0],$=!0===V?1:0,G=new E(1),H=new w(G.buffer);function W(r){return G[0]=r,H[$]}function C(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var L=-.16666666666666632,P=.00833333333332249,M=-.0001984126982985795,R=27557313707070068e-22,Z=-2.5050760253406863e-8,X=1.58969099521155e-10;function Y(r,e){var n,t,i;return n=P+(i=r*r)*(M+i*R)+i*(i*i)*(Z+i*X),t=i*r,0===e?r+t*(L+i*n):r-(i*(.5*e-t*n)-e-t*L)}var q,z,B=1048575,D=!0===V?0:1,J=new E(1),K=new w(J.buffer);!0===V?(q=1,z=0):(q=0,z=1);var Q={HIGH:q,LOW:z},rr=new E(1),er=new w(rr.buffer),nr=Q.HIGH,tr=Q.LOW;function ir(r,e){return er[nr]=r,er[tr]=e,rr[0]}var ar=Number.POSITIVE_INFINITY,or=1023,ur=1023,fr=-1023,cr=-1074;function sr(r){return r===ar||r===t}var lr=2147483648,pr="function"==typeof Object.defineProperty?Object.defineProperty:null,yr=Object.defineProperty;function gr(r){return"number"==typeof r}function vr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function dr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+vr(i):vr(i)+r,t&&(r="-"+r)),r}var hr=String.prototype.toLowerCase,wr=String.prototype.toUpperCase;function br(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!gr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=dr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=dr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===wr.call(r.specifier)?wr.call(n):hr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var mr=Math.abs,Ar=String.prototype.toLowerCase,_r=String.prototype.toUpperCase,Er=String.prototype.replace,Nr=/e\+(\d)$/,Ur=/e-(\d)$/,Ir=/^(\d+)$/,Sr=/^(\d+)e/,kr=/\.0$/,xr=/\.0*e/,Fr=/(\..*[^0])0*e/;function jr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!gr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":mr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=Er.call(n,Fr,"$1e"),n=Er.call(n,xr,"e"),n=Er.call(n,kr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Er.call(n,Nr,"e+0$1"),n=Er.call(n,Ur,"e-0$1"),r.alternate&&(n=Er.call(n,Ir,"$1."),n=Er.call(n,Sr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===_r.call(r.specifier)?_r.call(n):Ar.call(n)}function Tr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var Or=String.fromCharCode,Vr=isNaN,$r=Array.isArray;function Gr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Hr(r){var e,n,t,i,a,o,u,f,c,s,l,p,y;if(!$r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if("string"==typeof(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=Gr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Vr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Vr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=br(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Vr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Vr(a)?String(t.arg):Or(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=jr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=dr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+Tr(y):Tr(y)+s)),o+=t.arg||"",u+=1}return o}var Wr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Cr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Lr(r){var e,n,t,i;for(n=[],i=0,t=Wr.exec(r);t;)(e=r.slice(i,Wr.lastIndex-t[0].length)).length&&n.push(e),n.push(Cr(t)),i=Wr.lastIndex,t=Wr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Pr(r){var e,n;if("string"!=typeof r)throw new TypeError(Pr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Lr(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return Hr.apply(null,e)}var Mr,Rr,Zr=Object.prototype,Xr=Zr.toString,Yr=Zr.__defineGetter__,qr=Zr.__defineSetter__,zr=Zr.__lookupGetter__,Br=Zr.__lookupSetter__,Dr=function(){try{return pr({},"x",{}),!0}catch(r){return!1}}()?yr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Xr.call(r))throw new TypeError(Pr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Xr.call(n))throw new TypeError(Pr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(zr.call(r,e)||Br.call(r,e)?(t=r.__proto__,r.__proto__=Zr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Yr&&Yr.call(r,e,n.get),o&&qr&&qr.call(r,e,n.set),r};function Jr(r,e,n){Dr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===V?(Mr=1,Rr=0):(Mr=0,Rr=1);var Kr={HIGH:Mr,LOW:Rr},Qr=new E(1),re=new w(Qr.buffer),ee=Kr.HIGH,ne=Kr.LOW;function te(r,e,n,t){return Qr[0]=r,e[t]=re[ee],e[t+n]=re[ne],e}function ie(r){return te(r,[0,0],1,0)}Jr(ie,"assign",te);var ae=[0,0];function oe(r,e){var n,t;return ie.assign(r,ae,1,0),n=ae[0],n&=o,t=W(e),ir(n|=t&=lr,ae[1])}var ue=22250738585072014e-324,fe=4503599627370496;function ce(e,n,t,a){return r(e)||sr(e)?(n[a]=e,n[a+t]=0,n):0!==e&&i(e)<ue?(n[a]=e*fe,n[a+t]=-52,n):(n[a]=e,n[a+t]=0,n)}Jr((function(r){return ce(r,[0,0],1,0)}),"assign",ce);var se=2220446049250313e-31,le=2148532223,pe=[0,0],ye=[0,0];function ge(e,n){var i,a;return 0===n||0===e||r(e)||sr(e)?e:(ce(e,pe,1,0),e=pe[0],n+=pe[1],n+=function(r){var e=W(r);return(e=(e&u)>>>20)-or|0}(e),n<cr?oe(0,e):n>ur?e<0?t:ar:(n<=fr?(n+=52,a=se):a=1,ie.assign(e,ye,1,0),i=ye[0],i&=le,a*ir(i|=n+or<<20,ye[1])))}function ve(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var de=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],he=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],we=16777216,be=5.960464477539063e-8,me=ve(20),Ae=ve(20),_e=ve(20),Ee=ve(20);function Ne(r,n,t,i,a,o,u,f,c){var s,l,p,y,g,v,d,h,w;for(y=o,w=i[t],h=t,g=0;h>0;g++)l=be*w|0,Ee[g]=w-we*l|0,w=i[h-1]+l,h-=1;if(w=ge(w,a),w-=8*e(.125*w),w-=d=0|w,p=0,a>0?(d+=g=Ee[t-1]>>24-a,Ee[t-1]-=g<<24-a,p=Ee[t-1]>>23-a):0===a?p=Ee[t-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,g=0;g<t;g++)h=Ee[g],0===s?0!==h&&(s=1,Ee[g]=16777216-h):Ee[g]=16777215-h;if(a>0)switch(a){case 1:Ee[t-1]&=8388607;break;case 2:Ee[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=ge(1,a)))}if(0===w){for(h=0,g=t-1;g>=o;g--)h|=Ee[g];if(0===h){for(v=1;0===Ee[o-v];v++);for(g=t+1;g<=t+v;g++){for(c[f+g]=de[u+g],l=0,h=0;h<=f;h++)l+=r[h]*c[f+(g-h)];i[g]=l}return Ne(r,n,t+=v,i,a,o,u,f,c)}}if(0===w)for(t-=1,a-=24;0===Ee[t];)t-=1,a-=24;else(w=ge(w,-a))>=we?(l=be*w|0,Ee[t]=w-we*l|0,a+=24,Ee[t+=1]=l):Ee[t]=0|w;for(l=ge(1,a),g=t;g>=0;g--)i[g]=l*Ee[g],l*=be;for(g=t;g>=0;g--){for(l=0,v=0;v<=y&&v<=t-g;v++)l+=he[v]*i[g+v];_e[t-g]=l}for(l=0,g=t;g>=0;g--)l+=_e[g];for(n[0]=0===p?l:-l,l=_e[0]-l,g=1;g<=t;g++)l+=_e[g];return n[1]=0===p?l:-l,7&d}function Ue(r,e,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)me[f]=c<0?0:de[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*me[o+(f-c)];Ae[f]=i}return Ne(r,e,4,Ae,u,4,a,o,me)}var Ie=Math.round,Se=.6366197723675814,ke=1.5707963267341256,xe=6077100506506192e-26,Fe=6077100506303966e-26,je=20222662487959506e-37,Te=20222662487111665e-37,Oe=84784276603689e-45,Ve=2047;function $e(r,e,n){var t,i,a,o,u;return a=r-(t=Ie(r*Se))*ke,o=t*xe,u=e>>20|0,n[0]=a-o,u-(W(n[0])>>20&Ve)>16&&(o=t*je-((i=a)-(a=i-(o=t*Fe))-o),n[0]=a-o,u-(W(n[0])>>20&Ve)>49&&(o=t*Oe-((i=a)-(a=i-(o=t*Te))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Ge=0,He=16777216,We=1.5707963267341256,Ce=6077100506506192e-26,Le=2*Ce,Pe=3*Ce,Me=4*Ce,Re=598523,Ze=1072243195,Xe=1073928572,Ye=1074752122,qe=1074977148,ze=1075183036,Be=1075388923,De=1075594811,Je=1094263291,Ke=[0,0,0],Qe=[0,0];function rn(r,e){var n,t,i,a,f,c,s;if((i=W(r)&o|0)<=Ze)return e[0]=r,e[1]=0,0;if(i<=Ye)return(i&B)===Re?$e(r,i,e):i<=Xe?r>0?(s=r-We,e[0]=s-Ce,e[1]=s-e[0]-Ce,1):(s=r+We,e[0]=s+Ce,e[1]=s-e[0]+Ce,-1):r>0?(s=r-2*We,e[0]=s-Le,e[1]=s-e[0]-Le,2):(s=r+2*We,e[0]=s+Le,e[1]=s-e[0]+Le,-2);if(i<=De)return i<=ze?i===qe?$e(r,i,e):r>0?(s=r-3*We,e[0]=s-Pe,e[1]=s-e[0]-Pe,3):(s=r+3*We,e[0]=s+Pe,e[1]=s-e[0]+Pe,-3):i===Be?$e(r,i,e):r>0?(s=r-4*We,e[0]=s-Me,e[1]=s-e[0]-Me,4):(s=r+4*We,e[0]=s+Me,e[1]=s-e[0]+Me,-4);if(i<Je)return $e(r,i,e);if(i>=u)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return J[0]=r,K[D]}(r),s=ir(i-((t=(i>>20)-1046)<<20|0),n),f=0;f<2;f++)Ke[f]=0|s,s=(s-Ke[f])*He;for(Ke[2]=s,a=3;Ke[a-1]===Ge;)a-=1;return c=Ue(Ke,Qe,t,a),r<0?(e[0]=-Qe[0],e[1]=-Qe[1],-c):(e[0]=Qe[0],e[1]=Qe[1],c)}var en=1072243195,nn=1045430272,tn=[0,0],an=3.141592653589793,on=2.5066282746310007;function un(r){return n(r/2)}function fn(r){return un(r>0?r-1:r+1)}var cn=Math.sqrt,sn=!0===V?0:1,ln=new E(1),pn=new w(ln.buffer);function yn(r,e){return ln[0]=r,pn[sn]=e>>>0,ln[0]}function gn(r){return 0|r}var vn=1072693247,dn=1e300,hn=1e-300,wn=!0===V?1:0,bn=new E(1),mn=new w(bn.buffer);function An(r,e){return bn[0]=r,mn[wn]=e>>>0,bn[0]}var _n=1048575,En=1048576,Nn=1072693248,Un=536870912,In=524288,Sn=20,kn=9007199254740992,xn=.9617966939259756,Fn=.9617967009544373,jn=-7.028461650952758e-9,Tn=[1,1.5],On=[0,.5849624872207642],Vn=[0,1.350039202129749e-8],$n=1.4426950408889634,Gn=1.4426950216293335,Hn=1.9259629911266175e-8,Wn=.6931471805599453,Cn=1048576,Ln=1071644672,Pn=20,Mn=.6931471824645996,Rn=-1.904654299957768e-9,Zn=1072693247,Xn=1105199104,Yn=1139802112,qn=1083179008,zn=1072693248,Bn=1083231232,Dn=3230714880,Jn=31,Kn=1e300,Qn=1e-300,rt=8008566259537294e-32,et=[0,0],nt=[0,0];function tt(e,a){var u,f,c,s,l,p,y,g,v,d,h,w,b,m;if(r(e)||r(a))return NaN;if(ie.assign(a,et,1,0),l=et[0],0===et[1]){if(0===a)return 1;if(1===a)return e;if(-1===a)return 1/e;if(.5===a)return cn(e);if(-.5===a)return 1/cn(e);if(2===a)return e*e;if(3===a)return e*e*e;if(4===a)return(e*=e)*e;if(sr(a))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:i(r)<1==(e===ar)?0:ar}(e,a)}if(ie.assign(e,et,1,0),s=et[0],0===et[1]){if(0===s)return function(r,e){return e===t?ar:e===ar?0:e>0?fn(e)?r:0:fn(e)?oe(ar,r):ar}(e,a);if(1===e)return 1;if(-1===e&&fn(a))return-1;if(sr(e))return e===t?tt(-0,-a):a<0?0:ar}if(e<0&&!1===n(a))return(e-e)/(e-e);if(c=i(e),u=s&o|0,f=l&o|0,y=l>>>Jn|0,p=(p=s>>>Jn|0)&&fn(a)?-1:1,f>Xn){if(f>Yn)return function(r,e){return(W(r)&o)<=vn?e<0?dn*dn:hn*hn:e>0?dn*dn:hn*hn}(e,a);if(u<Zn)return 1===y?p*Kn*Kn:p*Qn*Qn;if(u>zn)return 0===y?p*Kn*Kn:p*Qn*Qn;h=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Hn-a*$n)-((t=yn(t=(o=Gn*i)+u,0))-o),r[0]=t,r[1]=n,r}(nt,c)}else h=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,v,d,h,w,b,m,A,_,E;return m=0,n<En&&(m-=53,n=W(e*=kn)),m+=(n>>Sn)-or|0,n=(A=n&_n|0)|Nn|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=En),o=yn(i=(w=(e=An(e,n))-(c=Tn[_]))*(b=1/(e+c)),0),t=(n>>1|Un)+In,f=An(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=yn(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=yn(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=Fn*l,v=(y=jn*l+(b-(l-w))*xn+Vn[_])-((g=yn(g=p+y+(s=On[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=v,r}(nt,c,u);if(w=(d=(a-(g=yn(a,0)))*h[0]+a*h[1])+(v=g*h[0]),ie.assign(w,et,1,0),b=gn(et[0]),m=gn(et[1]),b>=qn){if(0!=(b-qn|m))return p*Kn*Kn;if(d+rt>w-v)return p*Kn*Kn}else if((b&o)>=Bn){if(0!=(b-Dn|m))return p*Qn*Qn;if(d<=w-v)return p*Qn*Qn}return w=function(r,e,n){var t,i,a,u,f,c,s,l,p,y;return p=((l=r&o|0)>>Pn)-or|0,s=0,l>Ln&&(i=An(0,((s=r+(Cn>>p+1)>>>0)&~(B>>(p=((s&o)>>Pn)-or|0)))>>>0),s=(s&B|Cn)>>Pn-p>>>0,r<0&&(s=-s),e-=i),r=gn(r=W(c=1-((c=(a=(i=yn(i=n+e,0))*Mn)+(u=(n-(i-e))*Wn+i*Rn))*(t=c-(i=c*c)*(0===(y=i)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((f=u-(c-a))+c*f)-c))),(r+=s<<Pn>>>0)>>Pn<=0?ge(c,s):An(c,r)}(b,v,d),p*w}var it=Math.ceil;function at(r){return r<0?it(r):e(r)}var ot=.6931471803691238,ut=1.9082149292705877e-10,ft=1.4426950408889634,ct=709.782712893384,st=-745.1332191019411,lt=1/(1<<28),pt=-lt;function yt(e){var n;return r(e)||e===ar?e:e===t?0:e>ct?ar:e<st?0:e>pt&&e<lt?1+e:function(r,e,n){var t,i,a,o;return ge(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(e-(n=at(e<0?ft*e-.5:ft*e+.5))*ot,n*ut,n)}var gt=143.01608;function vt(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=yt(r),n=r>gt?(t=tt(r,.5*r-.25))*(t/n):tt(r,r-.5)/n,on*n*e}var dt=.5772156649015329;function ht(r,e){return e/((1+dt*r)*r)}function wt(a){var f,c,s,l;if(n(a)&&a<0||a===t||r(a))return NaN;if(0===a)return function(r){return 0===r&&1/r===t}(a)?t:ar;if(a>171.61447887182297)return ar;if(a<-170.5674972726612)return 0;if((c=i(a))>33)return a>=0?vt(a):(f=0==(1&(s=e(c)))?-1:1,(l=c-s)>.5&&(l=c-(s+=1)),l=c*function(r){var e;if(e=W(r),(e&=o)<=en)return e<nn?r:Y(r,0);if(e>=u)return NaN;switch(3&rn(r,tn)){case 0:return Y(tn[0],tn[1]);case 1:return C(tn[0],tn[1]);case 2:return-Y(tn[0],tn[1]);default:return-C(tn[0],tn[1])}}(an*l),f*an/(i(l)*vt(c)));for(l=1;a>=3;)l*=a-=1;for(;a<0;){if(a>-1e-9)return ht(a,l);l/=a,a+=1}for(;a<2;){if(a<1e-9)return ht(a,l);l/=a,a+=1}return 2===a?l:l*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(a-=2)}return function(e,n,t){var i,a,o,u;return r(e)||r(n)||r(t)||e<=0||n<=0?NaN:e<=4?ar:(a=wt(1-1/e),o=wt(1-2/e),u=wt(1-3/e),i=(wt(1-4/e)-4*u*a+3*o*o)/tt(o-a*a,2),i-=6)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).kurtosis=e();
//# sourceMappingURL=index.js.map
