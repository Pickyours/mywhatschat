import{A as N}from"./app-a39c937f.js";import{_ as W,a as A}from"./_baseGetTag-fe27dbe8.js";function C(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var E=C,M=W,B=function(){return M.Date.now()},F=B,R=/\s/;function D(e){for(var n=e.length;n--&&R.test(e.charAt(n)););return n}var G=D,H=G,P=/^\s+/;function U(e){return e&&e.slice(0,H(e)+1).replace(P,"")}var X=U;function q(e){return e!=null&&typeof e=="object"}var w=q,z=A,J=w,K="[object Symbol]";function Q(e){return typeof e=="symbol"||J(e)&&z(e)==K}var V=Q,Y=X,$=E,Z=V,h=0/0,ee=/^[-+]0x[0-9a-f]+$/i,ne=/^0b[01]+$/i,re=/^0o[0-7]+$/i,te=parseInt;function ie(e){if(typeof e=="number")return e;if(Z(e))return h;if($(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=$(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Y(e);var i=ne.test(e);return i||re.test(e)?te(e.slice(2),i?2:8):ee.test(e)?h:+e}var ae=ie,oe=E,y=F,j=ae,fe="Expected a function",se=Math.max,ue=Math.min;function ce(e,n,i){var f,u,b,s,t,o,c=0,x=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(fe);n=j(n)||0,oe(i)&&(x=!!i.leading,m="maxWait"in i,b=m?se(j(i.maxWait)||0,n):b,v="trailing"in i?!!i.trailing:v);function g(r){var a=f,d=u;return f=u=void 0,c=r,s=e.apply(d,a),s}function O(r){return c=r,t=setTimeout(l,n),x?g(r):s}function k(r){var a=r-o,d=r-c,_=n-a;return m?ue(_,b-d):_}function p(r){var a=r-o,d=r-c;return o===void 0||a>=n||a<0||m&&d>=b}function l(){var r=y();if(p(r))return I(r);t=setTimeout(l,k(r))}function I(r){return t=void 0,v&&f?g(r):(f=u=void 0,s)}function S(){t!==void 0&&clearTimeout(t),c=0,f=o=u=t=void 0}function L(){return t===void 0?s:I(y())}function T(){var r=y(),a=p(r);if(f=arguments,u=this,o=r,a){if(t===void 0)return O(o);if(m)return clearTimeout(t),t=setTimeout(l,n),g(o)}return t===void 0&&(t=setTimeout(l,n)),s}return T.cancel=S,T.flush=L,T}var me=ce;const le=N(me);export{le as d};
