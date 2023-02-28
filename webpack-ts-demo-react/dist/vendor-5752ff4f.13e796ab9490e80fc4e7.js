/*! For license information please see vendor-5752ff4f.13e796ab9490e80fc4e7.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpack_ts_demo_react=self.webpackChunkwebpack_ts_demo_react||[]).push([[714],{599:(t,e,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}var o;n.d(e,{Zn:()=>p,aU:()=>o,cP:()=>h,kG:()=>c,lX:()=>i}),function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(o||(o={}));const a="popstate";function i(t){return void 0===t&&(t={}),function(t,e,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:c=!1}=r,h=i.history,d=o.Pop,p=null;function w(){d=o.Pop,p&&p({action:d,location:g.location})}let g={get action(){return d},get location(){return t(i,h)},listen(t){if(p)throw new Error("A history only accepts one active listener");return i.addEventListener(a,w),p=t,()=>{i.removeEventListener(a,w),p=null}},createHref:t=>e(i,t),encodeLocation(t){let e=f("string"==typeof t?t:u(t));return{pathname:e.pathname,search:e.search,hash:e.hash}},push:function(t,e){d=o.Push;let r=l(g.location,t,e);n&&n(r,t);let a=s(r),u=g.createHref(r);try{h.pushState(a,"",u)}catch(t){i.location.assign(u)}c&&p&&p({action:d,location:g.location})},replace:function(t,e){d=o.Replace;let r=l(g.location,t,e);n&&n(r,t);let a=s(r),i=g.createHref(r);h.replaceState(a,"",i),c&&p&&p({action:d,location:g.location})},go:t=>h.go(t)};return g}((function(t,e){let{pathname:n,search:r,hash:o}=t.location;return l("",{pathname:n,search:r,hash:o},e.state&&e.state.usr||null,e.state&&e.state.key||"default")}),(function(t,e){return"string"==typeof e?e:u(e)}),null,t)}function c(t,e){if(!1===t||null==t)throw new Error(e)}function s(t){return{usr:t.state,key:t.key}}function l(t,e,n,o){return void 0===n&&(n=null),r({pathname:"string"==typeof t?t:t.pathname,search:"",hash:""},"string"==typeof e?h(e):e,{state:n,key:e&&e.key||o||Math.random().toString(36).substr(2,8)})}function u(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&"?"!==n&&(e+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(e+="#"===r.charAt(0)?r:"#"+r),e}function h(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function f(t){let e="undefined"!=typeof window&&void 0!==window.location&&"null"!==window.location.origin?window.location.origin:window.location.href,n="string"==typeof t?t:u(t);return c(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}var d;function p(t,e){if("/"===e)return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&"/"!==r?null:t.slice(n)||"/"}!function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"}(d||(d={}));class w extends Error{}const g=["post","put","patch","delete"],y=(new Set(g),["get",...g]);new Set(y),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement}}]);