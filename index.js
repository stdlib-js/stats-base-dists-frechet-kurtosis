// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}var e=Number.NEGATIVE_INFINITY;function u(r){return Math.abs(r)}var o,i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),f=Object.prototype.toString,a=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol.toStringTag:"",l=i&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return f.call(r);t=r[c],o=c,n=null!=(u=r)&&a.call(u,o);try{r[c]=void 0}catch(n){return f.call(r)}return e=f.call(r),n?r[c]=t:delete r[c],e}:function(r){return f.call(r)},y="function"==typeof Uint32Array,v="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;o=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(y&&t instanceof Uint32Array||"[object Uint32Array]"===l(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var s,b=o,w="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,A="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d([1,3.14,-3.14,NaN]),t=n,r=(w&&t instanceof Float64Array||"[object Float64Array]"===l(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,m=s,h="function"==typeof Uint8Array,g="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;_=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,256,257]),t=n,r=(h&&t instanceof Uint8Array||"[object Uint8Array]"===l(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var U,j=_,I="function"==typeof Uint16Array,O="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,65536,65537]),t=n,r=(I&&t instanceof Uint16Array||"[object Uint16Array]"===l(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F={uint16:U,uint8:j};(E=new F.uint16(1))[0]=4660;var T=52===new F.uint8(E.buffer)[0],H=!0===T?1:0,G=new m(1),P=new b(G.buffer);function M(r){return G[0]=r,P[H]}function k(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var L=-.16666666666666632;function V(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(L+u*t):r-(u*(.5*n-e*t)-n-e*L)}var W,x,Y=!0===T?0:1,q=new m(1),C=new b(q.buffer);!0===T?(W=1,x=0):(W=0,x=1);var z={HIGH:W,LOW:x},B=new m(1),D=new b(B.buffer),J=z.HIGH,K=z.LOW;function Q(r,n){return D[J]=r,D[K]=n,B[0]}var R=Number.POSITIVE_INFINITY,X=1023;function Z(r){return r===R||r===e}var $,rr,nr=2147483647,tr="function"==typeof Object.defineProperty?Object.defineProperty:null,er=Object.defineProperty,ur=Object.prototype,or=ur.toString,ir=ur.__defineGetter__,fr=ur.__defineSetter__,ar=ur.__lookupGetter__,cr=ur.__lookupSetter__,lr=function(){try{return tr({},"x",{}),!0}catch(r){return!1}}()?er:function(r,n,t){var e,u,o,i;if("object"!=typeof r||null===r||"[object Array]"===or.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===or.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(ar.call(r,n)||cr.call(r,n)?(e=r.__proto__,r.__proto__=ur,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,i="set"in t,u&&(o||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&ir&&ir.call(r,n,t.get),i&&fr&&fr.call(r,n,t.set),r};function yr(r,n,t){lr(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===T?($=1,rr=0):($=0,rr=1);var vr={HIGH:$,LOW:rr},pr=new m(1),sr=new b(pr.buffer),br=vr.HIGH,wr=vr.LOW;function dr(r,n,t,e){return pr[0]=r,n[e]=sr[br],n[e+t]=sr[wr],n}function Ar(r){return dr(r,[0,0],1,0)}yr(Ar,"assign",dr);var _r=[0,0];function mr(r,n){var t,e;return Ar.assign(r,_r,1,0),t=_r[0],t&=nr,e=M(n),Q(t|=e&=2147483648,_r[1])}function hr(n,t,e,o){return r(n)||Z(n)?(t[o]=n,t[o+e]=0,t):0!==n&&u(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}yr((function(r){return hr(r,[0,0],1,0)}),"assign",hr);var gr=[0,0],Nr=[0,0];function Ur(n,t){var u,o;return 0===t||0===n||r(n)||Z(n)?n:(hr(n,gr,1,0),t+=gr[1],t+=function(r){var n=M(r);return(n=(2146435072&n)>>>20)-X|0}(n=gr[0]),t<-1074?mr(0,n):t>1023?n<0?e:R:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,Ar.assign(n,Nr,1,0),u=Nr[0],u&=2148532223,o*Q(u|=t+X<<20,Nr[1])))}function jr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ir=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Or=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Sr=16777216,Er=5.960464477539063e-8,Fr=jr(20),Tr=jr(20),Hr=jr(20),Gr=jr(20);function Pr(r,t,e,u,o,i,f,a,c){var l,y,v,p,s,b,w,d,A;for(p=i,A=u[e],d=e,s=0;d>0;s++)y=Er*A|0,Gr[s]=A-Sr*y|0,A=u[d-1]+y,d-=1;if(A=Ur(A,o),A-=8*n(.125*A),A-=w=0|A,v=0,o>0?(w+=s=Gr[e-1]>>24-o,Gr[e-1]-=s<<24-o,v=Gr[e-1]>>23-o):0===o?v=Gr[e-1]>>23:A>=.5&&(v=2),v>0){for(w+=1,l=0,s=0;s<e;s++)d=Gr[s],0===l?0!==d&&(l=1,Gr[s]=16777216-d):Gr[s]=16777215-d;if(o>0)switch(o){case 1:Gr[e-1]&=8388607;break;case 2:Gr[e-1]&=4194303}2===v&&(A=1-A,0!==l&&(A-=Ur(1,o)))}if(0===A){for(d=0,s=e-1;s>=i;s--)d|=Gr[s];if(0===d){for(b=1;0===Gr[i-b];b++);for(s=e+1;s<=e+b;s++){for(c[a+s]=Ir[f+s],y=0,d=0;d<=a;d++)y+=r[d]*c[a+(s-d)];u[s]=y}return Pr(r,t,e+=b,u,o,i,f,a,c)}}if(0===A)for(e-=1,o-=24;0===Gr[e];)e-=1,o-=24;else(A=Ur(A,-o))>=Sr?(y=Er*A|0,Gr[e]=A-Sr*y|0,o+=24,Gr[e+=1]=y):Gr[e]=0|A;for(y=Ur(1,o),s=e;s>=0;s--)u[s]=y*Gr[s],y*=Er;for(s=e;s>=0;s--){for(y=0,b=0;b<=p&&b<=e-s;b++)y+=Or[b]*u[s+b];Hr[e-s]=y}for(y=0,s=e;s>=0;s--)y+=Hr[s];for(t[0]=0===v?y:-y,y=Hr[0]-y,s=1;s<=e;s++)y+=Hr[s];return t[1]=0===v?y:-y,7&w}function Mr(r,n,t,e){var u,o,i,f,a,c,l;for((o=(t-3)/24|0)<0&&(o=0),f=t-24*(o+1),c=o-(i=e-1),l=i+4,a=0;a<=l;a++)Fr[a]=c<0?0:Ir[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Fr[i+(a-c)];Tr[a]=u}return Pr(r,n,4,Tr,f,4,o,i,Fr)}var kr=Math.round;function Lr(r,n,t){var e,u,o,i,f;return o=r-1.5707963267341256*(e=kr(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=o-i,f-(M(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=o)-(o=u-(i=6077100506303966e-26*e))-i),t[0]=o-i,f-(M(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=o)-(o=u-(i=20222662487111665e-37*e))-i),t[0]=o-i)),t[1]=o-t[0]-i,e}var Vr=1.5707963267341256,Wr=6077100506506192e-26,xr=2*Wr,Yr=3*Wr,qr=4*Wr,Cr=[0,0,0],zr=[0,0];function Br(r,n){var t,e,u,o,i,f,a;if((u=2147483647&M(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Lr(r,u,n):u<=1073928572?r>0?(a=r-Vr,n[0]=a-Wr,n[1]=a-n[0]-Wr,1):(a=r+Vr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-1):r>0?(a=r-2*Vr,n[0]=a-xr,n[1]=a-n[0]-xr,2):(a=r+2*Vr,n[0]=a+xr,n[1]=a-n[0]+xr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Lr(r,u,n):r>0?(a=r-3*Vr,n[0]=a-Yr,n[1]=a-n[0]-Yr,3):(a=r+3*Vr,n[0]=a+Yr,n[1]=a-n[0]+Yr,-3):1075388923===u?Lr(r,u,n):r>0?(a=r-4*Vr,n[0]=a-qr,n[1]=a-n[0]-qr,4):(a=r+4*Vr,n[0]=a+qr,n[1]=a-n[0]+qr,-4);if(u<1094263291)return Lr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return q[0]=r,C[Y]}(r),a=Q(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Cr[i]=0|a,a=16777216*(a-Cr[i]);for(Cr[2]=a,o=3;0===Cr[o-1];)o-=1;return f=Mr(Cr,zr,e,o),r<0?(n[0]=-zr[0],n[1]=-zr[1],-f):(n[0]=zr[0],n[1]=zr[1],f)}var Dr=[0,0],Jr=3.141592653589793;function Kr(r){return t(r/2)}function Qr(r){return Kr(r>0?r-1:r+1)}var Rr=Math.sqrt,Xr=!0===T?0:1,Zr=new m(1),$r=new b(Zr.buffer);function rn(r,n){return Zr[0]=r,$r[Xr]=n>>>0,Zr[0]}function nn(r){return 0|r}var tn=!0===T?1:0,en=new m(1),un=new b(en.buffer);function on(r,n){return en[0]=r,un[tn]=n>>>0,en[0]}var fn=1048576,an=[1,1.5],cn=[0,.5849624872207642],ln=[0,1.350039202129749e-8],yn=1048575,vn=1048576,pn=1083179008,sn=1e300,bn=1e-300,wn=[0,0],dn=[0,0];function An(n,o){var i,f,a,c,l,y,v,p,s,b,w,d,A,_;if(r(n)||r(o))return NaN;if(Ar.assign(o,wn,1,0),l=wn[0],0===wn[1]){if(0===o)return 1;if(1===o)return n;if(-1===o)return 1/n;if(.5===o)return Rr(n);if(-.5===o)return 1/Rr(n);if(2===o)return n*n;if(3===o)return n*n*n;if(4===o)return(n*=n)*n;if(Z(o))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:u(r)<1==(n===R)?0:R}(n,o)}if(Ar.assign(n,wn,1,0),c=wn[0],0===wn[1]){if(0===c)return function(r,n){return n===e?R:n===R?0:n>0?Qr(n)?r:0:Qr(n)?mr(R,r):R}(n,o);if(1===n)return 1;if(-1===n&&Qr(o))return-1;if(Z(n))return n===e?An(-0,-o):o<0?0:R}if(n<0&&!1===t(o))return(n-n)/(n-n);if(a=u(n),i=c&nr|0,f=l&nr|0,v=l>>>31|0,y=(y=c>>>31|0)&&Qr(o)?-1:1,f>1105199104){if(f>1139802112)return function(r,n){return(M(r)&nr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,o);if(i<1072693247)return 1===v?y*sn*sn:y*bn*bn;if(i>1072693248)return 0===v?y*sn*sn:y*bn*bn;w=function(r,n){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=rn(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r}(dn,a)}else w=function(r,n,t){var e,u,o,i,f,a,c,l,y,v,p,s,b,w,d,A,_,m,h,g,N;return m=0,t<fn&&(m-=53,t=M(n*=9007199254740992)),m+=(t>>20)-X|0,t=1072693248|(h=1048575&t|0),h<=235662?g=0:h<767610?g=1:(g=0,m+=1,t-=fn),i=rn(u=(A=(n=on(n,t))-(c=an[g]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=on(0,e+=g<<18),d=(o=u*u)*o*(0===(N=o)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=rn(a=3+(o=i*i)+(d+=(f=_*(A-i*a-i*(n-(a-c))))*(i+u)),0),b=(p=-7.028461650952758e-9*(y=rn(y=(A=i*a)+(_=f*a+(d-(a-3-o))*u),0))+.9617966939259756*(_-(y-A))+ln[g])-((s=rn(s=(v=.9617967009544373*y)+p+(l=cn[g])+(w=m),0))-w-l-v),r[0]=s,r[1]=b,r}(dn,a,i);if(d=(b=(o-(p=rn(o,0)))*w[0]+o*w[1])+(s=p*w[0]),Ar.assign(d,wn,1,0),A=nn(wn[0]),_=nn(wn[1]),A>=pn){if(0!=(A-pn|_))return y*sn*sn;if(b+8008566259537294e-32>d-s)return y*sn*sn}else if((A&nr)>=1083231232){if(0!=(A-3230714880|_))return y*bn*bn;if(b<=d-s)return y*bn*bn}return d=function(r,n,t){var e,u,o,i,f,a,c,l,y,v;return y=((l=r&nr|0)>>20)-X|0,c=0,l>1071644672&&(u=on(0,((c=r+(vn>>y+1)>>>0)&~(yn>>(y=((c&nr)>>20)-X|0)))>>>0),c=(c&yn|vn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=nn(r=M(a=1-((a=(o=.6931471824645996*(u=rn(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-o))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Ur(a,c):on(a,r)}(A,s,b),y*d}var _n=Math.ceil;function mn(r){return r<0?_n(r):n(r)}var hn=1.4426950408889634,gn=1/(1<<28);function Nn(n){var t;return r(n)||n===R?n:n===e?0:n>709.782712893384?R:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<gn?1+n:function(r,n,t){var e,u,o,i;return Ur(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(n-.6931471803691238*(t=mn(n<0?hn*n-.5:hn*n+.5)),1.9082149292705877e-10*t,t)}function Un(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Nn(r),2.5066282746310007*(t=r>143.01608?(e=An(r,.5*r-.25))*(e/t):An(r,r-.5)/t)*n}function jn(r,n){return n/((1+.5772156649015329*r)*r)}function In(o){var i,f,a,c;if(t(o)&&o<0||o===e||r(o))return NaN;if(0===o)return function(r){return 0===r&&1/r===e}(o)?e:R;if(o>171.61447887182297)return R;if(o<-170.5674972726612)return 0;if((f=u(o))>33)return o>=0?Un(o):(i=0==(1&(a=n(f)))?-1:1,(c=f-a)>.5&&(c=f-(a+=1)),c=f*function(r){var n;if(n=M(r),(n&=2147483647)<=1072243195)return n<1045430272?r:V(r,0);if(n>=2146435072)return NaN;switch(3&Br(r,Dr)){case 0:return V(Dr[0],Dr[1]);case 1:return k(Dr[0],Dr[1]);case 2:return-V(Dr[0],Dr[1]);default:return-k(Dr[0],Dr[1])}}(Jr*c),i*Jr/(u(c)*Un(f)));for(c=1;o>=3;)c*=o-=1;for(;o<0;){if(o>-1e-9)return jn(o,c);c/=o,o+=1}for(;o<2;){if(o<1e-9)return jn(o,c);c/=o,o+=1}return 2===o?c:c*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(o-=2)}return function(n,t,e){var u,o,i,f;return r(n)||r(t)||r(e)||n<=0||t<=0?NaN:n<=4?R:(o=In(1-1/n),i=In(1-2/n),f=In(1-3/n),u=(In(1-4/n)-4*f*o+3*i*i)/An(i-o*o,2),u-=6)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).kurtosis=n();
//# sourceMappingURL=index.js.map
