!function(n){var e={};function r(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)r.d(t,i,function(e){return n[e]}.bind(null,i));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(n,e,r){"use strict";r.r(e),r.d(e,"count",(function(){return En})),r.d(e,"myButton",(function(){return _n}));(()=>{class n{static id(e){return n.idMap.has(e)||n.idMap.set(e,++n.count),n.idMap.get(e)}}n.idMap=new WeakMap,n.count=0})();function t(n){return 0===n.length?0:n.reduce((n,e)=>(n<<5)+n^e)}var i;!function(n){n[n.AllowHexSpecifier=512]="AllowHexSpecifier"}(i||(i={}));var o=null;try{o=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(n){}function u(n,e,r){this.low=0|n,this.high=0|e,this.unsigned=!!r}function s(n){return!0===(n&&n.__isLong__)}u.prototype.GetHashCode=function(){let n=this.unsigned?1:0;return n=(n<<5)+n^this.high,n=(n<<5)+n^this.low,n},u.prototype.Equals=function(n){return D(this,n)},u.prototype.CompareTo=function(n){return T(this,n)},u.prototype.toString=function(n){return k(this,n)},u.prototype.toJSON=function(){return k(this)},u.prototype.__isLong__,Object.defineProperty(u.prototype,"__isLong__",{value:!0});var f={},c={};function h(n,e){var r,t,i;return e?(i=0<=(n>>>=0)&&n<256)&&(t=c[n])?t:(r=a(n,(0|n)<0?-1:0,!0),i&&(c[n]=r),r):(i=-128<=(n|=0)&&n<128)&&(t=f[n])?t:(r=a(n,n<0?-1:0,!1),i&&(f[n]=r),r)}function l(n,e){if(isNaN(n))return e?x:y;if(e){if(n<0)return x;if(n>=v)return S}else{if(n<=-b)return O;if(n+1>=b)return P}return n<0?F(l(-n,e)):a(n%p|0,n/p|0,e)}function a(n,e,r){return new u(n,e,r)}var g=Math.pow;function d(n,e,r){if(0===n.length)throw Error("empty string");if("NaN"===n||"Infinity"===n||"+Infinity"===n||"-Infinity"===n)return y;if("number"==typeof e?(r=e,e=!1):e=!!e,(r=r||10)<2||36<r)throw RangeError("radix");var t=n.indexOf("-");if(t>0)throw Error("interior hyphen");if(0===t)return F(d(n.substring(1),e,r));for(var i=l(g(r,8)),o=y,u=0;u<n.length;u+=8){var s=Math.min(8,n.length-u),f=parseInt(n.substring(u,u+s),r);if(s<8)o=H(G(o,l(g(r,s))),l(f));else o=H(o=G(o,i),l(f))}return o.unsigned=e,o}function w(n,e){return"number"==typeof n?l(n,e):"string"==typeof n?d(n,e):a(n.low,n.high,"boolean"==typeof e?e:n.unsigned)}var p=4294967296,v=p*p,b=v/2,m=h(1<<24),y=h(0),x=h(0,!0),M=h(1),E=h(1,!0),_=h(-1),P=a(-1,2147483647,!1),S=a(-1,-1,!0),O=a(0,-2147483648,!1);function j(n){return n.unsigned?n.low>>>0:n.low}function N(n){return n.unsigned?(n.high>>>0)*p+(n.low>>>0):n.high*p+(n.low>>>0)}function k(n,e){if((e=e||10)<2||36<e)throw RangeError("radix");if(A(n))return"0";if(I(n)){if(D(n,O)){var r=l(e),t=W(n,r),i=z(G(t,r),n);return k(t,e)+j(i).toString(e)}return"-"+k(F(n),e)}for(var o=l(g(e,6),n.unsigned),u=n,s="";;){var f=W(u,o),c=(j(z(u,G(f,o)))>>>0).toString(e);if(A(u=f))return c+s;for(;c.length<6;)c="0"+c;s=""+c+s}}function A(n){return 0===n.high&&0===n.low}function I(n){return!n.unsigned&&n.high<0}function R(n){return 1==(1&n.low)}function D(n,e){return s(e)||(e=w(e)),(n.unsigned===e.unsigned||n.high>>>31!=1||e.high>>>31!=1)&&(n.high===e.high&&n.low===e.low)}function q(n,e){return T(n,e)<0}function C(n,e){return T(n,e)>0}function L(n,e){return T(n,e)>=0}function T(n,e){if(s(e)||(e=w(e)),D(n,e))return 0;var r=I(n),t=I(e);return r&&!t?-1:!r&&t?1:n.unsigned?e.high>>>0>n.high>>>0||e.high===n.high&&e.low>>>0>n.low>>>0?-1:1:I(z(n,e))?-1:1}function F(n){return!n.unsigned&&D(n,O)?O:H(J(n),M)}function H(n,e){s(e)||(e=w(e));var r=n.high>>>16,t=65535&n.high,i=n.low>>>16,o=65535&n.low,u=e.high>>>16,f=65535&e.high,c=e.low>>>16,h=0,l=0,g=0,d=0;return g+=(d+=o+(65535&e.low))>>>16,l+=(g+=i+c)>>>16,h+=(l+=t+f)>>>16,h+=r+u,a((g&=65535)<<16|(d&=65535),(h&=65535)<<16|(l&=65535),n.unsigned)}function z(n,e){return s(e)||(e=w(e)),H(n,F(e))}function G(n,e){if(A(n))return n.unsigned?x:y;if(s(e)||(e=w(e)),o)return a(o.mul(n.low,n.high,e.low,e.high),o.get_high(),n.unsigned);if(A(e))return n.unsigned?x:y;if(D(n,O))return R(e)?O:y;if(D(e,O))return R(n)?O:y;if(I(n))return I(e)?G(F(n),F(e)):F(G(F(n),e));if(I(e))return F(G(n,F(e)));if(q(n,m)&&q(e,m))return l(N(n)*N(e),n.unsigned);var r=n.high>>>16,t=65535&n.high,i=n.low>>>16,u=65535&n.low,f=e.high>>>16,c=65535&e.high,h=e.low>>>16,g=65535&e.low,d=0,p=0,v=0,b=0;return v+=(b+=u*g)>>>16,p+=(v+=i*g)>>>16,v&=65535,p+=(v+=u*h)>>>16,d+=(p+=t*g)>>>16,p&=65535,d+=(p+=i*h)>>>16,p&=65535,d+=(p+=u*c)>>>16,d+=r*g+t*h+i*c+u*f,a((v&=65535)<<16|(b&=65535),(d&=65535)<<16|(p&=65535),n.unsigned)}function W(n,e){if(s(e)||(e=w(e)),A(e))throw Error("division by zero");var r,t,i;if(o)return n.unsigned||-2147483648!==n.high||-1!==e.low||-1!==e.high?a((n.unsigned?o.div_u:o.div_s)(n.low,n.high,e.low,e.high),o.get_high(),n.unsigned):n;if(A(n))return n.unsigned?x:y;if(n.unsigned){if(e.unsigned||(e=function(n){return n.unsigned?n:a(n.low,n.high,!0)}(e)),C(e,n))return x;if(C(e,X(n,1)))return E;i=x}else{if(D(n,O))return D(e,M)||D(e,_)?O:D(e,O)?M:D(r=U(W(B(n,1),e),1),y)?I(e)?M:_:i=H(r,W(t=z(n,G(e,r)),e));if(D(e,O))return n.unsigned?x:y;if(I(n))return I(e)?W(F(n),F(e)):F(W(F(n),e));if(I(e))return F(W(n,F(e)));i=y}for(t=n;L(t,e);){r=Math.max(1,Math.floor(N(t)/N(e)));for(var u=Math.ceil(Math.log(r)/Math.LN2),f=u<=48?1:g(2,u-48),c=l(r),h=G(c,e);I(h)||C(h,t);)h=G(c=l(r-=f,n.unsigned),e);A(c)&&(c=M),i=H(i,c),t=z(t,h)}return i}function J(n){return a(~n.low,~n.high,n.unsigned)}function U(n,e){return s(e)&&(e=j(e)),0==(e&=63)?n:e<32?a(n.low<<e,n.high<<e|n.low>>>32-e,n.unsigned):a(0,n.low<<e-32,n.unsigned)}function B(n,e){return s(e)&&(e=j(e)),0==(e&=63)?n:e<32?a(n.low>>>e|n.high<<32-e,n.high>>e,n.unsigned):a(n.high>>e-32,n.high>=0?0:-1,n.unsigned)}function X(n,e){if(s(e)&&(e=j(e)),0===(e&=63))return n;var r=n.high;return e<32?a(n.low>>>e|r<<32-e,r>>>e,n.unsigned):a(32===e?r:r>>>e-32,0,n.unsigned)}var Y=u;const $=G,K=T,Q=function(n,e,r){return r?function(n,e){return new u(n[0]|n[1]<<8|n[2]<<16|n[3]<<24,n[4]|n[5]<<8|n[6]<<16|n[7]<<24,e)}(n,e):function(n,e){return new u(n[4]<<24|n[5]<<16|n[6]<<8|n[7],n[0]<<24|n[1]<<16|n[2]<<8|n[3],e)}(n,e)},V=function(n,e){return e?function(n){var e=n.high,r=n.low;return[255&r,r>>>8&255,r>>>16&255,r>>>24,255&e,e>>>8&255,e>>>16&255,e>>>24]}(n):function(n){var e=n.high,r=n.low;return[e>>>24,e>>>16&255,e>>>8&255,255&e,r>>>24,r>>>16&255,r>>>8&255,255&r]}(n)},Z=k;var nn={GetHashCode(){return t([this.s,this.e].concat(this.c))},Equals(n){return!this.cmp(n)},CompareTo(n){return this.cmp(n)}},en="[big.js] ",rn=en+"Invalid ",tn=rn+"decimal places",on=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function un(n,e){var r,t,i;if(0===e&&1/e<0)e="-0";else if(!on.test(e+=""))throw Error(rn+"number");for(n.s="-"==e.charAt(0)?(e=e.slice(1),-1):1,(r=e.indexOf("."))>-1&&(e=e.replace(".","")),(t=e.search(/e/i))>0?(r<0&&(r=t),r+=+e.slice(t+1),e=e.substring(0,t)):r<0&&(r=e.length),i=e.length,t=0;t<r&&t<i&&"0"==e.charAt(t);)++t;if(t==i)n.c=[n.e=0];else for(n.e=r-t-1,n.c=[],r=0;t<i;)n.c[r++]=+e.charAt(t++);return n=sn(n,cn.DP,cn.RM)}function sn(n,e,r,t){var i=n.c,o=n.e+e+1;if(o<i.length){if(1===r)t=i[o]>=5;else if(2===r)t=i[o]>5||5==i[o]&&(t||o<0||void 0!==i[o+1]||1&i[o-1]);else if(3===r)t=t||!!i[0];else if(t=!1,0!==r)throw Error("[big.js] Invalid rounding mode");if(o<1)i.length=1,t?(n.e=-e,i[0]=1):i[0]=n.e=0;else{if(i.length=o--,t)for(;++i[o]>9;)i[o]=0,o--||(++n.e,i.unshift(1));for(o=i.length;!i[--o];)i.pop()}}else if(r<0||r>3||r!==~~r)throw Error("[big.js] Invalid rounding mode");return n}function fn(n,e,r,t){var i,o,u=n.constructor,s=!n.c[0];if(void 0!==r){if(r!==~~r||r<(3==e)||r>1e6)throw Error(3==e?rn+"precision":tn);for(r=t-(n=new u(n)).e,n.c.length>++t&&sn(n,r,u.RM),2==e&&(t=n.e+r+1);n.c.length<t;)n.c.push(0)}if(i=n.e,r=(o=n.c.join("")).length,2!=e&&(1==e||3==e&&t<=i||i<=u.NE||i>=u.PE))o=o.charAt(0)+(r>1?"."+o.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)o="0"+o;o="0."+o}else if(i>0)if(++i>r)for(i-=r;i--;)o+="0";else i<r&&(o=o.slice(0,i)+"."+o.slice(i));else r>1&&(o=o.charAt(0)+"."+o.slice(1));return n.s<0&&(!s||4==e)?"-"+o:o}nn.abs=function(){var n=new this.constructor(this);return n.s=1,n},nn.cmp=function(n){var e,r=this.constructor,t=new r(this),i=(n=new r(n),t.c),o=n.c,u=t.s,s=n.s,f=t.e,c=n.e;if(!i[0]||!o[0])return i[0]?u:o[0]?-s:0;if(u!=s)return u;if(e=u<0,f!=c)return f>c^e?1:-1;for(s=Math.max(i.length,o.length),u=0;u<s;u++)if((f=u<i.length?i[u]:0)!=(c=u<o.length?o[u]:0))return f>c^e?1:-1;return 0},nn.div=function(n){var e=this.constructor,r=new e(this),t=(n=new e(n),r.c),i=n.c,o=r.s==n.s?1:-1,u=e.DP;if(u!==~~u||u<0||u>1e6)throw Error(tn);if(!i[0])throw Error("[big.js] Division by zero");if(!t[0])return new e(0*o);var s,f,c,h,l,a=i.slice(),g=s=i.length,d=t.length,w=t.slice(0,s),p=w.length,v=n,b=v.c=[],m=0,y=u+(v.e=r.e-n.e)+1;for(v.s=o,o=y<0?0:y,a.unshift(0);p++<s;)w.push(0);do{for(c=0;c<10;c++){if(s!=(p=w.length))h=s>p?1:-1;else for(l=-1,h=0;++l<s;)if(i[l]!=w[l]){h=i[l]>w[l]?1:-1;break}if(!(h<0))break;for(f=p==s?i:a;p;){if(w[--p]<f[p]){for(l=p;l&&!w[--l];)w[l]=9;--w[l],w[p]+=10}w[p]-=f[p]}for(;!w[0];)w.shift()}b[m++]=h?c:++c,w[0]&&h?w[p]=t[g]||0:w=[t[g]]}while((g++<d||void 0!==w[0])&&o--);return b[0]||1==m||(b.shift(),v.e--),m>y&&sn(v,u,e.RM,void 0!==w[0]),v},nn.eq=function(n){return!this.cmp(n)},nn.gt=function(n){return this.cmp(n)>0},nn.gte=function(n){return this.cmp(n)>-1},nn.lt=function(n){return this.cmp(n)<0},nn.lte=function(n){return this.cmp(n)<1},nn.minus=nn.sub=function(n){var e,r,t,i,o=this.constructor,u=new o(this),s=(n=new o(n),u.s),f=n.s;if(s!=f)return n.s=-f,u.plus(n);var c=u.c.slice(),h=u.e,l=n.c,a=n.e;if(!c[0]||!l[0])return l[0]?(n.s=-f,n):new o(c[0]?u:0);if(s=h-a){for((i=s<0)?(s=-s,t=c):(a=h,t=l),t.reverse(),f=s;f--;)t.push(0);t.reverse()}else for(r=((i=c.length<l.length)?c:l).length,s=f=0;f<r;f++)if(c[f]!=l[f]){i=c[f]<l[f];break}if(i&&(t=c,c=l,l=t,n.s=-n.s),(f=(r=l.length)-(e=c.length))>0)for(;f--;)c[e++]=0;for(f=e;r>s;){if(c[--r]<l[r]){for(e=r;e&&!c[--e];)c[e]=9;--c[e],c[r]+=10}c[r]-=l[r]}for(;0===c[--f];)c.pop();for(;0===c[0];)c.shift(),--a;return c[0]||(n.s=1,c=[a=0]),n.c=c,n.e=a,n},nn.mod=function(n){var e,r=this.constructor,t=new r(this),i=(n=new r(n),t.s),o=n.s;if(!n.c[0])throw Error("[big.js] Division by zero");return t.s=n.s=1,e=1==n.cmp(t),t.s=i,n.s=o,e?new r(t):(i=r.DP,o=r.RM,r.DP=r.RM=0,t=t.div(n),r.DP=i,r.RM=o,this.minus(t.times(n)))},nn.plus=nn.add=function(n){var e,r=this.constructor,t=new r(this),i=(n=new r(n),t.s),o=n.s;if(i!=o)return n.s=-o,t.minus(n);var u=t.e,s=t.c,f=n.e,c=n.c;if(!s[0]||!c[0])return c[0]?n:new r(s[0]?t:0*i);if(s=s.slice(),i=u-f){for(i>0?(f=u,e=c):(i=-i,e=s),e.reverse();i--;)e.push(0);e.reverse()}for(s.length-c.length<0&&(e=c,c=s,s=e),i=c.length,o=0;i;s[i]%=10)o=(s[--i]=s[i]+c[i]+o)/10|0;for(o&&(s.unshift(o),++f),i=s.length;0===s[--i];)s.pop();return n.c=s,n.e=f,n},nn.pow=function(n){var e=this.constructor,r=new e(this),t=new e(1),i=new e(1),o=n<0;if(n!==~~n||n<-1e6||n>1e6)throw Error(rn+"exponent");for(o&&(n=-n);1&n&&(t=t.times(r)),n>>=1;)r=r.times(r);return o?i.div(t):t},nn.round=function(n,e){var r=this.constructor;if(void 0===n)n=0;else if(n!==~~n||n<-1e6||n>1e6)throw Error(tn);return sn(new r(this),n,void 0===e?r.RM:e)},nn.sqrt=function(){var n,e,r,t=this.constructor,i=new t(this),o=i.s,u=i.e,s=new t(.5);if(!i.c[0])return new t(i);if(o<0)throw Error(en+"No square root");0===(o=Math.sqrt(i+""))||o===1/0?((e=i.c.join("")).length+u&1||(e+="0"),u=((u+1)/2|0)-(u<0||1&u),n=new t(((o=Math.sqrt(e))==1/0?"1e":(o=o.toExponential()).slice(0,o.indexOf("e")+1))+u)):n=new t(o),u=n.e+(t.DP+=4);do{r=n,n=s.times(r.plus(i.div(r)))}while(r.c.slice(0,u).join("")!==n.c.slice(0,u).join(""));return sn(n,t.DP-=4,t.RM)},nn.times=nn.mul=function(n){var e,r=this.constructor,t=new r(this),i=(n=new r(n),t.c),o=n.c,u=i.length,s=o.length,f=t.e,c=n.e;if(n.s=t.s==n.s?1:-1,!i[0]||!o[0])return new r(0*n.s);for(n.e=f+c,u<s&&(e=i,i=o,o=e,c=u,u=s,s=c),e=new Array(c=u+s);c--;)e[c]=0;for(f=s;f--;){for(s=0,c=u+f;c>f;)s=e[c]+o[f]*i[c-f-1]+s,e[c--]=s%10,s=s/10|0;e[c]=(e[c]+s)%10}for(s?++n.e:e.shift(),f=e.length;!e[--f];)e.pop();return n.c=e,n},nn.toExponential=function(n){return fn(this,1,n,n)},nn.toFixed=function(n){return fn(this,2,n,this.e+n)},nn.toPrecision=function(n){return fn(this,3,n,n-1)},nn.toString=function(){return fn(this)},nn.valueOf=nn.toJSON=function(){return fn(this,4)};var cn=function n(){function e(r){var t=this;if(!(t instanceof e))return void 0===r?n():new e(r);r instanceof e?(t.s=r.s,t.e=r.e,t.c=r.c.slice(),function(n){if((n=sn(n,28,0)).c.length>1&&!n.c[0]){let e=n.c.findIndex(n=>n);n.c=n.c.slice(e),n.e=n.e-e}}(t)):un(t,r),t.constructor=e}return e.prototype=nn,e.DP=28,e.RM=1,e.NE=-29,e.PE=29,e.version="5.2.2",e}(),hn=cn,ln=hn;new hn(0),new hn(1),new hn(-1),new hn("79228162514264337593543950335"),new hn("-79228162514264337593543950335");const an=/(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w)/;function gn(n){return"number"==typeof n||n instanceof Y||n instanceof ln}function dn(n,e){return n instanceof Y?K(n,e)<0:n instanceof ln?n.cmp(e)<0:n<e}function wn(n,e){return n instanceof Y?$(n,e):n instanceof ln?n.mul(e):n*e}function pn(n,e){return n instanceof Y?String(n)+(0).toFixed(e).substr(1):n.toFixed(e)}function vn(n,e){return n instanceof Y?String(n)+(0).toPrecision(e).substr(1):n.toPrecision(e)}function bn(n,e){return n instanceof Y?String(n)+(0).toExponential(e).substr(1):n.toExponential(e)}function mn(n){return n instanceof Y?Z(n.unsigned?n:Q(V(n),!0),16):(Number(n)>>>0).toString(16)}function yn(n){return{input:n,cont:(e=n,n=>an.test(e)?function n(e,r){return(...t)=>{let i=e;for(const n of t)i=xn(i,n);return an.test(i)?n(i,r):r(i.replace(/%%/g,"%"))}}(e,n):n(e))};var e}function xn(n,e){return n.replace(an,(n,r,t,i,o,u)=>{let s="";if(gn(e))switch("x"!==u.toLowerCase()&&(dn(e,0)?(e=wn(e,-1),s="-"):t.indexOf(" ")>=0?s=" ":t.indexOf("+")>=0&&(s="+")),o=null==o?null:parseInt(o,10),u){case"f":case"F":e=pn(e,o=null!=o?o:6);break;case"g":case"G":e=null!=o?vn(e,o):vn(e);break;case"e":case"E":e=null!=o?bn(e,o):bn(e);break;case"x":e=mn(e);break;case"X":e=mn(e).toUpperCase();break;default:e=String(e)}if(i=parseInt(i,10),isNaN(i))e=s+e;else{const n=t.indexOf("0")>=0,r=t.indexOf("-")>=0,o=r||!n?" ":"0";e="0"===o?s+(e=Mn(e,i-s.length,o,r)):Mn(s+e,i,o,r)}return(r+e).replace(/%/g,"%%")})}function Mn(n,e,r,t){r=r||" ",e-=n.length;for(let i=0;i<e;i++)n=t?n+r:r+n;return n}const En=function(n){let e=n;return(n,r)=>r?void(e=n):e}(0),_n=document.querySelector(".my-button");_n.onclick=function(n){En(En()+1,!0);const e=0|En(),r=yn("You clicked: %i time(s)").cont(n=>n);_n.innerText=r(e)}}]);