// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).kurtosis=n()}(this,(function(){"use strict";var r=function(r){return r!=r},n=Math.floor,t=n;var e=function(r){return t(r)===r},u=Number.NEGATIVE_INFINITY,f=u;var i=function(r){return 0===r&&1/r===f};var o=function(r){return Math.abs(r)};var a=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var c=function(){return a&&"symbol"==typeof Symbol.toStringTag},v=Object.prototype.toString,y=v;var l=function(r){return y.call(r)},p=Object.prototype.hasOwnProperty;var s=function(r,n){return null!=r&&p.call(r,n)},w="function"==typeof Symbol?Symbol.toStringTag:"",A=s,b=w,h=v;var d=l,N=function(r){var n,t,e;if(null==r)return h.call(r);t=r[b],n=A(r,b);try{r[b]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[b]=t:delete r[b],e},U=c()?N:d,m=U,I="function"==typeof Uint32Array;var g="function"==typeof Uint32Array?Uint32Array:null,F=function(r){return I&&r instanceof Uint32Array||"[object Uint32Array]"===m(r)},S=g;var H=function(){var r,n;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,4294967296,4294967297]),r=F(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var O="function"==typeof Uint32Array?Uint32Array:void 0,T=function(){throw new Error("not implemented")},j=H()?O:T,E=U,G="function"==typeof Float64Array;var M="function"==typeof Float64Array?Float64Array:null,L=function(r){return G&&r instanceof Float64Array||"[object Float64Array]"===E(r)},W=M;var k=function(){var r,n;if("function"!=typeof W)return!1;try{n=new W([1,3.14,-3.14,NaN]),r=L(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var x="function"==typeof Float64Array?Float64Array:void 0,P=function(){throw new Error("not implemented")},V=k()?x:P,Y=U,_="function"==typeof Uint8Array;var q="function"==typeof Uint8Array?Uint8Array:null,z=function(r){return _&&r instanceof Uint8Array||"[object Uint8Array]"===Y(r)},B=q;var C=function(){var r,n;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,256,257]),r=z(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var D="function"==typeof Uint8Array?Uint8Array:void 0,J=function(){throw new Error("not implemented")},K=C()?D:J,Q=U,R="function"==typeof Uint16Array;var X="function"==typeof Uint16Array?Uint16Array:null,Z=function(r){return R&&r instanceof Uint16Array||"[object Uint16Array]"===Q(r)},$=X;var rr=function(){var r,n;if("function"!=typeof $)return!1;try{n=new $(n=[1,3.14,-3.14,65536,65537]),r=Z(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var nr,tr="function"==typeof Uint16Array?Uint16Array:void 0,er=function(){throw new Error("not implemented")},ur={uint16:rr()?tr:er,uint8:K};(nr=new ur.uint16(1))[0]=4660;var fr=52===new ur.uint8(nr.buffer)[0],ir=j,or=!0===fr?1:0,ar=new V(1),cr=new ir(ar.buffer);var vr=function(r){return ar[0]=r,cr[or]};var yr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},lr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var pr=function(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*yr(f),e+=u*u*lr(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))},sr=-.16666666666666632;var wr=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(sr+u*t):r-(u*(.5*n-e*t)-n-e*sr)},Ar=j,br=!0===fr?0:1,hr=new V(1),dr=new Ar(hr.buffer);var Nr,Ur,mr=function(r){return hr[0]=r,dr[br]};!0===fr?(Nr=1,Ur=0):(Nr=0,Ur=1);var Ir=j,gr={HIGH:Nr,LOW:Ur},Fr=new V(1),Sr=new Ir(Fr.buffer),Hr=gr.HIGH,Or=gr.LOW;var Tr=function(r,n){return Sr[Hr]=r,Sr[Or]=n,Fr[0]},jr=Tr,Er=Number.POSITIVE_INFINITY,Gr=Er,Mr=u;var Lr,Wr,kr=function(r){return r===Gr||r===Mr};!0===fr?(Lr=1,Wr=0):(Lr=0,Wr=1);var xr=j,Pr={HIGH:Lr,LOW:Wr},Vr=new V(1),Yr=new xr(Vr.buffer),_r=Pr.HIGH,qr=Pr.LOW;var zr=function(r,n){return Vr[0]=n,r[0]=Yr[_r],r[1]=Yr[qr],r};var Br=function(r,n){return 1===arguments.length?zr([0,0],r):zr(r,n)},Cr=Br,Dr=Cr,Jr=vr,Kr=jr,Qr=[0,0];var Rr=function(r,n){var t,e;return Dr(Qr,r),t=Qr[0],t&=2147483647,e=Jr(n),Kr(t|=e&=2147483648,Qr[1])},Xr=kr,Zr=r,$r=o;var rn=function(r,n){return Zr(n)||Xr(n)?(r[0]=n,r[1]=0,r):0!==n&&$r(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var nn=function(r,n){return 1===arguments.length?rn([0,0],r):rn(r,n)},tn=vr;var en=function(r){var n=tn(r);return(n=(2146435072&n)>>>20)-1023|0},un=Er,fn=u,on=r,an=kr,cn=Rr,vn=nn,yn=en,ln=Cr,pn=jr,sn=[0,0],wn=[0,0];var An=function(r,n){var t,e;return 0===n||0===r||on(r)||an(r)?r:(vn(sn,r),n+=sn[1],(n+=yn(r=sn[0]))<-1074?cn(0,r):n>1023?r<0?fn:un:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ln(wn,r),t=wn[0],t&=2148532223,e*pn(t|=n+1023<<20,wn[1])))},bn=An;var hn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var dn=n,Nn=bn,Un=function(r){return hn(0,r)},mn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],In=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],gn=16777216,Fn=5.960464477539063e-8,Sn=Un(20),Hn=Un(20),On=Un(20),Tn=Un(20);function jn(r,n,t,e,u,f,i,o,a){var c,v,y,l,p,s,w,A,b;for(l=f,b=e[t],A=t,p=0;A>0;p++)v=Fn*b|0,Tn[p]=b-gn*v|0,b=e[A-1]+v,A-=1;if(b=Nn(b,u),b-=8*dn(.125*b),b-=w=0|b,y=0,u>0?(w+=p=Tn[t-1]>>24-u,Tn[t-1]-=p<<24-u,y=Tn[t-1]>>23-u):0===u?y=Tn[t-1]>>23:b>=.5&&(y=2),y>0){for(w+=1,c=0,p=0;p<t;p++)A=Tn[p],0===c?0!==A&&(c=1,Tn[p]=16777216-A):Tn[p]=16777215-A;if(u>0)switch(u){case 1:Tn[t-1]&=8388607;break;case 2:Tn[t-1]&=4194303}2===y&&(b=1-b,0!==c&&(b-=Nn(1,u)))}if(0===b){for(A=0,p=t-1;p>=f;p--)A|=Tn[p];if(0===A){for(s=1;0===Tn[f-s];s++);for(p=t+1;p<=t+s;p++){for(a[o+p]=mn[i+p],v=0,A=0;A<=o;A++)v+=r[A]*a[o+(p-A)];e[p]=v}return jn(r,n,t+=s,e,u,f,i,o,a)}}if(0===b)for(t-=1,u-=24;0===Tn[t];)t-=1,u-=24;else(b=Nn(b,-u))>=gn?(v=Fn*b|0,Tn[t]=b-gn*v|0,u+=24,Tn[t+=1]=v):Tn[t]=0|b;for(v=Nn(1,u),p=t;p>=0;p--)e[p]=v*Tn[p],v*=Fn;for(p=t;p>=0;p--){for(v=0,s=0;s<=l&&s<=t-p;s++)v+=In[s]*e[p+s];On[t-p]=v}for(v=0,p=t;p>=0;p--)v+=On[p];for(n[0]=0===y?v:-v,v=On[0]-v,p=1;p<=t;p++)v+=On[p];return n[1]=0===y?v:-v,7&w}var En=function(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)Sn[a]=c<0?0:mn[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Sn[i+(a-c)];Hn[a]=u}return 4,jn(r,n,4,Hn,o,4,f,i,Sn)},Gn=Math.round,Mn=vr;var Ln=vr,Wn=mr,kn=jr,xn=En,Pn=function(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Gn(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(Mn(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(Mn(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e},Vn=1.5707963267341256,Yn=6077100506506192e-26,_n=2*Yn,qn=3*Yn,zn=4*Yn,Bn=[0,0,0],Cn=[0,0];var Dn=function(r,n){var t,e,u,f,i,o,a;if((u=2147483647&Ln(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Pn(r,u,n):u<=1073928572?r>0?(a=r-Vn,n[0]=a-Yn,n[1]=a-n[0]-Yn,1):(a=r+Vn,n[0]=a+Yn,n[1]=a-n[0]+Yn,-1):r>0?(a=r-2*Vn,n[0]=a-_n,n[1]=a-n[0]-_n,2):(a=r+2*Vn,n[0]=a+_n,n[1]=a-n[0]+_n,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Pn(r,u,n):r>0?(a=r-3*Vn,n[0]=a-qn,n[1]=a-n[0]-qn,3):(a=r+3*Vn,n[0]=a+qn,n[1]=a-n[0]+qn,-3):1075388923===u?Pn(r,u,n):r>0?(a=r-4*Vn,n[0]=a-zn,n[1]=a-n[0]-zn,4):(a=r+4*Vn,n[0]=a+zn,n[1]=a-n[0]+zn,-4);if(u<1094263291)return Pn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Wn(r),a=kn(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Bn[i]=0|a,a=16777216*(a-Bn[i]);for(Bn[2]=a,f=3;0===Bn[f-1];)f-=1;return o=xn(Bn,Cn,e,f),r<0?(n[0]=-Cn[0],n[1]=-Cn[1],-o):(n[0]=Cn[0],n[1]=Cn[1],o)},Jn=vr,Kn=pr,Qn=wr,Rn=Dn,Xn=[0,0];var Zn=function(r){var n;if(n=Jn(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Qn(r,0);if(n>=2146435072)return NaN;switch(3&Rn(r,Xn)){case 0:return Qn(Xn[0],Xn[1]);case 1:return Kn(Xn[0],Xn[1]);case 2:return-Qn(Xn[0],Xn[1]);default:return-Kn(Xn[0],Xn[1])}},$n=e;var rt=function(r){return $n(r/2)};var nt=function(r){return rt(r>0?r-1:r+1)},tt=Math.sqrt,et=j,ut=!0===fr?0:1,ft=new V(1),it=new et(ft.buffer);var ot=function(r,n){return ft[0]=r,it[ut]=n>>>0,ft[0]},at=ot;var ct=function(r){return 0|r},vt=nt,yt=Rr,lt=u,pt=Er;var st=function(r,n){return n===lt?pt:n===pt?0:n>0?vt(n)?r:0:vt(n)?yt(pt,r):pt},wt=vr;var At=function(r,n){return(2147483647&wt(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},bt=o,ht=Er;var dt=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:bt(r)<1==(n===ht)?0:ht},Nt=j,Ut=!0===fr?1:0,mt=new V(1),It=new Nt(mt.buffer);var gt=function(r,n){return mt[0]=r,It[Ut]=n>>>0,mt[0]};var Ft=vr,St=at,Ht=gt,Ot=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Tt=1048576,jt=[1,1.5],Et=[0,.5849624872207642],Gt=[0,1.350039202129749e-8];var Mt=at,Lt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Wt=vr,kt=gt,xt=at,Pt=ct,Vt=bn,Yt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},_t=2147483647,qt=1048575,zt=1048576;var Bt=r,Ct=nt,Dt=kr,Jt=e,Kt=tt,Qt=o,Rt=Cr,Xt=at,Zt=ct,$t=u,re=Er,ne=st,te=At,ee=dt,ue=function(r,n,t){var e,u,f,i,o,a,c,v,y,l,p,s,w,A,b,h,d,N,U,m;return N=0,t<Tt&&(N-=53,t=Ft(n*=9007199254740992)),N+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?m=0:U<767610?m=1:(m=0,N+=1,t-=Tt),e=524288+(t>>1|536870912),o=(d=1/((n=Ht(n,t))+(c=jt[m])))*((h=n-c)-(i=St(u=h*d,0))*(a=Ht(0,e+=m<<18))-i*(n-(a-c))),b=(f=u*u)*f*Ot(f),a=St(a=3+(f=i*i)+(b+=o*(i+u)),0),w=(p=-7.028461650952758e-9*(y=St(y=(h=i*a)+(d=o*a+(b-(a-3-f))*u),0))+.9617966939259756*(d-(y-h))+Gt[m])-((s=St(s=(l=.9617967009544373*y)+p+(v=Et[m])+(A=N),0))-A-v-l),r[0]=s,r[1]=w,r},fe=function(r,n){var t,e,u,f,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*Lt(u)))-((e=Mt(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r},ie=function(r,n,t){var e,u,f,i,o,a,c,v,y;return y=((v=r&_t|0)>>20)-1023|0,c=0,v>1071644672&&(u=kt(0,((c=r+(zt>>y+1)>>>0)&~(qt>>(y=((c&_t)>>20)-1023|0)))>>>0),c=(c&qt|zt)>>20-y>>>0,r<0&&(c=-c),n-=u),o=(i=.6931471805599453*(t-((u=xt(u=t+n,0))-n))+-1.904654299957768e-9*u)-((a=(f=.6931471824645996*u)+i)-f),e=a-(u=a*a)*Yt(u),r=Wt(a=1-(a*e/(e-2)-(o+a*o)-a)),r=Pt(r),a=(r+=c<<20>>>0)>>20<=0?Vt(a,c):kt(a,r)},oe=2147483647,ae=1083179008,ce=1e300,ve=1e-300,ye=[0,0],le=[0,0];var pe=function r(n,t){var e,u,f,i,o,a,c,v,y,l,p,s,w,A;if(Bt(n)||Bt(t))return NaN;if(Rt(ye,t),o=ye[0],0===ye[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Kt(n);if(-.5===t)return 1/Kt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Dt(t))return ee(n,t)}if(Rt(ye,n),i=ye[0],0===ye[1]){if(0===i)return ne(n,t);if(1===n)return 1;if(-1===n&&Ct(t))return-1;if(Dt(n))return n===$t?r(-0,-t):t<0?0:re}if(n<0&&!1===Jt(t))return(n-n)/(n-n);if(f=Qt(n),e=i&oe|0,u=o&oe|0,c=o>>>31|0,a=(a=i>>>31|0)&&Ct(t)?-1:1,u>1105199104){if(u>1139802112)return te(n,t);if(e<1072693247)return 1===c?a*ce*ce:a*ve*ve;if(e>1072693248)return 0===c?a*ce*ce:a*ve*ve;p=fe(le,f)}else p=ue(le,f,e);if(l=(t-(v=Xt(t,0)))*p[0]+t*p[1],y=v*p[0],Rt(ye,s=l+y),w=Zt(ye[0]),A=Zt(ye[1]),w>=ae){if(0!=(w-ae|A))return a*ce*ce;if(l+8008566259537294e-32>s-y)return a*ce*ce}else if((w&oe)>=1083231232){if(0!=(w-3230714880|A))return a*ve*ve;if(l<=s-y)return a*ve*ve}return a*(s=ie(w,y,l))},se=pe,we=Math.ceil,Ae=n,be=we;var he=bn,de=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Ne=r,Ue=function(r){return r<0?be(r):Ae(r)},me=u,Ie=Er,ge=function(r,n,t){var e,u,f;return f=(e=r-n)-(u=e*e)*de(u),he(1-(n-e*f/(2-f)-r),t)},Fe=1.4426950408889634,Se=1/(1<<28);var He=se,Oe=function(r){var n;return Ne(r)||r===Ie?r:r===me?0:r>709.782712893384?Ie:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Se?1+r:(n=Ue(r<0?Fe*r-.5:Fe*r+.5),ge(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Te=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var je=r,Ee=e,Ge=i,Me=o,Le=n,We=Zn,ke=Er,xe=u,Pe=3.141592653589793,Ve=function(r){var n,t,e;return n=1+(n=1/r)*Te(n),t=Oe(r),2.5066282746310007*(t=r>143.01608?(e=He(r,.5*r-.25))*(e/t):He(r,r-.5)/t)*n},Ye=function(r,n){return n/((1+.5772156649015329*r)*r)},_e=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)};var qe=r,ze=function(r){var n,t,e,u;if(Ee(r)&&r<0||r===xe||je(r))return NaN;if(0===r)return Ge(r)?xe:ke;if(r>171.61447887182297)return ke;if(r<-170.5674972726612)return 0;if((t=Me(r))>33)return r>=0?Ve(r):(n=0==(1&(e=Le(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*We(Pe*u),n*Pe/(Me(u)*Ve(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Ye(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Ye(r,u);u/=r,r+=1}return 2===r?u:u*_e(r-=2)},Be=se,Ce=Er;return function(r,n,t){var e,u,f,i;return qe(r)||qe(n)||qe(t)||r<=0||n<=0?NaN:r<=4?Ce:(u=ze(1-1/r),f=ze(1-2/r),i=ze(1-3/r),e=(ze(1-4/r)-4*i*u+3*f*f)/Be(f-u*u,2),e-=6)}}));
//# sourceMappingURL=bundle.js.map
