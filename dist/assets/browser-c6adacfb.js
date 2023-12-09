import{aj as A,m as Qt,y,x as Vt,u as Xt,ae as Zt,Y as Wt}from"./index-ec16bbbc.js";var Q=A.Buffer,wt=Qt.Transform,jt=y;function t0(t,r){if(!Q.isBuffer(t)&&typeof t!="string")throw new TypeError(r+" must be a string or a buffer")}function k(t){wt.call(this),this._block=Q.allocUnsafe(t),this._blockSize=t,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}jt(k,wt);k.prototype._transform=function(t,r,e){var i=null;try{this.update(t,r)}catch(h){i=h}e(i)};k.prototype._flush=function(t){var r=null;try{this.push(this.digest())}catch(e){r=e}t(r)};k.prototype.update=function(t,r){if(t0(t,"Data"),this._finalized)throw new Error("Digest already called");Q.isBuffer(t)||(t=Q.from(t,r));for(var e=this._block,i=0;this._blockOffset+t.length-i>=this._blockSize;){for(var h=this._blockOffset;h<this._blockSize;)e[h++]=t[i++];this._update(),this._blockOffset=0}for(;i<t.length;)e[this._blockOffset++]=t[i++];for(var s=0,a=t.length*8;a>0;++s)this._length[s]+=a,a=this._length[s]/4294967296|0,a>0&&(this._length[s]-=4294967296*a);return this};k.prototype._update=function(){throw new Error("_update is not implemented")};k.prototype.digest=function(t){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var r=this._digest();t!==void 0&&(r=r.toString(t)),this._block.fill(0),this._blockOffset=0;for(var e=0;e<4;++e)this._length[e]=0;return r};k.prototype._digest=function(){throw new Error("_digest is not implemented")};var Et=k,r0=y,gt=Et,e0=A.Buffer,i0=new Array(16);function V(){gt.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878}r0(V,gt);V.prototype._update=function(){for(var t=i0,r=0;r<16;++r)t[r]=this._block.readInt32LE(r*4);var e=this._a,i=this._b,h=this._c,s=this._d;e=u(e,i,h,s,t[0],3614090360,7),s=u(s,e,i,h,t[1],3905402710,12),h=u(h,s,e,i,t[2],606105819,17),i=u(i,h,s,e,t[3],3250441966,22),e=u(e,i,h,s,t[4],4118548399,7),s=u(s,e,i,h,t[5],1200080426,12),h=u(h,s,e,i,t[6],2821735955,17),i=u(i,h,s,e,t[7],4249261313,22),e=u(e,i,h,s,t[8],1770035416,7),s=u(s,e,i,h,t[9],2336552879,12),h=u(h,s,e,i,t[10],4294925233,17),i=u(i,h,s,e,t[11],2304563134,22),e=u(e,i,h,s,t[12],1804603682,7),s=u(s,e,i,h,t[13],4254626195,12),h=u(h,s,e,i,t[14],2792965006,17),i=u(i,h,s,e,t[15],1236535329,22),e=l(e,i,h,s,t[1],4129170786,5),s=l(s,e,i,h,t[6],3225465664,9),h=l(h,s,e,i,t[11],643717713,14),i=l(i,h,s,e,t[0],3921069994,20),e=l(e,i,h,s,t[5],3593408605,5),s=l(s,e,i,h,t[10],38016083,9),h=l(h,s,e,i,t[15],3634488961,14),i=l(i,h,s,e,t[4],3889429448,20),e=l(e,i,h,s,t[9],568446438,5),s=l(s,e,i,h,t[14],3275163606,9),h=l(h,s,e,i,t[3],4107603335,14),i=l(i,h,s,e,t[8],1163531501,20),e=l(e,i,h,s,t[13],2850285829,5),s=l(s,e,i,h,t[2],4243563512,9),h=l(h,s,e,i,t[7],1735328473,14),i=l(i,h,s,e,t[12],2368359562,20),e=v(e,i,h,s,t[5],4294588738,4),s=v(s,e,i,h,t[8],2272392833,11),h=v(h,s,e,i,t[11],1839030562,16),i=v(i,h,s,e,t[14],4259657740,23),e=v(e,i,h,s,t[1],2763975236,4),s=v(s,e,i,h,t[4],1272893353,11),h=v(h,s,e,i,t[7],4139469664,16),i=v(i,h,s,e,t[10],3200236656,23),e=v(e,i,h,s,t[13],681279174,4),s=v(s,e,i,h,t[0],3936430074,11),h=v(h,s,e,i,t[3],3572445317,16),i=v(i,h,s,e,t[6],76029189,23),e=v(e,i,h,s,t[9],3654602809,4),s=v(s,e,i,h,t[12],3873151461,11),h=v(h,s,e,i,t[15],530742520,16),i=v(i,h,s,e,t[2],3299628645,23),e=p(e,i,h,s,t[0],4096336452,6),s=p(s,e,i,h,t[7],1126891415,10),h=p(h,s,e,i,t[14],2878612391,15),i=p(i,h,s,e,t[5],4237533241,21),e=p(e,i,h,s,t[12],1700485571,6),s=p(s,e,i,h,t[3],2399980690,10),h=p(h,s,e,i,t[10],4293915773,15),i=p(i,h,s,e,t[1],2240044497,21),e=p(e,i,h,s,t[8],1873313359,6),s=p(s,e,i,h,t[15],4264355552,10),h=p(h,s,e,i,t[6],2734768916,15),i=p(i,h,s,e,t[13],1309151649,21),e=p(e,i,h,s,t[4],4149444226,6),s=p(s,e,i,h,t[11],3174756917,10),h=p(h,s,e,i,t[2],718787259,15),i=p(i,h,s,e,t[9],3951481745,21),this._a=this._a+e|0,this._b=this._b+i|0,this._c=this._c+h|0,this._d=this._d+s|0};V.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var t=e0.allocUnsafe(16);return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,12),t};function X(t,r){return t<<r|t>>>32-r}function u(t,r,e,i,h,s,a){return X(t+(r&e|~r&i)+h+s|0,a)+r|0}function l(t,r,e,i,h,s,a){return X(t+(r&i|e&~i)+h+s|0,a)+r|0}function v(t,r,e,i,h,s,a){return X(t+(r^e^i)+h+s|0,a)+r|0}function p(t,r,e,i,h,s,a){return X(t+(e^(r|~i))+h+s|0,a)+r|0}var h0=V,et=Vt.Buffer,s0=y,yt=Et,a0=new Array(16),M=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],R=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],T=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],G=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],K=[0,1518500249,1859775393,2400959708,2840853838],P=[1352829926,1548603684,1836072691,2053994217,0];function Z(){yt.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520}s0(Z,yt);Z.prototype._update=function(){for(var t=a0,r=0;r<16;++r)t[r]=this._block.readInt32LE(r*4);for(var e=this._a|0,i=this._b|0,h=this._c|0,s=this._d|0,a=this._e|0,f=this._a|0,c=this._b|0,o=this._c|0,_=this._d|0,x=this._e|0,n=0;n<80;n+=1){var w,B;n<16?(w=ct(e,i,h,s,a,t[M[n]],K[0],T[n]),B=dt(f,c,o,_,x,t[R[n]],P[0],G[n])):n<32?(w=ot(e,i,h,s,a,t[M[n]],K[1],T[n]),B=bt(f,c,o,_,x,t[R[n]],P[1],G[n])):n<48?(w=xt(e,i,h,s,a,t[M[n]],K[2],T[n]),B=xt(f,c,o,_,x,t[R[n]],P[2],G[n])):n<64?(w=bt(e,i,h,s,a,t[M[n]],K[3],T[n]),B=ot(f,c,o,_,x,t[R[n]],P[3],G[n])):(w=dt(e,i,h,s,a,t[M[n]],K[4],T[n]),B=ct(f,c,o,_,x,t[R[n]],P[4],G[n])),e=a,a=s,s=m(h,10),h=i,i=w,f=x,x=_,_=m(o,10),o=c,c=B}var C=this._b+h+_|0;this._b=this._c+s+x|0,this._c=this._d+a+f|0,this._d=this._e+e+c|0,this._e=this._a+i+o|0,this._a=C};Z.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var t=et.alloc?et.alloc(20):new et(20);return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,12),t.writeInt32LE(this._e,16),t};function m(t,r){return t<<r|t>>>32-r}function ct(t,r,e,i,h,s,a,f){return m(t+(r^e^i)+s+a|0,f)+h|0}function ot(t,r,e,i,h,s,a,f){return m(t+(r&e|~r&i)+s+a|0,f)+h|0}function xt(t,r,e,i,h,s,a,f){return m(t+((r|~e)^i)+s+a|0,f)+h|0}function bt(t,r,e,i,h,s,a,f){return m(t+(r&i|e&~i)+s+a|0,f)+h|0}function dt(t,r,e,i,h,s,a,f){return m(t+(r^(e|~i))+s+a|0,f)+h|0}var f0=Z,It={exports:{}},At=A.Buffer;function W(t,r){this._block=At.alloc(t),this._finalSize=r,this._blockSize=t,this._len=0}W.prototype.update=function(t,r){typeof t=="string"&&(r=r||"utf8",t=At.from(t,r));for(var e=this._block,i=this._blockSize,h=t.length,s=this._len,a=0;a<h;){for(var f=s%i,c=Math.min(h-a,i-f),o=0;o<c;o++)e[f+o]=t[a+o];s+=c,a+=c,s%i===0&&this._update(e)}return this._len+=h,this};W.prototype.digest=function(t){var r=this._len%this._blockSize;this._block[r]=128,this._block.fill(0,r+1),r>=this._finalSize&&(this._update(this._block),this._block.fill(0));var e=this._len*8;if(e<=4294967295)this._block.writeUInt32BE(e,this._blockSize-4);else{var i=(e&4294967295)>>>0,h=(e-i)/4294967296;this._block.writeUInt32BE(h,this._blockSize-8),this._block.writeUInt32BE(i,this._blockSize-4)}this._update(this._block);var s=this._hash();return t?s.toString(t):s};W.prototype._update=function(){throw new Error("_update must be implemented by subclass")};var H=W,n0=y,$t=H,_0=A.Buffer,c0=[1518500249,1859775393,-1894007588,-899497514],o0=new Array(80);function Y(){this.init(),this._w=o0,$t.call(this,64,56)}n0(Y,$t);Y.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this};function x0(t){return t<<5|t>>>27}function b0(t){return t<<30|t>>>2}function d0(t,r,e,i){return t===0?r&e|~r&i:t===2?r&e|r&i|e&i:r^e^i}Y.prototype._update=function(t){for(var r=this._w,e=this._a|0,i=this._b|0,h=this._c|0,s=this._d|0,a=this._e|0,f=0;f<16;++f)r[f]=t.readInt32BE(f*4);for(;f<80;++f)r[f]=r[f-3]^r[f-8]^r[f-14]^r[f-16];for(var c=0;c<80;++c){var o=~~(c/20),_=x0(e)+d0(o,i,h,s)+a+r[c]+c0[o]|0;a=s,s=h,h=b0(i),i=e,e=_}this._a=e+this._a|0,this._b=i+this._b|0,this._c=h+this._c|0,this._d=s+this._d|0,this._e=a+this._e|0};Y.prototype._hash=function(){var t=_0.allocUnsafe(20);return t.writeInt32BE(this._a|0,0),t.writeInt32BE(this._b|0,4),t.writeInt32BE(this._c|0,8),t.writeInt32BE(this._d|0,12),t.writeInt32BE(this._e|0,16),t};var u0=Y,l0=y,kt=H,v0=A.Buffer,p0=[1518500249,1859775393,-1894007588,-899497514],B0=new Array(80);function q(){this.init(),this._w=B0,kt.call(this,64,56)}l0(q,kt);q.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this};function w0(t){return t<<1|t>>>31}function E0(t){return t<<5|t>>>27}function g0(t){return t<<30|t>>>2}function y0(t,r,e,i){return t===0?r&e|~r&i:t===2?r&e|r&i|e&i:r^e^i}q.prototype._update=function(t){for(var r=this._w,e=this._a|0,i=this._b|0,h=this._c|0,s=this._d|0,a=this._e|0,f=0;f<16;++f)r[f]=t.readInt32BE(f*4);for(;f<80;++f)r[f]=w0(r[f-3]^r[f-8]^r[f-14]^r[f-16]);for(var c=0;c<80;++c){var o=~~(c/20),_=E0(e)+y0(o,i,h,s)+a+r[c]+p0[o]|0;a=s,s=h,h=g0(i),i=e,e=_}this._a=e+this._a|0,this._b=i+this._b|0,this._c=h+this._c|0,this._d=s+this._d|0,this._e=a+this._e|0};q.prototype._hash=function(){var t=v0.allocUnsafe(20);return t.writeInt32BE(this._a|0,0),t.writeInt32BE(this._b|0,4),t.writeInt32BE(this._c|0,8),t.writeInt32BE(this._d|0,12),t.writeInt32BE(this._e|0,16),t};var I0=q,A0=y,Ct=H,$0=A.Buffer,k0=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],C0=new Array(64);function N(){this.init(),this._w=C0,Ct.call(this,64,56)}A0(N,Ct);N.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this};function D0(t,r,e){return e^t&(r^e)}function m0(t,r,e){return t&r|e&(t|r)}function F0(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function S0(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function H0(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}function O0(t){return(t>>>17|t<<15)^(t>>>19|t<<13)^t>>>10}N.prototype._update=function(t){for(var r=this._w,e=this._a|0,i=this._b|0,h=this._c|0,s=this._d|0,a=this._e|0,f=this._f|0,c=this._g|0,o=this._h|0,_=0;_<16;++_)r[_]=t.readInt32BE(_*4);for(;_<64;++_)r[_]=O0(r[_-2])+r[_-7]+H0(r[_-15])+r[_-16]|0;for(var x=0;x<64;++x){var n=o+S0(a)+D0(a,f,c)+k0[x]+r[x]|0,w=F0(e)+m0(e,i,h)|0;o=c,c=f,f=a,a=s+n|0,s=h,h=i,i=e,e=n+w|0}this._a=e+this._a|0,this._b=i+this._b|0,this._c=h+this._c|0,this._d=s+this._d|0,this._e=a+this._e|0,this._f=f+this._f|0,this._g=c+this._g|0,this._h=o+this._h|0};N.prototype._hash=function(){var t=$0.allocUnsafe(32);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t};var Dt=N,L0=y,U0=Dt,z0=H,M0=A.Buffer,R0=new Array(64);function j(){this.init(),this._w=R0,z0.call(this,64,56)}L0(j,U0);j.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this};j.prototype._hash=function(){var t=M0.allocUnsafe(28);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t};var T0=j,G0=y,mt=H,K0=A.Buffer,ut=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],P0=new Array(160);function J(){this.init(),this._w=P0,mt.call(this,128,112)}G0(J,mt);J.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this};function lt(t,r,e){return e^t&(r^e)}function vt(t,r,e){return t&r|e&(t|r)}function pt(t,r){return(t>>>28|r<<4)^(r>>>2|t<<30)^(r>>>7|t<<25)}function Bt(t,r){return(t>>>14|r<<18)^(t>>>18|r<<14)^(r>>>9|t<<23)}function Y0(t,r){return(t>>>1|r<<31)^(t>>>8|r<<24)^t>>>7}function q0(t,r){return(t>>>1|r<<31)^(t>>>8|r<<24)^(t>>>7|r<<25)}function N0(t,r){return(t>>>19|r<<13)^(r>>>29|t<<3)^t>>>6}function J0(t,r){return(t>>>19|r<<13)^(r>>>29|t<<3)^(t>>>6|r<<26)}function d(t,r){return t>>>0<r>>>0?1:0}J.prototype._update=function(t){for(var r=this._w,e=this._ah|0,i=this._bh|0,h=this._ch|0,s=this._dh|0,a=this._eh|0,f=this._fh|0,c=this._gh|0,o=this._hh|0,_=this._al|0,x=this._bl|0,n=this._cl|0,w=this._dl|0,B=this._el|0,C=this._fl|0,O=this._gl|0,L=this._hl|0,b=0;b<32;b+=2)r[b]=t.readInt32BE(b*4),r[b+1]=t.readInt32BE(b*4+4);for(;b<160;b+=2){var U=r[b-30],z=r[b-15*2+1],Lt=Y0(U,z),it=q0(z,U);U=r[b-2*2],z=r[b-2*2+1];var Ut=N0(U,z),ht=J0(z,U),zt=r[b-7*2],Mt=r[b-7*2+1],Rt=r[b-16*2],st=r[b-16*2+1],g=it+Mt|0,D=Lt+zt+d(g,it)|0;g=g+ht|0,D=D+Ut+d(g,ht)|0,g=g+st|0,D=D+Rt+d(g,st)|0,r[b]=D,r[b+1]=g}for(var S=0;S<160;S+=2){D=r[S],g=r[S+1];var Tt=vt(e,i,h),Gt=vt(_,x,n),Kt=pt(e,_),at=pt(_,e),Pt=Bt(a,B),Yt=Bt(B,a),qt=ut[S],ft=ut[S+1],Nt=lt(a,f,c),nt=lt(B,C,O),E=L+Yt|0,$=o+Pt+d(E,L)|0;E=E+nt|0,$=$+Nt+d(E,nt)|0,E=E+ft|0,$=$+qt+d(E,ft)|0,E=E+g|0,$=$+D+d(E,g)|0;var _t=at+Gt|0,Jt=Kt+Tt+d(_t,at)|0;o=c,L=O,c=f,O=C,f=a,C=B,B=w+E|0,a=s+$+d(B,w)|0,s=h,w=n,h=i,n=x,i=e,x=_,_=E+_t|0,e=$+Jt+d(_,E)|0}this._al=this._al+_|0,this._bl=this._bl+x|0,this._cl=this._cl+n|0,this._dl=this._dl+w|0,this._el=this._el+B|0,this._fl=this._fl+C|0,this._gl=this._gl+O|0,this._hl=this._hl+L|0,this._ah=this._ah+e+d(this._al,_)|0,this._bh=this._bh+i+d(this._bl,x)|0,this._ch=this._ch+h+d(this._cl,n)|0,this._dh=this._dh+s+d(this._dl,w)|0,this._eh=this._eh+a+d(this._el,B)|0,this._fh=this._fh+f+d(this._fl,C)|0,this._gh=this._gh+c+d(this._gl,O)|0,this._hh=this._hh+o+d(this._hl,L)|0};J.prototype._hash=function(){var t=K0.allocUnsafe(64);function r(e,i,h){t.writeInt32BE(e,h),t.writeInt32BE(i,h+4)}return r(this._ah,this._al,0),r(this._bh,this._bl,8),r(this._ch,this._cl,16),r(this._dh,this._dl,24),r(this._eh,this._el,32),r(this._fh,this._fl,40),r(this._gh,this._gl,48),r(this._hh,this._hl,56),t};var Ft=J,Q0=y,V0=Ft,X0=H,Z0=A.Buffer,W0=new Array(160);function tt(){this.init(),this._w=W0,X0.call(this,128,112)}Q0(tt,V0);tt.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this};tt.prototype._hash=function(){var t=Z0.allocUnsafe(48);function r(e,i,h){t.writeInt32BE(e,h),t.writeInt32BE(i,h+4)}return r(this._ah,this._al,0),r(this._bh,this._bl,8),r(this._ch,this._cl,16),r(this._dh,this._dl,24),r(this._eh,this._el,32),r(this._fh,this._fl,40),t};var j0=tt,F=It.exports=function(r){r=r.toLowerCase();var e=F[r];if(!e)throw new Error(r+" is not supported (we accept pull requests)");return new e};F.sha=u0;F.sha1=I0;F.sha224=T0;F.sha256=Dt;F.sha384=j0;F.sha512=Ft;var tr=It.exports,St=A.Buffer,Ht=Xt.Transform,rr=Zt.StringDecoder,er=y;function I(t){Ht.call(this),this.hashMode=typeof t=="string",this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}er(I,Ht);I.prototype.update=function(t,r,e){typeof t=="string"&&(t=St.from(t,r));var i=this._update(t);return this.hashMode?this:(e&&(i=this._toString(i,e)),i)};I.prototype.setAutoPadding=function(){};I.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")};I.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")};I.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")};I.prototype._transform=function(t,r,e){var i;try{this.hashMode?this._update(t):this.push(this._update(t))}catch(h){i=h}finally{e(i)}};I.prototype._flush=function(t){var r;try{this.push(this.__final())}catch(e){r=e}t(r)};I.prototype._finalOrDigest=function(t){var r=this.__final()||St.alloc(0);return t&&(r=this._toString(r,t,!0)),r};I.prototype._toString=function(t,r,e){if(this._decoder||(this._decoder=new rr(r),this._encoding=r),this._encoding!==r)throw new Error("can't switch encodings");var i=this._decoder.write(t);return e&&(i+=this._decoder.end()),i};var ir=I,hr=y,sr=h0,ar=f0,fr=tr,Ot=ir;function rt(t){Ot.call(this,"digest"),this._hash=t}hr(rt,Ot);rt.prototype._update=function(t){this._hash.update(t)};rt.prototype._final=function(){return this._hash.digest()};var nr=function(r){return r=r.toLowerCase(),r==="md5"?new sr:r==="rmd160"||r==="ripemd160"?new ar:new rt(fr(r))};const cr=Wt(nr);export{nr as b,cr as c};
