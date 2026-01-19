import{j as a,H as Lp,G as Ba,T as Ht,L as Te,F as ca,C as Sn,a as is,A as Jl,S as An,b as rs,W as mo,c as Cn,d as tg,M as ag,e as po,m as Oe,f as wn,g as xo,h as sg,i as Kl,k as lg,l as ig,X as Gp,n as ng,o as io,u as rg,p as cg,q as dt,B as wt,E as no,r as G,s as Vp,t as og,v as dg,w as ug,x as mg,Z as Ee,D as ut,P as Tn,y as ho,z as Qe,I as $e,J as we,K as ls,N as Lt,O as Qp,Q as pg,R as ns,U as Ip,V as xg,Y as Yp,_ as Xp,$ as Sp,a0 as Jp,a1 as fo,a2 as Kp,a3 as hg,a4 as go,a5 as fg,a6 as yo,a7 as ro,a8 as En,a9 as Pp,aa as vn,ab as co,ac as gg,ad as Zp,ae as yg,af as vo,ag as Fp,ah as ra,ai as vg,aj as bg,ak as Nn,al as $p,am as jg,an as Ng,ao as Sg,ap as Wp,aq as Ap,ar as Wc,as as Ag,at as Cg}from"./ui-0yvtYHNn.js";import{r as R,u as Dn,L as Le,d as wg,c as bo,e as Tg,B as Eg,f as Dg,g as ot}from"./react-router-CHm5ekbJ.js";import{r as Rg,a as _g,g as Mg}from"./react-Bzgz95E1.js";import{S as Ug,P as Og,C as ex,a as kg,R as zg,T as Bg,O as tx,b as qg,c as ax,d as Hg,e as sx,D as lx,f as Lg,g as Gg,h as ix,V as Vg,i as Qg,j as nx,k as Ig,l as rx,L as Rn,m as _n,n as Mn,o as cx,p as ox,q as dx,A as ux,r as mx,s as px,t as xx,u as Yg}from"./radix-zCZTZT3Q.js";import{t as Xg,c as Jg,a as Un}from"./vendor-CvOCuab3.js";(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const y of d)if(y.type==="childList")for(const E of y.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&c(E)}).observe(document,{childList:!0,subtree:!0});function x(d){const y={};return d.integrity&&(y.integrity=d.integrity),d.referrerPolicy&&(y.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?y.credentials="include":d.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function c(d){if(d.ep)return;d.ep=!0;const y=x(d);fetch(d.href,y)}})();var eo={exports:{}},Yl={},to={exports:{}},ao={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function Kg(){return Cp||(Cp=1,(function(m){function f(C,_){var H=C.length;C.push(_);e:for(;0<H;){var de=H-1>>>1,ue=C[de];if(0<d(ue,_))C[de]=_,C[H]=ue,H=de;else break e}}function x(C){return C.length===0?null:C[0]}function c(C){if(C.length===0)return null;var _=C[0],H=C.pop();if(H!==_){C[0]=H;e:for(var de=0,ue=C.length,Ge=ue>>>1;de<Ge;){var ge=2*(de+1)-1,ae=C[ge],_e=ge+1,Ot=C[_e];if(0>d(ae,H))_e<ue&&0>d(Ot,ae)?(C[de]=Ot,C[_e]=H,de=_e):(C[de]=ae,C[ge]=H,de=ge);else if(_e<ue&&0>d(Ot,H))C[de]=Ot,C[_e]=H,de=_e;else break e}}return _}function d(C,_){var H=C.sortIndex-_.sortIndex;return H!==0?H:C.id-_.id}if(m.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;m.unstable_now=function(){return y.now()}}else{var E=Date,z=E.now();m.unstable_now=function(){return E.now()-z}}var U=[],Re=[],he=1,k=null,oe=3,oa=!1,Et=!1,pt=!1,cs=!1,os=typeof setTimeout=="function"?setTimeout:null,Fs=typeof clearTimeout=="function"?clearTimeout:null,xt=typeof setImmediate<"u"?setImmediate:null;function da(C){for(var _=x(Re);_!==null;){if(_.callback===null)c(Re);else if(_.startTime<=C)c(Re),_.sortIndex=_.expirationTime,f(U,_);else break;_=x(Re)}}function qa(C){if(pt=!1,da(C),!Et)if(x(U)!==null)Et=!0,Ut||(Ut=!0,ht());else{var _=x(Re);_!==null&&Vt(qa,_.startTime-C)}}var Ut=!1,Gt=-1,Dt=5,ds=-1;function Zl(){return cs?!0:!(m.unstable_now()-ds<Dt)}function us(){if(cs=!1,Ut){var C=m.unstable_now();ds=C;var _=!0;try{e:{Et=!1,pt&&(pt=!1,Fs(Gt),Gt=-1),oa=!0;var H=oe;try{t:{for(da(C),k=x(U);k!==null&&!(k.expirationTime>C&&Zl());){var de=k.callback;if(typeof de=="function"){k.callback=null,oe=k.priorityLevel;var ue=de(k.expirationTime<=C);if(C=m.unstable_now(),typeof ue=="function"){k.callback=ue,da(C),_=!0;break t}k===x(U)&&c(U),da(C)}else c(U);k=x(U)}if(k!==null)_=!0;else{var Ge=x(Re);Ge!==null&&Vt(qa,Ge.startTime-C),_=!1}}break e}finally{k=null,oe=H,oa=!1}_=void 0}}finally{_?ht():Ut=!1}}}var ht;if(typeof xt=="function")ht=function(){xt(us)};else if(typeof MessageChannel<"u"){var Fl=new MessageChannel,$s=Fl.port2;Fl.port1.onmessage=us,ht=function(){$s.postMessage(null)}}else ht=function(){os(us,0)};function Vt(C,_){Gt=os(function(){C(m.unstable_now())},_)}m.unstable_IdlePriority=5,m.unstable_ImmediatePriority=1,m.unstable_LowPriority=4,m.unstable_NormalPriority=3,m.unstable_Profiling=null,m.unstable_UserBlockingPriority=2,m.unstable_cancelCallback=function(C){C.callback=null},m.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Dt=0<C?Math.floor(1e3/C):5},m.unstable_getCurrentPriorityLevel=function(){return oe},m.unstable_next=function(C){switch(oe){case 1:case 2:case 3:var _=3;break;default:_=oe}var H=oe;oe=_;try{return C()}finally{oe=H}},m.unstable_requestPaint=function(){cs=!0},m.unstable_runWithPriority=function(C,_){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var H=oe;oe=C;try{return _()}finally{oe=H}},m.unstable_scheduleCallback=function(C,_,H){var de=m.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?de+H:de):H=de,C){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=H+ue,C={id:he++,callback:_,priorityLevel:C,startTime:H,expirationTime:ue,sortIndex:-1},H>de?(C.sortIndex=H,f(Re,C),x(U)===null&&C===x(Re)&&(pt?(Fs(Gt),Gt=-1):pt=!0,Vt(qa,H-de))):(C.sortIndex=ue,f(U,C),Et||oa||(Et=!0,Ut||(Ut=!0,ht()))),C},m.unstable_shouldYield=Zl,m.unstable_wrapCallback=function(C){var _=oe;return function(){var H=oe;oe=_;try{return C.apply(this,arguments)}finally{oe=H}}}})(ao)),ao}var wp;function Pg(){return wp||(wp=1,to.exports=Kg()),to.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function Zg(){if(Tp)return Yl;Tp=1;var m=Pg(),f=Rg(),x=_g();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function y(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function U(e){if(y(e)!==e)throw Error(c(188))}function Re(e){var t=e.alternate;if(!t){if(t=y(e),t===null)throw Error(c(188));return t!==e?null:e}for(var s=e,l=t;;){var i=s.return;if(i===null)break;var n=i.alternate;if(n===null){if(l=i.return,l!==null){s=l;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===s)return U(i),e;if(n===l)return U(i),t;n=n.sibling}throw Error(c(188))}if(s.return!==l.return)s=i,l=n;else{for(var r=!1,o=i.child;o;){if(o===s){r=!0,s=i,l=n;break}if(o===l){r=!0,l=i,s=n;break}o=o.sibling}if(!r){for(o=n.child;o;){if(o===s){r=!0,s=n,l=i;break}if(o===l){r=!0,l=n,s=i;break}o=o.sibling}if(!r)throw Error(c(189))}}if(s.alternate!==l)throw Error(c(190))}if(s.tag!==3)throw Error(c(188));return s.stateNode.current===s?e:t}function he(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=he(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,oe=Symbol.for("react.element"),oa=Symbol.for("react.transitional.element"),Et=Symbol.for("react.portal"),pt=Symbol.for("react.fragment"),cs=Symbol.for("react.strict_mode"),os=Symbol.for("react.profiler"),Fs=Symbol.for("react.consumer"),xt=Symbol.for("react.context"),da=Symbol.for("react.forward_ref"),qa=Symbol.for("react.suspense"),Ut=Symbol.for("react.suspense_list"),Gt=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),ds=Symbol.for("react.activity"),Zl=Symbol.for("react.memo_cache_sentinel"),us=Symbol.iterator;function ht(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var Fl=Symbol.for("react.client.reference");function $s(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Fl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pt:return"Fragment";case os:return"Profiler";case cs:return"StrictMode";case qa:return"Suspense";case Ut:return"SuspenseList";case ds:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Et:return"Portal";case xt:return e.displayName||"Context";case Fs:return(e._context.displayName||"Context")+".Consumer";case da:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gt:return t=e.displayName||null,t!==null?t:$s(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return $s(e(t))}catch{}}return null}var Vt=Array.isArray,C=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},de=[],ue=-1;function Ge(e){return{current:e}}function ge(e){0>ue||(e.current=de[ue],de[ue]=null,ue--)}function ae(e,t){ue++,de[ue]=e.current,e.current=t}var _e=Ge(null),Ot=Ge(null),ua=Ge(null),$l=Ge(null);function Wl(e,t){switch(ae(ua,t),ae(Ot,e),ae(_e,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Xm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Xm(t),e=Jm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ge(_e),ae(_e,e)}function ms(){ge(_e),ge(Ot),ge(ua)}function On(e){e.memoizedState!==null&&ae($l,e);var t=_e.current,s=Jm(t,e.type);t!==s&&(ae(Ot,e),ae(_e,s))}function ei(e){Ot.current===e&&(ge(_e),ge(Ot)),$l.current===e&&(ge($l),Gl._currentValue=H)}var kn,No;function Ha(e){if(kn===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);kn=t&&t[1]||"",No=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kn+e+No}var zn=!1;function Bn(e,t){if(!e||zn)return"";zn=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(N){var b=N}Reflect.construct(e,[],w)}else{try{w.call()}catch(N){b=N}e.call(w.prototype)}}else{try{throw Error()}catch(N){b=N}(w=e())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(N){if(N&&b&&typeof N.stack=="string")return[N.stack,b.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),r=n[0],o=n[1];if(r&&o){var u=r.split(`
`),v=o.split(`
`);for(i=l=0;l<u.length&&!u[l].includes("DetermineComponentFrameRoot");)l++;for(;i<v.length&&!v[i].includes("DetermineComponentFrameRoot");)i++;if(l===u.length||i===v.length)for(l=u.length-1,i=v.length-1;1<=l&&0<=i&&u[l]!==v[i];)i--;for(;1<=l&&0<=i;l--,i--)if(u[l]!==v[i]){if(l!==1||i!==1)do if(l--,i--,0>i||u[l]!==v[i]){var S=`
`+u[l].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=l&&0<=i);break}}}finally{zn=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Ha(s):""}function _x(e,t){switch(e.tag){case 26:case 27:case 5:return Ha(e.type);case 16:return Ha("Lazy");case 13:return e.child!==t&&t!==null?Ha("Suspense Fallback"):Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 15:return Bn(e.type,!1);case 11:return Bn(e.type.render,!1);case 1:return Bn(e.type,!0);case 31:return Ha("Activity");default:return""}}function So(e){try{var t="",s=null;do t+=_x(e,s),s=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var qn=Object.prototype.hasOwnProperty,Hn=m.unstable_scheduleCallback,Ln=m.unstable_cancelCallback,Mx=m.unstable_shouldYield,Ux=m.unstable_requestPaint,We=m.unstable_now,Ox=m.unstable_getCurrentPriorityLevel,Ao=m.unstable_ImmediatePriority,Co=m.unstable_UserBlockingPriority,ti=m.unstable_NormalPriority,kx=m.unstable_LowPriority,wo=m.unstable_IdlePriority,zx=m.log,Bx=m.unstable_setDisableYieldValue,Ws=null,et=null;function ma(e){if(typeof zx=="function"&&Bx(e),et&&typeof et.setStrictMode=="function")try{et.setStrictMode(Ws,e)}catch{}}var tt=Math.clz32?Math.clz32:Lx,qx=Math.log,Hx=Math.LN2;function Lx(e){return e>>>=0,e===0?32:31-(qx(e)/Hx|0)|0}var ai=256,si=262144,li=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ii(e,t,s){var l=e.pendingLanes;if(l===0)return 0;var i=0,n=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~n,l!==0?i=La(l):(r&=o,r!==0?i=La(r):s||(s=o&~e,s!==0&&(i=La(s))))):(o=l&~n,o!==0?i=La(o):r!==0?i=La(r):s||(s=l&~e,s!==0&&(i=La(s)))),i===0?0:t!==0&&t!==i&&(t&n)===0&&(n=i&-i,s=t&-t,n>=s||n===32&&(s&4194048)!==0)?t:i}function el(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function To(){var e=li;return li<<=1,(li&62914560)===0&&(li=4194304),e}function Gn(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function tl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vx(e,t,s,l,i,n){var r=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var o=e.entanglements,u=e.expirationTimes,v=e.hiddenUpdates;for(s=r&~s;0<s;){var S=31-tt(s),w=1<<S;o[S]=0,u[S]=-1;var b=v[S];if(b!==null)for(v[S]=null,S=0;S<b.length;S++){var N=b[S];N!==null&&(N.lane&=-536870913)}s&=~w}l!==0&&Eo(e,l,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(r&~t))}function Eo(e,t,s){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-tt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function Do(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var l=31-tt(s),i=1<<l;i&t|e[l]&t&&(e[l]|=t),s&=~i}}function Ro(e,t){var s=t&-t;return s=(s&42)!==0?1:Vn(s),(s&(e.suspendedLanes|t))!==0?0:s}function Vn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _o(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:fp(e.type))}function Mo(e,t){var s=_.p;try{return _.p=e,t()}finally{_.p=s}}var pa=Math.random().toString(36).slice(2),ke="__reactFiber$"+pa,Ie="__reactProps$"+pa,ps="__reactContainer$"+pa,In="__reactEvents$"+pa,Qx="__reactListeners$"+pa,Ix="__reactHandles$"+pa,Uo="__reactResources$"+pa,al="__reactMarker$"+pa;function Yn(e){delete e[ke],delete e[Ie],delete e[In],delete e[Qx],delete e[Ix]}function xs(e){var t=e[ke];if(t)return t;for(var s=e.parentNode;s;){if(t=s[ps]||s[ke]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=ep(e);e!==null;){if(s=e[ke])return s;e=ep(e)}return t}e=s,s=e.parentNode}return null}function hs(e){if(e=e[ke]||e[ps]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function sl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function fs(e){var t=e[Uo];return t||(t=e[Uo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Me(e){e[al]=!0}var Oo=new Set,ko={};function Ga(e,t){gs(e,t),gs(e+"Capture",t)}function gs(e,t){for(ko[e]=t,e=0;e<t.length;e++)Oo.add(t[e])}var Yx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zo={},Bo={};function Xx(e){return qn.call(Bo,e)?!0:qn.call(zo,e)?!1:Yx.test(e)?Bo[e]=!0:(zo[e]=!0,!1)}function ni(e,t,s){if(Xx(t))if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+s)}}function ri(e,t,s){if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+s)}}function Qt(e,t,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(t,s,""+l)}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jx(e,t,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(r){s=""+r,n.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(r){s=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xn(e){if(!e._valueTracker){var t=qo(e)?"checked":"value";e._valueTracker=Jx(e,t,""+e[t])}}function Ho(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),l="";return e&&(l=qo(e)?e.checked?"true":"false":e.value),e=l,e!==s?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kx=/[\n"\\]/g;function gt(e){return e.replace(Kx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jn(e,t,s,l,i,n,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Kn(e,r,ft(t)):s!=null?Kn(e,r,ft(s)):l!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ft(o):e.removeAttribute("name")}function Lo(e,t,s,l,i,n,r,o){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||s!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){Xn(e);return}s=s!=null?""+ft(s):"",t=t!=null?""+ft(t):s,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Xn(e)}function Kn(e,t,s){t==="number"&&ci(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function ys(e,t,s,l){if(e=e.options,t){t={};for(var i=0;i<s.length;i++)t["$"+s[i]]=!0;for(s=0;s<e.length;s++)i=t.hasOwnProperty("$"+e[s].value),e[s].selected!==i&&(e[s].selected=i),i&&l&&(e[s].defaultSelected=!0)}else{for(s=""+ft(s),t=null,i=0;i<e.length;i++){if(e[i].value===s){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Go(e,t,s){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),s==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=s!=null?""+ft(s):""}function Vo(e,t,s,l){if(t==null){if(l!=null){if(s!=null)throw Error(c(92));if(Vt(l)){if(1<l.length)throw Error(c(93));l=l[0]}s=l}s==null&&(s=""),t=s}s=ft(t),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),Xn(e)}function vs(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var Px=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qo(e,t,s){var l=t.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,s):typeof s!="number"||s===0||Px.has(t)?t==="float"?e.cssFloat=s:e[t]=(""+s).trim():e[t]=s+"px"}function Io(e,t,s){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&s[i]!==l&&Qo(e,i,l)}else for(var n in t)t.hasOwnProperty(n)&&Qo(e,n,t[n])}function Pn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oi(e){return Fx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function It(){}var Zn=null;function Fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bs=null,js=null;function Yo(e){var t=hs(e);if(t&&(e=t.stateNode)){var s=e[Ie]||null;e:switch(e=t.stateNode,t.type){case"input":if(Jn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<s.length;t++){var l=s[t];if(l!==e&&l.form===e.form){var i=l[Ie]||null;if(!i)throw Error(c(90));Jn(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<s.length;t++)l=s[t],l.form===e.form&&Ho(l)}break e;case"textarea":Go(e,s.value,s.defaultValue);break e;case"select":t=s.value,t!=null&&ys(e,!!s.multiple,t,!1)}}}var $n=!1;function Xo(e,t,s){if($n)return e(t,s);$n=!0;try{var l=e(t);return l}finally{if($n=!1,(bs!==null||js!==null)&&(Zi(),bs&&(t=bs,e=js,js=bs=null,Yo(t),e)))for(t=0;t<e.length;t++)Yo(e[t])}}function ll(e,t){var s=e.stateNode;if(s===null)return null;var l=s[Ie]||null;if(l===null)return null;s=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(c(231,t,typeof s));return s}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wn=!1;if(Yt)try{var il={};Object.defineProperty(il,"passive",{get:function(){Wn=!0}}),window.addEventListener("test",il,il),window.removeEventListener("test",il,il)}catch{Wn=!1}var xa=null,er=null,di=null;function Jo(){if(di)return di;var e,t=er,s=t.length,l,i="value"in xa?xa.value:xa.textContent,n=i.length;for(e=0;e<s&&t[e]===i[e];e++);var r=s-e;for(l=1;l<=r&&t[s-l]===i[n-l];l++);return di=i.slice(e,1<l?1-l:void 0)}function ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mi(){return!0}function Ko(){return!1}function Ye(e){function t(s,l,i,n,r){this._reactName=s,this._targetInst=i,this.type=l,this.nativeEvent=n,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(s=e[o],this[o]=s?s(n):n[o]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?mi:Ko,this.isPropagationStopped=Ko,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),t}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pi=Ye(Va),nl=k({},Va,{view:0,detail:0}),$x=Ye(nl),tr,ar,rl,xi=k({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rl&&(rl&&e.type==="mousemove"?(tr=e.screenX-rl.screenX,ar=e.screenY-rl.screenY):ar=tr=0,rl=e),tr)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),Po=Ye(xi),Wx=k({},xi,{dataTransfer:0}),eh=Ye(Wx),th=k({},nl,{relatedTarget:0}),sr=Ye(th),ah=k({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),sh=Ye(ah),lh=k({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ih=Ye(lh),nh=k({},Va,{data:0}),Zo=Ye(nh),rh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=oh[e])?!!t[e]:!1}function lr(){return dh}var uh=k({},nl,{key:function(e){if(e.key){var t=rh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ch[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lr,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mh=Ye(uh),ph=k({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fo=Ye(ph),xh=k({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lr}),hh=Ye(xh),fh=k({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),gh=Ye(fh),yh=k({},xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vh=Ye(yh),bh=k({},Va,{newState:0,oldState:0}),jh=Ye(bh),Nh=[9,13,27,32],ir=Yt&&"CompositionEvent"in window,cl=null;Yt&&"documentMode"in document&&(cl=document.documentMode);var Sh=Yt&&"TextEvent"in window&&!cl,$o=Yt&&(!ir||cl&&8<cl&&11>=cl),Wo=" ",ed=!1;function td(e,t){switch(e){case"keyup":return Nh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ns=!1;function Ah(e,t){switch(e){case"compositionend":return ad(t);case"keypress":return t.which!==32?null:(ed=!0,Wo);case"textInput":return e=t.data,e===Wo&&ed?null:e;default:return null}}function Ch(e,t){if(Ns)return e==="compositionend"||!ir&&td(e,t)?(e=Jo(),di=er=xa=null,Ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $o&&t.locale!=="ko"?null:t.data;default:return null}}var wh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wh[e.type]:t==="textarea"}function ld(e,t,s,l){bs?js?js.push(l):js=[l]:bs=l,t=sn(t,"onChange"),0<t.length&&(s=new pi("onChange","change",null,s,l),e.push({event:s,listeners:t}))}var ol=null,dl=null;function Th(e){Lm(e,0)}function hi(e){var t=sl(e);if(Ho(t))return e}function id(e,t){if(e==="change")return t}var nd=!1;if(Yt){var nr;if(Yt){var rr="oninput"in document;if(!rr){var rd=document.createElement("div");rd.setAttribute("oninput","return;"),rr=typeof rd.oninput=="function"}nr=rr}else nr=!1;nd=nr&&(!document.documentMode||9<document.documentMode)}function cd(){ol&&(ol.detachEvent("onpropertychange",od),dl=ol=null)}function od(e){if(e.propertyName==="value"&&hi(dl)){var t=[];ld(t,dl,e,Fn(e)),Xo(Th,t)}}function Eh(e,t,s){e==="focusin"?(cd(),ol=t,dl=s,ol.attachEvent("onpropertychange",od)):e==="focusout"&&cd()}function Dh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(dl)}function Rh(e,t){if(e==="click")return hi(t)}function _h(e,t){if(e==="input"||e==="change")return hi(t)}function Mh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:Mh;function ul(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),l=Object.keys(t);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var i=s[l];if(!qn.call(t,i)||!at(e[i],t[i]))return!1}return!0}function dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ud(e,t){var s=dd(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=t&&l>=t)return{node:s,offset:t-e};e=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=dd(s)}}function md(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?md(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ci(e.document);t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=ci(e.document)}return t}function cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Uh=Yt&&"documentMode"in document&&11>=document.documentMode,Ss=null,or=null,ml=null,dr=!1;function xd(e,t,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;dr||Ss==null||Ss!==ci(l)||(l=Ss,"selectionStart"in l&&cr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ml&&ul(ml,l)||(ml=l,l=sn(or,"onSelect"),0<l.length&&(t=new pi("onSelect","select",null,t,s),e.push({event:t,listeners:l}),t.target=Ss)))}function Qa(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var As={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},ur={},hd={};Yt&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Ia(e){if(ur[e])return ur[e];if(!As[e])return e;var t=As[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in hd)return ur[e]=t[s];return e}var fd=Ia("animationend"),gd=Ia("animationiteration"),yd=Ia("animationstart"),Oh=Ia("transitionrun"),kh=Ia("transitionstart"),zh=Ia("transitioncancel"),vd=Ia("transitionend"),bd=new Map,mr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mr.push("scrollEnd");function Rt(e,t){bd.set(e,t),Ga(t,[e])}var fi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],Cs=0,pr=0;function gi(){for(var e=Cs,t=pr=Cs=0;t<e;){var s=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var i=yt[t];yt[t++]=null;var n=yt[t];if(yt[t++]=null,l!==null&&i!==null){var r=l.pending;r===null?i.next=i:(i.next=r.next,r.next=i),l.pending=i}n!==0&&jd(s,i,n)}}function yi(e,t,s,l){yt[Cs++]=e,yt[Cs++]=t,yt[Cs++]=s,yt[Cs++]=l,pr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function xr(e,t,s,l){return yi(e,t,s,l),vi(e)}function Ya(e,t){return yi(e,null,null,t),vi(e)}function jd(e,t,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var i=!1,n=e.return;n!==null;)n.childLanes|=s,l=n.alternate,l!==null&&(l.childLanes|=s),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&t!==null&&(i=31-tt(s),e=n.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=s|536870912),n):null}function vi(e){if(50<Ol)throw Ol=0,Sc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ws={};function Bh(e,t,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,s,l){return new Bh(e,t,s,l)}function hr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xt(e,t){var s=e.alternate;return s===null?(s=st(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Nd(e,t){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,t=s.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,s,l,i,n){var r=0;if(l=e,typeof e=="function")hr(e)&&(r=1);else if(typeof e=="string")r=Qf(e,s,_e.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ds:return e=st(31,s,t,i),e.elementType=ds,e.lanes=n,e;case pt:return Xa(s.children,i,n,t);case cs:r=8,i|=24;break;case os:return e=st(12,s,t,i|2),e.elementType=os,e.lanes=n,e;case qa:return e=st(13,s,t,i),e.elementType=qa,e.lanes=n,e;case Ut:return e=st(19,s,t,i),e.elementType=Ut,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xt:r=10;break e;case Fs:r=9;break e;case da:r=11;break e;case Gt:r=14;break e;case Dt:r=16,l=null;break e}r=29,s=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=st(r,s,t,i),t.elementType=e,t.type=l,t.lanes=n,t}function Xa(e,t,s,l){return e=st(7,e,l,t),e.lanes=s,e}function fr(e,t,s){return e=st(6,e,null,t),e.lanes=s,e}function Sd(e){var t=st(18,null,null,0);return t.stateNode=e,t}function gr(e,t,s){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ad=new WeakMap;function vt(e,t){if(typeof e=="object"&&e!==null){var s=Ad.get(e);return s!==void 0?s:(t={value:e,source:t,stack:So(t)},Ad.set(e,t),t)}return{value:e,source:t,stack:So(t)}}var Ts=[],Es=0,ji=null,pl=0,bt=[],jt=0,ha=null,kt=1,zt="";function Jt(e,t){Ts[Es++]=pl,Ts[Es++]=ji,ji=e,pl=t}function Cd(e,t,s){bt[jt++]=kt,bt[jt++]=zt,bt[jt++]=ha,ha=e;var l=kt;e=zt;var i=32-tt(l)-1;l&=~(1<<i),s+=1;var n=32-tt(t)+i;if(30<n){var r=i-i%5;n=(l&(1<<r)-1).toString(32),l>>=r,i-=r,kt=1<<32-tt(t)+i|s<<i|l,zt=n+e}else kt=1<<n|s<<i|l,zt=e}function yr(e){e.return!==null&&(Jt(e,1),Cd(e,1,0))}function vr(e){for(;e===ji;)ji=Ts[--Es],Ts[Es]=null,pl=Ts[--Es],Ts[Es]=null;for(;e===ha;)ha=bt[--jt],bt[jt]=null,zt=bt[--jt],bt[jt]=null,kt=bt[--jt],bt[jt]=null}function wd(e,t){bt[jt++]=kt,bt[jt++]=zt,bt[jt++]=ha,kt=t.id,zt=t.overflow,ha=e}var ze=null,me=null,P=!1,fa=null,Nt=!1,br=Error(c(519));function ga(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xl(vt(t,e)),br}function Td(e){var t=e.stateNode,s=e.type,l=e.memoizedProps;switch(t[ke]=e,t[Ie]=l,s){case"dialog":X("cancel",t),X("close",t);break;case"iframe":case"object":case"embed":X("load",t);break;case"video":case"audio":for(s=0;s<zl.length;s++)X(zl[s],t);break;case"source":X("error",t);break;case"img":case"image":case"link":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"input":X("invalid",t),Lo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":X("invalid",t);break;case"textarea":X("invalid",t),Vo(t,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||t.textContent===""+s||l.suppressHydrationWarning===!0||Im(t.textContent,s)?(l.popover!=null&&(X("beforetoggle",t),X("toggle",t)),l.onScroll!=null&&X("scroll",t),l.onScrollEnd!=null&&X("scrollend",t),l.onClick!=null&&(t.onclick=It),t=!0):t=!1,t||ga(e,!0)}function Ed(e){for(ze=e.return;ze;)switch(ze.tag){case 5:case 31:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:ze=ze.return}}function Ds(e){if(e!==ze)return!1;if(!P)return Ed(e),P=!0,!1;var t=e.tag,s;if((s=t!==3&&t!==27)&&((s=t===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||qc(e.type,e.memoizedProps)),s=!s),s&&me&&ga(e),Ed(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));me=Wm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));me=Wm(e)}else t===27?(t=me,_a(e.type)?(e=Qc,Qc=null,me=e):me=t):me=ze?At(e.stateNode.nextSibling):null;return!0}function Ja(){me=ze=null,P=!1}function jr(){var e=fa;return e!==null&&(Pe===null?Pe=e:Pe.push.apply(Pe,e),fa=null),e}function xl(e){fa===null?fa=[e]:fa.push(e)}var Nr=Ge(null),Ka=null,Kt=null;function ya(e,t,s){ae(Nr,t._currentValue),t._currentValue=s}function Pt(e){e._currentValue=Nr.current,ge(Nr)}function Sr(e,t,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===s)break;e=e.return}}function Ar(e,t,s,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var r=i.child;n=n.firstContext;e:for(;n!==null;){var o=n;n=i;for(var u=0;u<t.length;u++)if(o.context===t[u]){n.lanes|=s,o=n.alternate,o!==null&&(o.lanes|=s),Sr(n.return,s,e),l||(r=null);break e}n=o.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(c(341));r.lanes|=s,n=r.alternate,n!==null&&(n.lanes|=s),Sr(r,s,e),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===e){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function Rs(e,t,s,l){e=null;for(var i=t,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(c(387));if(r=r.memoizedProps,r!==null){var o=i.type;at(i.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(i===$l.current){if(r=i.alternate,r===null)throw Error(c(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Gl):e=[Gl])}i=i.return}e!==null&&Ar(t,e,s,l),t.flags|=262144}function Ni(e){for(e=e.firstContext;e!==null;){if(!at(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){Ka=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Be(e){return Dd(Ka,e)}function Si(e,t){return Ka===null&&Pa(e),Dd(e,t)}function Dd(e,t){var s=t._currentValue;if(t={context:t,memoizedValue:s,next:null},Kt===null){if(e===null)throw Error(c(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return s}var qh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(s){return s()})}},Hh=m.unstable_scheduleCallback,Lh=m.unstable_NormalPriority,Ne={$$typeof:xt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cr(){return{controller:new qh,data:new Map,refCount:0}}function hl(e){e.refCount--,e.refCount===0&&Hh(Lh,function(){e.controller.abort()})}var fl=null,wr=0,_s=0,Ms=null;function Gh(e,t){if(fl===null){var s=fl=[];wr=0,_s=Dc(),Ms={status:"pending",value:void 0,then:function(l){s.push(l)}}}return wr++,t.then(Rd,Rd),t}function Rd(){if(--wr===0&&fl!==null){Ms!==null&&(Ms.status="fulfilled");var e=fl;fl=null,_s=0,Ms=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Vh(e,t){var s=[],l={status:"pending",value:null,reason:null,then:function(i){s.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<s.length;i++)(0,s[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<s.length;i++)(0,s[i])(void 0)}),l}var _d=C.S;C.S=function(e,t){xm=We(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gh(e,t),_d!==null&&_d(e,t)};var Za=Ge(null);function Tr(){var e=Za.current;return e!==null?e:ce.pooledCache}function Ai(e,t){t===null?ae(Za,Za.current):ae(Za,t.pool)}function Md(){var e=Tr();return e===null?null:{parent:Ne._currentValue,pool:e}}var Us=Error(c(460)),Er=Error(c(474)),Ci=Error(c(542)),wi={then:function(){}};function Ud(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Od(e,t,s){switch(s=e[s],s===void 0?e.push(t):s!==t&&(t.then(It,It),t=s),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zd(e),e;default:if(typeof t.status=="string")t.then(It,It);else{if(e=ce,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zd(e),e}throw $a=t,Us}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?($a=s,Us):s}}var $a=null;function kd(){if($a===null)throw Error(c(459));var e=$a;return $a=null,e}function zd(e){if(e===Us||e===Ci)throw Error(c(483))}var Os=null,gl=0;function Ti(e){var t=gl;return gl+=1,Os===null&&(Os=[]),Od(Os,e,t)}function yl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ei(e,t){throw t.$$typeof===oe?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Bd(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function s(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function l(h){for(var p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(h,p){return h=Xt(h,p),h.index=0,h.sibling=null,h}function n(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=67108866,p):g):(h.flags|=67108866,p)):(h.flags|=1048576,p)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,p,g,A){return p===null||p.tag!==6?(p=fr(g,h.mode,A),p.return=h,p):(p=i(p,g),p.return=h,p)}function u(h,p,g,A){var B=g.type;return B===pt?S(h,p,g.props.children,A,g.key):p!==null&&(p.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Dt&&Fa(B)===p.type)?(p=i(p,g.props),yl(p,g),p.return=h,p):(p=bi(g.type,g.key,g.props,null,h.mode,A),yl(p,g),p.return=h,p)}function v(h,p,g,A){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=gr(g,h.mode,A),p.return=h,p):(p=i(p,g.children||[]),p.return=h,p)}function S(h,p,g,A,B){return p===null||p.tag!==7?(p=Xa(g,h.mode,A,B),p.return=h,p):(p=i(p,g),p.return=h,p)}function w(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=fr(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case oa:return g=bi(p.type,p.key,p.props,null,h.mode,g),yl(g,p),g.return=h,g;case Et:return p=gr(p,h.mode,g),p.return=h,p;case Dt:return p=Fa(p),w(h,p,g)}if(Vt(p)||ht(p))return p=Xa(p,h.mode,g,null),p.return=h,p;if(typeof p.then=="function")return w(h,Ti(p),g);if(p.$$typeof===xt)return w(h,Si(h,p),g);Ei(h,p)}return null}function b(h,p,g,A){var B=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return B!==null?null:o(h,p,""+g,A);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oa:return g.key===B?u(h,p,g,A):null;case Et:return g.key===B?v(h,p,g,A):null;case Dt:return g=Fa(g),b(h,p,g,A)}if(Vt(g)||ht(g))return B!==null?null:S(h,p,g,A,null);if(typeof g.then=="function")return b(h,p,Ti(g),A);if(g.$$typeof===xt)return b(h,p,Si(h,g),A);Ei(h,g)}return null}function N(h,p,g,A,B){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return h=h.get(g)||null,o(p,h,""+A,B);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case oa:return h=h.get(A.key===null?g:A.key)||null,u(p,h,A,B);case Et:return h=h.get(A.key===null?g:A.key)||null,v(p,h,A,B);case Dt:return A=Fa(A),N(h,p,g,A,B)}if(Vt(A)||ht(A))return h=h.get(g)||null,S(p,h,A,B,null);if(typeof A.then=="function")return N(h,p,g,Ti(A),B);if(A.$$typeof===xt)return N(h,p,g,Si(p,A),B);Ei(p,A)}return null}function M(h,p,g,A){for(var B=null,F=null,O=p,Q=p=0,K=null;O!==null&&Q<g.length;Q++){O.index>Q?(K=O,O=null):K=O.sibling;var $=b(h,O,g[Q],A);if($===null){O===null&&(O=K);break}e&&O&&$.alternate===null&&t(h,O),p=n($,p,Q),F===null?B=$:F.sibling=$,F=$,O=K}if(Q===g.length)return s(h,O),P&&Jt(h,Q),B;if(O===null){for(;Q<g.length;Q++)O=w(h,g[Q],A),O!==null&&(p=n(O,p,Q),F===null?B=O:F.sibling=O,F=O);return P&&Jt(h,Q),B}for(O=l(O);Q<g.length;Q++)K=N(O,h,Q,g[Q],A),K!==null&&(e&&K.alternate!==null&&O.delete(K.key===null?Q:K.key),p=n(K,p,Q),F===null?B=K:F.sibling=K,F=K);return e&&O.forEach(function(za){return t(h,za)}),P&&Jt(h,Q),B}function q(h,p,g,A){if(g==null)throw Error(c(151));for(var B=null,F=null,O=p,Q=p=0,K=null,$=g.next();O!==null&&!$.done;Q++,$=g.next()){O.index>Q?(K=O,O=null):K=O.sibling;var za=b(h,O,$.value,A);if(za===null){O===null&&(O=K);break}e&&O&&za.alternate===null&&t(h,O),p=n(za,p,Q),F===null?B=za:F.sibling=za,F=za,O=K}if($.done)return s(h,O),P&&Jt(h,Q),B;if(O===null){for(;!$.done;Q++,$=g.next())$=w(h,$.value,A),$!==null&&(p=n($,p,Q),F===null?B=$:F.sibling=$,F=$);return P&&Jt(h,Q),B}for(O=l(O);!$.done;Q++,$=g.next())$=N(O,h,Q,$.value,A),$!==null&&(e&&$.alternate!==null&&O.delete($.key===null?Q:$.key),p=n($,p,Q),F===null?B=$:F.sibling=$,F=$);return e&&O.forEach(function(eg){return t(h,eg)}),P&&Jt(h,Q),B}function re(h,p,g,A){if(typeof g=="object"&&g!==null&&g.type===pt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case oa:e:{for(var B=g.key;p!==null;){if(p.key===B){if(B=g.type,B===pt){if(p.tag===7){s(h,p.sibling),A=i(p,g.props.children),A.return=h,h=A;break e}}else if(p.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Dt&&Fa(B)===p.type){s(h,p.sibling),A=i(p,g.props),yl(A,g),A.return=h,h=A;break e}s(h,p);break}else t(h,p);p=p.sibling}g.type===pt?(A=Xa(g.props.children,h.mode,A,g.key),A.return=h,h=A):(A=bi(g.type,g.key,g.props,null,h.mode,A),yl(A,g),A.return=h,h=A)}return r(h);case Et:e:{for(B=g.key;p!==null;){if(p.key===B)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){s(h,p.sibling),A=i(p,g.children||[]),A.return=h,h=A;break e}else{s(h,p);break}else t(h,p);p=p.sibling}A=gr(g,h.mode,A),A.return=h,h=A}return r(h);case Dt:return g=Fa(g),re(h,p,g,A)}if(Vt(g))return M(h,p,g,A);if(ht(g)){if(B=ht(g),typeof B!="function")throw Error(c(150));return g=B.call(g),q(h,p,g,A)}if(typeof g.then=="function")return re(h,p,Ti(g),A);if(g.$$typeof===xt)return re(h,p,Si(h,g),A);Ei(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,p!==null&&p.tag===6?(s(h,p.sibling),A=i(p,g),A.return=h,h=A):(s(h,p),A=fr(g,h.mode,A),A.return=h,h=A),r(h)):s(h,p)}return function(h,p,g,A){try{gl=0;var B=re(h,p,g,A);return Os=null,B}catch(O){if(O===Us||O===Ci)throw O;var F=st(29,O,null,h.mode);return F.lanes=A,F.return=h,F}finally{}}}var Wa=Bd(!0),qd=Bd(!1),va=!1;function Dr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ja(e,t,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(te&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=vi(e),jd(e,null,s),t}return yi(e,l,t,s),vi(e)}function vl(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,s|=l,t.lanes=s,Do(e,s)}}function _r(e,t){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var i=null,n=null;if(s=s.firstBaseUpdate,s!==null){do{var r={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};n===null?i=n=r:n=n.next=r,s=s.next}while(s!==null);n===null?i=n=t:n=n.next=t}else i=n=t;s={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}var Mr=!1;function bl(){if(Mr){var e=Ms;if(e!==null)throw e}}function jl(e,t,s,l){Mr=!1;var i=e.updateQueue;va=!1;var n=i.firstBaseUpdate,r=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var u=o,v=u.next;u.next=null,r===null?n=v:r.next=v,r=u;var S=e.alternate;S!==null&&(S=S.updateQueue,o=S.lastBaseUpdate,o!==r&&(o===null?S.firstBaseUpdate=v:o.next=v,S.lastBaseUpdate=u))}if(n!==null){var w=i.baseState;r=0,S=v=u=null,o=n;do{var b=o.lane&-536870913,N=b!==o.lane;if(N?(J&b)===b:(l&b)===b){b!==0&&b===_s&&(Mr=!0),S!==null&&(S=S.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var M=e,q=o;b=t;var re=s;switch(q.tag){case 1:if(M=q.payload,typeof M=="function"){w=M.call(re,w,b);break e}w=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=q.payload,b=typeof M=="function"?M.call(re,w,b):M,b==null)break e;w=k({},w,b);break e;case 2:va=!0}}b=o.callback,b!==null&&(e.flags|=64,N&&(e.flags|=8192),N=i.callbacks,N===null?i.callbacks=[b]:N.push(b))}else N={lane:b,tag:o.tag,payload:o.payload,callback:o.callback,next:null},S===null?(v=S=N,u=w):S=S.next=N,r|=b;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;N=o,o=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);S===null&&(u=w),i.baseState=u,i.firstBaseUpdate=v,i.lastBaseUpdate=S,n===null&&(i.shared.lanes=0),wa|=r,e.lanes=r,e.memoizedState=w}}function Hd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Ld(e,t){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Hd(s[e],t)}var ks=Ge(null),Di=Ge(0);function Gd(e,t){e=la,ae(Di,e),ae(ks,t),la=e|t.baseLanes}function Ur(){ae(Di,la),ae(ks,ks.current)}function Or(){la=Di.current,ge(ks),ge(Di)}var lt=Ge(null),St=null;function Na(e){var t=e.alternate;ae(be,be.current&1),ae(lt,e),St===null&&(t===null||ks.current!==null||t.memoizedState!==null)&&(St=e)}function kr(e){ae(be,be.current),ae(lt,e),St===null&&(St=e)}function Vd(e){e.tag===22?(ae(be,be.current),ae(lt,e),St===null&&(St=e)):Sa()}function Sa(){ae(be,be.current),ae(lt,lt.current)}function it(e){ge(lt),St===e&&(St=null),ge(be)}var be=Ge(0);function Ri(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Gc(s)||Vc(s)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zt=0,V=null,ie=null,Se=null,_i=!1,zs=!1,es=!1,Mi=0,Nl=0,Bs=null,Qh=0;function ye(){throw Error(c(321))}function zr(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!at(e[s],t[s]))return!1;return!0}function Br(e,t,s,l,i,n){return Zt=n,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Cu:$r,es=!1,n=s(l,i),es=!1,zs&&(n=Id(t,s,l,i)),Qd(e),n}function Qd(e){C.H=Cl;var t=ie!==null&&ie.next!==null;if(Zt=0,Se=ie=V=null,_i=!1,Nl=0,Bs=null,t)throw Error(c(300));e===null||Ae||(e=e.dependencies,e!==null&&Ni(e)&&(Ae=!0))}function Id(e,t,s,l){V=e;var i=0;do{if(zs&&(Bs=null),Nl=0,zs=!1,25<=i)throw Error(c(301));if(i+=1,Se=ie=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}C.H=wu,n=t(s,l)}while(zs);return n}function Ih(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?Sl(t):t,e=e.useState()[0],(ie!==null?ie.memoizedState:null)!==e&&(V.flags|=1024),t}function qr(){var e=Mi!==0;return Mi=0,e}function Hr(e,t,s){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s}function Lr(e){if(_i){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_i=!1}Zt=0,Se=ie=V=null,zs=!1,Nl=Mi=0,Bs=null}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?V.memoizedState=Se=e:Se=Se.next=e,Se}function je(){if(ie===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=Se===null?V.memoizedState:Se.next;if(t!==null)Se=t,ie=e;else{if(e===null)throw V.alternate===null?Error(c(467)):Error(c(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},Se===null?V.memoizedState=Se=e:Se=Se.next=e}return Se}function Ui(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sl(e){var t=Nl;return Nl+=1,Bs===null&&(Bs=[]),e=Od(Bs,e,t),t=V,(Se===null?t.memoizedState:Se.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Cu:$r),e}function Oi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sl(e);if(e.$$typeof===xt)return Be(e)}throw Error(c(438,String(e)))}function Gr(e){var t=null,s=V.updateQueue;if(s!==null&&(t=s.memoCache),t==null){var l=V.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),s===null&&(s=Ui(),V.updateQueue=s),s.memoCache=t,s=t.data[t.index],s===void 0)for(s=t.data[t.index]=Array(e),l=0;l<e;l++)s[l]=Zl;return t.index++,s}function Ft(e,t){return typeof t=="function"?t(e):t}function ki(e){var t=je();return Vr(t,ie,e)}function Vr(e,t,s){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=s;var i=e.baseQueue,n=l.pending;if(n!==null){if(i!==null){var r=i.next;i.next=n.next,n.next=r}t.baseQueue=i=n,l.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{t=i.next;var o=r=null,u=null,v=t,S=!1;do{var w=v.lane&-536870913;if(w!==v.lane?(J&w)===w:(Zt&w)===w){var b=v.revertLane;if(b===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),w===_s&&(S=!0);else if((Zt&b)===b){v=v.next,b===_s&&(S=!0);continue}else w={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},u===null?(o=u=w,r=n):u=u.next=w,V.lanes|=b,wa|=b;w=v.action,es&&s(n,w),n=v.hasEagerState?v.eagerState:s(n,w)}else b={lane:w,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},u===null?(o=u=b,r=n):u=u.next=b,V.lanes|=w,wa|=w;v=v.next}while(v!==null&&v!==t);if(u===null?r=n:u.next=o,!at(n,e.memoizedState)&&(Ae=!0,S&&(s=Ms,s!==null)))throw s;e.memoizedState=n,e.baseState=r,e.baseQueue=u,l.lastRenderedState=n}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Qr(e){var t=je(),s=t.queue;if(s===null)throw Error(c(311));s.lastRenderedReducer=e;var l=s.dispatch,i=s.pending,n=t.memoizedState;if(i!==null){s.pending=null;var r=i=i.next;do n=e(n,r.action),r=r.next;while(r!==i);at(n,t.memoizedState)||(Ae=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),s.lastRenderedState=n}return[n,l]}function Yd(e,t,s){var l=V,i=je(),n=P;if(n){if(s===void 0)throw Error(c(407));s=s()}else s=t();var r=!at((ie||i).memoizedState,s);if(r&&(i.memoizedState=s,Ae=!0),i=i.queue,Xr(Kd.bind(null,l,i,e),[e]),i.getSnapshot!==t||r||Se!==null&&Se.memoizedState.tag&1){if(l.flags|=2048,qs(9,{destroy:void 0},Jd.bind(null,l,i,s,t),null),ce===null)throw Error(c(349));n||(Zt&127)!==0||Xd(l,t,s)}return s}function Xd(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=V.updateQueue,t===null?(t=Ui(),V.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function Jd(e,t,s,l){t.value=s,t.getSnapshot=l,Pd(t)&&Zd(e)}function Kd(e,t,s){return s(function(){Pd(t)&&Zd(e)})}function Pd(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!at(e,s)}catch{return!0}}function Zd(e){var t=Ya(e,2);t!==null&&Ze(t,e,2)}function Ir(e){var t=Ve();if(typeof e=="function"){var s=e;if(e=s(),es){ma(!0);try{s()}finally{ma(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:e},t}function Fd(e,t,s,l){return e.baseState=s,Vr(e,ie,typeof l=="function"?l:Ft)}function Yh(e,t,s,l,i){if(qi(e))throw Error(c(485));if(e=t.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){n.listeners.push(r)}};C.T!==null?s(!0):n.isTransition=!1,l(n),s=t.pending,s===null?(n.next=t.pending=n,$d(t,n)):(n.next=s.next,t.pending=s.next=n)}}function $d(e,t){var s=t.action,l=t.payload,i=e.state;if(t.isTransition){var n=C.T,r={};C.T=r;try{var o=s(i,l),u=C.S;u!==null&&u(r,o),Wd(e,t,o)}catch(v){Yr(e,t,v)}finally{n!==null&&r.types!==null&&(n.types=r.types),C.T=n}}else try{n=s(i,l),Wd(e,t,n)}catch(v){Yr(e,t,v)}}function Wd(e,t,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){eu(e,t,l)},function(l){return Yr(e,t,l)}):eu(e,t,s)}function eu(e,t,s){t.status="fulfilled",t.value=s,tu(t),e.state=s,t=e.pending,t!==null&&(s=t.next,s===t?e.pending=null:(s=s.next,t.next=s,$d(e,s)))}function Yr(e,t,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=s,tu(t),t=t.next;while(t!==l)}e.action=null}function tu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function au(e,t){return t}function su(e,t){if(P){var s=ce.formState;if(s!==null){e:{var l=V;if(P){if(me){t:{for(var i=me,n=Nt;i.nodeType!==8;){if(!n){i=null;break t}if(i=At(i.nextSibling),i===null){i=null;break t}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){me=At(i.nextSibling),l=i.data==="F!";break e}}ga(l)}l=!1}l&&(t=s[0])}}return s=Ve(),s.memoizedState=s.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:au,lastRenderedState:t},s.queue=l,s=Nu.bind(null,V,l),l.dispatch=s,l=Ir(!1),n=Fr.bind(null,V,!1,l.queue),l=Ve(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,s=Yh.bind(null,V,i,n,s),i.dispatch=s,l.memoizedState=e,[t,s,!1]}function lu(e){var t=je();return iu(t,ie,e)}function iu(e,t,s){if(t=Vr(e,t,au)[0],e=ki(Ft)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Sl(t)}catch(r){throw r===Us?Ci:r}else l=t;t=je();var i=t.queue,n=i.dispatch;return s!==t.memoizedState&&(V.flags|=2048,qs(9,{destroy:void 0},Xh.bind(null,i,s),null)),[l,n,e]}function Xh(e,t){e.action=t}function nu(e){var t=je(),s=ie;if(s!==null)return iu(t,s,e);je(),t=t.memoizedState,s=je();var l=s.queue.dispatch;return s.memoizedState=e,[t,l,!1]}function qs(e,t,s,l){return e={tag:e,create:s,deps:l,inst:t,next:null},t=V.updateQueue,t===null&&(t=Ui(),V.updateQueue=t),s=t.lastEffect,s===null?t.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,t.lastEffect=e),e}function ru(){return je().memoizedState}function zi(e,t,s,l){var i=Ve();V.flags|=e,i.memoizedState=qs(1|t,{destroy:void 0},s,l===void 0?null:l)}function Bi(e,t,s,l){var i=je();l=l===void 0?null:l;var n=i.memoizedState.inst;ie!==null&&l!==null&&zr(l,ie.memoizedState.deps)?i.memoizedState=qs(t,n,s,l):(V.flags|=e,i.memoizedState=qs(1|t,n,s,l))}function cu(e,t){zi(8390656,8,e,t)}function Xr(e,t){Bi(2048,8,e,t)}function Jh(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=Ui(),V.updateQueue=t,t.events=[e];else{var s=t.events;s===null?t.events=[e]:s.push(e)}}function ou(e){var t=je().memoizedState;return Jh({ref:t,nextImpl:e}),function(){if((te&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function du(e,t){return Bi(4,2,e,t)}function uu(e,t){return Bi(4,4,e,t)}function mu(e,t){if(typeof t=="function"){e=e();var s=t(e);return function(){typeof s=="function"?s():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pu(e,t,s){s=s!=null?s.concat([e]):null,Bi(4,4,mu.bind(null,t,e),s)}function Jr(){}function xu(e,t){var s=je();t=t===void 0?null:t;var l=s.memoizedState;return t!==null&&zr(t,l[1])?l[0]:(s.memoizedState=[e,t],e)}function hu(e,t){var s=je();t=t===void 0?null:t;var l=s.memoizedState;if(t!==null&&zr(t,l[1]))return l[0];if(l=e(),es){ma(!0);try{e()}finally{ma(!1)}}return s.memoizedState=[l,t],l}function Kr(e,t,s){return s===void 0||(Zt&1073741824)!==0&&(J&261930)===0?e.memoizedState=t:(e.memoizedState=s,e=fm(),V.lanes|=e,wa|=e,s)}function fu(e,t,s,l){return at(s,t)?s:ks.current!==null?(e=Kr(e,s,l),at(e,t)||(Ae=!0),e):(Zt&42)===0||(Zt&1073741824)!==0&&(J&261930)===0?(Ae=!0,e.memoizedState=s):(e=fm(),V.lanes|=e,wa|=e,t)}function gu(e,t,s,l,i){var n=_.p;_.p=n!==0&&8>n?n:8;var r=C.T,o={};C.T=o,Fr(e,!1,t,s);try{var u=i(),v=C.S;if(v!==null&&v(o,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var S=Vh(u,l);Al(e,t,S,ct(e))}else Al(e,t,l,ct(e))}catch(w){Al(e,t,{then:function(){},status:"rejected",reason:w},ct())}finally{_.p=n,r!==null&&o.types!==null&&(r.types=o.types),C.T=r}}function Kh(){}function Pr(e,t,s,l){if(e.tag!==5)throw Error(c(476));var i=yu(e).queue;gu(e,i,t,H,s===null?Kh:function(){return vu(e),s(l)})}function yu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:H},next:null};var s={};return t.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:s},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function vu(e){var t=yu(e);t.next===null&&(t=e.alternate.memoizedState),Al(e,t.next.queue,{},ct())}function Zr(){return Be(Gl)}function bu(){return je().memoizedState}function ju(){return je().memoizedState}function Ph(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var s=ct();e=ba(s);var l=ja(t,e,s);l!==null&&(Ze(l,t,s),vl(l,t,s)),t={cache:Cr()},e.payload=t;return}t=t.return}}function Zh(e,t,s){var l=ct();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},qi(e)?Su(t,s):(s=xr(e,t,s,l),s!==null&&(Ze(s,e,l),Au(s,t,l)))}function Nu(e,t,s){var l=ct();Al(e,t,s,l)}function Al(e,t,s,l){var i={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(qi(e))Su(t,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var r=t.lastRenderedState,o=n(r,s);if(i.hasEagerState=!0,i.eagerState=o,at(o,r))return yi(e,t,i,0),ce===null&&gi(),!1}catch{}finally{}if(s=xr(e,t,i,l),s!==null)return Ze(s,e,l),Au(s,t,l),!0}return!1}function Fr(e,t,s,l){if(l={lane:2,revertLane:Dc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},qi(e)){if(t)throw Error(c(479))}else t=xr(e,s,l,2),t!==null&&Ze(t,e,2)}function qi(e){var t=e.alternate;return e===V||t!==null&&t===V}function Su(e,t){zs=_i=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function Au(e,t,s){if((s&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,s|=l,t.lanes=s,Do(e,s)}}var Cl={readContext:Be,use:Oi,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};Cl.useEffectEvent=ye;var Cu={readContext:Be,use:Oi,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:cu,useImperativeHandle:function(e,t,s){s=s!=null?s.concat([e]):null,zi(4194308,4,mu.bind(null,t,e),s)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){zi(4,2,e,t)},useMemo:function(e,t){var s=Ve();t=t===void 0?null:t;var l=e();if(es){ma(!0);try{e()}finally{ma(!1)}}return s.memoizedState=[l,t],l},useReducer:function(e,t,s){var l=Ve();if(s!==void 0){var i=s(t);if(es){ma(!0);try{s(t)}finally{ma(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=Zh.bind(null,V,e),[l.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:function(e){e=Ir(e);var t=e.queue,s=Nu.bind(null,V,t);return t.dispatch=s,[e.memoizedState,s]},useDebugValue:Jr,useDeferredValue:function(e,t){var s=Ve();return Kr(s,e,t)},useTransition:function(){var e=Ir(!1);return e=gu.bind(null,V,e.queue,!0,!1),Ve().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,s){var l=V,i=Ve();if(P){if(s===void 0)throw Error(c(407));s=s()}else{if(s=t(),ce===null)throw Error(c(349));(J&127)!==0||Xd(l,t,s)}i.memoizedState=s;var n={value:s,getSnapshot:t};return i.queue=n,cu(Kd.bind(null,l,n,e),[e]),l.flags|=2048,qs(9,{destroy:void 0},Jd.bind(null,l,n,s,t),null),s},useId:function(){var e=Ve(),t=ce.identifierPrefix;if(P){var s=zt,l=kt;s=(l&~(1<<32-tt(l)-1)).toString(32)+s,t="_"+t+"R_"+s,s=Mi++,0<s&&(t+="H"+s.toString(32)),t+="_"}else s=Qh++,t="_"+t+"r_"+s.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zr,useFormState:su,useActionState:su,useOptimistic:function(e){var t=Ve();t.memoizedState=t.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=s,t=Fr.bind(null,V,!0,s),s.dispatch=t,[e,t]},useMemoCache:Gr,useCacheRefresh:function(){return Ve().memoizedState=Ph.bind(null,V)},useEffectEvent:function(e){var t=Ve(),s={impl:e};return t.memoizedState=s,function(){if((te&2)!==0)throw Error(c(440));return s.impl.apply(void 0,arguments)}}},$r={readContext:Be,use:Oi,useCallback:xu,useContext:Be,useEffect:Xr,useImperativeHandle:pu,useInsertionEffect:du,useLayoutEffect:uu,useMemo:hu,useReducer:ki,useRef:ru,useState:function(){return ki(Ft)},useDebugValue:Jr,useDeferredValue:function(e,t){var s=je();return fu(s,ie.memoizedState,e,t)},useTransition:function(){var e=ki(Ft)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:Yd,useId:bu,useHostTransitionStatus:Zr,useFormState:lu,useActionState:lu,useOptimistic:function(e,t){var s=je();return Fd(s,ie,e,t)},useMemoCache:Gr,useCacheRefresh:ju};$r.useEffectEvent=ou;var wu={readContext:Be,use:Oi,useCallback:xu,useContext:Be,useEffect:Xr,useImperativeHandle:pu,useInsertionEffect:du,useLayoutEffect:uu,useMemo:hu,useReducer:Qr,useRef:ru,useState:function(){return Qr(Ft)},useDebugValue:Jr,useDeferredValue:function(e,t){var s=je();return ie===null?Kr(s,e,t):fu(s,ie.memoizedState,e,t)},useTransition:function(){var e=Qr(Ft)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:Yd,useId:bu,useHostTransitionStatus:Zr,useFormState:nu,useActionState:nu,useOptimistic:function(e,t){var s=je();return ie!==null?Fd(s,ie,e,t):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Gr,useCacheRefresh:ju};wu.useEffectEvent=ou;function Wr(e,t,s,l){t=e.memoizedState,s=s(l,t),s=s==null?t:k({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var ec={enqueueSetState:function(e,t,s){e=e._reactInternals;var l=ct(),i=ba(l);i.payload=t,s!=null&&(i.callback=s),t=ja(e,i,l),t!==null&&(Ze(t,e,l),vl(t,e,l))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var l=ct(),i=ba(l);i.tag=1,i.payload=t,s!=null&&(i.callback=s),t=ja(e,i,l),t!==null&&(Ze(t,e,l),vl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=ct(),l=ba(s);l.tag=2,t!=null&&(l.callback=t),t=ja(e,l,s),t!==null&&(Ze(t,e,s),vl(t,e,s))}};function Tu(e,t,s,l,i,n,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,n,r):t.prototype&&t.prototype.isPureReactComponent?!ul(s,l)||!ul(i,n):!0}function Eu(e,t,s,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,l),t.state!==e&&ec.enqueueReplaceState(t,t.state,null)}function ts(e,t){var s=t;if("ref"in t){s={};for(var l in t)l!=="ref"&&(s[l]=t[l])}if(e=e.defaultProps){s===t&&(s=k({},s));for(var i in e)s[i]===void 0&&(s[i]=e[i])}return s}function Du(e){fi(e)}function Ru(e){console.error(e)}function _u(e){fi(e)}function Hi(e,t){try{var s=e.onUncaughtError;s(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Mu(e,t,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function tc(e,t,s){return s=ba(s),s.tag=3,s.payload={element:null},s.callback=function(){Hi(e,t)},s}function Uu(e){return e=ba(e),e.tag=3,e}function Ou(e,t,s,l){var i=s.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;e.payload=function(){return i(n)},e.callback=function(){Mu(t,s,l)}}var r=s.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Mu(t,s,l),typeof i!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Fh(e,t,s,l,i){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=s.alternate,t!==null&&Rs(t,s,i,!0),s=lt.current,s!==null){switch(s.tag){case 31:case 13:return St===null?Fi():s.alternate===null&&ve===0&&(ve=3),s.flags&=-257,s.flags|=65536,s.lanes=i,l===wi?s.flags|=16384:(t=s.updateQueue,t===null?s.updateQueue=new Set([l]):t.add(l),wc(e,l,i)),!1;case 22:return s.flags|=65536,l===wi?s.flags|=16384:(t=s.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=t):(s=t.retryQueue,s===null?t.retryQueue=new Set([l]):s.add(l)),wc(e,l,i)),!1}throw Error(c(435,s.tag))}return wc(e,l,i),Fi(),!1}if(P)return t=lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==br&&(e=Error(c(422),{cause:l}),xl(vt(e,s)))):(l!==br&&(t=Error(c(423),{cause:l}),xl(vt(t,s))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=vt(l,s),i=tc(e.stateNode,l,i),_r(e,i),ve!==4&&(ve=2)),!1;var n=Error(c(520),{cause:l});if(n=vt(n,s),Ul===null?Ul=[n]:Ul.push(n),ve!==4&&(ve=2),t===null)return!0;l=vt(l,s),s=t;do{switch(s.tag){case 3:return s.flags|=65536,e=i&-i,s.lanes|=e,e=tc(s.stateNode,l,e),_r(s,e),!1;case 1:if(t=s.type,n=s.stateNode,(s.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Ta===null||!Ta.has(n))))return s.flags|=65536,i&=-i,s.lanes|=i,i=Uu(i),Ou(i,e,s,l),_r(s,i),!1}s=s.return}while(s!==null);return!1}var ac=Error(c(461)),Ae=!1;function qe(e,t,s,l){t.child=e===null?qd(t,null,s,l):Wa(t,e.child,s,l)}function ku(e,t,s,l,i){s=s.render;var n=t.ref;if("ref"in l){var r={};for(var o in l)o!=="ref"&&(r[o]=l[o])}else r=l;return Pa(t),l=Br(e,t,s,r,n,i),o=qr(),e!==null&&!Ae?(Hr(e,t,i),$t(e,t,i)):(P&&o&&yr(t),t.flags|=1,qe(e,t,l,i),t.child)}function zu(e,t,s,l,i){if(e===null){var n=s.type;return typeof n=="function"&&!hr(n)&&n.defaultProps===void 0&&s.compare===null?(t.tag=15,t.type=n,Bu(e,t,n,l,i)):(e=bi(s.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!dc(e,i)){var r=n.memoizedProps;if(s=s.compare,s=s!==null?s:ul,s(r,l)&&e.ref===t.ref)return $t(e,t,i)}return t.flags|=1,e=Xt(n,l),e.ref=t.ref,e.return=t,t.child=e}function Bu(e,t,s,l,i){if(e!==null){var n=e.memoizedProps;if(ul(n,l)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=l=n,dc(e,i))(e.flags&131072)!==0&&(Ae=!0);else return t.lanes=e.lanes,$t(e,t,i)}return sc(e,t,s,l,i)}function qu(e,t,s,l){var i=l.children,n=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|s:s,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~n}else l=0,t.child=null;return Hu(e,t,n,s,l)}if((s&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ai(t,n!==null?n.cachePool:null),n!==null?Gd(t,n):Ur(),Vd(t);else return l=t.lanes=536870912,Hu(e,t,n!==null?n.baseLanes|s:s,s,l)}else n!==null?(Ai(t,n.cachePool),Gd(t,n),Sa(),t.memoizedState=null):(e!==null&&Ai(t,null),Ur(),Sa());return qe(e,t,i,s),t.child}function wl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hu(e,t,s,l,i){var n=Tr();return n=n===null?null:{parent:Ne._currentValue,pool:n},t.memoizedState={baseLanes:s,cachePool:n},e!==null&&Ai(t,null),Ur(),Vd(t),e!==null&&Rs(e,t,l,!0),t.childLanes=i,null}function Li(e,t){return t=Vi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lu(e,t,s){return Wa(t,e.child,null,s),e=Li(t,t.pendingProps),e.flags|=2,it(t),t.memoizedState=null,e}function $h(e,t,s){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(P){if(l.mode==="hidden")return e=Li(t,l),t.lanes=536870912,wl(null,e);if(kr(t),(e=me)?(e=$m(e,Nt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:kt,overflow:zt}:null,retryLane:536870912,hydrationErrors:null},s=Sd(e),s.return=t,t.child=s,ze=t,me=null)):e=null,e===null)throw ga(t);return t.lanes=536870912,null}return Li(t,l)}var n=e.memoizedState;if(n!==null){var r=n.dehydrated;if(kr(t),i)if(t.flags&256)t.flags&=-257,t=Lu(e,t,s);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ae||Rs(e,t,s,!1),i=(s&e.childLanes)!==0,Ae||i){if(l=ce,l!==null&&(r=Ro(l,s),r!==0&&r!==n.retryLane))throw n.retryLane=r,Ya(e,r),Ze(l,e,r),ac;Fi(),t=Lu(e,t,s)}else e=n.treeContext,me=At(r.nextSibling),ze=t,P=!0,fa=null,Nt=!1,e!==null&&wd(t,e),t=Li(t,l),t.flags|=4096;return t}return e=Xt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gi(e,t){var s=t.ref;if(s===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(c(284));(e===null||e.ref!==s)&&(t.flags|=4194816)}}function sc(e,t,s,l,i){return Pa(t),s=Br(e,t,s,l,void 0,i),l=qr(),e!==null&&!Ae?(Hr(e,t,i),$t(e,t,i)):(P&&l&&yr(t),t.flags|=1,qe(e,t,s,i),t.child)}function Gu(e,t,s,l,i,n){return Pa(t),t.updateQueue=null,s=Id(t,l,s,i),Qd(e),l=qr(),e!==null&&!Ae?(Hr(e,t,n),$t(e,t,n)):(P&&l&&yr(t),t.flags|=1,qe(e,t,s,n),t.child)}function Vu(e,t,s,l,i){if(Pa(t),t.stateNode===null){var n=ws,r=s.contextType;typeof r=="object"&&r!==null&&(n=Be(r)),n=new s(l,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ec,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=l,n.state=t.memoizedState,n.refs={},Dr(t),r=s.contextType,n.context=typeof r=="object"&&r!==null?Be(r):ws,n.state=t.memoizedState,r=s.getDerivedStateFromProps,typeof r=="function"&&(Wr(t,s,r,l),n.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(r=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),r!==n.state&&ec.enqueueReplaceState(n,n.state,null),jl(t,l,n,i),bl(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){n=t.stateNode;var o=t.memoizedProps,u=ts(s,o);n.props=u;var v=n.context,S=s.contextType;r=ws,typeof S=="object"&&S!==null&&(r=Be(S));var w=s.getDerivedStateFromProps;S=typeof w=="function"||typeof n.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,S||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o||v!==r)&&Eu(t,n,l,r),va=!1;var b=t.memoizedState;n.state=b,jl(t,l,n,i),bl(),v=t.memoizedState,o||b!==v||va?(typeof w=="function"&&(Wr(t,s,w,l),v=t.memoizedState),(u=va||Tu(t,s,u,l,b,v,r))?(S||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=v),n.props=l,n.state=v,n.context=r,l=u):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{n=t.stateNode,Rr(e,t),r=t.memoizedProps,S=ts(s,r),n.props=S,w=t.pendingProps,b=n.context,v=s.contextType,u=ws,typeof v=="object"&&v!==null&&(u=Be(v)),o=s.getDerivedStateFromProps,(v=typeof o=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(r!==w||b!==u)&&Eu(t,n,l,u),va=!1,b=t.memoizedState,n.state=b,jl(t,l,n,i),bl();var N=t.memoizedState;r!==w||b!==N||va||e!==null&&e.dependencies!==null&&Ni(e.dependencies)?(typeof o=="function"&&(Wr(t,s,o,l),N=t.memoizedState),(S=va||Tu(t,s,S,l,b,N,u)||e!==null&&e.dependencies!==null&&Ni(e.dependencies))?(v||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,N,u),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,N,u)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||r===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=N),n.props=l,n.state=N,n.context=u,l=S):(typeof n.componentDidUpdate!="function"||r===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),l=!1)}return n=l,Gi(e,t),l=(t.flags&128)!==0,n||l?(n=t.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&l?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,s,i)):qe(e,t,s,i),t.memoizedState=n.state,e=t.child):e=$t(e,t,i),e}function Qu(e,t,s,l){return Ja(),t.flags|=256,qe(e,t,s,l),t.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ic(e){return{baseLanes:e,cachePool:Md()}}function nc(e,t,s){return e=e!==null?e.childLanes&~s:0,t&&(e|=rt),e}function Iu(e,t,s){var l=t.pendingProps,i=!1,n=(t.flags&128)!==0,r;if((r=n)||(r=e!==null&&e.memoizedState===null?!1:(be.current&2)!==0),r&&(i=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(P){if(i?Na(t):Sa(),(e=me)?(e=$m(e,Nt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ha!==null?{id:kt,overflow:zt}:null,retryLane:536870912,hydrationErrors:null},s=Sd(e),s.return=t,t.child=s,ze=t,me=null)):e=null,e===null)throw ga(t);return Vc(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,i?(Sa(),i=t.mode,o=Vi({mode:"hidden",children:o},i),l=Xa(l,i,s,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=ic(s),l.childLanes=nc(e,r,s),t.memoizedState=lc,wl(null,l)):(Na(t),rc(t,o))}var u=e.memoizedState;if(u!==null&&(o=u.dehydrated,o!==null)){if(n)t.flags&256?(Na(t),t.flags&=-257,t=cc(e,t,s)):t.memoizedState!==null?(Sa(),t.child=e.child,t.flags|=128,t=null):(Sa(),o=l.fallback,i=t.mode,l=Vi({mode:"visible",children:l.children},i),o=Xa(o,i,s,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,Wa(t,e.child,null,s),l=t.child,l.memoizedState=ic(s),l.childLanes=nc(e,r,s),t.memoizedState=lc,t=wl(null,l));else if(Na(t),Vc(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var v=r.dgst;r=v,l=Error(c(419)),l.stack="",l.digest=r,xl({value:l,source:null,stack:null}),t=cc(e,t,s)}else if(Ae||Rs(e,t,s,!1),r=(s&e.childLanes)!==0,Ae||r){if(r=ce,r!==null&&(l=Ro(r,s),l!==0&&l!==u.retryLane))throw u.retryLane=l,Ya(e,l),Ze(r,e,l),ac;Gc(o)||Fi(),t=cc(e,t,s)}else Gc(o)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,me=At(o.nextSibling),ze=t,P=!0,fa=null,Nt=!1,e!==null&&wd(t,e),t=rc(t,l.children),t.flags|=4096);return t}return i?(Sa(),o=l.fallback,i=t.mode,u=e.child,v=u.sibling,l=Xt(u,{mode:"hidden",children:l.children}),l.subtreeFlags=u.subtreeFlags&65011712,v!==null?o=Xt(v,o):(o=Xa(o,i,s,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,wl(null,l),l=t.child,o=e.child.memoizedState,o===null?o=ic(s):(i=o.cachePool,i!==null?(u=Ne._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=Md(),o={baseLanes:o.baseLanes|s,cachePool:i}),l.memoizedState=o,l.childLanes=nc(e,r,s),t.memoizedState=lc,wl(e.child,l)):(Na(t),s=e.child,e=s.sibling,s=Xt(s,{mode:"visible",children:l.children}),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s)}function rc(e,t){return t=Vi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Vi(e,t){return e=st(22,e,null,t),e.lanes=0,e}function cc(e,t,s){return Wa(t,e.child,null,s),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yu(e,t,s){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Sr(e.return,t,s)}function oc(e,t,s,l,i,n){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:i,treeForkCount:n}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=s,r.tailMode=i,r.treeForkCount=n)}function Xu(e,t,s){var l=t.pendingProps,i=l.revealOrder,n=l.tail;l=l.children;var r=be.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ae(be,r),qe(e,t,l,s),l=P?pl:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,s,t);else if(e.tag===19)Yu(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(s=t.child,i=null;s!==null;)e=s.alternate,e!==null&&Ri(e)===null&&(i=s),s=s.sibling;s=i,s===null?(i=t.child,t.child=null):(i=s.sibling,s.sibling=null),oc(t,!1,i,s,n,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ri(e)===null){t.child=i;break}e=i.sibling,i.sibling=s,s=i,i=e}oc(t,!0,s,null,n,l);break;case"together":oc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function $t(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),wa|=t.lanes,(s&t.childLanes)===0)if(e!==null){if(Rs(e,t,s,!1),(s&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,s=Xt(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=Xt(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function dc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ni(e)))}function Wh(e,t,s){switch(t.tag){case 3:Wl(t,t.stateNode.containerInfo),ya(t,Ne,e.memoizedState.cache),Ja();break;case 27:case 5:On(t);break;case 4:Wl(t,t.stateNode.containerInfo);break;case 10:ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,kr(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Na(t),t.flags|=128,null):(s&t.child.childLanes)!==0?Iu(e,t,s):(Na(t),e=$t(e,t,s),e!==null?e.sibling:null);Na(t);break;case 19:var i=(e.flags&128)!==0;if(l=(s&t.childLanes)!==0,l||(Rs(e,t,s,!1),l=(s&t.childLanes)!==0),i){if(l)return Xu(e,t,s);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(be,be.current),l)break;return null;case 22:return t.lanes=0,qu(e,t,s,t.pendingProps);case 24:ya(t,Ne,e.memoizedState.cache)}return $t(e,t,s)}function Ju(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ae=!0;else{if(!dc(e,s)&&(t.flags&128)===0)return Ae=!1,Wh(e,t,s);Ae=(e.flags&131072)!==0}else Ae=!1,P&&(t.flags&1048576)!==0&&Cd(t,pl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e=="function")hr(e)?(l=ts(e,l),t.tag=1,t=Vu(null,t,e,l,s)):(t.tag=0,t=sc(null,t,e,l,s));else{if(e!=null){var i=e.$$typeof;if(i===da){t.tag=11,t=ku(null,t,e,l,s);break e}else if(i===Gt){t.tag=14,t=zu(null,t,e,l,s);break e}}throw t=$s(e)||e,Error(c(306,t,""))}}return t;case 0:return sc(e,t,t.type,t.pendingProps,s);case 1:return l=t.type,i=ts(l,t.pendingProps),Vu(e,t,l,i,s);case 3:e:{if(Wl(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var n=t.memoizedState;i=n.element,Rr(e,t),jl(t,l,null,s);var r=t.memoizedState;if(l=r.cache,ya(t,Ne,l),l!==n.cache&&Ar(t,[Ne],s,!0),bl(),l=r.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=Qu(e,t,l,s);break e}else if(l!==i){i=vt(Error(c(424)),t),xl(i),t=Qu(e,t,l,s);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(me=At(e.firstChild),ze=t,P=!0,fa=null,Nt=!0,s=qd(t,null,l,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ja(),l===i){t=$t(e,t,s);break e}qe(e,t,l,s)}t=t.child}return t;case 26:return Gi(e,t),e===null?(s=lp(t.type,null,t.pendingProps,null))?t.memoizedState=s:P||(s=t.type,e=t.pendingProps,l=ln(ua.current).createElement(s),l[ke]=t,l[Ie]=e,He(l,s,e),Me(l),t.stateNode=l):t.memoizedState=lp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return On(t),e===null&&P&&(l=t.stateNode=tp(t.type,t.pendingProps,ua.current),ze=t,Nt=!0,i=me,_a(t.type)?(Qc=i,me=At(l.firstChild)):me=i),qe(e,t,t.pendingProps.children,s),Gi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((i=l=me)&&(l=Rf(l,t.type,t.pendingProps,Nt),l!==null?(t.stateNode=l,ze=t,me=At(l.firstChild),Nt=!1,i=!0):i=!1),i||ga(t)),On(t),i=t.type,n=t.pendingProps,r=e!==null?e.memoizedProps:null,l=n.children,qc(i,n)?l=null:r!==null&&qc(i,r)&&(t.flags|=32),t.memoizedState!==null&&(i=Br(e,t,Ih,null,null,s),Gl._currentValue=i),Gi(e,t),qe(e,t,l,s),t.child;case 6:return e===null&&P&&((e=s=me)&&(s=_f(s,t.pendingProps,Nt),s!==null?(t.stateNode=s,ze=t,me=null,e=!0):e=!1),e||ga(t)),null;case 13:return Iu(e,t,s);case 4:return Wl(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Wa(t,null,l,s):qe(e,t,l,s),t.child;case 11:return ku(e,t,t.type,t.pendingProps,s);case 7:return qe(e,t,t.pendingProps,s),t.child;case 8:return qe(e,t,t.pendingProps.children,s),t.child;case 12:return qe(e,t,t.pendingProps.children,s),t.child;case 10:return l=t.pendingProps,ya(t,t.type,l.value),qe(e,t,l.children,s),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,Pa(t),i=Be(i),l=l(i),t.flags|=1,qe(e,t,l,s),t.child;case 14:return zu(e,t,t.type,t.pendingProps,s);case 15:return Bu(e,t,t.type,t.pendingProps,s);case 19:return Xu(e,t,s);case 31:return $h(e,t,s);case 22:return qu(e,t,s,t.pendingProps);case 24:return Pa(t),l=Be(Ne),e===null?(i=Tr(),i===null&&(i=ce,n=Cr(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=s),i=n),t.memoizedState={parent:l,cache:i},Dr(t),ya(t,Ne,i)):((e.lanes&s)!==0&&(Rr(e,t),jl(t,null,null,s),bl()),i=e.memoizedState,n=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ya(t,Ne,l)):(l=n.cache,ya(t,Ne,l),l!==i.cache&&Ar(t,[Ne],s,!0))),qe(e,t,t.pendingProps.children,s),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Wt(e){e.flags|=4}function uc(e,t,s,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(bm())e.flags|=8192;else throw $a=wi,Er}else e.flags&=-16777217}function Ku(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!op(t))if(bm())e.flags|=8192;else throw $a=wi,Er}function Qi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?To():536870912,e.lanes|=t,Vs|=t)}function Tl(e,t){if(!P)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(t)for(var i=e.child;i!==null;)s|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)s|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=s,t}function ef(e,t,s){var l=t.pendingProps;switch(vr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return pe(t),null;case 3:return s=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Pt(Ne),ms(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ds(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,jr())),pe(t),null;case 26:var i=t.type,n=t.memoizedState;return e===null?(Wt(t),n!==null?(pe(t),Ku(t,n)):(pe(t),uc(t,i,null,l,s))):n?n!==e.memoizedState?(Wt(t),pe(t),Ku(t,n)):(pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Wt(t),pe(t),uc(t,i,e,l,s)),null;case 27:if(ei(t),s=ua.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return pe(t),null}e=_e.current,Ds(t)?Td(t):(e=tp(i,l,s),t.stateNode=e,Wt(t))}return pe(t),null;case 5:if(ei(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return pe(t),null}if(n=_e.current,Ds(t))Td(t);else{var r=ln(ua.current);switch(n){case 1:n=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=r.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?r.createElement(i,{is:l.is}):r.createElement(i)}}n[ke]=t,n[Ie]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)n.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=n;e:switch(He(n,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Wt(t)}}return pe(t),uc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,s),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=ua.current,Ds(t)){if(e=t.stateNode,s=t.memoizedProps,l=null,i=ze,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[ke]=t,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Im(e.nodeValue,s)),e||ga(t,!0)}else e=ln(e).createTextNode(l),e[ke]=t,t.stateNode=e}return pe(t),null;case 31:if(s=t.memoizedState,e===null||e.memoizedState!==null){if(l=Ds(t),s!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ke]=t}else Ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),e=!1}else s=jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return t.flags&256?(it(t),t):(it(t),null);if((t.flags&128)!==0)throw Error(c(558))}return pe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ds(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[ke]=t}else Ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),i=!1}else i=jr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(it(t),t):(it(t),null)}return it(t),(t.flags&128)!==0?(t.lanes=s,t):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==i&&(l.flags|=2048)),s!==e&&s&&(t.child.flags|=8192),Qi(t,t.updateQueue),pe(t),null);case 4:return ms(),e===null&&Uc(t.stateNode.containerInfo),pe(t),null;case 10:return Pt(t.type),pe(t),null;case 19:if(ge(be),l=t.memoizedState,l===null)return pe(t),null;if(i=(t.flags&128)!==0,n=l.rendering,n===null)if(i)Tl(l,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=Ri(e),n!==null){for(t.flags|=128,Tl(l,!1),e=n.updateQueue,t.updateQueue=e,Qi(t,e),t.subtreeFlags=0,e=s,s=t.child;s!==null;)Nd(s,e),s=s.sibling;return ae(be,be.current&1|2),P&&Jt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&We()>Ki&&(t.flags|=128,i=!0,Tl(l,!1),t.lanes=4194304)}else{if(!i)if(e=Ri(n),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Qi(t,e),Tl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!P)return pe(t),null}else 2*We()-l.renderingStartTime>Ki&&s!==536870912&&(t.flags|=128,i=!0,Tl(l,!1),t.lanes=4194304);l.isBackwards?(n.sibling=t.child,t.child=n):(e=l.last,e!==null?e.sibling=n:t.child=n,l.last=n)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=We(),e.sibling=null,s=be.current,ae(be,i?s&1|2:s&1),P&&Jt(t,l.treeForkCount),e):(pe(t),null);case 22:case 23:return it(t),Or(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(s&536870912)!==0&&(t.flags&128)===0&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),s=t.updateQueue,s!==null&&Qi(t,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==s&&(t.flags|=2048),e!==null&&ge(Za),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),Pt(Ne),pe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function tf(e,t){switch(vr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pt(Ne),ms(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ei(t),null;case 31:if(t.memoizedState!==null){if(it(t),t.alternate===null)throw Error(c(340));Ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(it(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(be),null;case 4:return ms(),null;case 10:return Pt(t.type),null;case 22:case 23:return it(t),Or(),e!==null&&ge(Za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pt(Ne),null;case 25:return null;default:return null}}function Pu(e,t){switch(vr(t),t.tag){case 3:Pt(Ne),ms();break;case 26:case 27:case 5:ei(t);break;case 4:ms();break;case 31:t.memoizedState!==null&&it(t);break;case 13:it(t);break;case 19:ge(be);break;case 10:Pt(t.type);break;case 22:case 23:it(t),Or(),e!==null&&ge(Za);break;case 24:Pt(Ne)}}function El(e,t){try{var s=t.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var i=l.next;s=i;do{if((s.tag&e)===e){l=void 0;var n=s.create,r=s.inst;l=n(),r.destroy=l}s=s.next}while(s!==i)}}catch(o){le(t,t.return,o)}}function Aa(e,t,s){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&e)===e){var r=l.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,i=t;var u=s,v=o;try{v()}catch(S){le(i,u,S)}}}l=l.next}while(l!==n)}}catch(S){le(t,t.return,S)}}function Zu(e){var t=e.updateQueue;if(t!==null){var s=e.stateNode;try{Ld(t,s)}catch(l){le(e,e.return,l)}}}function Fu(e,t,s){s.props=ts(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){le(e,t,l)}}function Dl(e,t){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(i){le(e,t,i)}}function Bt(e,t){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(i){le(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(i){le(e,t,i)}else s.current=null}function $u(e){var t=e.type,s=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(i){le(e,e.return,i)}}function mc(e,t,s){try{var l=e.stateNode;Af(l,e.type,s,t),l[Ie]=t}catch(i){le(e,e.return,i)}}function Wu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_a(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_a(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xc(e,t,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,t):(t=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,t.appendChild(e),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=It));else if(l!==4&&(l===27&&_a(e.type)&&(s=e.stateNode,t=null),e=e.child,e!==null))for(xc(e,t,s),e=e.sibling;e!==null;)xc(e,t,s),e=e.sibling}function Ii(e,t,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(l!==4&&(l===27&&_a(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Ii(e,t,s),e=e.sibling;e!==null;)Ii(e,t,s),e=e.sibling}function em(e){var t=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);He(t,l,s),t[ke]=e,t[Ie]=s}catch(n){le(e,e.return,n)}}var ea=!1,Ce=!1,hc=!1,tm=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function af(e,t){if(e=e.containerInfo,zc=mn,e=pd(e),cr(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var i=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{s.nodeType,n.nodeType}catch{s=null;break e}var r=0,o=-1,u=-1,v=0,S=0,w=e,b=null;t:for(;;){for(var N;w!==s||i!==0&&w.nodeType!==3||(o=r+i),w!==n||l!==0&&w.nodeType!==3||(u=r+l),w.nodeType===3&&(r+=w.nodeValue.length),(N=w.firstChild)!==null;)b=w,w=N;for(;;){if(w===e)break t;if(b===s&&++v===i&&(o=r),b===n&&++S===l&&(u=r),(N=w.nextSibling)!==null)break;w=b,b=w.parentNode}w=N}s=o===-1||u===-1?null:{start:o,end:u}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bc={focusedElem:e,selectionRange:s},mn=!1,Ue=t;Ue!==null;)if(t=Ue,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ue=e;else for(;Ue!==null;){switch(t=Ue,n=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)i=e[s],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,s=t,i=n.memoizedProps,n=n.memoizedState,l=s.stateNode;try{var M=ts(s.type,i);e=l.getSnapshotBeforeUpdate(M,n),l.__reactInternalSnapshotBeforeUpdate=e}catch(q){le(s,s.return,q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,s=e.nodeType,s===9)Lc(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ue=e;break}Ue=t.return}}function am(e,t,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:aa(e,s),l&4&&El(5,s);break;case 1:if(aa(e,s),l&4)if(e=s.stateNode,t===null)try{e.componentDidMount()}catch(r){le(s,s.return,r)}else{var i=ts(s.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){le(s,s.return,r)}}l&64&&Zu(s),l&512&&Dl(s,s.return);break;case 3:if(aa(e,s),l&64&&(e=s.updateQueue,e!==null)){if(t=null,s.child!==null)switch(s.child.tag){case 27:case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}try{Ld(e,t)}catch(r){le(s,s.return,r)}}break;case 27:t===null&&l&4&&em(s);case 26:case 5:aa(e,s),t===null&&l&4&&$u(s),l&512&&Dl(s,s.return);break;case 12:aa(e,s);break;case 31:aa(e,s),l&4&&im(e,s);break;case 13:aa(e,s),l&4&&nm(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=mf.bind(null,s),Mf(e,s))));break;case 22:if(l=s.memoizedState!==null||ea,!l){t=t!==null&&t.memoizedState!==null||Ce,i=ea;var n=Ce;ea=l,(Ce=t)&&!n?sa(e,s,(s.subtreeFlags&8772)!==0):aa(e,s),ea=i,Ce=n}break;case 30:break;default:aa(e,s)}}function sm(e){var t=e.alternate;t!==null&&(e.alternate=null,sm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Yn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fe=null,Xe=!1;function ta(e,t,s){for(s=s.child;s!==null;)lm(e,t,s),s=s.sibling}function lm(e,t,s){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Ws,s)}catch{}switch(s.tag){case 26:Ce||Bt(s,t),ta(e,t,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ce||Bt(s,t);var l=fe,i=Xe;_a(s.type)&&(fe=s.stateNode,Xe=!1),ta(e,t,s),ql(s.stateNode),fe=l,Xe=i;break;case 5:Ce||Bt(s,t);case 6:if(l=fe,i=Xe,fe=null,ta(e,t,s),fe=l,Xe=i,fe!==null)if(Xe)try{(fe.nodeType===9?fe.body:fe.nodeName==="HTML"?fe.ownerDocument.body:fe).removeChild(s.stateNode)}catch(n){le(s,t,n)}else try{fe.removeChild(s.stateNode)}catch(n){le(s,t,n)}break;case 18:fe!==null&&(Xe?(e=fe,Zm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Zs(e)):Zm(fe,s.stateNode));break;case 4:l=fe,i=Xe,fe=s.stateNode.containerInfo,Xe=!0,ta(e,t,s),fe=l,Xe=i;break;case 0:case 11:case 14:case 15:Aa(2,s,t),Ce||Aa(4,s,t),ta(e,t,s);break;case 1:Ce||(Bt(s,t),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Fu(s,t,l)),ta(e,t,s);break;case 21:ta(e,t,s);break;case 22:Ce=(l=Ce)||s.memoizedState!==null,ta(e,t,s),Ce=l;break;default:ta(e,t,s)}}function im(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Zs(e)}catch(s){le(t,t.return,s)}}}function nm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Zs(e)}catch(s){le(t,t.return,s)}}function sf(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tm),t;default:throw Error(c(435,e.tag))}}function Yi(e,t){var s=sf(e);t.forEach(function(l){if(!s.has(l)){s.add(l);var i=pf.bind(null,e,l);l.then(i,i)}})}function Je(e,t){var s=t.deletions;if(s!==null)for(var l=0;l<s.length;l++){var i=s[l],n=e,r=t,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(_a(o.type)){fe=o.stateNode,Xe=!1;break e}break;case 5:fe=o.stateNode,Xe=!1;break e;case 3:case 4:fe=o.stateNode.containerInfo,Xe=!0;break e}o=o.return}if(fe===null)throw Error(c(160));lm(n,r,i),fe=null,Xe=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)rm(t,e),t=t.sibling}var _t=null;function rm(e,t){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Je(t,e),Ke(e),l&4&&(Aa(3,e,e.return),El(3,e),Aa(5,e,e.return));break;case 1:Je(t,e),Ke(e),l&512&&(Ce||s===null||Bt(s,s.return)),l&64&&ea&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var i=_t;if(Je(t,e),Ke(e),l&512&&(Ce||s===null||Bt(s,s.return)),l&4){var n=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){e:{l=e.type,s=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":n=i.getElementsByTagName("title")[0],(!n||n[al]||n[ke]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(l),i.head.insertBefore(n,i.querySelector("head > title"))),He(n,l,s),n[ke]=e,Me(n),l=n;break e;case"link":var r=rp("link","href",i).get(l+(s.href||""));if(r){for(var o=0;o<r.length;o++)if(n=r[o],n.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&n.getAttribute("rel")===(s.rel==null?null:s.rel)&&n.getAttribute("title")===(s.title==null?null:s.title)&&n.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){r.splice(o,1);break t}}n=i.createElement(l),He(n,l,s),i.head.appendChild(n);break;case"meta":if(r=rp("meta","content",i).get(l+(s.content||""))){for(o=0;o<r.length;o++)if(n=r[o],n.getAttribute("content")===(s.content==null?null:""+s.content)&&n.getAttribute("name")===(s.name==null?null:s.name)&&n.getAttribute("property")===(s.property==null?null:s.property)&&n.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&n.getAttribute("charset")===(s.charSet==null?null:s.charSet)){r.splice(o,1);break t}}n=i.createElement(l),He(n,l,s),i.head.appendChild(n);break;default:throw Error(c(468,l))}n[ke]=e,Me(n),l=n}e.stateNode=l}else cp(i,e.type,e.stateNode);else e.stateNode=np(i,l,e.memoizedProps);else n!==l?(n===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):n.count--,l===null?cp(i,e.type,e.stateNode):np(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&mc(e,e.memoizedProps,s.memoizedProps)}break;case 27:Je(t,e),Ke(e),l&512&&(Ce||s===null||Bt(s,s.return)),s!==null&&l&4&&mc(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Je(t,e),Ke(e),l&512&&(Ce||s===null||Bt(s,s.return)),e.flags&32){i=e.stateNode;try{vs(i,"")}catch(M){le(e,e.return,M)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,mc(e,i,s!==null?s.memoizedProps:i)),l&1024&&(hc=!0);break;case 6:if(Je(t,e),Ke(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(M){le(e,e.return,M)}}break;case 3:if(cn=null,i=_t,_t=nn(t.containerInfo),Je(t,e),_t=i,Ke(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Zs(t.containerInfo)}catch(M){le(e,e.return,M)}hc&&(hc=!1,cm(e));break;case 4:l=_t,_t=nn(e.stateNode.containerInfo),Je(t,e),Ke(e),_t=l;break;case 12:Je(t,e),Ke(e);break;case 31:Je(t,e),Ke(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yi(e,l)));break;case 13:Je(t,e),Ke(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ji=We()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yi(e,l)));break;case 22:i=e.memoizedState!==null;var u=s!==null&&s.memoizedState!==null,v=ea,S=Ce;if(ea=v||i,Ce=S||u,Je(t,e),Ce=S,ea=v,Ke(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(s===null||u||ea||Ce||as(e)),s=null,t=e;;){if(t.tag===5||t.tag===26){if(s===null){u=s=t;try{if(n=u.stateNode,i)r=n.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=u.stateNode;var w=u.memoizedProps.style,b=w!=null&&w.hasOwnProperty("display")?w.display:null;o.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(M){le(u,u.return,M)}}}else if(t.tag===6){if(s===null){u=t;try{u.stateNode.nodeValue=i?"":u.memoizedProps}catch(M){le(u,u.return,M)}}}else if(t.tag===18){if(s===null){u=t;try{var N=u.stateNode;i?Fm(N,!0):Fm(u.stateNode,!1)}catch(M){le(u,u.return,M)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;s===t&&(s=null),t=t.return}s===t&&(s=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Yi(e,s))));break;case 19:Je(t,e),Ke(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yi(e,l)));break;case 30:break;case 21:break;default:Je(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{for(var s,l=e.return;l!==null;){if(Wu(l)){s=l;break}l=l.return}if(s==null)throw Error(c(160));switch(s.tag){case 27:var i=s.stateNode,n=pc(e);Ii(e,n,i);break;case 5:var r=s.stateNode;s.flags&32&&(vs(r,""),s.flags&=-33);var o=pc(e);Ii(e,o,r);break;case 3:case 4:var u=s.stateNode.containerInfo,v=pc(e);xc(e,v,u);break;default:throw Error(c(161))}}catch(S){le(e,e.return,S)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;cm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function aa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)am(e,t.alternate,t),t=t.sibling}function as(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Aa(4,t,t.return),as(t);break;case 1:Bt(t,t.return);var s=t.stateNode;typeof s.componentWillUnmount=="function"&&Fu(t,t.return,s),as(t);break;case 27:ql(t.stateNode);case 26:case 5:Bt(t,t.return),as(t);break;case 22:t.memoizedState===null&&as(t);break;case 30:as(t);break;default:as(t)}e=e.sibling}}function sa(e,t,s){for(s=s&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,n=t,r=n.flags;switch(n.tag){case 0:case 11:case 15:sa(i,n,s),El(4,n);break;case 1:if(sa(i,n,s),l=n,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(v){le(l,l.return,v)}if(l=n,i=l.updateQueue,i!==null){var o=l.stateNode;try{var u=i.shared.hiddenCallbacks;if(u!==null)for(i.shared.hiddenCallbacks=null,i=0;i<u.length;i++)Hd(u[i],o)}catch(v){le(l,l.return,v)}}s&&r&64&&Zu(n),Dl(n,n.return);break;case 27:em(n);case 26:case 5:sa(i,n,s),s&&l===null&&r&4&&$u(n),Dl(n,n.return);break;case 12:sa(i,n,s);break;case 31:sa(i,n,s),s&&r&4&&im(i,n);break;case 13:sa(i,n,s),s&&r&4&&nm(i,n);break;case 22:n.memoizedState===null&&sa(i,n,s),Dl(n,n.return);break;case 30:break;default:sa(i,n,s)}t=t.sibling}}function fc(e,t){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&hl(s))}function gc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hl(e))}function Mt(e,t,s,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)om(e,t,s,l),t=t.sibling}function om(e,t,s,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,s,l),i&2048&&El(9,t);break;case 1:Mt(e,t,s,l);break;case 3:Mt(e,t,s,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hl(e)));break;case 12:if(i&2048){Mt(e,t,s,l),e=t.stateNode;try{var n=t.memoizedProps,r=n.id,o=n.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){le(t,t.return,u)}}else Mt(e,t,s,l);break;case 31:Mt(e,t,s,l);break;case 13:Mt(e,t,s,l);break;case 23:break;case 22:n=t.stateNode,r=t.alternate,t.memoizedState!==null?n._visibility&2?Mt(e,t,s,l):Rl(e,t):n._visibility&2?Mt(e,t,s,l):(n._visibility|=2,Hs(e,t,s,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&fc(r,t);break;case 24:Mt(e,t,s,l),i&2048&&gc(t.alternate,t);break;default:Mt(e,t,s,l)}}function Hs(e,t,s,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=e,r=t,o=s,u=l,v=r.flags;switch(r.tag){case 0:case 11:case 15:Hs(n,r,o,u,i),El(8,r);break;case 23:break;case 22:var S=r.stateNode;r.memoizedState!==null?S._visibility&2?Hs(n,r,o,u,i):Rl(n,r):(S._visibility|=2,Hs(n,r,o,u,i)),i&&v&2048&&fc(r.alternate,r);break;case 24:Hs(n,r,o,u,i),i&&v&2048&&gc(r.alternate,r);break;default:Hs(n,r,o,u,i)}t=t.sibling}}function Rl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var s=e,l=t,i=l.flags;switch(l.tag){case 22:Rl(s,l),i&2048&&fc(l.alternate,l);break;case 24:Rl(s,l),i&2048&&gc(l.alternate,l);break;default:Rl(s,l)}t=t.sibling}}var _l=8192;function Ls(e,t,s){if(e.subtreeFlags&_l)for(e=e.child;e!==null;)dm(e,t,s),e=e.sibling}function dm(e,t,s){switch(e.tag){case 26:Ls(e,t,s),e.flags&_l&&e.memoizedState!==null&&If(s,_t,e.memoizedState,e.memoizedProps);break;case 5:Ls(e,t,s);break;case 3:case 4:var l=_t;_t=nn(e.stateNode.containerInfo),Ls(e,t,s),_t=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=_l,_l=16777216,Ls(e,t,s),_l=l):Ls(e,t,s));break;default:Ls(e,t,s)}}function um(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var l=t[s];Ue=l,pm(l,e)}um(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mm(e),e=e.sibling}function mm(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xi(e)):Ml(e);break;default:Ml(e)}}function Xi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var l=t[s];Ue=l,pm(l,e)}um(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Aa(8,t,t.return),Xi(t);break;case 22:s=t.stateNode,s._visibility&2&&(s._visibility&=-3,Xi(t));break;default:Xi(t)}e=e.sibling}}function pm(e,t){for(;Ue!==null;){var s=Ue;switch(s.tag){case 0:case 11:case 15:Aa(8,s,t);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:hl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Ue=l;else e:for(s=e;Ue!==null;){l=Ue;var i=l.sibling,n=l.return;if(sm(l),l===s){Ue=null;break e}if(i!==null){i.return=n,Ue=i;break e}Ue=n}}}var lf={getCacheForType:function(e){var t=Be(Ne),s=t.data.get(e);return s===void 0&&(s=e(),t.data.set(e,s)),s},cacheSignal:function(){return Be(Ne).controller.signal}},nf=typeof WeakMap=="function"?WeakMap:Map,te=0,ce=null,Y=null,J=0,se=0,nt=null,Ca=!1,Gs=!1,yc=!1,la=0,ve=0,wa=0,ss=0,vc=0,rt=0,Vs=0,Ul=null,Pe=null,bc=!1,Ji=0,xm=0,Ki=1/0,Pi=null,Ta=null,De=0,Ea=null,Qs=null,ia=0,jc=0,Nc=null,hm=null,Ol=0,Sc=null;function ct(){return(te&2)!==0&&J!==0?J&-J:C.T!==null?Dc():_o()}function fm(){if(rt===0)if((J&536870912)===0||P){var e=si;si<<=1,(si&3932160)===0&&(si=262144),rt=e}else rt=536870912;return e=lt.current,e!==null&&(e.flags|=32),rt}function Ze(e,t,s){(e===ce&&(se===2||se===9)||e.cancelPendingCommit!==null)&&(Is(e,0),Da(e,J,rt,!1)),tl(e,s),((te&2)===0||e!==ce)&&(e===ce&&((te&2)===0&&(ss|=s),ve===4&&Da(e,J,rt,!1)),qt(e))}function gm(e,t,s){if((te&6)!==0)throw Error(c(327));var l=!s&&(t&127)===0&&(t&e.expiredLanes)===0||el(e,t),i=l?of(e,t):Cc(e,t,!0),n=l;do{if(i===0){Gs&&!l&&Da(e,t,0,!1);break}else{if(s=e.current.alternate,n&&!rf(s)){i=Cc(e,t,!1),n=!1;continue}if(i===2){if(n=t,e.errorRecoveryDisabledLanes&n)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var o=e;i=Ul;var u=o.current.memoizedState.isDehydrated;if(u&&(Is(o,r).flags|=256),r=Cc(o,r,!1),r!==2){if(yc&&!u){o.errorRecoveryDisabledLanes|=n,ss|=n,i=4;break e}n=Pe,Pe=i,n!==null&&(Pe===null?Pe=n:Pe.push.apply(Pe,n))}i=r}if(n=!1,i!==2)continue}}if(i===1){Is(e,0),Da(e,t,0,!0);break}e:{switch(l=e,n=i,n){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Da(l,t,rt,!Ca);break e;case 2:Pe=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=Ji+300-We(),10<i)){if(Da(l,t,rt,!Ca),ii(l,0,!0)!==0)break e;ia=t,l.timeoutHandle=Km(ym.bind(null,l,s,Pe,Pi,bc,t,rt,ss,Vs,Ca,n,"Throttled",-0,0),i);break e}ym(l,s,Pe,Pi,bc,t,rt,ss,Vs,Ca,n,null,-0,0)}}break}while(!0);qt(e)}function ym(e,t,s,l,i,n,r,o,u,v,S,w,b,N){if(e.timeoutHandle=-1,w=t.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:It},dm(t,n,w);var M=(n&62914560)===n?Ji-We():(n&4194048)===n?xm-We():0;if(M=Yf(w,M),M!==null){ia=n,e.cancelPendingCommit=M(wm.bind(null,e,t,n,s,l,i,r,o,u,S,w,null,b,N)),Da(e,n,r,!v);return}}wm(e,t,n,s,l,i,r,o,u)}function rf(e){for(var t=e;;){var s=t.tag;if((s===0||s===11||s===15)&&t.flags&16384&&(s=t.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var i=s[l],n=i.getSnapshot;i=i.value;try{if(!at(n(),i))return!1}catch{return!1}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,s,l){t&=~vc,t&=~ss,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var n=31-tt(i),r=1<<n;l[n]=-1,i&=~r}s!==0&&Eo(e,s,t)}function Zi(){return(te&6)===0?(kl(0),!1):!0}function Ac(){if(Y!==null){if(se===0)var e=Y.return;else e=Y,Kt=Ka=null,Lr(e),Os=null,gl=0,e=Y;for(;e!==null;)Pu(e.alternate,e),e=e.return;Y=null}}function Is(e,t){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Tf(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),ia=0,Ac(),ce=e,Y=s=Xt(e.current,null),J=t,se=0,nt=null,Ca=!1,Gs=el(e,t),yc=!1,Vs=rt=vc=ss=wa=ve=0,Pe=Ul=null,bc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-tt(l),n=1<<i;t|=e[i],l&=~n}return la=t,gi(),s}function vm(e,t){V=null,C.H=Cl,t===Us||t===Ci?(t=kd(),se=3):t===Er?(t=kd(),se=4):se=t===ac?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,Y===null&&(ve=1,Hi(e,vt(t,e.current)))}function bm(){var e=lt.current;return e===null?!0:(J&4194048)===J?St===null:(J&62914560)===J||(J&536870912)!==0?e===St:!1}function jm(){var e=C.H;return C.H=Cl,e===null?Cl:e}function Nm(){var e=C.A;return C.A=lf,e}function Fi(){ve=4,Ca||(J&4194048)!==J&&lt.current!==null||(Gs=!0),(wa&134217727)===0&&(ss&134217727)===0||ce===null||Da(ce,J,rt,!1)}function Cc(e,t,s){var l=te;te|=2;var i=jm(),n=Nm();(ce!==e||J!==t)&&(Pi=null,Is(e,t)),t=!1;var r=ve;e:do try{if(se!==0&&Y!==null){var o=Y,u=nt;switch(se){case 8:Ac(),r=6;break e;case 3:case 2:case 9:case 6:lt.current===null&&(t=!0);var v=se;if(se=0,nt=null,Ys(e,o,u,v),s&&Gs){r=0;break e}break;default:v=se,se=0,nt=null,Ys(e,o,u,v)}}cf(),r=ve;break}catch(S){vm(e,S)}while(!0);return t&&e.shellSuspendCounter++,Kt=Ka=null,te=l,C.H=i,C.A=n,Y===null&&(ce=null,J=0,gi()),r}function cf(){for(;Y!==null;)Sm(Y)}function of(e,t){var s=te;te|=2;var l=jm(),i=Nm();ce!==e||J!==t?(Pi=null,Ki=We()+500,Is(e,t)):Gs=el(e,t);e:do try{if(se!==0&&Y!==null){t=Y;var n=nt;t:switch(se){case 1:se=0,nt=null,Ys(e,t,n,1);break;case 2:case 9:if(Ud(n)){se=0,nt=null,Am(t);break}t=function(){se!==2&&se!==9||ce!==e||(se=7),qt(e)},n.then(t,t);break e;case 3:se=7;break e;case 4:se=5;break e;case 7:Ud(n)?(se=0,nt=null,Am(t)):(se=0,nt=null,Ys(e,t,n,7));break;case 5:var r=null;switch(Y.tag){case 26:r=Y.memoizedState;case 5:case 27:var o=Y;if(r?op(r):o.stateNode.complete){se=0,nt=null;var u=o.sibling;if(u!==null)Y=u;else{var v=o.return;v!==null?(Y=v,$i(v)):Y=null}break t}}se=0,nt=null,Ys(e,t,n,5);break;case 6:se=0,nt=null,Ys(e,t,n,6);break;case 8:Ac(),ve=6;break e;default:throw Error(c(462))}}df();break}catch(S){vm(e,S)}while(!0);return Kt=Ka=null,C.H=l,C.A=i,te=s,Y!==null?0:(ce=null,J=0,gi(),ve)}function df(){for(;Y!==null&&!Mx();)Sm(Y)}function Sm(e){var t=Ju(e.alternate,e,la);e.memoizedProps=e.pendingProps,t===null?$i(e):Y=t}function Am(e){var t=e,s=t.alternate;switch(t.tag){case 15:case 0:t=Gu(s,t,t.pendingProps,t.type,void 0,J);break;case 11:t=Gu(s,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Lr(t);default:Pu(s,t),t=Y=Nd(t,la),t=Ju(s,t,la)}e.memoizedProps=e.pendingProps,t===null?$i(e):Y=t}function Ys(e,t,s,l){Kt=Ka=null,Lr(t),Os=null,gl=0;var i=t.return;try{if(Fh(e,i,t,s,J)){ve=1,Hi(e,vt(s,e.current)),Y=null;return}}catch(n){if(i!==null)throw Y=i,n;ve=1,Hi(e,vt(s,e.current)),Y=null;return}t.flags&32768?(P||l===1?e=!0:Gs||(J&536870912)!==0?e=!1:(Ca=e=!0,(l===2||l===9||l===3||l===6)&&(l=lt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Cm(t,e)):$i(t)}function $i(e){var t=e;do{if((t.flags&32768)!==0){Cm(t,Ca);return}e=t.return;var s=ef(t.alternate,t,la);if(s!==null){Y=s;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);ve===0&&(ve=5)}function Cm(e,t){do{var s=tf(e.alternate,e);if(s!==null){s.flags&=32767,Y=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!t&&(e=e.sibling,e!==null)){Y=e;return}Y=e=s}while(e!==null);ve=6,Y=null}function wm(e,t,s,l,i,n,r,o,u){e.cancelPendingCommit=null;do Wi();while(De!==0);if((te&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(n=t.lanes|t.childLanes,n|=pr,Vx(e,s,n,r,o,u),e===ce&&(Y=ce=null,J=0),Qs=t,Ea=e,ia=s,jc=n,Nc=i,hm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,xf(ti,function(){return _m(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,i=_.p,_.p=2,r=te,te|=4;try{af(e,t,s)}finally{te=r,_.p=i,C.T=l}}De=1,Tm(),Em(),Dm()}}function Tm(){if(De===1){De=0;var e=Ea,t=Qs,s=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||s){s=C.T,C.T=null;var l=_.p;_.p=2;var i=te;te|=4;try{rm(t,e);var n=Bc,r=pd(e.containerInfo),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&md(o.ownerDocument.documentElement,o)){if(u!==null&&cr(o)){var v=u.start,S=u.end;if(S===void 0&&(S=v),"selectionStart"in o)o.selectionStart=v,o.selectionEnd=Math.min(S,o.value.length);else{var w=o.ownerDocument||document,b=w&&w.defaultView||window;if(b.getSelection){var N=b.getSelection(),M=o.textContent.length,q=Math.min(u.start,M),re=u.end===void 0?q:Math.min(u.end,M);!N.extend&&q>re&&(r=re,re=q,q=r);var h=ud(o,q),p=ud(o,re);if(h&&p&&(N.rangeCount!==1||N.anchorNode!==h.node||N.anchorOffset!==h.offset||N.focusNode!==p.node||N.focusOffset!==p.offset)){var g=w.createRange();g.setStart(h.node,h.offset),N.removeAllRanges(),q>re?(N.addRange(g),N.extend(p.node,p.offset)):(g.setEnd(p.node,p.offset),N.addRange(g))}}}}for(w=[],N=o;N=N.parentNode;)N.nodeType===1&&w.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<w.length;o++){var A=w[o];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}mn=!!zc,Bc=zc=null}finally{te=i,_.p=l,C.T=s}}e.current=t,De=2}}function Em(){if(De===2){De=0;var e=Ea,t=Qs,s=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||s){s=C.T,C.T=null;var l=_.p;_.p=2;var i=te;te|=4;try{am(e,t.alternate,t)}finally{te=i,_.p=l,C.T=s}}De=3}}function Dm(){if(De===4||De===3){De=0,Ux();var e=Ea,t=Qs,s=ia,l=hm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?De=5:(De=0,Qs=Ea=null,Rm(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ta=null),Qn(s),t=t.stateNode,et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Ws,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=C.T,i=_.p,_.p=2,C.T=null;try{for(var n=e.onRecoverableError,r=0;r<l.length;r++){var o=l[r];n(o.value,{componentStack:o.stack})}}finally{C.T=t,_.p=i}}(ia&3)!==0&&Wi(),qt(e),i=e.pendingLanes,(s&261930)!==0&&(i&42)!==0?e===Sc?Ol++:(Ol=0,Sc=e):Ol=0,kl(0)}}function Rm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,hl(t)))}function Wi(){return Tm(),Em(),Dm(),_m()}function _m(){if(De!==5)return!1;var e=Ea,t=jc;jc=0;var s=Qn(ia),l=C.T,i=_.p;try{_.p=32>s?32:s,C.T=null,s=Nc,Nc=null;var n=Ea,r=ia;if(De=0,Qs=Ea=null,ia=0,(te&6)!==0)throw Error(c(331));var o=te;if(te|=4,mm(n.current),om(n,n.current,r,s),te=o,kl(0,!1),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Ws,n)}catch{}return!0}finally{_.p=i,C.T=l,Rm(e,t)}}function Mm(e,t,s){t=vt(s,t),t=tc(e.stateNode,t,2),e=ja(e,t,2),e!==null&&(tl(e,2),qt(e))}function le(e,t,s){if(e.tag===3)Mm(e,e,s);else for(;t!==null;){if(t.tag===3){Mm(t,e,s);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ta===null||!Ta.has(l))){e=vt(s,e),s=Uu(2),l=ja(t,s,2),l!==null&&(Ou(s,l,t,e),tl(l,2),qt(l));break}}t=t.return}}function wc(e,t,s){var l=e.pingCache;if(l===null){l=e.pingCache=new nf;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(s)||(yc=!0,i.add(s),e=uf.bind(null,e,t,s),t.then(e,e))}function uf(e,t,s){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,ce===e&&(J&s)===s&&(ve===4||ve===3&&(J&62914560)===J&&300>We()-Ji?(te&2)===0&&Is(e,0):vc|=s,Vs===J&&(Vs=0)),qt(e)}function Um(e,t){t===0&&(t=To()),e=Ya(e,t),e!==null&&(tl(e,t),qt(e))}function mf(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),Um(e,s)}function pf(e,t){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(s=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),Um(e,s)}function xf(e,t){return Hn(e,t)}var en=null,Xs=null,Tc=!1,tn=!1,Ec=!1,Ra=0;function qt(e){e!==Xs&&e.next===null&&(Xs===null?en=Xs=e:Xs=Xs.next=e),tn=!0,Tc||(Tc=!0,ff())}function kl(e,t){if(!Ec&&tn){Ec=!0;do for(var s=!1,l=en;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var n=0;else{var r=l.suspendedLanes,o=l.pingedLanes;n=(1<<31-tt(42|e)+1)-1,n&=i&~(r&~o),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(s=!0,Bm(l,n))}else n=J,n=ii(l,l===ce?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||el(l,n)||(s=!0,Bm(l,n));l=l.next}while(s);Ec=!1}}function hf(){Om()}function Om(){tn=Tc=!1;var e=0;Ra!==0&&wf()&&(e=Ra);for(var t=We(),s=null,l=en;l!==null;){var i=l.next,n=km(l,t);n===0?(l.next=null,s===null?en=i:s.next=i,i===null&&(Xs=s)):(s=l,(e!==0||(n&3)!==0)&&(tn=!0)),l=i}De!==0&&De!==5||kl(e),Ra!==0&&(Ra=0)}function km(e,t){for(var s=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var r=31-tt(n),o=1<<r,u=i[r];u===-1?((o&s)===0||(o&l)!==0)&&(i[r]=Gx(o,t)):u<=t&&(e.expiredLanes|=o),n&=~o}if(t=ce,s=J,s=ii(e,e===t?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===t&&(se===2||se===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ln(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||el(e,s)){if(t=s&-s,t===e.callbackPriority)return t;switch(l!==null&&Ln(l),Qn(s)){case 2:case 8:s=Co;break;case 32:s=ti;break;case 268435456:s=wo;break;default:s=ti}return l=zm.bind(null,e),s=Hn(s,l),e.callbackPriority=t,e.callbackNode=s,t}return l!==null&&l!==null&&Ln(l),e.callbackPriority=2,e.callbackNode=null,2}function zm(e,t){if(De!==0&&De!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Wi()&&e.callbackNode!==s)return null;var l=J;return l=ii(e,e===ce?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(gm(e,l,t),km(e,We()),e.callbackNode!=null&&e.callbackNode===s?zm.bind(null,e):null)}function Bm(e,t){if(Wi())return null;gm(e,t,!0)}function ff(){Ef(function(){(te&6)!==0?Hn(Ao,hf):Om()})}function Dc(){if(Ra===0){var e=_s;e===0&&(e=ai,ai<<=1,(ai&261888)===0&&(ai=256)),Ra=e}return Ra}function qm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oi(""+e)}function Hm(e,t){var s=t.ownerDocument.createElement("input");return s.name=t.name,s.value=t.value,e.id&&s.setAttribute("form",e.id),t.parentNode.insertBefore(s,t),e=new FormData(e),s.parentNode.removeChild(s),e}function gf(e,t,s,l,i){if(t==="submit"&&s&&s.stateNode===i){var n=qm((i[Ie]||null).action),r=l.submitter;r&&(t=(t=r[Ie]||null)?qm(t.formAction):r.getAttribute("formAction"),t!==null&&(n=t,r=null));var o=new pi("action","action",null,l,i);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ra!==0){var u=r?Hm(i,r):new FormData(i);Pr(s,{pending:!0,data:u,method:i.method,action:n},null,u)}}else typeof n=="function"&&(o.preventDefault(),u=r?Hm(i,r):new FormData(i),Pr(s,{pending:!0,data:u,method:i.method,action:n},n,u))},currentTarget:i}]})}}for(var Rc=0;Rc<mr.length;Rc++){var _c=mr[Rc],yf=_c.toLowerCase(),vf=_c[0].toUpperCase()+_c.slice(1);Rt(yf,"on"+vf)}Rt(fd,"onAnimationEnd"),Rt(gd,"onAnimationIteration"),Rt(yd,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Oh,"onTransitionRun"),Rt(kh,"onTransitionStart"),Rt(zh,"onTransitionCancel"),Rt(vd,"onTransitionEnd"),gs("onMouseEnter",["mouseout","mouseover"]),gs("onMouseLeave",["mouseout","mouseover"]),gs("onPointerEnter",["pointerout","pointerover"]),gs("onPointerLeave",["pointerout","pointerover"]),Ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zl));function Lm(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],i=l.event;l=l.listeners;e:{var n=void 0;if(t)for(var r=l.length-1;0<=r;r--){var o=l[r],u=o.instance,v=o.currentTarget;if(o=o.listener,u!==n&&i.isPropagationStopped())break e;n=o,i.currentTarget=v;try{n(i)}catch(S){fi(S)}i.currentTarget=null,n=u}else for(r=0;r<l.length;r++){if(o=l[r],u=o.instance,v=o.currentTarget,o=o.listener,u!==n&&i.isPropagationStopped())break e;n=o,i.currentTarget=v;try{n(i)}catch(S){fi(S)}i.currentTarget=null,n=u}}}}function X(e,t){var s=t[In];s===void 0&&(s=t[In]=new Set);var l=e+"__bubble";s.has(l)||(Gm(t,e,2,!1),s.add(l))}function Mc(e,t,s){var l=0;t&&(l|=4),Gm(s,e,l,t)}var an="_reactListening"+Math.random().toString(36).slice(2);function Uc(e){if(!e[an]){e[an]=!0,Oo.forEach(function(s){s!=="selectionchange"&&(bf.has(s)||Mc(s,!1,e),Mc(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[an]||(t[an]=!0,Mc("selectionchange",!1,t))}}function Gm(e,t,s,l){switch(fp(t)){case 2:var i=Kf;break;case 8:i=Pf;break;default:i=Kc}s=i.bind(null,t,s,e),i=void 0,!Wn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,s,{capture:!0,passive:i}):e.addEventListener(t,s,!0):i!==void 0?e.addEventListener(t,s,{passive:i}):e.addEventListener(t,s,!1)}function Oc(e,t,s,l,i){var n=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var o=l.stateNode.containerInfo;if(o===i)break;if(r===4)for(r=l.return;r!==null;){var u=r.tag;if((u===3||u===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;o!==null;){if(r=xs(o),r===null)return;if(u=r.tag,u===5||u===6||u===26||u===27){l=n=r;continue e}o=o.parentNode}}l=l.return}Xo(function(){var v=n,S=Fn(s),w=[];e:{var b=bd.get(e);if(b!==void 0){var N=pi,M=e;switch(e){case"keypress":if(ui(s)===0)break e;case"keydown":case"keyup":N=mh;break;case"focusin":M="focus",N=sr;break;case"focusout":M="blur",N=sr;break;case"beforeblur":case"afterblur":N=sr;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Po;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=hh;break;case fd:case gd:case yd:N=sh;break;case vd:N=gh;break;case"scroll":case"scrollend":N=$x;break;case"wheel":N=vh;break;case"copy":case"cut":case"paste":N=ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Fo;break;case"toggle":case"beforetoggle":N=jh}var q=(t&4)!==0,re=!q&&(e==="scroll"||e==="scrollend"),h=q?b!==null?b+"Capture":null:b;q=[];for(var p=v,g;p!==null;){var A=p;if(g=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||g===null||h===null||(A=ll(p,h),A!=null&&q.push(Bl(p,A,g))),re)break;p=p.return}0<q.length&&(b=new N(b,M,null,s,S),w.push({event:b,listeners:q}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",b&&s!==Zn&&(M=s.relatedTarget||s.fromElement)&&(xs(M)||M[ps]))break e;if((N||b)&&(b=S.window===S?S:(b=S.ownerDocument)?b.defaultView||b.parentWindow:window,N?(M=s.relatedTarget||s.toElement,N=v,M=M?xs(M):null,M!==null&&(re=y(M),q=M.tag,M!==re||q!==5&&q!==27&&q!==6)&&(M=null)):(N=null,M=v),N!==M)){if(q=Po,A="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(q=Fo,A="onPointerLeave",h="onPointerEnter",p="pointer"),re=N==null?b:sl(N),g=M==null?b:sl(M),b=new q(A,p+"leave",N,s,S),b.target=re,b.relatedTarget=g,A=null,xs(S)===v&&(q=new q(h,p+"enter",M,s,S),q.target=g,q.relatedTarget=re,A=q),re=A,N&&M)t:{for(q=jf,h=N,p=M,g=0,A=h;A;A=q(A))g++;A=0;for(var B=p;B;B=q(B))A++;for(;0<g-A;)h=q(h),g--;for(;0<A-g;)p=q(p),A--;for(;g--;){if(h===p||p!==null&&h===p.alternate){q=h;break t}h=q(h),p=q(p)}q=null}else q=null;N!==null&&Vm(w,b,N,q,!1),M!==null&&re!==null&&Vm(w,re,M,q,!0)}}e:{if(b=v?sl(v):window,N=b.nodeName&&b.nodeName.toLowerCase(),N==="select"||N==="input"&&b.type==="file")var F=id;else if(sd(b))if(nd)F=_h;else{F=Dh;var O=Eh}else N=b.nodeName,!N||N.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?v&&Pn(v.elementType)&&(F=id):F=Rh;if(F&&(F=F(e,v))){ld(w,F,s,S);break e}O&&O(e,b,v),e==="focusout"&&v&&b.type==="number"&&v.memoizedProps.value!=null&&Kn(b,"number",b.value)}switch(O=v?sl(v):window,e){case"focusin":(sd(O)||O.contentEditable==="true")&&(Ss=O,or=v,ml=null);break;case"focusout":ml=or=Ss=null;break;case"mousedown":dr=!0;break;case"contextmenu":case"mouseup":case"dragend":dr=!1,xd(w,s,S);break;case"selectionchange":if(Uh)break;case"keydown":case"keyup":xd(w,s,S)}var Q;if(ir)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Ns?td(e,s)&&(K="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(K="onCompositionStart");K&&($o&&s.locale!=="ko"&&(Ns||K!=="onCompositionStart"?K==="onCompositionEnd"&&Ns&&(Q=Jo()):(xa=S,er="value"in xa?xa.value:xa.textContent,Ns=!0)),O=sn(v,K),0<O.length&&(K=new Zo(K,e,null,s,S),w.push({event:K,listeners:O}),Q?K.data=Q:(Q=ad(s),Q!==null&&(K.data=Q)))),(Q=Sh?Ah(e,s):Ch(e,s))&&(K=sn(v,"onBeforeInput"),0<K.length&&(O=new Zo("onBeforeInput","beforeinput",null,s,S),w.push({event:O,listeners:K}),O.data=Q)),gf(w,e,v,s,S)}Lm(w,t)})}function Bl(e,t,s){return{instance:e,listener:t,currentTarget:s}}function sn(e,t){for(var s=t+"Capture",l=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=ll(e,s),i!=null&&l.unshift(Bl(e,i,n)),i=ll(e,t),i!=null&&l.push(Bl(e,i,n))),e.tag===3)return l;e=e.return}return[]}function jf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vm(e,t,s,l,i){for(var n=t._reactName,r=[];s!==null&&s!==l;){var o=s,u=o.alternate,v=o.stateNode;if(o=o.tag,u!==null&&u===l)break;o!==5&&o!==26&&o!==27||v===null||(u=v,i?(v=ll(s,n),v!=null&&r.unshift(Bl(s,v,u))):i||(v=ll(s,n),v!=null&&r.push(Bl(s,v,u)))),s=s.return}r.length!==0&&e.push({event:t,listeners:r})}var Nf=/\r\n?/g,Sf=/\u0000|\uFFFD/g;function Qm(e){return(typeof e=="string"?e:""+e).replace(Nf,`
`).replace(Sf,"")}function Im(e,t){return t=Qm(t),Qm(e)===t}function ne(e,t,s,l,i,n){switch(s){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||vs(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&vs(e,""+l);break;case"className":ri(e,"class",l);break;case"tabIndex":ri(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ri(e,s,l);break;case"style":Io(e,l,n);break;case"data":if(t!=="object"){ri(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=oi(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(s==="formAction"?(t!=="input"&&ne(e,t,"name",i.name,i,null),ne(e,t,"formEncType",i.formEncType,i,null),ne(e,t,"formMethod",i.formMethod,i,null),ne(e,t,"formTarget",i.formTarget,i,null)):(ne(e,t,"encType",i.encType,i,null),ne(e,t,"method",i.method,i,null),ne(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=oi(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=It);break;case"onScroll":l!=null&&X("scroll",e);break;case"onScrollEnd":l!=null&&X("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(s=l.__html,s!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=oi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":X("beforetoggle",e),X("toggle",e),ni(e,"popover",l);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ni(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Zx.get(s)||s,ni(e,s,l))}}function kc(e,t,s,l,i,n){switch(s){case"style":Io(e,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(s=l.__html,s!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=s}}break;case"children":typeof l=="string"?vs(e,l):(typeof l=="number"||typeof l=="bigint")&&vs(e,""+l);break;case"onScroll":l!=null&&X("scroll",e);break;case"onScrollEnd":l!=null&&X("scrollend",e);break;case"onClick":l!=null&&(e.onclick=It);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ko.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(i=s.endsWith("Capture"),t=s.slice(2,i?s.length-7:void 0),n=e[Ie]||null,n=n!=null?n[s]:null,typeof n=="function"&&e.removeEventListener(t,n,i),typeof l=="function")){typeof n!="function"&&n!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(t,l,i);break e}s in e?e[s]=l:l===!0?e.setAttribute(s,""):ni(e,s,l)}}}function He(e,t,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",e),X("load",e);var l=!1,i=!1,n;for(n in s)if(s.hasOwnProperty(n)){var r=s[n];if(r!=null)switch(n){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ne(e,t,n,r,s,null)}}i&&ne(e,t,"srcSet",s.srcSet,s,null),l&&ne(e,t,"src",s.src,s,null);return;case"input":X("invalid",e);var o=n=r=i=null,u=null,v=null;for(l in s)if(s.hasOwnProperty(l)){var S=s[l];if(S!=null)switch(l){case"name":i=S;break;case"type":r=S;break;case"checked":u=S;break;case"defaultChecked":v=S;break;case"value":n=S;break;case"defaultValue":o=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(c(137,t));break;default:ne(e,t,l,S,s,null)}}Lo(e,n,o,u,v,r,i,!1);return;case"select":X("invalid",e),l=r=n=null;for(i in s)if(s.hasOwnProperty(i)&&(o=s[i],o!=null))switch(i){case"value":n=o;break;case"defaultValue":r=o;break;case"multiple":l=o;default:ne(e,t,i,o,s,null)}t=n,s=r,e.multiple=!!l,t!=null?ys(e,!!l,t,!1):s!=null&&ys(e,!!l,s,!0);return;case"textarea":X("invalid",e),n=i=l=null;for(r in s)if(s.hasOwnProperty(r)&&(o=s[r],o!=null))switch(r){case"value":l=o;break;case"defaultValue":i=o;break;case"children":n=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:ne(e,t,r,o,s,null)}Vo(e,l,i,n);return;case"option":for(u in s)if(s.hasOwnProperty(u)&&(l=s[u],l!=null))switch(u){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ne(e,t,u,l,s,null)}return;case"dialog":X("beforetoggle",e),X("toggle",e),X("cancel",e),X("close",e);break;case"iframe":case"object":X("load",e);break;case"video":case"audio":for(l=0;l<zl.length;l++)X(zl[l],e);break;case"image":X("error",e),X("load",e);break;case"details":X("toggle",e);break;case"embed":case"source":case"link":X("error",e),X("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in s)if(s.hasOwnProperty(v)&&(l=s[v],l!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ne(e,t,v,l,s,null)}return;default:if(Pn(t)){for(S in s)s.hasOwnProperty(S)&&(l=s[S],l!==void 0&&kc(e,t,S,l,s,void 0));return}}for(o in s)s.hasOwnProperty(o)&&(l=s[o],l!=null&&ne(e,t,o,l,s,null))}function Af(e,t,s,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,r=null,o=null,u=null,v=null,S=null;for(N in s){var w=s[N];if(s.hasOwnProperty(N)&&w!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":u=w;default:l.hasOwnProperty(N)||ne(e,t,N,null,l,w)}}for(var b in l){var N=l[b];if(w=s[b],l.hasOwnProperty(b)&&(N!=null||w!=null))switch(b){case"type":n=N;break;case"name":i=N;break;case"checked":v=N;break;case"defaultChecked":S=N;break;case"value":r=N;break;case"defaultValue":o=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:N!==w&&ne(e,t,b,N,l,w)}}Jn(e,r,o,u,v,S,n,i);return;case"select":N=r=o=b=null;for(n in s)if(u=s[n],s.hasOwnProperty(n)&&u!=null)switch(n){case"value":break;case"multiple":N=u;default:l.hasOwnProperty(n)||ne(e,t,n,null,l,u)}for(i in l)if(n=l[i],u=s[i],l.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":b=n;break;case"defaultValue":o=n;break;case"multiple":r=n;default:n!==u&&ne(e,t,i,n,l,u)}t=o,s=r,l=N,b!=null?ys(e,!!s,b,!1):!!l!=!!s&&(t!=null?ys(e,!!s,t,!0):ys(e,!!s,s?[]:"",!1));return;case"textarea":N=b=null;for(o in s)if(i=s[o],s.hasOwnProperty(o)&&i!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ne(e,t,o,null,l,i)}for(r in l)if(i=l[r],n=s[r],l.hasOwnProperty(r)&&(i!=null||n!=null))switch(r){case"value":b=i;break;case"defaultValue":N=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==n&&ne(e,t,r,i,l,n)}Go(e,b,N);return;case"option":for(var M in s)if(b=s[M],s.hasOwnProperty(M)&&b!=null&&!l.hasOwnProperty(M))switch(M){case"selected":e.selected=!1;break;default:ne(e,t,M,null,l,b)}for(u in l)if(b=l[u],N=s[u],l.hasOwnProperty(u)&&b!==N&&(b!=null||N!=null))switch(u){case"selected":e.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:ne(e,t,u,b,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in s)b=s[q],s.hasOwnProperty(q)&&b!=null&&!l.hasOwnProperty(q)&&ne(e,t,q,null,l,b);for(v in l)if(b=l[v],N=s[v],l.hasOwnProperty(v)&&b!==N&&(b!=null||N!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(c(137,t));break;default:ne(e,t,v,b,l,N)}return;default:if(Pn(t)){for(var re in s)b=s[re],s.hasOwnProperty(re)&&b!==void 0&&!l.hasOwnProperty(re)&&kc(e,t,re,void 0,l,b);for(S in l)b=l[S],N=s[S],!l.hasOwnProperty(S)||b===N||b===void 0&&N===void 0||kc(e,t,S,b,l,N);return}}for(var h in s)b=s[h],s.hasOwnProperty(h)&&b!=null&&!l.hasOwnProperty(h)&&ne(e,t,h,null,l,b);for(w in l)b=l[w],N=s[w],!l.hasOwnProperty(w)||b===N||b==null&&N==null||ne(e,t,w,b,l,N)}function Ym(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cf(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var i=s[l],n=i.transferSize,r=i.initiatorType,o=i.duration;if(n&&o&&Ym(r)){for(r=0,o=i.responseEnd,l+=1;l<s.length;l++){var u=s[l],v=u.startTime;if(v>o)break;var S=u.transferSize,w=u.initiatorType;S&&Ym(w)&&(u=u.responseEnd,r+=S*(u<o?1:(o-v)/(u-v)))}if(--l,t+=8*(n+r)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zc=null,Bc=null;function ln(e){return e.nodeType===9?e:e.ownerDocument}function Xm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hc=null;function wf(){var e=window.event;return e&&e.type==="popstate"?e===Hc?!1:(Hc=e,!0):(Hc=null,!1)}var Km=typeof setTimeout=="function"?setTimeout:void 0,Tf=typeof clearTimeout=="function"?clearTimeout:void 0,Pm=typeof Promise=="function"?Promise:void 0,Ef=typeof queueMicrotask=="function"?queueMicrotask:typeof Pm<"u"?function(e){return Pm.resolve(null).then(e).catch(Df)}:Km;function Df(e){setTimeout(function(){throw e})}function _a(e){return e==="head"}function Zm(e,t){var s=t,l=0;do{var i=s.nextSibling;if(e.removeChild(s),i&&i.nodeType===8)if(s=i.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(i),Zs(t);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ql(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,ql(s);for(var n=s.firstChild;n;){var r=n.nextSibling,o=n.nodeName;n[al]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&n.rel.toLowerCase()==="stylesheet"||s.removeChild(n),n=r}}else s==="body"&&ql(e.ownerDocument.body);s=i}while(s);Zs(t)}function Fm(e,t){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?t?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(t?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function Lc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var s=t;switch(t=t.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Lc(s),Yn(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Rf(e,t,s,l){for(;e.nodeType===1;){var i=s;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[al])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function _f(e,t,s){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=At(e.nextSibling),e===null))return null;return e}function $m(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=At(e.nextSibling),e===null))return null;return e}function Gc(e){return e.data==="$?"||e.data==="$~"}function Vc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mf(e,t){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||s.readyState!=="loading")t();else{var l=function(){t(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qc=null;function Wm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(t===0)return At(e.nextSibling);t--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||t++}e=e.nextSibling}return null}function ep(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(t===0)return e;t--}else s!=="/$"&&s!=="/&"||t++}e=e.previousSibling}return null}function tp(e,t,s){switch(t=ln(s),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ql(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Yn(e)}var Ct=new Map,ap=new Set;function nn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=_.d;_.d={f:Uf,r:Of,D:kf,C:zf,L:Bf,m:qf,X:Lf,S:Hf,M:Gf};function Uf(){var e=na.f(),t=Zi();return e||t}function Of(e){var t=hs(e);t!==null&&t.tag===5&&t.type==="form"?vu(t):na.r(e)}var Js=typeof document>"u"?null:document;function sp(e,t,s){var l=Js;if(l&&typeof t=="string"&&t){var i=gt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof s=="string"&&(i+='[crossorigin="'+s+'"]'),ap.has(i)||(ap.add(i),e={rel:e,crossOrigin:s,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),He(t,"link",e),Me(t),l.head.appendChild(t)))}}function kf(e){na.D(e),sp("dns-prefetch",e,null)}function zf(e,t){na.C(e,t),sp("preconnect",e,t)}function Bf(e,t,s){na.L(e,t,s);var l=Js;if(l&&e&&t){var i='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&s&&s.imageSrcSet?(i+='[imagesrcset="'+gt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(i+='[imagesizes="'+gt(s.imageSizes)+'"]')):i+='[href="'+gt(e)+'"]';var n=i;switch(t){case"style":n=Ks(e);break;case"script":n=Ps(e)}Ct.has(n)||(e=k({rel:"preload",href:t==="image"&&s&&s.imageSrcSet?void 0:e,as:t},s),Ct.set(n,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(Hl(n))||t==="script"&&l.querySelector(Ll(n))||(t=l.createElement("link"),He(t,"link",e),Me(t),l.head.appendChild(t)))}}function qf(e,t){na.m(e,t);var s=Js;if(s&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+gt(l)+'"][href="'+gt(e)+'"]',n=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Ps(e)}if(!Ct.has(n)&&(e=k({rel:"modulepreload",href:e},t),Ct.set(n,e),s.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Ll(n)))return}l=s.createElement("link"),He(l,"link",e),Me(l),s.head.appendChild(l)}}}function Hf(e,t,s){na.S(e,t,s);var l=Js;if(l&&e){var i=fs(l).hoistableStyles,n=Ks(e);t=t||"default";var r=i.get(n);if(!r){var o={loading:0,preload:null};if(r=l.querySelector(Hl(n)))o.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},s),(s=Ct.get(n))&&Ic(e,s);var u=r=l.createElement("link");Me(u),He(u,"link",e),u._p=new Promise(function(v,S){u.onload=v,u.onerror=S}),u.addEventListener("load",function(){o.loading|=1}),u.addEventListener("error",function(){o.loading|=2}),o.loading|=4,rn(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:o},i.set(n,r)}}}function Lf(e,t){na.X(e,t);var s=Js;if(s&&e){var l=fs(s).hoistableScripts,i=Ps(e),n=l.get(i);n||(n=s.querySelector(Ll(i)),n||(e=k({src:e,async:!0},t),(t=Ct.get(i))&&Yc(e,t),n=s.createElement("script"),Me(n),He(n,"link",e),s.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function Gf(e,t){na.M(e,t);var s=Js;if(s&&e){var l=fs(s).hoistableScripts,i=Ps(e),n=l.get(i);n||(n=s.querySelector(Ll(i)),n||(e=k({src:e,async:!0,type:"module"},t),(t=Ct.get(i))&&Yc(e,t),n=s.createElement("script"),Me(n),He(n,"link",e),s.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function lp(e,t,s,l){var i=(i=ua.current)?nn(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(t=Ks(s.href),s=fs(i).hoistableStyles,l=s.get(t),l||(l={type:"style",instance:null,count:0,state:null},s.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ks(s.href);var n=fs(i).hoistableStyles,r=n.get(e);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,r),(n=i.querySelector(Hl(e)))&&!n._p&&(r.instance=n,r.state.loading=5),Ct.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ct.set(e,s),n||Vf(i,e,s,r.state))),t&&l===null)throw Error(c(528,""));return r}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=s.async,s=s.src,typeof s=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ps(s),s=fs(i).hoistableScripts,l=s.get(t),l||(l={type:"script",instance:null,count:0,state:null},s.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ks(e){return'href="'+gt(e)+'"'}function Hl(e){return'link[rel="stylesheet"]['+e+"]"}function ip(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function Vf(e,t,s,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),He(t,"link",s),Me(t),e.head.appendChild(t))}function Ps(e){return'[src="'+gt(e)+'"]'}function Ll(e){return"script[async]"+e}function np(e,t,s){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+gt(s.href)+'"]');if(l)return t.instance=l,Me(l),l;var i=k({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Me(l),He(l,"style",i),rn(l,s.precedence,e),t.instance=l;case"stylesheet":i=Ks(s.href);var n=e.querySelector(Hl(i));if(n)return t.state.loading|=4,t.instance=n,Me(n),n;l=ip(s),(i=Ct.get(i))&&Ic(l,i),n=(e.ownerDocument||e).createElement("link"),Me(n);var r=n;return r._p=new Promise(function(o,u){r.onload=o,r.onerror=u}),He(n,"link",l),t.state.loading|=4,rn(n,s.precedence,e),t.instance=n;case"script":return n=Ps(s.src),(i=e.querySelector(Ll(n)))?(t.instance=i,Me(i),i):(l=s,(i=Ct.get(n))&&(l=k({},s),Yc(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Me(i),He(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,rn(l,s.precedence,e));return t.instance}function rn(e,t,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,n=i,r=0;r<l.length;r++){var o=l[r];if(o.dataset.precedence===t)n=o;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=s.nodeType===9?s.head:s,t.insertBefore(e,t.firstChild))}function Ic(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var cn=null;function rp(e,t,s){if(cn===null){var l=new Map,i=cn=new Map;i.set(s,l)}else i=cn,l=i.get(s),l||(l=new Map,i.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),i=0;i<s.length;i++){var n=s[i];if(!(n[al]||n[ke]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var r=n.getAttribute(t)||"";r=e+r;var o=l.get(r);o?o.push(n):l.set(r,[n])}}return l}function cp(e,t,s){e=e.ownerDocument||e,e.head.insertBefore(s,t==="title"?e.querySelector("head > title"):null)}function Qf(e,t,s){if(s===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function op(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function If(e,t,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var i=Ks(l.href),n=t.querySelector(Hl(i));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=on.bind(e),t.then(e,e)),s.state.loading|=4,s.instance=n,Me(n);return}n=t.ownerDocument||t,l=ip(l),(i=Ct.get(i))&&Ic(l,i),n=n.createElement("link"),Me(n);var r=n;r._p=new Promise(function(o,u){r.onload=o,r.onerror=u}),He(n,"link",l),s.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,t),(t=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=on.bind(e),t.addEventListener("load",s),t.addEventListener("error",s))}}var Xc=0;function Yf(e,t){return e.stylesheets&&e.count===0&&un(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&un(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+t);0<e.imgBytes&&Xc===0&&(Xc=62500*Cf());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&un(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>Xc?50:800)+t);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function on(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)un(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dn=null;function un(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dn=new Map,t.forEach(Xf,e),dn=null,on.call(e))}function Xf(e,t){if(!(t.state.loading&4)){var s=dn.get(e);if(s)var l=s.get(null);else{s=new Map,dn.set(e,s);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var r=i[n];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(s.set(r.dataset.precedence,r),l=r)}l&&s.set(null,l)}i=t.instance,r=i.getAttribute("data-precedence"),n=s.get(r)||l,n===l&&s.set(null,i),s.set(r,i),this.count++,l=on.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Gl={$$typeof:xt,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Jf(e,t,s,l,i,n,r,o,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gn(0),this.hiddenUpdates=Gn(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function dp(e,t,s,l,i,n,r,o,u,v,S,w){return e=new Jf(e,t,s,r,u,v,S,w,o),t=1,n===!0&&(t|=24),n=st(3,null,null,t),e.current=n,n.stateNode=e,t=Cr(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:l,isDehydrated:s,cache:t},Dr(n),e}function up(e){return e?(e=ws,e):ws}function mp(e,t,s,l,i,n){i=up(i),l.context===null?l.context=i:l.pendingContext=i,l=ba(t),l.payload={element:s},n=n===void 0?null:n,n!==null&&(l.callback=n),s=ja(e,l,t),s!==null&&(Ze(s,e,t),vl(s,e,t))}function pp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function Jc(e,t){pp(e,t),(e=e.alternate)&&pp(e,t)}function xp(e){if(e.tag===13||e.tag===31){var t=Ya(e,67108864);t!==null&&Ze(t,e,67108864),Jc(e,67108864)}}function hp(e){if(e.tag===13||e.tag===31){var t=ct();t=Vn(t);var s=Ya(e,t);s!==null&&Ze(s,e,t),Jc(e,t)}}var mn=!0;function Kf(e,t,s,l){var i=C.T;C.T=null;var n=_.p;try{_.p=2,Kc(e,t,s,l)}finally{_.p=n,C.T=i}}function Pf(e,t,s,l){var i=C.T;C.T=null;var n=_.p;try{_.p=8,Kc(e,t,s,l)}finally{_.p=n,C.T=i}}function Kc(e,t,s,l){if(mn){var i=Pc(l);if(i===null)Oc(e,t,l,pn,s),gp(e,l);else if(Ff(i,e,t,s,l))l.stopPropagation();else if(gp(e,l),t&4&&-1<Zf.indexOf(e)){for(;i!==null;){var n=hs(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var r=La(n.pendingLanes);if(r!==0){var o=n;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var u=1<<31-tt(r);o.entanglements[1]|=u,r&=~u}qt(n),(te&6)===0&&(Ki=We()+500,kl(0))}}break;case 31:case 13:o=Ya(n,2),o!==null&&Ze(o,n,2),Zi(),Jc(n,2)}if(n=Pc(l),n===null&&Oc(e,t,l,pn,s),n===i)break;i=n}i!==null&&l.stopPropagation()}else Oc(e,t,l,null,s)}}function Pc(e){return e=Fn(e),Zc(e)}var pn=null;function Zc(e){if(pn=null,e=xs(e),e!==null){var t=y(e);if(t===null)e=null;else{var s=t.tag;if(s===13){if(e=E(t),e!==null)return e;e=null}else if(s===31){if(e=z(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pn=e,null}function fp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ox()){case Ao:return 2;case Co:return 8;case ti:case kx:return 32;case wo:return 268435456;default:return 32}default:return 32}}var Fc=!1,Ma=null,Ua=null,Oa=null,Vl=new Map,Ql=new Map,ka=[],Zf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gp(e,t){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Vl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(t.pointerId)}}function Il(e,t,s,l,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:s,eventSystemFlags:l,nativeEvent:n,targetContainers:[i]},t!==null&&(t=hs(t),t!==null&&xp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ff(e,t,s,l,i){switch(t){case"focusin":return Ma=Il(Ma,e,t,s,l,i),!0;case"dragenter":return Ua=Il(Ua,e,t,s,l,i),!0;case"mouseover":return Oa=Il(Oa,e,t,s,l,i),!0;case"pointerover":var n=i.pointerId;return Vl.set(n,Il(Vl.get(n)||null,e,t,s,l,i)),!0;case"gotpointercapture":return n=i.pointerId,Ql.set(n,Il(Ql.get(n)||null,e,t,s,l,i)),!0}return!1}function yp(e){var t=xs(e.target);if(t!==null){var s=y(t);if(s!==null){if(t=s.tag,t===13){if(t=E(s),t!==null){e.blockedOn=t,Mo(e.priority,function(){hp(s)});return}}else if(t===31){if(t=z(s),t!==null){e.blockedOn=t,Mo(e.priority,function(){hp(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=Pc(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Zn=l,s.target.dispatchEvent(l),Zn=null}else return t=hs(s),t!==null&&xp(t),e.blockedOn=s,!1;t.shift()}return!0}function vp(e,t,s){xn(e)&&s.delete(t)}function $f(){Fc=!1,Ma!==null&&xn(Ma)&&(Ma=null),Ua!==null&&xn(Ua)&&(Ua=null),Oa!==null&&xn(Oa)&&(Oa=null),Vl.forEach(vp),Ql.forEach(vp)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Fc||(Fc=!0,m.unstable_scheduleCallback(m.unstable_NormalPriority,$f)))}var fn=null;function bp(e){fn!==e&&(fn=e,m.unstable_scheduleCallback(m.unstable_NormalPriority,function(){fn===e&&(fn=null);for(var t=0;t<e.length;t+=3){var s=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(Zc(l||s)===null)continue;break}var n=hs(s);n!==null&&(e.splice(t,3),t-=3,Pr(n,{pending:!0,data:i,method:s.method,action:l},l,i))}}))}function Zs(e){function t(u){return hn(u,e)}Ma!==null&&hn(Ma,e),Ua!==null&&hn(Ua,e),Oa!==null&&hn(Oa,e),Vl.forEach(t),Ql.forEach(t);for(var s=0;s<ka.length;s++){var l=ka[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ka.length&&(s=ka[0],s.blockedOn===null);)yp(s),s.blockedOn===null&&ka.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var i=s[l],n=s[l+1],r=i[Ie]||null;if(typeof n=="function")r||bp(s);else if(r){var o=null;if(n&&n.hasAttribute("formAction")){if(i=n,r=n[Ie]||null)o=r.formAction;else if(Zc(i)!==null)continue}else o=r.action;typeof o=="function"?s[l+1]=o:(s.splice(l,3),l-=3),bp(s)}}}function jp(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function $c(e){this._internalRoot=e}gn.prototype.render=$c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var s=t.current,l=ct();mp(s,l,e,t,null,null)},gn.prototype.unmount=$c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mp(e.current,2,null,e,null,null),Zi(),t[ps]=null}};function gn(e){this._internalRoot=e}gn.prototype.unstable_scheduleHydration=function(e){if(e){var t=_o();e={blockedOn:null,target:e,priority:t};for(var s=0;s<ka.length&&t!==0&&t<ka[s].priority;s++);ka.splice(s,0,e),s===0&&yp(e)}};var Np=f.version;if(Np!=="19.2.0")throw Error(c(527,Np,"19.2.0"));_.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Re(t),e=e!==null?he(e):null,e=e===null?null:e.stateNode,e};var Wf={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yn.isDisabled&&yn.supportsFiber)try{Ws=yn.inject(Wf),et=yn}catch{}}return Yl.createRoot=function(e,t){if(!d(e))throw Error(c(299));var s=!1,l="",i=Du,n=Ru,r=_u;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=dp(e,1,!1,null,null,s,l,null,i,n,r,jp),e[ps]=t.current,Uc(e),new $c(t)},Yl.hydrateRoot=function(e,t,s){if(!d(e))throw Error(c(299));var l=!1,i="",n=Du,r=Ru,o=_u,u=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(i=s.identifierPrefix),s.onUncaughtError!==void 0&&(n=s.onUncaughtError),s.onCaughtError!==void 0&&(r=s.onCaughtError),s.onRecoverableError!==void 0&&(o=s.onRecoverableError),s.formState!==void 0&&(u=s.formState)),t=dp(e,1,!0,t,s??null,l,i,u,n,r,o,jp),t.context=up(null),s=t.current,l=ct(),l=Vn(l),i=ba(l),i.callback=null,ja(s,i,l),s=l,t.current.lanes=s,tl(t,s),qt(t),e[ps]=t.current,Uc(e),new gn(t)},Yl.version="19.2.0",Yl}var Ep;function Fg(){if(Ep)return eo.exports;Ep=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(f){console.error(f)}}return m(),eo.exports=Zg(),eo.exports}var $g=Fg();const Wg=Mg($g);function L(...m){return Xg(Jg(m))}const ey=Un("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),xe=R.forwardRef(({className:m,variant:f,size:x,asChild:c=!1,...d},y)=>{const E=c?Ug:"button";return a.jsx(E,{className:L(ey({variant:f,size:x,className:m})),ref:y,...d})});xe.displayName="Button";function ty({className:m}){const f=Dn(),x=[{title:"General",items:[{title:"Home",href:"/",icon:Lp},{title:"GitHub Workflow",href:"/github-axa-usage",icon:Ba},{title:"Global Coding Standards",href:"/coding-standard",icon:Ht},{title:"Clean Architecture",href:"/clean-architecture",icon:Te}]},{title:"Backend Guidelines",items:[{title:".NET Development",href:"/dotnet-developer-guideline",icon:ca},{title:"Java Development",href:"/java-developer-guideline",icon:Sn},{title:"Python Development",href:"/python-developer-guideline",icon:is}]},{title:"Frontend & Mobile",items:[{title:"React Development",href:"/react-developer-guideline",icon:Jl},{title:"Flutter Development",href:"/flutter-developer-guideline",icon:An}]},{title:"DevOps & CI/CD",items:[{title:"OpenShift Platform",href:"/openshift-guideline",icon:rs},{title:"Jenkins CI/CD",href:"/jenkins-guideline",icon:mo},{title:"SonarQube",href:"/sonarqube-guideline",icon:Cn}]}];return a.jsx("nav",{className:L("glass-sidebar h-full rounded-r-2xl",m),"aria-label":"Main navigation",children:a.jsx("div",{className:"space-y-6 py-6",children:x.map(c=>a.jsxs("div",{className:"px-4 py-2",children:[a.jsx("h2",{className:"mb-3 px-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60",children:c.title}),a.jsx("ul",{className:"space-y-1",role:"list",children:c.items.map(d=>{const y=f.pathname===d.href;return a.jsx("li",{children:a.jsx(xe,{asChild:!0,variant:"ghost",className:L("w-full justify-start transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",y?"glass-card text-primary font-bold shadow-sm":"text-muted-foreground hover:bg-primary/5 hover:text-primary"),children:a.jsxs(Le,{to:d.href,"aria-current":y?"page":void 0,children:[a.jsx(d.icon,{className:L("mr-2 h-4 w-4",y?"text-primary":"text-muted-foreground/60")}),d.title]})})},d.href)})})]},c.title))})})}const ay=kg,sy=zg,ly=Bg,hx=R.forwardRef(({className:m,sideOffset:f=4,...x},c)=>a.jsx(Og,{children:a.jsx(ex,{ref:c,sideOffset:f,className:L("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",m),...x})}));hx.displayName=ex.displayName;function iy(){const[m,f]=R.useState(localStorage.getItem("theme")||"light");return R.useEffect(()=>{const x=window.document.documentElement;x.classList.remove("light","dark"),x.classList.add(m),localStorage.setItem("theme",m)},[m]),a.jsxs(sy,{children:[a.jsx(ly,{asChild:!0,children:a.jsxs(xe,{variant:"ghost",size:"icon",onClick:()=>f(m==="light"?"dark":"light"),children:[a.jsx(tg,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),a.jsx(ag,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),a.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}),a.jsx(hx,{children:a.jsx("p",{children:"Toggle theme"})})]})}const ny=Un("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function j({className:m,variant:f,...x}){return a.jsx("div",{className:L(ny({variant:f}),m),...x})}const ry=({isOpen:m,onOpenChange:f})=>{const[x,c]=R.useState(""),[d,y]=R.useState([]),[E,z]=R.useState(0),U=wg();R.useEffect(()=>{if(x.trim().length>1){const k=[{id:"1",title:"Clean Architecture Standards",category:"Architecture",href:"/clean-architecture"},{id:"2",title:"Global Coding Standards",category:"Standards",href:"/coding-standard"},{id:"3",title:".NET Developer Guideline",category:".NET",href:"/dotnet-developer-guideline"},{id:"4",title:"GitHub Workflow & PRs",category:"Workflow",href:"/github-axa-usage"},{id:"5",title:"React Frontend Standards",category:"Frontend",href:"/react-developer-guideline"},{id:"6",title:"Python & AI Guidelines",category:"Python",href:"/python-developer-guideline"},{id:"7",title:"Java Spring Boot Standards",category:"Java",href:"/java-developer-guideline"},{id:"8",title:"Flutter Mobile Design",category:"Mobile",href:"/flutter-developer-guideline"}].filter(oe=>oe.title.toLowerCase().includes(x.toLowerCase())||oe.category.toLowerCase().includes(x.toLowerCase()));y(k),z(0)}else y([])},[x]);const Re=he=>{f(!1),U(he)};return R.useEffect(()=>{const he=k=>{m&&(k.key==="ArrowDown"?(k.preventDefault(),z(oe=>(oe+1)%(d.length||1))):k.key==="ArrowUp"?(k.preventDefault(),z(oe=>(oe-1+(d.length||1))%(d.length||1))):k.key==="Enter"&&d.length>0?(k.preventDefault(),Re(d[E].href)):k.key==="Escape"&&f(!1))};return window.addEventListener("keydown",he),()=>window.removeEventListener("keydown",he)},[m,d,E]),a.jsx(po,{children:m&&a.jsxs("div",{className:"fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 pointer-events-none",children:[a.jsx(Oe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-background/80 backdrop-blur-sm pointer-events-auto",onClick:()=>f(!1)}),a.jsxs(Oe.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},className:"relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-2xl overflow-hidden pointer-events-auto",children:[a.jsxs("div",{className:"flex items-center px-4 py-4 border-b border-border/50",children:[a.jsx(wn,{className:"h-5 w-5 text-muted-foreground mr-3"}),a.jsx("input",{autoFocus:!0,placeholder:"Type a command or search documentation...",className:"flex-1 bg-transparent border-none outline-none focus:ring-0 text-lg placeholder:text-muted-foreground",value:x,onChange:he=>c(he.target.value)}),a.jsx("div",{className:"flex items-center gap-1.5 ml-2",children:a.jsx("kbd",{className:"hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground",children:"ESC"})})]}),a.jsx("div",{className:"max-h-[60vh] overflow-y-auto p-2",children:d.length>0?a.jsx("div",{className:"space-y-1",children:d.map((he,k)=>a.jsxs("button",{onClick:()=>Re(he.href),className:L("w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200",k===E?"bg-primary/10 text-primary border-primary/20":"hover:bg-muted/50 border-transparent"),children:[a.jsx("div",{className:L("h-9 w-9 rounded-lg flex items-center justify-center transition-colors",k===E?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground"),children:a.jsx(xo,{className:"h-4 w-4"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"font-semibold text-sm",children:he.title}),a.jsx("div",{className:"text-xs text-muted-foreground truncate",children:he.category})]}),k===E&&a.jsxs("div",{className:"flex items-center gap-1 text-[10px] font-medium opacity-60",children:[a.jsx(sg,{className:"h-3 w-3"}),a.jsx("span",{children:"ENTER"})]})]},he.id))}):x.length>1?a.jsx("div",{className:"py-12 text-center",children:a.jsxs("p",{className:"text-sm text-muted-foreground",children:['No matches found for "',x,'"']})}):a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("p",{className:"text-xs font-bold text-muted-foreground uppercase tracking-widest pl-2",children:"Suggestions"}),a.jsx("div",{className:"grid grid-cols-2 gap-2",children:["Clean Architecture","SOLID","API Standards","GitFlow"].map(he=>a.jsxs("button",{onClick:()=>c(he),className:"flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 text-xs transition-colors text-left",children:[he,a.jsx(Kl,{className:"h-3 w-3 opacity-50"})]},he))})]})}),a.jsxs("div",{className:"bg-muted/30 px-4 py-3 border-t border-border/50 flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-4 text-[10px] text-muted-foreground",children:[a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx("kbd",{className:"rounded border bg-background px-1 px-1",children:"↓"}),a.jsx("kbd",{className:"rounded border bg-background px-1",children:"↑"}),"to navigate"]}),a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx("kbd",{className:"rounded border bg-background px-1",children:"↵"}),"to select"]})]}),a.jsxs(j,{variant:"outline",className:"text-[10px] font-mono opacity-60",children:[a.jsx(lg,{className:"h-2 w-2 mr-1"})," K"]})]})]})]})})},cy=[{title:"Getting Started",items:[{title:"GitHub Workflow",href:"/github-axa-usage",icon:Ba,description:"PR standards & branching"},{title:"Coding Standards",href:"/coding-standard",icon:Ht,description:"Global conventions"},{title:"Clean Architecture",href:"/clean-architecture",icon:Te,description:"DDD patterns"}]},{title:"Backend",items:[{title:".NET Development",href:"/dotnet-developer-guideline",icon:ca,description:"C# & ASP.NET Core"},{title:"Java Development",href:"/java-developer-guideline",icon:Sn,description:"Spring Boot"},{title:"Python Development",href:"/python-developer-guideline",icon:is,description:"FastAPI & AI"}]},{title:"Frontend & Mobile",items:[{title:"React Development",href:"/react-developer-guideline",icon:Jl,description:"Modern React"},{title:"Flutter Development",href:"/flutter-developer-guideline",icon:An,description:"Cross-platform"}]},{title:"DevOps & CI/CD",items:[{title:"OpenShift Platform",href:"/openshift-guideline",icon:rs,description:"Container platform"},{title:"Jenkins CI/CD",href:"/jenkins-guideline",icon:mo,description:"Build & deploy"},{title:"SonarQube",href:"/sonarqube-guideline",icon:Cn,description:"Code quality"}]}],oy=()=>{const[m,f]=R.useState(!1);return a.jsxs("div",{className:"relative",onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[a.jsxs("button",{className:L("flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors","hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",m?"text-foreground":"text-muted-foreground"),onClick:()=>f(!m),"aria-expanded":m,"aria-haspopup":"true",children:["Docs",a.jsx(ig,{className:L("h-4 w-4 transition-transform duration-200",m&&"rotate-180")})]}),a.jsx(po,{children:m&&a.jsx(Oe.div,{initial:{opacity:0,y:8,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:8,scale:.96},transition:{duration:.15,ease:"easeOut"},className:"absolute left-0 top-full pt-2 z-50",children:a.jsx("div",{className:"w-[700px] glass rounded-2xl shadow-2xl border p-4 grid grid-cols-4 gap-4",children:cy.map(x=>a.jsxs("div",{className:"space-y-2",children:[a.jsx("h4",{className:"text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2",children:x.title}),a.jsx("ul",{className:"space-y-1",children:x.items.map(c=>a.jsx("li",{children:a.jsxs(Le,{to:c.href,onClick:()=>f(!1),className:L("flex items-start gap-3 p-2 rounded-lg transition-colors","hover:bg-primary/5 focus-visible:bg-primary/5 focus-visible:outline-none group"),children:[a.jsx("div",{className:"mt-0.5 p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors",children:a.jsx(c.icon,{className:"h-3.5 w-3.5"})}),a.jsxs("div",{className:"space-y-0.5",children:[a.jsx("div",{className:"text-sm font-medium text-foreground",children:c.title}),c.description&&a.jsx("div",{className:"text-xs text-muted-foreground",children:c.description})]})]})},c.href))})]},x.title))})})})]})},dy=Lg,uy=Gg,my=qg,fx=R.forwardRef(({className:m,...f},x)=>a.jsx(tx,{className:L("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",m),...f,ref:x}));fx.displayName=tx.displayName;const py=Un("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),gx=R.forwardRef(({side:m="right",className:f,children:x,...c},d)=>a.jsxs(my,{children:[a.jsx(fx,{}),a.jsxs(ax,{ref:d,className:L(py({side:m}),f),...c,children:[a.jsxs(Hg,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[a.jsx(Gp,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"Close"})]}),x]})]}));gx.displayName=ax.displayName;const yx=({className:m,...f})=>a.jsx("div",{className:L("flex flex-col space-y-2 text-center sm:text-left",m),...f});yx.displayName="SheetHeader";const vx=R.forwardRef(({className:m,...f},x)=>a.jsx(sx,{ref:x,className:L("text-lg font-semibold text-foreground",m),...f}));vx.displayName=sx.displayName;const xy=R.forwardRef(({className:m,...f},x)=>a.jsx(lx,{ref:x,className:L("text-sm text-muted-foreground",m),...f}));xy.displayName=lx.displayName;const jo=R.forwardRef(({className:m,children:f,...x},c)=>a.jsxs(ix,{ref:c,className:L("relative overflow-hidden",m),...x,children:[a.jsx(Vg,{className:"h-full w-full rounded-[inherit]",children:f}),a.jsx(bx,{}),a.jsx(Qg,{})]}));jo.displayName=ix.displayName;const bx=R.forwardRef(({className:m,orientation:f="vertical",...x},c)=>a.jsx(nx,{ref:c,orientation:f,className:L("flex touch-none select-none transition-colors",f==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",f==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",m),...x,children:a.jsx(Ig,{className:"relative flex-1 rounded-full bg-border"})}));bx.displayName=nx.displayName;const hy=[{title:"Getting Started",items:[{title:"GitHub Workflow",href:"/github-axa-usage"},{title:"Coding Standards",href:"/coding-standard"},{title:"Clean Architecture",href:"/clean-architecture"}]},{title:"Backend",items:[{title:".NET Development",href:"/dotnet-developer-guideline"},{title:"Java Development",href:"/java-developer-guideline"},{title:"Python Development",href:"/python-developer-guideline"}]},{title:"Frontend & Mobile",items:[{title:"React Development",href:"/react-developer-guideline"},{title:"Flutter Development",href:"/flutter-developer-guideline"}]}],fy=()=>{const[m,f]=R.useState(!1),[x,c]=R.useState(!1),d=Dn();return R.useEffect(()=>{const y=()=>{f(window.scrollY>0)};return window.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)},[]),R.useEffect(()=>{const y=E=>{(E.metaKey||E.ctrlKey)&&E.key==="k"&&(E.preventDefault(),c(!0))};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]),a.jsxs("header",{className:`sticky top-0 z-50 w-full border-b transition-all duration-300 ${m?"glass":"bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"}`,role:"banner",children:[a.jsxs("div",{className:"container flex h-16 items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-6",children:[a.jsxs(Le,{to:"/",className:"flex items-center gap-2 transition-opacity hover:opacity-80","aria-label":"AII IT Playbook Home",children:[a.jsx("div",{className:"p-1.5 rounded-lg bg-primary/10",children:a.jsx(is,{className:"h-5 w-5 text-primary"})}),a.jsx("span",{className:"hidden font-bold text-foreground sm:inline-block",children:"AII IT Playbook"})]}),a.jsx("nav",{className:"hidden md:flex items-center gap-1","aria-label":"Main navigation",children:a.jsx(oy,{})})]}),a.jsxs(dy,{children:[a.jsx(uy,{asChild:!0,children:a.jsx(xe,{variant:"ghost",size:"icon",className:"md:hidden","aria-label":"Open menu",children:a.jsx(ng,{className:"h-5 w-5"})})}),a.jsxs(gx,{side:"left",className:"w-80",children:[a.jsx(yx,{children:a.jsx(vx,{children:a.jsxs(Le,{to:"/",className:"flex items-center gap-2",children:[a.jsx(is,{className:"h-5 w-5 text-primary"}),a.jsx("span",{className:"font-bold",children:"AII IT Playbook"})]})})}),a.jsx(jo,{className:"my-4 h-[calc(100vh-8rem)]",children:a.jsx("div",{className:"space-y-6 py-4",children:hy.map(y=>a.jsxs("div",{children:[a.jsx("h4",{className:"mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide",children:y.title}),a.jsx("div",{className:"space-y-1",children:y.items.map(E=>a.jsx(Le,{to:E.href,className:`block px-2 py-2 text-sm rounded-lg transition-colors ${d.pathname===E.href?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:E.title},E.href))})]},y.title))})})]})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs(xe,{variant:"ghost",onClick:()=>c(!0),className:"relative h-9 w-9 p-0 md:w-60 md:justify-start md:px-3 md:py-2 rounded-lg hover:bg-muted/30 transition-colors","aria-label":"Search documentation",children:[a.jsx(wn,{className:"h-4 w-4 md:mr-2"}),a.jsx("span",{className:"hidden md:inline-flex text-sm text-muted-foreground",children:"Search docs..."}),a.jsxs("kbd",{className:"pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded bg-background px-1.5 font-mono text-[10px] font-medium md:flex border shadow-sm",children:[a.jsx("span",{className:"text-xs",children:"⌘"}),"K"]})]}),a.jsx("div",{className:"hidden md:block h-4 w-px bg-border"}),a.jsx(xe,{variant:"ghost",size:"icon",asChild:!0,className:"rounded-full h-9 w-9","aria-label":"View GitHub repository",children:a.jsx("a",{href:"https://github.axa.com/aii",target:"_blank",rel:"noreferrer",children:a.jsx(io,{className:"h-4 w-4"})})}),a.jsx(iy,{})]})]}),a.jsx(ry,{isOpen:x,onOpenChange:c})]})},gy=()=>a.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all",children:"Skip to content"}),yy=()=>{const{scrollYProgress:m}=rg(),f=cg(m,{stiffness:100,damping:30,restDelta:.001});return a.jsx(Oe.div,{className:"fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]",style:{scaleX:f}})},mt=({children:m,showSidebar:f=!0,showReadingProgress:x=!1})=>{const d=Dn().pathname==="/",y=f&&!d,E=x||!d&&y;return a.jsxs("div",{className:"relative flex min-h-screen flex-col bg-background",children:[E&&a.jsx(yy,{}),a.jsx(gy,{}),a.jsx(fy,{}),a.jsxs("div",{className:"flex-1 items-start md:grid md:grid-cols-[200px_minmax(0,1fr)] lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)]",children:[y&&a.jsx("aside",{className:"fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block",role:"navigation","aria-label":"Documentation navigation",children:a.jsx(jo,{className:"h-full py-6 pr-3 lg:py-8 lg:pr-4",children:a.jsx(ty,{})})}),a.jsx("main",{id:"main-content",role:"main",className:`relative py-6 lg:gap-10 lg:py-8 ${y?"":"md:col-span-2"}`,children:a.jsx("div",{className:`w-full min-w-0 ${y?"px-3 md:px-4 lg:px-6":"px-4 md:px-8 lg:px-12"}`,children:m})})]})]})},vy=({children:m,className:f,colors:x=["#0033A0","#4299E1","#0033A0"],animationDuration:c=8})=>a.jsx(Oe.span,{className:L("relative inline-block text-transparent bg-clip-text font-bold",f),animate:{backgroundImage:[`linear-gradient(to right, ${x[0]}, ${x[1]}, ${x[2]})`,`linear-gradient(to right, ${x[1]}, ${x[2]}, ${x[0]})`,`linear-gradient(to right, ${x[2]}, ${x[0]}, ${x[1]})`,`linear-gradient(to right, ${x[0]}, ${x[1]}, ${x[2]})`]},transition:{duration:c,repeat:1/0,ease:"linear"},style:{backgroundSize:"200% auto"},children:m}),jx=({children:m,className:f,color:x="rgba(0, 51, 160, 0.15)",delay:c=.5,duration:d=.8})=>a.jsxs("span",{className:L("relative inline-block px-1",f),children:[a.jsx(Oe.span,{initial:{width:"0%"},whileInView:{width:"100%"},viewport:{once:!0},transition:{delay:c,duration:d,ease:[.6,.01,.05,.95]},className:"absolute bottom-[10%] left-0 h-[60%] -z-10",style:{backgroundColor:x}}),m]}),by=({className:m,gridSize:f=40,gridColor:x="currentColor",dotSize:c=1,maskGradient:d="radial-gradient(circle at center, white, transparent 80%)"})=>a.jsxs("div",{className:L("absolute inset-0 -z-10 overflow-hidden",m),children:[a.jsx(Oe.div,{className:"absolute inset-0 opacity-[0.03] dark:opacity-[0.05]",style:{backgroundImage:`radial-gradient(${x} ${c}px, transparent ${c}px)`,backgroundSize:`${f}px ${f}px`,maskImage:d,WebkitMaskImage:d},animate:{backgroundPosition:["0px 0px",`${f}px ${f}px`]},transition:{duration:20,repeat:1/0,ease:"linear"}}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background",style:{pointerEvents:"none"}})]}),jy=()=>a.jsxs("section",{className:"relative overflow-hidden py-20 lg:py-28",children:[a.jsx(by,{}),a.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[a.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"}),a.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"})]}),a.jsx("div",{className:"absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] dark:opacity-[0.08]"}),a.jsx("div",{className:"container px-4 md:px-6",children:a.jsxs("div",{className:"flex flex-col items-center text-center space-y-8",children:[a.jsx(Oe.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:a.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium",children:[a.jsxs("span",{className:"relative flex h-2 w-2",children:[a.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"}),a.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-primary"})]}),"Enterprise IT Standards"]})}),a.jsxs(Oe.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},className:"space-y-4 max-w-3xl",children:[a.jsxs("h1",{className:"text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",children:["AII IT"," ",a.jsx(vy,{children:"Playbook"})]}),a.jsxs("p",{className:"mx-auto max-w-[600px] text-lg text-muted-foreground md:text-xl",children:[a.jsx(jx,{children:"Engineering standards"}),", DevOps strategies, and best practices for the AII IT environment."]})]}),a.jsxs(Oe.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"flex flex-col sm:flex-row items-center gap-4",children:[a.jsx(xe,{asChild:!0,size:"lg",className:"h-12 px-8 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all font-semibold",children:a.jsxs(Le,{to:"/github-axa-usage",children:["Get Started",a.jsx(dt,{className:"ml-2 h-4 w-4"})]})}),a.jsx(xe,{asChild:!0,variant:"outline",size:"lg",className:"h-12 px-8 rounded-xl hover:bg-muted/50 transition-all font-semibold",children:a.jsxs(Le,{to:"/coding-standard",children:[a.jsx(wt,{className:"mr-2 h-4 w-4"}),"Browse Docs"]})})]}),a.jsx(Oe.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.4},className:"flex flex-wrap items-center justify-center gap-3 pt-4",children:[".NET","React","Java","Python","Flutter"].map(m=>a.jsx("span",{className:"px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/50",children:m},m))})]})})]}),Ny=({href:m,title:f,description:x,previewImage:c,className:d})=>{const[y,E]=bo.useState(!1);return a.jsxs("a",{href:m,className:L("group relative block p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-300 overflow-hidden",d),onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1),children:[a.jsxs("div",{className:"relative z-10 space-y-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("h3",{className:"font-bold text-lg group-hover:text-primary transition-colors",children:f}),a.jsx(no,{className:"h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary"})]}),a.jsx("p",{className:"text-sm text-muted-foreground line-clamp-2",children:x})]}),a.jsx(po,{children:y&&c&&a.jsxs(Oe.div,{initial:{opacity:0,scale:.9,y:10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:10},className:"absolute inset-0 z-0",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"}),a.jsx("img",{src:c,alt:f,className:"w-full h-full object-cover opacity-10"})]})}),a.jsx(Oe.div,{className:"absolute bottom-0 left-0 h-1 bg-primary",initial:{width:0},animate:{width:y?"100%":"0%"},transition:{duration:.3}})]})},Sy=({icon:m,className:f,type:x="neutral"})=>{const c=()=>{switch(x){case"success":return"text-emerald-500 bg-emerald-500/10";case"warning":return"text-amber-500 bg-amber-500/10";case"error":return"text-destructive bg-destructive/10";default:return"text-primary bg-primary/10"}};return a.jsx(Oe.div,{whileHover:{scale:1.1,rotate:5},whileTap:{scale:.95},className:L("flex items-center justify-center p-3 rounded-xl transition-colors",c(),f),children:a.jsx(Oe.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.3},children:m})})},Ay=[{title:".NET Development",description:"Clean Architecture, DDD, and enterprise C# standards.",href:"/dotnet-developer-guideline",icon:ca,color:"blue"},{title:"React Frontend",description:"Component architecture and modern hooks patterns.",href:"/react-developer-guideline",icon:Jl,color:"cyan"},{title:"Java Backend",description:"Spring Boot and microservices best practices.",href:"/java-developer-guideline",icon:Sn,color:"orange"},{title:"Python & AI",description:"FastAPI standards and AI integration guidelines.",href:"/python-developer-guideline",icon:is,color:"yellow"},{title:"Flutter Mobile",description:"Cross-platform excellence with BLoC patterns.",href:"/flutter-developer-guideline",icon:An,color:"sky"},{title:"Clean Architecture",description:"Naming conventions and DDD patterns.",href:"/clean-architecture",icon:Te,color:"purple"}],Cy=()=>{const m={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},f={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4}}};return a.jsxs(mt,{showSidebar:!1,children:[a.jsx(jy,{}),a.jsx("section",{className:"py-16 lg:py-24",children:a.jsxs("div",{className:"container px-4",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("h2",{className:"text-3xl font-bold tracking-tight mb-4",children:"Choose Your Stack"}),a.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Comprehensive standards and strategies for the entire AII IT ecosystem."})]}),a.jsx(Oe.div,{variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:Ay.map(x=>a.jsx(Oe.div,{variants:f,children:a.jsx(Ny,{href:x.href,title:x.title,description:x.description,className:"h-full"})},x.href))})]})}),a.jsx("section",{className:"py-16 lg:py-24 bg-muted/30",children:a.jsx("div",{className:"container px-4",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("h2",{className:"text-3xl font-bold tracking-tight mb-4",children:"How It Works"}),a.jsx("p",{className:"text-muted-foreground",children:"Three simple steps to align with AII development standards."})]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{step:"01",title:"Read the Guidelines",description:"Explore standards tailored for your tech stack.",icon:a.jsx(ca,{className:"h-6 w-6"})},{step:"02",title:"Apply Patterns",description:"Implement Clean Architecture and naming conventions.",icon:a.jsx(Ht,{className:"h-6 w-6"})},{step:"03",title:"Submit PR",description:"Follow our GitHub workflow for code reviews.",icon:a.jsx(G,{className:"h-6 w-6"})}].map((x,c)=>a.jsxs("div",{className:"text-center group",children:[a.jsx(Sy,{icon:x.icon,className:"mx-auto mb-4"}),a.jsx("h3",{className:"font-semibold text-lg mb-2",children:x.title}),a.jsx("p",{className:"text-sm text-muted-foreground",children:x.description})]},c))}),a.jsx("div",{className:"text-center mt-12",children:a.jsx(xe,{asChild:!0,size:"lg",className:"rounded-xl",children:a.jsxs(Le,{to:"/github-axa-usage",children:[a.jsx(Ba,{className:"mr-2 h-4 w-4"}),"View GitHub Workflow"]})})})]})})}),a.jsx("section",{className:"py-16 lg:py-20",children:a.jsx("div",{className:"container px-4",children:a.jsxs("div",{className:"max-w-2xl mx-auto text-center space-y-6",children:[a.jsx("h2",{className:"text-2xl font-bold",children:"Ready to get started?"}),a.jsx("p",{className:"text-muted-foreground",children:"Begin with our global coding standards, then dive into your specific tech stack."}),a.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[a.jsx(xe,{asChild:!0,size:"lg",className:"rounded-xl",children:a.jsxs(Le,{to:"/coding-standard",children:[a.jsx(Ht,{className:"mr-2 h-4 w-4"}),"Global Standards"]})}),a.jsx(xe,{asChild:!0,variant:"outline",size:"lg",className:"rounded-xl",children:a.jsxs(Le,{to:"/clean-architecture",children:[a.jsx(Te,{className:"mr-2 h-4 w-4"}),"Architecture Guide"]})})]})]})})})]})},Tt=({title:m,subtitle:f,breadcrumbs:x,readingTime:c})=>a.jsxs("section",{className:"relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16",children:[a.jsx("div",{className:"absolute inset-0 -z-10 bg-[radial-gradient(35%_35%_at_50%_0%,rgba(0,51,160,0.06)_0%,transparent_100%)]"}),a.jsxs("div",{className:"container px-4",children:[a.jsx("nav",{className:"flex mb-4 items-center gap-2 text-sm font-medium text-muted-foreground animate-in-fade","aria-label":"Breadcrumb",children:x.map((d,y)=>a.jsxs(bo.Fragment,{children:[y>0&&a.jsx(Kl,{className:"h-4 w-4 opacity-50"}),d.href?a.jsx(Le,{to:d.href,className:"hover:text-primary transition-colors flex items-center",children:d.label==="Home"?a.jsx(Lp,{className:"h-4 w-4"}):d.label}):a.jsx("span",{className:"text-foreground font-bold",children:d.label})]},d.label))}),a.jsxs("div",{className:"max-w-[800px] space-y-3 animate-in-fade",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[a.jsx("h1",{className:"text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gradient",children:m}),c&&a.jsxs(j,{variant:"secondary",className:"flex items-center gap-1 text-xs",children:[a.jsx(Vp,{className:"h-3 w-3"}),c," min read"]})]}),a.jsx("p",{className:"text-lg text-muted-foreground leading-relaxed",children:f})]})]}),a.jsx("div",{className:"absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"})]}),D=R.forwardRef(({className:m,orientation:f="horizontal",decorative:x=!0,...c},d)=>a.jsx(rx,{ref:d,decorative:x,orientation:f,className:L("shrink-0 bg-border",f==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",m),...c}));D.displayName=rx.displayName;const T=({code:m,language:f="csharp",showLineNumbers:x=!1,showCopyButton:c=!0,className:d="",title:y,maxHeight:E})=>{const[z,U]=R.useState(!1),Re=R.useCallback(async()=>{try{await navigator.clipboard.writeText(m),U(!0),setTimeout(()=>U(!1),2e3)}catch{}},[m]);return a.jsxs("div",{className:L("group relative my-6 rounded-lg border bg-muted/50 overflow-hidden",d),children:[a.jsxs("div",{className:"flex items-center justify-between border-b bg-muted/80 px-4 py-2",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(og,{className:"h-4 w-4 text-muted-foreground"}),a.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:f}),y&&a.jsx("span",{className:"ml-2 text-sm font-medium text-foreground",children:y})]}),c&&a.jsxs(xe,{variant:"ghost",size:"icon",className:"h-8 w-8 text-muted-foreground hover:text-foreground",onClick:Re,children:[z?a.jsx(dg,{className:"h-4 w-4 text-green-500"}):a.jsx(ug,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"Copy code"})]})]}),a.jsx("div",{className:"overflow-x-auto p-4 font-mono text-sm leading-relaxed",style:{maxHeight:E||"none"},children:a.jsxs("div",{className:"flex gap-4",children:[x&&a.jsx("div",{className:"flex flex-col text-muted-foreground/40 select-none text-right min-w-[20px]",children:m.trim().split(`
`).map((he,k)=>a.jsx("span",{children:k+1},k))}),a.jsx("pre",{className:"flex-1 whitespace-pre-wrap break-words",children:a.jsx("code",{children:m.trim()})})]})})]})},Pl=({previous:m,next:f,className:x})=>!m&&!f?null:a.jsxs("nav",{className:L("flex items-center justify-between gap-4 py-8 border-t",x),"aria-label":"Page navigation",children:[m?a.jsxs(Le,{to:m.href,className:"group flex-1 flex flex-col items-start gap-1 p-4 rounded-xl border hover:border-primary/20 hover:bg-primary/5 transition-all",children:[a.jsxs("span",{className:"flex items-center text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors",children:[a.jsx(mg,{className:"h-4 w-4 mr-1"}),"Previous"]}),a.jsx("span",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:m.title})]}):a.jsx("div",{className:"flex-1"}),f?a.jsxs(Le,{to:f.href,className:"group flex-1 flex flex-col items-end gap-1 p-4 rounded-xl border hover:border-primary/20 hover:bg-primary/5 transition-all text-right",children:[a.jsxs("span",{className:"flex items-center text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors",children:["Next",a.jsx(Kl,{className:"h-4 w-4 ml-1"})]}),a.jsx("span",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:f.title})]}):a.jsx("div",{className:"flex-1"})]}),Dp=[{id:"overview",title:"1. Project Overview",icon:wt},{id:"architecture",title:"2. Architecture Design",icon:Te},{id:"patterns",title:"3. Design Patterns",icon:Ee},{id:"data-access",title:"4. Data Access Patterns",icon:ut},{id:"api-approaches",title:"5. API Implementation",icon:rs},{id:"naming",title:"6. Naming Conventions",icon:Tn},{id:"organization",title:"7. File & Project Org",icon:ho},{id:"validation",title:"8. Validation & Error",icon:Qe},{id:"testing",title:"9. Testing Guidelines",icon:$e}],wy=()=>{const[m,f]=R.useState("overview"),x=[{label:"Home",href:"/"},{label:".NET Guideline"}];return R.useEffect(()=>{const c=new IntersectionObserver(d=>{d.forEach(y=>{y.isIntersecting&&f(y.target.id)})},{threshold:.2,rootMargin:"-10% 0px -70% 0px"});return Dp.forEach(d=>{const y=document.getElementById(d.id);y&&c.observe(y)}),()=>c.disconnect()},[]),a.jsxs(mt,{children:[a.jsx(Tt,{title:".NET Developer Guideline",subtitle:"The exhaustive reference for .NET development, clean code patterns, and project-specific conventions at AII.",breadcrumbs:x,readingTime:25}),a.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[a.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[a.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"})]}),a.jsxs("div",{className:"prose prose-slate dark:prose-invert max-w-none space-y-6",children:[a.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["AII .NET applications are built using ",a.jsx("strong",{children:".NET 8.0/9.0"})," following ",a.jsx("strong",{children:"Clean Architecture"})," or ",a.jsx("strong",{children:"Vertical Slice"})," principles. Our goal is to maintain highly testable, independent, and scalable codebases."]}),a.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose",children:[{text:".NET 8.0/9.0 ASP.NET Core",icon:rs},{text:"EF Core with PostgreSQL/SQL Server",icon:ut},{text:"MediatR for In-Process Messaging",icon:Ee},{text:"FluentValidation for Logic",icon:Qe},{text:"Mapster/AutoMapper for DTOs",icon:Te},{text:"Serilog & OpenTelemetry",icon:we}].map((c,d)=>a.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[a.jsx(c.icon,{className:"h-5 w-5 text-primary"}),a.jsx("span",{className:"font-semibold text-sm",children:c.text})]},d))}),a.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6 not-prose",children:[a.jsxs("div",{className:"flex items-center gap-3 text-blue-500",children:[a.jsx("div",{className:"p-2 rounded-lg bg-blue-500/10",children:a.jsx(G,{className:"h-6 w-6"})}),a.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),a.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first .NET project running at AII:"}),a.jsx("div",{className:"grid gap-4",children:[{step:"Install SDK",desc:"Download and install .NET 8.0 SDK and Runtime."},{step:"Setup IDE",desc:"Install JetBrains Rider (preferred) or VS 2022 with C# extensions."},{step:"Clone Template",desc:"Run 'dotnet new install AII.Templates' to get our latest skeleton."},{step:"Docker Setup",desc:"Ensure Docker Desktop is running for local PostgreSQL/Redis instances."},{step:"Run Tests",desc:"Execute 'dotnet test' to ensure the baseline project is stable."}].map((c,d)=>a.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[a.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm",children:d+1}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-foreground",children:c.step}),a.jsx("p",{className:"text-sm text-muted-foreground",children:c.desc})]})]},d))})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"architecture",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Architecture Design Choices"})]}),a.jsxs("div",{className:"space-y-10",children:[a.jsxs("div",{className:"space-y-6",children:[a.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Clean Architecture (Layered)"}),a.jsx("p",{className:"text-muted-foreground",children:"Standard for enterprise-grade applications with complex domains."}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-6",children:[a.jsx(T,{title:"Order.cs (Domain Layer)",language:"csharp",code:`public class Order : AggregateRoot
{
    public void MarkAsCompleted() {
        if (Status != OrderStatus.Processing)
            throw new DomainException("Invalid state transition");
        Status = OrderStatus.Completed;
    }
}`}),a.jsx(T,{title:"CompleteOrderUseCase.cs (App Layer)",language:"csharp",code:`public async Task Execute(int orderId) {
    var order = await _orderRepository.GetByIdAsync(orderId);
    order.MarkAsCompleted();
    await _unitOfWork.SaveChangesAsync();
}`})]})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[a.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[a.jsx(ho,{className:"h-5 w-5"})," Layer Responsibilities"]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6 text-sm",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"API Layer"}),": Controllers, Endpoints, Middleware, Auth registration."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Application Layer"}),": Commands, Queries, Handlers, DTOs, Validators."]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Domain Layer"}),": Entities, Value Objects, Domain Logic, Exceptions."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Infrastructure Layer"}),": Data Access, External Clients, File Storage."]})]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"patterns",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Design Patterns"})]}),a.jsx("div",{className:"space-y-8",children:a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[a.jsx(Ee,{className:"h-5 w-5 text-yellow-500"})," CQRS with MediatR"]}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Separates read models from write models and enables decorators for logging and validation."}),a.jsx(T,{language:"csharp",code:`public record CreateStudentCommand(string Name) : IRequest<int>;
public class CreateStudentHandler : IRequestHandler<CreateStudentCommand, int> { ... }`})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[a.jsx(we,{className:"h-5 w-5 text-emerald-500"})," Dependency Injection"]}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Always use Constructor Injection. Prefer Scoped for DB context and Transient for lightweight services."}),a.jsx(T,{language:"csharp",code:`public class Service(IRepository repo) : IService {
    // Use Primary Constructor (C# 12)
}`})]})]})})]}),a.jsx(D,{}),a.jsxs("section",{id:"data-access",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Data Access Patterns"})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h3",{className:"text-2xl font-bold",children:"Entity Framework Core"}),a.jsx("p",{className:"text-muted-foreground",children:"The primary ORM for AII .NET projects. Follow these best practices for performance."}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"glass p-6 rounded-2xl border border-emerald-500/20 space-y-4",children:[a.jsx("h5",{className:"font-bold text-emerald-600",children:"✅ Eager Loading & NoTracking"}),a.jsx(T,{language:"csharp",code:`var students = await _context.Students
    .AsNoTracking()
    .Include(s => s.Courses)
    .Where(s => s.IsActive)
    .ToListAsync();`})]}),a.jsxs("div",{className:"glass p-6 rounded-2xl border border-blue-500/20 space-y-4",children:[a.jsx("h5",{className:"font-bold text-blue-600 font-mono",children:"Dapper for Performance"}),a.jsx("p",{className:"text-xs text-muted-foreground",children:"Use Dapper for high-performance read scenarios or complex stored procedures."}),a.jsx(T,{language:"csharp",code:`return await _dbConnection.QueryAsync<ReportDTO>(
    "EXEC GetComplexReport @Date", new { Date = DateTime.Now });`})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"api-approaches",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"API Implementation Approaches"})]}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-xl font-bold",children:"Standard Controllers"}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Best for large-scale APIs requiring complex route attributes or filters."}),a.jsx(T,{language:"csharp",code:`[ApiController, Route("api/[controller]")]
public class StudentsController : ControllerBase {
    [HttpPost] public async Task<IActionResult> Create(DTO data) => Ok();
}`})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-xl font-bold",children:"Minimal APIs"}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Recommended for microservices or simple feature sets. Less boilerplate."}),a.jsx(T,{language:"csharp",code:`app.MapPost("/api/students", async (Command cmd, ISender sender) => 
    Results.Ok(await sender.Send(cmd)));`})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"naming",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Naming Conventions"})]}),a.jsx("div",{className:"overflow-x-auto rounded-3xl border glass",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-6 py-4 text-left",children:"Element"}),a.jsx("th",{className:"px-6 py-4 text-left",children:"Convention"}),a.jsx("th",{className:"px-6 py-4 text-left",children:"Example"})]})}),a.jsx("tbody",{className:"divide-y border-t",children:[{el:"Classes",conv:"PascalCase",ex:"UserService"},{el:"Interfaces",conv:"IPascalCase",ex:"IUserRepository"},{el:"Methods",conv:"PascalCaseAsync",ex:"GetListAsync"},{el:"Fields (Private)",conv:"_camelCase",ex:"_logger"},{el:"Parameters",conv:"camelCase",ex:"userId"}].map((c,d)=>a.jsxs("tr",{className:"hover:bg-accent/5 transition-colors",children:[a.jsx("td",{className:"px-6 py-4 font-semibold",children:c.el}),a.jsx("td",{className:"px-6 py-4",children:a.jsx(j,{variant:"outline",className:"bg-primary/5",children:c.conv})}),a.jsx("td",{className:"px-6 py-4 font-mono text-xs text-primary",children:c.ex})]},d))})]})})]}),a.jsx(D,{}),a.jsxs("section",{id:"organization",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"File and Project Organization"})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[a.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest group-hover:text-blue-500/50 transition-colors",children:"Clean Architecture Structure"}),a.jsx("pre",{className:"leading-relaxed",children:`src/
├── Application/      # UseCases, DTOs, Handlers
│   ├── Common/
│   ├── Interfaces/
│   └── TodoItems/    # Feature-based folders
├── Domain/           # Entities, Value Objects
├── Infrastructure/   # Persistence, External Systems
└── WebApi/           # Controllers, Middleware`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"validation",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Validation & Error Handling"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[a.jsx(Qe,{className:"h-5 w-5 text-emerald-500"})," FluentValidation"]}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Keep validation logic separate from your entities and commands."}),a.jsx(T,{language:"csharp",code:`public class CreateUserValidator : AbstractValidator<CreateUserCommand>
{
    public CreateUserValidator() {
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
    }
}`})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[a.jsx(ls,{className:"h-5 w-5 text-red-500"})," Global Exception Handling"]}),a.jsx("p",{className:"text-sm text-muted-foreground italic",children:"Use Exception Filters or Middleware to catch errors and return RFC-standard Problem Details."})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Guidelines"})]}),a.jsx("div",{className:"space-y-10",children:a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"Unit Testing (xUnit)"}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Test business logic in isolation using Moq or NSubstitute."}),a.jsx(T,{language:"csharp",code:`[Fact]
public async Task Handle_ValidRequest_ShouldReturnId() {
    // Arrange, Act, Assert
}`})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"Integration Testing"}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Test the whole ASP.NET Core stack using WebApplicationFactory and Respawn."})]})]})})]}),a.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[a.jsxs("div",{className:"relative z-10 space-y-6",children:[a.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),a.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these .NET standards ensures your application is robust, secure, and ready for production at AII."}),a.jsxs("div",{className:"flex gap-4",children:[a.jsx(xe,{variant:"secondary",asChild:!0,children:a.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",a.jsx(dt,{className:"ml-2 h-4 w-4"})]})}),a.jsx(xe,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:a.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),a.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),a.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:a.jsxs("div",{className:"space-y-1 pb-12",children:[a.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),Dp.map(c=>a.jsxs("a",{href:`#${c.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${m===c.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[a.jsx(c.icon,{className:`h-3.5 w-3.5 shrink-0 ${m===c.id?"text-primary":"text-muted-foreground/40"}`}),c.title]},c.id))]})})]}),a.jsx("div",{className:"px-4 pb-8",children:a.jsx(Pl,{previous:{title:"GitHub Workflow",href:"/github-axa-usage"},next:{title:"Java Development",href:"/java-developer-guideline"}})})]})},I=R.forwardRef(({className:m,...f},x)=>a.jsx("div",{ref:x,className:L("rounded-xl border bg-card text-card-foreground shadow",m),...f}));I.displayName="Card";const W=R.forwardRef(({className:m,...f},x)=>a.jsx("div",{ref:x,className:L("flex flex-col space-y-1.5 p-6",m),...f}));W.displayName="CardHeader";const ee=R.forwardRef(({className:m,...f},x)=>a.jsx("div",{ref:x,className:L("font-semibold leading-none tracking-tight",m),...f}));ee.displayName="CardTitle";const Fe=R.forwardRef(({className:m,...f},x)=>a.jsx("div",{ref:x,className:L("text-sm text-muted-foreground",m),...f}));Fe.displayName="CardDescription";const Z=R.forwardRef(({className:m,...f},x)=>a.jsx("div",{ref:x,className:L("p-6 pt-0",m),...f}));Z.displayName="CardContent";const Ty=R.forwardRef(({className:m,...f},x)=>a.jsx("div",{ref:x,className:L("flex items-center p-6 pt-0",m),...f}));Ty.displayName="CardFooter";const Rp=[{id:"overview",title:"1. Project Overview",icon:wt},{id:"components",title:"2. Component Architecture",icon:Te},{id:"state",title:"3. State Management",icon:Ee},{id:"hooks",title:"4. Hooks Best Practices",icon:Lt},{id:"styling",title:"5. Styling Standards",icon:Qp},{id:"data-fetching",title:"6. Data Fetching",icon:ut},{id:"forms",title:"7. Forms & Validation",icon:Qe},{id:"testing",title:"8. Testing Standards",icon:$e},{id:"performance",title:"9. Performance",icon:we},{id:"accessibility",title:"10. Accessibility",icon:pg}],Ey=()=>{const[m,f]=R.useState("overview"),x=[{label:"Home",href:"/"},{label:"Frontend & Mobile"},{label:"React"}];return R.useEffect(()=>{const c=new IntersectionObserver(d=>{const y=d.filter(E=>E.isIntersecting);if(y.length>0){const E=y.reduce((z,U)=>U.intersectionRatio>z.intersectionRatio||U.intersectionRatio===z.intersectionRatio&&U.boundingClientRect.top<z.boundingClientRect.top?U:z);f(E.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return Rp.forEach(d=>{const y=document.getElementById(d.id);y&&c.observe(y)}),()=>c.disconnect()},[]),a.jsxs(mt,{children:[a.jsx(Tt,{title:"React Development Guideline",subtitle:"Standardized practices for building modern, scalable, and maintainable frontend applications at AII.",breadcrumbs:x,readingTime:35}),a.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[a.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[a.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"}),a.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["React is our primary choice for building dynamic user interfaces. These guidelines ensure ",a.jsx("strong",{children:"consistency"}),", ",a.jsx("strong",{children:"performance"}),", and ",a.jsx("strong",{children:"accessibility"})," across all AII web projects."]})]}),a.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"React 18+",icon:Jl},{text:"TypeScript (Strict)",icon:ca},{text:"Vite Build Tool",icon:Ee},{text:"TanStack Query",icon:ut},{text:"React Hook Form",icon:Qe},{text:"Vitest + Testing Library",icon:$e}].map((c,d)=>a.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[a.jsx(c.icon,{className:"h-5 w-5 text-primary"}),a.jsx("span",{className:"font-semibold text-sm",children:c.text})]},d))}),a.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6",children:[a.jsxs("div",{className:"flex items-center gap-3 text-cyan-600",children:[a.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10",children:a.jsx(G,{className:"h-6 w-6"})}),a.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),a.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first React project running at AII:"}),a.jsx("div",{className:"grid gap-4",children:[{step:"Install Node.js",desc:"Install Node.js 18+ LTS. Verify with: node --version"},{step:"Clone Repository",desc:"Clone the project repository and navigate to the project folder."},{step:"Install Dependencies",desc:"Run 'npm install' or 'pnpm install' to install all dependencies."},{step:"Setup IDE",desc:"Install VS Code with ESLint, Prettier, and TypeScript extensions."},{step:"Run Development Server",desc:"Execute 'npm run dev' to start the Vite development server."},{step:"Run Tests",desc:"Execute 'npm run test' to verify the project is stable."}].map((c,d)=>a.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[a.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-sm",children:d+1}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-foreground",children:c.step}),a.jsx("p",{className:"text-sm text-muted-foreground",children:c.desc})]})]},d))})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"components",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Component Architecture"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"We follow a functional component approach with strictly typed props and atomic design principles."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[a.jsx(Jl,{className:"h-5 w-5 text-cyan-500"})," Functional Components Only"]}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Always prefer Functional Components with Hooks over Class Components. This leads to cleaner, more testable code."}),a.jsx(T,{language:"typescript",code:`// ✅ CORRECT: Functional component with typed props
interface UserProfileProps {
  userId: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  onLogout?: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ 
  userId, 
  name, 
  role, 
  onLogout 
}) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <Avatar userId={userId} />
      <div>
        <h2 className="font-bold">{name}</h2>
        <Badge variant={role === 'admin' ? 'destructive' : 'secondary'}>
          {role}
        </Badge>
      </div>
      {onLogout && (
        <Button variant="ghost" onClick={onLogout}>
          Logout
        </Button>
      )}
    </div>
  );
};

export default UserProfile;`})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[a.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"Project Structure"}),a.jsx("pre",{className:"leading-relaxed",children:`src/
├── components/
│   ├── ui/                    # Reusable UI primitives (Button, Card, etc.)
│   ├── forms/                 # Form-specific components
│   ├── layout/                # Layout components (Header, Sidebar, etc.)
│   └── features/              # Feature-specific components
├── hooks/                     # Custom hooks
├── lib/                       # Utilities and helpers
├── pages/                     # Page components (route-level)
├── services/                  # API service functions
├── stores/                    # Global state (Zustand/Context)
├── types/                     # TypeScript type definitions
└── styles/                    # Global styles and themes`})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ DO"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Use functional components"}),a.jsx("li",{children:"• Define explicit prop types"}),a.jsx("li",{children:"• Keep components focused (SRP)"}),a.jsx("li",{children:"• Extract reusable logic to hooks"}),a.jsx("li",{children:"• Use composition over inheritance"})]})]}),a.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ DON'T"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Use class components"}),a.jsx("li",{children:"• Use 'any' type for props"}),a.jsx("li",{children:"• Create god components (500+ lines)"}),a.jsx("li",{children:"• Duplicate logic across components"}),a.jsx("li",{children:"• Nest components too deeply"})]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"state",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"State Management"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Choose the right tool for the right job based on state scope and complexity."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"State Management Decision Tree"}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-4 py-3 text-left",children:"State Type"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Solution"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"When to Use"})]})}),a.jsxs("tbody",{className:"divide-y",children:[a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Local UI State"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{children:"useState"})}),a.jsx("td",{className:"px-4 py-2",children:"Toggle, form inputs, modals"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Complex Local State"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{children:"useReducer"})}),a.jsx("td",{className:"px-4 py-2",children:"Multi-step forms, complex logic"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Server State"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"secondary",children:"TanStack Query"})}),a.jsx("td",{className:"px-4 py-2",children:"API data fetching, caching"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Global Client State"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"secondary",children:"Zustand"})}),a.jsx("td",{className:"px-4 py-2",children:"User preferences, app-wide settings"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Shared Context"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"outline",children:"Context API"})}),a.jsx("td",{className:"px-4 py-2",children:"Theme, auth, localization"})]})]})]})})]}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsx(T,{title:"Zustand Global Store",language:"typescript",code:`// stores/useAuthStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: 'auth-storage' }
  )
);`}),a.jsx(T,{title:"Context for Theme",language:"typescript",code:`// contexts/ThemeContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('system');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};`})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"hooks",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Hooks Best Practices"})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"Custom Hook Pattern",language:"typescript",code:`// hooks/useDebounce.ts
import { useState, useEffect } from 'react';

/**
 * Debounces a value by the specified delay.
 * Useful for search inputs to avoid excessive API calls.
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  
  // Only triggers API call when user stops typing
  const { data } = useSearchQuery(debouncedQuery);
  
  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
};`}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-4",children:[a.jsx("h5",{className:"font-bold text-emerald-600",children:"✅ useEffect Best Practices"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-2",children:[a.jsx("li",{children:"• Always include dependencies"}),a.jsx("li",{children:"• Clean up subscriptions & timers"}),a.jsx("li",{children:"• Avoid async directly in useEffect"}),a.jsx("li",{children:"• Split unrelated effects"})]}),a.jsx(T,{language:"typescript",code:`// ✅ Correct: Async wrapper function
useEffect(() => {
  const fetchData = async () => {
    const result = await api.getUser(userId);
    setUser(result);
  };
  fetchData();
  
  return () => {
    // Cleanup if needed
  };
}, [userId]);`})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-4",children:[a.jsx("h5",{className:"font-bold text-destructive",children:"❌ Common Mistakes"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-2",children:[a.jsx("li",{children:"• Missing dependency array"}),a.jsx("li",{children:"• Objects/arrays in deps without memo"}),a.jsx("li",{children:"• Async function as effect callback"}),a.jsx("li",{children:"• Forgetting cleanup functions"})]}),a.jsx(T,{language:"typescript",code:`// ❌ WRONG: Async directly as callback
useEffect(async () => {
  const result = await api.getUser(userId);
  setUser(result);
}, [userId]); // This causes issues!`})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"styling",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Styling Standards"})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"Recommended Approaches"}),a.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:[{name:"Tailwind CSS",desc:"Utility-first, rapid prototyping",badge:"Primary"},{name:"CSS Modules",desc:"Scoped styles, traditional CSS",badge:"Alternative"},{name:"shadcn/ui",desc:"Accessible component library",badge:"Components"}].map((c,d)=>a.jsxs("div",{className:"p-4 rounded-xl bg-background border",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("span",{className:"font-bold",children:c.name}),a.jsx(j,{variant:"outline",className:"text-xs",children:c.badge})]}),a.jsx("p",{className:"text-xs text-muted-foreground",children:c.desc})]},d))})]}),a.jsx(T,{title:"Component with Tailwind + cn() utility",language:"typescript",code:`// components/ui/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button 
      className={cn(buttonVariants({ variant, size, className }))} 
      {...props} 
    />
  );
};`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"data-fetching",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Data Fetching"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"TanStack Query for server state management and data synchronization."})]}),a.jsx(T,{title:"TanStack Query Usage",language:"typescript",code:`// services/userService.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

// Query keys factory
export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  detail: (id: string) => [...userKeys.all, 'detail', id] as const,
};

// Fetch all users
export const useUsers = () => {
  return useQuery({
    queryKey: userKeys.lists(),
    queryFn: () => api.get<User[]>('/users'),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Fetch single user
export const useUser = (userId: string) => {
  return useQuery({
    queryKey: userKeys.detail(userId),
    queryFn: () => api.get<User>(\`/users/\${userId}\`),
    enabled: !!userId, // Only fetch when userId exists
  });
};

// Create user mutation with cache invalidation
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateUserInput) => api.post<User>('/users', data),
    onSuccess: () => {
      // Invalidate and refetch user list
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
};

// Usage in component
const UserList = () => {
  const { data: users, isLoading, error } = useUsers();
  const createUser = useCreateUser();
  
  if (isLoading) return <Skeleton />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div>
      {users?.map(user => <UserCard key={user.id} user={user} />)}
      <Button onClick={() => createUser.mutate({ name: 'New User' })}>
        Add User
      </Button>
    </div>
  );
};`})]}),a.jsx(D,{}),a.jsxs("section",{id:"forms",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Forms & Validation"})]}),a.jsx(T,{title:"React Hook Form + Zod Validation",language:"typescript",code:`// schemas/userSchema.ts
import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain uppercase letter')
    .regex(/[0-9]/, 'Must contain a number'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export type UserFormData = z.infer<typeof userSchema>;

// components/UserForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema, type UserFormData } from '@/schemas/userSchema';

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: UserFormData) => {
    await createUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email')} />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register('password')} />
        {errors.password && (
          <p className="text-sm text-destructive mt-1">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Account'}
      </Button>
    </form>
  );
};`})]}),a.jsx(D,{}),a.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Standards"})]}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsx(T,{title:"Component Testing",language:"typescript",code:`// components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});`}),a.jsx(T,{title:"Hook Testing",language:"typescript",code:`// hooks/useCounter.test.tsx
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('initializes with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('initializes with custom value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it('increments count', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
});`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"performance",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Performance Optimization"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(we,{className:"h-5 w-5 text-emerald-500"})," Code Splitting"]})}),a.jsxs(Z,{className:"space-y-4",children:[a.jsx("p",{className:"text-sm text-muted-foreground",children:"Use React.lazy for route-level code splitting."}),a.jsx(T,{language:"typescript",code:`const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Suspense>
);`})]})]}),a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(Ee,{className:"h-5 w-5 text-yellow-500"})," Memoization"]})}),a.jsxs(Z,{className:"space-y-4",children:[a.jsx("p",{className:"text-sm text-muted-foreground",children:"Use useMemo and useCallback strategically."}),a.jsx(T,{language:"typescript",code:`const ExpensiveList = ({ items, filter }) => {
  // Memoize expensive computation
  const filteredItems = useMemo(
    () => items.filter(item => item.name.includes(filter)),
    [items, filter]
  );

  // Memoize callback to prevent child re-renders
  const handleSelect = useCallback((id: string) => {
    setSelected(id);
  }, []);

  return <List items={filteredItems} onSelect={handleSelect} />;
};`})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"accessibility",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Accessibility (a11y)"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ CHECKLIST"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Use semantic HTML elements"}),a.jsx("li",{children:"• Add ARIA labels where needed"}),a.jsx("li",{children:"• Ensure keyboard navigation works"}),a.jsx("li",{children:"• Maintain focus management in modals"}),a.jsx("li",{children:"• Use sufficient color contrast"}),a.jsx("li",{children:"• Add alt text to all images"})]})]}),a.jsx("div",{className:"space-y-4",children:a.jsx(T,{language:"typescript",code:`// Accessible button with icon
<Button aria-label="Close dialog" onClick={onClose}>
  <X className="h-4 w-4" />
</Button>

// Skip link for keyboard users
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

// Accessible form field
<div>
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email" 
    aria-describedby="email-error"
    aria-invalid={!!errors.email}
  />
  {errors.email && (
    <p id="email-error" role="alert" className="text-destructive">
      {errors.email.message}
    </p>
  )}
</div>`})})]})]}),a.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[a.jsxs("div",{className:"relative z-10 space-y-6",children:[a.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),a.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these React standards ensures your frontend applications are performant, accessible, and maintainable."}),a.jsxs("div",{className:"flex gap-4",children:[a.jsx(xe,{variant:"secondary",asChild:!0,children:a.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",a.jsx(dt,{className:"ml-2 h-4 w-4"})]})}),a.jsx(xe,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:a.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),a.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),a.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:a.jsxs("div",{className:"space-y-1 pb-12",children:[a.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),Rp.map(c=>a.jsxs("a",{href:`#${c.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${m===c.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[a.jsx(c.icon,{className:`h-3.5 w-3.5 shrink-0 ${m===c.id?"text-primary":"text-muted-foreground/40"}`}),c.title]},c.id))]})})]}),a.jsx("div",{className:"px-4 pb-8",children:a.jsx(Pl,{previous:{title:".NET Development",href:"/dotnet-developer-guideline"},next:{title:"Flutter Development",href:"/flutter-developer-guideline"}})})]})},_p=[{id:"overview",title:"1. Project Overview",icon:wt},{id:"project-structure",title:"2. Project Structure",icon:Te},{id:"spring-boot",title:"3. Spring Boot Standards",icon:Ee},{id:"rest-api",title:"4. REST API Design",icon:rs},{id:"persistence",title:"5. Persistence & Database",icon:ut},{id:"validation",title:"6. Validation & Errors",icon:Qe},{id:"testing",title:"7. Testing Guidelines",icon:$e},{id:"logging",title:"8. Logging & Monitoring",icon:we},{id:"maven",title:"9. Maven Build",icon:Lt},{id:"naming",title:"10. Code Style & Naming",icon:Tn}],Dy=()=>{const[m,f]=R.useState("overview"),x=[{label:"Home",href:"/"},{label:"Backend Guidelines"},{label:"Java"}];return R.useEffect(()=>{const c=new IntersectionObserver(d=>{const y=d.filter(E=>E.isIntersecting);if(y.length>0){const E=y.reduce((z,U)=>U.intersectionRatio>z.intersectionRatio||U.intersectionRatio===z.intersectionRatio&&U.boundingClientRect.top<z.boundingClientRect.top?U:z);f(E.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return _p.forEach(d=>{const y=document.getElementById(d.id);y&&c.observe(y)}),()=>c.disconnect()},[]),a.jsxs(mt,{children:[a.jsx(Tt,{title:"Java Developer Guideline",subtitle:"Standardized practices for building robust and scalable backend services using Java, Spring Boot, and Maven at AII.",breadcrumbs:x}),a.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[a.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[a.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"}),a.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["Java is used for high-performance, enterprise-grade backend services at AII. We utilize ",a.jsx("strong",{children:"Spring Boot 3.x"})," with ",a.jsx("strong",{children:"Maven"})," to accelerate development while maintaining the highest code quality standards."]})]}),a.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Java 17/21 LTS",icon:Sn},{text:"Spring Boot 3.x",icon:Ee},{text:"Maven Build Tool",icon:Lt},{text:"PostgreSQL / Oracle",icon:ut},{text:"Spring Security + JWT",icon:ns},{text:"Micrometer Metrics",icon:we}].map((c,d)=>a.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[a.jsx(c.icon,{className:"h-5 w-5 text-primary"}),a.jsx("span",{className:"font-semibold text-sm",children:c.text})]},d))}),a.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-orange-500/5 border border-orange-500/10 space-y-6",children:[a.jsxs("div",{className:"flex items-center gap-3 text-orange-500",children:[a.jsx("div",{className:"p-2 rounded-lg bg-orange-500/10",children:a.jsx(G,{className:"h-6 w-6"})}),a.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),a.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first Java project running at AII:"}),a.jsx("div",{className:"grid gap-4",children:[{step:"Install JDK",desc:"Download and install JDK 17 or 21 LTS. Verify with: java -version"},{step:"Install Maven",desc:"Install Apache Maven 3.9+. Verify with: mvn -version"},{step:"Setup IDE",desc:"Install IntelliJ IDEA Ultimate (preferred) or VS Code with Java extensions."},{step:"Clone Template",desc:"Clone the AII Spring Boot starter template from the internal repository."},{step:"Build & Run",desc:"Execute 'mvn spring-boot:run' to start the application locally."},{step:"Run Tests",desc:"Execute 'mvn test' to verify the baseline project is stable."}].map((c,d)=>a.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[a.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-sm",children:d+1}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-foreground",children:c.step}),a.jsx("p",{className:"text-sm text-muted-foreground",children:c.desc})]})]},d))})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"project-structure",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Structure (Maven)"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Standard Maven project layout for all AII Java applications."})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[a.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"Maven Standard Layout"}),a.jsx("pre",{className:"leading-relaxed",children:`project-root/
├── pom.xml                    # Maven configuration
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/axa/aii/
│   │   │       ├── Application.java      # Main entry point
│   │   │       ├── config/               # Configuration classes
│   │   │       ├── controller/           # REST controllers
│   │   │       ├── service/              # Business logic
│   │   │       ├── repository/           # Data access layer
│   │   │       ├── model/                # Entity classes
│   │   │       ├── dto/                  # Data Transfer Objects
│   │   │       └── exception/            # Custom exceptions
│   │   └── resources/
│   │       ├── application.yml           # Main configuration
│   │       ├── application-dev.yml       # Dev profile
│   │       └── application-prod.yml      # Production profile
│   └── test/
│       ├── java/                         # Test classes
│       └── resources/                    # Test configurations
└── target/                               # Build output (gitignored)`})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[a.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[a.jsx(Te,{className:"h-5 w-5"})," Layer Responsibilities"]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6 text-sm",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Controller Layer"}),": REST endpoints, request validation, response mapping."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Service Layer"}),": Business logic, transaction management, orchestration."]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Repository Layer"}),": Data access, JPA queries, database operations."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Model/DTO Layer"}),": Entities for persistence, DTOs for API contracts."]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"spring-boot",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Spring Boot Standards"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Core patterns and best practices for Spring Boot development."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[a.jsx(Ee,{className:"h-5 w-5 text-yellow-500"})," Dependency Injection"]}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Always use ",a.jsx("strong",{children:"Constructor Injection"})," with Lombok's @RequiredArgsConstructor for cleaner code."]}),a.jsx(T,{language:"java",code:`@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    public User createUser(CreateUserRequest request) {
        // Constructor injection ensures immutability
        // and makes dependencies explicit
        return userRepository.save(
            User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build()
        );
    }
}`})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[a.jsx(Lt,{className:"h-5 w-5 text-emerald-500"})," Configuration Properties"]}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Use ",a.jsx("code",{children:"@ConfigurationProperties"})," for type-safe configuration binding."]}),a.jsx(T,{language:"java",code:`@Configuration
@ConfigurationProperties(prefix = "app.jwt")
@Validated
public class JwtProperties {
    
    @NotBlank
    private String secret;
    
    @Positive
    private long expirationMs = 86400000; // 24 hours default
    
    // Getters and setters
}`})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ DO"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Use constructor injection"}),a.jsx("li",{children:"• Prefer @ConfigurationProperties"}),a.jsx("li",{children:"• Use profiles for environments"}),a.jsx("li",{children:"• Enable actuator endpoints"})]})]}),a.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ DON'T"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Use @Autowired on fields"}),a.jsx("li",{children:"• Hardcode configuration values"}),a.jsx("li",{children:"• Mix @Component with @Bean"}),a.jsx("li",{children:"• Ignore Spring profiles"})]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"rest-api",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"REST API Design"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Standards for building consistent and maintainable REST APIs."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"Standard Controller Pattern",language:"java",code:`@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@Tag(name = "Users", description = "User management endpoints")
public class UserController {

    private final UserService userService;

    @GetMapping
    @Operation(summary = "Get all users with pagination")
    public ResponseEntity<Page<UserResponse>> getUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        return ResponseEntity.ok(userService.findAll(PageRequest.of(page, size)));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get user by ID")
    public ResponseEntity<UserResponse> getUser(@PathVariable UUID id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    @PostMapping
    @Operation(summary = "Create a new user")
    public ResponseEntity<UserResponse> createUser(
            @Valid @RequestBody CreateUserRequest request) {
        UserResponse created = userService.create(request);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(created.getId())
                .toUri();
        return ResponseEntity.created(location).body(created);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update an existing user")
    public ResponseEntity<UserResponse> updateUser(
            @PathVariable UUID id,
            @Valid @RequestBody UpdateUserRequest request) {
        return ResponseEntity.ok(userService.update(id, request));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a user")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable UUID id) {
        userService.delete(id);
    }
}`}),a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"API Naming Conventions"}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-4 py-3 text-left",children:"HTTP Method"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Path"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Purpose"})]})}),a.jsxs("tbody",{className:"divide-y",children:[a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-mono",children:"GET"}),a.jsx("td",{className:"px-4 py-2",children:"/api/v1/resources"}),a.jsx("td",{className:"px-4 py-2",children:"List all resources"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-mono",children:"GET"}),a.jsxs("td",{className:"px-4 py-2",children:["/api/v1/resources/","{id}"]}),a.jsx("td",{className:"px-4 py-2",children:"Get single resource"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-mono",children:"POST"}),a.jsx("td",{className:"px-4 py-2",children:"/api/v1/resources"}),a.jsx("td",{className:"px-4 py-2",children:"Create resource"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-mono",children:"PUT"}),a.jsxs("td",{className:"px-4 py-2",children:["/api/v1/resources/","{id}"]}),a.jsx("td",{className:"px-4 py-2",children:"Update resource"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-mono",children:"DELETE"}),a.jsxs("td",{className:"px-4 py-2",children:["/api/v1/resources/","{id}"]}),a.jsx("td",{className:"px-4 py-2",children:"Delete resource"})]})]})]})})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"persistence",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Persistence & Database"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"JPA/Hibernate best practices and database access patterns."})]}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-xl font-bold",children:"Entity Design"}),a.jsx(T,{language:"java",code:`@Entity
@Table(name = "users")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private UserStatus status = UserStatus.ACTIVE;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}`})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-xl font-bold",children:"Repository Pattern"}),a.jsx(T,{language:"java",code:`public interface UserRepository 
        extends JpaRepository<User, UUID> {

    Optional<User> findByEmail(String email);
    
    boolean existsByEmail(String email);
    
    @Query("""
        SELECT u FROM User u 
        WHERE u.status = :status 
        AND u.createdAt > :since
        """)
    List<User> findActiveUsersSince(
        @Param("status") UserStatus status,
        @Param("since") LocalDateTime since
    );
    
    @Modifying
    @Query("UPDATE User u SET u.status = :status WHERE u.id = :id")
    void updateStatus(@Param("id") UUID id, @Param("status") UserStatus status);
}`})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[a.jsx(ut,{className:"h-5 w-5 text-blue-500"})," Database Migrations (Flyway)"]}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Use Flyway for version-controlled database migrations. Place scripts in ",a.jsx("code",{children:"src/main/resources/db/migration/"})]}),a.jsx(T,{title:"V1__Create_users_table.sql",language:"sql",code:`-- Flyway migration: V1__Create_users_table.sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"validation",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Validation & Error Handling"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[a.jsx(Qe,{className:"h-5 w-5 text-emerald-500"})," Jakarta Validation"]}),a.jsx(T,{language:"java",code:`public record CreateUserRequest(
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    String email,
    
    @NotBlank(message = "Password is required")
    @Size(min = 8, max = 100, 
          message = "Password must be 8-100 characters")
    String password,
    
    @NotNull(message = "Role is required")
    UserRole role
) {}`})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[a.jsx(ls,{className:"h-5 w-5 text-red-500"})," Global Exception Handler"]}),a.jsx(T,{language:"java",code:`@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ProblemDetail> handleNotFound(
            ResourceNotFoundException ex) {
        ProblemDetail problem = ProblemDetail
            .forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
        problem.setTitle("Resource Not Found");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(problem);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ProblemDetail> handleValidation(
            MethodArgumentNotValidException ex) {
        ProblemDetail problem = ProblemDetail
            .forStatusAndDetail(HttpStatus.BAD_REQUEST, "Validation failed");
        problem.setProperty("errors", ex.getBindingResult()
            .getFieldErrors().stream()
            .map(e -> Map.of("field", e.getField(), 
                            "message", e.getDefaultMessage()))
            .toList());
        return ResponseEntity.badRequest().body(problem);
    }
}`})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Guidelines"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Comprehensive testing with JUnit 5, Mockito, and TestContainers."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"Test Naming Convention"}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Follow the pattern: ",a.jsx("code",{className:"text-primary",children:"methodName_Scenario_ExpectedBehavior"})]}),a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx(j,{variant:"outline",className:"font-mono text-xs",children:"createUser_ValidRequest_ReturnsCreatedUser"}),a.jsx(j,{variant:"outline",className:"font-mono text-xs",children:"findById_NonExistentId_ThrowsNotFoundException"})]})]}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-xl font-bold",children:"Unit Testing with Mockito"}),a.jsx(T,{language:"java",code:`@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;
    
    @InjectMocks
    private UserService userService;

    @Test
    void findById_ExistingUser_ReturnsUser() {
        // Arrange
        UUID userId = UUID.randomUUID();
        User expected = User.builder()
            .id(userId)
            .email("test@example.com")
            .build();
        when(userRepository.findById(userId))
            .thenReturn(Optional.of(expected));

        // Act
        UserResponse result = userService.findById(userId);

        // Assert
        assertThat(result.getEmail()).isEqualTo("test@example.com");
        verify(userRepository).findById(userId);
    }
}`})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-xl font-bold",children:"Integration Testing"}),a.jsx(T,{language:"java",code:`@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@Testcontainers
class UserControllerIT {

    @Container
    static PostgreSQLContainer<?> postgres = 
        new PostgreSQLContainer<>("postgres:15-alpine");

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void createUser_ValidRequest_Returns201() {
        // Arrange
        var request = new CreateUserRequest(
            "test@example.com", "password123", UserRole.USER);

        // Act
        ResponseEntity<UserResponse> response = restTemplate
            .postForEntity("/api/v1/users", request, UserResponse.class);

        // Assert
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().getEmail()).isEqualTo("test@example.com");
    }
}`})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"logging",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Logging & Monitoring"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(Ht,{className:"h-5 w-5 text-emerald-500"})," Structured Logging"]})}),a.jsxs(Z,{className:"space-y-4",children:[a.jsx("p",{className:"text-sm text-muted-foreground",children:"Use SLF4J with Logback for consistent, structured logging."}),a.jsx(T,{language:"java",code:`@Slf4j
@Service
public class UserService {

    public User createUser(CreateUserRequest request) {
        log.info("Creating user with email: {}", request.getEmail());
        
        try {
            User user = userRepository.save(toEntity(request));
            log.info("User created successfully: id={}", user.getId());
            return user;
        } catch (Exception e) {
            log.error("Failed to create user: email={}", 
                request.getEmail(), e);
            throw e;
        }
    }
}`})]})]}),a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(we,{className:"h-5 w-5 text-blue-500"})," Actuator Endpoints"]})}),a.jsxs(Z,{className:"space-y-4",children:[a.jsx("p",{className:"text-sm text-muted-foreground",children:"Enable Spring Boot Actuator for health checks and metrics."}),a.jsx(T,{language:"yaml",code:`# application.yml
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  endpoint:
    health:
      show-details: when_authorized
  metrics:
    tags:
      application: \${spring.application.name}`})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"maven",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Maven Build Configuration"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Standard Maven pom.xml configuration for AII Java projects."})]}),a.jsx(T,{title:"pom.xml",language:"xml",code:`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
        <relativePath/>
    </parent>
    
    <groupId>com.axa.aii</groupId>
    <artifactId>my-service</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <name>My Service</name>
    
    <properties>
        <java.version>17</java.version>
        <testcontainers.version>1.19.0</testcontainers.version>
    </properties>
    
    <dependencies>
        <!-- Spring Boot Starters -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        
        <!-- Database -->
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.flywaydb</groupId>
            <artifactId>flyway-core</artifactId>
        </dependency>
        
        <!-- Lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        
        <!-- Testing -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.testcontainers</groupId>
            <artifactId>postgresql</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>`}),a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"Common Maven Commands"}),a.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:[{cmd:"mvn clean install",desc:"Build and install to local repo"},{cmd:"mvn spring-boot:run",desc:"Run application"},{cmd:"mvn test",desc:"Run unit tests"},{cmd:"mvn verify",desc:"Run all tests including integration"},{cmd:"mvn dependency:tree",desc:"Show dependency tree"},{cmd:"mvn versions:display-dependency-updates",desc:"Check for updates"}].map((c,d)=>a.jsxs("div",{className:"flex gap-3 p-3 rounded-lg bg-background border",children:[a.jsx("code",{className:"text-xs font-mono text-primary whitespace-nowrap",children:c.cmd}),a.jsx("span",{className:"text-xs text-muted-foreground",children:c.desc})]},d))})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"naming",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Style & Naming Conventions"})]}),a.jsx("div",{className:"overflow-x-auto rounded-3xl border glass",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-6 py-4 text-left",children:"Element"}),a.jsx("th",{className:"px-6 py-4 text-left",children:"Convention"}),a.jsx("th",{className:"px-6 py-4 text-left",children:"Example"})]})}),a.jsx("tbody",{className:"divide-y border-t",children:[{el:"Classes",conv:"PascalCase",ex:"UserService"},{el:"Interfaces",conv:"PascalCase",ex:"UserRepository"},{el:"Methods",conv:"camelCase",ex:"findByEmail"},{el:"Variables",conv:"camelCase",ex:"userName"},{el:"Constants",conv:"SCREAMING_SNAKE_CASE",ex:"MAX_RETRY_COUNT"},{el:"Packages",conv:"lowercase",ex:"com.axa.aii.service"},{el:"Enums",conv:"PascalCase",ex:"UserStatus"},{el:"Enum Values",conv:"SCREAMING_SNAKE_CASE",ex:"ACTIVE, INACTIVE"}].map((c,d)=>a.jsxs("tr",{className:"hover:bg-accent/5 transition-colors",children:[a.jsx("td",{className:"px-6 py-4 font-semibold",children:c.el}),a.jsx("td",{className:"px-6 py-4",children:a.jsx(j,{variant:"outline",className:"bg-primary/5",children:c.conv})}),a.jsx("td",{className:"px-6 py-4 font-mono text-xs text-primary",children:c.ex})]},d))})]})}),a.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4",children:[a.jsx(ca,{className:"h-6 w-6 text-primary shrink-0"}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("h4",{className:"font-bold text-primary",children:"Google Java Style Guide"}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"AII follows the Google Java Style Guide. Configure your IDE with the provided Checkstyle configuration file."})]})]})]}),a.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[a.jsxs("div",{className:"relative z-10 space-y-6",children:[a.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),a.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these Java standards ensures your application is robust, secure, and ready for production at AII."}),a.jsxs("div",{className:"flex gap-4",children:[a.jsx(xe,{variant:"secondary",asChild:!0,children:a.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",a.jsx(dt,{className:"ml-2 h-4 w-4"})]})}),a.jsx(xe,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:a.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),a.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),a.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:a.jsxs("div",{className:"space-y-1 pb-12",children:[a.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),_p.map(c=>a.jsxs("a",{href:`#${c.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${m===c.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[a.jsx(c.icon,{className:`h-3.5 w-3.5 shrink-0 ${m===c.id?"text-primary":"text-muted-foreground/40"}`}),c.title]},c.id))]})})]})]})},Mp=[{id:"overview",title:"1. Project Overview",icon:wt},{id:"project-structure",title:"2. Project Structure",icon:Te},{id:"fastapi",title:"3. FastAPI Standards",icon:Ee},{id:"pydantic",title:"4. Pydantic Validation",icon:Qe},{id:"database",title:"5. Database Access",icon:ut},{id:"ai-integration",title:"6. AI/ML Integration",icon:Ip},{id:"testing",title:"7. Testing Standards",icon:$e},{id:"code-style",title:"8. Code Style",icon:Tn},{id:"error-handling",title:"9. Error Handling",icon:ls},{id:"deployment",title:"10. Deployment",icon:rs}],Ry=()=>{const[m,f]=R.useState("overview"),x=[{label:"Home",href:"/"},{label:"Backend Guidelines"},{label:"Python"}];return R.useEffect(()=>{const c=new IntersectionObserver(d=>{const y=d.filter(E=>E.isIntersecting);if(y.length>0){const E=y.reduce((z,U)=>U.intersectionRatio>z.intersectionRatio||U.intersectionRatio===z.intersectionRatio&&U.boundingClientRect.top<z.boundingClientRect.top?U:z);f(E.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return Mp.forEach(d=>{const y=document.getElementById(d.id);y&&c.observe(y)}),()=>c.disconnect()},[]),a.jsxs(mt,{children:[a.jsx(Tt,{title:"Python & AI Guideline",subtitle:"Standardized practices for AI integration, data processing, and FastAPI development at AII.",breadcrumbs:x}),a.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[a.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[a.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"}),a.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["Python is our go-to language for ",a.jsx("strong",{children:"AI/ML"}),", ",a.jsx("strong",{children:"data processing"}),", and ",a.jsx("strong",{children:"rapid API development"}),". We focus on readability, strict type hints, and efficient data processing pipelines."]})]}),a.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Python 3.10+",icon:Ht},{text:"FastAPI Framework",icon:Ee},{text:"Pydantic v2",icon:Qe},{text:"SQLAlchemy 2.0",icon:ut},{text:"PyTorch / TensorFlow",icon:Ip},{text:"Poetry / pip",icon:Lt}].map((c,d)=>a.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[a.jsx(c.icon,{className:"h-5 w-5 text-primary"}),a.jsx("span",{className:"font-semibold text-sm",children:c.text})]},d))}),a.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-yellow-500/5 border border-yellow-500/10 space-y-6",children:[a.jsxs("div",{className:"flex items-center gap-3 text-yellow-600",children:[a.jsx("div",{className:"p-2 rounded-lg bg-yellow-500/10",children:a.jsx(G,{className:"h-6 w-6"})}),a.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),a.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first Python project running at AII:"}),a.jsx("div",{className:"grid gap-4",children:[{step:"Install Python",desc:"Install Python 3.10+ via pyenv or your package manager. Verify with: python --version"},{step:"Create Virtual Environment",desc:"Run 'python -m venv .venv' and activate with 'source .venv/bin/activate'"},{step:"Install Dependencies",desc:"Run 'pip install -r requirements.txt' or 'poetry install' for the project."},{step:"Setup IDE",desc:"Install VS Code with Python extension or PyCharm Professional."},{step:"Run Application",desc:"Execute 'uvicorn app.main:app --reload' to start the FastAPI server."},{step:"Run Tests",desc:"Execute 'pytest' to verify the baseline project is stable."}].map((c,d)=>a.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[a.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-600 flex items-center justify-center font-bold text-sm",children:d+1}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-foreground",children:c.step}),a.jsx("p",{className:"text-sm text-muted-foreground",children:c.desc})]})]},d))})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"project-structure",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Structure"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Standard project layout for all AII Python applications."})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[a.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"FastAPI Project Layout"}),a.jsx("pre",{className:"leading-relaxed",children:`project-root/
├── app/
│   ├── __init__.py
│   ├── main.py                 # FastAPI application entry
│   ├── config.py               # Settings and configuration
│   ├── api/
│   │   ├── __init__.py
│   │   ├── deps.py             # Dependency injection
│   │   └── v1/
│   │       ├── __init__.py
│   │       ├── router.py       # API router aggregation
│   │       └── endpoints/
│   │           ├── users.py    # User endpoints
│   │           └── items.py    # Item endpoints
│   ├── core/
│   │   ├── security.py         # Auth & JWT logic
│   │   └── exceptions.py       # Custom exceptions
│   ├── models/
│   │   ├── __init__.py
│   │   └── user.py             # SQLAlchemy models
│   ├── schemas/
│   │   ├── __init__.py
│   │   └── user.py             # Pydantic schemas
│   ├── services/
│   │   └── user_service.py     # Business logic
│   └── db/
│       ├── session.py          # Database session
│       └── base.py             # Base model class
├── tests/
│   ├── conftest.py             # Pytest fixtures
│   └── test_users.py           # Test files
├── alembic/                    # Database migrations
├── requirements.txt            # Dependencies
├── pyproject.toml              # Project configuration
└── Dockerfile`})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[a.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[a.jsx(Te,{className:"h-5 w-5"})," Layer Responsibilities"]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6 text-sm",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"API Layer"}),": Route handlers, request/response handling, dependency injection."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Services Layer"}),": Business logic, data transformation, orchestration."]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Models Layer"}),": SQLAlchemy ORM models for database entities."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Schemas Layer"}),": Pydantic models for validation and serialization."]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"fastapi",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"FastAPI Standards"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Core patterns for building high-performance APIs with FastAPI."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[a.jsx(Ee,{className:"h-5 w-5 text-yellow-500"})," Router Organization"]}),a.jsx(T,{language:"python",code:`# app/api/v1/endpoints/users.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db, get_current_user
from app.schemas.user import UserCreate, UserResponse, UserUpdate
from app.services.user_service import UserService

router = APIRouter(prefix="/users", tags=["Users"])


@router.get("/", response_model=list[UserResponse])
async def get_users(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db),
) -> list[UserResponse]:
    """Get all users with pagination."""
    service = UserService(db)
    return await service.get_all(skip=skip, limit=limit)


@router.get("/{user_id}", response_model=UserResponse)
async def get_user(
    user_id: int,
    db: AsyncSession = Depends(get_db),
) -> UserResponse:
    """Get a user by ID."""
    service = UserService(db)
    user = await service.get_by_id(user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"User with id {user_id} not found"
        )
    return user


@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def create_user(
    user_data: UserCreate,
    db: AsyncSession = Depends(get_db),
) -> UserResponse:
    """Create a new user."""
    service = UserService(db)
    return await service.create(user_data)`})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[a.jsx(Lt,{className:"h-5 w-5 text-emerald-500"})," Dependency Injection"]}),a.jsx(T,{language:"python",code:`# app/api/deps.py
from typing import AsyncGenerator
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import async_session_maker
from app.core.security import verify_token
from app.models.user import User

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """Dependency that provides a database session."""
    async with async_session_maker() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise


async def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: AsyncSession = Depends(get_db),
) -> User:
    """Dependency that returns the current authenticated user."""
    payload = verify_token(token)
    if not payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
        )
    # Fetch and return user from database
    ...`})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"pydantic",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Pydantic Validation"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Type-safe data validation and serialization with Pydantic v2."})]}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-xl font-bold",children:"Schema Design"}),a.jsx(T,{language:"python",code:`# app/schemas/user.py
from datetime import datetime
from pydantic import BaseModel, EmailStr, Field, field_validator


class UserBase(BaseModel):
    """Base schema with shared attributes."""
    email: EmailStr
    full_name: str = Field(..., min_length=2, max_length=100)


class UserCreate(UserBase):
    """Schema for creating a user."""
    password: str = Field(..., min_length=8, max_length=100)
    
    @field_validator("password")
    @classmethod
    def validate_password(cls, v: str) -> str:
        if not any(c.isupper() for c in v):
            raise ValueError("Password must contain uppercase")
        if not any(c.isdigit() for c in v):
            raise ValueError("Password must contain a digit")
        return v


class UserUpdate(BaseModel):
    """Schema for updating a user (all optional)."""
    email: EmailStr | None = None
    full_name: str | None = Field(None, min_length=2, max_length=100)


class UserResponse(UserBase):
    """Schema for user response."""
    id: int
    is_active: bool
    created_at: datetime
    
    model_config = {"from_attributes": True}`})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-xl font-bold",children:"Settings Management"}),a.jsx(T,{language:"python",code:`# app/config.py
from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings with environment variable support."""
    
    # Application
    app_name: str = "AII Python Service"
    debug: bool = False
    
    # Database
    database_url: str
    database_pool_size: int = 5
    
    # Security
    secret_key: str
    access_token_expire_minutes: int = 30
    
    # External Services
    redis_url: str | None = None
    
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )


@lru_cache
def get_settings() -> Settings:
    """Cached settings instance."""
    return Settings()`})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"database",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Database Access"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"SQLAlchemy 2.0 with async support and Alembic migrations."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"SQLAlchemy Model",language:"python",code:`# app/models/user.py
from datetime import datetime
from sqlalchemy import String, Boolean, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class User(Base):
    """User database model."""
    
    __tablename__ = "users"
    
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    hashed_password: Mapped[str] = mapped_column(String(255))
    full_name: Mapped[str] = mapped_column(String(100))
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), 
        server_default=func.now()
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )`}),a.jsx(T,{title:"Async Database Session",language:"python",code:`# app/db/session.py
from sqlalchemy.ext.asyncio import (
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from app.config import get_settings

settings = get_settings()

engine = create_async_engine(
    settings.database_url,
    pool_size=settings.database_pool_size,
    echo=settings.debug,
)

async_session_maker = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
)`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"ai-integration",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"AI/ML Integration"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Patterns for integrating machine learning models into FastAPI services."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"Model Loading Pattern",language:"python",code:`# app/ml/model_manager.py
from functools import lru_cache
from pathlib import Path
import torch
from transformers import AutoModelForSequenceClassification, AutoTokenizer


class ModelManager:
    """Singleton for managing ML model lifecycle."""
    
    _instance = None
    _model = None
    _tokenizer = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def load_model(self, model_path: str | Path) -> None:
        """Load model once at startup."""
        self._tokenizer = AutoTokenizer.from_pretrained(model_path)
        self._model = AutoModelForSequenceClassification.from_pretrained(
            model_path
        )
        self._model.eval()  # Set to evaluation mode
        
    def predict(self, text: str) -> dict:
        """Run inference on input text."""
        inputs = self._tokenizer(
            text, 
            return_tensors="pt",
            truncation=True,
            max_length=512
        )
        
        with torch.no_grad():
            outputs = self._model(**inputs)
            probabilities = torch.softmax(outputs.logits, dim=-1)
        
        return {
            "prediction": int(probabilities.argmax()),
            "confidence": float(probabilities.max()),
        }


@lru_cache
def get_model_manager() -> ModelManager:
    """Dependency for model access."""
    return ModelManager()`}),a.jsx(T,{title:"ML Inference Endpoint",language:"python",code:`# app/api/v1/endpoints/predictions.py
from fastapi import APIRouter, Depends, BackgroundTasks
from pydantic import BaseModel

from app.ml.model_manager import ModelManager, get_model_manager

router = APIRouter(prefix="/predictions", tags=["ML Predictions"])


class PredictionRequest(BaseModel):
    text: str


class PredictionResponse(BaseModel):
    prediction: int
    confidence: float


@router.post("/", response_model=PredictionResponse)
async def predict(
    request: PredictionRequest,
    model: ModelManager = Depends(get_model_manager),
) -> PredictionResponse:
    """Run inference on provided text."""
    result = model.predict(request.text)
    return PredictionResponse(**result)`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Standards"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Comprehensive testing with pytest and TestClient."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"Test Naming Convention"}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Follow the pattern: ",a.jsx("code",{className:"text-primary",children:"test_functionname_scenario_expected"})]}),a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx(j,{variant:"outline",className:"font-mono text-xs",children:"test_create_user_valid_data_returns_201"}),a.jsx(j,{variant:"outline",className:"font-mono text-xs",children:"test_get_user_not_found_returns_404"})]})]}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsx(T,{title:"Pytest Fixtures",language:"python",code:`# tests/conftest.py
import pytest
from httpx import AsyncClient
from sqlalchemy.ext.asyncio import AsyncSession

from app.main import app
from app.db.session import async_session_maker


@pytest.fixture
async def db_session() -> AsyncSession:
    """Provide a clean database session."""
    async with async_session_maker() as session:
        yield session
        await session.rollback()


@pytest.fixture
async def client() -> AsyncClient:
    """Async HTTP client for API testing."""
    async with AsyncClient(
        app=app, 
        base_url="http://test"
    ) as ac:
        yield ac`}),a.jsx(T,{title:"API Tests",language:"python",code:`# tests/test_users.py
import pytest
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_create_user_valid_data_returns_201(
    client: AsyncClient,
) -> None:
    """Test creating a user with valid data."""
    # Arrange
    user_data = {
        "email": "test@example.com",
        "full_name": "Test User",
        "password": "SecurePass123",
    }
    
    # Act
    response = await client.post(
        "/api/v1/users/", 
        json=user_data
    )
    
    # Assert
    assert response.status_code == 201
    data = response.json()
    assert data["email"] == user_data["email"]
    assert "id" in data
    assert "password" not in data  # Never expose`})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"code-style",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Style & Formatting"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ MANDATORY"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Type hints on all functions"}),a.jsx("li",{children:"• Black formatter (line length 88)"}),a.jsx("li",{children:"• Ruff for linting"}),a.jsx("li",{children:"• Docstrings on public functions"}),a.jsx("li",{children:"• PEP 8 naming conventions"})]})]}),a.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ AVOID"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Any type without justification"}),a.jsx("li",{children:"• Functions longer than 50 lines"}),a.jsx("li",{children:"• Star imports (from x import *)"}),a.jsx("li",{children:"• Magic numbers without constants"}),a.jsx("li",{children:"• Global mutable state"})]})]})]}),a.jsx("div",{className:"overflow-x-auto rounded-3xl border glass",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-6 py-4 text-left",children:"Element"}),a.jsx("th",{className:"px-6 py-4 text-left",children:"Convention"}),a.jsx("th",{className:"px-6 py-4 text-left",children:"Example"})]})}),a.jsx("tbody",{className:"divide-y border-t",children:[{el:"Modules",conv:"snake_case",ex:"user_service.py"},{el:"Classes",conv:"PascalCase",ex:"UserService"},{el:"Functions",conv:"snake_case",ex:"get_user_by_id"},{el:"Variables",conv:"snake_case",ex:"user_count"},{el:"Constants",conv:"SCREAMING_SNAKE_CASE",ex:"MAX_RETRIES"},{el:"Private",conv:"_leading_underscore",ex:"_internal_method"}].map((c,d)=>a.jsxs("tr",{className:"hover:bg-accent/5 transition-colors",children:[a.jsx("td",{className:"px-6 py-4 font-semibold",children:c.el}),a.jsx("td",{className:"px-6 py-4",children:a.jsx(j,{variant:"outline",className:"bg-primary/5",children:c.conv})}),a.jsx("td",{className:"px-6 py-4 font-mono text-xs text-primary",children:c.ex})]},d))})]})}),a.jsx(T,{title:"pyproject.toml - Tooling Configuration",language:"toml",code:`[tool.black]
line-length = 88
target-version = ["py310"]

[tool.ruff]
line-length = 88
select = ["E", "F", "I", "N", "W", "UP"]
ignore = ["E501"]  # Line length handled by black

[tool.pytest.ini_options]
asyncio_mode = "auto"
testpaths = ["tests"]
addopts = "-v --cov=app --cov-report=term-missing"

[tool.mypy]
python_version = "3.10"
strict = true
warn_return_any = true`})]}),a.jsx(D,{}),a.jsxs("section",{id:"error-handling",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Error Handling"})]}),a.jsx(T,{title:"Custom Exception Hierarchy",language:"python",code:`# app/core/exceptions.py
from fastapi import HTTPException, status


class AppException(Exception):
    """Base application exception."""
    pass


class NotFoundError(AppException):
    """Resource not found."""
    pass


class ValidationError(AppException):
    """Validation failed."""
    pass


# app/main.py - Exception handlers
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

app = FastAPI()


@app.exception_handler(NotFoundError)
async def not_found_handler(request: Request, exc: NotFoundError) -> JSONResponse:
    return JSONResponse(
        status_code=status.HTTP_404_NOT_FOUND,
        content={
            "type": "not_found",
            "title": "Resource Not Found",
            "detail": str(exc),
            "instance": str(request.url),
        },
    )


@app.exception_handler(ValidationError)
async def validation_handler(request: Request, exc: ValidationError) -> JSONResponse:
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={
            "type": "validation_error",
            "title": "Validation Failed",
            "detail": str(exc),
        },
    )`})]}),a.jsx(D,{}),a.jsxs("section",{id:"deployment",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Deployment"})]}),a.jsx(T,{title:"Dockerfile",language:"dockerfile",code:`# Multi-stage build for optimized image
FROM python:3.11-slim as builder

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /app/wheels -r requirements.txt


FROM python:3.11-slim

WORKDIR /app

# Create non-root user
RUN groupadd -r appgroup && useradd -r -g appgroup appuser

# Copy wheels and install
COPY --from=builder /app/wheels /wheels
RUN pip install --no-cache /wheels/*

# Copy application
COPY ./app ./app

# Switch to non-root user
USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=3s \\
    CMD curl -f http://localhost:8000/health || exit 1

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`}),a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"Common Commands"}),a.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:[{cmd:"uvicorn app.main:app --reload",desc:"Run dev server"},{cmd:"pytest -v --cov=app",desc:"Run tests with coverage"},{cmd:"alembic upgrade head",desc:"Apply migrations"},{cmd:"alembic revision --autogenerate",desc:"Create migration"},{cmd:"black . && ruff check .",desc:"Format and lint"},{cmd:"mypy app/",desc:"Type checking"}].map((c,d)=>a.jsxs("div",{className:"flex gap-3 p-3 rounded-lg bg-background border",children:[a.jsx("code",{className:"text-xs font-mono text-primary whitespace-nowrap",children:c.cmd}),a.jsx("span",{className:"text-xs text-muted-foreground",children:c.desc})]},d))})]})]}),a.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[a.jsxs("div",{className:"relative z-10 space-y-6",children:[a.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),a.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these Python standards ensures your AI/ML services and APIs are robust, maintainable, and production-ready."}),a.jsxs("div",{className:"flex gap-4",children:[a.jsx(xe,{variant:"secondary",asChild:!0,children:a.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",a.jsx(dt,{className:"ml-2 h-4 w-4"})]})}),a.jsx(xe,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:a.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),a.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),a.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:a.jsxs("div",{className:"space-y-1 pb-12",children:[a.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),Mp.map(c=>a.jsxs("a",{href:`#${c.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${m===c.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[a.jsx(c.icon,{className:`h-3.5 w-3.5 shrink-0 ${m===c.id?"text-primary":"text-muted-foreground/40"}`}),c.title]},c.id))]})})]})]})},Up=[{id:"overview",title:"1. Project Overview",icon:wt},{id:"project-structure",title:"2. Project Structure",icon:xg},{id:"state-management",title:"3. State Management",icon:Ee},{id:"ui-ux",title:"4. UI/UX Standards",icon:Qp},{id:"navigation",title:"5. Navigation",icon:Yp},{id:"api-integration",title:"6. API Integration",icon:ut},{id:"local-storage",title:"7. Local Storage",icon:ns},{id:"testing",title:"8. Testing",icon:$e},{id:"performance",title:"9. Performance",icon:we},{id:"naming",title:"10. Code Style",icon:Tn}],_y=()=>{const[m,f]=R.useState("overview"),x=[{label:"Home",href:"/"},{label:"Frontend & Mobile"},{label:"Flutter"}];return R.useEffect(()=>{const c=new IntersectionObserver(d=>{const y=d.filter(E=>E.isIntersecting);if(y.length>0){const E=y.reduce((z,U)=>U.intersectionRatio>z.intersectionRatio||U.intersectionRatio===z.intersectionRatio&&U.boundingClientRect.top<z.boundingClientRect.top?U:z);f(E.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return Up.forEach(d=>{const y=document.getElementById(d.id);y&&c.observe(y)}),()=>c.disconnect()},[]),a.jsxs(mt,{children:[a.jsx(Tt,{title:"Flutter Mobile Guideline",subtitle:"Standardized practices for building cross-platform mobile applications with Flutter and Dart at AII.",breadcrumbs:x}),a.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[a.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[a.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"}),a.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["Flutter allows us to maintain a ",a.jsx("strong",{children:"single codebase"})," for both iOS and Android while ensuring high-quality, native performance and premium UI/UX experiences."]})]}),a.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Flutter 3.x",icon:An},{text:"Dart 3.x",icon:Ee},{text:"Riverpod / BLoC",icon:Te},{text:"Dio HTTP Client",icon:ut},{text:"GoRouter Navigation",icon:Yp},{text:"Hive / SharedPrefs",icon:ns}].map((c,d)=>a.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[a.jsx(c.icon,{className:"h-5 w-5 text-primary"}),a.jsx("span",{className:"font-semibold text-sm",children:c.text})]},d))}),a.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6",children:[a.jsxs("div",{className:"flex items-center gap-3 text-blue-500",children:[a.jsx("div",{className:"p-2 rounded-lg bg-blue-500/10",children:a.jsx(G,{className:"h-6 w-6"})}),a.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),a.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first Flutter project running at AII:"}),a.jsx("div",{className:"grid gap-4",children:[{step:"Install Flutter SDK",desc:"Download Flutter SDK 3.x and add to PATH. Verify with: flutter doctor"},{step:"Setup IDE",desc:"Install VS Code with Flutter/Dart extensions or Android Studio with Flutter plugin."},{step:"Setup Emulators",desc:"Configure Android emulator and/or iOS Simulator (macOS required for iOS)."},{step:"Clone Repository",desc:"Clone the project repository and navigate to the project folder."},{step:"Get Dependencies",desc:"Run 'flutter pub get' to install all package dependencies."},{step:"Run Application",desc:"Execute 'flutter run' to launch the app on your connected device/emulator."}].map((c,d)=>a.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[a.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm",children:d+1}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-foreground",children:c.step}),a.jsx("p",{className:"text-sm text-muted-foreground",children:c.desc})]})]},d))})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"project-structure",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Structure"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Feature-based folder organization following Clean Architecture principles."})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[a.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"Clean Architecture Layout"}),a.jsx("pre",{className:"leading-relaxed",children:`lib/
├── main.dart                     # App entry point
├── app.dart                      # MaterialApp configuration
├── core/
│   ├── constants/                # App-wide constants
│   ├── error/                    # Failure classes, exceptions
│   ├── network/                  # Dio client, interceptors
│   ├── theme/                    # Theme data, colors, typography
│   └── utils/                    # Helpers, extensions
├── features/
│   └── auth/                     # Feature module example
│       ├── data/
│       │   ├── datasources/      # Remote & local data sources
│       │   ├── models/           # Data models (JSON serialization)
│       │   └── repositories/     # Repository implementations
│       ├── domain/
│       │   ├── entities/         # Business entities
│       │   ├── repositories/     # Repository interfaces
│       │   └── usecases/         # Business logic use cases
│       └── presentation/
│           ├── bloc/             # BLoC / Riverpod providers
│           ├── pages/            # Screen widgets
│           └── widgets/          # Feature-specific widgets
├── shared/
│   └── widgets/                  # Reusable widgets across features
└── router/
    └── app_router.dart           # GoRouter configuration`})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[a.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[a.jsx(Te,{className:"h-5 w-5"})," Clean Architecture Layers"]}),a.jsxs("div",{className:"grid md:grid-cols-3 gap-6 text-sm",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{children:a.jsx("strong",{children:"Presentation"})}),a.jsx("p",{className:"text-muted-foreground",children:"UI (Pages, Widgets), State Management (BLoC/Riverpod)"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{children:a.jsx("strong",{children:"Domain"})}),a.jsx("p",{className:"text-muted-foreground",children:"Entities, Use Cases, Repository Interfaces"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{children:a.jsx("strong",{children:"Data"})}),a.jsx("p",{className:"text-muted-foreground",children:"Models, Data Sources, Repository Implementations"})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"state-management",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"State Management"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"We primarily use Riverpod or BLoC depending on team preference and project complexity."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"When to Use Which?"}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-4 py-3 text-left",children:"Solution"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Best For"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Complexity"})]})}),a.jsxs("tbody",{className:"divide-y",children:[a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Riverpod"}),a.jsx("td",{className:"px-4 py-2",children:"Most projects, compile-time safety"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"secondary",children:"Medium"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"BLoC"}),a.jsx("td",{className:"px-4 py-2",children:"Complex apps, strict separation"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"secondary",children:"High"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Provider"}),a.jsx("td",{className:"px-4 py-2",children:"Simple apps, quick prototypes"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"outline",children:"Low"})})]})]})]})})]}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsx(T,{title:"Riverpod Provider Example",language:"dart",code:`// providers/auth_provider.dart
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'auth_provider.g.dart';

@riverpod
class Auth extends _$Auth {
  @override
  AuthState build() => const AuthState.initial();

  Future<void> login(String email, String password) async {
    state = const AuthState.loading();
    try {
      final user = await ref.read(authRepositoryProvider).login(
        email: email,
        password: password,
      );
      state = AuthState.authenticated(user);
    } catch (e) {
      state = AuthState.error(e.toString());
    }
  }

  void logout() {
    ref.read(authRepositoryProvider).logout();
    state = const AuthState.initial();
  }
}

// Usage in Widget
class LoginPage extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final authState = ref.watch(authProvider);
    
    return authState.when(
      initial: () => LoginForm(),
      loading: () => CircularProgressIndicator(),
      authenticated: (user) => HomePage(user: user),
      error: (message) => ErrorWidget(message),
    );
  }
}`}),a.jsx(T,{title:"BLoC Pattern Example",language:"dart",code:`// bloc/auth_bloc.dart
import 'package:flutter_bloc/flutter_bloc.dart';

class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final AuthRepository _authRepository;
  
  AuthBloc(this._authRepository) : super(AuthInitial()) {
    on<LoginRequested>(_onLoginRequested);
    on<LogoutRequested>(_onLogoutRequested);
  }

  Future<void> _onLoginRequested(
    LoginRequested event,
    Emitter<AuthState> emit,
  ) async {
    emit(AuthLoading());
    try {
      final user = await _authRepository.login(
        email: event.email,
        password: event.password,
      );
      emit(AuthAuthenticated(user));
    } catch (e) {
      emit(AuthError(e.toString()));
    }
  }

  void _onLogoutRequested(
    LogoutRequested event,
    Emitter<AuthState> emit,
  ) {
    _authRepository.logout();
    emit(AuthInitial());
  }
}

// Usage in Widget
BlocBuilder<AuthBloc, AuthState>(
  builder: (context, state) {
    if (state is AuthLoading) return CircularProgressIndicator();
    if (state is AuthAuthenticated) return HomePage(user: state.user);
    return LoginForm();
  },
)`})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"ui-ux",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"UI/UX Standards"})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"Theme Configuration",language:"dart",code:`// core/theme/app_theme.dart
import 'package:flutter/material.dart';

class AppTheme {
  static ThemeData get lightTheme => ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xFF0066CC),
      brightness: Brightness.light,
    ),
    textTheme: const TextTheme(
      headlineLarge: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
      bodyLarge: TextStyle(fontSize: 16),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
      ),
    ),
    inputDecorationTheme: const InputDecorationTheme(
      border: OutlineInputBorder(),
      contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
    ),
  );

  static ThemeData get darkTheme => ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xFF0066CC),
      brightness: Brightness.dark,
    ),
  );
}`}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Widget Best Practices"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Use const constructors wherever possible"}),a.jsx("li",{children:"• Extract widgets into separate files"}),a.jsx("li",{children:"• Use MediaQuery for responsive layouts"}),a.jsx("li",{children:"• Prefer SizedBox over Container for spacing"}),a.jsx("li",{children:"• Use CustomScrollView for complex scrolling"})]})]}),a.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Avoid"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Deep widget nesting (3+ levels)"}),a.jsx("li",{children:"• Hardcoded colors/dimensions"}),a.jsx("li",{children:"• setState in deeply nested widgets"}),a.jsx("li",{children:"• Heavy computation in build()"}),a.jsx("li",{children:"• Ignoring platform differences"})]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"navigation",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Navigation"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Use GoRouter for declarative routing with deep linking support."})]}),a.jsx(T,{title:"GoRouter Configuration",language:"dart",code:`// router/app_router.dart
import 'package:go_router/go_router.dart';

final appRouter = GoRouter(
  initialLocation: '/',
  debugLogDiagnostics: true,
  redirect: (context, state) {
    final isLoggedIn = authProvider.isAuthenticated;
    final isLoggingIn = state.matchedLocation == '/login';

    if (!isLoggedIn && !isLoggingIn) return '/login';
    if (isLoggedIn && isLoggingIn) return '/';
    return null;
  },
  routes: [
    GoRoute(
      path: '/',
      name: 'home',
      builder: (context, state) => const HomePage(),
      routes: [
        GoRoute(
          path: 'profile',
          name: 'profile',
          builder: (context, state) => const ProfilePage(),
        ),
        GoRoute(
          path: 'settings',
          name: 'settings',
          builder: (context, state) => const SettingsPage(),
        ),
      ],
    ),
    GoRoute(
      path: '/login',
      name: 'login',
      builder: (context, state) => const LoginPage(),
    ),
    GoRoute(
      path: '/product/:id',
      name: 'product-detail',
      builder: (context, state) {
        final productId = state.pathParameters['id']!;
        return ProductDetailPage(productId: productId);
      },
    ),
  ],
  errorBuilder: (context, state) => ErrorPage(error: state.error),
);

// Navigation usage
context.go('/profile');  // Replace current route
context.push('/product/123');  // Push new route
context.goNamed('product-detail', pathParameters: {'id': '456'});`})]}),a.jsx(D,{}),a.jsxs("section",{id:"api-integration",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"API Integration"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Dio HTTP client with interceptors for authentication and error handling."})]}),a.jsx(T,{title:"Dio Client Configuration",language:"dart",code:`// core/network/dio_client.dart
import 'package:dio/dio.dart';

class DioClient {
  late final Dio _dio;
  final TokenStorage _tokenStorage;

  DioClient(this._tokenStorage) {
    _dio = Dio(BaseOptions(
      baseUrl: 'https://api.example.com/v1',
      connectTimeout: const Duration(seconds: 30),
      receiveTimeout: const Duration(seconds: 30),
      headers: {'Content-Type': 'application/json'},
    ));

    _dio.interceptors.addAll([
      _AuthInterceptor(_tokenStorage),
      _LoggingInterceptor(),
    ]);
  }

  Future<Response<T>> get<T>(String path, {Map<String, dynamic>? queryParameters}) {
    return _dio.get<T>(path, queryParameters: queryParameters);
  }

  Future<Response<T>> post<T>(String path, {dynamic data}) {
    return _dio.post<T>(path, data: data);
  }
}

class _AuthInterceptor extends Interceptor {
  final TokenStorage _tokenStorage;
  
  _AuthInterceptor(this._tokenStorage);

  @override
  void onRequest(RequestOptions options, RequestInterceptorHandler handler) async {
    final token = await _tokenStorage.getAccessToken();
    if (token != null) {
      options.headers['Authorization'] = 'Bearer $token';
    }
    handler.next(options);
  }

  @override
  void onError(DioException err, ErrorInterceptorHandler handler) async {
    if (err.response?.statusCode == 401) {
      // Handle token refresh
      try {
        await _tokenStorage.refreshToken();
        // Retry original request
        handler.resolve(await _dio.fetch(err.requestOptions));
      } catch (e) {
        handler.next(err);
      }
    } else {
      handler.next(err);
    }
  }
}`})]}),a.jsx(D,{}),a.jsxs("section",{id:"local-storage",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Local Storage"})]}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsxs(I,{className:"glass shadow-sm",children:[a.jsxs(W,{children:[a.jsx(ee,{className:"text-lg",children:"SharedPreferences"}),a.jsx(Fe,{children:"Simple key-value storage"})]}),a.jsx(Z,{children:a.jsx(T,{language:"dart",code:`// For simple settings and flags
final prefs = await SharedPreferences.getInstance();
await prefs.setString('theme', 'dark');
await prefs.setBool('onboarding_complete', true);

final theme = prefs.getString('theme') ?? 'light';`})})]}),a.jsxs(I,{className:"glass shadow-sm",children:[a.jsxs(W,{children:[a.jsx(ee,{className:"text-lg",children:"Hive / Isar"}),a.jsx(Fe,{children:"Structured data & offline cache"})]}),a.jsx(Z,{children:a.jsx(T,{language:"dart",code:`// For complex objects and offline data
@HiveType(typeId: 0)
class User extends HiveObject {
  @HiveField(0)
  late String id;
  @HiveField(1)
  late String name;
}

final box = Hive.box<User>('users');
await box.put('current', user);`})})]})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4",children:[a.jsx(ns,{className:"h-6 w-6 text-primary shrink-0"}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("h4",{className:"font-bold text-primary",children:"Secure Storage"}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["For sensitive data like tokens and credentials, always use ",a.jsx("code",{children:"flutter_secure_storage"})," which encrypts data using platform-specific secure storage (Keychain on iOS, EncryptedSharedPreferences on Android)."]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing"})]}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsx(T,{title:"Widget Testing",language:"dart",code:`// test/widgets/login_button_test.dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('LoginButton', () {
    testWidgets('renders correctly', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(home: LoginButton()),
      );
      
      expect(find.text('Login'), findsOneWidget);
      expect(find.byType(ElevatedButton), findsOneWidget);
    });

    testWidgets('calls onPressed when tapped', (tester) async {
      var pressed = false;
      await tester.pumpWidget(
        MaterialApp(
          home: LoginButton(onPressed: () => pressed = true),
        ),
      );
      
      await tester.tap(find.byType(ElevatedButton));
      await tester.pump();
      
      expect(pressed, isTrue);
    });
  });
}`}),a.jsx(T,{title:"Unit Testing with Mocktail",language:"dart",code:`// test/services/auth_service_test.dart
import 'package:flutter_test/flutter_test.dart';
import 'package:mocktail/mocktail.dart';

class MockAuthRepository extends Mock implements AuthRepository {}

void main() {
  late AuthService authService;
  late MockAuthRepository mockRepository;

  setUp(() {
    mockRepository = MockAuthRepository();
    authService = AuthService(mockRepository);
  });

  group('login', () {
    test('returns user when credentials are valid', () async {
      // Arrange
      when(() => mockRepository.login(
        email: any(named: 'email'),
        password: any(named: 'password'),
      )).thenAnswer((_) async => User(id: '1', name: 'Test'));

      // Act
      final result = await authService.login('test@email.com', 'pass');

      // Assert
      expect(result.name, equals('Test'));
      verify(() => mockRepository.login(
        email: 'test@email.com',
        password: 'pass',
      )).called(1);
    });
  });
}`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"performance",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Performance"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Optimization Tips"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Use const constructors liberally"}),a.jsx("li",{children:"• Implement ListView.builder for long lists"}),a.jsx("li",{children:"• Cache network images (cached_network_image)"}),a.jsx("li",{children:"• Use RepaintBoundary for complex widgets"}),a.jsx("li",{children:"• Avoid rebuilds with Selector/Consumer"}),a.jsx("li",{children:"• Profile with Flutter DevTools"})]})]}),a.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Performance Killers"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Building all children at once (ListView)"}),a.jsx("li",{children:"• Unoptimized images (size, format)"}),a.jsx("li",{children:"• Blocking the main isolate"}),a.jsx("li",{children:"• Excessive setState calls"}),a.jsx("li",{children:"• Memory leaks from streams"})]})]})]}),a.jsx(T,{title:"Efficient List Building",language:"dart",code:`// ❌ WRONG: All items built at once
ListView(
  children: items.map((item) => ItemWidget(item: item)).toList(),
)

// ✅ CORRECT: Items built lazily on demand
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    final item = items[index];
    return ItemWidget(key: ValueKey(item.id), item: item);
  },
)`})]}),a.jsx(D,{}),a.jsxs("section",{id:"naming",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Style & Naming"})]}),a.jsx("div",{className:"overflow-x-auto rounded-3xl border glass",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-6 py-4 text-left",children:"Element"}),a.jsx("th",{className:"px-6 py-4 text-left",children:"Convention"}),a.jsx("th",{className:"px-6 py-4 text-left",children:"Example"})]})}),a.jsx("tbody",{className:"divide-y border-t",children:[{el:"Files",conv:"snake_case",ex:"user_service.dart"},{el:"Classes",conv:"PascalCase",ex:"UserService"},{el:"Functions",conv:"camelCase",ex:"getUserById"},{el:"Variables",conv:"camelCase",ex:"userName"},{el:"Constants",conv:"camelCase",ex:"defaultTimeout"},{el:"Private",conv:"_leadingUnderscore",ex:"_internalMethod"},{el:"Widgets",conv:"PascalCase",ex:"UserProfileCard"}].map((c,d)=>a.jsxs("tr",{className:"hover:bg-accent/5 transition-colors",children:[a.jsx("td",{className:"px-6 py-4 font-semibold",children:c.el}),a.jsx("td",{className:"px-6 py-4",children:a.jsx(j,{variant:"outline",className:"bg-primary/5",children:c.conv})}),a.jsx("td",{className:"px-6 py-4 font-mono text-xs text-primary",children:c.ex})]},d))})]})}),a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"Common Flutter Commands"}),a.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:[{cmd:"flutter run",desc:"Run app on device"},{cmd:"flutter test",desc:"Run all tests"},{cmd:"flutter analyze",desc:"Analyze code"},{cmd:"flutter pub get",desc:"Get dependencies"},{cmd:"flutter build apk",desc:"Build Android APK"},{cmd:"flutter build ios",desc:"Build iOS app"}].map((c,d)=>a.jsxs("div",{className:"flex gap-3 p-3 rounded-lg bg-background border",children:[a.jsx("code",{className:"text-xs font-mono text-primary whitespace-nowrap",children:c.cmd}),a.jsx("span",{className:"text-xs text-muted-foreground",children:c.desc})]},d))})]})]}),a.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[a.jsxs("div",{className:"relative z-10 space-y-6",children:[a.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),a.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these Flutter standards ensures your mobile applications are performant, maintainable, and deliver a premium user experience."}),a.jsxs("div",{className:"flex gap-4",children:[a.jsx(xe,{variant:"secondary",asChild:!0,children:a.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",a.jsx(dt,{className:"ml-2 h-4 w-4"})]})}),a.jsx(xe,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:a.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),a.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),a.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:a.jsxs("div",{className:"space-y-1 pb-12",children:[a.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),Up.map(c=>a.jsxs("a",{href:`#${c.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${m===c.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[a.jsx(c.icon,{className:`h-3.5 w-3.5 shrink-0 ${m===c.id?"text-primary":"text-muted-foreground/40"}`}),c.title]},c.id))]})})]})]})},My=cx,Nx=R.forwardRef(({className:m,...f},x)=>a.jsx(Rn,{ref:x,className:L("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",m),...f}));Nx.displayName=Rn.displayName;const oo=R.forwardRef(({className:m,...f},x)=>a.jsx(_n,{ref:x,className:L("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",m),...f}));oo.displayName=_n.displayName;const uo=R.forwardRef(({className:m,...f},x)=>a.jsx(Mn,{ref:x,className:L("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",m),...f}));uo.displayName=Mn.displayName;const Uy=()=>{const[m,f]=R.useState("architecture"),x=[{label:"Home",href:"/"},{label:"General",href:"/coding-standard"},{label:"Clean Architecture Standards"}],c=[{id:"architecture",title:"1. Architecture Decisions",icon:Te},{id:"patterns",title:"2. Design Patterns",icon:Ee},{id:"data-access",title:"3. Data Access",icon:ut},{id:"api-style",title:"4. API Approaches",icon:Xp},{id:"checklist",title:"5. Standards Checklist",icon:G},{id:"structure",title:"6. Project Structure",icon:ho},{id:"code-patterns",title:"7. Essential Patterns",icon:is},{id:"testing",title:"8. Testing Patterns",icon:$e},{id:"matrix",title:"9. Decision Matrix",icon:Sp}];return R.useEffect(()=>{const d=new IntersectionObserver(y=>{y.forEach(E=>{E.isIntersecting&&f(E.target.id)})},{threshold:.2,rootMargin:"-10% 0px -70% 0px"});return c.forEach(y=>{const E=document.getElementById(y.id);E&&d.observe(E)}),()=>d.disconnect()},[]),a.jsxs(mt,{children:[a.jsx(Tt,{title:"App Architecture Guide",subtitle:"Comprehensive standards and quick reference for .NET Clean Architecture and Vertical Slice patterns.",breadcrumbs:x}),a.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[a.jsxs("main",{className:"flex-1 space-y-20 min-w-0",children:[a.jsxs("section",{id:"introduction",className:"space-y-6",children:[a.jsxs("div",{className:"p-4 rounded-lg bg-primary/5 border border-primary/10 flex gap-4",children:[a.jsx(Jp,{className:"h-6 w-6 text-primary shrink-0"}),a.jsxs("p",{className:"text-sm text-primary/80 leading-relaxed italic",children:["For detailed examples and explanations, see the full ",a.jsx("a",{href:"/coding-standard",className:"underline font-bold",children:"Coding Standards Guide"}),". This is a quick reference for daily development and code reviews."]})]}),a.jsxs("p",{className:"text-lg text-muted-foreground leading-relaxed",children:["Our architecture standards ensure consistency across services. We support two primary patterns based on complexity: ",a.jsx("strong",{children:"Clean Architecture"})," for rich domains and ",a.jsx("strong",{children:"Vertical Slice"})," for feature-focused or CRUD-heavy applications."]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6",children:[a.jsxs("div",{className:"flex items-center gap-3 text-blue-500",children:[a.jsx("div",{className:"p-2 rounded-lg bg-blue-500/10",children:a.jsx(wt,{className:"h-6 w-6"})}),a.jsx("h3",{className:"text-2xl font-bold",children:"The Developer Handbook"})]}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"If you're new to AII, here's the absolute essentials you need to know about our architectural philosophy:"}),a.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[{title:"Layered Isolation",desc:"The Domain Layer is the center and must NEVER depend on Infrastructure or WebApi."},{title:"Dependency Flow",desc:"Dependencies always point inwards. Use Interfaces to decouple logic."},{title:"Feature Focus",desc:"Vertical Slice allows for faster delivery by grouping logic by feature instead of layer."}].map((d,y)=>a.jsxs("div",{className:"space-y-2",children:[a.jsxs("h4",{className:"font-bold text-sm flex items-center gap-2",children:[a.jsx(dt,{className:"h-4 w-4 text-primary"})," ",d.title]}),a.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:d.desc})]},y))})]})]}),a.jsxs("section",{id:"architecture",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"p-2 rounded-lg bg-blue-500/10 text-blue-500",children:a.jsx(Te,{className:"h-6 w-6"})}),a.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Architecture Decisions"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs(I,{className:"relative overflow-hidden group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"}),a.jsxs(W,{children:[a.jsxs(ee,{className:"flex items-center justify-between",children:["Clean Architecture",a.jsx(j,{variant:"secondary",children:"Complex Domains"})]}),a.jsx(Fe,{children:"Domain → Application → Infrastructure → WebApi"})]}),a.jsxs(Z,{className:"space-y-4 text-sm",children:[a.jsx("p",{className:"text-muted-foreground",children:"Focuses on business logic isolation and strict layer boundaries."}),a.jsxs("ul",{className:"space-y-2 list-none p-0",children:[a.jsxs("li",{className:"flex gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 shrink-0"}),a.jsx("span",{children:"Rich business logic / Long-term projects"})]}),a.jsxs("li",{className:"flex gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 shrink-0"}),a.jsx("span",{children:"Multiple applications sharing the same domain"})]})]})]})]}),a.jsxs(I,{className:"relative overflow-hidden group",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"}),a.jsxs(W,{children:[a.jsxs(ee,{className:"flex items-center justify-between",children:["Vertical Slice",a.jsx(j,{variant:"secondary",children:"CRUD Heavy"})]}),a.jsx(Fe,{children:"Features/Orders/Create/, Features/Orders/GetById/"})]}),a.jsxs(Z,{className:"space-y-4 text-sm",children:[a.jsx("p",{className:"text-muted-foreground",children:"Focuses on high cohesion by co-locating all code related to a specific feature."}),a.jsxs("ul",{className:"space-y-2 list-none p-0",children:[a.jsxs("li",{className:"flex gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 shrink-0"}),a.jsx("span",{children:"Independent features / Rapid development"})]}),a.jsxs("li",{className:"flex gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 shrink-0"}),a.jsx("span",{children:"Smaller teams or microservices context"})]})]})]})]})]})]}),a.jsxs("section",{id:"patterns",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"p-2 rounded-lg bg-yellow-500/10 text-yellow-500",children:a.jsx(Ee,{className:"h-6 w-6"})}),a.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Design Patterns"})]}),a.jsxs(My,{defaultValue:"cqrs",className:"w-full",children:[a.jsxs(Nx,{className:"grid w-full grid-cols-2 mb-6",children:[a.jsx(oo,{value:"cqrs",children:"CQRS + MediatR"}),a.jsx(oo,{value:"services",children:"Direct Services"})]}),a.jsx(uo,{value:"cqrs",className:"space-y-4",children:a.jsxs("div",{className:"bg-muted/30 p-6 rounded-lg border",children:[a.jsx("h4",{className:"font-semibold mb-2",children:"Pattern Overview"}),a.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:"Decouples commands (writes) and queries (reads). Uses MediatR for pipeline behaviors like logging and validation."}),a.jsx(T,{code:`public record CreateOrderCommand(string Product) : IRequest<OrderResult>;
public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, OrderResult>`,language:"csharp",title:"CQRS Implementation"})]})}),a.jsx(uo,{value:"services",className:"space-y-4",children:a.jsxs("div",{className:"bg-muted/30 p-6 rounded-lg border",children:[a.jsx("h4",{className:"font-semibold mb-2",children:"Pattern Overview"}),a.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:"Traditional application services. Simpler, less abstraction overhead."}),a.jsx(T,{code:`public interface IOrderService { Task<OrderResult> CreateAsync(CreateOrderRequest request); }
public class OrderService : IOrderService`,language:"csharp",title:"Service Implementation"})]})})]})]}),a.jsxs("section",{id:"data-access",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"p-2 rounded-lg bg-emerald-500/10 text-emerald-500",children:a.jsx(ut,{className:"h-6 w-6"})}),a.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Data Access"})]}),a.jsx("div",{className:"grid gap-6",children:[{title:"Option 1: Repository Pattern",desc:"Abstraction over EF Core, essential for CA/Testing.",use:"Testing abstraction needed, multiple data sources."},{title:"Option 2: Generic Repository + UoW",desc:"Consistent patterns for bulk entities.",use:"Many similar entities, transaction coordination."},{title:"Option 3: Direct DbContext",desc:"Highest performance, lowest complexity.",use:"Simple operations, Vertical Slice, performance critical."}].map((d,y)=>a.jsxs("div",{className:"flex gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors",children:[a.jsx("div",{className:"h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 text-xs font-bold",children:y+1}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold underline decoration-primary/30 underline-offset-4",children:d.title}),a.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:d.desc}),a.jsxs("p",{className:"text-xs font-medium text-primary mt-2 flex items-center gap-1",children:[a.jsx(dt,{className:"h-3 w-3"})," ",d.use]})]})]},y))})]}),a.jsxs("section",{id:"checklist",className:"scroll-mt-28 space-y-8 p-8 rounded-2xl bg-muted/30 border border-primary/5",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"p-2 rounded-lg bg-indigo-500/10 text-indigo-500",children:a.jsx(G,{className:"h-6 w-6"})}),a.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Quick Standards Checklist"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-x-12 gap-y-8 mt-4",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"font-semibold text-primary flex items-center gap-2",children:[a.jsx(Sp,{className:"h-4 w-4"})," Naming Conventions"]}),a.jsxs("ul",{className:"space-y-3 text-sm list-none p-0",children:[a.jsxs("li",{className:"flex justify-between border-b pb-1",children:[a.jsx("span",{children:"Classes"})," ",a.jsx("code",{className:"text-blue-500",children:"PascalCase"})]}),a.jsxs("li",{className:"flex justify-between border-b pb-1",children:[a.jsx("span",{children:"Interfaces"})," ",a.jsx("code",{className:"text-blue-500",children:"IPascalCase"})]}),a.jsxs("li",{className:"flex justify-between border-b pb-1",children:[a.jsx("span",{children:"Methods"})," ",a.jsx("code",{className:"text-blue-500",children:"PascalCaseAsync"})]}),a.jsxs("li",{className:"flex justify-between border-b pb-1",children:[a.jsx("span",{children:"Fields (private)"})," ",a.jsx("code",{className:"text-blue-500",children:"_camelCase"})]})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"font-semibold text-primary flex items-center gap-2",children:[a.jsx(fo,{className:"h-4 w-4"})," Async/Await Rules"]}),a.jsxs("div",{className:"p-3 rounded border bg-emerald-500/5 text-xs",children:[a.jsx("p",{className:"font-bold text-emerald-600 mb-2 whitespace-nowrap",children:"✅ DO: Async all the way through"}),a.jsx("code",{className:"text-muted-foreground",children:"return await _repository.GetByIdAsync(id, ct);"})]}),a.jsxs("div",{className:"p-3 rounded border bg-destructive/5 text-xs",children:[a.jsx("p",{className:"font-bold text-destructive mb-2 whitespace-nowrap",children:"❌ DON'T: Block async calls"}),a.jsx("code",{className:"text-muted-foreground",children:"var res = GetAsync().Result; // CRITICAL!"})]})]})]})]}),a.jsxs("section",{id:"structure",className:"scroll-mt-28 space-y-8",children:[a.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Recommended Project Structure"}),a.jsx("div",{className:"p-6 rounded-lg bg-slate-900 overflow-x-auto border border-slate-700",children:a.jsx("pre",{className:"text-xs text-blue-300 font-mono leading-relaxed group",children:`src/
├── Domain/           # Entities, ValueObjects, Domain Interfaces
├── Application/      # UseCases, DTOs, Validators
├── Infrastructure/   # DbContext, Repositories, Services
└── WebApi/           # Controllers, Middleware, Auth`})})]}),a.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"p-2 rounded-lg bg-pink-500/10 text-pink-500",children:a.jsx($e,{className:"h-6 w-6"})}),a.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Testing Patterns"})]}),a.jsx(I,{className:"border-none bg-muted/40",children:a.jsx(Z,{className:"p-6 space-y-4",children:a.jsxs("div",{className:"p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm",children:[a.jsxs("h5",{className:"font-bold text-emerald-600 mb-1 flex items-center gap-2",children:[a.jsx(G,{className:"h-4 w-4"}),"Unit Test Structure (AAA)"]}),a.jsx("p",{className:"text-muted-foreground italic mb-3",children:"Arrange, Act, Assert. Everything must be isolatable."}),a.jsx(T,{title:"Test Example",code:`[Test]
public async Task Handle_ValidRequest_ReturnsSuccess()
{
    // Arrange
    var cmd = new CreateOrderCommand("Prod");
    // Act
    var result = await _handler.Handle(cmd, CancellationToken.None);
    // Assert
    Assert.That(result.Success, Is.True);
}`})]})})})]}),a.jsxs("section",{id:"matrix",className:"scroll-mt-28 space-y-8",children:[a.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Decision Matrix"}),a.jsx("div",{className:"overflow-x-auto rounded-xl border border-border",children:a.jsxs("table",{className:"w-full text-sm text-left",children:[a.jsx("thead",{className:"bg-muted text-muted-foreground uppercase text-[10px] font-bold tracking-wider",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-6 py-3",children:"Scenario"}),a.jsx("th",{className:"px-6 py-3",children:"Architecture"}),a.jsx("th",{className:"px-6 py-3",children:"Pattern"}),a.jsx("th",{className:"px-6 py-3",children:"Data Access"})]})}),a.jsxs("tbody",{className:"divide-y",children:[a.jsxs("tr",{className:"hover:bg-accent/5",children:[a.jsx("td",{className:"px-6 py-4 font-medium",children:"Complex Logic"}),a.jsx("td",{className:"px-6 py-4",children:"Clean Arch"}),a.jsx("td",{className:"px-6 py-4",children:"CQRS"}),a.jsx("td",{className:"px-6 py-4",children:"Repository"})]}),a.jsxs("tr",{className:"hover:bg-accent/5",children:[a.jsx("td",{className:"px-6 py-4 font-medium",children:"CRUD Application"}),a.jsx("td",{className:"px-6 py-4",children:"Vertical Slice"}),a.jsx("td",{className:"px-6 py-4",children:"Services"}),a.jsx("td",{className:"px-6 py-4",children:"Direct DbContext"})]}),a.jsxs("tr",{className:"hover:bg-accent/5",children:[a.jsx("td",{className:"px-6 py-4 font-medium",children:"Microservice"}),a.jsx("td",{className:"px-6 py-4",children:"Vertical Slice"}),a.jsx("td",{className:"px-6 py-4",children:"CQRS"}),a.jsx("td",{className:"px-6 py-4",children:"Direct DbContext"})]}),a.jsxs("tr",{className:"hover:bg-accent/5",children:[a.jsx("td",{className:"px-6 py-4 font-medium",children:"Enterprise App"}),a.jsx("td",{className:"px-6 py-4",children:"Clean Arch"}),a.jsx("td",{className:"px-6 py-4",children:"CQRS"}),a.jsx("td",{className:"px-6 py-4",children:"Repository + UoW"})]})]})]})})]}),a.jsxs("section",{id:"mistakes",className:"scroll-mt-28 space-y-8 bg-destructive/5 p-8 rounded-2xl border border-destructive/10",children:[a.jsxs("h2",{className:"text-2xl font-bold flex items-center gap-2 text-destructive",children:[a.jsx(ls,{className:"h-6 w-6"})," Common Mistakes to Avoid"]}),a.jsx("div",{className:"grid gap-4",children:[{title:"Mixing Patterns",rule:"Don't use OrderService and ISender for the same logic."},{title:"Blocking Async",rule:"Avoid .Result or .Wait() at all costs."},{title:"Entities in API",rule:"Never return Domain Entities directly; always use DTOs."},{title:"Logic in Controllers",rule:"Controllers should only orchestrate, never handle business rules."}].map((d,y)=>a.jsxs("div",{className:"flex gap-4 items-start border-l-4 border-destructive pl-4 py-2",children:[a.jsx("div",{className:"mt-1",children:a.jsx(Kp,{className:"h-5 w-5 text-destructive"})}),a.jsxs("div",{children:[a.jsx("h5",{className:"font-bold text-destructive/90",children:d.title}),a.jsx("p",{className:"text-sm text-muted-foreground",children:d.rule})]})]},y))})]}),a.jsx("section",{className:"pt-12",children:a.jsx(I,{className:"bg-primary text-primary-foreground border-none overflow-hidden group",children:a.jsx(Z,{className:"p-0",children:a.jsxs("a",{href:"/coding-standard",className:"flex items-center justify-between p-8 group-hover:bg-primary/90 transition-colors",children:[a.jsxs("div",{className:"space-y-1",children:[a.jsx("p",{className:"text-primary-foreground/70 text-sm font-medium uppercase tracking-wider",children:"Next Chapter"}),a.jsx("h3",{className:"text-2xl font-bold",children:"Comprehensive Coding Standards"})]}),a.jsx("div",{className:"bg-primary-foreground/10 p-4 rounded-full group-hover:translate-x-2 transition-transform",children:a.jsx(dt,{className:"h-6 w-6"})})]})})})})]}),a.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:a.jsxs("div",{className:"space-y-1 pb-12",children:[a.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On This Page"}),c.map(d=>a.jsxs("a",{href:`#${d.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${m===d.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[a.jsx(d.icon,{className:`h-3.5 w-3.5 shrink-0 ${m===d.id?"text-primary":"text-muted-foreground/40"}`}),d.title]},d.id))]})})]})]})},Op=[{id:"core-principles",title:"1. Core Principles",icon:fo},{id:"solid",title:"2. SOLID Principles",icon:hg},{id:"clean-code",title:"3. Clean Code Practices",icon:Ee},{id:"security",title:"4. Security Standards",icon:Qe},{id:"architecture",title:"5. Architectural Patterns",icon:Te},{id:"documentation",title:"6. Documentation & Style",icon:go},{id:"testing-strategy",title:"7. Testing Strategy",icon:$e}],Oy=()=>{const[m,f]=R.useState("core-principles"),x=[{label:"Home",href:"/"},{label:"Global Standards"},{label:"Coding Standards"}];return R.useEffect(()=>{const c=new IntersectionObserver(d=>{d.forEach(y=>{y.isIntersecting&&f(y.target.id)})},{threshold:.2,rootMargin:"-10% 0px -70% 0px"});return Op.forEach(d=>{const y=document.getElementById(d.id);y&&c.observe(y)}),()=>c.disconnect()},[]),a.jsxs(mt,{children:[a.jsx(Tt,{title:"Global Coding Standards",subtitle:"Universal principles and best practices that define excellence across every technology stack at AII.",breadcrumbs:x}),a.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[a.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[a.jsxs("section",{id:"core-principles",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Core Development Principles"}),a.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"Our engineering culture is built on these foundational pillars. They guide every decision from architectural design to individual lines of code."})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs(I,{className:"glass-card",children:[a.jsxs(W,{children:[a.jsxs(ee,{className:"flex items-center gap-2 text-xl",children:[a.jsx(Ee,{className:"h-5 w-5 text-yellow-500"})," KISS Principle"]}),a.jsx(Fe,{children:"Keep It Simple, Stupid"})]}),a.jsx(Z,{children:a.jsx("p",{className:"text-sm text-muted-foreground",children:"Most systems work best if they are kept simple rather than made complicated; therefore, simplicity should be a key goal in design, and unnecessary complexity should be avoided."})})]}),a.jsxs(I,{className:"glass-card",children:[a.jsxs(W,{children:[a.jsxs(ee,{className:"flex items-center gap-2 text-xl",children:[a.jsx(we,{className:"h-5 w-5 text-emerald-500"})," DRY Principle"]}),a.jsx(Fe,{children:"Don't Repeat Yourself"})]}),a.jsx(Z,{children:a.jsx("p",{className:"text-sm text-muted-foreground",children:"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system. Avoid duplication of logic across the codebase."})})]}),a.jsxs(I,{className:"glass-card",children:[a.jsxs(W,{children:[a.jsxs(ee,{className:"flex items-center gap-2 text-xl",children:[a.jsx(Qe,{className:"h-5 w-5 text-blue-500"})," Security by Design"]}),a.jsx(Fe,{children:"Built-in, not bolted-on"})]}),a.jsx(Z,{children:a.jsx("p",{className:"text-sm text-muted-foreground",children:"Software is designed from the ground up to be secure. Security is a first-class citizen in our development lifecycle, not an afterthought."})})]}),a.jsxs(I,{className:"glass-card",children:[a.jsxs(W,{children:[a.jsxs(ee,{className:"flex items-center gap-2 text-xl",children:[a.jsx(wn,{className:"h-5 w-5 text-purple-500"})," Observability"]}),a.jsx(Fe,{children:"Know your system's health"})]}),a.jsx(Z,{children:a.jsx("p",{className:"text-sm text-muted-foreground",children:"Systems must be built to be observable. Proper logging, monitoring, and tracing are essential for maintaining enterprise-grade services."})})]})]}),a.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-purple-500/5 border border-purple-500/10 space-y-6",children:[a.jsxs("div",{className:"flex items-center gap-3 text-purple-500",children:[a.jsx("div",{className:"p-2 rounded-lg bg-purple-500/10",children:a.jsx(Qe,{className:"h-6 w-6"})}),a.jsx("h3",{className:"text-2xl font-bold",children:"Code Review Checklist"})]}),a.jsx("p",{className:"text-muted-foreground",children:"Whether you are a reviewer or a contributor, use this checklist to ensure every PR meets AII standards:"}),a.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:[{title:"KISS Check",desc:"Is the solution the simplest possible way to solve the problem?"},{title:"DRY Check",desc:"Is there any duplicated logic or hardcoded configuration?"},{title:"Security",desc:"Are inputs validated? Are secrets handled correctly?"},{title:"Observability",desc:"Are meaningful logs and telemetry included for debugging?"},{title:"Standards",desc:"Does the code follow the specific language/framework guidelines?"},{title:"Tests",desc:"Are there unit/integration tests covering the new logic?"}].map((c,d)=>a.jsxs("div",{className:"flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-background/50 group hover:border-purple-500/30 transition-colors",children:[a.jsx("div",{className:"flex-shrink-0 w-6 h-6 rounded-md bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-xs",children:a.jsx(Kl,{className:"h-4 w-4"})}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-foreground text-sm",children:c.title}),a.jsx("p",{className:"text-xs text-muted-foreground",children:c.desc})]})]},d))})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"solid",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"SOLID Principles"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"The FIVE basic principles of object-oriented programming and design for building maintainable systems."})]}),a.jsx("div",{className:"space-y-6",children:[{name:"Single Responsibility",desc:"A class should have one, and only one, reason to change."},{name:"Open/Closed",desc:"Software entities should be open for extension, but closed for modification."},{name:"Liskov Substitution",desc:"Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."},{name:"Interface Segregation",desc:"Many client-specific interfaces are better than one general-purpose interface."},{name:"Dependency Inversion",desc:"One should depend upon abstractions, not concretions."}].map((c,d)=>a.jsxs("div",{className:"flex gap-6 p-6 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors",children:[a.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-xl",children:c.name.charAt(0)}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("h4",{className:"font-bold text-lg",children:c.name}),a.jsx("p",{className:"text-muted-foreground",children:c.desc})]})]},d))})]}),a.jsx(D,{}),a.jsxs("section",{id:"clean-code",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Clean Code Practices"})]}),a.jsxs("div",{className:"space-y-10",children:[a.jsxs("div",{className:"space-y-6",children:[a.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Naming & Clarity"}),a.jsx("p",{className:"text-muted-foreground",children:"Variables, functions, and classes should have names that reveal intent. If you need a comment to explain what it does, the name is likely poor."}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Intent-Revealing"}),a.jsx("code",{className:"text-sm font-mono block p-2 bg-background rounded",children:"int daysSinceCreation;"})]}),a.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Opaque"}),a.jsx("code",{className:"text-sm font-mono block p-2 bg-background rounded",children:"int d; // elapsed time in days"})]})]})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Function Standards"}),a.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-muted-foreground",children:[a.jsxs("li",{children:[a.jsx("strong",{children:"Small:"})," Functions should rarely exceed 20 lines."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Do One Thing:"})," A function should have a single responsibility."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Monadic/Dyadic:"})," Prefer few arguments (0-2). Use objects for more."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"No Side Effects:"})," Functions shouldn't secretly modify state."]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"security",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Security Standards"})]}),a.jsxs("div",{className:"grid gap-8",children:[a.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 space-y-6",children:[a.jsxs("h4",{className:"text-xl font-bold text-white flex items-center gap-3",children:[a.jsx(ns,{className:"h-6 w-6 text-red-500"})," OWASP Top 10 Awareness"]}),a.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:["Injection Protection","Broken Access Control","Cryptographic Failures","Insecure Design","Security Misconfiguration","Vulnerable Components"].map((c,d)=>a.jsxs("div",{className:"flex items-center gap-2 text-slate-300 text-sm",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500"})," ",c]},d))})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[a.jsx(fg,{className:"h-5 w-5"})," Sensitive Data Handling"]}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:[a.jsx("strong",{children:"NEVER"})," log PII (Personally Identifiable Information) or credentials. Use masked logging and environment-based configuration for secrets."]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"architecture",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Architectural Patterns"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Common blueprints used across AII documentation for different system complexities."})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs(I,{className:"glass shadow-lg border-primary/10",children:[a.jsxs(W,{children:[a.jsx(ee,{children:"Clean Architecture"}),a.jsx(Fe,{children:"Domain-Centric"})]}),a.jsxs(Z,{className:"space-y-4",children:[a.jsx("p",{className:"text-sm",children:"Ideal for complex business domains and long-term maintainability. Separation of concerns between UI, Business Logic, and Infrastructure."}),a.jsx(xe,{asChild:!0,variant:"secondary",className:"w-full",children:a.jsxs(Le,{to:"/clean-architecture",children:["Explore Standards ",a.jsx(dt,{className:"ml-2 h-4 w-4"})]})})]})]}),a.jsxs(I,{className:"glass shadow-lg border-primary/10",children:[a.jsxs(W,{children:[a.jsx(ee,{children:"Microservices"}),a.jsx(Fe,{children:"Scale-Centric"})]}),a.jsxs(Z,{className:"space-y-4",children:[a.jsx("p",{className:"text-sm",children:"Small, independent, and loosely coupled services communicate over a network, usually via REST or Message Bus."}),a.jsx(j,{className:"bg-primary/20 text-primary hover:bg-primary/30",children:"Standard for AII Services"})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"documentation",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Documentation & Style"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Clear documentation and consistent code style improve maintainability and team collaboration."})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs(I,{className:"glass shadow-lg",children:[a.jsx(W,{children:a.jsxs(ee,{className:"flex items-center gap-2",children:[a.jsx(go,{className:"h-5 w-5 text-primary"}),"Code Comments"]})}),a.jsxs(Z,{className:"space-y-4",children:[a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Write comments that explain ",a.jsx("strong",{children:"why"}),", not ",a.jsx("strong",{children:"what"}),'. The code itself should be self-documenting for the "what".']}),a.jsxs("div",{className:"space-y-2 text-sm",children:[a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),a.jsx("span",{children:"Explain complex business logic"})]}),a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),a.jsx("span",{children:"Document non-obvious decisions"})]}),a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),a.jsx("span",{children:"Add TODO/FIXME with context"})]})]})]})]}),a.jsxs(I,{className:"glass shadow-lg",children:[a.jsx(W,{children:a.jsxs(ee,{className:"flex items-center gap-2",children:[a.jsx(xo,{className:"h-5 w-5 text-primary"}),"README Standards"]})}),a.jsxs(Z,{className:"space-y-4",children:[a.jsx("p",{className:"text-sm text-muted-foreground",children:"Every project must have a comprehensive README with:"}),a.jsxs("div",{className:"space-y-2 text-sm",children:[a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),a.jsx("span",{children:"Project overview and purpose"})]}),a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),a.jsx("span",{children:"Setup and installation steps"})]}),a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),a.jsx("span",{children:"Environment variables"})]}),a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),a.jsx("span",{children:"API documentation links"})]})]})]})]})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[a.jsx(is,{className:"h-5 w-5 text-primary"}),"Code Formatting"]}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Use automated formatters and linters to maintain consistent code style across the team. Configure your IDE to format on save."}),a.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 text-sm",children:[a.jsxs("div",{className:"p-3 rounded-lg bg-background border",children:[a.jsx("strong",{children:".NET:"})," EditorConfig + StyleCop"]}),a.jsxs("div",{className:"p-3 rounded-lg bg-background border",children:[a.jsx("strong",{children:"JavaScript/TypeScript:"})," Prettier + ESLint"]}),a.jsxs("div",{className:"p-3 rounded-lg bg-background border",children:[a.jsx("strong",{children:"Python:"})," Black + Flake8"]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"testing-strategy",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Strategy"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Comprehensive testing ensures code quality, prevents regressions, and builds confidence in deployments."})]}),a.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[a.jsxs(I,{className:"glass shadow-lg border-emerald-500/20",children:[a.jsxs(W,{children:[a.jsxs(ee,{className:"flex items-center gap-2 text-emerald-600",children:[a.jsx($e,{className:"h-5 w-5"}),"Unit Tests"]}),a.jsx(Fe,{children:"70% Coverage Target"})]}),a.jsxs(Z,{className:"space-y-3 text-sm",children:[a.jsx("p",{className:"text-muted-foreground",children:"Test individual functions and methods in isolation."}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),a.jsx("span",{children:"Fast execution"})]}),a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),a.jsx("span",{children:"No external dependencies"})]}),a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),a.jsx("span",{children:"Mock external services"})]})]})]})]}),a.jsxs(I,{className:"glass shadow-lg border-blue-500/20",children:[a.jsxs(W,{children:[a.jsxs(ee,{className:"flex items-center gap-2 text-blue-600",children:[a.jsx(Te,{className:"h-5 w-5"}),"Integration Tests"]}),a.jsx(Fe,{children:"Critical Paths"})]}),a.jsxs(Z,{className:"space-y-3 text-sm",children:[a.jsx("p",{className:"text-muted-foreground",children:"Test interactions between components and external systems."}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-blue-500 mt-0.5"}),a.jsx("span",{children:"Database operations"})]}),a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-blue-500 mt-0.5"}),a.jsx("span",{children:"API endpoints"})]}),a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-blue-500 mt-0.5"}),a.jsx("span",{children:"Message queues"})]})]})]})]}),a.jsxs(I,{className:"glass shadow-lg border-purple-500/20",children:[a.jsxs(W,{children:[a.jsxs(ee,{className:"flex items-center gap-2 text-purple-600",children:[a.jsx(Xp,{className:"h-5 w-5"}),"E2E Tests"]}),a.jsx(Fe,{children:"User Journeys"})]}),a.jsxs(Z,{className:"space-y-3 text-sm",children:[a.jsx("p",{className:"text-muted-foreground",children:"Test complete user workflows from start to finish."}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-purple-500 mt-0.5"}),a.jsx("span",{children:"Critical user flows"})]}),a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-purple-500 mt-0.5"}),a.jsx("span",{children:"Cross-service scenarios"})]}),a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-purple-500 mt-0.5"}),a.jsx("span",{children:"UI automation"})]})]})]})]})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 space-y-6",children:[a.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[a.jsx(we,{className:"h-6 w-6 text-primary"}),"Testing Best Practices"]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"space-y-3",children:[a.jsx("h5",{className:"font-bold text-primary",children:"Test Naming"}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Use descriptive names: ",a.jsx("code",{className:"text-primary",children:"MethodName_Scenario_ExpectedBehavior"})]}),a.jsx(j,{variant:"outline",className:"font-mono text-xs",children:"CreateUser_InvalidEmail_ThrowsValidationException"})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h5",{className:"font-bold text-primary",children:"AAA Pattern"}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"Structure tests with Arrange, Act, Assert sections for clarity."}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(j,{variant:"outline",children:"Arrange"}),a.jsx(j,{variant:"outline",children:"Act"}),a.jsx(j,{variant:"outline",children:"Assert"})]})]})]}),a.jsx("div",{className:"pt-4 border-t border-primary/10",children:a.jsxs("p",{className:"text-sm text-muted-foreground italic",children:[a.jsx("strong",{children:"Remember:"})," Tests are documentation. They should clearly communicate the expected behavior of your code."]})})]})]}),a.jsxs("section",{id:"language-nav",className:"p-12 rounded-[2.5rem] bg-primary/5 border border-primary/10 space-y-8",children:[a.jsx("h2",{className:"text-3xl font-bold text-center",children:"Language-Specific Guidelines"}),a.jsx("p",{className:"text-center text-muted-foreground max-w-2xl mx-auto",children:"While the above principles are universal, each language has its own idioms and conventions. Select your stack for detailed implementation guides."}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[{name:".NET",path:"/dotnet-developer-guideline",color:"blue"},{name:"React",path:"/react-developer-guideline",color:"cyan"},{name:"Java",path:"/java-developer-guideline",color:"red"},{name:"Python",path:"/python-developer-guideline",color:"yellow"}].map(c=>a.jsx(xe,{asChild:!0,variant:"outline",className:"h-16 font-bold hover:bg-primary/20 hover:text-primary hover:border-primary transition-all",children:a.jsx(Le,{to:c.path,children:c.name})},c.name))})]})]}),a.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:a.jsxs("div",{className:"space-y-1 pb-12",children:[a.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),Op.map(c=>a.jsxs("a",{href:`#${c.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${m===c.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[a.jsx(c.icon,{className:`h-3.5 w-3.5 shrink-0 ${m===c.id?"text-primary":"text-muted-foreground/40"}`}),c.title]},c.id))]})})]})]})},kp=[{id:"quick-ref",title:"1. Quick Reference",icon:Ee},{id:"workflow",title:"2. Git Workflow",icon:yo},{id:"branching",title:"3. Branching Strategy",icon:Ba},{id:"prs",title:"4. Pull Request Process",icon:ro},{id:"reviews",title:"5. Review Standards",icon:En},{id:"commits",title:"6. Commit Guidelines",icon:Pp},{id:"testing",title:"7. Testing & Quality",icon:$e},{id:"security",title:"8. Security & Docs",icon:vn},{id:"conflicts",title:"9. Conflict Resolution",icon:co},{id:"cicd",title:"10. CI/CD Requirements",icon:we},{id:"versioning",title:"11. Versioning Standards",icon:gg},{id:"changelog",title:"12. Changelog Rules",icon:Zp}],ky=()=>{const[m,f]=R.useState("quick-ref"),x=[{label:"Home",href:"/"},{label:"Global Workflow"},{label:"GitHub Guidelines"}];return R.useEffect(()=>{const c=new IntersectionObserver(d=>{d.forEach(y=>{y.isIntersecting&&f(y.target.id)})},{threshold:.2,rootMargin:"-10% 0px -70% 0px"});return kp.forEach(d=>{const y=document.getElementById(d.id);y&&c.observe(y)}),()=>c.disconnect()},[]),a.jsxs(mt,{children:[a.jsx(Tt,{title:"AII GitHub Guidelines",subtitle:"Universal branching strategies, pull request workflows, and automated quality gates for all AII projects.",breadcrumbs:x}),a.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[a.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[a.jsxs("section",{id:"quick-ref",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Quick Reference Guide"})]}),a.jsx("div",{className:"grid sm:grid-cols-2 xl:grid-cols-4 gap-4",children:[{title:"Branching Rules",desc:"Mandatory prefix patterns for all feature work.",icon:Ba,tags:["feature/*","bugfix/*"],color:"blue"},{title:"Pull Requests",desc:"Mandated for all protected branches.",icon:ro,tags:["Review Required","CI Passing"],color:"emerald"},{title:"CI/CD Pipelines",desc:"Automated testing and deployment for every change.",icon:we,tags:["Build","Test","Deploy"]},{title:"PR Quality",desc:"All PRs require 2 approvals and passing CI builds.",icon:Qe,tags:["Strict","Automated"]},{title:"Review Time",desc:"Initial reviews expected within 24 business hours.",icon:we,tags:["SLAs","Communication"]},{title:"Commit Style",desc:"Conventional Commits mandatory for all projects.",icon:Pp,tags:["feat:","fix:","chore:"]}].map((c,d)=>a.jsx(I,{className:"glass hover:border-primary/50 transition-all group",children:a.jsxs(Z,{className:"pt-6",children:[a.jsx(c.icon,{className:"h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform"}),a.jsx("h4",{className:"font-bold mb-2",children:c.title}),a.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:c.desc}),a.jsx("div",{className:"flex flex-wrap gap-2",children:c.tags.map(y=>a.jsx(j,{variant:"secondary",className:"text-[10px] font-mono px-1.5 py-0",children:y},y))})]})},d))}),a.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-6",children:[a.jsxs("div",{className:"flex items-center gap-3 text-emerald-500",children:[a.jsx("div",{className:"p-2 rounded-lg bg-emerald-500/10",children:a.jsx(ro,{className:"h-6 w-6"})}),a.jsx("h3",{className:"text-2xl font-bold",children:"Your First Pull Request"})]}),a.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"Follow this workflow to submit your first contribution at AII:"}),a.jsx("div",{className:"space-y-8",children:[{title:"Sync & Branch",cmd:`git checkout master && git pull
git checkout -b feature/JIRA-123-ui-fix`,desc:"Always start from the latest master branch and use the JIRA ID in your branch name."},{title:"Commit Work",cmd:`git add .
git commit -m "feat(ui): implement new glassmorphism theme"`,desc:"Follow Conventional Commits guidelines for your message."},{title:"Push & Open",cmd:"git push -u origin feature/JIRA-123-ui-fix",desc:"Push and then click the GitHub link to open a PR against the master branch."}].map((c,d)=>a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold",children:d+1}),a.jsx("h4",{className:"font-bold",children:c.title})]}),a.jsx("p",{className:"text-sm text-muted-foreground px-9",children:c.desc}),a.jsx("div",{className:"ml-9",children:a.jsx(T,{language:"bash",code:c.cmd})})]},d))})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"workflow",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Development Workflow"}),a.jsx("p",{className:"text-lg text-muted-foreground italic",children:"Step-by-step flow from feature inception to production deployment."})]}),a.jsxs("div",{className:"relative space-y-8",children:[a.jsx("div",{className:"absolute left-8 top-12 bottom-12 w-px bg-border hidden md:block"}),[{step:1,title:"Feature Development",desc:"Create feature branches from development, implement changes, and open PRs.",icon:Ht},{step:2,title:"Preparing a Release",desc:"Create release branches from development for final stabilization.",icon:Te},{step:3,title:"Testing in Staging",desc:"Deploy to testing environment. Fix discovered issues via additional PRs.",icon:$e},{step:4,title:"Going Live",desc:"Merge release into master and development simultaneously.",icon:Ee},{step:5,title:"Production Deployment",desc:"Master triggers automatic production deployment via CI/CD pipelines.",icon:we}].map((c,d)=>a.jsxs("div",{className:"flex gap-6 relative",children:[a.jsx("div",{className:"z-10 bg-background border-2 border-primary/20 text-primary h-16 w-16 rounded-3xl flex items-center justify-center shrink-0 shadow-sm",children:a.jsx(c.icon,{className:"h-7 w-7"})}),a.jsxs("div",{className:"space-y-1 pt-1",children:[a.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[a.jsxs("span",{className:"text-xs text-muted-foreground font-mono",children:["STEP 0",c.step]}),c.title]}),a.jsx("p",{className:"text-muted-foreground leading-relaxed max-w-2xl",children:c.desc})]})]},d))]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4",children:[a.jsx(Jp,{className:"h-6 w-6 text-primary shrink-0"}),a.jsx("p",{className:"text-sm font-medium text-primary/80 italic",children:"Key Principle: All changes flow through PRs with mandatory reviews and CI checks, ensuring quality at every step regardless of stack."})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"branching",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Branching Strategy"})]}),a.jsxs("div",{className:"space-y-10",children:[a.jsxs("div",{className:"space-y-6",children:[a.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Branch Naming Convention"}),a.jsx("p",{className:"text-muted-foreground",children:"Standardized patterns for all AII repositories."}),a.jsxs("div",{className:"bg-muted p-8 rounded-3xl border font-mono relative group overflow-hidden",children:[a.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-muted-foreground border border-muted-foreground/30 px-2 rounded-full",children:"Regex Requirement"}),a.jsx("code",{className:"text-orange-600 dark:text-orange-400 text-sm break-all leading-relaxed block py-4",children:"^ (master | development | refs/tags/.* | ((bugfix|hotfix|playground|defect|feature|release){1}/.+)) $"})]}),a.jsx("div",{className:"flex flex-wrap gap-2",children:["feature/login-page","bugfix/api-error","release/v1.2.0","hotfix/urgent-patch"].map(c=>a.jsx(j,{variant:"outline",className:"font-mono text-xs px-3 py-1 hover:bg-muted transition-colors",children:c},c))})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Protected Branches"}),a.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{name:"master",type:"CRITICAL",desc:"Production branch. Contains only tested, production-ready code.",border:"border-orange-500/50",bg:"bg-orange-500/5"},{name:"development",type:"PROTECTED",desc:"Master integration branch. Base for all feature work.",border:"border-blue-500/50",bg:"bg-blue-500/5"},{name:"release/*",type:"LOCKED",desc:"Release candidates for staging testing and stabilization.",border:"border-emerald-500/50",bg:"bg-emerald-500/5"}].map(c=>a.jsxs("div",{className:`glass p-6 rounded-2xl border ${c.border} ${c.bg} space-y-3`,children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"font-mono font-bold text-lg",children:c.name}),a.jsx(ns,{className:"h-4 w-4 opacity-50"})]}),a.jsx(j,{variant:"outline",className:"text-[10px]",children:c.type}),a.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:c.desc})]},c.name))})]}),a.jsxs("div",{className:"p-6 border border-destructive/20 bg-destructive/5 rounded-2xl space-y-3 flex gap-4",children:[a.jsx(vn,{className:"h-6 w-6 text-destructive shrink-0"}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-destructive",children:"Crucial Restriction"}),a.jsxs("p",{className:"text-sm text-muted-foreground italic",children:[a.jsx("strong",{children:"NEVER"})," commit directly to master, development, or any locked branches. All changes must be submitted via Pull Requests."]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"prs",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Pull Request Process"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-10",children:[a.jsxs("div",{className:"space-y-6",children:[a.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2 text-emerald-600",children:[a.jsx(G,{className:"h-5 w-5"})," Creation Checklist"]}),a.jsx("div",{className:"grid gap-4",children:[{label:"Clear Title & Description",desc:"Explain the WHAT and WHY clearly."},{label:"Link Related Issues",desc:"Reference Jira tickets or internal issues."},{label:"Up-to-Date Branch",desc:"Merge latest changes from target first."},{label:"Focused Scope",desc:"One feature or bug fix per PR."}].map((c,d)=>a.jsxs("div",{className:"p-4 rounded-xl bg-card border flex gap-3 shadow-sm hover:shadow-md transition-shadow",children:[a.jsx("div",{className:"h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 mt-0.5",children:a.jsx("div",{className:"h-2 w-2 rounded-full bg-emerald-500"})}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("p",{className:"font-bold text-sm tracking-tight",children:c.label}),a.jsx("p",{className:"text-xs text-muted-foreground",children:c.desc})]})]},d))})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2 text-primary",children:[a.jsx(yo,{className:"h-5 w-5"})," Merging Requirements"]}),a.jsxs(I,{className:"glass border-primary/20",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(Qe,{className:"h-5 w-5 text-primary"})," Code Owner Approval"]})}),a.jsxs(Z,{className:"space-y-4 text-sm leading-relaxed",children:[a.jsxs("p",{children:["Merging into any protected branch requires a review and approval from ",a.jsx("strong",{children:"at least 1 designated code owner"}),"."]}),a.jsx(D,{className:"bg-primary/10"}),a.jsxs("ul",{className:"space-y-3 list-none p-0 italic text-muted-foreground",children:[a.jsxs("li",{className:"flex gap-2",children:[a.jsx(dt,{className:"h-3 w-3 mt-1 text-primary shrink-0"})," PRs should be small and focused."]}),a.jsxs("li",{className:"flex gap-2",children:[a.jsx(dt,{className:"h-3 w-3 mt-1 text-primary shrink-0"})," Target for max 500 lines changed."]}),a.jsxs("li",{className:"flex gap-2",children:[a.jsx(dt,{className:"h-3 w-3 mt-1 text-primary shrink-0"})," All discussions must be resolved."]})]})]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"reviews",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Review Standards"})]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:[{title:"Quality & Standards",icon:En,desc:"Reviewers verify adherence to the relevant technology guidelines and naming conventions."},{title:"Security Focus",icon:Qe,desc:"Mandatory check for secret leakage, injection vulnerabilities, and authorization logic."},{title:"Automated Verification",icon:we,desc:"CI/CD pipelines, unit tests, and linters must show green status."},{title:"Constructive Feedback",icon:go,desc:"Focus on the code, not the person. Use suggestions feature for improvements."}].map((c,d)=>a.jsxs("div",{className:"flex gap-4 p-6 rounded-2xl border bg-card/50 hover:bg-card transition-colors group",children:[a.jsx("div",{className:"p-3 rounded-xl bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform h-fit",children:a.jsx(c.icon,{className:"h-6 w-6"})}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("h5",{className:"font-bold text-lg",children:c.title}),a.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:c.desc})]})]},d))}),a.jsxs("div",{className:"p-8 border-2 border-dashed border-destructive/30 rounded-[2rem] bg-destructive/5 text-center space-y-4",children:[a.jsx(vn,{className:"h-10 w-10 text-destructive mx-auto"}),a.jsx("h3",{className:"text-2xl font-bold text-destructive",children:"Strict Rule: No Self-Merging"}),a.jsx("p",{className:"text-muted-foreground max-w-lg mx-auto italic",children:"Do not merge your own PR unless explicitly allowed by the team lead. Collaborative review is the only way to maintain our quality bar."})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"commits",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Commit Message Standards"})]}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 space-y-6",children:[a.jsxs("h4",{className:"font-bold text-emerald-600 flex items-center gap-2",children:[a.jsx(G,{className:"h-5 w-5"})," Professional Examples"]}),a.jsxs("div",{className:"space-y-3 font-mono text-xs",children:[a.jsx("div",{className:"p-3 bg-white/50 dark:bg-emerald-950/30 rounded border border-emerald-500/10",children:'"Add user authentication validation"'}),a.jsx("div",{className:"p-3 bg-white/50 dark:bg-emerald-950/30 rounded border border-emerald-500/10",children:'"Fix login form bug #123"'}),a.jsx("div",{className:"p-3 bg-white/50 dark:bg-emerald-950/30 rounded border border-emerald-500/10",children:'"Update documentation for v2.1"'})]}),a.jsx("p",{className:"text-xs text-muted-foreground italic",children:"Use imperative mood and clear, concise subjects."})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-destructive/5 border border-destructive/20 space-y-6",children:[a.jsxs("h4",{className:"font-bold text-destructive flex items-center gap-2",children:[a.jsx(Kp,{className:"h-5 w-5"})," Messages to Avoid"]}),a.jsxs("div",{className:"space-y-3 font-mono text-xs opacity-60",children:[a.jsx("div",{className:"p-3 bg-white/50 dark:bg-destructive/10 rounded border border-destructive/10 line-through",children:'"fixed stuff"'}),a.jsx("div",{className:"p-3 bg-white/50 dark:bg-destructive/10 rounded border border-destructive/10 line-through",children:'"changes"'}),a.jsx("div",{className:"p-3 bg-white/50 dark:bg-destructive/10 rounded border border-destructive/10 line-through",children:'"update"'})]}),a.jsx("p",{className:"text-xs text-muted-foreground italic",children:"Avoid vague, single-word messages that don't explain the intent."})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing & Quality Assurance"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx($e,{className:"h-5 w-5 text-emerald-500"})," Comprehensive Coverage"]})}),a.jsxs(Z,{className:"text-sm text-muted-foreground leading-relaxed",children:["All new features and bug fixes ",a.jsx("strong",{children:"must"})," include relevant unit or integration tests. Code without tests will not be approved."]})]}),a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(co,{className:"h-5 w-5 text-emerald-500"})," Pre-Review Validation"]})}),a.jsx(Z,{className:"text-sm text-muted-foreground leading-relaxed",children:"Ensure all tests pass locally before requesting code review. Respect your reviewers' time by submitting a working codebase."})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"security",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Security & Documentation"})]}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"p-8 rounded-[2rem] bg-destructive/5 border border-destructive/10 space-y-4",children:[a.jsxs("h4",{className:"font-bold flex items-center gap-2 text-destructive",children:[a.jsx(vn,{className:"h-5 w-5"})," Security First"]}),a.jsx("div",{className:"p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-destructive/10 text-sm italic font-medium",children:'"Never commit secrets, credentials, API keys, or other sensitive data to the repository."'}),a.jsxs("p",{className:"text-xs text-muted-foreground",children:["Use environment variables, vault management, or secure configuration systems instead. Use ",a.jsx("code",{children:".gitignore"})," and ",a.jsx("code",{children:"git-secrets"})," scans locally."]})]}),a.jsxs("div",{className:"p-8 rounded-[2rem] bg-primary/5 border border-primary/10 space-y-4",children:[a.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[a.jsx(wt,{className:"h-5 w-5 text-primary"})," Documentation Sync"]}),a.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"Keep documentation synchronized with code changes. Update README.md, technical docs, and internal wikis when implementing new capabilities."}),a.jsx(D,{className:"bg-primary/10"}),a.jsx("p",{className:"text-[10px] text-muted-foreground font-mono uppercase font-bold",children:"Requirement: All public changes must have documentation updates."})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"conflicts",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Conflict Resolution"})]}),a.jsxs(I,{className:"overflow-hidden border-orange-500/20 shadow-lg",children:[a.jsxs("div",{className:"bg-orange-500 text-white px-8 py-4 flex items-center gap-4",children:[a.jsx(co,{className:"h-6 w-6"}),a.jsx("h4",{className:"font-bold",children:"Prevention is Better Than Cure"})]}),a.jsxs(Z,{className:"p-8 space-y-6",children:[a.jsxs("p",{className:"text-muted-foreground leading-relaxed text-lg",children:[a.jsx("strong",{children:"Always pull the latest changes"})," from the target branch (e.g., master, development, or release/**) before starting work or creating a PR."]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"p-4 rounded-xl bg-muted border font-mono text-xs",children:[a.jsx("p",{className:"text-muted-foreground mb-2 text-[10px] font-bold uppercase",children:"Before Starting"}),a.jsxs("code",{children:["git checkout development",a.jsx("br",{}),"git pull origin development",a.jsx("br",{}),"git checkout -b feature/new-logic"]})]}),a.jsxs("div",{className:"p-4 rounded-xl bg-muted border font-mono text-xs",children:[a.jsx("p",{className:"text-muted-foreground mb-2 text-[10px] font-bold uppercase",children:"Before PR"}),a.jsxs("code",{children:["git checkout feature/new-logic",a.jsx("br",{}),"# Merge target branch",a.jsx("br",{}),"git merge development",a.jsx("br",{}),"# Resolve local conflicts"]})]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"cicd",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"CI/CD Status Requirements"})]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{title:"Automated Tests",icon:$e,desc:"Unit & Integration checks must pass."},{title:"Code Quality",icon:mo,desc:"Linting and static analysis checks."},{title:"Build Status",icon:we,desc:"Compilation and deployment staging checks."}].map((c,d)=>a.jsxs("div",{className:"glass p-6 rounded-2xl border flex flex-col items-center text-center space-y-3",children:[a.jsx("div",{className:"p-3 rounded-full bg-blue-500/10 text-blue-500",children:a.jsx(c.icon,{className:"h-6 w-6"})}),a.jsx("h5",{className:"font-bold",children:c.title}),a.jsx("p",{className:"text-xs text-muted-foreground",children:c.desc})]},d))}),a.jsx("div",{className:"p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center",children:a.jsxs("p",{className:"text-emerald-600 font-bold flex items-center justify-center gap-2",children:[a.jsx(G,{className:"h-5 w-5"})," All automated checks must pass before merging is permitted."]})})]}),a.jsx(D,{}),a.jsxs("section",{id:"versioning",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 11"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Versioning Standards"})]}),a.jsxs("div",{className:"space-y-10",children:[a.jsxs("div",{className:"bg-primary/5 p-12 rounded-[3rem] border border-primary/10 space-y-8 relative overflow-hidden",children:[a.jsxs("div",{className:"relative z-10 text-center space-y-4",children:[a.jsx("h3",{className:"text-3xl font-extrabold tracking-tighter sm:text-4xl",children:"Semantic Versioning 2.0.0"}),a.jsx("p",{className:"text-muted-foreground font-mono text-xl",children:"X . Y . Z"})]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-8 relative z-10",children:[{major:"X",label:"MAJOR",desc:"Breaking changes or incompatible API updates.",color:"text-red-500"},{major:"Y",label:"MINOR",desc:"New functionality in a backwards compatible manner.",color:"text-emerald-500"},{major:"Z",label:"PATCH",desc:"Backwards compatible bug fixes only.",color:"text-orange-500"}].map((c,d)=>a.jsxs("div",{className:"p-6 rounded-2xl bg-white/80 dark:bg-black/30 border text-center space-y-2 backdrop-blur-sm",children:[a.jsx("span",{className:`text-4xl font-bold ${c.color}`,children:c.major}),a.jsx("h5",{className:"font-bold text-sm",children:c.label}),a.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:c.desc})]},d))})]}),a.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-4",children:[{title:"Bug Fix",from:"1.2.3",to:"1.2.4",bg:"bg-emerald-500/5"},{title:"New Feature",from:"1.2.3",to:"1.3.0",bg:"bg-emerald-500/5"},{title:"Breaking Change",from:"1.2.3",to:"2.0.0",bg:"bg-orange-500/5"},{title:"Pre-release",from:"2.0.0",to:"2.0.0-beta.1",bg:"bg-blue-500/5"}].map((c,d)=>a.jsxs("div",{className:`p-4 rounded-xl border ${c.bg} text-center space-y-1 hover:scale-105 transition-transform cursor-default`,children:[a.jsx("p",{className:"text-[10px] font-bold uppercase opacity-60 tracking-widest",children:c.title}),a.jsxs("p",{className:"font-mono text-sm",children:[c.from," → ",c.to]})]},d))})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"changelog",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 12"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Changelog & Release Notes"})]}),a.jsxs("div",{className:"p-10 rounded-[2.5rem] bg-slate-900 text-slate-100 border-none relative overflow-hidden group",children:[a.jsx("div",{className:"absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity",children:a.jsx(Zp,{className:"h-40 w-40"})}),a.jsxs("div",{className:"relative z-10 space-y-8",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-3xl font-bold",children:"Documenting Significance"}),a.jsx("p",{className:"text-slate-400",children:"Update the changelog or release notes in your PR if your changes are significant."})]}),a.jsxs("div",{className:"grid sm:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-3 text-emerald-400 font-bold",children:[a.jsx(G,{className:"h-5 w-5"})," External Significance"]}),a.jsxs("ul",{className:"text-sm text-slate-400 space-y-2 list-none p-0 italic",children:[a.jsx("li",{children:"• New features or UI modifications"}),a.jsx("li",{children:"• API changes or breaking updates"})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-3 text-emerald-400 font-bold",children:[a.jsx(G,{className:"h-5 w-5"})," Internal Significance"]}),a.jsxs("ul",{className:"text-sm text-slate-400 space-y-2 list-none p-0 italic",children:[a.jsx("li",{children:"• Architecture shifts"}),a.jsx("li",{children:"• Performance & Security enhancements"})]})]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"conclusion",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"text-center space-y-6",children:[a.jsx(io,{className:"h-16 w-16 mx-auto text-primary animate-pulse"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Questions or Support?"}),a.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto italic",children:"Following these guidelines ensures high-quality, maintainable code and smooth collaboration across the AII development team regardless of technology stack."})]}),a.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[a.jsx(I,{className:"hover:border-primary transition-all group p-1 shrink-0",children:a.jsxs("a",{href:"mailto:yosy.aliffakry@axa.co.id",className:"flex items-center justify-between p-6",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:"p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform",children:a.jsx(yg,{className:"h-6 w-6"})}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold",children:"Contact Maintainer"}),a.jsx("p",{className:"text-xs text-muted-foreground",children:"yosy.aliffakry@axa.co.id"})]})]}),a.jsx(no,{className:"h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"})]})}),a.jsx(I,{className:"hover:border-primary transition-all group p-1 shrink-0",children:a.jsxs("a",{href:"https://github.axa.com/aii",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-6",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:"p-3 rounded-full bg-black/10 dark:bg-white/10 text-foreground group-hover:scale-110 transition-transform",children:a.jsx(io,{className:"h-6 w-6"})}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold",children:"AII Organization"}),a.jsx("p",{className:"text-xs text-muted-foreground",children:"github.axa.com/aii"})]})]}),a.jsx(no,{className:"h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"})]})})]})]})]}),a.jsx("aside",{className:"lg:w-72 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden lg:block overflow-y-auto pl-4 border-l",children:a.jsxs("div",{className:"space-y-1 pb-12",children:[a.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),kp.map(c=>a.jsxs("a",{href:`#${c.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${m===c.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[a.jsx(c.icon,{className:`h-3.5 w-3.5 shrink-0 ${m===c.id?"text-primary":"text-muted-foreground/40"}`}),c.title]},c.id))]})})]})]})},zp=[{id:"overview",title:"1. Platform Overview",icon:wt},{id:"getting-started",title:"2. Getting Started",icon:Ht},{id:"builds",title:"3. Build Configuration",icon:vo},{id:"deployments",title:"4. Deployments",icon:Fp},{id:"configuration",title:"5. Configuration Management",icon:Lt},{id:"networking",title:"6. Networking & Routes",icon:yo},{id:"monitoring",title:"7. Monitoring & Logging",icon:we},{id:"best-practices",title:"8. Best Practices",icon:ra},{id:"case-studies",title:"9. Real-world Case Studies",icon:wt}],zy=()=>{const[m,f]=R.useState("overview"),x=[{label:"Home",href:"/"},{label:"DevOps & CI/CD"},{label:"OpenShift"}];return R.useEffect(()=>{const c=new IntersectionObserver(d=>{const y=d.filter(E=>E.isIntersecting);if(y.length>0){const E=y.reduce((z,U)=>U.intersectionRatio>z.intersectionRatio||U.intersectionRatio===z.intersectionRatio&&U.boundingClientRect.top<z.boundingClientRect.top?U:z);f(E.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return zp.forEach(d=>{const y=document.getElementById(d.id);y&&c.observe(y)}),()=>c.disconnect()},[]),a.jsxs(mt,{children:[a.jsx(Tt,{title:"OpenShift 4.x Platform Guide",subtitle:"Comprehensive guide to deploying and managing applications on AXA's OpenShift Container Platform.",breadcrumbs:x,readingTime:40}),a.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[a.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[a.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Platform Overview"}),a.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"OpenShift Container Platform is AXA's enterprise Kubernetes platform for building, deploying, and managing containerized applications at scale."})]}),a.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"OpenShift 4.x",icon:vg},{text:"Kubernetes Native",icon:bg},{text:"Enterprise Security",icon:ra},{text:"Built-in CI/CD",icon:Ba},{text:"Auto-scaling",icon:we},{text:"Self-service Portal",icon:Te}].map((c,d)=>a.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[a.jsx(c.icon,{className:"h-5 w-5 text-primary"}),a.jsx("span",{className:"font-semibold text-sm",children:c.text})]},d))}),a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"Key OpenShift Concepts"}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-4 py-3 text-left",children:"Concept"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Description"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Kubernetes Equivalent"})]})}),a.jsxs("tbody",{className:"divide-y",children:[a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Project"}),a.jsx("td",{className:"px-4 py-2",children:"Isolated environment for resources"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"outline",children:"Namespace"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"BuildConfig"}),a.jsx("td",{className:"px-4 py-2",children:"Defines how to build container images"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"secondary",children:"OpenShift Only"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"DeploymentConfig"}),a.jsx("td",{className:"px-4 py-2",children:"Manages application deployments"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"outline",children:"Deployment"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Route"}),a.jsx("td",{className:"px-4 py-2",children:"Exposes services externally"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"outline",children:"Ingress"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"ImageStream"}),a.jsx("td",{className:"px-4 py-2",children:"Tracks container image versions"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"secondary",children:"OpenShift Only"})})]})]})]})})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400",children:[a.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"AXA OpenShift Architecture"}),a.jsx("pre",{className:"leading-relaxed",children:`┌─────────────────────────────────────────────────────────────────┐
│                      AXA OpenShift 4.x Cluster                  │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐          │
│  │   Jenkins   │───▶│ BuildConfig │───▶│ ImageStream │          │
│  │  (Trigger)  │    │  (S2I/Docker)    │ (Registry)  │          │
│  └─────────────┘    └─────────────┘    └──────┬──────┘          │
│                                               │                 │
│                                               ▼                 │
│  ┌─────────────────────────────────────────────────────┐        │
│  │              DeploymentConfig / Deployment           │        │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐              │        │
│  │  │  Pod 1  │  │  Pod 2  │  │  Pod N  │  (Replicas)  │        │
│  │  └─────────┘  └─────────┘  └─────────┘              │        │
│  └────────────────────────┬────────────────────────────┘        │
│                           │                                     │
│                           ▼                                     │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐          │
│  │   Service   │───▶│    Route    │───▶│  External   │          │
│  │ (ClusterIP) │    │ (Ingress)   │    │   Traffic   │          │
│  └─────────────┘    └─────────────┘    └─────────────┘          │
└─────────────────────────────────────────────────────────────────┘`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"getting-started",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Getting Started"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Set up your development environment and access AXA's OpenShift cluster."})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6",children:[a.jsxs("div",{className:"flex items-center gap-3 text-cyan-600",children:[a.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10",children:a.jsx(G,{className:"h-6 w-6"})}),a.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),a.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get started with OpenShift at AXA:"}),a.jsx("div",{className:"grid gap-4",children:[{step:"Request Access",desc:"Submit access request through AXA service portal for your project namespace."},{step:"Install oc CLI",desc:"Download OpenShift CLI (oc) from the cluster's command-line tools page."},{step:"Login to Cluster",desc:"Copy login command from OpenShift web console (top-right menu → Copy Login Command)."},{step:"Select Project",desc:"Switch to your project namespace: oc project your-project-name"},{step:"Verify Access",desc:"Run 'oc whoami' and 'oc get pods' to verify your access permissions."}].map((c,d)=>a.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[a.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-sm",children:d+1}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-foreground",children:c.step}),a.jsx("p",{className:"text-sm text-muted-foreground",children:c.desc})]})]},d))})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"CLI Authentication",language:"bash",code:`# Login using token from web console
oc login --token=sha256~YOUR_TOKEN --server=https://api.openshift.axa.com:6443

# Verify login
oc whoami
oc whoami --show-server

# List available projects
oc projects

# Switch to your project
oc project my-application-dev

# Get cluster info
oc cluster-info`}),a.jsx(T,{title:"Essential oc Commands",language:"bash",code:`# View resources in current project
oc get all                    # List all resources
oc get pods                   # List pods
oc get deployments            # List deployments
oc get services               # List services
oc get routes                 # List routes
oc get buildconfigs           # List build configurations
oc get imagestreams           # List image streams

# Describe resources (detailed info)
oc describe pod <pod-name>
oc describe deployment <deployment-name>

# View logs
oc logs <pod-name>                  # Current logs
oc logs <pod-name> -f               # Follow logs (streaming)
oc logs <pod-name> --previous       # Previous container logs

# Execute commands in pod
oc exec -it <pod-name> -- /bin/bash
oc exec <pod-name> -- env           # View environment variables

# Port forwarding for local testing
oc port-forward <pod-name> 8080:8080`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"builds",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Build Configuration"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Configure OpenShift Builds triggered from Jenkins pipelines."})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2 text-amber-600",children:[a.jsx(Nn,{className:"h-5 w-5"}),a.jsx("h4",{className:"font-bold",children:"AXA Build Workflow"})]}),a.jsx("p",{className:"text-sm text-muted-foreground",children:"At AXA, we trigger OpenShift Builds from Jenkins pipelines. The BuildConfig defines how your application is containerized, and the resulting image is pushed to the internal ImageStream for deployment consumption."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"BuildConfig Definition (buildconfig.yaml)",language:"yaml",code:`apiVersion: build.openshift.io/v1
kind: BuildConfig
metadata:
  name: my-application
  labels:
    app: my-application
    version: v1
spec:
  # Build output configuration
  output:
    to:
      kind: ImageStreamTag
      name: my-application:latest
  
  # Source configuration
  source:
    type: Git
    git:
      uri: https://github.axa.com/your-org/my-application.git
      ref: main
    # Optional: use specific directory
    contextDir: /
  
  # Build strategy - Docker or Source-to-Image (S2I)
  strategy:
    type: Docker
    dockerStrategy:
      # Use multi-stage Dockerfile
      dockerfilePath: Dockerfile
      # Build arguments
      buildArgs:
        - name: APP_VERSION
          value: "1.0.0"
      # Force pull base image
      forcePull: true
  
  # Resource limits for builds
  resources:
    limits:
      memory: "2Gi"
      cpu: "1000m"
    requests:
      memory: "1Gi"
      cpu: "500m"
  
  # Triggers - disabled for Jenkins-triggered builds
  triggers: []`}),a.jsx(T,{title:"ImageStream Definition (imagestream.yaml)",language:"yaml",code:`apiVersion: image.openshift.io/v1
kind: ImageStream
metadata:
  name: my-application
  labels:
    app: my-application
spec:
  lookupPolicy:
    # Allow Kubernetes resources to use short names
    local: true
  tags:
    - name: latest
      annotations:
        description: Latest development build
        tags: dev
    - name: staging
      annotations:
        description: Staging release candidate
        tags: staging
    - name: production
      annotations:
        description: Production release
        tags: production`}),a.jsx(T,{title:"Triggering Build from Jenkins",language:"groovy",code:`// Jenkinsfile - Build Stage
stage('Build Image') {
    steps {
        script {
            openshift.withCluster() {
                openshift.withProject('my-application-dev') {
                    // Start a new build
                    def build = openshift.startBuild('my-application', 
                        '--follow',
                        '--wait'
                    )
                    
                    // Alternative: start build with source from workspace
                    // def build = openshift.startBuild('my-application',
                    //     '--from-dir=.',
                    //     '--follow',
                    //     '--wait'
                    // )
                    
                    echo "Build completed: \${build.object().status.phase}"
                }
            }
        }
    }
}

// With build arguments
stage('Build with Args') {
    steps {
        script {
            openshift.withCluster() {
                openshift.withProject('my-application-dev') {
                    def build = openshift.startBuild('my-application',
                        "--build-arg=APP_VERSION=\${env.BUILD_NUMBER}",
                        "--build-arg=GIT_COMMIT=\${env.GIT_COMMIT}",
                        '--follow',
                        '--wait'
                    )
                }
            }
        }
    }
}`}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Build Best Practices"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Use multi-stage Dockerfiles for smaller images"}),a.jsx("li",{children:"• Set resource limits on BuildConfigs"}),a.jsx("li",{children:"• Tag images with version/commit info"}),a.jsx("li",{children:"• Use .dockerignore to exclude files"}),a.jsx("li",{children:"• Cache dependencies in separate layers"})]})]}),a.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Common Mistakes"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Running as root in containers"}),a.jsx("li",{children:"• Including secrets in images"}),a.jsx("li",{children:"• Not setting CPU/memory limits"}),a.jsx("li",{children:"• Using :latest tag in production"}),a.jsx("li",{children:"• Large base images (use alpine/distroless)"})]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"deployments",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Deployments"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Configure Deployments that consume images from OpenShift Builds."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"Deployment Configuration (deployment.yaml)",language:"yaml",code:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-application
  labels:
    app: my-application
    version: v1
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-application
  
  # Deployment strategy
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  
  template:
    metadata:
      labels:
        app: my-application
        version: v1
      annotations:
        # Force redeployment when ConfigMap changes
        checksum/config: "{{ include (print $.Template.BasePath '/configmap.yaml') . | sha256sum }}"
    spec:
      containers:
        - name: my-application
          # Reference ImageStream tag
          image: image-registry.openshift-image-registry.svc:5000/my-project/my-application:latest
          imagePullPolicy: Always
          
          ports:
            - containerPort: 8080
              protocol: TCP
          
          # Environment variables
          env:
            - name: SPRING_PROFILES_ACTIVE
              value: "production"
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: my-application-secrets
                  key: database-url
          
          # Mount ConfigMaps and Secrets
          envFrom:
            - configMapRef:
                name: my-application-config
          
          # Resource limits (REQUIRED)
          resources:
            limits:
              memory: "512Mi"
              cpu: "500m"
            requests:
              memory: "256Mi"
              cpu: "100m"
          
          # Health checks
          livenessProbe:
            httpGet:
              path: /actuator/health/liveness
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
            timeoutSeconds: 5
            failureThreshold: 3
          
          readinessProbe:
            httpGet:
              path: /actuator/health/readiness
              port: 8080
            initialDelaySeconds: 10
            periodSeconds: 5
            timeoutSeconds: 3
            failureThreshold: 3
          
          # Security context
          securityContext:
            runAsNonRoot: true
            allowPrivilegeEscalation: false
            capabilities:
              drop:
                - ALL
      
      # Pod security
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault`}),a.jsx(T,{title:"Trigger Deployment from Jenkins",language:"groovy",code:`// Jenkinsfile - Deploy Stage
stage('Deploy to Dev') {
    steps {
        script {
            openshift.withCluster() {
                openshift.withProject('my-application-dev') {
                    // Tag the new image for deployment
                    openshift.tag(
                        'my-application:latest',
                        'my-application:dev'
                    )
                    
                    // Apply deployment manifests
                    openshift.apply('-f', 'k8s/deployment.yaml')
                    openshift.apply('-f', 'k8s/service.yaml')
                    openshift.apply('-f', 'k8s/route.yaml')
                    
                    // Wait for deployment to complete
                    def deployment = openshift.selector('deployment', 'my-application')
                    deployment.rollout().status('--timeout=5m')
                    
                    echo "Deployment completed successfully!"
                }
            }
        }
    }
}

// Promote to Staging
stage('Promote to Staging') {
    when {
        branch 'main'
    }
    steps {
        script {
            openshift.withCluster() {
                // Tag image for staging
                openshift.withProject('my-application-dev') {
                    openshift.tag(
                        'my-application:dev',
                        'my-application-staging/my-application:staging'
                    )
                }
                
                // Deploy to staging
                openshift.withProject('my-application-staging') {
                    def deployment = openshift.selector('deployment', 'my-application')
                    deployment.rollout().latest()
                    deployment.rollout().status('--timeout=5m')
                }
            }
        }
    }
}`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"configuration",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Configuration Management"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Manage application configuration using ConfigMaps and Secrets."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsx(T,{title:"ConfigMap (configmap.yaml)",language:"yaml",code:`apiVersion: v1
kind: ConfigMap
metadata:
  name: my-application-config
  labels:
    app: my-application
data:
  # Simple key-value pairs
  LOG_LEVEL: "INFO"
  SERVER_PORT: "8080"
  FEATURE_FLAG_NEW_UI: "true"
  
  # Multi-line configuration files
  application.properties: |
    spring.application.name=my-application
    server.port=8080
    management.endpoints.web.exposure.include=health,info,metrics
    management.endpoint.health.probes.enabled=true
  
  # JSON configuration
  app-config.json: |
    {
      "apiEndpoint": "https://api.axa.com",
      "timeout": 30000,
      "retries": 3
    }`}),a.jsx(T,{title:"Secret (secret.yaml)",language:"yaml",code:`apiVersion: v1
kind: Secret
metadata:
  name: my-application-secrets
  labels:
    app: my-application
type: Opaque
# Use stringData for plain text (auto encoded)
stringData:
  database-url: "postgresql://user:pass@db:5432/mydb"
  api-key: "your-api-key-here"

# Or use data with base64 encoded values
# data:
#   database-url: cG9zdGdyZXNxbDovL3VzZXI6cGFzc0BkYjo1NDMyL215ZGI=

---
# TLS Secret for routes
apiVersion: v1
kind: Secret
metadata:
  name: my-application-tls
type: kubernetes.io/tls
data:
  tls.crt: <base64-encoded-cert>
  tls.key: <base64-encoded-key>`})]}),a.jsx(T,{title:"Using ConfigMaps and Secrets in Deployment",language:"yaml",code:`# In deployment.yaml spec.template.spec.containers
containers:
  - name: my-application
    # Load individual values as env vars
    env:
      - name: DATABASE_URL
        valueFrom:
          secretKeyRef:
            name: my-application-secrets
            key: database-url
      - name: LOG_LEVEL
        valueFrom:
          configMapKeyRef:
            name: my-application-config
            key: LOG_LEVEL
    
    # Load all keys as env vars
    envFrom:
      - configMapRef:
          name: my-application-config
      - secretRef:
          name: my-application-secrets
    
    # Mount as files
    volumeMounts:
      - name: config-volume
        mountPath: /app/config
        readOnly: true
      - name: secret-volume
        mountPath: /app/secrets
        readOnly: true

volumes:
  - name: config-volume
    configMap:
      name: my-application-config
      items:
        - key: application.properties
          path: application.properties
  - name: secret-volume
    secret:
      secretName: my-application-secrets
      defaultMode: 0400  # Read-only for owner`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"networking",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Networking & Routes"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Expose your applications using Services and Routes."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"Service Definition (service.yaml)",language:"yaml",code:`apiVersion: v1
kind: Service
metadata:
  name: my-application
  labels:
    app: my-application
spec:
  type: ClusterIP
  ports:
    - name: http
      port: 8080
      targetPort: 8080
      protocol: TCP
    - name: metrics
      port: 9090
      targetPort: 9090
      protocol: TCP
  selector:
    app: my-application`}),a.jsx(T,{title:"Route Definition (route.yaml)",language:"yaml",code:`apiVersion: route.openshift.io/v1
kind: Route
metadata:
  name: my-application
  labels:
    app: my-application
  annotations:
    # Rate limiting
    haproxy.router.openshift.io/rate-limit-connections: "true"
    haproxy.router.openshift.io/rate-limit-connections.rate-http: "100"
    # Timeouts
    haproxy.router.openshift.io/timeout: "60s"
    # IP Whitelisting (optional)
    # haproxy.router.openshift.io/ip_whitelist: "10.0.0.0/8 192.168.0.0/16"
spec:
  host: my-application.apps.openshift.axa.com
  port:
    targetPort: http
  to:
    kind: Service
    name: my-application
    weight: 100
  
  # TLS Configuration
  tls:
    termination: edge
    insecureEdgeTerminationPolicy: Redirect
    # For passthrough:
    # termination: passthrough
    
    # For re-encrypt (to backend with TLS):
    # termination: reencrypt
    # destinationCACertificate: |
    #   -----BEGIN CERTIFICATE-----
    #   ...
    #   -----END CERTIFICATE-----
  
  # Traffic weighting for canary deployments
  # alternateBackends:
  #   - kind: Service
  #     name: my-application-canary
  #     weight: 10`}),a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"TLS Termination Options"}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-4 py-3 text-left",children:"Type"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Description"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Use Case"})]})}),a.jsxs("tbody",{className:"divide-y",children:[a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Edge"}),a.jsx("td",{className:"px-4 py-2",children:"TLS terminates at router"}),a.jsx("td",{className:"px-4 py-2",children:"Most common, backend uses HTTP"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Passthrough"}),a.jsx("td",{className:"px-4 py-2",children:"TLS passes through to pod"}),a.jsx("td",{className:"px-4 py-2",children:"End-to-end encryption, app handles TLS"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Re-encrypt"}),a.jsx("td",{className:"px-4 py-2",children:"Router re-encrypts to pod"}),a.jsx("td",{className:"px-4 py-2",children:"Full encryption with certificate validation"})]})]})]})})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"monitoring",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Monitoring & Logging"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Observe your applications using OpenShift's built-in monitoring stack."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(we,{className:"h-5 w-5 text-emerald-500"})," Metrics & Prometheus"]})}),a.jsxs(Z,{className:"space-y-4",children:[a.jsx("p",{className:"text-sm text-muted-foreground",children:"OpenShift provides built-in Prometheus for metrics collection."}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Expose /metrics endpoint in your app"}),a.jsx("li",{children:"• Use ServiceMonitor for automatic discovery"}),a.jsx("li",{children:"• View in OpenShift Console → Monitoring"}),a.jsx("li",{children:"• Create custom Grafana dashboards"})]})]})]}),a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(En,{className:"h-5 w-5 text-blue-500"})," Logging"]})}),a.jsxs(Z,{className:"space-y-4",children:[a.jsx("p",{className:"text-sm text-muted-foreground",children:"Centralized logging with EFK (Elasticsearch, Fluentd, Kibana)."}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Log to stdout/stderr (12-factor app)"}),a.jsx("li",{children:"• Use structured JSON logging"}),a.jsx("li",{children:"• Access logs in Kibana dashboard"}),a.jsx("li",{children:"• Set appropriate log levels per env"})]})]})]})]}),a.jsx(T,{title:"ServiceMonitor for Prometheus (servicemonitor.yaml)",language:"yaml",code:`apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: my-application
  labels:
    app: my-application
spec:
  endpoints:
    - interval: 30s
      path: /actuator/prometheus
      port: http
      scheme: http
  namespaceSelector:
    matchNames:
      - my-application-dev
  selector:
    matchLabels:
      app: my-application`}),a.jsx(T,{title:"View Logs with oc CLI",language:"bash",code:`# View pod logs
oc logs <pod-name>

# Follow logs in real-time
oc logs -f <pod-name>

# Logs from previous container (after crash)
oc logs <pod-name> --previous

# Logs from specific container in multi-container pod
oc logs <pod-name> -c <container-name>

# Logs from all pods with label
oc logs -l app=my-application --all-containers

# Logs with timestamps
oc logs <pod-name> --timestamps

# Last N lines
oc logs <pod-name> --tail=100`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"best-practices",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Best Practices"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Follow these guidelines for production-ready OpenShift deployments."})]}),a.jsx("div",{className:"grid gap-6",children:[{title:"Resource Management",icon:rs,color:"text-blue-500",items:["Always set CPU and Memory requests/limits","Use Horizontal Pod Autoscaler (HPA) for auto-scaling","Set Pod Disruption Budgets (PDB) for high availability","Use resource quotas at namespace level"]},{title:"Security",icon:ra,color:"text-emerald-500",items:["Never run containers as root","Use SecurityContext with runAsNonRoot: true","Store secrets in OpenShift Secrets, not in images","Enable network policies to restrict pod communication","Scan images for vulnerabilities before deployment"]},{title:"Health & Resilience",icon:we,color:"text-amber-500",items:["Implement liveness and readiness probes","Use rolling update strategy with maxUnavailable: 0","Configure appropriate initialDelaySeconds for probes","Handle SIGTERM gracefully for zero-downtime deploys"]},{title:"Configuration",icon:Lt,color:"text-purple-500",items:["Externalize all configuration using ConfigMaps","Use different ConfigMaps per environment (dev/staging/prod)","Never hardcode environment-specific values in code","Use Kustomize or Helm for managing environments"]}].map((c,d)=>a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(c.icon,{className:`h-5 w-5 ${c.color}`}),c.title]})}),a.jsx(Z,{children:a.jsx("ul",{className:"grid md:grid-cols-2 gap-2",children:c.items.map((y,E)=>a.jsxs("li",{className:"flex items-start gap-2 text-sm text-muted-foreground",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0"}),y]},E))})})]},d))}),a.jsx(T,{title:"Production-Ready Deployment Template",language:"yaml",code:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-application
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    spec:
      # Anti-affinity for spreading across nodes
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              podAffinityTerm:
                labelSelector:
                  matchLabels:
                    app: my-application
                topologyKey: kubernetes.io/hostname
      
      containers:
        - name: my-application
          resources:
            limits:
              memory: "512Mi"
              cpu: "500m"
            requests:
              memory: "256Mi"
              cpu: "100m"
          
          livenessProbe:
            httpGet:
              path: /health/liveness
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
          
          readinessProbe:
            httpGet:
              path: /health/readiness
              port: 8080
            initialDelaySeconds: 5
            periodSeconds: 5
          
          securityContext:
            runAsNonRoot: true
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            capabilities:
              drop:
                - ALL
      
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault
      
      # Graceful shutdown
      terminationGracePeriodSeconds: 30

---
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: my-application-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: my-application

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-application-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-application
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70`})]}),a.jsx(D,{}),a.jsxs("section",{id:"case-studies",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Real-world Case Studies"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Detailed production manifests for complex applications, including SonarQube and .NET Surroundings systems."})]}),a.jsxs("div",{className:"space-y-16",children:[a.jsxs("div",{className:"space-y-8",children:[a.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-bold uppercase tracking-wider",children:"Case Study: SonarQube Infrastructure"}),a.jsx("p",{className:"text-muted-foreground",children:"This production deployment configuration manages a SonarQube instance with persistent storage, custom environment variables, and optimized resource limits."}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsx(T,{title:"Deployment Manifest (SonarQube)",language:"yaml",code:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: sonar
  namespace: sonarqube-developer-prod-axa-magi-id
spec:
  replicas: 1
  strategy:
    type: Recreate # Required for Singleton workloads with PVC
  selector:
    matchLabels:
      name: sonar
  template:
    metadata:
      labels:
        name: sonar
    spec:
      containers:
        - name: sonar
          image: 'sonarqube:10.5.1-community'
          ports:
            - containerPort: 9000
              protocol: TCP
          env:
            - name: SONAR_JDBC_URL
              value: 'jdbc:postgresql://sonar-db:5432/sonar'
            - name: SONAR_JDBC_USERNAME
              value: sonar
            - name: SONAR_JDBC_PASSWORD
              value: sonarpwd
          resources:
            limits:
              cpu: '2'
              memory: 4Gi
            requests:
              cpu: 500m
              memory: 2Gi
          volumeMounts:
            - name: sonar-data
              mountPath: /opt/sonarqube/data
      volumes:
        - name: sonar-data
          persistentVolumeClaim:
            claimName: sonar-pvc-data`}),a.jsxs("div",{className:"space-y-4",children:[a.jsx(T,{title:"Service Manifest",language:"yaml",code:`apiVersion: v1
kind: Service
metadata:
  name: sonar
spec:
  selector:
    name: sonar
  ports:
    - protocol: TCP
      port: 9000
      targetPort: 9000
  type: ClusterIP`}),a.jsx(T,{title:"Route Manifest (Edge Termination)",language:"yaml",code:`apiVersion: route.openshift.io/v1
kind: Route
metadata:
  name: sonar
spec:
  to:
    kind: Service
    name: sonar
  port:
    targetPort: 9000
  tls:
    termination: edge`})]})]})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold uppercase tracking-wider",children:"Case Study: .NET Surroundings BuildConfig"}),a.jsx("p",{className:"text-muted-foreground",children:"Advanced Docker-based BuildConfig for a .NET microservice, featuring custom Dockerfile location and selective build triggers."}),a.jsx(T,{title:"BuildConfig (buildconfig.yaml)",language:"yaml",code:`apiVersion: build.openshift.io/v1
kind: BuildConfig
metadata:
  name: virtual-account-snap-mandiri
  namespace: surrounding-systems-dev-axa-magi-id
spec:
  output:
    to:
      kind: ImageStreamTag
      name: 'virtual-account-snap-mandiri:latest'
  resources:
    limits:
      cpu: '1'
      memory: 2Gi
  strategy:
    type: Docker
    dockerStrategy:
      dockerfilePath: Dockerfile
  source:
    type: Binary # Triggered via 'oc start-build --from-dir'
  triggers:
    - type: ConfigChange
    - type: ImageChange`})]})]})]}),a.jsx(Pl,{previous:{title:"GitHub Workflow",href:"/github-axa-usage"},next:{title:"Jenkins CI/CD",href:"/jenkins-guideline"}})]}),a.jsx("aside",{className:"hidden lg:block w-64 flex-shrink-0",children:a.jsxs("div",{className:"sticky top-28 space-y-4",children:[a.jsx("h4",{className:"font-bold text-sm text-muted-foreground uppercase tracking-wide",children:"On This Page"}),a.jsx("nav",{className:"space-y-1",children:zp.map(c=>a.jsxs("a",{href:`#${c.id}`,className:`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${m===c.id?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[a.jsx(c.icon,{className:"h-4 w-4"}),c.title]},c.id))})]})})]})]})},By=cx,Sx=R.forwardRef(({className:m,...f},x)=>a.jsx(Rn,{ref:x,className:L("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",m),...f}));Sx.displayName=Rn.displayName;const Ax=R.forwardRef(({className:m,isActive:f,children:x,...c},d)=>a.jsxs(_n,{ref:d,className:L("relative inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground z-10",m),...c,children:[f&&a.jsx(Oe.div,{layoutId:"activeTab",className:"absolute inset-0 rounded-sm bg-background shadow-sm",transition:{type:"spring",bounce:.2,duration:.6}}),a.jsx("span",{className:"relative z-20",children:x})]}));Ax.displayName=_n.displayName;const Cx=R.forwardRef(({className:m,...f},x)=>a.jsx(Mn,{ref:x,className:L("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",m),...f}));Cx.displayName=Mn.displayName;const qy=({snippets:m,className:f})=>{const x=Object.keys(m),[c,d]=R.useState(x[0]||"");return a.jsx("div",{className:L("w-full space-y-4",f),children:a.jsxs(By,{value:c,onValueChange:y=>d(y),className:"w-full",children:[a.jsx(Sx,{className:"bg-muted/50 p-1 border border-border/50",children:x.map(y=>{var E;return a.jsx(Ax,{value:y,isActive:c===y,className:"px-4 py-2",children:((E=m[y])==null?void 0:E.title)||y},y)})}),a.jsx("div",{className:"mt-4",children:x.map(y=>{const E=m[y];return E?a.jsx(Cx,{value:y,className:"focus-visible:ring-0 mt-0",children:a.jsx(T,{title:E.title,code:E.code,language:E.language})},y):null})})]})})},Bp=[{id:"introduction",title:"1. Introduction",icon:wt},{id:"getting-access",title:"2. Getting Access",icon:ns},{id:"jenkinsfile-basics",title:"3. Jenkinsfile Basics",icon:ca},{id:"build-test",title:"4. Build & Test",icon:$p},{id:"deployment",title:"5. Deployment Pipelines",icon:Fp},{id:"shared-libraries",title:"6. Shared Libraries",icon:jg},{id:"best-practices",title:"7. Best Practices",icon:ra},{id:"case-study",title:"8. Case Study: .NET",icon:vo}],Hy=()=>{const[m,f]=R.useState("introduction"),x=[{label:"Home",href:"/"},{label:"DevOps & CI/CD"},{label:"Jenkins"}];return R.useEffect(()=>{const c=new IntersectionObserver(d=>{const y=d.filter(E=>E.isIntersecting);if(y.length>0){const E=y.reduce((z,U)=>U.intersectionRatio>z.intersectionRatio||U.intersectionRatio===z.intersectionRatio&&U.boundingClientRect.top<z.boundingClientRect.top?U:z);f(E.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return Bp.forEach(d=>{const y=document.getElementById(d.id);y&&c.observe(y)}),()=>c.disconnect()},[]),a.jsxs(mt,{children:[a.jsx(Tt,{title:"Jenkins CI/CD Guide",subtitle:"Build, test, and deploy applications using Jenkins pipelines on AXA's OpenShift platform.",breadcrumbs:x,readingTime:35}),a.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[a.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[a.jsxs("section",{id:"introduction",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Introduction"}),a.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["Jenkins is AXA's primary CI/CD automation server, hosted on OpenShift. We use ",a.jsx("strong",{children:"Jenkinsfile"})," in each project repository to define build, test, and deployment pipelines."]})]}),a.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Pipeline as Code",icon:ca},{text:"Jenkinsfile per Repo",icon:Ng},{text:"OpenShift Integration",icon:Te},{text:"Automated Testing",icon:$p},{text:"Multi-branch Pipelines",icon:Ba},{text:"Declarative Syntax",icon:Ht}].map((c,d)=>a.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[a.jsx(c.icon,{className:"h-5 w-5 text-primary"}),a.jsx("span",{className:"font-semibold text-sm",children:c.text})]},d))}),a.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400",children:[a.jsx("div",{className:"text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-4",children:"AXA CI/CD Pipeline Flow"}),a.jsx("pre",{className:"leading-relaxed",children:`┌─────────────────────────────────────────────────────────────────┐
│                     Jenkins Pipeline Flow                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐   │
│  │  Commit  │───▶│  Build   │───▶│   Test   │───▶│ Analyze  │   │
│  │  (Git)   │    │ (Maven/  │    │ (Unit/   │    │ (Sonar-  │   │
│  │          │    │  npm)    │    │  Integ)  │    │  Qube)   │   │
│  └──────────┘    └──────────┘    └──────────┘    └────┬─────┘   │
│                                                       │          │
│                                                       ▼          │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              OpenShift Build & Deploy                     │   │
│  │  ┌──────────┐    ┌──────────┐    ┌──────────┐            │   │
│  │  │ Build    │───▶│  Image   │───▶│  Deploy  │            │   │
│  │  │ Config   │    │  Stream  │    │  (Dev/   │            │   │
│  │  │ (oc)     │    │          │    │  Stage)  │            │   │
│  │  └──────────┘    └──────────┘    └──────────┘            │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2 text-amber-600",children:[a.jsx(Nn,{className:"h-5 w-5"}),a.jsx("h4",{className:"font-bold",children:"AXA Jenkins Standard"})]}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Every project at AXA must include a ",a.jsx("code",{className:"text-primary bg-muted px-1.5 py-0.5 rounded",children:"Jenkinsfile"})," in the repository root. This file defines the complete CI/CD pipeline using declarative syntax. The pipeline triggers OpenShift Builds and manages deployments across environments."]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"getting-access",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Getting Access"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Set up your Jenkins access and configure credentials."})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6",children:[a.jsxs("div",{className:"flex items-center gap-3 text-cyan-600",children:[a.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10",children:a.jsx(G,{className:"h-6 w-6"})}),a.jsx("h3",{className:"text-2xl font-bold",children:"Access Checklist"})]}),a.jsx("div",{className:"grid gap-4",children:[{step:"Request Jenkins Access",desc:"Submit access request through AXA service portal for Jenkins."},{step:"Login to Jenkins",desc:"Access Jenkins via SSO at https://jenkins.apps.openshift.axa.com"},{step:"Find Your Project",desc:"Navigate to your team's folder/job in the Jenkins dashboard."},{step:"Configure Credentials",desc:"Add required credentials (Git tokens, registry secrets) in Jenkins Credentials."},{step:"Create Pipeline Job",desc:"Create a new Pipeline job pointing to your repository's Jenkinsfile."}].map((c,d)=>a.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[a.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-sm",children:d+1}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-foreground",children:c.step}),a.jsx("p",{className:"text-sm text-muted-foreground",children:c.desc})]})]},d))})]}),a.jsx(T,{title:"Required Jenkins Credentials",language:"groovy",code:`// Common credentials used in AXA Jenkins pipelines

// Git credentials for cloning repositories
credentials('github-axa-token')        // GitHub AXA personal access token

// OpenShift service account token
credentials('openshift-token')          // For oc login

// SonarQube token for code analysis
credentials('sonarqube-token')          // SonarQube authentication

// Container registry credentials (if external)
credentials('registry-credentials')     // Docker registry auth

// Notification credentials
credentials('teams-webhook')            // Microsoft Teams webhook URL`})]}),a.jsx(D,{}),a.jsxs("section",{id:"jenkinsfile-basics",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Jenkinsfile Basics"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Understanding the declarative pipeline syntax and structure."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"Basic Jenkinsfile Structure",language:"groovy",code:`// Jenkinsfile - Declarative Pipeline Syntax
pipeline {
    // Define agent/executor
    agent {
        kubernetes {
            // Use OpenShift's built-in agent
            inheritFrom 'maven'  // or 'nodejs', 'gradle', etc.
        }
    }
    
    // Environment variables
    environment {
        APP_NAME = 'my-application'
        VERSION = "\${env.BUILD_NUMBER}"
        OPENSHIFT_PROJECT_DEV = 'my-app-dev'
        OPENSHIFT_PROJECT_STAGING = 'my-app-staging'
        SONAR_PROJECT_KEY = 'my-application'
    }
    
    // Pipeline options
    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timeout(time: 30, unit: 'MINUTES')
        timestamps()
        disableConcurrentBuilds()
    }
    
    // Build triggers
    triggers {
        // Poll SCM every 5 minutes
        pollSCM('H/5 * * * *')
        // Or use webhooks (preferred)
    }
    
    // Pipeline stages
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_COMMIT_SHORT = sh(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()
                }
            }
        }
        
        stage('Build') {
            steps {
                echo "Building \${APP_NAME} version \${VERSION}"
                // Build steps here
            }
        }
        
        stage('Test') {
            steps {
                echo "Running tests..."
                // Test steps here
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo "Deploying to OpenShift..."
                // Deployment steps here
            }
        }
    }
    
    // Post-build actions
    post {
        success {
            echo 'Pipeline succeeded!'
            // Send success notification
        }
        failure {
            echo 'Pipeline failed!'
            // Send failure notification
        }
        always {
            // Cleanup
            cleanWs()
        }
    }
}`}),a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"Declarative vs Scripted Pipeline"}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-4 py-3 text-left",children:"Aspect"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Declarative (Preferred)"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Scripted"})]})}),a.jsxs("tbody",{className:"divide-y",children:[a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Syntax"}),a.jsx("td",{className:"px-4 py-2",children:"Structured, opinionated"}),a.jsx("td",{className:"px-4 py-2",children:"Flexible, Groovy-based"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Learning Curve"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{className:"bg-emerald-500",children:"Easier"})}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"secondary",children:"Steeper"})})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Error Checking"}),a.jsx("td",{className:"px-4 py-2",children:"Syntax validation built-in"}),a.jsx("td",{className:"px-4 py-2",children:"Runtime errors"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Restart"}),a.jsx("td",{className:"px-4 py-2",children:"Stage restart supported"}),a.jsx("td",{className:"px-4 py-2",children:"Not supported"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Use Case"}),a.jsx("td",{className:"px-4 py-2",children:"Most pipelines"}),a.jsx("td",{className:"px-4 py-2",children:"Complex logic"})]})]})]})})]}),a.jsx(T,{title:"Using script{} Block for Complex Logic",language:"groovy",code:`stage('Dynamic Stage') {
    steps {
        script {
            // Groovy code block for complex logic
            def environments = ['dev', 'staging', 'prod']
            
            for (env in environments) {
                echo "Processing environment: \${env}"
            }
            
            // Conditional logic
            if (env.BRANCH_NAME == 'main') {
                currentBuild.displayName = "#\${BUILD_NUMBER} - Production"
            } else {
                currentBuild.displayName = "#\${BUILD_NUMBER} - \${BRANCH_NAME}"
            }
            
            // Capture command output
            def gitTag = sh(
                script: 'git describe --tags --always',
                returnStdout: true
            ).trim()
            
            echo "Git tag: \${gitTag}"
        }
    }
}`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"build-test",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Build & Test"}),a.jsxs("p",{className:"text-lg text-muted-foreground",children:["Configure ",a.jsx(jx,{children:"build and test stages"})," for different technology stacks."]})]}),a.jsx("div",{className:"space-y-8",children:a.jsx(qy,{snippets:{maven:{title:"Maven/Java",language:"groovy",code:`pipeline {
    agent {
        kubernetes {
            inheritFrom 'maven'
        }
    }
    
    environment {
        MAVEN_OPTS = '-Xmx1024m -XX:MaxMetaspaceSize=512m'
    }
    
    stages {
        stage('Build') {
            steps {
                sh '''
                    mvn clean compile -B -DskipTests
                '''
            }
        }
        
        stage('Unit Tests') {
            steps {
                sh 'mvn test -B'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml'
                    jacoco(
                        execPattern: '**/target/jacoco.exec',
                        classPattern: '**/target/classes',
                        sourcePattern: '**/src/main/java'
                    )
                }
            }
        }
        
        stage('Integration Tests') {
            steps {
                sh 'mvn verify -B -DskipUnitTests'
            }
            post {
                always {
                    junit '**/target/failsafe-reports/*.xml'
                }
            }
        }
        
        stage('Package') {
            steps {
                sh 'mvn package -B -DskipTests'
                archiveArtifacts artifacts: 'target/*.jar', fingerprint: true
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                        mvn sonar:sonar \\
                            -Dsonar.projectKey=\${SONAR_PROJECT_KEY} \\
                            -Dsonar.projectName="\${APP_NAME}" \\
                            -Dsonar.java.coveragePlugin=jacoco \\
                            -Dsonar.coverage.jacoco.xmlReportPaths=target/site/jacoco/jacoco.xml
                    '''
                }
            }
        }
        
        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}`},node:{title:"Node.js/React",language:"groovy",code:`pipeline {
    agent {
        kubernetes {
            inheritFrom 'nodejs'
        }
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                    npm ci --prefer-offline
                '''
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Unit Tests') {
            steps {
                sh 'npm run test:ci'
            }
            post {
                always {
                    junit 'coverage/junit.xml'
                    publishHTML(target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'coverage/lcov-report',
                        reportFiles: 'index.html',
                        reportName: 'Coverage Report'
                    ])
                }
            }
        }
        
        stage('Build') {
            steps {
                sh '''
                    npm run build
                '''
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                        npx sonar-scanner \\
                            -Dsonar.projectKey=\${SONAR_PROJECT_KEY} \\
                            -Dsonar.sources=src \\
                            -Dsonar.tests=src \\
                            -Dsonar.test.inclusions=**/*.test.ts,**/*.test.tsx \\
                            -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
                    '''
                }
            }
        }
    }
}`},dotnet:{title:".NET Core",language:"groovy",code:`pipeline {
    agent {
        kubernetes {
            inheritFrom 'dotnet'
        }
    }
    
    environment {
        DOTNET_CLI_TELEMETRY_OPTOUT = '1'
    }
    
    stages {
        stage('Restore') {
            steps {
                sh 'dotnet restore'
            }
        }
        
        stage('Build') {
            steps {
                sh 'dotnet build --configuration Release --no-restore'
            }
        }
        
        stage('Test') {
            steps {
                sh '''
                    dotnet test --configuration Release --no-build \\
                        --logger "trx;LogFileName=test-results.trx" \\
                        --collect:"XPlat Code Coverage"
                '''
            }
            post {
                always {
                    mstest testResultsFile: '**/*.trx'
                    publishCoverage adapters: [
                        coberturaAdapter('**/coverage.cobertura.xml')
                    ]
                }
            }
        }
        
        stage('Publish') {
            steps {
                sh '''
                    dotnet publish --configuration Release --no-build \\
                        --output ./publish
                '''
                archiveArtifacts artifacts: 'publish/**/*', fingerprint: true
            }
        }
    }
}`}}})})]}),a.jsx(D,{}),a.jsxs("section",{id:"deployment",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Deployment Pipelines"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Trigger OpenShift Builds and manage deployments across environments."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"Complete CI/CD Pipeline with OpenShift",language:"groovy",code:`pipeline {
    agent {
        kubernetes {
            inheritFrom 'maven'
        }
    }
    
    environment {
        APP_NAME = 'my-application'
        OPENSHIFT_DEV = 'my-app-dev'
        OPENSHIFT_STAGING = 'my-app-staging'
        OPENSHIFT_PROD = 'my-app-prod'
    }
    
    stages {
        stage('Build Application') {
            steps {
                sh 'mvn clean package -B -DskipTests'
            }
        }
        
        stage('Run Tests') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh 'mvn test -B'
                    }
                }
                stage('Integration Tests') {
                    steps {
                        sh 'mvn verify -B -DskipUnitTests'
                    }
                }
            }
        }
        
        stage('Build Container Image') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("\${OPENSHIFT_DEV}") {
                            // Start OpenShift build
                            def build = openshift.startBuild("\${APP_NAME}",
                                '--from-dir=.',
                                '--follow',
                                '--wait'
                            )
                            
                            def buildResult = build.object()
                            if (buildResult.status.phase != 'Complete') {
                                error "Build failed: \${buildResult.status.phase}"
                            }
                            
                            echo "Build completed: \${buildResult.metadata.name}"
                        }
                    }
                }
            }
        }
        
        stage('Deploy to Dev') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("\${OPENSHIFT_DEV}") {
                            // Apply manifests
                            openshift.apply('-f', 'k8s/base')
                            openshift.apply('-f', 'k8s/overlays/dev')
                            
                            // Wait for deployment
                            def deployment = openshift.selector('deployment', "\${APP_NAME}")
                            deployment.rollout().status('--timeout=5m')
                            
                            echo "Deployed to Dev successfully!"
                        }
                    }
                }
            }
        }
        
        stage('Smoke Tests') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject("\${OPENSHIFT_DEV}") {
                            def route = openshift.selector('route', "\${APP_NAME}").object()
                            def appUrl = "https://\${route.spec.host}"
                            
                            // Basic health check
                            sh """
                                curl -sSf \${appUrl}/actuator/health || exit 1
                                echo "Smoke tests passed!"
                            """
                        }
                    }
                }
            }
        }
        
        stage('Promote to Staging') {
            when {
                branch 'main'
            }
            steps {
                script {
                    openshift.withCluster() {
                        // Tag image for staging
                        openshift.withProject("\${OPENSHIFT_DEV}") {
                            openshift.tag(
                                "\${APP_NAME}:latest",
                                "\${OPENSHIFT_STAGING}/\${APP_NAME}:staging"
                            )
                        }
                        
                        // Deploy to staging
                        openshift.withProject("\${OPENSHIFT_STAGING}") {
                            openshift.apply('-f', 'k8s/base')
                            openshift.apply('-f', 'k8s/overlays/staging')
                            
                            def deployment = openshift.selector('deployment', "\${APP_NAME}")
                            deployment.rollout().status('--timeout=5m')
                            
                            echo "Deployed to Staging successfully!"
                        }
                    }
                }
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            input {
                message "Deploy to Production?"
                ok "Deploy"
                submitter "admin,release-managers"
            }
            steps {
                script {
                    openshift.withCluster() {
                        // Tag image for production
                        openshift.withProject("\${OPENSHIFT_STAGING}") {
                            openshift.tag(
                                "\${APP_NAME}:staging",
                                "\${OPENSHIFT_PROD}/\${APP_NAME}:prod-\${BUILD_NUMBER}"
                            )
                            openshift.tag(
                                "\${APP_NAME}:staging",
                                "\${OPENSHIFT_PROD}/\${APP_NAME}:latest"
                            )
                        }
                        
                        // Deploy to production
                        openshift.withProject("\${OPENSHIFT_PROD}") {
                            openshift.apply('-f', 'k8s/base')
                            openshift.apply('-f', 'k8s/overlays/production')
                            
                            def deployment = openshift.selector('deployment', "\${APP_NAME}")
                            deployment.rollout().status('--timeout=10m')
                            
                            echo "Deployed to Production successfully!"
                        }
                    }
                }
            }
        }
    }
    
    post {
        success {
            script {
                // Send success notification to Teams
                office365ConnectorSend(
                    webhookUrl: "\${TEAMS_WEBHOOK}",
                    color: "00FF00",
                    message: "✅ Pipeline succeeded: \${JOB_NAME} #\${BUILD_NUMBER}"
                )
            }
        }
        failure {
            script {
                office365ConnectorSend(
                    webhookUrl: "\${TEAMS_WEBHOOK}",
                    color: "FF0000",
                    message: "❌ Pipeline failed: \${JOB_NAME} #\${BUILD_NUMBER}"
                )
            }
        }
        always {
            cleanWs()
        }
    }
}`}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Deployment Best Practices"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsxs("li",{children:["• Use input"," for production approvals"]}),a.jsx("li",{children:"• Tag images with build numbers"}),a.jsx("li",{children:"• Run smoke tests after each deploy"}),a.jsx("li",{children:"• Keep production deployments immutable"}),a.jsx("li",{children:"• Use parallel stages for faster builds"})]})]}),a.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Common Mistakes"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Deploying without running tests"}),a.jsx("li",{children:"• Not waiting for rollout to complete"}),a.jsx("li",{children:"• Hardcoding credentials in Jenkinsfile"}),a.jsxs("li",{children:["• Missing post"," failure handlers"]}),a.jsx("li",{children:"• No manual approval for production"})]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"shared-libraries",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Shared Libraries"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Reuse pipeline code across projects with shared libraries."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"Shared Library Structure",language:"bash",code:`# Repository: github.axa.com/devops/jenkins-shared-library
jenkins-shared-library/
├── vars/                           # Global pipeline steps
│   ├── buildMaven.groovy           # Maven build step
│   ├── buildNodejs.groovy          # Node.js build step
│   ├── deployToOpenshift.groovy    # OpenShift deployment
│   ├── notifyTeams.groovy          # Teams notification
│   └── sonarAnalysis.groovy        # SonarQube analysis
├── src/
│   └── com/
│       └── axa/
│           └── pipeline/
│               ├── BuildConfig.groovy
│               └── DeployConfig.groovy
└── resources/
    └── templates/
        └── deployment.yaml`}),a.jsx(T,{title:"vars/deployToOpenshift.groovy",language:"groovy",code:`// Shared library function for OpenShift deployment
def call(Map config = [:]) {
    def appName = config.appName ?: error("appName is required")
    def project = config.project ?: error("project is required")
    def imageTag = config.imageTag ?: 'latest'
    def timeout = config.timeout ?: 5
    
    echo "Deploying \${appName} to \${project}"
    
    openshift.withCluster() {
        openshift.withProject(project) {
            // Apply Kubernetes manifests
            if (fileExists('k8s/')) {
                openshift.apply('-f', 'k8s/')
            }
            
            // Tag the image if specified
            if (config.sourceTag) {
                openshift.tag(
                    "\${config.sourceProject}/\${appName}:\${config.sourceTag}",
                    "\${appName}:\${imageTag}"
                )
            }
            
            // Wait for rollout
            def deployment = openshift.selector('deployment', appName)
            if (deployment.exists()) {
                deployment.rollout().status("--timeout=\${timeout}m")
                echo "Deployment completed successfully!"
            } else {
                error "Deployment '\${appName}' not found"
            }
            
            // Return route URL
            def route = openshift.selector('route', appName)
            if (route.exists()) {
                def routeObj = route.object()
                return "https://\${routeObj.spec.host}"
            }
            return null
        }
    }
}`}),a.jsx(T,{title:"Using Shared Library in Jenkinsfile",language:"groovy",code:`// Import shared library at the top of Jenkinsfile
@Library('axa-jenkins-shared-library@main') _

pipeline {
    agent any
    
    environment {
        APP_NAME = 'my-application'
    }
    
    stages {
        stage('Build') {
            steps {
                // Use shared library step
                buildMaven(
                    skipTests: false,
                    javaVersion: '17'
                )
            }
        }
        
        stage('SonarQube') {
            steps {
                sonarAnalysis(
                    projectKey: "\${APP_NAME}",
                    qualityGate: true
                )
            }
        }
        
        stage('Deploy to Dev') {
            steps {
                script {
                    def appUrl = deployToOpenshift(
                        appName: "\${APP_NAME}",
                        project: 'my-app-dev',
                        imageTag: 'dev'
                    )
                    echo "Application deployed at: \${appUrl}"
                }
            }
        }
        
        stage('Promote to Staging') {
            when { branch 'main' }
            steps {
                deployToOpenshift(
                    appName: "\${APP_NAME}",
                    project: 'my-app-staging',
                    sourceProject: 'my-app-dev',
                    sourceTag: 'dev',
                    imageTag: 'staging'
                )
            }
        }
    }
    
    post {
        always {
            notifyTeams(
                status: currentBuild.result,
                jobName: "\${JOB_NAME}",
                buildNumber: "\${BUILD_NUMBER}"
            )
        }
    }
}`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"best-practices",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Best Practices"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Follow these guidelines for maintainable, secure, and efficient pipelines."})]}),a.jsx("div",{className:"grid gap-6",children:[{title:"Pipeline Structure",icon:Sg,color:"text-blue-500",items:["Use declarative syntax over scripted","Keep Jenkinsfile in repository root","Use meaningful stage names","Fail fast - run quick checks first","Use parallel stages where possible"]},{title:"Security",icon:ra,color:"text-emerald-500",items:["Never hardcode credentials in Jenkinsfile","Use Jenkins Credentials Manager","Mask sensitive values in logs","Restrict access to production jobs","Audit pipeline changes"]},{title:"Performance",icon:Vp,color:"text-amber-500",items:["Cache dependencies between builds","Use lightweight agents when possible","Parallelize independent stages","Set appropriate timeouts","Clean workspace after builds"]},{title:"Maintainability",icon:Lt,color:"text-purple-500",items:["Use shared libraries for common code","Document complex pipeline logic","Version control your Jenkinsfiles","Use environment variables for config","Test pipeline changes on feature branches"]}].map((c,d)=>a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(c.icon,{className:`h-5 w-5 ${c.color}`}),c.title]})}),a.jsx(Z,{children:a.jsx("ul",{className:"grid md:grid-cols-2 gap-2",children:c.items.map((y,E)=>a.jsxs("li",{className:"flex items-start gap-2 text-sm text-muted-foreground",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0"}),y]},E))})})]},d))}),a.jsx(T,{title:"Complete Jenkinsfile Template",language:"groovy",code:`@Library('axa-jenkins-shared-library@main') _

pipeline {
    agent {
        kubernetes {
            inheritFrom 'maven'
        }
    }
    
    environment {
        APP_NAME = 'my-application'
        SONAR_PROJECT = 'my-application'
    }
    
    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timeout(time: 30, unit: 'MINUTES')
        timestamps()
        disableConcurrentBuilds()
    }
    
    stages {
        stage('Initialize') {
            steps {
                script {
                    currentBuild.displayName = "#\${BUILD_NUMBER} - \${GIT_BRANCH}"
                }
            }
        }
        
        stage('Build & Test') {
            parallel {
                stage('Compile') {
                    steps {
                        sh 'mvn clean compile -B'
                    }
                }
                stage('Static Analysis') {
                    steps {
                        sh 'mvn checkstyle:check -B'
                    }
                }
            }
        }
        
        stage('Unit Tests') {
            steps {
                sh 'mvn test -B'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml'
                }
            }
        }
        
        stage('SonarQube') {
            steps {
                sonarAnalysis(projectKey: "\${SONAR_PROJECT}")
            }
        }
        
        stage('Package') {
            steps {
                sh 'mvn package -B -DskipTests'
            }
        }
        
        stage('Build Image') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject('my-app-dev') {
                            openshift.startBuild("\${APP_NAME}",
                                '--from-dir=.',
                                '--follow',
                                '--wait'
                            )
                        }
                    }
                }
            }
        }
        
        stage('Deploy Dev') {
            steps {
                deployToOpenshift(
                    appName: "\${APP_NAME}",
                    project: 'my-app-dev'
                )
            }
        }
        
        stage('Deploy Staging') {
            when { branch 'main' }
            steps {
                deployToOpenshift(
                    appName: "\${APP_NAME}",
                    project: 'my-app-staging',
                    sourceProject: 'my-app-dev',
                    sourceTag: 'latest',
                    imageTag: 'staging'
                )
            }
        }
        
        stage('Deploy Production') {
            when { branch 'main' }
            input {
                message "Deploy to Production?"
                ok "Deploy"
            }
            steps {
                deployToOpenshift(
                    appName: "\${APP_NAME}",
                    project: 'my-app-prod',
                    sourceProject: 'my-app-staging',
                    sourceTag: 'staging',
                    imageTag: "prod-\${BUILD_NUMBER}"
                )
            }
        }
    }
    
    post {
        success {
            notifyTeams(status: 'SUCCESS')
        }
        failure {
            notifyTeams(status: 'FAILURE')
        }
        always {
            cleanWs()
        }
    }
}`})]}),a.jsx(D,{}),a.jsxs("section",{id:"case-study",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Case Study: .NET Production Pipeline"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"A real-world example of a comprehensive .NET pipeline featuring SonarScanner integration, Artifactory authentication, and advanced test coverage processing."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:[{title:"NuGet/Artifactory",desc:"Dynamic nuget.config generation with credentials."},{title:"SonarScanner",desc:"Full analysis with PR vs Branch conditional logic."},{title:"Coverage Processing",desc:"Automated path fixing for SonarQube compatibility."}].map((c,d)=>a.jsxs("div",{className:"p-4 rounded-xl preview-card border bg-background/50",children:[a.jsx("h4",{className:"font-bold text-sm mb-1",children:c.title}),a.jsx("p",{className:"text-xs text-muted-foreground",children:c.desc})]},d))}),a.jsx(T,{title:"Production .NET Jenkinsfile (Surrounding Systems)",language:"groovy",code:`pipeline {
  agent any

  options {
    skipDefaultCheckout(true) // avoid duplicate SCM checkout
  }

  environment {
    TARGET_NS                 = 'surrounding-systems-dev-axa-magi-id'
    APP_NAME                  = 'virtual-account-snap-mandiri'
    SOLUTION                  = 'JwtApp.sln'
    BC_NAME                   = "\${APP_NAME}"
    KUBE_CRED_ID              = 'jenkins-dev-axa-magi-id-kubeconfig'
    GITHUB_CRED               = 'github-ssh-prod'
    ARTIFACTORY_CRED_ID       = 'artifactory-credentials'
    SONAR_PROJECT_KEY         = 'aii_virtual-account-snap-mandiri_...'
  }

  stages {
    stage('📥 Checkout Code') {
      steps {
        checkout([$class: 'GitSCM', ...]) // Standard checkout
        sh 'git submodule update --init --recursive'
      }
    }

    stage('📦 Restore NuGet Packages') {
      steps {
        withCredentials([usernamePassword(credentialsId: env.ARTIFACTORY_CRED_ID, ...)]) {
          sh '''
            # Generate temporary nuget.config with Artifactory auth
            cat > nuget.config <<EOF
<configuration>
  <packageSources>
    <add key="AXA-Virtual" value="https://artifactory.asia.axa-cloud.com/..." />
  </packageSources>
</configuration>
EOF
            dotnet restore "\${SOLUTION}" --configfile nuget.config
          '''
        }
      }
    }

    stage('🔍 SonarQube Analysis (Begin)') {
      steps {
        withSonarQubeEnv('SonarQube') {
          script {
            def sonarArgs = env.CHANGE_ID ? "/d:sonar.pullrequest.key=\${CHANGE_ID} ..." : "/d:sonar.branch.name=\${BRANCH_NAME}"
            sh "dotnet sonarscanner begin /k:\\"\${SONAR_PROJECT_KEY}\\" \${sonarArgs} ..."
          }
        }
      }
    }

    stage('⚙️ Build Project') {
      steps {
        sh 'dotnet build "\${SOLUTION}" -c Release --no-restore'
      }
    }

    stage('📊 Parse Test Coverage') {
      steps {
        sh '''
          # Advanced logic to fix absolute paths in OpenCover files
          # This ensures SonarQube correctly maps coverage to source files
          sed -i 's|fullPath="[^"]*/virtual-account-snap-mandiri/|fullPath="|g' coverage.opencover.xml
        '''
      }
    }

    stage('✅ SonarQube Analysis (End)') {
      steps {
        withSonarQubeEnv('SonarQube') {
          sh 'dotnet sonarscanner end /d:sonar.token="\${SONAR_AUTH_TOKEN}"'
        }
      }
    }

    stage('🚀 Deploy to OpenShift') {
      when { branch 'dev' }
      steps {
        withCredentials([file(credentialsId: env.KUBE_CRED_ID, variable: 'KUBECONFIG')]) {
          sh 'oc start-build \${BC_NAME} --follow -n \${TARGET_NS}'
        }
      }
    }
  }
}`}),a.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[a.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[a.jsx(Lt,{className:"h-5 w-5"})," Key Takeaways"]}),a.jsxs("ul",{className:"space-y-3 text-sm text-muted-foreground",children:[a.jsxs("li",{className:"flex gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 shrink-0 mt-0.5"}),a.jsxs("span",{children:[a.jsx("strong",{children:"Dynamic Config"}),": Generating `nuget.config` on the fly prevents credential leakage and ensures clean builds."]})]}),a.jsxs("li",{className:"flex gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 shrink-0 mt-0.5"}),a.jsxs("span",{children:[a.jsx("strong",{children:"PR Analysis"}),": Conditional use of `sonar.pullrequest` arguments allows Jenkins to report status directly back to GitHub PRs."]})]}),a.jsxs("li",{className:"flex gap-2",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 shrink-0 mt-0.5"}),a.jsxs("span",{children:[a.jsx("strong",{children:"Path Normalization"}),": Using `sed` or `tr` to fix coverage reports is often necessary when tools generate absolute paths that don't match the SonarQube workspace."]})]})]})]})]})]}),a.jsx(Pl,{previous:{title:"OpenShift Platform",href:"/openshift-guideline"},next:{title:"SonarQube",href:"/sonarqube-guideline"}})]}),a.jsx("aside",{className:"hidden lg:block w-64 flex-shrink-0",children:a.jsxs("div",{className:"sticky top-28 space-y-4",children:[a.jsx("h4",{className:"font-bold text-sm text-muted-foreground uppercase tracking-wide",children:"On This Page"}),a.jsx("nav",{className:"space-y-1",children:Bp.map(c=>a.jsxs("a",{href:`#${c.id}`,className:`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${m===c.id?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[a.jsx(c.icon,{className:"h-4 w-4"}),c.title]},c.id))})]})})]})]})},qp=[{id:"introduction",title:"1. Introduction",icon:wt},{id:"getting-started",title:"2. Getting Started",icon:Ht},{id:"quality-gates",title:"3. Quality Gates",icon:Wp},{id:"code-analysis",title:"4. Code Analysis",icon:Cn},{id:"ide-integration",title:"5. IDE Integration",icon:fo},{id:"jenkins-integration",title:"6. Jenkins Integration",icon:Ba},{id:"best-practices",title:"7. Best Practices",icon:ra}],Ly=()=>{const[m,f]=R.useState("introduction"),x=[{label:"Home",href:"/"},{label:"DevOps & CI/CD"},{label:"SonarQube"}];return R.useEffect(()=>{const c=new IntersectionObserver(d=>{const y=d.filter(E=>E.isIntersecting);if(y.length>0){const E=y.reduce((z,U)=>U.intersectionRatio>z.intersectionRatio||U.intersectionRatio===z.intersectionRatio&&U.boundingClientRect.top<z.boundingClientRect.top?U:z);f(E.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return qp.forEach(d=>{const y=document.getElementById(d.id);y&&c.observe(y)}),()=>c.disconnect()},[]),a.jsxs(mt,{children:[a.jsx(Tt,{title:"SonarQube Code Quality Guide",subtitle:"Maintain high code quality standards using SonarQube for static code analysis, security scanning, and technical debt management.",breadcrumbs:x,readingTime:30}),a.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[a.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[a.jsxs("section",{id:"introduction",className:"scroll-mt-28 space-y-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Introduction"}),a.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"SonarQube is AXA's code quality and security analysis platform, hosted on OpenShift. It helps maintain clean, secure, and maintainable code across all projects."})]}),a.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Static Code Analysis",icon:Cn},{text:"Security Vulnerabilities",icon:ra},{text:"Code Smells",icon:ls},{text:"Coverage Metrics",icon:Ap},{text:"Technical Debt",icon:Wc},{text:"Quality Gates",icon:Wp}].map((c,d)=>a.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[a.jsx(c.icon,{className:"h-5 w-5 text-primary"}),a.jsx("span",{className:"font-semibold text-sm",children:c.text})]},d))}),a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"SonarQube Issue Types"}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-4 py-3 text-left",children:"Type"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Description"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Priority"})]})}),a.jsxs("tbody",{className:"divide-y",children:[a.jsxs("tr",{children:[a.jsxs("td",{className:"px-4 py-2 font-medium flex items-center gap-2",children:[a.jsx(ls,{className:"h-4 w-4 text-red-500"})," Bug"]}),a.jsx("td",{className:"px-4 py-2",children:"Code that is demonstrably wrong or highly likely to behave unexpectedly"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"destructive",children:"Critical"})})]}),a.jsxs("tr",{children:[a.jsxs("td",{className:"px-4 py-2 font-medium flex items-center gap-2",children:[a.jsx(ra,{className:"h-4 w-4 text-orange-500"})," Vulnerability"]}),a.jsx("td",{className:"px-4 py-2",children:"Security issue that could be exploited by attackers"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"destructive",children:"Critical"})})]}),a.jsxs("tr",{children:[a.jsxs("td",{className:"px-4 py-2 font-medium flex items-center gap-2",children:[a.jsx(Nn,{className:"h-4 w-4 text-amber-500"})," Security Hotspot"]}),a.jsx("td",{className:"px-4 py-2",children:"Security-sensitive code that requires manual review"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"secondary",children:"Review"})})]}),a.jsxs("tr",{children:[a.jsxs("td",{className:"px-4 py-2 font-medium flex items-center gap-2",children:[a.jsx(Ag,{className:"h-4 w-4 text-yellow-500"})," Code Smell"]}),a.jsx("td",{className:"px-4 py-2",children:"Maintainability issues that make code harder to understand"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"outline",children:"Medium"})})]})]})]})})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(Cg,{className:"h-5 w-5 text-emerald-500"})," Key Metrics"]})}),a.jsxs(Z,{className:"space-y-3",children:[a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-muted-foreground",children:"Reliability Rating"}),a.jsx("span",{className:"font-medium",children:"A-E (bugs)"})]}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-muted-foreground",children:"Security Rating"}),a.jsx("span",{className:"font-medium",children:"A-E (vulnerabilities)"})]}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-muted-foreground",children:"Maintainability Rating"}),a.jsx("span",{className:"font-medium",children:"A-E (code smells)"})]}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-muted-foreground",children:"Coverage"}),a.jsx("span",{className:"font-medium",children:"% lines tested"})]}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-muted-foreground",children:"Duplications"}),a.jsx("span",{className:"font-medium",children:"% duplicated lines"})]})]})]}),a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(Wc,{className:"h-5 w-5 text-blue-500"})," Rating Scale"]})}),a.jsxs(Z,{className:"space-y-3",children:[a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"font-medium text-emerald-600",children:"A"}),a.jsx("span",{className:"text-muted-foreground",children:"No issues (best)"})]}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"font-medium text-green-600",children:"B"}),a.jsx("span",{className:"text-muted-foreground",children:"Minor issues only"})]}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"font-medium text-yellow-600",children:"C"}),a.jsx("span",{className:"text-muted-foreground",children:"At least 1 major issue"})]}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"font-medium text-orange-600",children:"D"}),a.jsx("span",{className:"text-muted-foreground",children:"At least 1 critical issue"})]}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"font-medium text-red-600",children:"E"}),a.jsx("span",{className:"text-muted-foreground",children:"At least 1 blocker issue"})]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"getting-started",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Getting Started"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Set up your project for SonarQube analysis."})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6",children:[a.jsxs("div",{className:"flex items-center gap-3 text-cyan-600",children:[a.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10",children:a.jsx(G,{className:"h-6 w-6"})}),a.jsx("h3",{className:"text-2xl font-bold",children:"Setup Checklist"})]}),a.jsx("div",{className:"grid gap-4",children:[{step:"Access SonarQube",desc:"Login to https://sonarqube.apps.openshift.axa.com with SSO credentials."},{step:"Create Project",desc:"Create a new project or request access to existing project from admin."},{step:"Generate Token",desc:"Go to My Account → Security → Generate Token for CI/CD integration."},{step:"Configure Project",desc:"Create sonar-project.properties file in your repository root."},{step:"Add to Pipeline",desc:"Add SonarQube analysis stage to your Jenkinsfile."}].map((c,d)=>a.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[a.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-sm",children:d+1}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-bold text-foreground",children:c.step}),a.jsx("p",{className:"text-sm text-muted-foreground",children:c.desc})]})]},d))})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"sonar-project.properties",language:"properties",code:`# Required metadata
sonar.projectKey=my-application
sonar.projectName=My Application
sonar.projectVersion=1.0

# Source directories
sonar.sources=src/main/java
sonar.tests=src/test/java

# Exclusions (optional)
sonar.exclusions=**/generated/**,**/node_modules/**
sonar.test.exclusions=**/test/**

# Language-specific settings
sonar.java.source=17
sonar.java.binaries=target/classes
sonar.java.test.binaries=target/test-classes
sonar.java.libraries=target/dependency/*.jar

# Coverage report paths
sonar.coverage.jacoco.xmlReportPaths=target/site/jacoco/jacoco.xml

# Encoding
sonar.sourceEncoding=UTF-8`}),a.jsx(T,{title:"Running Analysis Locally",language:"bash",code:`# Install SonarScanner CLI
# macOS
brew install sonar-scanner

# Or download from https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/

# Run analysis (with token)
sonar-scanner \\
  -Dsonar.host.url=https://sonarqube.apps.openshift.axa.com \\
  -Dsonar.token=your-analysis-token \\
  -Dsonar.projectKey=my-application

# For Maven projects
mvn sonar:sonar \\
  -Dsonar.host.url=https://sonarqube.apps.openshift.axa.com \\
  -Dsonar.token=your-analysis-token

# For Gradle projects
./gradlew sonarqube \\
  -Dsonar.host.url=https://sonarqube.apps.openshift.axa.com \\
  -Dsonar.token=your-analysis-token

# For Node.js projects
npx sonar-scanner \\
  -Dsonar.host.url=https://sonarqube.apps.openshift.axa.com \\
  -Dsonar.token=your-analysis-token \\
  -Dsonar.projectKey=my-application`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"quality-gates",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Quality Gates"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Quality Gates define the conditions that code must meet before being deployed."})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2 text-amber-600",children:[a.jsx(Nn,{className:"h-5 w-5"}),a.jsx("h4",{className:"font-bold",children:"AXA Quality Gate Standard"})]}),a.jsx("p",{className:"text-sm text-muted-foreground",children:'All AXA projects must pass the default "AXA Standard" Quality Gate before deployment. This gate enforces security, reliability, and maintainability standards. Builds that fail the Quality Gate should not be deployed to production.'})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"AXA Standard Quality Gate Conditions"}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-4 py-3 text-left",children:"Metric"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Condition"}),a.jsx("th",{className:"px-4 py-3 text-left",children:"Applies To"})]})}),a.jsxs("tbody",{className:"divide-y",children:[a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"New Bugs"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{className:"bg-emerald-500",children:"= 0"})}),a.jsx("td",{className:"px-4 py-2",children:"New code"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"New Vulnerabilities"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{className:"bg-emerald-500",children:"= 0"})}),a.jsx("td",{className:"px-4 py-2",children:"New code"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"New Security Hotspots Reviewed"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"secondary",children:"= 100%"})}),a.jsx("td",{className:"px-4 py-2",children:"New code"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"New Coverage"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"outline",children:"≥ 80%"})}),a.jsx("td",{className:"px-4 py-2",children:"New code"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"New Duplicated Lines"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{variant:"outline",children:"≤ 3%"})}),a.jsx("td",{className:"px-4 py-2",children:"New code"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Reliability Rating"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{className:"bg-emerald-500",children:"A"})}),a.jsx("td",{className:"px-4 py-2",children:"New code"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Security Rating"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{className:"bg-emerald-500",children:"A"})}),a.jsx("td",{className:"px-4 py-2",children:"New code"})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"px-4 py-2 font-medium",children:"Maintainability Rating"}),a.jsx("td",{className:"px-4 py-2",children:a.jsx(j,{className:"bg-emerald-500",children:"A"})}),a.jsx("td",{className:"px-4 py-2",children:"New code"})]})]})]})})]}),a.jsx(T,{title:"Waiting for Quality Gate in Jenkins",language:"groovy",code:`stage('SonarQube Analysis') {
    steps {
        withSonarQubeEnv('SonarQube') {
            sh 'mvn sonar:sonar'
        }
    }
}

stage('Quality Gate') {
    steps {
        timeout(time: 5, unit: 'MINUTES') {
            // Wait for SonarQube to process results
            waitForQualityGate abortPipeline: true
        }
    }
}

// Alternative: Check quality gate manually
stage('Quality Gate Check') {
    steps {
        script {
            def qualitygate = waitForQualityGate()
            if (qualitygate.status != 'OK') {
                error "Quality Gate failed: \${qualitygate.status}"
            }
            echo "Quality Gate passed!"
        }
    }
}`})]}),a.jsx(D,{}),a.jsxs("section",{id:"code-analysis",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Analysis"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Understanding analysis results and fixing issues."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsx(T,{title:"Java Analysis Configuration",language:"xml",code:`<!-- pom.xml -->
<properties>
    <sonar.projectKey>my-app</sonar.projectKey>
    <sonar.projectName>My Application</sonar.projectName>
    <sonar.java.coveragePlugin>jacoco</sonar.java.coveragePlugin>
    <sonar.coverage.jacoco.xmlReportPaths>
        \${project.build.directory}/site/jacoco/jacoco.xml
    </sonar.coverage.jacoco.xmlReportPaths>
</properties>

<build>
    <plugins>
        <!-- JaCoCo for coverage -->
        <plugin>
            <groupId>org.jacoco</groupId>
            <artifactId>jacoco-maven-plugin</artifactId>
            <version>0.8.11</version>
            <executions>
                <execution>
                    <goals>
                        <goal>prepare-agent</goal>
                    </goals>
                </execution>
                <execution>
                    <id>report</id>
                    <phase>test</phase>
                    <goals>
                        <goal>report</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>`}),a.jsx(T,{title:"JavaScript/TypeScript Configuration",language:"json",code:`// sonar-project.properties
sonar.projectKey=my-react-app
sonar.projectName=My React App
sonar.sources=src
sonar.tests=src
sonar.test.inclusions=**/*.test.ts,**/*.test.tsx
sonar.exclusions=**/node_modules/**,**/*.test.*
sonar.typescript.lcov.reportPaths=coverage/lcov.info
sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.testExecutionReportPaths=coverage/test-reporter.xml

// package.json - test script
{
  "scripts": {
    "test:ci": "jest --coverage --ci --reporters=default --reporters=jest-junit",
    "sonar": "sonar-scanner"
  },
  "devDependencies": {
    "jest-junit": "^16.0.0",
    "sonarqube-scanner": "^3.3.0"
  }
}`})]}),a.jsx(T,{title:".NET Analysis Configuration",language:"bash",code:`# Install SonarScanner for .NET
dotnet tool install --global dotnet-sonarscanner

# Begin analysis
dotnet sonarscanner begin \\
    /k:"my-dotnet-app" \\
    /n:"My .NET Application" \\
    /d:sonar.host.url="https://sonarqube.apps.openshift.axa.com" \\
    /d:sonar.token="your-token" \\
    /d:sonar.cs.opencover.reportsPaths="**/coverage.opencover.xml"

# Build and test
dotnet build
dotnet test --collect:"XPlat Code Coverage"

# End analysis
dotnet sonarscanner end /d:sonar.token="your-token"`}),a.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[a.jsx("h4",{className:"font-bold",children:"Common Issue Categories"}),a.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{category:"SQL Injection",severity:"Critical",rule:"S3649",fix:"Use parameterized queries"},{category:"Hard-coded Credentials",severity:"Critical",rule:"S2068",fix:"Use environment variables"},{category:"Null Pointer",severity:"Major",rule:"S2259",fix:"Add null checks or use Optional"},{category:"Empty Catch Block",severity:"Major",rule:"S108",fix:"Log exception or rethrow"},{category:"Cognitive Complexity",severity:"Minor",rule:"S3776",fix:"Extract methods, simplify logic"},{category:"Unused Variables",severity:"Minor",rule:"S1481",fix:"Remove or use the variable"}].map((c,d)=>a.jsxs("div",{className:"p-4 rounded-xl border border-border/50 bg-background/50",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("span",{className:"font-bold text-sm",children:c.category}),a.jsx(j,{variant:c.severity==="Critical"?"destructive":c.severity==="Major"?"secondary":"outline",children:c.severity})]}),a.jsxs("p",{className:"text-xs text-muted-foreground",children:["Rule: ",c.rule]}),a.jsxs("p",{className:"text-xs text-emerald-600 mt-1",children:["Fix: ",c.fix]})]},d))})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"ide-integration",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"IDE Integration"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Use SonarLint to catch issues before committing code."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:[{name:"VS Code",plugin:"SonarLint extension",icon:ca},{name:"IntelliJ IDEA",plugin:"SonarLint plugin",icon:vo},{name:"Visual Studio",plugin:"SonarLint extension",icon:En}].map((c,d)=>a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(c.icon,{className:"h-5 w-5 text-primary"}),c.name]})}),a.jsx(Z,{children:a.jsx("p",{className:"text-sm text-muted-foreground",children:c.plugin})})]},d))}),a.jsx(T,{title:"SonarLint Connected Mode (VS Code settings.json)",language:"json",code:`{
  "sonarlint.connectedMode.connections.sonarqube": [
    {
      "serverUrl": "https://sonarqube.apps.openshift.axa.com",
      "token": "\${env:SONAR_TOKEN}"
    }
  ],
  "sonarlint.connectedMode.project": {
    "connectionId": "axa-sonarqube",
    "projectKey": "my-application"
  },
  "sonarlint.pathToNodeExecutable": "/usr/local/bin/node",
  "sonarlint.rules": {
    "java:S1135": { "level": "on" },
    "typescript:S1135": { "level": "on" }
  }
}`}),a.jsx(T,{title:"SonarLint Connected Mode (IntelliJ)",language:"text",code:`1. Install SonarLint plugin from JetBrains Marketplace

2. Configure Connection:
   - Go to Settings → Tools → SonarLint
   - Click "+" to add connection
   - Select "SonarQube"
   - Enter URL: https://sonarqube.apps.openshift.axa.com
   - Generate token in SonarQube and paste it

3. Bind Project:
   - Right-click project in Project Explorer
   - SonarLint → Bind to SonarQube/SonarCloud
   - Select your connection
   - Select your project

4. Enable Connected Mode:
   - SonarLint will now sync rules from server
   - Issues will match exactly what CI/CD sees`}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ SonarLint Benefits"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Real-time feedback while coding"}),a.jsx("li",{children:"• Quick fixes for common issues"}),a.jsx("li",{children:"• Synced rules with SonarQube server"}),a.jsx("li",{children:"• Reduced CI/CD failures"}),a.jsx("li",{children:"• Educational issue descriptions"})]})]}),a.jsxs("div",{className:"p-5 rounded-xl bg-blue-500/5 border border-blue-500/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-blue-600 mb-2",children:"💡 Tips"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Use Connected Mode to match CI rules"}),a.jsx("li",{children:"• Configure token as env variable"}),a.jsx("li",{children:"• Enable auto-analysis on save"}),a.jsx("li",{children:"• Review issue descriptions to learn"}),a.jsx("li",{children:"• Use keyboard shortcuts for quick fixes"})]})]})]})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"jenkins-integration",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Jenkins Integration"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Automate code quality checks in your CI/CD pipeline."})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsx(T,{title:"Complete SonarQube Pipeline Integration",language:"groovy",code:`pipeline {
    agent any
    
    environment {
        SONAR_PROJECT_KEY = 'my-application'
        SONAR_PROJECT_NAME = 'My Application'
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean compile -B'
            }
        }
        
        stage('Test with Coverage') {
            steps {
                sh 'mvn test -B'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml'
                    jacoco(
                        execPattern: '**/target/jacoco.exec',
                        classPattern: '**/target/classes',
                        sourcePattern: '**/src/main/java'
                    )
                }
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                        mvn sonar:sonar \\
                            -Dsonar.projectKey=\${SONAR_PROJECT_KEY} \\
                            -Dsonar.projectName="\${SONAR_PROJECT_NAME}" \\
                            -Dsonar.projectVersion=\${BUILD_NUMBER} \\
                            -Dsonar.java.coveragePlugin=jacoco \\
                            -Dsonar.coverage.jacoco.xmlReportPaths=target/site/jacoco/jacoco.xml \\
                            -Dsonar.branch.name=\${BRANCH_NAME}
                    '''
                }
            }
        }
        
        stage('Quality Gate') {
            steps {
                timeout(time: 10, unit: 'MINUTES') {
                    script {
                        def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            // Detailed failure message
                            def conditions = qg.getProjectStatus().getConditions()
                            def failedConditions = conditions.findAll { it.getStatus() != 'OK' }
                            
                            def message = "Quality Gate Failed!\\n"
                            failedConditions.each { cond ->
                                message += "- \${cond.getMetricKey()}: \${cond.getActualValue()} (required: \${cond.getErrorThreshold()})\\n"
                            }
                            
                            error(message)
                        }
                        echo "Quality Gate Passed! All conditions met."
                    }
                }
            }
        }
    }
    
    post {
        always {
            // Archive SonarQube results link
            script {
                def sonarUrl = "\${env.SONAR_HOST_URL}/dashboard?id=\${SONAR_PROJECT_KEY}"
                currentBuild.description = "<a href='\${sonarUrl}'>SonarQube Report</a>"
            }
        }
    }
}`}),a.jsx(T,{title:"Pull Request Analysis (Branch Analysis)",language:"groovy",code:`stage('SonarQube PR Analysis') {
    when {
        changeRequest()
    }
    steps {
        withSonarQubeEnv('SonarQube') {
            sh '''
                mvn sonar:sonar \\
                    -Dsonar.projectKey=\${SONAR_PROJECT_KEY} \\
                    -Dsonar.pullrequest.key=\${CHANGE_ID} \\
                    -Dsonar.pullrequest.branch=\${CHANGE_BRANCH} \\
                    -Dsonar.pullrequest.base=\${CHANGE_TARGET} \\
                    -Dsonar.pullrequest.github.repository=your-org/your-repo
            '''
        }
    }
}

// For branch analysis (non-PR)
stage('SonarQube Branch Analysis') {
    when {
        not { changeRequest() }
    }
    steps {
        withSonarQubeEnv('SonarQube') {
            sh '''
                mvn sonar:sonar \\
                    -Dsonar.projectKey=\${SONAR_PROJECT_KEY} \\
                    -Dsonar.branch.name=\${BRANCH_NAME}
            '''
        }
    }
}`})]})]}),a.jsx(D,{}),a.jsxs("section",{id:"best-practices",className:"scroll-mt-28 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx(j,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),a.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Best Practices"}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Maximize code quality with these guidelines."})]}),a.jsx("div",{className:"grid gap-6",children:[{title:"Fix as You Code",icon:ls,color:"text-red-500",items:["Use SonarLint in your IDE for real-time feedback","Fix issues immediately rather than accumulating debt","Don't merge code that fails Quality Gate","Prioritize security vulnerabilities and bugs","Address code smells during refactoring"]},{title:"Test Coverage",icon:Ap,color:"text-emerald-500",items:["Maintain minimum 80% coverage on new code","Focus on meaningful tests, not just coverage numbers","Test edge cases and error conditions","Include integration tests for critical paths","Review coverage reports regularly"]},{title:"Security First",icon:ra,color:"text-amber-500",items:["Review all security hotspots immediately","Never ignore security vulnerabilities","Use secure coding patterns consistently","Keep dependencies updated","Follow OWASP guidelines"]},{title:"Technical Debt Management",icon:Wc,color:"text-purple-500",items:["Address new issues before merging","Allocate 20% of sprint time to debt reduction","Set debt reduction goals per release","Focus on high-impact areas first","Track debt trends over time"]}].map((c,d)=>a.jsxs(I,{className:"glass shadow-sm",children:[a.jsx(W,{children:a.jsxs(ee,{className:"text-lg flex items-center gap-2",children:[a.jsx(c.icon,{className:`h-5 w-5 ${c.color}`}),c.title]})}),a.jsx(Z,{children:a.jsx("ul",{className:"grid md:grid-cols-2 gap-2",children:c.items.map((y,E)=>a.jsxs("li",{className:"flex items-start gap-2 text-sm text-muted-foreground",children:[a.jsx(G,{className:"h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0"}),y]},E))})})]},d))}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ DO"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Run analysis on every PR"}),a.jsx("li",{children:"• Block merges on Quality Gate failure"}),a.jsx("li",{children:"• Use SonarLint connected mode"}),a.jsx("li",{children:"• Review reports regularly"}),a.jsx("li",{children:"• Set team quality goals"})]})]}),a.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[a.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ DON'T"}),a.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[a.jsx("li",{children:"• Disable Quality Gate for deadlines"}),a.jsx("li",{children:"• Ignore security vulnerabilities"}),a.jsx("li",{children:"• Add exclusions to hide issues"}),a.jsx("li",{children:'• Skip analysis for "small" changes'}),a.jsx("li",{children:"• Blame developers for legacy issues"})]})]})]})]}),a.jsx(Pl,{previous:{title:"Jenkins CI/CD",href:"/jenkins-guideline"},next:{title:"GitHub Workflow",href:"/github-axa-usage"}})]}),a.jsx("aside",{className:"hidden lg:block w-64 flex-shrink-0",children:a.jsxs("div",{className:"sticky top-28 space-y-4",children:[a.jsx("h4",{className:"font-bold text-sm text-muted-foreground uppercase tracking-wide",children:"On This Page"}),a.jsx("nav",{className:"space-y-1",children:qp.map(c=>a.jsxs("a",{href:`#${c.id}`,className:`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${m===c.id?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[a.jsx(c.icon,{className:"h-4 w-4"}),c.title]},c.id))})]})})]})]})},Gy=()=>{const[m]=Tg(),f=m.get("q")||"",[x,c]=R.useState([]);R.useEffect(()=>{if(f){const y=[{id:"1",title:"Clean Architecture Standards",excerpt:"Learn the fundamental patterns and naming conventions for building maintainable .NET applications...",category:"Architecture",href:"/clean-architecture"},{id:"2",title:"Global Coding Standards",excerpt:"Universal principles like SOLID, DRY, and Clean Code practices across all AII projects...",category:"Standards",href:"/coding-standard"},{id:"3",title:".NET Developer Guideline",excerpt:"Deep dive into .NET 8/9, MediatR, EF Core, and enterprise backend patterns...",category:".NET",href:"/dotnet-developer-guideline"},{id:"4",title:"GitHub Workflow & PRs",excerpt:"Branching strategy (GitFlow), commit messages, and automated quality gates...",category:"Workflow",href:"/github-axa-usage"},{id:"5",title:"React Frontend Standards",excerpt:"Modern React patterns, state management, and component architecture guidelines...",category:"Frontend",href:"/react-developer-guideline"},{id:"6",title:"Python & AI Guidelines",excerpt:"FastAPI, Pydantic, and AI integration best practices for data science projects...",category:"Python",href:"/python-developer-guideline"},{id:"7",title:"Java Spring Boot Standards",excerpt:"Enterprise Java patterns and Spring Boot best practices at AII...",category:"Java",href:"/java-developer-guideline"},{id:"8",title:"Flutter Mobile Design",excerpt:"Cross-platform mobile development with Flutter, Dart, and efficient state management...",category:"Mobile",href:"/flutter-developer-guideline"}].filter(E=>E.title.toLowerCase().includes(f.toLowerCase())||E.excerpt.toLowerCase().includes(f.toLowerCase())||E.category.toLowerCase().includes(f.toLowerCase()));c(y)}},[f]);const d=[{label:"Home",href:"/"},{label:"Search Results"}];return a.jsxs(mt,{children:[a.jsx(Tt,{title:`Search Results for "${f}"`,subtitle:x.length>0?`Found ${x.length} matches for your search.`:"We couldn't find any documents matching your search.",breadcrumbs:d}),a.jsx("div",{className:"py-12 px-4",children:a.jsx("div",{className:"space-y-6",children:x.length>0?x.map(y=>a.jsx(Le,{to:y.href,className:"block group",children:a.jsx(I,{className:"transition-all hover:border-primary/50 hover:shadow-md group-hover:-translate-y-1",children:a.jsxs(W,{className:"flex flex-row items-center gap-4 space-y-0",children:[a.jsx("div",{className:"bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors",children:a.jsx(xo,{className:"h-5 w-5"})}),a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-center justify-between mb-1",children:[a.jsx(ee,{className:"text-xl group-hover:text-primary transition-colors",children:y.title}),a.jsx(j,{variant:"secondary",children:y.category})]}),a.jsx("p",{className:"text-muted-foreground line-clamp-2",children:y.excerpt})]}),a.jsx(Kl,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"})]})})},y.id)):a.jsxs("div",{className:"text-center py-20 bg-muted/20 rounded-2xl border-2 border-dashed",children:[a.jsx(wn,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50"}),a.jsx("h3",{className:"text-xl font-bold mb-2",children:"No results found"}),a.jsx("p",{className:"text-muted-foreground mb-6",children:"Try searching for different keywords or browse our guides."}),a.jsx(xe,{asChild:!0,variant:"outline",children:a.jsx(Le,{to:"/dotnet-developer-guideline",children:"Browse documentation"})})]})})})]})};function Vy(){const{pathname:m}=Dn();return R.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[m]),null}const Qy=1,Iy=1e6;let so=0;function Yy(){return so=(so+1)%Number.MAX_SAFE_INTEGER,so.toString()}const lo=new Map,Hp=m=>{if(lo.has(m))return;const f=setTimeout(()=>{lo.delete(m),Xl({type:"REMOVE_TOAST",toastId:m})},Iy);lo.set(m,f)},Xy=(m,f)=>{switch(f.type){case"ADD_TOAST":return{...m,toasts:[f.toast,...m.toasts].slice(0,Qy)};case"UPDATE_TOAST":return{...m,toasts:m.toasts.map(x=>x.id===f.toast.id?{...x,...f.toast}:x)};case"DISMISS_TOAST":{const{toastId:x}=f;return x?Hp(x):m.toasts.forEach(c=>{Hp(c.id)}),{...m,toasts:m.toasts.map(c=>c.id===x||x===void 0?{...c,open:!1}:c)}}case"REMOVE_TOAST":return f.toastId===void 0?{...m,toasts:[]}:{...m,toasts:m.toasts.filter(x=>x.id!==f.toastId)}}},bn=[];let jn={toasts:[]};function Xl(m){jn=Xy(jn,m),bn.forEach(f=>{f(jn)})}function Jy({...m}){const f=Yy(),x=d=>Xl({type:"UPDATE_TOAST",toast:{...d,id:f}}),c=()=>Xl({type:"DISMISS_TOAST",toastId:f});return Xl({type:"ADD_TOAST",toast:{...m,id:f,open:!0,onOpenChange:d=>{d||c()}}}),{id:f,dismiss:c,update:x}}function Ky(){const[m,f]=R.useState(jn);return R.useEffect(()=>(bn.push(f),()=>{const x=bn.indexOf(f);x>-1&&bn.splice(x,1)}),[m]),{...m,toast:Jy,dismiss:x=>Xl({type:"DISMISS_TOAST",toastId:x})}}const Py=Yg,wx=R.forwardRef(({className:m,...f},x)=>a.jsx(ox,{ref:x,className:L("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",m),...f}));wx.displayName=ox.displayName;const Zy=Un("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Tx=R.forwardRef(({className:m,variant:f,...x},c)=>a.jsx(dx,{ref:c,className:L(Zy({variant:f}),m),...x}));Tx.displayName=dx.displayName;const Fy=R.forwardRef(({className:m,...f},x)=>a.jsx(ux,{ref:x,className:L("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",m),...f}));Fy.displayName=ux.displayName;const Ex=R.forwardRef(({className:m,...f},x)=>a.jsx(mx,{ref:x,className:L("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",m),"toast-close":"",...f,children:a.jsx(Gp,{className:"h-4 w-4"})}));Ex.displayName=mx.displayName;const Dx=R.forwardRef(({className:m,...f},x)=>a.jsx(px,{ref:x,className:L("text-sm font-semibold [&+div]:text-xs",m),...f}));Dx.displayName=px.displayName;const Rx=R.forwardRef(({className:m,...f},x)=>a.jsx(xx,{ref:x,className:L("text-sm opacity-90",m),...f}));Rx.displayName=xx.displayName;function $y(){const{toasts:m}=Ky();return a.jsxs(Py,{children:[m.map(function({id:f,title:x,description:c,action:d,...y}){return a.jsxs(Tx,{...y,children:[a.jsxs("div",{className:"grid gap-1",children:[x&&a.jsx(Dx,{children:x}),c&&a.jsx(Rx,{children:c})]}),d,a.jsx(Ex,{})]},f)}),a.jsx(wx,{})]})}function Wy(){const[m,f]=R.useState(!1);return R.useEffect(()=>{const x=d=>{if((d.ctrlKey||d.metaKey)&&d.key==="k"){d.preventDefault();const y=document.querySelector('input[placeholder*="Search"]');y&&(y.focus(),y.select())}d.key==="Escape"&&m&&f(!1)},c=d=>{var z;const E=d.target.closest("a");if(E&&((z=E.getAttribute("href"))!=null&&z.startsWith("#"))){d.preventDefault();const U=E.getAttribute("href").substring(1),Re=document.getElementById(U);if(Re){const k=Re.offsetTop-64-20;window.scrollTo({top:Math.max(0,k),behavior:"smooth"})}}};return document.addEventListener("keydown",x),document.addEventListener("click",c),()=>{document.removeEventListener("keydown",x),document.removeEventListener("click",c)}},[m]),a.jsxs(ay,{children:[a.jsxs(Eg,{basename:"/aii/developer-guideline/",children:[a.jsx(Vy,{}),a.jsxs(Dg,{children:[a.jsx(ot,{path:"/",element:a.jsx(Cy,{})}),a.jsx(ot,{path:"/dotnet-developer-guideline",element:a.jsx(wy,{})}),a.jsx(ot,{path:"/react-developer-guideline",element:a.jsx(Ey,{})}),a.jsx(ot,{path:"/java-developer-guideline",element:a.jsx(Dy,{})}),a.jsx(ot,{path:"/python-developer-guideline",element:a.jsx(Ry,{})}),a.jsx(ot,{path:"/flutter-developer-guideline",element:a.jsx(_y,{})}),a.jsx(ot,{path:"/clean-architecture",element:a.jsx(Uy,{})}),a.jsx(ot,{path:"/coding-standard",element:a.jsx(Oy,{})}),a.jsx(ot,{path:"/github-axa-usage",element:a.jsx(ky,{})}),a.jsx(ot,{path:"/openshift-guideline",element:a.jsx(zy,{})}),a.jsx(ot,{path:"/jenkins-guideline",element:a.jsx(Hy,{})}),a.jsx(ot,{path:"/sonarqube-guideline",element:a.jsx(Ly,{})}),a.jsx(ot,{path:"/search",element:a.jsx(Gy,{})})]})]}),a.jsx($y,{})]})}const ev=Wg.createRoot(document.getElementById("root"));ev.render(a.jsx(bo.StrictMode,{children:a.jsx(Wy,{})}));
