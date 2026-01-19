function bp(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(n,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function Wo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var la={exports:{}},Tr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc;function Wg(){if(jc)return Tr;jc=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,i,a){var o=null;if(a!==void 0&&(o=""+a),i.key!==void 0&&(o=""+i.key),"key"in i){a={};for(var l in i)l!=="key"&&(a[l]=i[l])}else a=i;return i=a.ref,{$$typeof:e,type:n,key:o,ref:i!==void 0?i:null,props:a}}return Tr.Fragment=t,Tr.jsx=r,Tr.jsxs=r,Tr}var Nc;function Gg(){return Nc||(Nc=1,la.exports=Wg()),la.exports}var s=Gg(),ca={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wc;function qg(){if(wc)return le;wc=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.consumer"),o=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),h=Symbol.iterator;function f(T){return T===null||typeof T!="object"?null:(T=h&&T[h]||T["@@iterator"],typeof T=="function"?T:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,y={};function v(T,M,H){this.props=T,this.context=M,this.refs=y,this.updater=H||g}v.prototype.isReactComponent={},v.prototype.setState=function(T,M){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,M,"setState")},v.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function b(){}b.prototype=v.prototype;function N(T,M,H){this.props=T,this.context=M,this.refs=y,this.updater=H||g}var S=N.prototype=new b;S.constructor=N,x(S,v.prototype),S.isPureReactComponent=!0;var E=Array.isArray;function A(){}var j={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function _(T,M,H){var z=H.ref;return{$$typeof:e,type:T,key:M,ref:z!==void 0?z:null,props:H}}function I(T,M){return _(T.type,M,T.props)}function $(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function Y(T){var M={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(H){return M[H]})}var ie=/\/+/g;function V(T,M){return typeof T=="object"&&T!==null&&T.key!=null?Y(""+T.key):M.toString(36)}function re(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(A,A):(T.status="pending",T.then(function(M){T.status==="pending"&&(T.status="fulfilled",T.value=M)},function(M){T.status==="pending"&&(T.status="rejected",T.reason=M)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function Z(T,M,H,z,ne){var de=typeof T;(de==="undefined"||de==="boolean")&&(T=null);var te=!1;if(T===null)te=!0;else switch(de){case"bigint":case"string":case"number":te=!0;break;case"object":switch(T.$$typeof){case e:case t:te=!0;break;case u:return te=T._init,Z(te(T._payload),M,H,z,ne)}}if(te)return ne=ne(T),te=z===""?"."+V(T,0):z,E(ne)?(H="",te!=null&&(H=te.replace(ie,"$&/")+"/"),Z(ne,M,H,"",function(wt){return wt})):ne!=null&&($(ne)&&(ne=I(ne,H+(ne.key==null||T&&T.key===ne.key?"":(""+ne.key).replace(ie,"$&/")+"/")+te)),M.push(ne)),1;te=0;var Fe=z===""?".":z+":";if(E(T))for(var Pe=0;Pe<T.length;Pe++)z=T[Pe],de=Fe+V(z,Pe),te+=Z(z,M,H,de,ne);else if(Pe=f(T),typeof Pe=="function")for(T=Pe.call(T),Pe=0;!(z=T.next()).done;)z=z.value,de=Fe+V(z,Pe++),te+=Z(z,M,H,de,ne);else if(de==="object"){if(typeof T.then=="function")return Z(re(T),M,H,z,ne);throw M=String(T),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return te}function J(T,M,H){if(T==null)return T;var z=[],ne=0;return Z(T,z,"","",function(de){return M.call(H,de,ne++)}),z}function D(T){if(T._status===-1){var M=T._result;M=M(),M.then(function(H){(T._status===0||T._status===-1)&&(T._status=1,T._result=H)},function(H){(T._status===0||T._status===-1)&&(T._status=2,T._result=H)}),T._status===-1&&(T._status=0,T._result=M)}if(T._status===1)return T._result.default;throw T._result}var pe=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},Te={map:J,forEach:function(T,M,H){J(T,function(){M.apply(this,arguments)},H)},count:function(T){var M=0;return J(T,function(){M++}),M},toArray:function(T){return J(T,function(M){return M})||[]},only:function(T){if(!$(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return le.Activity=p,le.Children=Te,le.Component=v,le.Fragment=r,le.Profiler=i,le.PureComponent=N,le.StrictMode=n,le.Suspense=c,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,le.__COMPILER_RUNTIME={__proto__:null,c:function(T){return j.H.useMemoCache(T)}},le.cache=function(T){return function(){return T.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(T,M,H){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var z=x({},T.props),ne=T.key;if(M!=null)for(de in M.key!==void 0&&(ne=""+M.key),M)!C.call(M,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&M.ref===void 0||(z[de]=M[de]);var de=arguments.length-2;if(de===1)z.children=H;else if(1<de){for(var te=Array(de),Fe=0;Fe<de;Fe++)te[Fe]=arguments[Fe+2];z.children=te}return _(T.type,ne,z)},le.createContext=function(T){return T={$$typeof:o,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:a,_context:T},T},le.createElement=function(T,M,H){var z,ne={},de=null;if(M!=null)for(z in M.key!==void 0&&(de=""+M.key),M)C.call(M,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(ne[z]=M[z]);var te=arguments.length-2;if(te===1)ne.children=H;else if(1<te){for(var Fe=Array(te),Pe=0;Pe<te;Pe++)Fe[Pe]=arguments[Pe+2];ne.children=Fe}if(T&&T.defaultProps)for(z in te=T.defaultProps,te)ne[z]===void 0&&(ne[z]=te[z]);return _(T,de,ne)},le.createRef=function(){return{current:null}},le.forwardRef=function(T){return{$$typeof:l,render:T}},le.isValidElement=$,le.lazy=function(T){return{$$typeof:u,_payload:{_status:-1,_result:T},_init:D}},le.memo=function(T,M){return{$$typeof:d,type:T,compare:M===void 0?null:M}},le.startTransition=function(T){var M=j.T,H={};j.T=H;try{var z=T(),ne=j.S;ne!==null&&ne(H,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(A,pe)}catch(de){pe(de)}finally{M!==null&&H.types!==null&&(M.types=H.types),j.T=M}},le.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},le.use=function(T){return j.H.use(T)},le.useActionState=function(T,M,H){return j.H.useActionState(T,M,H)},le.useCallback=function(T,M){return j.H.useCallback(T,M)},le.useContext=function(T){return j.H.useContext(T)},le.useDebugValue=function(){},le.useDeferredValue=function(T,M){return j.H.useDeferredValue(T,M)},le.useEffect=function(T,M){return j.H.useEffect(T,M)},le.useEffectEvent=function(T){return j.H.useEffectEvent(T)},le.useId=function(){return j.H.useId()},le.useImperativeHandle=function(T,M,H){return j.H.useImperativeHandle(T,M,H)},le.useInsertionEffect=function(T,M){return j.H.useInsertionEffect(T,M)},le.useLayoutEffect=function(T,M){return j.H.useLayoutEffect(T,M)},le.useMemo=function(T,M){return j.H.useMemo(T,M)},le.useOptimistic=function(T,M){return j.H.useOptimistic(T,M)},le.useReducer=function(T,M,H){return j.H.useReducer(T,M,H)},le.useRef=function(T){return j.H.useRef(T)},le.useState=function(T){return j.H.useState(T)},le.useSyncExternalStore=function(T,M,H){return j.H.useSyncExternalStore(T,M,H)},le.useTransition=function(){return j.H.useTransition()},le.version="19.2.3",le}var Sc;function jp(){return Sc||(Sc=1,ca.exports=qg()),ca.exports}var m=jp();const Je=Wo(m),wi=bp({__proto__:null,default:Je},[m]);var da={exports:{}},ua,Cc;function Kg(){if(Cc)return ua;Cc=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ua=e,ua}var pa,Tc;function Yg(){if(Tc)return pa;Tc=1;var e=Kg();function t(){}function r(){}return r.resetWarningCache=t,pa=function(){function n(o,l,c,d,u,p){if(p!==e){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}n.isRequired=n;function i(){return n}var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return a.PropTypes=a,a},pa}var Ec;function Xg(){return Ec||(Ec=1,da.exports=Yg()()),da.exports}var Jg=Xg();const ge=Wo(Jg);function Qg(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Qa(e,t)}function Qa(e,t){return Qa=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r},Qa(e,t)}var Be={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},Zg={rel:["amphtml","canonical","alternate"]},ey={type:["application/ld+json"]},ty={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]};Object.keys(Be).map(function(e){return Be[e]});var Zn={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"};Object.keys(Zn).reduce(function(e,t){return e[Zn[t]]=t,e},{});var sy=function(e){return Array.isArray(e)?e.join(""):e},ma=function(e,t){return Array.isArray(e)?e.reduce(function(r,n){return(function(i,a){for(var o=Object.keys(i),l=0;l<o.length;l+=1)if(a[o[l]]&&a[o[l]].includes(i[o[l]]))return!0;return!1})(n,t)?r.priority.push(n):r.default.push(n),r},{priority:[],default:[]}):{default:e}},ry=[Be.NOSCRIPT,Be.SCRIPT,Be.STYLE],ha=function(e,t){return t===void 0&&(t=!0),t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Rc=function(e){return Object.keys(e).reduce(function(t,r){var n=e[r]!==void 0?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},kc=function(e,t){return t===void 0&&(t={}),Object.keys(e).reduce(function(r,n){return r[Zn[n]||n]=e[n],r},t)},Fn=function(e,t){return t.map(function(r,n){var i,a=((i={key:n})["data-rh"]=!0,i);return Object.keys(r).forEach(function(o){var l=Zn[o]||o;l==="innerHTML"||l==="cssText"?a.dangerouslySetInnerHTML={__html:r.innerHTML||r.cssText}:a[l]=r[o]}),Je.createElement(e,a)})},xt=function(e,t,r){switch(e){case Be.TITLE:return{toComponent:function(){return i=t.titleAttributes,(a={key:n=t.title})["data-rh"]=!0,o=kc(i,a),[Je.createElement(Be.TITLE,o,n)];var n,i,a,o},toString:function(){return(function(n,i,a,o){var l=Rc(a),c=sy(i);return l?"<"+n+' data-rh="true" '+l+">"+ha(c,o)+"</"+n+">":"<"+n+' data-rh="true">'+ha(c,o)+"</"+n+">"})(e,t.title,t.titleAttributes,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return kc(t)},toString:function(){return Rc(t)}};default:return{toComponent:function(){return Fn(e,t)},toString:function(){return(function(n,i,a){return i.reduce(function(o,l){var c=Object.keys(l).filter(function(p){return!(p==="innerHTML"||p==="cssText")}).reduce(function(p,h){var f=l[h]===void 0?h:h+'="'+ha(l[h],a)+'"';return p?p+" "+f:f},""),d=l.innerHTML||l.cssText||"",u=ry.indexOf(n)===-1;return o+"<"+n+' data-rh="true" '+c+(u?"/>":">"+d+"</"+n+">")},"")})(e,t,r)}}}},ny=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.noscriptTags,o=e.styleTags,l=e.title,c=l===void 0?"":l,d=e.titleAttributes,u=e.linkTags,p=e.metaTags,h=e.scriptTags,f={toComponent:function(){},toString:function(){return""}};if(e.prioritizeSeoTags){var g=(function(x){var y=x.linkTags,v=x.scriptTags,b=x.encode,N=ma(x.metaTags,ty),S=ma(y,Zg),E=ma(v,ey);return{priorityMethods:{toComponent:function(){return[].concat(Fn(Be.META,N.priority),Fn(Be.LINK,S.priority),Fn(Be.SCRIPT,E.priority))},toString:function(){return xt(Be.META,N.priority,b)+" "+xt(Be.LINK,S.priority,b)+" "+xt(Be.SCRIPT,E.priority,b)}},metaTags:N.default,linkTags:S.default,scriptTags:E.default}})(e);f=g.priorityMethods,u=g.linkTags,p=g.metaTags,h=g.scriptTags}return{priority:f,base:xt(Be.BASE,t,n),bodyAttributes:xt("bodyAttributes",r,n),htmlAttributes:xt("htmlAttributes",i,n),link:xt(Be.LINK,u,n),meta:xt(Be.META,p,n),noscript:xt(Be.NOSCRIPT,a,n),script:xt(Be.SCRIPT,h,n),style:xt(Be.STYLE,o,n),title:xt(Be.TITLE,{title:c,titleAttributes:d},n)}},Nn=[],iy=function(e,t){var r=this;t===void 0&&(t=typeof document<"u"),this.instances=[],this.value={setHelmet:function(n){r.context.helmet=n},helmetInstances:{get:function(){return r.canUseDOM?Nn:r.instances},add:function(n){(r.canUseDOM?Nn:r.instances).push(n)},remove:function(n){var i=(r.canUseDOM?Nn:r.instances).indexOf(n);(r.canUseDOM?Nn:r.instances).splice(i,1)}}},this.context=e,this.canUseDOM=t,t||(e.helmet=ny({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},ay=Je.createContext({}),oy=ge.shape({setHelmet:ge.func,helmetInstances:ge.shape({get:ge.func,add:ge.func,remove:ge.func})}),ly=typeof document<"u",_r=(function(e){function t(r){var n;return(n=e.call(this,r)||this).helmetData=new iy(n.props.context,t.canUseDOM),n}return Qg(t,e),t.prototype.render=function(){return Je.createElement(ay.Provider,{value:this.helmetData.value},this.props.children)},t})(m.Component);_r.canUseDOM=ly,_r.propTypes={context:ge.shape({helmet:ge.shape()}),children:ge.node.isRequired},_r.defaultProps={context:{}},_r.displayName="HelmetProvider";oy.isRequired;ge.object,ge.object,ge.oneOfType([ge.arrayOf(ge.node),ge.node]),ge.string,ge.bool,ge.bool,ge.object,ge.arrayOf(ge.object),ge.arrayOf(ge.object),ge.arrayOf(ge.object),ge.func,ge.arrayOf(ge.object),ge.arrayOf(ge.object),ge.string,ge.object,ge.string,ge.bool,ge.object;var fa={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc;function cy(){if(Pc)return tt;Pc=1;var e=jp();function t(c){var d="https://react.dev/errors/"+c;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var u=2;u<arguments.length;u++)d+="&args[]="+encodeURIComponent(arguments[u])}return"Minified React error #"+c+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var n={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},i=Symbol.for("react.portal");function a(c,d,u){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:i,key:p==null?null:""+p,children:c,containerInfo:d,implementation:u}}var o=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(c,d){if(c==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,tt.createPortal=function(c,d){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return a(c,d,null,u)},tt.flushSync=function(c){var d=o.T,u=n.p;try{if(o.T=null,n.p=2,c)return c()}finally{o.T=d,n.p=u,n.d.f()}},tt.preconnect=function(c,d){typeof c=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,n.d.C(c,d))},tt.prefetchDNS=function(c){typeof c=="string"&&n.d.D(c)},tt.preinit=function(c,d){if(typeof c=="string"&&d&&typeof d.as=="string"){var u=d.as,p=l(u,d.crossOrigin),h=typeof d.integrity=="string"?d.integrity:void 0,f=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;u==="style"?n.d.S(c,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:p,integrity:h,fetchPriority:f}):u==="script"&&n.d.X(c,{crossOrigin:p,integrity:h,fetchPriority:f,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},tt.preinitModule=function(c,d){if(typeof c=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var u=l(d.as,d.crossOrigin);n.d.M(c,{crossOrigin:u,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&n.d.M(c)},tt.preload=function(c,d){if(typeof c=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var u=d.as,p=l(u,d.crossOrigin);n.d.L(c,u,{crossOrigin:p,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},tt.preloadModule=function(c,d){if(typeof c=="string")if(d){var u=l(d.as,d.crossOrigin);n.d.m(c,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:u,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else n.d.m(c)},tt.requestFormReset=function(c){n.d.r(c)},tt.unstable_batchedUpdates=function(c,d){return c(d)},tt.useFormState=function(c,d,u){return o.H.useFormState(c,d,u)},tt.useFormStatus=function(){return o.H.useHostTransitionStatus()},tt.version="19.2.3",tt}var Ac;function dy(){if(Ac)return fa.exports;Ac=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),fa.exports=cy(),fa.exports}var en=dy();const Np=Wo(en),wp=bp({__proto__:null,default:Np},[en]);/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ae(){return Ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ae.apply(this,arguments)}var Ue;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ue||(Ue={}));const Dc="popstate";function uy(e){e===void 0&&(e={});function t(n,i){let{pathname:a,search:o,hash:l}=n.location;return Hr("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:Os(i)}return my(t,r,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Is(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function py(){return Math.random().toString(36).substr(2,8)}function _c(e,t){return{usr:e.state,key:e.key,idx:t}}function Hr(e,t,r,n){return r===void 0&&(r=null),Ae({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gs(t):t,{state:r,key:t&&t.key||n||py()})}function Os(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function gs(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function my(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:a=!1}=n,o=i.history,l=Ue.Pop,c=null,d=u();d==null&&(d=0,o.replaceState(Ae({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function p(){l=Ue.Pop;let y=u(),v=y==null?null:y-d;d=y,c&&c({action:l,location:x.location,delta:v})}function h(y,v){l=Ue.Push;let b=Hr(x.location,y,v);d=u()+1;let N=_c(b,d),S=x.createHref(b);try{o.pushState(N,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}a&&c&&c({action:l,location:x.location,delta:1})}function f(y,v){l=Ue.Replace;let b=Hr(x.location,y,v);d=u();let N=_c(b,d),S=x.createHref(b);o.replaceState(N,"",S),a&&c&&c({action:l,location:x.location,delta:0})}function g(y){let v=i.location.origin!=="null"?i.location.origin:i.location.href,b=typeof y=="string"?y:Os(y);return b=b.replace(/ $/,"%20"),xe(v,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,v)}let x={get action(){return l},get location(){return e(i,o)},listen(y){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Dc,p),c=y,()=>{i.removeEventListener(Dc,p),c=null}},createHref(y){return t(i,y)},createURL:g,encodeLocation(y){let v=g(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:f,go(y){return o.go(y)}};return x}var Ee;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ee||(Ee={}));const hy=new Set(["lazy","caseSensitive","path","id","index","children"]);function fy(e){return e.index===!0}function ei(e,t,r,n){return r===void 0&&(r=[]),n===void 0&&(n={}),e.map((i,a)=>{let o=[...r,String(a)],l=typeof i.id=="string"?i.id:o.join("-");if(xe(i.index!==!0||!i.children,"Cannot specify children on an index route"),xe(!n[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),fy(i)){let c=Ae({},i,t(i),{id:l});return n[l]=c,c}else{let c=Ae({},i,t(i),{id:l,children:void 0});return n[l]=c,i.children&&(c.children=ei(i.children,t,o,n)),c}})}function us(e,t,r){return r===void 0&&(r="/"),Vn(e,t,r,!1)}function Vn(e,t,r,n){let i=typeof t=="string"?gs(t):t,a=Qt(i.pathname||"/",r);if(a==null)return null;let o=Sp(e);gy(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let d=Ry(a);l=Ty(o[c],d,n)}return l}function xy(e,t){let{route:r,pathname:n,params:i}=e;return{id:r.id,pathname:n,params:i,data:t[r.id],handle:r.handle}}function Sp(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(xe(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=Yt([n,c.relativePath]),u=r.concat(c);a.children&&a.children.length>0&&(xe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Sp(a.children,t,u,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Sy(d,a.index),routesMeta:u})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let c of Cp(a.path))i(a,o,c)}),t}function Cp(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return i?[a,""]:[a];let o=Cp(n.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),i&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function gy(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Cy(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const yy=/^:[\w-]+$/,vy=3,by=2,jy=1,Ny=10,wy=-2,Mc=e=>e==="*";function Sy(e,t){let r=e.split("/"),n=r.length;return r.some(Mc)&&(n+=wy),t&&(n+=by),r.filter(i=>!Mc(i)).reduce((i,a)=>i+(yy.test(a)?vy:a===""?jy:Ny),n)}function Cy(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function Ty(e,t,r){r===void 0&&(r=!1);let{routesMeta:n}=e,i={},a="/",o=[];for(let l=0;l<n.length;++l){let c=n[l],d=l===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",p=ti({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),h=c.route;if(!p&&d&&r&&!n[n.length-1].route.index&&(p=ti({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},u)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Yt([a,p.pathname]),pathnameBase:Dy(Yt([a,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(a=Yt([a,p.pathnameBase]))}return o}function ti(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Ey(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((d,u,p)=>{let{paramName:h,isOptional:f}=u;if(h==="*"){let x=l[p]||"";o=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const g=l[p];return f&&!g?d[h]=void 0:d[h]=(g||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:o,pattern:e}}function Ey(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Is(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function Ry(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Is(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const ky=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Py=e=>ky.test(e);function Ay(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?gs(e):e,a;if(r)if(Py(r))a=r;else{if(r.includes("//")){let o=r;r=r.replace(/\/\/+/g,"/"),Is(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+r))}r.startsWith("/")?a=Ic(r.substring(1),"/"):a=Ic(r,t)}else a=t;return{pathname:a,search:_y(n),hash:My(i)}}function Ic(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function xa(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Go(e,t){let r=Tp(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function qo(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=gs(e):(i=Ae({},e),xe(!i.pathname||!i.pathname.includes("?"),xa("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),xa("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),xa("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(o==null)l=r;else{let p=t.length-1;if(!n&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}l=p>=0?t[p]:"/"}let c=Ay(i,l),d=o&&o!=="/"&&o.endsWith("/"),u=(a||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Yt=e=>e.join("/").replace(/\/\/+/g,"/"),Dy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_y=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,My=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class si{constructor(t,r,n,i){i===void 0&&(i=!1),this.status=t,this.statusText=r||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function zr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ep=["post","put","patch","delete"],Iy=new Set(Ep),Oy=["get",...Ep],Ly=new Set(Oy),Fy=new Set([301,302,303,307,308]),Vy=new Set([307,308]),ga={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},By={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Er={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ko=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Uy=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Rp="remix-router-transitions";function $y(e){const t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",n=!r;xe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let w=e.detectErrorBoundary;i=R=>({hasErrorBoundary:w(R)})}else i=Uy;let a={},o=ei(e.routes,i,void 0,a),l,c=e.basename||"/",d=e.dataStrategy||Gy,u=e.patchRoutesOnNavigation,p=Ae({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),h=null,f=new Set,g=null,x=null,y=null,v=e.hydrationData!=null,b=us(o,e.history.location,c),N=!1,S=null;if(b==null&&!u){let w=it(404,{pathname:e.history.location.pathname}),{matches:R,route:P}=Gc(o);b=R,S={[P.id]:w}}b&&!e.hydrationData&&yn(b,o,e.history.location.pathname).active&&(b=null);let E;if(b)if(b.some(w=>w.route.lazy))E=!1;else if(!b.some(w=>w.route.loader))E=!0;else if(p.v7_partialHydration){let w=e.hydrationData?e.hydrationData.loaderData:null,R=e.hydrationData?e.hydrationData.errors:null;if(R){let P=b.findIndex(L=>R[L.route.id]!==void 0);E=b.slice(0,P+1).every(L=>!eo(L.route,w,R))}else E=b.every(P=>!eo(P.route,w,R))}else E=e.hydrationData!=null;else if(E=!1,b=[],p.v7_partialHydration){let w=yn(null,o,e.history.location.pathname);w.active&&w.matches&&(N=!0,b=w.matches)}let A,j={historyAction:e.history.action,location:e.history.location,matches:b,initialized:E,navigation:ga,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||S,fetchers:new Map,blockers:new Map},C=Ue.Pop,_=!1,I,$=!1,Y=new Map,ie=null,V=!1,re=!1,Z=[],J=new Set,D=new Map,pe=0,Te=-1,T=new Map,M=new Set,H=new Map,z=new Map,ne=new Set,de=new Map,te=new Map,Fe;function Pe(){if(h=e.history.listen(w=>{let{action:R,location:P,delta:L}=w;if(Fe){Fe(),Fe=void 0;return}Is(te.size===0||L!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let U=gc({currentLocation:j.location,nextLocation:P,historyAction:R});if(U&&L!=null){let se=new Promise(oe=>{Fe=oe});e.history.go(L*-1),gn(U,{state:"blocked",location:P,proceed(){gn(U,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),se.then(()=>e.history.go(L))},reset(){let oe=new Map(j.blockers);oe.set(U,Er),De({blockers:oe})}});return}return Wt(R,P)}),r){av(t,Y);let w=()=>ov(t,Y);t.addEventListener("pagehide",w),ie=()=>t.removeEventListener("pagehide",w)}return j.initialized||Wt(Ue.Pop,j.location,{initialHydration:!0}),A}function wt(){h&&h(),ie&&ie(),f.clear(),I&&I.abort(),j.fetchers.forEach((w,R)=>xn(R)),j.blockers.forEach((w,R)=>xc(R))}function rs(w){return f.add(w),()=>f.delete(w)}function De(w,R){R===void 0&&(R={}),j=Ae({},j,w);let P=[],L=[];p.v7_fetcherPersist&&j.fetchers.forEach((U,se)=>{U.state==="idle"&&(ne.has(se)?L.push(se):P.push(se))}),ne.forEach(U=>{!j.fetchers.has(U)&&!D.has(U)&&L.push(U)}),[...f].forEach(U=>U(j,{deletedFetchers:L,viewTransitionOpts:R.viewTransitionOpts,flushSync:R.flushSync===!0})),p.v7_fetcherPersist?(P.forEach(U=>j.fetchers.delete(U)),L.forEach(U=>xn(U))):L.forEach(U=>ne.delete(U))}function ft(w,R,P){var L,U;let{flushSync:se}=P===void 0?{}:P,oe=j.actionData!=null&&j.navigation.formMethod!=null&&Tt(j.navigation.formMethod)&&j.navigation.state==="loading"&&((L=w.state)==null?void 0:L._isRedirect)!==!0,X;R.actionData?Object.keys(R.actionData).length>0?X=R.actionData:X=null:oe?X=j.actionData:X=null;let Q=R.loaderData?zc(j.loaderData,R.loaderData,R.matches||[],R.errors):j.loaderData,G=j.blockers;G.size>0&&(G=new Map(G),G.forEach((ve,et)=>G.set(et,Er)));let ee=_===!0||j.navigation.formMethod!=null&&Tt(j.navigation.formMethod)&&((U=w.state)==null?void 0:U._isRedirect)!==!0;l&&(o=l,l=void 0),V||C===Ue.Pop||(C===Ue.Push?e.history.push(w,w.state):C===Ue.Replace&&e.history.replace(w,w.state));let ue;if(C===Ue.Pop){let ve=Y.get(j.location.pathname);ve&&ve.has(w.pathname)?ue={currentLocation:j.location,nextLocation:w}:Y.has(w.pathname)&&(ue={currentLocation:w,nextLocation:j.location})}else if($){let ve=Y.get(j.location.pathname);ve?ve.add(w.pathname):(ve=new Set([w.pathname]),Y.set(j.location.pathname,ve)),ue={currentLocation:j.location,nextLocation:w}}De(Ae({},R,{actionData:X,loaderData:Q,historyAction:C,location:w,initialized:!0,navigation:ga,revalidation:"idle",restoreScrollPosition:vc(w,R.matches||j.matches),preventScrollReset:ee,blockers:G}),{viewTransitionOpts:ue,flushSync:se===!0}),C=Ue.Pop,_=!1,$=!1,V=!1,re=!1,Z=[]}async function jr(w,R){if(typeof w=="number"){e.history.go(w);return}let P=Za(j.location,j.matches,c,p.v7_prependBasename,w,p.v7_relativeSplatPath,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:L,submission:U,error:se}=Oc(p.v7_normalizeFormMethod,!1,P,R),oe=j.location,X=Hr(j.location,L,R&&R.state);X=Ae({},X,e.history.encodeLocation(X));let Q=R&&R.replace!=null?R.replace:void 0,G=Ue.Push;Q===!0?G=Ue.Replace:Q===!1||U!=null&&Tt(U.formMethod)&&U.formAction===j.location.pathname+j.location.search&&(G=Ue.Replace);let ee=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,ue=(R&&R.flushSync)===!0,ve=gc({currentLocation:oe,nextLocation:X,historyAction:G});if(ve){gn(ve,{state:"blocked",location:X,proceed(){gn(ve,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),jr(w,R)},reset(){let et=new Map(j.blockers);et.set(ve,Er),De({blockers:et})}});return}return await Wt(G,X,{submission:U,pendingError:se,preventScrollReset:ee,replace:R&&R.replace,enableViewTransition:R&&R.viewTransition,flushSync:ue})}function ta(){if(na(),De({revalidation:"loading"}),j.navigation.state!=="submitting"){if(j.navigation.state==="idle"){Wt(j.historyAction,j.location,{startUninterruptedRevalidation:!0});return}Wt(C||j.historyAction,j.navigation.location,{overrideNavigation:j.navigation,enableViewTransition:$===!0})}}async function Wt(w,R,P){I&&I.abort(),I=null,C=w,V=(P&&P.startUninterruptedRevalidation)===!0,Ug(j.location,j.matches),_=(P&&P.preventScrollReset)===!0,$=(P&&P.enableViewTransition)===!0;let L=l||o,U=P&&P.overrideNavigation,se=P!=null&&P.initialHydration&&j.matches&&j.matches.length>0&&!N?j.matches:us(L,R,c),oe=(P&&P.flushSync)===!0;if(se&&j.initialized&&!re&&Qy(j.location,R)&&!(P&&P.submission&&Tt(P.submission.formMethod))){ft(R,{matches:se},{flushSync:oe});return}let X=yn(se,L,R.pathname);if(X.active&&X.matches&&(se=X.matches),!se){let{error:Re,notFoundMatches:we,route:Me}=ia(R.pathname);ft(R,{matches:we,loaderData:{},errors:{[Me.id]:Re}},{flushSync:oe});return}I=new AbortController;let Q=Ws(e.history,R,I.signal,P&&P.submission),G;if(P&&P.pendingError)G=[ks(se).route.id,{type:Ee.error,error:P.pendingError}];else if(P&&P.submission&&Tt(P.submission.formMethod)){let Re=await sa(Q,R,P.submission,se,X.active,{replace:P.replace,flushSync:oe});if(Re.shortCircuited)return;if(Re.pendingActionResult){let[we,Me]=Re.pendingActionResult;if(ct(Me)&&zr(Me.error)&&Me.error.status===404){I=null,ft(R,{matches:Re.matches,loaderData:{},errors:{[we]:Me.error}});return}}se=Re.matches||se,G=Re.pendingActionResult,U=ya(R,P.submission),oe=!1,X.active=!1,Q=Ws(e.history,Q.url,Q.signal)}let{shortCircuited:ee,matches:ue,loaderData:ve,errors:et}=await ra(Q,R,se,X.active,U,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,P&&P.initialHydration===!0,oe,G);ee||(I=null,ft(R,Ae({matches:ue||se},Wc(G),{loaderData:ve,errors:et})))}async function sa(w,R,P,L,U,se){se===void 0&&(se={}),na();let oe=nv(R,P);if(De({navigation:oe},{flushSync:se.flushSync===!0}),U){let G=await vn(L,R.pathname,w.signal);if(G.type==="aborted")return{shortCircuited:!0};if(G.type==="error"){let ee=ks(G.partialMatches).route.id;return{matches:G.partialMatches,pendingActionResult:[ee,{type:Ee.error,error:G.error}]}}else if(G.matches)L=G.matches;else{let{notFoundMatches:ee,error:ue,route:ve}=ia(R.pathname);return{matches:ee,pendingActionResult:[ve.id,{type:Ee.error,error:ue}]}}}let X,Q=Mr(L,R);if(!Q.route.action&&!Q.route.lazy)X={type:Ee.error,error:it(405,{method:w.method,pathname:R.pathname,routeId:Q.route.id})};else if(X=(await Nr("action",j,w,[Q],L,null))[Q.route.id],w.signal.aborted)return{shortCircuited:!0};if(Ps(X)){let G;return se&&se.replace!=null?G=se.replace:G=Uc(X.response.headers.get("Location"),new URL(w.url),c,e.history)===j.location.pathname+j.location.search,await Ss(w,X,!0,{submission:P,replace:G}),{shortCircuited:!0}}if(ps(X))throw it(400,{type:"defer-action"});if(ct(X)){let G=ks(L,Q.route.id);return(se&&se.replace)!==!0&&(C=Ue.Push),{matches:L,pendingActionResult:[G.route.id,X]}}return{matches:L,pendingActionResult:[Q.route.id,X]}}async function ra(w,R,P,L,U,se,oe,X,Q,G,ee){let ue=U||ya(R,se),ve=se||oe||Kc(ue),et=!V&&(!p.v7_partialHydration||!Q);if(L){if(et){let Ie=ws(ee);De(Ae({navigation:ue},Ie!==void 0?{actionData:Ie}:{}),{flushSync:G})}let be=await vn(P,R.pathname,w.signal);if(be.type==="aborted")return{shortCircuited:!0};if(be.type==="error"){let Ie=ks(be.partialMatches).route.id;return{matches:be.partialMatches,loaderData:{},errors:{[Ie]:be.error}}}else if(be.matches)P=be.matches;else{let{error:Ie,notFoundMatches:Hs,route:Cr}=ia(R.pathname);return{matches:Hs,loaderData:{},errors:{[Cr.id]:Ie}}}}let Re=l||o,[we,Me]=Fc(e.history,j,P,ve,R,p.v7_partialHydration&&Q===!0,p.v7_skipActionErrorRevalidation,re,Z,J,ne,H,M,Re,c,ee);if(aa(be=>!(P&&P.some(Ie=>Ie.route.id===be))||we&&we.some(Ie=>Ie.route.id===be)),Te=++pe,we.length===0&&Me.length===0){let be=hc();return ft(R,Ae({matches:P,loaderData:{},errors:ee&&ct(ee[1])?{[ee[0]]:ee[1].error}:null},Wc(ee),be?{fetchers:new Map(j.fetchers)}:{}),{flushSync:G}),{shortCircuited:!0}}if(et){let be={};if(!L){be.navigation=ue;let Ie=ws(ee);Ie!==void 0&&(be.actionData=Ie)}Me.length>0&&(be.fetchers=Mg(Me)),De(be,{flushSync:G})}Me.forEach(be=>{is(be.key),be.controller&&D.set(be.key,be.controller)});let $s=()=>Me.forEach(be=>is(be.key));I&&I.signal.addEventListener("abort",$s);let{loaderResults:wr,fetcherResults:qt}=await uc(j,P,we,Me,w);if(w.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",$s),Me.forEach(be=>D.delete(be.key));let _t=wn(wr);if(_t)return await Ss(w,_t.result,!0,{replace:X}),{shortCircuited:!0};if(_t=wn(qt),_t)return M.add(_t.key),await Ss(w,_t.result,!0,{replace:X}),{shortCircuited:!0};let{loaderData:oa,errors:Sr}=Hc(j,P,wr,ee,Me,qt,de);de.forEach((be,Ie)=>{be.subscribe(Hs=>{(Hs||be.done)&&de.delete(Ie)})}),p.v7_partialHydration&&Q&&j.errors&&(Sr=Ae({},j.errors,Sr));let Cs=hc(),bn=fc(Te),jn=Cs||bn||Me.length>0;return Ae({matches:P,loaderData:oa,errors:Sr},jn?{fetchers:new Map(j.fetchers)}:{})}function ws(w){if(w&&!ct(w[1]))return{[w[0]]:w[1].data};if(j.actionData)return Object.keys(j.actionData).length===0?null:j.actionData}function Mg(w){return w.forEach(R=>{let P=j.fetchers.get(R.key),L=Rr(void 0,P?P.data:void 0);j.fetchers.set(R.key,L)}),new Map(j.fetchers)}function Ig(w,R,P,L){if(n)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");is(w);let U=(L&&L.flushSync)===!0,se=l||o,oe=Za(j.location,j.matches,c,p.v7_prependBasename,P,p.v7_relativeSplatPath,R,L==null?void 0:L.relative),X=us(se,oe,c),Q=yn(X,se,oe);if(Q.active&&Q.matches&&(X=Q.matches),!X){Gt(w,R,it(404,{pathname:oe}),{flushSync:U});return}let{path:G,submission:ee,error:ue}=Oc(p.v7_normalizeFormMethod,!0,oe,L);if(ue){Gt(w,R,ue,{flushSync:U});return}let ve=Mr(X,G),et=(L&&L.preventScrollReset)===!0;if(ee&&Tt(ee.formMethod)){Og(w,R,G,ve,X,Q.active,U,et,ee);return}H.set(w,{routeId:R,path:G}),Lg(w,R,G,ve,X,Q.active,U,et,ee)}async function Og(w,R,P,L,U,se,oe,X,Q){na(),H.delete(w);function G(Ve){if(!Ve.route.action&&!Ve.route.lazy){let zs=it(405,{method:Q.formMethod,pathname:P,routeId:R});return Gt(w,R,zs,{flushSync:oe}),!0}return!1}if(!se&&G(L))return;let ee=j.fetchers.get(w);ns(w,iv(Q,ee),{flushSync:oe});let ue=new AbortController,ve=Ws(e.history,P,ue.signal,Q);if(se){let Ve=await vn(U,new URL(ve.url).pathname,ve.signal,w);if(Ve.type==="aborted")return;if(Ve.type==="error"){Gt(w,R,Ve.error,{flushSync:oe});return}else if(Ve.matches){if(U=Ve.matches,L=Mr(U,P),G(L))return}else{Gt(w,R,it(404,{pathname:P}),{flushSync:oe});return}}D.set(w,ue);let et=pe,we=(await Nr("action",j,ve,[L],U,w))[L.route.id];if(ve.signal.aborted){D.get(w)===ue&&D.delete(w);return}if(p.v7_fetcherPersist&&ne.has(w)){if(Ps(we)||ct(we)){ns(w,os(void 0));return}}else{if(Ps(we))if(D.delete(w),Te>et){ns(w,os(void 0));return}else return M.add(w),ns(w,Rr(Q)),Ss(ve,we,!1,{fetcherSubmission:Q,preventScrollReset:X});if(ct(we)){Gt(w,R,we.error);return}}if(ps(we))throw it(400,{type:"defer-action"});let Me=j.navigation.location||j.location,$s=Ws(e.history,Me,ue.signal),wr=l||o,qt=j.navigation.state!=="idle"?us(wr,j.navigation.location,c):j.matches;xe(qt,"Didn't find any matches after fetcher action");let _t=++pe;T.set(w,_t);let oa=Rr(Q,we.data);j.fetchers.set(w,oa);let[Sr,Cs]=Fc(e.history,j,qt,Q,Me,!1,p.v7_skipActionErrorRevalidation,re,Z,J,ne,H,M,wr,c,[L.route.id,we]);Cs.filter(Ve=>Ve.key!==w).forEach(Ve=>{let zs=Ve.key,bc=j.fetchers.get(zs),zg=Rr(void 0,bc?bc.data:void 0);j.fetchers.set(zs,zg),is(zs),Ve.controller&&D.set(zs,Ve.controller)}),De({fetchers:new Map(j.fetchers)});let bn=()=>Cs.forEach(Ve=>is(Ve.key));ue.signal.addEventListener("abort",bn);let{loaderResults:jn,fetcherResults:be}=await uc(j,qt,Sr,Cs,$s);if(ue.signal.aborted)return;ue.signal.removeEventListener("abort",bn),T.delete(w),D.delete(w),Cs.forEach(Ve=>D.delete(Ve.key));let Ie=wn(jn);if(Ie)return Ss($s,Ie.result,!1,{preventScrollReset:X});if(Ie=wn(be),Ie)return M.add(Ie.key),Ss($s,Ie.result,!1,{preventScrollReset:X});let{loaderData:Hs,errors:Cr}=Hc(j,qt,jn,void 0,Cs,be,de);if(j.fetchers.has(w)){let Ve=os(we.data);j.fetchers.set(w,Ve)}fc(_t),j.navigation.state==="loading"&&_t>Te?(xe(C,"Expected pending action"),I&&I.abort(),ft(j.navigation.location,{matches:qt,loaderData:Hs,errors:Cr,fetchers:new Map(j.fetchers)})):(De({errors:Cr,loaderData:zc(j.loaderData,Hs,qt,Cr),fetchers:new Map(j.fetchers)}),re=!1)}async function Lg(w,R,P,L,U,se,oe,X,Q){let G=j.fetchers.get(w);ns(w,Rr(Q,G?G.data:void 0),{flushSync:oe});let ee=new AbortController,ue=Ws(e.history,P,ee.signal);if(se){let we=await vn(U,new URL(ue.url).pathname,ue.signal,w);if(we.type==="aborted")return;if(we.type==="error"){Gt(w,R,we.error,{flushSync:oe});return}else if(we.matches)U=we.matches,L=Mr(U,P);else{Gt(w,R,it(404,{pathname:P}),{flushSync:oe});return}}D.set(w,ee);let ve=pe,Re=(await Nr("loader",j,ue,[L],U,w))[L.route.id];if(ps(Re)&&(Re=await Yo(Re,ue.signal,!0)||Re),D.get(w)===ee&&D.delete(w),!ue.signal.aborted){if(ne.has(w)){ns(w,os(void 0));return}if(Ps(Re))if(Te>ve){ns(w,os(void 0));return}else{M.add(w),await Ss(ue,Re,!1,{preventScrollReset:X});return}if(ct(Re)){Gt(w,R,Re.error);return}xe(!ps(Re),"Unhandled fetcher deferred data"),ns(w,os(Re.data))}}async function Ss(w,R,P,L){let{submission:U,fetcherSubmission:se,preventScrollReset:oe,replace:X}=L===void 0?{}:L;R.response.headers.has("X-Remix-Revalidate")&&(re=!0);let Q=R.response.headers.get("Location");xe(Q,"Expected a Location header on the redirect Response"),Q=Uc(Q,new URL(w.url),c,e.history);let G=Hr(j.location,Q,{_isRedirect:!0});if(r){let we=!1;if(R.response.headers.has("X-Remix-Reload-Document"))we=!0;else if(Ko.test(Q)){const Me=e.history.createURL(Q);we=Me.origin!==t.location.origin||Qt(Me.pathname,c)==null}if(we){X?t.location.replace(Q):t.location.assign(Q);return}}I=null;let ee=X===!0||R.response.headers.has("X-Remix-Replace")?Ue.Replace:Ue.Push,{formMethod:ue,formAction:ve,formEncType:et}=j.navigation;!U&&!se&&ue&&ve&&et&&(U=Kc(j.navigation));let Re=U||se;if(Vy.has(R.response.status)&&Re&&Tt(Re.formMethod))await Wt(ee,G,{submission:Ae({},Re,{formAction:Q}),preventScrollReset:oe||_,enableViewTransition:P?$:void 0});else{let we=ya(G,U);await Wt(ee,G,{overrideNavigation:we,fetcherSubmission:se,preventScrollReset:oe||_,enableViewTransition:P?$:void 0})}}async function Nr(w,R,P,L,U,se){let oe,X={};try{oe=await qy(d,w,R,P,L,U,se,a,i)}catch(Q){return L.forEach(G=>{X[G.route.id]={type:Ee.error,error:Q}}),X}for(let[Q,G]of Object.entries(oe))if(Zy(G)){let ee=G.result;X[Q]={type:Ee.redirect,response:Xy(ee,P,Q,U,c,p.v7_relativeSplatPath)}}else X[Q]=await Yy(G);return X}async function uc(w,R,P,L,U){let se=w.matches,oe=Nr("loader",w,U,P,R,null),X=Promise.all(L.map(async ee=>{if(ee.matches&&ee.match&&ee.controller){let ve=(await Nr("loader",w,Ws(e.history,ee.path,ee.controller.signal),[ee.match],ee.matches,ee.key))[ee.match.route.id];return{[ee.key]:ve}}else return Promise.resolve({[ee.key]:{type:Ee.error,error:it(404,{pathname:ee.path})}})})),Q=await oe,G=(await X).reduce((ee,ue)=>Object.assign(ee,ue),{});return await Promise.all([sv(R,Q,U.signal,se,w.loaderData),rv(R,G,L)]),{loaderResults:Q,fetcherResults:G}}function na(){re=!0,Z.push(...aa()),H.forEach((w,R)=>{D.has(R)&&J.add(R),is(R)})}function ns(w,R,P){P===void 0&&(P={}),j.fetchers.set(w,R),De({fetchers:new Map(j.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function Gt(w,R,P,L){L===void 0&&(L={});let U=ks(j.matches,R);xn(w),De({errors:{[U.route.id]:P},fetchers:new Map(j.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function pc(w){return z.set(w,(z.get(w)||0)+1),ne.has(w)&&ne.delete(w),j.fetchers.get(w)||By}function xn(w){let R=j.fetchers.get(w);D.has(w)&&!(R&&R.state==="loading"&&T.has(w))&&is(w),H.delete(w),T.delete(w),M.delete(w),p.v7_fetcherPersist&&ne.delete(w),J.delete(w),j.fetchers.delete(w)}function Fg(w){let R=(z.get(w)||0)-1;R<=0?(z.delete(w),ne.add(w),p.v7_fetcherPersist||xn(w)):z.set(w,R),De({fetchers:new Map(j.fetchers)})}function is(w){let R=D.get(w);R&&(R.abort(),D.delete(w))}function mc(w){for(let R of w){let P=pc(R),L=os(P.data);j.fetchers.set(R,L)}}function hc(){let w=[],R=!1;for(let P of M){let L=j.fetchers.get(P);xe(L,"Expected fetcher: "+P),L.state==="loading"&&(M.delete(P),w.push(P),R=!0)}return mc(w),R}function fc(w){let R=[];for(let[P,L]of T)if(L<w){let U=j.fetchers.get(P);xe(U,"Expected fetcher: "+P),U.state==="loading"&&(is(P),T.delete(P),R.push(P))}return mc(R),R.length>0}function Vg(w,R){let P=j.blockers.get(w)||Er;return te.get(w)!==R&&te.set(w,R),P}function xc(w){j.blockers.delete(w),te.delete(w)}function gn(w,R){let P=j.blockers.get(w)||Er;xe(P.state==="unblocked"&&R.state==="blocked"||P.state==="blocked"&&R.state==="blocked"||P.state==="blocked"&&R.state==="proceeding"||P.state==="blocked"&&R.state==="unblocked"||P.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+R.state);let L=new Map(j.blockers);L.set(w,R),De({blockers:L})}function gc(w){let{currentLocation:R,nextLocation:P,historyAction:L}=w;if(te.size===0)return;te.size>1&&Is(!1,"A router only supports one blocker at a time");let U=Array.from(te.entries()),[se,oe]=U[U.length-1],X=j.blockers.get(se);if(!(X&&X.state==="proceeding")&&oe({currentLocation:R,nextLocation:P,historyAction:L}))return se}function ia(w){let R=it(404,{pathname:w}),P=l||o,{matches:L,route:U}=Gc(P);return aa(),{notFoundMatches:L,route:U,error:R}}function aa(w){let R=[];return de.forEach((P,L)=>{(!w||w(L))&&(P.cancel(),R.push(L),de.delete(L))}),R}function Bg(w,R,P){if(g=w,y=R,x=P||null,!v&&j.navigation===ga){v=!0;let L=vc(j.location,j.matches);L!=null&&De({restoreScrollPosition:L})}return()=>{g=null,y=null,x=null}}function yc(w,R){return x&&x(w,R.map(L=>xy(L,j.loaderData)))||w.key}function Ug(w,R){if(g&&y){let P=yc(w,R);g[P]=y()}}function vc(w,R){if(g){let P=yc(w,R),L=g[P];if(typeof L=="number")return L}return null}function yn(w,R,P){if(u)if(w){if(Object.keys(w[0].params).length>0)return{active:!0,matches:Vn(R,P,c,!0)}}else return{active:!0,matches:Vn(R,P,c,!0)||[]};return{active:!1,matches:null}}async function vn(w,R,P,L){if(!u)return{type:"success",matches:w};let U=w;for(;;){let se=l==null,oe=l||o,X=a;try{await u({signal:P,path:R,matches:U,fetcherKey:L,patch:(ee,ue)=>{P.aborted||Bc(ee,ue,oe,X,i)}})}catch(ee){return{type:"error",error:ee,partialMatches:U}}finally{se&&!P.aborted&&(o=[...o])}if(P.aborted)return{type:"aborted"};let Q=us(oe,R,c);if(Q)return{type:"success",matches:Q};let G=Vn(oe,R,c,!0);if(!G||U.length===G.length&&U.every((ee,ue)=>ee.route.id===G[ue].route.id))return{type:"success",matches:null};U=G}}function $g(w){a={},l=ei(w,i,void 0,a)}function Hg(w,R){let P=l==null;Bc(w,R,l||o,a,i),P&&(o=[...o],De({}))}return A={get basename(){return c},get future(){return p},get state(){return j},get routes(){return o},get window(){return t},initialize:Pe,subscribe:rs,enableScrollRestoration:Bg,navigate:jr,fetch:Ig,revalidate:ta,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:pc,deleteFetcher:Fg,dispose:wt,getBlocker:Vg,deleteBlocker:xc,patchRoutes:Hg,_internalFetchControllers:D,_internalActiveDeferreds:de,_internalSetRoutes:$g},A}function Hy(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Za(e,t,r,n,i,a,o,l){let c,d;if(o){c=[];for(let p of t)if(c.push(p),p.route.id===o){d=p;break}}else c=t,d=t[t.length-1];let u=qo(i||".",Go(c,a),Qt(e.pathname,r)||e.pathname,l==="path");if(i==null&&(u.search=e.search,u.hash=e.hash),(i==null||i===""||i===".")&&d){let p=Xo(u.search);if(d.route.index&&!p)u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index";else if(!d.route.index&&p){let h=new URLSearchParams(u.search),f=h.getAll("index");h.delete("index"),f.filter(x=>x).forEach(x=>h.append("index",x));let g=h.toString();u.search=g?"?"+g:""}}return n&&r!=="/"&&(u.pathname=u.pathname==="/"?r:Yt([r,u.pathname])),Os(u)}function Oc(e,t,r,n){if(!n||!Hy(n))return{path:r};if(n.formMethod&&!tv(n.formMethod))return{path:r,error:it(405,{method:n.formMethod})};let i=()=>({path:r,error:it(400,{type:"invalid-body"})}),a=n.formMethod||"get",o=e?a.toUpperCase():a.toLowerCase(),l=Ap(r);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!Tt(o))return i();let h=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((f,g)=>{let[x,y]=g;return""+f+x+"="+y+`
`},""):String(n.body);return{path:r,submission:{formMethod:o,formAction:l,formEncType:n.formEncType,formData:void 0,json:void 0,text:h}}}else if(n.formEncType==="application/json"){if(!Tt(o))return i();try{let h=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:o,formAction:l,formEncType:n.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}xe(typeof FormData=="function","FormData is not available in this environment");let c,d;if(n.formData)c=to(n.formData),d=n.formData;else if(n.body instanceof FormData)c=to(n.body),d=n.body;else if(n.body instanceof URLSearchParams)c=n.body,d=$c(c);else if(n.body==null)c=new URLSearchParams,d=new FormData;else try{c=new URLSearchParams(n.body),d=$c(c)}catch{return i()}let u={formMethod:o,formAction:l,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(Tt(u.formMethod))return{path:r,submission:u};let p=gs(r);return t&&p.search&&Xo(p.search)&&c.append("index",""),p.search="?"+c,{path:Os(p),submission:u}}function Lc(e,t,r){r===void 0&&(r=!1);let n=e.findIndex(i=>i.route.id===t);return n>=0?e.slice(0,r?n+1:n):e}function Fc(e,t,r,n,i,a,o,l,c,d,u,p,h,f,g,x){let y=x?ct(x[1])?x[1].error:x[1].data:void 0,v=e.createURL(t.location),b=e.createURL(i),N=r;a&&t.errors?N=Lc(r,Object.keys(t.errors)[0],!0):x&&ct(x[1])&&(N=Lc(r,x[0]));let S=x?x[1].statusCode:void 0,E=o&&S&&S>=400,A=N.filter((C,_)=>{let{route:I}=C;if(I.lazy)return!0;if(I.loader==null)return!1;if(a)return eo(I,t.loaderData,t.errors);if(zy(t.loaderData,t.matches[_],C)||c.some(ie=>ie===C.route.id))return!0;let $=t.matches[_],Y=C;return Vc(C,Ae({currentUrl:v,currentParams:$.params,nextUrl:b,nextParams:Y.params},n,{actionResult:y,actionStatus:S,defaultShouldRevalidate:E?!1:l||v.pathname+v.search===b.pathname+b.search||v.search!==b.search||kp($,Y)}))}),j=[];return p.forEach((C,_)=>{if(a||!r.some(V=>V.route.id===C.routeId)||u.has(_))return;let I=us(f,C.path,g);if(!I){j.push({key:_,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let $=t.fetchers.get(_),Y=Mr(I,C.path),ie=!1;h.has(_)?ie=!1:d.has(_)?(d.delete(_),ie=!0):$&&$.state!=="idle"&&$.data===void 0?ie=l:ie=Vc(Y,Ae({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:b,nextParams:r[r.length-1].params},n,{actionResult:y,actionStatus:S,defaultShouldRevalidate:E?!1:l})),ie&&j.push({key:_,routeId:C.routeId,path:C.path,matches:I,match:Y,controller:new AbortController})}),[A,j]}function eo(e,t,r){if(e.lazy)return!0;if(!e.loader)return!1;let n=t!=null&&t[e.id]!==void 0,i=r!=null&&r[e.id]!==void 0;return!n&&i?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!n&&!i}function zy(e,t,r){let n=!t||r.route.id!==t.route.id,i=e[r.route.id]===void 0;return n||i}function kp(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function Vc(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}function Bc(e,t,r,n,i){var a;let o;if(e){let d=n[e];xe(d,"No route found to patch children into: routeId = "+e),d.children||(d.children=[]),o=d.children}else o=r;let l=t.filter(d=>!o.some(u=>Pp(d,u))),c=ei(l,i,[e||"_","patch",String(((a=o)==null?void 0:a.length)||"0")],n);o.push(...c)}function Pp(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((r,n)=>{var i;return(i=t.children)==null?void 0:i.some(a=>Pp(r,a))}):!1}async function Wy(e,t,r){if(!e.lazy)return;let n=await e.lazy();if(!e.lazy)return;let i=r[e.id];xe(i,"No route found in manifest");let a={};for(let o in n){let c=i[o]!==void 0&&o!=="hasErrorBoundary";Is(!c,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!c&&!hy.has(o)&&(a[o]=n[o])}Object.assign(i,a),Object.assign(i,Ae({},t(i),{lazy:void 0}))}async function Gy(e){let{matches:t}=e,r=t.filter(i=>i.shouldLoad);return(await Promise.all(r.map(i=>i.resolve()))).reduce((i,a,o)=>Object.assign(i,{[r[o].route.id]:a}),{})}async function qy(e,t,r,n,i,a,o,l,c,d){let u=a.map(f=>f.route.lazy?Wy(f.route,c,l):void 0),p=a.map((f,g)=>{let x=u[g],y=i.some(b=>b.route.id===f.route.id);return Ae({},f,{shouldLoad:y,resolve:async b=>(b&&n.method==="GET"&&(f.route.lazy||f.route.loader)&&(y=!0),y?Ky(t,n,f,x,b,d):Promise.resolve({type:Ee.data,result:void 0}))})}),h=await e({matches:p,request:n,params:a[0].params,fetcherKey:o,context:d});try{await Promise.all(u)}catch{}return h}async function Ky(e,t,r,n,i,a){let o,l,c=d=>{let u,p=new Promise((g,x)=>u=x);l=()=>u(),t.signal.addEventListener("abort",l);let h=g=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+r.route.id+"]"))):d({request:t,params:r.params,context:a},...g!==void 0?[g]:[]),f=(async()=>{try{return{type:"data",result:await(i?i(x=>h(x)):h())}}catch(g){return{type:"error",result:g}}})();return Promise.race([f,p])};try{let d=r.route[e];if(n)if(d){let u,[p]=await Promise.all([c(d).catch(h=>{u=h}),n]);if(u!==void 0)throw u;o=p}else if(await n,d=r.route[e],d)o=await c(d);else if(e==="action"){let u=new URL(t.url),p=u.pathname+u.search;throw it(405,{method:t.method,pathname:p,routeId:r.route.id})}else return{type:Ee.data,result:void 0};else if(d)o=await c(d);else{let u=new URL(t.url),p=u.pathname+u.search;throw it(404,{pathname:p})}xe(o.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:Ee.error,result:d}}finally{l&&t.signal.removeEventListener("abort",l)}return o}async function Yy(e){let{result:t,type:r}=e;if(Dp(t)){let p;try{let h=t.headers.get("Content-Type");h&&/\bapplication\/json\b/.test(h)?t.body==null?p=null:p=await t.json():p=await t.text()}catch(h){return{type:Ee.error,error:h}}return r===Ee.error?{type:Ee.error,error:new si(t.status,t.statusText,p),statusCode:t.status,headers:t.headers}:{type:Ee.data,data:p,statusCode:t.status,headers:t.headers}}if(r===Ee.error){if(qc(t)){var n,i;if(t.data instanceof Error){var a,o;return{type:Ee.error,error:t.data,statusCode:(a=t.init)==null?void 0:a.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}}return{type:Ee.error,error:new si(((n=t.init)==null?void 0:n.status)||500,void 0,t.data),statusCode:zr(t)?t.status:void 0,headers:(i=t.init)!=null&&i.headers?new Headers(t.init.headers):void 0}}return{type:Ee.error,error:t,statusCode:zr(t)?t.status:void 0}}if(ev(t)){var l,c;return{type:Ee.deferred,deferredData:t,statusCode:(l=t.init)==null?void 0:l.status,headers:((c=t.init)==null?void 0:c.headers)&&new Headers(t.init.headers)}}if(qc(t)){var d,u;return{type:Ee.data,data:t.data,statusCode:(d=t.init)==null?void 0:d.status,headers:(u=t.init)!=null&&u.headers?new Headers(t.init.headers):void 0}}return{type:Ee.data,data:t}}function Xy(e,t,r,n,i,a){let o=e.headers.get("Location");if(xe(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ko.test(o)){let l=n.slice(0,n.findIndex(c=>c.route.id===r)+1);o=Za(new URL(t.url),l,i,!0,o,a),e.headers.set("Location",o)}return e}function Uc(e,t,r,n){let i=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Ko.test(e)){let a=e,o=a.startsWith("//")?new URL(t.protocol+a):new URL(a);if(i.includes(o.protocol))throw new Error("Invalid redirect location");let l=Qt(o.pathname,r)!=null;if(o.origin===t.origin&&l)return o.pathname+o.search+o.hash}try{let a=n.createURL(e);if(i.includes(a.protocol))throw new Error("Invalid redirect location")}catch{}return e}function Ws(e,t,r,n){let i=e.createURL(Ap(t)).toString(),a={signal:r};if(n&&Tt(n.formMethod)){let{formMethod:o,formEncType:l}=n;a.method=o.toUpperCase(),l==="application/json"?(a.headers=new Headers({"Content-Type":l}),a.body=JSON.stringify(n.json)):l==="text/plain"?a.body=n.text:l==="application/x-www-form-urlencoded"&&n.formData?a.body=to(n.formData):a.body=n.formData}return new Request(i,a)}function to(e){let t=new URLSearchParams;for(let[r,n]of e.entries())t.append(r,typeof n=="string"?n:n.name);return t}function $c(e){let t=new FormData;for(let[r,n]of e.entries())t.append(r,n);return t}function Jy(e,t,r,n,i){let a={},o=null,l,c=!1,d={},u=r&&ct(r[1])?r[1].error:void 0;return e.forEach(p=>{if(!(p.route.id in t))return;let h=p.route.id,f=t[h];if(xe(!Ps(f),"Cannot handle redirect results in processLoaderData"),ct(f)){let g=f.error;u!==void 0&&(g=u,u=void 0),o=o||{};{let x=ks(e,h);o[x.route.id]==null&&(o[x.route.id]=g)}a[h]=void 0,c||(c=!0,l=zr(f.error)?f.error.status:500),f.headers&&(d[h]=f.headers)}else ps(f)?(n.set(h,f.deferredData),a[h]=f.deferredData.data,f.statusCode!=null&&f.statusCode!==200&&!c&&(l=f.statusCode),f.headers&&(d[h]=f.headers)):(a[h]=f.data,f.statusCode&&f.statusCode!==200&&!c&&(l=f.statusCode),f.headers&&(d[h]=f.headers))}),u!==void 0&&r&&(o={[r[0]]:u},a[r[0]]=void 0),{loaderData:a,errors:o,statusCode:l||200,loaderHeaders:d}}function Hc(e,t,r,n,i,a,o){let{loaderData:l,errors:c}=Jy(t,r,n,o);return i.forEach(d=>{let{key:u,match:p,controller:h}=d,f=a[u];if(xe(f,"Did not find corresponding fetcher result"),!(h&&h.signal.aborted))if(ct(f)){let g=ks(e.matches,p==null?void 0:p.route.id);c&&c[g.route.id]||(c=Ae({},c,{[g.route.id]:f.error})),e.fetchers.delete(u)}else if(Ps(f))xe(!1,"Unhandled fetcher revalidation redirect");else if(ps(f))xe(!1,"Unhandled fetcher deferred data");else{let g=os(f.data);e.fetchers.set(u,g)}}),{loaderData:l,errors:c}}function zc(e,t,r,n){let i=Ae({},t);for(let a of r){let o=a.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&a.route.loader&&(i[o]=e[o]),n&&n.hasOwnProperty(o))break}return i}function Wc(e){return e?ct(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function ks(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function Gc(e){let t=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function it(e,t){let{pathname:r,routeId:n,method:i,type:a,message:o}=t===void 0?{}:t,l="Unknown Server Error",c="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&r&&n?c="You made a "+i+' request to "'+r+'" but '+('did not provide a `loader` for route "'+n+'", ')+"so there is no way to handle the request.":a==="defer-action"?c="defer() is not supported in actions":a==="invalid-body"&&(c="Unable to encode submission body")):e===403?(l="Forbidden",c='Route "'+n+'" does not match URL "'+r+'"'):e===404?(l="Not Found",c='No route matches URL "'+r+'"'):e===405&&(l="Method Not Allowed",i&&r&&n?c="You made a "+i.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the request.":i&&(c='Invalid request method "'+i.toUpperCase()+'"')),new si(e||500,l,new Error(c),!0)}function wn(e){let t=Object.entries(e);for(let r=t.length-1;r>=0;r--){let[n,i]=t[r];if(Ps(i))return{key:n,result:i}}}function Ap(e){let t=typeof e=="string"?gs(e):e;return Os(Ae({},t,{hash:""}))}function Qy(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Zy(e){return Dp(e.result)&&Fy.has(e.result.status)}function ps(e){return e.type===Ee.deferred}function ct(e){return e.type===Ee.error}function Ps(e){return(e&&e.type)===Ee.redirect}function qc(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function ev(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Dp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function tv(e){return Ly.has(e.toLowerCase())}function Tt(e){return Iy.has(e.toLowerCase())}async function sv(e,t,r,n,i){let a=Object.entries(t);for(let o=0;o<a.length;o++){let[l,c]=a[o],d=e.find(h=>(h==null?void 0:h.route.id)===l);if(!d)continue;let u=n.find(h=>h.route.id===d.route.id),p=u!=null&&!kp(u,d)&&(i&&i[d.route.id])!==void 0;ps(c)&&p&&await Yo(c,r,!1).then(h=>{h&&(t[l]=h)})}}async function rv(e,t,r){for(let n=0;n<r.length;n++){let{key:i,routeId:a,controller:o}=r[n],l=t[i];e.find(d=>(d==null?void 0:d.route.id)===a)&&ps(l)&&(xe(o,"Expected an AbortController for revalidating fetcher deferred result"),await Yo(l,o.signal,!0).then(d=>{d&&(t[i]=d)}))}}async function Yo(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:Ee.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Ee.error,error:i}}return{type:Ee.data,data:e.deferredData.data}}}function Xo(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Mr(e,t){let r=typeof t=="string"?gs(t).search:t.search;if(e[e.length-1].route.index&&Xo(r||""))return e[e.length-1];let n=Tp(e);return n[n.length-1]}function Kc(e){let{formMethod:t,formAction:r,formEncType:n,text:i,formData:a,json:o}=e;if(!(!t||!r||!n)){if(i!=null)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:void 0,text:i};if(a!=null)return{formMethod:t,formAction:r,formEncType:n,formData:a,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:o,text:void 0}}}function ya(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function nv(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Rr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function iv(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function os(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function av(e,t){try{let r=e.sessionStorage.getItem(Rp);if(r){let n=JSON.parse(r);for(let[i,a]of Object.entries(n||{}))a&&Array.isArray(a)&&t.set(i,new Set(a||[]))}}catch{}}function ov(e,t){if(t.size>0){let r={};for(let[n,i]of t)r[n]=[...i];try{e.sessionStorage.setItem(Rp,JSON.stringify(r))}catch(n){Is(!1,"Failed to save applied view transitions in sessionStorage ("+n+").")}}}/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ri.apply(this,arguments)}const tn=m.createContext(null),Jo=m.createContext(null),ys=m.createContext(null),Qo=m.createContext(null),vs=m.createContext({outlet:null,matches:[],isDataRoute:!1}),_p=m.createContext(null);function lv(e,t){let{relative:r}=t===void 0?{}:t;sn()||xe(!1);let{basename:n,navigator:i}=m.useContext(ys),{hash:a,pathname:o,search:l}=Si(e,{relative:r}),c=o;return n!=="/"&&(c=o==="/"?n:Yt([n,o])),i.createHref({pathname:c,search:l,hash:a})}function sn(){return m.useContext(Qo)!=null}function $t(){return sn()||xe(!1),m.useContext(Qo).location}function Mp(e){m.useContext(ys).static||m.useLayoutEffect(e)}function Zo(){let{isDataRoute:e}=m.useContext(vs);return e?Nv():cv()}function cv(){sn()||xe(!1);let e=m.useContext(tn),{basename:t,future:r,navigator:n}=m.useContext(ys),{matches:i}=m.useContext(vs),{pathname:a}=$t(),o=JSON.stringify(Go(i,r.v7_relativeSplatPath)),l=m.useRef(!1);return Mp(()=>{l.current=!0}),m.useCallback(function(d,u){if(u===void 0&&(u={}),!l.current)return;if(typeof d=="number"){n.go(d);return}let p=qo(d,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Yt([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,o,a,e])}const dv=m.createContext(null);function uv(e){let t=m.useContext(vs).outlet;return t&&m.createElement(dv.Provider,{value:e},t)}function Si(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=m.useContext(ys),{matches:i}=m.useContext(vs),{pathname:a}=$t(),o=JSON.stringify(Go(i,n.v7_relativeSplatPath));return m.useMemo(()=>qo(e,JSON.parse(o),a,r==="path"),[e,o,a,r])}function pv(e,t,r,n){sn()||xe(!1);let{navigator:i}=m.useContext(ys),{matches:a}=m.useContext(vs),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=$t(),u;u=d;let p=u.pathname||"/",h=p;if(c!=="/"){let x=c.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let f=us(e,{pathname:h});return gv(f&&f.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:Yt([c,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:Yt([c,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,r,n)}function mv(){let e=jv(),t=zr(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),r?m.createElement("pre",{style:i},r):null,null)}const hv=m.createElement(mv,null);class fv extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?m.createElement(vs.Provider,{value:this.props.routeContext},m.createElement(_p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xv(e){let{routeContext:t,match:r,children:n}=e,i=m.useContext(tn);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),m.createElement(vs.Provider,{value:t},n)}function gv(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=n)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let u=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);u>=0||xe(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let u=0;u<o.length;u++){let p=o[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:h,errors:f}=r,g=p.route.loader&&h[p.route.id]===void 0&&(!f||f[p.route.id]===void 0);if(p.route.lazy||g){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,p,h)=>{let f,g=!1,x=null,y=null;r&&(f=l&&p.route.id?l[p.route.id]:void 0,x=p.route.errorElement||hv,c&&(d<0&&h===0?(wv("route-fallback"),g=!0,y=null):d===h&&(g=!0,y=p.route.hydrateFallbackElement||null)));let v=t.concat(o.slice(0,h+1)),b=()=>{let N;return f?N=x:g?N=y:p.route.Component?N=m.createElement(p.route.Component,null):p.route.element?N=p.route.element:N=u,m.createElement(xv,{match:p,routeContext:{outlet:u,matches:v,isDataRoute:r!=null},children:N})};return r&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?m.createElement(fv,{location:r.location,revalidation:r.revalidation,component:x,error:f,children:b(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):b()},null)}var Ip=(function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e})(Ip||{}),ni=(function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e})(ni||{});function yv(e){let t=m.useContext(tn);return t||xe(!1),t}function vv(e){let t=m.useContext(Jo);return t||xe(!1),t}function bv(e){let t=m.useContext(vs);return t||xe(!1),t}function Op(e){let t=bv(),r=t.matches[t.matches.length-1];return r.route.id||xe(!1),r.route.id}function jv(){var e;let t=m.useContext(_p),r=vv(ni.UseRouteError),n=Op(ni.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function Nv(){let{router:e}=yv(Ip.UseNavigateStable),t=Op(ni.UseNavigateStable),r=m.useRef(!1);return Mp(()=>{r.current=!0}),m.useCallback(function(i,a){a===void 0&&(a={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ri({fromRouteId:t},a)))},[e,t])}const Yc={};function wv(e,t,r){Yc[e]||(Yc[e]=!0)}function Sv(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Cv(e){return uv(e.context)}function Tv(e){let{basename:t="/",children:r=null,location:n,navigationType:i=Ue.Pop,navigator:a,static:o=!1,future:l}=e;sn()&&xe(!1);let c=t.replace(/^\/*/,"/"),d=m.useMemo(()=>({basename:c,navigator:a,static:o,future:ri({v7_relativeSplatPath:!1},l)}),[c,l,a,o]);typeof n=="string"&&(n=gs(n));let{pathname:u="/",search:p="",hash:h="",state:f=null,key:g="default"}=n,x=m.useMemo(()=>{let y=Qt(u,c);return y==null?null:{location:{pathname:y,search:p,hash:h,state:f,key:g},navigationType:i}},[c,u,p,h,f,g,i]);return x==null?null:m.createElement(ys.Provider,{value:d},m.createElement(Qo.Provider,{children:r,value:x}))}new Promise(()=>{});function Ev(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:m.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:m.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:m.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function or(){return or=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},or.apply(this,arguments)}function Lp(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Rv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function kv(e,t){return e.button===0&&(!t||t==="_self")&&!Rv(e)}function so(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function Pv(e,t){let r=so(e);return t&&t.forEach((n,i)=>{r.has(i)||t.getAll(i).forEach(a=>{r.append(i,a)})}),r}const Av=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Dv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],_v="6";try{window.__reactRouterVersion=_v}catch{}function Mv(e,t){return $y({basename:t==null?void 0:t.basename,future:or({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:uy({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Iv(),routes:e,mapRouteProperties:Ev,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function Iv(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=or({},t,{errors:Ov(t.errors)})),t}function Ov(e){if(!e)return null;let t=Object.entries(e),r={};for(let[n,i]of t)if(i&&i.__type==="RouteErrorResponse")r[n]=new si(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let a=window[i.__subType];if(typeof a=="function")try{let o=new a(i.message);o.stack="",r[n]=o}catch{}}if(r[n]==null){let a=new Error(i.message);a.stack="",r[n]=a}}else r[n]=i;return r}const Fp=m.createContext({isTransitioning:!1}),Lv=m.createContext(new Map),Fv="startTransition",Xc=wi[Fv],Vv="flushSync",Jc=wp[Vv];function Bv(e){Xc?Xc(e):e()}function kr(e){Jc?Jc(e):e()}class Uv{constructor(){this.status="pending",this.promise=new Promise((t,r)=>{this.resolve=n=>{this.status==="pending"&&(this.status="resolved",t(n))},this.reject=n=>{this.status==="pending"&&(this.status="rejected",r(n))}})}}function $v(e){let{fallbackElement:t,router:r,future:n}=e,[i,a]=m.useState(r.state),[o,l]=m.useState(),[c,d]=m.useState({isTransitioning:!1}),[u,p]=m.useState(),[h,f]=m.useState(),[g,x]=m.useState(),y=m.useRef(new Map),{v7_startTransition:v}=n||{},b=m.useCallback(C=>{v?Bv(C):C()},[v]),N=m.useCallback((C,_)=>{let{deletedFetchers:I,flushSync:$,viewTransitionOpts:Y}=_;C.fetchers.forEach((V,re)=>{V.data!==void 0&&y.current.set(re,V.data)}),I.forEach(V=>y.current.delete(V));let ie=r.window==null||r.window.document==null||typeof r.window.document.startViewTransition!="function";if(!Y||ie){$?kr(()=>a(C)):b(()=>a(C));return}if($){kr(()=>{h&&(u&&u.resolve(),h.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation})});let V=r.window.document.startViewTransition(()=>{kr(()=>a(C))});V.finished.finally(()=>{kr(()=>{p(void 0),f(void 0),l(void 0),d({isTransitioning:!1})})}),kr(()=>f(V));return}h?(u&&u.resolve(),h.skipTransition(),x({state:C,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation})):(l(C),d({isTransitioning:!0,flushSync:!1,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation}))},[r.window,h,u,y,b]);m.useLayoutEffect(()=>r.subscribe(N),[r,N]),m.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new Uv)},[c]),m.useEffect(()=>{if(u&&o&&r.window){let C=o,_=u.promise,I=r.window.document.startViewTransition(async()=>{b(()=>a(C)),await _});I.finished.finally(()=>{p(void 0),f(void 0),l(void 0),d({isTransitioning:!1})}),f(I)}},[b,o,u,r.window]),m.useEffect(()=>{u&&o&&i.location.key===o.location.key&&u.resolve()},[u,h,i.location,o]),m.useEffect(()=>{!c.isTransitioning&&g&&(l(g.state),d({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),x(void 0))},[c.isTransitioning,g]),m.useEffect(()=>{},[]);let S=m.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:C=>r.navigate(C),push:(C,_,I)=>r.navigate(C,{state:_,preventScrollReset:I==null?void 0:I.preventScrollReset}),replace:(C,_,I)=>r.navigate(C,{replace:!0,state:_,preventScrollReset:I==null?void 0:I.preventScrollReset})}),[r]),E=r.basename||"/",A=m.useMemo(()=>({router:r,navigator:S,static:!1,basename:E}),[r,S,E]),j=m.useMemo(()=>({v7_relativeSplatPath:r.future.v7_relativeSplatPath}),[r.future.v7_relativeSplatPath]);return m.useEffect(()=>Sv(n,r.future),[n,r.future]),m.createElement(m.Fragment,null,m.createElement(tn.Provider,{value:A},m.createElement(Jo.Provider,{value:i},m.createElement(Lv.Provider,{value:y.current},m.createElement(Fp.Provider,{value:c},m.createElement(Tv,{basename:E,location:i.location,navigationType:i.historyAction,navigator:S,future:j},i.initialized||r.future.v7_partialHydration?m.createElement(Hv,{routes:r.routes,future:r.future,state:i}):t))))),null)}const Hv=m.memo(zv);function zv(e){let{routes:t,future:r,state:n}=e;return pv(t,void 0,n,r)}const Wv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ze=m.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:a,replace:o,state:l,target:c,to:d,preventScrollReset:u,viewTransition:p}=t,h=Lp(t,Av),{basename:f}=m.useContext(ys),g,x=!1;if(typeof d=="string"&&Gv.test(d)&&(g=d,Wv))try{let N=new URL(window.location.href),S=d.startsWith("//")?new URL(N.protocol+d):new URL(d),E=Qt(S.pathname,f);S.origin===N.origin&&E!=null?d=E+S.search+S.hash:x=!0}catch{}let y=lv(d,{relative:i}),v=el(d,{replace:o,state:l,target:c,preventScrollReset:u,relative:i,viewTransition:p});function b(N){n&&n(N),N.defaultPrevented||v(N)}return m.createElement("a",or({},h,{href:g||y,onClick:x||a?n:b,ref:r,target:c}))}),qv=m.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:c,viewTransition:d,children:u}=t,p=Lp(t,Dv),h=Si(c,{relative:p.relative}),f=$t(),g=m.useContext(Jo),{navigator:x,basename:y}=m.useContext(ys),v=g!=null&&Xv(h)&&d===!0,b=x.encodeLocation?x.encodeLocation(h).pathname:h.pathname,N=f.pathname,S=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(N=N.toLowerCase(),S=S?S.toLowerCase():null,b=b.toLowerCase()),S&&y&&(S=Qt(S,y)||S);const E=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let A=N===b||!o&&N.startsWith(b)&&N.charAt(E)==="/",j=S!=null&&(S===b||!o&&S.startsWith(b)&&S.charAt(b.length)==="/"),C={isActive:A,isPending:j,isTransitioning:v},_=A?n:void 0,I;typeof a=="function"?I=a(C):I=[a,A?"active":null,j?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let $=typeof l=="function"?l(C):l;return m.createElement(ze,or({},p,{"aria-current":_,className:I,ref:r,style:$,to:c,viewTransition:d}),typeof u=="function"?u(C):u)});var ro;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ro||(ro={}));var Qc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Qc||(Qc={}));function Kv(e){let t=m.useContext(tn);return t||xe(!1),t}function el(e,t){let{target:r,replace:n,state:i,preventScrollReset:a,relative:o,viewTransition:l}=t===void 0?{}:t,c=Zo(),d=$t(),u=Si(e,{relative:o});return m.useCallback(p=>{if(kv(p,r)){p.preventDefault();let h=n!==void 0?n:Os(d)===Os(u);c(e,{replace:h,state:i,preventScrollReset:a,relative:o,viewTransition:l})}},[d,c,u,n,i,r,e,a,o,l])}function Yv(e){let t=m.useRef(so(e)),r=m.useRef(!1),n=$t(),i=m.useMemo(()=>Pv(n.search,r.current?null:t.current),[n.search]),a=Zo(),o=m.useCallback((l,c)=>{const d=so(typeof l=="function"?l(i):l);r.current=!0,a("?"+d,c)},[a,i]);return[i,o]}function Xv(e,t){t===void 0&&(t={});let r=m.useContext(Fp);r==null&&xe(!1);let{basename:n}=Kv(ro.useViewTransitionState),i=Si(e,{relative:t.relative});if(!r.isTransitioning)return!1;let a=Qt(r.currentLocation.pathname,n)||r.currentLocation.pathname,o=Qt(r.nextLocation.pathname,n)||r.nextLocation.pathname;return ti(i.pathname,o)!=null||ti(i.pathname,a)!=null}const Jv="modulepreload",Qv=function(e){return"/aii/developer-guideline/"+e},Zc={},Zv=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){let o=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=o(r.map(d=>{if(d=Qv(d),d in Zc)return;Zc[d]=!0;const u=d.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Jv,u||(h.as="script"),h.crossOrigin="",h.href=d,c&&h.setAttribute("nonce",c),document.head.appendChild(h),u)return new Promise((f,g)=>{h.addEventListener("load",f),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})},Bn={...wp},{version:Vp,hydrate:eb}=Bn,tb=Number((Vp||"").split(".")[0])>17,sb=Number((Vp||"").split(".")[0])>18;function rb(e,t,r={}){const{useLegacyRender:n}=r;if(n||!tb)eb(e,t);else if(sb)Zv(()=>import("./client-gi6eAi3h.js").then(i=>i.c),[]).then(({default:{hydrateRoot:i}})=>{Je.startTransition(()=>{i(t,e)})});else{Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint=!0;const{hydrateRoot:i}=Bn;if(!i)throw new Error("hydrateRoot not found");Je.startTransition(()=>{i(t,e),Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint=!1})}}function nb(e){return document.readyState==="loading"?new Promise(t=>{document.addEventListener("DOMContentLoaded",()=>t(e))}):Promise.resolve(e)}function ib(e,t){return!e||!t?e||t||"":(e[e.length-1]==="/"&&(e=e.substring(0,e.length-1)),t[0]!=="/"&&(t=`/${t}`),e+t)}function ab(e,t){if(e===t)return"/";const r=ob(t);return e.startsWith(r)?e.slice(r.length-1):e}function ob(e){return e[e.length-1]!=="/"?`${e}/`:e}function lb(e){return e[0]!=="/"?`/${e}`:e}function Bp(e,t,r=[]){return e.map((n,i)=>{const a=[...r,String(i)],o=typeof n.id=="string"?n.id:a.join("-");if(n.id=o,cb(n))return{...n,...t(n),id:o};{const l={...n,...t(n),id:o,children:void 0};return n.children&&(l.children=Bp(n.children,t,a)),l}})}function cb(e){return e.index===!0}function db(e){try{return JSON.parse(e||"{}")}catch(t){return console.error("[SSG] On state deserialization -",t,e),{}}}const ub=m.forwardRef((e,t)=>{const{replace:r,state:n,target:i,preventScrollReset:a,relative:o,to:l,onClick:c}=e,d=el(l,{replace:r,state:n,target:i,preventScrollReset:a,relative:o});function u(p){c&&c(p),p.defaultPrevented||Je.startTransition(()=>{d(p)}),p.defaultPrevented=!0,p.preventDefault()}return s.jsx(ze,{...e,ref:t,onClick:u})});ub.displayName="Link";const pb=m.forwardRef((e,t)=>{const{replace:r,state:n,target:i,preventScrollReset:a,relative:o,to:l,onClick:c}=e,d=el(l,{replace:r,state:n,target:i,preventScrollReset:a,relative:o});function u(p){c&&c(p),p.defaultPrevented||Je.startTransition(()=>{d(p)}),p.defaultPrevented=!0,p.preventDefault()}return s.jsx(qv,{...e,ref:t,onClick:u})});pb.displayName="NavLink";function mb(e,t,r={}){const{transformState:n,rootContainer:i="#root",ssrWhenDev:a,getStyleCollector:o=null}=r,l=typeof window<"u",c=e.basename??"/",{v7_startTransition:d=!0,...u}=e.future??{};async function p(f=!1,g){const x=f?Mv(Bp(e.routes,h),{basename:c,future:u}):void 0,y=[],v=f?()=>{}:E=>y.push(E),b=()=>Promise.all(y.map(E=>E())),N={isClient:l,routes:e.routes,router:x,routerOptions:e,onSSRAppRendered:v,triggerOnSSRAppRendered:b,initialState:{},transformState:n,routePath:g,base:c,getStyleCollector:o,routerType:"remix"};f&&(await nb(),N.initialState=(n==null?void 0:n(window.__INITIAL_STATE__||{}))||db(window.__INITIAL_STATE__)),await(t==null?void 0:t(N));const S=N.initialState;return{...N,initialState:S}}return l&&(async()=>{var b;const f=typeof i=="string"?document.querySelector(i):i;if(!f){typeof $jsdom>"u"&&console.warn("[vite-react-ssg] Root container not found.");return}const g=(b=us(e.routes,window.location,c))==null?void 0:b.filter(N=>N.route.lazy);g&&(g==null?void 0:g.length)>0&&await Promise.all(g.map(async N=>{const S=await N.route.lazy();Object.assign(N.route,{...S,lazy:void 0})}));const x=await p(!0);window.__VITE_REACT_SSG_CONTEXT__=x;const{router:y}=x,v=s.jsx(_r,{children:s.jsx($v,{router:y,future:{v7_startTransition:d}})});document.querySelector("[data-server-rendered=true]"),rb(v,f,r)})(),p;function h(f){if(!(document.querySelector("[data-server-rendered=true]")!==null))return f;const x=async({request:y})=>{var v;{let b;if(window.__VITE_REACT_SSG_STATIC_LOADER_DATA__)b=window.__VITE_REACT_SSG_STATIC_LOADER_DATA__;else{const A=ib(c,`static-loader-data-manifest-${window.__VITE_REACT_SSG_HASH__}.json`);b=await(await fetch(lb(A))).json(),window.__VITE_REACT_SSG_STATIC_LOADER_DATA__=b}const{url:N}=y;let{pathname:S}=new URL(N);return c!=="/"&&(S=ab(S,c)),((v=b==null?void 0:b[S])==null?void 0:v[f.id])??null}};return f.loader=x,f}}function hb(){const{pathname:e}=$t();return m.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[e]),null}const fb=1,xb=1e6;let va=0;function gb(){return va=(va+1)%Number.MAX_SAFE_INTEGER,va.toString()}const ba=new Map,ed=e=>{if(ba.has(e))return;const t=setTimeout(()=>{ba.delete(e),Lr({type:"REMOVE_TOAST",toastId:e})},xb);ba.set(e,t)},yb=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,fb)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case"DISMISS_TOAST":{const{toastId:r}=t;return r?ed(r):e.toasts.forEach(n=>{ed(n.id)}),{...e,toasts:e.toasts.map(n=>n.id===r||r===void 0?{...n,open:!1}:n)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)}}},Un=[];let $n={toasts:[]};function Lr(e){$n=yb($n,e),Un.forEach(t=>{t($n)})}function vb({...e}){const t=gb(),r=i=>Lr({type:"UPDATE_TOAST",toast:{...i,id:t}}),n=()=>Lr({type:"DISMISS_TOAST",toastId:t});return Lr({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||n()}}}),{id:t,dismiss:n,update:r}}function bb(){const[e,t]=m.useState($n);return m.useEffect(()=>(Un.push(t),()=>{const r=Un.indexOf(t);r>-1&&Un.splice(r,1)}),[e]),{...e,toast:vb,dismiss:r=>Lr({type:"DISMISS_TOAST",toastId:r})}}function me(e,t,{checkForDefaultPrevented:r=!0}={}){return function(i){if(e==null||e(i),r===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function td(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function rn(...e){return t=>{let r=!1;const n=e.map(i=>{const a=td(i,t);return!r&&typeof a=="function"&&(r=!0),a});if(r)return()=>{for(let i=0;i<n.length;i++){const a=n[i];typeof a=="function"?a():td(e[i],null)}}}}function Le(...e){return m.useCallback(rn(...e),e)}function jb(e,t){const r=m.createContext(t),n=a=>{const{children:o,...l}=a,c=m.useMemo(()=>l,Object.values(l));return s.jsx(r.Provider,{value:c,children:o})};n.displayName=e+"Provider";function i(a){const o=m.useContext(r);if(o)return o;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${e}\``)}return[n,i]}function bs(e,t=[]){let r=[];function n(a,o){const l=m.createContext(o),c=r.length;r=[...r,o];const d=p=>{var v;const{scope:h,children:f,...g}=p,x=((v=h==null?void 0:h[e])==null?void 0:v[c])||l,y=m.useMemo(()=>g,Object.values(g));return s.jsx(x.Provider,{value:y,children:f})};d.displayName=a+"Provider";function u(p,h){var x;const f=((x=h==null?void 0:h[e])==null?void 0:x[c])||l,g=m.useContext(f);if(g)return g;if(o!==void 0)return o;throw new Error(`\`${p}\` must be used within \`${a}\``)}return[d,u]}const i=()=>{const a=r.map(o=>m.createContext(o));return function(l){const c=(l==null?void 0:l[e])||a;return m.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return i.scopeName=e,[n,Nb(i,...t)]}function Nb(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(a){const o=n.reduce((l,{useScope:c,scopeName:d})=>{const p=c(a)[`__scope${d}`];return{...l,...p}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}function sd(e){const t=wb(e),r=m.forwardRef((n,i)=>{const{children:a,...o}=n,l=m.Children.toArray(a),c=l.find(Cb);if(c){const d=c.props.children,u=l.map(p=>p===c?m.Children.count(d)>1?m.Children.only(null):m.isValidElement(d)?d.props.children:null:p);return s.jsx(t,{...o,ref:i,children:m.isValidElement(d)?m.cloneElement(d,void 0,u):null})}return s.jsx(t,{...o,ref:i,children:a})});return r.displayName=`${e}.Slot`,r}function wb(e){const t=m.forwardRef((r,n)=>{const{children:i,...a}=r;if(m.isValidElement(i)){const o=Eb(i),l=Tb(a,i.props);return i.type!==m.Fragment&&(l.ref=n?rn(n,o):o),m.cloneElement(i,l)}return m.Children.count(i)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Sb=Symbol("radix.slottable");function Cb(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Sb}function Tb(e,t){const r={...t};for(const n in t){const i=e[n],a=t[n];/^on[A-Z]/.test(n)?i&&a?r[n]=(...l)=>{const c=a(...l);return i(...l),c}:i&&(r[n]=i):n==="style"?r[n]={...i,...a}:n==="className"&&(r[n]=[i,a].filter(Boolean).join(" "))}return{...e,...r}}function Eb(e){var n,i;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function Up(e){const t=e+"CollectionProvider",[r,n]=bs(t),[i,a]=r(t,{collectionRef:{current:null},itemMap:new Map}),o=x=>{const{scope:y,children:v}=x,b=Je.useRef(null),N=Je.useRef(new Map).current;return s.jsx(i,{scope:y,itemMap:N,collectionRef:b,children:v})};o.displayName=t;const l=e+"CollectionSlot",c=sd(l),d=Je.forwardRef((x,y)=>{const{scope:v,children:b}=x,N=a(l,v),S=Le(y,N.collectionRef);return s.jsx(c,{ref:S,children:b})});d.displayName=l;const u=e+"CollectionItemSlot",p="data-radix-collection-item",h=sd(u),f=Je.forwardRef((x,y)=>{const{scope:v,children:b,...N}=x,S=Je.useRef(null),E=Le(y,S),A=a(u,v);return Je.useEffect(()=>(A.itemMap.set(S,{ref:S,...N}),()=>void A.itemMap.delete(S))),s.jsx(h,{[p]:"",ref:E,children:b})});f.displayName=u;function g(x){const y=a(e+"CollectionConsumer",x);return Je.useCallback(()=>{const b=y.collectionRef.current;if(!b)return[];const N=Array.from(b.querySelectorAll(`[${p}]`));return Array.from(y.itemMap.values()).sort((A,j)=>N.indexOf(A.ref.current)-N.indexOf(j.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:o,Slot:d,ItemSlot:f},g,n]}function Rb(e){const t=kb(e),r=m.forwardRef((n,i)=>{const{children:a,...o}=n,l=m.Children.toArray(a),c=l.find(Ab);if(c){const d=c.props.children,u=l.map(p=>p===c?m.Children.count(d)>1?m.Children.only(null):m.isValidElement(d)?d.props.children:null:p);return s.jsx(t,{...o,ref:i,children:m.isValidElement(d)?m.cloneElement(d,void 0,u):null})}return s.jsx(t,{...o,ref:i,children:a})});return r.displayName=`${e}.Slot`,r}function kb(e){const t=m.forwardRef((r,n)=>{const{children:i,...a}=r;if(m.isValidElement(i)){const o=_b(i),l=Db(a,i.props);return i.type!==m.Fragment&&(l.ref=n?rn(n,o):o),m.cloneElement(i,l)}return m.Children.count(i)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Pb=Symbol("radix.slottable");function Ab(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Pb}function Db(e,t){const r={...t};for(const n in t){const i=e[n],a=t[n];/^on[A-Z]/.test(n)?i&&a?r[n]=(...l)=>{const c=a(...l);return i(...l),c}:i&&(r[n]=i):n==="style"?r[n]={...i,...a}:n==="className"&&(r[n]=[i,a].filter(Boolean).join(" "))}return{...e,...r}}function _b(e){var n,i;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Mb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ce=Mb.reduce((e,t)=>{const r=Rb(`Primitive.${t}`),n=m.forwardRef((i,a)=>{const{asChild:o,...l}=i,c=o?r:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),s.jsx(c,{...l,ref:a})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function $p(e,t){e&&en.flushSync(()=>e.dispatchEvent(t))}function Qe(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},[])}function Ib(e,t=globalThis==null?void 0:globalThis.document){const r=Qe(e);m.useEffect(()=>{const n=i=>{i.key==="Escape"&&r(i)};return t.addEventListener("keydown",n,{capture:!0}),()=>t.removeEventListener("keydown",n,{capture:!0})},[r,t])}var Ob="DismissableLayer",no="dismissableLayer.update",Lb="dismissableLayer.pointerDownOutside",Fb="dismissableLayer.focusOutside",rd,Hp=m.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ci=m.forwardRef((e,t)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:n,onPointerDownOutside:i,onFocusOutside:a,onInteractOutside:o,onDismiss:l,...c}=e,d=m.useContext(Hp),[u,p]=m.useState(null),h=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,f]=m.useState({}),g=Le(t,j=>p(j)),x=Array.from(d.layers),[y]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),v=x.indexOf(y),b=u?x.indexOf(u):-1,N=d.layersWithOutsidePointerEventsDisabled.size>0,S=b>=v,E=Bb(j=>{const C=j.target,_=[...d.branches].some(I=>I.contains(C));!S||_||(i==null||i(j),o==null||o(j),j.defaultPrevented||l==null||l())},h),A=Ub(j=>{const C=j.target;[...d.branches].some(I=>I.contains(C))||(a==null||a(j),o==null||o(j),j.defaultPrevented||l==null||l())},h);return Ib(j=>{b===d.layers.size-1&&(n==null||n(j),!j.defaultPrevented&&l&&(j.preventDefault(),l()))},h),m.useEffect(()=>{if(u)return r&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(rd=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(u)),d.layers.add(u),nd(),()=>{r&&d.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=rd)}},[u,h,r,d]),m.useEffect(()=>()=>{u&&(d.layers.delete(u),d.layersWithOutsidePointerEventsDisabled.delete(u),nd())},[u,d]),m.useEffect(()=>{const j=()=>f({});return document.addEventListener(no,j),()=>document.removeEventListener(no,j)},[]),s.jsx(Ce.div,{...c,ref:g,style:{pointerEvents:N?S?"auto":"none":void 0,...e.style},onFocusCapture:me(e.onFocusCapture,A.onFocusCapture),onBlurCapture:me(e.onBlurCapture,A.onBlurCapture),onPointerDownCapture:me(e.onPointerDownCapture,E.onPointerDownCapture)})});Ci.displayName=Ob;var Vb="DismissableLayerBranch",zp=m.forwardRef((e,t)=>{const r=m.useContext(Hp),n=m.useRef(null),i=Le(t,n);return m.useEffect(()=>{const a=n.current;if(a)return r.branches.add(a),()=>{r.branches.delete(a)}},[r.branches]),s.jsx(Ce.div,{...e,ref:i})});zp.displayName=Vb;function Bb(e,t=globalThis==null?void 0:globalThis.document){const r=Qe(e),n=m.useRef(!1),i=m.useRef(()=>{});return m.useEffect(()=>{const a=l=>{if(l.target&&!n.current){let c=function(){Wp(Lb,r,d,{discrete:!0})};const d={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=c,t.addEventListener("click",i.current,{once:!0})):c()}else t.removeEventListener("click",i.current);n.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",a),t.removeEventListener("click",i.current)}},[t,r]),{onPointerDownCapture:()=>n.current=!0}}function Ub(e,t=globalThis==null?void 0:globalThis.document){const r=Qe(e),n=m.useRef(!1);return m.useEffect(()=>{const i=a=>{a.target&&!n.current&&Wp(Fb,r,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function nd(){const e=new CustomEvent(no);document.dispatchEvent(e)}function Wp(e,t,r,{discrete:n}){const i=r.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&i.addEventListener(e,t,{once:!0}),n?$p(i,a):i.dispatchEvent(a)}var $b=Ci,Hb=zp,Ft=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{},zb="Portal",Ti=m.forwardRef((e,t)=>{var l;const{container:r,...n}=e,[i,a]=m.useState(!1);Ft(()=>a(!0),[]);const o=r||i&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return o?Np.createPortal(s.jsx(Ce.div,{...n,ref:t}),o):null});Ti.displayName=zb;function Wb(e,t){return m.useReducer((r,n)=>t[r][n]??r,e)}var bt=e=>{const{present:t,children:r}=e,n=Gb(t),i=typeof r=="function"?r({present:n.isPresent}):m.Children.only(r),a=Le(n.ref,qb(i));return typeof r=="function"||n.isPresent?m.cloneElement(i,{ref:a}):null};bt.displayName="Presence";function Gb(e){const[t,r]=m.useState(),n=m.useRef(null),i=m.useRef(e),a=m.useRef("none"),o=e?"mounted":"unmounted",[l,c]=Wb(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return m.useEffect(()=>{const d=Sn(n.current);a.current=l==="mounted"?d:"none"},[l]),Ft(()=>{const d=n.current,u=i.current;if(u!==e){const h=a.current,f=Sn(d);e?c("MOUNT"):f==="none"||(d==null?void 0:d.display)==="none"?c("UNMOUNT"):c(u&&h!==f?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,c]),Ft(()=>{if(t){let d;const u=t.ownerDocument.defaultView??window,p=f=>{const x=Sn(n.current).includes(CSS.escape(f.animationName));if(f.target===t&&x&&(c("ANIMATION_END"),!i.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",d=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},h=f=>{f.target===t&&(a.current=Sn(n.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{u.clearTimeout(d),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:m.useCallback(d=>{n.current=d?getComputedStyle(d):null,r(d)},[])}}function Sn(e){return(e==null?void 0:e.animationName)||"none"}function qb(e){var n,i;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Kb=wi[" useInsertionEffect ".trim().toString()]||Ft;function nn({prop:e,defaultProp:t,onChange:r=()=>{},caller:n}){const[i,a,o]=Yb({defaultProp:t,onChange:r}),l=e!==void 0,c=l?e:i;{const u=m.useRef(e!==void 0);m.useEffect(()=>{const p=u.current;p!==l&&console.warn(`${n} is changing from ${p?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=l},[l,n])}const d=m.useCallback(u=>{var p;if(l){const h=Xb(u)?u(e):u;h!==e&&((p=o.current)==null||p.call(o,h))}else a(u)},[l,e,a,o]);return[c,d]}function Yb({defaultProp:e,onChange:t}){const[r,n]=m.useState(e),i=m.useRef(r),a=m.useRef(t);return Kb(()=>{a.current=t},[t]),m.useEffect(()=>{var o;i.current!==r&&((o=a.current)==null||o.call(a,r),i.current=r)},[r,i]),[r,n,a]}function Xb(e){return typeof e=="function"}var Jb=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Qb="VisuallyHidden",Ei=m.forwardRef((e,t)=>s.jsx(Ce.span,{...e,ref:t,style:{...Jb,...e.style}}));Ei.displayName=Qb;var Zb=Ei,tl="ToastProvider",[sl,e0,t0]=Up("Toast"),[Gp]=bs("Toast",[t0]),[s0,Ri]=Gp(tl),qp=e=>{const{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:i="right",swipeThreshold:a=50,children:o}=e,[l,c]=m.useState(null),[d,u]=m.useState(0),p=m.useRef(!1),h=m.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${tl}\`. Expected non-empty \`string\`.`),s.jsx(sl.Provider,{scope:t,children:s.jsx(s0,{scope:t,label:r,duration:n,swipeDirection:i,swipeThreshold:a,toastCount:d,viewport:l,onViewportChange:c,onToastAdd:m.useCallback(()=>u(f=>f+1),[]),onToastRemove:m.useCallback(()=>u(f=>f-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:h,children:o})})};qp.displayName=tl;var Kp="ToastViewport",r0=["F8"],io="toast.viewportPause",ao="toast.viewportResume",Yp=m.forwardRef((e,t)=>{const{__scopeToast:r,hotkey:n=r0,label:i="Notifications ({hotkey})",...a}=e,o=Ri(Kp,r),l=e0(r),c=m.useRef(null),d=m.useRef(null),u=m.useRef(null),p=m.useRef(null),h=Le(t,p,o.onViewportChange),f=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=o.toastCount>0;m.useEffect(()=>{const y=v=>{var N;n.length!==0&&n.every(S=>v[S]||v.code===S)&&((N=p.current)==null||N.focus())};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[n]),m.useEffect(()=>{const y=c.current,v=p.current;if(g&&y&&v){const b=()=>{if(!o.isClosePausedRef.current){const A=new CustomEvent(io);v.dispatchEvent(A),o.isClosePausedRef.current=!0}},N=()=>{if(o.isClosePausedRef.current){const A=new CustomEvent(ao);v.dispatchEvent(A),o.isClosePausedRef.current=!1}},S=A=>{!y.contains(A.relatedTarget)&&N()},E=()=>{y.contains(document.activeElement)||N()};return y.addEventListener("focusin",b),y.addEventListener("focusout",S),y.addEventListener("pointermove",b),y.addEventListener("pointerleave",E),window.addEventListener("blur",b),window.addEventListener("focus",N),()=>{y.removeEventListener("focusin",b),y.removeEventListener("focusout",S),y.removeEventListener("pointermove",b),y.removeEventListener("pointerleave",E),window.removeEventListener("blur",b),window.removeEventListener("focus",N)}}},[g,o.isClosePausedRef]);const x=m.useCallback(({tabbingDirection:y})=>{const b=l().map(N=>{const S=N.ref.current,E=[S,...x0(S)];return y==="forwards"?E:E.reverse()});return(y==="forwards"?b.reverse():b).flat()},[l]);return m.useEffect(()=>{const y=p.current;if(y){const v=b=>{var E,A,j;const N=b.altKey||b.ctrlKey||b.metaKey;if(b.key==="Tab"&&!N){const C=document.activeElement,_=b.shiftKey;if(b.target===y&&_){(E=d.current)==null||E.focus();return}const Y=x({tabbingDirection:_?"backwards":"forwards"}),ie=Y.findIndex(V=>V===C);ja(Y.slice(ie+1))?b.preventDefault():_?(A=d.current)==null||A.focus():(j=u.current)==null||j.focus()}};return y.addEventListener("keydown",v),()=>y.removeEventListener("keydown",v)}},[l,x]),s.jsxs(Hb,{ref:c,role:"region","aria-label":i.replace("{hotkey}",f),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&s.jsx(oo,{ref:d,onFocusFromOutsideViewport:()=>{const y=x({tabbingDirection:"forwards"});ja(y)}}),s.jsx(sl.Slot,{scope:r,children:s.jsx(Ce.ol,{tabIndex:-1,...a,ref:h})}),g&&s.jsx(oo,{ref:u,onFocusFromOutsideViewport:()=>{const y=x({tabbingDirection:"backwards"});ja(y)}})]})});Yp.displayName=Kp;var Xp="ToastFocusProxy",oo=m.forwardRef((e,t)=>{const{__scopeToast:r,onFocusFromOutsideViewport:n,...i}=e,a=Ri(Xp,r);return s.jsx(Ei,{tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:o=>{var d;const l=o.relatedTarget;!((d=a.viewport)!=null&&d.contains(l))&&n()}})});oo.displayName=Xp;var an="Toast",n0="toast.swipeStart",i0="toast.swipeMove",a0="toast.swipeCancel",o0="toast.swipeEnd",Jp=m.forwardRef((e,t)=>{const{forceMount:r,open:n,defaultOpen:i,onOpenChange:a,...o}=e,[l,c]=nn({prop:n,defaultProp:i??!0,onChange:a,caller:an});return s.jsx(bt,{present:r||l,children:s.jsx(d0,{open:l,...o,ref:t,onClose:()=>c(!1),onPause:Qe(e.onPause),onResume:Qe(e.onResume),onSwipeStart:me(e.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:me(e.onSwipeMove,d=>{const{x:u,y:p}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${p}px`)}),onSwipeCancel:me(e.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:me(e.onSwipeEnd,d=>{const{x:u,y:p}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${p}px`),c(!1)})})})});Jp.displayName=an;var[l0,c0]=Gp(an,{onClose(){}}),d0=m.forwardRef((e,t)=>{const{__scopeToast:r,type:n="foreground",duration:i,open:a,onClose:o,onEscapeKeyDown:l,onPause:c,onResume:d,onSwipeStart:u,onSwipeMove:p,onSwipeCancel:h,onSwipeEnd:f,...g}=e,x=Ri(an,r),[y,v]=m.useState(null),b=Le(t,V=>v(V)),N=m.useRef(null),S=m.useRef(null),E=i||x.duration,A=m.useRef(0),j=m.useRef(E),C=m.useRef(0),{onToastAdd:_,onToastRemove:I}=x,$=Qe(()=>{var re;(y==null?void 0:y.contains(document.activeElement))&&((re=x.viewport)==null||re.focus()),o()}),Y=m.useCallback(V=>{!V||V===1/0||(window.clearTimeout(C.current),A.current=new Date().getTime(),C.current=window.setTimeout($,V))},[$]);m.useEffect(()=>{const V=x.viewport;if(V){const re=()=>{Y(j.current),d==null||d()},Z=()=>{const J=new Date().getTime()-A.current;j.current=j.current-J,window.clearTimeout(C.current),c==null||c()};return V.addEventListener(io,Z),V.addEventListener(ao,re),()=>{V.removeEventListener(io,Z),V.removeEventListener(ao,re)}}},[x.viewport,E,c,d,Y]),m.useEffect(()=>{a&&!x.isClosePausedRef.current&&Y(E)},[a,E,x.isClosePausedRef,Y]),m.useEffect(()=>(_(),()=>I()),[_,I]);const ie=m.useMemo(()=>y?nm(y):null,[y]);return x.viewport?s.jsxs(s.Fragment,{children:[ie&&s.jsx(u0,{__scopeToast:r,role:"status","aria-live":n==="foreground"?"assertive":"polite",children:ie}),s.jsx(l0,{scope:r,onClose:$,children:en.createPortal(s.jsx(sl.ItemSlot,{scope:r,children:s.jsx($b,{asChild:!0,onEscapeKeyDown:me(l,()=>{x.isFocusedToastEscapeKeyDownRef.current||$(),x.isFocusedToastEscapeKeyDownRef.current=!1}),children:s.jsx(Ce.li,{tabIndex:0,"data-state":a?"open":"closed","data-swipe-direction":x.swipeDirection,...g,ref:b,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:me(e.onKeyDown,V=>{V.key==="Escape"&&(l==null||l(V.nativeEvent),V.nativeEvent.defaultPrevented||(x.isFocusedToastEscapeKeyDownRef.current=!0,$()))}),onPointerDown:me(e.onPointerDown,V=>{V.button===0&&(N.current={x:V.clientX,y:V.clientY})}),onPointerMove:me(e.onPointerMove,V=>{if(!N.current)return;const re=V.clientX-N.current.x,Z=V.clientY-N.current.y,J=!!S.current,D=["left","right"].includes(x.swipeDirection),pe=["left","up"].includes(x.swipeDirection)?Math.min:Math.max,Te=D?pe(0,re):0,T=D?0:pe(0,Z),M=V.pointerType==="touch"?10:2,H={x:Te,y:T},z={originalEvent:V,delta:H};J?(S.current=H,Cn(i0,p,z,{discrete:!1})):id(H,x.swipeDirection,M)?(S.current=H,Cn(n0,u,z,{discrete:!1}),V.target.setPointerCapture(V.pointerId)):(Math.abs(re)>M||Math.abs(Z)>M)&&(N.current=null)}),onPointerUp:me(e.onPointerUp,V=>{const re=S.current,Z=V.target;if(Z.hasPointerCapture(V.pointerId)&&Z.releasePointerCapture(V.pointerId),S.current=null,N.current=null,re){const J=V.currentTarget,D={originalEvent:V,delta:re};id(re,x.swipeDirection,x.swipeThreshold)?Cn(o0,f,D,{discrete:!0}):Cn(a0,h,D,{discrete:!0}),J.addEventListener("click",pe=>pe.preventDefault(),{once:!0})}})})})}),x.viewport)})]}):null}),u0=e=>{const{__scopeToast:t,children:r,...n}=e,i=Ri(an,t),[a,o]=m.useState(!1),[l,c]=m.useState(!1);return h0(()=>o(!0)),m.useEffect(()=>{const d=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(d)},[]),l?null:s.jsx(Ti,{asChild:!0,children:s.jsx(Ei,{...n,children:a&&s.jsxs(s.Fragment,{children:[i.label," ",r]})})})},p0="ToastTitle",Qp=m.forwardRef((e,t)=>{const{__scopeToast:r,...n}=e;return s.jsx(Ce.div,{...n,ref:t})});Qp.displayName=p0;var m0="ToastDescription",Zp=m.forwardRef((e,t)=>{const{__scopeToast:r,...n}=e;return s.jsx(Ce.div,{...n,ref:t})});Zp.displayName=m0;var em="ToastAction",tm=m.forwardRef((e,t)=>{const{altText:r,...n}=e;return r.trim()?s.jsx(rm,{altText:r,asChild:!0,children:s.jsx(rl,{...n,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${em}\`. Expected non-empty \`string\`.`),null)});tm.displayName=em;var sm="ToastClose",rl=m.forwardRef((e,t)=>{const{__scopeToast:r,...n}=e,i=c0(sm,r);return s.jsx(rm,{asChild:!0,children:s.jsx(Ce.button,{type:"button",...n,ref:t,onClick:me(e.onClick,i.onClose)})})});rl.displayName=sm;var rm=m.forwardRef((e,t)=>{const{__scopeToast:r,altText:n,...i}=e;return s.jsx(Ce.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...i,ref:t})});function nm(e){const t=[];return Array.from(e.childNodes).forEach(n=>{if(n.nodeType===n.TEXT_NODE&&n.textContent&&t.push(n.textContent),f0(n)){const i=n.ariaHidden||n.hidden||n.style.display==="none",a=n.dataset.radixToastAnnounceExclude==="";if(!i)if(a){const o=n.dataset.radixToastAnnounceAlt;o&&t.push(o)}else t.push(...nm(n))}}),t}function Cn(e,t,r,{discrete:n}){const i=r.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&i.addEventListener(e,t,{once:!0}),n?$p(i,a):i.dispatchEvent(a)}var id=(e,t,r=0)=>{const n=Math.abs(e.x),i=Math.abs(e.y),a=n>i;return t==="left"||t==="right"?a&&n>r:!a&&i>r};function h0(e=()=>{}){const t=Qe(e);Ft(()=>{let r=0,n=0;return r=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(n)}},[t])}function f0(e){return e.nodeType===e.ELEMENT_NODE}function x0(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const i=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||i?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function ja(e){const t=document.activeElement;return e.some(r=>r===t?!0:(r.focus(),document.activeElement!==t))}var g0=qp,im=Yp,am=Jp,om=Qp,lm=Zp,cm=tm,dm=rl;function um(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=um(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function pm(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=um(e))&&(n&&(n+=" "),n+=t);return n}const ad=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,od=pm,ki=(e,t)=>r=>{var n;if((t==null?void 0:t.variants)==null)return od(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:i,defaultVariants:a}=t,o=Object.keys(i).map(d=>{const u=r==null?void 0:r[d],p=a==null?void 0:a[d];if(u===null)return null;const h=ad(u)||ad(p);return i[d][h]}),l=r&&Object.entries(r).reduce((d,u)=>{let[p,h]=u;return h===void 0||(d[p]=h),d},{}),c=t==null||(n=t.compoundVariants)===null||n===void 0?void 0:n.reduce((d,u)=>{let{class:p,className:h,...f}=u;return Object.entries(f).every(g=>{let[x,y]=g;return Array.isArray(y)?y.includes({...a,...l}[x]):{...a,...l}[x]===y})?[...d,p,h]:d},[]);return od(e,o,c,r==null?void 0:r.class,r==null?void 0:r.className)};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v0=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase()),ld=e=>{const t=v0(e);return t.charAt(0).toUpperCase()+t.slice(1)},mm=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim(),b0=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:a,iconNode:o,...l},c)=>m.createElement("svg",{ref:c,...j0,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:mm("lucide",i),...!a&&!b0(l)&&{"aria-hidden":"true"},...l},[...o.map(([d,u])=>m.createElement(d,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(e,t)=>{const r=m.forwardRef(({className:n,...i},a)=>m.createElement(N0,{ref:a,iconNode:t,className:mm(`lucide-${y0(ld(e))}`,`lucide-${e}`,n),...i}));return r.displayName=ld(e),r};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]],S0=B("accessibility",w0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],He=B("activity",C0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ut=B("arrow-right",T0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],Wr=B("atom",E0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],vt=B("book-open",R0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],_s=B("bug",k0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],cd=B("chart-column",P0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],D0=B("check",A0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],M0=B("chevron-down",_0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],O0=B("chevron-left",I0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],pr=B("chevron-right",L0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],hm=B("circle-alert",F0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ce=B("circle-check",V0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],U0=B("circle-x",B0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],fm=B("clock",$0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],z0=B("cloud",H0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Ls=B("code-xml",W0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],q0=B("code",G0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],Pi=B("coffee",K0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]],nl=B("cog",Y0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]],J0=B("command",X0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]],Z0=B("container",Q0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],tj=B("copy",ej);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],rj=B("corner-down-left",sj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],xm=B("cpu",nj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],mt=B("database",ij);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ii=B("external-link",aj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oj=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ai=B("eye",oj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],ss=B("file-code",lj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cj=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],il=B("file-text",cj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],uj=B("fingerprint-pattern",dj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],ot=B("flask-conical",pj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=[["path",{d:"M10 10.5 8 13l2 2.5",key:"m4t9c1"}],["path",{d:"m14 10.5 2 2.5-2 2.5",key:"14w2eb"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",key:"1u1bxd"}]],hj=B("folder-code",mj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]],xj=B("folder-tree",fj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],yj=B("gauge",gj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],js=B("git-branch",vj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],gm=B("git-commit-horizontal",bj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]],lo=B("git-pull-request",jj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],co=B("github",Nj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ym=B("globe",wj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Cj=B("hash",Sj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],vm=B("history",Tj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],bm=B("house",Ej);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],jm=B("info",Rj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],We=B("layers",kj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],al=B("lightbulb",Pj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Fs=B("lock",Aj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dj=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],_j=B("mail",Dj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mj=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ij=B("menu",Mj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oj=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],ol=B("message-square",Oj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Fj=B("moon",Lj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Nm=B("navigation",Vj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bj=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],ll=B("network",Bj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uj=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],wm=B("palette",Uj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $j=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],cl=B("panels-top-left",$j);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hj=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Di=B("pen-tool",Hj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Sm=B("rocket",zj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wj=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],uo=B("rotate-ccw",Wj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gj=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],qj=B("scale",Gj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kj=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]],_i=B("scan-search",Kj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yj=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],sr=B("search",Yj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xj=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Us=B("server",Xj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jj=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Vt=B("settings",Jj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qj=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Zj=B("share-2",Qj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Hn=B("shield-alert",eN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],nt=B("shield-check",tN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Xt=B("shield",sN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Mi=B("smartphone",rN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],dd=B("sun",nN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],ud=B("table",iN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Cm=B("target",aN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Bt=B("terminal",oN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",key:"125lnx"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]],Tm=B("test-tube",lN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Na=B("trending-up",cN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ai=B("triangle-alert",dN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],pN=B("workflow",uN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],dl=B("wrench",mN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Em=B("x",hN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ge=B("zap",fN),xN=(e,t)=>{const r=new Array(e.length+t.length);for(let n=0;n<e.length;n++)r[n]=e[n];for(let n=0;n<t.length;n++)r[e.length+n]=t[n];return r},gN=(e,t)=>({classGroupId:e,validator:t}),Rm=(e=new Map,t=null,r)=>({nextPart:e,validators:t,classGroupId:r}),oi="-",pd=[],yN="arbitrary..",vN=e=>{const t=jN(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return bN(o);const l=o.split(oi),c=l[0]===""&&l.length>1?1:0;return km(l,c,t)},getConflictingClassGroupIds:(o,l)=>{if(l){const c=n[o],d=r[o];return c?d?xN(d,c):c:d||pd}return r[o]||pd}}},km=(e,t,r)=>{if(e.length-t===0)return r.classGroupId;const i=e[t],a=r.nextPart.get(i);if(a){const d=km(e,t+1,a);if(d)return d}const o=r.validators;if(o===null)return;const l=t===0?e.join(oi):e.slice(t).join(oi),c=o.length;for(let d=0;d<c;d++){const u=o[d];if(u.validator(l))return u.classGroupId}},bN=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),r=t.indexOf(":"),n=t.slice(0,r);return n?yN+n:void 0})(),jN=e=>{const{theme:t,classGroups:r}=e;return NN(r,t)},NN=(e,t)=>{const r=Rm();for(const n in e){const i=e[n];ul(i,r,n,t)}return r},ul=(e,t,r,n)=>{const i=e.length;for(let a=0;a<i;a++){const o=e[a];wN(o,t,r,n)}},wN=(e,t,r,n)=>{if(typeof e=="string"){SN(e,t,r);return}if(typeof e=="function"){CN(e,t,r,n);return}TN(e,t,r,n)},SN=(e,t,r)=>{const n=e===""?t:Pm(t,e);n.classGroupId=r},CN=(e,t,r,n)=>{if(EN(e)){ul(e(n),t,r,n);return}t.validators===null&&(t.validators=[]),t.validators.push(gN(r,e))},TN=(e,t,r,n)=>{const i=Object.entries(e),a=i.length;for(let o=0;o<a;o++){const[l,c]=i[o];ul(c,Pm(t,l),r,n)}},Pm=(e,t)=>{let r=e;const n=t.split(oi),i=n.length;for(let a=0;a<i;a++){const o=n[a];let l=r.nextPart.get(o);l||(l=Rm(),r.nextPart.set(o,l)),r=l}return r},EN=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,RN=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=Object.create(null),n=Object.create(null);const i=(a,o)=>{r[a]=o,t++,t>e&&(t=0,n=r,r=Object.create(null))};return{get(a){let o=r[a];if(o!==void 0)return o;if((o=n[a])!==void 0)return i(a,o),o},set(a,o){a in r?r[a]=o:i(a,o)}}},po="!",md=":",kN=[],hd=(e,t,r,n,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:r,maybePostfixModifierPosition:n,isExternal:i}),PN=e=>{const{prefix:t,experimentalParseClassName:r}=e;let n=i=>{const a=[];let o=0,l=0,c=0,d;const u=i.length;for(let x=0;x<u;x++){const y=i[x];if(o===0&&l===0){if(y===md){a.push(i.slice(c,x)),c=x+1;continue}if(y==="/"){d=x;continue}}y==="["?o++:y==="]"?o--:y==="("?l++:y===")"&&l--}const p=a.length===0?i:i.slice(c);let h=p,f=!1;p.endsWith(po)?(h=p.slice(0,-1),f=!0):p.startsWith(po)&&(h=p.slice(1),f=!0);const g=d&&d>c?d-c:void 0;return hd(a,f,h,g)};if(t){const i=t+md,a=n;n=o=>o.startsWith(i)?a(o.slice(i.length)):hd(kN,!1,o,void 0,!0)}if(r){const i=n;n=a=>r({className:a,parseClassName:i})}return n},AN=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((r,n)=>{t.set(r,1e6+n)}),r=>{const n=[];let i=[];for(let a=0;a<r.length;a++){const o=r[a],l=o[0]==="[",c=t.has(o);l||c?(i.length>0&&(i.sort(),n.push(...i),i=[]),n.push(o)):i.push(o)}return i.length>0&&(i.sort(),n.push(...i)),n}},DN=e=>({cache:RN(e.cacheSize),parseClassName:PN(e),sortModifiers:AN(e),...vN(e)}),_N=/\s+/,MN=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:i,sortModifiers:a}=t,o=[],l=e.trim().split(_N);let c="";for(let d=l.length-1;d>=0;d-=1){const u=l[d],{isExternal:p,modifiers:h,hasImportantModifier:f,baseClassName:g,maybePostfixModifierPosition:x}=r(u);if(p){c=u+(c.length>0?" "+c:c);continue}let y=!!x,v=n(y?g.substring(0,x):g);if(!v){if(!y){c=u+(c.length>0?" "+c:c);continue}if(v=n(g),!v){c=u+(c.length>0?" "+c:c);continue}y=!1}const b=h.length===0?"":h.length===1?h[0]:a(h).join(":"),N=f?b+po:b,S=N+v;if(o.indexOf(S)>-1)continue;o.push(S);const E=i(v,y);for(let A=0;A<E.length;++A){const j=E[A];o.push(N+j)}c=u+(c.length>0?" "+c:c)}return c},IN=(...e)=>{let t=0,r,n,i="";for(;t<e.length;)(r=e[t++])&&(n=Am(r))&&(i&&(i+=" "),i+=n);return i},Am=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=Am(e[n]))&&(r&&(r+=" "),r+=t);return r},ON=(e,...t)=>{let r,n,i,a;const o=c=>{const d=t.reduce((u,p)=>p(u),e());return r=DN(d),n=r.cache.get,i=r.cache.set,a=l,l(c)},l=c=>{const d=n(c);if(d)return d;const u=MN(c,r);return i(c,u),u};return a=o,(...c)=>a(IN(...c))},LN=[],qe=e=>{const t=r=>r[e]||LN;return t.isThemeGetter=!0,t},Dm=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,_m=/^\((?:(\w[\w-]*):)?(.+)\)$/i,FN=/^\d+\/\d+$/,VN=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,BN=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,UN=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,$N=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,HN=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Gs=e=>FN.test(e),he=e=>!!e&&!Number.isNaN(Number(e)),as=e=>!!e&&Number.isInteger(Number(e)),wa=e=>e.endsWith("%")&&he(e.slice(0,-1)),Kt=e=>VN.test(e),zN=()=>!0,WN=e=>BN.test(e)&&!UN.test(e),Mm=()=>!1,GN=e=>$N.test(e),qN=e=>HN.test(e),KN=e=>!q(e)&&!K(e),YN=e=>mr(e,Lm,Mm),q=e=>Dm.test(e),Ts=e=>mr(e,Fm,WN),Sa=e=>mr(e,ew,he),fd=e=>mr(e,Im,Mm),XN=e=>mr(e,Om,qN),Tn=e=>mr(e,Vm,GN),K=e=>_m.test(e),Pr=e=>hr(e,Fm),JN=e=>hr(e,tw),xd=e=>hr(e,Im),QN=e=>hr(e,Lm),ZN=e=>hr(e,Om),En=e=>hr(e,Vm,!0),mr=(e,t,r)=>{const n=Dm.exec(e);return n?n[1]?t(n[1]):r(n[2]):!1},hr=(e,t,r=!1)=>{const n=_m.exec(e);return n?n[1]?t(n[1]):r:!1},Im=e=>e==="position"||e==="percentage",Om=e=>e==="image"||e==="url",Lm=e=>e==="length"||e==="size"||e==="bg-size",Fm=e=>e==="length",ew=e=>e==="number",tw=e=>e==="family-name",Vm=e=>e==="shadow",sw=()=>{const e=qe("color"),t=qe("font"),r=qe("text"),n=qe("font-weight"),i=qe("tracking"),a=qe("leading"),o=qe("breakpoint"),l=qe("container"),c=qe("spacing"),d=qe("radius"),u=qe("shadow"),p=qe("inset-shadow"),h=qe("text-shadow"),f=qe("drop-shadow"),g=qe("blur"),x=qe("perspective"),y=qe("aspect"),v=qe("ease"),b=qe("animate"),N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],S=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],E=()=>[...S(),K,q],A=()=>["auto","hidden","clip","visible","scroll"],j=()=>["auto","contain","none"],C=()=>[K,q,c],_=()=>[Gs,"full","auto",...C()],I=()=>[as,"none","subgrid",K,q],$=()=>["auto",{span:["full",as,K,q]},as,K,q],Y=()=>[as,"auto",K,q],ie=()=>["auto","min","max","fr",K,q],V=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],re=()=>["start","end","center","stretch","center-safe","end-safe"],Z=()=>["auto",...C()],J=()=>[Gs,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...C()],D=()=>[e,K,q],pe=()=>[...S(),xd,fd,{position:[K,q]}],Te=()=>["no-repeat",{repeat:["","x","y","space","round"]}],T=()=>["auto","cover","contain",QN,YN,{size:[K,q]}],M=()=>[wa,Pr,Ts],H=()=>["","none","full",d,K,q],z=()=>["",he,Pr,Ts],ne=()=>["solid","dashed","dotted","double"],de=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],te=()=>[he,wa,xd,fd],Fe=()=>["","none",g,K,q],Pe=()=>["none",he,K,q],wt=()=>["none",he,K,q],rs=()=>[he,K,q],De=()=>[Gs,"full",...C()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Kt],breakpoint:[Kt],color:[zN],container:[Kt],"drop-shadow":[Kt],ease:["in","out","in-out"],font:[KN],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Kt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Kt],shadow:[Kt],spacing:["px",he],text:[Kt],"text-shadow":[Kt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Gs,q,K,y]}],container:["container"],columns:[{columns:[he,q,K,l]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:E()}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:_()}],"inset-x":[{"inset-x":_()}],"inset-y":[{"inset-y":_()}],start:[{start:_()}],end:[{end:_()}],top:[{top:_()}],right:[{right:_()}],bottom:[{bottom:_()}],left:[{left:_()}],visibility:["visible","invisible","collapse"],z:[{z:[as,"auto",K,q]}],basis:[{basis:[Gs,"full","auto",l,...C()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[he,Gs,"auto","initial","none",q]}],grow:[{grow:["",he,K,q]}],shrink:[{shrink:["",he,K,q]}],order:[{order:[as,"first","last","none",K,q]}],"grid-cols":[{"grid-cols":I()}],"col-start-end":[{col:$()}],"col-start":[{"col-start":Y()}],"col-end":[{"col-end":Y()}],"grid-rows":[{"grid-rows":I()}],"row-start-end":[{row:$()}],"row-start":[{"row-start":Y()}],"row-end":[{"row-end":Y()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ie()}],"auto-rows":[{"auto-rows":ie()}],gap:[{gap:C()}],"gap-x":[{"gap-x":C()}],"gap-y":[{"gap-y":C()}],"justify-content":[{justify:[...V(),"normal"]}],"justify-items":[{"justify-items":[...re(),"normal"]}],"justify-self":[{"justify-self":["auto",...re()]}],"align-content":[{content:["normal",...V()]}],"align-items":[{items:[...re(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...re(),{baseline:["","last"]}]}],"place-content":[{"place-content":V()}],"place-items":[{"place-items":[...re(),"baseline"]}],"place-self":[{"place-self":["auto",...re()]}],p:[{p:C()}],px:[{px:C()}],py:[{py:C()}],ps:[{ps:C()}],pe:[{pe:C()}],pt:[{pt:C()}],pr:[{pr:C()}],pb:[{pb:C()}],pl:[{pl:C()}],m:[{m:Z()}],mx:[{mx:Z()}],my:[{my:Z()}],ms:[{ms:Z()}],me:[{me:Z()}],mt:[{mt:Z()}],mr:[{mr:Z()}],mb:[{mb:Z()}],ml:[{ml:Z()}],"space-x":[{"space-x":C()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":C()}],"space-y-reverse":["space-y-reverse"],size:[{size:J()}],w:[{w:[l,"screen",...J()]}],"min-w":[{"min-w":[l,"screen","none",...J()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[o]},...J()]}],h:[{h:["screen","lh",...J()]}],"min-h":[{"min-h":["screen","lh","none",...J()]}],"max-h":[{"max-h":["screen","lh",...J()]}],"font-size":[{text:["base",r,Pr,Ts]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,K,Sa]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",wa,q]}],"font-family":[{font:[JN,q,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,K,q]}],"line-clamp":[{"line-clamp":[he,"none",K,Sa]}],leading:[{leading:[a,...C()]}],"list-image":[{"list-image":["none",K,q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",K,q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ne(),"wavy"]}],"text-decoration-thickness":[{decoration:[he,"from-font","auto",K,Ts]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[he,"auto",K,q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:C()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",K,q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",K,q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:pe()}],"bg-repeat":[{bg:Te()}],"bg-size":[{bg:T()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},as,K,q],radial:["",K,q],conic:[as,K,q]},ZN,XN]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:M()}],"gradient-via-pos":[{via:M()}],"gradient-to-pos":[{to:M()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:H()}],"rounded-s":[{"rounded-s":H()}],"rounded-e":[{"rounded-e":H()}],"rounded-t":[{"rounded-t":H()}],"rounded-r":[{"rounded-r":H()}],"rounded-b":[{"rounded-b":H()}],"rounded-l":[{"rounded-l":H()}],"rounded-ss":[{"rounded-ss":H()}],"rounded-se":[{"rounded-se":H()}],"rounded-ee":[{"rounded-ee":H()}],"rounded-es":[{"rounded-es":H()}],"rounded-tl":[{"rounded-tl":H()}],"rounded-tr":[{"rounded-tr":H()}],"rounded-br":[{"rounded-br":H()}],"rounded-bl":[{"rounded-bl":H()}],"border-w":[{border:z()}],"border-w-x":[{"border-x":z()}],"border-w-y":[{"border-y":z()}],"border-w-s":[{"border-s":z()}],"border-w-e":[{"border-e":z()}],"border-w-t":[{"border-t":z()}],"border-w-r":[{"border-r":z()}],"border-w-b":[{"border-b":z()}],"border-w-l":[{"border-l":z()}],"divide-x":[{"divide-x":z()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":z()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ne(),"hidden","none"]}],"divide-style":[{divide:[...ne(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...ne(),"none","hidden"]}],"outline-offset":[{"outline-offset":[he,K,q]}],"outline-w":[{outline:["",he,Pr,Ts]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",u,En,Tn]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",p,En,Tn]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[he,Ts]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":z()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",h,En,Tn]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[he,K,q]}],"mix-blend":[{"mix-blend":[...de(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":de()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[he]}],"mask-image-linear-from-pos":[{"mask-linear-from":te()}],"mask-image-linear-to-pos":[{"mask-linear-to":te()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":te()}],"mask-image-t-to-pos":[{"mask-t-to":te()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":te()}],"mask-image-r-to-pos":[{"mask-r-to":te()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":te()}],"mask-image-b-to-pos":[{"mask-b-to":te()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":te()}],"mask-image-l-to-pos":[{"mask-l-to":te()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":te()}],"mask-image-x-to-pos":[{"mask-x-to":te()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":te()}],"mask-image-y-to-pos":[{"mask-y-to":te()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[K,q]}],"mask-image-radial-from-pos":[{"mask-radial-from":te()}],"mask-image-radial-to-pos":[{"mask-radial-to":te()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":S()}],"mask-image-conic-pos":[{"mask-conic":[he]}],"mask-image-conic-from-pos":[{"mask-conic-from":te()}],"mask-image-conic-to-pos":[{"mask-conic-to":te()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:pe()}],"mask-repeat":[{mask:Te()}],"mask-size":[{mask:T()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",K,q]}],filter:[{filter:["","none",K,q]}],blur:[{blur:Fe()}],brightness:[{brightness:[he,K,q]}],contrast:[{contrast:[he,K,q]}],"drop-shadow":[{"drop-shadow":["","none",f,En,Tn]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",he,K,q]}],"hue-rotate":[{"hue-rotate":[he,K,q]}],invert:[{invert:["",he,K,q]}],saturate:[{saturate:[he,K,q]}],sepia:[{sepia:["",he,K,q]}],"backdrop-filter":[{"backdrop-filter":["","none",K,q]}],"backdrop-blur":[{"backdrop-blur":Fe()}],"backdrop-brightness":[{"backdrop-brightness":[he,K,q]}],"backdrop-contrast":[{"backdrop-contrast":[he,K,q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",he,K,q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[he,K,q]}],"backdrop-invert":[{"backdrop-invert":["",he,K,q]}],"backdrop-opacity":[{"backdrop-opacity":[he,K,q]}],"backdrop-saturate":[{"backdrop-saturate":[he,K,q]}],"backdrop-sepia":[{"backdrop-sepia":["",he,K,q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":C()}],"border-spacing-x":[{"border-spacing-x":C()}],"border-spacing-y":[{"border-spacing-y":C()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",K,q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[he,"initial",K,q]}],ease:[{ease:["linear","initial",v,K,q]}],delay:[{delay:[he,K,q]}],animate:[{animate:["none",b,K,q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[x,K,q]}],"perspective-origin":[{"perspective-origin":E()}],rotate:[{rotate:Pe()}],"rotate-x":[{"rotate-x":Pe()}],"rotate-y":[{"rotate-y":Pe()}],"rotate-z":[{"rotate-z":Pe()}],scale:[{scale:wt()}],"scale-x":[{"scale-x":wt()}],"scale-y":[{"scale-y":wt()}],"scale-z":[{"scale-z":wt()}],"scale-3d":["scale-3d"],skew:[{skew:rs()}],"skew-x":[{"skew-x":rs()}],"skew-y":[{"skew-y":rs()}],transform:[{transform:[K,q,"","none","gpu","cpu"]}],"transform-origin":[{origin:E()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:De()}],"translate-x":[{"translate-x":De()}],"translate-y":[{"translate-y":De()}],"translate-z":[{"translate-z":De()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",K,q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",K,q]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[he,Pr,Ts,Sa]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},rw=ON(sw);function ae(...e){return rw(pm(e))}const nw=g0,Bm=m.forwardRef(({className:e,...t},r)=>s.jsx(im,{ref:r,className:ae("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Bm.displayName=im.displayName;const iw=ki("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Um=m.forwardRef(({className:e,variant:t,...r},n)=>s.jsx(am,{ref:n,className:ae(iw({variant:t}),e),...r}));Um.displayName=am.displayName;const aw=m.forwardRef(({className:e,...t},r)=>s.jsx(cm,{ref:r,className:ae("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));aw.displayName=cm.displayName;const $m=m.forwardRef(({className:e,...t},r)=>s.jsx(dm,{ref:r,className:ae("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:s.jsx(Em,{className:"h-4 w-4"})}));$m.displayName=dm.displayName;const Hm=m.forwardRef(({className:e,...t},r)=>s.jsx(om,{ref:r,className:ae("text-sm font-semibold [&+div]:text-xs",e),...t}));Hm.displayName=om.displayName;const zm=m.forwardRef(({className:e,...t},r)=>s.jsx(lm,{ref:r,className:ae("text-sm opacity-90",e),...t}));zm.displayName=lm.displayName;function ow(){const{toasts:e}=bb();return s.jsxs(nw,{children:[e.map(function({id:t,title:r,description:n,action:i,...a}){return s.jsxs(Um,{...a,children:[s.jsxs("div",{className:"grid gap-1",children:[r&&s.jsx(Hm,{children:r}),n&&s.jsx(zm,{children:n})]}),i,s.jsx($m,{})]},t)}),s.jsx(Bm,{})]})}var lw=wi[" useId ".trim().toString()]||(()=>{}),cw=0;function rr(e){const[t,r]=m.useState(lw());return Ft(()=>{r(n=>n??String(cw++))},[e]),t?`radix-${t}`:""}const dw=["top","right","bottom","left"],hs=Math.min,dt=Math.max,li=Math.round,Rn=Math.floor,Ot=e=>({x:e,y:e}),uw={left:"right",right:"left",bottom:"top",top:"bottom"},pw={start:"end",end:"start"};function mo(e,t,r){return dt(e,hs(t,r))}function Zt(e,t){return typeof e=="function"?e(t):e}function es(e){return e.split("-")[0]}function fr(e){return e.split("-")[1]}function pl(e){return e==="x"?"y":"x"}function ml(e){return e==="y"?"height":"width"}const mw=new Set(["top","bottom"]);function It(e){return mw.has(es(e))?"y":"x"}function hl(e){return pl(It(e))}function hw(e,t,r){r===void 0&&(r=!1);const n=fr(e),i=hl(e),a=ml(i);let o=i==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(o=ci(o)),[o,ci(o)]}function fw(e){const t=ci(e);return[ho(e),t,ho(t)]}function ho(e){return e.replace(/start|end/g,t=>pw[t])}const gd=["left","right"],yd=["right","left"],xw=["top","bottom"],gw=["bottom","top"];function yw(e,t,r){switch(e){case"top":case"bottom":return r?t?yd:gd:t?gd:yd;case"left":case"right":return t?xw:gw;default:return[]}}function vw(e,t,r,n){const i=fr(e);let a=yw(es(e),r==="start",n);return i&&(a=a.map(o=>o+"-"+i),t&&(a=a.concat(a.map(ho)))),a}function ci(e){return e.replace(/left|right|bottom|top/g,t=>uw[t])}function bw(e){return{top:0,right:0,bottom:0,left:0,...e}}function Wm(e){return typeof e!="number"?bw(e):{top:e,right:e,bottom:e,left:e}}function di(e){const{x:t,y:r,width:n,height:i}=e;return{width:n,height:i,top:r,left:t,right:t+n,bottom:r+i,x:t,y:r}}function vd(e,t,r){let{reference:n,floating:i}=e;const a=It(t),o=hl(t),l=ml(o),c=es(t),d=a==="y",u=n.x+n.width/2-i.width/2,p=n.y+n.height/2-i.height/2,h=n[l]/2-i[l]/2;let f;switch(c){case"top":f={x:u,y:n.y-i.height};break;case"bottom":f={x:u,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:p};break;case"left":f={x:n.x-i.width,y:p};break;default:f={x:n.x,y:n.y}}switch(fr(t)){case"start":f[o]-=h*(r&&d?-1:1);break;case"end":f[o]+=h*(r&&d?-1:1);break}return f}const jw=async(e,t,r)=>{const{placement:n="bottom",strategy:i="absolute",middleware:a=[],platform:o}=r,l=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t));let d=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:p}=vd(d,n,c),h=n,f={},g=0;for(let x=0;x<l.length;x++){const{name:y,fn:v}=l[x],{x:b,y:N,data:S,reset:E}=await v({x:u,y:p,initialPlacement:n,placement:h,strategy:i,middlewareData:f,rects:d,platform:o,elements:{reference:e,floating:t}});u=b??u,p=N??p,f={...f,[y]:{...f[y],...S}},E&&g<=50&&(g++,typeof E=="object"&&(E.placement&&(h=E.placement),E.rects&&(d=E.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):E.rects),{x:u,y:p}=vd(d,h,c)),x=-1)}return{x:u,y:p,placement:h,strategy:i,middlewareData:f}};async function Gr(e,t){var r;t===void 0&&(t={});const{x:n,y:i,platform:a,rects:o,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:h=!1,padding:f=0}=Zt(t,e),g=Wm(f),y=l[h?p==="floating"?"reference":"floating":p],v=di(await a.getClippingRect({element:(r=await(a.isElement==null?void 0:a.isElement(y)))==null||r?y:y.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(l.floating)),boundary:d,rootBoundary:u,strategy:c})),b=p==="floating"?{x:n,y:i,width:o.floating.width,height:o.floating.height}:o.reference,N=await(a.getOffsetParent==null?void 0:a.getOffsetParent(l.floating)),S=await(a.isElement==null?void 0:a.isElement(N))?await(a.getScale==null?void 0:a.getScale(N))||{x:1,y:1}:{x:1,y:1},E=di(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:N,strategy:c}):b);return{top:(v.top-E.top+g.top)/S.y,bottom:(E.bottom-v.bottom+g.bottom)/S.y,left:(v.left-E.left+g.left)/S.x,right:(E.right-v.right+g.right)/S.x}}const Nw=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:i,rects:a,platform:o,elements:l,middlewareData:c}=t,{element:d,padding:u=0}=Zt(e,t)||{};if(d==null)return{};const p=Wm(u),h={x:r,y:n},f=hl(i),g=ml(f),x=await o.getDimensions(d),y=f==="y",v=y?"top":"left",b=y?"bottom":"right",N=y?"clientHeight":"clientWidth",S=a.reference[g]+a.reference[f]-h[f]-a.floating[g],E=h[f]-a.reference[f],A=await(o.getOffsetParent==null?void 0:o.getOffsetParent(d));let j=A?A[N]:0;(!j||!await(o.isElement==null?void 0:o.isElement(A)))&&(j=l.floating[N]||a.floating[g]);const C=S/2-E/2,_=j/2-x[g]/2-1,I=hs(p[v],_),$=hs(p[b],_),Y=I,ie=j-x[g]-$,V=j/2-x[g]/2+C,re=mo(Y,V,ie),Z=!c.arrow&&fr(i)!=null&&V!==re&&a.reference[g]/2-(V<Y?I:$)-x[g]/2<0,J=Z?V<Y?V-Y:V-ie:0;return{[f]:h[f]+J,data:{[f]:re,centerOffset:V-re-J,...Z&&{alignmentOffset:J}},reset:Z}}}),ww=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:i,middlewareData:a,rects:o,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:x=!0,...y}=Zt(e,t);if((r=a.arrow)!=null&&r.alignmentOffset)return{};const v=es(i),b=It(l),N=es(l)===l,S=await(c.isRTL==null?void 0:c.isRTL(d.floating)),E=h||(N||!x?[ci(l)]:fw(l)),A=g!=="none";!h&&A&&E.push(...vw(l,x,g,S));const j=[l,...E],C=await Gr(t,y),_=[];let I=((n=a.flip)==null?void 0:n.overflows)||[];if(u&&_.push(C[v]),p){const V=hw(i,o,S);_.push(C[V[0]],C[V[1]])}if(I=[...I,{placement:i,overflows:_}],!_.every(V=>V<=0)){var $,Y;const V=((($=a.flip)==null?void 0:$.index)||0)+1,re=j[V];if(re&&(!(p==="alignment"?b!==It(re):!1)||I.every(D=>It(D.placement)===b?D.overflows[0]>0:!0)))return{data:{index:V,overflows:I},reset:{placement:re}};let Z=(Y=I.filter(J=>J.overflows[0]<=0).sort((J,D)=>J.overflows[1]-D.overflows[1])[0])==null?void 0:Y.placement;if(!Z)switch(f){case"bestFit":{var ie;const J=(ie=I.filter(D=>{if(A){const pe=It(D.placement);return pe===b||pe==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(pe=>pe>0).reduce((pe,Te)=>pe+Te,0)]).sort((D,pe)=>D[1]-pe[1])[0])==null?void 0:ie[0];J&&(Z=J);break}case"initialPlacement":Z=l;break}if(i!==Z)return{reset:{placement:Z}}}return{}}}};function bd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function jd(e){return dw.some(t=>e[t]>=0)}const Sw=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:r}=t,{strategy:n="referenceHidden",...i}=Zt(e,t);switch(n){case"referenceHidden":{const a=await Gr(t,{...i,elementContext:"reference"}),o=bd(a,r.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:jd(o)}}}case"escaped":{const a=await Gr(t,{...i,altBoundary:!0}),o=bd(a,r.floating);return{data:{escapedOffsets:o,escaped:jd(o)}}}default:return{}}}}},Gm=new Set(["left","top"]);async function Cw(e,t){const{placement:r,platform:n,elements:i}=e,a=await(n.isRTL==null?void 0:n.isRTL(i.floating)),o=es(r),l=fr(r),c=It(r)==="y",d=Gm.has(o)?-1:1,u=a&&c?-1:1,p=Zt(t,e);let{mainAxis:h,crossAxis:f,alignmentAxis:g}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&typeof g=="number"&&(f=l==="end"?g*-1:g),c?{x:f*u,y:h*d}:{x:h*d,y:f*u}}const Tw=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:i,y:a,placement:o,middlewareData:l}=t,c=await Cw(t,e);return o===((r=l.offset)==null?void 0:r.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:i+c.x,y:a+c.y,data:{...c,placement:o}}}}},Ew=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:l={fn:y=>{let{x:v,y:b}=y;return{x:v,y:b}}},...c}=Zt(e,t),d={x:r,y:n},u=await Gr(t,c),p=It(es(i)),h=pl(p);let f=d[h],g=d[p];if(a){const y=h==="y"?"top":"left",v=h==="y"?"bottom":"right",b=f+u[y],N=f-u[v];f=mo(b,f,N)}if(o){const y=p==="y"?"top":"left",v=p==="y"?"bottom":"right",b=g+u[y],N=g-u[v];g=mo(b,g,N)}const x=l.fn({...t,[h]:f,[p]:g});return{...x,data:{x:x.x-r,y:x.y-n,enabled:{[h]:a,[p]:o}}}}}},Rw=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:r,y:n,placement:i,rects:a,middlewareData:o}=t,{offset:l=0,mainAxis:c=!0,crossAxis:d=!0}=Zt(e,t),u={x:r,y:n},p=It(i),h=pl(p);let f=u[h],g=u[p];const x=Zt(l,t),y=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:0,crossAxis:0,...x};if(c){const N=h==="y"?"height":"width",S=a.reference[h]-a.floating[N]+y.mainAxis,E=a.reference[h]+a.reference[N]-y.mainAxis;f<S?f=S:f>E&&(f=E)}if(d){var v,b;const N=h==="y"?"width":"height",S=Gm.has(es(i)),E=a.reference[p]-a.floating[N]+(S&&((v=o.offset)==null?void 0:v[p])||0)+(S?0:y.crossAxis),A=a.reference[p]+a.reference[N]+(S?0:((b=o.offset)==null?void 0:b[p])||0)-(S?y.crossAxis:0);g<E?g=E:g>A&&(g=A)}return{[h]:f,[p]:g}}}},kw=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var r,n;const{placement:i,rects:a,platform:o,elements:l}=t,{apply:c=()=>{},...d}=Zt(e,t),u=await Gr(t,d),p=es(i),h=fr(i),f=It(i)==="y",{width:g,height:x}=a.floating;let y,v;p==="top"||p==="bottom"?(y=p,v=h===(await(o.isRTL==null?void 0:o.isRTL(l.floating))?"start":"end")?"left":"right"):(v=p,y=h==="end"?"top":"bottom");const b=x-u.top-u.bottom,N=g-u.left-u.right,S=hs(x-u[y],b),E=hs(g-u[v],N),A=!t.middlewareData.shift;let j=S,C=E;if((r=t.middlewareData.shift)!=null&&r.enabled.x&&(C=N),(n=t.middlewareData.shift)!=null&&n.enabled.y&&(j=b),A&&!h){const I=dt(u.left,0),$=dt(u.right,0),Y=dt(u.top,0),ie=dt(u.bottom,0);f?C=g-2*(I!==0||$!==0?I+$:dt(u.left,u.right)):j=x-2*(Y!==0||ie!==0?Y+ie:dt(u.top,u.bottom))}await c({...t,availableWidth:C,availableHeight:j});const _=await o.getDimensions(l.floating);return g!==_.width||x!==_.height?{reset:{rects:!0}}:{}}}};function Ii(){return typeof window<"u"}function xr(e){return qm(e)?(e.nodeName||"").toLowerCase():"#document"}function pt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ht(e){var t;return(t=(qm(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function qm(e){return Ii()?e instanceof Node||e instanceof pt(e).Node:!1}function Rt(e){return Ii()?e instanceof Element||e instanceof pt(e).Element:!1}function Ut(e){return Ii()?e instanceof HTMLElement||e instanceof pt(e).HTMLElement:!1}function Nd(e){return!Ii()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof pt(e).ShadowRoot}const Pw=new Set(["inline","contents"]);function on(e){const{overflow:t,overflowX:r,overflowY:n,display:i}=kt(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!Pw.has(i)}const Aw=new Set(["table","td","th"]);function Dw(e){return Aw.has(xr(e))}const _w=[":popover-open",":modal"];function Oi(e){return _w.some(t=>{try{return e.matches(t)}catch{return!1}})}const Mw=["transform","translate","scale","rotate","perspective"],Iw=["transform","translate","scale","rotate","perspective","filter"],Ow=["paint","layout","strict","content"];function fl(e){const t=xl(),r=Rt(e)?kt(e):e;return Mw.some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||Iw.some(n=>(r.willChange||"").includes(n))||Ow.some(n=>(r.contain||"").includes(n))}function Lw(e){let t=fs(e);for(;Ut(t)&&!lr(t);){if(fl(t))return t;if(Oi(t))return null;t=fs(t)}return null}function xl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Fw=new Set(["html","body","#document"]);function lr(e){return Fw.has(xr(e))}function kt(e){return pt(e).getComputedStyle(e)}function Li(e){return Rt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function fs(e){if(xr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Nd(e)&&e.host||Ht(e);return Nd(t)?t.host:t}function Km(e){const t=fs(e);return lr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ut(t)&&on(t)?t:Km(t)}function qr(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=Km(e),a=i===((n=e.ownerDocument)==null?void 0:n.body),o=pt(i);if(a){const l=fo(o);return t.concat(o,o.visualViewport||[],on(i)?i:[],l&&r?qr(l):[])}return t.concat(i,qr(i,[],r))}function fo(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ym(e){const t=kt(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=Ut(e),a=i?e.offsetWidth:r,o=i?e.offsetHeight:n,l=li(r)!==a||li(n)!==o;return l&&(r=a,n=o),{width:r,height:n,$:l}}function gl(e){return Rt(e)?e:e.contextElement}function nr(e){const t=gl(e);if(!Ut(t))return Ot(1);const r=t.getBoundingClientRect(),{width:n,height:i,$:a}=Ym(t);let o=(a?li(r.width):r.width)/n,l=(a?li(r.height):r.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Vw=Ot(0);function Xm(e){const t=pt(e);return!xl()||!t.visualViewport?Vw:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Bw(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==pt(e)?!1:t}function Vs(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),a=gl(e);let o=Ot(1);t&&(n?Rt(n)&&(o=nr(n)):o=nr(e));const l=Bw(a,r,n)?Xm(a):Ot(0);let c=(i.left+l.x)/o.x,d=(i.top+l.y)/o.y,u=i.width/o.x,p=i.height/o.y;if(a){const h=pt(a),f=n&&Rt(n)?pt(n):n;let g=h,x=fo(g);for(;x&&n&&f!==g;){const y=nr(x),v=x.getBoundingClientRect(),b=kt(x),N=v.left+(x.clientLeft+parseFloat(b.paddingLeft))*y.x,S=v.top+(x.clientTop+parseFloat(b.paddingTop))*y.y;c*=y.x,d*=y.y,u*=y.x,p*=y.y,c+=N,d+=S,g=pt(x),x=fo(g)}}return di({width:u,height:p,x:c,y:d})}function Fi(e,t){const r=Li(e).scrollLeft;return t?t.left+r:Vs(Ht(e)).left+r}function Jm(e,t){const r=e.getBoundingClientRect(),n=r.left+t.scrollLeft-Fi(e,r),i=r.top+t.scrollTop;return{x:n,y:i}}function Uw(e){let{elements:t,rect:r,offsetParent:n,strategy:i}=e;const a=i==="fixed",o=Ht(n),l=t?Oi(t.floating):!1;if(n===o||l&&a)return r;let c={scrollLeft:0,scrollTop:0},d=Ot(1);const u=Ot(0),p=Ut(n);if((p||!p&&!a)&&((xr(n)!=="body"||on(o))&&(c=Li(n)),Ut(n))){const f=Vs(n);d=nr(n),u.x=f.x+n.clientLeft,u.y=f.y+n.clientTop}const h=o&&!p&&!a?Jm(o,c):Ot(0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-c.scrollLeft*d.x+u.x+h.x,y:r.y*d.y-c.scrollTop*d.y+u.y+h.y}}function $w(e){return Array.from(e.getClientRects())}function Hw(e){const t=Ht(e),r=Li(e),n=e.ownerDocument.body,i=dt(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),a=dt(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let o=-r.scrollLeft+Fi(e);const l=-r.scrollTop;return kt(n).direction==="rtl"&&(o+=dt(t.clientWidth,n.clientWidth)-i),{width:i,height:a,x:o,y:l}}const wd=25;function zw(e,t){const r=pt(e),n=Ht(e),i=r.visualViewport;let a=n.clientWidth,o=n.clientHeight,l=0,c=0;if(i){a=i.width,o=i.height;const u=xl();(!u||u&&t==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}const d=Fi(n);if(d<=0){const u=n.ownerDocument,p=u.body,h=getComputedStyle(p),f=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,g=Math.abs(n.clientWidth-p.clientWidth-f);g<=wd&&(a-=g)}else d<=wd&&(a+=d);return{width:a,height:o,x:l,y:c}}const Ww=new Set(["absolute","fixed"]);function Gw(e,t){const r=Vs(e,!0,t==="fixed"),n=r.top+e.clientTop,i=r.left+e.clientLeft,a=Ut(e)?nr(e):Ot(1),o=e.clientWidth*a.x,l=e.clientHeight*a.y,c=i*a.x,d=n*a.y;return{width:o,height:l,x:c,y:d}}function Sd(e,t,r){let n;if(t==="viewport")n=zw(e,r);else if(t==="document")n=Hw(Ht(e));else if(Rt(t))n=Gw(t,r);else{const i=Xm(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return di(n)}function Qm(e,t){const r=fs(e);return r===t||!Rt(r)||lr(r)?!1:kt(r).position==="fixed"||Qm(r,t)}function qw(e,t){const r=t.get(e);if(r)return r;let n=qr(e,[],!1).filter(l=>Rt(l)&&xr(l)!=="body"),i=null;const a=kt(e).position==="fixed";let o=a?fs(e):e;for(;Rt(o)&&!lr(o);){const l=kt(o),c=fl(o);!c&&l.position==="fixed"&&(i=null),(a?!c&&!i:!c&&l.position==="static"&&!!i&&Ww.has(i.position)||on(o)&&!c&&Qm(e,o))?n=n.filter(u=>u!==o):i=l,o=fs(o)}return t.set(e,n),n}function Kw(e){let{element:t,boundary:r,rootBoundary:n,strategy:i}=e;const o=[...r==="clippingAncestors"?Oi(t)?[]:qw(t,this._c):[].concat(r),n],l=o[0],c=o.reduce((d,u)=>{const p=Sd(t,u,i);return d.top=dt(p.top,d.top),d.right=hs(p.right,d.right),d.bottom=hs(p.bottom,d.bottom),d.left=dt(p.left,d.left),d},Sd(t,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Yw(e){const{width:t,height:r}=Ym(e);return{width:t,height:r}}function Xw(e,t,r){const n=Ut(t),i=Ht(t),a=r==="fixed",o=Vs(e,!0,a,t);let l={scrollLeft:0,scrollTop:0};const c=Ot(0);function d(){c.x=Fi(i)}if(n||!n&&!a)if((xr(t)!=="body"||on(i))&&(l=Li(t)),n){const f=Vs(t,!0,a,t);c.x=f.x+t.clientLeft,c.y=f.y+t.clientTop}else i&&d();a&&!n&&i&&d();const u=i&&!n&&!a?Jm(i,l):Ot(0),p=o.left+l.scrollLeft-c.x-u.x,h=o.top+l.scrollTop-c.y-u.y;return{x:p,y:h,width:o.width,height:o.height}}function Ca(e){return kt(e).position==="static"}function Cd(e,t){if(!Ut(e)||kt(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return Ht(e)===r&&(r=r.ownerDocument.body),r}function Zm(e,t){const r=pt(e);if(Oi(e))return r;if(!Ut(e)){let i=fs(e);for(;i&&!lr(i);){if(Rt(i)&&!Ca(i))return i;i=fs(i)}return r}let n=Cd(e,t);for(;n&&Dw(n)&&Ca(n);)n=Cd(n,t);return n&&lr(n)&&Ca(n)&&!fl(n)?r:n||Lw(e)||r}const Jw=async function(e){const t=this.getOffsetParent||Zm,r=this.getDimensions,n=await r(e.floating);return{reference:Xw(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Qw(e){return kt(e).direction==="rtl"}const Zw={convertOffsetParentRelativeRectToViewportRelativeRect:Uw,getDocumentElement:Ht,getClippingRect:Kw,getOffsetParent:Zm,getElementRects:Jw,getClientRects:$w,getDimensions:Yw,getScale:nr,isElement:Rt,isRTL:Qw};function eh(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function e1(e,t){let r=null,n;const i=Ht(e);function a(){var l;clearTimeout(n),(l=r)==null||l.disconnect(),r=null}function o(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),a();const d=e.getBoundingClientRect(),{left:u,top:p,width:h,height:f}=d;if(l||t(),!h||!f)return;const g=Rn(p),x=Rn(i.clientWidth-(u+h)),y=Rn(i.clientHeight-(p+f)),v=Rn(u),N={rootMargin:-g+"px "+-x+"px "+-y+"px "+-v+"px",threshold:dt(0,hs(1,c))||1};let S=!0;function E(A){const j=A[0].intersectionRatio;if(j!==c){if(!S)return o();j?o(!1,j):n=setTimeout(()=>{o(!1,1e-7)},1e3)}j===1&&!eh(d,e.getBoundingClientRect())&&o(),S=!1}try{r=new IntersectionObserver(E,{...N,root:i.ownerDocument})}catch{r=new IntersectionObserver(E,N)}r.observe(e)}return o(!0),a}function t1(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=n,d=gl(e),u=i||a?[...d?qr(d):[],...qr(t)]:[];u.forEach(v=>{i&&v.addEventListener("scroll",r,{passive:!0}),a&&v.addEventListener("resize",r)});const p=d&&l?e1(d,r):null;let h=-1,f=null;o&&(f=new ResizeObserver(v=>{let[b]=v;b&&b.target===d&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var N;(N=f)==null||N.observe(t)})),r()}),d&&!c&&f.observe(d),f.observe(t));let g,x=c?Vs(e):null;c&&y();function y(){const v=Vs(e);x&&!eh(x,v)&&r(),x=v,g=requestAnimationFrame(y)}return r(),()=>{var v;u.forEach(b=>{i&&b.removeEventListener("scroll",r),a&&b.removeEventListener("resize",r)}),p==null||p(),(v=f)==null||v.disconnect(),f=null,c&&cancelAnimationFrame(g)}}const s1=Tw,r1=Ew,n1=ww,i1=kw,a1=Sw,Td=Nw,o1=Rw,l1=(e,t,r)=>{const n=new Map,i={platform:Zw,...r},a={...i.platform,_c:n};return jw(e,t,{...i,platform:a})};var c1=typeof document<"u",d1=function(){},zn=c1?m.useLayoutEffect:d1;function ui(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(n=r;n--!==0;)if(!ui(e[n],t[n]))return!1;return!0}if(i=Object.keys(e),r=i.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(t,i[n]))return!1;for(n=r;n--!==0;){const a=i[n];if(!(a==="_owner"&&e.$$typeof)&&!ui(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function th(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ed(e,t){const r=th(e);return Math.round(t*r)/r}function Ta(e){const t=m.useRef(e);return zn(()=>{t.current=e}),t}function u1(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:i,elements:{reference:a,floating:o}={},transform:l=!0,whileElementsMounted:c,open:d}=e,[u,p]=m.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[h,f]=m.useState(n);ui(h,n)||f(n);const[g,x]=m.useState(null),[y,v]=m.useState(null),b=m.useCallback(D=>{D!==A.current&&(A.current=D,x(D))},[]),N=m.useCallback(D=>{D!==j.current&&(j.current=D,v(D))},[]),S=a||g,E=o||y,A=m.useRef(null),j=m.useRef(null),C=m.useRef(u),_=c!=null,I=Ta(c),$=Ta(i),Y=Ta(d),ie=m.useCallback(()=>{if(!A.current||!j.current)return;const D={placement:t,strategy:r,middleware:h};$.current&&(D.platform=$.current),l1(A.current,j.current,D).then(pe=>{const Te={...pe,isPositioned:Y.current!==!1};V.current&&!ui(C.current,Te)&&(C.current=Te,en.flushSync(()=>{p(Te)}))})},[h,t,r,$,Y]);zn(()=>{d===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,p(D=>({...D,isPositioned:!1})))},[d]);const V=m.useRef(!1);zn(()=>(V.current=!0,()=>{V.current=!1}),[]),zn(()=>{if(S&&(A.current=S),E&&(j.current=E),S&&E){if(I.current)return I.current(S,E,ie);ie()}},[S,E,ie,I,_]);const re=m.useMemo(()=>({reference:A,floating:j,setReference:b,setFloating:N}),[b,N]),Z=m.useMemo(()=>({reference:S,floating:E}),[S,E]),J=m.useMemo(()=>{const D={position:r,left:0,top:0};if(!Z.floating)return D;const pe=Ed(Z.floating,u.x),Te=Ed(Z.floating,u.y);return l?{...D,transform:"translate("+pe+"px, "+Te+"px)",...th(Z.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:pe,top:Te}},[r,l,Z.floating,u.x,u.y]);return m.useMemo(()=>({...u,update:ie,refs:re,elements:Z,floatingStyles:J}),[u,ie,re,Z,J])}const p1=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:i}=typeof e=="function"?e(r):e;return n&&t(n)?n.current!=null?Td({element:n.current,padding:i}).fn(r):{}:n?Td({element:n,padding:i}).fn(r):{}}}},m1=(e,t)=>({...s1(e),options:[e,t]}),h1=(e,t)=>({...r1(e),options:[e,t]}),f1=(e,t)=>({...o1(e),options:[e,t]}),x1=(e,t)=>({...n1(e),options:[e,t]}),g1=(e,t)=>({...i1(e),options:[e,t]}),y1=(e,t)=>({...a1(e),options:[e,t]}),v1=(e,t)=>({...p1(e),options:[e,t]});var b1="Arrow",sh=m.forwardRef((e,t)=>{const{children:r,width:n=10,height:i=5,...a}=e;return s.jsx(Ce.svg,{...a,ref:t,width:n,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?r:s.jsx("polygon",{points:"0,0 30,0 15,10"})})});sh.displayName=b1;var j1=sh;function N1(e){const[t,r]=m.useState(void 0);return Ft(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const a=i[0];let o,l;if("borderBoxSize"in a){const c=a.borderBoxSize,d=Array.isArray(c)?c[0]:c;o=d.inlineSize,l=d.blockSize}else o=e.offsetWidth,l=e.offsetHeight;r({width:o,height:l})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}var yl="Popper",[rh,nh]=bs(yl),[w1,ih]=rh(yl),ah=e=>{const{__scopePopper:t,children:r}=e,[n,i]=m.useState(null);return s.jsx(w1,{scope:t,anchor:n,onAnchorChange:i,children:r})};ah.displayName=yl;var oh="PopperAnchor",lh=m.forwardRef((e,t)=>{const{__scopePopper:r,virtualRef:n,...i}=e,a=ih(oh,r),o=m.useRef(null),l=Le(t,o),c=m.useRef(null);return m.useEffect(()=>{const d=c.current;c.current=(n==null?void 0:n.current)||o.current,d!==c.current&&a.onAnchorChange(c.current)}),n?null:s.jsx(Ce.div,{...i,ref:l})});lh.displayName=oh;var vl="PopperContent",[S1,C1]=rh(vl),ch=m.forwardRef((e,t)=>{var te,Fe,Pe,wt,rs,De;const{__scopePopper:r,side:n="bottom",sideOffset:i=0,align:a="center",alignOffset:o=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:d=[],collisionPadding:u=0,sticky:p="partial",hideWhenDetached:h=!1,updatePositionStrategy:f="optimized",onPlaced:g,...x}=e,y=ih(vl,r),[v,b]=m.useState(null),N=Le(t,ft=>b(ft)),[S,E]=m.useState(null),A=N1(S),j=(A==null?void 0:A.width)??0,C=(A==null?void 0:A.height)??0,_=n+(a!=="center"?"-"+a:""),I=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},$=Array.isArray(d)?d:[d],Y=$.length>0,ie={padding:I,boundary:$.filter(E1),altBoundary:Y},{refs:V,floatingStyles:re,placement:Z,isPositioned:J,middlewareData:D}=u1({strategy:"fixed",placement:_,whileElementsMounted:(...ft)=>t1(...ft,{animationFrame:f==="always"}),elements:{reference:y.anchor},middleware:[m1({mainAxis:i+C,alignmentAxis:o}),c&&h1({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?f1():void 0,...ie}),c&&x1({...ie}),g1({...ie,apply:({elements:ft,rects:jr,availableWidth:ta,availableHeight:Wt})=>{const{width:sa,height:ra}=jr.reference,ws=ft.floating.style;ws.setProperty("--radix-popper-available-width",`${ta}px`),ws.setProperty("--radix-popper-available-height",`${Wt}px`),ws.setProperty("--radix-popper-anchor-width",`${sa}px`),ws.setProperty("--radix-popper-anchor-height",`${ra}px`)}}),S&&v1({element:S,padding:l}),R1({arrowWidth:j,arrowHeight:C}),h&&y1({strategy:"referenceHidden",...ie})]}),[pe,Te]=ph(Z),T=Qe(g);Ft(()=>{J&&(T==null||T())},[J,T]);const M=(te=D.arrow)==null?void 0:te.x,H=(Fe=D.arrow)==null?void 0:Fe.y,z=((Pe=D.arrow)==null?void 0:Pe.centerOffset)!==0,[ne,de]=m.useState();return Ft(()=>{v&&de(window.getComputedStyle(v).zIndex)},[v]),s.jsx("div",{ref:V.setFloating,"data-radix-popper-content-wrapper":"",style:{...re,transform:J?re.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ne,"--radix-popper-transform-origin":[(wt=D.transformOrigin)==null?void 0:wt.x,(rs=D.transformOrigin)==null?void 0:rs.y].join(" "),...((De=D.hide)==null?void 0:De.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:s.jsx(S1,{scope:r,placedSide:pe,onArrowChange:E,arrowX:M,arrowY:H,shouldHideArrow:z,children:s.jsx(Ce.div,{"data-side":pe,"data-align":Te,...x,ref:N,style:{...x.style,animation:J?void 0:"none"}})})})});ch.displayName=vl;var dh="PopperArrow",T1={top:"bottom",right:"left",bottom:"top",left:"right"},uh=m.forwardRef(function(t,r){const{__scopePopper:n,...i}=t,a=C1(dh,n),o=T1[a.placedSide];return s.jsx("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0},children:s.jsx(j1,{...i,ref:r,style:{...i.style,display:"block"}})})});uh.displayName=dh;function E1(e){return e!==null}var R1=e=>({name:"transformOrigin",options:e,fn(t){var y,v,b;const{placement:r,rects:n,middlewareData:i}=t,o=((y=i.arrow)==null?void 0:y.centerOffset)!==0,l=o?0:e.arrowWidth,c=o?0:e.arrowHeight,[d,u]=ph(r),p={start:"0%",center:"50%",end:"100%"}[u],h=(((v=i.arrow)==null?void 0:v.x)??0)+l/2,f=(((b=i.arrow)==null?void 0:b.y)??0)+c/2;let g="",x="";return d==="bottom"?(g=o?p:`${h}px`,x=`${-c}px`):d==="top"?(g=o?p:`${h}px`,x=`${n.floating.height+c}px`):d==="right"?(g=`${-c}px`,x=o?p:`${f}px`):d==="left"&&(g=`${n.floating.width+c}px`,x=o?p:`${f}px`),{data:{x:g,y:x}}}});function ph(e){const[t,r="center"]=e.split("-");return[t,r]}var k1=ah,P1=lh,A1=ch,D1=uh,_1=Symbol("radix.slottable");function M1(e){const t=({children:r})=>s.jsx(s.Fragment,{children:r});return t.displayName=`${e}.Slottable`,t.__radixId=_1,t}var[Vi]=bs("Tooltip",[nh]),Bi=nh(),mh="TooltipProvider",I1=700,xo="tooltip.open",[O1,bl]=Vi(mh),hh=e=>{const{__scopeTooltip:t,delayDuration:r=I1,skipDelayDuration:n=300,disableHoverableContent:i=!1,children:a}=e,o=m.useRef(!0),l=m.useRef(!1),c=m.useRef(0);return m.useEffect(()=>{const d=c.current;return()=>window.clearTimeout(d)},[]),s.jsx(O1,{scope:t,isOpenDelayedRef:o,delayDuration:r,onOpen:m.useCallback(()=>{window.clearTimeout(c.current),o.current=!1},[]),onClose:m.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>o.current=!0,n)},[n]),isPointerInTransitRef:l,onPointerInTransitChange:m.useCallback(d=>{l.current=d},[]),disableHoverableContent:i,children:a})};hh.displayName=mh;var Kr="Tooltip",[L1,ln]=Vi(Kr),fh=e=>{const{__scopeTooltip:t,children:r,open:n,defaultOpen:i,onOpenChange:a,disableHoverableContent:o,delayDuration:l}=e,c=bl(Kr,e.__scopeTooltip),d=Bi(t),[u,p]=m.useState(null),h=rr(),f=m.useRef(0),g=o??c.disableHoverableContent,x=l??c.delayDuration,y=m.useRef(!1),[v,b]=nn({prop:n,defaultProp:i??!1,onChange:j=>{j?(c.onOpen(),document.dispatchEvent(new CustomEvent(xo))):c.onClose(),a==null||a(j)},caller:Kr}),N=m.useMemo(()=>v?y.current?"delayed-open":"instant-open":"closed",[v]),S=m.useCallback(()=>{window.clearTimeout(f.current),f.current=0,y.current=!1,b(!0)},[b]),E=m.useCallback(()=>{window.clearTimeout(f.current),f.current=0,b(!1)},[b]),A=m.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{y.current=!0,b(!0),f.current=0},x)},[x,b]);return m.useEffect(()=>()=>{f.current&&(window.clearTimeout(f.current),f.current=0)},[]),s.jsx(k1,{...d,children:s.jsx(L1,{scope:t,contentId:h,open:v,stateAttribute:N,trigger:u,onTriggerChange:p,onTriggerEnter:m.useCallback(()=>{c.isOpenDelayedRef.current?A():S()},[c.isOpenDelayedRef,A,S]),onTriggerLeave:m.useCallback(()=>{g?E():(window.clearTimeout(f.current),f.current=0)},[E,g]),onOpen:S,onClose:E,disableHoverableContent:g,children:r})})};fh.displayName=Kr;var go="TooltipTrigger",xh=m.forwardRef((e,t)=>{const{__scopeTooltip:r,...n}=e,i=ln(go,r),a=bl(go,r),o=Bi(r),l=m.useRef(null),c=Le(t,l,i.onTriggerChange),d=m.useRef(!1),u=m.useRef(!1),p=m.useCallback(()=>d.current=!1,[]);return m.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),s.jsx(P1,{asChild:!0,...o,children:s.jsx(Ce.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...n,ref:c,onPointerMove:me(e.onPointerMove,h=>{h.pointerType!=="touch"&&!u.current&&!a.isPointerInTransitRef.current&&(i.onTriggerEnter(),u.current=!0)}),onPointerLeave:me(e.onPointerLeave,()=>{i.onTriggerLeave(),u.current=!1}),onPointerDown:me(e.onPointerDown,()=>{i.open&&i.onClose(),d.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:me(e.onFocus,()=>{d.current||i.onOpen()}),onBlur:me(e.onBlur,i.onClose),onClick:me(e.onClick,i.onClose)})})});xh.displayName=go;var jl="TooltipPortal",[F1,V1]=Vi(jl,{forceMount:void 0}),gh=e=>{const{__scopeTooltip:t,forceMount:r,children:n,container:i}=e,a=ln(jl,t);return s.jsx(F1,{scope:t,forceMount:r,children:s.jsx(bt,{present:r||a.open,children:s.jsx(Ti,{asChild:!0,container:i,children:n})})})};gh.displayName=jl;var cr="TooltipContent",yh=m.forwardRef((e,t)=>{const r=V1(cr,e.__scopeTooltip),{forceMount:n=r.forceMount,side:i="top",...a}=e,o=ln(cr,e.__scopeTooltip);return s.jsx(bt,{present:n||o.open,children:o.disableHoverableContent?s.jsx(vh,{side:i,...a,ref:t}):s.jsx(B1,{side:i,...a,ref:t})})}),B1=m.forwardRef((e,t)=>{const r=ln(cr,e.__scopeTooltip),n=bl(cr,e.__scopeTooltip),i=m.useRef(null),a=Le(t,i),[o,l]=m.useState(null),{trigger:c,onClose:d}=r,u=i.current,{onPointerInTransitChange:p}=n,h=m.useCallback(()=>{l(null),p(!1)},[p]),f=m.useCallback((g,x)=>{const y=g.currentTarget,v={x:g.clientX,y:g.clientY},b=W1(v,y.getBoundingClientRect()),N=G1(v,b),S=q1(x.getBoundingClientRect()),E=Y1([...N,...S]);l(E),p(!0)},[p]);return m.useEffect(()=>()=>h(),[h]),m.useEffect(()=>{if(c&&u){const g=y=>f(y,u),x=y=>f(y,c);return c.addEventListener("pointerleave",g),u.addEventListener("pointerleave",x),()=>{c.removeEventListener("pointerleave",g),u.removeEventListener("pointerleave",x)}}},[c,u,f,h]),m.useEffect(()=>{if(o){const g=x=>{const y=x.target,v={x:x.clientX,y:x.clientY},b=(c==null?void 0:c.contains(y))||(u==null?void 0:u.contains(y)),N=!K1(v,o);b?h():N&&(h(),d())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[c,u,o,d,h]),s.jsx(vh,{...e,ref:a})}),[U1,$1]=Vi(Kr,{isInside:!1}),H1=M1("TooltipContent"),vh=m.forwardRef((e,t)=>{const{__scopeTooltip:r,children:n,"aria-label":i,onEscapeKeyDown:a,onPointerDownOutside:o,...l}=e,c=ln(cr,r),d=Bi(r),{onClose:u}=c;return m.useEffect(()=>(document.addEventListener(xo,u),()=>document.removeEventListener(xo,u)),[u]),m.useEffect(()=>{if(c.trigger){const p=h=>{const f=h.target;f!=null&&f.contains(c.trigger)&&u()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[c.trigger,u]),s.jsx(Ci,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:o,onFocusOutside:p=>p.preventDefault(),onDismiss:u,children:s.jsxs(A1,{"data-state":c.stateAttribute,...d,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[s.jsx(H1,{children:n}),s.jsx(U1,{scope:r,isInside:!0,children:s.jsx(Zb,{id:c.contentId,role:"tooltip",children:i||n})})]})})});yh.displayName=cr;var bh="TooltipArrow",z1=m.forwardRef((e,t)=>{const{__scopeTooltip:r,...n}=e,i=Bi(r);return $1(bh,r).isInside?null:s.jsx(D1,{...i,...n,ref:t})});z1.displayName=bh;function W1(e,t){const r=Math.abs(t.top-e.y),n=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(r,n,i,a)){case a:return"left";case i:return"right";case r:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function G1(e,t,r=5){const n=[];switch(t){case"top":n.push({x:e.x-r,y:e.y+r},{x:e.x+r,y:e.y+r});break;case"bottom":n.push({x:e.x-r,y:e.y-r},{x:e.x+r,y:e.y-r});break;case"left":n.push({x:e.x+r,y:e.y-r},{x:e.x+r,y:e.y+r});break;case"right":n.push({x:e.x-r,y:e.y-r},{x:e.x-r,y:e.y+r});break}return n}function q1(e){const{top:t,right:r,bottom:n,left:i}=e;return[{x:i,y:t},{x:r,y:t},{x:r,y:n},{x:i,y:n}]}function K1(e,t){const{x:r,y:n}=e;let i=!1;for(let a=0,o=t.length-1;a<t.length;o=a++){const l=t[a],c=t[o],d=l.x,u=l.y,p=c.x,h=c.y;u>n!=h>n&&r<(p-d)*(n-u)/(h-u)+d&&(i=!i)}return i}function Y1(e){const t=e.slice();return t.sort((r,n)=>r.x<n.x?-1:r.x>n.x?1:r.y<n.y?-1:r.y>n.y?1:0),X1(t)}function X1(e){if(e.length<=1)return e.slice();const t=[];for(let n=0;n<e.length;n++){const i=e[n];for(;t.length>=2;){const a=t[t.length-1],o=t[t.length-2];if((a.x-o.x)*(i.y-o.y)>=(a.y-o.y)*(i.x-o.x))t.pop();else break}t.push(i)}t.pop();const r=[];for(let n=e.length-1;n>=0;n--){const i=e[n];for(;r.length>=2;){const a=r[r.length-1],o=r[r.length-2];if((a.x-o.x)*(i.y-o.y)>=(a.y-o.y)*(i.x-o.x))r.pop();else break}r.push(i)}return r.pop(),t.length===1&&r.length===1&&t[0].x===r[0].x&&t[0].y===r[0].y?t:t.concat(r)}var J1=hh,Q1=fh,Z1=xh,eS=gh,jh=yh;const tS=J1,sS=Q1,rS=Z1,Nh=m.forwardRef(({className:e,sideOffset:t=4,...r},n)=>s.jsx(eS,{children:s.jsx(jh,{ref:n,sideOffset:t,className:ae("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",e),...r})}));Nh.displayName=jh.displayName;function nS(){const[e,t]=m.useState(!1);return m.useEffect(()=>{const r=i=>{if((i.ctrlKey||i.metaKey)&&i.key==="k"){i.preventDefault();const a=document.querySelector('input[placeholder*="Search"]');a&&(a.focus(),a.select())}i.key==="Escape"&&e&&t(!1)},n=i=>{var l;const o=i.target.closest("a");if(o&&((l=o.getAttribute("href"))!=null&&l.startsWith("#"))){i.preventDefault();const c=o.getAttribute("href").substring(1),d=document.getElementById(c);if(d){const p=d.offsetTop-64-20;window.scrollTo({top:Math.max(0,p),behavior:"smooth"})}}};return document.addEventListener("keydown",r),document.addEventListener("click",n),()=>{document.removeEventListener("keydown",r),document.removeEventListener("click",n)}},[e]),s.jsxs(tS,{children:[s.jsx(hb,{}),s.jsx(Cv,{}),s.jsx(ow,{})]})}var iS=Symbol.for("react.lazy"),pi=wi[" use ".trim().toString()];function aS(e){return typeof e=="object"&&e!==null&&"then"in e}function wh(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===iS&&"_payload"in e&&aS(e._payload)}function Sh(e){const t=lS(e),r=m.forwardRef((n,i)=>{let{children:a,...o}=n;wh(a)&&typeof pi=="function"&&(a=pi(a._payload));const l=m.Children.toArray(a),c=l.find(dS);if(c){const d=c.props.children,u=l.map(p=>p===c?m.Children.count(d)>1?m.Children.only(null):m.isValidElement(d)?d.props.children:null:p);return s.jsx(t,{...o,ref:i,children:m.isValidElement(d)?m.cloneElement(d,void 0,u):null})}return s.jsx(t,{...o,ref:i,children:a})});return r.displayName=`${e}.Slot`,r}var oS=Sh("Slot");function lS(e){const t=m.forwardRef((r,n)=>{let{children:i,...a}=r;if(wh(i)&&typeof pi=="function"&&(i=pi(i._payload)),m.isValidElement(i)){const o=pS(i),l=uS(a,i.props);return i.type!==m.Fragment&&(l.ref=n?rn(n,o):o),m.cloneElement(i,l)}return m.Children.count(i)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var cS=Symbol("radix.slottable");function dS(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===cS}function uS(e,t){const r={...t};for(const n in t){const i=e[n],a=t[n];/^on[A-Z]/.test(n)?i&&a?r[n]=(...l)=>{const c=a(...l);return i(...l),c}:i&&(r[n]=i):n==="style"?r[n]={...i,...a}:n==="className"&&(r[n]=[i,a].filter(Boolean).join(" "))}return{...e,...r}}function pS(e){var n,i;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}const mS=ki("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),ke=m.forwardRef(({className:e,variant:t,size:r,asChild:n=!1,...i},a)=>{const o=n?oS:"button";return s.jsx(o,{className:ae(mS({variant:t,size:r,className:e})),ref:a,...i})});ke.displayName="Button";const Nl=m.createContext({});function gr(e){const t=m.useRef(null);return t.current===null&&(t.current=e()),t.current}const Ch=typeof window<"u",Ui=Ch?m.useLayoutEffect:m.useEffect,$i=m.createContext(null);function wl(e,t){e.indexOf(t)===-1&&e.push(t)}function Sl(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}const Pt=(e,t,r)=>r>t?t:r<e?e:r;let Yr=()=>{};const ts={},Th=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Eh(e){return typeof e=="object"&&e!==null}const Rh=e=>/^0[^.\s]+$/u.test(e);function Cl(e){let t;return()=>(t===void 0&&(t=e()),t)}const lt=e=>e,hS=(e,t)=>r=>t(e(r)),cn=(...e)=>e.reduce(hS),dr=(e,t,r)=>{const n=t-e;return n===0?1:(r-e)/n};class Tl{constructor(){this.subscriptions=[]}add(t){return wl(this.subscriptions,t),()=>Sl(this.subscriptions,t)}notify(t,r,n){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,r,n);else for(let a=0;a<i;a++){const o=this.subscriptions[a];o&&o(t,r,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Jt=e=>e*1e3,yt=e=>e/1e3;function El(e,t){return t?e*(1e3/t):0}const kh=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e,fS=1e-7,xS=12;function gS(e,t,r,n,i){let a,o,l=0;do o=t+(r-t)/2,a=kh(o,n,i)-e,a>0?r=o:t=o;while(Math.abs(a)>fS&&++l<xS);return o}function dn(e,t,r,n){if(e===t&&r===n)return lt;const i=a=>gS(a,0,1,e,r);return a=>a===0||a===1?a:kh(i(a),t,n)}const Ph=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ah=e=>t=>1-e(1-t),Dh=dn(.33,1.53,.69,.99),Rl=Ah(Dh),_h=Ph(Rl),Mh=e=>(e*=2)<1?.5*Rl(e):.5*(2-Math.pow(2,-10*(e-1))),kl=e=>1-Math.sin(Math.acos(e)),Ih=Ah(kl),Oh=Ph(kl),yS=dn(.42,0,1,1),vS=dn(0,0,.58,1),Lh=dn(.42,0,.58,1),bS=e=>Array.isArray(e)&&typeof e[0]!="number",Fh=e=>Array.isArray(e)&&typeof e[0]=="number",jS={linear:lt,easeIn:yS,easeInOut:Lh,easeOut:vS,circIn:kl,circInOut:Oh,circOut:Ih,backIn:Rl,backInOut:_h,backOut:Dh,anticipate:Mh},NS=e=>typeof e=="string",Rd=e=>{if(Fh(e)){Yr(e.length===4);const[t,r,n,i]=e;return dn(t,r,n,i)}else if(NS(e))return jS[e];return e},kn=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function wS(e,t){let r=new Set,n=new Set,i=!1,a=!1;const o=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1};function c(u){o.has(u)&&(d.schedule(u),e()),u(l)}const d={schedule:(u,p=!1,h=!1)=>{const g=h&&i?r:n;return p&&o.add(u),g.has(u)||g.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(l=u,i){a=!0;return}i=!0,[r,n]=[n,r],r.forEach(c),r.clear(),i=!1,a&&(a=!1,d.process(u))}};return d}const SS=40;function Vh(e,t){let r=!1,n=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>r=!0,o=kn.reduce((N,S)=>(N[S]=wS(a),N),{}),{setup:l,read:c,resolveKeyframes:d,preUpdate:u,update:p,preRender:h,render:f,postRender:g}=o,x=()=>{const N=ts.useManualTiming?i.timestamp:performance.now();r=!1,ts.useManualTiming||(i.delta=n?1e3/60:Math.max(Math.min(N-i.timestamp,SS),1)),i.timestamp=N,i.isProcessing=!0,l.process(i),c.process(i),d.process(i),u.process(i),p.process(i),h.process(i),f.process(i),g.process(i),i.isProcessing=!1,r&&t&&(n=!1,e(x))},y=()=>{r=!0,n=!0,i.isProcessing||e(x)};return{schedule:kn.reduce((N,S)=>{const E=o[S];return N[S]=(A,j=!1,C=!1)=>(r||y(),E.schedule(A,j,C)),N},{}),cancel:N=>{for(let S=0;S<kn.length;S++)o[kn[S]].cancel(N)},state:i,steps:o}}const{schedule:Se,cancel:At,state:Xe,steps:Ea}=Vh(typeof requestAnimationFrame<"u"?requestAnimationFrame:lt,!0);let Wn;function CS(){Wn=void 0}const st={now:()=>(Wn===void 0&&st.set(Xe.isProcessing||ts.useManualTiming?Xe.timestamp:performance.now()),Wn),set:e=>{Wn=e,queueMicrotask(CS)}},Bh=e=>t=>typeof t=="string"&&t.startsWith(e),Uh=Bh("--"),TS=Bh("var(--"),Pl=e=>TS(e)?ES.test(e.split("/*")[0].trim()):!1,ES=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function kd(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const yr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Xr={...yr,transform:e=>Pt(0,1,e)},Pn={...yr,default:1},Fr=e=>Math.round(e*1e5)/1e5,Al=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function RS(e){return e==null}const kS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Dl=(e,t)=>r=>!!(typeof r=="string"&&kS.test(r)&&r.startsWith(e)||t&&!RS(r)&&Object.prototype.hasOwnProperty.call(r,t)),$h=(e,t,r)=>n=>{if(typeof n!="string")return n;const[i,a,o,l]=n.match(Al);return{[e]:parseFloat(i),[t]:parseFloat(a),[r]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},PS=e=>Pt(0,255,e),Ra={...yr,transform:e=>Math.round(PS(e))},As={test:Dl("rgb","red"),parse:$h("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:n=1})=>"rgba("+Ra.transform(e)+", "+Ra.transform(t)+", "+Ra.transform(r)+", "+Fr(Xr.transform(n))+")"};function AS(e){let t="",r="",n="",i="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),n=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),n=e.substring(3,4),i=e.substring(4,5),t+=t,r+=r,n+=n,i+=i),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}}const yo={test:Dl("#"),parse:AS,transform:As.transform},un=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ls=un("deg"),Lt=un("%"),W=un("px"),DS=un("vh"),_S=un("vw"),Pd={...Lt,parse:e=>Lt.parse(e)/100,transform:e=>Lt.transform(e*100)},Js={test:Dl("hsl","hue"),parse:$h("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:n=1})=>"hsla("+Math.round(e)+", "+Lt.transform(Fr(t))+", "+Lt.transform(Fr(r))+", "+Fr(Xr.transform(n))+")"},$e={test:e=>As.test(e)||yo.test(e)||Js.test(e),parse:e=>As.test(e)?As.parse(e):Js.test(e)?Js.parse(e):yo.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?As.transform(e):Js.transform(e),getAnimatableNone:e=>{const t=$e.parse(e);return t.alpha=0,$e.transform(t)}},MS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function IS(e){var t,r;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Al))==null?void 0:t.length)||0)+(((r=e.match(MS))==null?void 0:r.length)||0)>0}const Hh="number",zh="color",OS="var",LS="var(",Ad="${}",FS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Jr(e){const t=e.toString(),r=[],n={color:[],number:[],var:[]},i=[];let a=0;const l=t.replace(FS,c=>($e.test(c)?(n.color.push(a),i.push(zh),r.push($e.parse(c))):c.startsWith(LS)?(n.var.push(a),i.push(OS),r.push(c)):(n.number.push(a),i.push(Hh),r.push(parseFloat(c))),++a,Ad)).split(Ad);return{values:r,split:l,indexes:n,types:i}}function Wh(e){return Jr(e).values}function Gh(e){const{split:t,types:r}=Jr(e),n=t.length;return i=>{let a="";for(let o=0;o<n;o++)if(a+=t[o],i[o]!==void 0){const l=r[o];l===Hh?a+=Fr(i[o]):l===zh?a+=$e.transform(i[o]):a+=i[o]}return a}}const VS=e=>typeof e=="number"?0:$e.test(e)?$e.getAnimatableNone(e):e;function BS(e){const t=Wh(e);return Gh(e)(t.map(VS))}const xs={test:IS,parse:Wh,createTransformer:Gh,getAnimatableNone:BS};function ka(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function US({hue:e,saturation:t,lightness:r,alpha:n}){e/=360,t/=100,r/=100;let i=0,a=0,o=0;if(!t)i=a=o=r;else{const l=r<.5?r*(1+t):r+t-r*t,c=2*r-l;i=ka(c,l,e+1/3),a=ka(c,l,e),o=ka(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:n}}function mi(e,t){return r=>r>0?t:e}const _e=(e,t,r)=>e+(t-e)*r,Pa=(e,t,r)=>{const n=e*e,i=r*(t*t-n)+n;return i<0?0:Math.sqrt(i)},$S=[yo,As,Js],HS=e=>$S.find(t=>t.test(e));function Dd(e){const t=HS(e);if(!t)return!1;let r=t.parse(e);return t===Js&&(r=US(r)),r}const _d=(e,t)=>{const r=Dd(e),n=Dd(t);if(!r||!n)return mi(e,t);const i={...r};return a=>(i.red=Pa(r.red,n.red,a),i.green=Pa(r.green,n.green,a),i.blue=Pa(r.blue,n.blue,a),i.alpha=_e(r.alpha,n.alpha,a),As.transform(i))},vo=new Set(["none","hidden"]);function zS(e,t){return vo.has(e)?r=>r<=0?e:t:r=>r>=1?t:e}function WS(e,t){return r=>_e(e,t,r)}function _l(e){return typeof e=="number"?WS:typeof e=="string"?Pl(e)?mi:$e.test(e)?_d:KS:Array.isArray(e)?qh:typeof e=="object"?$e.test(e)?_d:GS:mi}function qh(e,t){const r=[...e],n=r.length,i=e.map((a,o)=>_l(a)(a,t[o]));return a=>{for(let o=0;o<n;o++)r[o]=i[o](a);return r}}function GS(e,t){const r={...e,...t},n={};for(const i in r)e[i]!==void 0&&t[i]!==void 0&&(n[i]=_l(e[i])(e[i],t[i]));return i=>{for(const a in n)r[a]=n[a](i);return r}}function qS(e,t){const r=[],n={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const a=t.types[i],o=e.indexes[a][n[a]],l=e.values[o]??0;r[i]=l,n[a]++}return r}const KS=(e,t)=>{const r=xs.createTransformer(t),n=Jr(e),i=Jr(t);return n.indexes.var.length===i.indexes.var.length&&n.indexes.color.length===i.indexes.color.length&&n.indexes.number.length>=i.indexes.number.length?vo.has(e)&&!i.values.length||vo.has(t)&&!n.values.length?zS(e,t):cn(qh(qS(n,i),i.values),r):mi(e,t)};function Kh(e,t,r){return typeof e=="number"&&typeof t=="number"&&typeof r=="number"?_e(e,t,r):_l(e)(e,t)}const YS=e=>{const t=({timestamp:r})=>e(r);return{start:(r=!0)=>Se.update(t,r),stop:()=>At(t),now:()=>Xe.isProcessing?Xe.timestamp:st.now()}},Yh=(e,t,r=10)=>{let n="";const i=Math.max(Math.round(t/r),2);for(let a=0;a<i;a++)n+=Math.round(e(a/(i-1))*1e4)/1e4+", ";return`linear(${n.substring(0,n.length-2)})`},hi=2e4;function Ml(e){let t=0;const r=50;let n=e.next(t);for(;!n.done&&t<hi;)t+=r,n=e.next(t);return t>=hi?1/0:t}function XS(e,t=100,r){const n=r({...e,keyframes:[0,t]}),i=Math.min(Ml(n),hi);return{type:"keyframes",ease:a=>n.next(i*a).value/t,duration:yt(i)}}const JS=5;function Xh(e,t,r){const n=Math.max(t-JS,0);return El(r-e(n),t-n)}const Oe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Aa=.001;function QS({duration:e=Oe.duration,bounce:t=Oe.bounce,velocity:r=Oe.velocity,mass:n=Oe.mass}){let i,a,o=1-t;o=Pt(Oe.minDamping,Oe.maxDamping,o),e=Pt(Oe.minDuration,Oe.maxDuration,yt(e)),o<1?(i=d=>{const u=d*o,p=u*e,h=u-r,f=bo(d,o),g=Math.exp(-p);return Aa-h/f*g},a=d=>{const p=d*o*e,h=p*r+r,f=Math.pow(o,2)*Math.pow(d,2)*e,g=Math.exp(-p),x=bo(Math.pow(d,2),o);return(-i(d)+Aa>0?-1:1)*((h-f)*g)/x}):(i=d=>{const u=Math.exp(-d*e),p=(d-r)*e+1;return-Aa+u*p},a=d=>{const u=Math.exp(-d*e),p=(r-d)*(e*e);return u*p});const l=5/e,c=eC(i,a,l);if(e=Jt(e),isNaN(c))return{stiffness:Oe.stiffness,damping:Oe.damping,duration:e};{const d=Math.pow(c,2)*n;return{stiffness:d,damping:o*2*Math.sqrt(n*d),duration:e}}}const ZS=12;function eC(e,t,r){let n=r;for(let i=1;i<ZS;i++)n=n-e(n)/t(n);return n}function bo(e,t){return e*Math.sqrt(1-t*t)}const tC=["duration","bounce"],sC=["stiffness","damping","mass"];function Md(e,t){return t.some(r=>e[r]!==void 0)}function rC(e){let t={velocity:Oe.velocity,stiffness:Oe.stiffness,damping:Oe.damping,mass:Oe.mass,isResolvedFromDuration:!1,...e};if(!Md(e,sC)&&Md(e,tC))if(e.visualDuration){const r=e.visualDuration,n=2*Math.PI/(r*1.2),i=n*n,a=2*Pt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Oe.mass,stiffness:i,damping:a}}else{const r=QS(e);t={...t,...r,mass:Oe.mass},t.isResolvedFromDuration=!0}return t}function fi(e=Oe.visualDuration,t=Oe.bounce){const r=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:n,restDelta:i}=r;const a=r.keyframes[0],o=r.keyframes[r.keyframes.length-1],l={done:!1,value:a},{stiffness:c,damping:d,mass:u,duration:p,velocity:h,isResolvedFromDuration:f}=rC({...r,velocity:-yt(r.velocity||0)}),g=h||0,x=d/(2*Math.sqrt(c*u)),y=o-a,v=yt(Math.sqrt(c/u)),b=Math.abs(y)<5;n||(n=b?Oe.restSpeed.granular:Oe.restSpeed.default),i||(i=b?Oe.restDelta.granular:Oe.restDelta.default);let N;if(x<1){const E=bo(v,x);N=A=>{const j=Math.exp(-x*v*A);return o-j*((g+x*v*y)/E*Math.sin(E*A)+y*Math.cos(E*A))}}else if(x===1)N=E=>o-Math.exp(-v*E)*(y+(g+v*y)*E);else{const E=v*Math.sqrt(x*x-1);N=A=>{const j=Math.exp(-x*v*A),C=Math.min(E*A,300);return o-j*((g+x*v*y)*Math.sinh(C)+E*y*Math.cosh(C))/E}}const S={calculatedDuration:f&&p||null,next:E=>{const A=N(E);if(f)l.done=E>=p;else{let j=E===0?g:0;x<1&&(j=E===0?Jt(g):Xh(N,E,A));const C=Math.abs(j)<=n,_=Math.abs(o-A)<=i;l.done=C&&_}return l.value=l.done?o:A,l},toString:()=>{const E=Math.min(Ml(S),hi),A=Yh(j=>S.next(E*j).value,E,30);return E+"ms "+A},toTransition:()=>{}};return S}fi.applyToOptions=e=>{const t=XS(e,100,fi);return e.ease=t.ease,e.duration=Jt(t.duration),e.type="keyframes",e};function jo({keyframes:e,velocity:t=0,power:r=.8,timeConstant:n=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:l,max:c,restDelta:d=.5,restSpeed:u}){const p=e[0],h={done:!1,value:p},f=C=>l!==void 0&&C<l||c!==void 0&&C>c,g=C=>l===void 0?c:c===void 0||Math.abs(l-C)<Math.abs(c-C)?l:c;let x=r*t;const y=p+x,v=o===void 0?y:o(y);v!==y&&(x=v-p);const b=C=>-x*Math.exp(-C/n),N=C=>v+b(C),S=C=>{const _=b(C),I=N(C);h.done=Math.abs(_)<=d,h.value=h.done?v:I};let E,A;const j=C=>{f(h.value)&&(E=C,A=fi({keyframes:[h.value,g(h.value)],velocity:Xh(N,C,h.value),damping:i,stiffness:a,restDelta:d,restSpeed:u}))};return j(0),{calculatedDuration:null,next:C=>{let _=!1;return!A&&E===void 0&&(_=!0,S(C),j(C)),E!==void 0&&C>=E?A.next(C-E):(!_&&S(C),h)}}}function nC(e,t,r){const n=[],i=r||ts.mix||Kh,a=e.length-1;for(let o=0;o<a;o++){let l=i(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]||lt:t;l=cn(c,l)}n.push(l)}return n}function Il(e,t,{clamp:r=!0,ease:n,mixer:i}={}){const a=e.length;if(Yr(a===t.length),a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=nC(t,n,i),c=l.length,d=u=>{if(o&&u<e[0])return t[0];let p=0;if(c>1)for(;p<e.length-2&&!(u<e[p+1]);p++);const h=dr(e[p],e[p+1],u);return l[p](h)};return r?u=>d(Pt(e[0],e[a-1],u)):d}function iC(e,t){const r=e[e.length-1];for(let n=1;n<=t;n++){const i=dr(0,t,n);e.push(_e(r,1,i))}}function Jh(e){const t=[0];return iC(t,e.length-1),t}function aC(e,t){return e.map(r=>r*t)}function oC(e,t){return e.map(()=>t||Lh).splice(0,e.length-1)}function Vr({duration:e=300,keyframes:t,times:r,ease:n="easeInOut"}){const i=bS(n)?n.map(Rd):Rd(n),a={done:!1,value:t[0]},o=aC(r&&r.length===t.length?r:Jh(t),e),l=Il(o,t,{ease:Array.isArray(i)?i:oC(t,i)});return{calculatedDuration:e,next:c=>(a.value=l(c),a.done=c>=e,a)}}const lC=e=>e!==null;function Ol(e,{repeat:t,repeatType:r="loop"},n,i=1){const a=e.filter(lC),l=i<0||t&&r!=="loop"&&t%2===1?0:a.length-1;return!l||n===void 0?a[l]:n}const cC={decay:jo,inertia:jo,tween:Vr,keyframes:Vr,spring:fi};function Qh(e){typeof e.type=="string"&&(e.type=cC[e.type])}class Ll{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,r){return this.finished.then(t,r)}}const dC=e=>e/100;class Hi extends Ll{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var n,i;const{motionValue:r}=this.options;r&&r.updatedAt!==st.now()&&this.tick(st.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(n=this.options).onStop)==null||i.call(n))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Qh(t);const{type:r=Vr,repeat:n=0,repeatDelay:i=0,repeatType:a,velocity:o=0}=t;let{keyframes:l}=t;const c=r||Vr;c!==Vr&&typeof l[0]!="number"&&(this.mixKeyframes=cn(dC,Kh(l[0],l[1])),l=[0,100]);const d=c({...t,keyframes:l});a==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=Ml(d));const{calculatedDuration:u}=d;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(n+1)-i,this.generator=d}updateTime(t){const r=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(t,r=!1){const{generator:n,totalDuration:i,mixKeyframes:a,mirroredGenerator:o,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return n.next(0);const{delay:d=0,keyframes:u,repeat:p,repeatType:h,repeatDelay:f,type:g,onUpdate:x,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),r?this.currentTime=t:this.updateTime(t);const v=this.currentTime-d*(this.playbackSpeed>=0?1:-1),b=this.playbackSpeed>=0?v<0:v>i;this.currentTime=Math.max(v,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let N=this.currentTime,S=n;if(p){const C=Math.min(this.currentTime,i)/l;let _=Math.floor(C),I=C%1;!I&&C>=1&&(I=1),I===1&&_--,_=Math.min(_,p+1),!!(_%2)&&(h==="reverse"?(I=1-I,f&&(I-=f/l)):h==="mirror"&&(S=o)),N=Pt(0,1,I)*l}const E=b?{done:!1,value:u[0]}:S.next(N);a&&(E.value=a(E.value));let{done:A}=E;!b&&c!==null&&(A=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const j=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return j&&g!==jo&&(E.value=Ol(u,this.options,y,this.speed)),x&&x(E.value),j&&this.finish(),E}then(t,r){return this.finished.then(t,r)}get duration(){return yt(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+yt(t)}get time(){return yt(this.currentTime)}set time(t){var r;t=Jt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(r=this.driver)==null||r.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(st.now());const r=this.playbackSpeed!==t;this.playbackSpeed=t,r&&(this.time=yt(this.currentTime))}play(){var i,a;if(this.isStopped)return;const{driver:t=YS,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),(a=(i=this.options).onPlay)==null||a.call(i);const n=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=n):this.holdTime!==null?this.startTime=n-this.holdTime:this.startTime||(this.startTime=r??n),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(st.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,r;this.notifyFinished(),this.teardown(),this.state="finished",(r=(t=this.options).onComplete)==null||r.call(t)}cancel(){var t,r;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(r=(t=this.options).onCancel)==null||r.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var r;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(r=this.driver)==null||r.stop(),t.observe(this)}}function uC(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Ds=e=>e*180/Math.PI,No=e=>{const t=Ds(Math.atan2(e[1],e[0]));return wo(t)},pC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:No,rotateZ:No,skewX:e=>Ds(Math.atan(e[1])),skewY:e=>Ds(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},wo=e=>(e=e%360,e<0&&(e+=360),e),Id=No,Od=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ld=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),mC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Od,scaleY:Ld,scale:e=>(Od(e)+Ld(e))/2,rotateX:e=>wo(Ds(Math.atan2(e[6],e[5]))),rotateY:e=>wo(Ds(Math.atan2(-e[2],e[0]))),rotateZ:Id,rotate:Id,skewX:e=>Ds(Math.atan(e[4])),skewY:e=>Ds(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function So(e){return e.includes("scale")?1:0}function Co(e,t){if(!e||e==="none")return So(t);const r=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let n,i;if(r)n=mC,i=r;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);n=pC,i=l}if(!i)return So(t);const a=n[t],o=i[1].split(",").map(fC);return typeof a=="function"?a(o):o[a]}const hC=(e,t)=>{const{transform:r="none"}=getComputedStyle(e);return Co(r,t)};function fC(e){return parseFloat(e.trim())}const vr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],br=new Set(vr),Fd=e=>e===yr||e===W,xC=new Set(["x","y","z"]),gC=vr.filter(e=>!xC.has(e));function yC(e){const t=[];return gC.forEach(r=>{const n=e.getValue(r);n!==void 0&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))}),t}const ms={width:({x:e},{paddingLeft:t="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),height:({y:e},{paddingTop:t="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Co(t,"x"),y:(e,{transform:t})=>Co(t,"y")};ms.translateX=ms.x;ms.translateY=ms.y;const Ms=new Set;let To=!1,Eo=!1,Ro=!1;function Zh(){if(Eo){const e=Array.from(Ms).filter(n=>n.needsMeasurement),t=new Set(e.map(n=>n.element)),r=new Map;t.forEach(n=>{const i=yC(n);i.length&&(r.set(n,i),n.render())}),e.forEach(n=>n.measureInitialState()),t.forEach(n=>{n.render();const i=r.get(n);i&&i.forEach(([a,o])=>{var l;(l=n.getValue(a))==null||l.set(o)})}),e.forEach(n=>n.measureEndState()),e.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}Eo=!1,To=!1,Ms.forEach(e=>e.complete(Ro)),Ms.clear()}function ef(){Ms.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Eo=!0)})}function vC(){Ro=!0,ef(),Zh(),Ro=!1}class Fl{constructor(t,r,n,i,a,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=r,this.name=n,this.motionValue=i,this.element=a,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Ms.add(this),To||(To=!0,Se.read(ef),Se.resolveKeyframes(Zh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:r,element:n,motionValue:i}=this;if(t[0]===null){const a=i==null?void 0:i.get(),o=t[t.length-1];if(a!==void 0)t[0]=a;else if(n&&r){const l=n.readValue(r,o);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=o),i&&a===void 0&&i.set(t[0])}uC(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Ms.delete(this)}cancel(){this.state==="scheduled"&&(Ms.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const bC=e=>e.startsWith("--");function jC(e,t,r){bC(t)?e.style.setProperty(t,r):e.style[t]=r}const tf=Cl(()=>window.ScrollTimeline!==void 0),NC={};function wC(e,t){const r=Cl(e);return()=>NC[t]??r()}const sf=wC(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ir=([e,t,r,n])=>`cubic-bezier(${e}, ${t}, ${r}, ${n})`,Vd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ir([0,.65,.55,1]),circOut:Ir([.55,0,1,.45]),backIn:Ir([.31,.01,.66,-.59]),backOut:Ir([.33,1.53,.69,.99])};function rf(e,t){if(e)return typeof e=="function"?sf()?Yh(e,t):"ease-out":Fh(e)?Ir(e):Array.isArray(e)?e.map(r=>rf(r,t)||Vd.easeOut):Vd[e]}function SC(e,t,r,{delay:n=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:l="easeOut",times:c}={},d=void 0){const u={[t]:r};c&&(u.offset=c);const p=rf(l,i);Array.isArray(p)&&(u.easing=p);const h={delay:n,duration:i,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"};return d&&(h.pseudoElement=d),e.animate(u,h)}function nf(e){return typeof e=="function"&&"applyToOptions"in e}function CC({type:e,...t}){return nf(e)&&sf()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class TC extends Ll{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:r,name:n,keyframes:i,pseudoElement:a,allowFlatten:o=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!a,this.allowFlatten=o,this.options=t,Yr(typeof t.type!="string");const d=CC(t);this.animation=SC(r,n,i,d,a),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const u=Ol(i,this.options,l,this.speed);this.updateMotionValue?this.updateMotionValue(u):jC(r,n,u),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,r;(r=(t=this.animation).finish)==null||r.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,r;this.isPseudoElement||(r=(t=this.animation).commitStyles)==null||r.call(t)}get duration(){var r,n;const t=((n=(r=this.animation.effect)==null?void 0:r.getComputedTiming)==null?void 0:n.call(r).duration)||0;return yt(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+yt(t)}get time(){return yt(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Jt(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:r}){var n;return this.allowFlatten&&((n=this.animation.effect)==null||n.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&tf()?(this.animation.timeline=t,lt):r(this)}}const af={anticipate:Mh,backInOut:_h,circInOut:Oh};function EC(e){return e in af}function RC(e){typeof e.ease=="string"&&EC(e.ease)&&(e.ease=af[e.ease])}const Da=10;class kC extends TC{constructor(t){RC(t),Qh(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:r,onUpdate:n,onComplete:i,element:a,...o}=this.options;if(!r)return;if(t!==void 0){r.set(t);return}const l=new Hi({...o,autoplay:!1}),c=Math.max(Da,st.now()-this.startTime),d=Pt(0,Da,c-Da);r.setWithVelocity(l.sample(Math.max(0,c-d)).value,l.sample(c).value,d),l.stop()}}const Bd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(xs.test(e)||e==="0")&&!e.startsWith("url("));function PC(e){const t=e[0];if(e.length===1)return!0;for(let r=0;r<e.length;r++)if(e[r]!==t)return!0}function AC(e,t,r,n){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],o=Bd(i,t),l=Bd(a,t);return!o||!l?!1:PC(e)||(r==="spring"||nf(r))&&n}function ko(e){e.duration=0,e.type="keyframes"}const DC=new Set(["opacity","clipPath","filter","transform"]),_C=Cl(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function MC(e){var u;const{motionValue:t,name:r,repeatDelay:n,repeatType:i,damping:a,type:o}=e;if(!(((u=t==null?void 0:t.owner)==null?void 0:u.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:d}=t.owner.getProps();return _C()&&r&&DC.has(r)&&(r!=="transform"||!d)&&!c&&!n&&i!=="mirror"&&a!==0&&o!=="inertia"}const IC=40;class OC extends Ll{constructor({autoplay:t=!0,delay:r=0,type:n="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",keyframes:l,name:c,motionValue:d,element:u,...p}){var g;super(),this.stop=()=>{var x,y;this._animation&&(this._animation.stop(),(x=this.stopTimeline)==null||x.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=st.now();const h={autoplay:t,delay:r,type:n,repeat:i,repeatDelay:a,repeatType:o,name:c,motionValue:d,element:u,...p},f=(u==null?void 0:u.KeyframeResolver)||Fl;this.keyframeResolver=new f(l,(x,y,v)=>this.onKeyframesResolved(x,y,h,!v),c,d,u),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(t,r,n,i){var y,v;this.keyframeResolver=void 0;const{name:a,type:o,velocity:l,delay:c,isHandoff:d,onUpdate:u}=n;this.resolvedAt=st.now(),AC(t,a,o,l)||((ts.instantAnimations||!c)&&(u==null||u(Ol(t,n,r))),t[0]=t[t.length-1],ko(n),n.repeat=0);const h={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>IC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...n,keyframes:t},f=!d&&MC(h),g=(v=(y=h.motionValue)==null?void 0:y.owner)==null?void 0:v.current,x=f?new kC({...h,element:g}):new Hi(h);x.finished.then(()=>{this.notifyFinished()}).catch(lt),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(t,r){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),vC()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function of(e,t,r,n=0,i=1){const a=Array.from(e).sort((d,u)=>d.sortNodePosition(u)).indexOf(t),o=e.size,l=(o-1)*n;return typeof r=="function"?r(a,o):i===1?a*n:l-a*n}const LC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function FC(e){const t=LC.exec(e);if(!t)return[,];const[,r,n,i]=t;return[`--${r??n}`,i]}function lf(e,t,r=1){const[n,i]=FC(e);if(!n)return;const a=window.getComputedStyle(t).getPropertyValue(n);if(a){const o=a.trim();return Th(o)?parseFloat(o):o}return Pl(i)?lf(i,t,r+1):i}const VC={type:"spring",stiffness:500,damping:25,restSpeed:10},BC=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),UC={type:"keyframes",duration:.8},$C={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},HC=(e,{keyframes:t})=>t.length>2?UC:br.has(e)?e.startsWith("scale")?BC(t[1]):VC:$C,zC=e=>e!==null;function WC(e,{repeat:t,repeatType:r="loop"},n){const i=e.filter(zC),a=t&&r!=="loop"&&t%2===1?0:i.length-1;return i[a]}function Vl(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}function GC({when:e,delay:t,delayChildren:r,staggerChildren:n,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:l,from:c,elapsed:d,...u}){return!!Object.keys(u).length}const Bl=(e,t,r,n={},i,a)=>o=>{const l=Vl(n,e)||{},c=l.delay||n.delay||0;let{elapsed:d=0}=n;d=d-Jt(c);const u={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-d,onUpdate:h=>{t.set(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{o(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:a?void 0:i};GC(l)||Object.assign(u,HC(e,u)),u.duration&&(u.duration=Jt(u.duration)),u.repeatDelay&&(u.repeatDelay=Jt(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let p=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(ko(u),u.delay===0&&(p=!0)),(ts.instantAnimations||ts.skipAnimations)&&(p=!0,ko(u),u.delay=0),u.allowFlatten=!l.type&&!l.ease,p&&!a&&t.get()!==void 0){const h=WC(u.keyframes,l);if(h!==void 0){Se.update(()=>{u.onUpdate(h),u.onComplete()});return}}return l.isSync?new Hi(u):new OC(u)};function Ud(e){const t=[{},{}];return e==null||e.values.forEach((r,n)=>{t[0][n]=r.get(),t[1][n]=r.getVelocity()}),t}function Ul(e,t,r,n){if(typeof t=="function"){const[i,a]=Ud(n);t=t(r!==void 0?r:e.custom,i,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,a]=Ud(n);t=t(r!==void 0?r:e.custom,i,a)}return t}function ir(e,t,r){const n=e.getProps();return Ul(n,t,r!==void 0?r:n.custom,e)}const cf=new Set(["width","height","top","left","right","bottom",...vr]),$d=30,qC=e=>!isNaN(parseFloat(e)),Br={current:void 0};class KC{constructor(t,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=n=>{var a;const i=st.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=r.owner}setCurrent(t){this.current=t,this.updatedAt=st.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=qC(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new Tl);const n=this.events[t].add(r);return t==="change"?()=>{n(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,r,n){this.set(r),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t,r=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return Br.current&&Br.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=st.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>$d)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,$d);return El(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,r;(t=this.dependents)==null||t.clear(),(r=this.events.destroy)==null||r.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Et(e,t){return new KC(e,t)}const Po=e=>Array.isArray(e);function YC(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,Et(r))}function XC(e){return Po(e)?e[e.length-1]||0:e}function JC(e,t){const r=ir(e,t);let{transitionEnd:n={},transition:i={},...a}=r||{};a={...a,...n};for(const o in a){const l=XC(a[o]);YC(e,o,l)}}const Ze=e=>!!(e&&e.getVelocity);function QC(e){return!!(Ze(e)&&e.add)}function Ao(e,t){const r=e.getValue("willChange");if(QC(r))return r.add(t);if(!r&&ts.WillChange){const n=new ts.WillChange("auto");e.addValue("willChange",n),n.add(t)}}function $l(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const ZC="framerAppearId",df="data-"+$l(ZC);function uf(e){return e.props[df]}function e2({protectedKeys:e,needsAnimating:t},r){const n=e.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,n}function pf(e,t,{delay:r=0,transitionOverride:n,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...l}=t;n&&(a=n);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const u in l){const p=e.getValue(u,e.latestValues[u]??null),h=l[u];if(h===void 0||d&&e2(d,u))continue;const f={delay:r,...Vl(a||{},u)},g=p.get();if(g!==void 0&&!p.isAnimating&&!Array.isArray(h)&&h===g&&!f.velocity)continue;let x=!1;if(window.MotionHandoffAnimation){const v=uf(e);if(v){const b=window.MotionHandoffAnimation(v,u,Se);b!==null&&(f.startTime=b,x=!0)}}Ao(e,u),p.start(Bl(u,p,h,e.shouldReduceMotion&&cf.has(u)?{type:!1}:f,e,x));const y=p.animation;y&&c.push(y)}return o&&Promise.all(c).then(()=>{Se.update(()=>{o&&JC(e,o)})}),c}function Do(e,t,r={}){var c;const n=ir(e,t,r.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(i=r.transitionOverride);const a=n?()=>Promise.all(pf(e,n,r)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:u=0,staggerChildren:p,staggerDirection:h}=i;return t2(e,t,d,u,p,h,r)}:()=>Promise.resolve(),{when:l}=i;if(l){const[d,u]=l==="beforeChildren"?[a,o]:[o,a];return d().then(()=>u())}else return Promise.all([a(),o(r.delay)])}function t2(e,t,r=0,n=0,i=0,a=1,o){const l=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),l.push(Do(c,t,{...o,delay:r+(typeof n=="function"?0:n)+of(e.variantChildren,c,n,i,a)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function s2(e,t,r={}){e.notify("AnimationStart",t);let n;if(Array.isArray(t)){const i=t.map(a=>Do(e,a,r));n=Promise.all(i)}else if(typeof t=="string")n=Do(e,t,r);else{const i=typeof t=="function"?ir(e,t,r.custom):t;n=Promise.all(pf(e,i,r))}return n.then(()=>{e.notify("AnimationComplete",t)})}const r2={test:e=>e==="auto",parse:e=>e},mf=e=>t=>t.test(e),hf=[yr,W,Lt,ls,_S,DS,r2],Hd=e=>hf.find(mf(e));function n2(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Rh(e):!0}const i2=new Set(["brightness","contrast","saturate","opacity"]);function a2(e){const[t,r]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[n]=r.match(Al)||[];if(!n)return e;const i=r.replace(n,"");let a=i2.has(t)?1:0;return n!==r&&(a*=100),t+"("+a+i+")"}const o2=/\b([a-z-]*)\(.*?\)/gu,_o={...xs,getAnimatableNone:e=>{const t=e.match(o2);return t?t.map(a2).join(" "):e}},zd={...yr,transform:Math.round},l2={rotate:ls,rotateX:ls,rotateY:ls,rotateZ:ls,scale:Pn,scaleX:Pn,scaleY:Pn,scaleZ:Pn,skew:ls,skewX:ls,skewY:ls,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:Xr,originX:Pd,originY:Pd,originZ:W},Hl={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,inset:W,insetBlock:W,insetBlockStart:W,insetBlockEnd:W,insetInline:W,insetInlineStart:W,insetInlineEnd:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,paddingBlock:W,paddingBlockStart:W,paddingBlockEnd:W,paddingInline:W,paddingInlineStart:W,paddingInlineEnd:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,marginBlock:W,marginBlockStart:W,marginBlockEnd:W,marginInline:W,marginInlineStart:W,marginInlineEnd:W,backgroundPositionX:W,backgroundPositionY:W,...l2,zIndex:zd,fillOpacity:Xr,strokeOpacity:Xr,numOctaves:zd},c2={...Hl,color:$e,backgroundColor:$e,outlineColor:$e,fill:$e,stroke:$e,borderColor:$e,borderTopColor:$e,borderRightColor:$e,borderBottomColor:$e,borderLeftColor:$e,filter:_o,WebkitFilter:_o},ff=e=>c2[e];function xf(e,t){let r=ff(e);return r!==_o&&(r=xs),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const d2=new Set(["auto","none","0"]);function u2(e,t,r){let n=0,i;for(;n<e.length&&!i;){const a=e[n];typeof a=="string"&&!d2.has(a)&&Jr(a).values.length&&(i=e[n]),n++}if(i&&r)for(const a of t)e[a]=xf(r,i)}class p2 extends Fl{constructor(t,r,n,i,a){super(t,r,n,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:r,name:n}=this;if(!r||!r.current)return;super.readKeyframes();for(let u=0;u<t.length;u++){let p=t[u];if(typeof p=="string"&&(p=p.trim(),Pl(p))){const h=lf(p,r.current);h!==void 0&&(t[u]=h),u===t.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!cf.has(n)||t.length!==2)return;const[i,a]=t,o=Hd(i),l=Hd(a),c=kd(i),d=kd(a);if(c!==d&&ms[n]){this.needsMeasurement=!0;return}if(o!==l)if(Fd(o)&&Fd(l))for(let u=0;u<t.length;u++){const p=t[u];typeof p=="string"&&(t[u]=parseFloat(p))}else ms[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:r}=this,n=[];for(let i=0;i<t.length;i++)(t[i]===null||n2(t[i]))&&n.push(i);n.length&&u2(t,n,r)}measureInitialState(){const{element:t,unresolvedKeyframes:r,name:n}=this;if(!t||!t.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ms[n](t.measureViewportBox(),window.getComputedStyle(t.current)),r[0]=this.measuredOrigin;const i=r[r.length-1];i!==void 0&&t.getValue(n,i).jump(i,!1)}measureEndState(){var l;const{element:t,name:r,unresolvedKeyframes:n}=this;if(!t||!t.current)return;const i=t.getValue(r);i&&i.jump(this.measuredOrigin,!1);const a=n.length-1,o=n[a];n[a]=ms[r](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([c,d])=>{t.getValue(c).set(d)}),this.resolveNoneKeyframes()}}function gf(e,t,r){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let n=document;const i=(r==null?void 0:r[e])??n.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const yf=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function zl(e){return Eh(e)&&"offsetHeight"in e}const{schedule:Wl}=Vh(queueMicrotask,!1),Ct={x:!1,y:!1};function vf(){return Ct.x||Ct.y}function m2(e){return e==="x"||e==="y"?Ct[e]?null:(Ct[e]=!0,()=>{Ct[e]=!1}):Ct.x||Ct.y?null:(Ct.x=Ct.y=!0,()=>{Ct.x=Ct.y=!1})}function bf(e,t){const r=gf(e),n=new AbortController,i={passive:!0,...t,signal:n.signal};return[r,i,()=>n.abort()]}function Wd(e){return!(e.pointerType==="touch"||vf())}function h2(e,t,r={}){const[n,i,a]=bf(e,r),o=l=>{if(!Wd(l))return;const{target:c}=l,d=t(c,l);if(typeof d!="function"||!c)return;const u=p=>{Wd(p)&&(d(p),c.removeEventListener("pointerleave",u))};c.addEventListener("pointerleave",u,i)};return n.forEach(l=>{l.addEventListener("pointerenter",o,i)}),a}const jf=(e,t)=>t?e===t?!0:jf(e,t.parentElement):!1,Gl=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,f2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Nf(e){return f2.has(e.tagName)||e.isContentEditable===!0}const Gn=new WeakSet;function Gd(e){return t=>{t.key==="Enter"&&e(t)}}function _a(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const x2=(e,t)=>{const r=e.currentTarget;if(!r)return;const n=Gd(()=>{if(Gn.has(r))return;_a(r,"down");const i=Gd(()=>{_a(r,"up")}),a=()=>_a(r,"cancel");r.addEventListener("keyup",i,t),r.addEventListener("blur",a,t)});r.addEventListener("keydown",n,t),r.addEventListener("blur",()=>r.removeEventListener("keydown",n),t)};function qd(e){return Gl(e)&&!vf()}function g2(e,t,r={}){const[n,i,a]=bf(e,r),o=l=>{const c=l.currentTarget;if(!qd(l))return;Gn.add(c);const d=t(c,l),u=(f,g)=>{window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",h),Gn.has(c)&&Gn.delete(c),qd(f)&&typeof d=="function"&&d(f,{success:g})},p=f=>{u(f,c===window||c===document||r.useGlobalTarget||jf(c,f.target))},h=f=>{u(f,!1)};window.addEventListener("pointerup",p,i),window.addEventListener("pointercancel",h,i)};return n.forEach(l=>{(r.useGlobalTarget?window:l).addEventListener("pointerdown",o,i),zl(l)&&(l.addEventListener("focus",d=>x2(d,i)),!Nf(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),a}function ql(e){return Eh(e)&&"ownerSVGElement"in e}const qn=new WeakMap;let cs;const wf=(e,t,r)=>(n,i)=>i&&i[0]?i[0][e+"Size"]:ql(n)&&"getBBox"in n?n.getBBox()[t]:n[r],y2=wf("inline","width","offsetWidth"),v2=wf("block","height","offsetHeight");function b2({target:e,borderBoxSize:t}){var r;(r=qn.get(e))==null||r.forEach(n=>{n(e,{get width(){return y2(e,t)},get height(){return v2(e,t)}})})}function j2(e){e.forEach(b2)}function N2(){typeof ResizeObserver>"u"||(cs=new ResizeObserver(j2))}function w2(e,t){cs||N2();const r=gf(e);return r.forEach(n=>{let i=qn.get(n);i||(i=new Set,qn.set(n,i)),i.add(t),cs==null||cs.observe(n)}),()=>{r.forEach(n=>{const i=qn.get(n);i==null||i.delete(t),i!=null&&i.size||cs==null||cs.unobserve(n)})}}const Kn=new Set;let Qs;function S2(){Qs=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Kn.forEach(t=>t(e))},window.addEventListener("resize",Qs)}function C2(e){return Kn.add(e),Qs||S2(),()=>{Kn.delete(e),!Kn.size&&typeof Qs=="function"&&(window.removeEventListener("resize",Qs),Qs=void 0)}}function T2(e,t){return typeof e=="function"?C2(e):w2(e,t)}function Sf(e,t){let r;const n=()=>{const{currentTime:i}=t,o=(i===null?0:i.value)/100;r!==o&&e(o),r=o};return Se.preUpdate(n,!0),()=>At(n)}function E2(e){return ql(e)&&e.tagName==="svg"}function R2(...e){const t=!Array.isArray(e[0]),r=t?0:-1,n=e[0+r],i=e[1+r],a=e[2+r],o=e[3+r],l=Il(i,a,o);return t?l(n):l}function k2(e,t,r){const n=e.get();let i=null,a=n,o;const l=typeof n=="string"?n.replace(/[\d.-]/g,""):void 0,c=()=>{i&&(i.stop(),i=null)},d=()=>{c(),i=new Hi({keyframes:[Yd(e.get()),Yd(a)],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...r,onUpdate:o})};if(e.attach((u,p)=>{a=u,o=h=>p(Kd(h,l)),Se.postRender(()=>{var h;d(),(h=e.events.animationStart)==null||h.notify(),i==null||i.then(()=>{var f;(f=e.events.animationComplete)==null||f.notify()})})},c),Ze(t)){const u=t.on("change",h=>e.set(Kd(h,l))),p=e.on("destroy",u);return()=>{u(),p()}}return c}function Kd(e,t){return t?e+t:e}function Yd(e){return typeof e=="number"?e:parseFloat(e)}const P2=[...hf,$e,xs],A2=e=>P2.find(mf(e)),Xd=()=>({translate:0,scale:1,origin:0,originPoint:0}),Zs=()=>({x:Xd(),y:Xd()}),Jd=()=>({min:0,max:0}),Ke=()=>({x:Jd(),y:Jd()}),Mo={current:null},Cf={current:!1},D2=typeof window<"u";function _2(){if(Cf.current=!0,!!D2)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Mo.current=e.matches;e.addEventListener("change",t),t()}else Mo.current=!1}const M2=new WeakMap;function zi(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Qr(e){return typeof e=="string"||Array.isArray(e)}const Kl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Yl=["initial",...Kl];function Wi(e){return zi(e.animate)||Yl.some(t=>Qr(e[t]))}function Tf(e){return!!(Wi(e)||e.variants)}function I2(e,t,r){for(const n in t){const i=t[n],a=r[n];if(Ze(i))e.addValue(n,i);else if(Ze(a))e.addValue(n,Et(i,{owner:e}));else if(a!==i)if(e.hasValue(n)){const o=e.getValue(n);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(n);e.addValue(n,Et(o!==void 0?o:i,{owner:e}))}}for(const n in r)t[n]===void 0&&e.removeValue(n);return t}const Qd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let xi={};function Ef(e){xi=e}function O2(){return xi}class L2{scrapeMotionValuesFromProps(t,r,n){return{}}constructor({parent:t,props:r,presenceContext:n,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Fl,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=st.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,Se.render(this.render,!1,!0))};const{latestValues:c,renderState:d}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=r.initial?{...c}:{},this.renderState=d,this.parent=t,this.props=r,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!a,this.isControllingVariants=Wi(r),this.isVariantNode=Tf(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...p}=this.scrapeMotionValuesFromProps(r,{},this);for(const h in p){const f=p[h];c[h]!==void 0&&Ze(f)&&f.set(c[h])}}mount(t){var r;this.current=t,M2.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Cf.current||_2(),this.shouldReduceMotion=Mo.current),(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),At(this.notifyUpdate),At(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const n=this.features[r];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,r){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const n=br.has(t);n&&this.onBindTransform&&this.onBindTransform();const i=r.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&Se.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,r)),this.valueSubscriptions.set(t,()=>{i(),a&&a(),r.owner&&r.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in xi){const r=xi[t];if(!r)continue;const{isEnabled:n,Feature:i}=r;if(!this.features[t]&&i&&n(this.props)&&(this.features[t]=new i(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ke()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let n=0;n<Qd.length;n++){const i=Qd[n];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,o=t[a];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=I2(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){const n=this.values.get(t);r!==n&&(n&&this.removeValue(t),this.bindToMotionValue(t,r),this.values.set(t,r),this.latestValues[t]=r.get())}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return n===void 0&&r!==void 0&&(n=Et(r===null?void 0:r,{owner:this}),this.addValue(t,n)),n}readValue(t,r){let n=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return n!=null&&(typeof n=="string"&&(Th(n)||Rh(n))?n=parseFloat(n):!A2(n)&&xs.test(r)&&(n=xf(t,r)),this.setBaseTarget(t,Ze(n)?n.get():n)),Ze(n)?n.get():n}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var a;const{initial:r}=this.props;let n;if(typeof r=="string"||typeof r=="object"){const o=Ul(this.props,r,(a=this.presenceContext)==null?void 0:a.custom);o&&(n=o[t])}if(r&&n!==void 0)return n;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Ze(i)?i:this.initialValues[t]!==void 0&&n===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new Tl),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}scheduleRenderMicrotask(){Wl.render(this.render)}}class Rf extends L2{constructor(){super(...arguments),this.KeyframeResolver=p2}sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){const n=t.style;return n?n[r]:void 0}removeValueFromRenderState(t,{vars:r,style:n}){delete r[t],delete n[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ze(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}class Ns{constructor(t){this.isMounted=!1,this.node=t}update(){}}function kf({top:e,left:t,right:r,bottom:n}){return{x:{min:t,max:r},y:{min:e,max:n}}}function F2({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function V2(e,t){if(!t)return e;const r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}function Ma(e){return e===void 0||e===1}function Io({scale:e,scaleX:t,scaleY:r}){return!Ma(e)||!Ma(t)||!Ma(r)}function Rs(e){return Io(e)||Pf(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Pf(e){return Zd(e.x)||Zd(e.y)}function Zd(e){return e&&e!=="0%"}function gi(e,t,r){const n=e-r,i=t*n;return r+i}function eu(e,t,r,n,i){return i!==void 0&&(e=gi(e,i,n)),gi(e,r,n)+t}function Oo(e,t=0,r=1,n,i){e.min=eu(e.min,t,r,n,i),e.max=eu(e.max,t,r,n,i)}function Af(e,{x:t,y:r}){Oo(e.x,t.translate,t.scale,t.originPoint),Oo(e.y,r.translate,r.scale,r.originPoint)}const tu=.999999999999,su=1.0000000000001;function B2(e,t,r,n=!1){const i=r.length;if(!i)return;t.x=t.y=1;let a,o;for(let l=0;l<i;l++){a=r[l],o=a.projectionDelta;const{visualElement:c}=a.options;c&&c.props.style&&c.props.style.display==="contents"||(n&&a.options.layoutScroll&&a.scroll&&a!==a.root&&tr(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Af(e,o)),n&&Rs(a.latestValues)&&tr(e,a.latestValues))}t.x<su&&t.x>tu&&(t.x=1),t.y<su&&t.y>tu&&(t.y=1)}function er(e,t){e.min=e.min+t,e.max=e.max+t}function ru(e,t,r,n,i=.5){const a=_e(e.min,e.max,i);Oo(e,t,r,a,n)}function tr(e,t){ru(e.x,t.x,t.scaleX,t.scale,t.originX),ru(e.y,t.y,t.scaleY,t.scale,t.originY)}function Df(e,t){return kf(V2(e.getBoundingClientRect(),t))}function U2(e,t,r){const n=Df(e,r),{scroll:i}=t;return i&&(er(n.x,i.offset.x),er(n.y,i.offset.y)),n}const $2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},H2=vr.length;function z2(e,t,r){let n="",i=!0;for(let a=0;a<H2;a++){const o=vr[a],l=e[o];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(o.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||r){const d=yf(l,Hl[o]);if(!c){i=!1;const u=$2[o]||o;n+=`${u}(${d}) `}r&&(t[o]=d)}}return n=n.trim(),r?n=r(t,i?"":n):i&&(n="none"),n}function Xl(e,t,r){const{style:n,vars:i,transformOrigin:a}=e;let o=!1,l=!1;for(const c in t){const d=t[c];if(br.has(c)){o=!0;continue}else if(Uh(c)){i[c]=d;continue}else{const u=yf(d,Hl[c]);c.startsWith("origin")?(l=!0,a[c]=u):n[c]=u}}if(t.transform||(o||r?n.transform=z2(t,e.transform,r):n.transform&&(n.transform="none")),l){const{originX:c="50%",originY:d="50%",originZ:u=0}=a;n.transformOrigin=`${c} ${d} ${u}`}}function _f(e,{style:t,vars:r},n,i){const a=e.style;let o;for(o in t)a[o]=t[o];i==null||i.applyProjectionStyles(a,n);for(o in r)a.setProperty(o,r[o])}function nu(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ar={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const r=nu(e,t.target.x),n=nu(e,t.target.y);return`${r}% ${n}%`}},W2={correct:(e,{treeScale:t,projectionDelta:r})=>{const n=e,i=xs.parse(e);if(i.length>5)return n;const a=xs.createTransformer(e),o=typeof i[0]!="number"?1:0,l=r.x.scale*t.x,c=r.y.scale*t.y;i[0+o]/=l,i[1+o]/=c;const d=_e(l,c,.5);return typeof i[2+o]=="number"&&(i[2+o]/=d),typeof i[3+o]=="number"&&(i[3+o]/=d),a(i)}},Lo={borderRadius:{...Ar,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ar,borderTopRightRadius:Ar,borderBottomLeftRadius:Ar,borderBottomRightRadius:Ar,boxShadow:W2};function Mf(e,{layout:t,layoutId:r}){return br.has(e)||e.startsWith("origin")||(t||r!==void 0)&&(!!Lo[e]||e==="opacity")}function Jl(e,t,r){var o;const n=e.style,i=t==null?void 0:t.style,a={};if(!n)return a;for(const l in n)(Ze(n[l])||i&&Ze(i[l])||Mf(l,e)||((o=r==null?void 0:r.getValue(l))==null?void 0:o.liveStyle)!==void 0)&&(a[l]=n[l]);return a}function G2(e){return window.getComputedStyle(e)}class q2 extends Rf{constructor(){super(...arguments),this.type="html",this.renderInstance=_f}readValueFromInstance(t,r){var n;if(br.has(r))return(n=this.projection)!=null&&n.isProjecting?So(r):hC(t,r);{const i=G2(t),a=(Uh(r)?i.getPropertyValue(r):i[r])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(t,{transformPagePoint:r}){return Df(t,r)}build(t,r,n){Xl(t,r,n.transformTemplate)}scrapeMotionValuesFromProps(t,r,n){return Jl(t,r,n)}}const K2={offset:"stroke-dashoffset",array:"stroke-dasharray"},Y2={offset:"strokeDashoffset",array:"strokeDasharray"};function X2(e,t,r=1,n=0,i=!0){e.pathLength=1;const a=i?K2:Y2;e[a.offset]=W.transform(-n);const o=W.transform(t),l=W.transform(r);e[a.array]=`${o} ${l}`}const J2=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function If(e,{attrX:t,attrY:r,attrScale:n,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...l},c,d,u){if(Xl(e,l,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:h}=e;p.transform&&(h.transform=p.transform,delete p.transform),(h.transform||p.transformOrigin)&&(h.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),h.transform&&(h.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete p.transformBox);for(const f of J2)p[f]!==void 0&&(h[f]=p[f],delete p[f]);t!==void 0&&(p.x=t),r!==void 0&&(p.y=r),n!==void 0&&(p.scale=n),i!==void 0&&X2(p,i,a,o,!1)}const Of=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Lf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Q2(e,t,r,n){_f(e,t,void 0,n);for(const i in t.attrs)e.setAttribute(Of.has(i)?i:$l(i),t.attrs[i])}function Ff(e,t,r){const n=Jl(e,t,r);for(const i in e)if(Ze(e[i])||Ze(t[i])){const a=vr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[a]=e[i]}return n}class Z2 extends Rf{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ke}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(br.has(r)){const n=ff(r);return n&&n.default||0}return r=Of.has(r)?r:$l(r),t.getAttribute(r)}scrapeMotionValuesFromProps(t,r,n){return Ff(t,r,n)}build(t,r,n){If(t,r,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(t,r,n,i){Q2(t,r,n,i)}mount(t){this.isSVGTag=Lf(t.tagName),super.mount(t)}}const eT=Yl.length;function Vf(e){if(!e)return;if(!e.isControllingVariants){const r=e.parent?Vf(e.parent)||{}:{};return e.props.initial!==void 0&&(r.initial=e.props.initial),r}const t={};for(let r=0;r<eT;r++){const n=Yl[r],i=e.props[n];(Qr(i)||i===!1)&&(t[n]=i)}return t}function Bf(e,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}const tT=[...Kl].reverse(),sT=Kl.length;function rT(e){return t=>Promise.all(t.map(({animation:r,options:n})=>s2(e,r,n)))}function nT(e){let t=rT(e),r=iu(),n=!0;const i=c=>(d,u)=>{var h;const p=ir(e,u,c==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(p){const{transition:f,transitionEnd:g,...x}=p;d={...d,...x,...g}}return d};function a(c){t=c(e)}function o(c){const{props:d}=e,u=Vf(e.parent)||{},p=[],h=new Set;let f={},g=1/0;for(let y=0;y<sT;y++){const v=tT[y],b=r[v],N=d[v]!==void 0?d[v]:u[v],S=Qr(N),E=v===c?b.isActive:null;E===!1&&(g=y);let A=N===u[v]&&N!==d[v]&&S;if(A&&n&&e.manuallyAnimateOnMount&&(A=!1),b.protectedKeys={...f},!b.isActive&&E===null||!N&&!b.prevProp||zi(N)||typeof N=="boolean")continue;const j=iT(b.prevProp,N);let C=j||v===c&&b.isActive&&!A&&S||y>g&&S,_=!1;const I=Array.isArray(N)?N:[N];let $=I.reduce(i(v),{});E===!1&&($={});const{prevResolvedValues:Y={}}=b,ie={...Y,...$},V=J=>{C=!0,h.has(J)&&(_=!0,h.delete(J)),b.needsAnimating[J]=!0;const D=e.getValue(J);D&&(D.liveStyle=!1)};for(const J in ie){const D=$[J],pe=Y[J];if(f.hasOwnProperty(J))continue;let Te=!1;Po(D)&&Po(pe)?Te=!Bf(D,pe):Te=D!==pe,Te?D!=null?V(J):h.add(J):D!==void 0&&h.has(J)?V(J):b.protectedKeys[J]=!0}b.prevProp=N,b.prevResolvedValues=$,b.isActive&&(f={...f,...$}),n&&e.blockInitialAnimation&&(C=!1);const re=A&&j;C&&(!re||_)&&p.push(...I.map(J=>{const D={type:v};if(typeof J=="string"&&n&&!re&&e.manuallyAnimateOnMount&&e.parent){const{parent:pe}=e,Te=ir(pe,J);if(pe.enteringChildren&&Te){const{delayChildren:T}=Te.transition||{};D.delay=of(pe.enteringChildren,e,T)}}return{animation:J,options:D}}))}if(h.size){const y={};if(typeof d.initial!="boolean"){const v=ir(e,Array.isArray(d.initial)?d.initial[0]:d.initial);v&&v.transition&&(y.transition=v.transition)}h.forEach(v=>{const b=e.getBaseTarget(v),N=e.getValue(v);N&&(N.liveStyle=!0),y[v]=b??null}),p.push({animation:y})}let x=!!p.length;return n&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(x=!1),n=!1,x?t(p):Promise.resolve()}function l(c,d){var p;if(r[c].isActive===d)return Promise.resolve();(p=e.variantChildren)==null||p.forEach(h=>{var f;return(f=h.animationState)==null?void 0:f.setActive(c,d)}),r[c].isActive=d;const u=o(c);for(const h in r)r[h].protectedKeys={};return u}return{animateChanges:o,setActive:l,setAnimateFunction:a,getState:()=>r,reset:()=>{r=iu()}}}function iT(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Bf(t,e):!1}function Es(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function iu(){return{animate:Es(!0),whileInView:Es(),whileHover:Es(),whileTap:Es(),whileDrag:Es(),whileFocus:Es(),exit:Es()}}function au(e,t){e.min=t.min,e.max=t.max}function St(e,t){au(e.x,t.x),au(e.y,t.y)}function ou(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const Uf=1e-4,aT=1-Uf,oT=1+Uf,$f=.01,lT=0-$f,cT=0+$f;function rt(e){return e.max-e.min}function dT(e,t,r){return Math.abs(e-t)<=r}function lu(e,t,r,n=.5){e.origin=n,e.originPoint=_e(t.min,t.max,e.origin),e.scale=rt(r)/rt(t),e.translate=_e(r.min,r.max,e.origin)-e.originPoint,(e.scale>=aT&&e.scale<=oT||isNaN(e.scale))&&(e.scale=1),(e.translate>=lT&&e.translate<=cT||isNaN(e.translate))&&(e.translate=0)}function Ur(e,t,r,n){lu(e.x,t.x,r.x,n?n.originX:void 0),lu(e.y,t.y,r.y,n?n.originY:void 0)}function cu(e,t,r){e.min=r.min+t.min,e.max=e.min+rt(t)}function uT(e,t,r){cu(e.x,t.x,r.x),cu(e.y,t.y,r.y)}function du(e,t,r){e.min=t.min-r.min,e.max=e.min+rt(t)}function yi(e,t,r){du(e.x,t.x,r.x),du(e.y,t.y,r.y)}function uu(e,t,r,n,i){return e-=t,e=gi(e,1/r,n),i!==void 0&&(e=gi(e,1/i,n)),e}function pT(e,t=0,r=1,n=.5,i,a=e,o=e){if(Lt.test(t)&&(t=parseFloat(t),t=_e(o.min,o.max,t/100)-o.min),typeof t!="number")return;let l=_e(a.min,a.max,n);e===a&&(l-=t),e.min=uu(e.min,t,r,l,i),e.max=uu(e.max,t,r,l,i)}function pu(e,t,[r,n,i],a,o){pT(e,t[r],t[n],t[i],t.scale,a,o)}const mT=["x","scaleX","originX"],hT=["y","scaleY","originY"];function mu(e,t,r,n){pu(e.x,t,mT,r?r.x:void 0,n?n.x:void 0),pu(e.y,t,hT,r?r.y:void 0,n?n.y:void 0)}function hu(e){return e.translate===0&&e.scale===1}function Hf(e){return hu(e.x)&&hu(e.y)}function fu(e,t){return e.min===t.min&&e.max===t.max}function fT(e,t){return fu(e.x,t.x)&&fu(e.y,t.y)}function xu(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function zf(e,t){return xu(e.x,t.x)&&xu(e.y,t.y)}function gu(e){return rt(e.x)/rt(e.y)}function yu(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function gt(e){return[e("x"),e("y")]}function xT(e,t,r){let n="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=(r==null?void 0:r.z)||0;if((i||a||o)&&(n=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),r){const{transformPerspective:d,rotate:u,rotateX:p,rotateY:h,skewX:f,skewY:g}=r;d&&(n=`perspective(${d}px) ${n}`),u&&(n+=`rotate(${u}deg) `),p&&(n+=`rotateX(${p}deg) `),h&&(n+=`rotateY(${h}deg) `),f&&(n+=`skewX(${f}deg) `),g&&(n+=`skewY(${g}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(n+=`scale(${l}, ${c})`),n||"none"}const Wf=["TopLeft","TopRight","BottomLeft","BottomRight"],gT=Wf.length,vu=e=>typeof e=="string"?parseFloat(e):e,bu=e=>typeof e=="number"||W.test(e);function yT(e,t,r,n,i,a){i?(e.opacity=_e(0,r.opacity??1,vT(n)),e.opacityExit=_e(t.opacity??1,0,bT(n))):a&&(e.opacity=_e(t.opacity??1,r.opacity??1,n));for(let o=0;o<gT;o++){const l=`border${Wf[o]}Radius`;let c=ju(t,l),d=ju(r,l);if(c===void 0&&d===void 0)continue;c||(c=0),d||(d=0),c===0||d===0||bu(c)===bu(d)?(e[l]=Math.max(_e(vu(c),vu(d),n),0),(Lt.test(d)||Lt.test(c))&&(e[l]+="%")):e[l]=d}(t.rotate||r.rotate)&&(e.rotate=_e(t.rotate||0,r.rotate||0,n))}function ju(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const vT=Gf(0,.5,Ih),bT=Gf(.5,.95,lt);function Gf(e,t,r){return n=>n<e?0:n>t?1:r(dr(e,t,n))}function jT(e,t,r){const n=Ze(e)?e:Et(e);return n.start(Bl("",n,t,r)),n.animation}function Zr(e,t,r,n={passive:!0}){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r)}const NT=(e,t)=>e.depth-t.depth;class wT{constructor(){this.children=[],this.isDirty=!1}add(t){wl(this.children,t),this.isDirty=!0}remove(t){Sl(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(NT),this.isDirty=!1,this.children.forEach(t)}}function ST(e,t){const r=st.now(),n=({timestamp:i})=>{const a=i-r;a>=t&&(At(n),e(a-t))};return Se.setup(n,!0),()=>At(n)}function Yn(e){return Ze(e)?e.get():e}class CT{constructor(){this.members=[]}add(t){wl(this.members,t),t.scheduleRender()}remove(t){if(Sl(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(i=>t===i);if(r===0)return!1;let n;for(let i=r;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){n=a;break}}return n?(this.promote(n),!0):!1}promote(t,r){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,r&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:n}=t;r.onExitComplete&&r.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Xn={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ia=["","X","Y","Z"],TT=1e3;let ET=0;function Oa(e,t,r,n){const{latestValues:i}=t;i[e]&&(r[e]=i[e],t.setStaticValue(e,0),n&&(n[e]=0))}function qf(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const r=uf(t);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:i,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(r,"transform",Se,!(i||a))}const{parent:n}=e;n&&!n.hasCheckedOptimisedAppear&&qf(n)}function Kf({attachResizeListener:e,defaultParent:t,measureScroll:r,checkIsScrollRoot:n,resetTransform:i}){return class{constructor(o={},l=t==null?void 0:t()){this.id=ET++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(PT),this.nodes.forEach(MT),this.nodes.forEach(IT),this.nodes.forEach(AT)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new wT)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Tl),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const c=this.eventHandlers.get(o);c&&c.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=ql(o)&&!E2(o),this.instance=o;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let u,p=0;const h=()=>this.root.updateBlockedByResize=!1;Se.read(()=>{p=window.innerWidth}),e(o,()=>{const f=window.innerWidth;f!==p&&(p=f,this.root.updateBlockedByResize=!0,u&&u(),u=ST(h,250),Xn.hasAnimatedSinceResize&&(Xn.hasAnimatedSinceResize=!1,this.nodes.forEach(Su)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:p,hasRelativeLayoutChanged:h,layout:f})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||d.getDefaultTransition()||BT,{onLayoutAnimationStart:x,onLayoutAnimationComplete:y}=d.getProps(),v=!this.targetLayout||!zf(this.targetLayout,f),b=!p&&h;if(this.options.layoutRoot||this.resumeFrom||b||p&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const N={...Vl(g,"layout"),onPlay:x,onComplete:y};(d.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N),this.setAnimationOrigin(u,b)}else p||Su(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=f})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),At(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(OT),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&qf(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const p=this.path[u];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Nu);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(wu);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(_T),this.nodes.forEach(RT),this.nodes.forEach(kT)):this.nodes.forEach(wu),this.clearAllSnapshots();const l=st.now();Xe.delta=Pt(0,1e3/60,l-Xe.timestamp),Xe.timestamp=l,Xe.isProcessing=!0,Ea.update.process(Xe),Ea.preRender.process(Xe),Ea.render.process(Xe),Xe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(DT),this.sharedNodes.forEach(LT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!rt(this.snapshot.measuredBox.x)&&!rt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Ke(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l&&this.instance){const c=n(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:c,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!Hf(this.projectionDelta),c=this.getTransformTemplate(),d=c?c(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;o&&this.instance&&(l||Rs(this.latestValues)||u)&&(i(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return o&&(c=this.removeTransform(c)),UT(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:o}=this.options;if(!o)return Ke();const l=o.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some($T))){const{scroll:u}=this.root;u&&(er(l.x,u.offset.x),er(l.y,u.offset.y))}return l}removeElementScroll(o){var c;const l=Ke();if(St(l,o),(c=this.scroll)!=null&&c.wasRoot)return l;for(let d=0;d<this.path.length;d++){const u=this.path[d],{scroll:p,options:h}=u;u!==this.root&&p&&h.layoutScroll&&(p.wasRoot&&St(l,o),er(l.x,p.offset.x),er(l.y,p.offset.y))}return l}applyTransform(o,l=!1){const c=Ke();St(c,o);for(let d=0;d<this.path.length;d++){const u=this.path[d];!l&&u.options.layoutScroll&&u.scroll&&u!==u.root&&tr(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Rs(u.latestValues)&&tr(c,u.latestValues)}return Rs(this.latestValues)&&tr(c,this.latestValues),c}removeTransform(o){const l=Ke();St(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!d.instance||!Rs(d.latestValues))continue;Io(d.latestValues)&&d.updateSnapshot();const u=Ke(),p=d.measurePageBox();St(u,p),mu(l,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,u)}return Rs(this.latestValues)&&mu(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Xe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var f;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(f=this.parent)!=null&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:p}=this.options;if(!this.layout||!(u||p))return;this.resolvedRelativeTargetAt=Xe.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ke(),this.targetWithTransforms=Ke()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),uT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):St(this.target,this.layout.layoutBox),Af(this.target,this.targetDelta)):St(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Io(this.parent.latestValues)||Pf(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,l,c){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ke(),this.relativeTargetOrigin=Ke(),yi(this.relativeTargetOrigin,l,c),St(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var g;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let c=!0;if((this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Xe.timestamp&&(c=!1),c)return;const{layout:d,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||u))return;St(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,h=this.treeScale.y;B2(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Ke());const{target:f}=o;if(!f){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ou(this.prevProjectionDelta.x,this.projectionDelta.x),ou(this.prevProjectionDelta.y,this.projectionDelta.y)),Ur(this.projectionDelta,this.layoutCorrected,f,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==h||!yu(this.projectionDelta.x,this.prevProjectionDelta.x)||!yu(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",f))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),o){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Zs(),this.projectionDelta=Zs(),this.projectionDeltaWithTransform=Zs()}setAnimationOrigin(o,l=!1){const c=this.snapshot,d=c?c.latestValues:{},u={...this.latestValues},p=Zs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const h=Ke(),f=c?c.source:void 0,g=this.layout?this.layout.source:void 0,x=f!==g,y=this.getStack(),v=!y||y.members.length<=1,b=!!(x&&!v&&this.options.crossfade===!0&&!this.path.some(VT));this.animationProgress=0;let N;this.mixTargetDelta=S=>{const E=S/1e3;Cu(p.x,o.x,E),Cu(p.y,o.y,E),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(yi(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),FT(this.relativeTarget,this.relativeTargetOrigin,h,E),N&&fT(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=Ke()),St(N,this.relativeTarget)),x&&(this.animationValues=u,yT(u,d,this.latestValues,E,b,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var l,c,d;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(d=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||d.stop(),this.pendingAnimation&&(At(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{Xn.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Et(0)),this.currentAnimation=jT(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(TT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:c,layout:d,latestValues:u}=o;if(!(!l||!c||!d)){if(this!==o&&this.layout&&d&&Yf(this.options.animationType,this.layout.layoutBox,d.layoutBox)){c=this.target||Ke();const p=rt(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+p;const h=rt(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+h}St(l,c),tr(l,u),Ur(this.projectionDeltaWithTransform,this.layoutCorrected,l,u)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new CT),this.sharedNodes.get(o).add(l);const d=l.options.initialPromotionConfig;l.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var l;const{layoutId:o}=this.options;return o?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:o}=this.options;return o?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:c}={}){const d=this.getStack();d&&d.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:c}=o;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const d={};c.z&&Oa("z",o,d,this.animationValues);for(let u=0;u<Ia.length;u++)Oa(`rotate${Ia[u]}`,o,d,this.animationValues),Oa(`skew${Ia[u]}`,o,d,this.animationValues);o.render();for(const u in d)o.setStaticValue(u,d[u]),this.animationValues&&(this.animationValues[u]=d[u]);o.scheduleRender()}applyProjectionStyles(o,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Yn(l==null?void 0:l.pointerEvents)||"",o.transform=c?c(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Yn(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!Rs(this.latestValues)&&(o.transform=c?c({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=d.animationValues||d.latestValues;this.applyTransformsToTarget();let p=xT(this.projectionDeltaWithTransform,this.treeScale,u);c&&(p=c(u,p)),o.transform=p;const{x:h,y:f}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${f.origin*100}% 0`,d.animationValues?o.opacity=d===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=d===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const g in Lo){if(u[g]===void 0)continue;const{correct:x,applyTo:y,isCSSVariable:v}=Lo[g],b=p==="none"?u[g]:x(u[g],d);if(y){const N=y.length;for(let S=0;S<N;S++)o[y[S]]=b}else v?this.options.visualElement.renderState.vars[g]=b:o[g]=b}this.options.layoutId&&(o.pointerEvents=d===this?Yn(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(Nu),this.root.sharedNodes.clear()}}}function RT(e){e.updateLayout()}function kT(e){var r;const t=((r=e.resumeFrom)==null?void 0:r.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:i}=e.layout,{animationType:a}=e.options,o=t.source!==e.layout.source;a==="size"?gt(p=>{const h=o?t.measuredBox[p]:t.layoutBox[p],f=rt(h);h.min=n[p].min,h.max=h.min+f}):Yf(a,t.layoutBox,n)&&gt(p=>{const h=o?t.measuredBox[p]:t.layoutBox[p],f=rt(n[p]);h.max=h.min+f,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+f)});const l=Zs();Ur(l,n,t.layoutBox);const c=Zs();o?Ur(c,e.applyTransform(i,!0),t.measuredBox):Ur(c,n,t.layoutBox);const d=!Hf(l);let u=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:h,layout:f}=p;if(h&&f){const g=Ke();yi(g,t.layoutBox,h.layoutBox);const x=Ke();yi(x,n,f.layoutBox),zf(g,x)||(u=!0),p.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=g,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:c,layoutDelta:l,hasLayoutChanged:d,hasRelativeLayoutChanged:u})}else if(e.isLead()){const{onExitComplete:n}=e.options;n&&n()}e.options.transition=void 0}function PT(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function AT(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function DT(e){e.clearSnapshot()}function Nu(e){e.clearMeasurements()}function wu(e){e.isLayoutDirty=!1}function _T(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Su(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function MT(e){e.resolveTargetDelta()}function IT(e){e.calcProjection()}function OT(e){e.resetSkewAndRotation()}function LT(e){e.removeLeadSnapshot()}function Cu(e,t,r){e.translate=_e(t.translate,0,r),e.scale=_e(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function Tu(e,t,r,n){e.min=_e(t.min,r.min,n),e.max=_e(t.max,r.max,n)}function FT(e,t,r,n){Tu(e.x,t.x,r.x,n),Tu(e.y,t.y,r.y,n)}function VT(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const BT={duration:.45,ease:[.4,0,.1,1]},Eu=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ru=Eu("applewebkit/")&&!Eu("chrome/")?Math.round:lt;function ku(e){e.min=Ru(e.min),e.max=Ru(e.max)}function UT(e){ku(e.x),ku(e.y)}function Yf(e,t,r){return e==="position"||e==="preserve-aspect"&&!dT(gu(t),gu(r),.2)}function $T(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const HT=Kf({attachResizeListener:(e,t)=>Zr(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),La={current:void 0},Xf=Kf({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!La.current){const e=new HT({});e.mount(window),e.setOptions({layoutScroll:!0}),La.current=e}return La.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),pn=m.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Pu(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function zT(...e){return t=>{let r=!1;const n=e.map(i=>{const a=Pu(i,t);return!r&&typeof a=="function"&&(r=!0),a});if(r)return()=>{for(let i=0;i<n.length;i++){const a=n[i];typeof a=="function"?a():Pu(e[i],null)}}}}function WT(...e){return m.useCallback(zT(...e),e)}class GT extends m.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const n=r.offsetParent,i=zl(n)&&n.offsetWidth||0,a=this.props.sizeRef.current;a.height=r.offsetHeight||0,a.width=r.offsetWidth||0,a.top=r.offsetTop,a.left=r.offsetLeft,a.right=i-a.width-a.left}return null}componentDidUpdate(){}render(){return this.props.children}}function qT({children:e,isPresent:t,anchorX:r,root:n}){var u;const i=m.useId(),a=m.useRef(null),o=m.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=m.useContext(pn),c=((u=e.props)==null?void 0:u.ref)??(e==null?void 0:e.ref),d=WT(a,c);return m.useInsertionEffect(()=>{const{width:p,height:h,top:f,left:g,right:x}=o.current;if(t||!a.current||!p||!h)return;const y=r==="left"?`left: ${g}`:`right: ${x}`;a.current.dataset.motionPopId=i;const v=document.createElement("style");l&&(v.nonce=l);const b=n??document.head;return b.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${y}px !important;
            top: ${f}px !important;
          }
        `),()=>{b.contains(v)&&b.removeChild(v)}},[t]),s.jsx(GT,{isPresent:t,childRef:a,sizeRef:o,children:m.cloneElement(e,{ref:d})})}const KT=({children:e,initial:t,isPresent:r,onExitComplete:n,custom:i,presenceAffectsLayout:a,mode:o,anchorX:l,root:c})=>{const d=gr(YT),u=m.useId();let p=!0,h=m.useMemo(()=>(p=!1,{id:u,initial:t,isPresent:r,custom:i,onExitComplete:f=>{d.set(f,!0);for(const g of d.values())if(!g)return;n&&n()},register:f=>(d.set(f,!1),()=>d.delete(f))}),[r,d,n]);return a&&p&&(h={...h}),m.useMemo(()=>{d.forEach((f,g)=>d.set(g,!1))},[r]),m.useEffect(()=>{!r&&!d.size&&n&&n()},[r]),o==="popLayout"&&(e=s.jsx(qT,{isPresent:r,anchorX:l,root:c,children:e})),s.jsx($i.Provider,{value:h,children:e})};function YT(){return new Map}function Jf(e=!0){const t=m.useContext($i);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:n,register:i}=t,a=m.useId();m.useEffect(()=>{if(e)return i(a)},[e]);const o=m.useCallback(()=>e&&n&&n(a),[a,n,e]);return!r&&n?[!1,o]:[!0]}const An=e=>e.key||"";function Au(e){const t=[];return m.Children.forEach(e,r=>{m.isValidElement(r)&&t.push(r)}),t}const Ql=({children:e,custom:t,initial:r=!0,onExitComplete:n,presenceAffectsLayout:i=!0,mode:a="sync",propagate:o=!1,anchorX:l="left",root:c})=>{const[d,u]=Jf(o),p=m.useMemo(()=>Au(e),[e]),h=o&&!d?[]:p.map(An),f=m.useRef(!0),g=m.useRef(p),x=gr(()=>new Map),y=m.useRef(new Set),[v,b]=m.useState(p),[N,S]=m.useState(p);Ui(()=>{f.current=!1,g.current=p;for(let j=0;j<N.length;j++){const C=An(N[j]);h.includes(C)?(x.delete(C),y.current.delete(C)):x.get(C)!==!0&&x.set(C,!1)}},[N,h.length,h.join("-")]);const E=[];if(p!==v){let j=[...p];for(let C=0;C<N.length;C++){const _=N[C],I=An(_);h.includes(I)||(j.splice(C,0,_),E.push(_))}return a==="wait"&&E.length&&(j=E),S(Au(j)),b(p),null}const{forceRender:A}=m.useContext(Nl);return s.jsx(s.Fragment,{children:N.map(j=>{const C=An(j),_=o&&!d?!1:p===N||h.includes(C),I=()=>{if(y.current.has(C))return;if(y.current.add(C),x.has(C))x.set(C,!0);else return;let $=!0;x.forEach(Y=>{Y||($=!1)}),$&&(A==null||A(),S(g.current),o&&(u==null||u()),n&&n())};return s.jsx(KT,{isPresent:_,initial:!f.current||r?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:c,onExitComplete:_?void 0:I,anchorX:l,children:j},C)})})},Qf=m.createContext({strict:!1}),Du={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let _u=!1;function XT(){if(_u)return;const e={};for(const t in Du)e[t]={isEnabled:r=>Du[t].some(n=>!!r[n])};Ef(e),_u=!0}function Zf(){return XT(),O2()}function JT(e){const t=Zf();for(const r in e)t[r]={...t[r],...e[r]};Ef(t)}const QT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function vi(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||QT.has(e)}let ex=e=>!vi(e);function ZT(e){typeof e=="function"&&(ex=t=>t.startsWith("on")?!vi(t):e(t))}try{ZT(require("@emotion/is-prop-valid").default)}catch{}function eE(e,t,r){const n={};for(const i in e)i==="values"&&typeof e.values=="object"||(ex(i)||r===!0&&vi(i)||!t&&!vi(i)||e.draggable&&i.startsWith("onDrag"))&&(n[i]=e[i]);return n}const Gi=m.createContext({});function tE(e,t){if(Wi(e)){const{initial:r,animate:n}=e;return{initial:r===!1||Qr(r)?r:void 0,animate:Qr(n)?n:void 0}}return e.inherit!==!1?t:{}}function sE(e){const{initial:t,animate:r}=tE(e,m.useContext(Gi));return m.useMemo(()=>({initial:t,animate:r}),[Mu(t),Mu(r)])}function Mu(e){return Array.isArray(e)?e.join(" "):e}const Zl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function tx(e,t,r){for(const n in t)!Ze(t[n])&&!Mf(n,r)&&(e[n]=t[n])}function rE({transformTemplate:e},t){return m.useMemo(()=>{const r=Zl();return Xl(r,t,e),Object.assign({},r.vars,r.style)},[t])}function nE(e,t){const r=e.style||{},n={};return tx(n,r,e),Object.assign(n,rE(e,t)),n}function iE(e,t){const r={},n=nE(e,t);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=n,r}const sx=()=>({...Zl(),attrs:{}});function aE(e,t,r,n){const i=m.useMemo(()=>{const a=sx();return If(a,t,Lf(n),e.transformTemplate,e.style),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};tx(a,e.style,e),i.style={...a,...i.style}}return i}const oE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ec(e){return typeof e!="string"||e.includes("-")?!1:!!(oE.indexOf(e)>-1||/[A-Z]/u.test(e))}function lE(e,t,r,{latestValues:n},i,a=!1,o){const c=(o??ec(e)?aE:iE)(t,n,i,e),d=eE(t,typeof e=="string",a),u=e!==m.Fragment?{...d,...c,ref:r}:{},{children:p}=t,h=m.useMemo(()=>Ze(p)?p.get():p,[p]);return m.createElement(e,{...u,children:h})}function cE({scrapeMotionValuesFromProps:e,createRenderState:t},r,n,i){return{latestValues:dE(r,n,i,e),renderState:t()}}function dE(e,t,r,n){const i={},a=n(e,{});for(const h in a)i[h]=Yn(a[h]);let{initial:o,animate:l}=e;const c=Wi(e),d=Tf(e);t&&d&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),l===void 0&&(l=t.animate));let u=r?r.initial===!1:!1;u=u||o===!1;const p=u?l:o;if(p&&typeof p!="boolean"&&!zi(p)){const h=Array.isArray(p)?p:[p];for(let f=0;f<h.length;f++){const g=Ul(e,h[f]);if(g){const{transitionEnd:x,transition:y,...v}=g;for(const b in v){let N=v[b];if(Array.isArray(N)){const S=u?N.length-1:0;N=N[S]}N!==null&&(i[b]=N)}for(const b in x)i[b]=x[b]}}}return i}const rx=e=>(t,r)=>{const n=m.useContext(Gi),i=m.useContext($i),a=()=>cE(e,t,n,i);return r?a():gr(a)},uE=rx({scrapeMotionValuesFromProps:Jl,createRenderState:Zl}),pE=rx({scrapeMotionValuesFromProps:Ff,createRenderState:sx}),mE=Symbol.for("motionComponentSymbol");function hE(e,t,r){const n=m.useRef(r);m.useInsertionEffect(()=>{n.current=r});const i=m.useRef(null);return m.useCallback(a=>{var l;a&&((l=e.onMount)==null||l.call(e,a)),t&&(a?t.mount(a):t.unmount());const o=n.current;if(typeof o=="function")if(a){const c=o(a);typeof c=="function"&&(i.current=c)}else i.current?(i.current(),i.current=null):o(a);else o&&(o.current=a)},[t])}const nx=m.createContext({});function Or(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function fE(e,t,r,n,i,a){var y,v;const{visualElement:o}=m.useContext(Gi),l=m.useContext(Qf),c=m.useContext($i),d=m.useContext(pn).reducedMotion,u=m.useRef(null);n=n||l.renderer,!u.current&&n&&(u.current=n(e,{visualState:t,parent:o,props:r,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d,isSVG:a}));const p=u.current,h=m.useContext(nx);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&xE(u.current,r,i,h);const f=m.useRef(!1);m.useInsertionEffect(()=>{p&&f.current&&p.update(r,c)});const g=r[df],x=m.useRef(!!g&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,g))&&((v=window.MotionHasOptimisedAnimation)==null?void 0:v.call(window,g)));return Ui(()=>{p&&(f.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),p.scheduleRenderMicrotask(),x.current&&p.animationState&&p.animationState.animateChanges())}),m.useEffect(()=>{p&&(!x.current&&p.animationState&&p.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var b;(b=window.MotionHandoffMarkAsComplete)==null||b.call(window,g)}),x.current=!1),p.enteringChildren=void 0)}),p}function xE(e,t,r,n){const{layoutId:i,layout:a,drag:o,dragConstraints:l,layoutScroll:c,layoutRoot:d,layoutCrossfade:u}=t;e.projection=new r(e.latestValues,t["data-framer-portal-id"]?void 0:ix(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||l&&Or(l),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:n,crossfade:u,layoutScroll:c,layoutRoot:d})}function ix(e){if(e)return e.options.allowProjection!==!1?e.projection:ix(e.parent)}function Fa(e,{forwardMotionProps:t=!1,type:r}={},n,i){n&&JT(n);const a=r?r==="svg":ec(e),o=a?pE:uE;function l(d,u){let p;const h={...m.useContext(pn),...d,layoutId:gE(d)},{isStatic:f}=h,g=sE(d),x=o(d,f);if(!f&&Ch){yE();const y=vE(h);p=y.MeasureLayout,g.visualElement=fE(e,x,h,i,y.ProjectionNode,a)}return s.jsxs(Gi.Provider,{value:g,children:[p&&g.visualElement?s.jsx(p,{visualElement:g.visualElement,...h}):null,lE(e,d,hE(x,g.visualElement,u),x,f,t,a)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=m.forwardRef(l);return c[mE]=e,c}function gE({layoutId:e}){const t=m.useContext(Nl).id;return t&&e!==void 0?t+"-"+e:e}function yE(e,t){m.useContext(Qf).strict}function vE(e){const t=Zf(),{drag:r,layout:n}=t;if(!r&&!n)return{};const i={...r,...n};return{MeasureLayout:r!=null&&r.isEnabled(e)||n!=null&&n.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function bE(e,t){if(typeof Proxy>"u")return Fa;const r=new Map,n=(a,o)=>Fa(a,o,e,t),i=(a,o)=>n(a,o);return new Proxy(i,{get:(a,o)=>o==="create"?n:(r.has(o)||r.set(o,Fa(o,void 0,e,t)),r.get(o))})}const jE=(e,t)=>t.isSVG??ec(e)?new Z2(t):new q2(t,{allowProjection:e!==m.Fragment});class NE extends Ns{constructor(t){super(t),t.animationState||(t.animationState=nT(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();zi(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let wE=0;class SE extends Ns{constructor(){super(...arguments),this.id=wE++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===n)return;const i=this.node.animationState.setActive("exit",!t);r&&!t&&i.then(()=>{r(this.id)})}mount(){const{register:t,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const CE={animation:{Feature:NE},exit:{Feature:SE}};function mn(e){return{point:{x:e.pageX,y:e.pageY}}}const TE=e=>t=>Gl(t)&&e(t,mn(t));function $r(e,t,r,n){return Zr(e,t,TE(r),n)}const ax=({current:e})=>e?e.ownerDocument.defaultView:null,Iu=(e,t)=>Math.abs(e-t);function EE(e,t){const r=Iu(e.x,t.x),n=Iu(e.y,t.y);return Math.sqrt(r**2+n**2)}const Ou=new Set(["auto","scroll"]);class ox{constructor(t,r,{transformPagePoint:n,contextWindow:i=window,dragSnapToOrigin:a=!1,distanceThreshold:o=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=f=>{this.handleScroll(f.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Ba(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,x=EE(f.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!x)return;const{point:y}=f,{timestamp:v}=Xe;this.history.push({...y,timestamp:v});const{onStart:b,onMove:N}=this.handlers;g||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),N&&N(this.lastMoveEvent,f)},this.handlePointerMove=(f,g)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Va(g,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(f,g)=>{this.end();const{onEnd:x,onSessionEnd:y,resumeAnimation:v}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Ba(f.type==="pointercancel"?this.lastMoveEventInfo:Va(g,this.transformPagePoint),this.history);this.startEvent&&x&&x(f,b),y&&y(f,b)},!Gl(t))return;this.dragSnapToOrigin=a,this.handlers=r,this.transformPagePoint=n,this.distanceThreshold=o,this.contextWindow=i||window;const c=mn(t),d=Va(c,this.transformPagePoint),{point:u}=d,{timestamp:p}=Xe;this.history=[{...u,timestamp:p}];const{onSessionStart:h}=r;h&&h(t,Ba(d,this.history)),this.removeListeners=cn($r(this.contextWindow,"pointermove",this.handlePointerMove),$r(this.contextWindow,"pointerup",this.handlePointerUp),$r(this.contextWindow,"pointercancel",this.handlePointerUp)),l&&this.startScrollTracking(l)}startScrollTracking(t){let r=t.parentElement;for(;r;){const n=getComputedStyle(r);(Ou.has(n.overflowX)||Ou.has(n.overflowY))&&this.scrollPositions.set(r,{x:r.scrollLeft,y:r.scrollTop}),r=r.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const r=this.scrollPositions.get(t);if(!r)return;const n=t===window,i=n?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},a={x:i.x-r.x,y:i.y-r.y};a.x===0&&a.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(t,i),Se.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),At(this.updatePoint)}}function Va(e,t){return t?{point:t(e.point)}:e}function Lu(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ba({point:e},t){return{point:e,delta:Lu(e,lx(t)),offset:Lu(e,RE(t)),velocity:kE(t,.1)}}function RE(e){return e[0]}function lx(e){return e[e.length-1]}function kE(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null;const i=lx(e);for(;r>=0&&(n=e[r],!(i.timestamp-n.timestamp>Jt(t)));)r--;if(!n)return{x:0,y:0};const a=yt(i.timestamp-n.timestamp);if(a===0)return{x:0,y:0};const o={x:(i.x-n.x)/a,y:(i.y-n.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function PE(e,{min:t,max:r},n){return t!==void 0&&e<t?e=n?_e(t,e,n.min):Math.max(e,t):r!==void 0&&e>r&&(e=n?_e(r,e,n.max):Math.min(e,r)),e}function Fu(e,t,r){return{min:t!==void 0?e.min+t:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function AE(e,{top:t,left:r,bottom:n,right:i}){return{x:Fu(e.x,r,i),y:Fu(e.y,t,n)}}function Vu(e,t){let r=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,n]=[n,r]),{min:r,max:n}}function DE(e,t){return{x:Vu(e.x,t.x),y:Vu(e.y,t.y)}}function _E(e,t){let r=.5;const n=rt(e),i=rt(t);return i>n?r=dr(t.min,t.max-n,e.min):n>i&&(r=dr(e.min,e.max-i,t.min)),Pt(0,1,r)}function ME(e,t){const r={};return t.min!==void 0&&(r.min=t.min-e.min),t.max!==void 0&&(r.max=t.max-e.min),r}const Fo=.35;function IE(e=Fo){return e===!1?e=0:e===!0&&(e=Fo),{x:Bu(e,"left","right"),y:Bu(e,"top","bottom")}}function Bu(e,t,r){return{min:Uu(e,t),max:Uu(e,r)}}function Uu(e,t){return typeof e=="number"?e:e[t]||0}const OE=new WeakMap;class LE{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ke(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:r=!1,distanceThreshold:n}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const a=p=>{r?(this.stopAnimation(),this.snapToCursor(mn(p).point)):this.pauseAnimation()},o=(p,h)=>{this.stopAnimation();const{drag:f,dragPropagation:g,onDragStart:x}=this.getProps();if(f&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=m2(f),!this.openDragLock))return;this.latestPointerEvent=p,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),gt(v=>{let b=this.getAxisMotionValue(v).get()||0;if(Lt.test(b)){const{projection:N}=this.visualElement;if(N&&N.layout){const S=N.layout.layoutBox[v];S&&(b=rt(S)*(parseFloat(b)/100))}}this.originPoint[v]=b}),x&&Se.postRender(()=>x(p,h)),Ao(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},l=(p,h)=>{this.latestPointerEvent=p,this.latestPanInfo=h;const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:x,onDrag:y}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:v}=h;if(g&&this.currentDirection===null){this.currentDirection=FE(v),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",h.point,v),this.updateAxis("y",h.point,v),this.visualElement.render(),y&&y(p,h)},c=(p,h)=>{this.latestPointerEvent=p,this.latestPanInfo=h,this.stop(p,h),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>gt(p=>{var h;return this.getAnimationState(p)==="paused"&&((h=this.getAxisMotionValue(p).animation)==null?void 0:h.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new ox(t,{onSessionStart:a,onStart:o,onMove:l,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:n,contextWindow:ax(this.visualElement),element:this.visualElement.current})}stop(t,r){const n=t||this.latestPointerEvent,i=r||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!i||!n)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&Se.postRender(()=>l(n,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,n){const{drag:i}=this.getProps();if(!n||!Dn(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(o=PE(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var a;const{dragConstraints:t,dragElastic:r}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,i=this.constraints;t&&Or(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&n?this.constraints=AE(n.layoutBox,t):this.constraints=!1,this.elastic=IE(r),i!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&gt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=ME(n.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!Or(t))return!1;const n=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=U2(n,i.root,this.visualElement.getTransformPagePoint());let o=DE(i.layout.layoutBox,a);if(r){const l=r(F2(o));this.hasMutatedConstraints=!!l,l&&(o=kf(l))}return o}startAnimation(t){const{drag:r,dragMomentum:n,dragElastic:i,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},d=gt(u=>{if(!Dn(u,r,this.currentDirection))return;let p=c&&c[u]||{};o&&(p={min:0,max:0});const h=i?200:1e6,f=i?40:1e7,g={type:"inertia",velocity:n?t[u]:0,bounceStiffness:h,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...a,...p};return this.startAxisValueAnimation(u,g)});return Promise.all(d).then(l)}startAxisValueAnimation(t,r){const n=this.getAxisMotionValue(t);return Ao(this.visualElement,t),n.start(Bl(t,n,0,r,this.visualElement,!1))}stopAnimation(){gt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){gt(t=>{var r;return(r=this.getAxisMotionValue(t).animation)==null?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)==null?void 0:r.state}getAxisMotionValue(t){const r=`_drag${t.toUpperCase()}`,n=this.visualElement.getProps(),i=n[r];return i||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){gt(r=>{const{drag:n}=this.getProps();if(!Dn(r,n,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(r);if(i&&i.layout){const{min:o,max:l}=i.layout.layoutBox[r],c=a.get()||0;a.set(t[r]-_e(o,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:n}=this.visualElement;if(!Or(r)||!n||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};gt(o=>{const l=this.getAxisMotionValue(o);if(l&&this.constraints!==!1){const c=l.get();i[o]=_E({min:c,max:c},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),gt(o=>{if(!Dn(o,t,null))return;const l=this.getAxisMotionValue(o),{min:c,max:d}=this.constraints[o];l.set(_e(c,d,i[o]))})}addListeners(){if(!this.visualElement.current)return;OE.set(this.visualElement,this);const t=this.visualElement.current,r=$r(t,"pointerdown",c=>{const{drag:d,dragListener:u=!0}=this.getProps();d&&u&&!Nf(c.target)&&this.start(c)}),n=()=>{const{dragConstraints:c}=this.getProps();Or(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",n);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Se.read(n);const o=Zr(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",(({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(gt(u=>{const p=this.getAxisMotionValue(u);p&&(this.originPoint[u]+=c[u].translate,p.set(p.get()+c[u].translate))}),this.visualElement.render())}));return()=>{o(),r(),a(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:o=Fo,dragMomentum:l=!0}=t;return{...t,drag:r,dragDirectionLock:n,dragPropagation:i,dragConstraints:a,dragElastic:o,dragMomentum:l}}}function Dn(e,t,r){return(t===!0||t===e)&&(r===null||r===e)}function FE(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}class VE extends Ns{constructor(t){super(t),this.removeGroupControls=lt,this.removeListeners=lt,this.controls=new LE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||lt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:r}=this.node.prevProps||{};t!==r&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const $u=e=>(t,r)=>{e&&Se.postRender(()=>e(t,r))};class BE extends Ns{constructor(){super(...arguments),this.removePointerDownListener=lt}onPointerDown(t){this.session=new ox(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ax(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:n,onPanEnd:i}=this.node.getProps();return{onSessionStart:$u(t),onStart:$u(r),onMove:n,onEnd:(a,o)=>{delete this.session,i&&Se.postRender(()=>i(a,o))}}}mount(){this.removePointerDownListener=$r(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ua=!1;class UE extends m.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:n,layoutId:i}=this.props,{projection:a}=t;a&&(r.group&&r.group.add(a),n&&n.register&&i&&n.register(a),Ua&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Xn.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:n,drag:i,isPresent:a}=this.props,{projection:o}=n;return o&&(o.isPresent=a,Ua=!0,i||t.layoutDependency!==r||r===void 0||t.isPresent!==a?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||Se.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Wl.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:n}=this.props,{projection:i}=t;Ua=!0,i&&(i.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(i),n&&n.deregister&&n.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function cx(e){const[t,r]=Jf(),n=m.useContext(Nl);return s.jsx(UE,{...e,layoutGroup:n,switchLayoutGroup:m.useContext(nx),isPresent:t,safeToRemove:r})}const $E={pan:{Feature:BE},drag:{Feature:VE,ProjectionNode:Xf,MeasureLayout:cx}};function Hu(e,t,r){const{props:n}=e;e.animationState&&n.whileHover&&e.animationState.setActive("whileHover",r==="Start");const i="onHover"+r,a=n[i];a&&Se.postRender(()=>a(t,mn(t)))}class HE extends Ns{mount(){const{current:t}=this.node;t&&(this.unmount=h2(t,(r,n)=>(Hu(this.node,n,"Start"),i=>Hu(this.node,i,"End"))))}unmount(){}}class zE extends Ns{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=cn(Zr(this.node.current,"focus",()=>this.onFocus()),Zr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function zu(e,t,r){const{props:n}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&n.whileTap&&e.animationState.setActive("whileTap",r==="Start");const i="onTap"+(r==="End"?"":r),a=n[i];a&&Se.postRender(()=>a(t,mn(t)))}class WE extends Ns{mount(){const{current:t}=this.node;t&&(this.unmount=g2(t,(r,n)=>(zu(this.node,n,"Start"),(i,{success:a})=>zu(this.node,i,a?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Vo=new WeakMap,$a=new WeakMap,GE=e=>{const t=Vo.get(e.target);t&&t(e)},qE=e=>{e.forEach(GE)};function KE({root:e,...t}){const r=e||document;$a.has(r)||$a.set(r,{});const n=$a.get(r),i=JSON.stringify(t);return n[i]||(n[i]=new IntersectionObserver(qE,{root:e,...t})),n[i]}function YE(e,t,r){const n=KE(t);return Vo.set(e,r),n.observe(e),()=>{Vo.delete(e),n.unobserve(e)}}const XE={some:0,all:1};class JE extends Ns{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:n,amount:i="some",once:a}=t,o={root:r?r.current:void 0,rootMargin:n,threshold:typeof i=="number"?i:XE[i]},l=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,a&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:p}=this.node.getProps(),h=d?u:p;h&&h(c)};return YE(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(QE(t,r))&&this.startObserver()}unmount(){}}function QE({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}const ZE={inView:{Feature:JE},tap:{Feature:WE},focus:{Feature:zE},hover:{Feature:HE}},eR={layout:{ProjectionNode:Xf,MeasureLayout:cx}},tR={...CE,...ZE,...$E,...eR},Ye=bE(tR,jE),sR=50,Wu=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),rR=()=>({time:0,x:Wu(),y:Wu()}),nR={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Gu(e,t,r,n){const i=r[t],{length:a,position:o}=nR[t],l=i.current,c=r.time;i.current=e[`scroll${o}`],i.scrollLength=e[`scroll${a}`]-e[`client${a}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=dr(0,i.scrollLength,i.current);const d=n-c;i.velocity=d>sR?0:El(i.current-l,d)}function iR(e,t,r){Gu(e,"x",t,r),Gu(e,"y",t,r),t.time=r}function aR(e,t){const r={x:0,y:0};let n=e;for(;n&&n!==t;)if(zl(n))r.x+=n.offsetLeft,r.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const i=n.getBoundingClientRect();n=n.parentElement;const a=n.getBoundingClientRect();r.x+=i.left-a.left,r.y+=i.top-a.top}else if(n instanceof SVGGraphicsElement){const{x:i,y:a}=n.getBBox();r.x+=i,r.y+=a;let o=null,l=n.parentNode;for(;!o;)l.tagName==="svg"&&(o=l),l=n.parentNode;n=o}else break;return r}const Bo={start:0,center:.5,end:1};function qu(e,t,r=0){let n=0;if(e in Bo&&(e=Bo[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?n=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?n=i/100*document.documentElement.clientWidth:e.endsWith("vh")?n=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(n=t*e),r+n}const oR=[0,0];function lR(e,t,r,n){let i=Array.isArray(e)?e:oR,a=0,o=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Bo[e]?e:"0"]),a=qu(i[0],r,n),o=qu(i[1],t),a-o}const cR={All:[[0,0],[1,1]]},dR={x:0,y:0};function uR(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function pR(e,t,r){const{offset:n=cR.All}=r,{target:i=e,axis:a="y"}=r,o=a==="y"?"height":"width",l=i!==e?aR(i,e):dR,c=i===e?{width:e.scrollWidth,height:e.scrollHeight}:uR(i),d={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let u=!t[a].interpolate;const p=n.length;for(let h=0;h<p;h++){const f=lR(n[h],d[o],c[o],l[a]);!u&&f!==t[a].interpolatorOffsets[h]&&(u=!0),t[a].offset[h]=f}u&&(t[a].interpolate=Il(t[a].offset,Jh(n),{clamp:!1}),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=Pt(0,1,t[a].interpolate(t[a].current))}function mR(e,t=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)r.x.targetOffset+=n.offsetLeft,r.y.targetOffset+=n.offsetTop,n=n.offsetParent}r.x.targetLength=t===e?t.scrollWidth:t.clientWidth,r.y.targetLength=t===e?t.scrollHeight:t.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight}function hR(e,t,r,n={}){return{measure:i=>{mR(e,n.target,r),iR(e,r,i),(n.offset||n.target)&&pR(e,r,n)},notify:()=>t(r)}}const Dr=new WeakMap,Ku=new WeakMap,Ha=new WeakMap,Yu=e=>e===document.scrollingElement?window:e;function dx(e,{container:t=document.scrollingElement,...r}={}){if(!t)return lt;let n=Ha.get(t);n||(n=new Set,Ha.set(t,n));const i=rR(),a=hR(t,e,i,r);if(n.add(a),!Dr.has(t)){const l=()=>{for(const p of n)p.measure(Xe.timestamp);Se.preUpdate(c)},c=()=>{for(const p of n)p.notify()},d=()=>Se.read(l);Dr.set(t,d);const u=Yu(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&Ku.set(t,T2(t,d)),u.addEventListener("scroll",d,{passive:!0}),d()}const o=Dr.get(t);return Se.read(o,!1,!0),()=>{var d;At(o);const l=Ha.get(t);if(!l||(l.delete(a),l.size))return;const c=Dr.get(t);Dr.delete(t),c&&(Yu(t).removeEventListener("scroll",c),(d=Ku.get(t))==null||d(),window.removeEventListener("resize",c))}}const Xu=new Map;function fR(e){const t={value:0},r=dx(n=>{t.value=n[e.axis].progress*100},e);return{currentTime:t,cancel:r}}function ux({source:e,container:t,...r}){const{axis:n}=r;e&&(t=e);const i=Xu.get(t)??new Map;Xu.set(t,i);const a=r.target??"self",o=i.get(a)??{},l=n+(r.offset??[]).join(",");return o[l]||(o[l]=!r.target&&tf()?new ScrollTimeline({source:t,axis:n}):fR({container:t,...r})),o[l]}function xR(e,t){const r=ux(t);return e.attachTimeline({timeline:t.target?void 0:r,observe:n=>(n.pause(),Sf(i=>{n.time=n.iterationDuration*i},r))})}function gR(e){return e.length===2}function yR(e,t){return gR(e)?dx(r=>{e(r[t.axis].progress,r)},t):Sf(e,ux(t))}function vR(e,{axis:t="y",container:r=document.scrollingElement,...n}={}){if(!r)return lt;const i={axis:t,container:r,...n};return typeof e=="function"?yR(e,i):xR(e,i)}const bR=()=>({scrollX:Et(0),scrollY:Et(0),scrollXProgress:Et(0),scrollYProgress:Et(0)}),_n=e=>e?!e.current:!1;function jR({container:e,target:t,...r}={}){const n=gr(bR),i=m.useRef(null),a=m.useRef(!1),o=m.useCallback(()=>(i.current=vR((l,{x:c,y:d})=>{n.scrollX.set(c.current),n.scrollXProgress.set(c.progress),n.scrollY.set(d.current),n.scrollYProgress.set(d.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var l;(l=i.current)==null||l.call(i)}),[e,t,JSON.stringify(r.offset)]);return Ui(()=>{if(a.current=!1,_n(e)||_n(t)){a.current=!0;return}else return o()},[o]),m.useEffect(()=>{if(a.current)return Yr(!_n(e)),Yr(!_n(t)),o()},[o]),n}function px(e){const t=gr(()=>Et(e)),{isStatic:r}=m.useContext(pn);if(r){const[,n]=m.useState(e);m.useEffect(()=>t.on("change",n),[])}return t}function mx(e,t){const r=px(t()),n=()=>r.set(t());return n(),Ui(()=>{const i=()=>Se.preRender(n,!1,!0),a=e.map(o=>o.on("change",i));return()=>{a.forEach(o=>o()),At(n)}}),r}function NR(e){Br.current=[],e();const t=mx(Br.current,e);return Br.current=void 0,t}function wR(e,t,r,n){if(typeof e=="function")return NR(e);const a=R2(t,r,n);return Array.isArray(e)?Ju(e,a):Ju([e],([o])=>a(o))}function Ju(e,t){const r=gr(()=>[]);return mx(e,()=>{r.length=0;const n=e.length;for(let i=0;i<n;i++)r[i]=e[i].get();return t(r)})}function SR(e,t={}){const{isStatic:r}=m.useContext(pn),n=()=>Ze(e)?e.get():e;if(r)return wR(n);const i=px(n());return m.useInsertionEffect(()=>k2(i,e,t),[i,JSON.stringify(t)]),i}function CR({className:e}){const t=$t(),r=[{title:"General",items:[{title:"Home",href:"/",icon:bm},{title:"GitHub Workflow",href:"/github-axa-usage",icon:js},{title:"Global Coding Standards",href:"/coding-standard",icon:Bt},{title:"Clean Architecture",href:"/clean-architecture",icon:We}]},{title:"Backend Guidelines",items:[{title:".NET Development",href:"/dotnet-developer-guideline",icon:ss},{title:"Java Development",href:"/java-developer-guideline",icon:Pi},{title:"Python Development",href:"/python-developer-guideline",icon:Ls}]},{title:"Frontend & Mobile",items:[{title:"React Development",href:"/react-developer-guideline",icon:Wr},{title:"Flutter Development",href:"/flutter-developer-guideline",icon:Mi}]},{title:"DevOps & CI/CD",items:[{title:"OpenShift Platform",href:"/openshift-guideline",icon:Us},{title:"Jenkins CI/CD",href:"/jenkins-guideline",icon:dl},{title:"SonarQube",href:"/sonarqube-guideline",icon:_i}]}];return s.jsx("nav",{className:ae("glass-sidebar h-full rounded-r-2xl",e),"aria-label":"Main navigation",children:s.jsx("div",{className:"space-y-6 py-6",children:r.map(n=>s.jsxs("div",{className:"px-4 py-2",children:[s.jsx("h2",{className:"mb-3 px-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60",children:n.title}),s.jsx("ul",{className:"space-y-1",role:"list",children:n.items.map(i=>{const a=t.pathname===i.href;return s.jsx("li",{children:s.jsx(ke,{asChild:!0,variant:"ghost",className:ae("w-full justify-start transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",a?"glass-card text-primary font-bold shadow-sm":"text-muted-foreground hover:bg-primary/5 hover:text-primary"),children:s.jsxs(ze,{to:i.href,"aria-current":a?"page":void 0,children:[s.jsx(i.icon,{className:ae("mr-2 h-4 w-4",a?"text-primary":"text-muted-foreground/60")}),i.title]})})},i.href)})})]},n.title))})})}function TR(){const[e,t]=m.useState(!1),[r,n]=m.useState(!1);return m.useEffect(()=>{if(n(!0),typeof window<"u"){const i=localStorage.getItem("theme");t(i==="dark")}},[]),m.useEffect(()=>{if(!r||typeof window>"u")return;const i=document.documentElement;i.classList.remove("light","dark"),e?(i.classList.add("dark"),localStorage.setItem("theme","dark")):(i.classList.add("light"),localStorage.setItem("theme","light"))},[e,r]),r?s.jsxs(sS,{children:[s.jsx(rS,{asChild:!0,children:s.jsxs(ke,{variant:"ghost",size:"icon",onClick:()=>t(!e),children:[s.jsx(dd,{className:`h-[1.2rem] w-[1.2rem] transition-all ${e?"-rotate-90 scale-0":"rotate-0 scale-100"}`}),s.jsx(Fj,{className:`absolute h-[1.2rem] w-[1.2rem] transition-all ${e?"rotate-0 scale-100":"rotate-90 scale-0"}`}),s.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}),s.jsx(Nh,{children:s.jsx("p",{children:"Toggle theme"})})]}):s.jsx(ke,{variant:"ghost",size:"icon",disabled:!0,children:s.jsx(dd,{className:"h-[1.2rem] w-[1.2rem]"})})}const ER=ki("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function k({className:e,variant:t,...r}){return s.jsx("div",{className:ae(ER({variant:t}),e),...r})}const qs=new Map,RR=20,hx=()=>{const[e,t]=m.useState(null),[r,n]=m.useState(!1);m.useEffect(()=>{(async()=>{try{if(window.__pagefind__){t(window.__pagefind__);return}const c=`${"/aii/developer-guideline/".endsWith("/")?"/aii/developer-guideline/":"/aii/developer-guideline//"}pagefind/pagefind.js`;try{const d=await import(c);await d.init(),window.__pagefind__=d,t(d)}catch(d){console.warn("Pagefind not found. Search will not work in dev mode until you run a build.",d)}}catch(l){console.error("Failed to initialize Pagefind",l)}})()},[]);const i=m.useCallback(o=>{let l=o;const c="/aii/developer-guideline/";return l.startsWith(c)&&(l=l.substring(c.length)),l.startsWith("/")||(l="/"+l),l=l.replace(/\/index\.html$/,"/"),l=l.replace(/\.html$/,""),l.length>1&&l.endsWith("/")&&(l=l.substring(0,l.length-1)),l},[]);return{search:m.useCallback(async o=>{if(!e||!o)return[];const l=o.trim().toLowerCase();if(qs.has(l))return qs.get(l);n(!0);try{const c=await e.search(l),d=await Promise.all(c.results.slice(0,10).map(async u=>{const p=await u.data(),h=i(p.url);return{...p,url:h}}));if(qs.size>=RR){const u=qs.keys().next().value;u!==void 0&&qs.delete(u)}return qs.set(l,d),n(!1),d}catch(c){return console.error("Search failed",c),n(!1),[]}},[e,i]),loading:r,isReady:!!e}},kR=({isOpen:e,onOpenChange:t})=>{const[r,n]=m.useState(""),[i,a]=m.useState([]),[o,l]=m.useState(0),{search:c,loading:d,isReady:u}=hx(),p=Zo();m.useEffect(()=>{const g=setTimeout(async()=>{if(r.trim().length>1){const x=await c(r);a(x),l(0)}else a([]),l(0)},150);return()=>clearTimeout(g)},[r,c]);const h=f=>{t(!1),p(f),n(""),a([]),l(0)};return m.useEffect(()=>{const f=g=>{if(!e)return;const x=i.length;if(g.key==="ArrowDown")g.preventDefault(),l(y=>(y+1)%(x||1));else if(g.key==="ArrowUp")g.preventDefault(),l(y=>(y-1+(x||1))%(x||1));else if(g.key==="Enter")if(g.preventDefault(),x>0&&o>=0&&o<x){const y=i[o];y&&h(y.url)}else r.trim()&&h(`/search?q=${encodeURIComponent(r)}`);else g.key==="Escape"&&t(!1)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[e,i,o,r]),s.jsx(Ql,{children:e&&s.jsxs("div",{className:"fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 pointer-events-none",children:[s.jsx(Ye.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-background/80 backdrop-blur-sm pointer-events-auto",onClick:()=>t(!1)}),s.jsxs(Ye.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},className:"relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-2xl overflow-hidden pointer-events-auto",children:[s.jsxs("div",{className:"flex items-center px-4 py-4 border-b border-border/50",children:[s.jsx(sr,{className:"h-5 w-5 text-muted-foreground mr-3"}),s.jsx("input",{autoFocus:!0,placeholder:u?"Type a command or search documentation...":"Initializing search engine...",className:"flex-1 bg-transparent border-none outline-none focus:ring-0 text-lg placeholder:text-muted-foreground",value:r,onChange:f=>n(f.target.value),disabled:!u}),s.jsxs("div",{className:"flex items-center gap-1.5 ml-2",children:[d&&s.jsx("div",{className:"animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full mr-2"}),s.jsx("kbd",{className:"hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground",children:"ESC"})]})]}),s.jsx("div",{className:"max-h-[60vh] overflow-y-auto p-2",children:i.length>0?s.jsxs("div",{className:"space-y-1",children:[i.map((f,g)=>{var x;return s.jsxs("button",{onClick:()=>h(f.url),onMouseEnter:()=>l(g),className:ae("w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 border border-transparent",g===o?"bg-primary/10 text-primary border-primary/20":"hover:bg-muted/50 border-transparent"),children:[s.jsx("div",{className:ae("h-9 w-9 rounded-lg flex items-center justify-center transition-colors",g===o?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground"),children:s.jsx(il,{className:"h-4 w-4"})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("div",{className:"font-semibold text-sm",children:(x=f.meta)==null?void 0:x.title}),s.jsx("div",{className:"text-xs text-muted-foreground line-clamp-1",dangerouslySetInnerHTML:{__html:f.excerpt}})]}),g===o&&s.jsxs("div",{className:"flex items-center gap-1 text-[10px] font-medium opacity-60",children:[s.jsx(rj,{className:"h-3 w-3"}),s.jsx("span",{children:"ENTER"})]})]},f.url+g)}),s.jsxs("button",{onClick:()=>h(`/search?q=${encodeURIComponent(r)}`),className:"w-full flex items-center justify-center gap-2 p-3 mt-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/5 transition-colors border border-dashed border-primary/20",children:[s.jsx(sr,{className:"h-4 w-4"}),'See all results for "',r,'"']})]}):r.length>1&&!d?s.jsxs("div",{className:"py-12 text-center",children:[s.jsx(sr,{className:"h-10 w-10 text-muted-foreground mx-auto mb-4 opacity-20"}),s.jsxs("p",{className:"text-sm text-muted-foreground mb-4",children:['No matches found for "',r,'"']}),s.jsx("button",{onClick:()=>h(`/search?q=${encodeURIComponent(r)}`),className:"text-primary hover:underline text-sm font-medium",children:"Try the full search page instead →"})]}):!d&&s.jsxs("div",{className:"p-4 space-y-4",children:[s.jsx("p",{className:"text-xs font-bold text-muted-foreground uppercase tracking-widest pl-2",children:"Suggestions"}),s.jsx("div",{className:"grid grid-cols-2 gap-2",children:["Clean Architecture","SOLID","API Standards","GitFlow"].map(f=>s.jsxs("button",{onClick:()=>n(f),className:"flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 text-xs transition-colors text-left",children:[f,s.jsx(pr,{className:"h-3 w-3 opacity-50"})]},f))})]})}),s.jsxs("div",{className:"bg-muted/30 px-4 py-3 border-t border-border/50 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4 text-[10px] text-muted-foreground",children:[s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx("kbd",{className:"rounded border bg-background px-1 px-1",children:"↓"}),s.jsx("kbd",{className:"rounded border bg-background px-1",children:"↑"}),"to navigate"]}),s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx("kbd",{className:"rounded border bg-background px-1",children:"↵"}),"to select"]})]}),s.jsxs(k,{variant:"outline",className:"text-[10px] font-mono opacity-60",children:[s.jsx(J0,{className:"h-2 w-2 mr-1"})," K"]})]})]})]})})},PR=[{title:"Getting Started",items:[{title:"GitHub Workflow",href:"/github-axa-usage",icon:js,description:"PR standards & branching"},{title:"Coding Standards",href:"/coding-standard",icon:Bt,description:"Global conventions"},{title:"Clean Architecture",href:"/clean-architecture",icon:We,description:"DDD patterns"}]},{title:"Backend",items:[{title:".NET Development",href:"/dotnet-developer-guideline",icon:ss,description:"C# & ASP.NET Core"},{title:"Java Development",href:"/java-developer-guideline",icon:Pi,description:"Spring Boot"},{title:"Python Development",href:"/python-developer-guideline",icon:Ls,description:"FastAPI & AI"}]},{title:"Frontend & Mobile",items:[{title:"React Development",href:"/react-developer-guideline",icon:Wr,description:"Modern React"},{title:"Flutter Development",href:"/flutter-developer-guideline",icon:Mi,description:"Cross-platform"}]},{title:"DevOps & CI/CD",items:[{title:"OpenShift Platform",href:"/openshift-guideline",icon:Us,description:"Container platform"},{title:"Jenkins CI/CD",href:"/jenkins-guideline",icon:dl,description:"Build & deploy"},{title:"SonarQube",href:"/sonarqube-guideline",icon:_i,description:"Code quality"}]}],AR=()=>{const[e,t]=m.useState(!1);return s.jsxs("div",{className:"relative",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[s.jsxs("button",{className:ae("flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors","hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",e?"text-foreground":"text-muted-foreground"),onClick:()=>t(!e),"aria-expanded":e,"aria-haspopup":"true",children:["Docs",s.jsx(M0,{className:ae("h-4 w-4 transition-transform duration-200",e&&"rotate-180")})]}),s.jsx(Ql,{children:e&&s.jsx(Ye.div,{initial:{opacity:0,y:8,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:8,scale:.96},transition:{duration:.15,ease:"easeOut"},className:"absolute left-0 top-full pt-2 z-50",children:s.jsx("div",{className:"w-[700px] glass rounded-2xl shadow-2xl border p-4 grid grid-cols-4 gap-4",children:PR.map(r=>s.jsxs("div",{className:"space-y-2",children:[s.jsx("h4",{className:"text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2",children:r.title}),s.jsx("ul",{className:"space-y-1",children:r.items.map(n=>s.jsx("li",{children:s.jsxs(ze,{to:n.href,onClick:()=>t(!1),className:ae("flex items-start gap-3 p-2 rounded-lg transition-colors","hover:bg-primary/5 focus-visible:bg-primary/5 focus-visible:outline-none group"),children:[s.jsx("div",{className:"mt-0.5 p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors",children:s.jsx(n.icon,{className:"h-3.5 w-3.5"})}),s.jsxs("div",{className:"space-y-0.5",children:[s.jsx("div",{className:"text-sm font-medium text-foreground",children:n.title}),n.description&&s.jsx("div",{className:"text-xs text-muted-foreground",children:n.description})]})]})},n.href))})]},r.title))})})})]})};var za="focusScope.autoFocusOnMount",Wa="focusScope.autoFocusOnUnmount",Qu={bubbles:!1,cancelable:!0},DR="FocusScope",fx=m.forwardRef((e,t)=>{const{loop:r=!1,trapped:n=!1,onMountAutoFocus:i,onUnmountAutoFocus:a,...o}=e,[l,c]=m.useState(null),d=Qe(i),u=Qe(a),p=m.useRef(null),h=Le(t,x=>c(x)),f=m.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;m.useEffect(()=>{if(n){let x=function(N){if(f.paused||!l)return;const S=N.target;l.contains(S)?p.current=S:ds(p.current,{select:!0})},y=function(N){if(f.paused||!l)return;const S=N.relatedTarget;S!==null&&(l.contains(S)||ds(p.current,{select:!0}))},v=function(N){if(document.activeElement===document.body)for(const E of N)E.removedNodes.length>0&&ds(l)};document.addEventListener("focusin",x),document.addEventListener("focusout",y);const b=new MutationObserver(v);return l&&b.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",x),document.removeEventListener("focusout",y),b.disconnect()}}},[n,l,f.paused]),m.useEffect(()=>{if(l){ep.add(f);const x=document.activeElement;if(!l.contains(x)){const v=new CustomEvent(za,Qu);l.addEventListener(za,d),l.dispatchEvent(v),v.defaultPrevented||(_R(FR(xx(l)),{select:!0}),document.activeElement===x&&ds(l))}return()=>{l.removeEventListener(za,d),setTimeout(()=>{const v=new CustomEvent(Wa,Qu);l.addEventListener(Wa,u),l.dispatchEvent(v),v.defaultPrevented||ds(x??document.body,{select:!0}),l.removeEventListener(Wa,u),ep.remove(f)},0)}}},[l,d,u,f]);const g=m.useCallback(x=>{if(!r&&!n||f.paused)return;const y=x.key==="Tab"&&!x.altKey&&!x.ctrlKey&&!x.metaKey,v=document.activeElement;if(y&&v){const b=x.currentTarget,[N,S]=MR(b);N&&S?!x.shiftKey&&v===S?(x.preventDefault(),r&&ds(N,{select:!0})):x.shiftKey&&v===N&&(x.preventDefault(),r&&ds(S,{select:!0})):v===b&&x.preventDefault()}},[r,n,f.paused]);return s.jsx(Ce.div,{tabIndex:-1,...o,ref:h,onKeyDown:g})});fx.displayName=DR;function _R(e,{select:t=!1}={}){const r=document.activeElement;for(const n of e)if(ds(n,{select:t}),document.activeElement!==r)return}function MR(e){const t=xx(e),r=Zu(t,e),n=Zu(t.reverse(),e);return[r,n]}function xx(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const i=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||i?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function Zu(e,t){for(const r of e)if(!IR(r,{upTo:t}))return r}function IR(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function OR(e){return e instanceof HTMLInputElement&&"select"in e}function ds(e,{select:t=!1}={}){if(e&&e.focus){const r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&OR(e)&&t&&e.select()}}var ep=LR();function LR(){let e=[];return{add(t){const r=e[0];t!==r&&(r==null||r.pause()),e=tp(e,t),e.unshift(t)},remove(t){var r;e=tp(e,t),(r=e[0])==null||r.resume()}}}function tp(e,t){const r=[...e],n=r.indexOf(t);return n!==-1&&r.splice(n,1),r}function FR(e){return e.filter(t=>t.tagName!=="A")}var Ga=0;function VR(){m.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??sp()),document.body.insertAdjacentElement("beforeend",e[1]??sp()),Ga++,()=>{Ga===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Ga--}},[])}function sp(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Mt=function(){return Mt=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},Mt.apply(this,arguments)};function gx(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function BR(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var Jn="right-scroll-bar-position",Qn="width-before-scroll-bar",UR="with-scroll-bars-hidden",$R="--removed-body-scroll-bar-size";function qa(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function HR(e,t){var r=m.useState(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(n){var i=r.value;i!==n&&(r.value=n,r.callback(n,i))}}}})[0];return r.callback=t,r.facade}var zR=typeof window<"u"?m.useLayoutEffect:m.useEffect,rp=new WeakMap;function WR(e,t){var r=HR(null,function(n){return e.forEach(function(i){return qa(i,n)})});return zR(function(){var n=rp.get(r);if(n){var i=new Set(n),a=new Set(e),o=r.current;i.forEach(function(l){a.has(l)||qa(l,null)}),a.forEach(function(l){i.has(l)||qa(l,o)})}rp.set(r,e)},[e]),r}function GR(e){return e}function qR(e,t){t===void 0&&(t=GR);var r=[],n=!1,i={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(a){var o=t(a,n);return r.push(o),function(){r=r.filter(function(l){return l!==o})}},assignSyncMedium:function(a){for(n=!0;r.length;){var o=r;r=[],o.forEach(a)}r={push:function(l){return a(l)},filter:function(){return r}}},assignMedium:function(a){n=!0;var o=[];if(r.length){var l=r;r=[],l.forEach(a),o=r}var c=function(){var u=o;o=[],u.forEach(a)},d=function(){return Promise.resolve().then(c)};d(),r={push:function(u){o.push(u),d()},filter:function(u){return o=o.filter(u),r}}}};return i}function KR(e){e===void 0&&(e={});var t=qR(null);return t.options=Mt({async:!0,ssr:!1},e),t}var yx=function(e){var t=e.sideCar,r=gx(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return m.createElement(n,Mt({},r))};yx.isSideCarExport=!0;function YR(e,t){return e.useMedium(t),yx}var vx=KR(),Ka=function(){},qi=m.forwardRef(function(e,t){var r=m.useRef(null),n=m.useState({onScrollCapture:Ka,onWheelCapture:Ka,onTouchMoveCapture:Ka}),i=n[0],a=n[1],o=e.forwardProps,l=e.children,c=e.className,d=e.removeScrollBar,u=e.enabled,p=e.shards,h=e.sideCar,f=e.noRelative,g=e.noIsolation,x=e.inert,y=e.allowPinchZoom,v=e.as,b=v===void 0?"div":v,N=e.gapMode,S=gx(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=h,A=WR([r,t]),j=Mt(Mt({},S),i);return m.createElement(m.Fragment,null,u&&m.createElement(E,{sideCar:vx,removeScrollBar:d,shards:p,noRelative:f,noIsolation:g,inert:x,setCallbacks:a,allowPinchZoom:!!y,lockRef:r,gapMode:N}),o?m.cloneElement(m.Children.only(l),Mt(Mt({},j),{ref:A})):m.createElement(b,Mt({},j,{className:c,ref:A}),l))});qi.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};qi.classNames={fullWidth:Qn,zeroRight:Jn};var XR=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function JR(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=XR();return t&&e.setAttribute("nonce",t),e}function QR(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function ZR(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var ek=function(){var e=0,t=null;return{add:function(r){e==0&&(t=JR())&&(QR(t,r),ZR(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},tk=function(){var e=ek();return function(t,r){m.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},bx=function(){var e=tk(),t=function(r){var n=r.styles,i=r.dynamic;return e(n,i),null};return t},sk={left:0,top:0,right:0,gap:0},Ya=function(e){return parseInt(e||"",10)||0},rk=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],n=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[Ya(r),Ya(n),Ya(i)]},nk=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return sk;var t=rk(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},ik=bx(),ar="data-scroll-locked",ak=function(e,t,r,n){var i=e.left,a=e.top,o=e.right,l=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(UR,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(l,"px ").concat(n,`;
  }
  body[`).concat(ar,`] {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(o,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(n,`;
    `),r==="padding"&&"padding-right: ".concat(l,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Jn,` {
    right: `).concat(l,"px ").concat(n,`;
  }
  
  .`).concat(Qn,` {
    margin-right: `).concat(l,"px ").concat(n,`;
  }
  
  .`).concat(Jn," .").concat(Jn,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(Qn," .").concat(Qn,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body[`).concat(ar,`] {
    `).concat($R,": ").concat(l,`px;
  }
`)},np=function(){var e=parseInt(document.body.getAttribute(ar)||"0",10);return isFinite(e)?e:0},ok=function(){m.useEffect(function(){return document.body.setAttribute(ar,(np()+1).toString()),function(){var e=np()-1;e<=0?document.body.removeAttribute(ar):document.body.setAttribute(ar,e.toString())}},[])},lk=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,i=n===void 0?"margin":n;ok();var a=m.useMemo(function(){return nk(i)},[i]);return m.createElement(ik,{styles:ak(a,!t,i,r?"":"!important")})},Uo=!1;if(typeof window<"u")try{var Mn=Object.defineProperty({},"passive",{get:function(){return Uo=!0,!0}});window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Uo=!1}var Ks=Uo?{passive:!1}:!1,ck=function(e){return e.tagName==="TEXTAREA"},jx=function(e,t){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!ck(e)&&r[t]==="visible")},dk=function(e){return jx(e,"overflowY")},uk=function(e){return jx(e,"overflowX")},ip=function(e,t){var r=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var i=Nx(e,n);if(i){var a=wx(e,n),o=a[1],l=a[2];if(o>l)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},pk=function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},mk=function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},Nx=function(e,t){return e==="v"?dk(t):uk(t)},wx=function(e,t){return e==="v"?pk(t):mk(t)},hk=function(e,t){return e==="h"&&t==="rtl"?-1:1},fk=function(e,t,r,n,i){var a=hk(e,window.getComputedStyle(t).direction),o=a*n,l=r.target,c=t.contains(l),d=!1,u=o>0,p=0,h=0;do{if(!l)break;var f=wx(e,l),g=f[0],x=f[1],y=f[2],v=x-y-a*g;(g||v)&&Nx(e,l)&&(p+=v,h+=g);var b=l.parentNode;l=b&&b.nodeType===Node.DOCUMENT_FRAGMENT_NODE?b.host:b}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return(u&&Math.abs(p)<1||!u&&Math.abs(h)<1)&&(d=!0),d},In=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ap=function(e){return[e.deltaX,e.deltaY]},op=function(e){return e&&"current"in e?e.current:e},xk=function(e,t){return e[0]===t[0]&&e[1]===t[1]},gk=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},yk=0,Ys=[];function vk(e){var t=m.useRef([]),r=m.useRef([0,0]),n=m.useRef(),i=m.useState(yk++)[0],a=m.useState(bx)[0],o=m.useRef(e);m.useEffect(function(){o.current=e},[e]),m.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var x=BR([e.lockRef.current],(e.shards||[]).map(op),!0).filter(Boolean);return x.forEach(function(y){return y.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),x.forEach(function(y){return y.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var l=m.useCallback(function(x,y){if("touches"in x&&x.touches.length===2||x.type==="wheel"&&x.ctrlKey)return!o.current.allowPinchZoom;var v=In(x),b=r.current,N="deltaX"in x?x.deltaX:b[0]-v[0],S="deltaY"in x?x.deltaY:b[1]-v[1],E,A=x.target,j=Math.abs(N)>Math.abs(S)?"h":"v";if("touches"in x&&j==="h"&&A.type==="range")return!1;var C=window.getSelection(),_=C&&C.anchorNode,I=_?_===A||_.contains(A):!1;if(I)return!1;var $=ip(j,A);if(!$)return!0;if($?E=j:(E=j==="v"?"h":"v",$=ip(j,A)),!$)return!1;if(!n.current&&"changedTouches"in x&&(N||S)&&(n.current=E),!E)return!0;var Y=n.current||E;return fk(Y,y,x,Y==="h"?N:S)},[]),c=m.useCallback(function(x){var y=x;if(!(!Ys.length||Ys[Ys.length-1]!==a)){var v="deltaY"in y?ap(y):In(y),b=t.current.filter(function(E){return E.name===y.type&&(E.target===y.target||y.target===E.shadowParent)&&xk(E.delta,v)})[0];if(b&&b.should){y.cancelable&&y.preventDefault();return}if(!b){var N=(o.current.shards||[]).map(op).filter(Boolean).filter(function(E){return E.contains(y.target)}),S=N.length>0?l(y,N[0]):!o.current.noIsolation;S&&y.cancelable&&y.preventDefault()}}},[]),d=m.useCallback(function(x,y,v,b){var N={name:x,delta:y,target:v,should:b,shadowParent:bk(v)};t.current.push(N),setTimeout(function(){t.current=t.current.filter(function(S){return S!==N})},1)},[]),u=m.useCallback(function(x){r.current=In(x),n.current=void 0},[]),p=m.useCallback(function(x){d(x.type,ap(x),x.target,l(x,e.lockRef.current))},[]),h=m.useCallback(function(x){d(x.type,In(x),x.target,l(x,e.lockRef.current))},[]);m.useEffect(function(){return Ys.push(a),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:h}),document.addEventListener("wheel",c,Ks),document.addEventListener("touchmove",c,Ks),document.addEventListener("touchstart",u,Ks),function(){Ys=Ys.filter(function(x){return x!==a}),document.removeEventListener("wheel",c,Ks),document.removeEventListener("touchmove",c,Ks),document.removeEventListener("touchstart",u,Ks)}},[]);var f=e.removeScrollBar,g=e.inert;return m.createElement(m.Fragment,null,g?m.createElement(a,{styles:gk(i)}):null,f?m.createElement(lk,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function bk(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const jk=YR(vx,vk);var Sx=m.forwardRef(function(e,t){return m.createElement(qi,Mt({},e,{ref:t,sideCar:jk}))});Sx.classNames=qi.classNames;var Nk=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Xs=new WeakMap,On=new WeakMap,Ln={},Xa=0,Cx=function(e){return e&&(e.host||Cx(e.parentNode))},wk=function(e,t){return t.map(function(r){if(e.contains(r))return r;var n=Cx(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},Sk=function(e,t,r,n){var i=wk(t,Array.isArray(e)?e:[e]);Ln[r]||(Ln[r]=new WeakMap);var a=Ln[r],o=[],l=new Set,c=new Set(i),d=function(p){!p||l.has(p)||(l.add(p),d(p.parentNode))};i.forEach(d);var u=function(p){!p||c.has(p)||Array.prototype.forEach.call(p.children,function(h){if(l.has(h))u(h);else try{var f=h.getAttribute(n),g=f!==null&&f!=="false",x=(Xs.get(h)||0)+1,y=(a.get(h)||0)+1;Xs.set(h,x),a.set(h,y),o.push(h),x===1&&g&&On.set(h,!0),y===1&&h.setAttribute(r,"true"),g||h.setAttribute(n,"true")}catch(v){console.error("aria-hidden: cannot operate on ",h,v)}})};return u(t),l.clear(),Xa++,function(){o.forEach(function(p){var h=Xs.get(p)-1,f=a.get(p)-1;Xs.set(p,h),a.set(p,f),h||(On.has(p)||p.removeAttribute(n),On.delete(p)),f||p.removeAttribute(r)}),Xa--,Xa||(Xs=new WeakMap,Xs=new WeakMap,On=new WeakMap,Ln={})}},Ck=function(e,t,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),i=Nk(e);return i?(n.push.apply(n,Array.from(i.querySelectorAll("[aria-live], script"))),Sk(n,i,r,"aria-hidden")):function(){return null}};function Tk(e){const t=Ek(e),r=m.forwardRef((n,i)=>{const{children:a,...o}=n,l=m.Children.toArray(a),c=l.find(kk);if(c){const d=c.props.children,u=l.map(p=>p===c?m.Children.count(d)>1?m.Children.only(null):m.isValidElement(d)?d.props.children:null:p);return s.jsx(t,{...o,ref:i,children:m.isValidElement(d)?m.cloneElement(d,void 0,u):null})}return s.jsx(t,{...o,ref:i,children:a})});return r.displayName=`${e}.Slot`,r}function Ek(e){const t=m.forwardRef((r,n)=>{const{children:i,...a}=r;if(m.isValidElement(i)){const o=Ak(i),l=Pk(a,i.props);return i.type!==m.Fragment&&(l.ref=n?rn(n,o):o),m.cloneElement(i,l)}return m.Children.count(i)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Rk=Symbol("radix.slottable");function kk(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Rk}function Pk(e,t){const r={...t};for(const n in t){const i=e[n],a=t[n];/^on[A-Z]/.test(n)?i&&a?r[n]=(...l)=>{const c=a(...l);return i(...l),c}:i&&(r[n]=i):n==="style"?r[n]={...i,...a}:n==="className"&&(r[n]=[i,a].filter(Boolean).join(" "))}return{...e,...r}}function Ak(e){var n,i;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Ki="Dialog",[Tx]=bs(Ki),[Dk,Dt]=Tx(Ki),Ex=e=>{const{__scopeDialog:t,children:r,open:n,defaultOpen:i,onOpenChange:a,modal:o=!0}=e,l=m.useRef(null),c=m.useRef(null),[d,u]=nn({prop:n,defaultProp:i??!1,onChange:a,caller:Ki});return s.jsx(Dk,{scope:t,triggerRef:l,contentRef:c,contentId:rr(),titleId:rr(),descriptionId:rr(),open:d,onOpenChange:u,onOpenToggle:m.useCallback(()=>u(p=>!p),[u]),modal:o,children:r})};Ex.displayName=Ki;var Rx="DialogTrigger",kx=m.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,i=Dt(Rx,r),a=Le(t,i.triggerRef);return s.jsx(Ce.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":rc(i.open),...n,ref:a,onClick:me(e.onClick,i.onOpenToggle)})});kx.displayName=Rx;var tc="DialogPortal",[_k,Px]=Tx(tc,{forceMount:void 0}),Ax=e=>{const{__scopeDialog:t,forceMount:r,children:n,container:i}=e,a=Dt(tc,t);return s.jsx(_k,{scope:t,forceMount:r,children:m.Children.map(n,o=>s.jsx(bt,{present:r||a.open,children:s.jsx(Ti,{asChild:!0,container:i,children:o})}))})};Ax.displayName=tc;var bi="DialogOverlay",Dx=m.forwardRef((e,t)=>{const r=Px(bi,e.__scopeDialog),{forceMount:n=r.forceMount,...i}=e,a=Dt(bi,e.__scopeDialog);return a.modal?s.jsx(bt,{present:n||a.open,children:s.jsx(Ik,{...i,ref:t})}):null});Dx.displayName=bi;var Mk=Tk("DialogOverlay.RemoveScroll"),Ik=m.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,i=Dt(bi,r);return s.jsx(Sx,{as:Mk,allowPinchZoom:!0,shards:[i.contentRef],children:s.jsx(Ce.div,{"data-state":rc(i.open),...n,ref:t,style:{pointerEvents:"auto",...n.style}})})}),Bs="DialogContent",_x=m.forwardRef((e,t)=>{const r=Px(Bs,e.__scopeDialog),{forceMount:n=r.forceMount,...i}=e,a=Dt(Bs,e.__scopeDialog);return s.jsx(bt,{present:n||a.open,children:a.modal?s.jsx(Ok,{...i,ref:t}):s.jsx(Lk,{...i,ref:t})})});_x.displayName=Bs;var Ok=m.forwardRef((e,t)=>{const r=Dt(Bs,e.__scopeDialog),n=m.useRef(null),i=Le(t,r.contentRef,n);return m.useEffect(()=>{const a=n.current;if(a)return Ck(a)},[]),s.jsx(Mx,{...e,ref:i,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:me(e.onCloseAutoFocus,a=>{var o;a.preventDefault(),(o=r.triggerRef.current)==null||o.focus()}),onPointerDownOutside:me(e.onPointerDownOutside,a=>{const o=a.detail.originalEvent,l=o.button===0&&o.ctrlKey===!0;(o.button===2||l)&&a.preventDefault()}),onFocusOutside:me(e.onFocusOutside,a=>a.preventDefault())})}),Lk=m.forwardRef((e,t)=>{const r=Dt(Bs,e.__scopeDialog),n=m.useRef(!1),i=m.useRef(!1);return s.jsx(Mx,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var o,l;(o=e.onCloseAutoFocus)==null||o.call(e,a),a.defaultPrevented||(n.current||(l=r.triggerRef.current)==null||l.focus(),a.preventDefault()),n.current=!1,i.current=!1},onInteractOutside:a=>{var c,d;(c=e.onInteractOutside)==null||c.call(e,a),a.defaultPrevented||(n.current=!0,a.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const o=a.target;((d=r.triggerRef.current)==null?void 0:d.contains(o))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&i.current&&a.preventDefault()}})}),Mx=m.forwardRef((e,t)=>{const{__scopeDialog:r,trapFocus:n,onOpenAutoFocus:i,onCloseAutoFocus:a,...o}=e,l=Dt(Bs,r),c=m.useRef(null),d=Le(t,c);return VR(),s.jsxs(s.Fragment,{children:[s.jsx(fx,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:i,onUnmountAutoFocus:a,children:s.jsx(Ci,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":rc(l.open),...o,ref:d,onDismiss:()=>l.onOpenChange(!1)})}),s.jsxs(s.Fragment,{children:[s.jsx(Fk,{titleId:l.titleId}),s.jsx(Bk,{contentRef:c,descriptionId:l.descriptionId})]})]})}),sc="DialogTitle",Ix=m.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,i=Dt(sc,r);return s.jsx(Ce.h2,{id:i.titleId,...n,ref:t})});Ix.displayName=sc;var Ox="DialogDescription",Lx=m.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,i=Dt(Ox,r);return s.jsx(Ce.p,{id:i.descriptionId,...n,ref:t})});Lx.displayName=Ox;var Fx="DialogClose",Vx=m.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,i=Dt(Fx,r);return s.jsx(Ce.button,{type:"button",...n,ref:t,onClick:me(e.onClick,()=>i.onOpenChange(!1))})});Vx.displayName=Fx;function rc(e){return e?"open":"closed"}var Bx="DialogTitleWarning",[iA,Ux]=jb(Bx,{contentName:Bs,titleName:sc,docsSlug:"dialog"}),Fk=({titleId:e})=>{const t=Ux(Bx),r=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return m.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},Vk="DialogDescriptionWarning",Bk=({contentRef:e,descriptionId:t})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ux(Vk).contentName}}.`;return m.useEffect(()=>{var a;const i=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&i&&(document.getElementById(t)||console.warn(n))},[n,e,t]),null},Uk=Ex,$k=kx,Hk=Ax,$x=Dx,Hx=_x,zx=Ix,Wx=Lx,zk=Vx;const Wk=Uk,Gk=$k,qk=Hk,Gx=m.forwardRef(({className:e,...t},r)=>s.jsx($x,{className:ae("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:r}));Gx.displayName=$x.displayName;const Kk=ki("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),qx=m.forwardRef(({side:e="right",className:t,children:r,...n},i)=>s.jsxs(qk,{children:[s.jsx(Gx,{}),s.jsxs(Hx,{ref:i,className:ae(Kk({side:e}),t),...n,children:[s.jsxs(zk,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[s.jsx(Em,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Close"})]}),r]})]}));qx.displayName=Hx.displayName;const Kx=({className:e,...t})=>s.jsx("div",{className:ae("flex flex-col space-y-2 text-center sm:text-left",e),...t});Kx.displayName="SheetHeader";const Yx=m.forwardRef(({className:e,...t},r)=>s.jsx(zx,{ref:r,className:ae("text-lg font-semibold text-foreground",e),...t}));Yx.displayName=zx.displayName;const Yk=m.forwardRef(({className:e,...t},r)=>s.jsx(Wx,{ref:r,className:ae("text-sm text-muted-foreground",e),...t}));Yk.displayName=Wx.displayName;var Xk=m.createContext(void 0);function nc(e){const t=m.useContext(Xk);return e||t||"ltr"}function Jk(e,[t,r]){return Math.min(r,Math.max(t,e))}function Qk(e,t){return m.useReducer((r,n)=>t[r][n]??r,e)}var ic="ScrollArea",[Xx]=bs(ic),[Zk,jt]=Xx(ic),Jx=m.forwardRef((e,t)=>{const{__scopeScrollArea:r,type:n="hover",dir:i,scrollHideDelay:a=600,...o}=e,[l,c]=m.useState(null),[d,u]=m.useState(null),[p,h]=m.useState(null),[f,g]=m.useState(null),[x,y]=m.useState(null),[v,b]=m.useState(0),[N,S]=m.useState(0),[E,A]=m.useState(!1),[j,C]=m.useState(!1),_=Le(t,$=>c($)),I=nc(i);return s.jsx(Zk,{scope:r,type:n,dir:I,scrollHideDelay:a,scrollArea:l,viewport:d,onViewportChange:u,content:p,onContentChange:h,scrollbarX:f,onScrollbarXChange:g,scrollbarXEnabled:E,onScrollbarXEnabledChange:A,scrollbarY:x,onScrollbarYChange:y,scrollbarYEnabled:j,onScrollbarYEnabledChange:C,onCornerWidthChange:b,onCornerHeightChange:S,children:s.jsx(Ce.div,{dir:I,...o,ref:_,style:{position:"relative","--radix-scroll-area-corner-width":v+"px","--radix-scroll-area-corner-height":N+"px",...e.style}})})});Jx.displayName=ic;var Qx="ScrollAreaViewport",Zx=m.forwardRef((e,t)=>{const{__scopeScrollArea:r,children:n,nonce:i,...a}=e,o=jt(Qx,r),l=m.useRef(null),c=Le(t,l,o.onViewportChange);return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),s.jsx(Ce.div,{"data-radix-scroll-area-viewport":"",...a,ref:c,style:{overflowX:o.scrollbarXEnabled?"scroll":"hidden",overflowY:o.scrollbarYEnabled?"scroll":"hidden",...e.style},children:s.jsx("div",{ref:o.onContentChange,style:{minWidth:"100%",display:"table"},children:n})})]})});Zx.displayName=Qx;var zt="ScrollAreaScrollbar",ac=m.forwardRef((e,t)=>{const{forceMount:r,...n}=e,i=jt(zt,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:o}=i,l=e.orientation==="horizontal";return m.useEffect(()=>(l?a(!0):o(!0),()=>{l?a(!1):o(!1)}),[l,a,o]),i.type==="hover"?s.jsx(eP,{...n,ref:t,forceMount:r}):i.type==="scroll"?s.jsx(tP,{...n,ref:t,forceMount:r}):i.type==="auto"?s.jsx(eg,{...n,ref:t,forceMount:r}):i.type==="always"?s.jsx(oc,{...n,ref:t}):null});ac.displayName=zt;var eP=m.forwardRef((e,t)=>{const{forceMount:r,...n}=e,i=jt(zt,e.__scopeScrollArea),[a,o]=m.useState(!1);return m.useEffect(()=>{const l=i.scrollArea;let c=0;if(l){const d=()=>{window.clearTimeout(c),o(!0)},u=()=>{c=window.setTimeout(()=>o(!1),i.scrollHideDelay)};return l.addEventListener("pointerenter",d),l.addEventListener("pointerleave",u),()=>{window.clearTimeout(c),l.removeEventListener("pointerenter",d),l.removeEventListener("pointerleave",u)}}},[i.scrollArea,i.scrollHideDelay]),s.jsx(bt,{present:r||a,children:s.jsx(eg,{"data-state":a?"visible":"hidden",...n,ref:t})})}),tP=m.forwardRef((e,t)=>{const{forceMount:r,...n}=e,i=jt(zt,e.__scopeScrollArea),a=e.orientation==="horizontal",o=Xi(()=>c("SCROLL_END"),100),[l,c]=Qk("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return m.useEffect(()=>{if(l==="idle"){const d=window.setTimeout(()=>c("HIDE"),i.scrollHideDelay);return()=>window.clearTimeout(d)}},[l,i.scrollHideDelay,c]),m.useEffect(()=>{const d=i.viewport,u=a?"scrollLeft":"scrollTop";if(d){let p=d[u];const h=()=>{const f=d[u];p!==f&&(c("SCROLL"),o()),p=f};return d.addEventListener("scroll",h),()=>d.removeEventListener("scroll",h)}},[i.viewport,a,c,o]),s.jsx(bt,{present:r||l!=="hidden",children:s.jsx(oc,{"data-state":l==="hidden"?"hidden":"visible",...n,ref:t,onPointerEnter:me(e.onPointerEnter,()=>c("POINTER_ENTER")),onPointerLeave:me(e.onPointerLeave,()=>c("POINTER_LEAVE"))})})}),eg=m.forwardRef((e,t)=>{const r=jt(zt,e.__scopeScrollArea),{forceMount:n,...i}=e,[a,o]=m.useState(!1),l=e.orientation==="horizontal",c=Xi(()=>{if(r.viewport){const d=r.viewport.offsetWidth<r.viewport.scrollWidth,u=r.viewport.offsetHeight<r.viewport.scrollHeight;o(l?d:u)}},10);return ur(r.viewport,c),ur(r.content,c),s.jsx(bt,{present:n||a,children:s.jsx(oc,{"data-state":a?"visible":"hidden",...i,ref:t})})}),oc=m.forwardRef((e,t)=>{const{orientation:r="vertical",...n}=e,i=jt(zt,e.__scopeScrollArea),a=m.useRef(null),o=m.useRef(0),[l,c]=m.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=ig(l.viewport,l.content),u={...n,sizes:l,onSizesChange:c,hasThumb:d>0&&d<1,onThumbChange:h=>a.current=h,onThumbPointerUp:()=>o.current=0,onThumbPointerDown:h=>o.current=h};function p(h,f){return oP(h,o.current,l,f)}return r==="horizontal"?s.jsx(sP,{...u,ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){const h=i.viewport.scrollLeft,f=lp(h,l,i.dir);a.current.style.transform=`translate3d(${f}px, 0, 0)`}},onWheelScroll:h=>{i.viewport&&(i.viewport.scrollLeft=h)},onDragScroll:h=>{i.viewport&&(i.viewport.scrollLeft=p(h,i.dir))}}):r==="vertical"?s.jsx(rP,{...u,ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){const h=i.viewport.scrollTop,f=lp(h,l);a.current.style.transform=`translate3d(0, ${f}px, 0)`}},onWheelScroll:h=>{i.viewport&&(i.viewport.scrollTop=h)},onDragScroll:h=>{i.viewport&&(i.viewport.scrollTop=p(h))}}):null}),sP=m.forwardRef((e,t)=>{const{sizes:r,onSizesChange:n,...i}=e,a=jt(zt,e.__scopeScrollArea),[o,l]=m.useState(),c=m.useRef(null),d=Le(t,c,a.onScrollbarXChange);return m.useEffect(()=>{c.current&&l(getComputedStyle(c.current))},[c]),s.jsx(sg,{"data-orientation":"horizontal",...i,ref:d,sizes:r,style:{bottom:0,left:a.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:a.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Yi(r)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.x),onDragScroll:u=>e.onDragScroll(u.x),onWheelScroll:(u,p)=>{if(a.viewport){const h=a.viewport.scrollLeft+u.deltaX;e.onWheelScroll(h),og(h,p)&&u.preventDefault()}},onResize:()=>{c.current&&a.viewport&&o&&n({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:c.current.clientWidth,paddingStart:Ni(o.paddingLeft),paddingEnd:Ni(o.paddingRight)}})}})}),rP=m.forwardRef((e,t)=>{const{sizes:r,onSizesChange:n,...i}=e,a=jt(zt,e.__scopeScrollArea),[o,l]=m.useState(),c=m.useRef(null),d=Le(t,c,a.onScrollbarYChange);return m.useEffect(()=>{c.current&&l(getComputedStyle(c.current))},[c]),s.jsx(sg,{"data-orientation":"vertical",...i,ref:d,sizes:r,style:{top:0,right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Yi(r)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.y),onDragScroll:u=>e.onDragScroll(u.y),onWheelScroll:(u,p)=>{if(a.viewport){const h=a.viewport.scrollTop+u.deltaY;e.onWheelScroll(h),og(h,p)&&u.preventDefault()}},onResize:()=>{c.current&&a.viewport&&o&&n({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:c.current.clientHeight,paddingStart:Ni(o.paddingTop),paddingEnd:Ni(o.paddingBottom)}})}})}),[nP,tg]=Xx(zt),sg=m.forwardRef((e,t)=>{const{__scopeScrollArea:r,sizes:n,hasThumb:i,onThumbChange:a,onThumbPointerUp:o,onThumbPointerDown:l,onThumbPositionChange:c,onDragScroll:d,onWheelScroll:u,onResize:p,...h}=e,f=jt(zt,r),[g,x]=m.useState(null),y=Le(t,_=>x(_)),v=m.useRef(null),b=m.useRef(""),N=f.viewport,S=n.content-n.viewport,E=Qe(u),A=Qe(c),j=Xi(p,10);function C(_){if(v.current){const I=_.clientX-v.current.left,$=_.clientY-v.current.top;d({x:I,y:$})}}return m.useEffect(()=>{const _=I=>{const $=I.target;(g==null?void 0:g.contains($))&&E(I,S)};return document.addEventListener("wheel",_,{passive:!1}),()=>document.removeEventListener("wheel",_,{passive:!1})},[N,g,S,E]),m.useEffect(A,[n,A]),ur(g,j),ur(f.content,j),s.jsx(nP,{scope:r,scrollbar:g,hasThumb:i,onThumbChange:Qe(a),onThumbPointerUp:Qe(o),onThumbPositionChange:A,onThumbPointerDown:Qe(l),children:s.jsx(Ce.div,{...h,ref:y,style:{position:"absolute",...h.style},onPointerDown:me(e.onPointerDown,_=>{_.button===0&&(_.target.setPointerCapture(_.pointerId),v.current=g.getBoundingClientRect(),b.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",f.viewport&&(f.viewport.style.scrollBehavior="auto"),C(_))}),onPointerMove:me(e.onPointerMove,C),onPointerUp:me(e.onPointerUp,_=>{const I=_.target;I.hasPointerCapture(_.pointerId)&&I.releasePointerCapture(_.pointerId),document.body.style.webkitUserSelect=b.current,f.viewport&&(f.viewport.style.scrollBehavior=""),v.current=null})})})}),ji="ScrollAreaThumb",rg=m.forwardRef((e,t)=>{const{forceMount:r,...n}=e,i=tg(ji,e.__scopeScrollArea);return s.jsx(bt,{present:r||i.hasThumb,children:s.jsx(iP,{ref:t,...n})})}),iP=m.forwardRef((e,t)=>{const{__scopeScrollArea:r,style:n,...i}=e,a=jt(ji,r),o=tg(ji,r),{onThumbPositionChange:l}=o,c=Le(t,p=>o.onThumbChange(p)),d=m.useRef(void 0),u=Xi(()=>{d.current&&(d.current(),d.current=void 0)},100);return m.useEffect(()=>{const p=a.viewport;if(p){const h=()=>{if(u(),!d.current){const f=lP(p,l);d.current=f,l()}};return l(),p.addEventListener("scroll",h),()=>p.removeEventListener("scroll",h)}},[a.viewport,u,l]),s.jsx(Ce.div,{"data-state":o.hasThumb?"visible":"hidden",...i,ref:c,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...n},onPointerDownCapture:me(e.onPointerDownCapture,p=>{const f=p.target.getBoundingClientRect(),g=p.clientX-f.left,x=p.clientY-f.top;o.onThumbPointerDown({x:g,y:x})}),onPointerUp:me(e.onPointerUp,o.onThumbPointerUp)})});rg.displayName=ji;var lc="ScrollAreaCorner",ng=m.forwardRef((e,t)=>{const r=jt(lc,e.__scopeScrollArea),n=!!(r.scrollbarX&&r.scrollbarY);return r.type!=="scroll"&&n?s.jsx(aP,{...e,ref:t}):null});ng.displayName=lc;var aP=m.forwardRef((e,t)=>{const{__scopeScrollArea:r,...n}=e,i=jt(lc,r),[a,o]=m.useState(0),[l,c]=m.useState(0),d=!!(a&&l);return ur(i.scrollbarX,()=>{var p;const u=((p=i.scrollbarX)==null?void 0:p.offsetHeight)||0;i.onCornerHeightChange(u),c(u)}),ur(i.scrollbarY,()=>{var p;const u=((p=i.scrollbarY)==null?void 0:p.offsetWidth)||0;i.onCornerWidthChange(u),o(u)}),d?s.jsx(Ce.div,{...n,ref:t,style:{width:a,height:l,position:"absolute",right:i.dir==="ltr"?0:void 0,left:i.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function Ni(e){return e?parseInt(e,10):0}function ig(e,t){const r=e/t;return isNaN(r)?0:r}function Yi(e){const t=ig(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-r)*t;return Math.max(n,18)}function oP(e,t,r,n="ltr"){const i=Yi(r),a=i/2,o=t||a,l=i-o,c=r.scrollbar.paddingStart+o,d=r.scrollbar.size-r.scrollbar.paddingEnd-l,u=r.content-r.viewport,p=n==="ltr"?[0,u]:[u*-1,0];return ag([c,d],p)(e)}function lp(e,t,r="ltr"){const n=Yi(t),i=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,a=t.scrollbar.size-i,o=t.content-t.viewport,l=a-n,c=r==="ltr"?[0,o]:[o*-1,0],d=Jk(e,c);return ag([0,o],[0,l])(d)}function ag(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}function og(e,t){return e>0&&e<t}var lP=(e,t=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},n=0;return(function i(){const a={left:e.scrollLeft,top:e.scrollTop},o=r.left!==a.left,l=r.top!==a.top;(o||l)&&t(),r=a,n=window.requestAnimationFrame(i)})(),()=>window.cancelAnimationFrame(n)};function Xi(e,t){const r=Qe(e),n=m.useRef(0);return m.useEffect(()=>()=>window.clearTimeout(n.current),[]),m.useCallback(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,t)},[r,t])}function ur(e,t){const r=Qe(t);Ft(()=>{let n=0;if(e){const i=new ResizeObserver(()=>{cancelAnimationFrame(n),n=window.requestAnimationFrame(r)});return i.observe(e),()=>{window.cancelAnimationFrame(n),i.unobserve(e)}}},[e,r])}var lg=Jx,cP=Zx,dP=ng;const cc=m.forwardRef(({className:e,children:t,...r},n)=>s.jsxs(lg,{ref:n,className:ae("relative overflow-hidden",e),...r,children:[s.jsx(cP,{className:"h-full w-full rounded-[inherit]",children:t}),s.jsx(cg,{}),s.jsx(dP,{})]}));cc.displayName=lg.displayName;const cg=m.forwardRef(({className:e,orientation:t="vertical",...r},n)=>s.jsx(ac,{ref:n,orientation:t,className:ae("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...r,children:s.jsx(rg,{className:"relative flex-1 rounded-full bg-border"})}));cg.displayName=ac.displayName;const uP=[{title:"Getting Started",items:[{title:"GitHub Workflow",href:"/github-axa-usage"},{title:"Coding Standards",href:"/coding-standard"},{title:"Clean Architecture",href:"/clean-architecture"}]},{title:"Backend",items:[{title:".NET Development",href:"/dotnet-developer-guideline"},{title:"Java Development",href:"/java-developer-guideline"},{title:"Python Development",href:"/python-developer-guideline"}]},{title:"Frontend & Mobile",items:[{title:"React Development",href:"/react-developer-guideline"},{title:"Flutter Development",href:"/flutter-developer-guideline"}]}],pP=()=>{const[e,t]=m.useState(!1),[r,n]=m.useState(!1),i=$t();return m.useEffect(()=>{const a=()=>{t(window.scrollY>0)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),m.useEffect(()=>{const a=o=>{(o.metaKey||o.ctrlKey)&&o.key==="k"&&(o.preventDefault(),n(!0))};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]),s.jsxs("header",{className:`sticky top-0 z-50 w-full border-b transition-all duration-300 ${e?"glass":"bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"}`,role:"banner",children:[s.jsxs("div",{className:"container flex h-16 items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-6",children:[s.jsxs(ze,{to:"/",className:"flex items-center gap-2 transition-opacity hover:opacity-80","aria-label":"AII IT Playbook Home",children:[s.jsx("div",{className:"p-1.5 rounded-lg bg-primary/10",children:s.jsx(Ls,{className:"h-5 w-5 text-primary"})}),s.jsx("span",{className:"hidden font-bold text-foreground sm:inline-block",children:"AII IT Playbook"})]}),s.jsx("nav",{className:"hidden md:flex items-center gap-1","aria-label":"Main navigation",children:s.jsx(AR,{})})]}),s.jsxs(Wk,{children:[s.jsx(Gk,{asChild:!0,children:s.jsx(ke,{variant:"ghost",size:"icon",className:"md:hidden","aria-label":"Open menu",children:s.jsx(Ij,{className:"h-5 w-5"})})}),s.jsxs(qx,{side:"left",className:"w-80",children:[s.jsx(Kx,{children:s.jsx(Yx,{children:s.jsxs(ze,{to:"/",className:"flex items-center gap-2",children:[s.jsx(Ls,{className:"h-5 w-5 text-primary"}),s.jsx("span",{className:"font-bold",children:"AII IT Playbook"})]})})}),s.jsx(cc,{className:"my-4 h-[calc(100vh-8rem)]",children:s.jsx("div",{className:"space-y-6 py-4",children:uP.map(a=>s.jsxs("div",{children:[s.jsx("h4",{className:"mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide",children:a.title}),s.jsx("div",{className:"space-y-1",children:a.items.map(o=>s.jsx(ze,{to:o.href,className:`block px-2 py-2 text-sm rounded-lg transition-colors ${i.pathname===o.href?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:o.title},o.href))})]},a.title))})})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs(ke,{variant:"ghost",onClick:()=>n(!0),className:"relative h-9 w-9 p-0 md:w-60 md:justify-start md:px-3 md:py-2 rounded-lg hover:bg-muted/30 transition-colors","aria-label":"Search documentation",children:[s.jsx(sr,{className:"h-4 w-4 md:mr-2"}),s.jsx("span",{className:"hidden md:inline-flex text-sm text-muted-foreground",children:"Search docs..."}),s.jsxs("kbd",{className:"pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded bg-background px-1.5 font-mono text-[10px] font-medium md:flex border shadow-sm",children:[s.jsx("span",{className:"text-xs",children:"⌘"}),"K"]})]}),s.jsx("div",{className:"hidden md:block h-4 w-px bg-border"}),s.jsx(ke,{variant:"ghost",size:"icon",asChild:!0,className:"rounded-full h-9 w-9","aria-label":"View GitHub repository",children:s.jsx("a",{href:"https://github.axa.com/aii",target:"_blank",rel:"noreferrer",children:s.jsx(co,{className:"h-4 w-4"})})}),s.jsx(TR,{})]})]}),s.jsx(kR,{isOpen:r,onOpenChange:n})]})},mP=()=>s.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all",children:"Skip to content"}),hP=()=>{const{scrollYProgress:e}=jR(),t=SR(e,{stiffness:100,damping:30,restDelta:.001});return s.jsx(Ye.div,{className:"fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]",style:{scaleX:t}})},ht=({children:e,showSidebar:t=!0,showReadingProgress:r=!1})=>{const i=$t().pathname==="/",a=t&&!i,o=r||!i&&a;return s.jsxs("div",{className:"relative flex min-h-screen flex-col bg-background",children:[o&&s.jsx(hP,{}),s.jsx(mP,{}),s.jsx("div",{"data-pagefind-ignore":!0,children:s.jsx(pP,{})}),s.jsxs("div",{className:"flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]",children:[a&&s.jsx("aside",{className:"fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block",role:"navigation","aria-label":"Documentation navigation",children:s.jsx("div",{"data-pagefind-ignore":!0,children:s.jsx(cc,{className:"h-full py-6 pr-3 lg:py-8 lg:pr-4",children:s.jsx(CR,{})})})}),s.jsx("main",{id:"main-content",role:"main",className:`relative py-6 lg:gap-10 lg:py-8 ${a?"":"md:col-span-2"}`,"data-pagefind-body":!0,children:s.jsx("div",{className:`w-full min-w-0 ${a?"px-3 md:px-4 lg:px-6":"px-4 md:px-8 lg:px-12"}`,children:e})})]})]})},fP=({children:e,className:t,colors:r=["#0033A0","#4299E1","#0033A0"],animationDuration:n=8})=>s.jsx(Ye.span,{className:ae("relative inline-block text-transparent bg-clip-text font-bold",t),animate:{backgroundPosition:["0% center","200% center"]},transition:{duration:n,repeat:1/0,ease:"linear"},style:{backgroundImage:`linear-gradient(to right, ${r[0]}, ${r[1]}, ${r[2]}, ${r[0]})`,backgroundSize:"200% auto"},children:e}),dg=({children:e,className:t,color:r="rgba(0, 51, 160, 0.15)",delay:n=.5,duration:i=.8})=>s.jsxs("span",{className:ae("relative inline-block px-1",t),children:[s.jsx(Ye.span,{initial:{width:"0%"},whileInView:{width:"100%"},viewport:{once:!0},transition:{delay:n,duration:i,ease:[.6,.01,.05,.95]},className:"absolute bottom-[10%] left-0 h-[60%] -z-10",style:{backgroundColor:r}}),e]}),xP=({className:e,gridSize:t=40,gridColor:r="currentColor",dotSize:n=1,maskGradient:i="radial-gradient(circle at center, white, transparent 80%)"})=>s.jsxs("div",{className:ae("absolute inset-0 -z-10 overflow-hidden",e),children:[s.jsx(Ye.div,{className:"absolute inset-0 opacity-[0.03] dark:opacity-[0.05]",style:{backgroundImage:`radial-gradient(${r} ${n}px, transparent ${n}px)`,backgroundSize:`${t}px ${t}px`,maskImage:i,WebkitMaskImage:i},animate:{backgroundPosition:["0px 0px",`${t}px ${t}px`]},transition:{duration:20,repeat:1/0,ease:"linear"}}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background",style:{pointerEvents:"none"}})]}),gP=()=>s.jsxs("section",{className:"relative overflow-hidden py-20 lg:py-28",children:[s.jsx(xP,{}),s.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[s.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"}),s.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"})]}),s.jsx("div",{className:"absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] dark:opacity-[0.08]"}),s.jsx("div",{className:"container px-4 md:px-6",children:s.jsxs("div",{className:"flex flex-col items-center text-center space-y-8",children:[s.jsx(Ye.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:s.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium",children:[s.jsxs("span",{className:"relative flex h-2 w-2",children:[s.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"}),s.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-primary"})]}),"Enterprise IT Standards"]})}),s.jsxs(Ye.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},className:"space-y-4 max-w-3xl",children:[s.jsxs("h1",{className:"text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",children:["AII IT"," ",s.jsx(fP,{children:"Playbook"})]}),s.jsxs("p",{className:"mx-auto max-w-[600px] text-lg text-muted-foreground md:text-xl",children:[s.jsx(dg,{children:"Engineering standards"}),", DevOps strategies, and best practices for the AII IT environment."]})]}),s.jsxs(Ye.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"flex flex-col sm:flex-row items-center gap-4",children:[s.jsx(ke,{asChild:!0,size:"lg",className:"h-12 px-8 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all font-semibold",children:s.jsxs(ze,{to:"/github-axa-usage",children:["Get Started",s.jsx(ut,{className:"ml-2 h-4 w-4"})]})}),s.jsx(ke,{asChild:!0,variant:"outline",size:"lg",className:"h-12 px-8 rounded-xl hover:bg-muted/50 transition-all font-semibold",children:s.jsxs(ze,{to:"/coding-standard",children:[s.jsx(vt,{className:"mr-2 h-4 w-4"}),"Browse Docs"]})})]}),s.jsx(Ye.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.4},className:"flex flex-wrap items-center justify-center gap-3 pt-4",children:[".NET","React","Java","Python","Flutter"].map(e=>s.jsx("span",{className:"px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/50",children:e},e))})]})})]}),yP=({href:e,title:t,description:r,previewImage:n,className:i,icon:a})=>{const[o,l]=Je.useState(!1);return s.jsxs(ze,{to:e,className:ae("group relative block p-8 rounded-3xl bg-card border border-border/50 transition-all duration-500 overflow-hidden h-full shadow-sm hover:shadow-2xl hover:shadow-primary/5",i),onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[s.jsx("div",{className:ae("absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0","bg-gradient-to-br from-primary/10 via-transparent to-transparent")}),s.jsxs("div",{className:"relative z-10 flex flex-col h-full space-y-4",children:[s.jsxs("div",{className:"flex items-start justify-between",children:[s.jsx("div",{className:ae("p-3 rounded-2xl bg-muted/50 text-muted-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3","shadow-inner"),children:a||s.jsx(ii,{className:"h-6 w-6"})}),s.jsx(Ye.div,{animate:{x:o?0:10,opacity:o?1:0,rotate:o?45:0},transition:{duration:.3},children:s.jsx(ii,{className:"h-5 w-5 text-primary"})})]}),s.jsxs("div",{className:"space-y-2 flex-1",children:[s.jsx("h3",{className:"font-bold text-xl tracking-tight group-hover:text-primary transition-colors duration-300",children:t}),s.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300",children:r})]}),s.jsxs("div",{className:"pt-4 flex items-center text-xs font-bold uppercase tracking-widest text-primary/0 group-hover:text-primary transition-all duration-500 translate-y-2 group-hover:translate-y-0",children:["Explore Guide ",s.jsx(pr,{className:"ml-1 h-3 w-3"})]})]}),s.jsx(Ql,{children:o&&n&&s.jsx(Ye.div,{initial:{opacity:0,scale:1.1},animate:{opacity:.05,scale:1},exit:{opacity:0,scale:1.1},transition:{duration:.7},className:"absolute inset-0 z-0 pointer-events-none",children:s.jsx("img",{src:n,alt:t,className:"w-full h-full object-cover filter grayscale"})})}),s.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1 overflow-hidden",children:s.jsx(Ye.div,{className:"h-full bg-gradient-to-r from-transparent via-primary to-transparent",initial:{x:"-100%"},animate:{x:o?"100%":"-100%"},transition:{duration:1,repeat:o?1/0:0,ease:"linear"}})})]})},vP=({icon:e,className:t,type:r="neutral"})=>{const n=()=>{switch(r){case"success":return"text-emerald-500 bg-emerald-500/10";case"warning":return"text-amber-500 bg-amber-500/10";case"error":return"text-destructive bg-destructive/10";default:return"text-primary bg-primary/10"}};return s.jsx(Ye.div,{whileHover:{scale:1.1,rotate:5},whileTap:{scale:.95},className:ae("flex items-center justify-center p-3 rounded-xl transition-colors",n(),t),children:s.jsx(Ye.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.3},children:e})})},bP=[{title:".NET Development",description:"Clean Architecture, DDD, and enterprise C# standards.",href:"/dotnet-developer-guideline",icon:ss,color:"blue"},{title:"React Frontend",description:"Component architecture and modern hooks patterns.",href:"/react-developer-guideline",icon:Wr,color:"cyan"},{title:"Java Backend",description:"Spring Boot and microservices best practices.",href:"/java-developer-guideline",icon:Pi,color:"orange"},{title:"Python & AI",description:"FastAPI standards and AI integration guidelines.",href:"/python-developer-guideline",icon:Ls,color:"yellow"},{title:"Flutter Mobile",description:"Cross-platform excellence with BLoC patterns.",href:"/flutter-developer-guideline",icon:Mi,color:"sky"},{title:"Clean Architecture",description:"Naming conventions and DDD patterns.",href:"/clean-architecture",icon:We,color:"purple"}],jP=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},t={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4}}};return s.jsxs(ht,{showSidebar:!1,children:[s.jsx(gP,{}),s.jsx("section",{className:"py-16 lg:py-24",children:s.jsxs("div",{className:"container px-4",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsx("h2",{className:"text-3xl font-bold tracking-tight mb-4",children:"Choose Your Stack"}),s.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Comprehensive standards and strategies for the entire AII IT ecosystem."})]}),s.jsx(Ye.div,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:bP.map(r=>s.jsx(Ye.div,{variants:t,children:s.jsx(yP,{href:r.href,title:r.title,description:r.description,icon:s.jsx(r.icon,{className:"h-6 w-6"}),className:"h-full"})},r.href))})]})}),s.jsx("section",{className:"py-16 lg:py-24 bg-muted/30",children:s.jsx("div",{className:"container px-4",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsx("h2",{className:"text-3xl font-bold tracking-tight mb-4",children:"How It Works"}),s.jsx("p",{className:"text-muted-foreground",children:"Three simple steps to align with AII development standards."})]}),s.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{step:"01",title:"Read the Guidelines",description:"Explore standards tailored for your tech stack.",icon:s.jsx(ss,{className:"h-6 w-6"})},{step:"02",title:"Apply Patterns",description:"Implement Clean Architecture and naming conventions.",icon:s.jsx(Bt,{className:"h-6 w-6"})},{step:"03",title:"Submit PR",description:"Follow our GitHub workflow for code reviews.",icon:s.jsx(ce,{className:"h-6 w-6"})}].map((r,n)=>s.jsxs("div",{className:"text-center group",children:[s.jsx(vP,{icon:r.icon,className:"mx-auto mb-4"}),s.jsx("h3",{className:"font-semibold text-lg mb-2",children:r.title}),s.jsx("p",{className:"text-sm text-muted-foreground",children:r.description})]},n))}),s.jsx("div",{className:"text-center mt-12",children:s.jsx(ke,{asChild:!0,size:"lg",className:"rounded-xl",children:s.jsxs(ze,{to:"/github-axa-usage",children:[s.jsx(js,{className:"mr-2 h-4 w-4"}),"View GitHub Workflow"]})})})]})})}),s.jsx("section",{className:"py-16 lg:py-20",children:s.jsx("div",{className:"container px-4",children:s.jsxs("div",{className:"max-w-2xl mx-auto text-center space-y-6",children:[s.jsx("h2",{className:"text-2xl font-bold",children:"Ready to get started?"}),s.jsx("p",{className:"text-muted-foreground",children:"Begin with our global coding standards, then dive into your specific tech stack."}),s.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[s.jsx(ke,{asChild:!0,size:"lg",className:"rounded-xl",children:s.jsxs(ze,{to:"/coding-standard",children:[s.jsx(Bt,{className:"mr-2 h-4 w-4"}),"Global Standards"]})}),s.jsx(ke,{asChild:!0,variant:"outline",size:"lg",className:"rounded-xl",children:s.jsxs(ze,{to:"/clean-architecture",children:[s.jsx(We,{className:"mr-2 h-4 w-4"}),"Architecture Guide"]})})]})]})})})]})},Nt=({title:e,subtitle:t,breadcrumbs:r,readingTime:n})=>s.jsxs("section",{className:"relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16",children:[s.jsx("div",{className:"absolute inset-0 -z-10 bg-[radial-gradient(35%_35%_at_50%_0%,rgba(0,51,160,0.06)_0%,transparent_100%)]"}),s.jsxs("div",{className:"container px-4",children:[s.jsx("nav",{className:"flex mb-4 items-center gap-2 text-sm font-medium text-muted-foreground animate-in-fade","aria-label":"Breadcrumb",children:r.map((i,a)=>s.jsxs(Je.Fragment,{children:[a>0&&s.jsx(pr,{className:"h-4 w-4 opacity-50"}),i.href?s.jsx(ze,{to:i.href,className:"hover:text-primary transition-colors flex items-center",children:i.label==="Home"?s.jsx(bm,{className:"h-4 w-4"}):i.label}):s.jsx("span",{className:"text-foreground font-bold",children:i.label})]},i.label))}),s.jsxs("div",{className:"max-w-[800px] space-y-3 animate-in-fade",children:[s.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[s.jsx("h1",{className:"text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gradient",children:e}),n&&s.jsxs(k,{variant:"secondary",className:"flex items-center gap-1 text-xs",children:[s.jsx(fm,{className:"h-3 w-3"}),n," min read"]})]}),s.jsx("p",{className:"text-lg text-muted-foreground leading-relaxed",children:t})]})]}),s.jsx("div",{className:"absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"})]});var NP=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],wP=NP.reduce((e,t)=>{const r=Sh(`Primitive.${t}`),n=m.forwardRef((i,a)=>{const{asChild:o,...l}=i,c=o?r:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),s.jsx(c,{...l,ref:a})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),SP="Separator",cp="horizontal",CP=["horizontal","vertical"],ug=m.forwardRef((e,t)=>{const{decorative:r,orientation:n=cp,...i}=e,a=TP(n)?n:cp,l=r?{role:"none"}:{"aria-orientation":a==="vertical"?a:void 0,role:"separator"};return s.jsx(wP.div,{"data-orientation":a,...l,...i,ref:t})});ug.displayName=SP;function TP(e){return CP.includes(e)}var pg=ug;const F=m.forwardRef(({className:e,orientation:t="horizontal",decorative:r=!0,...n},i)=>s.jsx(pg,{ref:i,decorative:r,orientation:t,className:ae("shrink-0 bg-border",t==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",e),...n}));F.displayName=pg.displayName;const O=({code:e,language:t="csharp",showLineNumbers:r=!1,showCopyButton:n=!0,className:i="",title:a,maxHeight:o})=>{const[l,c]=m.useState(!1),d=m.useCallback(async()=>{try{await navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),2e3)}catch{}},[e]);return s.jsxs("div",{className:ae("group relative my-6 rounded-lg border bg-muted/50 overflow-hidden",i),children:[s.jsxs("div",{className:"flex items-center justify-between border-b bg-muted/80 px-4 py-2",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(q0,{className:"h-4 w-4 text-muted-foreground"}),s.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:t}),a&&s.jsx("span",{className:"ml-2 text-sm font-medium text-foreground",children:a})]}),n&&s.jsxs(ke,{variant:"ghost",size:"icon",className:"h-8 w-8 text-muted-foreground hover:text-foreground",onClick:d,children:[l?s.jsx(D0,{className:"h-4 w-4 text-green-500"}):s.jsx(tj,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Copy code"})]})]}),s.jsx("div",{className:"overflow-x-auto p-4 font-mono text-sm leading-relaxed",style:{maxHeight:o||"none"},children:s.jsxs("div",{className:"flex gap-4",children:[r&&s.jsx("div",{className:"flex flex-col text-muted-foreground/40 select-none text-right min-w-[20px]",children:e.trim().split(`
`).map((u,p)=>s.jsx("span",{children:p+1},p))}),s.jsx("pre",{className:"flex-1 whitespace-pre-wrap break-words",children:s.jsx("code",{children:e.trim()})})]})})]})},hn=({previous:e,next:t,className:r})=>!e&&!t?null:s.jsxs("nav",{className:ae("flex items-center justify-between gap-4 py-8 border-t",r),"aria-label":"Page navigation",children:[e?s.jsxs(ze,{to:e.href,className:"group flex-1 flex flex-col items-start gap-1 p-4 rounded-xl border hover:border-primary/20 hover:bg-primary/5 transition-all",children:[s.jsxs("span",{className:"flex items-center text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors",children:[s.jsx(O0,{className:"h-4 w-4 mr-1"}),"Previous"]}),s.jsx("span",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:e.title})]}):s.jsx("div",{className:"flex-1"}),t?s.jsxs(ze,{to:t.href,className:"group flex-1 flex flex-col items-end gap-1 p-4 rounded-xl border hover:border-primary/20 hover:bg-primary/5 transition-all text-right",children:[s.jsxs("span",{className:"flex items-center text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors",children:["Next",s.jsx(pr,{className:"h-4 w-4 ml-1"})]}),s.jsx("span",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:t.title})]}):s.jsx("div",{className:"flex-1"})]}),dp=[{id:"overview",title:"1. Project Overview",icon:vt},{id:"architecture",title:"2. Architecture Design",icon:We},{id:"patterns",title:"3. Design Patterns",icon:Ge},{id:"data-access",title:"4. Data Access Patterns",icon:mt},{id:"api-approaches",title:"5. API Implementation",icon:Us},{id:"naming",title:"6. Naming Conventions",icon:Di},{id:"organization",title:"7. File & Project Org",icon:cl},{id:"validation",title:"8. Validation & Error",icon:nt},{id:"testing",title:"9. Testing Guidelines",icon:ot}],EP=()=>{const[e,t]=m.useState("overview"),r=[{label:"Home",href:"/"},{label:".NET Guideline"}];return m.useEffect(()=>{const n=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&t(a.target.id)})},{threshold:.2,rootMargin:"-10% 0px -70% 0px"});return dp.forEach(i=>{const a=document.getElementById(i.id);a&&n.observe(a)}),()=>n.disconnect()},[]),s.jsxs(ht,{children:[s.jsx(Nt,{title:".NET Developer Guideline",subtitle:"The exhaustive reference for .NET development, clean code patterns, and project-specific conventions at AII.",breadcrumbs:r,readingTime:25}),s.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[s.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[s.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"})]}),s.jsxs("div",{className:"prose prose-slate dark:prose-invert max-w-none space-y-6",children:[s.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["AII .NET applications are built using ",s.jsx("strong",{children:".NET 8.0/9.0"})," following ",s.jsx("strong",{children:"Clean Architecture"})," or ",s.jsx("strong",{children:"Vertical Slice"})," principles. Our goal is to maintain highly testable, independent, and scalable codebases."]}),s.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose",children:[{text:".NET 8.0/9.0 ASP.NET Core",icon:Us},{text:"EF Core with PostgreSQL/SQL Server",icon:mt},{text:"MediatR for In-Process Messaging",icon:Ge},{text:"FluentValidation for Logic",icon:nt},{text:"Mapster/AutoMapper for DTOs",icon:We},{text:"Serilog & OpenTelemetry",icon:He}].map((n,i)=>s.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[s.jsx(n.icon,{className:"h-5 w-5 text-primary"}),s.jsx("span",{className:"font-semibold text-sm",children:n.text})]},i))}),s.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6 not-prose",children:[s.jsxs("div",{className:"flex items-center gap-3 text-blue-500",children:[s.jsx("div",{className:"p-2 rounded-lg bg-blue-500/10",children:s.jsx(ce,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),s.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first .NET project running at AII:"}),s.jsx("div",{className:"grid gap-4",children:[{step:"Install SDK",desc:"Download and install .NET 8.0 SDK and Runtime."},{step:"Setup IDE",desc:"Install JetBrains Rider (preferred) or VS 2022 with C# extensions."},{step:"Clone Template",desc:"Run 'dotnet new install AII.Templates' to get our latest skeleton."},{step:"Docker Setup",desc:"Ensure Docker Desktop is running for local PostgreSQL/Redis instances."},{step:"Run Tests",desc:"Execute 'dotnet test' to ensure the baseline project is stable."}].map((n,i)=>s.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[s.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm",children:i+1}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-foreground",children:n.step}),s.jsx("p",{className:"text-sm text-muted-foreground",children:n.desc})]})]},i))})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"architecture",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Architecture Design Choices"})]}),s.jsxs("div",{className:"space-y-10",children:[s.jsxs("div",{className:"space-y-6",children:[s.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Clean Architecture (Layered)"}),s.jsx("p",{className:"text-muted-foreground",children:"Standard for enterprise-grade applications with complex domains."}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-6",children:[s.jsx(O,{title:"Order.cs (Domain Layer)",language:"csharp",code:`public class Order : AggregateRoot
{
    public void MarkAsCompleted() {
        if (Status != OrderStatus.Processing)
            throw new DomainException("Invalid state transition");
        Status = OrderStatus.Completed;
    }
}`}),s.jsx(O,{title:"CompleteOrderUseCase.cs (App Layer)",language:"csharp",code:`public async Task Execute(int orderId) {
    var order = await _orderRepository.GetByIdAsync(orderId);
    order.MarkAsCompleted();
    await _unitOfWork.SaveChangesAsync();
}`})]})]}),s.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[s.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[s.jsx(cl,{className:"h-5 w-5"})," Layer Responsibilities"]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6 text-sm",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"API Layer"}),": Controllers, Endpoints, Middleware, Auth registration."]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Application Layer"}),": Commands, Queries, Handlers, DTOs, Validators."]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Domain Layer"}),": Entities, Value Objects, Domain Logic, Exceptions."]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Infrastructure Layer"}),": Data Access, External Clients, File Storage."]})]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"patterns",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Design Patterns"})]}),s.jsx("div",{className:"space-y-8",children:s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[s.jsx(Ge,{className:"h-5 w-5 text-yellow-500"})," CQRS with MediatR"]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Separates read models from write models and enables decorators for logging and validation."}),s.jsx(O,{language:"csharp",code:`public record CreateStudentCommand(string Name) : IRequest<int>;
public class CreateStudentHandler : IRequestHandler<CreateStudentCommand, int> { ... }`})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[s.jsx(He,{className:"h-5 w-5 text-emerald-500"})," Dependency Injection"]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Always use Constructor Injection. Prefer Scoped for DB context and Transient for lightweight services."}),s.jsx(O,{language:"csharp",code:`public class Service(IRepository repo) : IService {
    // Use Primary Constructor (C# 12)
}`})]})]})})]}),s.jsx(F,{}),s.jsxs("section",{id:"data-access",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Data Access Patterns"})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsx("h3",{className:"text-2xl font-bold",children:"Entity Framework Core"}),s.jsx("p",{className:"text-muted-foreground",children:"The primary ORM for AII .NET projects. Follow these best practices for performance."}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"glass p-6 rounded-2xl border border-emerald-500/20 space-y-4",children:[s.jsx("h5",{className:"font-bold text-emerald-600",children:"✅ Eager Loading & NoTracking"}),s.jsx(O,{language:"csharp",code:`var students = await _context.Students
    .AsNoTracking()
    .Include(s => s.Courses)
    .Where(s => s.IsActive)
    .ToListAsync();`})]}),s.jsxs("div",{className:"glass p-6 rounded-2xl border border-blue-500/20 space-y-4",children:[s.jsx("h5",{className:"font-bold text-blue-600 font-mono",children:"Dapper for Performance"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Use Dapper for high-performance read scenarios or complex stored procedures."}),s.jsx(O,{language:"csharp",code:`return await _dbConnection.QueryAsync<ReportDTO>(
    "EXEC GetComplexReport @Date", new { Date = DateTime.Now });`})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"api-approaches",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"API Implementation Approaches"})]}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx("h4",{className:"text-xl font-bold",children:"Standard Controllers"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Best for large-scale APIs requiring complex route attributes or filters."}),s.jsx(O,{language:"csharp",code:`[ApiController, Route("api/[controller]")]
public class StudentsController : ControllerBase {
    [HttpPost] public async Task<IActionResult> Create(DTO data) => Ok();
}`})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsx("h4",{className:"text-xl font-bold",children:"Minimal APIs"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Recommended for microservices or simple feature sets. Less boilerplate."}),s.jsx(O,{language:"csharp",code:`app.MapPost("/api/students", async (Command cmd, ISender sender) => 
    Results.Ok(await sender.Send(cmd)));`})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"naming",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Naming Conventions"})]}),s.jsx("div",{className:"overflow-x-auto rounded-3xl border glass",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-6 py-4 text-left",children:"Element"}),s.jsx("th",{className:"px-6 py-4 text-left",children:"Convention"}),s.jsx("th",{className:"px-6 py-4 text-left",children:"Example"})]})}),s.jsx("tbody",{className:"divide-y border-t",children:[{el:"Classes",conv:"PascalCase",ex:"UserService"},{el:"Interfaces",conv:"IPascalCase",ex:"IUserRepository"},{el:"Methods",conv:"PascalCaseAsync",ex:"GetListAsync"},{el:"Fields (Private)",conv:"_camelCase",ex:"_logger"},{el:"Parameters",conv:"camelCase",ex:"userId"}].map((n,i)=>s.jsxs("tr",{className:"hover:bg-accent/5 transition-colors",children:[s.jsx("td",{className:"px-6 py-4 font-semibold",children:n.el}),s.jsx("td",{className:"px-6 py-4",children:s.jsx(k,{variant:"outline",className:"bg-primary/5",children:n.conv})}),s.jsx("td",{className:"px-6 py-4 font-mono text-xs text-primary",children:n.ex})]},i))})]})})]}),s.jsx(F,{}),s.jsxs("section",{id:"organization",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"File and Project Organization"})]}),s.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[s.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest group-hover:text-blue-500/50 transition-colors",children:"Clean Architecture Structure"}),s.jsx("pre",{className:"leading-relaxed",children:`src/
├── Application/      # UseCases, DTOs, Handlers
│   ├── Common/
│   ├── Interfaces/
│   └── TodoItems/    # Feature-based folders
├── Domain/           # Entities, Value Objects
├── Infrastructure/   # Persistence, External Systems
└── WebApi/           # Controllers, Middleware`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"validation",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Validation & Error Handling"})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[s.jsx(nt,{className:"h-5 w-5 text-emerald-500"})," FluentValidation"]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Keep validation logic separate from your entities and commands."}),s.jsx(O,{language:"csharp",code:`public class CreateUserValidator : AbstractValidator<CreateUserCommand>
{
    public CreateUserValidator() {
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
    }
}`})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[s.jsx(_s,{className:"h-5 w-5 text-red-500"})," Global Exception Handling"]}),s.jsx("p",{className:"text-sm text-muted-foreground italic",children:"Use Exception Filters or Middleware to catch errors and return RFC-standard Problem Details."})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Guidelines"})]}),s.jsx("div",{className:"space-y-10",children:s.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"Unit Testing (xUnit)"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Test business logic in isolation using Moq or NSubstitute."}),s.jsx(O,{language:"csharp",code:`[Fact]
public async Task Handle_ValidRequest_ShouldReturnId() {
    // Arrange, Act, Assert
}`})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"Integration Testing"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Test the whole ASP.NET Core stack using WebApplicationFactory and Respawn."})]})]})})]}),s.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[s.jsxs("div",{className:"relative z-10 space-y-6",children:[s.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),s.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these .NET standards ensures your application is robust, secure, and ready for production at AII."}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(ke,{variant:"secondary",asChild:!0,children:s.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",s.jsx(ut,{className:"ml-2 h-4 w-4"})]})}),s.jsx(ke,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:s.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),s.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),s.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:s.jsxs("div",{className:"space-y-1 pb-12",children:[s.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),dp.map(n=>s.jsxs("a",{href:`#${n.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===n.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[s.jsx(n.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===n.id?"text-primary":"text-muted-foreground/40"}`}),n.title]},n.id))]})})]}),s.jsx("div",{className:"px-4 pb-8",children:s.jsx(hn,{previous:{title:"GitHub Workflow",href:"/github-axa-usage"},next:{title:"Java Development",href:"/java-developer-guideline"}})})]})},fe=m.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:ae("rounded-xl border bg-card text-card-foreground shadow",e),...t}));fe.displayName="Card";const je=m.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:ae("flex flex-col space-y-1.5 p-6",e),...t}));je.displayName="CardHeader";const Ne=m.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:ae("font-semibold leading-none tracking-tight",e),...t}));Ne.displayName="CardTitle";const at=m.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:ae("text-sm text-muted-foreground",e),...t}));at.displayName="CardDescription";const ye=m.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:ae("p-6 pt-0",e),...t}));ye.displayName="CardContent";const RP=m.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:ae("flex items-center p-6 pt-0",e),...t}));RP.displayName="CardFooter";const up=[{id:"overview",title:"1. Project Overview",icon:vt},{id:"components",title:"2. Component Architecture",icon:We},{id:"state",title:"3. State Management",icon:Ge},{id:"hooks",title:"4. Hooks Best Practices",icon:Vt},{id:"styling",title:"5. Styling Standards",icon:wm},{id:"data-fetching",title:"6. Data Fetching",icon:mt},{id:"forms",title:"7. Forms & Validation",icon:nt},{id:"testing",title:"8. Testing Standards",icon:ot},{id:"performance",title:"9. Performance",icon:He},{id:"accessibility",title:"10. Accessibility",icon:S0}],kP=()=>{const[e,t]=m.useState("overview"),r=[{label:"Home",href:"/"},{label:"Frontend & Mobile"},{label:"React"}];return m.useEffect(()=>{const n=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);t(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return up.forEach(i=>{const a=document.getElementById(i.id);a&&n.observe(a)}),()=>n.disconnect()},[]),s.jsxs(ht,{children:[s.jsx(Nt,{title:"React Development Guideline",subtitle:"Standardized practices for building modern, scalable, and maintainable frontend applications at AII.",breadcrumbs:r,readingTime:35}),s.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[s.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[s.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"}),s.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["React is our primary choice for building dynamic user interfaces. These guidelines ensure ",s.jsx("strong",{children:"consistency"}),", ",s.jsx("strong",{children:"performance"}),", and ",s.jsx("strong",{children:"accessibility"})," across all AII web projects."]})]}),s.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"React 18+",icon:Wr},{text:"TypeScript (Strict)",icon:ss},{text:"Vite Build Tool",icon:Ge},{text:"TanStack Query",icon:mt},{text:"React Hook Form",icon:nt},{text:"Vitest + Testing Library",icon:ot}].map((n,i)=>s.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[s.jsx(n.icon,{className:"h-5 w-5 text-primary"}),s.jsx("span",{className:"font-semibold text-sm",children:n.text})]},i))}),s.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6",children:[s.jsxs("div",{className:"flex items-center gap-3 text-cyan-600",children:[s.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10",children:s.jsx(ce,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),s.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first React project running at AII:"}),s.jsx("div",{className:"grid gap-4",children:[{step:"Install Node.js",desc:"Install Node.js 18+ LTS. Verify with: node --version"},{step:"Clone Repository",desc:"Clone the project repository and navigate to the project folder."},{step:"Install Dependencies",desc:"Run 'npm install' or 'pnpm install' to install all dependencies."},{step:"Setup IDE",desc:"Install VS Code with ESLint, Prettier, and TypeScript extensions."},{step:"Run Development Server",desc:"Execute 'npm run dev' to start the Vite development server."},{step:"Run Tests",desc:"Execute 'npm run test' to verify the project is stable."}].map((n,i)=>s.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[s.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-sm",children:i+1}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-foreground",children:n.step}),s.jsx("p",{className:"text-sm text-muted-foreground",children:n.desc})]})]},i))})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"components",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Component Architecture"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"We follow a functional component approach with strictly typed props and atomic design principles."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[s.jsx(Wr,{className:"h-5 w-5 text-cyan-500"})," Functional Components Only"]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Always prefer Functional Components with Hooks over Class Components. This leads to cleaner, more testable code."}),s.jsx(O,{language:"typescript",code:`// ✅ CORRECT: Functional component with typed props
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

export default UserProfile;`})]}),s.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[s.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"Project Structure"}),s.jsx("pre",{className:"leading-relaxed",children:`src/
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
└── styles/                    # Global styles and themes`})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ DO"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Use functional components"}),s.jsx("li",{children:"• Define explicit prop types"}),s.jsx("li",{children:"• Keep components focused (SRP)"}),s.jsx("li",{children:"• Extract reusable logic to hooks"}),s.jsx("li",{children:"• Use composition over inheritance"})]})]}),s.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ DON'T"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Use class components"}),s.jsx("li",{children:"• Use 'any' type for props"}),s.jsx("li",{children:"• Create god components (500+ lines)"}),s.jsx("li",{children:"• Duplicate logic across components"}),s.jsx("li",{children:"• Nest components too deeply"})]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"state",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"State Management"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Choose the right tool for the right job based on state scope and complexity."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"State Management Decision Tree"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-4 py-3 text-left",children:"State Type"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Solution"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"When to Use"})]})}),s.jsxs("tbody",{className:"divide-y",children:[s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Local UI State"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{children:"useState"})}),s.jsx("td",{className:"px-4 py-2",children:"Toggle, form inputs, modals"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Complex Local State"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{children:"useReducer"})}),s.jsx("td",{className:"px-4 py-2",children:"Multi-step forms, complex logic"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Server State"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"secondary",children:"TanStack Query"})}),s.jsx("td",{className:"px-4 py-2",children:"API data fetching, caching"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Global Client State"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"secondary",children:"Zustand"})}),s.jsx("td",{className:"px-4 py-2",children:"User preferences, app-wide settings"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Shared Context"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"outline",children:"Context API"})}),s.jsx("td",{className:"px-4 py-2",children:"Theme, auth, localization"})]})]})]})})]}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsx(O,{title:"Zustand Global Store",language:"typescript",code:`// stores/useAuthStore.ts
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
);`}),s.jsx(O,{title:"Context for Theme",language:"typescript",code:`// contexts/ThemeContext.tsx
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
};`})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"hooks",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Hooks Best Practices"})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"Custom Hook Pattern",language:"typescript",code:`// hooks/useDebounce.ts
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
};`}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-4",children:[s.jsx("h5",{className:"font-bold text-emerald-600",children:"✅ useEffect Best Practices"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-2",children:[s.jsx("li",{children:"• Always include dependencies"}),s.jsx("li",{children:"• Clean up subscriptions & timers"}),s.jsx("li",{children:"• Avoid async directly in useEffect"}),s.jsx("li",{children:"• Split unrelated effects"})]}),s.jsx(O,{language:"typescript",code:`// ✅ Correct: Async wrapper function
useEffect(() => {
  const fetchData = async () => {
    const result = await api.getUser(userId);
    setUser(result);
  };
  fetchData();
  
  return () => {
    // Cleanup if needed
  };
}, [userId]);`})]}),s.jsxs("div",{className:"p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-4",children:[s.jsx("h5",{className:"font-bold text-destructive",children:"❌ Common Mistakes"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-2",children:[s.jsx("li",{children:"• Missing dependency array"}),s.jsx("li",{children:"• Objects/arrays in deps without memo"}),s.jsx("li",{children:"• Async function as effect callback"}),s.jsx("li",{children:"• Forgetting cleanup functions"})]}),s.jsx(O,{language:"typescript",code:`// ❌ WRONG: Async directly as callback
useEffect(async () => {
  const result = await api.getUser(userId);
  setUser(result);
}, [userId]); // This causes issues!`})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"styling",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Styling Standards"})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"Recommended Approaches"}),s.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:[{name:"Tailwind CSS",desc:"Utility-first, rapid prototyping",badge:"Primary"},{name:"CSS Modules",desc:"Scoped styles, traditional CSS",badge:"Alternative"},{name:"shadcn/ui",desc:"Accessible component library",badge:"Components"}].map((n,i)=>s.jsxs("div",{className:"p-4 rounded-xl bg-background border",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-bold",children:n.name}),s.jsx(k,{variant:"outline",className:"text-xs",children:n.badge})]}),s.jsx("p",{className:"text-xs text-muted-foreground",children:n.desc})]},i))})]}),s.jsx(O,{title:"Component with Tailwind + cn() utility",language:"typescript",code:`// components/ui/Button.tsx
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
};`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"data-fetching",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Data Fetching"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"TanStack Query for server state management and data synchronization."})]}),s.jsx(O,{title:"TanStack Query Usage",language:"typescript",code:`// services/userService.ts
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
};`})]}),s.jsx(F,{}),s.jsxs("section",{id:"forms",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Forms & Validation"})]}),s.jsx(O,{title:"React Hook Form + Zod Validation",language:"typescript",code:`// schemas/userSchema.ts
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
};`})]}),s.jsx(F,{}),s.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Standards"})]}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsx(O,{title:"Component Testing",language:"typescript",code:`// components/Button.test.tsx
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
});`}),s.jsx(O,{title:"Hook Testing",language:"typescript",code:`// hooks/useCounter.test.tsx
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
});`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"performance",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Performance Optimization"})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(He,{className:"h-5 w-5 text-emerald-500"})," Code Splitting"]})}),s.jsxs(ye,{className:"space-y-4",children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:"Use React.lazy for route-level code splitting."}),s.jsx(O,{language:"typescript",code:`const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Suspense>
);`})]})]}),s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(Ge,{className:"h-5 w-5 text-yellow-500"})," Memoization"]})}),s.jsxs(ye,{className:"space-y-4",children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:"Use useMemo and useCallback strategically."}),s.jsx(O,{language:"typescript",code:`const ExpensiveList = ({ items, filter }) => {
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
};`})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"accessibility",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Accessibility (a11y)"})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ CHECKLIST"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Use semantic HTML elements"}),s.jsx("li",{children:"• Add ARIA labels where needed"}),s.jsx("li",{children:"• Ensure keyboard navigation works"}),s.jsx("li",{children:"• Maintain focus management in modals"}),s.jsx("li",{children:"• Use sufficient color contrast"}),s.jsx("li",{children:"• Add alt text to all images"})]})]}),s.jsx("div",{className:"space-y-4",children:s.jsx(O,{language:"typescript",code:`// Accessible button with icon
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
</div>`})})]})]}),s.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[s.jsxs("div",{className:"relative z-10 space-y-6",children:[s.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),s.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these React standards ensures your frontend applications are performant, accessible, and maintainable."}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(ke,{variant:"secondary",asChild:!0,children:s.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",s.jsx(ut,{className:"ml-2 h-4 w-4"})]})}),s.jsx(ke,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:s.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),s.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),s.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:s.jsxs("div",{className:"space-y-1 pb-12",children:[s.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),up.map(n=>s.jsxs("a",{href:`#${n.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===n.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[s.jsx(n.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===n.id?"text-primary":"text-muted-foreground/40"}`}),n.title]},n.id))]})})]}),s.jsx("div",{className:"px-4 pb-8",children:s.jsx(hn,{previous:{title:".NET Development",href:"/dotnet-developer-guideline"},next:{title:"Flutter Development",href:"/flutter-developer-guideline"}})})]})},pp=[{id:"overview",title:"1. Project Overview",icon:vt},{id:"project-structure",title:"2. Project Structure",icon:We},{id:"spring-boot",title:"3. Spring Boot Standards",icon:Ge},{id:"rest-api",title:"4. REST API Design",icon:Us},{id:"persistence",title:"5. Persistence & Database",icon:mt},{id:"validation",title:"6. Validation & Errors",icon:nt},{id:"testing",title:"7. Testing Guidelines",icon:ot},{id:"logging",title:"8. Logging & Monitoring",icon:He},{id:"maven",title:"9. Maven Build",icon:Vt},{id:"naming",title:"10. Code Style & Naming",icon:Di}],PP=()=>{const[e,t]=m.useState("overview"),r=[{label:"Home",href:"/"},{label:"Backend Guidelines"},{label:"Java"}];return m.useEffect(()=>{const n=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);t(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return pp.forEach(i=>{const a=document.getElementById(i.id);a&&n.observe(a)}),()=>n.disconnect()},[]),s.jsxs(ht,{children:[s.jsx(Nt,{title:"Java Developer Guideline",subtitle:"Standardized practices for building robust and scalable backend services using Java, Spring Boot, and Maven at AII.",breadcrumbs:r}),s.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[s.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[s.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"}),s.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["Java is used for high-performance, enterprise-grade backend services at AII. We utilize ",s.jsx("strong",{children:"Spring Boot 3.x"})," with ",s.jsx("strong",{children:"Maven"})," to accelerate development while maintaining the highest code quality standards."]})]}),s.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Java 17/21 LTS",icon:Pi},{text:"Spring Boot 3.x",icon:Ge},{text:"Maven Build Tool",icon:Vt},{text:"PostgreSQL / Oracle",icon:mt},{text:"Spring Security + JWT",icon:Fs},{text:"Micrometer Metrics",icon:He}].map((n,i)=>s.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[s.jsx(n.icon,{className:"h-5 w-5 text-primary"}),s.jsx("span",{className:"font-semibold text-sm",children:n.text})]},i))}),s.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-orange-500/5 border border-orange-500/10 space-y-6",children:[s.jsxs("div",{className:"flex items-center gap-3 text-orange-500",children:[s.jsx("div",{className:"p-2 rounded-lg bg-orange-500/10",children:s.jsx(ce,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),s.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first Java project running at AII:"}),s.jsx("div",{className:"grid gap-4",children:[{step:"Install JDK",desc:"Download and install JDK 17 or 21 LTS. Verify with: java -version"},{step:"Install Maven",desc:"Install Apache Maven 3.9+. Verify with: mvn -version"},{step:"Setup IDE",desc:"Install IntelliJ IDEA Ultimate (preferred) or VS Code with Java extensions."},{step:"Clone Template",desc:"Clone the AII Spring Boot starter template from the internal repository."},{step:"Build & Run",desc:"Execute 'mvn spring-boot:run' to start the application locally."},{step:"Run Tests",desc:"Execute 'mvn test' to verify the baseline project is stable."}].map((n,i)=>s.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[s.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-sm",children:i+1}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-foreground",children:n.step}),s.jsx("p",{className:"text-sm text-muted-foreground",children:n.desc})]})]},i))})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"project-structure",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Structure (Maven)"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Standard Maven project layout for all AII Java applications."})]}),s.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[s.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"Maven Standard Layout"}),s.jsx("pre",{className:"leading-relaxed",children:`project-root/
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
└── target/                               # Build output (gitignored)`})]}),s.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[s.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[s.jsx(We,{className:"h-5 w-5"})," Layer Responsibilities"]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6 text-sm",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Controller Layer"}),": REST endpoints, request validation, response mapping."]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Service Layer"}),": Business logic, transaction management, orchestration."]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Repository Layer"}),": Data access, JPA queries, database operations."]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Model/DTO Layer"}),": Entities for persistence, DTOs for API contracts."]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"spring-boot",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Spring Boot Standards"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Core patterns and best practices for Spring Boot development."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[s.jsx(Ge,{className:"h-5 w-5 text-yellow-500"})," Dependency Injection"]}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Always use ",s.jsx("strong",{children:"Constructor Injection"})," with Lombok's @RequiredArgsConstructor for cleaner code."]}),s.jsx(O,{language:"java",code:`@Service
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
}`})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[s.jsx(Vt,{className:"h-5 w-5 text-emerald-500"})," Configuration Properties"]}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Use ",s.jsx("code",{children:"@ConfigurationProperties"})," for type-safe configuration binding."]}),s.jsx(O,{language:"java",code:`@Configuration
@ConfigurationProperties(prefix = "app.jwt")
@Validated
public class JwtProperties {
    
    @NotBlank
    private String secret;
    
    @Positive
    private long expirationMs = 86400000; // 24 hours default
    
    // Getters and setters
}`})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ DO"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Use constructor injection"}),s.jsx("li",{children:"• Prefer @ConfigurationProperties"}),s.jsx("li",{children:"• Use profiles for environments"}),s.jsx("li",{children:"• Enable actuator endpoints"})]})]}),s.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ DON'T"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Use @Autowired on fields"}),s.jsx("li",{children:"• Hardcode configuration values"}),s.jsx("li",{children:"• Mix @Component with @Bean"}),s.jsx("li",{children:"• Ignore Spring profiles"})]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"rest-api",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"REST API Design"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Standards for building consistent and maintainable REST APIs."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"Standard Controller Pattern",language:"java",code:`@RestController
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
}`}),s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"API Naming Conventions"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-4 py-3 text-left",children:"HTTP Method"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Path"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Purpose"})]})}),s.jsxs("tbody",{className:"divide-y",children:[s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-mono",children:"GET"}),s.jsx("td",{className:"px-4 py-2",children:"/api/v1/resources"}),s.jsx("td",{className:"px-4 py-2",children:"List all resources"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-mono",children:"GET"}),s.jsxs("td",{className:"px-4 py-2",children:["/api/v1/resources/","{id}"]}),s.jsx("td",{className:"px-4 py-2",children:"Get single resource"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-mono",children:"POST"}),s.jsx("td",{className:"px-4 py-2",children:"/api/v1/resources"}),s.jsx("td",{className:"px-4 py-2",children:"Create resource"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-mono",children:"PUT"}),s.jsxs("td",{className:"px-4 py-2",children:["/api/v1/resources/","{id}"]}),s.jsx("td",{className:"px-4 py-2",children:"Update resource"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-mono",children:"DELETE"}),s.jsxs("td",{className:"px-4 py-2",children:["/api/v1/resources/","{id}"]}),s.jsx("td",{className:"px-4 py-2",children:"Delete resource"})]})]})]})})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"persistence",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Persistence & Database"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"JPA/Hibernate best practices and database access patterns."})]}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx("h4",{className:"text-xl font-bold",children:"Entity Design"}),s.jsx(O,{language:"java",code:`@Entity
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
}`})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsx("h4",{className:"text-xl font-bold",children:"Repository Pattern"}),s.jsx(O,{language:"java",code:`public interface UserRepository 
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
}`})]})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[s.jsx(mt,{className:"h-5 w-5 text-blue-500"})," Database Migrations (Flyway)"]}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Use Flyway for version-controlled database migrations. Place scripts in ",s.jsx("code",{children:"src/main/resources/db/migration/"})]}),s.jsx(O,{title:"V1__Create_users_table.sql",language:"sql",code:`-- Flyway migration: V1__Create_users_table.sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"validation",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Validation & Error Handling"})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[s.jsx(nt,{className:"h-5 w-5 text-emerald-500"})," Jakarta Validation"]}),s.jsx(O,{language:"java",code:`public record CreateUserRequest(
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    String email,
    
    @NotBlank(message = "Password is required")
    @Size(min = 8, max = 100, 
          message = "Password must be 8-100 characters")
    String password,
    
    @NotNull(message = "Role is required")
    UserRole role
) {}`})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[s.jsx(_s,{className:"h-5 w-5 text-red-500"})," Global Exception Handler"]}),s.jsx(O,{language:"java",code:`@RestControllerAdvice
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
}`})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Guidelines"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Comprehensive testing with JUnit 5, Mockito, and TestContainers."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"Test Naming Convention"}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Follow the pattern: ",s.jsx("code",{className:"text-primary",children:"methodName_Scenario_ExpectedBehavior"})]}),s.jsxs("div",{className:"flex flex-wrap gap-2",children:[s.jsx(k,{variant:"outline",className:"font-mono text-xs",children:"createUser_ValidRequest_ReturnsCreatedUser"}),s.jsx(k,{variant:"outline",className:"font-mono text-xs",children:"findById_NonExistentId_ThrowsNotFoundException"})]})]}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx("h4",{className:"text-xl font-bold",children:"Unit Testing with Mockito"}),s.jsx(O,{language:"java",code:`@ExtendWith(MockitoExtension.class)
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
}`})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsx("h4",{className:"text-xl font-bold",children:"Integration Testing"}),s.jsx(O,{language:"java",code:`@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
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
}`})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"logging",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Logging & Monitoring"})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(Bt,{className:"h-5 w-5 text-emerald-500"})," Structured Logging"]})}),s.jsxs(ye,{className:"space-y-4",children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:"Use SLF4J with Logback for consistent, structured logging."}),s.jsx(O,{language:"java",code:`@Slf4j
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
}`})]})]}),s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(He,{className:"h-5 w-5 text-blue-500"})," Actuator Endpoints"]})}),s.jsxs(ye,{className:"space-y-4",children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:"Enable Spring Boot Actuator for health checks and metrics."}),s.jsx(O,{language:"yaml",code:`# application.yml
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
      application: \${spring.application.name}`})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"maven",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Maven Build Configuration"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Standard Maven pom.xml configuration for AII Java projects."})]}),s.jsx(O,{title:"pom.xml",language:"xml",code:`<?xml version="1.0" encoding="UTF-8"?>
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
</project>`}),s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"Common Maven Commands"}),s.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:[{cmd:"mvn clean install",desc:"Build and install to local repo"},{cmd:"mvn spring-boot:run",desc:"Run application"},{cmd:"mvn test",desc:"Run unit tests"},{cmd:"mvn verify",desc:"Run all tests including integration"},{cmd:"mvn dependency:tree",desc:"Show dependency tree"},{cmd:"mvn versions:display-dependency-updates",desc:"Check for updates"}].map((n,i)=>s.jsxs("div",{className:"flex gap-3 p-3 rounded-lg bg-background border",children:[s.jsx("code",{className:"text-xs font-mono text-primary whitespace-nowrap",children:n.cmd}),s.jsx("span",{className:"text-xs text-muted-foreground",children:n.desc})]},i))})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"naming",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Style & Naming Conventions"})]}),s.jsx("div",{className:"overflow-x-auto rounded-3xl border glass",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-6 py-4 text-left",children:"Element"}),s.jsx("th",{className:"px-6 py-4 text-left",children:"Convention"}),s.jsx("th",{className:"px-6 py-4 text-left",children:"Example"})]})}),s.jsx("tbody",{className:"divide-y border-t",children:[{el:"Classes",conv:"PascalCase",ex:"UserService"},{el:"Interfaces",conv:"PascalCase",ex:"UserRepository"},{el:"Methods",conv:"camelCase",ex:"findByEmail"},{el:"Variables",conv:"camelCase",ex:"userName"},{el:"Constants",conv:"SCREAMING_SNAKE_CASE",ex:"MAX_RETRY_COUNT"},{el:"Packages",conv:"lowercase",ex:"com.axa.aii.service"},{el:"Enums",conv:"PascalCase",ex:"UserStatus"},{el:"Enum Values",conv:"SCREAMING_SNAKE_CASE",ex:"ACTIVE, INACTIVE"}].map((n,i)=>s.jsxs("tr",{className:"hover:bg-accent/5 transition-colors",children:[s.jsx("td",{className:"px-6 py-4 font-semibold",children:n.el}),s.jsx("td",{className:"px-6 py-4",children:s.jsx(k,{variant:"outline",className:"bg-primary/5",children:n.conv})}),s.jsx("td",{className:"px-6 py-4 font-mono text-xs text-primary",children:n.ex})]},i))})]})}),s.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4",children:[s.jsx(ss,{className:"h-6 w-6 text-primary shrink-0"}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("h4",{className:"font-bold text-primary",children:"Google Java Style Guide"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"AII follows the Google Java Style Guide. Configure your IDE with the provided Checkstyle configuration file."})]})]})]}),s.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[s.jsxs("div",{className:"relative z-10 space-y-6",children:[s.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),s.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these Java standards ensures your application is robust, secure, and ready for production at AII."}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(ke,{variant:"secondary",asChild:!0,children:s.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",s.jsx(ut,{className:"ml-2 h-4 w-4"})]})}),s.jsx(ke,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:s.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),s.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),s.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:s.jsxs("div",{className:"space-y-1 pb-12",children:[s.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),pp.map(n=>s.jsxs("a",{href:`#${n.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===n.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[s.jsx(n.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===n.id?"text-primary":"text-muted-foreground/40"}`}),n.title]},n.id))]})})]})]})},mp=[{id:"overview",title:"1. Project Overview",icon:vt},{id:"project-structure",title:"2. Project Structure",icon:We},{id:"fastapi",title:"3. FastAPI Standards",icon:Ge},{id:"pydantic",title:"4. Pydantic Validation",icon:nt},{id:"database",title:"5. Database Access",icon:mt},{id:"ai-integration",title:"6. AI/ML Integration",icon:xm},{id:"testing",title:"7. Testing Standards",icon:ot},{id:"code-style",title:"8. Code Style",icon:Di},{id:"error-handling",title:"9. Error Handling",icon:_s},{id:"deployment",title:"10. Deployment",icon:Us}],AP=()=>{const[e,t]=m.useState("overview"),r=[{label:"Home",href:"/"},{label:"Backend Guidelines"},{label:"Python"}];return m.useEffect(()=>{const n=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);t(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return mp.forEach(i=>{const a=document.getElementById(i.id);a&&n.observe(a)}),()=>n.disconnect()},[]),s.jsxs(ht,{children:[s.jsx(Nt,{title:"Python & AI Guideline",subtitle:"Standardized practices for AI integration, data processing, and FastAPI development at AII.",breadcrumbs:r}),s.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[s.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[s.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"}),s.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["Python is our go-to language for ",s.jsx("strong",{children:"AI/ML"}),", ",s.jsx("strong",{children:"data processing"}),", and ",s.jsx("strong",{children:"rapid API development"}),". We focus on readability, strict type hints, and efficient data processing pipelines."]})]}),s.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Python 3.10+",icon:Bt},{text:"FastAPI Framework",icon:Ge},{text:"Pydantic v2",icon:nt},{text:"SQLAlchemy 2.0",icon:mt},{text:"PyTorch / TensorFlow",icon:xm},{text:"Poetry / pip",icon:Vt}].map((n,i)=>s.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[s.jsx(n.icon,{className:"h-5 w-5 text-primary"}),s.jsx("span",{className:"font-semibold text-sm",children:n.text})]},i))}),s.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-yellow-500/5 border border-yellow-500/10 space-y-6",children:[s.jsxs("div",{className:"flex items-center gap-3 text-yellow-600",children:[s.jsx("div",{className:"p-2 rounded-lg bg-yellow-500/10",children:s.jsx(ce,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),s.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first Python project running at AII:"}),s.jsx("div",{className:"grid gap-4",children:[{step:"Install Python",desc:"Install Python 3.10+ via pyenv or your package manager. Verify with: python --version"},{step:"Create Virtual Environment",desc:"Run 'python -m venv .venv' and activate with 'source .venv/bin/activate'"},{step:"Install Dependencies",desc:"Run 'pip install -r requirements.txt' or 'poetry install' for the project."},{step:"Setup IDE",desc:"Install VS Code with Python extension or PyCharm Professional."},{step:"Run Application",desc:"Execute 'uvicorn app.main:app --reload' to start the FastAPI server."},{step:"Run Tests",desc:"Execute 'pytest' to verify the baseline project is stable."}].map((n,i)=>s.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[s.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-600 flex items-center justify-center font-bold text-sm",children:i+1}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-foreground",children:n.step}),s.jsx("p",{className:"text-sm text-muted-foreground",children:n.desc})]})]},i))})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"project-structure",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Structure"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Standard project layout for all AII Python applications."})]}),s.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[s.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"FastAPI Project Layout"}),s.jsx("pre",{className:"leading-relaxed",children:`project-root/
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
└── Dockerfile`})]}),s.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[s.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[s.jsx(We,{className:"h-5 w-5"})," Layer Responsibilities"]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6 text-sm",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"API Layer"}),": Route handlers, request/response handling, dependency injection."]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Services Layer"}),": Business logic, data transformation, orchestration."]})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Models Layer"}),": SQLAlchemy ORM models for database entities."]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Schemas Layer"}),": Pydantic models for validation and serialization."]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"fastapi",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"FastAPI Standards"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Core patterns for building high-performance APIs with FastAPI."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[s.jsx(Ge,{className:"h-5 w-5 text-yellow-500"})," Router Organization"]}),s.jsx(O,{language:"python",code:`# app/api/v1/endpoints/users.py
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
    return await service.create(user_data)`})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[s.jsx(Vt,{className:"h-5 w-5 text-emerald-500"})," Dependency Injection"]}),s.jsx(O,{language:"python",code:`# app/api/deps.py
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
    ...`})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"pydantic",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Pydantic Validation"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Type-safe data validation and serialization with Pydantic v2."})]}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx("h4",{className:"text-xl font-bold",children:"Schema Design"}),s.jsx(O,{language:"python",code:`# app/schemas/user.py
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
    
    model_config = {"from_attributes": True}`})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsx("h4",{className:"text-xl font-bold",children:"Settings Management"}),s.jsx(O,{language:"python",code:`# app/config.py
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
    return Settings()`})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"database",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Database Access"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"SQLAlchemy 2.0 with async support and Alembic migrations."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"SQLAlchemy Model",language:"python",code:`# app/models/user.py
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
    )`}),s.jsx(O,{title:"Async Database Session",language:"python",code:`# app/db/session.py
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
)`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"ai-integration",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"AI/ML Integration"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Patterns for integrating machine learning models into FastAPI services."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"Model Loading Pattern",language:"python",code:`# app/ml/model_manager.py
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
    return ModelManager()`}),s.jsx(O,{title:"ML Inference Endpoint",language:"python",code:`# app/api/v1/endpoints/predictions.py
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
    return PredictionResponse(**result)`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Standards"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Comprehensive testing with pytest and TestClient."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"Test Naming Convention"}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Follow the pattern: ",s.jsx("code",{className:"text-primary",children:"test_functionname_scenario_expected"})]}),s.jsxs("div",{className:"flex flex-wrap gap-2",children:[s.jsx(k,{variant:"outline",className:"font-mono text-xs",children:"test_create_user_valid_data_returns_201"}),s.jsx(k,{variant:"outline",className:"font-mono text-xs",children:"test_get_user_not_found_returns_404"})]})]}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsx(O,{title:"Pytest Fixtures",language:"python",code:`# tests/conftest.py
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
        yield ac`}),s.jsx(O,{title:"API Tests",language:"python",code:`# tests/test_users.py
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
    assert "password" not in data  # Never expose`})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"code-style",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Style & Formatting"})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ MANDATORY"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Type hints on all functions"}),s.jsx("li",{children:"• Black formatter (line length 88)"}),s.jsx("li",{children:"• Ruff for linting"}),s.jsx("li",{children:"• Docstrings on public functions"}),s.jsx("li",{children:"• PEP 8 naming conventions"})]})]}),s.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ AVOID"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Any type without justification"}),s.jsx("li",{children:"• Functions longer than 50 lines"}),s.jsx("li",{children:"• Star imports (from x import *)"}),s.jsx("li",{children:"• Magic numbers without constants"}),s.jsx("li",{children:"• Global mutable state"})]})]})]}),s.jsx("div",{className:"overflow-x-auto rounded-3xl border glass",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-6 py-4 text-left",children:"Element"}),s.jsx("th",{className:"px-6 py-4 text-left",children:"Convention"}),s.jsx("th",{className:"px-6 py-4 text-left",children:"Example"})]})}),s.jsx("tbody",{className:"divide-y border-t",children:[{el:"Modules",conv:"snake_case",ex:"user_service.py"},{el:"Classes",conv:"PascalCase",ex:"UserService"},{el:"Functions",conv:"snake_case",ex:"get_user_by_id"},{el:"Variables",conv:"snake_case",ex:"user_count"},{el:"Constants",conv:"SCREAMING_SNAKE_CASE",ex:"MAX_RETRIES"},{el:"Private",conv:"_leading_underscore",ex:"_internal_method"}].map((n,i)=>s.jsxs("tr",{className:"hover:bg-accent/5 transition-colors",children:[s.jsx("td",{className:"px-6 py-4 font-semibold",children:n.el}),s.jsx("td",{className:"px-6 py-4",children:s.jsx(k,{variant:"outline",className:"bg-primary/5",children:n.conv})}),s.jsx("td",{className:"px-6 py-4 font-mono text-xs text-primary",children:n.ex})]},i))})]})}),s.jsx(O,{title:"pyproject.toml - Tooling Configuration",language:"toml",code:`[tool.black]
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
warn_return_any = true`})]}),s.jsx(F,{}),s.jsxs("section",{id:"error-handling",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Error Handling"})]}),s.jsx(O,{title:"Custom Exception Hierarchy",language:"python",code:`# app/core/exceptions.py
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
    )`})]}),s.jsx(F,{}),s.jsxs("section",{id:"deployment",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Deployment"})]}),s.jsx(O,{title:"Dockerfile",language:"dockerfile",code:`# Multi-stage build for optimized image
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

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`}),s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"Common Commands"}),s.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:[{cmd:"uvicorn app.main:app --reload",desc:"Run dev server"},{cmd:"pytest -v --cov=app",desc:"Run tests with coverage"},{cmd:"alembic upgrade head",desc:"Apply migrations"},{cmd:"alembic revision --autogenerate",desc:"Create migration"},{cmd:"black . && ruff check .",desc:"Format and lint"},{cmd:"mypy app/",desc:"Type checking"}].map((n,i)=>s.jsxs("div",{className:"flex gap-3 p-3 rounded-lg bg-background border",children:[s.jsx("code",{className:"text-xs font-mono text-primary whitespace-nowrap",children:n.cmd}),s.jsx("span",{className:"text-xs text-muted-foreground",children:n.desc})]},i))})]})]}),s.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[s.jsxs("div",{className:"relative z-10 space-y-6",children:[s.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),s.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these Python standards ensures your AI/ML services and APIs are robust, maintainable, and production-ready."}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(ke,{variant:"secondary",asChild:!0,children:s.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",s.jsx(ut,{className:"ml-2 h-4 w-4"})]})}),s.jsx(ke,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:s.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),s.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),s.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:s.jsxs("div",{className:"space-y-1 pb-12",children:[s.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),mp.map(n=>s.jsxs("a",{href:`#${n.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===n.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[s.jsx(n.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===n.id?"text-primary":"text-muted-foreground/40"}`}),n.title]},n.id))]})})]})]})},hp=[{id:"overview",title:"1. Project Overview",icon:vt},{id:"project-structure",title:"2. Project Structure",icon:xj},{id:"state-management",title:"3. State Management",icon:Ge},{id:"ui-ux",title:"4. UI/UX Standards",icon:wm},{id:"navigation",title:"5. Navigation",icon:Nm},{id:"api-integration",title:"6. API Integration",icon:mt},{id:"local-storage",title:"7. Local Storage",icon:Fs},{id:"testing",title:"8. Testing",icon:ot},{id:"performance",title:"9. Performance",icon:He},{id:"naming",title:"10. Code Style",icon:Di}],DP=()=>{const[e,t]=m.useState("overview"),r=[{label:"Home",href:"/"},{label:"Frontend & Mobile"},{label:"Flutter"}];return m.useEffect(()=>{const n=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);t(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return hp.forEach(i=>{const a=document.getElementById(i.id);a&&n.observe(a)}),()=>n.disconnect()},[]),s.jsxs(ht,{children:[s.jsx(Nt,{title:"Flutter Mobile Guideline",subtitle:"Standardized practices for building cross-platform mobile applications with Flutter and Dart at AII.",breadcrumbs:r}),s.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[s.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[s.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"}),s.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["Flutter allows us to maintain a ",s.jsx("strong",{children:"single codebase"})," for both iOS and Android while ensuring high-quality, native performance and premium UI/UX experiences."]})]}),s.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Flutter 3.x",icon:Mi},{text:"Dart 3.x",icon:Ge},{text:"Riverpod / BLoC",icon:We},{text:"Dio HTTP Client",icon:mt},{text:"GoRouter Navigation",icon:Nm},{text:"Hive / SharedPrefs",icon:Fs}].map((n,i)=>s.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[s.jsx(n.icon,{className:"h-5 w-5 text-primary"}),s.jsx("span",{className:"font-semibold text-sm",children:n.text})]},i))}),s.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6",children:[s.jsxs("div",{className:"flex items-center gap-3 text-blue-500",children:[s.jsx("div",{className:"p-2 rounded-lg bg-blue-500/10",children:s.jsx(ce,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),s.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first Flutter project running at AII:"}),s.jsx("div",{className:"grid gap-4",children:[{step:"Install Flutter SDK",desc:"Download Flutter SDK 3.x and add to PATH. Verify with: flutter doctor"},{step:"Setup IDE",desc:"Install VS Code with Flutter/Dart extensions or Android Studio with Flutter plugin."},{step:"Setup Emulators",desc:"Configure Android emulator and/or iOS Simulator (macOS required for iOS)."},{step:"Clone Repository",desc:"Clone the project repository and navigate to the project folder."},{step:"Get Dependencies",desc:"Run 'flutter pub get' to install all package dependencies."},{step:"Run Application",desc:"Execute 'flutter run' to launch the app on your connected device/emulator."}].map((n,i)=>s.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[s.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm",children:i+1}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-foreground",children:n.step}),s.jsx("p",{className:"text-sm text-muted-foreground",children:n.desc})]})]},i))})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"project-structure",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Structure"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Feature-based folder organization following Clean Architecture principles."})]}),s.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[s.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"Clean Architecture Layout"}),s.jsx("pre",{className:"leading-relaxed",children:`lib/
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
    └── app_router.dart           # GoRouter configuration`})]}),s.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[s.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[s.jsx(We,{className:"h-5 w-5"})," Clean Architecture Layers"]}),s.jsxs("div",{className:"grid md:grid-cols-3 gap-6 text-sm",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{children:s.jsx("strong",{children:"Presentation"})}),s.jsx("p",{className:"text-muted-foreground",children:"UI (Pages, Widgets), State Management (BLoC/Riverpod)"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{children:s.jsx("strong",{children:"Domain"})}),s.jsx("p",{className:"text-muted-foreground",children:"Entities, Use Cases, Repository Interfaces"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{children:s.jsx("strong",{children:"Data"})}),s.jsx("p",{className:"text-muted-foreground",children:"Models, Data Sources, Repository Implementations"})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"state-management",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"State Management"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"We primarily use Riverpod or BLoC depending on team preference and project complexity."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"When to Use Which?"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-4 py-3 text-left",children:"Solution"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Best For"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Complexity"})]})}),s.jsxs("tbody",{className:"divide-y",children:[s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Riverpod"}),s.jsx("td",{className:"px-4 py-2",children:"Most projects, compile-time safety"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"secondary",children:"Medium"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"BLoC"}),s.jsx("td",{className:"px-4 py-2",children:"Complex apps, strict separation"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"secondary",children:"High"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Provider"}),s.jsx("td",{className:"px-4 py-2",children:"Simple apps, quick prototypes"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"outline",children:"Low"})})]})]})]})})]}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsx(O,{title:"Riverpod Provider Example",language:"dart",code:`// providers/auth_provider.dart
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
}`}),s.jsx(O,{title:"BLoC Pattern Example",language:"dart",code:`// bloc/auth_bloc.dart
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
)`})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"ui-ux",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"UI/UX Standards"})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"Theme Configuration",language:"dart",code:`// core/theme/app_theme.dart
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
}`}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Widget Best Practices"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Use const constructors wherever possible"}),s.jsx("li",{children:"• Extract widgets into separate files"}),s.jsx("li",{children:"• Use MediaQuery for responsive layouts"}),s.jsx("li",{children:"• Prefer SizedBox over Container for spacing"}),s.jsx("li",{children:"• Use CustomScrollView for complex scrolling"})]})]}),s.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Avoid"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Deep widget nesting (3+ levels)"}),s.jsx("li",{children:"• Hardcoded colors/dimensions"}),s.jsx("li",{children:"• setState in deeply nested widgets"}),s.jsx("li",{children:"• Heavy computation in build()"}),s.jsx("li",{children:"• Ignoring platform differences"})]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"navigation",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Navigation"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Use GoRouter for declarative routing with deep linking support."})]}),s.jsx(O,{title:"GoRouter Configuration",language:"dart",code:`// router/app_router.dart
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
context.goNamed('product-detail', pathParameters: {'id': '456'});`})]}),s.jsx(F,{}),s.jsxs("section",{id:"api-integration",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"API Integration"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Dio HTTP client with interceptors for authentication and error handling."})]}),s.jsx(O,{title:"Dio Client Configuration",language:"dart",code:`// core/network/dio_client.dart
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
}`})]}),s.jsx(F,{}),s.jsxs("section",{id:"local-storage",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Local Storage"})]}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsxs(je,{children:[s.jsx(Ne,{className:"text-lg",children:"SharedPreferences"}),s.jsx(at,{children:"Simple key-value storage"})]}),s.jsx(ye,{children:s.jsx(O,{language:"dart",code:`// For simple settings and flags
final prefs = await SharedPreferences.getInstance();
await prefs.setString('theme', 'dark');
await prefs.setBool('onboarding_complete', true);

final theme = prefs.getString('theme') ?? 'light';`})})]}),s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsxs(je,{children:[s.jsx(Ne,{className:"text-lg",children:"Hive / Isar"}),s.jsx(at,{children:"Structured data & offline cache"})]}),s.jsx(ye,{children:s.jsx(O,{language:"dart",code:`// For complex objects and offline data
@HiveType(typeId: 0)
class User extends HiveObject {
  @HiveField(0)
  late String id;
  @HiveField(1)
  late String name;
}

final box = Hive.box<User>('users');
await box.put('current', user);`})})]})]}),s.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4",children:[s.jsx(Fs,{className:"h-6 w-6 text-primary shrink-0"}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("h4",{className:"font-bold text-primary",children:"Secure Storage"}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["For sensitive data like tokens and credentials, always use ",s.jsx("code",{children:"flutter_secure_storage"})," which encrypts data using platform-specific secure storage (Keychain on iOS, EncryptedSharedPreferences on Android)."]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing"})]}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsx(O,{title:"Widget Testing",language:"dart",code:`// test/widgets/login_button_test.dart
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
}`}),s.jsx(O,{title:"Unit Testing with Mocktail",language:"dart",code:`// test/services/auth_service_test.dart
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
}`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"performance",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Performance"})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Optimization Tips"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Use const constructors liberally"}),s.jsx("li",{children:"• Implement ListView.builder for long lists"}),s.jsx("li",{children:"• Cache network images (cached_network_image)"}),s.jsx("li",{children:"• Use RepaintBoundary for complex widgets"}),s.jsx("li",{children:"• Avoid rebuilds with Selector/Consumer"}),s.jsx("li",{children:"• Profile with Flutter DevTools"})]})]}),s.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Performance Killers"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Building all children at once (ListView)"}),s.jsx("li",{children:"• Unoptimized images (size, format)"}),s.jsx("li",{children:"• Blocking the main isolate"}),s.jsx("li",{children:"• Excessive setState calls"}),s.jsx("li",{children:"• Memory leaks from streams"})]})]})]}),s.jsx(O,{title:"Efficient List Building",language:"dart",code:`// ❌ WRONG: All items built at once
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
)`})]}),s.jsx(F,{}),s.jsxs("section",{id:"naming",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Style & Naming"})]}),s.jsx("div",{className:"overflow-x-auto rounded-3xl border glass",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-6 py-4 text-left",children:"Element"}),s.jsx("th",{className:"px-6 py-4 text-left",children:"Convention"}),s.jsx("th",{className:"px-6 py-4 text-left",children:"Example"})]})}),s.jsx("tbody",{className:"divide-y border-t",children:[{el:"Files",conv:"snake_case",ex:"user_service.dart"},{el:"Classes",conv:"PascalCase",ex:"UserService"},{el:"Functions",conv:"camelCase",ex:"getUserById"},{el:"Variables",conv:"camelCase",ex:"userName"},{el:"Constants",conv:"camelCase",ex:"defaultTimeout"},{el:"Private",conv:"_leadingUnderscore",ex:"_internalMethod"},{el:"Widgets",conv:"PascalCase",ex:"UserProfileCard"}].map((n,i)=>s.jsxs("tr",{className:"hover:bg-accent/5 transition-colors",children:[s.jsx("td",{className:"px-6 py-4 font-semibold",children:n.el}),s.jsx("td",{className:"px-6 py-4",children:s.jsx(k,{variant:"outline",className:"bg-primary/5",children:n.conv})}),s.jsx("td",{className:"px-6 py-4 font-mono text-xs text-primary",children:n.ex})]},i))})]})}),s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"Common Flutter Commands"}),s.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:[{cmd:"flutter run",desc:"Run app on device"},{cmd:"flutter test",desc:"Run all tests"},{cmd:"flutter analyze",desc:"Analyze code"},{cmd:"flutter pub get",desc:"Get dependencies"},{cmd:"flutter build apk",desc:"Build Android APK"},{cmd:"flutter build ios",desc:"Build iOS app"}].map((n,i)=>s.jsxs("div",{className:"flex gap-3 p-3 rounded-lg bg-background border",children:[s.jsx("code",{className:"text-xs font-mono text-primary whitespace-nowrap",children:n.cmd}),s.jsx("span",{className:"text-xs text-muted-foreground",children:n.desc})]},i))})]})]}),s.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[s.jsxs("div",{className:"relative z-10 space-y-6",children:[s.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),s.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these Flutter standards ensures your mobile applications are performant, maintainable, and deliver a premium user experience."}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(ke,{variant:"secondary",asChild:!0,children:s.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",s.jsx(ut,{className:"ml-2 h-4 w-4"})]})}),s.jsx(ke,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:s.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),s.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),s.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:s.jsxs("div",{className:"space-y-1 pb-12",children:[s.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),hp.map(n=>s.jsxs("a",{href:`#${n.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===n.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[s.jsx(n.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===n.id?"text-primary":"text-muted-foreground/40"}`}),n.title]},n.id))]})})]})]})};var Ja="rovingFocusGroup.onEntryFocus",_P={bubbles:!1,cancelable:!0},fn="RovingFocusGroup",[$o,mg,MP]=Up(fn),[IP,hg]=bs(fn,[MP]),[OP,LP]=IP(fn),fg=m.forwardRef((e,t)=>s.jsx($o.Provider,{scope:e.__scopeRovingFocusGroup,children:s.jsx($o.Slot,{scope:e.__scopeRovingFocusGroup,children:s.jsx(FP,{...e,ref:t})})}));fg.displayName=fn;var FP=m.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:r,orientation:n,loop:i=!1,dir:a,currentTabStopId:o,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:c,onEntryFocus:d,preventScrollOnEntryFocus:u=!1,...p}=e,h=m.useRef(null),f=Le(t,h),g=nc(a),[x,y]=nn({prop:o,defaultProp:l??null,onChange:c,caller:fn}),[v,b]=m.useState(!1),N=Qe(d),S=mg(r),E=m.useRef(!1),[A,j]=m.useState(0);return m.useEffect(()=>{const C=h.current;if(C)return C.addEventListener(Ja,N),()=>C.removeEventListener(Ja,N)},[N]),s.jsx(OP,{scope:r,orientation:n,dir:g,loop:i,currentTabStopId:x,onItemFocus:m.useCallback(C=>y(C),[y]),onItemShiftTab:m.useCallback(()=>b(!0),[]),onFocusableItemAdd:m.useCallback(()=>j(C=>C+1),[]),onFocusableItemRemove:m.useCallback(()=>j(C=>C-1),[]),children:s.jsx(Ce.div,{tabIndex:v||A===0?-1:0,"data-orientation":n,...p,ref:f,style:{outline:"none",...e.style},onMouseDown:me(e.onMouseDown,()=>{E.current=!0}),onFocus:me(e.onFocus,C=>{const _=!E.current;if(C.target===C.currentTarget&&_&&!v){const I=new CustomEvent(Ja,_P);if(C.currentTarget.dispatchEvent(I),!I.defaultPrevented){const $=S().filter(Z=>Z.focusable),Y=$.find(Z=>Z.active),ie=$.find(Z=>Z.id===x),re=[Y,ie,...$].filter(Boolean).map(Z=>Z.ref.current);yg(re,u)}}E.current=!1}),onBlur:me(e.onBlur,()=>b(!1))})})}),xg="RovingFocusGroupItem",gg=m.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:r,focusable:n=!0,active:i=!1,tabStopId:a,children:o,...l}=e,c=rr(),d=a||c,u=LP(xg,r),p=u.currentTabStopId===d,h=mg(r),{onFocusableItemAdd:f,onFocusableItemRemove:g,currentTabStopId:x}=u;return m.useEffect(()=>{if(n)return f(),()=>g()},[n,f,g]),s.jsx($o.ItemSlot,{scope:r,id:d,focusable:n,active:i,children:s.jsx(Ce.span,{tabIndex:p?0:-1,"data-orientation":u.orientation,...l,ref:t,onMouseDown:me(e.onMouseDown,y=>{n?u.onItemFocus(d):y.preventDefault()}),onFocus:me(e.onFocus,()=>u.onItemFocus(d)),onKeyDown:me(e.onKeyDown,y=>{if(y.key==="Tab"&&y.shiftKey){u.onItemShiftTab();return}if(y.target!==y.currentTarget)return;const v=UP(y,u.orientation,u.dir);if(v!==void 0){if(y.metaKey||y.ctrlKey||y.altKey||y.shiftKey)return;y.preventDefault();let N=h().filter(S=>S.focusable).map(S=>S.ref.current);if(v==="last")N.reverse();else if(v==="prev"||v==="next"){v==="prev"&&N.reverse();const S=N.indexOf(y.currentTarget);N=u.loop?$P(N,S+1):N.slice(S+1)}setTimeout(()=>yg(N))}}),children:typeof o=="function"?o({isCurrentTabStop:p,hasTabStop:x!=null}):o})})});gg.displayName=xg;var VP={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function BP(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function UP(e,t,r){const n=BP(e.key,r);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return VP[n]}function yg(e,t=!1){const r=document.activeElement;for(const n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}function $P(e,t){return e.map((r,n)=>e[(t+n)%e.length])}var HP=fg,zP=gg,Ji="Tabs",[WP]=bs(Ji,[hg]),vg=hg(),[GP,dc]=WP(Ji),bg=m.forwardRef((e,t)=>{const{__scopeTabs:r,value:n,onValueChange:i,defaultValue:a,orientation:o="horizontal",dir:l,activationMode:c="automatic",...d}=e,u=nc(l),[p,h]=nn({prop:n,onChange:i,defaultProp:a??"",caller:Ji});return s.jsx(GP,{scope:r,baseId:rr(),value:p,onValueChange:h,orientation:o,dir:u,activationMode:c,children:s.jsx(Ce.div,{dir:u,"data-orientation":o,...d,ref:t})})});bg.displayName=Ji;var jg="TabsList",Ng=m.forwardRef((e,t)=>{const{__scopeTabs:r,loop:n=!0,...i}=e,a=dc(jg,r),o=vg(r);return s.jsx(HP,{asChild:!0,...o,orientation:a.orientation,dir:a.dir,loop:n,children:s.jsx(Ce.div,{role:"tablist","aria-orientation":a.orientation,...i,ref:t})})});Ng.displayName=jg;var wg="TabsTrigger",Sg=m.forwardRef((e,t)=>{const{__scopeTabs:r,value:n,disabled:i=!1,...a}=e,o=dc(wg,r),l=vg(r),c=Eg(o.baseId,n),d=Rg(o.baseId,n),u=n===o.value;return s.jsx(zP,{asChild:!0,...l,focusable:!i,active:u,children:s.jsx(Ce.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":d,"data-state":u?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:c,...a,ref:t,onMouseDown:me(e.onMouseDown,p=>{!i&&p.button===0&&p.ctrlKey===!1?o.onValueChange(n):p.preventDefault()}),onKeyDown:me(e.onKeyDown,p=>{[" ","Enter"].includes(p.key)&&o.onValueChange(n)}),onFocus:me(e.onFocus,()=>{const p=o.activationMode!=="manual";!u&&!i&&p&&o.onValueChange(n)})})})});Sg.displayName=wg;var Cg="TabsContent",Tg=m.forwardRef((e,t)=>{const{__scopeTabs:r,value:n,forceMount:i,children:a,...o}=e,l=dc(Cg,r),c=Eg(l.baseId,n),d=Rg(l.baseId,n),u=n===l.value,p=m.useRef(u);return m.useEffect(()=>{const h=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(h)},[]),s.jsx(bt,{present:i||u,children:({present:h})=>s.jsx(Ce.div,{"data-state":u?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":c,hidden:!h,id:d,tabIndex:0,...o,ref:t,style:{...e.style,animationDuration:p.current?"0s":void 0},children:h&&a})})});Tg.displayName=Cg;function Eg(e,t){return`${e}-trigger-${t}`}function Rg(e,t){return`${e}-content-${t}`}var kg=bg,Qi=Ng,Zi=Sg,ea=Tg;const qP=kg,Pg=m.forwardRef(({className:e,...t},r)=>s.jsx(Qi,{ref:r,className:ae("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",e),...t}));Pg.displayName=Qi.displayName;const Ho=m.forwardRef(({className:e,...t},r)=>s.jsx(Zi,{ref:r,className:ae("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",e),...t}));Ho.displayName=Zi.displayName;const zo=m.forwardRef(({className:e,...t},r)=>s.jsx(ea,{ref:r,className:ae("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));zo.displayName=ea.displayName;const KP=()=>{const[e,t]=m.useState("architecture"),r=[{label:"Home",href:"/"},{label:"General",href:"/coding-standard"},{label:"Clean Architecture Standards"}],n=[{id:"architecture",title:"1. Architecture Decisions",icon:We},{id:"patterns",title:"2. Design Patterns",icon:Ge},{id:"data-access",title:"3. Data Access",icon:mt},{id:"api-style",title:"4. API Approaches",icon:ym},{id:"checklist",title:"5. Standards Checklist",icon:ce},{id:"structure",title:"6. Project Structure",icon:cl},{id:"code-patterns",title:"7. Essential Patterns",icon:Ls},{id:"testing",title:"8. Testing Patterns",icon:ot},{id:"matrix",title:"9. Decision Matrix",icon:ud}];return m.useEffect(()=>{const i=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&t(o.target.id)})},{threshold:.2,rootMargin:"-10% 0px -70% 0px"});return n.forEach(a=>{const o=document.getElementById(a.id);o&&i.observe(o)}),()=>i.disconnect()},[]),s.jsxs(ht,{children:[s.jsx(Nt,{title:"App Architecture Guide",subtitle:"Comprehensive standards and quick reference for .NET Clean Architecture and Vertical Slice patterns.",breadcrumbs:r}),s.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[s.jsxs("main",{className:"flex-1 space-y-20 min-w-0",children:[s.jsxs("section",{id:"introduction",className:"space-y-6",children:[s.jsxs("div",{className:"p-4 rounded-lg bg-primary/5 border border-primary/10 flex gap-4",children:[s.jsx(jm,{className:"h-6 w-6 text-primary shrink-0"}),s.jsxs("p",{className:"text-sm text-primary/80 leading-relaxed italic",children:["For detailed examples and explanations, see the full ",s.jsx("a",{href:"/coding-standard",className:"underline font-bold",children:"Coding Standards Guide"}),". This is a quick reference for daily development and code reviews."]})]}),s.jsxs("p",{className:"text-lg text-muted-foreground leading-relaxed",children:["Our architecture standards ensure consistency across services. We support two primary patterns based on complexity: ",s.jsx("strong",{children:"Clean Architecture"})," for rich domains and ",s.jsx("strong",{children:"Vertical Slice"})," for feature-focused or CRUD-heavy applications."]}),s.jsxs("div",{className:"p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6",children:[s.jsxs("div",{className:"flex items-center gap-3 text-blue-500",children:[s.jsx("div",{className:"p-2 rounded-lg bg-blue-500/10",children:s.jsx(vt,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-2xl font-bold",children:"The Developer Handbook"})]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"If you're new to AII, here's the absolute essentials you need to know about our architectural philosophy:"}),s.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[{title:"Layered Isolation",desc:"The Domain Layer is the center and must NEVER depend on Infrastructure or WebApi."},{title:"Dependency Flow",desc:"Dependencies always point inwards. Use Interfaces to decouple logic."},{title:"Feature Focus",desc:"Vertical Slice allows for faster delivery by grouping logic by feature instead of layer."}].map((i,a)=>s.jsxs("div",{className:"space-y-2",children:[s.jsxs("h4",{className:"font-bold text-sm flex items-center gap-2",children:[s.jsx(ut,{className:"h-4 w-4 text-primary"})," ",i.title]}),s.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:i.desc})]},a))})]})]}),s.jsxs("section",{id:"architecture",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"p-2 rounded-lg bg-blue-500/10 text-blue-500",children:s.jsx(We,{className:"h-6 w-6"})}),s.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Architecture Decisions"})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs(fe,{className:"relative overflow-hidden group",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"}),s.jsxs(je,{children:[s.jsxs(Ne,{className:"flex items-center justify-between",children:["Clean Architecture",s.jsx(k,{variant:"secondary",children:"Complex Domains"})]}),s.jsx(at,{children:"Domain → Application → Infrastructure → WebApi"})]}),s.jsxs(ye,{className:"space-y-4 text-sm",children:[s.jsx("p",{className:"text-muted-foreground",children:"Focuses on business logic isolation and strict layer boundaries."}),s.jsxs("ul",{className:"space-y-2 list-none p-0",children:[s.jsxs("li",{className:"flex gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 shrink-0"}),s.jsx("span",{children:"Rich business logic / Long-term projects"})]}),s.jsxs("li",{className:"flex gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 shrink-0"}),s.jsx("span",{children:"Multiple applications sharing the same domain"})]})]})]})]}),s.jsxs(fe,{className:"relative overflow-hidden group",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"}),s.jsxs(je,{children:[s.jsxs(Ne,{className:"flex items-center justify-between",children:["Vertical Slice",s.jsx(k,{variant:"secondary",children:"CRUD Heavy"})]}),s.jsx(at,{children:"Features/Orders/Create/, Features/Orders/GetById/"})]}),s.jsxs(ye,{className:"space-y-4 text-sm",children:[s.jsx("p",{className:"text-muted-foreground",children:"Focuses on high cohesion by co-locating all code related to a specific feature."}),s.jsxs("ul",{className:"space-y-2 list-none p-0",children:[s.jsxs("li",{className:"flex gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 shrink-0"}),s.jsx("span",{children:"Independent features / Rapid development"})]}),s.jsxs("li",{className:"flex gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 shrink-0"}),s.jsx("span",{children:"Smaller teams or microservices context"})]})]})]})]})]})]}),s.jsxs("section",{id:"patterns",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"p-2 rounded-lg bg-yellow-500/10 text-yellow-500",children:s.jsx(Ge,{className:"h-6 w-6"})}),s.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Design Patterns"})]}),s.jsxs(qP,{defaultValue:"cqrs",className:"w-full",children:[s.jsxs(Pg,{className:"grid w-full grid-cols-2 mb-6",children:[s.jsx(Ho,{value:"cqrs",children:"CQRS + MediatR"}),s.jsx(Ho,{value:"services",children:"Direct Services"})]}),s.jsx(zo,{value:"cqrs",className:"space-y-4",children:s.jsxs("div",{className:"bg-muted/30 p-6 rounded-lg border",children:[s.jsx("h4",{className:"font-semibold mb-2",children:"Pattern Overview"}),s.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:"Decouples commands (writes) and queries (reads). Uses MediatR for pipeline behaviors like logging and validation."}),s.jsx(O,{code:`public record CreateOrderCommand(string Product) : IRequest<OrderResult>;
public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, OrderResult>`,language:"csharp",title:"CQRS Implementation"})]})}),s.jsx(zo,{value:"services",className:"space-y-4",children:s.jsxs("div",{className:"bg-muted/30 p-6 rounded-lg border",children:[s.jsx("h4",{className:"font-semibold mb-2",children:"Pattern Overview"}),s.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:"Traditional application services. Simpler, less abstraction overhead."}),s.jsx(O,{code:`public interface IOrderService { Task<OrderResult> CreateAsync(CreateOrderRequest request); }
public class OrderService : IOrderService`,language:"csharp",title:"Service Implementation"})]})})]})]}),s.jsxs("section",{id:"data-access",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"p-2 rounded-lg bg-emerald-500/10 text-emerald-500",children:s.jsx(mt,{className:"h-6 w-6"})}),s.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Data Access"})]}),s.jsx("div",{className:"grid gap-6",children:[{title:"Option 1: Repository Pattern",desc:"Abstraction over EF Core, essential for CA/Testing.",use:"Testing abstraction needed, multiple data sources."},{title:"Option 2: Generic Repository + UoW",desc:"Consistent patterns for bulk entities.",use:"Many similar entities, transaction coordination."},{title:"Option 3: Direct DbContext",desc:"Highest performance, lowest complexity.",use:"Simple operations, Vertical Slice, performance critical."}].map((i,a)=>s.jsxs("div",{className:"flex gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors",children:[s.jsx("div",{className:"h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 text-xs font-bold",children:a+1}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold underline decoration-primary/30 underline-offset-4",children:i.title}),s.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:i.desc}),s.jsxs("p",{className:"text-xs font-medium text-primary mt-2 flex items-center gap-1",children:[s.jsx(ut,{className:"h-3 w-3"})," ",i.use]})]})]},a))})]}),s.jsxs("section",{id:"checklist",className:"scroll-mt-28 space-y-8 p-8 rounded-2xl bg-muted/30 border border-primary/5",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"p-2 rounded-lg bg-indigo-500/10 text-indigo-500",children:s.jsx(ce,{className:"h-6 w-6"})}),s.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Quick Standards Checklist"})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-x-12 gap-y-8 mt-4",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"font-semibold text-primary flex items-center gap-2",children:[s.jsx(ud,{className:"h-4 w-4"})," Naming Conventions"]}),s.jsxs("ul",{className:"space-y-3 text-sm list-none p-0",children:[s.jsxs("li",{className:"flex justify-between border-b pb-1",children:[s.jsx("span",{children:"Classes"})," ",s.jsx("code",{className:"text-blue-500",children:"PascalCase"})]}),s.jsxs("li",{className:"flex justify-between border-b pb-1",children:[s.jsx("span",{children:"Interfaces"})," ",s.jsx("code",{className:"text-blue-500",children:"IPascalCase"})]}),s.jsxs("li",{className:"flex justify-between border-b pb-1",children:[s.jsx("span",{children:"Methods"})," ",s.jsx("code",{className:"text-blue-500",children:"PascalCaseAsync"})]}),s.jsxs("li",{className:"flex justify-between border-b pb-1",children:[s.jsx("span",{children:"Fields (private)"})," ",s.jsx("code",{className:"text-blue-500",children:"_camelCase"})]})]})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"font-semibold text-primary flex items-center gap-2",children:[s.jsx(al,{className:"h-4 w-4"})," Async/Await Rules"]}),s.jsxs("div",{className:"p-3 rounded border bg-emerald-500/5 text-xs",children:[s.jsx("p",{className:"font-bold text-emerald-600 mb-2 whitespace-nowrap",children:"✅ DO: Async all the way through"}),s.jsx("code",{className:"text-muted-foreground",children:"return await _repository.GetByIdAsync(id, ct);"})]}),s.jsxs("div",{className:"p-3 rounded border bg-destructive/5 text-xs",children:[s.jsx("p",{className:"font-bold text-destructive mb-2 whitespace-nowrap",children:"❌ DON'T: Block async calls"}),s.jsx("code",{className:"text-muted-foreground",children:"var res = GetAsync().Result; // CRITICAL!"})]})]})]})]}),s.jsxs("section",{id:"structure",className:"scroll-mt-28 space-y-8",children:[s.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Recommended Project Structure"}),s.jsx("div",{className:"p-6 rounded-lg bg-slate-900 overflow-x-auto border border-slate-700",children:s.jsx("pre",{className:"text-xs text-blue-300 font-mono leading-relaxed group",children:`src/
├── Domain/           # Entities, ValueObjects, Domain Interfaces
├── Application/      # UseCases, DTOs, Validators
├── Infrastructure/   # DbContext, Repositories, Services
└── WebApi/           # Controllers, Middleware, Auth`})})]}),s.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"p-2 rounded-lg bg-pink-500/10 text-pink-500",children:s.jsx(ot,{className:"h-6 w-6"})}),s.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Testing Patterns"})]}),s.jsx(fe,{className:"border-none bg-muted/40",children:s.jsx(ye,{className:"p-6 space-y-4",children:s.jsxs("div",{className:"p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm",children:[s.jsxs("h5",{className:"font-bold text-emerald-600 mb-1 flex items-center gap-2",children:[s.jsx(ce,{className:"h-4 w-4"}),"Unit Test Structure (AAA)"]}),s.jsx("p",{className:"text-muted-foreground italic mb-3",children:"Arrange, Act, Assert. Everything must be isolatable."}),s.jsx(O,{title:"Test Example",code:`[Test]
public async Task Handle_ValidRequest_ReturnsSuccess()
{
    // Arrange
    var cmd = new CreateOrderCommand("Prod");
    // Act
    var result = await _handler.Handle(cmd, CancellationToken.None);
    // Assert
    Assert.That(result.Success, Is.True);
}`})]})})})]}),s.jsxs("section",{id:"matrix",className:"scroll-mt-28 space-y-8",children:[s.jsx("h2",{className:"text-3xl font-bold tracking-tight",children:"Decision Matrix"}),s.jsx("div",{className:"overflow-x-auto rounded-xl border border-border",children:s.jsxs("table",{className:"w-full text-sm text-left",children:[s.jsx("thead",{className:"bg-muted text-muted-foreground uppercase text-[10px] font-bold tracking-wider",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-6 py-3",children:"Scenario"}),s.jsx("th",{className:"px-6 py-3",children:"Architecture"}),s.jsx("th",{className:"px-6 py-3",children:"Pattern"}),s.jsx("th",{className:"px-6 py-3",children:"Data Access"})]})}),s.jsxs("tbody",{className:"divide-y",children:[s.jsxs("tr",{className:"hover:bg-accent/5",children:[s.jsx("td",{className:"px-6 py-4 font-medium",children:"Complex Logic"}),s.jsx("td",{className:"px-6 py-4",children:"Clean Arch"}),s.jsx("td",{className:"px-6 py-4",children:"CQRS"}),s.jsx("td",{className:"px-6 py-4",children:"Repository"})]}),s.jsxs("tr",{className:"hover:bg-accent/5",children:[s.jsx("td",{className:"px-6 py-4 font-medium",children:"CRUD Application"}),s.jsx("td",{className:"px-6 py-4",children:"Vertical Slice"}),s.jsx("td",{className:"px-6 py-4",children:"Services"}),s.jsx("td",{className:"px-6 py-4",children:"Direct DbContext"})]}),s.jsxs("tr",{className:"hover:bg-accent/5",children:[s.jsx("td",{className:"px-6 py-4 font-medium",children:"Microservice"}),s.jsx("td",{className:"px-6 py-4",children:"Vertical Slice"}),s.jsx("td",{className:"px-6 py-4",children:"CQRS"}),s.jsx("td",{className:"px-6 py-4",children:"Direct DbContext"})]}),s.jsxs("tr",{className:"hover:bg-accent/5",children:[s.jsx("td",{className:"px-6 py-4 font-medium",children:"Enterprise App"}),s.jsx("td",{className:"px-6 py-4",children:"Clean Arch"}),s.jsx("td",{className:"px-6 py-4",children:"CQRS"}),s.jsx("td",{className:"px-6 py-4",children:"Repository + UoW"})]})]})]})})]}),s.jsxs("section",{id:"mistakes",className:"scroll-mt-28 space-y-8 bg-destructive/5 p-8 rounded-2xl border border-destructive/10",children:[s.jsxs("h2",{className:"text-2xl font-bold flex items-center gap-2 text-destructive",children:[s.jsx(_s,{className:"h-6 w-6"})," Common Mistakes to Avoid"]}),s.jsx("div",{className:"grid gap-4",children:[{title:"Mixing Patterns",rule:"Don't use OrderService and ISender for the same logic."},{title:"Blocking Async",rule:"Avoid .Result or .Wait() at all costs."},{title:"Entities in API",rule:"Never return Domain Entities directly; always use DTOs."},{title:"Logic in Controllers",rule:"Controllers should only orchestrate, never handle business rules."}].map((i,a)=>s.jsxs("div",{className:"flex gap-4 items-start border-l-4 border-destructive pl-4 py-2",children:[s.jsx("div",{className:"mt-1",children:s.jsx(hm,{className:"h-5 w-5 text-destructive"})}),s.jsxs("div",{children:[s.jsx("h5",{className:"font-bold text-destructive/90",children:i.title}),s.jsx("p",{className:"text-sm text-muted-foreground",children:i.rule})]})]},a))})]}),s.jsx("section",{className:"pt-12",children:s.jsx(fe,{className:"bg-primary text-primary-foreground border-none overflow-hidden group",children:s.jsx(ye,{className:"p-0",children:s.jsxs("a",{href:"/coding-standard",className:"flex items-center justify-between p-8 group-hover:bg-primary/90 transition-colors",children:[s.jsxs("div",{className:"space-y-1",children:[s.jsx("p",{className:"text-primary-foreground/70 text-sm font-medium uppercase tracking-wider",children:"Next Chapter"}),s.jsx("h3",{className:"text-2xl font-bold",children:"Comprehensive Coding Standards"})]}),s.jsx("div",{className:"bg-primary-foreground/10 p-4 rounded-full group-hover:translate-x-2 transition-transform",children:s.jsx(ut,{className:"h-6 w-6"})})]})})})})]}),s.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:s.jsxs("div",{className:"space-y-1 pb-12",children:[s.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On This Page"}),n.map(i=>s.jsxs("a",{href:`#${i.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===i.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[s.jsx(i.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===i.id?"text-primary":"text-muted-foreground/40"}`}),i.title]},i.id))]})})]})]})},fp=[{id:"core-principles",title:"1. Core Principles",icon:al},{id:"solid",title:"2. SOLID Principles",icon:qj},{id:"clean-code",title:"3. Clean Code Practices",icon:Ge},{id:"security",title:"4. Security Standards",icon:nt},{id:"architecture",title:"5. Architectural Patterns",icon:We},{id:"documentation",title:"6. Documentation & Style",icon:ol},{id:"testing-strategy",title:"7. Testing Strategy",icon:ot}],YP=()=>{const[e,t]=m.useState("core-principles"),r=[{label:"Home",href:"/"},{label:"Global Standards"},{label:"Coding Standards"}];return m.useEffect(()=>{const n=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&t(a.target.id)})},{threshold:.2,rootMargin:"-10% 0px -70% 0px"});return fp.forEach(i=>{const a=document.getElementById(i.id);a&&n.observe(a)}),()=>n.disconnect()},[]),s.jsxs(ht,{children:[s.jsx(Nt,{title:"Global Coding Standards",subtitle:"Universal principles and best practices that define excellence across every technology stack at AII.",breadcrumbs:r}),s.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[s.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[s.jsxs("section",{id:"core-principles",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Core Development Principles"}),s.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"Our engineering culture is built on these foundational pillars. They guide every decision from architectural design to individual lines of code."})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs(fe,{className:"glass-card",children:[s.jsxs(je,{children:[s.jsxs(Ne,{className:"flex items-center gap-2 text-xl",children:[s.jsx(Ge,{className:"h-5 w-5 text-yellow-500"})," KISS Principle"]}),s.jsx(at,{children:"Keep It Simple, Stupid"})]}),s.jsx(ye,{children:s.jsx("p",{className:"text-sm text-muted-foreground",children:"Most systems work best if they are kept simple rather than made complicated; therefore, simplicity should be a key goal in design, and unnecessary complexity should be avoided."})})]}),s.jsxs(fe,{className:"glass-card",children:[s.jsxs(je,{children:[s.jsxs(Ne,{className:"flex items-center gap-2 text-xl",children:[s.jsx(He,{className:"h-5 w-5 text-emerald-500"})," DRY Principle"]}),s.jsx(at,{children:"Don't Repeat Yourself"})]}),s.jsx(ye,{children:s.jsx("p",{className:"text-sm text-muted-foreground",children:"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system. Avoid duplication of logic across the codebase."})})]}),s.jsxs(fe,{className:"glass-card",children:[s.jsxs(je,{children:[s.jsxs(Ne,{className:"flex items-center gap-2 text-xl",children:[s.jsx(nt,{className:"h-5 w-5 text-blue-500"})," Security by Design"]}),s.jsx(at,{children:"Built-in, not bolted-on"})]}),s.jsx(ye,{children:s.jsx("p",{className:"text-sm text-muted-foreground",children:"Software is designed from the ground up to be secure. Security is a first-class citizen in our development lifecycle, not an afterthought."})})]}),s.jsxs(fe,{className:"glass-card",children:[s.jsxs(je,{children:[s.jsxs(Ne,{className:"flex items-center gap-2 text-xl",children:[s.jsx(sr,{className:"h-5 w-5 text-purple-500"})," Observability"]}),s.jsx(at,{children:"Know your system's health"})]}),s.jsx(ye,{children:s.jsx("p",{className:"text-sm text-muted-foreground",children:"Systems must be built to be observable. Proper logging, monitoring, and tracing are essential for maintaining enterprise-grade services."})})]})]}),s.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-purple-500/5 border border-purple-500/10 space-y-6",children:[s.jsxs("div",{className:"flex items-center gap-3 text-purple-500",children:[s.jsx("div",{className:"p-2 rounded-lg bg-purple-500/10",children:s.jsx(nt,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-2xl font-bold",children:"Code Review Checklist"})]}),s.jsx("p",{className:"text-muted-foreground",children:"Whether you are a reviewer or a contributor, use this checklist to ensure every PR meets AII standards:"}),s.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:[{title:"KISS Check",desc:"Is the solution the simplest possible way to solve the problem?"},{title:"DRY Check",desc:"Is there any duplicated logic or hardcoded configuration?"},{title:"Security",desc:"Are inputs validated? Are secrets handled correctly?"},{title:"Observability",desc:"Are meaningful logs and telemetry included for debugging?"},{title:"Standards",desc:"Does the code follow the specific language/framework guidelines?"},{title:"Tests",desc:"Are there unit/integration tests covering the new logic?"}].map((n,i)=>s.jsxs("div",{className:"flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-background/50 group hover:border-purple-500/30 transition-colors",children:[s.jsx("div",{className:"flex-shrink-0 w-6 h-6 rounded-md bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-xs",children:s.jsx(pr,{className:"h-4 w-4"})}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-foreground text-sm",children:n.title}),s.jsx("p",{className:"text-xs text-muted-foreground",children:n.desc})]})]},i))})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"solid",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"SOLID Principles"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"The FIVE basic principles of object-oriented programming and design for building maintainable systems."})]}),s.jsx("div",{className:"space-y-6",children:[{name:"Single Responsibility",desc:"A class should have one, and only one, reason to change."},{name:"Open/Closed",desc:"Software entities should be open for extension, but closed for modification."},{name:"Liskov Substitution",desc:"Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."},{name:"Interface Segregation",desc:"Many client-specific interfaces are better than one general-purpose interface."},{name:"Dependency Inversion",desc:"One should depend upon abstractions, not concretions."}].map((n,i)=>s.jsxs("div",{className:"flex gap-6 p-6 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors",children:[s.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-xl",children:n.name.charAt(0)}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("h4",{className:"font-bold text-lg",children:n.name}),s.jsx("p",{className:"text-muted-foreground",children:n.desc})]})]},i))})]}),s.jsx(F,{}),s.jsxs("section",{id:"clean-code",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Clean Code Practices"})]}),s.jsxs("div",{className:"space-y-10",children:[s.jsxs("div",{className:"space-y-6",children:[s.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Naming & Clarity"}),s.jsx("p",{className:"text-muted-foreground",children:"Variables, functions, and classes should have names that reveal intent. If you need a comment to explain what it does, the name is likely poor."}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Intent-Revealing"}),s.jsx("code",{className:"text-sm font-mono block p-2 bg-background rounded",children:"int daysSinceCreation;"})]}),s.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Opaque"}),s.jsx("code",{className:"text-sm font-mono block p-2 bg-background rounded",children:"int d; // elapsed time in days"})]})]})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Function Standards"}),s.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-muted-foreground",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Small:"})," Functions should rarely exceed 20 lines."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Do One Thing:"})," A function should have a single responsibility."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Monadic/Dyadic:"})," Prefer few arguments (0-2). Use objects for more."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"No Side Effects:"})," Functions shouldn't secretly modify state."]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"security",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Security Standards"})]}),s.jsxs("div",{className:"grid gap-8",children:[s.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 space-y-6",children:[s.jsxs("h4",{className:"text-xl font-bold text-white flex items-center gap-3",children:[s.jsx(Fs,{className:"h-6 w-6 text-red-500"})," OWASP Top 10 Awareness"]}),s.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:["Injection Protection","Broken Access Control","Cryptographic Failures","Insecure Design","Security Misconfiguration","Vulnerable Components"].map((n,i)=>s.jsxs("div",{className:"flex items-center gap-2 text-slate-300 text-sm",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500"})," ",n]},i))})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[s.jsx(uj,{className:"h-5 w-5"})," Sensitive Data Handling"]}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:[s.jsx("strong",{children:"NEVER"})," log PII (Personally Identifiable Information) or credentials. Use masked logging and environment-based configuration for secrets."]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"architecture",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Architectural Patterns"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Common blueprints used across AII documentation for different system complexities."})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[s.jsxs(fe,{className:"glass shadow-lg border-primary/10",children:[s.jsxs(je,{children:[s.jsx(Ne,{children:"Clean Architecture"}),s.jsx(at,{children:"Domain-Centric"})]}),s.jsxs(ye,{className:"space-y-4",children:[s.jsx("p",{className:"text-sm",children:"Ideal for complex business domains and long-term maintainability. Separation of concerns between UI, Business Logic, and Infrastructure."}),s.jsx(ke,{asChild:!0,variant:"secondary",className:"w-full",children:s.jsxs(ze,{to:"/clean-architecture",children:["Explore Standards ",s.jsx(ut,{className:"ml-2 h-4 w-4"})]})})]})]}),s.jsxs(fe,{className:"glass shadow-lg border-primary/10",children:[s.jsxs(je,{children:[s.jsx(Ne,{children:"Microservices"}),s.jsx(at,{children:"Scale-Centric"})]}),s.jsxs(ye,{className:"space-y-4",children:[s.jsx("p",{className:"text-sm",children:"Small, independent, and loosely coupled services communicate over a network, usually via REST or Message Bus."}),s.jsx(k,{className:"bg-primary/20 text-primary hover:bg-primary/30",children:"Standard for AII Services"})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"documentation",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Documentation & Style"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Clear documentation and consistent code style improve maintainability and team collaboration."})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[s.jsxs(fe,{className:"glass shadow-lg",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"flex items-center gap-2",children:[s.jsx(ol,{className:"h-5 w-5 text-primary"}),"Code Comments"]})}),s.jsxs(ye,{className:"space-y-4",children:[s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Write comments that explain ",s.jsx("strong",{children:"why"}),", not ",s.jsx("strong",{children:"what"}),'. The code itself should be self-documenting for the "what".']}),s.jsxs("div",{className:"space-y-2 text-sm",children:[s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),s.jsx("span",{children:"Explain complex business logic"})]}),s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),s.jsx("span",{children:"Document non-obvious decisions"})]}),s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),s.jsx("span",{children:"Add TODO/FIXME with context"})]})]})]})]}),s.jsxs(fe,{className:"glass shadow-lg",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"flex items-center gap-2",children:[s.jsx(il,{className:"h-5 w-5 text-primary"}),"README Standards"]})}),s.jsxs(ye,{className:"space-y-4",children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:"Every project must have a comprehensive README with:"}),s.jsxs("div",{className:"space-y-2 text-sm",children:[s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),s.jsx("span",{children:"Project overview and purpose"})]}),s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),s.jsx("span",{children:"Setup and installation steps"})]}),s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),s.jsx("span",{children:"Environment variables"})]}),s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),s.jsx("span",{children:"API documentation links"})]})]})]})]})]}),s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[s.jsx(Ls,{className:"h-5 w-5 text-primary"}),"Code Formatting"]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Use automated formatters and linters to maintain consistent code style across the team. Configure your IDE to format on save."}),s.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 text-sm",children:[s.jsxs("div",{className:"p-3 rounded-lg bg-background border",children:[s.jsx("strong",{children:".NET:"})," EditorConfig + StyleCop"]}),s.jsxs("div",{className:"p-3 rounded-lg bg-background border",children:[s.jsx("strong",{children:"JavaScript/TypeScript:"})," Prettier + ESLint"]}),s.jsxs("div",{className:"p-3 rounded-lg bg-background border",children:[s.jsx("strong",{children:"Python:"})," Black + Flake8"]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"testing-strategy",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Strategy"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Comprehensive testing ensures code quality, prevents regressions, and builds confidence in deployments."})]}),s.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[s.jsxs(fe,{className:"glass shadow-lg border-emerald-500/20",children:[s.jsxs(je,{children:[s.jsxs(Ne,{className:"flex items-center gap-2 text-emerald-600",children:[s.jsx(ot,{className:"h-5 w-5"}),"Unit Tests"]}),s.jsx(at,{children:"70% Coverage Target"})]}),s.jsxs(ye,{className:"space-y-3 text-sm",children:[s.jsx("p",{className:"text-muted-foreground",children:"Test individual functions and methods in isolation."}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),s.jsx("span",{children:"Fast execution"})]}),s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),s.jsx("span",{children:"No external dependencies"})]}),s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),s.jsx("span",{children:"Mock external services"})]})]})]})]}),s.jsxs(fe,{className:"glass shadow-lg border-blue-500/20",children:[s.jsxs(je,{children:[s.jsxs(Ne,{className:"flex items-center gap-2 text-blue-600",children:[s.jsx(We,{className:"h-5 w-5"}),"Integration Tests"]}),s.jsx(at,{children:"Critical Paths"})]}),s.jsxs(ye,{className:"space-y-3 text-sm",children:[s.jsx("p",{className:"text-muted-foreground",children:"Test interactions between components and external systems."}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-blue-500 mt-0.5"}),s.jsx("span",{children:"Database operations"})]}),s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-blue-500 mt-0.5"}),s.jsx("span",{children:"API endpoints"})]}),s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-blue-500 mt-0.5"}),s.jsx("span",{children:"Message queues"})]})]})]})]}),s.jsxs(fe,{className:"glass shadow-lg border-purple-500/20",children:[s.jsxs(je,{children:[s.jsxs(Ne,{className:"flex items-center gap-2 text-purple-600",children:[s.jsx(ym,{className:"h-5 w-5"}),"E2E Tests"]}),s.jsx(at,{children:"User Journeys"})]}),s.jsxs(ye,{className:"space-y-3 text-sm",children:[s.jsx("p",{className:"text-muted-foreground",children:"Test complete user workflows from start to finish."}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-purple-500 mt-0.5"}),s.jsx("span",{children:"Critical user flows"})]}),s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-purple-500 mt-0.5"}),s.jsx("span",{children:"Cross-service scenarios"})]}),s.jsxs("div",{className:"flex items-start gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-purple-500 mt-0.5"}),s.jsx("span",{children:"UI automation"})]})]})]})]})]}),s.jsxs("div",{className:"p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 space-y-6",children:[s.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[s.jsx(He,{className:"h-6 w-6 text-primary"}),"Testing Best Practices"]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"space-y-3",children:[s.jsx("h5",{className:"font-bold text-primary",children:"Test Naming"}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Use descriptive names: ",s.jsx("code",{className:"text-primary",children:"MethodName_Scenario_ExpectedBehavior"})]}),s.jsx(k,{variant:"outline",className:"font-mono text-xs",children:"CreateUser_InvalidEmail_ThrowsValidationException"})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("h5",{className:"font-bold text-primary",children:"AAA Pattern"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Structure tests with Arrange, Act, Assert sections for clarity."}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(k,{variant:"outline",children:"Arrange"}),s.jsx(k,{variant:"outline",children:"Act"}),s.jsx(k,{variant:"outline",children:"Assert"})]})]})]}),s.jsx("div",{className:"pt-4 border-t border-primary/10",children:s.jsxs("p",{className:"text-sm text-muted-foreground italic",children:[s.jsx("strong",{children:"Remember:"})," Tests are documentation. They should clearly communicate the expected behavior of your code."]})})]})]}),s.jsxs("section",{id:"language-nav",className:"p-12 rounded-[2.5rem] bg-primary/5 border border-primary/10 space-y-8",children:[s.jsx("h2",{className:"text-3xl font-bold text-center",children:"Language-Specific Guidelines"}),s.jsx("p",{className:"text-center text-muted-foreground max-w-2xl mx-auto",children:"While the above principles are universal, each language has its own idioms and conventions. Select your stack for detailed implementation guides."}),s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[{name:".NET",path:"/dotnet-developer-guideline",color:"blue"},{name:"React",path:"/react-developer-guideline",color:"cyan"},{name:"Java",path:"/java-developer-guideline",color:"red"},{name:"Python",path:"/python-developer-guideline",color:"yellow"}].map(n=>s.jsx(ke,{asChild:!0,variant:"outline",className:"h-16 font-bold hover:bg-primary/20 hover:text-primary hover:border-primary transition-all",children:s.jsx(ze,{to:n.path,children:n.name})},n.name))})]})]}),s.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:s.jsxs("div",{className:"space-y-1 pb-12",children:[s.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),fp.map(n=>s.jsxs("a",{href:`#${n.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===n.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[s.jsx(n.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===n.id?"text-primary":"text-muted-foreground/40"}`}),n.title]},n.id))]})})]})]})},xp=[{id:"quick-ref",title:"1. Quick Reference",icon:Ge},{id:"workflow",title:"2. Git Workflow",icon:ll},{id:"branching",title:"3. Branching Strategy",icon:js},{id:"prs",title:"4. Pull Request Process",icon:lo},{id:"reviews",title:"5. Review Standards",icon:Ai},{id:"commits",title:"6. Commit Guidelines",icon:gm},{id:"testing",title:"7. Testing & Quality",icon:ot},{id:"security",title:"8. Security & Docs",icon:Hn},{id:"conflicts",title:"9. Conflict Resolution",icon:uo},{id:"cicd",title:"10. CI/CD Requirements",icon:He},{id:"versioning",title:"11. Versioning Standards",icon:Cj},{id:"changelog",title:"12. Changelog Rules",icon:vm}],XP=()=>{const[e,t]=m.useState("quick-ref"),r=[{label:"Home",href:"/"},{label:"Global Workflow"},{label:"GitHub Guidelines"}];return m.useEffect(()=>{const n=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&t(a.target.id)})},{threshold:.2,rootMargin:"-10% 0px -70% 0px"});return xp.forEach(i=>{const a=document.getElementById(i.id);a&&n.observe(a)}),()=>n.disconnect()},[]),s.jsxs(ht,{children:[s.jsx(Nt,{title:"AII GitHub Guidelines",subtitle:"Universal branching strategies, pull request workflows, and automated quality gates for all AII projects.",breadcrumbs:r}),s.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[s.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[s.jsxs("section",{id:"quick-ref",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Quick Reference Guide"})]}),s.jsx("div",{className:"grid sm:grid-cols-2 xl:grid-cols-4 gap-4",children:[{title:"Branching Rules",desc:"Mandatory prefix patterns for all feature work.",icon:js,tags:["feature/*","bugfix/*"],color:"blue"},{title:"Pull Requests",desc:"Mandated for all protected branches.",icon:lo,tags:["Review Required","CI Passing"],color:"emerald"},{title:"CI/CD Pipelines",desc:"Automated testing and deployment for every change.",icon:He,tags:["Build","Test","Deploy"]},{title:"PR Quality",desc:"All PRs require 2 approvals and passing CI builds.",icon:nt,tags:["Strict","Automated"]},{title:"Review Time",desc:"Initial reviews expected within 24 business hours.",icon:He,tags:["SLAs","Communication"]},{title:"Commit Style",desc:"Conventional Commits mandatory for all projects.",icon:gm,tags:["feat:","fix:","chore:"]}].map((n,i)=>s.jsx(fe,{className:"glass hover:border-primary/50 transition-all group",children:s.jsxs(ye,{className:"pt-6",children:[s.jsx(n.icon,{className:"h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform"}),s.jsx("h4",{className:"font-bold mb-2",children:n.title}),s.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:n.desc}),s.jsx("div",{className:"flex flex-wrap gap-2",children:n.tags.map(a=>s.jsx(k,{variant:"secondary",className:"text-[10px] font-mono px-1.5 py-0",children:a},a))})]})},i))}),s.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-6",children:[s.jsxs("div",{className:"flex items-center gap-3 text-emerald-500",children:[s.jsx("div",{className:"p-2 rounded-lg bg-emerald-500/10",children:s.jsx(lo,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-2xl font-bold",children:"Your First Pull Request"})]}),s.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"Follow this workflow to submit your first contribution at AII:"}),s.jsx("div",{className:"space-y-8",children:[{title:"Sync & Branch",cmd:`git checkout master && git pull
git checkout -b feature/JIRA-123-ui-fix`,desc:"Always start from the latest master branch and use the JIRA ID in your branch name."},{title:"Commit Work",cmd:`git add .
git commit -m "feat(ui): implement new glassmorphism theme"`,desc:"Follow Conventional Commits guidelines for your message."},{title:"Push & Open",cmd:"git push -u origin feature/JIRA-123-ui-fix",desc:"Push and then click the GitHub link to open a PR against the master branch."}].map((n,i)=>s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold",children:i+1}),s.jsx("h4",{className:"font-bold",children:n.title})]}),s.jsx("p",{className:"text-sm text-muted-foreground px-9",children:n.desc}),s.jsx("div",{className:"ml-9",children:s.jsx(O,{language:"bash",code:n.cmd})})]},i))})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"workflow",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Development Workflow"}),s.jsx("p",{className:"text-lg text-muted-foreground italic",children:"Step-by-step flow from feature inception to production deployment."})]}),s.jsxs("div",{className:"relative space-y-8",children:[s.jsx("div",{className:"absolute left-8 top-12 bottom-12 w-px bg-border hidden md:block"}),[{step:1,title:"Feature Development",desc:"Create feature branches from development, implement changes, and open PRs.",icon:Bt},{step:2,title:"Preparing a Release",desc:"Create release branches from development for final stabilization.",icon:We},{step:3,title:"Testing in Staging",desc:"Deploy to testing environment. Fix discovered issues via additional PRs.",icon:ot},{step:4,title:"Going Live",desc:"Merge release into master and development simultaneously.",icon:Ge},{step:5,title:"Production Deployment",desc:"Master triggers automatic production deployment via CI/CD pipelines.",icon:He}].map((n,i)=>s.jsxs("div",{className:"flex gap-6 relative",children:[s.jsx("div",{className:"z-10 bg-background border-2 border-primary/20 text-primary h-16 w-16 rounded-3xl flex items-center justify-center shrink-0 shadow-sm",children:s.jsx(n.icon,{className:"h-7 w-7"})}),s.jsxs("div",{className:"space-y-1 pt-1",children:[s.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[s.jsxs("span",{className:"text-xs text-muted-foreground font-mono",children:["STEP 0",n.step]}),n.title]}),s.jsx("p",{className:"text-muted-foreground leading-relaxed max-w-2xl",children:n.desc})]})]},i))]}),s.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4",children:[s.jsx(jm,{className:"h-6 w-6 text-primary shrink-0"}),s.jsx("p",{className:"text-sm font-medium text-primary/80 italic",children:"Key Principle: All changes flow through PRs with mandatory reviews and CI checks, ensuring quality at every step regardless of stack."})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"branching",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Branching Strategy"})]}),s.jsxs("div",{className:"space-y-10",children:[s.jsxs("div",{className:"space-y-6",children:[s.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Branch Naming Convention"}),s.jsx("p",{className:"text-muted-foreground",children:"Standardized patterns for all AII repositories."}),s.jsxs("div",{className:"bg-muted p-8 rounded-3xl border font-mono relative group overflow-hidden",children:[s.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-muted-foreground border border-muted-foreground/30 px-2 rounded-full",children:"Regex Requirement"}),s.jsx("code",{className:"text-orange-600 dark:text-orange-400 text-sm break-all leading-relaxed block py-4",children:"^ (master | development | refs/tags/.* | ((bugfix|hotfix|playground|defect|feature|release){1}/.+)) $"})]}),s.jsx("div",{className:"flex flex-wrap gap-2",children:["feature/login-page","bugfix/api-error","release/v1.2.0","hotfix/urgent-patch"].map(n=>s.jsx(k,{variant:"outline",className:"font-mono text-xs px-3 py-1 hover:bg-muted transition-colors",children:n},n))})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Protected Branches"}),s.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{name:"master",type:"CRITICAL",desc:"Production branch. Contains only tested, production-ready code.",border:"border-orange-500/50",bg:"bg-orange-500/5"},{name:"development",type:"PROTECTED",desc:"Master integration branch. Base for all feature work.",border:"border-blue-500/50",bg:"bg-blue-500/5"},{name:"release/*",type:"LOCKED",desc:"Release candidates for staging testing and stabilization.",border:"border-emerald-500/50",bg:"bg-emerald-500/5"}].map(n=>s.jsxs("div",{className:`glass p-6 rounded-2xl border ${n.border} ${n.bg} space-y-3`,children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"font-mono font-bold text-lg",children:n.name}),s.jsx(Fs,{className:"h-4 w-4 opacity-50"})]}),s.jsx(k,{variant:"outline",className:"text-[10px]",children:n.type}),s.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:n.desc})]},n.name))})]}),s.jsxs("div",{className:"p-6 border border-destructive/20 bg-destructive/5 rounded-2xl space-y-3 flex gap-4",children:[s.jsx(Hn,{className:"h-6 w-6 text-destructive shrink-0"}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-destructive",children:"Crucial Restriction"}),s.jsxs("p",{className:"text-sm text-muted-foreground italic",children:[s.jsx("strong",{children:"NEVER"})," commit directly to master, development, or any locked branches. All changes must be submitted via Pull Requests."]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"prs",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Pull Request Process"})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-10",children:[s.jsxs("div",{className:"space-y-6",children:[s.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2 text-emerald-600",children:[s.jsx(ce,{className:"h-5 w-5"})," Creation Checklist"]}),s.jsx("div",{className:"grid gap-4",children:[{label:"Clear Title & Description",desc:"Explain the WHAT and WHY clearly."},{label:"Link Related Issues",desc:"Reference Jira tickets or internal issues."},{label:"Up-to-Date Branch",desc:"Merge latest changes from target first."},{label:"Focused Scope",desc:"One feature or bug fix per PR."}].map((n,i)=>s.jsxs("div",{className:"p-4 rounded-xl bg-card border flex gap-3 shadow-sm hover:shadow-md transition-shadow",children:[s.jsx("div",{className:"h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 mt-0.5",children:s.jsx("div",{className:"h-2 w-2 rounded-full bg-emerald-500"})}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("p",{className:"font-bold text-sm tracking-tight",children:n.label}),s.jsx("p",{className:"text-xs text-muted-foreground",children:n.desc})]})]},i))})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2 text-primary",children:[s.jsx(ll,{className:"h-5 w-5"})," Merging Requirements"]}),s.jsxs(fe,{className:"glass border-primary/20",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(nt,{className:"h-5 w-5 text-primary"})," Code Owner Approval"]})}),s.jsxs(ye,{className:"space-y-4 text-sm leading-relaxed",children:[s.jsxs("p",{children:["Merging into any protected branch requires a review and approval from ",s.jsx("strong",{children:"at least 1 designated code owner"}),"."]}),s.jsx(F,{className:"bg-primary/10"}),s.jsxs("ul",{className:"space-y-3 list-none p-0 italic text-muted-foreground",children:[s.jsxs("li",{className:"flex gap-2",children:[s.jsx(ut,{className:"h-3 w-3 mt-1 text-primary shrink-0"})," PRs should be small and focused."]}),s.jsxs("li",{className:"flex gap-2",children:[s.jsx(ut,{className:"h-3 w-3 mt-1 text-primary shrink-0"})," Target for max 500 lines changed."]}),s.jsxs("li",{className:"flex gap-2",children:[s.jsx(ut,{className:"h-3 w-3 mt-1 text-primary shrink-0"})," All discussions must be resolved."]})]})]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"reviews",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Review Standards"})]}),s.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:[{title:"Quality & Standards",icon:Ai,desc:"Reviewers verify adherence to the relevant technology guidelines and naming conventions."},{title:"Security Focus",icon:nt,desc:"Mandatory check for secret leakage, injection vulnerabilities, and authorization logic."},{title:"Automated Verification",icon:He,desc:"CI/CD pipelines, unit tests, and linters must show green status."},{title:"Constructive Feedback",icon:ol,desc:"Focus on the code, not the person. Use suggestions feature for improvements."}].map((n,i)=>s.jsxs("div",{className:"flex gap-4 p-6 rounded-2xl border bg-card/50 hover:bg-card transition-colors group",children:[s.jsx("div",{className:"p-3 rounded-xl bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform h-fit",children:s.jsx(n.icon,{className:"h-6 w-6"})}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("h5",{className:"font-bold text-lg",children:n.title}),s.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:n.desc})]})]},i))}),s.jsxs("div",{className:"p-8 border-2 border-dashed border-destructive/30 rounded-[2rem] bg-destructive/5 text-center space-y-4",children:[s.jsx(Hn,{className:"h-10 w-10 text-destructive mx-auto"}),s.jsx("h3",{className:"text-2xl font-bold text-destructive",children:"Strict Rule: No Self-Merging"}),s.jsx("p",{className:"text-muted-foreground max-w-lg mx-auto italic",children:"Do not merge your own PR unless explicitly allowed by the team lead. Collaborative review is the only way to maintain our quality bar."})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"commits",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Commit Message Standards"})]}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 space-y-6",children:[s.jsxs("h4",{className:"font-bold text-emerald-600 flex items-center gap-2",children:[s.jsx(ce,{className:"h-5 w-5"})," Professional Examples"]}),s.jsxs("div",{className:"space-y-3 font-mono text-xs",children:[s.jsx("div",{className:"p-3 bg-white/50 dark:bg-emerald-950/30 rounded border border-emerald-500/10",children:'"Add user authentication validation"'}),s.jsx("div",{className:"p-3 bg-white/50 dark:bg-emerald-950/30 rounded border border-emerald-500/10",children:'"Fix login form bug #123"'}),s.jsx("div",{className:"p-3 bg-white/50 dark:bg-emerald-950/30 rounded border border-emerald-500/10",children:'"Update documentation for v2.1"'})]}),s.jsx("p",{className:"text-xs text-muted-foreground italic",children:"Use imperative mood and clear, concise subjects."})]}),s.jsxs("div",{className:"p-8 rounded-3xl bg-destructive/5 border border-destructive/20 space-y-6",children:[s.jsxs("h4",{className:"font-bold text-destructive flex items-center gap-2",children:[s.jsx(hm,{className:"h-5 w-5"})," Messages to Avoid"]}),s.jsxs("div",{className:"space-y-3 font-mono text-xs opacity-60",children:[s.jsx("div",{className:"p-3 bg-white/50 dark:bg-destructive/10 rounded border border-destructive/10 line-through",children:'"fixed stuff"'}),s.jsx("div",{className:"p-3 bg-white/50 dark:bg-destructive/10 rounded border border-destructive/10 line-through",children:'"changes"'}),s.jsx("div",{className:"p-3 bg-white/50 dark:bg-destructive/10 rounded border border-destructive/10 line-through",children:'"update"'})]}),s.jsx("p",{className:"text-xs text-muted-foreground italic",children:"Avoid vague, single-word messages that don't explain the intent."})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing & Quality Assurance"})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(ot,{className:"h-5 w-5 text-emerald-500"})," Comprehensive Coverage"]})}),s.jsxs(ye,{className:"text-sm text-muted-foreground leading-relaxed",children:["All new features and bug fixes ",s.jsx("strong",{children:"must"})," include relevant unit or integration tests. Code without tests will not be approved."]})]}),s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(uo,{className:"h-5 w-5 text-emerald-500"})," Pre-Review Validation"]})}),s.jsx(ye,{className:"text-sm text-muted-foreground leading-relaxed",children:"Ensure all tests pass locally before requesting code review. Respect your reviewers' time by submitting a working codebase."})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"security",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Security & Documentation"})]}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"p-8 rounded-[2rem] bg-destructive/5 border border-destructive/10 space-y-4",children:[s.jsxs("h4",{className:"font-bold flex items-center gap-2 text-destructive",children:[s.jsx(Hn,{className:"h-5 w-5"})," Security First"]}),s.jsx("div",{className:"p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-destructive/10 text-sm italic font-medium",children:'"Never commit secrets, credentials, API keys, or other sensitive data to the repository."'}),s.jsxs("p",{className:"text-xs text-muted-foreground",children:["Use environment variables, vault management, or secure configuration systems instead. Use ",s.jsx("code",{children:".gitignore"})," and ",s.jsx("code",{children:"git-secrets"})," scans locally."]})]}),s.jsxs("div",{className:"p-8 rounded-[2rem] bg-primary/5 border border-primary/10 space-y-4",children:[s.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[s.jsx(vt,{className:"h-5 w-5 text-primary"})," Documentation Sync"]}),s.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"Keep documentation synchronized with code changes. Update README.md, technical docs, and internal wikis when implementing new capabilities."}),s.jsx(F,{className:"bg-primary/10"}),s.jsx("p",{className:"text-[10px] text-muted-foreground font-mono uppercase font-bold",children:"Requirement: All public changes must have documentation updates."})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"conflicts",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Conflict Resolution"})]}),s.jsxs(fe,{className:"overflow-hidden border-orange-500/20 shadow-lg",children:[s.jsxs("div",{className:"bg-orange-500 text-white px-8 py-4 flex items-center gap-4",children:[s.jsx(uo,{className:"h-6 w-6"}),s.jsx("h4",{className:"font-bold",children:"Prevention is Better Than Cure"})]}),s.jsxs(ye,{className:"p-8 space-y-6",children:[s.jsxs("p",{className:"text-muted-foreground leading-relaxed text-lg",children:[s.jsx("strong",{children:"Always pull the latest changes"})," from the target branch (e.g., master, development, or release/**) before starting work or creating a PR."]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"p-4 rounded-xl bg-muted border font-mono text-xs",children:[s.jsx("p",{className:"text-muted-foreground mb-2 text-[10px] font-bold uppercase",children:"Before Starting"}),s.jsxs("code",{children:["git checkout development",s.jsx("br",{}),"git pull origin development",s.jsx("br",{}),"git checkout -b feature/new-logic"]})]}),s.jsxs("div",{className:"p-4 rounded-xl bg-muted border font-mono text-xs",children:[s.jsx("p",{className:"text-muted-foreground mb-2 text-[10px] font-bold uppercase",children:"Before PR"}),s.jsxs("code",{children:["git checkout feature/new-logic",s.jsx("br",{}),"# Merge target branch",s.jsx("br",{}),"git merge development",s.jsx("br",{}),"# Resolve local conflicts"]})]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"cicd",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"CI/CD Status Requirements"})]}),s.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{title:"Automated Tests",icon:ot,desc:"Unit & Integration checks must pass."},{title:"Code Quality",icon:dl,desc:"Linting and static analysis checks."},{title:"Build Status",icon:He,desc:"Compilation and deployment staging checks."}].map((n,i)=>s.jsxs("div",{className:"glass p-6 rounded-2xl border flex flex-col items-center text-center space-y-3",children:[s.jsx("div",{className:"p-3 rounded-full bg-blue-500/10 text-blue-500",children:s.jsx(n.icon,{className:"h-6 w-6"})}),s.jsx("h5",{className:"font-bold",children:n.title}),s.jsx("p",{className:"text-xs text-muted-foreground",children:n.desc})]},i))}),s.jsx("div",{className:"p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center",children:s.jsxs("p",{className:"text-emerald-600 font-bold flex items-center justify-center gap-2",children:[s.jsx(ce,{className:"h-5 w-5"})," All automated checks must pass before merging is permitted."]})})]}),s.jsx(F,{}),s.jsxs("section",{id:"versioning",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 11"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Versioning Standards"})]}),s.jsxs("div",{className:"space-y-10",children:[s.jsxs("div",{className:"bg-primary/5 p-12 rounded-[3rem] border border-primary/10 space-y-8 relative overflow-hidden",children:[s.jsxs("div",{className:"relative z-10 text-center space-y-4",children:[s.jsx("h3",{className:"text-3xl font-extrabold tracking-tighter sm:text-4xl",children:"Semantic Versioning 2.0.0"}),s.jsx("p",{className:"text-muted-foreground font-mono text-xl",children:"X . Y . Z"})]}),s.jsx("div",{className:"grid md:grid-cols-3 gap-8 relative z-10",children:[{major:"X",label:"MAJOR",desc:"Breaking changes or incompatible API updates.",color:"text-red-500"},{major:"Y",label:"MINOR",desc:"New functionality in a backwards compatible manner.",color:"text-emerald-500"},{major:"Z",label:"PATCH",desc:"Backwards compatible bug fixes only.",color:"text-orange-500"}].map((n,i)=>s.jsxs("div",{className:"p-6 rounded-2xl bg-white/80 dark:bg-black/30 border text-center space-y-2 backdrop-blur-sm",children:[s.jsx("span",{className:`text-4xl font-bold ${n.color}`,children:n.major}),s.jsx("h5",{className:"font-bold text-sm",children:n.label}),s.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:n.desc})]},i))})]}),s.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-4",children:[{title:"Bug Fix",from:"1.2.3",to:"1.2.4",bg:"bg-emerald-500/5"},{title:"New Feature",from:"1.2.3",to:"1.3.0",bg:"bg-emerald-500/5"},{title:"Breaking Change",from:"1.2.3",to:"2.0.0",bg:"bg-orange-500/5"},{title:"Pre-release",from:"2.0.0",to:"2.0.0-beta.1",bg:"bg-blue-500/5"}].map((n,i)=>s.jsxs("div",{className:`p-4 rounded-xl border ${n.bg} text-center space-y-1 hover:scale-105 transition-transform cursor-default`,children:[s.jsx("p",{className:"text-[10px] font-bold uppercase opacity-60 tracking-widest",children:n.title}),s.jsxs("p",{className:"font-mono text-sm",children:[n.from," → ",n.to]})]},i))})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"changelog",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 12"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Changelog & Release Notes"})]}),s.jsxs("div",{className:"p-10 rounded-[2.5rem] bg-slate-900 text-slate-100 border-none relative overflow-hidden group",children:[s.jsx("div",{className:"absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity",children:s.jsx(vm,{className:"h-40 w-40"})}),s.jsxs("div",{className:"relative z-10 space-y-8",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("h3",{className:"text-3xl font-bold",children:"Documenting Significance"}),s.jsx("p",{className:"text-slate-400",children:"Update the changelog or release notes in your PR if your changes are significant."})]}),s.jsxs("div",{className:"grid sm:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-3 text-emerald-400 font-bold",children:[s.jsx(ce,{className:"h-5 w-5"})," External Significance"]}),s.jsxs("ul",{className:"text-sm text-slate-400 space-y-2 list-none p-0 italic",children:[s.jsx("li",{children:"• New features or UI modifications"}),s.jsx("li",{children:"• API changes or breaking updates"})]})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-3 text-emerald-400 font-bold",children:[s.jsx(ce,{className:"h-5 w-5"})," Internal Significance"]}),s.jsxs("ul",{className:"text-sm text-slate-400 space-y-2 list-none p-0 italic",children:[s.jsx("li",{children:"• Architecture shifts"}),s.jsx("li",{children:"• Performance & Security enhancements"})]})]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"conclusion",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"text-center space-y-6",children:[s.jsx(co,{className:"h-16 w-16 mx-auto text-primary animate-pulse"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Questions or Support?"}),s.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto italic",children:"Following these guidelines ensures high-quality, maintainable code and smooth collaboration across the AII development team regardless of technology stack."})]}),s.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[s.jsx(fe,{className:"hover:border-primary transition-all group p-1 shrink-0",children:s.jsxs("a",{href:"mailto:yosy.aliffakry@axa.co.id",className:"flex items-center justify-between p-6",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform",children:s.jsx(_j,{className:"h-6 w-6"})}),s.jsxs("div",{children:[s.jsx("p",{className:"font-bold",children:"Contact Maintainer"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"yosy.aliffakry@axa.co.id"})]})]}),s.jsx(ii,{className:"h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"})]})}),s.jsx(fe,{className:"hover:border-primary transition-all group p-1 shrink-0",children:s.jsxs("a",{href:"https://github.axa.com/aii",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-6",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"p-3 rounded-full bg-black/10 dark:bg-white/10 text-foreground group-hover:scale-110 transition-transform",children:s.jsx(co,{className:"h-6 w-6"})}),s.jsxs("div",{children:[s.jsx("p",{className:"font-bold",children:"AII Organization"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"github.axa.com/aii"})]})]}),s.jsx(ii,{className:"h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"})]})})]})]})]}),s.jsx("aside",{className:"lg:w-72 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden lg:block overflow-y-auto pl-4 border-l",children:s.jsxs("div",{className:"space-y-1 pb-12",children:[s.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),xp.map(n=>s.jsxs("a",{href:`#${n.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===n.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[s.jsx(n.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===n.id?"text-primary":"text-muted-foreground/40"}`}),n.title]},n.id))]})})]})]})},gp=[{id:"overview",title:"1. Platform Overview",icon:vt},{id:"getting-started",title:"2. Getting Started",icon:Bt},{id:"builds",title:"3. Build Configuration",icon:nl},{id:"deployments",title:"4. Deployments",icon:Sm},{id:"configuration",title:"5. Configuration Management",icon:Vt},{id:"networking",title:"6. Networking & Routes",icon:ll},{id:"monitoring",title:"7. Monitoring & Logging",icon:He},{id:"best-practices",title:"8. Best Practices",icon:Xt},{id:"case-studies",title:"9. Real-world Case Studies",icon:vt}],JP=()=>{const[e,t]=m.useState("overview"),r=[{label:"Home",href:"/"},{label:"DevOps & CI/CD"},{label:"OpenShift"}];return m.useEffect(()=>{const n=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);t(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return gp.forEach(i=>{const a=document.getElementById(i.id);a&&n.observe(a)}),()=>n.disconnect()},[]),s.jsxs(ht,{children:[s.jsx(Nt,{title:"OpenShift 4.x Platform Guide",subtitle:"Comprehensive guide to deploying and managing applications on AXA's OpenShift Container Platform.",breadcrumbs:r,readingTime:40}),s.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[s.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[s.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Platform Overview"}),s.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"OpenShift Container Platform is AXA's enterprise Kubernetes platform for building, deploying, and managing containerized applications at scale."})]}),s.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"OpenShift 4.x",icon:z0},{text:"Kubernetes Native",icon:Z0},{text:"Enterprise Security",icon:Xt},{text:"Built-in CI/CD",icon:js},{text:"Auto-scaling",icon:He},{text:"Self-service Portal",icon:We}].map((n,i)=>s.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[s.jsx(n.icon,{className:"h-5 w-5 text-primary"}),s.jsx("span",{className:"font-semibold text-sm",children:n.text})]},i))}),s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"Key OpenShift Concepts"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-4 py-3 text-left",children:"Concept"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Description"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Kubernetes Equivalent"})]})}),s.jsxs("tbody",{className:"divide-y",children:[s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Project"}),s.jsx("td",{className:"px-4 py-2",children:"Isolated environment for resources"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"outline",children:"Namespace"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"BuildConfig"}),s.jsx("td",{className:"px-4 py-2",children:"Defines how to build container images"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"secondary",children:"OpenShift Only"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"DeploymentConfig"}),s.jsx("td",{className:"px-4 py-2",children:"Manages application deployments"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"outline",children:"Deployment"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Route"}),s.jsx("td",{className:"px-4 py-2",children:"Exposes services externally"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"outline",children:"Ingress"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"ImageStream"}),s.jsx("td",{className:"px-4 py-2",children:"Tracks container image versions"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"secondary",children:"OpenShift Only"})})]})]})]})})]}),s.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400",children:[s.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"AXA OpenShift Architecture"}),s.jsx("pre",{className:"leading-relaxed",children:`┌─────────────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────────────┘`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"getting-started",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Getting Started"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Set up your development environment and access AXA's OpenShift cluster."})]}),s.jsxs("div",{className:"p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6",children:[s.jsxs("div",{className:"flex items-center gap-3 text-cyan-600",children:[s.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10",children:s.jsx(ce,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),s.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get started with OpenShift at AXA:"}),s.jsx("div",{className:"grid gap-4",children:[{step:"Request Access",desc:"Submit access request through AXA service portal for your project namespace."},{step:"Install oc CLI",desc:"Download OpenShift CLI (oc) from the cluster's command-line tools page."},{step:"Login to Cluster",desc:"Copy login command from OpenShift web console (top-right menu → Copy Login Command)."},{step:"Select Project",desc:"Switch to your project namespace: oc project your-project-name"},{step:"Verify Access",desc:"Run 'oc whoami' and 'oc get pods' to verify your access permissions."}].map((n,i)=>s.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[s.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-sm",children:i+1}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-foreground",children:n.step}),s.jsx("p",{className:"text-sm text-muted-foreground",children:n.desc})]})]},i))})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"CLI Authentication",language:"bash",code:`# Login using token from web console
oc login --token=sha256~YOUR_TOKEN --server=https://api.openshift.axa.com:6443

# Verify login
oc whoami
oc whoami --show-server

# List available projects
oc projects

# Switch to your project
oc project my-application-dev

# Get cluster info
oc cluster-info`}),s.jsx(O,{title:"Essential oc Commands",language:"bash",code:`# View resources in current project
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
oc port-forward <pod-name> 8080:8080`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"builds",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Build Configuration"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Configure OpenShift Builds triggered from Jenkins pipelines."})]}),s.jsxs("div",{className:"p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4",children:[s.jsxs("div",{className:"flex items-center gap-2 text-amber-600",children:[s.jsx(ai,{className:"h-5 w-5"}),s.jsx("h4",{className:"font-bold",children:"AXA Build Workflow"})]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"At AXA, we trigger OpenShift Builds from Jenkins pipelines. The BuildConfig defines how your application is containerized, and the resulting image is pushed to the internal ImageStream for deployment consumption."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"BuildConfig Definition (buildconfig.yaml)",language:"yaml",code:`apiVersion: build.openshift.io/v1
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
  triggers: []`}),s.jsx(O,{title:"ImageStream Definition (imagestream.yaml)",language:"yaml",code:`apiVersion: image.openshift.io/v1
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
        tags: production`}),s.jsx(O,{title:"Triggering Build from Jenkins",language:"groovy",code:`// Jenkinsfile - Build Stage
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
}`}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Build Best Practices"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Use multi-stage Dockerfiles for smaller images"}),s.jsx("li",{children:"• Set resource limits on BuildConfigs"}),s.jsx("li",{children:"• Tag images with version/commit info"}),s.jsx("li",{children:"• Use .dockerignore to exclude files"}),s.jsx("li",{children:"• Cache dependencies in separate layers"})]})]}),s.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Common Mistakes"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Running as root in containers"}),s.jsx("li",{children:"• Including secrets in images"}),s.jsx("li",{children:"• Not setting CPU/memory limits"}),s.jsx("li",{children:"• Using :latest tag in production"}),s.jsx("li",{children:"• Large base images (use alpine/distroless)"})]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"deployments",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Deployments"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Configure Deployments that consume images from OpenShift Builds."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"Deployment Configuration (deployment.yaml)",language:"yaml",code:`apiVersion: apps/v1
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
          type: RuntimeDefault`}),s.jsx(O,{title:"Trigger Deployment from Jenkins",language:"groovy",code:`// Jenkinsfile - Deploy Stage
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
}`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"configuration",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Configuration Management"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Manage application configuration using ConfigMaps and Secrets."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsx(O,{title:"ConfigMap (configmap.yaml)",language:"yaml",code:`apiVersion: v1
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
    }`}),s.jsx(O,{title:"Secret (secret.yaml)",language:"yaml",code:`apiVersion: v1
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
  tls.key: <base64-encoded-key>`})]}),s.jsx(O,{title:"Using ConfigMaps and Secrets in Deployment",language:"yaml",code:`# In deployment.yaml spec.template.spec.containers
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
      defaultMode: 0400  # Read-only for owner`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"networking",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Networking & Routes"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Expose your applications using Services and Routes."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"Service Definition (service.yaml)",language:"yaml",code:`apiVersion: v1
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
    app: my-application`}),s.jsx(O,{title:"Route Definition (route.yaml)",language:"yaml",code:`apiVersion: route.openshift.io/v1
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
  #     weight: 10`}),s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"TLS Termination Options"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-4 py-3 text-left",children:"Type"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Description"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Use Case"})]})}),s.jsxs("tbody",{className:"divide-y",children:[s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Edge"}),s.jsx("td",{className:"px-4 py-2",children:"TLS terminates at router"}),s.jsx("td",{className:"px-4 py-2",children:"Most common, backend uses HTTP"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Passthrough"}),s.jsx("td",{className:"px-4 py-2",children:"TLS passes through to pod"}),s.jsx("td",{className:"px-4 py-2",children:"End-to-end encryption, app handles TLS"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Re-encrypt"}),s.jsx("td",{className:"px-4 py-2",children:"Router re-encrypts to pod"}),s.jsx("td",{className:"px-4 py-2",children:"Full encryption with certificate validation"})]})]})]})})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"monitoring",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Monitoring & Logging"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Observe your applications using OpenShift's built-in monitoring stack."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(He,{className:"h-5 w-5 text-emerald-500"})," Metrics & Prometheus"]})}),s.jsxs(ye,{className:"space-y-4",children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:"OpenShift provides built-in Prometheus for metrics collection."}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Expose /metrics endpoint in your app"}),s.jsx("li",{children:"• Use ServiceMonitor for automatic discovery"}),s.jsx("li",{children:"• View in OpenShift Console → Monitoring"}),s.jsx("li",{children:"• Create custom Grafana dashboards"})]})]})]}),s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(Ai,{className:"h-5 w-5 text-blue-500"})," Logging"]})}),s.jsxs(ye,{className:"space-y-4",children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:"Centralized logging with EFK (Elasticsearch, Fluentd, Kibana)."}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Log to stdout/stderr (12-factor app)"}),s.jsx("li",{children:"• Use structured JSON logging"}),s.jsx("li",{children:"• Access logs in Kibana dashboard"}),s.jsx("li",{children:"• Set appropriate log levels per env"})]})]})]})]}),s.jsx(O,{title:"ServiceMonitor for Prometheus (servicemonitor.yaml)",language:"yaml",code:`apiVersion: monitoring.coreos.com/v1
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
      app: my-application`}),s.jsx(O,{title:"View Logs with oc CLI",language:"bash",code:`# View pod logs
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
oc logs <pod-name> --tail=100`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"best-practices",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Best Practices"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Follow these guidelines for production-ready OpenShift deployments."})]}),s.jsx("div",{className:"grid gap-6",children:[{title:"Resource Management",icon:Us,color:"text-blue-500",items:["Always set CPU and Memory requests/limits","Use Horizontal Pod Autoscaler (HPA) for auto-scaling","Set Pod Disruption Budgets (PDB) for high availability","Use resource quotas at namespace level"]},{title:"Security",icon:Xt,color:"text-emerald-500",items:["Never run containers as root","Use SecurityContext with runAsNonRoot: true","Store secrets in OpenShift Secrets, not in images","Enable network policies to restrict pod communication","Scan images for vulnerabilities before deployment"]},{title:"Health & Resilience",icon:He,color:"text-amber-500",items:["Implement liveness and readiness probes","Use rolling update strategy with maxUnavailable: 0","Configure appropriate initialDelaySeconds for probes","Handle SIGTERM gracefully for zero-downtime deploys"]},{title:"Configuration",icon:Vt,color:"text-purple-500",items:["Externalize all configuration using ConfigMaps","Use different ConfigMaps per environment (dev/staging/prod)","Never hardcode environment-specific values in code","Use Kustomize or Helm for managing environments"]}].map((n,i)=>s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(n.icon,{className:`h-5 w-5 ${n.color}`}),n.title]})}),s.jsx(ye,{children:s.jsx("ul",{className:"grid md:grid-cols-2 gap-2",children:n.items.map((a,o)=>s.jsxs("li",{className:"flex items-start gap-2 text-sm text-muted-foreground",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0"}),a]},o))})})]},i))}),s.jsx(O,{title:"Production-Ready Deployment Template",language:"yaml",code:`apiVersion: apps/v1
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
          averageUtilization: 70`})]}),s.jsx(F,{}),s.jsxs("section",{id:"case-studies",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Real-world Case Studies"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Detailed production manifests for complex applications, including SonarQube and .NET Surroundings systems."})]}),s.jsxs("div",{className:"space-y-16",children:[s.jsxs("div",{className:"space-y-8",children:[s.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-bold uppercase tracking-wider",children:"Case Study: SonarQube Infrastructure"}),s.jsx("p",{className:"text-muted-foreground",children:"This production deployment configuration manages a SonarQube instance with persistent storage, custom environment variables, and optimized resource limits."}),s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[s.jsx(O,{title:"Deployment Manifest (SonarQube)",language:"yaml",code:`apiVersion: apps/v1
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
            claimName: sonar-pvc-data`}),s.jsxs("div",{className:"space-y-4",children:[s.jsx(O,{title:"Service Manifest",language:"yaml",code:`apiVersion: v1
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
  type: ClusterIP`}),s.jsx(O,{title:"Route Manifest (Edge Termination)",language:"yaml",code:`apiVersion: route.openshift.io/v1
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
    termination: edge`})]})]})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold uppercase tracking-wider",children:"Case Study: .NET Surroundings BuildConfig"}),s.jsx("p",{className:"text-muted-foreground",children:"Advanced Docker-based BuildConfig for a .NET microservice, featuring custom Dockerfile location and selective build triggers."}),s.jsx(O,{title:"BuildConfig (buildconfig.yaml)",language:"yaml",code:`apiVersion: build.openshift.io/v1
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
    - type: ImageChange`})]})]})]}),s.jsx(hn,{previous:{title:"GitHub Workflow",href:"/github-axa-usage"},next:{title:"Jenkins CI/CD",href:"/jenkins-guideline"}})]}),s.jsx("aside",{className:"hidden lg:block w-64 flex-shrink-0",children:s.jsxs("div",{className:"sticky top-28 space-y-4",children:[s.jsx("h4",{className:"font-bold text-sm text-muted-foreground uppercase tracking-wide",children:"On This Page"}),s.jsx("nav",{className:"space-y-1",children:gp.map(n=>s.jsxs("a",{href:`#${n.id}`,className:`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${e===n.id?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[s.jsx(n.icon,{className:"h-4 w-4"}),n.title]},n.id))})]})})]})]})},QP=kg,Ag=m.forwardRef(({className:e,...t},r)=>s.jsx(Qi,{ref:r,className:ae("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));Ag.displayName=Qi.displayName;const Dg=m.forwardRef(({className:e,isActive:t,children:r,...n},i)=>s.jsxs(Zi,{ref:i,className:ae("relative inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground z-10",e),...n,children:[t&&s.jsx(Ye.div,{layoutId:"activeTab",className:"absolute inset-0 rounded-sm bg-background shadow-sm",transition:{type:"spring",bounce:.2,duration:.6}}),s.jsx("span",{className:"relative z-20",children:r})]}));Dg.displayName=Zi.displayName;const _g=m.forwardRef(({className:e,...t},r)=>s.jsx(ea,{ref:r,className:ae("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));_g.displayName=ea.displayName;const ZP=({snippets:e,className:t})=>{const r=Object.keys(e),[n,i]=m.useState(r[0]||"");return s.jsx("div",{className:ae("w-full space-y-4",t),children:s.jsxs(QP,{value:n,onValueChange:a=>i(a),className:"w-full",children:[s.jsx(Ag,{className:"bg-muted/50 p-1 border border-border/50",children:r.map(a=>{var o;return s.jsx(Dg,{value:a,isActive:n===a,className:"px-4 py-2",children:((o=e[a])==null?void 0:o.title)||a},a)})}),s.jsx("div",{className:"mt-4",children:r.map(a=>{const o=e[a];return o?s.jsx(_g,{value:a,className:"focus-visible:ring-0 mt-0",children:s.jsx(O,{title:o.title,code:o.code,language:o.language})},a):null})})]})})},yp=[{id:"introduction",title:"1. Introduction",icon:vt},{id:"getting-access",title:"2. Getting Access",icon:Fs},{id:"jenkinsfile-basics",title:"3. Jenkinsfile Basics",icon:ss},{id:"build-test",title:"4. Build & Test",icon:Tm},{id:"deployment",title:"5. Deployment Pipelines",icon:Sm},{id:"shared-libraries",title:"6. Shared Libraries",icon:Zj},{id:"best-practices",title:"7. Best Practices",icon:Xt},{id:"case-study",title:"8. Case Study: .NET",icon:nl}],eA=()=>{const[e,t]=m.useState("introduction"),r=[{label:"Home",href:"/"},{label:"DevOps & CI/CD"},{label:"Jenkins"}];return m.useEffect(()=>{const n=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);t(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return yp.forEach(i=>{const a=document.getElementById(i.id);a&&n.observe(a)}),()=>n.disconnect()},[]),s.jsxs(ht,{children:[s.jsx(Nt,{title:"Jenkins CI/CD Guide",subtitle:"Build, test, and deploy applications using Jenkins pipelines on AXA's OpenShift platform.",breadcrumbs:r,readingTime:35}),s.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[s.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[s.jsxs("section",{id:"introduction",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Introduction"}),s.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["Jenkins is AXA's primary CI/CD automation server, hosted on OpenShift. We use ",s.jsx("strong",{children:"Jenkinsfile"})," in each project repository to define build, test, and deployment pipelines."]})]}),s.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Pipeline as Code",icon:ss},{text:"Jenkinsfile per Repo",icon:hj},{text:"OpenShift Integration",icon:We},{text:"Automated Testing",icon:Tm},{text:"Multi-branch Pipelines",icon:js},{text:"Declarative Syntax",icon:Bt}].map((n,i)=>s.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[s.jsx(n.icon,{className:"h-5 w-5 text-primary"}),s.jsx("span",{className:"font-semibold text-sm",children:n.text})]},i))}),s.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400",children:[s.jsx("div",{className:"text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-4",children:"AXA CI/CD Pipeline Flow"}),s.jsx("pre",{className:"leading-relaxed",children:`┌─────────────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────────────┘`})]}),s.jsxs("div",{className:"p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4",children:[s.jsxs("div",{className:"flex items-center gap-2 text-amber-600",children:[s.jsx(ai,{className:"h-5 w-5"}),s.jsx("h4",{className:"font-bold",children:"AXA Jenkins Standard"})]}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Every project at AXA must include a ",s.jsx("code",{className:"text-primary bg-muted px-1.5 py-0.5 rounded",children:"Jenkinsfile"})," in the repository root. This file defines the complete CI/CD pipeline using declarative syntax. The pipeline triggers OpenShift Builds and manages deployments across environments."]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"getting-access",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Getting Access"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Set up your Jenkins access and configure credentials."})]}),s.jsxs("div",{className:"p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6",children:[s.jsxs("div",{className:"flex items-center gap-3 text-cyan-600",children:[s.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10",children:s.jsx(ce,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-2xl font-bold",children:"Access Checklist"})]}),s.jsx("div",{className:"grid gap-4",children:[{step:"Request Jenkins Access",desc:"Submit access request through AXA service portal for Jenkins."},{step:"Login to Jenkins",desc:"Access Jenkins via SSO at https://jenkins.apps.openshift.axa.com"},{step:"Find Your Project",desc:"Navigate to your team's folder/job in the Jenkins dashboard."},{step:"Configure Credentials",desc:"Add required credentials (Git tokens, registry secrets) in Jenkins Credentials."},{step:"Create Pipeline Job",desc:"Create a new Pipeline job pointing to your repository's Jenkinsfile."}].map((n,i)=>s.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[s.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-sm",children:i+1}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-foreground",children:n.step}),s.jsx("p",{className:"text-sm text-muted-foreground",children:n.desc})]})]},i))})]}),s.jsx(O,{title:"Required Jenkins Credentials",language:"groovy",code:`// Common credentials used in AXA Jenkins pipelines

// Git credentials for cloning repositories
credentials('github-axa-token')        // GitHub AXA personal access token

// OpenShift service account token
credentials('openshift-token')          // For oc login

// SonarQube token for code analysis
credentials('sonarqube-token')          // SonarQube authentication

// Container registry credentials (if external)
credentials('registry-credentials')     // Docker registry auth

// Notification credentials
credentials('teams-webhook')            // Microsoft Teams webhook URL`})]}),s.jsx(F,{}),s.jsxs("section",{id:"jenkinsfile-basics",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Jenkinsfile Basics"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Understanding the declarative pipeline syntax and structure."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"Basic Jenkinsfile Structure",language:"groovy",code:`// Jenkinsfile - Declarative Pipeline Syntax
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
}`}),s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"Declarative vs Scripted Pipeline"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-4 py-3 text-left",children:"Aspect"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Declarative (Preferred)"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Scripted"})]})}),s.jsxs("tbody",{className:"divide-y",children:[s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Syntax"}),s.jsx("td",{className:"px-4 py-2",children:"Structured, opinionated"}),s.jsx("td",{className:"px-4 py-2",children:"Flexible, Groovy-based"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Learning Curve"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{className:"bg-emerald-500",children:"Easier"})}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"secondary",children:"Steeper"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Error Checking"}),s.jsx("td",{className:"px-4 py-2",children:"Syntax validation built-in"}),s.jsx("td",{className:"px-4 py-2",children:"Runtime errors"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Restart"}),s.jsx("td",{className:"px-4 py-2",children:"Stage restart supported"}),s.jsx("td",{className:"px-4 py-2",children:"Not supported"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Use Case"}),s.jsx("td",{className:"px-4 py-2",children:"Most pipelines"}),s.jsx("td",{className:"px-4 py-2",children:"Complex logic"})]})]})]})})]}),s.jsx(O,{title:"Using script{} Block for Complex Logic",language:"groovy",code:`stage('Dynamic Stage') {
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
}`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"build-test",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Build & Test"}),s.jsxs("p",{className:"text-lg text-muted-foreground",children:["Configure ",s.jsx(dg,{children:"build and test stages"})," for different technology stacks."]})]}),s.jsx("div",{className:"space-y-8",children:s.jsx(ZP,{snippets:{maven:{title:"Maven/Java",language:"groovy",code:`pipeline {
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
}`}}})})]}),s.jsx(F,{}),s.jsxs("section",{id:"deployment",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Deployment Pipelines"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Trigger OpenShift Builds and manage deployments across environments."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"Complete CI/CD Pipeline with OpenShift",language:"groovy",code:`pipeline {
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
}`}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Deployment Best Practices"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsxs("li",{children:["• Use input"," for production approvals"]}),s.jsx("li",{children:"• Tag images with build numbers"}),s.jsx("li",{children:"• Run smoke tests after each deploy"}),s.jsx("li",{children:"• Keep production deployments immutable"}),s.jsx("li",{children:"• Use parallel stages for faster builds"})]})]}),s.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Common Mistakes"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Deploying without running tests"}),s.jsx("li",{children:"• Not waiting for rollout to complete"}),s.jsx("li",{children:"• Hardcoding credentials in Jenkinsfile"}),s.jsxs("li",{children:["• Missing post"," failure handlers"]}),s.jsx("li",{children:"• No manual approval for production"})]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"shared-libraries",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Shared Libraries"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Reuse pipeline code across projects with shared libraries."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"Shared Library Structure",language:"bash",code:`# Repository: github.axa.com/devops/jenkins-shared-library
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
        └── deployment.yaml`}),s.jsx(O,{title:"vars/deployToOpenshift.groovy",language:"groovy",code:`// Shared library function for OpenShift deployment
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
}`}),s.jsx(O,{title:"Using Shared Library in Jenkinsfile",language:"groovy",code:`// Import shared library at the top of Jenkinsfile
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
}`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"best-practices",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Best Practices"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Follow these guidelines for maintainable, secure, and efficient pipelines."})]}),s.jsx("div",{className:"grid gap-6",children:[{title:"Pipeline Structure",icon:pN,color:"text-blue-500",items:["Use declarative syntax over scripted","Keep Jenkinsfile in repository root","Use meaningful stage names","Fail fast - run quick checks first","Use parallel stages where possible"]},{title:"Security",icon:Xt,color:"text-emerald-500",items:["Never hardcode credentials in Jenkinsfile","Use Jenkins Credentials Manager","Mask sensitive values in logs","Restrict access to production jobs","Audit pipeline changes"]},{title:"Performance",icon:fm,color:"text-amber-500",items:["Cache dependencies between builds","Use lightweight agents when possible","Parallelize independent stages","Set appropriate timeouts","Clean workspace after builds"]},{title:"Maintainability",icon:Vt,color:"text-purple-500",items:["Use shared libraries for common code","Document complex pipeline logic","Version control your Jenkinsfiles","Use environment variables for config","Test pipeline changes on feature branches"]}].map((n,i)=>s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(n.icon,{className:`h-5 w-5 ${n.color}`}),n.title]})}),s.jsx(ye,{children:s.jsx("ul",{className:"grid md:grid-cols-2 gap-2",children:n.items.map((a,o)=>s.jsxs("li",{className:"flex items-start gap-2 text-sm text-muted-foreground",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0"}),a]},o))})})]},i))}),s.jsx(O,{title:"Complete Jenkinsfile Template",language:"groovy",code:`@Library('axa-jenkins-shared-library@main') _

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
}`})]}),s.jsx(F,{}),s.jsxs("section",{id:"case-study",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Case Study: .NET Production Pipeline"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"A real-world example of a comprehensive .NET pipeline featuring SonarScanner integration, Artifactory authentication, and advanced test coverage processing."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:[{title:"NuGet/Artifactory",desc:"Dynamic nuget.config generation with credentials."},{title:"SonarScanner",desc:"Full analysis with PR vs Branch conditional logic."},{title:"Coverage Processing",desc:"Automated path fixing for SonarQube compatibility."}].map((n,i)=>s.jsxs("div",{className:"p-4 rounded-xl preview-card border bg-background/50",children:[s.jsx("h4",{className:"font-bold text-sm mb-1",children:n.title}),s.jsx("p",{className:"text-xs text-muted-foreground",children:n.desc})]},i))}),s.jsx(O,{title:"Production .NET Jenkinsfile (Surrounding Systems)",language:"groovy",code:`pipeline {
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
}`}),s.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[s.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[s.jsx(Vt,{className:"h-5 w-5"})," Key Takeaways"]}),s.jsxs("ul",{className:"space-y-3 text-sm text-muted-foreground",children:[s.jsxs("li",{className:"flex gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 shrink-0 mt-0.5"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Dynamic Config"}),": Generating `nuget.config` on the fly prevents credential leakage and ensures clean builds."]})]}),s.jsxs("li",{className:"flex gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 shrink-0 mt-0.5"}),s.jsxs("span",{children:[s.jsx("strong",{children:"PR Analysis"}),": Conditional use of `sonar.pullrequest` arguments allows Jenkins to report status directly back to GitHub PRs."]})]}),s.jsxs("li",{className:"flex gap-2",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 shrink-0 mt-0.5"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Path Normalization"}),": Using `sed` or `tr` to fix coverage reports is often necessary when tools generate absolute paths that don't match the SonarQube workspace."]})]})]})]})]})]}),s.jsx(hn,{previous:{title:"OpenShift Platform",href:"/openshift-guideline"},next:{title:"SonarQube",href:"/sonarqube-guideline"}})]}),s.jsx("aside",{className:"hidden lg:block w-64 flex-shrink-0",children:s.jsxs("div",{className:"sticky top-28 space-y-4",children:[s.jsx("h4",{className:"font-bold text-sm text-muted-foreground uppercase tracking-wide",children:"On This Page"}),s.jsx("nav",{className:"space-y-1",children:yp.map(n=>s.jsxs("a",{href:`#${n.id}`,className:`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${e===n.id?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[s.jsx(n.icon,{className:"h-4 w-4"}),n.title]},n.id))})]})})]})]})},vp=[{id:"introduction",title:"1. Introduction",icon:vt},{id:"getting-started",title:"2. Getting Started",icon:Bt},{id:"quality-gates",title:"3. Quality Gates",icon:Cm},{id:"code-analysis",title:"4. Code Analysis",icon:_i},{id:"ide-integration",title:"5. IDE Integration",icon:al},{id:"jenkins-integration",title:"6. Jenkins Integration",icon:js},{id:"best-practices",title:"7. Best Practices",icon:Xt}],tA=()=>{const[e,t]=m.useState("introduction"),r=[{label:"Home",href:"/"},{label:"DevOps & CI/CD"},{label:"SonarQube"}];return m.useEffect(()=>{const n=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);t(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return vp.forEach(i=>{const a=document.getElementById(i.id);a&&n.observe(a)}),()=>n.disconnect()},[]),s.jsxs(ht,{children:[s.jsx(Nt,{title:"SonarQube Code Quality Guide",subtitle:"Maintain high code quality standards using SonarQube for static code analysis, security scanning, and technical debt management.",breadcrumbs:r,readingTime:30}),s.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[s.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[s.jsxs("section",{id:"introduction",className:"scroll-mt-28 space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Introduction"}),s.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"SonarQube is AXA's code quality and security analysis platform, hosted on OpenShift. It helps maintain clean, secure, and maintainable code across all projects."})]}),s.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Static Code Analysis",icon:_i},{text:"Security Vulnerabilities",icon:Xt},{text:"Code Smells",icon:_s},{text:"Coverage Metrics",icon:cd},{text:"Technical Debt",icon:Na},{text:"Quality Gates",icon:Cm}].map((n,i)=>s.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[s.jsx(n.icon,{className:"h-5 w-5 text-primary"}),s.jsx("span",{className:"font-semibold text-sm",children:n.text})]},i))}),s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"SonarQube Issue Types"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-4 py-3 text-left",children:"Type"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Description"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Priority"})]})}),s.jsxs("tbody",{className:"divide-y",children:[s.jsxs("tr",{children:[s.jsxs("td",{className:"px-4 py-2 font-medium flex items-center gap-2",children:[s.jsx(_s,{className:"h-4 w-4 text-red-500"})," Bug"]}),s.jsx("td",{className:"px-4 py-2",children:"Code that is demonstrably wrong or highly likely to behave unexpectedly"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"destructive",children:"Critical"})})]}),s.jsxs("tr",{children:[s.jsxs("td",{className:"px-4 py-2 font-medium flex items-center gap-2",children:[s.jsx(Xt,{className:"h-4 w-4 text-orange-500"})," Vulnerability"]}),s.jsx("td",{className:"px-4 py-2",children:"Security issue that could be exploited by attackers"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"destructive",children:"Critical"})})]}),s.jsxs("tr",{children:[s.jsxs("td",{className:"px-4 py-2 font-medium flex items-center gap-2",children:[s.jsx(ai,{className:"h-4 w-4 text-amber-500"})," Security Hotspot"]}),s.jsx("td",{className:"px-4 py-2",children:"Security-sensitive code that requires manual review"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"secondary",children:"Review"})})]}),s.jsxs("tr",{children:[s.jsxs("td",{className:"px-4 py-2 font-medium flex items-center gap-2",children:[s.jsx(U0,{className:"h-4 w-4 text-yellow-500"})," Code Smell"]}),s.jsx("td",{className:"px-4 py-2",children:"Maintainability issues that make code harder to understand"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"outline",children:"Medium"})})]})]})]})})]}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(yj,{className:"h-5 w-5 text-emerald-500"})," Key Metrics"]})}),s.jsxs(ye,{className:"space-y-3",children:[s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"text-muted-foreground",children:"Reliability Rating"}),s.jsx("span",{className:"font-medium",children:"A-E (bugs)"})]}),s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"text-muted-foreground",children:"Security Rating"}),s.jsx("span",{className:"font-medium",children:"A-E (vulnerabilities)"})]}),s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"text-muted-foreground",children:"Maintainability Rating"}),s.jsx("span",{className:"font-medium",children:"A-E (code smells)"})]}),s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"text-muted-foreground",children:"Coverage"}),s.jsx("span",{className:"font-medium",children:"% lines tested"})]}),s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"text-muted-foreground",children:"Duplications"}),s.jsx("span",{className:"font-medium",children:"% duplicated lines"})]})]})]}),s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(Na,{className:"h-5 w-5 text-blue-500"})," Rating Scale"]})}),s.jsxs(ye,{className:"space-y-3",children:[s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"font-medium text-emerald-600",children:"A"}),s.jsx("span",{className:"text-muted-foreground",children:"No issues (best)"})]}),s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"font-medium text-green-600",children:"B"}),s.jsx("span",{className:"text-muted-foreground",children:"Minor issues only"})]}),s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"font-medium text-yellow-600",children:"C"}),s.jsx("span",{className:"text-muted-foreground",children:"At least 1 major issue"})]}),s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"font-medium text-orange-600",children:"D"}),s.jsx("span",{className:"text-muted-foreground",children:"At least 1 critical issue"})]}),s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"font-medium text-red-600",children:"E"}),s.jsx("span",{className:"text-muted-foreground",children:"At least 1 blocker issue"})]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"getting-started",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Getting Started"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Set up your project for SonarQube analysis."})]}),s.jsxs("div",{className:"p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6",children:[s.jsxs("div",{className:"flex items-center gap-3 text-cyan-600",children:[s.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10",children:s.jsx(ce,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-2xl font-bold",children:"Setup Checklist"})]}),s.jsx("div",{className:"grid gap-4",children:[{step:"Access SonarQube",desc:"Login to https://sonarqube.apps.openshift.axa.com with SSO credentials."},{step:"Create Project",desc:"Create a new project or request access to existing project from admin."},{step:"Generate Token",desc:"Go to My Account → Security → Generate Token for CI/CD integration."},{step:"Configure Project",desc:"Create sonar-project.properties file in your repository root."},{step:"Add to Pipeline",desc:"Add SonarQube analysis stage to your Jenkinsfile."}].map((n,i)=>s.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[s.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-sm",children:i+1}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-foreground",children:n.step}),s.jsx("p",{className:"text-sm text-muted-foreground",children:n.desc})]})]},i))})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"sonar-project.properties",language:"properties",code:`# Required metadata
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
sonar.sourceEncoding=UTF-8`}),s.jsx(O,{title:"Running Analysis Locally",language:"bash",code:`# Install SonarScanner CLI
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
  -Dsonar.projectKey=my-application`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"quality-gates",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Quality Gates"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Quality Gates define the conditions that code must meet before being deployed."})]}),s.jsxs("div",{className:"p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4",children:[s.jsxs("div",{className:"flex items-center gap-2 text-amber-600",children:[s.jsx(ai,{className:"h-5 w-5"}),s.jsx("h4",{className:"font-bold",children:"AXA Quality Gate Standard"})]}),s.jsx("p",{className:"text-sm text-muted-foreground",children:'All AXA projects must pass the default "AXA Standard" Quality Gate before deployment. This gate enforces security, reliability, and maintainability standards. Builds that fail the Quality Gate should not be deployed to production.'})]}),s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"AXA Standard Quality Gate Conditions"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-4 py-3 text-left",children:"Metric"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Condition"}),s.jsx("th",{className:"px-4 py-3 text-left",children:"Applies To"})]})}),s.jsxs("tbody",{className:"divide-y",children:[s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"New Bugs"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{className:"bg-emerald-500",children:"= 0"})}),s.jsx("td",{className:"px-4 py-2",children:"New code"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"New Vulnerabilities"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{className:"bg-emerald-500",children:"= 0"})}),s.jsx("td",{className:"px-4 py-2",children:"New code"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"New Security Hotspots Reviewed"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"secondary",children:"= 100%"})}),s.jsx("td",{className:"px-4 py-2",children:"New code"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"New Coverage"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"outline",children:"≥ 80%"})}),s.jsx("td",{className:"px-4 py-2",children:"New code"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"New Duplicated Lines"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{variant:"outline",children:"≤ 3%"})}),s.jsx("td",{className:"px-4 py-2",children:"New code"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Reliability Rating"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{className:"bg-emerald-500",children:"A"})}),s.jsx("td",{className:"px-4 py-2",children:"New code"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Security Rating"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{className:"bg-emerald-500",children:"A"})}),s.jsx("td",{className:"px-4 py-2",children:"New code"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-4 py-2 font-medium",children:"Maintainability Rating"}),s.jsx("td",{className:"px-4 py-2",children:s.jsx(k,{className:"bg-emerald-500",children:"A"})}),s.jsx("td",{className:"px-4 py-2",children:"New code"})]})]})]})})]}),s.jsx(O,{title:"Waiting for Quality Gate in Jenkins",language:"groovy",code:`stage('SonarQube Analysis') {
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
}`})]}),s.jsx(F,{}),s.jsxs("section",{id:"code-analysis",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Analysis"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Understanding analysis results and fixing issues."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsx(O,{title:"Java Analysis Configuration",language:"xml",code:`<!-- pom.xml -->
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
</build>`}),s.jsx(O,{title:"JavaScript/TypeScript Configuration",language:"json",code:`// sonar-project.properties
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
}`})]}),s.jsx(O,{title:".NET Analysis Configuration",language:"bash",code:`# Install SonarScanner for .NET
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
dotnet sonarscanner end /d:sonar.token="your-token"`}),s.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[s.jsx("h4",{className:"font-bold",children:"Common Issue Categories"}),s.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{category:"SQL Injection",severity:"Critical",rule:"S3649",fix:"Use parameterized queries"},{category:"Hard-coded Credentials",severity:"Critical",rule:"S2068",fix:"Use environment variables"},{category:"Null Pointer",severity:"Major",rule:"S2259",fix:"Add null checks or use Optional"},{category:"Empty Catch Block",severity:"Major",rule:"S108",fix:"Log exception or rethrow"},{category:"Cognitive Complexity",severity:"Minor",rule:"S3776",fix:"Extract methods, simplify logic"},{category:"Unused Variables",severity:"Minor",rule:"S1481",fix:"Remove or use the variable"}].map((n,i)=>s.jsxs("div",{className:"p-4 rounded-xl border border-border/50 bg-background/50",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-bold text-sm",children:n.category}),s.jsx(k,{variant:n.severity==="Critical"?"destructive":n.severity==="Major"?"secondary":"outline",children:n.severity})]}),s.jsxs("p",{className:"text-xs text-muted-foreground",children:["Rule: ",n.rule]}),s.jsxs("p",{className:"text-xs text-emerald-600 mt-1",children:["Fix: ",n.fix]})]},i))})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"ide-integration",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"IDE Integration"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Use SonarLint to catch issues before committing code."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:[{name:"VS Code",plugin:"SonarLint extension",icon:ss},{name:"IntelliJ IDEA",plugin:"SonarLint plugin",icon:nl},{name:"Visual Studio",plugin:"SonarLint extension",icon:Ai}].map((n,i)=>s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(n.icon,{className:"h-5 w-5 text-primary"}),n.name]})}),s.jsx(ye,{children:s.jsx("p",{className:"text-sm text-muted-foreground",children:n.plugin})})]},i))}),s.jsx(O,{title:"SonarLint Connected Mode (VS Code settings.json)",language:"json",code:`{
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
}`}),s.jsx(O,{title:"SonarLint Connected Mode (IntelliJ)",language:"text",code:`1. Install SonarLint plugin from JetBrains Marketplace

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
   - Issues will match exactly what CI/CD sees`}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ SonarLint Benefits"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Real-time feedback while coding"}),s.jsx("li",{children:"• Quick fixes for common issues"}),s.jsx("li",{children:"• Synced rules with SonarQube server"}),s.jsx("li",{children:"• Reduced CI/CD failures"}),s.jsx("li",{children:"• Educational issue descriptions"})]})]}),s.jsxs("div",{className:"p-5 rounded-xl bg-blue-500/5 border border-blue-500/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-blue-600 mb-2",children:"💡 Tips"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Use Connected Mode to match CI rules"}),s.jsx("li",{children:"• Configure token as env variable"}),s.jsx("li",{children:"• Enable auto-analysis on save"}),s.jsx("li",{children:"• Review issue descriptions to learn"}),s.jsx("li",{children:"• Use keyboard shortcuts for quick fixes"})]})]})]})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"jenkins-integration",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Jenkins Integration"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Automate code quality checks in your CI/CD pipeline."})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsx(O,{title:"Complete SonarQube Pipeline Integration",language:"groovy",code:`pipeline {
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
}`}),s.jsx(O,{title:"Pull Request Analysis (Branch Analysis)",language:"groovy",code:`stage('SonarQube PR Analysis') {
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
}`})]})]}),s.jsx(F,{}),s.jsxs("section",{id:"best-practices",className:"scroll-mt-28 space-y-12",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),s.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Best Practices"}),s.jsx("p",{className:"text-lg text-muted-foreground",children:"Maximize code quality with these guidelines."})]}),s.jsx("div",{className:"grid gap-6",children:[{title:"Fix as You Code",icon:_s,color:"text-red-500",items:["Use SonarLint in your IDE for real-time feedback","Fix issues immediately rather than accumulating debt","Don't merge code that fails Quality Gate","Prioritize security vulnerabilities and bugs","Address code smells during refactoring"]},{title:"Test Coverage",icon:cd,color:"text-emerald-500",items:["Maintain minimum 80% coverage on new code","Focus on meaningful tests, not just coverage numbers","Test edge cases and error conditions","Include integration tests for critical paths","Review coverage reports regularly"]},{title:"Security First",icon:Xt,color:"text-amber-500",items:["Review all security hotspots immediately","Never ignore security vulnerabilities","Use secure coding patterns consistently","Keep dependencies updated","Follow OWASP guidelines"]},{title:"Technical Debt Management",icon:Na,color:"text-purple-500",items:["Address new issues before merging","Allocate 20% of sprint time to debt reduction","Set debt reduction goals per release","Focus on high-impact areas first","Track debt trends over time"]}].map((n,i)=>s.jsxs(fe,{className:"glass shadow-sm",children:[s.jsx(je,{children:s.jsxs(Ne,{className:"text-lg flex items-center gap-2",children:[s.jsx(n.icon,{className:`h-5 w-5 ${n.color}`}),n.title]})}),s.jsx(ye,{children:s.jsx("ul",{className:"grid md:grid-cols-2 gap-2",children:n.items.map((a,o)=>s.jsxs("li",{className:"flex items-start gap-2 text-sm text-muted-foreground",children:[s.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0"}),a]},o))})})]},i))}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ DO"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Run analysis on every PR"}),s.jsx("li",{children:"• Block merges on Quality Gate failure"}),s.jsx("li",{children:"• Use SonarLint connected mode"}),s.jsx("li",{children:"• Review reports regularly"}),s.jsx("li",{children:"• Set team quality goals"})]})]}),s.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[s.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ DON'T"}),s.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[s.jsx("li",{children:"• Disable Quality Gate for deadlines"}),s.jsx("li",{children:"• Ignore security vulnerabilities"}),s.jsx("li",{children:"• Add exclusions to hide issues"}),s.jsx("li",{children:'• Skip analysis for "small" changes'}),s.jsx("li",{children:"• Blame developers for legacy issues"})]})]})]})]}),s.jsx(hn,{previous:{title:"Jenkins CI/CD",href:"/jenkins-guideline"},next:{title:"GitHub Workflow",href:"/github-axa-usage"}})]}),s.jsx("aside",{className:"hidden lg:block w-64 flex-shrink-0",children:s.jsxs("div",{className:"sticky top-28 space-y-4",children:[s.jsx("h4",{className:"font-bold text-sm text-muted-foreground uppercase tracking-wide",children:"On This Page"}),s.jsx("nav",{className:"space-y-1",children:vp.map(n=>s.jsxs("a",{href:`#${n.id}`,className:`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${e===n.id?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[s.jsx(n.icon,{className:"h-4 w-4"}),n.title]},n.id))})]})})]})]})},sA=()=>{const[e]=Yv(),t=e.get("q")||"",[r,n]=m.useState([]),{search:i,loading:a,isReady:o}=hx();m.useEffect(()=>{(async()=>{if(t&&o){const d=await i(t);n(d)}})()},[t,o,i]);const l=[{label:"Home",href:"/"},{label:"Search Results"}];return s.jsxs(ht,{children:[s.jsx(Nt,{title:`Search Results for "${t}"`,subtitle:o?a?"Searching...":r.length>0?`Found ${r.length} matches for your search.`:"We couldn't find any documents matching your search.":"Initializing search engine...",breadcrumbs:l}),s.jsx("div",{className:"py-12 px-4",children:s.jsx("div",{className:"space-y-6",children:a?s.jsxs("div",{className:"flex flex-col items-center justify-center py-20 opacity-50",children:[s.jsx("div",{className:"animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full mb-4"}),s.jsx("p",{children:"Searching documentation..."})]}):r.length>0?r.map((c,d)=>{var u;return s.jsx(ze,{to:c.url,className:"block group",children:s.jsx(fe,{className:"transition-all hover:border-primary/50 hover:shadow-md group-hover:-translate-y-1",children:s.jsxs(je,{className:"flex flex-row items-center gap-4 space-y-0 text-left",children:[s.jsx("div",{className:"bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0",children:s.jsx(il,{className:"h-5 w-5"})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("div",{className:"flex items-center justify-between mb-1 gap-4",children:s.jsx(Ne,{className:"text-xl group-hover:text-primary transition-colors line-clamp-1",children:(u=c.meta)==null?void 0:u.title})}),s.jsx("p",{className:"text-muted-foreground line-clamp-3 text-sm",dangerouslySetInnerHTML:{__html:c.excerpt}})]}),s.jsx(pr,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0"})]})})},c.url+d)}):t&&!a?s.jsxs("div",{className:"text-center py-20 bg-muted/20 rounded-2xl border-2 border-dashed",children:[s.jsx(sr,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"No results found"}),s.jsx("p",{className:"text-muted-foreground mb-6",children:"Try searching for different keywords or browse our guides."}),s.jsx(ke,{asChild:!0,variant:"outline",children:s.jsx(ze,{to:"/dotnet-developer-guideline",children:"Browse documentation"})})]}):!t&&s.jsx("div",{className:"text-center py-20",children:s.jsx("p",{className:"text-muted-foreground",children:"Enter a search term above to find what you're looking for."})})})})]})},rA=[{path:"/",element:s.jsx(nS,{}),children:[{index:!0,element:s.jsx(jP,{})},{path:"dotnet-developer-guideline",element:s.jsx(EP,{})},{path:"react-developer-guideline",element:s.jsx(kP,{})},{path:"java-developer-guideline",element:s.jsx(PP,{})},{path:"python-developer-guideline",element:s.jsx(AP,{})},{path:"flutter-developer-guideline",element:s.jsx(DP,{})},{path:"clean-architecture",element:s.jsx(KP,{})},{path:"coding-standard",element:s.jsx(YP,{})},{path:"github-axa-usage",element:s.jsx(XP,{})},{path:"openshift-guideline",element:s.jsx(JP,{})},{path:"jenkins-guideline",element:s.jsx(eA,{})},{path:"sonarqube-guideline",element:s.jsx(tA,{})},{path:"search",element:s.jsx(sA,{})}]}];mb({routes:rA,basename:"/aii/developer-guideline/"});export{dy as a,Wo as g,jp as r};
