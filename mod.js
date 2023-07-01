// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,i=r.__lookupGetter__,l=r.__lookupSetter__;var a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var c,f,b,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(i.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=c):t[e]=a.value),b="get"in a,y="set"in a,f&&(b||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return b&&o&&o.call(t,e,a.get),y&&u&&u.call(t,e,a.set),t};function c(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return b&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var m=y()?function(t){var e,r,n,o,u;if(null==t)return p.call(t);r=t[v],u=v,e=null!=(o=t)&&_.call(o,u);try{t[v]=void 0}catch(e){return p.call(t)}return n=p.call(t),e?t[v]=r:delete t[v],n}:function(t){return p.call(t)},s=Number,j=s.prototype.toString;var g=y();function d(t){return"object"==typeof t&&(t instanceof s||(g?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function O(t){return f(t)||d(t)}c(O,"isPrimitive",f),c(O,"isObject",d);var S=Number.POSITIVE_INFINITY,h=s.NEGATIVE_INFINITY,E=Math.floor;function P(t){return t<S&&t>h&&E(e=t)===e;var e}function T(t){return f(t)&&P(t)}function w(t){return d(t)&&P(t.valueOf())}function I(t){return T(t)||w(t)}function N(t){return T(t)&&t>=0}function V(t){return w(t)&&t.valueOf()>=0}function A(t){return N(t)||V(t)}c(I,"isPrimitive",T),c(I,"isObject",w),c(A,"isPrimitive",N),c(A,"isObject",V);function F(t){return null!==t&&"object"==typeof t&&N(t.length)&&t.length<=9007199254740991&&"number"==typeof t.BYTES_PER_ELEMENT&&"number"==typeof t.byteOffset&&"number"==typeof t.byteLength}export{F as default};
//# sourceMappingURL=mod.js.map
