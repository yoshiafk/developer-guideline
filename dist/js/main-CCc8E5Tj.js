function km(e,s){for(var n=0;n<s.length;n++){const r=s[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Ko(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ua={exports:{}},Rr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc;function ry(){if(Cc)return Rr;Cc=1;var e=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function n(r,i,a){var o=null;if(a!==void 0&&(o=""+a),i.key!==void 0&&(o=""+i.key),"key"in i){a={};for(var l in i)l!=="key"&&(a[l]=i[l])}else a=i;return i=a.ref,{$$typeof:e,type:r,key:o,ref:i!==void 0?i:null,props:a}}return Rr.Fragment=s,Rr.jsx=n,Rr.jsxs=n,Rr}var Tc;function ny(){return Tc||(Tc=1,ua.exports=ry()),ua.exports}var t=ny(),ma={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc;function iy(){if(kc)return le;kc=1;var e=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.consumer"),o=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),h=Symbol.iterator;function f(T){return T===null||typeof T!="object"?null:(T=h&&T[h]||T["@@iterator"],typeof T=="function"?T:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,y={};function v(T,O,z){this.props=T,this.context=O,this.refs=y,this.updater=z||g}v.prototype.isReactComponent={},v.prototype.setState=function(T,O){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,O,"setState")},v.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function b(){}b.prototype=v.prototype;function N(T,O,z){this.props=T,this.context=O,this.refs=y,this.updater=z||g}var S=N.prototype=new b;S.constructor=N,x(S,v.prototype),S.isPureReactComponent=!0;var E=Array.isArray;function A(){}var j={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function M(T,O,z){var H=z.ref;return{$$typeof:e,type:T,key:O,ref:H!==void 0?H:null,props:z}}function L(T,O){return M(T.type,O,T.props)}function $(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function Y(T){var O={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(z){return O[z]})}var ie=/\/+/g;function V(T,O){return typeof T=="object"&&T!==null&&T.key!=null?Y(""+T.key):O.toString(36)}function re(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(A,A):(T.status="pending",T.then(function(O){T.status==="pending"&&(T.status="fulfilled",T.value=O)},function(O){T.status==="pending"&&(T.status="rejected",T.reason=O)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function Z(T,O,z,H,ne){var de=typeof T;(de==="undefined"||de==="boolean")&&(T=null);var te=!1;if(T===null)te=!0;else switch(de){case"bigint":case"string":case"number":te=!0;break;case"object":switch(T.$$typeof){case e:case s:te=!0;break;case u:return te=T._init,Z(te(T._payload),O,z,H,ne)}}if(te)return ne=ne(T),te=H===""?"."+V(T,0):H,E(ne)?(z="",te!=null&&(z=te.replace(ie,"$&/")+"/"),Z(ne,O,z,"",function(St){return St})):ne!=null&&($(ne)&&(ne=L(ne,z+(ne.key==null||T&&T.key===ne.key?"":(""+ne.key).replace(ie,"$&/")+"/")+te)),O.push(ne)),1;te=0;var $e=H===""?".":H+":";if(E(T))for(var Pe=0;Pe<T.length;Pe++)H=T[Pe],de=$e+V(H,Pe),te+=Z(H,O,z,de,ne);else if(Pe=f(T),typeof Pe=="function")for(T=Pe.call(T),Pe=0;!(H=T.next()).done;)H=H.value,de=$e+V(H,Pe++),te+=Z(H,O,z,de,ne);else if(de==="object"){if(typeof T.then=="function")return Z(re(T),O,z,H,ne);throw O=String(T),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return te}function J(T,O,z){if(T==null)return T;var H=[],ne=0;return Z(T,H,"","",function(de){return O.call(z,de,ne++)}),H}function D(T){if(T._status===-1){var O=T._result;O=O(),O.then(function(z){(T._status===0||T._status===-1)&&(T._status=1,T._result=z)},function(z){(T._status===0||T._status===-1)&&(T._status=2,T._result=z)}),T._status===-1&&(T._status=0,T._result=O)}if(T._status===1)return T._result.default;throw T._result}var me=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},Te={map:J,forEach:function(T,O,z){J(T,function(){O.apply(this,arguments)},z)},count:function(T){var O=0;return J(T,function(){O++}),O},toArray:function(T){return J(T,function(O){return O})||[]},only:function(T){if(!$(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return le.Activity=m,le.Children=Te,le.Component=v,le.Fragment=n,le.Profiler=i,le.PureComponent=N,le.StrictMode=r,le.Suspense=c,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,le.__COMPILER_RUNTIME={__proto__:null,c:function(T){return j.H.useMemoCache(T)}},le.cache=function(T){return function(){return T.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(T,O,z){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var H=x({},T.props),ne=T.key;if(O!=null)for(de in O.key!==void 0&&(ne=""+O.key),O)!C.call(O,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&O.ref===void 0||(H[de]=O[de]);var de=arguments.length-2;if(de===1)H.children=z;else if(1<de){for(var te=Array(de),$e=0;$e<de;$e++)te[$e]=arguments[$e+2];H.children=te}return M(T.type,ne,H)},le.createContext=function(T){return T={$$typeof:o,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:a,_context:T},T},le.createElement=function(T,O,z){var H,ne={},de=null;if(O!=null)for(H in O.key!==void 0&&(de=""+O.key),O)C.call(O,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(ne[H]=O[H]);var te=arguments.length-2;if(te===1)ne.children=z;else if(1<te){for(var $e=Array(te),Pe=0;Pe<te;Pe++)$e[Pe]=arguments[Pe+2];ne.children=$e}if(T&&T.defaultProps)for(H in te=T.defaultProps,te)ne[H]===void 0&&(ne[H]=te[H]);return M(T,de,ne)},le.createRef=function(){return{current:null}},le.forwardRef=function(T){return{$$typeof:l,render:T}},le.isValidElement=$,le.lazy=function(T){return{$$typeof:u,_payload:{_status:-1,_result:T},_init:D}},le.memo=function(T,O){return{$$typeof:d,type:T,compare:O===void 0?null:O}},le.startTransition=function(T){var O=j.T,z={};j.T=z;try{var H=T(),ne=j.S;ne!==null&&ne(z,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(A,me)}catch(de){me(de)}finally{O!==null&&z.types!==null&&(O.types=z.types),j.T=O}},le.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},le.use=function(T){return j.H.use(T)},le.useActionState=function(T,O,z){return j.H.useActionState(T,O,z)},le.useCallback=function(T,O){return j.H.useCallback(T,O)},le.useContext=function(T){return j.H.useContext(T)},le.useDebugValue=function(){},le.useDeferredValue=function(T,O){return j.H.useDeferredValue(T,O)},le.useEffect=function(T,O){return j.H.useEffect(T,O)},le.useEffectEvent=function(T){return j.H.useEffectEvent(T)},le.useId=function(){return j.H.useId()},le.useImperativeHandle=function(T,O,z){return j.H.useImperativeHandle(T,O,z)},le.useInsertionEffect=function(T,O){return j.H.useInsertionEffect(T,O)},le.useLayoutEffect=function(T,O){return j.H.useLayoutEffect(T,O)},le.useMemo=function(T,O){return j.H.useMemo(T,O)},le.useOptimistic=function(T,O){return j.H.useOptimistic(T,O)},le.useReducer=function(T,O,z){return j.H.useReducer(T,O,z)},le.useRef=function(T){return j.H.useRef(T)},le.useState=function(T){return j.H.useState(T)},le.useSyncExternalStore=function(T,O,z){return j.H.useSyncExternalStore(T,O,z)},le.useTransition=function(){return j.H.useTransition()},le.version="19.2.3",le}var Ec;function Em(){return Ec||(Ec=1,ma.exports=iy()),ma.exports}var p=Em();const Je=Ko(p),Ei=km({__proto__:null,default:Je},[p]);var pa={exports:{}},ha,Rc;function ay(){if(Rc)return ha;Rc=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ha=e,ha}var fa,Pc;function oy(){if(Pc)return fa;Pc=1;var e=ay();function s(){}function n(){}return n.resetWarningCache=s,fa=function(){function r(o,l,c,d,u,m){if(m!==e){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}r.isRequired=r;function i(){return r}var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:s};return a.PropTypes=a,a},fa}var Ac;function ly(){return Ac||(Ac=1,pa.exports=oy()()),pa.exports}var cy=ly();const be=Ko(cy);function dy(e,s){e.prototype=Object.create(s.prototype),e.prototype.constructor=e,to(e,s)}function to(e,s){return to=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},to(e,s)}var He={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},uy={rel:["amphtml","canonical","alternate"]},my={type:["application/ld+json"]},py={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]};Object.keys(He).map(function(e){return He[e]});var ni={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"};Object.keys(ni).reduce(function(e,s){return e[ni[s]]=s,e},{});var hy=function(e){return Array.isArray(e)?e.join(""):e},xa=function(e,s){return Array.isArray(e)?e.reduce(function(n,r){return(function(i,a){for(var o=Object.keys(i),l=0;l<o.length;l+=1)if(a[o[l]]&&a[o[l]].includes(i[o[l]]))return!0;return!1})(r,s)?n.priority.push(r):n.default.push(r),n},{priority:[],default:[]}):{default:e}},fy=[He.NOSCRIPT,He.SCRIPT,He.STYLE],ga=function(e,s){return s===void 0&&(s=!0),s===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Dc=function(e){return Object.keys(e).reduce(function(s,n){var r=e[n]!==void 0?n+'="'+e[n]+'"':""+n;return s?s+" "+r:r},"")},Ic=function(e,s){return s===void 0&&(s={}),Object.keys(e).reduce(function(n,r){return n[ni[r]||r]=e[r],n},s)},zn=function(e,s){return s.map(function(n,r){var i,a=((i={key:r})["data-rh"]=!0,i);return Object.keys(n).forEach(function(o){var l=ni[o]||o;l==="innerHTML"||l==="cssText"?a.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:a[l]=n[o]}),Je.createElement(e,a)})},gt=function(e,s,n){switch(e){case He.TITLE:return{toComponent:function(){return i=s.titleAttributes,(a={key:r=s.title})["data-rh"]=!0,o=Ic(i,a),[Je.createElement(He.TITLE,o,r)];var r,i,a,o},toString:function(){return(function(r,i,a,o){var l=Dc(a),c=hy(i);return l?"<"+r+' data-rh="true" '+l+">"+ga(c,o)+"</"+r+">":"<"+r+' data-rh="true">'+ga(c,o)+"</"+r+">"})(e,s.title,s.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return Ic(s)},toString:function(){return Dc(s)}};default:return{toComponent:function(){return zn(e,s)},toString:function(){return(function(r,i,a){return i.reduce(function(o,l){var c=Object.keys(l).filter(function(m){return!(m==="innerHTML"||m==="cssText")}).reduce(function(m,h){var f=l[h]===void 0?h:h+'="'+ga(l[h],a)+'"';return m?m+" "+f:f},""),d=l.innerHTML||l.cssText||"",u=fy.indexOf(r)===-1;return o+"<"+r+' data-rh="true" '+c+(u?"/>":">"+d+"</"+r+">")},"")})(e,s,n)}}}},xy=function(e){var s=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.noscriptTags,o=e.styleTags,l=e.title,c=l===void 0?"":l,d=e.titleAttributes,u=e.linkTags,m=e.metaTags,h=e.scriptTags,f={toComponent:function(){},toString:function(){return""}};if(e.prioritizeSeoTags){var g=(function(x){var y=x.linkTags,v=x.scriptTags,b=x.encode,N=xa(x.metaTags,py),S=xa(y,uy),E=xa(v,my);return{priorityMethods:{toComponent:function(){return[].concat(zn(He.META,N.priority),zn(He.LINK,S.priority),zn(He.SCRIPT,E.priority))},toString:function(){return gt(He.META,N.priority,b)+" "+gt(He.LINK,S.priority,b)+" "+gt(He.SCRIPT,E.priority,b)}},metaTags:N.default,linkTags:S.default,scriptTags:E.default}})(e);f=g.priorityMethods,u=g.linkTags,m=g.metaTags,h=g.scriptTags}return{priority:f,base:gt(He.BASE,s,r),bodyAttributes:gt("bodyAttributes",n,r),htmlAttributes:gt("htmlAttributes",i,r),link:gt(He.LINK,u,r),meta:gt(He.META,m,r),noscript:gt(He.NOSCRIPT,a,r),script:gt(He.SCRIPT,h,r),style:gt(He.STYLE,o,r),title:gt(He.TITLE,{title:c,titleAttributes:d},r)}},kn=[],gy=function(e,s){var n=this;s===void 0&&(s=typeof document<"u"),this.instances=[],this.value={setHelmet:function(r){n.context.helmet=r},helmetInstances:{get:function(){return n.canUseDOM?kn:n.instances},add:function(r){(n.canUseDOM?kn:n.instances).push(r)},remove:function(r){var i=(n.canUseDOM?kn:n.instances).indexOf(r);(n.canUseDOM?kn:n.instances).splice(i,1)}}},this.context=e,this.canUseDOM=s,s||(e.helmet=xy({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},yy=Je.createContext({}),vy=be.shape({setHelmet:be.func,helmetInstances:be.shape({get:be.func,add:be.func,remove:be.func})}),by=typeof document<"u",Or=(function(e){function s(n){var r;return(r=e.call(this,n)||this).helmetData=new gy(r.props.context,s.canUseDOM),r}return dy(s,e),s.prototype.render=function(){return Je.createElement(yy.Provider,{value:this.helmetData.value},this.props.children)},s})(p.Component);Or.canUseDOM=by,Or.propTypes={context:be.shape({helmet:be.shape()}),children:be.node.isRequired},Or.defaultProps={context:{}},Or.displayName="HelmetProvider";vy.isRequired;be.object,be.object,be.oneOfType([be.arrayOf(be.node),be.node]),be.string,be.bool,be.bool,be.object,be.arrayOf(be.object),be.arrayOf(be.object),be.arrayOf(be.object),be.func,be.arrayOf(be.object),be.arrayOf(be.object),be.string,be.object,be.string,be.bool,be.object;var ya={exports:{}},st={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc;function jy(){if(Mc)return st;Mc=1;var e=Em();function s(c){var d="https://react.dev/errors/"+c;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var u=2;u<arguments.length;u++)d+="&args[]="+encodeURIComponent(arguments[u])}return"Minified React error #"+c+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(s(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},i=Symbol.for("react.portal");function a(c,d,u){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:i,key:m==null?null:""+m,children:c,containerInfo:d,implementation:u}}var o=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(c,d){if(c==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,st.createPortal=function(c,d){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(s(299));return a(c,d,null,u)},st.flushSync=function(c){var d=o.T,u=r.p;try{if(o.T=null,r.p=2,c)return c()}finally{o.T=d,r.p=u,r.d.f()}},st.preconnect=function(c,d){typeof c=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(c,d))},st.prefetchDNS=function(c){typeof c=="string"&&r.d.D(c)},st.preinit=function(c,d){if(typeof c=="string"&&d&&typeof d.as=="string"){var u=d.as,m=l(u,d.crossOrigin),h=typeof d.integrity=="string"?d.integrity:void 0,f=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;u==="style"?r.d.S(c,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:m,integrity:h,fetchPriority:f}):u==="script"&&r.d.X(c,{crossOrigin:m,integrity:h,fetchPriority:f,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},st.preinitModule=function(c,d){if(typeof c=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var u=l(d.as,d.crossOrigin);r.d.M(c,{crossOrigin:u,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(c)},st.preload=function(c,d){if(typeof c=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var u=d.as,m=l(u,d.crossOrigin);r.d.L(c,u,{crossOrigin:m,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},st.preloadModule=function(c,d){if(typeof c=="string")if(d){var u=l(d.as,d.crossOrigin);r.d.m(c,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:u,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(c)},st.requestFormReset=function(c){r.d.r(c)},st.unstable_batchedUpdates=function(c,d){return c(d)},st.useFormState=function(c,d,u){return o.H.useFormState(c,d,u)},st.useFormStatus=function(){return o.H.useHostTransitionStatus()},st.version="19.2.3",st}var _c;function Ny(){if(_c)return ya.exports;_c=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(s){console.error(s)}}return e(),ya.exports=jy(),ya.exports}var nn=Ny();const Rm=Ko(nn),Pm=km({__proto__:null,default:Rm},[nn]);/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ae(){return Ae=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ae.apply(this,arguments)}var We;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(We||(We={}));const Oc="popstate";function wy(e){e===void 0&&(e={});function s(r,i){let{pathname:a,search:o,hash:l}=r.location;return qr("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bs(i)}return Cy(s,n,null,e)}function xe(e,s){if(e===!1||e===null||typeof e>"u")throw new Error(s)}function Fs(e,s){if(!e){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Sy(){return Math.random().toString(36).substr(2,8)}function Lc(e,s){return{usr:e.state,key:e.key,idx:s}}function qr(e,s,n,r){return n===void 0&&(n=null),Ae({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof s=="string"?vs(s):s,{state:n,key:s&&s.key||r||Sy()})}function Bs(e){let{pathname:s="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(s+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(s+=r.charAt(0)==="#"?r:"#"+r),s}function vs(e){let s={};if(e){let n=e.indexOf("#");n>=0&&(s.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(s.search=e.substr(r),e=e.substr(0,r)),e&&(s.pathname=e)}return s}function Cy(e,s,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=We.Pop,c=null,d=u();d==null&&(d=0,o.replaceState(Ae({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function m(){l=We.Pop;let y=u(),v=y==null?null:y-d;d=y,c&&c({action:l,location:x.location,delta:v})}function h(y,v){l=We.Push;let b=qr(x.location,y,v);d=u()+1;let N=Lc(b,d),S=x.createHref(b);try{o.pushState(N,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}a&&c&&c({action:l,location:x.location,delta:1})}function f(y,v){l=We.Replace;let b=qr(x.location,y,v);d=u();let N=Lc(b,d),S=x.createHref(b);o.replaceState(N,"",S),a&&c&&c({action:l,location:x.location,delta:0})}function g(y){let v=i.location.origin!=="null"?i.location.origin:i.location.href,b=typeof y=="string"?y:Bs(y);return b=b.replace(/ $/,"%20"),xe(v,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,v)}let x={get action(){return l},get location(){return e(i,o)},listen(y){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Oc,m),c=y,()=>{i.removeEventListener(Oc,m),c=null}},createHref(y){return s(i,y)},createURL:g,encodeLocation(y){let v=g(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:f,go(y){return o.go(y)}};return x}var ke;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ke||(ke={}));const Ty=new Set(["lazy","caseSensitive","path","id","index","children"]);function ky(e){return e.index===!0}function ii(e,s,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,a)=>{let o=[...n,String(a)],l=typeof i.id=="string"?i.id:o.join("-");if(xe(i.index!==!0||!i.children,"Cannot specify children on an index route"),xe(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),ky(i)){let c=Ae({},i,s(i),{id:l});return r[l]=c,c}else{let c=Ae({},i,s(i),{id:l,children:void 0});return r[l]=c,i.children&&(c.children=ii(i.children,s,o,r)),c}})}function us(e,s,n){return n===void 0&&(n="/"),Hn(e,s,n,!1)}function Hn(e,s,n,r){let i=typeof s=="string"?vs(s):s,a=Zt(i.pathname||"/",n);if(a==null)return null;let o=Am(e);Ry(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let d=Vy(a);l=Fy(o[c],d,r)}return l}function Ey(e,s){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:s[n.id],handle:n.handle}}function Am(e,s,n,r){s===void 0&&(s=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(xe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Jt([r,c.relativePath]),u=n.concat(c);a.children&&a.children.length>0&&(xe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Am(a.children,s,u,d)),!(a.path==null&&!a.index)&&s.push({path:d,score:Oy(d,a.index),routesMeta:u})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let c of Dm(a.path))i(a,o,c)}),s}function Dm(e){let s=e.split("/");if(s.length===0)return[];let[n,...r]=s,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Dm(r.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),i&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Ry(e){e.sort((s,n)=>s.score!==n.score?n.score-s.score:Ly(s.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Py=/^:[\w-]+$/,Ay=3,Dy=2,Iy=1,My=10,_y=-2,Fc=e=>e==="*";function Oy(e,s){let n=e.split("/"),r=n.length;return n.some(Fc)&&(r+=_y),s&&(r+=Dy),n.filter(i=>!Fc(i)).reduce((i,a)=>i+(Py.test(a)?Ay:a===""?Iy:My),r)}function Ly(e,s){return e.length===s.length&&e.slice(0,-1).every((r,i)=>r===s[i])?e[e.length-1]-s[s.length-1]:0}function Fy(e,s,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],d=l===r.length-1,u=a==="/"?s:s.slice(a.length)||"/",m=ai({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),h=c.route;if(!m&&d&&n&&!r[r.length-1].route.index&&(m=ai({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},u)),!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Jt([a,m.pathname]),pathnameBase:Hy(Jt([a,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(a=Jt([a,m.pathnameBase]))}return o}function ai(e,s){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=By(e.path,e.caseSensitive,e.end),i=s.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,u,m)=>{let{paramName:h,isOptional:f}=u;if(h==="*"){let x=l[m]||"";o=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const g=l[m];return f&&!g?d[h]=void 0:d[h]=(g||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:o,pattern:e}}function By(e,s,n){s===void 0&&(s=!1),n===void 0&&(n=!0),Fs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,s?void 0:"i"),r]}function Vy(e){try{return e.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Fs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),e}}function Zt(e,s){if(s==="/")return e;if(!e.toLowerCase().startsWith(s.toLowerCase()))return null;let n=s.endsWith("/")?s.length-1:s.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Uy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$y=e=>Uy.test(e);function zy(e,s){s===void 0&&(s="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?vs(e):e,a;if(n)if($y(n))a=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Fs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?a=Bc(n.substring(1),"/"):a=Bc(n,s)}else a=s;return{pathname:a,search:Wy(r),hash:Gy(i)}}function Bc(e,s){let n=s.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function va(e,s,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Im(e){return e.filter((s,n)=>n===0||s.route.path&&s.route.path.length>0)}function Yo(e,s){let n=Im(e);return s?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Xo(e,s,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=vs(e):(i=Ae({},e),xe(!i.pathname||!i.pathname.includes("?"),va("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),va("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),va("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(o==null)l=n;else{let m=s.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),m-=1;i.pathname=h.join("/")}l=m>=0?s[m]:"/"}let c=zy(i,l),d=o&&o!=="/"&&o.endsWith("/"),u=(a||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Jt=e=>e.join("/").replace(/\/\/+/g,"/"),Hy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class oi{constructor(s,n,r,i){i===void 0&&(i=!1),this.status=s,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Kr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mm=["post","put","patch","delete"],qy=new Set(Mm),Ky=["get",...Mm],Yy=new Set(Ky),Xy=new Set([301,302,303,307,308]),Jy=new Set([307,308]),ba={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Qy={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Pr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Jo=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zy=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),_m="remix-router-transitions";function ev(e){const s=e.window?e.window:typeof window<"u"?window:void 0,n=typeof s<"u"&&typeof s.document<"u"&&typeof s.document.createElement<"u",r=!n;xe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let w=e.detectErrorBoundary;i=R=>({hasErrorBoundary:w(R)})}else i=Zy;let a={},o=ii(e.routes,i,void 0,a),l,c=e.basename||"/",d=e.dataStrategy||nv,u=e.patchRoutesOnNavigation,m=Ae({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),h=null,f=new Set,g=null,x=null,y=null,v=e.hydrationData!=null,b=us(o,e.history.location,c),N=!1,S=null;if(b==null&&!u){let w=lt(404,{pathname:e.history.location.pathname}),{matches:R,route:P}=Xc(o);b=R,S={[P.id]:w}}b&&!e.hydrationData&&wn(b,o,e.history.location.pathname).active&&(b=null);let E;if(b)if(b.some(w=>w.route.lazy))E=!1;else if(!b.some(w=>w.route.loader))E=!0;else if(m.v7_partialHydration){let w=e.hydrationData?e.hydrationData.loaderData:null,R=e.hydrationData?e.hydrationData.errors:null;if(R){let P=b.findIndex(F=>R[F.route.id]!==void 0);E=b.slice(0,P+1).every(F=>!ro(F.route,w,R))}else E=b.every(P=>!ro(P.route,w,R))}else E=e.hydrationData!=null;else if(E=!1,b=[],m.v7_partialHydration){let w=wn(null,o,e.history.location.pathname);w.active&&w.matches&&(N=!0,b=w.matches)}let A,j={historyAction:e.history.action,location:e.history.location,matches:b,initialized:E,navigation:ba,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||S,fetchers:new Map,blockers:new Map},C=We.Pop,M=!1,L,$=!1,Y=new Map,ie=null,V=!1,re=!1,Z=[],J=new Set,D=new Map,me=0,Te=-1,T=new Map,O=new Set,z=new Map,H=new Map,ne=new Set,de=new Map,te=new Map,$e;function Pe(){if(h=e.history.listen(w=>{let{action:R,location:P,delta:F}=w;if($e){$e(),$e=void 0;return}Fs(te.size===0||F!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let U=jc({currentLocation:j.location,nextLocation:P,historyAction:R});if(U&&F!=null){let se=new Promise(oe=>{$e=oe});e.history.go(F*-1),Nn(U,{state:"blocked",location:P,proceed(){Nn(U,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),se.then(()=>e.history.go(F))},reset(){let oe=new Map(j.blockers);oe.set(U,Pr),Ie({blockers:oe})}});return}return qt(R,P)}),n){yv(s,Y);let w=()=>vv(s,Y);s.addEventListener("pagehide",w),ie=()=>s.removeEventListener("pagehide",w)}return j.initialized||qt(We.Pop,j.location,{initialHydration:!0}),A}function St(){h&&h(),ie&&ie(),f.clear(),L&&L.abort(),j.fetchers.forEach((w,R)=>jn(R)),j.blockers.forEach((w,R)=>bc(R))}function rs(w){return f.add(w),()=>f.delete(w)}function Ie(w,R){R===void 0&&(R={}),j=Ae({},j,w);let P=[],F=[];m.v7_fetcherPersist&&j.fetchers.forEach((U,se)=>{U.state==="idle"&&(ne.has(se)?F.push(se):P.push(se))}),ne.forEach(U=>{!j.fetchers.has(U)&&!D.has(U)&&F.push(U)}),[...f].forEach(U=>U(j,{deletedFetchers:F,viewTransitionOpts:R.viewTransitionOpts,flushSync:R.flushSync===!0})),m.v7_fetcherPersist?(P.forEach(U=>j.fetchers.delete(U)),F.forEach(U=>jn(U))):F.forEach(U=>ne.delete(U))}function xt(w,R,P){var F,U;let{flushSync:se}=P===void 0?{}:P,oe=j.actionData!=null&&j.navigation.formMethod!=null&&kt(j.navigation.formMethod)&&j.navigation.state==="loading"&&((F=w.state)==null?void 0:F._isRedirect)!==!0,X;R.actionData?Object.keys(R.actionData).length>0?X=R.actionData:X=null:oe?X=j.actionData:X=null;let Q=R.loaderData?Kc(j.loaderData,R.loaderData,R.matches||[],R.errors):j.loaderData,G=j.blockers;G.size>0&&(G=new Map(G),G.forEach((je,et)=>G.set(et,Pr)));let ee=M===!0||j.navigation.formMethod!=null&&kt(j.navigation.formMethod)&&((U=w.state)==null?void 0:U._isRedirect)!==!0;l&&(o=l,l=void 0),V||C===We.Pop||(C===We.Push?e.history.push(w,w.state):C===We.Replace&&e.history.replace(w,w.state));let ue;if(C===We.Pop){let je=Y.get(j.location.pathname);je&&je.has(w.pathname)?ue={currentLocation:j.location,nextLocation:w}:Y.has(w.pathname)&&(ue={currentLocation:w,nextLocation:j.location})}else if($){let je=Y.get(j.location.pathname);je?je.add(w.pathname):(je=new Set([w.pathname]),Y.set(j.location.pathname,je)),ue={currentLocation:j.location,nextLocation:w}}Ie(Ae({},R,{actionData:X,loaderData:Q,historyAction:C,location:w,initialized:!0,navigation:ba,revalidation:"idle",restoreScrollPosition:wc(w,R.matches||j.matches),preventScrollReset:ee,blockers:G}),{viewTransitionOpts:ue,flushSync:se===!0}),C=We.Pop,M=!1,$=!1,V=!1,re=!1,Z=[]}async function Sr(w,R){if(typeof w=="number"){e.history.go(w);return}let P=so(j.location,j.matches,c,m.v7_prependBasename,w,m.v7_relativeSplatPath,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:F,submission:U,error:se}=Vc(m.v7_normalizeFormMethod,!1,P,R),oe=j.location,X=qr(j.location,F,R&&R.state);X=Ae({},X,e.history.encodeLocation(X));let Q=R&&R.replace!=null?R.replace:void 0,G=We.Push;Q===!0?G=We.Replace:Q===!1||U!=null&&kt(U.formMethod)&&U.formAction===j.location.pathname+j.location.search&&(G=We.Replace);let ee=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,ue=(R&&R.flushSync)===!0,je=jc({currentLocation:oe,nextLocation:X,historyAction:G});if(je){Nn(je,{state:"blocked",location:X,proceed(){Nn(je,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),Sr(w,R)},reset(){let et=new Map(j.blockers);et.set(je,Pr),Ie({blockers:et})}});return}return await qt(G,X,{submission:U,pendingError:se,preventScrollReset:ee,replace:R&&R.replace,enableViewTransition:R&&R.viewTransition,flushSync:ue})}function na(){if(oa(),Ie({revalidation:"loading"}),j.navigation.state!=="submitting"){if(j.navigation.state==="idle"){qt(j.historyAction,j.location,{startUninterruptedRevalidation:!0});return}qt(C||j.historyAction,j.navigation.location,{overrideNavigation:j.navigation,enableViewTransition:$===!0})}}async function qt(w,R,P){L&&L.abort(),L=null,C=w,V=(P&&P.startUninterruptedRevalidation)===!0,Zg(j.location,j.matches),M=(P&&P.preventScrollReset)===!0,$=(P&&P.enableViewTransition)===!0;let F=l||o,U=P&&P.overrideNavigation,se=P!=null&&P.initialHydration&&j.matches&&j.matches.length>0&&!N?j.matches:us(F,R,c),oe=(P&&P.flushSync)===!0;if(se&&j.initialized&&!re&&dv(j.location,R)&&!(P&&P.submission&&kt(P.submission.formMethod))){xt(R,{matches:se},{flushSync:oe});return}let X=wn(se,F,R.pathname);if(X.active&&X.matches&&(se=X.matches),!se){let{error:Ee,notFoundMatches:we,route:Le}=la(R.pathname);xt(R,{matches:we,loaderData:{},errors:{[Le.id]:Ee}},{flushSync:oe});return}L=new AbortController;let Q=qs(e.history,R,L.signal,P&&P.submission),G;if(P&&P.pendingError)G=[Ds(se).route.id,{type:ke.error,error:P.pendingError}];else if(P&&P.submission&&kt(P.submission.formMethod)){let Ee=await ia(Q,R,P.submission,se,X.active,{replace:P.replace,flushSync:oe});if(Ee.shortCircuited)return;if(Ee.pendingActionResult){let[we,Le]=Ee.pendingActionResult;if(pt(Le)&&Kr(Le.error)&&Le.error.status===404){L=null,xt(R,{matches:Ee.matches,loaderData:{},errors:{[we]:Le.error}});return}}se=Ee.matches||se,G=Ee.pendingActionResult,U=ja(R,P.submission),oe=!1,X.active=!1,Q=qs(e.history,Q.url,Q.signal)}let{shortCircuited:ee,matches:ue,loaderData:je,errors:et}=await aa(Q,R,se,X.active,U,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,P&&P.initialHydration===!0,oe,G);ee||(L=null,xt(R,Ae({matches:ue||se},Yc(G),{loaderData:je,errors:et})))}async function ia(w,R,P,F,U,se){se===void 0&&(se={}),oa();let oe=xv(R,P);if(Ie({navigation:oe},{flushSync:se.flushSync===!0}),U){let G=await Sn(F,R.pathname,w.signal);if(G.type==="aborted")return{shortCircuited:!0};if(G.type==="error"){let ee=Ds(G.partialMatches).route.id;return{matches:G.partialMatches,pendingActionResult:[ee,{type:ke.error,error:G.error}]}}else if(G.matches)F=G.matches;else{let{notFoundMatches:ee,error:ue,route:je}=la(R.pathname);return{matches:ee,pendingActionResult:[je.id,{type:ke.error,error:ue}]}}}let X,Q=Lr(F,R);if(!Q.route.action&&!Q.route.lazy)X={type:ke.error,error:lt(405,{method:w.method,pathname:R.pathname,routeId:Q.route.id})};else if(X=(await Cr("action",j,w,[Q],F,null))[Q.route.id],w.signal.aborted)return{shortCircuited:!0};if(Is(X)){let G;return se&&se.replace!=null?G=se.replace:G=Wc(X.response.headers.get("Location"),new URL(w.url),c,e.history)===j.location.pathname+j.location.search,await ks(w,X,!0,{submission:P,replace:G}),{shortCircuited:!0}}if(ms(X))throw lt(400,{type:"defer-action"});if(pt(X)){let G=Ds(F,Q.route.id);return(se&&se.replace)!==!0&&(C=We.Push),{matches:F,pendingActionResult:[G.route.id,X]}}return{matches:F,pendingActionResult:[Q.route.id,X]}}async function aa(w,R,P,F,U,se,oe,X,Q,G,ee){let ue=U||ja(R,se),je=se||oe||Qc(ue),et=!V&&(!m.v7_partialHydration||!Q);if(F){if(et){let Fe=Ts(ee);Ie(Ae({navigation:ue},Fe!==void 0?{actionData:Fe}:{}),{flushSync:G})}let Ne=await Sn(P,R.pathname,w.signal);if(Ne.type==="aborted")return{shortCircuited:!0};if(Ne.type==="error"){let Fe=Ds(Ne.partialMatches).route.id;return{matches:Ne.partialMatches,loaderData:{},errors:{[Fe]:Ne.error}}}else if(Ne.matches)P=Ne.matches;else{let{error:Fe,notFoundMatches:Ws,route:Er}=la(R.pathname);return{matches:Ws,loaderData:{},errors:{[Er.id]:Fe}}}}let Ee=l||o,[we,Le]=$c(e.history,j,P,je,R,m.v7_partialHydration&&Q===!0,m.v7_skipActionErrorRevalidation,re,Z,J,ne,z,O,Ee,c,ee);if(ca(Ne=>!(P&&P.some(Fe=>Fe.route.id===Ne))||we&&we.some(Fe=>Fe.route.id===Ne)),Te=++me,we.length===0&&Le.length===0){let Ne=yc();return xt(R,Ae({matches:P,loaderData:{},errors:ee&&pt(ee[1])?{[ee[0]]:ee[1].error}:null},Yc(ee),Ne?{fetchers:new Map(j.fetchers)}:{}),{flushSync:G}),{shortCircuited:!0}}if(et){let Ne={};if(!F){Ne.navigation=ue;let Fe=Ts(ee);Fe!==void 0&&(Ne.actionData=Fe)}Le.length>0&&(Ne.fetchers=Gg(Le)),Ie(Ne,{flushSync:G})}Le.forEach(Ne=>{is(Ne.key),Ne.controller&&D.set(Ne.key,Ne.controller)});let Hs=()=>Le.forEach(Ne=>is(Ne.key));L&&L.signal.addEventListener("abort",Hs);let{loaderResults:Tr,fetcherResults:Yt}=await fc(j,P,we,Le,w);if(w.signal.aborted)return{shortCircuited:!0};L&&L.signal.removeEventListener("abort",Hs),Le.forEach(Ne=>D.delete(Ne.key));let Ot=En(Tr);if(Ot)return await ks(w,Ot.result,!0,{replace:X}),{shortCircuited:!0};if(Ot=En(Yt),Ot)return O.add(Ot.key),await ks(w,Ot.result,!0,{replace:X}),{shortCircuited:!0};let{loaderData:da,errors:kr}=qc(j,P,Tr,ee,Le,Yt,de);de.forEach((Ne,Fe)=>{Ne.subscribe(Ws=>{(Ws||Ne.done)&&de.delete(Fe)})}),m.v7_partialHydration&&Q&&j.errors&&(kr=Ae({},j.errors,kr));let Es=yc(),Cn=vc(Te),Tn=Es||Cn||Le.length>0;return Ae({matches:P,loaderData:da,errors:kr},Tn?{fetchers:new Map(j.fetchers)}:{})}function Ts(w){if(w&&!pt(w[1]))return{[w[0]]:w[1].data};if(j.actionData)return Object.keys(j.actionData).length===0?null:j.actionData}function Gg(w){return w.forEach(R=>{let P=j.fetchers.get(R.key),F=Ar(void 0,P?P.data:void 0);j.fetchers.set(R.key,F)}),new Map(j.fetchers)}function qg(w,R,P,F){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");is(w);let U=(F&&F.flushSync)===!0,se=l||o,oe=so(j.location,j.matches,c,m.v7_prependBasename,P,m.v7_relativeSplatPath,R,F==null?void 0:F.relative),X=us(se,oe,c),Q=wn(X,se,oe);if(Q.active&&Q.matches&&(X=Q.matches),!X){Kt(w,R,lt(404,{pathname:oe}),{flushSync:U});return}let{path:G,submission:ee,error:ue}=Vc(m.v7_normalizeFormMethod,!0,oe,F);if(ue){Kt(w,R,ue,{flushSync:U});return}let je=Lr(X,G),et=(F&&F.preventScrollReset)===!0;if(ee&&kt(ee.formMethod)){Kg(w,R,G,je,X,Q.active,U,et,ee);return}z.set(w,{routeId:R,path:G}),Yg(w,R,G,je,X,Q.active,U,et,ee)}async function Kg(w,R,P,F,U,se,oe,X,Q){oa(),z.delete(w);function G(ze){if(!ze.route.action&&!ze.route.lazy){let Gs=lt(405,{method:Q.formMethod,pathname:P,routeId:R});return Kt(w,R,Gs,{flushSync:oe}),!0}return!1}if(!se&&G(F))return;let ee=j.fetchers.get(w);ns(w,gv(Q,ee),{flushSync:oe});let ue=new AbortController,je=qs(e.history,P,ue.signal,Q);if(se){let ze=await Sn(U,new URL(je.url).pathname,je.signal,w);if(ze.type==="aborted")return;if(ze.type==="error"){Kt(w,R,ze.error,{flushSync:oe});return}else if(ze.matches){if(U=ze.matches,F=Lr(U,P),G(F))return}else{Kt(w,R,lt(404,{pathname:P}),{flushSync:oe});return}}D.set(w,ue);let et=me,we=(await Cr("action",j,je,[F],U,w))[F.route.id];if(je.signal.aborted){D.get(w)===ue&&D.delete(w);return}if(m.v7_fetcherPersist&&ne.has(w)){if(Is(we)||pt(we)){ns(w,os(void 0));return}}else{if(Is(we))if(D.delete(w),Te>et){ns(w,os(void 0));return}else return O.add(w),ns(w,Ar(Q)),ks(je,we,!1,{fetcherSubmission:Q,preventScrollReset:X});if(pt(we)){Kt(w,R,we.error);return}}if(ms(we))throw lt(400,{type:"defer-action"});let Le=j.navigation.location||j.location,Hs=qs(e.history,Le,ue.signal),Tr=l||o,Yt=j.navigation.state!=="idle"?us(Tr,j.navigation.location,c):j.matches;xe(Yt,"Didn't find any matches after fetcher action");let Ot=++me;T.set(w,Ot);let da=Ar(Q,we.data);j.fetchers.set(w,da);let[kr,Es]=$c(e.history,j,Yt,Q,Le,!1,m.v7_skipActionErrorRevalidation,re,Z,J,ne,z,O,Tr,c,[F.route.id,we]);Es.filter(ze=>ze.key!==w).forEach(ze=>{let Gs=ze.key,Sc=j.fetchers.get(Gs),sy=Ar(void 0,Sc?Sc.data:void 0);j.fetchers.set(Gs,sy),is(Gs),ze.controller&&D.set(Gs,ze.controller)}),Ie({fetchers:new Map(j.fetchers)});let Cn=()=>Es.forEach(ze=>is(ze.key));ue.signal.addEventListener("abort",Cn);let{loaderResults:Tn,fetcherResults:Ne}=await fc(j,Yt,kr,Es,Hs);if(ue.signal.aborted)return;ue.signal.removeEventListener("abort",Cn),T.delete(w),D.delete(w),Es.forEach(ze=>D.delete(ze.key));let Fe=En(Tn);if(Fe)return ks(Hs,Fe.result,!1,{preventScrollReset:X});if(Fe=En(Ne),Fe)return O.add(Fe.key),ks(Hs,Fe.result,!1,{preventScrollReset:X});let{loaderData:Ws,errors:Er}=qc(j,Yt,Tn,void 0,Es,Ne,de);if(j.fetchers.has(w)){let ze=os(we.data);j.fetchers.set(w,ze)}vc(Ot),j.navigation.state==="loading"&&Ot>Te?(xe(C,"Expected pending action"),L&&L.abort(),xt(j.navigation.location,{matches:Yt,loaderData:Ws,errors:Er,fetchers:new Map(j.fetchers)})):(Ie({errors:Er,loaderData:Kc(j.loaderData,Ws,Yt,Er),fetchers:new Map(j.fetchers)}),re=!1)}async function Yg(w,R,P,F,U,se,oe,X,Q){let G=j.fetchers.get(w);ns(w,Ar(Q,G?G.data:void 0),{flushSync:oe});let ee=new AbortController,ue=qs(e.history,P,ee.signal);if(se){let we=await Sn(U,new URL(ue.url).pathname,ue.signal,w);if(we.type==="aborted")return;if(we.type==="error"){Kt(w,R,we.error,{flushSync:oe});return}else if(we.matches)U=we.matches,F=Lr(U,P);else{Kt(w,R,lt(404,{pathname:P}),{flushSync:oe});return}}D.set(w,ee);let je=me,Ee=(await Cr("loader",j,ue,[F],U,w))[F.route.id];if(ms(Ee)&&(Ee=await Qo(Ee,ue.signal,!0)||Ee),D.get(w)===ee&&D.delete(w),!ue.signal.aborted){if(ne.has(w)){ns(w,os(void 0));return}if(Is(Ee))if(Te>je){ns(w,os(void 0));return}else{O.add(w),await ks(ue,Ee,!1,{preventScrollReset:X});return}if(pt(Ee)){Kt(w,R,Ee.error);return}xe(!ms(Ee),"Unhandled fetcher deferred data"),ns(w,os(Ee.data))}}async function ks(w,R,P,F){let{submission:U,fetcherSubmission:se,preventScrollReset:oe,replace:X}=F===void 0?{}:F;R.response.headers.has("X-Remix-Revalidate")&&(re=!0);let Q=R.response.headers.get("Location");xe(Q,"Expected a Location header on the redirect Response"),Q=Wc(Q,new URL(w.url),c,e.history);let G=qr(j.location,Q,{_isRedirect:!0});if(n){let we=!1;if(R.response.headers.has("X-Remix-Reload-Document"))we=!0;else if(Jo.test(Q)){const Le=e.history.createURL(Q);we=Le.origin!==s.location.origin||Zt(Le.pathname,c)==null}if(we){X?s.location.replace(Q):s.location.assign(Q);return}}L=null;let ee=X===!0||R.response.headers.has("X-Remix-Replace")?We.Replace:We.Push,{formMethod:ue,formAction:je,formEncType:et}=j.navigation;!U&&!se&&ue&&je&&et&&(U=Qc(j.navigation));let Ee=U||se;if(Jy.has(R.response.status)&&Ee&&kt(Ee.formMethod))await qt(ee,G,{submission:Ae({},Ee,{formAction:Q}),preventScrollReset:oe||M,enableViewTransition:P?$:void 0});else{let we=ja(G,U);await qt(ee,G,{overrideNavigation:we,fetcherSubmission:se,preventScrollReset:oe||M,enableViewTransition:P?$:void 0})}}async function Cr(w,R,P,F,U,se){let oe,X={};try{oe=await iv(d,w,R,P,F,U,se,a,i)}catch(Q){return F.forEach(G=>{X[G.route.id]={type:ke.error,error:Q}}),X}for(let[Q,G]of Object.entries(oe))if(uv(G)){let ee=G.result;X[Q]={type:ke.redirect,response:lv(ee,P,Q,U,c,m.v7_relativeSplatPath)}}else X[Q]=await ov(G);return X}async function fc(w,R,P,F,U){let se=w.matches,oe=Cr("loader",w,U,P,R,null),X=Promise.all(F.map(async ee=>{if(ee.matches&&ee.match&&ee.controller){let je=(await Cr("loader",w,qs(e.history,ee.path,ee.controller.signal),[ee.match],ee.matches,ee.key))[ee.match.route.id];return{[ee.key]:je}}else return Promise.resolve({[ee.key]:{type:ke.error,error:lt(404,{pathname:ee.path})}})})),Q=await oe,G=(await X).reduce((ee,ue)=>Object.assign(ee,ue),{});return await Promise.all([hv(R,Q,U.signal,se,w.loaderData),fv(R,G,F)]),{loaderResults:Q,fetcherResults:G}}function oa(){re=!0,Z.push(...ca()),z.forEach((w,R)=>{D.has(R)&&J.add(R),is(R)})}function ns(w,R,P){P===void 0&&(P={}),j.fetchers.set(w,R),Ie({fetchers:new Map(j.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function Kt(w,R,P,F){F===void 0&&(F={});let U=Ds(j.matches,R);jn(w),Ie({errors:{[U.route.id]:P},fetchers:new Map(j.fetchers)},{flushSync:(F&&F.flushSync)===!0})}function xc(w){return H.set(w,(H.get(w)||0)+1),ne.has(w)&&ne.delete(w),j.fetchers.get(w)||Qy}function jn(w){let R=j.fetchers.get(w);D.has(w)&&!(R&&R.state==="loading"&&T.has(w))&&is(w),z.delete(w),T.delete(w),O.delete(w),m.v7_fetcherPersist&&ne.delete(w),J.delete(w),j.fetchers.delete(w)}function Xg(w){let R=(H.get(w)||0)-1;R<=0?(H.delete(w),ne.add(w),m.v7_fetcherPersist||jn(w)):H.set(w,R),Ie({fetchers:new Map(j.fetchers)})}function is(w){let R=D.get(w);R&&(R.abort(),D.delete(w))}function gc(w){for(let R of w){let P=xc(R),F=os(P.data);j.fetchers.set(R,F)}}function yc(){let w=[],R=!1;for(let P of O){let F=j.fetchers.get(P);xe(F,"Expected fetcher: "+P),F.state==="loading"&&(O.delete(P),w.push(P),R=!0)}return gc(w),R}function vc(w){let R=[];for(let[P,F]of T)if(F<w){let U=j.fetchers.get(P);xe(U,"Expected fetcher: "+P),U.state==="loading"&&(is(P),T.delete(P),R.push(P))}return gc(R),R.length>0}function Jg(w,R){let P=j.blockers.get(w)||Pr;return te.get(w)!==R&&te.set(w,R),P}function bc(w){j.blockers.delete(w),te.delete(w)}function Nn(w,R){let P=j.blockers.get(w)||Pr;xe(P.state==="unblocked"&&R.state==="blocked"||P.state==="blocked"&&R.state==="blocked"||P.state==="blocked"&&R.state==="proceeding"||P.state==="blocked"&&R.state==="unblocked"||P.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+R.state);let F=new Map(j.blockers);F.set(w,R),Ie({blockers:F})}function jc(w){let{currentLocation:R,nextLocation:P,historyAction:F}=w;if(te.size===0)return;te.size>1&&Fs(!1,"A router only supports one blocker at a time");let U=Array.from(te.entries()),[se,oe]=U[U.length-1],X=j.blockers.get(se);if(!(X&&X.state==="proceeding")&&oe({currentLocation:R,nextLocation:P,historyAction:F}))return se}function la(w){let R=lt(404,{pathname:w}),P=l||o,{matches:F,route:U}=Xc(P);return ca(),{notFoundMatches:F,route:U,error:R}}function ca(w){let R=[];return de.forEach((P,F)=>{(!w||w(F))&&(P.cancel(),R.push(F),de.delete(F))}),R}function Qg(w,R,P){if(g=w,y=R,x=P||null,!v&&j.navigation===ba){v=!0;let F=wc(j.location,j.matches);F!=null&&Ie({restoreScrollPosition:F})}return()=>{g=null,y=null,x=null}}function Nc(w,R){return x&&x(w,R.map(F=>Ey(F,j.loaderData)))||w.key}function Zg(w,R){if(g&&y){let P=Nc(w,R);g[P]=y()}}function wc(w,R){if(g){let P=Nc(w,R),F=g[P];if(typeof F=="number")return F}return null}function wn(w,R,P){if(u)if(w){if(Object.keys(w[0].params).length>0)return{active:!0,matches:Hn(R,P,c,!0)}}else return{active:!0,matches:Hn(R,P,c,!0)||[]};return{active:!1,matches:null}}async function Sn(w,R,P,F){if(!u)return{type:"success",matches:w};let U=w;for(;;){let se=l==null,oe=l||o,X=a;try{await u({signal:P,path:R,matches:U,fetcherKey:F,patch:(ee,ue)=>{P.aborted||Hc(ee,ue,oe,X,i)}})}catch(ee){return{type:"error",error:ee,partialMatches:U}}finally{se&&!P.aborted&&(o=[...o])}if(P.aborted)return{type:"aborted"};let Q=us(oe,R,c);if(Q)return{type:"success",matches:Q};let G=Hn(oe,R,c,!0);if(!G||U.length===G.length&&U.every((ee,ue)=>ee.route.id===G[ue].route.id))return{type:"success",matches:null};U=G}}function ey(w){a={},l=ii(w,i,void 0,a)}function ty(w,R){let P=l==null;Hc(w,R,l||o,a,i),P&&(o=[...o],Ie({}))}return A={get basename(){return c},get future(){return m},get state(){return j},get routes(){return o},get window(){return s},initialize:Pe,subscribe:rs,enableScrollRestoration:Qg,navigate:Sr,fetch:qg,revalidate:na,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:xc,deleteFetcher:Xg,dispose:St,getBlocker:Jg,deleteBlocker:bc,patchRoutes:ty,_internalFetchControllers:D,_internalActiveDeferreds:de,_internalSetRoutes:ey},A}function tv(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function so(e,s,n,r,i,a,o,l){let c,d;if(o){c=[];for(let m of s)if(c.push(m),m.route.id===o){d=m;break}}else c=s,d=s[s.length-1];let u=Xo(i||".",Yo(c,a),Zt(e.pathname,n)||e.pathname,l==="path");if(i==null&&(u.search=e.search,u.hash=e.hash),(i==null||i===""||i===".")&&d){let m=Zo(u.search);if(d.route.index&&!m)u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index";else if(!d.route.index&&m){let h=new URLSearchParams(u.search),f=h.getAll("index");h.delete("index"),f.filter(x=>x).forEach(x=>h.append("index",x));let g=h.toString();u.search=g?"?"+g:""}}return r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Jt([n,u.pathname])),Bs(u)}function Vc(e,s,n,r){if(!r||!tv(r))return{path:n};if(r.formMethod&&!pv(r.formMethod))return{path:n,error:lt(405,{method:r.formMethod})};let i=()=>({path:n,error:lt(400,{type:"invalid-body"})}),a=r.formMethod||"get",o=e?a.toUpperCase():a.toLowerCase(),l=Fm(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!kt(o))return i();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((f,g)=>{let[x,y]=g;return""+f+x+"="+y+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!kt(o))return i();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}xe(typeof FormData=="function","FormData is not available in this environment");let c,d;if(r.formData)c=no(r.formData),d=r.formData;else if(r.body instanceof FormData)c=no(r.body),d=r.body;else if(r.body instanceof URLSearchParams)c=r.body,d=Gc(c);else if(r.body==null)c=new URLSearchParams,d=new FormData;else try{c=new URLSearchParams(r.body),d=Gc(c)}catch{return i()}let u={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(kt(u.formMethod))return{path:n,submission:u};let m=vs(n);return s&&m.search&&Zo(m.search)&&c.append("index",""),m.search="?"+c,{path:Bs(m),submission:u}}function Uc(e,s,n){n===void 0&&(n=!1);let r=e.findIndex(i=>i.route.id===s);return r>=0?e.slice(0,n?r+1:r):e}function $c(e,s,n,r,i,a,o,l,c,d,u,m,h,f,g,x){let y=x?pt(x[1])?x[1].error:x[1].data:void 0,v=e.createURL(s.location),b=e.createURL(i),N=n;a&&s.errors?N=Uc(n,Object.keys(s.errors)[0],!0):x&&pt(x[1])&&(N=Uc(n,x[0]));let S=x?x[1].statusCode:void 0,E=o&&S&&S>=400,A=N.filter((C,M)=>{let{route:L}=C;if(L.lazy)return!0;if(L.loader==null)return!1;if(a)return ro(L,s.loaderData,s.errors);if(sv(s.loaderData,s.matches[M],C)||c.some(ie=>ie===C.route.id))return!0;let $=s.matches[M],Y=C;return zc(C,Ae({currentUrl:v,currentParams:$.params,nextUrl:b,nextParams:Y.params},r,{actionResult:y,actionStatus:S,defaultShouldRevalidate:E?!1:l||v.pathname+v.search===b.pathname+b.search||v.search!==b.search||Om($,Y)}))}),j=[];return m.forEach((C,M)=>{if(a||!n.some(V=>V.route.id===C.routeId)||u.has(M))return;let L=us(f,C.path,g);if(!L){j.push({key:M,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let $=s.fetchers.get(M),Y=Lr(L,C.path),ie=!1;h.has(M)?ie=!1:d.has(M)?(d.delete(M),ie=!0):$&&$.state!=="idle"&&$.data===void 0?ie=l:ie=zc(Y,Ae({currentUrl:v,currentParams:s.matches[s.matches.length-1].params,nextUrl:b,nextParams:n[n.length-1].params},r,{actionResult:y,actionStatus:S,defaultShouldRevalidate:E?!1:l})),ie&&j.push({key:M,routeId:C.routeId,path:C.path,matches:L,match:Y,controller:new AbortController})}),[A,j]}function ro(e,s,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=s!=null&&s[e.id]!==void 0,i=n!=null&&n[e.id]!==void 0;return!r&&i?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!i}function sv(e,s,n){let r=!s||n.route.id!==s.route.id,i=e[n.route.id]===void 0;return r||i}function Om(e,s){let n=e.route.path;return e.pathname!==s.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==s.params["*"]}function zc(e,s){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(s);if(typeof n=="boolean")return n}return s.defaultShouldRevalidate}function Hc(e,s,n,r,i){var a;let o;if(e){let d=r[e];xe(d,"No route found to patch children into: routeId = "+e),d.children||(d.children=[]),o=d.children}else o=n;let l=s.filter(d=>!o.some(u=>Lm(d,u))),c=ii(l,i,[e||"_","patch",String(((a=o)==null?void 0:a.length)||"0")],r);o.push(...c)}function Lm(e,s){return"id"in e&&"id"in s&&e.id===s.id?!0:e.index===s.index&&e.path===s.path&&e.caseSensitive===s.caseSensitive?(!e.children||e.children.length===0)&&(!s.children||s.children.length===0)?!0:e.children.every((n,r)=>{var i;return(i=s.children)==null?void 0:i.some(a=>Lm(n,a))}):!1}async function rv(e,s,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];xe(i,"No route found in manifest");let a={};for(let o in r){let c=i[o]!==void 0&&o!=="hasErrorBoundary";Fs(!c,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!c&&!Ty.has(o)&&(a[o]=r[o])}Object.assign(i,a),Object.assign(i,Ae({},s(i),{lazy:void 0}))}async function nv(e){let{matches:s}=e,n=s.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,a,o)=>Object.assign(i,{[n[o].route.id]:a}),{})}async function iv(e,s,n,r,i,a,o,l,c,d){let u=a.map(f=>f.route.lazy?rv(f.route,c,l):void 0),m=a.map((f,g)=>{let x=u[g],y=i.some(b=>b.route.id===f.route.id);return Ae({},f,{shouldLoad:y,resolve:async b=>(b&&r.method==="GET"&&(f.route.lazy||f.route.loader)&&(y=!0),y?av(s,r,f,x,b,d):Promise.resolve({type:ke.data,result:void 0}))})}),h=await e({matches:m,request:r,params:a[0].params,fetcherKey:o,context:d});try{await Promise.all(u)}catch{}return h}async function av(e,s,n,r,i,a){let o,l,c=d=>{let u,m=new Promise((g,x)=>u=x);l=()=>u(),s.signal.addEventListener("abort",l);let h=g=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):d({request:s,params:n.params,context:a},...g!==void 0?[g]:[]),f=(async()=>{try{return{type:"data",result:await(i?i(x=>h(x)):h())}}catch(g){return{type:"error",result:g}}})();return Promise.race([f,m])};try{let d=n.route[e];if(r)if(d){let u,[m]=await Promise.all([c(d).catch(h=>{u=h}),r]);if(u!==void 0)throw u;o=m}else if(await r,d=n.route[e],d)o=await c(d);else if(e==="action"){let u=new URL(s.url),m=u.pathname+u.search;throw lt(405,{method:s.method,pathname:m,routeId:n.route.id})}else return{type:ke.data,result:void 0};else if(d)o=await c(d);else{let u=new URL(s.url),m=u.pathname+u.search;throw lt(404,{pathname:m})}xe(o.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:ke.error,result:d}}finally{l&&s.signal.removeEventListener("abort",l)}return o}async function ov(e){let{result:s,type:n}=e;if(Bm(s)){let m;try{let h=s.headers.get("Content-Type");h&&/\bapplication\/json\b/.test(h)?s.body==null?m=null:m=await s.json():m=await s.text()}catch(h){return{type:ke.error,error:h}}return n===ke.error?{type:ke.error,error:new oi(s.status,s.statusText,m),statusCode:s.status,headers:s.headers}:{type:ke.data,data:m,statusCode:s.status,headers:s.headers}}if(n===ke.error){if(Jc(s)){var r,i;if(s.data instanceof Error){var a,o;return{type:ke.error,error:s.data,statusCode:(a=s.init)==null?void 0:a.status,headers:(o=s.init)!=null&&o.headers?new Headers(s.init.headers):void 0}}return{type:ke.error,error:new oi(((r=s.init)==null?void 0:r.status)||500,void 0,s.data),statusCode:Kr(s)?s.status:void 0,headers:(i=s.init)!=null&&i.headers?new Headers(s.init.headers):void 0}}return{type:ke.error,error:s,statusCode:Kr(s)?s.status:void 0}}if(mv(s)){var l,c;return{type:ke.deferred,deferredData:s,statusCode:(l=s.init)==null?void 0:l.status,headers:((c=s.init)==null?void 0:c.headers)&&new Headers(s.init.headers)}}if(Jc(s)){var d,u;return{type:ke.data,data:s.data,statusCode:(d=s.init)==null?void 0:d.status,headers:(u=s.init)!=null&&u.headers?new Headers(s.init.headers):void 0}}return{type:ke.data,data:s}}function lv(e,s,n,r,i,a){let o=e.headers.get("Location");if(xe(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Jo.test(o)){let l=r.slice(0,r.findIndex(c=>c.route.id===n)+1);o=so(new URL(s.url),l,i,!0,o,a),e.headers.set("Location",o)}return e}function Wc(e,s,n,r){let i=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Jo.test(e)){let a=e,o=a.startsWith("//")?new URL(s.protocol+a):new URL(a);if(i.includes(o.protocol))throw new Error("Invalid redirect location");let l=Zt(o.pathname,n)!=null;if(o.origin===s.origin&&l)return o.pathname+o.search+o.hash}try{let a=r.createURL(e);if(i.includes(a.protocol))throw new Error("Invalid redirect location")}catch{}return e}function qs(e,s,n,r){let i=e.createURL(Fm(s)).toString(),a={signal:n};if(r&&kt(r.formMethod)){let{formMethod:o,formEncType:l}=r;a.method=o.toUpperCase(),l==="application/json"?(a.headers=new Headers({"Content-Type":l}),a.body=JSON.stringify(r.json)):l==="text/plain"?a.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?a.body=no(r.formData):a.body=r.formData}return new Request(i,a)}function no(e){let s=new URLSearchParams;for(let[n,r]of e.entries())s.append(n,typeof r=="string"?r:r.name);return s}function Gc(e){let s=new FormData;for(let[n,r]of e.entries())s.append(n,r);return s}function cv(e,s,n,r,i){let a={},o=null,l,c=!1,d={},u=n&&pt(n[1])?n[1].error:void 0;return e.forEach(m=>{if(!(m.route.id in s))return;let h=m.route.id,f=s[h];if(xe(!Is(f),"Cannot handle redirect results in processLoaderData"),pt(f)){let g=f.error;u!==void 0&&(g=u,u=void 0),o=o||{};{let x=Ds(e,h);o[x.route.id]==null&&(o[x.route.id]=g)}a[h]=void 0,c||(c=!0,l=Kr(f.error)?f.error.status:500),f.headers&&(d[h]=f.headers)}else ms(f)?(r.set(h,f.deferredData),a[h]=f.deferredData.data,f.statusCode!=null&&f.statusCode!==200&&!c&&(l=f.statusCode),f.headers&&(d[h]=f.headers)):(a[h]=f.data,f.statusCode&&f.statusCode!==200&&!c&&(l=f.statusCode),f.headers&&(d[h]=f.headers))}),u!==void 0&&n&&(o={[n[0]]:u},a[n[0]]=void 0),{loaderData:a,errors:o,statusCode:l||200,loaderHeaders:d}}function qc(e,s,n,r,i,a,o){let{loaderData:l,errors:c}=cv(s,n,r,o);return i.forEach(d=>{let{key:u,match:m,controller:h}=d,f=a[u];if(xe(f,"Did not find corresponding fetcher result"),!(h&&h.signal.aborted))if(pt(f)){let g=Ds(e.matches,m==null?void 0:m.route.id);c&&c[g.route.id]||(c=Ae({},c,{[g.route.id]:f.error})),e.fetchers.delete(u)}else if(Is(f))xe(!1,"Unhandled fetcher revalidation redirect");else if(ms(f))xe(!1,"Unhandled fetcher deferred data");else{let g=os(f.data);e.fetchers.set(u,g)}}),{loaderData:l,errors:c}}function Kc(e,s,n,r){let i=Ae({},s);for(let a of n){let o=a.route.id;if(s.hasOwnProperty(o)?s[o]!==void 0&&(i[o]=s[o]):e[o]!==void 0&&a.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function Yc(e){return e?pt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Ds(e,s){return(s?e.slice(0,e.findIndex(r=>r.route.id===s)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Xc(e){let s=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:s}],route:s}}function lt(e,s){let{pathname:n,routeId:r,method:i,type:a,message:o}=s===void 0?{}:s,l="Unknown Server Error",c="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&n&&r?c="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"?c="defer() is not supported in actions":a==="invalid-body"&&(c="Unable to encode submission body")):e===403?(l="Forbidden",c='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",c='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?c="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(c='Invalid request method "'+i.toUpperCase()+'"')),new oi(e||500,l,new Error(c),!0)}function En(e){let s=Object.entries(e);for(let n=s.length-1;n>=0;n--){let[r,i]=s[n];if(Is(i))return{key:r,result:i}}}function Fm(e){let s=typeof e=="string"?vs(e):e;return Bs(Ae({},s,{hash:""}))}function dv(e,s){return e.pathname!==s.pathname||e.search!==s.search?!1:e.hash===""?s.hash!=="":e.hash===s.hash?!0:s.hash!==""}function uv(e){return Bm(e.result)&&Xy.has(e.result.status)}function ms(e){return e.type===ke.deferred}function pt(e){return e.type===ke.error}function Is(e){return(e&&e.type)===ke.redirect}function Jc(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function mv(e){let s=e;return s&&typeof s=="object"&&typeof s.data=="object"&&typeof s.subscribe=="function"&&typeof s.cancel=="function"&&typeof s.resolveData=="function"}function Bm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function pv(e){return Yy.has(e.toLowerCase())}function kt(e){return qy.has(e.toLowerCase())}async function hv(e,s,n,r,i){let a=Object.entries(s);for(let o=0;o<a.length;o++){let[l,c]=a[o],d=e.find(h=>(h==null?void 0:h.route.id)===l);if(!d)continue;let u=r.find(h=>h.route.id===d.route.id),m=u!=null&&!Om(u,d)&&(i&&i[d.route.id])!==void 0;ms(c)&&m&&await Qo(c,n,!1).then(h=>{h&&(s[l]=h)})}}async function fv(e,s,n){for(let r=0;r<n.length;r++){let{key:i,routeId:a,controller:o}=n[r],l=s[i];e.find(d=>(d==null?void 0:d.route.id)===a)&&ms(l)&&(xe(o,"Expected an AbortController for revalidating fetcher deferred result"),await Qo(l,o.signal,!0).then(d=>{d&&(s[i]=d)}))}}async function Qo(e,s,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(s)){if(n)try{return{type:ke.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ke.error,error:i}}return{type:ke.data,data:e.deferredData.data}}}function Zo(e){return new URLSearchParams(e).getAll("index").some(s=>s==="")}function Lr(e,s){let n=typeof s=="string"?vs(s).search:s.search;if(e[e.length-1].route.index&&Zo(n||""))return e[e.length-1];let r=Im(e);return r[r.length-1]}function Qc(e){let{formMethod:s,formAction:n,formEncType:r,text:i,formData:a,json:o}=e;if(!(!s||!n||!r)){if(i!=null)return{formMethod:s,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(a!=null)return{formMethod:s,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(o!==void 0)return{formMethod:s,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function ja(e,s){return s?{state:"loading",location:e,formMethod:s.formMethod,formAction:s.formAction,formEncType:s.formEncType,formData:s.formData,json:s.json,text:s.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function xv(e,s){return{state:"submitting",location:e,formMethod:s.formMethod,formAction:s.formAction,formEncType:s.formEncType,formData:s.formData,json:s.json,text:s.text}}function Ar(e,s){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:s}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:s}}function gv(e,s){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:s?s.data:void 0}}function os(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function yv(e,s){try{let n=e.sessionStorage.getItem(_m);if(n){let r=JSON.parse(n);for(let[i,a]of Object.entries(r||{}))a&&Array.isArray(a)&&s.set(i,new Set(a||[]))}}catch{}}function vv(e,s){if(s.size>0){let n={};for(let[r,i]of s)n[r]=[...i];try{e.sessionStorage.setItem(_m,JSON.stringify(n))}catch(r){Fs(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function li(){return li=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},li.apply(this,arguments)}const an=p.createContext(null),el=p.createContext(null),bs=p.createContext(null),tl=p.createContext(null),js=p.createContext({outlet:null,matches:[],isDataRoute:!1}),Vm=p.createContext(null);function bv(e,s){let{relative:n}=s===void 0?{}:s;on()||xe(!1);let{basename:r,navigator:i}=p.useContext(bs),{hash:a,pathname:o,search:l}=Ri(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Jt([r,o])),i.createHref({pathname:c,search:l,hash:a})}function on(){return p.useContext(tl)!=null}function Ht(){return on()||xe(!1),p.useContext(tl).location}function Um(e){p.useContext(bs).static||p.useLayoutEffect(e)}function sl(){let{isDataRoute:e}=p.useContext(js);return e?Mv():jv()}function jv(){on()||xe(!1);let e=p.useContext(an),{basename:s,future:n,navigator:r}=p.useContext(bs),{matches:i}=p.useContext(js),{pathname:a}=Ht(),o=JSON.stringify(Yo(i,n.v7_relativeSplatPath)),l=p.useRef(!1);return Um(()=>{l.current=!0}),p.useCallback(function(d,u){if(u===void 0&&(u={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let m=Xo(d,JSON.parse(o),a,u.relative==="path");e==null&&s!=="/"&&(m.pathname=m.pathname==="/"?s:Jt([s,m.pathname])),(u.replace?r.replace:r.push)(m,u.state,u)},[s,r,o,a,e])}const Nv=p.createContext(null);function wv(e){let s=p.useContext(js).outlet;return s&&p.createElement(Nv.Provider,{value:e},s)}function Ri(e,s){let{relative:n}=s===void 0?{}:s,{future:r}=p.useContext(bs),{matches:i}=p.useContext(js),{pathname:a}=Ht(),o=JSON.stringify(Yo(i,r.v7_relativeSplatPath));return p.useMemo(()=>Xo(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function Sv(e,s,n,r){on()||xe(!1);let{navigator:i}=p.useContext(bs),{matches:a}=p.useContext(js),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=Ht(),u;u=d;let m=u.pathname||"/",h=m;if(c!=="/"){let x=c.replace(/^\//,"").split("/");h="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let f=us(e,{pathname:h});return Rv(f&&f.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:Jt([c,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:Jt([c,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,n,r)}function Cv(){let e=Iv(),s=Kr(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},s),n?p.createElement("pre",{style:i},n):null,null)}const Tv=p.createElement(Cv,null);class kv extends p.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,n){return n.location!==s.location||n.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:n.error,location:n.location,revalidation:s.revalidation||n.revalidation}}componentDidCatch(s,n){console.error("React Router caught the following error during render",s,n)}render(){return this.state.error!==void 0?p.createElement(js.Provider,{value:this.props.routeContext},p.createElement(Vm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ev(e){let{routeContext:s,match:n,children:r}=e,i=p.useContext(an);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),p.createElement(js.Provider,{value:s},r)}function Rv(e,s,n,r){var i;if(s===void 0&&(s=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&s.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let u=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);u>=0||xe(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let m=o[u];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=u),m.route.id){let{loaderData:h,errors:f}=n,g=m.route.loader&&h[m.route.id]===void 0&&(!f||f[m.route.id]===void 0);if(m.route.lazy||g){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,m,h)=>{let f,g=!1,x=null,y=null;n&&(f=l&&m.route.id?l[m.route.id]:void 0,x=m.route.errorElement||Tv,c&&(d<0&&h===0?(_v("route-fallback"),g=!0,y=null):d===h&&(g=!0,y=m.route.hydrateFallbackElement||null)));let v=s.concat(o.slice(0,h+1)),b=()=>{let N;return f?N=x:g?N=y:m.route.Component?N=p.createElement(m.route.Component,null):m.route.element?N=m.route.element:N=u,p.createElement(Ev,{match:m,routeContext:{outlet:u,matches:v,isDataRoute:n!=null},children:N})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?p.createElement(kv,{location:n.location,revalidation:n.revalidation,component:x,error:f,children:b(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):b()},null)}var $m=(function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e})($m||{}),ci=(function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e})(ci||{});function Pv(e){let s=p.useContext(an);return s||xe(!1),s}function Av(e){let s=p.useContext(el);return s||xe(!1),s}function Dv(e){let s=p.useContext(js);return s||xe(!1),s}function zm(e){let s=Dv(),n=s.matches[s.matches.length-1];return n.route.id||xe(!1),n.route.id}function Iv(){var e;let s=p.useContext(Vm),n=Av(ci.UseRouteError),r=zm(ci.UseRouteError);return s!==void 0?s:(e=n.errors)==null?void 0:e[r]}function Mv(){let{router:e}=Pv($m.UseNavigateStable),s=zm(ci.UseNavigateStable),n=p.useRef(!1);return Um(()=>{n.current=!0}),p.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,li({fromRouteId:s},a)))},[e,s])}const Zc={};function _v(e,s,n){Zc[e]||(Zc[e]=!0)}function Ov(e,s){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!s||s.v7_relativeSplatPath),s&&(s.v7_fetcherPersist,s.v7_normalizeFormMethod,s.v7_partialHydration,s.v7_skipActionErrorRevalidation)}function Lv(e){return wv(e.context)}function Fv(e){let{basename:s="/",children:n=null,location:r,navigationType:i=We.Pop,navigator:a,static:o=!1,future:l}=e;on()&&xe(!1);let c=s.replace(/^\/*/,"/"),d=p.useMemo(()=>({basename:c,navigator:a,static:o,future:li({v7_relativeSplatPath:!1},l)}),[c,l,a,o]);typeof r=="string"&&(r=vs(r));let{pathname:u="/",search:m="",hash:h="",state:f=null,key:g="default"}=r,x=p.useMemo(()=>{let y=Zt(u,c);return y==null?null:{location:{pathname:y,search:m,hash:h,state:f,key:g},navigationType:i}},[c,u,m,h,f,g,i]);return x==null?null:p.createElement(bs.Provider,{value:d},p.createElement(tl.Provider,{children:n,value:x}))}new Promise(()=>{});function Bv(e){let s={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(s,{element:p.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(s,{hydrateFallbackElement:p.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(s,{errorElement:p.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),s}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cr(){return cr=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cr.apply(this,arguments)}function Hm(e,s){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(s.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Vv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Uv(e,s){return e.button===0&&(!s||s==="_self")&&!Vv(e)}function io(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((s,n)=>{let r=e[n];return s.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function $v(e,s){let n=io(e);return s&&s.forEach((r,i)=>{n.has(i)||s.getAll(i).forEach(a=>{n.append(i,a)})}),n}const zv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Hv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Wv="6";try{window.__reactRouterVersion=Wv}catch{}function Gv(e,s){return ev({basename:s==null?void 0:s.basename,future:cr({},s==null?void 0:s.future,{v7_prependBasename:!0}),history:wy({window:s==null?void 0:s.window}),hydrationData:(s==null?void 0:s.hydrationData)||qv(),routes:e,mapRouteProperties:Bv,dataStrategy:s==null?void 0:s.dataStrategy,patchRoutesOnNavigation:s==null?void 0:s.patchRoutesOnNavigation,window:s==null?void 0:s.window}).initialize()}function qv(){var e;let s=(e=window)==null?void 0:e.__staticRouterHydrationData;return s&&s.errors&&(s=cr({},s,{errors:Kv(s.errors)})),s}function Kv(e){if(!e)return null;let s=Object.entries(e),n={};for(let[r,i]of s)if(i&&i.__type==="RouteErrorResponse")n[r]=new oi(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let a=window[i.__subType];if(typeof a=="function")try{let o=new a(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let a=new Error(i.message);a.stack="",n[r]=a}}else n[r]=i;return n}const Wm=p.createContext({isTransitioning:!1}),Yv=p.createContext(new Map),Xv="startTransition",ed=Ei[Xv],Jv="flushSync",td=Pm[Jv];function Qv(e){ed?ed(e):e()}function Dr(e){td?td(e):e()}class Zv{constructor(){this.status="pending",this.promise=new Promise((s,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",s(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function eb(e){let{fallbackElement:s,router:n,future:r}=e,[i,a]=p.useState(n.state),[o,l]=p.useState(),[c,d]=p.useState({isTransitioning:!1}),[u,m]=p.useState(),[h,f]=p.useState(),[g,x]=p.useState(),y=p.useRef(new Map),{v7_startTransition:v}=r||{},b=p.useCallback(C=>{v?Qv(C):C()},[v]),N=p.useCallback((C,M)=>{let{deletedFetchers:L,flushSync:$,viewTransitionOpts:Y}=M;C.fetchers.forEach((V,re)=>{V.data!==void 0&&y.current.set(re,V.data)}),L.forEach(V=>y.current.delete(V));let ie=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!Y||ie){$?Dr(()=>a(C)):b(()=>a(C));return}if($){Dr(()=>{h&&(u&&u.resolve(),h.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation})});let V=n.window.document.startViewTransition(()=>{Dr(()=>a(C))});V.finished.finally(()=>{Dr(()=>{m(void 0),f(void 0),l(void 0),d({isTransitioning:!1})})}),Dr(()=>f(V));return}h?(u&&u.resolve(),h.skipTransition(),x({state:C,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation})):(l(C),d({isTransitioning:!0,flushSync:!1,currentLocation:Y.currentLocation,nextLocation:Y.nextLocation}))},[n.window,h,u,y,b]);p.useLayoutEffect(()=>n.subscribe(N),[n,N]),p.useEffect(()=>{c.isTransitioning&&!c.flushSync&&m(new Zv)},[c]),p.useEffect(()=>{if(u&&o&&n.window){let C=o,M=u.promise,L=n.window.document.startViewTransition(async()=>{b(()=>a(C)),await M});L.finished.finally(()=>{m(void 0),f(void 0),l(void 0),d({isTransitioning:!1})}),f(L)}},[b,o,u,n.window]),p.useEffect(()=>{u&&o&&i.location.key===o.location.key&&u.resolve()},[u,h,i.location,o]),p.useEffect(()=>{!c.isTransitioning&&g&&(l(g.state),d({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),x(void 0))},[c.isTransitioning,g]),p.useEffect(()=>{},[]);let S=p.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:C=>n.navigate(C),push:(C,M,L)=>n.navigate(C,{state:M,preventScrollReset:L==null?void 0:L.preventScrollReset}),replace:(C,M,L)=>n.navigate(C,{replace:!0,state:M,preventScrollReset:L==null?void 0:L.preventScrollReset})}),[n]),E=n.basename||"/",A=p.useMemo(()=>({router:n,navigator:S,static:!1,basename:E}),[n,S,E]),j=p.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return p.useEffect(()=>Ov(r,n.future),[r,n.future]),p.createElement(p.Fragment,null,p.createElement(an.Provider,{value:A},p.createElement(el.Provider,{value:i},p.createElement(Yv.Provider,{value:y.current},p.createElement(Wm.Provider,{value:c},p.createElement(Fv,{basename:E,location:i.location,navigationType:i.historyAction,navigator:S,future:j},i.initialized||n.future.v7_partialHydration?p.createElement(tb,{routes:n.routes,future:n.future,state:i}):s))))),null)}const tb=p.memo(sb);function sb(e){let{routes:s,future:n,state:r}=e;return Sv(s,void 0,r,n)}const rb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qe=p.forwardRef(function(s,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:c,to:d,preventScrollReset:u,viewTransition:m}=s,h=Hm(s,zv),{basename:f}=p.useContext(bs),g,x=!1;if(typeof d=="string"&&nb.test(d)&&(g=d,rb))try{let N=new URL(window.location.href),S=d.startsWith("//")?new URL(N.protocol+d):new URL(d),E=Zt(S.pathname,f);S.origin===N.origin&&E!=null?d=E+S.search+S.hash:x=!0}catch{}let y=bv(d,{relative:i}),v=rl(d,{replace:o,state:l,target:c,preventScrollReset:u,relative:i,viewTransition:m});function b(N){r&&r(N),N.defaultPrevented||v(N)}return p.createElement("a",cr({},h,{href:g||y,onClick:x||a?r:b,ref:n,target:c}))}),ib=p.forwardRef(function(s,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:c,viewTransition:d,children:u}=s,m=Hm(s,Hv),h=Ri(c,{relative:m.relative}),f=Ht(),g=p.useContext(el),{navigator:x,basename:y}=p.useContext(bs),v=g!=null&&lb(h)&&d===!0,b=x.encodeLocation?x.encodeLocation(h).pathname:h.pathname,N=f.pathname,S=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(N=N.toLowerCase(),S=S?S.toLowerCase():null,b=b.toLowerCase()),S&&y&&(S=Zt(S,y)||S);const E=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let A=N===b||!o&&N.startsWith(b)&&N.charAt(E)==="/",j=S!=null&&(S===b||!o&&S.startsWith(b)&&S.charAt(b.length)==="/"),C={isActive:A,isPending:j,isTransitioning:v},M=A?r:void 0,L;typeof a=="function"?L=a(C):L=[a,A?"active":null,j?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let $=typeof l=="function"?l(C):l;return p.createElement(qe,cr({},m,{"aria-current":M,className:L,ref:n,style:$,to:c,viewTransition:d}),typeof u=="function"?u(C):u)});var ao;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ao||(ao={}));var sd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sd||(sd={}));function ab(e){let s=p.useContext(an);return s||xe(!1),s}function rl(e,s){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:l}=s===void 0?{}:s,c=sl(),d=Ht(),u=Ri(e,{relative:o});return p.useCallback(m=>{if(Uv(m,n)){m.preventDefault();let h=r!==void 0?r:Bs(d)===Bs(u);c(e,{replace:h,state:i,preventScrollReset:a,relative:o,viewTransition:l})}},[d,c,u,r,i,n,e,a,o,l])}function ob(e){let s=p.useRef(io(e)),n=p.useRef(!1),r=Ht(),i=p.useMemo(()=>$v(r.search,n.current?null:s.current),[r.search]),a=sl(),o=p.useCallback((l,c)=>{const d=io(typeof l=="function"?l(i):l);n.current=!0,a("?"+d,c)},[a,i]);return[i,o]}function lb(e,s){s===void 0&&(s={});let n=p.useContext(Wm);n==null&&xe(!1);let{basename:r}=ab(ao.useViewTransitionState),i=Ri(e,{relative:s.relative});if(!n.isTransitioning)return!1;let a=Zt(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Zt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ai(i.pathname,o)!=null||ai(i.pathname,a)!=null}const cb="modulepreload",db=function(e){return"/aii/developer-guideline/"+e},rd={},ub=function(s,n,r){let i=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=o(n.map(d=>{if(d=db(d),d in rd)return;rd[d]=!0;const u=d.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":cb,u||(h.as="script"),h.crossOrigin="",h.href=d,c&&h.setAttribute("nonce",c),document.head.appendChild(h),u)return new Promise((f,g)=>{h.addEventListener("load",f),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&a(l.reason);return s().catch(a)})},Wn={...Pm},{version:Gm,hydrate:mb}=Wn,pb=Number((Gm||"").split(".")[0])>17,hb=Number((Gm||"").split(".")[0])>18;function fb(e,s,n={}){const{useLegacyRender:r}=n;if(r||!pb)mb(e,s);else if(hb)ub(()=>import("./client-DytVPCns.js").then(i=>i.c),[]).then(({default:{hydrateRoot:i}})=>{Je.startTransition(()=>{i(s,e)})});else{Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint=!0;const{hydrateRoot:i}=Wn;if(!i)throw new Error("hydrateRoot not found");Je.startTransition(()=>{i(s,e),Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint=!1})}}function xb(e){return document.readyState==="loading"?new Promise(s=>{document.addEventListener("DOMContentLoaded",()=>s(e))}):Promise.resolve(e)}function gb(e,s){return!e||!s?e||s||"":(e[e.length-1]==="/"&&(e=e.substring(0,e.length-1)),s[0]!=="/"&&(s=`/${s}`),e+s)}function yb(e,s){if(e===s)return"/";const n=vb(s);return e.startsWith(n)?e.slice(n.length-1):e}function vb(e){return e[e.length-1]!=="/"?`${e}/`:e}function bb(e){return e[0]!=="/"?`/${e}`:e}function qm(e,s,n=[]){return e.map((r,i)=>{const a=[...n,String(i)],o=typeof r.id=="string"?r.id:a.join("-");if(r.id=o,jb(r))return{...r,...s(r),id:o};{const l={...r,...s(r),id:o,children:void 0};return r.children&&(l.children=qm(r.children,s,a)),l}})}function jb(e){return e.index===!0}function Nb(e){try{return JSON.parse(e||"{}")}catch(s){return console.error("[SSG] On state deserialization -",s,e),{}}}const wb=p.forwardRef((e,s)=>{const{replace:n,state:r,target:i,preventScrollReset:a,relative:o,to:l,onClick:c}=e,d=rl(l,{replace:n,state:r,target:i,preventScrollReset:a,relative:o});function u(m){c&&c(m),m.defaultPrevented||Je.startTransition(()=>{d(m)}),m.defaultPrevented=!0,m.preventDefault()}return t.jsx(qe,{...e,ref:s,onClick:u})});wb.displayName="Link";const Sb=p.forwardRef((e,s)=>{const{replace:n,state:r,target:i,preventScrollReset:a,relative:o,to:l,onClick:c}=e,d=rl(l,{replace:n,state:r,target:i,preventScrollReset:a,relative:o});function u(m){c&&c(m),m.defaultPrevented||Je.startTransition(()=>{d(m)}),m.defaultPrevented=!0,m.preventDefault()}return t.jsx(ib,{...e,ref:s,onClick:u})});Sb.displayName="NavLink";function Cb(e,s,n={}){const{transformState:r,rootContainer:i="#root",ssrWhenDev:a,getStyleCollector:o=null}=n,l=typeof window<"u",c=e.basename??"/",{v7_startTransition:d=!0,...u}=e.future??{};async function m(f=!1,g){const x=f?Gv(qm(e.routes,h),{basename:c,future:u}):void 0,y=[],v=f?()=>{}:E=>y.push(E),b=()=>Promise.all(y.map(E=>E())),N={isClient:l,routes:e.routes,router:x,routerOptions:e,onSSRAppRendered:v,triggerOnSSRAppRendered:b,initialState:{},transformState:r,routePath:g,base:c,getStyleCollector:o,routerType:"remix"};f&&(await xb(),N.initialState=(r==null?void 0:r(window.__INITIAL_STATE__||{}))||Nb(window.__INITIAL_STATE__)),await(s==null?void 0:s(N));const S=N.initialState;return{...N,initialState:S}}return l&&(async()=>{var b;const f=typeof i=="string"?document.querySelector(i):i;if(!f){typeof $jsdom>"u"&&console.warn("[vite-react-ssg] Root container not found.");return}const g=(b=us(e.routes,window.location,c))==null?void 0:b.filter(N=>N.route.lazy);g&&(g==null?void 0:g.length)>0&&await Promise.all(g.map(async N=>{const S=await N.route.lazy();Object.assign(N.route,{...S,lazy:void 0})}));const x=await m(!0);window.__VITE_REACT_SSG_CONTEXT__=x;const{router:y}=x,v=t.jsx(Or,{children:t.jsx(eb,{router:y,future:{v7_startTransition:d}})});document.querySelector("[data-server-rendered=true]"),fb(v,f,n)})(),m;function h(f){if(!(document.querySelector("[data-server-rendered=true]")!==null))return f;const x=async({request:y})=>{var v;{let b;if(window.__VITE_REACT_SSG_STATIC_LOADER_DATA__)b=window.__VITE_REACT_SSG_STATIC_LOADER_DATA__;else{const A=gb(c,`static-loader-data-manifest-${window.__VITE_REACT_SSG_HASH__}.json`);b=await(await fetch(bb(A))).json(),window.__VITE_REACT_SSG_STATIC_LOADER_DATA__=b}const{url:N}=y;let{pathname:S}=new URL(N);return c!=="/"&&(S=yb(S,c)),((v=b==null?void 0:b[S])==null?void 0:v[f.id])??null}};return f.loader=x,f}}function Tb(){const{pathname:e}=Ht();return p.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[e]),null}const kb=1,Eb=1e6;let Na=0;function Rb(){return Na=(Na+1)%Number.MAX_SAFE_INTEGER,Na.toString()}const wa=new Map,nd=e=>{if(wa.has(e))return;const s=setTimeout(()=>{wa.delete(e),Vr({type:"REMOVE_TOAST",toastId:e})},Eb);wa.set(e,s)},Pb=(e,s)=>{switch(s.type){case"ADD_TOAST":return{...e,toasts:[s.toast,...e.toasts].slice(0,kb)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===s.toast.id?{...n,...s.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=s;return n?nd(n):e.toasts.forEach(r=>{nd(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return s.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==s.toastId)}}},Gn=[];let qn={toasts:[]};function Vr(e){qn=Pb(qn,e),Gn.forEach(s=>{s(qn)})}function Ab({...e}){const s=Rb(),n=i=>Vr({type:"UPDATE_TOAST",toast:{...i,id:s}}),r=()=>Vr({type:"DISMISS_TOAST",toastId:s});return Vr({type:"ADD_TOAST",toast:{...e,id:s,open:!0,onOpenChange:i=>{i||r()}}}),{id:s,dismiss:r,update:n}}function Db(){const[e,s]=p.useState(qn);return p.useEffect(()=>(Gn.push(s),()=>{const n=Gn.indexOf(s);n>-1&&Gn.splice(n,1)}),[e]),{...e,toast:Ab,dismiss:n=>Vr({type:"DISMISS_TOAST",toastId:n})}}function he(e,s,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return s==null?void 0:s(i)}}function id(e,s){if(typeof e=="function")return e(s);e!=null&&(e.current=s)}function ln(...e){return s=>{let n=!1;const r=e.map(i=>{const a=id(i,s);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let i=0;i<r.length;i++){const a=r[i];typeof a=="function"?a():id(e[i],null)}}}}function Ue(...e){return p.useCallback(ln(...e),e)}function Ib(e,s){const n=p.createContext(s),r=a=>{const{children:o,...l}=a,c=p.useMemo(()=>l,Object.values(l));return t.jsx(n.Provider,{value:c,children:o})};r.displayName=e+"Provider";function i(a){const o=p.useContext(n);if(o)return o;if(s!==void 0)return s;throw new Error(`\`${a}\` must be used within \`${e}\``)}return[r,i]}function Ns(e,s=[]){let n=[];function r(a,o){const l=p.createContext(o),c=n.length;n=[...n,o];const d=m=>{var v;const{scope:h,children:f,...g}=m,x=((v=h==null?void 0:h[e])==null?void 0:v[c])||l,y=p.useMemo(()=>g,Object.values(g));return t.jsx(x.Provider,{value:y,children:f})};d.displayName=a+"Provider";function u(m,h){var x;const f=((x=h==null?void 0:h[e])==null?void 0:x[c])||l,g=p.useContext(f);if(g)return g;if(o!==void 0)return o;throw new Error(`\`${m}\` must be used within \`${a}\``)}return[d,u]}const i=()=>{const a=n.map(o=>p.createContext(o));return function(l){const c=(l==null?void 0:l[e])||a;return p.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return i.scopeName=e,[r,Mb(i,...s)]}function Mb(...e){const s=e[0];if(e.length===1)return s;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(a){const o=r.reduce((l,{useScope:c,scopeName:d})=>{const m=c(a)[`__scope${d}`];return{...l,...m}},{});return p.useMemo(()=>({[`__scope${s.scopeName}`]:o}),[o])}};return n.scopeName=s.scopeName,n}function ad(e){const s=_b(e),n=p.forwardRef((r,i)=>{const{children:a,...o}=r,l=p.Children.toArray(a),c=l.find(Lb);if(c){const d=c.props.children,u=l.map(m=>m===c?p.Children.count(d)>1?p.Children.only(null):p.isValidElement(d)?d.props.children:null:m);return t.jsx(s,{...o,ref:i,children:p.isValidElement(d)?p.cloneElement(d,void 0,u):null})}return t.jsx(s,{...o,ref:i,children:a})});return n.displayName=`${e}.Slot`,n}function _b(e){const s=p.forwardRef((n,r)=>{const{children:i,...a}=n;if(p.isValidElement(i)){const o=Bb(i),l=Fb(a,i.props);return i.type!==p.Fragment&&(l.ref=r?ln(r,o):o),p.cloneElement(i,l)}return p.Children.count(i)>1?p.Children.only(null):null});return s.displayName=`${e}.SlotClone`,s}var Ob=Symbol("radix.slottable");function Lb(e){return p.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ob}function Fb(e,s){const n={...s};for(const r in s){const i=e[r],a=s[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...l)=>{const c=a(...l);return i(...l),c}:i&&(n[r]=i):r==="style"?n[r]={...i,...a}:r==="className"&&(n[r]=[i,a].filter(Boolean).join(" "))}return{...e,...n}}function Bb(e){var r,i;let s=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=s&&"isReactWarning"in s&&s.isReactWarning;return n?e.ref:(s=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=s&&"isReactWarning"in s&&s.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Km(e){const s=e+"CollectionProvider",[n,r]=Ns(s),[i,a]=n(s,{collectionRef:{current:null},itemMap:new Map}),o=x=>{const{scope:y,children:v}=x,b=Je.useRef(null),N=Je.useRef(new Map).current;return t.jsx(i,{scope:y,itemMap:N,collectionRef:b,children:v})};o.displayName=s;const l=e+"CollectionSlot",c=ad(l),d=Je.forwardRef((x,y)=>{const{scope:v,children:b}=x,N=a(l,v),S=Ue(y,N.collectionRef);return t.jsx(c,{ref:S,children:b})});d.displayName=l;const u=e+"CollectionItemSlot",m="data-radix-collection-item",h=ad(u),f=Je.forwardRef((x,y)=>{const{scope:v,children:b,...N}=x,S=Je.useRef(null),E=Ue(y,S),A=a(u,v);return Je.useEffect(()=>(A.itemMap.set(S,{ref:S,...N}),()=>void A.itemMap.delete(S))),t.jsx(h,{[m]:"",ref:E,children:b})});f.displayName=u;function g(x){const y=a(e+"CollectionConsumer",x);return Je.useCallback(()=>{const b=y.collectionRef.current;if(!b)return[];const N=Array.from(b.querySelectorAll(`[${m}]`));return Array.from(y.itemMap.values()).sort((A,j)=>N.indexOf(A.ref.current)-N.indexOf(j.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:o,Slot:d,ItemSlot:f},g,r]}function Vb(e){const s=Ub(e),n=p.forwardRef((r,i)=>{const{children:a,...o}=r,l=p.Children.toArray(a),c=l.find(zb);if(c){const d=c.props.children,u=l.map(m=>m===c?p.Children.count(d)>1?p.Children.only(null):p.isValidElement(d)?d.props.children:null:m);return t.jsx(s,{...o,ref:i,children:p.isValidElement(d)?p.cloneElement(d,void 0,u):null})}return t.jsx(s,{...o,ref:i,children:a})});return n.displayName=`${e}.Slot`,n}function Ub(e){const s=p.forwardRef((n,r)=>{const{children:i,...a}=n;if(p.isValidElement(i)){const o=Wb(i),l=Hb(a,i.props);return i.type!==p.Fragment&&(l.ref=r?ln(r,o):o),p.cloneElement(i,l)}return p.Children.count(i)>1?p.Children.only(null):null});return s.displayName=`${e}.SlotClone`,s}var $b=Symbol("radix.slottable");function zb(e){return p.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===$b}function Hb(e,s){const n={...s};for(const r in s){const i=e[r],a=s[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...l)=>{const c=a(...l);return i(...l),c}:i&&(n[r]=i):r==="style"?n[r]={...i,...a}:r==="className"&&(n[r]=[i,a].filter(Boolean).join(" "))}return{...e,...n}}function Wb(e){var r,i;let s=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=s&&"isReactWarning"in s&&s.isReactWarning;return n?e.ref:(s=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=s&&"isReactWarning"in s&&s.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Gb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ce=Gb.reduce((e,s)=>{const n=Vb(`Primitive.${s}`),r=p.forwardRef((i,a)=>{const{asChild:o,...l}=i,c=o?n:s;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(c,{...l,ref:a})});return r.displayName=`Primitive.${s}`,{...e,[s]:r}},{});function Ym(e,s){e&&nn.flushSync(()=>e.dispatchEvent(s))}function Qe(e){const s=p.useRef(e);return p.useEffect(()=>{s.current=e}),p.useMemo(()=>(...n)=>{var r;return(r=s.current)==null?void 0:r.call(s,...n)},[])}function qb(e,s=globalThis==null?void 0:globalThis.document){const n=Qe(e);p.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return s.addEventListener("keydown",r,{capture:!0}),()=>s.removeEventListener("keydown",r,{capture:!0})},[n,s])}var Kb="DismissableLayer",oo="dismissableLayer.update",Yb="dismissableLayer.pointerDownOutside",Xb="dismissableLayer.focusOutside",od,Xm=p.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Pi=p.forwardRef((e,s)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:a,onInteractOutside:o,onDismiss:l,...c}=e,d=p.useContext(Xm),[u,m]=p.useState(null),h=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,f]=p.useState({}),g=Ue(s,j=>m(j)),x=Array.from(d.layers),[y]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),v=x.indexOf(y),b=u?x.indexOf(u):-1,N=d.layersWithOutsidePointerEventsDisabled.size>0,S=b>=v,E=Qb(j=>{const C=j.target,M=[...d.branches].some(L=>L.contains(C));!S||M||(i==null||i(j),o==null||o(j),j.defaultPrevented||l==null||l())},h),A=Zb(j=>{const C=j.target;[...d.branches].some(L=>L.contains(C))||(a==null||a(j),o==null||o(j),j.defaultPrevented||l==null||l())},h);return qb(j=>{b===d.layers.size-1&&(r==null||r(j),!j.defaultPrevented&&l&&(j.preventDefault(),l()))},h),p.useEffect(()=>{if(u)return n&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(od=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(u)),d.layers.add(u),ld(),()=>{n&&d.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=od)}},[u,h,n,d]),p.useEffect(()=>()=>{u&&(d.layers.delete(u),d.layersWithOutsidePointerEventsDisabled.delete(u),ld())},[u,d]),p.useEffect(()=>{const j=()=>f({});return document.addEventListener(oo,j),()=>document.removeEventListener(oo,j)},[]),t.jsx(Ce.div,{...c,ref:g,style:{pointerEvents:N?S?"auto":"none":void 0,...e.style},onFocusCapture:he(e.onFocusCapture,A.onFocusCapture),onBlurCapture:he(e.onBlurCapture,A.onBlurCapture),onPointerDownCapture:he(e.onPointerDownCapture,E.onPointerDownCapture)})});Pi.displayName=Kb;var Jb="DismissableLayerBranch",Jm=p.forwardRef((e,s)=>{const n=p.useContext(Xm),r=p.useRef(null),i=Ue(s,r);return p.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),t.jsx(Ce.div,{...e,ref:i})});Jm.displayName=Jb;function Qb(e,s=globalThis==null?void 0:globalThis.document){const n=Qe(e),r=p.useRef(!1),i=p.useRef(()=>{});return p.useEffect(()=>{const a=l=>{if(l.target&&!r.current){let c=function(){Qm(Yb,n,d,{discrete:!0})};const d={originalEvent:l};l.pointerType==="touch"?(s.removeEventListener("click",i.current),i.current=c,s.addEventListener("click",i.current,{once:!0})):c()}else s.removeEventListener("click",i.current);r.current=!1},o=window.setTimeout(()=>{s.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(o),s.removeEventListener("pointerdown",a),s.removeEventListener("click",i.current)}},[s,n]),{onPointerDownCapture:()=>r.current=!0}}function Zb(e,s=globalThis==null?void 0:globalThis.document){const n=Qe(e),r=p.useRef(!1);return p.useEffect(()=>{const i=a=>{a.target&&!r.current&&Qm(Xb,n,{originalEvent:a},{discrete:!1})};return s.addEventListener("focusin",i),()=>s.removeEventListener("focusin",i)},[s,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ld(){const e=new CustomEvent(oo);document.dispatchEvent(e)}function Qm(e,s,n,{discrete:r}){const i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});s&&i.addEventListener(e,s,{once:!0}),r?Ym(i,a):i.dispatchEvent(a)}var e0=Pi,t0=Jm,Ut=globalThis!=null&&globalThis.document?p.useLayoutEffect:()=>{},s0="Portal",Ai=p.forwardRef((e,s)=>{var l;const{container:n,...r}=e,[i,a]=p.useState(!1);Ut(()=>a(!0),[]);const o=n||i&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return o?Rm.createPortal(t.jsx(Ce.div,{...r,ref:s}),o):null});Ai.displayName=s0;function r0(e,s){return p.useReducer((n,r)=>s[n][r]??n,e)}var Nt=e=>{const{present:s,children:n}=e,r=n0(s),i=typeof n=="function"?n({present:r.isPresent}):p.Children.only(n),a=Ue(r.ref,i0(i));return typeof n=="function"||r.isPresent?p.cloneElement(i,{ref:a}):null};Nt.displayName="Presence";function n0(e){const[s,n]=p.useState(),r=p.useRef(null),i=p.useRef(e),a=p.useRef("none"),o=e?"mounted":"unmounted",[l,c]=r0(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return p.useEffect(()=>{const d=Rn(r.current);a.current=l==="mounted"?d:"none"},[l]),Ut(()=>{const d=r.current,u=i.current;if(u!==e){const h=a.current,f=Rn(d);e?c("MOUNT"):f==="none"||(d==null?void 0:d.display)==="none"?c("UNMOUNT"):c(u&&h!==f?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,c]),Ut(()=>{if(s){let d;const u=s.ownerDocument.defaultView??window,m=f=>{const x=Rn(r.current).includes(CSS.escape(f.animationName));if(f.target===s&&x&&(c("ANIMATION_END"),!i.current)){const y=s.style.animationFillMode;s.style.animationFillMode="forwards",d=u.setTimeout(()=>{s.style.animationFillMode==="forwards"&&(s.style.animationFillMode=y)})}},h=f=>{f.target===s&&(a.current=Rn(r.current))};return s.addEventListener("animationstart",h),s.addEventListener("animationcancel",m),s.addEventListener("animationend",m),()=>{u.clearTimeout(d),s.removeEventListener("animationstart",h),s.removeEventListener("animationcancel",m),s.removeEventListener("animationend",m)}}else c("ANIMATION_END")},[s,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:p.useCallback(d=>{r.current=d?getComputedStyle(d):null,n(d)},[])}}function Rn(e){return(e==null?void 0:e.animationName)||"none"}function i0(e){var r,i;let s=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=s&&"isReactWarning"in s&&s.isReactWarning;return n?e.ref:(s=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=s&&"isReactWarning"in s&&s.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var a0=Ei[" useInsertionEffect ".trim().toString()]||Ut;function cn({prop:e,defaultProp:s,onChange:n=()=>{},caller:r}){const[i,a,o]=o0({defaultProp:s,onChange:n}),l=e!==void 0,c=l?e:i;{const u=p.useRef(e!==void 0);p.useEffect(()=>{const m=u.current;m!==l&&console.warn(`${r} is changing from ${m?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=l},[l,r])}const d=p.useCallback(u=>{var m;if(l){const h=l0(u)?u(e):u;h!==e&&((m=o.current)==null||m.call(o,h))}else a(u)},[l,e,a,o]);return[c,d]}function o0({defaultProp:e,onChange:s}){const[n,r]=p.useState(e),i=p.useRef(n),a=p.useRef(s);return a0(()=>{a.current=s},[s]),p.useEffect(()=>{var o;i.current!==n&&((o=a.current)==null||o.call(a,n),i.current=n)},[n,i]),[n,r,a]}function l0(e){return typeof e=="function"}var c0=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),d0="VisuallyHidden",Di=p.forwardRef((e,s)=>t.jsx(Ce.span,{...e,ref:s,style:{...c0,...e.style}}));Di.displayName=d0;var u0=Di,nl="ToastProvider",[il,m0,p0]=Km("Toast"),[Zm]=Ns("Toast",[p0]),[h0,Ii]=Zm(nl),ep=e=>{const{__scopeToast:s,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:a=50,children:o}=e,[l,c]=p.useState(null),[d,u]=p.useState(0),m=p.useRef(!1),h=p.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${nl}\`. Expected non-empty \`string\`.`),t.jsx(il.Provider,{scope:s,children:t.jsx(h0,{scope:s,label:n,duration:r,swipeDirection:i,swipeThreshold:a,toastCount:d,viewport:l,onViewportChange:c,onToastAdd:p.useCallback(()=>u(f=>f+1),[]),onToastRemove:p.useCallback(()=>u(f=>f-1),[]),isFocusedToastEscapeKeyDownRef:m,isClosePausedRef:h,children:o})})};ep.displayName=nl;var tp="ToastViewport",f0=["F8"],lo="toast.viewportPause",co="toast.viewportResume",sp=p.forwardRef((e,s)=>{const{__scopeToast:n,hotkey:r=f0,label:i="Notifications ({hotkey})",...a}=e,o=Ii(tp,n),l=m0(n),c=p.useRef(null),d=p.useRef(null),u=p.useRef(null),m=p.useRef(null),h=Ue(s,m,o.onViewportChange),f=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=o.toastCount>0;p.useEffect(()=>{const y=v=>{var N;r.length!==0&&r.every(S=>v[S]||v.code===S)&&((N=m.current)==null||N.focus())};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[r]),p.useEffect(()=>{const y=c.current,v=m.current;if(g&&y&&v){const b=()=>{if(!o.isClosePausedRef.current){const A=new CustomEvent(lo);v.dispatchEvent(A),o.isClosePausedRef.current=!0}},N=()=>{if(o.isClosePausedRef.current){const A=new CustomEvent(co);v.dispatchEvent(A),o.isClosePausedRef.current=!1}},S=A=>{!y.contains(A.relatedTarget)&&N()},E=()=>{y.contains(document.activeElement)||N()};return y.addEventListener("focusin",b),y.addEventListener("focusout",S),y.addEventListener("pointermove",b),y.addEventListener("pointerleave",E),window.addEventListener("blur",b),window.addEventListener("focus",N),()=>{y.removeEventListener("focusin",b),y.removeEventListener("focusout",S),y.removeEventListener("pointermove",b),y.removeEventListener("pointerleave",E),window.removeEventListener("blur",b),window.removeEventListener("focus",N)}}},[g,o.isClosePausedRef]);const x=p.useCallback(({tabbingDirection:y})=>{const b=l().map(N=>{const S=N.ref.current,E=[S,...E0(S)];return y==="forwards"?E:E.reverse()});return(y==="forwards"?b.reverse():b).flat()},[l]);return p.useEffect(()=>{const y=m.current;if(y){const v=b=>{var E,A,j;const N=b.altKey||b.ctrlKey||b.metaKey;if(b.key==="Tab"&&!N){const C=document.activeElement,M=b.shiftKey;if(b.target===y&&M){(E=d.current)==null||E.focus();return}const Y=x({tabbingDirection:M?"backwards":"forwards"}),ie=Y.findIndex(V=>V===C);Sa(Y.slice(ie+1))?b.preventDefault():M?(A=d.current)==null||A.focus():(j=u.current)==null||j.focus()}};return y.addEventListener("keydown",v),()=>y.removeEventListener("keydown",v)}},[l,x]),t.jsxs(t0,{ref:c,role:"region","aria-label":i.replace("{hotkey}",f),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&t.jsx(uo,{ref:d,onFocusFromOutsideViewport:()=>{const y=x({tabbingDirection:"forwards"});Sa(y)}}),t.jsx(il.Slot,{scope:n,children:t.jsx(Ce.ol,{tabIndex:-1,...a,ref:h})}),g&&t.jsx(uo,{ref:u,onFocusFromOutsideViewport:()=>{const y=x({tabbingDirection:"backwards"});Sa(y)}})]})});sp.displayName=tp;var rp="ToastFocusProxy",uo=p.forwardRef((e,s)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,a=Ii(rp,n);return t.jsx(Di,{tabIndex:0,...i,ref:s,style:{position:"fixed"},onFocus:o=>{var d;const l=o.relatedTarget;!((d=a.viewport)!=null&&d.contains(l))&&r()}})});uo.displayName=rp;var dn="Toast",x0="toast.swipeStart",g0="toast.swipeMove",y0="toast.swipeCancel",v0="toast.swipeEnd",np=p.forwardRef((e,s)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:a,...o}=e,[l,c]=cn({prop:r,defaultProp:i??!0,onChange:a,caller:dn});return t.jsx(Nt,{present:n||l,children:t.jsx(N0,{open:l,...o,ref:s,onClose:()=>c(!1),onPause:Qe(e.onPause),onResume:Qe(e.onResume),onSwipeStart:he(e.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:he(e.onSwipeMove,d=>{const{x:u,y:m}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${m}px`)}),onSwipeCancel:he(e.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:he(e.onSwipeEnd,d=>{const{x:u,y:m}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${m}px`),c(!1)})})})});np.displayName=dn;var[b0,j0]=Zm(dn,{onClose(){}}),N0=p.forwardRef((e,s)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:a,onClose:o,onEscapeKeyDown:l,onPause:c,onResume:d,onSwipeStart:u,onSwipeMove:m,onSwipeCancel:h,onSwipeEnd:f,...g}=e,x=Ii(dn,n),[y,v]=p.useState(null),b=Ue(s,V=>v(V)),N=p.useRef(null),S=p.useRef(null),E=i||x.duration,A=p.useRef(0),j=p.useRef(E),C=p.useRef(0),{onToastAdd:M,onToastRemove:L}=x,$=Qe(()=>{var re;(y==null?void 0:y.contains(document.activeElement))&&((re=x.viewport)==null||re.focus()),o()}),Y=p.useCallback(V=>{!V||V===1/0||(window.clearTimeout(C.current),A.current=new Date().getTime(),C.current=window.setTimeout($,V))},[$]);p.useEffect(()=>{const V=x.viewport;if(V){const re=()=>{Y(j.current),d==null||d()},Z=()=>{const J=new Date().getTime()-A.current;j.current=j.current-J,window.clearTimeout(C.current),c==null||c()};return V.addEventListener(lo,Z),V.addEventListener(co,re),()=>{V.removeEventListener(lo,Z),V.removeEventListener(co,re)}}},[x.viewport,E,c,d,Y]),p.useEffect(()=>{a&&!x.isClosePausedRef.current&&Y(E)},[a,E,x.isClosePausedRef,Y]),p.useEffect(()=>(M(),()=>L()),[M,L]);const ie=p.useMemo(()=>y?up(y):null,[y]);return x.viewport?t.jsxs(t.Fragment,{children:[ie&&t.jsx(w0,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite",children:ie}),t.jsx(b0,{scope:n,onClose:$,children:nn.createPortal(t.jsx(il.ItemSlot,{scope:n,children:t.jsx(e0,{asChild:!0,onEscapeKeyDown:he(l,()=>{x.isFocusedToastEscapeKeyDownRef.current||$(),x.isFocusedToastEscapeKeyDownRef.current=!1}),children:t.jsx(Ce.li,{tabIndex:0,"data-state":a?"open":"closed","data-swipe-direction":x.swipeDirection,...g,ref:b,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:he(e.onKeyDown,V=>{V.key==="Escape"&&(l==null||l(V.nativeEvent),V.nativeEvent.defaultPrevented||(x.isFocusedToastEscapeKeyDownRef.current=!0,$()))}),onPointerDown:he(e.onPointerDown,V=>{V.button===0&&(N.current={x:V.clientX,y:V.clientY})}),onPointerMove:he(e.onPointerMove,V=>{if(!N.current)return;const re=V.clientX-N.current.x,Z=V.clientY-N.current.y,J=!!S.current,D=["left","right"].includes(x.swipeDirection),me=["left","up"].includes(x.swipeDirection)?Math.min:Math.max,Te=D?me(0,re):0,T=D?0:me(0,Z),O=V.pointerType==="touch"?10:2,z={x:Te,y:T},H={originalEvent:V,delta:z};J?(S.current=z,Pn(g0,m,H,{discrete:!1})):cd(z,x.swipeDirection,O)?(S.current=z,Pn(x0,u,H,{discrete:!1}),V.target.setPointerCapture(V.pointerId)):(Math.abs(re)>O||Math.abs(Z)>O)&&(N.current=null)}),onPointerUp:he(e.onPointerUp,V=>{const re=S.current,Z=V.target;if(Z.hasPointerCapture(V.pointerId)&&Z.releasePointerCapture(V.pointerId),S.current=null,N.current=null,re){const J=V.currentTarget,D={originalEvent:V,delta:re};cd(re,x.swipeDirection,x.swipeThreshold)?Pn(v0,f,D,{discrete:!0}):Pn(y0,h,D,{discrete:!0}),J.addEventListener("click",me=>me.preventDefault(),{once:!0})}})})})}),x.viewport)})]}):null}),w0=e=>{const{__scopeToast:s,children:n,...r}=e,i=Ii(dn,s),[a,o]=p.useState(!1),[l,c]=p.useState(!1);return T0(()=>o(!0)),p.useEffect(()=>{const d=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(d)},[]),l?null:t.jsx(Ai,{asChild:!0,children:t.jsx(Di,{...r,children:a&&t.jsxs(t.Fragment,{children:[i.label," ",n]})})})},S0="ToastTitle",ip=p.forwardRef((e,s)=>{const{__scopeToast:n,...r}=e;return t.jsx(Ce.div,{...r,ref:s})});ip.displayName=S0;var C0="ToastDescription",ap=p.forwardRef((e,s)=>{const{__scopeToast:n,...r}=e;return t.jsx(Ce.div,{...r,ref:s})});ap.displayName=C0;var op="ToastAction",lp=p.forwardRef((e,s)=>{const{altText:n,...r}=e;return n.trim()?t.jsx(dp,{altText:n,asChild:!0,children:t.jsx(al,{...r,ref:s})}):(console.error(`Invalid prop \`altText\` supplied to \`${op}\`. Expected non-empty \`string\`.`),null)});lp.displayName=op;var cp="ToastClose",al=p.forwardRef((e,s)=>{const{__scopeToast:n,...r}=e,i=j0(cp,n);return t.jsx(dp,{asChild:!0,children:t.jsx(Ce.button,{type:"button",...r,ref:s,onClick:he(e.onClick,i.onClose)})})});al.displayName=cp;var dp=p.forwardRef((e,s)=>{const{__scopeToast:n,altText:r,...i}=e;return t.jsx(Ce.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:s})});function up(e){const s=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&s.push(r.textContent),k0(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",a=r.dataset.radixToastAnnounceExclude==="";if(!i)if(a){const o=r.dataset.radixToastAnnounceAlt;o&&s.push(o)}else s.push(...up(r))}}),s}function Pn(e,s,n,{discrete:r}){const i=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});s&&i.addEventListener(e,s,{once:!0}),r?Ym(i,a):i.dispatchEvent(a)}var cd=(e,s,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),a=r>i;return s==="left"||s==="right"?a&&r>n:!a&&i>n};function T0(e=()=>{}){const s=Qe(e);Ut(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(s)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[s])}function k0(e){return e.nodeType===e.ELEMENT_NODE}function E0(e){const s=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)s.push(n.currentNode);return s}function Sa(e){const s=document.activeElement;return e.some(n=>n===s?!0:(n.focus(),document.activeElement!==s))}var R0=ep,mp=sp,pp=np,hp=ip,fp=ap,xp=lp,gp=al;function yp(e){var s,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(s=0;s<i;s++)e[s]&&(n=yp(e[s]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function vp(){for(var e,s,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(s=yp(e))&&(r&&(r+=" "),r+=s);return r}const dd=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,ud=vp,Mi=(e,s)=>n=>{var r;if((s==null?void 0:s.variants)==null)return ud(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:a}=s,o=Object.keys(i).map(d=>{const u=n==null?void 0:n[d],m=a==null?void 0:a[d];if(u===null)return null;const h=dd(u)||dd(m);return i[d][h]}),l=n&&Object.entries(n).reduce((d,u)=>{let[m,h]=u;return h===void 0||(d[m]=h),d},{}),c=s==null||(r=s.compoundVariants)===null||r===void 0?void 0:r.reduce((d,u)=>{let{class:m,className:h,...f}=u;return Object.entries(f).every(g=>{let[x,y]=g;return Array.isArray(y)?y.includes({...a,...l}[x]):{...a,...l}[x]===y})?[...d,m,h]:d},[]);return ud(e,o,c,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A0=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,n,r)=>r?r.toUpperCase():n.toLowerCase()),md=e=>{const s=A0(e);return s.charAt(0).toUpperCase()+s.slice(1)},bp=(...e)=>e.filter((s,n,r)=>!!s&&s.trim()!==""&&r.indexOf(s)===n).join(" ").trim(),D0=e=>{for(const s in e)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var I0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=p.forwardRef(({color:e="currentColor",size:s=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:o,...l},c)=>p.createElement("svg",{ref:c,...I0,width:s,height:s,stroke:e,strokeWidth:r?Number(n)*24/Number(s):n,className:bp("lucide",i),...!a&&!D0(l)&&{"aria-hidden":"true"},...l},[...o.map(([d,u])=>p.createElement(d,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(e,s)=>{const n=p.forwardRef(({className:r,...i},a)=>p.createElement(M0,{ref:a,iconNode:s,className:bp(`lucide-${P0(md(e))}`,`lucide-${e}`,r),...i}));return n.displayName=md(e),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]],O0=B("accessibility",_0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Me=B("activity",L0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],bt=B("arrow-right",F0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],V0=B("arrow-up-right",B0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],Yr=B("atom",U0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ut=B("book-open",$0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],H0=B("box",z0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],nr=B("bug",W0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17v-3",key:"17ska0"}]],q0=B("chart-column-increasing",G0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],pd=B("chart-column",K0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],Ur=B("chart-pie",Y0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],J0=B("check",X0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Z0=B("chevron-down",Q0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],tj=B("chevron-left",ej);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],hr=B("chevron-right",sj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],jp=B("circle-alert",rj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ce=B("circle-check",nj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aj=B("circle-x",ij);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oj=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Np=B("clock",oj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],fr=B("cloud",lj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cj=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Vs=B("code-xml",cj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],uj=B("code",dj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],_i=B("coffee",mj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]],ol=B("cog",pj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]],wp=B("command",hj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]],xj=B("container",fj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],yj=B("copy",gj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],bj=B("corner-down-left",vj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Sp=B("cpu",jj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Rt=B("database",Nj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],zs=B("dollar-sign",wj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],di=B("external-link",Sj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Oi=B("eye",Cj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],Mt=B("file-code",Tj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ll=B("file-text",kj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],Rj=B("fingerprint-pattern",Ej);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],rt=B("flask-conical",Pj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=[["path",{d:"M10 10.5 8 13l2 2.5",key:"m4t9c1"}],["path",{d:"m14 10.5 2 2.5-2 2.5",key:"14w2eb"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",key:"1u1bxd"}]],Dj=B("folder-code",Aj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ij=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]],Mj=B("folder-tree",Ij);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],cl=B("gauge",_j);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oj=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],ws=B("git-branch",Oj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],Cp=B("git-commit-horizontal",Lj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fj=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],Bj=B("git-merge",Fj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]],mo=B("git-pull-request",Vj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uj=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],po=B("github",Uj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $j=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Tp=B("globe",$j);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Hj=B("hash",zj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wj=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],kp=B("history",Wj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gj=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Ep=B("house",Gj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Kj=B("info",qj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yj=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Oe=B("layers",Yj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xj=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],ho=B("leaf",Xj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jj=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],dl=B("lightbulb",Jj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qj=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],Zj=B("list-checks",Qj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],hs=B("lock",eN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],sN=B("mail",tN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],nN=B("menu",rN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],ul=B("message-square",iN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],oN=B("moon",aN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Rp=B("navigation",lN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],ml=B("network",cN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Pp=B("palette",dN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],Ap=B("panels-top-left",uN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Li=B("pen-tool",mN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],Dp=B("puzzle",pN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ip=B("refresh-cw",hN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],pl=B("rocket",fN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],fo=B("rotate-ccw",xN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],yN=B("scale",gN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]],Fi=B("scan-search",vN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Os=B("search",bN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Ss=B("server",jN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],mt=B("settings",NN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],SN=B("share-2",wN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Kn=B("shield-alert",CN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],tt=B("shield-check",TN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],jt=B("shield",kN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Bi=B("smartphone",EN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],un=B("sparkles",RN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],hd=B("sun",PN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Vi=B("target",AN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],$t=B("terminal",DN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IN=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",key:"125lnx"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]],Mp=B("test-tube",IN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],ui=B("trending-down",MN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Ca=B("trending-up",_N);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],fs=B("triangle-alert",ON);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],xo=B("users",LN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],BN=B("workflow",FN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],hl=B("wrench",VN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_p=B("x",UN);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $N=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],De=B("zap",$N),zN=(e,s)=>{const n=new Array(e.length+s.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<s.length;r++)n[e.length+r]=s[r];return n},HN=(e,s)=>({classGroupId:e,validator:s}),Op=(e=new Map,s=null,n)=>({nextPart:e,validators:s,classGroupId:n}),mi="-",fd=[],WN="arbitrary..",GN=e=>{const s=KN(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return qN(o);const l=o.split(mi),c=l[0]===""&&l.length>1?1:0;return Lp(l,c,s)},getConflictingClassGroupIds:(o,l)=>{if(l){const c=r[o],d=n[o];return c?d?zN(d,c):c:d||fd}return n[o]||fd}}},Lp=(e,s,n)=>{if(e.length-s===0)return n.classGroupId;const i=e[s],a=n.nextPart.get(i);if(a){const d=Lp(e,s+1,a);if(d)return d}const o=n.validators;if(o===null)return;const l=s===0?e.join(mi):e.slice(s).join(mi),c=o.length;for(let d=0;d<c;d++){const u=o[d];if(u.validator(l))return u.classGroupId}},qN=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const s=e.slice(1,-1),n=s.indexOf(":"),r=s.slice(0,n);return r?WN+r:void 0})(),KN=e=>{const{theme:s,classGroups:n}=e;return YN(n,s)},YN=(e,s)=>{const n=Op();for(const r in e){const i=e[r];fl(i,n,r,s)}return n},fl=(e,s,n,r)=>{const i=e.length;for(let a=0;a<i;a++){const o=e[a];XN(o,s,n,r)}},XN=(e,s,n,r)=>{if(typeof e=="string"){JN(e,s,n);return}if(typeof e=="function"){QN(e,s,n,r);return}ZN(e,s,n,r)},JN=(e,s,n)=>{const r=e===""?s:Fp(s,e);r.classGroupId=n},QN=(e,s,n,r)=>{if(ew(e)){fl(e(r),s,n,r);return}s.validators===null&&(s.validators=[]),s.validators.push(HN(n,e))},ZN=(e,s,n,r)=>{const i=Object.entries(e),a=i.length;for(let o=0;o<a;o++){const[l,c]=i[o];fl(c,Fp(s,l),n,r)}},Fp=(e,s)=>{let n=e;const r=s.split(mi),i=r.length;for(let a=0;a<i;a++){const o=r[a];let l=n.nextPart.get(o);l||(l=Op(),n.nextPart.set(o,l)),n=l}return n},ew=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,tw=e=>{if(e<1)return{get:()=>{},set:()=>{}};let s=0,n=Object.create(null),r=Object.create(null);const i=(a,o)=>{n[a]=o,s++,s>e&&(s=0,r=n,n=Object.create(null))};return{get(a){let o=n[a];if(o!==void 0)return o;if((o=r[a])!==void 0)return i(a,o),o},set(a,o){a in n?n[a]=o:i(a,o)}}},go="!",xd=":",sw=[],gd=(e,s,n,r,i)=>({modifiers:e,hasImportantModifier:s,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),rw=e=>{const{prefix:s,experimentalParseClassName:n}=e;let r=i=>{const a=[];let o=0,l=0,c=0,d;const u=i.length;for(let x=0;x<u;x++){const y=i[x];if(o===0&&l===0){if(y===xd){a.push(i.slice(c,x)),c=x+1;continue}if(y==="/"){d=x;continue}}y==="["?o++:y==="]"?o--:y==="("?l++:y===")"&&l--}const m=a.length===0?i:i.slice(c);let h=m,f=!1;m.endsWith(go)?(h=m.slice(0,-1),f=!0):m.startsWith(go)&&(h=m.slice(1),f=!0);const g=d&&d>c?d-c:void 0;return gd(a,f,h,g)};if(s){const i=s+xd,a=r;r=o=>o.startsWith(i)?a(o.slice(i.length)):gd(sw,!1,o,void 0,!0)}if(n){const i=r;r=a=>n({className:a,parseClassName:i})}return r},nw=e=>{const s=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{s.set(n,1e6+r)}),n=>{const r=[];let i=[];for(let a=0;a<n.length;a++){const o=n[a],l=o[0]==="[",c=s.has(o);l||c?(i.length>0&&(i.sort(),r.push(...i),i=[]),r.push(o)):i.push(o)}return i.length>0&&(i.sort(),r.push(...i)),r}},iw=e=>({cache:tw(e.cacheSize),parseClassName:rw(e),sortModifiers:nw(e),...GN(e)}),aw=/\s+/,ow=(e,s)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a}=s,o=[],l=e.trim().split(aw);let c="";for(let d=l.length-1;d>=0;d-=1){const u=l[d],{isExternal:m,modifiers:h,hasImportantModifier:f,baseClassName:g,maybePostfixModifierPosition:x}=n(u);if(m){c=u+(c.length>0?" "+c:c);continue}let y=!!x,v=r(y?g.substring(0,x):g);if(!v){if(!y){c=u+(c.length>0?" "+c:c);continue}if(v=r(g),!v){c=u+(c.length>0?" "+c:c);continue}y=!1}const b=h.length===0?"":h.length===1?h[0]:a(h).join(":"),N=f?b+go:b,S=N+v;if(o.indexOf(S)>-1)continue;o.push(S);const E=i(v,y);for(let A=0;A<E.length;++A){const j=E[A];o.push(N+j)}c=u+(c.length>0?" "+c:c)}return c},lw=(...e)=>{let s=0,n,r,i="";for(;s<e.length;)(n=e[s++])&&(r=Bp(n))&&(i&&(i+=" "),i+=r);return i},Bp=e=>{if(typeof e=="string")return e;let s,n="";for(let r=0;r<e.length;r++)e[r]&&(s=Bp(e[r]))&&(n&&(n+=" "),n+=s);return n},cw=(e,...s)=>{let n,r,i,a;const o=c=>{const d=s.reduce((u,m)=>m(u),e());return n=iw(d),r=n.cache.get,i=n.cache.set,a=l,l(c)},l=c=>{const d=r(c);if(d)return d;const u=ow(c,n);return i(c,u),u};return a=o,(...c)=>a(lw(...c))},dw=[],Ke=e=>{const s=n=>n[e]||dw;return s.isThemeGetter=!0,s},Vp=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Up=/^\((?:(\w[\w-]*):)?(.+)\)$/i,uw=/^\d+\/\d+$/,mw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,pw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,hw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,fw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,xw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ks=e=>uw.test(e),fe=e=>!!e&&!Number.isNaN(Number(e)),as=e=>!!e&&Number.isInteger(Number(e)),Ta=e=>e.endsWith("%")&&fe(e.slice(0,-1)),Xt=e=>mw.test(e),gw=()=>!0,yw=e=>pw.test(e)&&!hw.test(e),$p=()=>!1,vw=e=>fw.test(e),bw=e=>xw.test(e),jw=e=>!q(e)&&!K(e),Nw=e=>xr(e,Wp,$p),q=e=>Vp.test(e),Rs=e=>xr(e,Gp,yw),ka=e=>xr(e,kw,fe),yd=e=>xr(e,zp,$p),ww=e=>xr(e,Hp,bw),An=e=>xr(e,qp,vw),K=e=>Up.test(e),Ir=e=>gr(e,Gp),Sw=e=>gr(e,Ew),vd=e=>gr(e,zp),Cw=e=>gr(e,Wp),Tw=e=>gr(e,Hp),Dn=e=>gr(e,qp,!0),xr=(e,s,n)=>{const r=Vp.exec(e);return r?r[1]?s(r[1]):n(r[2]):!1},gr=(e,s,n=!1)=>{const r=Up.exec(e);return r?r[1]?s(r[1]):n:!1},zp=e=>e==="position"||e==="percentage",Hp=e=>e==="image"||e==="url",Wp=e=>e==="length"||e==="size"||e==="bg-size",Gp=e=>e==="length",kw=e=>e==="number",Ew=e=>e==="family-name",qp=e=>e==="shadow",Rw=()=>{const e=Ke("color"),s=Ke("font"),n=Ke("text"),r=Ke("font-weight"),i=Ke("tracking"),a=Ke("leading"),o=Ke("breakpoint"),l=Ke("container"),c=Ke("spacing"),d=Ke("radius"),u=Ke("shadow"),m=Ke("inset-shadow"),h=Ke("text-shadow"),f=Ke("drop-shadow"),g=Ke("blur"),x=Ke("perspective"),y=Ke("aspect"),v=Ke("ease"),b=Ke("animate"),N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],S=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],E=()=>[...S(),K,q],A=()=>["auto","hidden","clip","visible","scroll"],j=()=>["auto","contain","none"],C=()=>[K,q,c],M=()=>[Ks,"full","auto",...C()],L=()=>[as,"none","subgrid",K,q],$=()=>["auto",{span:["full",as,K,q]},as,K,q],Y=()=>[as,"auto",K,q],ie=()=>["auto","min","max","fr",K,q],V=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],re=()=>["start","end","center","stretch","center-safe","end-safe"],Z=()=>["auto",...C()],J=()=>[Ks,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...C()],D=()=>[e,K,q],me=()=>[...S(),vd,yd,{position:[K,q]}],Te=()=>["no-repeat",{repeat:["","x","y","space","round"]}],T=()=>["auto","cover","contain",Cw,Nw,{size:[K,q]}],O=()=>[Ta,Ir,Rs],z=()=>["","none","full",d,K,q],H=()=>["",fe,Ir,Rs],ne=()=>["solid","dashed","dotted","double"],de=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],te=()=>[fe,Ta,vd,yd],$e=()=>["","none",g,K,q],Pe=()=>["none",fe,K,q],St=()=>["none",fe,K,q],rs=()=>[fe,K,q],Ie=()=>[Ks,"full",...C()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Xt],breakpoint:[Xt],color:[gw],container:[Xt],"drop-shadow":[Xt],ease:["in","out","in-out"],font:[jw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Xt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Xt],shadow:[Xt],spacing:["px",fe],text:[Xt],"text-shadow":[Xt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ks,q,K,y]}],container:["container"],columns:[{columns:[fe,q,K,l]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:E()}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:M()}],"inset-x":[{"inset-x":M()}],"inset-y":[{"inset-y":M()}],start:[{start:M()}],end:[{end:M()}],top:[{top:M()}],right:[{right:M()}],bottom:[{bottom:M()}],left:[{left:M()}],visibility:["visible","invisible","collapse"],z:[{z:[as,"auto",K,q]}],basis:[{basis:[Ks,"full","auto",l,...C()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[fe,Ks,"auto","initial","none",q]}],grow:[{grow:["",fe,K,q]}],shrink:[{shrink:["",fe,K,q]}],order:[{order:[as,"first","last","none",K,q]}],"grid-cols":[{"grid-cols":L()}],"col-start-end":[{col:$()}],"col-start":[{"col-start":Y()}],"col-end":[{"col-end":Y()}],"grid-rows":[{"grid-rows":L()}],"row-start-end":[{row:$()}],"row-start":[{"row-start":Y()}],"row-end":[{"row-end":Y()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ie()}],"auto-rows":[{"auto-rows":ie()}],gap:[{gap:C()}],"gap-x":[{"gap-x":C()}],"gap-y":[{"gap-y":C()}],"justify-content":[{justify:[...V(),"normal"]}],"justify-items":[{"justify-items":[...re(),"normal"]}],"justify-self":[{"justify-self":["auto",...re()]}],"align-content":[{content:["normal",...V()]}],"align-items":[{items:[...re(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...re(),{baseline:["","last"]}]}],"place-content":[{"place-content":V()}],"place-items":[{"place-items":[...re(),"baseline"]}],"place-self":[{"place-self":["auto",...re()]}],p:[{p:C()}],px:[{px:C()}],py:[{py:C()}],ps:[{ps:C()}],pe:[{pe:C()}],pt:[{pt:C()}],pr:[{pr:C()}],pb:[{pb:C()}],pl:[{pl:C()}],m:[{m:Z()}],mx:[{mx:Z()}],my:[{my:Z()}],ms:[{ms:Z()}],me:[{me:Z()}],mt:[{mt:Z()}],mr:[{mr:Z()}],mb:[{mb:Z()}],ml:[{ml:Z()}],"space-x":[{"space-x":C()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":C()}],"space-y-reverse":["space-y-reverse"],size:[{size:J()}],w:[{w:[l,"screen",...J()]}],"min-w":[{"min-w":[l,"screen","none",...J()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[o]},...J()]}],h:[{h:["screen","lh",...J()]}],"min-h":[{"min-h":["screen","lh","none",...J()]}],"max-h":[{"max-h":["screen","lh",...J()]}],"font-size":[{text:["base",n,Ir,Rs]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,K,ka]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ta,q]}],"font-family":[{font:[Sw,q,s]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,K,q]}],"line-clamp":[{"line-clamp":[fe,"none",K,ka]}],leading:[{leading:[a,...C()]}],"list-image":[{"list-image":["none",K,q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",K,q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ne(),"wavy"]}],"text-decoration-thickness":[{decoration:[fe,"from-font","auto",K,Rs]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[fe,"auto",K,q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:C()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",K,q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",K,q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:me()}],"bg-repeat":[{bg:Te()}],"bg-size":[{bg:T()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},as,K,q],radial:["",K,q],conic:[as,K,q]},Tw,ww]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:O()}],"gradient-via-pos":[{via:O()}],"gradient-to-pos":[{to:O()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:z()}],"rounded-s":[{"rounded-s":z()}],"rounded-e":[{"rounded-e":z()}],"rounded-t":[{"rounded-t":z()}],"rounded-r":[{"rounded-r":z()}],"rounded-b":[{"rounded-b":z()}],"rounded-l":[{"rounded-l":z()}],"rounded-ss":[{"rounded-ss":z()}],"rounded-se":[{"rounded-se":z()}],"rounded-ee":[{"rounded-ee":z()}],"rounded-es":[{"rounded-es":z()}],"rounded-tl":[{"rounded-tl":z()}],"rounded-tr":[{"rounded-tr":z()}],"rounded-br":[{"rounded-br":z()}],"rounded-bl":[{"rounded-bl":z()}],"border-w":[{border:H()}],"border-w-x":[{"border-x":H()}],"border-w-y":[{"border-y":H()}],"border-w-s":[{"border-s":H()}],"border-w-e":[{"border-e":H()}],"border-w-t":[{"border-t":H()}],"border-w-r":[{"border-r":H()}],"border-w-b":[{"border-b":H()}],"border-w-l":[{"border-l":H()}],"divide-x":[{"divide-x":H()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":H()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ne(),"hidden","none"]}],"divide-style":[{divide:[...ne(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...ne(),"none","hidden"]}],"outline-offset":[{"outline-offset":[fe,K,q]}],"outline-w":[{outline:["",fe,Ir,Rs]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",u,Dn,An]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",m,Dn,An]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:H()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[fe,Rs]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":H()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",h,Dn,An]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[fe,K,q]}],"mix-blend":[{"mix-blend":[...de(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":de()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[fe]}],"mask-image-linear-from-pos":[{"mask-linear-from":te()}],"mask-image-linear-to-pos":[{"mask-linear-to":te()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":te()}],"mask-image-t-to-pos":[{"mask-t-to":te()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":te()}],"mask-image-r-to-pos":[{"mask-r-to":te()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":te()}],"mask-image-b-to-pos":[{"mask-b-to":te()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":te()}],"mask-image-l-to-pos":[{"mask-l-to":te()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":te()}],"mask-image-x-to-pos":[{"mask-x-to":te()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":te()}],"mask-image-y-to-pos":[{"mask-y-to":te()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[K,q]}],"mask-image-radial-from-pos":[{"mask-radial-from":te()}],"mask-image-radial-to-pos":[{"mask-radial-to":te()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":S()}],"mask-image-conic-pos":[{"mask-conic":[fe]}],"mask-image-conic-from-pos":[{"mask-conic-from":te()}],"mask-image-conic-to-pos":[{"mask-conic-to":te()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:me()}],"mask-repeat":[{mask:Te()}],"mask-size":[{mask:T()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",K,q]}],filter:[{filter:["","none",K,q]}],blur:[{blur:$e()}],brightness:[{brightness:[fe,K,q]}],contrast:[{contrast:[fe,K,q]}],"drop-shadow":[{"drop-shadow":["","none",f,Dn,An]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",fe,K,q]}],"hue-rotate":[{"hue-rotate":[fe,K,q]}],invert:[{invert:["",fe,K,q]}],saturate:[{saturate:[fe,K,q]}],sepia:[{sepia:["",fe,K,q]}],"backdrop-filter":[{"backdrop-filter":["","none",K,q]}],"backdrop-blur":[{"backdrop-blur":$e()}],"backdrop-brightness":[{"backdrop-brightness":[fe,K,q]}],"backdrop-contrast":[{"backdrop-contrast":[fe,K,q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",fe,K,q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[fe,K,q]}],"backdrop-invert":[{"backdrop-invert":["",fe,K,q]}],"backdrop-opacity":[{"backdrop-opacity":[fe,K,q]}],"backdrop-saturate":[{"backdrop-saturate":[fe,K,q]}],"backdrop-sepia":[{"backdrop-sepia":["",fe,K,q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":C()}],"border-spacing-x":[{"border-spacing-x":C()}],"border-spacing-y":[{"border-spacing-y":C()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",K,q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[fe,"initial",K,q]}],ease:[{ease:["linear","initial",v,K,q]}],delay:[{delay:[fe,K,q]}],animate:[{animate:["none",b,K,q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[x,K,q]}],"perspective-origin":[{"perspective-origin":E()}],rotate:[{rotate:Pe()}],"rotate-x":[{"rotate-x":Pe()}],"rotate-y":[{"rotate-y":Pe()}],"rotate-z":[{"rotate-z":Pe()}],scale:[{scale:St()}],"scale-x":[{"scale-x":St()}],"scale-y":[{"scale-y":St()}],"scale-z":[{"scale-z":St()}],"scale-3d":["scale-3d"],skew:[{skew:rs()}],"skew-x":[{"skew-x":rs()}],"skew-y":[{"skew-y":rs()}],transform:[{transform:[K,q,"","none","gpu","cpu"]}],"transform-origin":[{origin:E()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ie()}],"translate-x":[{"translate-x":Ie()}],"translate-y":[{"translate-y":Ie()}],"translate-z":[{"translate-z":Ie()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",K,q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",K,q]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[fe,Ir,Rs,ka]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Pw=cw(Rw);function ae(...e){return Pw(vp(e))}const Aw=R0,Kp=p.forwardRef(({className:e,...s},n)=>t.jsx(mp,{ref:n,className:ae("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...s}));Kp.displayName=mp.displayName;const Dw=Mi("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Yp=p.forwardRef(({className:e,variant:s,...n},r)=>t.jsx(pp,{ref:r,className:ae(Dw({variant:s}),e),...n}));Yp.displayName=pp.displayName;const Iw=p.forwardRef(({className:e,...s},n)=>t.jsx(xp,{ref:n,className:ae("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...s}));Iw.displayName=xp.displayName;const Xp=p.forwardRef(({className:e,...s},n)=>t.jsx(gp,{ref:n,className:ae("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...s,children:t.jsx(_p,{className:"h-4 w-4"})}));Xp.displayName=gp.displayName;const Jp=p.forwardRef(({className:e,...s},n)=>t.jsx(hp,{ref:n,className:ae("text-sm font-semibold [&+div]:text-xs",e),...s}));Jp.displayName=hp.displayName;const Qp=p.forwardRef(({className:e,...s},n)=>t.jsx(fp,{ref:n,className:ae("text-sm opacity-90",e),...s}));Qp.displayName=fp.displayName;function Mw(){const{toasts:e}=Db();return t.jsxs(Aw,{children:[e.map(function({id:s,title:n,description:r,action:i,...a}){return t.jsxs(Yp,{...a,children:[t.jsxs("div",{className:"grid gap-1",children:[n&&t.jsx(Jp,{children:n}),r&&t.jsx(Qp,{children:r})]}),i,t.jsx(Xp,{})]},s)}),t.jsx(Kp,{})]})}var _w=Ei[" useId ".trim().toString()]||(()=>{}),Ow=0;function ir(e){const[s,n]=p.useState(_w());return Ut(()=>{n(r=>r??String(Ow++))},[e]),s?`radix-${s}`:""}const Lw=["top","right","bottom","left"],xs=Math.min,ht=Math.max,pi=Math.round,In=Math.floor,Bt=e=>({x:e,y:e}),Fw={left:"right",right:"left",bottom:"top",top:"bottom"},Bw={start:"end",end:"start"};function yo(e,s,n){return ht(e,xs(s,n))}function es(e,s){return typeof e=="function"?e(s):e}function ts(e){return e.split("-")[0]}function yr(e){return e.split("-")[1]}function xl(e){return e==="x"?"y":"x"}function gl(e){return e==="y"?"height":"width"}const Vw=new Set(["top","bottom"]);function Ft(e){return Vw.has(ts(e))?"y":"x"}function yl(e){return xl(Ft(e))}function Uw(e,s,n){n===void 0&&(n=!1);const r=yr(e),i=yl(e),a=gl(i);let o=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return s.reference[a]>s.floating[a]&&(o=hi(o)),[o,hi(o)]}function $w(e){const s=hi(e);return[vo(e),s,vo(s)]}function vo(e){return e.replace(/start|end/g,s=>Bw[s])}const bd=["left","right"],jd=["right","left"],zw=["top","bottom"],Hw=["bottom","top"];function Ww(e,s,n){switch(e){case"top":case"bottom":return n?s?jd:bd:s?bd:jd;case"left":case"right":return s?zw:Hw;default:return[]}}function Gw(e,s,n,r){const i=yr(e);let a=Ww(ts(e),n==="start",r);return i&&(a=a.map(o=>o+"-"+i),s&&(a=a.concat(a.map(vo)))),a}function hi(e){return e.replace(/left|right|bottom|top/g,s=>Fw[s])}function qw(e){return{top:0,right:0,bottom:0,left:0,...e}}function Zp(e){return typeof e!="number"?qw(e):{top:e,right:e,bottom:e,left:e}}function fi(e){const{x:s,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:s,right:s+r,bottom:n+i,x:s,y:n}}function Nd(e,s,n){let{reference:r,floating:i}=e;const a=Ft(s),o=yl(s),l=gl(o),c=ts(s),d=a==="y",u=r.x+r.width/2-i.width/2,m=r.y+r.height/2-i.height/2,h=r[l]/2-i[l]/2;let f;switch(c){case"top":f={x:u,y:r.y-i.height};break;case"bottom":f={x:u,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:m};break;case"left":f={x:r.x-i.width,y:m};break;default:f={x:r.x,y:r.y}}switch(yr(s)){case"start":f[o]-=h*(n&&d?-1:1);break;case"end":f[o]+=h*(n&&d?-1:1);break}return f}const Kw=async(e,s,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:a=[],platform:o}=n,l=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(s));let d=await o.getElementRects({reference:e,floating:s,strategy:i}),{x:u,y:m}=Nd(d,r,c),h=r,f={},g=0;for(let x=0;x<l.length;x++){const{name:y,fn:v}=l[x],{x:b,y:N,data:S,reset:E}=await v({x:u,y:m,initialPlacement:r,placement:h,strategy:i,middlewareData:f,rects:d,platform:o,elements:{reference:e,floating:s}});u=b??u,m=N??m,f={...f,[y]:{...f[y],...S}},E&&g<=50&&(g++,typeof E=="object"&&(E.placement&&(h=E.placement),E.rects&&(d=E.rects===!0?await o.getElementRects({reference:e,floating:s,strategy:i}):E.rects),{x:u,y:m}=Nd(d,h,c)),x=-1)}return{x:u,y:m,placement:h,strategy:i,middlewareData:f}};async function Xr(e,s){var n;s===void 0&&(s={});const{x:r,y:i,platform:a,rects:o,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:m="floating",altBoundary:h=!1,padding:f=0}=es(s,e),g=Zp(f),y=l[h?m==="floating"?"reference":"floating":m],v=fi(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(y)))==null||n?y:y.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(l.floating)),boundary:d,rootBoundary:u,strategy:c})),b=m==="floating"?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,N=await(a.getOffsetParent==null?void 0:a.getOffsetParent(l.floating)),S=await(a.isElement==null?void 0:a.isElement(N))?await(a.getScale==null?void 0:a.getScale(N))||{x:1,y:1}:{x:1,y:1},E=fi(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:N,strategy:c}):b);return{top:(v.top-E.top+g.top)/S.y,bottom:(E.bottom-v.bottom+g.bottom)/S.y,left:(v.left-E.left+g.left)/S.x,right:(E.right-v.right+g.right)/S.x}}const Yw=e=>({name:"arrow",options:e,async fn(s){const{x:n,y:r,placement:i,rects:a,platform:o,elements:l,middlewareData:c}=s,{element:d,padding:u=0}=es(e,s)||{};if(d==null)return{};const m=Zp(u),h={x:n,y:r},f=yl(i),g=gl(f),x=await o.getDimensions(d),y=f==="y",v=y?"top":"left",b=y?"bottom":"right",N=y?"clientHeight":"clientWidth",S=a.reference[g]+a.reference[f]-h[f]-a.floating[g],E=h[f]-a.reference[f],A=await(o.getOffsetParent==null?void 0:o.getOffsetParent(d));let j=A?A[N]:0;(!j||!await(o.isElement==null?void 0:o.isElement(A)))&&(j=l.floating[N]||a.floating[g]);const C=S/2-E/2,M=j/2-x[g]/2-1,L=xs(m[v],M),$=xs(m[b],M),Y=L,ie=j-x[g]-$,V=j/2-x[g]/2+C,re=yo(Y,V,ie),Z=!c.arrow&&yr(i)!=null&&V!==re&&a.reference[g]/2-(V<Y?L:$)-x[g]/2<0,J=Z?V<Y?V-Y:V-ie:0;return{[f]:h[f]+J,data:{[f]:re,centerOffset:V-re-J,...Z&&{alignmentOffset:J}},reset:Z}}}),Xw=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(s){var n,r;const{placement:i,middlewareData:a,rects:o,initialPlacement:l,platform:c,elements:d}=s,{mainAxis:u=!0,crossAxis:m=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:x=!0,...y}=es(e,s);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const v=ts(i),b=Ft(l),N=ts(l)===l,S=await(c.isRTL==null?void 0:c.isRTL(d.floating)),E=h||(N||!x?[hi(l)]:$w(l)),A=g!=="none";!h&&A&&E.push(...Gw(l,x,g,S));const j=[l,...E],C=await Xr(s,y),M=[];let L=((r=a.flip)==null?void 0:r.overflows)||[];if(u&&M.push(C[v]),m){const V=Uw(i,o,S);M.push(C[V[0]],C[V[1]])}if(L=[...L,{placement:i,overflows:M}],!M.every(V=>V<=0)){var $,Y;const V=((($=a.flip)==null?void 0:$.index)||0)+1,re=j[V];if(re&&(!(m==="alignment"?b!==Ft(re):!1)||L.every(D=>Ft(D.placement)===b?D.overflows[0]>0:!0)))return{data:{index:V,overflows:L},reset:{placement:re}};let Z=(Y=L.filter(J=>J.overflows[0]<=0).sort((J,D)=>J.overflows[1]-D.overflows[1])[0])==null?void 0:Y.placement;if(!Z)switch(f){case"bestFit":{var ie;const J=(ie=L.filter(D=>{if(A){const me=Ft(D.placement);return me===b||me==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(me=>me>0).reduce((me,Te)=>me+Te,0)]).sort((D,me)=>D[1]-me[1])[0])==null?void 0:ie[0];J&&(Z=J);break}case"initialPlacement":Z=l;break}if(i!==Z)return{reset:{placement:Z}}}return{}}}};function wd(e,s){return{top:e.top-s.height,right:e.right-s.width,bottom:e.bottom-s.height,left:e.left-s.width}}function Sd(e){return Lw.some(s=>e[s]>=0)}const Jw=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(s){const{rects:n}=s,{strategy:r="referenceHidden",...i}=es(e,s);switch(r){case"referenceHidden":{const a=await Xr(s,{...i,elementContext:"reference"}),o=wd(a,n.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:Sd(o)}}}case"escaped":{const a=await Xr(s,{...i,altBoundary:!0}),o=wd(a,n.floating);return{data:{escapedOffsets:o,escaped:Sd(o)}}}default:return{}}}}},eh=new Set(["left","top"]);async function Qw(e,s){const{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=ts(n),l=yr(n),c=Ft(n)==="y",d=eh.has(o)?-1:1,u=a&&c?-1:1,m=es(s,e);let{mainAxis:h,crossAxis:f,alignmentAxis:g}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return l&&typeof g=="number"&&(f=l==="end"?g*-1:g),c?{x:f*u,y:h*d}:{x:h*d,y:f*u}}const Zw=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(s){var n,r;const{x:i,y:a,placement:o,middlewareData:l}=s,c=await Qw(s,e);return o===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:i+c.x,y:a+c.y,data:{...c,placement:o}}}}},e1=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(s){const{x:n,y:r,placement:i}=s,{mainAxis:a=!0,crossAxis:o=!1,limiter:l={fn:y=>{let{x:v,y:b}=y;return{x:v,y:b}}},...c}=es(e,s),d={x:n,y:r},u=await Xr(s,c),m=Ft(ts(i)),h=xl(m);let f=d[h],g=d[m];if(a){const y=h==="y"?"top":"left",v=h==="y"?"bottom":"right",b=f+u[y],N=f-u[v];f=yo(b,f,N)}if(o){const y=m==="y"?"top":"left",v=m==="y"?"bottom":"right",b=g+u[y],N=g-u[v];g=yo(b,g,N)}const x=l.fn({...s,[h]:f,[m]:g});return{...x,data:{x:x.x-n,y:x.y-r,enabled:{[h]:a,[m]:o}}}}}},t1=function(e){return e===void 0&&(e={}),{options:e,fn(s){const{x:n,y:r,placement:i,rects:a,middlewareData:o}=s,{offset:l=0,mainAxis:c=!0,crossAxis:d=!0}=es(e,s),u={x:n,y:r},m=Ft(i),h=xl(m);let f=u[h],g=u[m];const x=es(l,s),y=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:0,crossAxis:0,...x};if(c){const N=h==="y"?"height":"width",S=a.reference[h]-a.floating[N]+y.mainAxis,E=a.reference[h]+a.reference[N]-y.mainAxis;f<S?f=S:f>E&&(f=E)}if(d){var v,b;const N=h==="y"?"width":"height",S=eh.has(ts(i)),E=a.reference[m]-a.floating[N]+(S&&((v=o.offset)==null?void 0:v[m])||0)+(S?0:y.crossAxis),A=a.reference[m]+a.reference[N]+(S?0:((b=o.offset)==null?void 0:b[m])||0)-(S?y.crossAxis:0);g<E?g=E:g>A&&(g=A)}return{[h]:f,[m]:g}}}},s1=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(s){var n,r;const{placement:i,rects:a,platform:o,elements:l}=s,{apply:c=()=>{},...d}=es(e,s),u=await Xr(s,d),m=ts(i),h=yr(i),f=Ft(i)==="y",{width:g,height:x}=a.floating;let y,v;m==="top"||m==="bottom"?(y=m,v=h===(await(o.isRTL==null?void 0:o.isRTL(l.floating))?"start":"end")?"left":"right"):(v=m,y=h==="end"?"top":"bottom");const b=x-u.top-u.bottom,N=g-u.left-u.right,S=xs(x-u[y],b),E=xs(g-u[v],N),A=!s.middlewareData.shift;let j=S,C=E;if((n=s.middlewareData.shift)!=null&&n.enabled.x&&(C=N),(r=s.middlewareData.shift)!=null&&r.enabled.y&&(j=b),A&&!h){const L=ht(u.left,0),$=ht(u.right,0),Y=ht(u.top,0),ie=ht(u.bottom,0);f?C=g-2*(L!==0||$!==0?L+$:ht(u.left,u.right)):j=x-2*(Y!==0||ie!==0?Y+ie:ht(u.top,u.bottom))}await c({...s,availableWidth:C,availableHeight:j});const M=await o.getDimensions(l.floating);return g!==M.width||x!==M.height?{reset:{rects:!0}}:{}}}};function Ui(){return typeof window<"u"}function vr(e){return th(e)?(e.nodeName||"").toLowerCase():"#document"}function ft(e){var s;return(e==null||(s=e.ownerDocument)==null?void 0:s.defaultView)||window}function Wt(e){var s;return(s=(th(e)?e.ownerDocument:e.document)||window.document)==null?void 0:s.documentElement}function th(e){return Ui()?e instanceof Node||e instanceof ft(e).Node:!1}function Pt(e){return Ui()?e instanceof Element||e instanceof ft(e).Element:!1}function zt(e){return Ui()?e instanceof HTMLElement||e instanceof ft(e).HTMLElement:!1}function Cd(e){return!Ui()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ft(e).ShadowRoot}const r1=new Set(["inline","contents"]);function mn(e){const{overflow:s,overflowX:n,overflowY:r,display:i}=At(e);return/auto|scroll|overlay|hidden|clip/.test(s+r+n)&&!r1.has(i)}const n1=new Set(["table","td","th"]);function i1(e){return n1.has(vr(e))}const a1=[":popover-open",":modal"];function $i(e){return a1.some(s=>{try{return e.matches(s)}catch{return!1}})}const o1=["transform","translate","scale","rotate","perspective"],l1=["transform","translate","scale","rotate","perspective","filter"],c1=["paint","layout","strict","content"];function vl(e){const s=bl(),n=Pt(e)?At(e):e;return o1.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!s&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!s&&(n.filter?n.filter!=="none":!1)||l1.some(r=>(n.willChange||"").includes(r))||c1.some(r=>(n.contain||"").includes(r))}function d1(e){let s=gs(e);for(;zt(s)&&!dr(s);){if(vl(s))return s;if($i(s))return null;s=gs(s)}return null}function bl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const u1=new Set(["html","body","#document"]);function dr(e){return u1.has(vr(e))}function At(e){return ft(e).getComputedStyle(e)}function zi(e){return Pt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function gs(e){if(vr(e)==="html")return e;const s=e.assignedSlot||e.parentNode||Cd(e)&&e.host||Wt(e);return Cd(s)?s.host:s}function sh(e){const s=gs(e);return dr(s)?e.ownerDocument?e.ownerDocument.body:e.body:zt(s)&&mn(s)?s:sh(s)}function Jr(e,s,n){var r;s===void 0&&(s=[]),n===void 0&&(n=!0);const i=sh(e),a=i===((r=e.ownerDocument)==null?void 0:r.body),o=ft(i);if(a){const l=bo(o);return s.concat(o,o.visualViewport||[],mn(i)?i:[],l&&n?Jr(l):[])}return s.concat(i,Jr(i,[],n))}function bo(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function rh(e){const s=At(e);let n=parseFloat(s.width)||0,r=parseFloat(s.height)||0;const i=zt(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,l=pi(n)!==a||pi(r)!==o;return l&&(n=a,r=o),{width:n,height:r,$:l}}function jl(e){return Pt(e)?e:e.contextElement}function ar(e){const s=jl(e);if(!zt(s))return Bt(1);const n=s.getBoundingClientRect(),{width:r,height:i,$:a}=rh(s);let o=(a?pi(n.width):n.width)/r,l=(a?pi(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const m1=Bt(0);function nh(e){const s=ft(e);return!bl()||!s.visualViewport?m1:{x:s.visualViewport.offsetLeft,y:s.visualViewport.offsetTop}}function p1(e,s,n){return s===void 0&&(s=!1),!n||s&&n!==ft(e)?!1:s}function Us(e,s,n,r){s===void 0&&(s=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),a=jl(e);let o=Bt(1);s&&(r?Pt(r)&&(o=ar(r)):o=ar(e));const l=p1(a,n,r)?nh(a):Bt(0);let c=(i.left+l.x)/o.x,d=(i.top+l.y)/o.y,u=i.width/o.x,m=i.height/o.y;if(a){const h=ft(a),f=r&&Pt(r)?ft(r):r;let g=h,x=bo(g);for(;x&&r&&f!==g;){const y=ar(x),v=x.getBoundingClientRect(),b=At(x),N=v.left+(x.clientLeft+parseFloat(b.paddingLeft))*y.x,S=v.top+(x.clientTop+parseFloat(b.paddingTop))*y.y;c*=y.x,d*=y.y,u*=y.x,m*=y.y,c+=N,d+=S,g=ft(x),x=bo(g)}}return fi({width:u,height:m,x:c,y:d})}function Hi(e,s){const n=zi(e).scrollLeft;return s?s.left+n:Us(Wt(e)).left+n}function ih(e,s){const n=e.getBoundingClientRect(),r=n.left+s.scrollLeft-Hi(e,n),i=n.top+s.scrollTop;return{x:r,y:i}}function h1(e){let{elements:s,rect:n,offsetParent:r,strategy:i}=e;const a=i==="fixed",o=Wt(r),l=s?$i(s.floating):!1;if(r===o||l&&a)return n;let c={scrollLeft:0,scrollTop:0},d=Bt(1);const u=Bt(0),m=zt(r);if((m||!m&&!a)&&((vr(r)!=="body"||mn(o))&&(c=zi(r)),zt(r))){const f=Us(r);d=ar(r),u.x=f.x+r.clientLeft,u.y=f.y+r.clientTop}const h=o&&!m&&!a?ih(o,c):Bt(0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-c.scrollLeft*d.x+u.x+h.x,y:n.y*d.y-c.scrollTop*d.y+u.y+h.y}}function f1(e){return Array.from(e.getClientRects())}function x1(e){const s=Wt(e),n=zi(e),r=e.ownerDocument.body,i=ht(s.scrollWidth,s.clientWidth,r.scrollWidth,r.clientWidth),a=ht(s.scrollHeight,s.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+Hi(e);const l=-n.scrollTop;return At(r).direction==="rtl"&&(o+=ht(s.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:l}}const Td=25;function g1(e,s){const n=ft(e),r=Wt(e),i=n.visualViewport;let a=r.clientWidth,o=r.clientHeight,l=0,c=0;if(i){a=i.width,o=i.height;const u=bl();(!u||u&&s==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}const d=Hi(r);if(d<=0){const u=r.ownerDocument,m=u.body,h=getComputedStyle(m),f=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,g=Math.abs(r.clientWidth-m.clientWidth-f);g<=Td&&(a-=g)}else d<=Td&&(a+=d);return{width:a,height:o,x:l,y:c}}const y1=new Set(["absolute","fixed"]);function v1(e,s){const n=Us(e,!0,s==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=zt(e)?ar(e):Bt(1),o=e.clientWidth*a.x,l=e.clientHeight*a.y,c=i*a.x,d=r*a.y;return{width:o,height:l,x:c,y:d}}function kd(e,s,n){let r;if(s==="viewport")r=g1(e,n);else if(s==="document")r=x1(Wt(e));else if(Pt(s))r=v1(s,n);else{const i=nh(e);r={x:s.x-i.x,y:s.y-i.y,width:s.width,height:s.height}}return fi(r)}function ah(e,s){const n=gs(e);return n===s||!Pt(n)||dr(n)?!1:At(n).position==="fixed"||ah(n,s)}function b1(e,s){const n=s.get(e);if(n)return n;let r=Jr(e,[],!1).filter(l=>Pt(l)&&vr(l)!=="body"),i=null;const a=At(e).position==="fixed";let o=a?gs(e):e;for(;Pt(o)&&!dr(o);){const l=At(o),c=vl(o);!c&&l.position==="fixed"&&(i=null),(a?!c&&!i:!c&&l.position==="static"&&!!i&&y1.has(i.position)||mn(o)&&!c&&ah(e,o))?r=r.filter(u=>u!==o):i=l,o=gs(o)}return s.set(e,r),r}function j1(e){let{element:s,boundary:n,rootBoundary:r,strategy:i}=e;const o=[...n==="clippingAncestors"?$i(s)?[]:b1(s,this._c):[].concat(n),r],l=o[0],c=o.reduce((d,u)=>{const m=kd(s,u,i);return d.top=ht(m.top,d.top),d.right=xs(m.right,d.right),d.bottom=xs(m.bottom,d.bottom),d.left=ht(m.left,d.left),d},kd(s,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function N1(e){const{width:s,height:n}=rh(e);return{width:s,height:n}}function w1(e,s,n){const r=zt(s),i=Wt(s),a=n==="fixed",o=Us(e,!0,a,s);let l={scrollLeft:0,scrollTop:0};const c=Bt(0);function d(){c.x=Hi(i)}if(r||!r&&!a)if((vr(s)!=="body"||mn(i))&&(l=zi(s)),r){const f=Us(s,!0,a,s);c.x=f.x+s.clientLeft,c.y=f.y+s.clientTop}else i&&d();a&&!r&&i&&d();const u=i&&!r&&!a?ih(i,l):Bt(0),m=o.left+l.scrollLeft-c.x-u.x,h=o.top+l.scrollTop-c.y-u.y;return{x:m,y:h,width:o.width,height:o.height}}function Ea(e){return At(e).position==="static"}function Ed(e,s){if(!zt(e)||At(e).position==="fixed")return null;if(s)return s(e);let n=e.offsetParent;return Wt(e)===n&&(n=n.ownerDocument.body),n}function oh(e,s){const n=ft(e);if($i(e))return n;if(!zt(e)){let i=gs(e);for(;i&&!dr(i);){if(Pt(i)&&!Ea(i))return i;i=gs(i)}return n}let r=Ed(e,s);for(;r&&i1(r)&&Ea(r);)r=Ed(r,s);return r&&dr(r)&&Ea(r)&&!vl(r)?n:r||d1(e)||n}const S1=async function(e){const s=this.getOffsetParent||oh,n=this.getDimensions,r=await n(e.floating);return{reference:w1(e.reference,await s(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function C1(e){return At(e).direction==="rtl"}const T1={convertOffsetParentRelativeRectToViewportRelativeRect:h1,getDocumentElement:Wt,getClippingRect:j1,getOffsetParent:oh,getElementRects:S1,getClientRects:f1,getDimensions:N1,getScale:ar,isElement:Pt,isRTL:C1};function lh(e,s){return e.x===s.x&&e.y===s.y&&e.width===s.width&&e.height===s.height}function k1(e,s){let n=null,r;const i=Wt(e);function a(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function o(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),a();const d=e.getBoundingClientRect(),{left:u,top:m,width:h,height:f}=d;if(l||s(),!h||!f)return;const g=In(m),x=In(i.clientWidth-(u+h)),y=In(i.clientHeight-(m+f)),v=In(u),N={rootMargin:-g+"px "+-x+"px "+-y+"px "+-v+"px",threshold:ht(0,xs(1,c))||1};let S=!0;function E(A){const j=A[0].intersectionRatio;if(j!==c){if(!S)return o();j?o(!1,j):r=setTimeout(()=>{o(!1,1e-7)},1e3)}j===1&&!lh(d,e.getBoundingClientRect())&&o(),S=!1}try{n=new IntersectionObserver(E,{...N,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,N)}n.observe(e)}return o(!0),a}function E1(e,s,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,d=jl(e),u=i||a?[...d?Jr(d):[],...Jr(s)]:[];u.forEach(v=>{i&&v.addEventListener("scroll",n,{passive:!0}),a&&v.addEventListener("resize",n)});const m=d&&l?k1(d,n):null;let h=-1,f=null;o&&(f=new ResizeObserver(v=>{let[b]=v;b&&b.target===d&&f&&(f.unobserve(s),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var N;(N=f)==null||N.observe(s)})),n()}),d&&!c&&f.observe(d),f.observe(s));let g,x=c?Us(e):null;c&&y();function y(){const v=Us(e);x&&!lh(x,v)&&n(),x=v,g=requestAnimationFrame(y)}return n(),()=>{var v;u.forEach(b=>{i&&b.removeEventListener("scroll",n),a&&b.removeEventListener("resize",n)}),m==null||m(),(v=f)==null||v.disconnect(),f=null,c&&cancelAnimationFrame(g)}}const R1=Zw,P1=e1,A1=Xw,D1=s1,I1=Jw,Rd=Yw,M1=t1,_1=(e,s,n)=>{const r=new Map,i={platform:T1,...n},a={...i.platform,_c:r};return Kw(e,s,{...i,platform:a})};var O1=typeof document<"u",L1=function(){},Yn=O1?p.useLayoutEffect:L1;function xi(e,s){if(e===s)return!0;if(typeof e!=typeof s)return!1;if(typeof e=="function"&&e.toString()===s.toString())return!0;let n,r,i;if(e&&s&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==s.length)return!1;for(r=n;r--!==0;)if(!xi(e[r],s[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(s).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(s,i[r]))return!1;for(r=n;r--!==0;){const a=i[r];if(!(a==="_owner"&&e.$$typeof)&&!xi(e[a],s[a]))return!1}return!0}return e!==e&&s!==s}function ch(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Pd(e,s){const n=ch(e);return Math.round(s*n)/n}function Ra(e){const s=p.useRef(e);return Yn(()=>{s.current=e}),s}function F1(e){e===void 0&&(e={});const{placement:s="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:a,floating:o}={},transform:l=!0,whileElementsMounted:c,open:d}=e,[u,m]=p.useState({x:0,y:0,strategy:n,placement:s,middlewareData:{},isPositioned:!1}),[h,f]=p.useState(r);xi(h,r)||f(r);const[g,x]=p.useState(null),[y,v]=p.useState(null),b=p.useCallback(D=>{D!==A.current&&(A.current=D,x(D))},[]),N=p.useCallback(D=>{D!==j.current&&(j.current=D,v(D))},[]),S=a||g,E=o||y,A=p.useRef(null),j=p.useRef(null),C=p.useRef(u),M=c!=null,L=Ra(c),$=Ra(i),Y=Ra(d),ie=p.useCallback(()=>{if(!A.current||!j.current)return;const D={placement:s,strategy:n,middleware:h};$.current&&(D.platform=$.current),_1(A.current,j.current,D).then(me=>{const Te={...me,isPositioned:Y.current!==!1};V.current&&!xi(C.current,Te)&&(C.current=Te,nn.flushSync(()=>{m(Te)}))})},[h,s,n,$,Y]);Yn(()=>{d===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,m(D=>({...D,isPositioned:!1})))},[d]);const V=p.useRef(!1);Yn(()=>(V.current=!0,()=>{V.current=!1}),[]),Yn(()=>{if(S&&(A.current=S),E&&(j.current=E),S&&E){if(L.current)return L.current(S,E,ie);ie()}},[S,E,ie,L,M]);const re=p.useMemo(()=>({reference:A,floating:j,setReference:b,setFloating:N}),[b,N]),Z=p.useMemo(()=>({reference:S,floating:E}),[S,E]),J=p.useMemo(()=>{const D={position:n,left:0,top:0};if(!Z.floating)return D;const me=Pd(Z.floating,u.x),Te=Pd(Z.floating,u.y);return l?{...D,transform:"translate("+me+"px, "+Te+"px)",...ch(Z.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:me,top:Te}},[n,l,Z.floating,u.x,u.y]);return p.useMemo(()=>({...u,update:ie,refs:re,elements:Z,floatingStyles:J}),[u,ie,re,Z,J])}const B1=e=>{function s(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&s(r)?r.current!=null?Rd({element:r.current,padding:i}).fn(n):{}:r?Rd({element:r,padding:i}).fn(n):{}}}},V1=(e,s)=>({...R1(e),options:[e,s]}),U1=(e,s)=>({...P1(e),options:[e,s]}),$1=(e,s)=>({...M1(e),options:[e,s]}),z1=(e,s)=>({...A1(e),options:[e,s]}),H1=(e,s)=>({...D1(e),options:[e,s]}),W1=(e,s)=>({...I1(e),options:[e,s]}),G1=(e,s)=>({...B1(e),options:[e,s]});var q1="Arrow",dh=p.forwardRef((e,s)=>{const{children:n,width:r=10,height:i=5,...a}=e;return t.jsx(Ce.svg,{...a,ref:s,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:t.jsx("polygon",{points:"0,0 30,0 15,10"})})});dh.displayName=q1;var K1=dh;function Y1(e){const[s,n]=p.useState(void 0);return Ut(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const a=i[0];let o,l;if("borderBoxSize"in a){const c=a.borderBoxSize,d=Array.isArray(c)?c[0]:c;o=d.inlineSize,l=d.blockSize}else o=e.offsetWidth,l=e.offsetHeight;n({width:o,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),s}var Nl="Popper",[uh,mh]=Ns(Nl),[X1,ph]=uh(Nl),hh=e=>{const{__scopePopper:s,children:n}=e,[r,i]=p.useState(null);return t.jsx(X1,{scope:s,anchor:r,onAnchorChange:i,children:n})};hh.displayName=Nl;var fh="PopperAnchor",xh=p.forwardRef((e,s)=>{const{__scopePopper:n,virtualRef:r,...i}=e,a=ph(fh,n),o=p.useRef(null),l=Ue(s,o),c=p.useRef(null);return p.useEffect(()=>{const d=c.current;c.current=(r==null?void 0:r.current)||o.current,d!==c.current&&a.onAnchorChange(c.current)}),r?null:t.jsx(Ce.div,{...i,ref:l})});xh.displayName=fh;var wl="PopperContent",[J1,Q1]=uh(wl),gh=p.forwardRef((e,s)=>{var te,$e,Pe,St,rs,Ie;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:a="center",alignOffset:o=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:d=[],collisionPadding:u=0,sticky:m="partial",hideWhenDetached:h=!1,updatePositionStrategy:f="optimized",onPlaced:g,...x}=e,y=ph(wl,n),[v,b]=p.useState(null),N=Ue(s,xt=>b(xt)),[S,E]=p.useState(null),A=Y1(S),j=(A==null?void 0:A.width)??0,C=(A==null?void 0:A.height)??0,M=r+(a!=="center"?"-"+a:""),L=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},$=Array.isArray(d)?d:[d],Y=$.length>0,ie={padding:L,boundary:$.filter(e2),altBoundary:Y},{refs:V,floatingStyles:re,placement:Z,isPositioned:J,middlewareData:D}=F1({strategy:"fixed",placement:M,whileElementsMounted:(...xt)=>E1(...xt,{animationFrame:f==="always"}),elements:{reference:y.anchor},middleware:[V1({mainAxis:i+C,alignmentAxis:o}),c&&U1({mainAxis:!0,crossAxis:!1,limiter:m==="partial"?$1():void 0,...ie}),c&&z1({...ie}),H1({...ie,apply:({elements:xt,rects:Sr,availableWidth:na,availableHeight:qt})=>{const{width:ia,height:aa}=Sr.reference,Ts=xt.floating.style;Ts.setProperty("--radix-popper-available-width",`${na}px`),Ts.setProperty("--radix-popper-available-height",`${qt}px`),Ts.setProperty("--radix-popper-anchor-width",`${ia}px`),Ts.setProperty("--radix-popper-anchor-height",`${aa}px`)}}),S&&G1({element:S,padding:l}),t2({arrowWidth:j,arrowHeight:C}),h&&W1({strategy:"referenceHidden",...ie})]}),[me,Te]=bh(Z),T=Qe(g);Ut(()=>{J&&(T==null||T())},[J,T]);const O=(te=D.arrow)==null?void 0:te.x,z=($e=D.arrow)==null?void 0:$e.y,H=((Pe=D.arrow)==null?void 0:Pe.centerOffset)!==0,[ne,de]=p.useState();return Ut(()=>{v&&de(window.getComputedStyle(v).zIndex)},[v]),t.jsx("div",{ref:V.setFloating,"data-radix-popper-content-wrapper":"",style:{...re,transform:J?re.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ne,"--radix-popper-transform-origin":[(St=D.transformOrigin)==null?void 0:St.x,(rs=D.transformOrigin)==null?void 0:rs.y].join(" "),...((Ie=D.hide)==null?void 0:Ie.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:t.jsx(J1,{scope:n,placedSide:me,onArrowChange:E,arrowX:O,arrowY:z,shouldHideArrow:H,children:t.jsx(Ce.div,{"data-side":me,"data-align":Te,...x,ref:N,style:{...x.style,animation:J?void 0:"none"}})})})});gh.displayName=wl;var yh="PopperArrow",Z1={top:"bottom",right:"left",bottom:"top",left:"right"},vh=p.forwardRef(function(s,n){const{__scopePopper:r,...i}=s,a=Q1(yh,r),o=Z1[a.placedSide];return t.jsx("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0},children:t.jsx(K1,{...i,ref:n,style:{...i.style,display:"block"}})})});vh.displayName=yh;function e2(e){return e!==null}var t2=e=>({name:"transformOrigin",options:e,fn(s){var y,v,b;const{placement:n,rects:r,middlewareData:i}=s,o=((y=i.arrow)==null?void 0:y.centerOffset)!==0,l=o?0:e.arrowWidth,c=o?0:e.arrowHeight,[d,u]=bh(n),m={start:"0%",center:"50%",end:"100%"}[u],h=(((v=i.arrow)==null?void 0:v.x)??0)+l/2,f=(((b=i.arrow)==null?void 0:b.y)??0)+c/2;let g="",x="";return d==="bottom"?(g=o?m:`${h}px`,x=`${-c}px`):d==="top"?(g=o?m:`${h}px`,x=`${r.floating.height+c}px`):d==="right"?(g=`${-c}px`,x=o?m:`${f}px`):d==="left"&&(g=`${r.floating.width+c}px`,x=o?m:`${f}px`),{data:{x:g,y:x}}}});function bh(e){const[s,n="center"]=e.split("-");return[s,n]}var s2=hh,r2=xh,n2=gh,i2=vh,a2=Symbol("radix.slottable");function o2(e){const s=({children:n})=>t.jsx(t.Fragment,{children:n});return s.displayName=`${e}.Slottable`,s.__radixId=a2,s}var[Wi]=Ns("Tooltip",[mh]),Gi=mh(),jh="TooltipProvider",l2=700,jo="tooltip.open",[c2,Sl]=Wi(jh),Nh=e=>{const{__scopeTooltip:s,delayDuration:n=l2,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:a}=e,o=p.useRef(!0),l=p.useRef(!1),c=p.useRef(0);return p.useEffect(()=>{const d=c.current;return()=>window.clearTimeout(d)},[]),t.jsx(c2,{scope:s,isOpenDelayedRef:o,delayDuration:n,onOpen:p.useCallback(()=>{window.clearTimeout(c.current),o.current=!1},[]),onClose:p.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>o.current=!0,r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:p.useCallback(d=>{l.current=d},[]),disableHoverableContent:i,children:a})};Nh.displayName=jh;var Qr="Tooltip",[d2,pn]=Wi(Qr),wh=e=>{const{__scopeTooltip:s,children:n,open:r,defaultOpen:i,onOpenChange:a,disableHoverableContent:o,delayDuration:l}=e,c=Sl(Qr,e.__scopeTooltip),d=Gi(s),[u,m]=p.useState(null),h=ir(),f=p.useRef(0),g=o??c.disableHoverableContent,x=l??c.delayDuration,y=p.useRef(!1),[v,b]=cn({prop:r,defaultProp:i??!1,onChange:j=>{j?(c.onOpen(),document.dispatchEvent(new CustomEvent(jo))):c.onClose(),a==null||a(j)},caller:Qr}),N=p.useMemo(()=>v?y.current?"delayed-open":"instant-open":"closed",[v]),S=p.useCallback(()=>{window.clearTimeout(f.current),f.current=0,y.current=!1,b(!0)},[b]),E=p.useCallback(()=>{window.clearTimeout(f.current),f.current=0,b(!1)},[b]),A=p.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{y.current=!0,b(!0),f.current=0},x)},[x,b]);return p.useEffect(()=>()=>{f.current&&(window.clearTimeout(f.current),f.current=0)},[]),t.jsx(s2,{...d,children:t.jsx(d2,{scope:s,contentId:h,open:v,stateAttribute:N,trigger:u,onTriggerChange:m,onTriggerEnter:p.useCallback(()=>{c.isOpenDelayedRef.current?A():S()},[c.isOpenDelayedRef,A,S]),onTriggerLeave:p.useCallback(()=>{g?E():(window.clearTimeout(f.current),f.current=0)},[E,g]),onOpen:S,onClose:E,disableHoverableContent:g,children:n})})};wh.displayName=Qr;var No="TooltipTrigger",Sh=p.forwardRef((e,s)=>{const{__scopeTooltip:n,...r}=e,i=pn(No,n),a=Sl(No,n),o=Gi(n),l=p.useRef(null),c=Ue(s,l,i.onTriggerChange),d=p.useRef(!1),u=p.useRef(!1),m=p.useCallback(()=>d.current=!1,[]);return p.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),t.jsx(r2,{asChild:!0,...o,children:t.jsx(Ce.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:c,onPointerMove:he(e.onPointerMove,h=>{h.pointerType!=="touch"&&!u.current&&!a.isPointerInTransitRef.current&&(i.onTriggerEnter(),u.current=!0)}),onPointerLeave:he(e.onPointerLeave,()=>{i.onTriggerLeave(),u.current=!1}),onPointerDown:he(e.onPointerDown,()=>{i.open&&i.onClose(),d.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:he(e.onFocus,()=>{d.current||i.onOpen()}),onBlur:he(e.onBlur,i.onClose),onClick:he(e.onClick,i.onClose)})})});Sh.displayName=No;var Cl="TooltipPortal",[u2,m2]=Wi(Cl,{forceMount:void 0}),Ch=e=>{const{__scopeTooltip:s,forceMount:n,children:r,container:i}=e,a=pn(Cl,s);return t.jsx(u2,{scope:s,forceMount:n,children:t.jsx(Nt,{present:n||a.open,children:t.jsx(Ai,{asChild:!0,container:i,children:r})})})};Ch.displayName=Cl;var ur="TooltipContent",Th=p.forwardRef((e,s)=>{const n=m2(ur,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...a}=e,o=pn(ur,e.__scopeTooltip);return t.jsx(Nt,{present:r||o.open,children:o.disableHoverableContent?t.jsx(kh,{side:i,...a,ref:s}):t.jsx(p2,{side:i,...a,ref:s})})}),p2=p.forwardRef((e,s)=>{const n=pn(ur,e.__scopeTooltip),r=Sl(ur,e.__scopeTooltip),i=p.useRef(null),a=Ue(s,i),[o,l]=p.useState(null),{trigger:c,onClose:d}=n,u=i.current,{onPointerInTransitChange:m}=r,h=p.useCallback(()=>{l(null),m(!1)},[m]),f=p.useCallback((g,x)=>{const y=g.currentTarget,v={x:g.clientX,y:g.clientY},b=y2(v,y.getBoundingClientRect()),N=v2(v,b),S=b2(x.getBoundingClientRect()),E=N2([...N,...S]);l(E),m(!0)},[m]);return p.useEffect(()=>()=>h(),[h]),p.useEffect(()=>{if(c&&u){const g=y=>f(y,u),x=y=>f(y,c);return c.addEventListener("pointerleave",g),u.addEventListener("pointerleave",x),()=>{c.removeEventListener("pointerleave",g),u.removeEventListener("pointerleave",x)}}},[c,u,f,h]),p.useEffect(()=>{if(o){const g=x=>{const y=x.target,v={x:x.clientX,y:x.clientY},b=(c==null?void 0:c.contains(y))||(u==null?void 0:u.contains(y)),N=!j2(v,o);b?h():N&&(h(),d())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[c,u,o,d,h]),t.jsx(kh,{...e,ref:a})}),[h2,f2]=Wi(Qr,{isInside:!1}),x2=o2("TooltipContent"),kh=p.forwardRef((e,s)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:a,onPointerDownOutside:o,...l}=e,c=pn(ur,n),d=Gi(n),{onClose:u}=c;return p.useEffect(()=>(document.addEventListener(jo,u),()=>document.removeEventListener(jo,u)),[u]),p.useEffect(()=>{if(c.trigger){const m=h=>{const f=h.target;f!=null&&f.contains(c.trigger)&&u()};return window.addEventListener("scroll",m,{capture:!0}),()=>window.removeEventListener("scroll",m,{capture:!0})}},[c.trigger,u]),t.jsx(Pi,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:o,onFocusOutside:m=>m.preventDefault(),onDismiss:u,children:t.jsxs(n2,{"data-state":c.stateAttribute,...d,...l,ref:s,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[t.jsx(x2,{children:r}),t.jsx(h2,{scope:n,isInside:!0,children:t.jsx(u0,{id:c.contentId,role:"tooltip",children:i||r})})]})})});Th.displayName=ur;var Eh="TooltipArrow",g2=p.forwardRef((e,s)=>{const{__scopeTooltip:n,...r}=e,i=Gi(n);return f2(Eh,n).isInside?null:t.jsx(i2,{...i,...r,ref:s})});g2.displayName=Eh;function y2(e,s){const n=Math.abs(s.top-e.y),r=Math.abs(s.bottom-e.y),i=Math.abs(s.right-e.x),a=Math.abs(s.left-e.x);switch(Math.min(n,r,i,a)){case a:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function v2(e,s,n=5){const r=[];switch(s){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function b2(e){const{top:s,right:n,bottom:r,left:i}=e;return[{x:i,y:s},{x:n,y:s},{x:n,y:r},{x:i,y:r}]}function j2(e,s){const{x:n,y:r}=e;let i=!1;for(let a=0,o=s.length-1;a<s.length;o=a++){const l=s[a],c=s[o],d=l.x,u=l.y,m=c.x,h=c.y;u>r!=h>r&&n<(m-d)*(r-u)/(h-u)+d&&(i=!i)}return i}function N2(e){const s=e.slice();return s.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),w2(s)}function w2(e){if(e.length<=1)return e.slice();const s=[];for(let r=0;r<e.length;r++){const i=e[r];for(;s.length>=2;){const a=s[s.length-1],o=s[s.length-2];if((a.x-o.x)*(i.y-o.y)>=(a.y-o.y)*(i.x-o.x))s.pop();else break}s.push(i)}s.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const a=n[n.length-1],o=n[n.length-2];if((a.x-o.x)*(i.y-o.y)>=(a.y-o.y)*(i.x-o.x))n.pop();else break}n.push(i)}return n.pop(),s.length===1&&n.length===1&&s[0].x===n[0].x&&s[0].y===n[0].y?s:s.concat(n)}var S2=Nh,C2=wh,T2=Sh,k2=Ch,Rh=Th;const E2=S2,R2=C2,P2=T2,Ph=p.forwardRef(({className:e,sideOffset:s=4,...n},r)=>t.jsx(k2,{children:t.jsx(Rh,{ref:r,sideOffset:s,className:ae("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",e),...n})}));Ph.displayName=Rh.displayName;function A2(){const[e,s]=p.useState(!1);return p.useEffect(()=>{const n=i=>{if((i.ctrlKey||i.metaKey)&&i.key==="k"){i.preventDefault();const a=document.querySelector('input[placeholder*="Search"]');a&&(a.focus(),a.select())}i.key==="Escape"&&e&&s(!1)},r=i=>{var l;const o=i.target.closest("a");if(o&&((l=o.getAttribute("href"))!=null&&l.startsWith("#"))){i.preventDefault();const c=o.getAttribute("href").substring(1),d=document.getElementById(c);if(d){const m=d.offsetTop-64-20;window.scrollTo({top:Math.max(0,m),behavior:"smooth"})}}};return document.addEventListener("keydown",n),document.addEventListener("click",r),()=>{document.removeEventListener("keydown",n),document.removeEventListener("click",r)}},[e]),t.jsxs(E2,{children:[t.jsx(Tb,{}),t.jsx(Lv,{}),t.jsx(Mw,{})]})}var D2=Symbol.for("react.lazy"),gi=Ei[" use ".trim().toString()];function I2(e){return typeof e=="object"&&e!==null&&"then"in e}function Ah(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===D2&&"_payload"in e&&I2(e._payload)}function Dh(e){const s=_2(e),n=p.forwardRef((r,i)=>{let{children:a,...o}=r;Ah(a)&&typeof gi=="function"&&(a=gi(a._payload));const l=p.Children.toArray(a),c=l.find(L2);if(c){const d=c.props.children,u=l.map(m=>m===c?p.Children.count(d)>1?p.Children.only(null):p.isValidElement(d)?d.props.children:null:m);return t.jsx(s,{...o,ref:i,children:p.isValidElement(d)?p.cloneElement(d,void 0,u):null})}return t.jsx(s,{...o,ref:i,children:a})});return n.displayName=`${e}.Slot`,n}var M2=Dh("Slot");function _2(e){const s=p.forwardRef((n,r)=>{let{children:i,...a}=n;if(Ah(i)&&typeof gi=="function"&&(i=gi(i._payload)),p.isValidElement(i)){const o=B2(i),l=F2(a,i.props);return i.type!==p.Fragment&&(l.ref=r?ln(r,o):o),p.cloneElement(i,l)}return p.Children.count(i)>1?p.Children.only(null):null});return s.displayName=`${e}.SlotClone`,s}var O2=Symbol("radix.slottable");function L2(e){return p.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===O2}function F2(e,s){const n={...s};for(const r in s){const i=e[r],a=s[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...l)=>{const c=a(...l);return i(...l),c}:i&&(n[r]=i):r==="style"?n[r]={...i,...a}:r==="className"&&(n[r]=[i,a].filter(Boolean).join(" "))}return{...e,...n}}function B2(e){var r,i;let s=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=s&&"isReactWarning"in s&&s.isReactWarning;return n?e.ref:(s=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=s&&"isReactWarning"in s&&s.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const V2=Mi("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Re=p.forwardRef(({className:e,variant:s,size:n,asChild:r=!1,...i},a)=>{const o=r?M2:"button";return t.jsx(o,{className:ae(V2({variant:s,size:n,className:e})),ref:a,...i})});Re.displayName="Button";const Tl=p.createContext({});function br(e){const s=p.useRef(null);return s.current===null&&(s.current=e()),s.current}const Ih=typeof window<"u",qi=Ih?p.useLayoutEffect:p.useEffect,Ki=p.createContext(null);function kl(e,s){e.indexOf(s)===-1&&e.push(s)}function El(e,s){const n=e.indexOf(s);n>-1&&e.splice(n,1)}const Dt=(e,s,n)=>n>s?s:n<e?e:n;let Zr=()=>{};const ss={},Mh=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function _h(e){return typeof e=="object"&&e!==null}const Oh=e=>/^0[^.\s]+$/u.test(e);function Rl(e){let s;return()=>(s===void 0&&(s=e()),s)}const dt=e=>e,U2=(e,s)=>n=>s(e(n)),hn=(...e)=>e.reduce(U2),mr=(e,s,n)=>{const r=s-e;return r===0?1:(n-e)/r};class Pl{constructor(){this.subscriptions=[]}add(s){return kl(this.subscriptions,s),()=>El(this.subscriptions,s)}notify(s,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](s,n,r);else for(let a=0;a<i;a++){const o=this.subscriptions[a];o&&o(s,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Qt=e=>e*1e3,vt=e=>e/1e3;function Al(e,s){return s?e*(1e3/s):0}const Lh=(e,s,n)=>(((1-3*n+3*s)*e+(3*n-6*s))*e+3*s)*e,$2=1e-7,z2=12;function H2(e,s,n,r,i){let a,o,l=0;do o=s+(n-s)/2,a=Lh(o,r,i)-e,a>0?n=o:s=o;while(Math.abs(a)>$2&&++l<z2);return o}function fn(e,s,n,r){if(e===s&&n===r)return dt;const i=a=>H2(a,0,1,e,n);return a=>a===0||a===1?a:Lh(i(a),s,r)}const Fh=e=>s=>s<=.5?e(2*s)/2:(2-e(2*(1-s)))/2,Bh=e=>s=>1-e(1-s),Vh=fn(.33,1.53,.69,.99),Dl=Bh(Vh),Uh=Fh(Dl),$h=e=>(e*=2)<1?.5*Dl(e):.5*(2-Math.pow(2,-10*(e-1))),Il=e=>1-Math.sin(Math.acos(e)),zh=Bh(Il),Hh=Fh(Il),W2=fn(.42,0,1,1),G2=fn(0,0,.58,1),Wh=fn(.42,0,.58,1),q2=e=>Array.isArray(e)&&typeof e[0]!="number",Gh=e=>Array.isArray(e)&&typeof e[0]=="number",K2={linear:dt,easeIn:W2,easeInOut:Wh,easeOut:G2,circIn:Il,circInOut:Hh,circOut:zh,backIn:Dl,backInOut:Uh,backOut:Vh,anticipate:$h},Y2=e=>typeof e=="string",Ad=e=>{if(Gh(e)){Zr(e.length===4);const[s,n,r,i]=e;return fn(s,n,r,i)}else if(Y2(e))return K2[e];return e},Mn=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function X2(e,s){let n=new Set,r=new Set,i=!1,a=!1;const o=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1};function c(u){o.has(u)&&(d.schedule(u),e()),u(l)}const d={schedule:(u,m=!1,h=!1)=>{const g=h&&i?n:r;return m&&o.add(u),g.has(u)||g.add(u),u},cancel:u=>{r.delete(u),o.delete(u)},process:u=>{if(l=u,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(c),n.clear(),i=!1,a&&(a=!1,d.process(u))}};return d}const J2=40;function qh(e,s){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Mn.reduce((N,S)=>(N[S]=X2(a),N),{}),{setup:l,read:c,resolveKeyframes:d,preUpdate:u,update:m,preRender:h,render:f,postRender:g}=o,x=()=>{const N=ss.useManualTiming?i.timestamp:performance.now();n=!1,ss.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(N-i.timestamp,J2),1)),i.timestamp=N,i.isProcessing=!0,l.process(i),c.process(i),d.process(i),u.process(i),m.process(i),h.process(i),f.process(i),g.process(i),i.isProcessing=!1,n&&s&&(r=!1,e(x))},y=()=>{n=!0,r=!0,i.isProcessing||e(x)};return{schedule:Mn.reduce((N,S)=>{const E=o[S];return N[S]=(A,j=!1,C=!1)=>(n||y(),E.schedule(A,j,C)),N},{}),cancel:N=>{for(let S=0;S<Mn.length;S++)o[Mn[S]].cancel(N)},state:i,steps:o}}const{schedule:Se,cancel:It,state:Xe,steps:Pa}=qh(typeof requestAnimationFrame<"u"?requestAnimationFrame:dt,!0);let Xn;function Q2(){Xn=void 0}const it={now:()=>(Xn===void 0&&it.set(Xe.isProcessing||ss.useManualTiming?Xe.timestamp:performance.now()),Xn),set:e=>{Xn=e,queueMicrotask(Q2)}},Kh=e=>s=>typeof s=="string"&&s.startsWith(e),Yh=Kh("--"),Z2=Kh("var(--"),Ml=e=>Z2(e)?eS.test(e.split("/*")[0].trim()):!1,eS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Dd(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const jr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},en={...jr,transform:e=>Dt(0,1,e)},_n={...jr,default:1},$r=e=>Math.round(e*1e5)/1e5,_l=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function tS(e){return e==null}const sS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ol=(e,s)=>n=>!!(typeof n=="string"&&sS.test(n)&&n.startsWith(e)||s&&!tS(n)&&Object.prototype.hasOwnProperty.call(n,s)),Xh=(e,s,n)=>r=>{if(typeof r!="string")return r;const[i,a,o,l]=r.match(_l);return{[e]:parseFloat(i),[s]:parseFloat(a),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},rS=e=>Dt(0,255,e),Aa={...jr,transform:e=>Math.round(rS(e))},Ms={test:Ol("rgb","red"),parse:Xh("red","green","blue"),transform:({red:e,green:s,blue:n,alpha:r=1})=>"rgba("+Aa.transform(e)+", "+Aa.transform(s)+", "+Aa.transform(n)+", "+$r(en.transform(r))+")"};function nS(e){let s="",n="",r="",i="";return e.length>5?(s=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(s=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),s+=s,n+=n,r+=r,i+=i),{red:parseInt(s,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const wo={test:Ol("#"),parse:nS,transform:Ms.transform},xn=e=>({test:s=>typeof s=="string"&&s.endsWith(e)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${e}`}),ls=xn("deg"),Vt=xn("%"),W=xn("px"),iS=xn("vh"),aS=xn("vw"),Id={...Vt,parse:e=>Vt.parse(e)/100,transform:e=>Vt.transform(e*100)},Zs={test:Ol("hsl","hue"),parse:Xh("hue","saturation","lightness"),transform:({hue:e,saturation:s,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Vt.transform($r(s))+", "+Vt.transform($r(n))+", "+$r(en.transform(r))+")"},Ge={test:e=>Ms.test(e)||wo.test(e)||Zs.test(e),parse:e=>Ms.test(e)?Ms.parse(e):Zs.test(e)?Zs.parse(e):wo.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Ms.transform(e):Zs.transform(e),getAnimatableNone:e=>{const s=Ge.parse(e);return s.alpha=0,Ge.transform(s)}},oS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function lS(e){var s,n;return isNaN(e)&&typeof e=="string"&&(((s=e.match(_l))==null?void 0:s.length)||0)+(((n=e.match(oS))==null?void 0:n.length)||0)>0}const Jh="number",Qh="color",cS="var",dS="var(",Md="${}",uS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function tn(e){const s=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const l=s.replace(uS,c=>(Ge.test(c)?(r.color.push(a),i.push(Qh),n.push(Ge.parse(c))):c.startsWith(dS)?(r.var.push(a),i.push(cS),n.push(c)):(r.number.push(a),i.push(Jh),n.push(parseFloat(c))),++a,Md)).split(Md);return{values:n,split:l,indexes:r,types:i}}function Zh(e){return tn(e).values}function ef(e){const{split:s,types:n}=tn(e),r=s.length;return i=>{let a="";for(let o=0;o<r;o++)if(a+=s[o],i[o]!==void 0){const l=n[o];l===Jh?a+=$r(i[o]):l===Qh?a+=Ge.transform(i[o]):a+=i[o]}return a}}const mS=e=>typeof e=="number"?0:Ge.test(e)?Ge.getAnimatableNone(e):e;function pS(e){const s=Zh(e);return ef(e)(s.map(mS))}const ys={test:lS,parse:Zh,createTransformer:ef,getAnimatableNone:pS};function Da(e,s,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(s-e)*6*n:n<1/2?s:n<2/3?e+(s-e)*(2/3-n)*6:e}function hS({hue:e,saturation:s,lightness:n,alpha:r}){e/=360,s/=100,n/=100;let i=0,a=0,o=0;if(!s)i=a=o=n;else{const l=n<.5?n*(1+s):n+s-n*s,c=2*n-l;i=Da(c,l,e+1/3),a=Da(c,l,e),o=Da(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function yi(e,s){return n=>n>0?s:e}const _e=(e,s,n)=>e+(s-e)*n,Ia=(e,s,n)=>{const r=e*e,i=n*(s*s-r)+r;return i<0?0:Math.sqrt(i)},fS=[wo,Ms,Zs],xS=e=>fS.find(s=>s.test(e));function _d(e){const s=xS(e);if(!s)return!1;let n=s.parse(e);return s===Zs&&(n=hS(n)),n}const Od=(e,s)=>{const n=_d(e),r=_d(s);if(!n||!r)return yi(e,s);const i={...n};return a=>(i.red=Ia(n.red,r.red,a),i.green=Ia(n.green,r.green,a),i.blue=Ia(n.blue,r.blue,a),i.alpha=_e(n.alpha,r.alpha,a),Ms.transform(i))},So=new Set(["none","hidden"]);function gS(e,s){return So.has(e)?n=>n<=0?e:s:n=>n>=1?s:e}function yS(e,s){return n=>_e(e,s,n)}function Ll(e){return typeof e=="number"?yS:typeof e=="string"?Ml(e)?yi:Ge.test(e)?Od:jS:Array.isArray(e)?tf:typeof e=="object"?Ge.test(e)?Od:vS:yi}function tf(e,s){const n=[...e],r=n.length,i=e.map((a,o)=>Ll(a)(a,s[o]));return a=>{for(let o=0;o<r;o++)n[o]=i[o](a);return n}}function vS(e,s){const n={...e,...s},r={};for(const i in n)e[i]!==void 0&&s[i]!==void 0&&(r[i]=Ll(e[i])(e[i],s[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function bS(e,s){const n=[],r={color:0,var:0,number:0};for(let i=0;i<s.values.length;i++){const a=s.types[i],o=e.indexes[a][r[a]],l=e.values[o]??0;n[i]=l,r[a]++}return n}const jS=(e,s)=>{const n=ys.createTransformer(s),r=tn(e),i=tn(s);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?So.has(e)&&!i.values.length||So.has(s)&&!r.values.length?gS(e,s):hn(tf(bS(r,i),i.values),n):yi(e,s)};function sf(e,s,n){return typeof e=="number"&&typeof s=="number"&&typeof n=="number"?_e(e,s,n):Ll(e)(e,s)}const NS=e=>{const s=({timestamp:n})=>e(n);return{start:(n=!0)=>Se.update(s,n),stop:()=>It(s),now:()=>Xe.isProcessing?Xe.timestamp:it.now()}},rf=(e,s,n=10)=>{let r="";const i=Math.max(Math.round(s/n),2);for(let a=0;a<i;a++)r+=Math.round(e(a/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},vi=2e4;function Fl(e){let s=0;const n=50;let r=e.next(s);for(;!r.done&&s<vi;)s+=n,r=e.next(s);return s>=vi?1/0:s}function wS(e,s=100,n){const r=n({...e,keyframes:[0,s]}),i=Math.min(Fl(r),vi);return{type:"keyframes",ease:a=>r.next(i*a).value/s,duration:vt(i)}}const SS=5;function nf(e,s,n){const r=Math.max(s-SS,0);return Al(n-e(r),s-r)}const Be={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ma=.001;function CS({duration:e=Be.duration,bounce:s=Be.bounce,velocity:n=Be.velocity,mass:r=Be.mass}){let i,a,o=1-s;o=Dt(Be.minDamping,Be.maxDamping,o),e=Dt(Be.minDuration,Be.maxDuration,vt(e)),o<1?(i=d=>{const u=d*o,m=u*e,h=u-n,f=Co(d,o),g=Math.exp(-m);return Ma-h/f*g},a=d=>{const m=d*o*e,h=m*n+n,f=Math.pow(o,2)*Math.pow(d,2)*e,g=Math.exp(-m),x=Co(Math.pow(d,2),o);return(-i(d)+Ma>0?-1:1)*((h-f)*g)/x}):(i=d=>{const u=Math.exp(-d*e),m=(d-n)*e+1;return-Ma+u*m},a=d=>{const u=Math.exp(-d*e),m=(n-d)*(e*e);return u*m});const l=5/e,c=kS(i,a,l);if(e=Qt(e),isNaN(c))return{stiffness:Be.stiffness,damping:Be.damping,duration:e};{const d=Math.pow(c,2)*r;return{stiffness:d,damping:o*2*Math.sqrt(r*d),duration:e}}}const TS=12;function kS(e,s,n){let r=n;for(let i=1;i<TS;i++)r=r-e(r)/s(r);return r}function Co(e,s){return e*Math.sqrt(1-s*s)}const ES=["duration","bounce"],RS=["stiffness","damping","mass"];function Ld(e,s){return s.some(n=>e[n]!==void 0)}function PS(e){let s={velocity:Be.velocity,stiffness:Be.stiffness,damping:Be.damping,mass:Be.mass,isResolvedFromDuration:!1,...e};if(!Ld(e,RS)&&Ld(e,ES))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Dt(.05,1,1-(e.bounce||0))*Math.sqrt(i);s={...s,mass:Be.mass,stiffness:i,damping:a}}else{const n=CS(e);s={...s,...n,mass:Be.mass},s.isResolvedFromDuration=!0}return s}function bi(e=Be.visualDuration,s=Be.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:s}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],l={done:!1,value:a},{stiffness:c,damping:d,mass:u,duration:m,velocity:h,isResolvedFromDuration:f}=PS({...n,velocity:-vt(n.velocity||0)}),g=h||0,x=d/(2*Math.sqrt(c*u)),y=o-a,v=vt(Math.sqrt(c/u)),b=Math.abs(y)<5;r||(r=b?Be.restSpeed.granular:Be.restSpeed.default),i||(i=b?Be.restDelta.granular:Be.restDelta.default);let N;if(x<1){const E=Co(v,x);N=A=>{const j=Math.exp(-x*v*A);return o-j*((g+x*v*y)/E*Math.sin(E*A)+y*Math.cos(E*A))}}else if(x===1)N=E=>o-Math.exp(-v*E)*(y+(g+v*y)*E);else{const E=v*Math.sqrt(x*x-1);N=A=>{const j=Math.exp(-x*v*A),C=Math.min(E*A,300);return o-j*((g+x*v*y)*Math.sinh(C)+E*y*Math.cosh(C))/E}}const S={calculatedDuration:f&&m||null,next:E=>{const A=N(E);if(f)l.done=E>=m;else{let j=E===0?g:0;x<1&&(j=E===0?Qt(g):nf(N,E,A));const C=Math.abs(j)<=r,M=Math.abs(o-A)<=i;l.done=C&&M}return l.value=l.done?o:A,l},toString:()=>{const E=Math.min(Fl(S),vi),A=rf(j=>S.next(E*j).value,E,30);return E+"ms "+A},toTransition:()=>{}};return S}bi.applyToOptions=e=>{const s=wS(e,100,bi);return e.ease=s.ease,e.duration=Qt(s.duration),e.type="keyframes",e};function To({keyframes:e,velocity:s=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:l,max:c,restDelta:d=.5,restSpeed:u}){const m=e[0],h={done:!1,value:m},f=C=>l!==void 0&&C<l||c!==void 0&&C>c,g=C=>l===void 0?c:c===void 0||Math.abs(l-C)<Math.abs(c-C)?l:c;let x=n*s;const y=m+x,v=o===void 0?y:o(y);v!==y&&(x=v-m);const b=C=>-x*Math.exp(-C/r),N=C=>v+b(C),S=C=>{const M=b(C),L=N(C);h.done=Math.abs(M)<=d,h.value=h.done?v:L};let E,A;const j=C=>{f(h.value)&&(E=C,A=bi({keyframes:[h.value,g(h.value)],velocity:nf(N,C,h.value),damping:i,stiffness:a,restDelta:d,restSpeed:u}))};return j(0),{calculatedDuration:null,next:C=>{let M=!1;return!A&&E===void 0&&(M=!0,S(C),j(C)),E!==void 0&&C>=E?A.next(C-E):(!M&&S(C),h)}}}function AS(e,s,n){const r=[],i=n||ss.mix||sf,a=e.length-1;for(let o=0;o<a;o++){let l=i(e[o],e[o+1]);if(s){const c=Array.isArray(s)?s[o]||dt:s;l=hn(c,l)}r.push(l)}return r}function Bl(e,s,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(Zr(a===s.length),a===1)return()=>s[0];if(a===2&&s[0]===s[1])return()=>s[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),s=[...s].reverse());const l=AS(s,r,i),c=l.length,d=u=>{if(o&&u<e[0])return s[0];let m=0;if(c>1)for(;m<e.length-2&&!(u<e[m+1]);m++);const h=mr(e[m],e[m+1],u);return l[m](h)};return n?u=>d(Dt(e[0],e[a-1],u)):d}function DS(e,s){const n=e[e.length-1];for(let r=1;r<=s;r++){const i=mr(0,s,r);e.push(_e(n,1,i))}}function af(e){const s=[0];return DS(s,e.length-1),s}function IS(e,s){return e.map(n=>n*s)}function MS(e,s){return e.map(()=>s||Wh).splice(0,e.length-1)}function zr({duration:e=300,keyframes:s,times:n,ease:r="easeInOut"}){const i=q2(r)?r.map(Ad):Ad(r),a={done:!1,value:s[0]},o=IS(n&&n.length===s.length?n:af(s),e),l=Bl(o,s,{ease:Array.isArray(i)?i:MS(s,i)});return{calculatedDuration:e,next:c=>(a.value=l(c),a.done=c>=e,a)}}const _S=e=>e!==null;function Vl(e,{repeat:s,repeatType:n="loop"},r,i=1){const a=e.filter(_S),l=i<0||s&&n!=="loop"&&s%2===1?0:a.length-1;return!l||r===void 0?a[l]:r}const OS={decay:To,inertia:To,tween:zr,keyframes:zr,spring:bi};function of(e){typeof e.type=="string"&&(e.type=OS[e.type])}class Ul{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(s=>{this.resolve=s})}notifyFinished(){this.resolve()}then(s,n){return this.finished.then(s,n)}}const LS=e=>e/100;class Yi extends Ul{constructor(s){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==it.now()&&this.tick(it.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=s,this.initAnimation(),this.play(),s.autoplay===!1&&this.pause()}initAnimation(){const{options:s}=this;of(s);const{type:n=zr,repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:o=0}=s;let{keyframes:l}=s;const c=n||zr;c!==zr&&typeof l[0]!="number"&&(this.mixKeyframes=hn(LS,sf(l[0],l[1])),l=[0,100]);const d=c({...s,keyframes:l});a==="mirror"&&(this.mirroredGenerator=c({...s,keyframes:[...l].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=Fl(d));const{calculatedDuration:u}=d;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=d}updateTime(s){const n=Math.round(s-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(s,n=!1){const{generator:r,totalDuration:i,mixKeyframes:a,mirroredGenerator:o,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:d=0,keyframes:u,repeat:m,repeatType:h,repeatDelay:f,type:g,onUpdate:x,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,s):this.speed<0&&(this.startTime=Math.min(s-i/this.speed,this.startTime)),n?this.currentTime=s:this.updateTime(s);const v=this.currentTime-d*(this.playbackSpeed>=0?1:-1),b=this.playbackSpeed>=0?v<0:v>i;this.currentTime=Math.max(v,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let N=this.currentTime,S=r;if(m){const C=Math.min(this.currentTime,i)/l;let M=Math.floor(C),L=C%1;!L&&C>=1&&(L=1),L===1&&M--,M=Math.min(M,m+1),!!(M%2)&&(h==="reverse"?(L=1-L,f&&(L-=f/l)):h==="mirror"&&(S=o)),N=Dt(0,1,L)*l}const E=b?{done:!1,value:u[0]}:S.next(N);a&&(E.value=a(E.value));let{done:A}=E;!b&&c!==null&&(A=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const j=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return j&&g!==To&&(E.value=Vl(u,this.options,y,this.speed)),x&&x(E.value),j&&this.finish(),E}then(s,n){return this.finished.then(s,n)}get duration(){return vt(this.calculatedDuration)}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+vt(s)}get time(){return vt(this.currentTime)}set time(s){var n;s=Qt(s),this.currentTime=s,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=s:this.driver&&(this.startTime=this.driver.now()-s/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(s){this.updateTime(it.now());const n=this.playbackSpeed!==s;this.playbackSpeed=s,n&&(this.time=vt(this.currentTime))}play(){var i,a;if(this.isStopped)return;const{driver:s=NS,startTime:n}=this.options;this.driver||(this.driver=s(o=>this.tick(o))),(a=(i=this.options).onPlay)==null||a.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(it.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var s,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(s=this.options).onComplete)==null||n.call(s)}cancel(){var s,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(s=this.options).onCancel)==null||n.call(s)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(s){return this.startTime=0,this.tick(s,!0)}attachTimeline(s){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),s.observe(this)}}function FS(e){for(let s=1;s<e.length;s++)e[s]??(e[s]=e[s-1])}const _s=e=>e*180/Math.PI,ko=e=>{const s=_s(Math.atan2(e[1],e[0]));return Eo(s)},BS={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:ko,rotateZ:ko,skewX:e=>_s(Math.atan(e[1])),skewY:e=>_s(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Eo=e=>(e=e%360,e<0&&(e+=360),e),Fd=ko,Bd=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Vd=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),VS={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Bd,scaleY:Vd,scale:e=>(Bd(e)+Vd(e))/2,rotateX:e=>Eo(_s(Math.atan2(e[6],e[5]))),rotateY:e=>Eo(_s(Math.atan2(-e[2],e[0]))),rotateZ:Fd,rotate:Fd,skewX:e=>_s(Math.atan(e[4])),skewY:e=>_s(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ro(e){return e.includes("scale")?1:0}function Po(e,s){if(!e||e==="none")return Ro(s);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=VS,i=n;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=BS,i=l}if(!i)return Ro(s);const a=r[s],o=i[1].split(",").map($S);return typeof a=="function"?a(o):o[a]}const US=(e,s)=>{const{transform:n="none"}=getComputedStyle(e);return Po(n,s)};function $S(e){return parseFloat(e.trim())}const Nr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],wr=new Set(Nr),Ud=e=>e===jr||e===W,zS=new Set(["x","y","z"]),HS=Nr.filter(e=>!zS.has(e));function WS(e){const s=[];return HS.forEach(n=>{const r=e.getValue(n);r!==void 0&&(s.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),s}const ps={width:({x:e},{paddingLeft:s="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(s)-parseFloat(n),height:({y:e},{paddingTop:s="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(s)-parseFloat(n),top:(e,{top:s})=>parseFloat(s),left:(e,{left:s})=>parseFloat(s),bottom:({y:e},{top:s})=>parseFloat(s)+(e.max-e.min),right:({x:e},{left:s})=>parseFloat(s)+(e.max-e.min),x:(e,{transform:s})=>Po(s,"x"),y:(e,{transform:s})=>Po(s,"y")};ps.translateX=ps.x;ps.translateY=ps.y;const Ls=new Set;let Ao=!1,Do=!1,Io=!1;function lf(){if(Do){const e=Array.from(Ls).filter(r=>r.needsMeasurement),s=new Set(e.map(r=>r.element)),n=new Map;s.forEach(r=>{const i=WS(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),s.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,o])=>{var l;(l=r.getValue(a))==null||l.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Do=!1,Ao=!1,Ls.forEach(e=>e.complete(Io)),Ls.clear()}function cf(){Ls.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Do=!0)})}function GS(){Io=!0,cf(),lf(),Io=!1}class $l{constructor(s,n,r,i,a,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...s],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Ls.add(this),Ao||(Ao=!0,Se.read(cf),Se.resolveKeyframes(lf))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:s,name:n,element:r,motionValue:i}=this;if(s[0]===null){const a=i==null?void 0:i.get(),o=s[s.length-1];if(a!==void 0)s[0]=a;else if(r&&n){const l=r.readValue(n,o);l!=null&&(s[0]=l)}s[0]===void 0&&(s[0]=o),i&&a===void 0&&i.set(s[0])}FS(s)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(s=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,s),Ls.delete(this)}cancel(){this.state==="scheduled"&&(Ls.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const qS=e=>e.startsWith("--");function KS(e,s,n){qS(s)?e.style.setProperty(s,n):e.style[s]=n}const df=Rl(()=>window.ScrollTimeline!==void 0),YS={};function XS(e,s){const n=Rl(e);return()=>YS[s]??n()}const uf=XS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Fr=([e,s,n,r])=>`cubic-bezier(${e}, ${s}, ${n}, ${r})`,$d={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fr([0,.65,.55,1]),circOut:Fr([.55,0,1,.45]),backIn:Fr([.31,.01,.66,-.59]),backOut:Fr([.33,1.53,.69,.99])};function mf(e,s){if(e)return typeof e=="function"?uf()?rf(e,s):"ease-out":Gh(e)?Fr(e):Array.isArray(e)?e.map(n=>mf(n,s)||$d.easeOut):$d[e]}function JS(e,s,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:l="easeOut",times:c}={},d=void 0){const u={[s]:n};c&&(u.offset=c);const m=mf(l,i);Array.isArray(m)&&(u.easing=m);const h={delay:r,duration:i,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"};return d&&(h.pseudoElement=d),e.animate(u,h)}function pf(e){return typeof e=="function"&&"applyToOptions"in e}function QS({type:e,...s}){return pf(e)&&uf()?e.applyToOptions(s):(s.duration??(s.duration=300),s.ease??(s.ease="easeOut"),s)}class ZS extends Ul{constructor(s){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!s)return;const{element:n,name:r,keyframes:i,pseudoElement:a,allowFlatten:o=!1,finalKeyframe:l,onComplete:c}=s;this.isPseudoElement=!!a,this.allowFlatten=o,this.options=s,Zr(typeof s.type!="string");const d=QS(s);this.animation=JS(n,r,i,d,a),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const u=Vl(i,this.options,l,this.speed);this.updateMotionValue?this.updateMotionValue(u):KS(n,r,u),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var s,n;(n=(s=this.animation).finish)==null||n.call(s)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:s}=this;s==="idle"||s==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var s,n;this.isPseudoElement||(n=(s=this.animation).commitStyles)==null||n.call(s)}get duration(){var n,r;const s=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return vt(Number(s))}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+vt(s)}get time(){return vt(Number(this.animation.currentTime)||0)}set time(s){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Qt(s)}get speed(){return this.animation.playbackRate}set speed(s){s<0&&(this.finishedTime=null),this.animation.playbackRate=s}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(s){this.manualStartTime=this.animation.startTime=s}attachTimeline({timeline:s,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,s&&df()?(this.animation.timeline=s,dt):n(this)}}const hf={anticipate:$h,backInOut:Uh,circInOut:Hh};function eC(e){return e in hf}function tC(e){typeof e.ease=="string"&&eC(e.ease)&&(e.ease=hf[e.ease])}const _a=10;class sC extends ZS{constructor(s){tC(s),of(s),super(s),s.startTime!==void 0&&(this.startTime=s.startTime),this.options=s}updateMotionValue(s){const{motionValue:n,onUpdate:r,onComplete:i,element:a,...o}=this.options;if(!n)return;if(s!==void 0){n.set(s);return}const l=new Yi({...o,autoplay:!1}),c=Math.max(_a,it.now()-this.startTime),d=Dt(0,_a,c-_a);n.setWithVelocity(l.sample(Math.max(0,c-d)).value,l.sample(c).value,d),l.stop()}}const zd=(e,s)=>s==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ys.test(e)||e==="0")&&!e.startsWith("url("));function rC(e){const s=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==s)return!0}function nC(e,s,n,r){const i=e[0];if(i===null)return!1;if(s==="display"||s==="visibility")return!0;const a=e[e.length-1],o=zd(i,s),l=zd(a,s);return!o||!l?!1:rC(e)||(n==="spring"||pf(n))&&r}function Mo(e){e.duration=0,e.type="keyframes"}const iC=new Set(["opacity","clipPath","filter","transform"]),aC=Rl(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function oC(e){var u;const{motionValue:s,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(((u=s==null?void 0:s.owner)==null?void 0:u.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:d}=s.owner.getProps();return aC()&&n&&iC.has(n)&&(n!=="transform"||!d)&&!c&&!r&&i!=="mirror"&&a!==0&&o!=="inertia"}const lC=40;class cC extends Ul{constructor({autoplay:s=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",keyframes:l,name:c,motionValue:d,element:u,...m}){var g;super(),this.stop=()=>{var x,y;this._animation&&(this._animation.stop(),(x=this.stopTimeline)==null||x.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=it.now();const h={autoplay:s,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,name:c,motionValue:d,element:u,...m},f=(u==null?void 0:u.KeyframeResolver)||$l;this.keyframeResolver=new f(l,(x,y,v)=>this.onKeyframesResolved(x,y,h,!v),c,d,u),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(s,n,r,i){var y,v;this.keyframeResolver=void 0;const{name:a,type:o,velocity:l,delay:c,isHandoff:d,onUpdate:u}=r;this.resolvedAt=it.now(),nC(s,a,o,l)||((ss.instantAnimations||!c)&&(u==null||u(Vl(s,r,n))),s[0]=s[s.length-1],Mo(r),r.repeat=0);const h={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>lC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:s},f=!d&&oC(h),g=(v=(y=h.motionValue)==null?void 0:y.owner)==null?void 0:v.current,x=f?new sC({...h,element:g}):new Yi(h);x.finished.then(()=>{this.notifyFinished()}).catch(dt),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(s,n){return this.finished.finally(s).then(()=>{})}get animation(){var s;return this._animation||((s=this.keyframeResolver)==null||s.resume(),GS()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(s){this.animation.time=s}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(s){this.animation.speed=s}get startTime(){return this.animation.startTime}attachTimeline(s){return this._animation?this.stopTimeline=this.animation.attachTimeline(s):this.pendingTimeline=s,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var s;this._animation&&this.animation.cancel(),(s=this.keyframeResolver)==null||s.cancel()}}function ff(e,s,n,r=0,i=1){const a=Array.from(e).sort((d,u)=>d.sortNodePosition(u)).indexOf(s),o=e.size,l=(o-1)*r;return typeof n=="function"?n(a,o):i===1?a*r:l-a*r}const dC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function uC(e){const s=dC.exec(e);if(!s)return[,];const[,n,r,i]=s;return[`--${n??r}`,i]}function xf(e,s,n=1){const[r,i]=uC(e);if(!r)return;const a=window.getComputedStyle(s).getPropertyValue(r);if(a){const o=a.trim();return Mh(o)?parseFloat(o):o}return Ml(i)?xf(i,s,n+1):i}const mC={type:"spring",stiffness:500,damping:25,restSpeed:10},pC=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),hC={type:"keyframes",duration:.8},fC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},xC=(e,{keyframes:s})=>s.length>2?hC:wr.has(e)?e.startsWith("scale")?pC(s[1]):mC:fC,gC=e=>e!==null;function yC(e,{repeat:s,repeatType:n="loop"},r){const i=e.filter(gC),a=s&&n!=="loop"&&s%2===1?0:i.length-1;return i[a]}function zl(e,s){return(e==null?void 0:e[s])??(e==null?void 0:e.default)??e}function vC({when:e,delay:s,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:l,from:c,elapsed:d,...u}){return!!Object.keys(u).length}const Hl=(e,s,n,r={},i,a)=>o=>{const l=zl(r,e)||{},c=l.delay||r.delay||0;let{elapsed:d=0}=r;d=d-Qt(c);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:s.getVelocity(),...l,delay:-d,onUpdate:h=>{s.set(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{o(),l.onComplete&&l.onComplete()},name:e,motionValue:s,element:a?void 0:i};vC(l)||Object.assign(u,xC(e,u)),u.duration&&(u.duration=Qt(u.duration)),u.repeatDelay&&(u.repeatDelay=Qt(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let m=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Mo(u),u.delay===0&&(m=!0)),(ss.instantAnimations||ss.skipAnimations)&&(m=!0,Mo(u),u.delay=0),u.allowFlatten=!l.type&&!l.ease,m&&!a&&s.get()!==void 0){const h=yC(u.keyframes,l);if(h!==void 0){Se.update(()=>{u.onUpdate(h),u.onComplete()});return}}return l.isSync?new Yi(u):new cC(u)};function Hd(e){const s=[{},{}];return e==null||e.values.forEach((n,r)=>{s[0][r]=n.get(),s[1][r]=n.getVelocity()}),s}function Wl(e,s,n,r){if(typeof s=="function"){const[i,a]=Hd(r);s=s(n!==void 0?n:e.custom,i,a)}if(typeof s=="string"&&(s=e.variants&&e.variants[s]),typeof s=="function"){const[i,a]=Hd(r);s=s(n!==void 0?n:e.custom,i,a)}return s}function or(e,s,n){const r=e.getProps();return Wl(r,s,n!==void 0?n:r.custom,e)}const gf=new Set(["width","height","top","left","right","bottom",...Nr]),Wd=30,bC=e=>!isNaN(parseFloat(e)),Hr={current:void 0};class jC{constructor(s,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const i=it.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(s),this.owner=n.owner}setCurrent(s){this.current=s,this.updatedAt=it.now(),this.canTrackVelocity===null&&s!==void 0&&(this.canTrackVelocity=bC(this.current))}setPrevFrameValue(s=this.current){this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt}onChange(s){return this.on("change",s)}on(s,n){this.events[s]||(this.events[s]=new Pl);const r=this.events[s].add(n);return s==="change"?()=>{r(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const s in this.events)this.events[s].clear()}attach(s,n){this.passiveEffect=s,this.stopPassiveEffect=n}set(s){this.passiveEffect?this.passiveEffect(s,this.updateAndNotify):this.updateAndNotify(s)}setWithVelocity(s,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt-r}jump(s,n=!0){this.updateAndNotify(s),this.prev=s,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var s;(s=this.events.change)==null||s.notify(this.current)}addDependent(s){this.dependents||(this.dependents=new Set),this.dependents.add(s)}removeDependent(s){this.dependents&&this.dependents.delete(s)}get(){return Hr.current&&Hr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const s=it.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||s-this.updatedAt>Wd)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Wd);return Al(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(s){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=s(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var s,n;(s=this.dependents)==null||s.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Et(e,s){return new jC(e,s)}const _o=e=>Array.isArray(e);function NC(e,s,n){e.hasValue(s)?e.getValue(s).set(n):e.addValue(s,Et(n))}function wC(e){return _o(e)?e[e.length-1]||0:e}function SC(e,s){const n=or(e,s);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a){const l=wC(a[o]);NC(e,o,l)}}const Ze=e=>!!(e&&e.getVelocity);function CC(e){return!!(Ze(e)&&e.add)}function Oo(e,s){const n=e.getValue("willChange");if(CC(n))return n.add(s);if(!n&&ss.WillChange){const r=new ss.WillChange("auto");e.addValue("willChange",r),r.add(s)}}function Gl(e){return e.replace(/([A-Z])/g,s=>`-${s.toLowerCase()}`)}const TC="framerAppearId",yf="data-"+Gl(TC);function vf(e){return e.props[yf]}function kC({protectedKeys:e,needsAnimating:s},n){const r=e.hasOwnProperty(n)&&s[n]!==!0;return s[n]=!1,r}function bf(e,s,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...l}=s;r&&(a=r);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const u in l){const m=e.getValue(u,e.latestValues[u]??null),h=l[u];if(h===void 0||d&&kC(d,u))continue;const f={delay:n,...zl(a||{},u)},g=m.get();if(g!==void 0&&!m.isAnimating&&!Array.isArray(h)&&h===g&&!f.velocity)continue;let x=!1;if(window.MotionHandoffAnimation){const v=vf(e);if(v){const b=window.MotionHandoffAnimation(v,u,Se);b!==null&&(f.startTime=b,x=!0)}}Oo(e,u),m.start(Hl(u,m,h,e.shouldReduceMotion&&gf.has(u)?{type:!1}:f,e,x));const y=m.animation;y&&c.push(y)}return o&&Promise.all(c).then(()=>{Se.update(()=>{o&&SC(e,o)})}),c}function Lo(e,s,n={}){var c;const r=or(e,s,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(bf(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:u=0,staggerChildren:m,staggerDirection:h}=i;return EC(e,s,d,u,m,h,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[d,u]=l==="beforeChildren"?[a,o]:[o,a];return d().then(()=>u())}else return Promise.all([a(),o(n.delay)])}function EC(e,s,n=0,r=0,i=0,a=1,o){const l=[];for(const c of e.variantChildren)c.notify("AnimationStart",s),l.push(Lo(c,s,{...o,delay:n+(typeof r=="function"?0:r)+ff(e.variantChildren,c,r,i,a)}).then(()=>c.notify("AnimationComplete",s)));return Promise.all(l)}function RC(e,s,n={}){e.notify("AnimationStart",s);let r;if(Array.isArray(s)){const i=s.map(a=>Lo(e,a,n));r=Promise.all(i)}else if(typeof s=="string")r=Lo(e,s,n);else{const i=typeof s=="function"?or(e,s,n.custom):s;r=Promise.all(bf(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",s)})}const PC={test:e=>e==="auto",parse:e=>e},jf=e=>s=>s.test(e),Nf=[jr,W,Vt,ls,aS,iS,PC],Gd=e=>Nf.find(jf(e));function AC(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Oh(e):!0}const DC=new Set(["brightness","contrast","saturate","opacity"]);function IC(e){const[s,n]=e.slice(0,-1).split("(");if(s==="drop-shadow")return e;const[r]=n.match(_l)||[];if(!r)return e;const i=n.replace(r,"");let a=DC.has(s)?1:0;return r!==n&&(a*=100),s+"("+a+i+")"}const MC=/\b([a-z-]*)\(.*?\)/gu,Fo={...ys,getAnimatableNone:e=>{const s=e.match(MC);return s?s.map(IC).join(" "):e}},qd={...jr,transform:Math.round},_C={rotate:ls,rotateX:ls,rotateY:ls,rotateZ:ls,scale:_n,scaleX:_n,scaleY:_n,scaleZ:_n,skew:ls,skewX:ls,skewY:ls,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:en,originX:Id,originY:Id,originZ:W},ql={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,inset:W,insetBlock:W,insetBlockStart:W,insetBlockEnd:W,insetInline:W,insetInlineStart:W,insetInlineEnd:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,paddingBlock:W,paddingBlockStart:W,paddingBlockEnd:W,paddingInline:W,paddingInlineStart:W,paddingInlineEnd:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,marginBlock:W,marginBlockStart:W,marginBlockEnd:W,marginInline:W,marginInlineStart:W,marginInlineEnd:W,backgroundPositionX:W,backgroundPositionY:W,..._C,zIndex:qd,fillOpacity:en,strokeOpacity:en,numOctaves:qd},OC={...ql,color:Ge,backgroundColor:Ge,outlineColor:Ge,fill:Ge,stroke:Ge,borderColor:Ge,borderTopColor:Ge,borderRightColor:Ge,borderBottomColor:Ge,borderLeftColor:Ge,filter:Fo,WebkitFilter:Fo},wf=e=>OC[e];function Sf(e,s){let n=wf(e);return n!==Fo&&(n=ys),n.getAnimatableNone?n.getAnimatableNone(s):void 0}const LC=new Set(["auto","none","0"]);function FC(e,s,n){let r=0,i;for(;r<e.length&&!i;){const a=e[r];typeof a=="string"&&!LC.has(a)&&tn(a).values.length&&(i=e[r]),r++}if(i&&n)for(const a of s)e[a]=Sf(n,i)}class BC extends $l{constructor(s,n,r,i,a){super(s,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:s,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<s.length;u++){let m=s[u];if(typeof m=="string"&&(m=m.trim(),Ml(m))){const h=xf(m,n.current);h!==void 0&&(s[u]=h),u===s.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!gf.has(r)||s.length!==2)return;const[i,a]=s,o=Gd(i),l=Gd(a),c=Dd(i),d=Dd(a);if(c!==d&&ps[r]){this.needsMeasurement=!0;return}if(o!==l)if(Ud(o)&&Ud(l))for(let u=0;u<s.length;u++){const m=s[u];typeof m=="string"&&(s[u]=parseFloat(m))}else ps[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:s,name:n}=this,r=[];for(let i=0;i<s.length;i++)(s[i]===null||AC(s[i]))&&r.push(i);r.length&&FC(s,r,n)}measureInitialState(){const{element:s,unresolvedKeyframes:n,name:r}=this;if(!s||!s.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ps[r](s.measureViewportBox(),window.getComputedStyle(s.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&s.getValue(r,i).jump(i,!1)}measureEndState(){var l;const{element:s,name:n,unresolvedKeyframes:r}=this;if(!s||!s.current)return;const i=s.getValue(n);i&&i.jump(this.measuredOrigin,!1);const a=r.length-1,o=r[a];r[a]=ps[n](s.measureViewportBox(),window.getComputedStyle(s.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([c,d])=>{s.getValue(c).set(d)}),this.resolveNoneKeyframes()}}function Kl(e,s,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const Cf=(e,s)=>s&&typeof e=="number"?s.transform(e):e;function Yl(e){return _h(e)&&"offsetHeight"in e}const{schedule:Xl}=qh(queueMicrotask,!1),Tt={x:!1,y:!1};function Tf(){return Tt.x||Tt.y}function VC(e){return e==="x"||e==="y"?Tt[e]?null:(Tt[e]=!0,()=>{Tt[e]=!1}):Tt.x||Tt.y?null:(Tt.x=Tt.y=!0,()=>{Tt.x=Tt.y=!1})}function kf(e,s){const n=Kl(e),r=new AbortController,i={passive:!0,...s,signal:r.signal};return[n,i,()=>r.abort()]}function Kd(e){return!(e.pointerType==="touch"||Tf())}function UC(e,s,n={}){const[r,i,a]=kf(e,n),o=l=>{if(!Kd(l))return;const{target:c}=l,d=s(c,l);if(typeof d!="function"||!c)return;const u=m=>{Kd(m)&&(d(m),c.removeEventListener("pointerleave",u))};c.addEventListener("pointerleave",u,i)};return r.forEach(l=>{l.addEventListener("pointerenter",o,i)}),a}const Ef=(e,s)=>s?e===s?!0:Ef(e,s.parentElement):!1,Jl=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,$C=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Rf(e){return $C.has(e.tagName)||e.isContentEditable===!0}const Jn=new WeakSet;function Yd(e){return s=>{s.key==="Enter"&&e(s)}}function Oa(e,s){e.dispatchEvent(new PointerEvent("pointer"+s,{isPrimary:!0,bubbles:!0}))}const zC=(e,s)=>{const n=e.currentTarget;if(!n)return;const r=Yd(()=>{if(Jn.has(n))return;Oa(n,"down");const i=Yd(()=>{Oa(n,"up")}),a=()=>Oa(n,"cancel");n.addEventListener("keyup",i,s),n.addEventListener("blur",a,s)});n.addEventListener("keydown",r,s),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),s)};function Xd(e){return Jl(e)&&!Tf()}function HC(e,s,n={}){const[r,i,a]=kf(e,n),o=l=>{const c=l.currentTarget;if(!Xd(l))return;Jn.add(c);const d=s(c,l),u=(f,g)=>{window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",h),Jn.has(c)&&Jn.delete(c),Xd(f)&&typeof d=="function"&&d(f,{success:g})},m=f=>{u(f,c===window||c===document||n.useGlobalTarget||Ef(c,f.target))},h=f=>{u(f,!1)};window.addEventListener("pointerup",m,i),window.addEventListener("pointercancel",h,i)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",o,i),Yl(l)&&(l.addEventListener("focus",d=>zC(d,i)),!Rf(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),a}function Ql(e){return _h(e)&&"ownerSVGElement"in e}const Qn=new WeakMap;let cs;const Pf=(e,s,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:Ql(r)&&"getBBox"in r?r.getBBox()[s]:r[n],WC=Pf("inline","width","offsetWidth"),GC=Pf("block","height","offsetHeight");function qC({target:e,borderBoxSize:s}){var n;(n=Qn.get(e))==null||n.forEach(r=>{r(e,{get width(){return WC(e,s)},get height(){return GC(e,s)}})})}function KC(e){e.forEach(qC)}function YC(){typeof ResizeObserver>"u"||(cs=new ResizeObserver(KC))}function XC(e,s){cs||YC();const n=Kl(e);return n.forEach(r=>{let i=Qn.get(r);i||(i=new Set,Qn.set(r,i)),i.add(s),cs==null||cs.observe(r)}),()=>{n.forEach(r=>{const i=Qn.get(r);i==null||i.delete(s),i!=null&&i.size||cs==null||cs.unobserve(r)})}}const Zn=new Set;let er;function JC(){er=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Zn.forEach(s=>s(e))},window.addEventListener("resize",er)}function QC(e){return Zn.add(e),er||JC(),()=>{Zn.delete(e),!Zn.size&&typeof er=="function"&&(window.removeEventListener("resize",er),er=void 0)}}function ZC(e,s){return typeof e=="function"?QC(e):XC(e,s)}function Af(e,s){let n;const r=()=>{const{currentTime:i}=s,o=(i===null?0:i.value)/100;n!==o&&e(o),n=o};return Se.preUpdate(r,!0),()=>It(r)}function eT(e){return Ql(e)&&e.tagName==="svg"}function tT(...e){const s=!Array.isArray(e[0]),n=s?0:-1,r=e[0+n],i=e[1+n],a=e[2+n],o=e[3+n],l=Bl(i,a,o);return s?l(r):l}function sT(e,s,n){const r=e.get();let i=null,a=r,o;const l=typeof r=="string"?r.replace(/[\d.-]/g,""):void 0,c=()=>{i&&(i.stop(),i=null)},d=()=>{c(),i=new Yi({keyframes:[Qd(e.get()),Qd(a)],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:o})};if(e.attach((u,m)=>{a=u,o=h=>m(Jd(h,l)),Se.postRender(()=>{var h;d(),(h=e.events.animationStart)==null||h.notify(),i==null||i.then(()=>{var f;(f=e.events.animationComplete)==null||f.notify()})})},c),Ze(s)){const u=s.on("change",h=>e.set(Jd(h,l))),m=e.on("destroy",u);return()=>{u(),m()}}return c}function Jd(e,s){return s?e+s:e}function Qd(e){return typeof e=="number"?e:parseFloat(e)}const rT=[...Nf,Ge,ys],nT=e=>rT.find(jf(e)),Zd=()=>({translate:0,scale:1,origin:0,originPoint:0}),tr=()=>({x:Zd(),y:Zd()}),eu=()=>({min:0,max:0}),Ye=()=>({x:eu(),y:eu()}),Bo={current:null},Df={current:!1},iT=typeof window<"u";function aT(){if(Df.current=!0,!!iT)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),s=()=>Bo.current=e.matches;e.addEventListener("change",s),s()}else Bo.current=!1}const oT=new WeakMap;function Xi(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function sn(e){return typeof e=="string"||Array.isArray(e)}const Zl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ec=["initial",...Zl];function Ji(e){return Xi(e.animate)||ec.some(s=>sn(e[s]))}function If(e){return!!(Ji(e)||e.variants)}function lT(e,s,n){for(const r in s){const i=s[r],a=n[r];if(Ze(i))e.addValue(r,i);else if(Ze(a))e.addValue(r,Et(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,Et(o!==void 0?o:i,{owner:e}))}}for(const r in n)s[r]===void 0&&e.removeValue(r);return s}const tu=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ji={};function Mf(e){ji=e}function cT(){return ji}class dT{scrapeMotionValuesFromProps(s,n,r){return{}}constructor({parent:s,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=$l,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=it.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,Se.render(this.render,!1,!0))};const{latestValues:c,renderState:d}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=d,this.parent=s,this.props=n,this.presenceContext=r,this.depth=s?s.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!a,this.isControllingVariants=Ji(n),this.isVariantNode=If(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(s&&s.current);const{willChange:u,...m}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in m){const f=m[h];c[h]!==void 0&&Ze(f)&&f.set(c[h])}}mount(s){var n;this.current=s,oT.set(s,this),this.projection&&!this.projection.instance&&this.projection.mount(s),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Df.current||aT(),this.shouldReduceMotion=Bo.current),(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var s;this.projection&&this.projection.unmount(),It(this.notifyUpdate),It(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(s=this.parent)==null||s.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(s){this.children.add(s),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(s)}removeChild(s){this.children.delete(s),this.enteringChildren&&this.enteringChildren.delete(s)}bindToMotionValue(s,n){this.valueSubscriptions.has(s)&&this.valueSubscriptions.get(s)();const r=wr.has(s);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[s]=o,this.props.onUpdate&&Se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,s,n)),this.valueSubscriptions.set(s,()=>{i(),a&&a(),n.owner&&n.stop()})}sortNodePosition(s){return!this.current||!this.sortInstanceNodePosition||this.type!==s.type?0:this.sortInstanceNodePosition(this.current,s.current)}updateFeatures(){let s="animation";for(s in ji){const n=ji[s];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[s]&&i&&r(this.props)&&(this.features[s]=new i(this)),this.features[s]){const a=this.features[s];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ye()}getStaticValue(s){return this.latestValues[s]}setStaticValue(s,n){this.latestValues[s]=n}update(s,n){(s.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=s,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<tu.length;r++){const i=tu[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,o=s[a];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=lT(this,this.scrapeMotionValuesFromProps(s,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(s){return this.props.variants?this.props.variants[s]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(s){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(s),()=>n.variantChildren.delete(s)}addValue(s,n){const r=this.values.get(s);n!==r&&(r&&this.removeValue(s),this.bindToMotionValue(s,n),this.values.set(s,n),this.latestValues[s]=n.get())}removeValue(s){this.values.delete(s);const n=this.valueSubscriptions.get(s);n&&(n(),this.valueSubscriptions.delete(s)),delete this.latestValues[s],this.removeValueFromRenderState(s,this.renderState)}hasValue(s){return this.values.has(s)}getValue(s,n){if(this.props.values&&this.props.values[s])return this.props.values[s];let r=this.values.get(s);return r===void 0&&n!==void 0&&(r=Et(n===null?void 0:n,{owner:this}),this.addValue(s,r)),r}readValue(s,n){let r=this.latestValues[s]!==void 0||!this.current?this.latestValues[s]:this.getBaseTargetFromProps(this.props,s)??this.readValueFromInstance(this.current,s,this.options);return r!=null&&(typeof r=="string"&&(Mh(r)||Oh(r))?r=parseFloat(r):!nT(r)&&ys.test(n)&&(r=Sf(s,n)),this.setBaseTarget(s,Ze(r)?r.get():r)),Ze(r)?r.get():r}setBaseTarget(s,n){this.baseTarget[s]=n}getBaseTarget(s){var a;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=Wl(this.props,n,(a=this.presenceContext)==null?void 0:a.custom);o&&(r=o[s])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,s);return i!==void 0&&!Ze(i)?i:this.initialValues[s]!==void 0&&r===void 0?void 0:this.baseTarget[s]}on(s,n){return this.events[s]||(this.events[s]=new Pl),this.events[s].add(n)}notify(s,...n){this.events[s]&&this.events[s].notify(...n)}scheduleRenderMicrotask(){Xl.render(this.render)}}class _f extends dT{constructor(){super(...arguments),this.KeyframeResolver=BC}sortInstanceNodePosition(s,n){return s.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(s,n){const r=s.style;return r?r[n]:void 0}removeValueFromRenderState(s,{vars:n,style:r}){delete n[s],delete r[s]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:s}=this.props;Ze(s)&&(this.childSubscription=s.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Cs{constructor(s){this.isMounted=!1,this.node=s}update(){}}function Of({top:e,left:s,right:n,bottom:r}){return{x:{min:s,max:n},y:{min:e,max:r}}}function uT({x:e,y:s}){return{top:s.min,right:e.max,bottom:s.max,left:e.min}}function mT(e,s){if(!s)return e;const n=s({x:e.left,y:e.top}),r=s({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function La(e){return e===void 0||e===1}function Vo({scale:e,scaleX:s,scaleY:n}){return!La(e)||!La(s)||!La(n)}function As(e){return Vo(e)||Lf(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Lf(e){return su(e.x)||su(e.y)}function su(e){return e&&e!=="0%"}function Ni(e,s,n){const r=e-n,i=s*r;return n+i}function ru(e,s,n,r,i){return i!==void 0&&(e=Ni(e,i,r)),Ni(e,n,r)+s}function Uo(e,s=0,n=1,r,i){e.min=ru(e.min,s,n,r,i),e.max=ru(e.max,s,n,r,i)}function Ff(e,{x:s,y:n}){Uo(e.x,s.translate,s.scale,s.originPoint),Uo(e.y,n.translate,n.scale,n.originPoint)}const nu=.999999999999,iu=1.0000000000001;function pT(e,s,n,r=!1){const i=n.length;if(!i)return;s.x=s.y=1;let a,o;for(let l=0;l<i;l++){a=n[l],o=a.projectionDelta;const{visualElement:c}=a.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&rr(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(s.x*=o.x.scale,s.y*=o.y.scale,Ff(e,o)),r&&As(a.latestValues)&&rr(e,a.latestValues))}s.x<iu&&s.x>nu&&(s.x=1),s.y<iu&&s.y>nu&&(s.y=1)}function sr(e,s){e.min=e.min+s,e.max=e.max+s}function au(e,s,n,r,i=.5){const a=_e(e.min,e.max,i);Uo(e,s,n,a,r)}function rr(e,s){au(e.x,s.x,s.scaleX,s.scale,s.originX),au(e.y,s.y,s.scaleY,s.scale,s.originY)}function Bf(e,s){return Of(mT(e.getBoundingClientRect(),s))}function hT(e,s,n){const r=Bf(e,n),{scroll:i}=s;return i&&(sr(r.x,i.offset.x),sr(r.y,i.offset.y)),r}const fT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},xT=Nr.length;function gT(e,s,n){let r="",i=!0;for(let a=0;a<xT;a++){const o=Nr[a],l=e[o];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(o.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const d=Cf(l,ql[o]);if(!c){i=!1;const u=fT[o]||o;r+=`${u}(${d}) `}n&&(s[o]=d)}}return r=r.trim(),n?r=n(s,i?"":r):i&&(r="none"),r}function tc(e,s,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,l=!1;for(const c in s){const d=s[c];if(wr.has(c)){o=!0;continue}else if(Yh(c)){i[c]=d;continue}else{const u=Cf(d,ql[c]);c.startsWith("origin")?(l=!0,a[c]=u):r[c]=u}}if(s.transform||(o||n?r.transform=gT(s,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:d="50%",originZ:u=0}=a;r.transformOrigin=`${c} ${d} ${u}`}}function Vf(e,{style:s,vars:n},r,i){const a=e.style;let o;for(o in s)a[o]=s[o];i==null||i.applyProjectionStyles(a,r);for(o in n)a.setProperty(o,n[o])}function ou(e,s){return s.max===s.min?0:e/(s.max-s.min)*100}const Mr={correct:(e,s)=>{if(!s.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const n=ou(e,s.target.x),r=ou(e,s.target.y);return`${n}% ${r}%`}},yT={correct:(e,{treeScale:s,projectionDelta:n})=>{const r=e,i=ys.parse(e);if(i.length>5)return r;const a=ys.createTransformer(e),o=typeof i[0]!="number"?1:0,l=n.x.scale*s.x,c=n.y.scale*s.y;i[0+o]/=l,i[1+o]/=c;const d=_e(l,c,.5);return typeof i[2+o]=="number"&&(i[2+o]/=d),typeof i[3+o]=="number"&&(i[3+o]/=d),a(i)}},$o={borderRadius:{...Mr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Mr,borderTopRightRadius:Mr,borderBottomLeftRadius:Mr,borderBottomRightRadius:Mr,boxShadow:yT};function Uf(e,{layout:s,layoutId:n}){return wr.has(e)||e.startsWith("origin")||(s||n!==void 0)&&(!!$o[e]||e==="opacity")}function sc(e,s,n){var o;const r=e.style,i=s==null?void 0:s.style,a={};if(!r)return a;for(const l in r)(Ze(r[l])||i&&Ze(i[l])||Uf(l,e)||((o=n==null?void 0:n.getValue(l))==null?void 0:o.liveStyle)!==void 0)&&(a[l]=r[l]);return a}function vT(e){return window.getComputedStyle(e)}class bT extends _f{constructor(){super(...arguments),this.type="html",this.renderInstance=Vf}readValueFromInstance(s,n){var r;if(wr.has(n))return(r=this.projection)!=null&&r.isProjecting?Ro(n):US(s,n);{const i=vT(s),a=(Yh(n)?i.getPropertyValue(n):i[n])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(s,{transformPagePoint:n}){return Bf(s,n)}build(s,n,r){tc(s,n,r.transformTemplate)}scrapeMotionValuesFromProps(s,n,r){return sc(s,n,r)}}const jT={offset:"stroke-dashoffset",array:"stroke-dasharray"},NT={offset:"strokeDashoffset",array:"strokeDasharray"};function wT(e,s,n=1,r=0,i=!0){e.pathLength=1;const a=i?jT:NT;e[a.offset]=W.transform(-r);const o=W.transform(s),l=W.transform(n);e[a.array]=`${o} ${l}`}const ST=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function $f(e,{attrX:s,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...l},c,d,u){if(tc(e,l,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:h}=e;m.transform&&(h.transform=m.transform,delete m.transform),(h.transform||m.transformOrigin)&&(h.transformOrigin=m.transformOrigin??"50% 50%",delete m.transformOrigin),h.transform&&(h.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete m.transformBox);for(const f of ST)m[f]!==void 0&&(h[f]=m[f],delete m[f]);s!==void 0&&(m.x=s),n!==void 0&&(m.y=n),r!==void 0&&(m.scale=r),i!==void 0&&wT(m,i,a,o,!1)}const zf=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Hf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function CT(e,s,n,r){Vf(e,s,void 0,r);for(const i in s.attrs)e.setAttribute(zf.has(i)?i:Gl(i),s.attrs[i])}function Wf(e,s,n){const r=sc(e,s,n);for(const i in e)if(Ze(e[i])||Ze(s[i])){const a=Nr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=e[i]}return r}class TT extends _f{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ye}getBaseTargetFromProps(s,n){return s[n]}readValueFromInstance(s,n){if(wr.has(n)){const r=wf(n);return r&&r.default||0}return n=zf.has(n)?n:Gl(n),s.getAttribute(n)}scrapeMotionValuesFromProps(s,n,r){return Wf(s,n,r)}build(s,n,r){$f(s,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(s,n,r,i){CT(s,n,r,i)}mount(s){this.isSVGTag=Hf(s.tagName),super.mount(s)}}const kT=ec.length;function Gf(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Gf(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const s={};for(let n=0;n<kT;n++){const r=ec[n],i=e.props[r];(sn(i)||i===!1)&&(s[r]=i)}return s}function qf(e,s){if(!Array.isArray(s))return!1;const n=s.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(s[r]!==e[r])return!1;return!0}const ET=[...Zl].reverse(),RT=Zl.length;function PT(e){return s=>Promise.all(s.map(({animation:n,options:r})=>RC(e,n,r)))}function AT(e){let s=PT(e),n=lu(),r=!0;const i=c=>(d,u)=>{var h;const m=or(e,u,c==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(m){const{transition:f,transitionEnd:g,...x}=m;d={...d,...x,...g}}return d};function a(c){s=c(e)}function o(c){const{props:d}=e,u=Gf(e.parent)||{},m=[],h=new Set;let f={},g=1/0;for(let y=0;y<RT;y++){const v=ET[y],b=n[v],N=d[v]!==void 0?d[v]:u[v],S=sn(N),E=v===c?b.isActive:null;E===!1&&(g=y);let A=N===u[v]&&N!==d[v]&&S;if(A&&r&&e.manuallyAnimateOnMount&&(A=!1),b.protectedKeys={...f},!b.isActive&&E===null||!N&&!b.prevProp||Xi(N)||typeof N=="boolean")continue;const j=DT(b.prevProp,N);let C=j||v===c&&b.isActive&&!A&&S||y>g&&S,M=!1;const L=Array.isArray(N)?N:[N];let $=L.reduce(i(v),{});E===!1&&($={});const{prevResolvedValues:Y={}}=b,ie={...Y,...$},V=J=>{C=!0,h.has(J)&&(M=!0,h.delete(J)),b.needsAnimating[J]=!0;const D=e.getValue(J);D&&(D.liveStyle=!1)};for(const J in ie){const D=$[J],me=Y[J];if(f.hasOwnProperty(J))continue;let Te=!1;_o(D)&&_o(me)?Te=!qf(D,me):Te=D!==me,Te?D!=null?V(J):h.add(J):D!==void 0&&h.has(J)?V(J):b.protectedKeys[J]=!0}b.prevProp=N,b.prevResolvedValues=$,b.isActive&&(f={...f,...$}),r&&e.blockInitialAnimation&&(C=!1);const re=A&&j;C&&(!re||M)&&m.push(...L.map(J=>{const D={type:v};if(typeof J=="string"&&r&&!re&&e.manuallyAnimateOnMount&&e.parent){const{parent:me}=e,Te=or(me,J);if(me.enteringChildren&&Te){const{delayChildren:T}=Te.transition||{};D.delay=ff(me.enteringChildren,e,T)}}return{animation:J,options:D}}))}if(h.size){const y={};if(typeof d.initial!="boolean"){const v=or(e,Array.isArray(d.initial)?d.initial[0]:d.initial);v&&v.transition&&(y.transition=v.transition)}h.forEach(v=>{const b=e.getBaseTarget(v),N=e.getValue(v);N&&(N.liveStyle=!0),y[v]=b??null}),m.push({animation:y})}let x=!!m.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?s(m):Promise.resolve()}function l(c,d){var m;if(n[c].isActive===d)return Promise.resolve();(m=e.variantChildren)==null||m.forEach(h=>{var f;return(f=h.animationState)==null?void 0:f.setActive(c,d)}),n[c].isActive=d;const u=o(c);for(const h in n)n[h].protectedKeys={};return u}return{animateChanges:o,setActive:l,setAnimateFunction:a,getState:()=>n,reset:()=>{n=lu()}}}function DT(e,s){return typeof s=="string"?s!==e:Array.isArray(s)?!qf(s,e):!1}function Ps(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function lu(){return{animate:Ps(!0),whileInView:Ps(),whileHover:Ps(),whileTap:Ps(),whileDrag:Ps(),whileFocus:Ps(),exit:Ps()}}function cu(e,s){e.min=s.min,e.max=s.max}function Ct(e,s){cu(e.x,s.x),cu(e.y,s.y)}function du(e,s){e.translate=s.translate,e.scale=s.scale,e.originPoint=s.originPoint,e.origin=s.origin}const Kf=1e-4,IT=1-Kf,MT=1+Kf,Yf=.01,_T=0-Yf,OT=0+Yf;function at(e){return e.max-e.min}function LT(e,s,n){return Math.abs(e-s)<=n}function uu(e,s,n,r=.5){e.origin=r,e.originPoint=_e(s.min,s.max,e.origin),e.scale=at(n)/at(s),e.translate=_e(n.min,n.max,e.origin)-e.originPoint,(e.scale>=IT&&e.scale<=MT||isNaN(e.scale))&&(e.scale=1),(e.translate>=_T&&e.translate<=OT||isNaN(e.translate))&&(e.translate=0)}function Wr(e,s,n,r){uu(e.x,s.x,n.x,r?r.originX:void 0),uu(e.y,s.y,n.y,r?r.originY:void 0)}function mu(e,s,n){e.min=n.min+s.min,e.max=e.min+at(s)}function FT(e,s,n){mu(e.x,s.x,n.x),mu(e.y,s.y,n.y)}function pu(e,s,n){e.min=s.min-n.min,e.max=e.min+at(s)}function wi(e,s,n){pu(e.x,s.x,n.x),pu(e.y,s.y,n.y)}function hu(e,s,n,r,i){return e-=s,e=Ni(e,1/n,r),i!==void 0&&(e=Ni(e,1/i,r)),e}function BT(e,s=0,n=1,r=.5,i,a=e,o=e){if(Vt.test(s)&&(s=parseFloat(s),s=_e(o.min,o.max,s/100)-o.min),typeof s!="number")return;let l=_e(a.min,a.max,r);e===a&&(l-=s),e.min=hu(e.min,s,n,l,i),e.max=hu(e.max,s,n,l,i)}function fu(e,s,[n,r,i],a,o){BT(e,s[n],s[r],s[i],s.scale,a,o)}const VT=["x","scaleX","originX"],UT=["y","scaleY","originY"];function xu(e,s,n,r){fu(e.x,s,VT,n?n.x:void 0,r?r.x:void 0),fu(e.y,s,UT,n?n.y:void 0,r?r.y:void 0)}function gu(e){return e.translate===0&&e.scale===1}function Xf(e){return gu(e.x)&&gu(e.y)}function yu(e,s){return e.min===s.min&&e.max===s.max}function $T(e,s){return yu(e.x,s.x)&&yu(e.y,s.y)}function vu(e,s){return Math.round(e.min)===Math.round(s.min)&&Math.round(e.max)===Math.round(s.max)}function Jf(e,s){return vu(e.x,s.x)&&vu(e.y,s.y)}function bu(e){return at(e.x)/at(e.y)}function ju(e,s){return e.translate===s.translate&&e.scale===s.scale&&e.originPoint===s.originPoint}function yt(e){return[e("x"),e("y")]}function zT(e,s,n){let r="";const i=e.x.translate/s.x,a=e.y.translate/s.y,o=(n==null?void 0:n.z)||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(s.x!==1||s.y!==1)&&(r+=`scale(${1/s.x}, ${1/s.y}) `),n){const{transformPerspective:d,rotate:u,rotateX:m,rotateY:h,skewX:f,skewY:g}=n;d&&(r=`perspective(${d}px) ${r}`),u&&(r+=`rotate(${u}deg) `),m&&(r+=`rotateX(${m}deg) `),h&&(r+=`rotateY(${h}deg) `),f&&(r+=`skewX(${f}deg) `),g&&(r+=`skewY(${g}deg) `)}const l=e.x.scale*s.x,c=e.y.scale*s.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const Qf=["TopLeft","TopRight","BottomLeft","BottomRight"],HT=Qf.length,Nu=e=>typeof e=="string"?parseFloat(e):e,wu=e=>typeof e=="number"||W.test(e);function WT(e,s,n,r,i,a){i?(e.opacity=_e(0,n.opacity??1,GT(r)),e.opacityExit=_e(s.opacity??1,0,qT(r))):a&&(e.opacity=_e(s.opacity??1,n.opacity??1,r));for(let o=0;o<HT;o++){const l=`border${Qf[o]}Radius`;let c=Su(s,l),d=Su(n,l);if(c===void 0&&d===void 0)continue;c||(c=0),d||(d=0),c===0||d===0||wu(c)===wu(d)?(e[l]=Math.max(_e(Nu(c),Nu(d),r),0),(Vt.test(d)||Vt.test(c))&&(e[l]+="%")):e[l]=d}(s.rotate||n.rotate)&&(e.rotate=_e(s.rotate||0,n.rotate||0,r))}function Su(e,s){return e[s]!==void 0?e[s]:e.borderRadius}const GT=Zf(0,.5,zh),qT=Zf(.5,.95,dt);function Zf(e,s,n){return r=>r<e?0:r>s?1:n(mr(e,s,r))}function KT(e,s,n){const r=Ze(e)?e:Et(e);return r.start(Hl("",r,s,n)),r.animation}function rn(e,s,n,r={passive:!0}){return e.addEventListener(s,n,r),()=>e.removeEventListener(s,n)}const YT=(e,s)=>e.depth-s.depth;class XT{constructor(){this.children=[],this.isDirty=!1}add(s){kl(this.children,s),this.isDirty=!0}remove(s){El(this.children,s),this.isDirty=!0}forEach(s){this.isDirty&&this.children.sort(YT),this.isDirty=!1,this.children.forEach(s)}}function JT(e,s){const n=it.now(),r=({timestamp:i})=>{const a=i-n;a>=s&&(It(r),e(a-s))};return Se.setup(r,!0),()=>It(r)}function ei(e){return Ze(e)?e.get():e}class QT{constructor(){this.members=[]}add(s){kl(this.members,s),s.scheduleRender()}remove(s){if(El(this.members,s),s===this.prevLead&&(this.prevLead=void 0),s===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(s){const n=this.members.findIndex(i=>s===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(s,n){const r=this.lead;if(s!==r&&(this.prevLead=r,this.lead=s,s.show(),r)){r.instance&&r.scheduleRender(),s.scheduleRender(),s.resumeFrom=r,n&&(s.resumeFrom.preserveOpacity=!0),r.snapshot&&(s.snapshot=r.snapshot,s.snapshot.latestValues=r.animationValues||r.latestValues),s.root&&s.root.isUpdating&&(s.isLayoutDirty=!0);const{crossfade:i}=s.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(s=>{const{options:n,resumingFrom:r}=s;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(s=>{s.instance&&s.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const ti={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Fa=["","X","Y","Z"],ZT=1e3;let ek=0;function Ba(e,s,n,r){const{latestValues:i}=s;i[e]&&(n[e]=i[e],s.setStaticValue(e,0),r&&(r[e]=0))}function ex(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:s}=e.options;if(!s)return;const n=vf(s);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Se,!(i||a))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&ex(r)}function tx({attachResizeListener:e,defaultParent:s,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},l=s==null?void 0:s()){this.id=ek++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(rk),this.nodes.forEach(ok),this.nodes.forEach(lk),this.nodes.forEach(nk)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new XT)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Pl),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const c=this.eventHandlers.get(o);c&&c.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Ql(o)&&!eT(o),this.instance=o;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let u,m=0;const h=()=>this.root.updateBlockedByResize=!1;Se.read(()=>{m=window.innerWidth}),e(o,()=>{const f=window.innerWidth;f!==m&&(m=f,this.root.updateBlockedByResize=!0,u&&u(),u=JT(h,250),ti.hasAnimatedSinceResize&&(ti.hasAnimatedSinceResize=!1,this.nodes.forEach(ku)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:m,hasRelativeLayoutChanged:h,layout:f})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||d.getDefaultTransition()||pk,{onLayoutAnimationStart:x,onLayoutAnimationComplete:y}=d.getProps(),v=!this.targetLayout||!Jf(this.targetLayout,f),b=!m&&h;if(this.options.layoutRoot||this.resumeFrom||b||m&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const N={...zl(g,"layout"),onPlay:x,onComplete:y};(d.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N),this.setAnimationOrigin(u,b)}else m||ku(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=f})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),It(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ck),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ex(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const m=this.path[u];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Cu);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Tu);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(ak),this.nodes.forEach(tk),this.nodes.forEach(sk)):this.nodes.forEach(Tu),this.clearAllSnapshots();const l=it.now();Xe.delta=Dt(0,1e3/60,l-Xe.timestamp),Xe.timestamp=l,Xe.isProcessing=!0,Pa.update.process(Xe),Pa.preRender.process(Xe),Pa.render.process(Xe),Xe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Xl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ik),this.sharedNodes.forEach(dk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!at(this.snapshot.measuredBox.x)&&!at(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Ye(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!Xf(this.projectionDelta),c=this.getTransformTemplate(),d=c?c(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;o&&this.instance&&(l||As(this.latestValues)||u)&&(i(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return o&&(c=this.removeTransform(c)),hk(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:o}=this.options;if(!o)return Ye();const l=o.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some(fk))){const{scroll:u}=this.root;u&&(sr(l.x,u.offset.x),sr(l.y,u.offset.y))}return l}removeElementScroll(o){var c;const l=Ye();if(Ct(l,o),(c=this.scroll)!=null&&c.wasRoot)return l;for(let d=0;d<this.path.length;d++){const u=this.path[d],{scroll:m,options:h}=u;u!==this.root&&m&&h.layoutScroll&&(m.wasRoot&&Ct(l,o),sr(l.x,m.offset.x),sr(l.y,m.offset.y))}return l}applyTransform(o,l=!1){const c=Ye();Ct(c,o);for(let d=0;d<this.path.length;d++){const u=this.path[d];!l&&u.options.layoutScroll&&u.scroll&&u!==u.root&&rr(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),As(u.latestValues)&&rr(c,u.latestValues)}return As(this.latestValues)&&rr(c,this.latestValues),c}removeTransform(o){const l=Ye();Ct(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!d.instance||!As(d.latestValues))continue;Vo(d.latestValues)&&d.updateSnapshot();const u=Ye(),m=d.measurePageBox();Ct(u,m),xu(l,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,u)}return As(this.latestValues)&&xu(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Xe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var f;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(f=this.parent)!=null&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:m}=this.options;if(!this.layout||!(u||m))return;this.resolvedRelativeTargetAt=Xe.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ye(),this.targetWithTransforms=Ye()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),FT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ct(this.target,this.layout.layoutBox),Ff(this.target,this.targetDelta)):Ct(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Vo(this.parent.latestValues)||Lf(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,l,c){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ye(),this.relativeTargetOrigin=Ye(),wi(this.relativeTargetOrigin,l,c),Ct(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var g;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let c=!0;if((this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Xe.timestamp&&(c=!1),c)return;const{layout:d,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||u))return;Ct(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,h=this.treeScale.y;pT(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Ye());const{target:f}=o;if(!f){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(du(this.prevProjectionDelta.x,this.projectionDelta.x),du(this.prevProjectionDelta.y,this.projectionDelta.y)),Wr(this.projectionDelta,this.layoutCorrected,f,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==h||!ju(this.projectionDelta.x,this.prevProjectionDelta.x)||!ju(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",f))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),o){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=tr(),this.projectionDelta=tr(),this.projectionDeltaWithTransform=tr()}setAnimationOrigin(o,l=!1){const c=this.snapshot,d=c?c.latestValues:{},u={...this.latestValues},m=tr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const h=Ye(),f=c?c.source:void 0,g=this.layout?this.layout.source:void 0,x=f!==g,y=this.getStack(),v=!y||y.members.length<=1,b=!!(x&&!v&&this.options.crossfade===!0&&!this.path.some(mk));this.animationProgress=0;let N;this.mixTargetDelta=S=>{const E=S/1e3;Eu(m.x,o.x,E),Eu(m.y,o.y,E),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wi(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),uk(this.relativeTarget,this.relativeTargetOrigin,h,E),N&&$T(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=Ye()),Ct(N,this.relativeTarget)),x&&(this.animationValues=u,WT(u,d,this.latestValues,E,b,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var l,c,d;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(d=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||d.stop(),this.pendingAnimation&&(It(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{ti.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Et(0)),this.currentAnimation=KT(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ZT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:c,layout:d,latestValues:u}=o;if(!(!l||!c||!d)){if(this!==o&&this.layout&&d&&sx(this.options.animationType,this.layout.layoutBox,d.layoutBox)){c=this.target||Ye();const m=at(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+m;const h=at(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+h}Ct(l,c),rr(l,u),Wr(this.projectionDeltaWithTransform,this.layoutCorrected,l,u)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new QT),this.sharedNodes.get(o).add(l);const d=l.options.initialPromotionConfig;l.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var l;const{layoutId:o}=this.options;return o?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:o}=this.options;return o?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:c}={}){const d=this.getStack();d&&d.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:c}=o;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const d={};c.z&&Ba("z",o,d,this.animationValues);for(let u=0;u<Fa.length;u++)Ba(`rotate${Fa[u]}`,o,d,this.animationValues),Ba(`skew${Fa[u]}`,o,d,this.animationValues);o.render();for(const u in d)o.setStaticValue(u,d[u]),this.animationValues&&(this.animationValues[u]=d[u]);o.scheduleRender()}applyProjectionStyles(o,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=ei(l==null?void 0:l.pointerEvents)||"",o.transform=c?c(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=ei(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!As(this.latestValues)&&(o.transform=c?c({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=d.animationValues||d.latestValues;this.applyTransformsToTarget();let m=zT(this.projectionDeltaWithTransform,this.treeScale,u);c&&(m=c(u,m)),o.transform=m;const{x:h,y:f}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${f.origin*100}% 0`,d.animationValues?o.opacity=d===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=d===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const g in $o){if(u[g]===void 0)continue;const{correct:x,applyTo:y,isCSSVariable:v}=$o[g],b=m==="none"?u[g]:x(u[g],d);if(y){const N=y.length;for(let S=0;S<N;S++)o[y[S]]=b}else v?this.options.visualElement.renderState.vars[g]=b:o[g]=b}this.options.layoutId&&(o.pointerEvents=d===this?ei(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(Cu),this.root.sharedNodes.clear()}}}function tk(e){e.updateLayout()}function sk(e){var n;const s=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&s&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:a}=e.options,o=s.source!==e.layout.source;a==="size"?yt(m=>{const h=o?s.measuredBox[m]:s.layoutBox[m],f=at(h);h.min=r[m].min,h.max=h.min+f}):sx(a,s.layoutBox,r)&&yt(m=>{const h=o?s.measuredBox[m]:s.layoutBox[m],f=at(r[m]);h.max=h.min+f,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[m].max=e.relativeTarget[m].min+f)});const l=tr();Wr(l,r,s.layoutBox);const c=tr();o?Wr(c,e.applyTransform(i,!0),s.measuredBox):Wr(c,r,s.layoutBox);const d=!Xf(l);let u=!1;if(!e.resumeFrom){const m=e.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:h,layout:f}=m;if(h&&f){const g=Ye();wi(g,s.layoutBox,h.layoutBox);const x=Ye();wi(x,r,f.layoutBox),Jf(g,x)||(u=!0),m.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=g,e.relativeParent=m)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:s,delta:c,layoutDelta:l,hasLayoutChanged:d,hasRelativeLayoutChanged:u})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function rk(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function nk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ik(e){e.clearSnapshot()}function Cu(e){e.clearMeasurements()}function Tu(e){e.isLayoutDirty=!1}function ak(e){const{visualElement:s}=e.options;s&&s.getProps().onBeforeLayoutMeasure&&s.notify("BeforeLayoutMeasure"),e.resetTransform()}function ku(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function ok(e){e.resolveTargetDelta()}function lk(e){e.calcProjection()}function ck(e){e.resetSkewAndRotation()}function dk(e){e.removeLeadSnapshot()}function Eu(e,s,n){e.translate=_e(s.translate,0,n),e.scale=_e(s.scale,1,n),e.origin=s.origin,e.originPoint=s.originPoint}function Ru(e,s,n,r){e.min=_e(s.min,n.min,r),e.max=_e(s.max,n.max,r)}function uk(e,s,n,r){Ru(e.x,s.x,n.x,r),Ru(e.y,s.y,n.y,r)}function mk(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const pk={duration:.45,ease:[.4,0,.1,1]},Pu=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Au=Pu("applewebkit/")&&!Pu("chrome/")?Math.round:dt;function Du(e){e.min=Au(e.min),e.max=Au(e.max)}function hk(e){Du(e.x),Du(e.y)}function sx(e,s,n){return e==="position"||e==="preserve-aspect"&&!LT(bu(s),bu(n),.2)}function fk(e){var s;return e!==e.root&&((s=e.scroll)==null?void 0:s.wasRoot)}const xk=tx({attachResizeListener:(e,s)=>rn(e,"resize",s),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Va={current:void 0},rx=tx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Va.current){const e=new xk({});e.mount(window),e.setOptions({layoutScroll:!0}),Va.current=e}return Va.current},resetTransform:(e,s)=>{e.style.transform=s!==void 0?s:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),gn=p.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Iu(e,s){if(typeof e=="function")return e(s);e!=null&&(e.current=s)}function gk(...e){return s=>{let n=!1;const r=e.map(i=>{const a=Iu(i,s);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let i=0;i<r.length;i++){const a=r[i];typeof a=="function"?a():Iu(e[i],null)}}}}function yk(...e){return p.useCallback(gk(...e),e)}class vk extends p.Component{getSnapshotBeforeUpdate(s){const n=this.props.childRef.current;if(n&&s.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=Yl(r)&&r.offsetWidth||0,a=this.props.sizeRef.current;a.height=n.offsetHeight||0,a.width=n.offsetWidth||0,a.top=n.offsetTop,a.left=n.offsetLeft,a.right=i-a.width-a.left}return null}componentDidUpdate(){}render(){return this.props.children}}function bk({children:e,isPresent:s,anchorX:n,root:r}){var u;const i=p.useId(),a=p.useRef(null),o=p.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=p.useContext(gn),c=((u=e.props)==null?void 0:u.ref)??(e==null?void 0:e.ref),d=yk(a,c);return p.useInsertionEffect(()=>{const{width:m,height:h,top:f,left:g,right:x}=o.current;if(s||!a.current||!m||!h)return;const y=n==="left"?`left: ${g}`:`right: ${x}`;a.current.dataset.motionPopId=i;const v=document.createElement("style");l&&(v.nonce=l);const b=r??document.head;return b.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${h}px !important;
            ${y}px !important;
            top: ${f}px !important;
          }
        `),()=>{b.contains(v)&&b.removeChild(v)}},[s]),t.jsx(vk,{isPresent:s,childRef:a,sizeRef:o,children:p.cloneElement(e,{ref:d})})}const jk=({children:e,initial:s,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:l,root:c})=>{const d=br(Nk),u=p.useId();let m=!0,h=p.useMemo(()=>(m=!1,{id:u,initial:s,isPresent:n,custom:i,onExitComplete:f=>{d.set(f,!0);for(const g of d.values())if(!g)return;r&&r()},register:f=>(d.set(f,!1),()=>d.delete(f))}),[n,d,r]);return a&&m&&(h={...h}),p.useMemo(()=>{d.forEach((f,g)=>d.set(g,!1))},[n]),p.useEffect(()=>{!n&&!d.size&&r&&r()},[n]),o==="popLayout"&&(e=t.jsx(bk,{isPresent:n,anchorX:l,root:c,children:e})),t.jsx(Ki.Provider,{value:h,children:e})};function Nk(){return new Map}function nx(e=!0){const s=p.useContext(Ki);if(s===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=s,a=p.useId();p.useEffect(()=>{if(e)return i(a)},[e]);const o=p.useCallback(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}const On=e=>e.key||"";function Mu(e){const s=[];return p.Children.forEach(e,n=>{p.isValidElement(n)&&s.push(n)}),s}const rc=({children:e,custom:s,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a="sync",propagate:o=!1,anchorX:l="left",root:c})=>{const[d,u]=nx(o),m=p.useMemo(()=>Mu(e),[e]),h=o&&!d?[]:m.map(On),f=p.useRef(!0),g=p.useRef(m),x=br(()=>new Map),y=p.useRef(new Set),[v,b]=p.useState(m),[N,S]=p.useState(m);qi(()=>{f.current=!1,g.current=m;for(let j=0;j<N.length;j++){const C=On(N[j]);h.includes(C)?(x.delete(C),y.current.delete(C)):x.get(C)!==!0&&x.set(C,!1)}},[N,h.length,h.join("-")]);const E=[];if(m!==v){let j=[...m];for(let C=0;C<N.length;C++){const M=N[C],L=On(M);h.includes(L)||(j.splice(C,0,M),E.push(M))}return a==="wait"&&E.length&&(j=E),S(Mu(j)),b(m),null}const{forceRender:A}=p.useContext(Tl);return t.jsx(t.Fragment,{children:N.map(j=>{const C=On(j),M=o&&!d?!1:m===N||h.includes(C),L=()=>{if(y.current.has(C))return;if(y.current.add(C),x.has(C))x.set(C,!0);else return;let $=!0;x.forEach(Y=>{Y||($=!1)}),$&&(A==null||A(),S(g.current),o&&(u==null||u()),r&&r())};return t.jsx(jk,{isPresent:M,initial:!f.current||n?void 0:!1,custom:s,presenceAffectsLayout:i,mode:a,root:c,onExitComplete:M?void 0:L,anchorX:l,children:j},C)})})},ix=p.createContext({strict:!1}),_u={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Ou=!1;function wk(){if(Ou)return;const e={};for(const s in _u)e[s]={isEnabled:n=>_u[s].some(r=>!!n[r])};Mf(e),Ou=!0}function ax(){return wk(),cT()}function Sk(e){const s=ax();for(const n in e)s[n]={...s[n],...e[n]};Mf(s)}const Ck=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Si(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Ck.has(e)}let ox=e=>!Si(e);function Tk(e){typeof e=="function"&&(ox=s=>s.startsWith("on")?!Si(s):e(s))}try{Tk(require("@emotion/is-prop-valid").default)}catch{}function kk(e,s,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(ox(i)||n===!0&&Si(i)||!s&&!Si(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const Qi=p.createContext({});function Ek(e,s){if(Ji(e)){const{initial:n,animate:r}=e;return{initial:n===!1||sn(n)?n:void 0,animate:sn(r)?r:void 0}}return e.inherit!==!1?s:{}}function Rk(e){const{initial:s,animate:n}=Ek(e,p.useContext(Qi));return p.useMemo(()=>({initial:s,animate:n}),[Lu(s),Lu(n)])}function Lu(e){return Array.isArray(e)?e.join(" "):e}const nc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function lx(e,s,n){for(const r in s)!Ze(s[r])&&!Uf(r,n)&&(e[r]=s[r])}function Pk({transformTemplate:e},s){return p.useMemo(()=>{const n=nc();return tc(n,s,e),Object.assign({},n.vars,n.style)},[s])}function Ak(e,s){const n=e.style||{},r={};return lx(r,n,e),Object.assign(r,Pk(e,s)),r}function Dk(e,s){const n={},r=Ak(e,s);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const cx=()=>({...nc(),attrs:{}});function Ik(e,s,n,r){const i=p.useMemo(()=>{const a=cx();return $f(a,s,Hf(r),e.transformTemplate,e.style),{...a.attrs,style:{...a.style}}},[s]);if(e.style){const a={};lx(a,e.style,e),i.style={...a,...i.style}}return i}const Mk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ic(e){return typeof e!="string"||e.includes("-")?!1:!!(Mk.indexOf(e)>-1||/[A-Z]/u.test(e))}function _k(e,s,n,{latestValues:r},i,a=!1,o){const c=(o??ic(e)?Ik:Dk)(s,r,i,e),d=kk(s,typeof e=="string",a),u=e!==p.Fragment?{...d,...c,ref:n}:{},{children:m}=s,h=p.useMemo(()=>Ze(m)?m.get():m,[m]);return p.createElement(e,{...u,children:h})}function Ok({scrapeMotionValuesFromProps:e,createRenderState:s},n,r,i){return{latestValues:Lk(n,r,i,e),renderState:s()}}function Lk(e,s,n,r){const i={},a=r(e,{});for(const h in a)i[h]=ei(a[h]);let{initial:o,animate:l}=e;const c=Ji(e),d=If(e);s&&d&&!c&&e.inherit!==!1&&(o===void 0&&(o=s.initial),l===void 0&&(l=s.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const m=u?l:o;if(m&&typeof m!="boolean"&&!Xi(m)){const h=Array.isArray(m)?m:[m];for(let f=0;f<h.length;f++){const g=Wl(e,h[f]);if(g){const{transitionEnd:x,transition:y,...v}=g;for(const b in v){let N=v[b];if(Array.isArray(N)){const S=u?N.length-1:0;N=N[S]}N!==null&&(i[b]=N)}for(const b in x)i[b]=x[b]}}}return i}const dx=e=>(s,n)=>{const r=p.useContext(Qi),i=p.useContext(Ki),a=()=>Ok(e,s,r,i);return n?a():br(a)},Fk=dx({scrapeMotionValuesFromProps:sc,createRenderState:nc}),Bk=dx({scrapeMotionValuesFromProps:Wf,createRenderState:cx}),Vk=Symbol.for("motionComponentSymbol");function Uk(e,s,n){const r=p.useRef(n);p.useInsertionEffect(()=>{r.current=n});const i=p.useRef(null);return p.useCallback(a=>{var l;a&&((l=e.onMount)==null||l.call(e,a)),s&&(a?s.mount(a):s.unmount());const o=r.current;if(typeof o=="function")if(a){const c=o(a);typeof c=="function"&&(i.current=c)}else i.current?(i.current(),i.current=null):o(a);else o&&(o.current=a)},[s])}const ux=p.createContext({});function Br(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function $k(e,s,n,r,i,a){var y,v;const{visualElement:o}=p.useContext(Qi),l=p.useContext(ix),c=p.useContext(Ki),d=p.useContext(gn).reducedMotion,u=p.useRef(null);r=r||l.renderer,!u.current&&r&&(u.current=r(e,{visualState:s,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d,isSVG:a}));const m=u.current,h=p.useContext(ux);m&&!m.projection&&i&&(m.type==="html"||m.type==="svg")&&zk(u.current,n,i,h);const f=p.useRef(!1);p.useInsertionEffect(()=>{m&&f.current&&m.update(n,c)});const g=n[yf],x=p.useRef(!!g&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,g))&&((v=window.MotionHasOptimisedAnimation)==null?void 0:v.call(window,g)));return qi(()=>{m&&(f.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),x.current&&m.animationState&&m.animationState.animateChanges())}),p.useEffect(()=>{m&&(!x.current&&m.animationState&&m.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var b;(b=window.MotionHandoffMarkAsComplete)==null||b.call(window,g)}),x.current=!1),m.enteringChildren=void 0)}),m}function zk(e,s,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:l,layoutScroll:c,layoutRoot:d,layoutCrossfade:u}=s;e.projection=new n(e.latestValues,s["data-framer-portal-id"]?void 0:mx(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||l&&Br(l),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:d})}function mx(e){if(e)return e.options.allowProjection!==!1?e.projection:mx(e.parent)}function Ua(e,{forwardMotionProps:s=!1,type:n}={},r,i){r&&Sk(r);const a=n?n==="svg":ic(e),o=a?Bk:Fk;function l(d,u){let m;const h={...p.useContext(gn),...d,layoutId:Hk(d)},{isStatic:f}=h,g=Rk(d),x=o(d,f);if(!f&&Ih){Wk();const y=Gk(h);m=y.MeasureLayout,g.visualElement=$k(e,x,h,i,y.ProjectionNode,a)}return t.jsxs(Qi.Provider,{value:g,children:[m&&g.visualElement?t.jsx(m,{visualElement:g.visualElement,...h}):null,_k(e,d,Uk(x,g.visualElement,u),x,f,s,a)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=p.forwardRef(l);return c[Vk]=e,c}function Hk({layoutId:e}){const s=p.useContext(Tl).id;return s&&e!==void 0?s+"-"+e:e}function Wk(e,s){p.useContext(ix).strict}function Gk(e){const s=ax(),{drag:n,layout:r}=s;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function qk(e,s){if(typeof Proxy>"u")return Ua;const n=new Map,r=(a,o)=>Ua(a,o,e,s),i=(a,o)=>r(a,o);return new Proxy(i,{get:(a,o)=>o==="create"?r:(n.has(o)||n.set(o,Ua(o,void 0,e,s)),n.get(o))})}const Kk=(e,s)=>s.isSVG??ic(e)?new TT(s):new bT(s,{allowProjection:e!==p.Fragment});class Yk extends Cs{constructor(s){super(s),s.animationState||(s.animationState=AT(s))}updateAnimationControlsSubscription(){const{animate:s}=this.node.getProps();Xi(s)&&(this.unmountControls=s.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:s}=this.node.getProps(),{animate:n}=this.node.prevProps||{};s!==n&&this.updateAnimationControlsSubscription()}unmount(){var s;this.node.animationState.reset(),(s=this.unmountControls)==null||s.call(this)}}let Xk=0;class Jk extends Cs{constructor(){super(...arguments),this.id=Xk++}update(){if(!this.node.presenceContext)return;const{isPresent:s,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||s===r)return;const i=this.node.animationState.setActive("exit",!s);n&&!s&&i.then(()=>{n(this.id)})}mount(){const{register:s,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),s&&(this.unmount=s(this.id))}unmount(){}}const Qk={animation:{Feature:Yk},exit:{Feature:Jk}};function yn(e){return{point:{x:e.pageX,y:e.pageY}}}const Zk=e=>s=>Jl(s)&&e(s,yn(s));function Gr(e,s,n,r){return rn(e,s,Zk(n),r)}const px=({current:e})=>e?e.ownerDocument.defaultView:null,Fu=(e,s)=>Math.abs(e-s);function eE(e,s){const n=Fu(e.x,s.x),r=Fu(e.y,s.y);return Math.sqrt(n**2+r**2)}const Bu=new Set(["auto","scroll"]);class hx{constructor(s,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:a=!1,distanceThreshold:o=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=f=>{this.handleScroll(f.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=za(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,x=eE(f.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!x)return;const{point:y}=f,{timestamp:v}=Xe;this.history.push({...y,timestamp:v});const{onStart:b,onMove:N}=this.handlers;g||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),N&&N(this.lastMoveEvent,f)},this.handlePointerMove=(f,g)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=$a(g,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(f,g)=>{this.end();const{onEnd:x,onSessionEnd:y,resumeAnimation:v}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=za(f.type==="pointercancel"?this.lastMoveEventInfo:$a(g,this.transformPagePoint),this.history);this.startEvent&&x&&x(f,b),y&&y(f,b)},!Jl(s))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=o,this.contextWindow=i||window;const c=yn(s),d=$a(c,this.transformPagePoint),{point:u}=d,{timestamp:m}=Xe;this.history=[{...u,timestamp:m}];const{onSessionStart:h}=n;h&&h(s,za(d,this.history)),this.removeListeners=hn(Gr(this.contextWindow,"pointermove",this.handlePointerMove),Gr(this.contextWindow,"pointerup",this.handlePointerUp),Gr(this.contextWindow,"pointercancel",this.handlePointerUp)),l&&this.startScrollTracking(l)}startScrollTracking(s){let n=s.parentElement;for(;n;){const r=getComputedStyle(n);(Bu.has(r.overflowX)||Bu.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(s){const n=this.scrollPositions.get(s);if(!n)return;const r=s===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:s.scrollLeft,y:s.scrollTop},a={x:i.x-n.x,y:i.y-n.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(s,i),Se.update(this.updatePoint,!0))}updateHandlers(s){this.handlers=s}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),It(this.updatePoint)}}function $a(e,s){return s?{point:s(e.point)}:e}function Vu(e,s){return{x:e.x-s.x,y:e.y-s.y}}function za({point:e},s){return{point:e,delta:Vu(e,fx(s)),offset:Vu(e,tE(s)),velocity:sE(s,.1)}}function tE(e){return e[0]}function fx(e){return e[e.length-1]}function sE(e,s){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=fx(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Qt(s)));)n--;if(!r)return{x:0,y:0};const a=vt(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function rE(e,{min:s,max:n},r){return s!==void 0&&e<s?e=r?_e(s,e,r.min):Math.max(e,s):n!==void 0&&e>n&&(e=r?_e(n,e,r.max):Math.min(e,n)),e}function Uu(e,s,n){return{min:s!==void 0?e.min+s:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function nE(e,{top:s,left:n,bottom:r,right:i}){return{x:Uu(e.x,n,i),y:Uu(e.y,s,r)}}function $u(e,s){let n=s.min-e.min,r=s.max-e.max;return s.max-s.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function iE(e,s){return{x:$u(e.x,s.x),y:$u(e.y,s.y)}}function aE(e,s){let n=.5;const r=at(e),i=at(s);return i>r?n=mr(s.min,s.max-r,e.min):r>i&&(n=mr(e.min,e.max-i,s.min)),Dt(0,1,n)}function oE(e,s){const n={};return s.min!==void 0&&(n.min=s.min-e.min),s.max!==void 0&&(n.max=s.max-e.min),n}const zo=.35;function lE(e=zo){return e===!1?e=0:e===!0&&(e=zo),{x:zu(e,"left","right"),y:zu(e,"top","bottom")}}function zu(e,s,n){return{min:Hu(e,s),max:Hu(e,n)}}function Hu(e,s){return typeof e=="number"?e:e[s]||0}const cE=new WeakMap;class dE{constructor(s){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ye(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=s}start(s,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const a=m=>{n?(this.stopAnimation(),this.snapToCursor(yn(m).point)):this.pauseAnimation()},o=(m,h)=>{this.stopAnimation();const{drag:f,dragPropagation:g,onDragStart:x}=this.getProps();if(f&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=VC(f),!this.openDragLock))return;this.latestPointerEvent=m,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),yt(v=>{let b=this.getAxisMotionValue(v).get()||0;if(Vt.test(b)){const{projection:N}=this.visualElement;if(N&&N.layout){const S=N.layout.layoutBox[v];S&&(b=at(S)*(parseFloat(b)/100))}}this.originPoint[v]=b}),x&&Se.postRender(()=>x(m,h)),Oo(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},l=(m,h)=>{this.latestPointerEvent=m,this.latestPanInfo=h;const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:x,onDrag:y}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:v}=h;if(g&&this.currentDirection===null){this.currentDirection=uE(v),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",h.point,v),this.updateAxis("y",h.point,v),this.visualElement.render(),y&&y(m,h)},c=(m,h)=>{this.latestPointerEvent=m,this.latestPanInfo=h,this.stop(m,h),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>yt(m=>{var h;return this.getAnimationState(m)==="paused"&&((h=this.getAxisMotionValue(m).animation)==null?void 0:h.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new hx(s,{onSessionStart:a,onStart:o,onMove:l,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:r,contextWindow:px(this.visualElement),element:this.visualElement.current})}stop(s,n){const r=s||this.latestPointerEvent,i=n||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!i||!r)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&Se.postRender(()=>l(r,i))}cancel(){this.isDragging=!1;const{projection:s,animationState:n}=this.visualElement;s&&(s.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(s,n,r){const{drag:i}=this.getProps();if(!r||!Ln(s,i,this.currentDirection))return;const a=this.getAxisMotionValue(s);let o=this.originPoint[s]+r[s];this.constraints&&this.constraints[s]&&(o=rE(o,this.constraints[s],this.elastic[s])),a.set(o)}resolveConstraints(){var a;const{dragConstraints:s,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,i=this.constraints;s&&Br(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&r?this.constraints=nE(r.layoutBox,s):this.constraints=!1,this.elastic=lE(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&yt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=oE(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:s,onMeasureDragConstraints:n}=this.getProps();if(!s||!Br(s))return!1;const r=s.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=hT(r,i.root,this.visualElement.getTransformPagePoint());let o=iE(i.layout.layoutBox,a);if(n){const l=n(uT(o));this.hasMutatedConstraints=!!l,l&&(o=Of(l))}return o}startAnimation(s){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},d=yt(u=>{if(!Ln(u,n,this.currentDirection))return;let m=c&&c[u]||{};o&&(m={min:0,max:0});const h=i?200:1e6,f=i?40:1e7,g={type:"inertia",velocity:r?s[u]:0,bounceStiffness:h,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...a,...m};return this.startAxisValueAnimation(u,g)});return Promise.all(d).then(l)}startAxisValueAnimation(s,n){const r=this.getAxisMotionValue(s);return Oo(this.visualElement,s),r.start(Hl(s,r,0,n,this.visualElement,!1))}stopAnimation(){yt(s=>this.getAxisMotionValue(s).stop())}pauseAnimation(){yt(s=>{var n;return(n=this.getAxisMotionValue(s).animation)==null?void 0:n.pause()})}getAnimationState(s){var n;return(n=this.getAxisMotionValue(s).animation)==null?void 0:n.state}getAxisMotionValue(s){const n=`_drag${s.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(s,(r.initial?r.initial[s]:void 0)||0)}snapToCursor(s){yt(n=>{const{drag:r}=this.getProps();if(!Ln(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:l}=i.layout.layoutBox[n],c=a.get()||0;a.set(s[n]-_e(o,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:s,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Br(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};yt(o=>{const l=this.getAxisMotionValue(o);if(l&&this.constraints!==!1){const c=l.get();i[o]=aE({min:c,max:c},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),yt(o=>{if(!Ln(o,s,null))return;const l=this.getAxisMotionValue(o),{min:c,max:d}=this.constraints[o];l.set(_e(c,d,i[o]))})}addListeners(){if(!this.visualElement.current)return;cE.set(this.visualElement,this);const s=this.visualElement.current,n=Gr(s,"pointerdown",c=>{const{drag:d,dragListener:u=!0}=this.getProps();d&&u&&!Rf(c.target)&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Br(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Se.read(r);const o=rn(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",(({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(yt(u=>{const m=this.getAxisMotionValue(u);m&&(this.originPoint[u]+=c[u].translate,m.set(m.get()+c[u].translate))}),this.visualElement.render())}));return()=>{o(),n(),a(),l&&l()}}getProps(){const s=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:o=zo,dragMomentum:l=!0}=s;return{...s,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:o,dragMomentum:l}}}function Ln(e,s,n){return(s===!0||s===e)&&(n===null||n===e)}function uE(e,s=10){let n=null;return Math.abs(e.y)>s?n="y":Math.abs(e.x)>s&&(n="x"),n}class mE extends Cs{constructor(s){super(s),this.removeGroupControls=dt,this.removeListeners=dt,this.controls=new dE(s)}mount(){const{dragControls:s}=this.node.getProps();s&&(this.removeGroupControls=s.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||dt}update(){const{dragControls:s}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};s!==n&&(this.removeGroupControls(),s&&(this.removeGroupControls=s.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const Wu=e=>(s,n)=>{e&&Se.postRender(()=>e(s,n))};class pE extends Cs{constructor(){super(...arguments),this.removePointerDownListener=dt}onPointerDown(s){this.session=new hx(s,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:px(this.node)})}createPanHandlers(){const{onPanSessionStart:s,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Wu(s),onStart:Wu(n),onMove:r,onEnd:(a,o)=>{delete this.session,i&&Se.postRender(()=>i(a,o))}}}mount(){this.removePointerDownListener=Gr(this.node.current,"pointerdown",s=>this.onPointerDown(s))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ha=!1;class hE extends p.Component{componentDidMount(){const{visualElement:s,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=s;a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),Ha&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),ti.hasEverUpdated=!0}getSnapshotBeforeUpdate(s){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,{projection:o}=r;return o&&(o.isPresent=a,Ha=!0,i||s.layoutDependency!==n||n===void 0||s.isPresent!==a?o.willUpdate():this.safeToRemove(),s.isPresent!==a&&(a?o.promote():o.relegate()||Se.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:s}=this.props.visualElement;s&&(s.root.didUpdate(),Xl.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:s,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=s;Ha=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:s}=this.props;s&&s()}render(){return null}}function xx(e){const[s,n]=nx(),r=p.useContext(Tl);return t.jsx(hE,{...e,layoutGroup:r,switchLayoutGroup:p.useContext(ux),isPresent:s,safeToRemove:n})}const fE={pan:{Feature:pE},drag:{Feature:mE,ProjectionNode:rx,MeasureLayout:xx}};function Gu(e,s,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,a=r[i];a&&Se.postRender(()=>a(s,yn(s)))}class xE extends Cs{mount(){const{current:s}=this.node;s&&(this.unmount=UC(s,(n,r)=>(Gu(this.node,r,"Start"),i=>Gu(this.node,i,"End"))))}unmount(){}}class gE extends Cs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let s=!1;try{s=this.node.current.matches(":focus-visible")}catch{s=!0}!s||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=hn(rn(this.node.current,"focus",()=>this.onFocus()),rn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function qu(e,s,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),a=r[i];a&&Se.postRender(()=>a(s,yn(s)))}class yE extends Cs{mount(){const{current:s}=this.node;s&&(this.unmount=HC(s,(n,r)=>(qu(this.node,r,"Start"),(i,{success:a})=>qu(this.node,i,a?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ho=new WeakMap,Wa=new WeakMap,vE=e=>{const s=Ho.get(e.target);s&&s(e)},bE=e=>{e.forEach(vE)};function jE({root:e,...s}){const n=e||document;Wa.has(n)||Wa.set(n,{});const r=Wa.get(n),i=JSON.stringify(s);return r[i]||(r[i]=new IntersectionObserver(bE,{root:e,...s})),r[i]}function NE(e,s,n){const r=jE(s);return Ho.set(e,n),r.observe(e),()=>{Ho.delete(e),r.unobserve(e)}}const wE={some:0,all:1};class SE extends Cs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:s={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=s,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:wE[i]},l=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,a&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:m}=this.node.getProps(),h=d?u:m;h&&h(c)};return NE(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:s,prevProps:n}=this.node;["amount","margin","root"].some(CE(s,n))&&this.startObserver()}unmount(){}}function CE({viewport:e={}},{viewport:s={}}={}){return n=>e[n]!==s[n]}const TE={inView:{Feature:SE},tap:{Feature:yE},focus:{Feature:gE},hover:{Feature:xE}},kE={layout:{ProjectionNode:rx,MeasureLayout:xx}},EE={...Qk,...TE,...fE,...kE},Ve=qk(EE,Kk),RE=50,Ku=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),PE=()=>({time:0,x:Ku(),y:Ku()}),AE={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Yu(e,s,n,r){const i=n[s],{length:a,position:o}=AE[s],l=i.current,c=n.time;i.current=e[`scroll${o}`],i.scrollLength=e[`scroll${a}`]-e[`client${a}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=mr(0,i.scrollLength,i.current);const d=r-c;i.velocity=d>RE?0:Al(i.current-l,d)}function DE(e,s,n){Yu(e,"x",s,n),Yu(e,"y",s,n),s.time=n}function IE(e,s){const n={x:0,y:0};let r=e;for(;r&&r!==s;)if(Yl(r))n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const a=r.getBoundingClientRect();n.x+=i.left-a.left,n.y+=i.top-a.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:a}=r.getBBox();n.x+=i,n.y+=a;let o=null,l=r.parentNode;for(;!o;)l.tagName==="svg"&&(o=l),l=r.parentNode;r=o}else break;return n}const Wo={start:0,center:.5,end:1};function Xu(e,s,n=0){let r=0;if(e in Wo&&(e=Wo[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=s*e),n+r}const ME=[0,0];function _E(e,s,n,r){let i=Array.isArray(e)?e:ME,a=0,o=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Wo[e]?e:"0"]),a=Xu(i[0],n,r),o=Xu(i[1],s),a-o}const OE={All:[[0,0],[1,1]]},LE={x:0,y:0};function FE(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function BE(e,s,n){const{offset:r=OE.All}=n,{target:i=e,axis:a="y"}=n,o=a==="y"?"height":"width",l=i!==e?IE(i,e):LE,c=i===e?{width:e.scrollWidth,height:e.scrollHeight}:FE(i),d={width:e.clientWidth,height:e.clientHeight};s[a].offset.length=0;let u=!s[a].interpolate;const m=r.length;for(let h=0;h<m;h++){const f=_E(r[h],d[o],c[o],l[a]);!u&&f!==s[a].interpolatorOffsets[h]&&(u=!0),s[a].offset[h]=f}u&&(s[a].interpolate=Bl(s[a].offset,af(r),{clamp:!1}),s[a].interpolatorOffsets=[...s[a].offset]),s[a].progress=Dt(0,1,s[a].interpolate(s[a].current))}function VE(e,s=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,s!==e){let r=s;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=s===e?s.scrollWidth:s.clientWidth,n.y.targetLength=s===e?s.scrollHeight:s.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function UE(e,s,n,r={}){return{measure:i=>{VE(e,r.target,n),DE(e,n,i),(r.offset||r.target)&&BE(e,n,r)},notify:()=>s(n)}}const _r=new WeakMap,Ju=new WeakMap,Ga=new WeakMap,Qu=e=>e===document.scrollingElement?window:e;function gx(e,{container:s=document.scrollingElement,...n}={}){if(!s)return dt;let r=Ga.get(s);r||(r=new Set,Ga.set(s,r));const i=PE(),a=UE(s,e,i,n);if(r.add(a),!_r.has(s)){const l=()=>{for(const m of r)m.measure(Xe.timestamp);Se.preUpdate(c)},c=()=>{for(const m of r)m.notify()},d=()=>Se.read(l);_r.set(s,d);const u=Qu(s);window.addEventListener("resize",d,{passive:!0}),s!==document.documentElement&&Ju.set(s,ZC(s,d)),u.addEventListener("scroll",d,{passive:!0}),d()}const o=_r.get(s);return Se.read(o,!1,!0),()=>{var d;It(o);const l=Ga.get(s);if(!l||(l.delete(a),l.size))return;const c=_r.get(s);_r.delete(s),c&&(Qu(s).removeEventListener("scroll",c),(d=Ju.get(s))==null||d(),window.removeEventListener("resize",c))}}const Zu=new Map;function $E(e){const s={value:0},n=gx(r=>{s.value=r[e.axis].progress*100},e);return{currentTime:s,cancel:n}}function yx({source:e,container:s,...n}){const{axis:r}=n;e&&(s=e);const i=Zu.get(s)??new Map;Zu.set(s,i);const a=n.target??"self",o=i.get(a)??{},l=r+(n.offset??[]).join(",");return o[l]||(o[l]=!n.target&&df()?new ScrollTimeline({source:s,axis:r}):$E({container:s,...n})),o[l]}function zE(e,s){const n=yx(s);return e.attachTimeline({timeline:s.target?void 0:n,observe:r=>(r.pause(),Af(i=>{r.time=r.iterationDuration*i},n))})}function HE(e){return e.length===2}function WE(e,s){return HE(e)?gx(n=>{e(n[s.axis].progress,n)},s):Af(e,yx(s))}function GE(e,{axis:s="y",container:n=document.scrollingElement,...r}={}){if(!n)return dt;const i={axis:s,container:n,...r};return typeof e=="function"?WE(e,i):zE(e,i)}const qE=()=>({scrollX:Et(0),scrollY:Et(0),scrollXProgress:Et(0),scrollYProgress:Et(0)}),Fn=e=>e?!e.current:!1;function KE({container:e,target:s,...n}={}){const r=br(qE),i=p.useRef(null),a=p.useRef(!1),o=p.useCallback(()=>(i.current=GE((l,{x:c,y:d})=>{r.scrollX.set(c.current),r.scrollXProgress.set(c.progress),r.scrollY.set(d.current),r.scrollYProgress.set(d.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(s==null?void 0:s.current)||void 0}),()=>{var l;(l=i.current)==null||l.call(i)}),[e,s,JSON.stringify(n.offset)]);return qi(()=>{if(a.current=!1,Fn(e)||Fn(s)){a.current=!0;return}else return o()},[o]),p.useEffect(()=>{if(a.current)return Zr(!Fn(e)),Zr(!Fn(s)),o()},[o]),r}function vx(e){const s=br(()=>Et(e)),{isStatic:n}=p.useContext(gn);if(n){const[,r]=p.useState(e);p.useEffect(()=>s.on("change",r),[])}return s}function bx(e,s){const n=vx(s()),r=()=>n.set(s());return r(),qi(()=>{const i=()=>Se.preRender(r,!1,!0),a=e.map(o=>o.on("change",i));return()=>{a.forEach(o=>o()),It(r)}}),n}function YE(e){Hr.current=[],e();const s=bx(Hr.current,e);return Hr.current=void 0,s}function XE(e,s,n,r){if(typeof e=="function")return YE(e);const a=tT(s,n,r);return Array.isArray(e)?em(e,a):em([e],([o])=>a(o))}function em(e,s){const n=br(()=>[]);return bx(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return s(n)})}function JE(e,s={}){const{isStatic:n}=p.useContext(gn),r=()=>Ze(e)?e.get():e;if(n)return XE(r);const i=vx(r());return p.useInsertionEffect(()=>sT(i,e,s),[i,JSON.stringify(s)]),i}const QE={some:0,all:1};function ZE(e,s,{root:n,margin:r,amount:i="some"}={}){const a=Kl(e),o=new WeakMap,l=d=>{d.forEach(u=>{const m=o.get(u.target);if(u.isIntersecting!==!!m)if(u.isIntersecting){const h=s(u.target,u);typeof h=="function"?o.set(u.target,h):c.unobserve(u.target)}else typeof m=="function"&&(m(u),o.delete(u.target))})},c=new IntersectionObserver(l,{root:n,rootMargin:r,threshold:typeof i=="number"?i:QE[i]});return a.forEach(d=>c.observe(d)),()=>c.disconnect()}function eR(e,{root:s,margin:n,amount:r,once:i=!1,initial:a=!1}={}){const[o,l]=p.useState(a);return p.useEffect(()=>{if(!e.current||i&&o)return;const c=()=>(l(!0),i?void 0:()=>l(!1)),d={root:s&&s.current||void 0,margin:n,amount:r};return ZE(e.current,c,d)},[s,e,n,i,r]),o}const tR=[{title:"General",items:[{title:"Home",href:"/",icon:Ep},{title:"GitHub Workflow",href:"/github-axa-usage",icon:ws},{title:"Global Standards",href:"/coding-standard",icon:$t}]},{title:"Architecture",items:[{title:"Clean Code",href:"/clean-code-guideline",icon:un},{title:"Clean Architecture",href:"/clean-architecture",icon:Oe}]},{title:"Backend",items:[{title:".NET Development",href:"/dotnet-developer-guideline",icon:Mt},{title:"Java Development",href:"/java-developer-guideline",icon:_i},{title:"Python Development",href:"/python-developer-guideline",icon:Vs}]},{title:"Frontend & Mobile",items:[{title:"React Development",href:"/react-developer-guideline",icon:Yr},{title:"Flutter Development",href:"/flutter-developer-guideline",icon:Bi}]},{title:"DevOps",items:[{title:"OpenShift Platform",href:"/openshift-guideline",icon:Ss},{title:"Jenkins CI/CD",href:"/jenkins-guideline",icon:hl},{title:"SonarQube",href:"/sonarqube-guideline",icon:Fi}]},{title:"Cloud & FinOps",items:[{title:"FinOps Guide",href:"/finops-guideline",icon:zs},{title:"AWS Architecture",href:"/aws-architecture-guideline",icon:fr}]}],sR=({title:e})=>t.jsx("h3",{className:"px-3 pt-6 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/50",children:e}),rR=({href:e,icon:s,isActive:n,children:r})=>t.jsxs(qe,{to:e,className:ae("group relative flex items-center gap-3 px-3 py-2 text-sm transition-all duration-150","hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",n?"bg-primary/5 text-primary font-medium":"text-muted-foreground hover:text-foreground"),"aria-current":n?"page":void 0,children:[t.jsx(Ve.span,{className:ae("absolute left-0 top-0 bottom-0 w-0.5 rounded-r-full",n?"bg-primary":"bg-transparent group-hover:bg-muted-foreground/20"),initial:!1,animate:{opacity:n?1:0,scaleY:n?1:.5},transition:{duration:.15}}),t.jsx(s,{className:ae("h-4 w-4 shrink-0 transition-colors",n?"text-primary":"text-muted-foreground/60 group-hover:text-muted-foreground")}),t.jsx("span",{className:"truncate",children:r})]}),nR=({onClick:e})=>t.jsxs("button",{onClick:e,className:ae("flex w-full items-center gap-3 px-3 py-2.5 text-sm","text-muted-foreground hover:text-foreground","bg-muted/30 hover:bg-muted/50 rounded-lg","border border-border/50","transition-all duration-150","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"),children:[t.jsx(Os,{className:"h-4 w-4 shrink-0"}),t.jsx("span",{className:"flex-1 text-left",children:"Search docs..."}),t.jsxs("kbd",{className:"hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground/70 bg-background rounded border border-border/50",children:[t.jsx(wp,{className:"h-2.5 w-2.5"}),t.jsx("span",{children:"K"})]})]});function iR({className:e,onSearchClick:s}){const n=Ht();return t.jsxs("nav",{className:ae("flex flex-col h-full bg-background/95 backdrop-blur-sm","border-r border-border/50",e),"aria-label":"Documentation navigation",children:[t.jsx("div",{className:"p-4 border-b border-border/50",children:t.jsx(nR,{onClick:s})}),t.jsx("div",{className:"flex-1 overflow-y-auto py-2",children:tR.map((r,i)=>t.jsxs("div",{children:[t.jsx(sR,{title:r.title}),t.jsx("ul",{role:"list",className:"space-y-0.5",children:r.items.map(a=>{const o=n.pathname===a.href;return t.jsx("li",{children:t.jsx(rR,{href:a.href,icon:a.icon,isActive:o,children:a.title})},a.href)})})]},r.title))}),t.jsx("div",{className:"p-4 border-t border-border/50",children:t.jsx("p",{className:"text-[10px] text-muted-foreground/50 text-center",children:"AII IT Playbook v1.0"})})]})}function aR(){const[e,s]=p.useState(!1),[n,r]=p.useState(!1);return p.useEffect(()=>{if(r(!0),typeof window<"u"){const i=localStorage.getItem("theme");s(i==="dark")}},[]),p.useEffect(()=>{if(!n||typeof window>"u")return;const i=document.documentElement;i.classList.remove("light","dark"),e?(i.classList.add("dark"),localStorage.setItem("theme","dark")):(i.classList.add("light"),localStorage.setItem("theme","light"))},[e,n]),n?t.jsxs(R2,{children:[t.jsx(P2,{asChild:!0,children:t.jsxs(Re,{variant:"ghost",size:"icon",onClick:()=>s(!e),children:[t.jsx(hd,{className:`h-[1.2rem] w-[1.2rem] transition-all ${e?"-rotate-90 scale-0":"rotate-0 scale-100"}`}),t.jsx(oN,{className:`absolute h-[1.2rem] w-[1.2rem] transition-all ${e?"rotate-0 scale-100":"rotate-90 scale-0"}`}),t.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}),t.jsx(Ph,{children:t.jsx("p",{children:"Toggle theme"})})]}):t.jsx(Re,{variant:"ghost",size:"icon",disabled:!0,children:t.jsx(hd,{className:"h-[1.2rem] w-[1.2rem]"})})}const oR=Mi("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function k({className:e,variant:s,...n}){return t.jsx("div",{className:ae(oR({variant:s}),e),...n})}const Ys=new Map,lR=20,jx=()=>{const[e,s]=p.useState(null),[n,r]=p.useState(!1);p.useEffect(()=>{(async()=>{try{if(window.__pagefind__){s(window.__pagefind__);return}const c=`${"/aii/developer-guideline/".endsWith("/")?"/aii/developer-guideline/":"/aii/developer-guideline//"}pagefind/pagefind.js`;try{const d=await import(c);await d.init(),window.__pagefind__=d,s(d)}catch(d){console.warn("Pagefind not found. Search will not work in dev mode until you run a build.",d)}}catch(l){console.error("Failed to initialize Pagefind",l)}})()},[]);const i=p.useCallback(o=>{let l=o;const c="/aii/developer-guideline/";return l.startsWith(c)&&(l=l.substring(c.length)),l.startsWith("/")||(l="/"+l),l=l.replace(/\/index\.html$/,"/"),l=l.replace(/\.html$/,""),l.length>1&&l.endsWith("/")&&(l=l.substring(0,l.length-1)),l},[]);return{search:p.useCallback(async o=>{if(!e||!o)return[];const l=o.trim().toLowerCase();if(Ys.has(l))return Ys.get(l);r(!0);try{const c=await e.search(l),d=await Promise.all(c.results.slice(0,10).map(async u=>{const m=await u.data(),h=i(m.url);return{...m,url:h}}));if(Ys.size>=lR){const u=Ys.keys().next().value;u!==void 0&&Ys.delete(u)}return Ys.set(l,d),r(!1),d}catch(c){return console.error("Search failed",c),r(!1),[]}},[e,i]),loading:n,isReady:!!e}},Nx=({isOpen:e,onOpenChange:s})=>{const[n,r]=p.useState(""),[i,a]=p.useState([]),[o,l]=p.useState(0),{search:c,loading:d,isReady:u}=jx(),m=sl();p.useEffect(()=>{const g=setTimeout(async()=>{if(n.trim().length>1){const x=await c(n);a(x),l(0)}else a([]),l(0)},150);return()=>clearTimeout(g)},[n,c]);const h=f=>{s(!1),m(f),r(""),a([]),l(0)};return p.useEffect(()=>{const f=g=>{if(!e)return;const x=i.length;if(g.key==="ArrowDown")g.preventDefault(),l(y=>(y+1)%(x||1));else if(g.key==="ArrowUp")g.preventDefault(),l(y=>(y-1+(x||1))%(x||1));else if(g.key==="Enter")if(g.preventDefault(),x>0&&o>=0&&o<x){const y=i[o];y&&h(y.url)}else n.trim()&&h(`/search?q=${encodeURIComponent(n)}`);else g.key==="Escape"&&s(!1)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[e,i,o,n]),t.jsx(rc,{children:e&&t.jsxs("div",{className:"fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 pointer-events-none",children:[t.jsx(Ve.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-background/80 backdrop-blur-sm pointer-events-auto",onClick:()=>s(!1)}),t.jsxs(Ve.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},className:"relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-2xl overflow-hidden pointer-events-auto",children:[t.jsxs("div",{className:"flex items-center px-4 py-4 border-b border-border/50",children:[t.jsx(Os,{className:"h-5 w-5 text-muted-foreground mr-3"}),t.jsx("input",{autoFocus:!0,placeholder:u?"Type a command or search documentation...":"Initializing search engine...",className:"flex-1 bg-transparent border-none outline-none focus:ring-0 text-lg placeholder:text-muted-foreground",value:n,onChange:f=>r(f.target.value),disabled:!u}),t.jsxs("div",{className:"flex items-center gap-1.5 ml-2",children:[d&&t.jsx("div",{className:"animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full mr-2"}),t.jsx("kbd",{className:"hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground",children:"ESC"})]})]}),t.jsx("div",{className:"max-h-[60vh] overflow-y-auto p-2",children:i.length>0?t.jsxs("div",{className:"space-y-1",children:[i.map((f,g)=>{var x;return t.jsxs("button",{onClick:()=>h(f.url),onMouseEnter:()=>l(g),className:ae("w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 border border-transparent",g===o?"bg-primary/10 text-primary border-primary/20":"hover:bg-muted/50 border-transparent"),children:[t.jsx("div",{className:ae("h-9 w-9 rounded-lg flex items-center justify-center transition-colors",g===o?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground"),children:t.jsx(ll,{className:"h-4 w-4"})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("div",{className:"font-semibold text-sm",children:(x=f.meta)==null?void 0:x.title}),t.jsx("div",{className:"text-xs text-muted-foreground line-clamp-1",dangerouslySetInnerHTML:{__html:f.excerpt}})]}),g===o&&t.jsxs("div",{className:"flex items-center gap-1 text-[10px] font-medium opacity-60",children:[t.jsx(bj,{className:"h-3 w-3"}),t.jsx("span",{children:"ENTER"})]})]},f.url+g)}),t.jsxs("button",{onClick:()=>h(`/search?q=${encodeURIComponent(n)}`),className:"w-full flex items-center justify-center gap-2 p-3 mt-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/5 transition-colors border border-dashed border-primary/20",children:[t.jsx(Os,{className:"h-4 w-4"}),'See all results for "',n,'"']})]}):n.length>1&&!d?t.jsxs("div",{className:"py-12 text-center",children:[t.jsx(Os,{className:"h-10 w-10 text-muted-foreground mx-auto mb-4 opacity-20"}),t.jsxs("p",{className:"text-sm text-muted-foreground mb-4",children:['No matches found for "',n,'"']}),t.jsx("button",{onClick:()=>h(`/search?q=${encodeURIComponent(n)}`),className:"text-primary hover:underline text-sm font-medium",children:"Try the full search page instead →"})]}):!d&&t.jsxs("div",{className:"p-4 space-y-4",children:[t.jsx("p",{className:"text-xs font-bold text-muted-foreground uppercase tracking-widest pl-2",children:"Suggestions"}),t.jsx("div",{className:"grid grid-cols-2 gap-2",children:["Clean Architecture","SOLID","API Standards","GitFlow"].map(f=>t.jsxs("button",{onClick:()=>r(f),className:"flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 text-xs transition-colors text-left",children:[f,t.jsx(hr,{className:"h-3 w-3 opacity-50"})]},f))})]})}),t.jsxs("div",{className:"bg-muted/30 px-4 py-3 border-t border-border/50 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4 text-[10px] text-muted-foreground",children:[t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx("kbd",{className:"rounded border bg-background px-1 px-1",children:"↓"}),t.jsx("kbd",{className:"rounded border bg-background px-1",children:"↑"}),"to navigate"]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx("kbd",{className:"rounded border bg-background px-1",children:"↵"}),"to select"]})]}),t.jsxs(k,{variant:"outline",className:"text-[10px] font-mono opacity-60",children:[t.jsx(wp,{className:"h-2 w-2 mr-1"})," K"]})]})]})]})})},cR=[{title:"Getting Started",items:[{title:"GitHub Workflow",href:"/github-axa-usage",icon:ws,description:"PR standards & branching"},{title:"Coding Standards",href:"/coding-standard",icon:$t,description:"Global conventions"}]},{title:"Architecture",items:[{title:"Clean Code",href:"/clean-code-guideline",icon:un,description:"SOLID & craftsmanship"},{title:"Clean Architecture",href:"/clean-architecture",icon:Oe,description:"DDD patterns"}]},{title:"Backend",items:[{title:".NET Development",href:"/dotnet-developer-guideline",icon:Mt,description:"C# & ASP.NET Core"},{title:"Java Development",href:"/java-developer-guideline",icon:_i,description:"Spring Boot"},{title:"Python Development",href:"/python-developer-guideline",icon:Vs,description:"FastAPI & AI"}]},{title:"Frontend & Mobile",items:[{title:"React Development",href:"/react-developer-guideline",icon:Yr,description:"Modern React"},{title:"Flutter Development",href:"/flutter-developer-guideline",icon:Bi,description:"Cross-platform"}]},{title:"DevOps & CI/CD",items:[{title:"OpenShift Platform",href:"/openshift-guideline",icon:Ss,description:"Container platform"},{title:"Jenkins CI/CD",href:"/jenkins-guideline",icon:hl,description:"Build & deploy"},{title:"SonarQube",href:"/sonarqube-guideline",icon:Fi,description:"Code quality"}]},{title:"Cloud & FinOps",items:[{title:"FinOps Guide",href:"/finops-guideline",icon:zs,description:"Cloud cost optimization"},{title:"AWS Architecture",href:"/aws-architecture-guideline",icon:fr,description:"Well-Architected"}]}],dR=()=>{const[e,s]=p.useState(!1);return t.jsxs("div",{className:"relative",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[t.jsxs("button",{className:ae("flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors","hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",e?"text-foreground":"text-muted-foreground"),onClick:()=>s(!e),"aria-expanded":e,"aria-haspopup":"true",children:["Docs",t.jsx(Z0,{className:ae("h-4 w-4 transition-transform duration-200",e&&"rotate-180")})]}),t.jsx(rc,{children:e&&t.jsx(Ve.div,{initial:{opacity:0,y:8,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:8,scale:.96},transition:{duration:.15,ease:"easeOut"},className:"absolute left-0 top-full pt-2 z-50",children:t.jsx("div",{className:"w-[850px] glass rounded-2xl shadow-2xl border p-4 grid grid-cols-6 gap-4",children:cR.map(n=>t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2",children:n.title}),t.jsx("ul",{className:"space-y-1",children:n.items.map(r=>t.jsx("li",{children:t.jsxs(qe,{to:r.href,onClick:()=>s(!1),className:ae("flex items-start gap-3 p-2 rounded-lg transition-colors","hover:bg-primary/5 focus-visible:bg-primary/5 focus-visible:outline-none group"),children:[t.jsx("div",{className:"mt-0.5 p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors",children:t.jsx(r.icon,{className:"h-3.5 w-3.5"})}),t.jsxs("div",{className:"space-y-0.5",children:[t.jsx("div",{className:"text-sm font-medium text-foreground",children:r.title}),r.description&&t.jsx("div",{className:"text-xs text-muted-foreground",children:r.description})]})]})},r.href))})]},n.title))})})})]})};var qa="focusScope.autoFocusOnMount",Ka="focusScope.autoFocusOnUnmount",tm={bubbles:!1,cancelable:!0},uR="FocusScope",wx=p.forwardRef((e,s)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:a,...o}=e,[l,c]=p.useState(null),d=Qe(i),u=Qe(a),m=p.useRef(null),h=Ue(s,x=>c(x)),f=p.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;p.useEffect(()=>{if(r){let x=function(N){if(f.paused||!l)return;const S=N.target;l.contains(S)?m.current=S:ds(m.current,{select:!0})},y=function(N){if(f.paused||!l)return;const S=N.relatedTarget;S!==null&&(l.contains(S)||ds(m.current,{select:!0}))},v=function(N){if(document.activeElement===document.body)for(const E of N)E.removedNodes.length>0&&ds(l)};document.addEventListener("focusin",x),document.addEventListener("focusout",y);const b=new MutationObserver(v);return l&&b.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",x),document.removeEventListener("focusout",y),b.disconnect()}}},[r,l,f.paused]),p.useEffect(()=>{if(l){rm.add(f);const x=document.activeElement;if(!l.contains(x)){const v=new CustomEvent(qa,tm);l.addEventListener(qa,d),l.dispatchEvent(v),v.defaultPrevented||(mR(gR(Sx(l)),{select:!0}),document.activeElement===x&&ds(l))}return()=>{l.removeEventListener(qa,d),setTimeout(()=>{const v=new CustomEvent(Ka,tm);l.addEventListener(Ka,u),l.dispatchEvent(v),v.defaultPrevented||ds(x??document.body,{select:!0}),l.removeEventListener(Ka,u),rm.remove(f)},0)}}},[l,d,u,f]);const g=p.useCallback(x=>{if(!n&&!r||f.paused)return;const y=x.key==="Tab"&&!x.altKey&&!x.ctrlKey&&!x.metaKey,v=document.activeElement;if(y&&v){const b=x.currentTarget,[N,S]=pR(b);N&&S?!x.shiftKey&&v===S?(x.preventDefault(),n&&ds(N,{select:!0})):x.shiftKey&&v===N&&(x.preventDefault(),n&&ds(S,{select:!0})):v===b&&x.preventDefault()}},[n,r,f.paused]);return t.jsx(Ce.div,{tabIndex:-1,...o,ref:h,onKeyDown:g})});wx.displayName=uR;function mR(e,{select:s=!1}={}){const n=document.activeElement;for(const r of e)if(ds(r,{select:s}),document.activeElement!==n)return}function pR(e){const s=Sx(e),n=sm(s,e),r=sm(s.reverse(),e);return[n,r]}function Sx(e){const s=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)s.push(n.currentNode);return s}function sm(e,s){for(const n of e)if(!hR(n,{upTo:s}))return n}function hR(e,{upTo:s}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(s!==void 0&&e===s)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function fR(e){return e instanceof HTMLInputElement&&"select"in e}function ds(e,{select:s=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&fR(e)&&s&&e.select()}}var rm=xR();function xR(){let e=[];return{add(s){const n=e[0];s!==n&&(n==null||n.pause()),e=nm(e,s),e.unshift(s)},remove(s){var n;e=nm(e,s),(n=e[0])==null||n.resume()}}}function nm(e,s){const n=[...e],r=n.indexOf(s);return r!==-1&&n.splice(r,1),n}function gR(e){return e.filter(s=>s.tagName!=="A")}var Ya=0;function yR(){p.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??im()),document.body.insertAdjacentElement("beforeend",e[1]??im()),Ya++,()=>{Ya===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(s=>s.remove()),Ya--}},[])}function im(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Lt=function(){return Lt=Object.assign||function(s){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=n[a])}return s},Lt.apply(this,arguments)};function Cx(e,s){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)s.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function vR(e,s,n){if(n||arguments.length===2)for(var r=0,i=s.length,a;r<i;r++)(a||!(r in s))&&(a||(a=Array.prototype.slice.call(s,0,r)),a[r]=s[r]);return e.concat(a||Array.prototype.slice.call(s))}var si="right-scroll-bar-position",ri="width-before-scroll-bar",bR="with-scroll-bars-hidden",jR="--removed-body-scroll-bar-size";function Xa(e,s){return typeof e=="function"?e(s):e&&(e.current=s),e}function NR(e,s){var n=p.useState(function(){return{value:e,callback:s,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=s,n.facade}var wR=typeof window<"u"?p.useLayoutEffect:p.useEffect,am=new WeakMap;function SR(e,s){var n=NR(null,function(r){return e.forEach(function(i){return Xa(i,r)})});return wR(function(){var r=am.get(n);if(r){var i=new Set(r),a=new Set(e),o=n.current;i.forEach(function(l){a.has(l)||Xa(l,null)}),a.forEach(function(l){i.has(l)||Xa(l,o)})}am.set(n,e)},[e]),n}function CR(e){return e}function TR(e,s){s===void 0&&(s=CR);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var o=s(a,r);return n.push(o),function(){n=n.filter(function(l){return l!==o})}},assignSyncMedium:function(a){for(r=!0;n.length;){var o=n;n=[],o.forEach(a)}n={push:function(l){return a(l)},filter:function(){return n}}},assignMedium:function(a){r=!0;var o=[];if(n.length){var l=n;n=[],l.forEach(a),o=n}var c=function(){var u=o;o=[],u.forEach(a)},d=function(){return Promise.resolve().then(c)};d(),n={push:function(u){o.push(u),d()},filter:function(u){return o=o.filter(u),n}}}};return i}function kR(e){e===void 0&&(e={});var s=TR(null);return s.options=Lt({async:!0,ssr:!1},e),s}var Tx=function(e){var s=e.sideCar,n=Cx(e,["sideCar"]);if(!s)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=s.read();if(!r)throw new Error("Sidecar medium not found");return p.createElement(r,Lt({},n))};Tx.isSideCarExport=!0;function ER(e,s){return e.useMedium(s),Tx}var kx=kR(),Ja=function(){},Zi=p.forwardRef(function(e,s){var n=p.useRef(null),r=p.useState({onScrollCapture:Ja,onWheelCapture:Ja,onTouchMoveCapture:Ja}),i=r[0],a=r[1],o=e.forwardProps,l=e.children,c=e.className,d=e.removeScrollBar,u=e.enabled,m=e.shards,h=e.sideCar,f=e.noRelative,g=e.noIsolation,x=e.inert,y=e.allowPinchZoom,v=e.as,b=v===void 0?"div":v,N=e.gapMode,S=Cx(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=h,A=SR([n,s]),j=Lt(Lt({},S),i);return p.createElement(p.Fragment,null,u&&p.createElement(E,{sideCar:kx,removeScrollBar:d,shards:m,noRelative:f,noIsolation:g,inert:x,setCallbacks:a,allowPinchZoom:!!y,lockRef:n,gapMode:N}),o?p.cloneElement(p.Children.only(l),Lt(Lt({},j),{ref:A})):p.createElement(b,Lt({},j,{className:c,ref:A}),l))});Zi.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Zi.classNames={fullWidth:ri,zeroRight:si};var RR=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function PR(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var s=RR();return s&&e.setAttribute("nonce",s),e}function AR(e,s){e.styleSheet?e.styleSheet.cssText=s:e.appendChild(document.createTextNode(s))}function DR(e){var s=document.head||document.getElementsByTagName("head")[0];s.appendChild(e)}var IR=function(){var e=0,s=null;return{add:function(n){e==0&&(s=PR())&&(AR(s,n),DR(s)),e++},remove:function(){e--,!e&&s&&(s.parentNode&&s.parentNode.removeChild(s),s=null)}}},MR=function(){var e=IR();return function(s,n){p.useEffect(function(){return e.add(s),function(){e.remove()}},[s&&n])}},Ex=function(){var e=MR(),s=function(n){var r=n.styles,i=n.dynamic;return e(r,i),null};return s},_R={left:0,top:0,right:0,gap:0},Qa=function(e){return parseInt(e||"",10)||0},OR=function(e){var s=window.getComputedStyle(document.body),n=s[e==="padding"?"paddingLeft":"marginLeft"],r=s[e==="padding"?"paddingTop":"marginTop"],i=s[e==="padding"?"paddingRight":"marginRight"];return[Qa(n),Qa(r),Qa(i)]},LR=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return _R;var s=OR(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:s[0],top:s[1],right:s[2],gap:Math.max(0,r-n+s[2]-s[0])}},FR=Ex(),lr="data-scroll-locked",BR=function(e,s,n,r){var i=e.left,a=e.top,o=e.right,l=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(bR,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(l,"px ").concat(r,`;
  }
  body[`).concat(lr,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([s&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(o,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(si,` {
    right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(ri,` {
    margin-right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(si," .").concat(si,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(ri," .").concat(ri,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(lr,`] {
    `).concat(jR,": ").concat(l,`px;
  }
`)},om=function(){var e=parseInt(document.body.getAttribute(lr)||"0",10);return isFinite(e)?e:0},VR=function(){p.useEffect(function(){return document.body.setAttribute(lr,(om()+1).toString()),function(){var e=om()-1;e<=0?document.body.removeAttribute(lr):document.body.setAttribute(lr,e.toString())}},[])},UR=function(e){var s=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r;VR();var a=p.useMemo(function(){return LR(i)},[i]);return p.createElement(FR,{styles:BR(a,!s,i,n?"":"!important")})},Go=!1;if(typeof window<"u")try{var Bn=Object.defineProperty({},"passive",{get:function(){return Go=!0,!0}});window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Go=!1}var Xs=Go?{passive:!1}:!1,$R=function(e){return e.tagName==="TEXTAREA"},Rx=function(e,s){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[s]!=="hidden"&&!(n.overflowY===n.overflowX&&!$R(e)&&n[s]==="visible")},zR=function(e){return Rx(e,"overflowY")},HR=function(e){return Rx(e,"overflowX")},lm=function(e,s){var n=s.ownerDocument,r=s;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=Px(e,r);if(i){var a=Ax(e,r),o=a[1],l=a[2];if(o>l)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},WR=function(e){var s=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[s,n,r]},GR=function(e){var s=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[s,n,r]},Px=function(e,s){return e==="v"?zR(s):HR(s)},Ax=function(e,s){return e==="v"?WR(s):GR(s)},qR=function(e,s){return e==="h"&&s==="rtl"?-1:1},KR=function(e,s,n,r,i){var a=qR(e,window.getComputedStyle(s).direction),o=a*r,l=n.target,c=s.contains(l),d=!1,u=o>0,m=0,h=0;do{if(!l)break;var f=Ax(e,l),g=f[0],x=f[1],y=f[2],v=x-y-a*g;(g||v)&&Px(e,l)&&(m+=v,h+=g);var b=l.parentNode;l=b&&b.nodeType===Node.DOCUMENT_FRAGMENT_NODE?b.host:b}while(!c&&l!==document.body||c&&(s.contains(l)||s===l));return(u&&Math.abs(m)<1||!u&&Math.abs(h)<1)&&(d=!0),d},Vn=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},cm=function(e){return[e.deltaX,e.deltaY]},dm=function(e){return e&&"current"in e?e.current:e},YR=function(e,s){return e[0]===s[0]&&e[1]===s[1]},XR=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},JR=0,Js=[];function QR(e){var s=p.useRef([]),n=p.useRef([0,0]),r=p.useRef(),i=p.useState(JR++)[0],a=p.useState(Ex)[0],o=p.useRef(e);p.useEffect(function(){o.current=e},[e]),p.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var x=vR([e.lockRef.current],(e.shards||[]).map(dm),!0).filter(Boolean);return x.forEach(function(y){return y.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),x.forEach(function(y){return y.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var l=p.useCallback(function(x,y){if("touches"in x&&x.touches.length===2||x.type==="wheel"&&x.ctrlKey)return!o.current.allowPinchZoom;var v=Vn(x),b=n.current,N="deltaX"in x?x.deltaX:b[0]-v[0],S="deltaY"in x?x.deltaY:b[1]-v[1],E,A=x.target,j=Math.abs(N)>Math.abs(S)?"h":"v";if("touches"in x&&j==="h"&&A.type==="range")return!1;var C=window.getSelection(),M=C&&C.anchorNode,L=M?M===A||M.contains(A):!1;if(L)return!1;var $=lm(j,A);if(!$)return!0;if($?E=j:(E=j==="v"?"h":"v",$=lm(j,A)),!$)return!1;if(!r.current&&"changedTouches"in x&&(N||S)&&(r.current=E),!E)return!0;var Y=r.current||E;return KR(Y,y,x,Y==="h"?N:S)},[]),c=p.useCallback(function(x){var y=x;if(!(!Js.length||Js[Js.length-1]!==a)){var v="deltaY"in y?cm(y):Vn(y),b=s.current.filter(function(E){return E.name===y.type&&(E.target===y.target||y.target===E.shadowParent)&&YR(E.delta,v)})[0];if(b&&b.should){y.cancelable&&y.preventDefault();return}if(!b){var N=(o.current.shards||[]).map(dm).filter(Boolean).filter(function(E){return E.contains(y.target)}),S=N.length>0?l(y,N[0]):!o.current.noIsolation;S&&y.cancelable&&y.preventDefault()}}},[]),d=p.useCallback(function(x,y,v,b){var N={name:x,delta:y,target:v,should:b,shadowParent:ZR(v)};s.current.push(N),setTimeout(function(){s.current=s.current.filter(function(S){return S!==N})},1)},[]),u=p.useCallback(function(x){n.current=Vn(x),r.current=void 0},[]),m=p.useCallback(function(x){d(x.type,cm(x),x.target,l(x,e.lockRef.current))},[]),h=p.useCallback(function(x){d(x.type,Vn(x),x.target,l(x,e.lockRef.current))},[]);p.useEffect(function(){return Js.push(a),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:h}),document.addEventListener("wheel",c,Xs),document.addEventListener("touchmove",c,Xs),document.addEventListener("touchstart",u,Xs),function(){Js=Js.filter(function(x){return x!==a}),document.removeEventListener("wheel",c,Xs),document.removeEventListener("touchmove",c,Xs),document.removeEventListener("touchstart",u,Xs)}},[]);var f=e.removeScrollBar,g=e.inert;return p.createElement(p.Fragment,null,g?p.createElement(a,{styles:XR(i)}):null,f?p.createElement(UR,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function ZR(e){for(var s=null;e!==null;)e instanceof ShadowRoot&&(s=e.host,e=e.host),e=e.parentNode;return s}const eP=ER(kx,QR);var Dx=p.forwardRef(function(e,s){return p.createElement(Zi,Lt({},e,{ref:s,sideCar:eP}))});Dx.classNames=Zi.classNames;var tP=function(e){if(typeof document>"u")return null;var s=Array.isArray(e)?e[0]:e;return s.ownerDocument.body},Qs=new WeakMap,Un=new WeakMap,$n={},Za=0,Ix=function(e){return e&&(e.host||Ix(e.parentNode))},sP=function(e,s){return s.map(function(n){if(e.contains(n))return n;var r=Ix(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},rP=function(e,s,n,r){var i=sP(s,Array.isArray(e)?e:[e]);$n[n]||($n[n]=new WeakMap);var a=$n[n],o=[],l=new Set,c=new Set(i),d=function(m){!m||l.has(m)||(l.add(m),d(m.parentNode))};i.forEach(d);var u=function(m){!m||c.has(m)||Array.prototype.forEach.call(m.children,function(h){if(l.has(h))u(h);else try{var f=h.getAttribute(r),g=f!==null&&f!=="false",x=(Qs.get(h)||0)+1,y=(a.get(h)||0)+1;Qs.set(h,x),a.set(h,y),o.push(h),x===1&&g&&Un.set(h,!0),y===1&&h.setAttribute(n,"true"),g||h.setAttribute(r,"true")}catch(v){console.error("aria-hidden: cannot operate on ",h,v)}})};return u(s),l.clear(),Za++,function(){o.forEach(function(m){var h=Qs.get(m)-1,f=a.get(m)-1;Qs.set(m,h),a.set(m,f),h||(Un.has(m)||m.removeAttribute(r),Un.delete(m)),f||m.removeAttribute(n)}),Za--,Za||(Qs=new WeakMap,Qs=new WeakMap,Un=new WeakMap,$n={})}},nP=function(e,s,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=tP(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live], script"))),rP(r,i,n,"aria-hidden")):function(){return null}};function iP(e){const s=aP(e),n=p.forwardRef((r,i)=>{const{children:a,...o}=r,l=p.Children.toArray(a),c=l.find(lP);if(c){const d=c.props.children,u=l.map(m=>m===c?p.Children.count(d)>1?p.Children.only(null):p.isValidElement(d)?d.props.children:null:m);return t.jsx(s,{...o,ref:i,children:p.isValidElement(d)?p.cloneElement(d,void 0,u):null})}return t.jsx(s,{...o,ref:i,children:a})});return n.displayName=`${e}.Slot`,n}function aP(e){const s=p.forwardRef((n,r)=>{const{children:i,...a}=n;if(p.isValidElement(i)){const o=dP(i),l=cP(a,i.props);return i.type!==p.Fragment&&(l.ref=r?ln(r,o):o),p.cloneElement(i,l)}return p.Children.count(i)>1?p.Children.only(null):null});return s.displayName=`${e}.SlotClone`,s}var oP=Symbol("radix.slottable");function lP(e){return p.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===oP}function cP(e,s){const n={...s};for(const r in s){const i=e[r],a=s[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...l)=>{const c=a(...l);return i(...l),c}:i&&(n[r]=i):r==="style"?n[r]={...i,...a}:r==="className"&&(n[r]=[i,a].filter(Boolean).join(" "))}return{...e,...n}}function dP(e){var r,i;let s=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=s&&"isReactWarning"in s&&s.isReactWarning;return n?e.ref:(s=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=s&&"isReactWarning"in s&&s.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var ea="Dialog",[Mx]=Ns(ea),[uP,_t]=Mx(ea),_x=e=>{const{__scopeDialog:s,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:o=!0}=e,l=p.useRef(null),c=p.useRef(null),[d,u]=cn({prop:r,defaultProp:i??!1,onChange:a,caller:ea});return t.jsx(uP,{scope:s,triggerRef:l,contentRef:c,contentId:ir(),titleId:ir(),descriptionId:ir(),open:d,onOpenChange:u,onOpenToggle:p.useCallback(()=>u(m=>!m),[u]),modal:o,children:n})};_x.displayName=ea;var Ox="DialogTrigger",Lx=p.forwardRef((e,s)=>{const{__scopeDialog:n,...r}=e,i=_t(Ox,n),a=Ue(s,i.triggerRef);return t.jsx(Ce.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":lc(i.open),...r,ref:a,onClick:he(e.onClick,i.onOpenToggle)})});Lx.displayName=Ox;var ac="DialogPortal",[mP,Fx]=Mx(ac,{forceMount:void 0}),Bx=e=>{const{__scopeDialog:s,forceMount:n,children:r,container:i}=e,a=_t(ac,s);return t.jsx(mP,{scope:s,forceMount:n,children:p.Children.map(r,o=>t.jsx(Nt,{present:n||a.open,children:t.jsx(Ai,{asChild:!0,container:i,children:o})}))})};Bx.displayName=ac;var Ci="DialogOverlay",Vx=p.forwardRef((e,s)=>{const n=Fx(Ci,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=_t(Ci,e.__scopeDialog);return a.modal?t.jsx(Nt,{present:r||a.open,children:t.jsx(hP,{...i,ref:s})}):null});Vx.displayName=Ci;var pP=iP("DialogOverlay.RemoveScroll"),hP=p.forwardRef((e,s)=>{const{__scopeDialog:n,...r}=e,i=_t(Ci,n);return t.jsx(Dx,{as:pP,allowPinchZoom:!0,shards:[i.contentRef],children:t.jsx(Ce.div,{"data-state":lc(i.open),...r,ref:s,style:{pointerEvents:"auto",...r.style}})})}),$s="DialogContent",Ux=p.forwardRef((e,s)=>{const n=Fx($s,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=_t($s,e.__scopeDialog);return t.jsx(Nt,{present:r||a.open,children:a.modal?t.jsx(fP,{...i,ref:s}):t.jsx(xP,{...i,ref:s})})});Ux.displayName=$s;var fP=p.forwardRef((e,s)=>{const n=_t($s,e.__scopeDialog),r=p.useRef(null),i=Ue(s,n.contentRef,r);return p.useEffect(()=>{const a=r.current;if(a)return nP(a)},[]),t.jsx($x,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:he(e.onCloseAutoFocus,a=>{var o;a.preventDefault(),(o=n.triggerRef.current)==null||o.focus()}),onPointerDownOutside:he(e.onPointerDownOutside,a=>{const o=a.detail.originalEvent,l=o.button===0&&o.ctrlKey===!0;(o.button===2||l)&&a.preventDefault()}),onFocusOutside:he(e.onFocusOutside,a=>a.preventDefault())})}),xP=p.forwardRef((e,s)=>{const n=_t($s,e.__scopeDialog),r=p.useRef(!1),i=p.useRef(!1);return t.jsx($x,{...e,ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var o,l;(o=e.onCloseAutoFocus)==null||o.call(e,a),a.defaultPrevented||(r.current||(l=n.triggerRef.current)==null||l.focus(),a.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:a=>{var c,d;(c=e.onInteractOutside)==null||c.call(e,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const o=a.target;((d=n.triggerRef.current)==null?void 0:d.contains(o))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&i.current&&a.preventDefault()}})}),$x=p.forwardRef((e,s)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,...o}=e,l=_t($s,n),c=p.useRef(null),d=Ue(s,c);return yR(),t.jsxs(t.Fragment,{children:[t.jsx(wx,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:t.jsx(Pi,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":lc(l.open),...o,ref:d,onDismiss:()=>l.onOpenChange(!1)})}),t.jsxs(t.Fragment,{children:[t.jsx(gP,{titleId:l.titleId}),t.jsx(vP,{contentRef:c,descriptionId:l.descriptionId})]})]})}),oc="DialogTitle",zx=p.forwardRef((e,s)=>{const{__scopeDialog:n,...r}=e,i=_t(oc,n);return t.jsx(Ce.h2,{id:i.titleId,...r,ref:s})});zx.displayName=oc;var Hx="DialogDescription",Wx=p.forwardRef((e,s)=>{const{__scopeDialog:n,...r}=e,i=_t(Hx,n);return t.jsx(Ce.p,{id:i.descriptionId,...r,ref:s})});Wx.displayName=Hx;var Gx="DialogClose",qx=p.forwardRef((e,s)=>{const{__scopeDialog:n,...r}=e,i=_t(Gx,n);return t.jsx(Ce.button,{type:"button",...r,ref:s,onClick:he(e.onClick,()=>i.onOpenChange(!1))})});qx.displayName=Gx;function lc(e){return e?"open":"closed"}var Kx="DialogTitleWarning",[UA,Yx]=Ib(Kx,{contentName:$s,titleName:oc,docsSlug:"dialog"}),gP=({titleId:e})=>{const s=Yx(Kx),n=`\`${s.contentName}\` requires a \`${s.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${s.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${s.docsSlug}`;return p.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},yP="DialogDescriptionWarning",vP=({contentRef:e,descriptionId:s})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Yx(yP).contentName}}.`;return p.useEffect(()=>{var a;const i=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");s&&i&&(document.getElementById(s)||console.warn(r))},[r,e,s]),null},bP=_x,jP=Lx,NP=Bx,Xx=Vx,Jx=Ux,Qx=zx,Zx=Wx,wP=qx;const SP=bP,CP=jP,TP=NP,eg=p.forwardRef(({className:e,...s},n)=>t.jsx(Xx,{className:ae("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...s,ref:n}));eg.displayName=Xx.displayName;const kP=Mi("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),tg=p.forwardRef(({side:e="right",className:s,children:n,...r},i)=>t.jsxs(TP,{children:[t.jsx(eg,{}),t.jsxs(Jx,{ref:i,className:ae(kP({side:e}),s),...r,children:[t.jsxs(wP,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[t.jsx(_p,{className:"h-4 w-4"}),t.jsx("span",{className:"sr-only",children:"Close"})]}),n]})]}));tg.displayName=Jx.displayName;const sg=({className:e,...s})=>t.jsx("div",{className:ae("flex flex-col space-y-2 text-center sm:text-left",e),...s});sg.displayName="SheetHeader";const rg=p.forwardRef(({className:e,...s},n)=>t.jsx(Qx,{ref:n,className:ae("text-lg font-semibold text-foreground",e),...s}));rg.displayName=Qx.displayName;const EP=p.forwardRef(({className:e,...s},n)=>t.jsx(Zx,{ref:n,className:ae("text-sm text-muted-foreground",e),...s}));EP.displayName=Zx.displayName;var RP=p.createContext(void 0);function cc(e){const s=p.useContext(RP);return e||s||"ltr"}function PP(e,[s,n]){return Math.min(n,Math.max(s,e))}function AP(e,s){return p.useReducer((n,r)=>s[n][r]??n,e)}var dc="ScrollArea",[ng]=Ns(dc),[DP,wt]=ng(dc),ig=p.forwardRef((e,s)=>{const{__scopeScrollArea:n,type:r="hover",dir:i,scrollHideDelay:a=600,...o}=e,[l,c]=p.useState(null),[d,u]=p.useState(null),[m,h]=p.useState(null),[f,g]=p.useState(null),[x,y]=p.useState(null),[v,b]=p.useState(0),[N,S]=p.useState(0),[E,A]=p.useState(!1),[j,C]=p.useState(!1),M=Ue(s,$=>c($)),L=cc(i);return t.jsx(DP,{scope:n,type:r,dir:L,scrollHideDelay:a,scrollArea:l,viewport:d,onViewportChange:u,content:m,onContentChange:h,scrollbarX:f,onScrollbarXChange:g,scrollbarXEnabled:E,onScrollbarXEnabledChange:A,scrollbarY:x,onScrollbarYChange:y,scrollbarYEnabled:j,onScrollbarYEnabledChange:C,onCornerWidthChange:b,onCornerHeightChange:S,children:t.jsx(Ce.div,{dir:L,...o,ref:M,style:{position:"relative","--radix-scroll-area-corner-width":v+"px","--radix-scroll-area-corner-height":N+"px",...e.style}})})});ig.displayName=dc;var ag="ScrollAreaViewport",og=p.forwardRef((e,s)=>{const{__scopeScrollArea:n,children:r,nonce:i,...a}=e,o=wt(ag,n),l=p.useRef(null),c=Ue(s,l,o.onViewportChange);return t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),t.jsx(Ce.div,{"data-radix-scroll-area-viewport":"",...a,ref:c,style:{overflowX:o.scrollbarXEnabled?"scroll":"hidden",overflowY:o.scrollbarYEnabled?"scroll":"hidden",...e.style},children:t.jsx("div",{ref:o.onContentChange,style:{minWidth:"100%",display:"table"},children:r})})]})});og.displayName=ag;var Gt="ScrollAreaScrollbar",uc=p.forwardRef((e,s)=>{const{forceMount:n,...r}=e,i=wt(Gt,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:o}=i,l=e.orientation==="horizontal";return p.useEffect(()=>(l?a(!0):o(!0),()=>{l?a(!1):o(!1)}),[l,a,o]),i.type==="hover"?t.jsx(IP,{...r,ref:s,forceMount:n}):i.type==="scroll"?t.jsx(MP,{...r,ref:s,forceMount:n}):i.type==="auto"?t.jsx(lg,{...r,ref:s,forceMount:n}):i.type==="always"?t.jsx(mc,{...r,ref:s}):null});uc.displayName=Gt;var IP=p.forwardRef((e,s)=>{const{forceMount:n,...r}=e,i=wt(Gt,e.__scopeScrollArea),[a,o]=p.useState(!1);return p.useEffect(()=>{const l=i.scrollArea;let c=0;if(l){const d=()=>{window.clearTimeout(c),o(!0)},u=()=>{c=window.setTimeout(()=>o(!1),i.scrollHideDelay)};return l.addEventListener("pointerenter",d),l.addEventListener("pointerleave",u),()=>{window.clearTimeout(c),l.removeEventListener("pointerenter",d),l.removeEventListener("pointerleave",u)}}},[i.scrollArea,i.scrollHideDelay]),t.jsx(Nt,{present:n||a,children:t.jsx(lg,{"data-state":a?"visible":"hidden",...r,ref:s})})}),MP=p.forwardRef((e,s)=>{const{forceMount:n,...r}=e,i=wt(Gt,e.__scopeScrollArea),a=e.orientation==="horizontal",o=sa(()=>c("SCROLL_END"),100),[l,c]=AP("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return p.useEffect(()=>{if(l==="idle"){const d=window.setTimeout(()=>c("HIDE"),i.scrollHideDelay);return()=>window.clearTimeout(d)}},[l,i.scrollHideDelay,c]),p.useEffect(()=>{const d=i.viewport,u=a?"scrollLeft":"scrollTop";if(d){let m=d[u];const h=()=>{const f=d[u];m!==f&&(c("SCROLL"),o()),m=f};return d.addEventListener("scroll",h),()=>d.removeEventListener("scroll",h)}},[i.viewport,a,c,o]),t.jsx(Nt,{present:n||l!=="hidden",children:t.jsx(mc,{"data-state":l==="hidden"?"hidden":"visible",...r,ref:s,onPointerEnter:he(e.onPointerEnter,()=>c("POINTER_ENTER")),onPointerLeave:he(e.onPointerLeave,()=>c("POINTER_LEAVE"))})})}),lg=p.forwardRef((e,s)=>{const n=wt(Gt,e.__scopeScrollArea),{forceMount:r,...i}=e,[a,o]=p.useState(!1),l=e.orientation==="horizontal",c=sa(()=>{if(n.viewport){const d=n.viewport.offsetWidth<n.viewport.scrollWidth,u=n.viewport.offsetHeight<n.viewport.scrollHeight;o(l?d:u)}},10);return pr(n.viewport,c),pr(n.content,c),t.jsx(Nt,{present:r||a,children:t.jsx(mc,{"data-state":a?"visible":"hidden",...i,ref:s})})}),mc=p.forwardRef((e,s)=>{const{orientation:n="vertical",...r}=e,i=wt(Gt,e.__scopeScrollArea),a=p.useRef(null),o=p.useRef(0),[l,c]=p.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=pg(l.viewport,l.content),u={...r,sizes:l,onSizesChange:c,hasThumb:d>0&&d<1,onThumbChange:h=>a.current=h,onThumbPointerUp:()=>o.current=0,onThumbPointerDown:h=>o.current=h};function m(h,f){return VP(h,o.current,l,f)}return n==="horizontal"?t.jsx(_P,{...u,ref:s,onThumbPositionChange:()=>{if(i.viewport&&a.current){const h=i.viewport.scrollLeft,f=um(h,l,i.dir);a.current.style.transform=`translate3d(${f}px, 0, 0)`}},onWheelScroll:h=>{i.viewport&&(i.viewport.scrollLeft=h)},onDragScroll:h=>{i.viewport&&(i.viewport.scrollLeft=m(h,i.dir))}}):n==="vertical"?t.jsx(OP,{...u,ref:s,onThumbPositionChange:()=>{if(i.viewport&&a.current){const h=i.viewport.scrollTop,f=um(h,l);a.current.style.transform=`translate3d(0, ${f}px, 0)`}},onWheelScroll:h=>{i.viewport&&(i.viewport.scrollTop=h)},onDragScroll:h=>{i.viewport&&(i.viewport.scrollTop=m(h))}}):null}),_P=p.forwardRef((e,s)=>{const{sizes:n,onSizesChange:r,...i}=e,a=wt(Gt,e.__scopeScrollArea),[o,l]=p.useState(),c=p.useRef(null),d=Ue(s,c,a.onScrollbarXChange);return p.useEffect(()=>{c.current&&l(getComputedStyle(c.current))},[c]),t.jsx(dg,{"data-orientation":"horizontal",...i,ref:d,sizes:n,style:{bottom:0,left:a.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:a.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":ta(n)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.x),onDragScroll:u=>e.onDragScroll(u.x),onWheelScroll:(u,m)=>{if(a.viewport){const h=a.viewport.scrollLeft+u.deltaX;e.onWheelScroll(h),fg(h,m)&&u.preventDefault()}},onResize:()=>{c.current&&a.viewport&&o&&r({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:c.current.clientWidth,paddingStart:ki(o.paddingLeft),paddingEnd:ki(o.paddingRight)}})}})}),OP=p.forwardRef((e,s)=>{const{sizes:n,onSizesChange:r,...i}=e,a=wt(Gt,e.__scopeScrollArea),[o,l]=p.useState(),c=p.useRef(null),d=Ue(s,c,a.onScrollbarYChange);return p.useEffect(()=>{c.current&&l(getComputedStyle(c.current))},[c]),t.jsx(dg,{"data-orientation":"vertical",...i,ref:d,sizes:n,style:{top:0,right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":ta(n)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.y),onDragScroll:u=>e.onDragScroll(u.y),onWheelScroll:(u,m)=>{if(a.viewport){const h=a.viewport.scrollTop+u.deltaY;e.onWheelScroll(h),fg(h,m)&&u.preventDefault()}},onResize:()=>{c.current&&a.viewport&&o&&r({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:c.current.clientHeight,paddingStart:ki(o.paddingTop),paddingEnd:ki(o.paddingBottom)}})}})}),[LP,cg]=ng(Gt),dg=p.forwardRef((e,s)=>{const{__scopeScrollArea:n,sizes:r,hasThumb:i,onThumbChange:a,onThumbPointerUp:o,onThumbPointerDown:l,onThumbPositionChange:c,onDragScroll:d,onWheelScroll:u,onResize:m,...h}=e,f=wt(Gt,n),[g,x]=p.useState(null),y=Ue(s,M=>x(M)),v=p.useRef(null),b=p.useRef(""),N=f.viewport,S=r.content-r.viewport,E=Qe(u),A=Qe(c),j=sa(m,10);function C(M){if(v.current){const L=M.clientX-v.current.left,$=M.clientY-v.current.top;d({x:L,y:$})}}return p.useEffect(()=>{const M=L=>{const $=L.target;(g==null?void 0:g.contains($))&&E(L,S)};return document.addEventListener("wheel",M,{passive:!1}),()=>document.removeEventListener("wheel",M,{passive:!1})},[N,g,S,E]),p.useEffect(A,[r,A]),pr(g,j),pr(f.content,j),t.jsx(LP,{scope:n,scrollbar:g,hasThumb:i,onThumbChange:Qe(a),onThumbPointerUp:Qe(o),onThumbPositionChange:A,onThumbPointerDown:Qe(l),children:t.jsx(Ce.div,{...h,ref:y,style:{position:"absolute",...h.style},onPointerDown:he(e.onPointerDown,M=>{M.button===0&&(M.target.setPointerCapture(M.pointerId),v.current=g.getBoundingClientRect(),b.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",f.viewport&&(f.viewport.style.scrollBehavior="auto"),C(M))}),onPointerMove:he(e.onPointerMove,C),onPointerUp:he(e.onPointerUp,M=>{const L=M.target;L.hasPointerCapture(M.pointerId)&&L.releasePointerCapture(M.pointerId),document.body.style.webkitUserSelect=b.current,f.viewport&&(f.viewport.style.scrollBehavior=""),v.current=null})})})}),Ti="ScrollAreaThumb",ug=p.forwardRef((e,s)=>{const{forceMount:n,...r}=e,i=cg(Ti,e.__scopeScrollArea);return t.jsx(Nt,{present:n||i.hasThumb,children:t.jsx(FP,{ref:s,...r})})}),FP=p.forwardRef((e,s)=>{const{__scopeScrollArea:n,style:r,...i}=e,a=wt(Ti,n),o=cg(Ti,n),{onThumbPositionChange:l}=o,c=Ue(s,m=>o.onThumbChange(m)),d=p.useRef(void 0),u=sa(()=>{d.current&&(d.current(),d.current=void 0)},100);return p.useEffect(()=>{const m=a.viewport;if(m){const h=()=>{if(u(),!d.current){const f=UP(m,l);d.current=f,l()}};return l(),m.addEventListener("scroll",h),()=>m.removeEventListener("scroll",h)}},[a.viewport,u,l]),t.jsx(Ce.div,{"data-state":o.hasThumb?"visible":"hidden",...i,ref:c,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...r},onPointerDownCapture:he(e.onPointerDownCapture,m=>{const f=m.target.getBoundingClientRect(),g=m.clientX-f.left,x=m.clientY-f.top;o.onThumbPointerDown({x:g,y:x})}),onPointerUp:he(e.onPointerUp,o.onThumbPointerUp)})});ug.displayName=Ti;var pc="ScrollAreaCorner",mg=p.forwardRef((e,s)=>{const n=wt(pc,e.__scopeScrollArea),r=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&r?t.jsx(BP,{...e,ref:s}):null});mg.displayName=pc;var BP=p.forwardRef((e,s)=>{const{__scopeScrollArea:n,...r}=e,i=wt(pc,n),[a,o]=p.useState(0),[l,c]=p.useState(0),d=!!(a&&l);return pr(i.scrollbarX,()=>{var m;const u=((m=i.scrollbarX)==null?void 0:m.offsetHeight)||0;i.onCornerHeightChange(u),c(u)}),pr(i.scrollbarY,()=>{var m;const u=((m=i.scrollbarY)==null?void 0:m.offsetWidth)||0;i.onCornerWidthChange(u),o(u)}),d?t.jsx(Ce.div,{...r,ref:s,style:{width:a,height:l,position:"absolute",right:i.dir==="ltr"?0:void 0,left:i.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function ki(e){return e?parseInt(e,10):0}function pg(e,s){const n=e/s;return isNaN(n)?0:n}function ta(e){const s=pg(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*s;return Math.max(r,18)}function VP(e,s,n,r="ltr"){const i=ta(n),a=i/2,o=s||a,l=i-o,c=n.scrollbar.paddingStart+o,d=n.scrollbar.size-n.scrollbar.paddingEnd-l,u=n.content-n.viewport,m=r==="ltr"?[0,u]:[u*-1,0];return hg([c,d],m)(e)}function um(e,s,n="ltr"){const r=ta(s),i=s.scrollbar.paddingStart+s.scrollbar.paddingEnd,a=s.scrollbar.size-i,o=s.content-s.viewport,l=a-r,c=n==="ltr"?[0,o]:[o*-1,0],d=PP(e,c);return hg([0,o],[0,l])(d)}function hg(e,s){return n=>{if(e[0]===e[1]||s[0]===s[1])return s[0];const r=(s[1]-s[0])/(e[1]-e[0]);return s[0]+r*(n-e[0])}}function fg(e,s){return e>0&&e<s}var UP=(e,s=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},r=0;return(function i(){const a={left:e.scrollLeft,top:e.scrollTop},o=n.left!==a.left,l=n.top!==a.top;(o||l)&&s(),n=a,r=window.requestAnimationFrame(i)})(),()=>window.cancelAnimationFrame(r)};function sa(e,s){const n=Qe(e),r=p.useRef(0);return p.useEffect(()=>()=>window.clearTimeout(r.current),[]),p.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,s)},[n,s])}function pr(e,s){const n=Qe(s);Ut(()=>{let r=0;if(e){const i=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return i.observe(e),()=>{window.cancelAnimationFrame(r),i.unobserve(e)}}},[e,n])}var xg=ig,$P=og,zP=mg;const gg=p.forwardRef(({className:e,children:s,...n},r)=>t.jsxs(xg,{ref:r,className:ae("relative overflow-hidden",e),...n,children:[t.jsx($P,{className:"h-full w-full rounded-[inherit]",children:s}),t.jsx(yg,{}),t.jsx(zP,{})]}));gg.displayName=xg.displayName;const yg=p.forwardRef(({className:e,orientation:s="vertical",...n},r)=>t.jsx(uc,{ref:r,orientation:s,className:ae("flex touch-none select-none transition-colors",s==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",s==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...n,children:t.jsx(ug,{className:"relative flex-1 rounded-full bg-border"})}));yg.displayName=uc.displayName;const HP=[{title:"Getting Started",items:[{title:"GitHub Workflow",href:"/github-axa-usage"},{title:"Coding Standards",href:"/coding-standard"}]},{title:"Architecture",items:[{title:"Clean Code",href:"/clean-code-guideline"},{title:"Clean Architecture",href:"/clean-architecture"}]},{title:"Backend",items:[{title:".NET Development",href:"/dotnet-developer-guideline"},{title:"Java Development",href:"/java-developer-guideline"},{title:"Python Development",href:"/python-developer-guideline"}]},{title:"Frontend & Mobile",items:[{title:"React Development",href:"/react-developer-guideline"},{title:"Flutter Development",href:"/flutter-developer-guideline"}]},{title:"Cloud & FinOps",items:[{title:"FinOps Guide",href:"/finops-guideline"},{title:"AWS Architecture",href:"/aws-architecture-guideline"}]}],WP=()=>{const[e,s]=p.useState(!1),[n,r]=p.useState(!1),i=Ht();return p.useEffect(()=>{const a=()=>{s(window.scrollY>0)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),p.useEffect(()=>{const a=o=>{(o.metaKey||o.ctrlKey)&&o.key==="k"&&(o.preventDefault(),r(!0))};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]),t.jsxs("header",{className:`sticky top-0 z-50 w-full border-b transition-all duration-300 ${e?"glass":"bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"}`,role:"banner",children:[t.jsxs("div",{className:"container flex h-16 items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-6",children:[t.jsxs(qe,{to:"/",className:"flex items-center gap-2 transition-opacity hover:opacity-80","aria-label":"AII IT Playbook Home",children:[t.jsx("div",{className:"p-1.5 rounded-lg bg-primary/10",children:t.jsx(Vs,{className:"h-5 w-5 text-primary"})}),t.jsx("span",{className:"hidden font-bold text-foreground sm:inline-block",children:"AII IT Playbook"})]}),t.jsx("nav",{className:"hidden md:flex items-center gap-1","aria-label":"Main navigation",children:t.jsx(dR,{})})]}),t.jsxs(SP,{children:[t.jsx(CP,{asChild:!0,children:t.jsx(Re,{variant:"ghost",size:"icon",className:"md:hidden","aria-label":"Open menu",children:t.jsx(nN,{className:"h-5 w-5"})})}),t.jsxs(tg,{side:"left",className:"w-80",children:[t.jsx(sg,{children:t.jsx(rg,{children:t.jsxs(qe,{to:"/",className:"flex items-center gap-2",children:[t.jsx(Vs,{className:"h-5 w-5 text-primary"}),t.jsx("span",{className:"font-bold",children:"AII IT Playbook"})]})})}),t.jsx(gg,{className:"my-4 h-[calc(100vh-8rem)]",children:t.jsx("div",{className:"space-y-6 py-4",children:HP.map(a=>t.jsxs("div",{children:[t.jsx("h4",{className:"mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide",children:a.title}),t.jsx("div",{className:"space-y-1",children:a.items.map(o=>t.jsx(qe,{to:o.href,className:`block px-2 py-2 text-sm rounded-lg transition-colors ${i.pathname===o.href?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:o.title},o.href))})]},a.title))})})]})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsxs(Re,{variant:"ghost",onClick:()=>r(!0),className:"relative h-9 w-9 p-0 md:w-60 md:justify-start md:px-3 md:py-2 rounded-lg hover:bg-muted/30 transition-colors","aria-label":"Search documentation",children:[t.jsx(Os,{className:"h-4 w-4 md:mr-2"}),t.jsx("span",{className:"hidden md:inline-flex text-sm text-muted-foreground",children:"Search docs..."}),t.jsxs("kbd",{className:"pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded bg-background px-1.5 font-mono text-[10px] font-medium md:flex border shadow-sm",children:[t.jsx("span",{className:"text-xs",children:"⌘"}),"K"]})]}),t.jsx("div",{className:"hidden md:block h-4 w-px bg-border"}),t.jsx(Re,{variant:"ghost",size:"icon",asChild:!0,className:"rounded-full h-9 w-9","aria-label":"View GitHub repository",children:t.jsx("a",{href:"https://github.axa.com/aii",target:"_blank",rel:"noreferrer",children:t.jsx(po,{className:"h-4 w-4"})})}),t.jsx(aR,{})]})]}),t.jsx(Nx,{isOpen:n,onOpenChange:r})]})},GP=()=>t.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all",children:"Skip to content"}),qP=()=>{const{scrollYProgress:e}=KE(),s=JE(e,{stiffness:100,damping:30,restDelta:.001});return t.jsx(Ve.div,{className:"fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]",style:{scaleX:s}})},nt=({children:e,showSidebar:s=!0,showReadingProgress:n=!1})=>{const i=Ht().pathname==="/",a=s&&!i,o=n||!i&&a,[l,c]=p.useState(!1);return t.jsxs("div",{className:"relative flex min-h-screen flex-col bg-background",children:[o&&t.jsx(qP,{}),t.jsx(GP,{}),t.jsx("div",{"data-pagefind-ignore":!0,children:t.jsx(WP,{})}),t.jsx(Nx,{open:l,onOpenChange:c}),t.jsxs("div",{className:"flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]",children:[a&&t.jsx("aside",{className:"fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-[240px] shrink-0 md:sticky md:block lg:w-[260px] xl:w-[280px]",role:"navigation","aria-label":"Documentation navigation",children:t.jsx("div",{"data-pagefind-ignore":!0,className:"h-full",children:t.jsx(iR,{onSearchClick:()=>c(!0)})})}),t.jsx("main",{id:"main-content",role:"main",className:`relative py-6 lg:gap-10 lg:py-8 ${a?"":"md:col-span-2"}`,"data-pagefind-body":!0,children:t.jsx("div",{className:`w-full min-w-0 ${a?"px-3 md:px-4 lg:px-6":"px-4 md:px-8 lg:px-12"}`,children:e})})]})]})},KP=({children:e,className:s,colors:n=["#0033A0","#4299E1","#0033A0"],animationDuration:r=8})=>t.jsx(Ve.span,{className:ae("relative inline-block text-transparent bg-clip-text font-bold",s),animate:{backgroundPosition:["0% center","200% center"]},transition:{duration:r,repeat:1/0,ease:"linear"},style:{backgroundImage:`linear-gradient(to right, ${n[0]}, ${n[1]}, ${n[2]}, ${n[0]})`,backgroundSize:"200% auto"},children:e}),vg=({children:e,className:s,color:n="rgba(0, 51, 160, 0.15)",delay:r=.5,duration:i=.8})=>t.jsxs("span",{className:ae("relative inline-block px-1",s),children:[t.jsx(Ve.span,{initial:{width:"0%"},whileInView:{width:"100%"},viewport:{once:!0},transition:{delay:r,duration:i,ease:[.6,.01,.05,.95]},className:"absolute bottom-[10%] left-0 h-[60%] -z-10",style:{backgroundColor:n}}),e]}),YP=({className:e,gridSize:s=40,gridColor:n="currentColor",dotSize:r=1,maskGradient:i="radial-gradient(circle at center, white, transparent 80%)"})=>t.jsxs("div",{className:ae("absolute inset-0 -z-10 overflow-hidden",e),children:[t.jsx(Ve.div,{className:"absolute inset-0 opacity-[0.03] dark:opacity-[0.05]",style:{backgroundImage:`radial-gradient(${n} ${r}px, transparent ${r}px)`,backgroundSize:`${s}px ${s}px`,maskImage:i,WebkitMaskImage:i},animate:{backgroundPosition:["0px 0px",`${s}px ${s}px`]},transition:{duration:20,repeat:1/0,ease:"linear"}}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background",style:{pointerEvents:"none"}})]}),bg=p.forwardRef(({shimmerColor:e="rgba(255, 255, 255, 0.3)",borderRadius:s="0.75rem",shimmerDuration:n="2s",background:r="hsl(var(--primary))",className:i,children:a,...o},l)=>t.jsxs(Ve.button,{ref:l,whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:17},className:ae("relative inline-flex items-center justify-center overflow-hidden px-8 py-3","text-sm font-semibold text-primary-foreground","transition-all duration-300","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2","disabled:pointer-events-none disabled:opacity-50","shadow-lg hover:shadow-xl hover:shadow-primary/30",i),style:{borderRadius:s,background:r},...o,children:[t.jsx("span",{className:"absolute inset-0 overflow-hidden pointer-events-none",style:{borderRadius:s},children:t.jsx("span",{className:"absolute inset-0 -translate-x-full animate-shimmer",style:{background:`linear-gradient(
                  90deg,
                  transparent,
                  ${e},
                  transparent
                )`,animationDuration:n}})}),t.jsx("span",{className:"relative z-10 flex items-center gap-2",children:a})]}));bg.displayName="ShimmerButton";const XP=()=>t.jsxs("section",{className:"relative overflow-hidden py-20 lg:py-28",children:[t.jsx(YP,{}),t.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[t.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"}),t.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"})]}),t.jsx("div",{className:"absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] dark:opacity-[0.08]"}),t.jsx("div",{className:"container px-4 md:px-6",children:t.jsxs("div",{className:"flex flex-col items-center text-center space-y-8",children:[t.jsx(Ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:t.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium",children:[t.jsxs("span",{className:"relative flex h-2 w-2",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-primary"})]}),"Enterprise IT Standards"]})}),t.jsxs(Ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},className:"space-y-4 max-w-3xl",children:[t.jsxs("h1",{className:"text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",children:["AII IT"," ",t.jsx(KP,{children:"Playbook"})]}),t.jsxs("p",{className:"mx-auto max-w-[600px] text-lg text-muted-foreground md:text-xl",children:[t.jsx(vg,{children:"Engineering standards"}),", DevOps strategies, and best practices for the AII IT environment."]})]}),t.jsxs(Ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"flex flex-col sm:flex-row items-center gap-4",children:[t.jsxs(bg,{className:"h-12",onClick:()=>window.location.href="/github-axa-usage",children:["Get Started",t.jsx(bt,{className:"ml-2 h-4 w-4"})]}),t.jsx(Re,{asChild:!0,variant:"outline",size:"lg",className:"h-12 px-8 rounded-xl hover:bg-muted/50 transition-all font-semibold",children:t.jsxs(qe,{to:"/coding-standard",children:[t.jsx(ut,{className:"mr-2 h-4 w-4"}),"Browse Docs"]})})]}),t.jsx(Ve.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.4},className:"flex flex-wrap items-center justify-center gap-3 pt-4",children:[".NET","React","Java","Python","Flutter"].map(e=>t.jsx("span",{className:"px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/50",children:e},e))})]})})]}),JP=({href:e,title:s,description:n,previewImage:r,className:i,icon:a})=>{const[o,l]=Je.useState(!1);return t.jsxs(qe,{to:e,className:ae("group relative block p-8 rounded-3xl bg-card border border-border/50 transition-all duration-500 overflow-hidden h-full shadow-sm hover:shadow-2xl hover:shadow-primary/5",i),onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[t.jsx("div",{className:ae("absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0","bg-gradient-to-br from-primary/10 via-transparent to-transparent")}),t.jsxs("div",{className:"relative z-10 flex flex-col h-full space-y-4",children:[t.jsxs("div",{className:"flex items-start justify-between",children:[t.jsx("div",{className:ae("p-3 rounded-2xl bg-muted/50 text-muted-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3","shadow-inner"),children:a||t.jsx(di,{className:"h-6 w-6"})}),t.jsx(Ve.div,{animate:{x:o?0:10,opacity:o?1:0,rotate:o?45:0},transition:{duration:.3},children:t.jsx(di,{className:"h-5 w-5 text-primary"})})]}),t.jsxs("div",{className:"space-y-2 flex-1",children:[t.jsx("h3",{className:"font-bold text-xl tracking-tight group-hover:text-primary transition-colors duration-300",children:s}),t.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300",children:n})]}),t.jsxs("div",{className:"pt-4 flex items-center text-xs font-bold uppercase tracking-widest text-primary/0 group-hover:text-primary transition-all duration-500 translate-y-2 group-hover:translate-y-0",children:["Explore Guide ",t.jsx(hr,{className:"ml-1 h-3 w-3"})]})]}),t.jsx(rc,{children:o&&r&&t.jsx(Ve.div,{initial:{opacity:0,scale:1.1},animate:{opacity:.05,scale:1},exit:{opacity:0,scale:1.1},transition:{duration:.7},className:"absolute inset-0 z-0 pointer-events-none",children:t.jsx("img",{src:r,alt:s,className:"w-full h-full object-cover filter grayscale"})})}),t.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1 overflow-hidden",children:t.jsx(Ve.div,{className:"h-full bg-gradient-to-r from-transparent via-primary to-transparent",initial:{x:"-100%"},animate:{x:o?"100%":"-100%"},transition:{duration:1,repeat:o?1/0:0,ease:"linear"}})})]})},QP=({icon:e,className:s,type:n="neutral"})=>{const r=()=>{switch(n){case"success":return"text-emerald-500 bg-emerald-500/10";case"warning":return"text-amber-500 bg-amber-500/10";case"error":return"text-destructive bg-destructive/10";default:return"text-primary bg-primary/10"}};return t.jsx(Ve.div,{whileHover:{scale:1.1,rotate:5},whileTap:{scale:.95},className:ae("flex items-center justify-center p-3 rounded-xl transition-colors",r(),s),children:t.jsx(Ve.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.3},children:e})})},jg=({children:e,className:s,delay:n=0,duration:r=.6,blur:i="10px",once:a=!0,direction:o="up",distance:l=20})=>{const c=p.useRef(null),d=eR(c,{once:a,margin:"-50px"}),u=()=>{switch(o){case"up":return{y:l};case"down":return{y:-l};case"left":return{x:l};case"right":return{x:-l};case"none":default:return{}}};return t.jsx(Ve.div,{ref:c,initial:{opacity:0,filter:`blur(${i})`,...u()},animate:d?{opacity:1,filter:"blur(0px)",x:0,y:0}:{opacity:0,filter:`blur(${i})`,...u()},transition:{duration:r,delay:n,ease:[.25,.4,.25,1]},className:ae(s),children:e})};jg.displayName="BlurReveal";const ZP=[{title:".NET Development",description:"Clean Architecture, DDD, and enterprise C# standards.",href:"/dotnet-developer-guideline",icon:Mt,color:"blue"},{title:"React Frontend",description:"Component architecture and modern hooks patterns.",href:"/react-developer-guideline",icon:Yr,color:"cyan"},{title:"Java Backend",description:"Spring Boot and microservices best practices.",href:"/java-developer-guideline",icon:_i,color:"orange"},{title:"Python & AI",description:"FastAPI standards and AI integration guidelines.",href:"/python-developer-guideline",icon:Vs,color:"yellow"},{title:"Flutter Mobile",description:"Cross-platform excellence with BLoC patterns.",href:"/flutter-developer-guideline",icon:Bi,color:"sky"},{title:"Clean Architecture",description:"Naming conventions and DDD patterns.",href:"/clean-architecture",icon:Oe,color:"purple"},{title:"Clean Code",description:"SOLID principles and software craftsmanship.",href:"/clean-code-guideline",icon:un,color:"rose"},{title:"FinOps",description:"Cloud cost optimization and financial management.",href:"/finops-guideline",icon:zs,color:"green"},{title:"AWS Architecture",description:"Well-Architected Framework and cloud patterns.",href:"/aws-architecture-guideline",icon:fr,color:"indigo"}],eA=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},s={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4}}};return t.jsxs(nt,{showSidebar:!1,children:[t.jsx(XP,{}),t.jsx("section",{className:"py-16 lg:py-24",children:t.jsxs("div",{className:"container px-4",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("h2",{className:"text-3xl font-bold tracking-tight mb-4",children:"Choose Your Stack"}),t.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Comprehensive standards and strategies for the entire AII IT ecosystem."})]}),t.jsx(Ve.div,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:ZP.map(n=>t.jsx(Ve.div,{variants:s,children:t.jsx(JP,{href:n.href,title:n.title,description:n.description,icon:t.jsx(n.icon,{className:"h-6 w-6"}),className:"h-full"})},n.href))})]})}),t.jsx("section",{className:"py-16 lg:py-24 bg-muted/30",children:t.jsx("div",{className:"container px-4",children:t.jsxs("div",{className:"max-w-4xl mx-auto",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("h2",{className:"text-3xl font-bold tracking-tight mb-4",children:"How It Works"}),t.jsx("p",{className:"text-muted-foreground",children:"Three simple steps to align with AII development standards."})]}),t.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{step:"01",title:"Read the Guidelines",description:"Explore standards tailored for your tech stack.",icon:t.jsx(Mt,{className:"h-6 w-6"})},{step:"02",title:"Apply Patterns",description:"Implement Clean Code, Architecture and cloud best practices.",icon:t.jsx($t,{className:"h-6 w-6"})},{step:"03",title:"Submit PR",description:"Follow our GitHub workflow for code reviews.",icon:t.jsx(ce,{className:"h-6 w-6"})}].map((n,r)=>t.jsx(jg,{delay:r*.15,direction:"up",children:t.jsxs("div",{className:"text-center group",children:[t.jsx(QP,{icon:n.icon,className:"mx-auto mb-4"}),t.jsx("h3",{className:"font-semibold text-lg mb-2",children:n.title}),t.jsx("p",{className:"text-sm text-muted-foreground",children:n.description})]})},r))}),t.jsx("div",{className:"text-center mt-12",children:t.jsx(Re,{asChild:!0,size:"lg",className:"rounded-xl",children:t.jsxs(qe,{to:"/github-axa-usage",children:[t.jsx(ws,{className:"mr-2 h-4 w-4"}),"View GitHub Workflow"]})})})]})})}),t.jsx("section",{className:"py-16 lg:py-20",children:t.jsx("div",{className:"container px-4",children:t.jsxs("div",{className:"max-w-2xl mx-auto text-center space-y-6",children:[t.jsx("h2",{className:"text-2xl font-bold",children:"Ready to get started?"}),t.jsx("p",{className:"text-muted-foreground",children:"Begin with our global coding standards, then dive into your specific tech stack."}),t.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[t.jsx(Re,{asChild:!0,size:"lg",className:"rounded-xl",children:t.jsxs(qe,{to:"/coding-standard",children:[t.jsx($t,{className:"mr-2 h-4 w-4"}),"Global Standards"]})}),t.jsx(Re,{asChild:!0,variant:"outline",size:"lg",className:"rounded-xl",children:t.jsxs(qe,{to:"/clean-architecture",children:[t.jsx(Oe,{className:"mr-2 h-4 w-4"}),"Architecture Guide"]})}),t.jsx(Re,{asChild:!0,variant:"outline",size:"lg",className:"rounded-xl",children:t.jsxs(qe,{to:"/finops-guideline",children:[t.jsx(zs,{className:"mr-2 h-4 w-4"}),"Cloud & FinOps"]})})]})]})})})]})},ot=({title:e,subtitle:s,breadcrumbs:n,readingTime:r})=>t.jsxs("section",{className:"relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16",children:[t.jsx("div",{className:"absolute inset-0 -z-10 bg-[radial-gradient(35%_35%_at_50%_0%,rgba(0,51,160,0.06)_0%,transparent_100%)]"}),t.jsxs("div",{className:"container px-4",children:[t.jsx("nav",{className:"flex mb-4 items-center gap-2 text-sm font-medium text-muted-foreground animate-in-fade","aria-label":"Breadcrumb",children:n.map((i,a)=>t.jsxs(Je.Fragment,{children:[a>0&&t.jsx(hr,{className:"h-4 w-4 opacity-50"}),i.href?t.jsx(qe,{to:i.href,className:"hover:text-primary transition-colors flex items-center",children:i.label==="Home"?t.jsx(Ep,{className:"h-4 w-4"}):i.label}):t.jsx("span",{className:"text-foreground font-bold",children:i.label})]},i.label))}),t.jsxs("div",{className:"max-w-[800px] space-y-3 animate-in-fade",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[t.jsx("h1",{className:"text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gradient",children:e}),r&&t.jsxs(k,{variant:"secondary",className:"flex items-center gap-1 text-xs",children:[t.jsx(Np,{className:"h-3 w-3"}),r," min read"]})]}),t.jsx("p",{className:"text-lg text-muted-foreground leading-relaxed",children:s})]})]}),t.jsx("div",{className:"absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"})]});var tA=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],sA=tA.reduce((e,s)=>{const n=Dh(`Primitive.${s}`),r=p.forwardRef((i,a)=>{const{asChild:o,...l}=i,c=o?n:s;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(c,{...l,ref:a})});return r.displayName=`Primitive.${s}`,{...e,[s]:r}},{}),rA="Separator",mm="horizontal",nA=["horizontal","vertical"],Ng=p.forwardRef((e,s)=>{const{decorative:n,orientation:r=mm,...i}=e,a=iA(r)?r:mm,l=n?{role:"none"}:{"aria-orientation":a==="vertical"?a:void 0,role:"separator"};return t.jsx(sA.div,{"data-orientation":a,...l,...i,ref:s})});Ng.displayName=rA;function iA(e){return nA.includes(e)}var wg=Ng;const I=p.forwardRef(({className:e,orientation:s="horizontal",decorative:n=!0,...r},i)=>t.jsx(wg,{ref:i,decorative:n,orientation:s,className:ae("shrink-0 bg-border",s==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",e),...r}));I.displayName=wg.displayName;const _=({code:e,language:s="csharp",showLineNumbers:n=!1,showCopyButton:r=!0,className:i="",title:a,maxHeight:o})=>{const[l,c]=p.useState(!1),d=p.useCallback(async()=>{try{await navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),2e3)}catch{}},[e]);return t.jsxs("div",{className:ae("group relative my-6 rounded-lg border bg-muted/50 overflow-hidden",i),children:[t.jsxs("div",{className:"flex items-center justify-between border-b bg-muted/80 px-4 py-2",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(uj,{className:"h-4 w-4 text-muted-foreground"}),t.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:s}),a&&t.jsx("span",{className:"ml-2 text-sm font-medium text-foreground",children:a})]}),r&&t.jsxs(Re,{variant:"ghost",size:"icon",className:"h-8 w-8 text-muted-foreground hover:text-foreground",onClick:d,children:[l?t.jsx(J0,{className:"h-4 w-4 text-green-500"}):t.jsx(yj,{className:"h-4 w-4"}),t.jsx("span",{className:"sr-only",children:"Copy code"})]})]}),t.jsx("div",{className:"overflow-x-auto p-4 font-mono text-sm leading-relaxed",style:{maxHeight:o||"none"},children:t.jsxs("div",{className:"flex gap-4",children:[n&&t.jsx("div",{className:"flex flex-col text-muted-foreground/40 select-none text-right min-w-[20px]",children:e.trim().split(`
`).map((u,m)=>t.jsx("span",{children:m+1},m))}),t.jsx("pre",{className:"flex-1 whitespace-pre-wrap break-words",children:t.jsx("code",{children:e.trim()})})]})})]})},vn=({previous:e,next:s,className:n})=>!e&&!s?null:t.jsxs("nav",{className:ae("flex items-center justify-between gap-4 py-8 border-t",n),"aria-label":"Page navigation",children:[e?t.jsxs(qe,{to:e.href,className:"group flex-1 flex flex-col items-start gap-1 p-4 rounded-xl border hover:border-primary/20 hover:bg-primary/5 transition-all",children:[t.jsxs("span",{className:"flex items-center text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors",children:[t.jsx(tj,{className:"h-4 w-4 mr-1"}),"Previous"]}),t.jsx("span",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:e.title})]}):t.jsx("div",{className:"flex-1"}),s?t.jsxs(qe,{to:s.href,className:"group flex-1 flex flex-col items-end gap-1 p-4 rounded-xl border hover:border-primary/20 hover:bg-primary/5 transition-all text-right",children:[t.jsxs("span",{className:"flex items-center text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors",children:["Next",t.jsx(hr,{className:"h-4 w-4 ml-1"})]}),t.jsx("span",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:s.title})]}):t.jsx("div",{className:"flex-1"})]}),pm=[{id:"overview",title:"1. Project Overview",icon:ut},{id:"architecture",title:"2. Architecture Design",icon:Oe},{id:"patterns",title:"3. Design Patterns",icon:De},{id:"data-access",title:"4. Data Access Patterns",icon:Rt},{id:"api-approaches",title:"5. API Implementation",icon:Ss},{id:"naming",title:"6. Naming Conventions",icon:Li},{id:"organization",title:"7. File & Project Org",icon:Ap},{id:"validation",title:"8. Validation & Error",icon:tt},{id:"testing",title:"9. Testing Guidelines",icon:rt}],aA=()=>{const[e,s]=p.useState("overview"),n=[{label:"Home",href:"/"},{label:".NET Guideline"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&s(a.target.id)})},{threshold:.2,rootMargin:"-10% 0px -70% 0px"});return pm.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:".NET Developer Guideline",subtitle:"The exhaustive reference for .NET development, clean code patterns, and project-specific conventions at AII.",breadcrumbs:n,readingTime:25}),t.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[t.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"})]}),t.jsxs("div",{className:"prose prose-slate dark:prose-invert max-w-none space-y-6",children:[t.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["AII .NET applications are built using ",t.jsx("strong",{children:".NET 8.0/9.0"})," following ",t.jsx("strong",{children:"Clean Architecture"})," or ",t.jsx("strong",{children:"Vertical Slice"})," principles. Our goal is to maintain highly testable, independent, and scalable codebases."]}),t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose",children:[{text:".NET 8.0/9.0 ASP.NET Core",icon:Ss},{text:"EF Core with PostgreSQL/SQL Server",icon:Rt},{text:"MediatR for In-Process Messaging",icon:De},{text:"FluentValidation for Logic",icon:tt},{text:"Mapster/AutoMapper for DTOs",icon:Oe},{text:"Serilog & OpenTelemetry",icon:Me}].map((r,i)=>t.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[t.jsx(r.icon,{className:"h-5 w-5 text-primary"}),t.jsx("span",{className:"font-semibold text-sm",children:r.text})]},i))}),t.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6 not-prose",children:[t.jsxs("div",{className:"flex items-center gap-3 text-blue-500",children:[t.jsx("div",{className:"p-2 rounded-lg bg-blue-500/10",children:t.jsx(ce,{className:"h-6 w-6"})}),t.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),t.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first .NET project running at AII:"}),t.jsx("div",{className:"grid gap-4",children:[{step:"Install SDK",desc:"Download and install .NET 8.0 SDK and Runtime."},{step:"Setup IDE",desc:"Install JetBrains Rider (preferred) or VS 2022 with C# extensions."},{step:"Clone Template",desc:"Run 'dotnet new install AII.Templates' to get our latest skeleton."},{step:"Docker Setup",desc:"Ensure Docker Desktop is running for local PostgreSQL/Redis instances."},{step:"Run Tests",desc:"Execute 'dotnet test' to ensure the baseline project is stable."}].map((r,i)=>t.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[t.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm",children:i+1}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-foreground",children:r.step}),t.jsx("p",{className:"text-sm text-muted-foreground",children:r.desc})]})]},i))})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"architecture",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Architecture Design Choices"})]}),t.jsxs("div",{className:"space-y-10",children:[t.jsxs("div",{className:"space-y-6",children:[t.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Clean Architecture (Layered)"}),t.jsx("p",{className:"text-muted-foreground",children:"Standard for enterprise-grade applications with complex domains."}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-6",children:[t.jsx(_,{title:"Order.cs (Domain Layer)",language:"csharp",code:`public class Order : AggregateRoot
{
    public void MarkAsCompleted() {
        if (Status != OrderStatus.Processing)
            throw new DomainException("Invalid state transition");
        Status = OrderStatus.Completed;
    }
}`}),t.jsx(_,{title:"CompleteOrderUseCase.cs (App Layer)",language:"csharp",code:`public async Task Execute(int orderId) {
    var order = await _orderRepository.GetByIdAsync(orderId);
    order.MarkAsCompleted();
    await _unitOfWork.SaveChangesAsync();
}`})]})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[t.jsx(Ap,{className:"h-5 w-5"})," Layer Responsibilities"]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6 text-sm",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"API Layer"}),": Controllers, Endpoints, Middleware, Auth registration."]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Application Layer"}),": Commands, Queries, Handlers, DTOs, Validators."]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Domain Layer"}),": Entities, Value Objects, Domain Logic, Exceptions."]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Infrastructure Layer"}),": Data Access, External Clients, File Storage."]})]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"patterns",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Design Patterns"})]}),t.jsx("div",{className:"space-y-8",children:t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[t.jsx(De,{className:"h-5 w-5 text-yellow-500"})," CQRS with MediatR"]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Separates read models from write models and enables decorators for logging and validation."}),t.jsx(_,{language:"csharp",code:`public record CreateStudentCommand(string Name) : IRequest<int>;
public class CreateStudentHandler : IRequestHandler<CreateStudentCommand, int> { ... }`})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[t.jsx(Me,{className:"h-5 w-5 text-emerald-500"})," Dependency Injection"]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Always use Constructor Injection. Prefer Scoped for DB context and Transient for lightweight services."}),t.jsx(_,{language:"csharp",code:`public class Service(IRepository repo) : IService {
    // Use Primary Constructor (C# 12)
}`})]})]})})]}),t.jsx(I,{}),t.jsxs("section",{id:"data-access",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Data Access Patterns"})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsx("h3",{className:"text-2xl font-bold",children:"Entity Framework Core"}),t.jsx("p",{className:"text-muted-foreground",children:"The primary ORM for AII .NET projects. Follow these best practices for performance."}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"glass p-6 rounded-2xl border border-emerald-500/20 space-y-4",children:[t.jsx("h5",{className:"font-bold text-emerald-600",children:"✅ Eager Loading & NoTracking"}),t.jsx(_,{language:"csharp",code:`var students = await _context.Students
    .AsNoTracking()
    .Include(s => s.Courses)
    .Where(s => s.IsActive)
    .ToListAsync();`})]}),t.jsxs("div",{className:"glass p-6 rounded-2xl border border-blue-500/20 space-y-4",children:[t.jsx("h5",{className:"font-bold text-blue-600 font-mono",children:"Dapper for Performance"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Use Dapper for high-performance read scenarios or complex stored procedures."}),t.jsx(_,{language:"csharp",code:`return await _dbConnection.QueryAsync<ReportDTO>(
    "EXEC GetComplexReport @Date", new { Date = DateTime.Now });`})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"api-approaches",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"API Implementation Approaches"})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-xl font-bold",children:"Standard Controllers"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Best for large-scale APIs requiring complex route attributes or filters."}),t.jsx(_,{language:"csharp",code:`[ApiController, Route("api/[controller]")]
public class StudentsController : ControllerBase {
    [HttpPost] public async Task<IActionResult> Create(DTO data) => Ok();
}`})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-xl font-bold",children:"Minimal APIs"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Recommended for microservices or simple feature sets. Less boilerplate."}),t.jsx(_,{language:"csharp",code:`app.MapPost("/api/students", async (Command cmd, ISender sender) => 
    Results.Ok(await sender.Send(cmd)));`})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"naming",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Naming Conventions"})]}),t.jsx("div",{className:"overflow-x-auto rounded-3xl border glass",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-6 py-4 text-left",children:"Element"}),t.jsx("th",{className:"px-6 py-4 text-left",children:"Convention"}),t.jsx("th",{className:"px-6 py-4 text-left",children:"Example"})]})}),t.jsx("tbody",{className:"divide-y border-t",children:[{el:"Classes",conv:"PascalCase",ex:"UserService"},{el:"Interfaces",conv:"IPascalCase",ex:"IUserRepository"},{el:"Methods",conv:"PascalCaseAsync",ex:"GetListAsync"},{el:"Fields (Private)",conv:"_camelCase",ex:"_logger"},{el:"Parameters",conv:"camelCase",ex:"userId"}].map((r,i)=>t.jsxs("tr",{className:"hover:bg-accent/5 transition-colors",children:[t.jsx("td",{className:"px-6 py-4 font-semibold",children:r.el}),t.jsx("td",{className:"px-6 py-4",children:t.jsx(k,{variant:"outline",className:"bg-primary/5",children:r.conv})}),t.jsx("td",{className:"px-6 py-4 font-mono text-xs text-primary",children:r.ex})]},i))})]})})]}),t.jsx(I,{}),t.jsxs("section",{id:"organization",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"File and Project Organization"})]}),t.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[t.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest group-hover:text-blue-500/50 transition-colors",children:"Clean Architecture Structure"}),t.jsx("pre",{className:"leading-relaxed",children:`src/
├── Application/      # UseCases, DTOs, Handlers
│   ├── Common/
│   ├── Interfaces/
│   └── TodoItems/    # Feature-based folders
├── Domain/           # Entities, Value Objects
├── Infrastructure/   # Persistence, External Systems
└── WebApi/           # Controllers, Middleware`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"validation",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Validation & Error Handling"})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[t.jsx(tt,{className:"h-5 w-5 text-emerald-500"})," FluentValidation"]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Keep validation logic separate from your entities and commands."}),t.jsx(_,{language:"csharp",code:`public class CreateUserValidator : AbstractValidator<CreateUserCommand>
{
    public CreateUserValidator() {
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
    }
}`})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[t.jsx(nr,{className:"h-5 w-5 text-red-500"})," Global Exception Handling"]}),t.jsx("p",{className:"text-sm text-muted-foreground italic",children:"Use Exception Filters or Middleware to catch errors and return RFC-standard Problem Details."})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Guidelines"})]}),t.jsx("div",{className:"space-y-10",children:t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"Unit Testing (xUnit)"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Test business logic in isolation using Moq or NSubstitute."}),t.jsx(_,{language:"csharp",code:`[Fact]
public async Task Handle_ValidRequest_ShouldReturnId() {
    // Arrange, Act, Assert
}`})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"Integration Testing"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Test the whole ASP.NET Core stack using WebApplicationFactory and Respawn."})]})]})})]}),t.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[t.jsxs("div",{className:"relative z-10 space-y-6",children:[t.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),t.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these .NET standards ensures your application is robust, secure, and ready for production at AII."}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx(Re,{variant:"secondary",asChild:!0,children:t.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",t.jsx(bt,{className:"ml-2 h-4 w-4"})]})}),t.jsx(Re,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:t.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),t.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),t.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:t.jsxs("div",{className:"space-y-1 pb-12",children:[t.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),pm.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===r.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[t.jsx(r.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===r.id?"text-primary":"text-muted-foreground/40"}`}),r.title]},r.id))]})})]}),t.jsx("div",{className:"px-4 pb-8",children:t.jsx(vn,{previous:{title:"GitHub Workflow",href:"/github-axa-usage"},next:{title:"Java Development",href:"/java-developer-guideline"}})})]})},pe=p.forwardRef(({className:e,...s},n)=>t.jsx("div",{ref:n,className:ae("rounded-xl border bg-card text-card-foreground shadow",e),...s}));pe.displayName="Card";const ye=p.forwardRef(({className:e,...s},n)=>t.jsx("div",{ref:n,className:ae("flex flex-col space-y-1.5 p-6",e),...s}));ye.displayName="CardHeader";const ve=p.forwardRef(({className:e,...s},n)=>t.jsx("div",{ref:n,className:ae("font-semibold leading-none tracking-tight",e),...s}));ve.displayName="CardTitle";const ct=p.forwardRef(({className:e,...s},n)=>t.jsx("div",{ref:n,className:ae("text-sm text-muted-foreground",e),...s}));ct.displayName="CardDescription";const ge=p.forwardRef(({className:e,...s},n)=>t.jsx("div",{ref:n,className:ae("p-6 pt-0",e),...s}));ge.displayName="CardContent";const oA=p.forwardRef(({className:e,...s},n)=>t.jsx("div",{ref:n,className:ae("flex items-center p-6 pt-0",e),...s}));oA.displayName="CardFooter";const hm=[{id:"overview",title:"1. Project Overview",icon:ut},{id:"components",title:"2. Component Architecture",icon:Oe},{id:"state",title:"3. State Management",icon:De},{id:"hooks",title:"4. Hooks Best Practices",icon:mt},{id:"styling",title:"5. Styling Standards",icon:Pp},{id:"data-fetching",title:"6. Data Fetching",icon:Rt},{id:"forms",title:"7. Forms & Validation",icon:tt},{id:"testing",title:"8. Testing Standards",icon:rt},{id:"performance",title:"9. Performance",icon:Me},{id:"accessibility",title:"10. Accessibility",icon:O0}],lA=()=>{const[e,s]=p.useState("overview"),n=[{label:"Home",href:"/"},{label:"Frontend & Mobile"},{label:"React"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);s(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return hm.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:"React Development Guideline",subtitle:"Standardized practices for building modern, scalable, and maintainable frontend applications at AII.",breadcrumbs:n,readingTime:35}),t.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[t.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"}),t.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["React is our primary choice for building dynamic user interfaces. These guidelines ensure ",t.jsx("strong",{children:"consistency"}),", ",t.jsx("strong",{children:"performance"}),", and ",t.jsx("strong",{children:"accessibility"})," across all AII web projects."]})]}),t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"React 18+",icon:Yr},{text:"TypeScript (Strict)",icon:Mt},{text:"Vite Build Tool",icon:De},{text:"TanStack Query",icon:Rt},{text:"React Hook Form",icon:tt},{text:"Vitest + Testing Library",icon:rt}].map((r,i)=>t.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[t.jsx(r.icon,{className:"h-5 w-5 text-primary"}),t.jsx("span",{className:"font-semibold text-sm",children:r.text})]},i))}),t.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6",children:[t.jsxs("div",{className:"flex items-center gap-3 text-cyan-600",children:[t.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10",children:t.jsx(ce,{className:"h-6 w-6"})}),t.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),t.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first React project running at AII:"}),t.jsx("div",{className:"grid gap-4",children:[{step:"Install Node.js",desc:"Install Node.js 18+ LTS. Verify with: node --version"},{step:"Clone Repository",desc:"Clone the project repository and navigate to the project folder."},{step:"Install Dependencies",desc:"Run 'npm install' or 'pnpm install' to install all dependencies."},{step:"Setup IDE",desc:"Install VS Code with ESLint, Prettier, and TypeScript extensions."},{step:"Run Development Server",desc:"Execute 'npm run dev' to start the Vite development server."},{step:"Run Tests",desc:"Execute 'npm run test' to verify the project is stable."}].map((r,i)=>t.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[t.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-sm",children:i+1}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-foreground",children:r.step}),t.jsx("p",{className:"text-sm text-muted-foreground",children:r.desc})]})]},i))})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"components",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Component Architecture"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"We follow a functional component approach with strictly typed props and atomic design principles."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[t.jsx(Yr,{className:"h-5 w-5 text-cyan-500"})," Functional Components Only"]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Always prefer Functional Components with Hooks over Class Components. This leads to cleaner, more testable code."}),t.jsx(_,{language:"typescript",code:`// ✅ CORRECT: Functional component with typed props
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

export default UserProfile;`})]}),t.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[t.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"Project Structure"}),t.jsx("pre",{className:"leading-relaxed",children:`src/
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
└── styles/                    # Global styles and themes`})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ DO"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Use functional components"}),t.jsx("li",{children:"• Define explicit prop types"}),t.jsx("li",{children:"• Keep components focused (SRP)"}),t.jsx("li",{children:"• Extract reusable logic to hooks"}),t.jsx("li",{children:"• Use composition over inheritance"})]})]}),t.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ DON'T"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Use class components"}),t.jsx("li",{children:"• Use 'any' type for props"}),t.jsx("li",{children:"• Create god components (500+ lines)"}),t.jsx("li",{children:"• Duplicate logic across components"}),t.jsx("li",{children:"• Nest components too deeply"})]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"state",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"State Management"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Choose the right tool for the right job based on state scope and complexity."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"State Management Decision Tree"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-4 py-3 text-left",children:"State Type"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Solution"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"When to Use"})]})}),t.jsxs("tbody",{className:"divide-y",children:[t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Local UI State"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{children:"useState"})}),t.jsx("td",{className:"px-4 py-2",children:"Toggle, form inputs, modals"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Complex Local State"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{children:"useReducer"})}),t.jsx("td",{className:"px-4 py-2",children:"Multi-step forms, complex logic"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Server State"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"secondary",children:"TanStack Query"})}),t.jsx("td",{className:"px-4 py-2",children:"API data fetching, caching"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Global Client State"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"secondary",children:"Zustand"})}),t.jsx("td",{className:"px-4 py-2",children:"User preferences, app-wide settings"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Shared Context"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"Context API"})}),t.jsx("td",{className:"px-4 py-2",children:"Theme, auth, localization"})]})]})]})})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsx(_,{title:"Zustand Global Store",language:"typescript",code:`// stores/useAuthStore.ts
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
);`}),t.jsx(_,{title:"Context for Theme",language:"typescript",code:`// contexts/ThemeContext.tsx
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
};`})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"hooks",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Hooks Best Practices"})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"Custom Hook Pattern",language:"typescript",code:`// hooks/useDebounce.ts
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
};`}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-4",children:[t.jsx("h5",{className:"font-bold text-emerald-600",children:"✅ useEffect Best Practices"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-2",children:[t.jsx("li",{children:"• Always include dependencies"}),t.jsx("li",{children:"• Clean up subscriptions & timers"}),t.jsx("li",{children:"• Avoid async directly in useEffect"}),t.jsx("li",{children:"• Split unrelated effects"})]}),t.jsx(_,{language:"typescript",code:`// ✅ Correct: Async wrapper function
useEffect(() => {
  const fetchData = async () => {
    const result = await api.getUser(userId);
    setUser(result);
  };
  fetchData();
  
  return () => {
    // Cleanup if needed
  };
}, [userId]);`})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-4",children:[t.jsx("h5",{className:"font-bold text-destructive",children:"❌ Common Mistakes"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-2",children:[t.jsx("li",{children:"• Missing dependency array"}),t.jsx("li",{children:"• Objects/arrays in deps without memo"}),t.jsx("li",{children:"• Async function as effect callback"}),t.jsx("li",{children:"• Forgetting cleanup functions"})]}),t.jsx(_,{language:"typescript",code:`// ❌ WRONG: Async directly as callback
useEffect(async () => {
  const result = await api.getUser(userId);
  setUser(result);
}, [userId]); // This causes issues!`})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"styling",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Styling Standards"})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"Recommended Approaches"}),t.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:[{name:"Tailwind CSS",desc:"Utility-first, rapid prototyping",badge:"Primary"},{name:"CSS Modules",desc:"Scoped styles, traditional CSS",badge:"Alternative"},{name:"shadcn/ui",desc:"Accessible component library",badge:"Components"}].map((r,i)=>t.jsxs("div",{className:"p-4 rounded-xl bg-background border",children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("span",{className:"font-bold",children:r.name}),t.jsx(k,{variant:"outline",className:"text-xs",children:r.badge})]}),t.jsx("p",{className:"text-xs text-muted-foreground",children:r.desc})]},i))})]}),t.jsx(_,{title:"Component with Tailwind + cn() utility",language:"typescript",code:`// components/ui/Button.tsx
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
};`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"data-fetching",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Data Fetching"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"TanStack Query for server state management and data synchronization."})]}),t.jsx(_,{title:"TanStack Query Usage",language:"typescript",code:`// services/userService.ts
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
};`})]}),t.jsx(I,{}),t.jsxs("section",{id:"forms",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Forms & Validation"})]}),t.jsx(_,{title:"React Hook Form + Zod Validation",language:"typescript",code:`// schemas/userSchema.ts
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
};`})]}),t.jsx(I,{}),t.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Standards"})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsx(_,{title:"Component Testing",language:"typescript",code:`// components/Button.test.tsx
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
});`}),t.jsx(_,{title:"Hook Testing",language:"typescript",code:`// hooks/useCounter.test.tsx
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
});`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"performance",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Performance Optimization"})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(Me,{className:"h-5 w-5 text-emerald-500"})," Code Splitting"]})}),t.jsxs(ge,{className:"space-y-4",children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"Use React.lazy for route-level code splitting."}),t.jsx(_,{language:"typescript",code:`const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Suspense>
);`})]})]}),t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(De,{className:"h-5 w-5 text-yellow-500"})," Memoization"]})}),t.jsxs(ge,{className:"space-y-4",children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"Use useMemo and useCallback strategically."}),t.jsx(_,{language:"typescript",code:`const ExpensiveList = ({ items, filter }) => {
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
};`})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"accessibility",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Accessibility (a11y)"})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ CHECKLIST"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Use semantic HTML elements"}),t.jsx("li",{children:"• Add ARIA labels where needed"}),t.jsx("li",{children:"• Ensure keyboard navigation works"}),t.jsx("li",{children:"• Maintain focus management in modals"}),t.jsx("li",{children:"• Use sufficient color contrast"}),t.jsx("li",{children:"• Add alt text to all images"})]})]}),t.jsx("div",{className:"space-y-4",children:t.jsx(_,{language:"typescript",code:`// Accessible button with icon
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
</div>`})})]})]}),t.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[t.jsxs("div",{className:"relative z-10 space-y-6",children:[t.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),t.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these React standards ensures your frontend applications are performant, accessible, and maintainable."}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx(Re,{variant:"secondary",asChild:!0,children:t.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",t.jsx(bt,{className:"ml-2 h-4 w-4"})]})}),t.jsx(Re,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:t.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),t.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),t.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:t.jsxs("div",{className:"space-y-1 pb-12",children:[t.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),hm.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===r.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[t.jsx(r.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===r.id?"text-primary":"text-muted-foreground/40"}`}),r.title]},r.id))]})})]}),t.jsx("div",{className:"px-4 pb-8",children:t.jsx(vn,{previous:{title:".NET Development",href:"/dotnet-developer-guideline"},next:{title:"Flutter Development",href:"/flutter-developer-guideline"}})})]})},fm=[{id:"overview",title:"1. Project Overview",icon:ut},{id:"project-structure",title:"2. Project Structure",icon:Oe},{id:"spring-boot",title:"3. Spring Boot Standards",icon:De},{id:"rest-api",title:"4. REST API Design",icon:Ss},{id:"persistence",title:"5. Persistence & Database",icon:Rt},{id:"validation",title:"6. Validation & Errors",icon:tt},{id:"testing",title:"7. Testing Guidelines",icon:rt},{id:"logging",title:"8. Logging & Monitoring",icon:Me},{id:"maven",title:"9. Maven Build",icon:mt},{id:"naming",title:"10. Code Style & Naming",icon:Li}],cA=()=>{const[e,s]=p.useState("overview"),n=[{label:"Home",href:"/"},{label:"Backend Guidelines"},{label:"Java"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);s(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return fm.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:"Java Developer Guideline",subtitle:"Standardized practices for building robust and scalable backend services using Java, Spring Boot, and Maven at AII.",breadcrumbs:n}),t.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[t.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"}),t.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["Java is used for high-performance, enterprise-grade backend services at AII. We utilize ",t.jsx("strong",{children:"Spring Boot 3.x"})," with ",t.jsx("strong",{children:"Maven"})," to accelerate development while maintaining the highest code quality standards."]})]}),t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Java 17/21 LTS",icon:_i},{text:"Spring Boot 3.x",icon:De},{text:"Maven Build Tool",icon:mt},{text:"PostgreSQL / Oracle",icon:Rt},{text:"Spring Security + JWT",icon:hs},{text:"Micrometer Metrics",icon:Me}].map((r,i)=>t.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[t.jsx(r.icon,{className:"h-5 w-5 text-primary"}),t.jsx("span",{className:"font-semibold text-sm",children:r.text})]},i))}),t.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-orange-500/5 border border-orange-500/10 space-y-6",children:[t.jsxs("div",{className:"flex items-center gap-3 text-orange-500",children:[t.jsx("div",{className:"p-2 rounded-lg bg-orange-500/10",children:t.jsx(ce,{className:"h-6 w-6"})}),t.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),t.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first Java project running at AII:"}),t.jsx("div",{className:"grid gap-4",children:[{step:"Install JDK",desc:"Download and install JDK 17 or 21 LTS. Verify with: java -version"},{step:"Install Maven",desc:"Install Apache Maven 3.9+. Verify with: mvn -version"},{step:"Setup IDE",desc:"Install IntelliJ IDEA Ultimate (preferred) or VS Code with Java extensions."},{step:"Clone Template",desc:"Clone the AII Spring Boot starter template from the internal repository."},{step:"Build & Run",desc:"Execute 'mvn spring-boot:run' to start the application locally."},{step:"Run Tests",desc:"Execute 'mvn test' to verify the baseline project is stable."}].map((r,i)=>t.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[t.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-sm",children:i+1}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-foreground",children:r.step}),t.jsx("p",{className:"text-sm text-muted-foreground",children:r.desc})]})]},i))})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"project-structure",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Structure (Maven)"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Standard Maven project layout for all AII Java applications."})]}),t.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[t.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"Maven Standard Layout"}),t.jsx("pre",{className:"leading-relaxed",children:`project-root/
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
└── target/                               # Build output (gitignored)`})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[t.jsx(Oe,{className:"h-5 w-5"})," Layer Responsibilities"]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6 text-sm",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Controller Layer"}),": REST endpoints, request validation, response mapping."]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Service Layer"}),": Business logic, transaction management, orchestration."]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Repository Layer"}),": Data access, JPA queries, database operations."]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Model/DTO Layer"}),": Entities for persistence, DTOs for API contracts."]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"spring-boot",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Spring Boot Standards"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Core patterns and best practices for Spring Boot development."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[t.jsx(De,{className:"h-5 w-5 text-yellow-500"})," Dependency Injection"]}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Always use ",t.jsx("strong",{children:"Constructor Injection"})," with Lombok's @RequiredArgsConstructor for cleaner code."]}),t.jsx(_,{language:"java",code:`@Service
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
}`})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[t.jsx(mt,{className:"h-5 w-5 text-emerald-500"})," Configuration Properties"]}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Use ",t.jsx("code",{children:"@ConfigurationProperties"})," for type-safe configuration binding."]}),t.jsx(_,{language:"java",code:`@Configuration
@ConfigurationProperties(prefix = "app.jwt")
@Validated
public class JwtProperties {
    
    @NotBlank
    private String secret;
    
    @Positive
    private long expirationMs = 86400000; // 24 hours default
    
    // Getters and setters
}`})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ DO"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Use constructor injection"}),t.jsx("li",{children:"• Prefer @ConfigurationProperties"}),t.jsx("li",{children:"• Use profiles for environments"}),t.jsx("li",{children:"• Enable actuator endpoints"})]})]}),t.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ DON'T"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Use @Autowired on fields"}),t.jsx("li",{children:"• Hardcode configuration values"}),t.jsx("li",{children:"• Mix @Component with @Bean"}),t.jsx("li",{children:"• Ignore Spring profiles"})]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"rest-api",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"REST API Design"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Standards for building consistent and maintainable REST APIs."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"Standard Controller Pattern",language:"java",code:`@RestController
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
}`}),t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"API Naming Conventions"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-4 py-3 text-left",children:"HTTP Method"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Path"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Purpose"})]})}),t.jsxs("tbody",{className:"divide-y",children:[t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-mono",children:"GET"}),t.jsx("td",{className:"px-4 py-2",children:"/api/v1/resources"}),t.jsx("td",{className:"px-4 py-2",children:"List all resources"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-mono",children:"GET"}),t.jsxs("td",{className:"px-4 py-2",children:["/api/v1/resources/","{id}"]}),t.jsx("td",{className:"px-4 py-2",children:"Get single resource"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-mono",children:"POST"}),t.jsx("td",{className:"px-4 py-2",children:"/api/v1/resources"}),t.jsx("td",{className:"px-4 py-2",children:"Create resource"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-mono",children:"PUT"}),t.jsxs("td",{className:"px-4 py-2",children:["/api/v1/resources/","{id}"]}),t.jsx("td",{className:"px-4 py-2",children:"Update resource"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-mono",children:"DELETE"}),t.jsxs("td",{className:"px-4 py-2",children:["/api/v1/resources/","{id}"]}),t.jsx("td",{className:"px-4 py-2",children:"Delete resource"})]})]})]})})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"persistence",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Persistence & Database"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"JPA/Hibernate best practices and database access patterns."})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-xl font-bold",children:"Entity Design"}),t.jsx(_,{language:"java",code:`@Entity
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
}`})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-xl font-bold",children:"Repository Pattern"}),t.jsx(_,{language:"java",code:`public interface UserRepository 
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
}`})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[t.jsx(Rt,{className:"h-5 w-5 text-blue-500"})," Database Migrations (Flyway)"]}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Use Flyway for version-controlled database migrations. Place scripts in ",t.jsx("code",{children:"src/main/resources/db/migration/"})]}),t.jsx(_,{title:"V1__Create_users_table.sql",language:"sql",code:`-- Flyway migration: V1__Create_users_table.sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"validation",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Validation & Error Handling"})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[t.jsx(tt,{className:"h-5 w-5 text-emerald-500"})," Jakarta Validation"]}),t.jsx(_,{language:"java",code:`public record CreateUserRequest(
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    String email,
    
    @NotBlank(message = "Password is required")
    @Size(min = 8, max = 100, 
          message = "Password must be 8-100 characters")
    String password,
    
    @NotNull(message = "Role is required")
    UserRole role
) {}`})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[t.jsx(nr,{className:"h-5 w-5 text-red-500"})," Global Exception Handler"]}),t.jsx(_,{language:"java",code:`@RestControllerAdvice
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
}`})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Guidelines"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Comprehensive testing with JUnit 5, Mockito, and TestContainers."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"Test Naming Convention"}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Follow the pattern: ",t.jsx("code",{className:"text-primary",children:"methodName_Scenario_ExpectedBehavior"})]}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(k,{variant:"outline",className:"font-mono text-xs",children:"createUser_ValidRequest_ReturnsCreatedUser"}),t.jsx(k,{variant:"outline",className:"font-mono text-xs",children:"findById_NonExistentId_ThrowsNotFoundException"})]})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-xl font-bold",children:"Unit Testing with Mockito"}),t.jsx(_,{language:"java",code:`@ExtendWith(MockitoExtension.class)
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
}`})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-xl font-bold",children:"Integration Testing"}),t.jsx(_,{language:"java",code:`@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
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
}`})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"logging",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Logging & Monitoring"})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx($t,{className:"h-5 w-5 text-emerald-500"})," Structured Logging"]})}),t.jsxs(ge,{className:"space-y-4",children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"Use SLF4J with Logback for consistent, structured logging."}),t.jsx(_,{language:"java",code:`@Slf4j
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
}`})]})]}),t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(Me,{className:"h-5 w-5 text-blue-500"})," Actuator Endpoints"]})}),t.jsxs(ge,{className:"space-y-4",children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"Enable Spring Boot Actuator for health checks and metrics."}),t.jsx(_,{language:"yaml",code:`# application.yml
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
      application: \${spring.application.name}`})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"maven",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Maven Build Configuration"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Standard Maven pom.xml configuration for AII Java projects."})]}),t.jsx(_,{title:"pom.xml",language:"xml",code:`<?xml version="1.0" encoding="UTF-8"?>
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
</project>`}),t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"Common Maven Commands"}),t.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:[{cmd:"mvn clean install",desc:"Build and install to local repo"},{cmd:"mvn spring-boot:run",desc:"Run application"},{cmd:"mvn test",desc:"Run unit tests"},{cmd:"mvn verify",desc:"Run all tests including integration"},{cmd:"mvn dependency:tree",desc:"Show dependency tree"},{cmd:"mvn versions:display-dependency-updates",desc:"Check for updates"}].map((r,i)=>t.jsxs("div",{className:"flex gap-3 p-3 rounded-lg bg-background border",children:[t.jsx("code",{className:"text-xs font-mono text-primary whitespace-nowrap",children:r.cmd}),t.jsx("span",{className:"text-xs text-muted-foreground",children:r.desc})]},i))})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"naming",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Style & Naming Conventions"})]}),t.jsx("div",{className:"overflow-x-auto rounded-3xl border glass",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-6 py-4 text-left",children:"Element"}),t.jsx("th",{className:"px-6 py-4 text-left",children:"Convention"}),t.jsx("th",{className:"px-6 py-4 text-left",children:"Example"})]})}),t.jsx("tbody",{className:"divide-y border-t",children:[{el:"Classes",conv:"PascalCase",ex:"UserService"},{el:"Interfaces",conv:"PascalCase",ex:"UserRepository"},{el:"Methods",conv:"camelCase",ex:"findByEmail"},{el:"Variables",conv:"camelCase",ex:"userName"},{el:"Constants",conv:"SCREAMING_SNAKE_CASE",ex:"MAX_RETRY_COUNT"},{el:"Packages",conv:"lowercase",ex:"com.axa.aii.service"},{el:"Enums",conv:"PascalCase",ex:"UserStatus"},{el:"Enum Values",conv:"SCREAMING_SNAKE_CASE",ex:"ACTIVE, INACTIVE"}].map((r,i)=>t.jsxs("tr",{className:"hover:bg-accent/5 transition-colors",children:[t.jsx("td",{className:"px-6 py-4 font-semibold",children:r.el}),t.jsx("td",{className:"px-6 py-4",children:t.jsx(k,{variant:"outline",className:"bg-primary/5",children:r.conv})}),t.jsx("td",{className:"px-6 py-4 font-mono text-xs text-primary",children:r.ex})]},i))})]})}),t.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4",children:[t.jsx(Mt,{className:"h-6 w-6 text-primary shrink-0"}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"font-bold text-primary",children:"Google Java Style Guide"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"AII follows the Google Java Style Guide. Configure your IDE with the provided Checkstyle configuration file."})]})]})]}),t.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[t.jsxs("div",{className:"relative z-10 space-y-6",children:[t.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),t.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these Java standards ensures your application is robust, secure, and ready for production at AII."}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx(Re,{variant:"secondary",asChild:!0,children:t.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",t.jsx(bt,{className:"ml-2 h-4 w-4"})]})}),t.jsx(Re,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:t.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),t.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),t.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:t.jsxs("div",{className:"space-y-1 pb-12",children:[t.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),fm.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===r.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[t.jsx(r.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===r.id?"text-primary":"text-muted-foreground/40"}`}),r.title]},r.id))]})})]})]})},xm=[{id:"overview",title:"1. Project Overview",icon:ut},{id:"project-structure",title:"2. Project Structure",icon:Oe},{id:"fastapi",title:"3. FastAPI Standards",icon:De},{id:"pydantic",title:"4. Pydantic Validation",icon:tt},{id:"database",title:"5. Database Access",icon:Rt},{id:"ai-integration",title:"6. AI/ML Integration",icon:Sp},{id:"testing",title:"7. Testing Standards",icon:rt},{id:"code-style",title:"8. Code Style",icon:Li},{id:"error-handling",title:"9. Error Handling",icon:nr},{id:"deployment",title:"10. Deployment",icon:Ss}],dA=()=>{const[e,s]=p.useState("overview"),n=[{label:"Home",href:"/"},{label:"Backend Guidelines"},{label:"Python"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);s(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return xm.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:"Python & AI Guideline",subtitle:"Standardized practices for AI integration, data processing, and FastAPI development at AII.",breadcrumbs:n}),t.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[t.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"}),t.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["Python is our go-to language for ",t.jsx("strong",{children:"AI/ML"}),", ",t.jsx("strong",{children:"data processing"}),", and ",t.jsx("strong",{children:"rapid API development"}),". We focus on readability, strict type hints, and efficient data processing pipelines."]})]}),t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Python 3.10+",icon:$t},{text:"FastAPI Framework",icon:De},{text:"Pydantic v2",icon:tt},{text:"SQLAlchemy 2.0",icon:Rt},{text:"PyTorch / TensorFlow",icon:Sp},{text:"Poetry / pip",icon:mt}].map((r,i)=>t.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[t.jsx(r.icon,{className:"h-5 w-5 text-primary"}),t.jsx("span",{className:"font-semibold text-sm",children:r.text})]},i))}),t.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-yellow-500/5 border border-yellow-500/10 space-y-6",children:[t.jsxs("div",{className:"flex items-center gap-3 text-yellow-600",children:[t.jsx("div",{className:"p-2 rounded-lg bg-yellow-500/10",children:t.jsx(ce,{className:"h-6 w-6"})}),t.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),t.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first Python project running at AII:"}),t.jsx("div",{className:"grid gap-4",children:[{step:"Install Python",desc:"Install Python 3.10+ via pyenv or your package manager. Verify with: python --version"},{step:"Create Virtual Environment",desc:"Run 'python -m venv .venv' and activate with 'source .venv/bin/activate'"},{step:"Install Dependencies",desc:"Run 'pip install -r requirements.txt' or 'poetry install' for the project."},{step:"Setup IDE",desc:"Install VS Code with Python extension or PyCharm Professional."},{step:"Run Application",desc:"Execute 'uvicorn app.main:app --reload' to start the FastAPI server."},{step:"Run Tests",desc:"Execute 'pytest' to verify the baseline project is stable."}].map((r,i)=>t.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[t.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-600 flex items-center justify-center font-bold text-sm",children:i+1}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-foreground",children:r.step}),t.jsx("p",{className:"text-sm text-muted-foreground",children:r.desc})]})]},i))})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"project-structure",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Structure"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Standard project layout for all AII Python applications."})]}),t.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[t.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"FastAPI Project Layout"}),t.jsx("pre",{className:"leading-relaxed",children:`project-root/
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
└── Dockerfile`})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[t.jsx(Oe,{className:"h-5 w-5"})," Layer Responsibilities"]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6 text-sm",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"API Layer"}),": Route handlers, request/response handling, dependency injection."]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Services Layer"}),": Business logic, data transformation, orchestration."]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Models Layer"}),": SQLAlchemy ORM models for database entities."]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Schemas Layer"}),": Pydantic models for validation and serialization."]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"fastapi",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"FastAPI Standards"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Core patterns for building high-performance APIs with FastAPI."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[t.jsx(De,{className:"h-5 w-5 text-yellow-500"})," Router Organization"]}),t.jsx(_,{language:"python",code:`# app/api/v1/endpoints/users.py
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
    return await service.create(user_data)`})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[t.jsx(mt,{className:"h-5 w-5 text-emerald-500"})," Dependency Injection"]}),t.jsx(_,{language:"python",code:`# app/api/deps.py
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
    ...`})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"pydantic",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Pydantic Validation"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Type-safe data validation and serialization with Pydantic v2."})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-xl font-bold",children:"Schema Design"}),t.jsx(_,{language:"python",code:`# app/schemas/user.py
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
    
    model_config = {"from_attributes": True}`})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-xl font-bold",children:"Settings Management"}),t.jsx(_,{language:"python",code:`# app/config.py
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
    return Settings()`})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"database",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Database Access"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"SQLAlchemy 2.0 with async support and Alembic migrations."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"SQLAlchemy Model",language:"python",code:`# app/models/user.py
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
    )`}),t.jsx(_,{title:"Async Database Session",language:"python",code:`# app/db/session.py
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
)`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"ai-integration",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"AI/ML Integration"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Patterns for integrating machine learning models into FastAPI services."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"Model Loading Pattern",language:"python",code:`# app/ml/model_manager.py
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
    return ModelManager()`}),t.jsx(_,{title:"ML Inference Endpoint",language:"python",code:`# app/api/v1/endpoints/predictions.py
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
    return PredictionResponse(**result)`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Standards"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Comprehensive testing with pytest and TestClient."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"Test Naming Convention"}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Follow the pattern: ",t.jsx("code",{className:"text-primary",children:"test_functionname_scenario_expected"})]}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(k,{variant:"outline",className:"font-mono text-xs",children:"test_create_user_valid_data_returns_201"}),t.jsx(k,{variant:"outline",className:"font-mono text-xs",children:"test_get_user_not_found_returns_404"})]})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsx(_,{title:"Pytest Fixtures",language:"python",code:`# tests/conftest.py
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
        yield ac`}),t.jsx(_,{title:"API Tests",language:"python",code:`# tests/test_users.py
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
    assert "password" not in data  # Never expose`})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"code-style",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Style & Formatting"})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ MANDATORY"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Type hints on all functions"}),t.jsx("li",{children:"• Black formatter (line length 88)"}),t.jsx("li",{children:"• Ruff for linting"}),t.jsx("li",{children:"• Docstrings on public functions"}),t.jsx("li",{children:"• PEP 8 naming conventions"})]})]}),t.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ AVOID"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Any type without justification"}),t.jsx("li",{children:"• Functions longer than 50 lines"}),t.jsx("li",{children:"• Star imports (from x import *)"}),t.jsx("li",{children:"• Magic numbers without constants"}),t.jsx("li",{children:"• Global mutable state"})]})]})]}),t.jsx("div",{className:"overflow-x-auto rounded-3xl border glass",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-6 py-4 text-left",children:"Element"}),t.jsx("th",{className:"px-6 py-4 text-left",children:"Convention"}),t.jsx("th",{className:"px-6 py-4 text-left",children:"Example"})]})}),t.jsx("tbody",{className:"divide-y border-t",children:[{el:"Modules",conv:"snake_case",ex:"user_service.py"},{el:"Classes",conv:"PascalCase",ex:"UserService"},{el:"Functions",conv:"snake_case",ex:"get_user_by_id"},{el:"Variables",conv:"snake_case",ex:"user_count"},{el:"Constants",conv:"SCREAMING_SNAKE_CASE",ex:"MAX_RETRIES"},{el:"Private",conv:"_leading_underscore",ex:"_internal_method"}].map((r,i)=>t.jsxs("tr",{className:"hover:bg-accent/5 transition-colors",children:[t.jsx("td",{className:"px-6 py-4 font-semibold",children:r.el}),t.jsx("td",{className:"px-6 py-4",children:t.jsx(k,{variant:"outline",className:"bg-primary/5",children:r.conv})}),t.jsx("td",{className:"px-6 py-4 font-mono text-xs text-primary",children:r.ex})]},i))})]})}),t.jsx(_,{title:"pyproject.toml - Tooling Configuration",language:"toml",code:`[tool.black]
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
warn_return_any = true`})]}),t.jsx(I,{}),t.jsxs("section",{id:"error-handling",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Error Handling"})]}),t.jsx(_,{title:"Custom Exception Hierarchy",language:"python",code:`# app/core/exceptions.py
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
    )`})]}),t.jsx(I,{}),t.jsxs("section",{id:"deployment",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Deployment"})]}),t.jsx(_,{title:"Dockerfile",language:"dockerfile",code:`# Multi-stage build for optimized image
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

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`}),t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"Common Commands"}),t.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:[{cmd:"uvicorn app.main:app --reload",desc:"Run dev server"},{cmd:"pytest -v --cov=app",desc:"Run tests with coverage"},{cmd:"alembic upgrade head",desc:"Apply migrations"},{cmd:"alembic revision --autogenerate",desc:"Create migration"},{cmd:"black . && ruff check .",desc:"Format and lint"},{cmd:"mypy app/",desc:"Type checking"}].map((r,i)=>t.jsxs("div",{className:"flex gap-3 p-3 rounded-lg bg-background border",children:[t.jsx("code",{className:"text-xs font-mono text-primary whitespace-nowrap",children:r.cmd}),t.jsx("span",{className:"text-xs text-muted-foreground",children:r.desc})]},i))})]})]}),t.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[t.jsxs("div",{className:"relative z-10 space-y-6",children:[t.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),t.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these Python standards ensures your AI/ML services and APIs are robust, maintainable, and production-ready."}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx(Re,{variant:"secondary",asChild:!0,children:t.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",t.jsx(bt,{className:"ml-2 h-4 w-4"})]})}),t.jsx(Re,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:t.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),t.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),t.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:t.jsxs("div",{className:"space-y-1 pb-12",children:[t.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),xm.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===r.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[t.jsx(r.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===r.id?"text-primary":"text-muted-foreground/40"}`}),r.title]},r.id))]})})]})]})},gm=[{id:"overview",title:"1. Project Overview",icon:ut},{id:"project-structure",title:"2. Project Structure",icon:Mj},{id:"state-management",title:"3. State Management",icon:De},{id:"ui-ux",title:"4. UI/UX Standards",icon:Pp},{id:"navigation",title:"5. Navigation",icon:Rp},{id:"api-integration",title:"6. API Integration",icon:Rt},{id:"local-storage",title:"7. Local Storage",icon:hs},{id:"testing",title:"8. Testing",icon:rt},{id:"performance",title:"9. Performance",icon:Me},{id:"naming",title:"10. Code Style",icon:Li}],uA=()=>{const[e,s]=p.useState("overview"),n=[{label:"Home",href:"/"},{label:"Frontend & Mobile"},{label:"Flutter"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);s(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return gm.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:"Flutter Mobile Guideline",subtitle:"Standardized practices for building cross-platform mobile applications with Flutter and Dart at AII.",breadcrumbs:n}),t.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[t.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Overview"}),t.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["Flutter allows us to maintain a ",t.jsx("strong",{children:"single codebase"})," for both iOS and Android while ensuring high-quality, native performance and premium UI/UX experiences."]})]}),t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Flutter 3.x",icon:Bi},{text:"Dart 3.x",icon:De},{text:"Riverpod / BLoC",icon:Oe},{text:"Dio HTTP Client",icon:Rt},{text:"GoRouter Navigation",icon:Rp},{text:"Hive / SharedPrefs",icon:hs}].map((r,i)=>t.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[t.jsx(r.icon,{className:"h-5 w-5 text-primary"}),t.jsx("span",{className:"font-semibold text-sm",children:r.text})]},i))}),t.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6",children:[t.jsxs("div",{className:"flex items-center gap-3 text-blue-500",children:[t.jsx("div",{className:"p-2 rounded-lg bg-blue-500/10",children:t.jsx(ce,{className:"h-6 w-6"})}),t.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),t.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get your first Flutter project running at AII:"}),t.jsx("div",{className:"grid gap-4",children:[{step:"Install Flutter SDK",desc:"Download Flutter SDK 3.x and add to PATH. Verify with: flutter doctor"},{step:"Setup IDE",desc:"Install VS Code with Flutter/Dart extensions or Android Studio with Flutter plugin."},{step:"Setup Emulators",desc:"Configure Android emulator and/or iOS Simulator (macOS required for iOS)."},{step:"Clone Repository",desc:"Clone the project repository and navigate to the project folder."},{step:"Get Dependencies",desc:"Run 'flutter pub get' to install all package dependencies."},{step:"Run Application",desc:"Execute 'flutter run' to launch the app on your connected device/emulator."}].map((r,i)=>t.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[t.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm",children:i+1}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-foreground",children:r.step}),t.jsx("p",{className:"text-sm text-muted-foreground",children:r.desc})]})]},i))})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"project-structure",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Project Structure"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Feature-based folder organization following Clean Architecture principles."})]}),t.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400 group relative",children:[t.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"Clean Architecture Layout"}),t.jsx("pre",{className:"leading-relaxed",children:`lib/
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
    └── app_router.dart           # GoRouter configuration`})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[t.jsx(Oe,{className:"h-5 w-5"})," Clean Architecture Layers"]}),t.jsxs("div",{className:"grid md:grid-cols-3 gap-6 text-sm",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("p",{children:t.jsx("strong",{children:"Presentation"})}),t.jsx("p",{className:"text-muted-foreground",children:"UI (Pages, Widgets), State Management (BLoC/Riverpod)"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("p",{children:t.jsx("strong",{children:"Domain"})}),t.jsx("p",{className:"text-muted-foreground",children:"Entities, Use Cases, Repository Interfaces"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("p",{children:t.jsx("strong",{children:"Data"})}),t.jsx("p",{className:"text-muted-foreground",children:"Models, Data Sources, Repository Implementations"})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"state-management",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"State Management"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"We primarily use Riverpod or BLoC depending on team preference and project complexity."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"When to Use Which?"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-4 py-3 text-left",children:"Solution"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Best For"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Complexity"})]})}),t.jsxs("tbody",{className:"divide-y",children:[t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Riverpod"}),t.jsx("td",{className:"px-4 py-2",children:"Most projects, compile-time safety"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"secondary",children:"Medium"})})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"BLoC"}),t.jsx("td",{className:"px-4 py-2",children:"Complex apps, strict separation"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"secondary",children:"High"})})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Provider"}),t.jsx("td",{className:"px-4 py-2",children:"Simple apps, quick prototypes"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"Low"})})]})]})]})})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsx(_,{title:"Riverpod Provider Example",language:"dart",code:`// providers/auth_provider.dart
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
}`}),t.jsx(_,{title:"BLoC Pattern Example",language:"dart",code:`// bloc/auth_bloc.dart
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
)`})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"ui-ux",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"UI/UX Standards"})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"Theme Configuration",language:"dart",code:`// core/theme/app_theme.dart
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
}`}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Widget Best Practices"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Use const constructors wherever possible"}),t.jsx("li",{children:"• Extract widgets into separate files"}),t.jsx("li",{children:"• Use MediaQuery for responsive layouts"}),t.jsx("li",{children:"• Prefer SizedBox over Container for spacing"}),t.jsx("li",{children:"• Use CustomScrollView for complex scrolling"})]})]}),t.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Avoid"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Deep widget nesting (3+ levels)"}),t.jsx("li",{children:"• Hardcoded colors/dimensions"}),t.jsx("li",{children:"• setState in deeply nested widgets"}),t.jsx("li",{children:"• Heavy computation in build()"}),t.jsx("li",{children:"• Ignoring platform differences"})]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"navigation",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Navigation"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Use GoRouter for declarative routing with deep linking support."})]}),t.jsx(_,{title:"GoRouter Configuration",language:"dart",code:`// router/app_router.dart
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
context.goNamed('product-detail', pathParameters: {'id': '456'});`})]}),t.jsx(I,{}),t.jsxs("section",{id:"api-integration",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"API Integration"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Dio HTTP client with interceptors for authentication and error handling."})]}),t.jsx(_,{title:"Dio Client Configuration",language:"dart",code:`// core/network/dio_client.dart
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
}`})]}),t.jsx(I,{}),t.jsxs("section",{id:"local-storage",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Local Storage"})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsxs(ye,{children:[t.jsx(ve,{className:"text-lg",children:"SharedPreferences"}),t.jsx(ct,{children:"Simple key-value storage"})]}),t.jsx(ge,{children:t.jsx(_,{language:"dart",code:`// For simple settings and flags
final prefs = await SharedPreferences.getInstance();
await prefs.setString('theme', 'dark');
await prefs.setBool('onboarding_complete', true);

final theme = prefs.getString('theme') ?? 'light';`})})]}),t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsxs(ye,{children:[t.jsx(ve,{className:"text-lg",children:"Hive / Isar"}),t.jsx(ct,{children:"Structured data & offline cache"})]}),t.jsx(ge,{children:t.jsx(_,{language:"dart",code:`// For complex objects and offline data
@HiveType(typeId: 0)
class User extends HiveObject {
  @HiveField(0)
  late String id;
  @HiveField(1)
  late String name;
}

final box = Hive.box<User>('users');
await box.put('current', user);`})})]})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4",children:[t.jsx(hs,{className:"h-6 w-6 text-primary shrink-0"}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"font-bold text-primary",children:"Secure Storage"}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["For sensitive data like tokens and credentials, always use ",t.jsx("code",{children:"flutter_secure_storage"})," which encrypts data using platform-specific secure storage (Keychain on iOS, EncryptedSharedPreferences on Android)."]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing"})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsx(_,{title:"Widget Testing",language:"dart",code:`// test/widgets/login_button_test.dart
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
}`}),t.jsx(_,{title:"Unit Testing with Mocktail",language:"dart",code:`// test/services/auth_service_test.dart
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
}`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"performance",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Performance"})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Optimization Tips"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Use const constructors liberally"}),t.jsx("li",{children:"• Implement ListView.builder for long lists"}),t.jsx("li",{children:"• Cache network images (cached_network_image)"}),t.jsx("li",{children:"• Use RepaintBoundary for complex widgets"}),t.jsx("li",{children:"• Avoid rebuilds with Selector/Consumer"}),t.jsx("li",{children:"• Profile with Flutter DevTools"})]})]}),t.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Performance Killers"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Building all children at once (ListView)"}),t.jsx("li",{children:"• Unoptimized images (size, format)"}),t.jsx("li",{children:"• Blocking the main isolate"}),t.jsx("li",{children:"• Excessive setState calls"}),t.jsx("li",{children:"• Memory leaks from streams"})]})]})]}),t.jsx(_,{title:"Efficient List Building",language:"dart",code:`// ❌ WRONG: All items built at once
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
)`})]}),t.jsx(I,{}),t.jsxs("section",{id:"naming",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Style & Naming"})]}),t.jsx("div",{className:"overflow-x-auto rounded-3xl border glass",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-6 py-4 text-left",children:"Element"}),t.jsx("th",{className:"px-6 py-4 text-left",children:"Convention"}),t.jsx("th",{className:"px-6 py-4 text-left",children:"Example"})]})}),t.jsx("tbody",{className:"divide-y border-t",children:[{el:"Files",conv:"snake_case",ex:"user_service.dart"},{el:"Classes",conv:"PascalCase",ex:"UserService"},{el:"Functions",conv:"camelCase",ex:"getUserById"},{el:"Variables",conv:"camelCase",ex:"userName"},{el:"Constants",conv:"camelCase",ex:"defaultTimeout"},{el:"Private",conv:"_leadingUnderscore",ex:"_internalMethod"},{el:"Widgets",conv:"PascalCase",ex:"UserProfileCard"}].map((r,i)=>t.jsxs("tr",{className:"hover:bg-accent/5 transition-colors",children:[t.jsx("td",{className:"px-6 py-4 font-semibold",children:r.el}),t.jsx("td",{className:"px-6 py-4",children:t.jsx(k,{variant:"outline",className:"bg-primary/5",children:r.conv})}),t.jsx("td",{className:"px-6 py-4 font-mono text-xs text-primary",children:r.ex})]},i))})]})}),t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"Common Flutter Commands"}),t.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:[{cmd:"flutter run",desc:"Run app on device"},{cmd:"flutter test",desc:"Run all tests"},{cmd:"flutter analyze",desc:"Analyze code"},{cmd:"flutter pub get",desc:"Get dependencies"},{cmd:"flutter build apk",desc:"Build Android APK"},{cmd:"flutter build ios",desc:"Build iOS app"}].map((r,i)=>t.jsxs("div",{className:"flex gap-3 p-3 rounded-lg bg-background border",children:[t.jsx("code",{className:"text-xs font-mono text-primary whitespace-nowrap",children:r.cmd}),t.jsx("span",{className:"text-xs text-muted-foreground",children:r.desc})]},i))})]})]}),t.jsxs("section",{id:"conclusion",className:"p-12 rounded-[2.5rem] bg-primary text-primary-foreground border-none relative overflow-hidden",children:[t.jsxs("div",{className:"relative z-10 space-y-6",children:[t.jsx("h2",{className:"text-3xl font-bold",children:"Ready to Build?"}),t.jsx("p",{className:"opacity-80 max-w-2xl",children:"Following these Flutter standards ensures your mobile applications are performant, maintainable, and deliver a premium user experience."}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx(Re,{variant:"secondary",asChild:!0,children:t.jsxs("a",{href:"/github-axa-usage",children:["GitHub Workflow ",t.jsx(bt,{className:"ml-2 h-4 w-4"})]})}),t.jsx(Re,{variant:"outline",className:"bg-white/10 border-white/20 hover:bg-white/20",asChild:!0,children:t.jsx("a",{href:"/coding-standard",children:"Global Standards"})})]})]}),t.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"})]})]}),t.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:t.jsxs("div",{className:"space-y-1 pb-12",children:[t.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),gm.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===r.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[t.jsx(r.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===r.id?"text-primary":"text-muted-foreground/40"}`}),r.title]},r.id))]})})]})]})},ym=[{id:"core-concept",title:"1. Core Concept",icon:Oe},{id:"layers",title:"2. Layer Responsibilities",icon:mt},{id:"dependency-rule",title:"3. The Dependency Rule",icon:tt},{id:"hexagonal",title:"4. Hexagonal (Ports & Adapters)",icon:Dp},{id:"onion",title:"5. Onion Architecture",icon:Bj},{id:"implementation",title:"6. Practical Implementation",icon:Vs},{id:"testing",title:"7. Testing the Layers",icon:rt}],mA=()=>{const[e,s]=p.useState("core-concept"),n=[{label:"Home",href:"/"},{label:"Architecture & Standards"},{label:"Clean Architecture"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio?c:l);s(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return ym.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:"Clean Architecture Standards",subtitle:"Creating systems that are independent of frameworks, UI, and databases while being highly testable.",breadcrumbs:n,readingTime:40}),t.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-20 pb-16",children:[t.jsxs("section",{id:"core-concept",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Core Concept"}),t.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["The primary goal of Clean Architecture is the ",t.jsx("strong",{children:"separation of concerns"}),". By keeping the business logic independent of external agencies like databases and UI, we create systems that are easier to maintain and test."]})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsx("div",{className:"space-y-6",children:t.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-3",children:[t.jsxs("h4",{className:"font-bold text-lg flex items-center gap-2 text-primary",children:[t.jsx(ce,{className:"h-5 w-5"}),"Key Characteristics"]}),t.jsxs("ul",{className:"text-sm space-y-3 text-muted-foreground",children:[t.jsxs("li",{children:["• ",t.jsx("strong",{children:"Independent of Frameworks:"})," Use frameworks as tools, don't build your logic around them."]}),t.jsxs("li",{children:["• ",t.jsx("strong",{children:"Testable:"})," Business rules can be tested without the UI, Database, or any external element."]}),t.jsxs("li",{children:["• ",t.jsx("strong",{children:"Independent of UI:"})," Changing the web UI shouldn't require changing the business rules."]}),t.jsxs("li",{children:["• ",t.jsx("strong",{children:"Independent of Database:"})," Switch from SQL Server to MongoDB with minimal impact on logic."]})]})]})}),t.jsxs("div",{className:"relative aspect-square flex items-center justify-center p-8 bg-slate-900 rounded-3xl overflow-hidden border border-slate-700",children:[t.jsx("div",{className:"absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent animate-pulse"}),t.jsxs("div",{className:"z-10 text-center space-y-2 font-mono",children:[t.jsx("div",{className:"w-56 h-56 rounded-full border-2 border-indigo-500 flex items-center justify-center",children:t.jsx("div",{className:"w-40 h-40 rounded-full border-2 border-blue-400 flex items-center justify-center",children:t.jsx("div",{className:"w-24 h-24 rounded-full border-2 border-emerald-400 flex items-center justify-center",children:t.jsx("span",{className:"text-emerald-400 text-xs font-bold",children:"Domain"})})})}),t.jsx("span",{className:"text-[10px] text-slate-500 block uppercase pt-4",children:"Inward Dependency Rule"})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"layers",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Layer Responsibilities"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Standardized definition of what goes into each architectural layer."})]}),t.jsx("div",{className:"grid gap-6",children:[{name:"Entities (Domain)",color:"emerald",desc:"Business objects and enterprise-wide rules. No dependencies on anything else.",items:["Value Objects","Aggregates","Domain Services","Domain Events"]},{name:"Use Cases (Application)",color:"blue",desc:"Application-specific business rules. Orchestrates flow of data to and from entities.",items:["Command/Query Handlers","DTOs","Mappers","Ports/Interfaces"]},{name:"Interface Adapters",color:"indigo",desc:"Converts data between use cases and external formats.",items:["Controllers","Presenters","Repository Implementations","Gateways"]},{name:"Frameworks & Drivers",color:"slate",desc:"External tools like DB, UI, Devices, Frameworks.",items:["Database (EF Core/JPA)","HTTP Client","File System","External APIs"]}].map((r,i)=>t.jsxs("div",{className:"flex gap-6 p-8 rounded-3xl border border-border bg-background/50 hover:border-primary/30 transition-all group",children:[t.jsx("div",{className:`w-1 font-bold text-transparent bg-gradient-to-b from-${r.color}-500 to-transparent rounded-full`}),t.jsxs("div",{className:"space-y-3 flex-1",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("h4",{className:`font-bold text-xl text-${r.color}-500`,children:r.name}),t.jsx("div",{className:"flex gap-2",children:r.items.map(a=>t.jsx(k,{variant:"secondary",className:"text-[10px]",children:a},a))})]}),t.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:r.desc})]})]},i))})]}),t.jsx(I,{}),t.jsxs("section",{id:"dependency-rule",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"The Dependency Rule"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle."})]}),t.jsx("div",{className:"p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-8",children:t.jsx("div",{className:"flex flex-col md:flex-row gap-12 items-center",children:t.jsxs("div",{className:"space-y-6 flex-1",children:[t.jsxs("h4",{className:"font-bold text-2xl flex items-center gap-2",children:[t.jsx(De,{className:"h-6 w-6 text-blue-500"}),"How to Invert Dependencies"]}),t.jsxs("p",{className:"text-sm text-muted-foreground leading-relaxed",children:["If the Application layer needs to save data (an Infrastructure concern), it defines an ",t.jsx("strong",{children:"Interface (Port)"}),". The Infrastructure layer then ",t.jsx("strong",{children:"Implements (Adapter)"})," that interface."]}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx(k,{className:"bg-emerald-500",children:"Domain Knows No One"}),t.jsx(k,{className:"bg-blue-500",children:"App Knows Domain"}),t.jsx(k,{className:"bg-indigo-500",children:"Infra Knows App"})]})]})})}),t.jsx(_,{title:"Implementing Dependency Inversion",language:"typescript",code:`// --- Application Layer (Inner) ---
export interface IOrderRepository {
  save(order: Order): Promise<void>;
}

export class CreateOrderUseCase {
  constructor(private repo: IOrderRepository) {}
  
  async execute(order: Order) {
    // Business logic...
    await this.repo.save(order);
  }
}

// --- Infrastructure Layer (Outer) ---
export class PostgresOrderRepository implements IOrderRepository {
  async save(order: Order) {
    // Direct database access code
  }
}`})]}),t.jsx(I,{}),t.jsxs("section",{id:"hexagonal",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Hexagonal (Ports & Adapters)"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Separating the application core from the drivers and driven actors."})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2 text-indigo-700",children:[t.jsx(Dp,{className:"h-5 w-5"}),"Ports & Adapters"]}),t.jsxs("div",{className:"space-y-4 text-sm text-muted-foreground",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Ports:"})," Interfaces that provide entry points to or exits from the application core."]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Adapters:"})," Bridges between external technologies and the application's ports."]}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 pt-4 border-t border-indigo-500/10",children:[t.jsxs("div",{children:[t.jsx("span",{className:"text-[10px] font-bold uppercase text-indigo-400",children:"Driving (Input)"}),t.jsx("p",{className:"text-xs",children:"UIs, CLI, Test Scripts"})]}),t.jsxs("div",{children:[t.jsx("span",{className:"text-[10px] font-bold uppercase text-indigo-400",children:"Driven (Output)"}),t.jsx("p",{className:"text-xs",children:"DBs, MQ, Mail, SMS"})]})]})]})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900 border border-slate-700 flex flex-col justify-center font-mono text-xs text-blue-400 space-y-4",children:[t.jsxs("div",{className:"text-center",children:["ADAPTER ","->"," [PORT | CORE | PORT] ","->"," ADAPTER"]}),t.jsxs("div",{className:"flex justify-between items-center opacity-70",children:[t.jsx("div",{className:"p-2 border border-slate-700 rounded text-[10px]",children:"REST API"}),t.jsx(bt,{className:"h-4 w-4"}),t.jsx("div",{className:"p-4 border-2 border-blue-500 rounded-lg text-blue-400",children:"DOMAIN"}),t.jsx(bt,{className:"h-4 w-4"}),t.jsx("div",{className:"p-2 border border-slate-700 rounded text-[10px]",children:"PostgreSQL"})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"onion",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Onion Architecture"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Emphasizing the domain at the center with concentric rings of abstraction."})]}),t.jsx("div",{className:"p-8 rounded-3xl border border-border bg-background/50 space-y-6",children:t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[{title:"Domain Model",pos:"Center",desc:"Pure business entities and value objects."},{title:"Domain Services",pos:"Inner Ring",desc:"Logic that doesn't belong to a single entity."},{title:"App Services",pos:"Middle Ring",desc:"Orchestration and workflow logic."},{title:"Infra/UI",pos:"Outer Ring",desc:"External technical implementations."}].map((r,i)=>t.jsxs("div",{className:"space-y-2 relative",children:[t.jsx("span",{className:"text-[10px] font-bold uppercase text-primary/60",children:r.pos}),t.jsx("h5",{className:"font-bold text-sm",children:r.title}),t.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:r.desc})]},i))})})]}),t.jsx(I,{}),t.jsxs("section",{id:"implementation",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Practical Implementation"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Choosing the right approach based on project complexity."})]}),t.jsx("div",{className:"overflow-x-auto rounded-xl border border-border",children:t.jsxs("table",{className:"w-full text-sm text-left",children:[t.jsx("thead",{className:"bg-muted text-muted-foreground uppercase text-[10px] font-bold tracking-wider",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-6 py-3",children:"Factor"}),t.jsx("th",{className:"px-6 py-3",children:"Clean Architecture"}),t.jsx("th",{className:"px-6 py-3",children:"Vertical Slice"})]})}),t.jsxs("tbody",{className:"divide-y",children:[t.jsxs("tr",{className:"hover:bg-accent/5",children:[t.jsx("td",{className:"px-6 py-4 font-medium",children:"Domain Complexity"}),t.jsx("td",{className:"px-6 py-4",children:"High (Rich Domain)"}),t.jsx("td",{className:"px-6 py-4",children:"Low/Medium (CRUD)"})]}),t.jsxs("tr",{className:"hover:bg-accent/5",children:[t.jsx("td",{className:"px-6 py-4 font-medium",children:"Coupling"}),t.jsx("td",{className:"px-6 py-4",children:"Decoupled by Layers"}),t.jsx("td",{className:"px-6 py-4",children:"Coupled by Feature"})]}),t.jsxs("tr",{className:"hover:bg-accent/5",children:[t.jsx("td",{className:"px-6 py-4 font-medium",children:"Maintenance"}),t.jsx("td",{className:"px-6 py-4",children:"Long term, Enterprise"}),t.jsx("td",{className:"px-6 py-4",children:"Fast delivery, Small apps"})]})]})]})}),t.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900 border border-slate-700",children:[t.jsx("h4",{className:"font-bold text-sm text-blue-400 mb-4 tracking-widest uppercase",children:"Standard Folder Structure"}),t.jsx("pre",{className:"text-xs text-muted-foreground/80 font-mono leading-relaxed",children:`src/
│
├── core/
│   ├── domain/           (Entities, Value Objects, Repository Interfaces)
│   └── application/      (Use Cases, DTOs, Handlers)
│
├── infrastructure/       (DB Context, Repository Impls, External Clients)
│
└── webapi/               (Controllers, Routes, Middlewares)`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4 text-center max-w-2xl mx-auto",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing the Layers"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Clean Architecture makes testing easier by providing clear boundaries to mock or stub."})]}),t.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{name:"Domain Unit Tests",type:"Pure Logic",desc:"Test business rules in entities. No infrastructure needed."},{name:"Application Unit Tests",type:"Mocked Ports",desc:"Test use cases by mocking repository interfaces."},{name:"Infrastructure Integration",type:"Real DB/Adapter",desc:"Test that adapters correctly interact with external systems."}].map((r,i)=>t.jsxs("div",{className:"p-6 rounded-2xl border border-border bg-background/50 hover:border-primary/30 transition-colors",children:[t.jsx(rt,{className:"h-6 w-6 text-primary mb-4"}),t.jsx("h5",{className:"font-bold text-sm mb-1",children:r.name}),t.jsx(k,{variant:"secondary",className:"text-[9px] mb-3",children:r.type}),t.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:r.desc})]},i))})]})]}),t.jsx("aside",{className:"lg:w-64 flex-shrink-0 hidden lg:block",children:t.jsx("div",{className:"sticky top-28 space-y-4",children:t.jsxs("div",{className:"p-1 rounded-2xl bg-muted/50 border border-border/50",children:[t.jsxs("div",{className:"px-4 py-3 flex items-center gap-2 border-b border-border/50",children:[t.jsx(Oe,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-muted-foreground",children:"On this page"})]}),t.jsx("div",{className:"p-2 space-y-1",children:ym.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all ${e===r.id?"bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20":"text-muted-foreground hover:bg-primary/5 hover:text-primary"}`,children:[t.jsx(r.icon,{className:"h-4 w-4"}),r.title.split(". ")[1]]},r.id))})]})})})]})]})},vm=[{id:"core-principles",title:"1. Core Principles",icon:dl},{id:"solid",title:"2. SOLID Principles",icon:yN},{id:"clean-code",title:"3. Clean Code Practices",icon:De},{id:"security",title:"4. Security Standards",icon:tt},{id:"architecture",title:"5. Architectural Patterns",icon:Oe},{id:"documentation",title:"6. Documentation & Style",icon:ul},{id:"testing-strategy",title:"7. Testing Strategy",icon:rt}],pA=()=>{const[e,s]=p.useState("core-principles"),n=[{label:"Home",href:"/"},{label:"Global Standards"},{label:"Coding Standards"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&s(a.target.id)})},{threshold:.2,rootMargin:"-10% 0px -70% 0px"});return vm.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:"Global Coding Standards",subtitle:"Universal principles and best practices that define excellence across every technology stack at AII.",breadcrumbs:n}),t.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[t.jsxs("section",{id:"core-principles",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Core Development Principles"}),t.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"Our engineering culture is built on these foundational pillars. They guide every decision from architectural design to individual lines of code."})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs(pe,{className:"glass-card",children:[t.jsxs(ye,{children:[t.jsxs(ve,{className:"flex items-center gap-2 text-xl",children:[t.jsx(De,{className:"h-5 w-5 text-yellow-500"})," KISS Principle"]}),t.jsx(ct,{children:"Keep It Simple, Stupid"})]}),t.jsx(ge,{children:t.jsx("p",{className:"text-sm text-muted-foreground",children:"Most systems work best if they are kept simple rather than made complicated; therefore, simplicity should be a key goal in design, and unnecessary complexity should be avoided."})})]}),t.jsxs(pe,{className:"glass-card",children:[t.jsxs(ye,{children:[t.jsxs(ve,{className:"flex items-center gap-2 text-xl",children:[t.jsx(Me,{className:"h-5 w-5 text-emerald-500"})," DRY Principle"]}),t.jsx(ct,{children:"Don't Repeat Yourself"})]}),t.jsx(ge,{children:t.jsx("p",{className:"text-sm text-muted-foreground",children:"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system. Avoid duplication of logic across the codebase."})})]}),t.jsxs(pe,{className:"glass-card",children:[t.jsxs(ye,{children:[t.jsxs(ve,{className:"flex items-center gap-2 text-xl",children:[t.jsx(tt,{className:"h-5 w-5 text-blue-500"})," Security by Design"]}),t.jsx(ct,{children:"Built-in, not bolted-on"})]}),t.jsx(ge,{children:t.jsx("p",{className:"text-sm text-muted-foreground",children:"Software is designed from the ground up to be secure. Security is a first-class citizen in our development lifecycle, not an afterthought."})})]}),t.jsxs(pe,{className:"glass-card",children:[t.jsxs(ye,{children:[t.jsxs(ve,{className:"flex items-center gap-2 text-xl",children:[t.jsx(Os,{className:"h-5 w-5 text-purple-500"})," Observability"]}),t.jsx(ct,{children:"Know your system's health"})]}),t.jsx(ge,{children:t.jsx("p",{className:"text-sm text-muted-foreground",children:"Systems must be built to be observable. Proper logging, monitoring, and tracing are essential for maintaining enterprise-grade services."})})]})]}),t.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-purple-500/5 border border-purple-500/10 space-y-6",children:[t.jsxs("div",{className:"flex items-center gap-3 text-purple-500",children:[t.jsx("div",{className:"p-2 rounded-lg bg-purple-500/10",children:t.jsx(tt,{className:"h-6 w-6"})}),t.jsx("h3",{className:"text-2xl font-bold",children:"Code Review Checklist"})]}),t.jsx("p",{className:"text-muted-foreground",children:"Whether you are a reviewer or a contributor, use this checklist to ensure every PR meets AII standards:"}),t.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:[{title:"KISS Check",desc:"Is the solution the simplest possible way to solve the problem?"},{title:"DRY Check",desc:"Is there any duplicated logic or hardcoded configuration?"},{title:"Security",desc:"Are inputs validated? Are secrets handled correctly?"},{title:"Observability",desc:"Are meaningful logs and telemetry included for debugging?"},{title:"Standards",desc:"Does the code follow the specific language/framework guidelines?"},{title:"Tests",desc:"Are there unit/integration tests covering the new logic?"}].map((r,i)=>t.jsxs("div",{className:"flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-background/50 group hover:border-purple-500/30 transition-colors",children:[t.jsx("div",{className:"flex-shrink-0 w-6 h-6 rounded-md bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-xs",children:t.jsx(hr,{className:"h-4 w-4"})}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-foreground text-sm",children:r.title}),t.jsx("p",{className:"text-xs text-muted-foreground",children:r.desc})]})]},i))})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"solid",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"SOLID Principles"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"The FIVE basic principles of object-oriented programming and design for building maintainable systems."})]}),t.jsx("div",{className:"space-y-6",children:[{name:"Single Responsibility",desc:"A class should have one, and only one, reason to change."},{name:"Open/Closed",desc:"Software entities should be open for extension, but closed for modification."},{name:"Liskov Substitution",desc:"Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."},{name:"Interface Segregation",desc:"Many client-specific interfaces are better than one general-purpose interface."},{name:"Dependency Inversion",desc:"One should depend upon abstractions, not concretions."}].map((r,i)=>t.jsxs("div",{className:"flex gap-6 p-6 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors",children:[t.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-xl",children:r.name.charAt(0)}),t.jsxs("div",{className:"space-y-1",children:[t.jsx("h4",{className:"font-bold text-lg",children:r.name}),t.jsx("p",{className:"text-muted-foreground",children:r.desc})]})]},i))})]}),t.jsx(I,{}),t.jsxs("section",{id:"clean-code",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Clean Code Practices"})]}),t.jsxs("div",{className:"space-y-10",children:[t.jsxs("div",{className:"space-y-6",children:[t.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Naming & Clarity"}),t.jsx("p",{className:"text-muted-foreground",children:"Variables, functions, and classes should have names that reveal intent. If you need a comment to explain what it does, the name is likely poor."}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Intent-Revealing"}),t.jsx("code",{className:"text-sm font-mono block p-2 bg-background rounded",children:"int daysSinceCreation;"})]}),t.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Opaque"}),t.jsx("code",{className:"text-sm font-mono block p-2 bg-background rounded",children:"int d; // elapsed time in days"})]})]})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Function Standards"}),t.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-muted-foreground",children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Small:"})," Functions should rarely exceed 20 lines."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Do One Thing:"})," A function should have a single responsibility."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Monadic/Dyadic:"})," Prefer few arguments (0-2). Use objects for more."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No Side Effects:"})," Functions shouldn't secretly modify state."]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"security",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Security Standards"})]}),t.jsxs("div",{className:"grid gap-8",children:[t.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 space-y-6",children:[t.jsxs("h4",{className:"text-xl font-bold text-white flex items-center gap-3",children:[t.jsx(hs,{className:"h-6 w-6 text-red-500"})," OWASP Top 10 Awareness"]}),t.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:["Injection Protection","Broken Access Control","Cryptographic Failures","Insecure Design","Security Misconfiguration","Vulnerable Components"].map((r,i)=>t.jsxs("div",{className:"flex items-center gap-2 text-slate-300 text-sm",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500"})," ",r]},i))})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[t.jsx(Rj,{className:"h-5 w-5"})," Sensitive Data Handling"]}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:[t.jsx("strong",{children:"NEVER"})," log PII (Personally Identifiable Information) or credentials. Use masked logging and environment-based configuration for secrets."]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"architecture",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Architectural Patterns"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Common blueprints used across AII documentation for different system complexities."})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs(pe,{className:"glass shadow-lg border-primary/10",children:[t.jsxs(ye,{children:[t.jsx(ve,{children:"Clean Architecture"}),t.jsx(ct,{children:"Domain-Centric"})]}),t.jsxs(ge,{className:"space-y-4",children:[t.jsx("p",{className:"text-sm",children:"Ideal for complex business domains and long-term maintainability. Separation of concerns between UI, Business Logic, and Infrastructure."}),t.jsx(Re,{asChild:!0,variant:"secondary",className:"w-full",children:t.jsxs(qe,{to:"/clean-architecture",children:["Explore Standards ",t.jsx(bt,{className:"ml-2 h-4 w-4"})]})})]})]}),t.jsxs(pe,{className:"glass shadow-lg border-primary/10",children:[t.jsxs(ye,{children:[t.jsx(ve,{children:"Microservices"}),t.jsx(ct,{children:"Scale-Centric"})]}),t.jsxs(ge,{className:"space-y-4",children:[t.jsx("p",{className:"text-sm",children:"Small, independent, and loosely coupled services communicate over a network, usually via REST or Message Bus."}),t.jsx(k,{className:"bg-primary/20 text-primary hover:bg-primary/30",children:"Standard for AII Services"})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"documentation",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Documentation & Style"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Clear documentation and consistent code style improve maintainability and team collaboration."})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs(pe,{className:"glass shadow-lg",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"flex items-center gap-2",children:[t.jsx(ul,{className:"h-5 w-5 text-primary"}),"Code Comments"]})}),t.jsxs(ge,{className:"space-y-4",children:[t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Write comments that explain ",t.jsx("strong",{children:"why"}),", not ",t.jsx("strong",{children:"what"}),'. The code itself should be self-documenting for the "what".']}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),t.jsx("span",{children:"Explain complex business logic"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),t.jsx("span",{children:"Document non-obvious decisions"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),t.jsx("span",{children:"Add TODO/FIXME with context"})]})]})]})]}),t.jsxs(pe,{className:"glass shadow-lg",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"flex items-center gap-2",children:[t.jsx(ll,{className:"h-5 w-5 text-primary"}),"README Standards"]})}),t.jsxs(ge,{className:"space-y-4",children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"Every project must have a comprehensive README with:"}),t.jsxs("div",{className:"space-y-2 text-sm",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),t.jsx("span",{children:"Project overview and purpose"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),t.jsx("span",{children:"Setup and installation steps"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),t.jsx("span",{children:"Environment variables"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),t.jsx("span",{children:"API documentation links"})]})]})]})]})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[t.jsx(Vs,{className:"h-5 w-5 text-primary"}),"Code Formatting"]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Use automated formatters and linters to maintain consistent code style across the team. Configure your IDE to format on save."}),t.jsxs("div",{className:"grid sm:grid-cols-3 gap-4 text-sm",children:[t.jsxs("div",{className:"p-3 rounded-lg bg-background border",children:[t.jsx("strong",{children:".NET:"})," EditorConfig + StyleCop"]}),t.jsxs("div",{className:"p-3 rounded-lg bg-background border",children:[t.jsx("strong",{children:"JavaScript/TypeScript:"})," Prettier + ESLint"]}),t.jsxs("div",{className:"p-3 rounded-lg bg-background border",children:[t.jsx("strong",{children:"Python:"})," Black + Flake8"]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"testing-strategy",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing Strategy"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Comprehensive testing ensures code quality, prevents regressions, and builds confidence in deployments."})]}),t.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[t.jsxs(pe,{className:"glass shadow-lg border-emerald-500/20",children:[t.jsxs(ye,{children:[t.jsxs(ve,{className:"flex items-center gap-2 text-emerald-600",children:[t.jsx(rt,{className:"h-5 w-5"}),"Unit Tests"]}),t.jsx(ct,{children:"70% Coverage Target"})]}),t.jsxs(ge,{className:"space-y-3 text-sm",children:[t.jsx("p",{className:"text-muted-foreground",children:"Test individual functions and methods in isolation."}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),t.jsx("span",{children:"Fast execution"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),t.jsx("span",{children:"No external dependencies"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5"}),t.jsx("span",{children:"Mock external services"})]})]})]})]}),t.jsxs(pe,{className:"glass shadow-lg border-blue-500/20",children:[t.jsxs(ye,{children:[t.jsxs(ve,{className:"flex items-center gap-2 text-blue-600",children:[t.jsx(Oe,{className:"h-5 w-5"}),"Integration Tests"]}),t.jsx(ct,{children:"Critical Paths"})]}),t.jsxs(ge,{className:"space-y-3 text-sm",children:[t.jsx("p",{className:"text-muted-foreground",children:"Test interactions between components and external systems."}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-blue-500 mt-0.5"}),t.jsx("span",{children:"Database operations"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-blue-500 mt-0.5"}),t.jsx("span",{children:"API endpoints"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-blue-500 mt-0.5"}),t.jsx("span",{children:"Message queues"})]})]})]})]}),t.jsxs(pe,{className:"glass shadow-lg border-purple-500/20",children:[t.jsxs(ye,{children:[t.jsxs(ve,{className:"flex items-center gap-2 text-purple-600",children:[t.jsx(Tp,{className:"h-5 w-5"}),"E2E Tests"]}),t.jsx(ct,{children:"User Journeys"})]}),t.jsxs(ge,{className:"space-y-3 text-sm",children:[t.jsx("p",{className:"text-muted-foreground",children:"Test complete user workflows from start to finish."}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-purple-500 mt-0.5"}),t.jsx("span",{children:"Critical user flows"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-purple-500 mt-0.5"}),t.jsx("span",{children:"Cross-service scenarios"})]}),t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-purple-500 mt-0.5"}),t.jsx("span",{children:"UI automation"})]})]})]})]})]}),t.jsxs("div",{className:"p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 space-y-6",children:[t.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[t.jsx(Me,{className:"h-6 w-6 text-primary"}),"Testing Best Practices"]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"space-y-3",children:[t.jsx("h5",{className:"font-bold text-primary",children:"Test Naming"}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Use descriptive names: ",t.jsx("code",{className:"text-primary",children:"MethodName_Scenario_ExpectedBehavior"})]}),t.jsx(k,{variant:"outline",className:"font-mono text-xs",children:"CreateUser_InvalidEmail_ThrowsValidationException"})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("h5",{className:"font-bold text-primary",children:"AAA Pattern"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Structure tests with Arrange, Act, Assert sections for clarity."}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx(k,{variant:"outline",children:"Arrange"}),t.jsx(k,{variant:"outline",children:"Act"}),t.jsx(k,{variant:"outline",children:"Assert"})]})]})]}),t.jsx("div",{className:"pt-4 border-t border-primary/10",children:t.jsxs("p",{className:"text-sm text-muted-foreground italic",children:[t.jsx("strong",{children:"Remember:"})," Tests are documentation. They should clearly communicate the expected behavior of your code."]})})]})]}),t.jsxs("section",{id:"language-nav",className:"p-12 rounded-[2.5rem] bg-primary/5 border border-primary/10 space-y-8",children:[t.jsx("h2",{className:"text-3xl font-bold text-center",children:"Language-Specific Guidelines"}),t.jsx("p",{className:"text-center text-muted-foreground max-w-2xl mx-auto",children:"While the above principles are universal, each language has its own idioms and conventions. Select your stack for detailed implementation guides."}),t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[{name:".NET",path:"/dotnet-developer-guideline",color:"blue"},{name:"React",path:"/react-developer-guideline",color:"cyan"},{name:"Java",path:"/java-developer-guideline",color:"red"},{name:"Python",path:"/python-developer-guideline",color:"yellow"}].map(r=>t.jsx(Re,{asChild:!0,variant:"outline",className:"h-16 font-bold hover:bg-primary/20 hover:text-primary hover:border-primary transition-all",children:t.jsx(qe,{to:r.path,children:r.name})},r.name))})]})]}),t.jsx("aside",{className:"lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l",children:t.jsxs("div",{className:"space-y-1 pb-12",children:[t.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),vm.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===r.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[t.jsx(r.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===r.id?"text-primary":"text-muted-foreground/40"}`}),r.title]},r.id))]})})]})]})},bm=[{id:"quick-ref",title:"1. Quick Reference",icon:De},{id:"workflow",title:"2. Git Workflow",icon:ml},{id:"branching",title:"3. Branching Strategy",icon:ws},{id:"prs",title:"4. Pull Request Process",icon:mo},{id:"reviews",title:"5. Review Standards",icon:Oi},{id:"commits",title:"6. Commit Guidelines",icon:Cp},{id:"testing",title:"7. Testing & Quality",icon:rt},{id:"security",title:"8. Security & Docs",icon:Kn},{id:"conflicts",title:"9. Conflict Resolution",icon:fo},{id:"cicd",title:"10. CI/CD Requirements",icon:Me},{id:"versioning",title:"11. Versioning Standards",icon:Hj},{id:"changelog",title:"12. Changelog Rules",icon:kp}],hA=()=>{const[e,s]=p.useState("quick-ref"),n=[{label:"Home",href:"/"},{label:"Global Workflow"},{label:"GitHub Guidelines"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&s(a.target.id)})},{threshold:.2,rootMargin:"-10% 0px -70% 0px"});return bm.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:"AII GitHub Guidelines",subtitle:"Universal branching strategies, pull request workflows, and automated quality gates for all AII projects.",breadcrumbs:n}),t.jsxs("div",{className:"py-12 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-32 pb-24",children:[t.jsxs("section",{id:"quick-ref",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Quick Reference Guide"})]}),t.jsx("div",{className:"grid sm:grid-cols-2 xl:grid-cols-4 gap-4",children:[{title:"Branching Rules",desc:"Mandatory prefix patterns for all feature work.",icon:ws,tags:["feature/*","bugfix/*"],color:"blue"},{title:"Pull Requests",desc:"Mandated for all protected branches.",icon:mo,tags:["Review Required","CI Passing"],color:"emerald"},{title:"CI/CD Pipelines",desc:"Automated testing and deployment for every change.",icon:Me,tags:["Build","Test","Deploy"]},{title:"PR Quality",desc:"All PRs require 2 approvals and passing CI builds.",icon:tt,tags:["Strict","Automated"]},{title:"Review Time",desc:"Initial reviews expected within 24 business hours.",icon:Me,tags:["SLAs","Communication"]},{title:"Commit Style",desc:"Conventional Commits mandatory for all projects.",icon:Cp,tags:["feat:","fix:","chore:"]}].map((r,i)=>t.jsx(pe,{className:"glass hover:border-primary/50 transition-all group",children:t.jsxs(ge,{className:"pt-6",children:[t.jsx(r.icon,{className:"h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform"}),t.jsx("h4",{className:"font-bold mb-2",children:r.title}),t.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:r.desc}),t.jsx("div",{className:"flex flex-wrap gap-2",children:r.tags.map(a=>t.jsx(k,{variant:"secondary",className:"text-[10px] font-mono px-1.5 py-0",children:a},a))})]})},i))}),t.jsxs("div",{className:"mt-12 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-6",children:[t.jsxs("div",{className:"flex items-center gap-3 text-emerald-500",children:[t.jsx("div",{className:"p-2 rounded-lg bg-emerald-500/10",children:t.jsx(mo,{className:"h-6 w-6"})}),t.jsx("h3",{className:"text-2xl font-bold",children:"Your First Pull Request"})]}),t.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"Follow this workflow to submit your first contribution at AII:"}),t.jsx("div",{className:"space-y-8",children:[{title:"Sync & Branch",cmd:`git checkout master && git pull
git checkout -b feature/JIRA-123-ui-fix`,desc:"Always start from the latest master branch and use the JIRA ID in your branch name."},{title:"Commit Work",cmd:`git add .
git commit -m "feat(ui): implement new glassmorphism theme"`,desc:"Follow Conventional Commits guidelines for your message."},{title:"Push & Open",cmd:"git push -u origin feature/JIRA-123-ui-fix",desc:"Push and then click the GitHub link to open a PR against the master branch."}].map((r,i)=>t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold",children:i+1}),t.jsx("h4",{className:"font-bold",children:r.title})]}),t.jsx("p",{className:"text-sm text-muted-foreground px-9",children:r.desc}),t.jsx("div",{className:"ml-9",children:t.jsx(_,{language:"bash",code:r.cmd})})]},i))})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"workflow",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Development Workflow"}),t.jsx("p",{className:"text-lg text-muted-foreground italic",children:"Step-by-step flow from feature inception to production deployment."})]}),t.jsxs("div",{className:"relative space-y-8",children:[t.jsx("div",{className:"absolute left-8 top-12 bottom-12 w-px bg-border hidden md:block"}),[{step:1,title:"Feature Development",desc:"Create feature branches from development, implement changes, and open PRs.",icon:$t},{step:2,title:"Preparing a Release",desc:"Create release branches from development for final stabilization.",icon:Oe},{step:3,title:"Testing in Staging",desc:"Deploy to testing environment. Fix discovered issues via additional PRs.",icon:rt},{step:4,title:"Going Live",desc:"Merge release into master and development simultaneously.",icon:De},{step:5,title:"Production Deployment",desc:"Master triggers automatic production deployment via CI/CD pipelines.",icon:Me}].map((r,i)=>t.jsxs("div",{className:"flex gap-6 relative",children:[t.jsx("div",{className:"z-10 bg-background border-2 border-primary/20 text-primary h-16 w-16 rounded-3xl flex items-center justify-center shrink-0 shadow-sm",children:t.jsx(r.icon,{className:"h-7 w-7"})}),t.jsxs("div",{className:"space-y-1 pt-1",children:[t.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2",children:[t.jsxs("span",{className:"text-xs text-muted-foreground font-mono",children:["STEP 0",r.step]}),r.title]}),t.jsx("p",{className:"text-muted-foreground leading-relaxed max-w-2xl",children:r.desc})]})]},i))]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4",children:[t.jsx(Kj,{className:"h-6 w-6 text-primary shrink-0"}),t.jsx("p",{className:"text-sm font-medium text-primary/80 italic",children:"Key Principle: All changes flow through PRs with mandatory reviews and CI checks, ensuring quality at every step regardless of stack."})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"branching",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Branching Strategy"})]}),t.jsxs("div",{className:"space-y-10",children:[t.jsxs("div",{className:"space-y-6",children:[t.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Branch Naming Convention"}),t.jsx("p",{className:"text-muted-foreground",children:"Standardized patterns for all AII repositories."}),t.jsxs("div",{className:"bg-muted p-8 rounded-3xl border font-mono relative group overflow-hidden",children:[t.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-muted-foreground border border-muted-foreground/30 px-2 rounded-full",children:"Regex Requirement"}),t.jsx("code",{className:"text-orange-600 dark:text-orange-400 text-sm break-all leading-relaxed block py-4",children:"^ (master | development | refs/tags/.* | ((bugfix|hotfix|playground|defect|feature|release){1}/.+)) $"})]}),t.jsx("div",{className:"flex flex-wrap gap-2",children:["feature/login-page","bugfix/api-error","release/v1.2.0","hotfix/urgent-patch"].map(r=>t.jsx(k,{variant:"outline",className:"font-mono text-xs px-3 py-1 hover:bg-muted transition-colors",children:r},r))})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsx("h3",{className:"text-2xl font-bold flex items-center gap-2",children:"Protected Branches"}),t.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{name:"master",type:"CRITICAL",desc:"Production branch. Contains only tested, production-ready code.",border:"border-orange-500/50",bg:"bg-orange-500/5"},{name:"development",type:"PROTECTED",desc:"Master integration branch. Base for all feature work.",border:"border-blue-500/50",bg:"bg-blue-500/5"},{name:"release/*",type:"LOCKED",desc:"Release candidates for staging testing and stabilization.",border:"border-emerald-500/50",bg:"bg-emerald-500/5"}].map(r=>t.jsxs("div",{className:`glass p-6 rounded-2xl border ${r.border} ${r.bg} space-y-3`,children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"font-mono font-bold text-lg",children:r.name}),t.jsx(hs,{className:"h-4 w-4 opacity-50"})]}),t.jsx(k,{variant:"outline",className:"text-[10px]",children:r.type}),t.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:r.desc})]},r.name))})]}),t.jsxs("div",{className:"p-6 border border-destructive/20 bg-destructive/5 rounded-2xl space-y-3 flex gap-4",children:[t.jsx(Kn,{className:"h-6 w-6 text-destructive shrink-0"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-destructive",children:"Crucial Restriction"}),t.jsxs("p",{className:"text-sm text-muted-foreground italic",children:[t.jsx("strong",{children:"NEVER"})," commit directly to master, development, or any locked branches. All changes must be submitted via Pull Requests."]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"prs",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Pull Request Process"})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-10",children:[t.jsxs("div",{className:"space-y-6",children:[t.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2 text-emerald-600",children:[t.jsx(ce,{className:"h-5 w-5"})," Creation Checklist"]}),t.jsx("div",{className:"grid gap-4",children:[{label:"Clear Title & Description",desc:"Explain the WHAT and WHY clearly."},{label:"Link Related Issues",desc:"Reference Jira tickets or internal issues."},{label:"Up-to-Date Branch",desc:"Merge latest changes from target first."},{label:"Focused Scope",desc:"One feature or bug fix per PR."}].map((r,i)=>t.jsxs("div",{className:"p-4 rounded-xl bg-card border flex gap-3 shadow-sm hover:shadow-md transition-shadow",children:[t.jsx("div",{className:"h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 mt-0.5",children:t.jsx("div",{className:"h-2 w-2 rounded-full bg-emerald-500"})}),t.jsxs("div",{className:"space-y-1",children:[t.jsx("p",{className:"font-bold text-sm tracking-tight",children:r.label}),t.jsx("p",{className:"text-xs text-muted-foreground",children:r.desc})]})]},i))})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("h4",{className:"text-xl font-bold flex items-center gap-2 text-primary",children:[t.jsx(ml,{className:"h-5 w-5"})," Merging Requirements"]}),t.jsxs(pe,{className:"glass border-primary/20",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(tt,{className:"h-5 w-5 text-primary"})," Code Owner Approval"]})}),t.jsxs(ge,{className:"space-y-4 text-sm leading-relaxed",children:[t.jsxs("p",{children:["Merging into any protected branch requires a review and approval from ",t.jsx("strong",{children:"at least 1 designated code owner"}),"."]}),t.jsx(I,{className:"bg-primary/10"}),t.jsxs("ul",{className:"space-y-3 list-none p-0 italic text-muted-foreground",children:[t.jsxs("li",{className:"flex gap-2",children:[t.jsx(bt,{className:"h-3 w-3 mt-1 text-primary shrink-0"})," PRs should be small and focused."]}),t.jsxs("li",{className:"flex gap-2",children:[t.jsx(bt,{className:"h-3 w-3 mt-1 text-primary shrink-0"})," Target for max 500 lines changed."]}),t.jsxs("li",{className:"flex gap-2",children:[t.jsx(bt,{className:"h-3 w-3 mt-1 text-primary shrink-0"})," All discussions must be resolved."]})]})]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"reviews",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Review Standards"})]}),t.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:[{title:"Quality & Standards",icon:Oi,desc:"Reviewers verify adherence to the relevant technology guidelines and naming conventions."},{title:"Security Focus",icon:tt,desc:"Mandatory check for secret leakage, injection vulnerabilities, and authorization logic."},{title:"Automated Verification",icon:Me,desc:"CI/CD pipelines, unit tests, and linters must show green status."},{title:"Constructive Feedback",icon:ul,desc:"Focus on the code, not the person. Use suggestions feature for improvements."}].map((r,i)=>t.jsxs("div",{className:"flex gap-4 p-6 rounded-2xl border bg-card/50 hover:bg-card transition-colors group",children:[t.jsx("div",{className:"p-3 rounded-xl bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform h-fit",children:t.jsx(r.icon,{className:"h-6 w-6"})}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h5",{className:"font-bold text-lg",children:r.title}),t.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:r.desc})]})]},i))}),t.jsxs("div",{className:"p-8 border-2 border-dashed border-destructive/30 rounded-[2rem] bg-destructive/5 text-center space-y-4",children:[t.jsx(Kn,{className:"h-10 w-10 text-destructive mx-auto"}),t.jsx("h3",{className:"text-2xl font-bold text-destructive",children:"Strict Rule: No Self-Merging"}),t.jsx("p",{className:"text-muted-foreground max-w-lg mx-auto italic",children:"Do not merge your own PR unless explicitly allowed by the team lead. Collaborative review is the only way to maintain our quality bar."})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"commits",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Commit Message Standards"})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 space-y-6",children:[t.jsxs("h4",{className:"font-bold text-emerald-600 flex items-center gap-2",children:[t.jsx(ce,{className:"h-5 w-5"})," Professional Examples"]}),t.jsxs("div",{className:"space-y-3 font-mono text-xs",children:[t.jsx("div",{className:"p-3 bg-white/50 dark:bg-emerald-950/30 rounded border border-emerald-500/10",children:'"Add user authentication validation"'}),t.jsx("div",{className:"p-3 bg-white/50 dark:bg-emerald-950/30 rounded border border-emerald-500/10",children:'"Fix login form bug #123"'}),t.jsx("div",{className:"p-3 bg-white/50 dark:bg-emerald-950/30 rounded border border-emerald-500/10",children:'"Update documentation for v2.1"'})]}),t.jsx("p",{className:"text-xs text-muted-foreground italic",children:"Use imperative mood and clear, concise subjects."})]}),t.jsxs("div",{className:"p-8 rounded-3xl bg-destructive/5 border border-destructive/20 space-y-6",children:[t.jsxs("h4",{className:"font-bold text-destructive flex items-center gap-2",children:[t.jsx(jp,{className:"h-5 w-5"})," Messages to Avoid"]}),t.jsxs("div",{className:"space-y-3 font-mono text-xs opacity-60",children:[t.jsx("div",{className:"p-3 bg-white/50 dark:bg-destructive/10 rounded border border-destructive/10 line-through",children:'"fixed stuff"'}),t.jsx("div",{className:"p-3 bg-white/50 dark:bg-destructive/10 rounded border border-destructive/10 line-through",children:'"changes"'}),t.jsx("div",{className:"p-3 bg-white/50 dark:bg-destructive/10 rounded border border-destructive/10 line-through",children:'"update"'})]}),t.jsx("p",{className:"text-xs text-muted-foreground italic",children:"Avoid vague, single-word messages that don't explain the intent."})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Testing & Quality Assurance"})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(rt,{className:"h-5 w-5 text-emerald-500"})," Comprehensive Coverage"]})}),t.jsxs(ge,{className:"text-sm text-muted-foreground leading-relaxed",children:["All new features and bug fixes ",t.jsx("strong",{children:"must"})," include relevant unit or integration tests. Code without tests will not be approved."]})]}),t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(fo,{className:"h-5 w-5 text-emerald-500"})," Pre-Review Validation"]})}),t.jsx(ge,{className:"text-sm text-muted-foreground leading-relaxed",children:"Ensure all tests pass locally before requesting code review. Respect your reviewers' time by submitting a working codebase."})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"security",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Security & Documentation"})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"p-8 rounded-[2rem] bg-destructive/5 border border-destructive/10 space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2 text-destructive",children:[t.jsx(Kn,{className:"h-5 w-5"})," Security First"]}),t.jsx("div",{className:"p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-destructive/10 text-sm italic font-medium",children:'"Never commit secrets, credentials, API keys, or other sensitive data to the repository."'}),t.jsxs("p",{className:"text-xs text-muted-foreground",children:["Use environment variables, vault management, or secure configuration systems instead. Use ",t.jsx("code",{children:".gitignore"})," and ",t.jsx("code",{children:"git-secrets"})," scans locally."]})]}),t.jsxs("div",{className:"p-8 rounded-[2rem] bg-primary/5 border border-primary/10 space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[t.jsx(ut,{className:"h-5 w-5 text-primary"})," Documentation Sync"]}),t.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"Keep documentation synchronized with code changes. Update README.md, technical docs, and internal wikis when implementing new capabilities."}),t.jsx(I,{className:"bg-primary/10"}),t.jsx("p",{className:"text-[10px] text-muted-foreground font-mono uppercase font-bold",children:"Requirement: All public changes must have documentation updates."})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"conflicts",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Conflict Resolution"})]}),t.jsxs(pe,{className:"overflow-hidden border-orange-500/20 shadow-lg",children:[t.jsxs("div",{className:"bg-orange-500 text-white px-8 py-4 flex items-center gap-4",children:[t.jsx(fo,{className:"h-6 w-6"}),t.jsx("h4",{className:"font-bold",children:"Prevention is Better Than Cure"})]}),t.jsxs(ge,{className:"p-8 space-y-6",children:[t.jsxs("p",{className:"text-muted-foreground leading-relaxed text-lg",children:[t.jsx("strong",{children:"Always pull the latest changes"})," from the target branch (e.g., master, development, or release/**) before starting work or creating a PR."]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-4 rounded-xl bg-muted border font-mono text-xs",children:[t.jsx("p",{className:"text-muted-foreground mb-2 text-[10px] font-bold uppercase",children:"Before Starting"}),t.jsxs("code",{children:["git checkout development",t.jsx("br",{}),"git pull origin development",t.jsx("br",{}),"git checkout -b feature/new-logic"]})]}),t.jsxs("div",{className:"p-4 rounded-xl bg-muted border font-mono text-xs",children:[t.jsx("p",{className:"text-muted-foreground mb-2 text-[10px] font-bold uppercase",children:"Before PR"}),t.jsxs("code",{children:["git checkout feature/new-logic",t.jsx("br",{}),"# Merge target branch",t.jsx("br",{}),"git merge development",t.jsx("br",{}),"# Resolve local conflicts"]})]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"cicd",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"CI/CD Status Requirements"})]}),t.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{title:"Automated Tests",icon:rt,desc:"Unit & Integration checks must pass."},{title:"Code Quality",icon:hl,desc:"Linting and static analysis checks."},{title:"Build Status",icon:Me,desc:"Compilation and deployment staging checks."}].map((r,i)=>t.jsxs("div",{className:"glass p-6 rounded-2xl border flex flex-col items-center text-center space-y-3",children:[t.jsx("div",{className:"p-3 rounded-full bg-blue-500/10 text-blue-500",children:t.jsx(r.icon,{className:"h-6 w-6"})}),t.jsx("h5",{className:"font-bold",children:r.title}),t.jsx("p",{className:"text-xs text-muted-foreground",children:r.desc})]},i))}),t.jsx("div",{className:"p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center",children:t.jsxs("p",{className:"text-emerald-600 font-bold flex items-center justify-center gap-2",children:[t.jsx(ce,{className:"h-5 w-5"})," All automated checks must pass before merging is permitted."]})})]}),t.jsx(I,{}),t.jsxs("section",{id:"versioning",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 11"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Versioning Standards"})]}),t.jsxs("div",{className:"space-y-10",children:[t.jsxs("div",{className:"bg-primary/5 p-12 rounded-[3rem] border border-primary/10 space-y-8 relative overflow-hidden",children:[t.jsxs("div",{className:"relative z-10 text-center space-y-4",children:[t.jsx("h3",{className:"text-3xl font-extrabold tracking-tighter sm:text-4xl",children:"Semantic Versioning 2.0.0"}),t.jsx("p",{className:"text-muted-foreground font-mono text-xl",children:"X . Y . Z"})]}),t.jsx("div",{className:"grid md:grid-cols-3 gap-8 relative z-10",children:[{major:"X",label:"MAJOR",desc:"Breaking changes or incompatible API updates.",color:"text-red-500"},{major:"Y",label:"MINOR",desc:"New functionality in a backwards compatible manner.",color:"text-emerald-500"},{major:"Z",label:"PATCH",desc:"Backwards compatible bug fixes only.",color:"text-orange-500"}].map((r,i)=>t.jsxs("div",{className:"p-6 rounded-2xl bg-white/80 dark:bg-black/30 border text-center space-y-2 backdrop-blur-sm",children:[t.jsx("span",{className:`text-4xl font-bold ${r.color}`,children:r.major}),t.jsx("h5",{className:"font-bold text-sm",children:r.label}),t.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:r.desc})]},i))})]}),t.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-4",children:[{title:"Bug Fix",from:"1.2.3",to:"1.2.4",bg:"bg-emerald-500/5"},{title:"New Feature",from:"1.2.3",to:"1.3.0",bg:"bg-emerald-500/5"},{title:"Breaking Change",from:"1.2.3",to:"2.0.0",bg:"bg-orange-500/5"},{title:"Pre-release",from:"2.0.0",to:"2.0.0-beta.1",bg:"bg-blue-500/5"}].map((r,i)=>t.jsxs("div",{className:`p-4 rounded-xl border ${r.bg} text-center space-y-1 hover:scale-105 transition-transform cursor-default`,children:[t.jsx("p",{className:"text-[10px] font-bold uppercase opacity-60 tracking-widest",children:r.title}),t.jsxs("p",{className:"font-mono text-sm",children:[r.from," → ",r.to]})]},i))})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"changelog",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 12"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Changelog & Release Notes"})]}),t.jsxs("div",{className:"p-10 rounded-[2.5rem] bg-slate-900 text-slate-100 border-none relative overflow-hidden group",children:[t.jsx("div",{className:"absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity",children:t.jsx(kp,{className:"h-40 w-40"})}),t.jsxs("div",{className:"relative z-10 space-y-8",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-3xl font-bold",children:"Documenting Significance"}),t.jsx("p",{className:"text-slate-400",children:"Update the changelog or release notes in your PR if your changes are significant."})]}),t.jsxs("div",{className:"grid sm:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center gap-3 text-emerald-400 font-bold",children:[t.jsx(ce,{className:"h-5 w-5"})," External Significance"]}),t.jsxs("ul",{className:"text-sm text-slate-400 space-y-2 list-none p-0 italic",children:[t.jsx("li",{children:"• New features or UI modifications"}),t.jsx("li",{children:"• API changes or breaking updates"})]})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center gap-3 text-emerald-400 font-bold",children:[t.jsx(ce,{className:"h-5 w-5"})," Internal Significance"]}),t.jsxs("ul",{className:"text-sm text-slate-400 space-y-2 list-none p-0 italic",children:[t.jsx("li",{children:"• Architecture shifts"}),t.jsx("li",{children:"• Performance & Security enhancements"})]})]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"conclusion",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"text-center space-y-6",children:[t.jsx(po,{className:"h-16 w-16 mx-auto text-primary animate-pulse"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Questions or Support?"}),t.jsx("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto italic",children:"Following these guidelines ensures high-quality, maintainable code and smooth collaboration across the AII development team regardless of technology stack."})]}),t.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[t.jsx(pe,{className:"hover:border-primary transition-all group p-1 shrink-0",children:t.jsxs("a",{href:"mailto:yosy.aliffakry@axa.co.id",className:"flex items-center justify-between p-6",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform",children:t.jsx(sN,{className:"h-6 w-6"})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-bold",children:"Contact Maintainer"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"yosy.aliffakry@axa.co.id"})]})]}),t.jsx(di,{className:"h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"})]})}),t.jsx(pe,{className:"hover:border-primary transition-all group p-1 shrink-0",children:t.jsxs("a",{href:"https://github.axa.com/aii",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between p-6",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"p-3 rounded-full bg-black/10 dark:bg-white/10 text-foreground group-hover:scale-110 transition-transform",children:t.jsx(po,{className:"h-6 w-6"})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-bold",children:"AII Organization"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"github.axa.com/aii"})]})]}),t.jsx(di,{className:"h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"})]})})]})]})]}),t.jsx("aside",{className:"lg:w-72 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden lg:block overflow-y-auto pl-4 border-l",children:t.jsxs("div",{className:"space-y-1 pb-12",children:[t.jsx("h4",{className:"text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]",children:"On this page"}),bm.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${e===r.id?"text-primary font-bold":"text-muted-foreground hover:text-foreground"}`,children:[t.jsx(r.icon,{className:`h-3.5 w-3.5 shrink-0 ${e===r.id?"text-primary":"text-muted-foreground/40"}`}),r.title]},r.id))]})})]})]})},jm=[{id:"overview",title:"1. Platform Overview",icon:ut},{id:"getting-started",title:"2. Getting Started",icon:$t},{id:"builds",title:"3. Build Configuration",icon:ol},{id:"deployments",title:"4. Deployments",icon:pl},{id:"configuration",title:"5. Configuration Management",icon:mt},{id:"networking",title:"6. Networking & Routes",icon:ml},{id:"monitoring",title:"7. Monitoring & Logging",icon:Me},{id:"best-practices",title:"8. Best Practices",icon:jt},{id:"case-studies",title:"9. Real-world Case Studies",icon:ut}],fA=()=>{const[e,s]=p.useState("overview"),n=[{label:"Home",href:"/"},{label:"DevOps & CI/CD"},{label:"OpenShift"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);s(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return jm.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:"OpenShift 4.x Platform Guide",subtitle:"Comprehensive guide to deploying and managing applications on AXA's OpenShift Container Platform.",breadcrumbs:n,readingTime:40}),t.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[t.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Platform Overview"}),t.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"OpenShift Container Platform is AXA's enterprise Kubernetes platform for building, deploying, and managing containerized applications at scale."})]}),t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"OpenShift 4.x",icon:fr},{text:"Kubernetes Native",icon:xj},{text:"Enterprise Security",icon:jt},{text:"Built-in CI/CD",icon:ws},{text:"Auto-scaling",icon:Me},{text:"Self-service Portal",icon:Oe}].map((r,i)=>t.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[t.jsx(r.icon,{className:"h-5 w-5 text-primary"}),t.jsx("span",{className:"font-semibold text-sm",children:r.text})]},i))}),t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"Key OpenShift Concepts"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-4 py-3 text-left",children:"Concept"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Description"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Kubernetes Equivalent"})]})}),t.jsxs("tbody",{className:"divide-y",children:[t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Project"}),t.jsx("td",{className:"px-4 py-2",children:"Isolated environment for resources"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"Namespace"})})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"BuildConfig"}),t.jsx("td",{className:"px-4 py-2",children:"Defines how to build container images"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"secondary",children:"OpenShift Only"})})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"DeploymentConfig"}),t.jsx("td",{className:"px-4 py-2",children:"Manages application deployments"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"Deployment"})})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Route"}),t.jsx("td",{className:"px-4 py-2",children:"Exposes services externally"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"Ingress"})})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"ImageStream"}),t.jsx("td",{className:"px-4 py-2",children:"Tracks container image versions"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"secondary",children:"OpenShift Only"})})]})]})]})})]}),t.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400",children:[t.jsx("div",{className:"absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-500 tracking-widest",children:"AXA OpenShift Architecture"}),t.jsx("pre",{className:"leading-relaxed",children:`┌─────────────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────────────┘`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"getting-started",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Getting Started"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Set up your development environment and access AXA's OpenShift cluster."})]}),t.jsxs("div",{className:"p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6",children:[t.jsxs("div",{className:"flex items-center gap-3 text-cyan-600",children:[t.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10",children:t.jsx(ce,{className:"h-6 w-6"})}),t.jsx("h3",{className:"text-2xl font-bold",children:"New Developer Checklist"})]}),t.jsx("p",{className:"text-muted-foreground",children:"Follow these steps to get started with OpenShift at AXA:"}),t.jsx("div",{className:"grid gap-4",children:[{step:"Request Access",desc:"Submit access request through AXA service portal for your project namespace."},{step:"Install oc CLI",desc:"Download OpenShift CLI (oc) from the cluster's command-line tools page."},{step:"Login to Cluster",desc:"Copy login command from OpenShift web console (top-right menu → Copy Login Command)."},{step:"Select Project",desc:"Switch to your project namespace: oc project your-project-name"},{step:"Verify Access",desc:"Run 'oc whoami' and 'oc get pods' to verify your access permissions."}].map((r,i)=>t.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[t.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-sm",children:i+1}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-foreground",children:r.step}),t.jsx("p",{className:"text-sm text-muted-foreground",children:r.desc})]})]},i))})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"CLI Authentication",language:"bash",code:`# Login using token from web console
oc login --token=sha256~YOUR_TOKEN --server=https://api.openshift.axa.com:6443

# Verify login
oc whoami
oc whoami --show-server

# List available projects
oc projects

# Switch to your project
oc project my-application-dev

# Get cluster info
oc cluster-info`}),t.jsx(_,{title:"Essential oc Commands",language:"bash",code:`# View resources in current project
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
oc port-forward <pod-name> 8080:8080`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"builds",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Build Configuration"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Configure OpenShift Builds triggered from Jenkins pipelines."})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-2 text-amber-600",children:[t.jsx(fs,{className:"h-5 w-5"}),t.jsx("h4",{className:"font-bold",children:"AXA Build Workflow"})]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"At AXA, we trigger OpenShift Builds from Jenkins pipelines. The BuildConfig defines how your application is containerized, and the resulting image is pushed to the internal ImageStream for deployment consumption."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"BuildConfig Definition (buildconfig.yaml)",language:"yaml",code:`apiVersion: build.openshift.io/v1
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
  triggers: []`}),t.jsx(_,{title:"ImageStream Definition (imagestream.yaml)",language:"yaml",code:`apiVersion: image.openshift.io/v1
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
        tags: production`}),t.jsx(_,{title:"Triggering Build from Jenkins",language:"groovy",code:`// Jenkinsfile - Build Stage
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
}`}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Build Best Practices"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Use multi-stage Dockerfiles for smaller images"}),t.jsx("li",{children:"• Set resource limits on BuildConfigs"}),t.jsx("li",{children:"• Tag images with version/commit info"}),t.jsx("li",{children:"• Use .dockerignore to exclude files"}),t.jsx("li",{children:"• Cache dependencies in separate layers"})]})]}),t.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Common Mistakes"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Running as root in containers"}),t.jsx("li",{children:"• Including secrets in images"}),t.jsx("li",{children:"• Not setting CPU/memory limits"}),t.jsx("li",{children:"• Using :latest tag in production"}),t.jsx("li",{children:"• Large base images (use alpine/distroless)"})]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"deployments",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Deployments"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Configure Deployments that consume images from OpenShift Builds."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"Deployment Configuration (deployment.yaml)",language:"yaml",code:`apiVersion: apps/v1
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
          type: RuntimeDefault`}),t.jsx(_,{title:"Trigger Deployment from Jenkins",language:"groovy",code:`// Jenkinsfile - Deploy Stage
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
}`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"configuration",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Configuration Management"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Manage application configuration using ConfigMaps and Secrets."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsx(_,{title:"ConfigMap (configmap.yaml)",language:"yaml",code:`apiVersion: v1
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
    }`}),t.jsx(_,{title:"Secret (secret.yaml)",language:"yaml",code:`apiVersion: v1
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
  tls.key: <base64-encoded-key>`})]}),t.jsx(_,{title:"Using ConfigMaps and Secrets in Deployment",language:"yaml",code:`# In deployment.yaml spec.template.spec.containers
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
      defaultMode: 0400  # Read-only for owner`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"networking",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Networking & Routes"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Expose your applications using Services and Routes."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"Service Definition (service.yaml)",language:"yaml",code:`apiVersion: v1
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
    app: my-application`}),t.jsx(_,{title:"Route Definition (route.yaml)",language:"yaml",code:`apiVersion: route.openshift.io/v1
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
  #     weight: 10`}),t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"TLS Termination Options"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-4 py-3 text-left",children:"Type"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Description"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Use Case"})]})}),t.jsxs("tbody",{className:"divide-y",children:[t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Edge"}),t.jsx("td",{className:"px-4 py-2",children:"TLS terminates at router"}),t.jsx("td",{className:"px-4 py-2",children:"Most common, backend uses HTTP"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Passthrough"}),t.jsx("td",{className:"px-4 py-2",children:"TLS passes through to pod"}),t.jsx("td",{className:"px-4 py-2",children:"End-to-end encryption, app handles TLS"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Re-encrypt"}),t.jsx("td",{className:"px-4 py-2",children:"Router re-encrypts to pod"}),t.jsx("td",{className:"px-4 py-2",children:"Full encryption with certificate validation"})]})]})]})})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"monitoring",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Monitoring & Logging"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Observe your applications using OpenShift's built-in monitoring stack."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(Me,{className:"h-5 w-5 text-emerald-500"})," Metrics & Prometheus"]})}),t.jsxs(ge,{className:"space-y-4",children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"OpenShift provides built-in Prometheus for metrics collection."}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Expose /metrics endpoint in your app"}),t.jsx("li",{children:"• Use ServiceMonitor for automatic discovery"}),t.jsx("li",{children:"• View in OpenShift Console → Monitoring"}),t.jsx("li",{children:"• Create custom Grafana dashboards"})]})]})]}),t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(Oi,{className:"h-5 w-5 text-blue-500"})," Logging"]})}),t.jsxs(ge,{className:"space-y-4",children:[t.jsx("p",{className:"text-sm text-muted-foreground",children:"Centralized logging with EFK (Elasticsearch, Fluentd, Kibana)."}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Log to stdout/stderr (12-factor app)"}),t.jsx("li",{children:"• Use structured JSON logging"}),t.jsx("li",{children:"• Access logs in Kibana dashboard"}),t.jsx("li",{children:"• Set appropriate log levels per env"})]})]})]})]}),t.jsx(_,{title:"ServiceMonitor for Prometheus (servicemonitor.yaml)",language:"yaml",code:`apiVersion: monitoring.coreos.com/v1
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
      app: my-application`}),t.jsx(_,{title:"View Logs with oc CLI",language:"bash",code:`# View pod logs
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
oc logs <pod-name> --tail=100`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"best-practices",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Best Practices"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Follow these guidelines for production-ready OpenShift deployments."})]}),t.jsx("div",{className:"grid gap-6",children:[{title:"Resource Management",icon:Ss,color:"text-blue-500",items:["Always set CPU and Memory requests/limits","Use Horizontal Pod Autoscaler (HPA) for auto-scaling","Set Pod Disruption Budgets (PDB) for high availability","Use resource quotas at namespace level"]},{title:"Security",icon:jt,color:"text-emerald-500",items:["Never run containers as root","Use SecurityContext with runAsNonRoot: true","Store secrets in OpenShift Secrets, not in images","Enable network policies to restrict pod communication","Scan images for vulnerabilities before deployment"]},{title:"Health & Resilience",icon:Me,color:"text-amber-500",items:["Implement liveness and readiness probes","Use rolling update strategy with maxUnavailable: 0","Configure appropriate initialDelaySeconds for probes","Handle SIGTERM gracefully for zero-downtime deploys"]},{title:"Configuration",icon:mt,color:"text-purple-500",items:["Externalize all configuration using ConfigMaps","Use different ConfigMaps per environment (dev/staging/prod)","Never hardcode environment-specific values in code","Use Kustomize or Helm for managing environments"]}].map((r,i)=>t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(r.icon,{className:`h-5 w-5 ${r.color}`}),r.title]})}),t.jsx(ge,{children:t.jsx("ul",{className:"grid md:grid-cols-2 gap-2",children:r.items.map((a,o)=>t.jsxs("li",{className:"flex items-start gap-2 text-sm text-muted-foreground",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0"}),a]},o))})})]},i))}),t.jsx(_,{title:"Production-Ready Deployment Template",language:"yaml",code:`apiVersion: apps/v1
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
          averageUtilization: 70`})]}),t.jsx(I,{}),t.jsxs("section",{id:"case-studies",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 9"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Real-world Case Studies"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Detailed production manifests for complex applications, including SonarQube and .NET Surroundings systems."})]}),t.jsxs("div",{className:"space-y-16",children:[t.jsxs("div",{className:"space-y-8",children:[t.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-bold uppercase tracking-wider",children:"Case Study: SonarQube Infrastructure"}),t.jsx("p",{className:"text-muted-foreground",children:"This production deployment configuration manages a SonarQube instance with persistent storage, custom environment variables, and optimized resource limits."}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[t.jsx(_,{title:"Deployment Manifest (SonarQube)",language:"yaml",code:`apiVersion: apps/v1
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
            claimName: sonar-pvc-data`}),t.jsxs("div",{className:"space-y-4",children:[t.jsx(_,{title:"Service Manifest",language:"yaml",code:`apiVersion: v1
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
  type: ClusterIP`}),t.jsx(_,{title:"Route Manifest (Edge Termination)",language:"yaml",code:`apiVersion: route.openshift.io/v1
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
    termination: edge`})]})]})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold uppercase tracking-wider",children:"Case Study: .NET Surroundings BuildConfig"}),t.jsx("p",{className:"text-muted-foreground",children:"Advanced Docker-based BuildConfig for a .NET microservice, featuring custom Dockerfile location and selective build triggers."}),t.jsx(_,{title:"BuildConfig (buildconfig.yaml)",language:"yaml",code:`apiVersion: build.openshift.io/v1
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
    - type: ImageChange`})]})]})]}),t.jsx(vn,{previous:{title:"GitHub Workflow",href:"/github-axa-usage"},next:{title:"Jenkins CI/CD",href:"/jenkins-guideline"}})]}),t.jsx("aside",{className:"hidden lg:block w-64 flex-shrink-0",children:t.jsxs("div",{className:"sticky top-28 space-y-4",children:[t.jsx("h4",{className:"font-bold text-sm text-muted-foreground uppercase tracking-wide",children:"On This Page"}),t.jsx("nav",{className:"space-y-1",children:jm.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${e===r.id?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[t.jsx(r.icon,{className:"h-4 w-4"}),r.title]},r.id))})]})})]})]})};var eo="rovingFocusGroup.onEntryFocus",xA={bubbles:!1,cancelable:!0},bn="RovingFocusGroup",[qo,Sg,gA]=Km(bn),[yA,Cg]=Ns(bn,[gA]),[vA,bA]=yA(bn),Tg=p.forwardRef((e,s)=>t.jsx(qo.Provider,{scope:e.__scopeRovingFocusGroup,children:t.jsx(qo.Slot,{scope:e.__scopeRovingFocusGroup,children:t.jsx(jA,{...e,ref:s})})}));Tg.displayName=bn;var jA=p.forwardRef((e,s)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:i=!1,dir:a,currentTabStopId:o,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:c,onEntryFocus:d,preventScrollOnEntryFocus:u=!1,...m}=e,h=p.useRef(null),f=Ue(s,h),g=cc(a),[x,y]=cn({prop:o,defaultProp:l??null,onChange:c,caller:bn}),[v,b]=p.useState(!1),N=Qe(d),S=Sg(n),E=p.useRef(!1),[A,j]=p.useState(0);return p.useEffect(()=>{const C=h.current;if(C)return C.addEventListener(eo,N),()=>C.removeEventListener(eo,N)},[N]),t.jsx(vA,{scope:n,orientation:r,dir:g,loop:i,currentTabStopId:x,onItemFocus:p.useCallback(C=>y(C),[y]),onItemShiftTab:p.useCallback(()=>b(!0),[]),onFocusableItemAdd:p.useCallback(()=>j(C=>C+1),[]),onFocusableItemRemove:p.useCallback(()=>j(C=>C-1),[]),children:t.jsx(Ce.div,{tabIndex:v||A===0?-1:0,"data-orientation":r,...m,ref:f,style:{outline:"none",...e.style},onMouseDown:he(e.onMouseDown,()=>{E.current=!0}),onFocus:he(e.onFocus,C=>{const M=!E.current;if(C.target===C.currentTarget&&M&&!v){const L=new CustomEvent(eo,xA);if(C.currentTarget.dispatchEvent(L),!L.defaultPrevented){const $=S().filter(Z=>Z.focusable),Y=$.find(Z=>Z.active),ie=$.find(Z=>Z.id===x),re=[Y,ie,...$].filter(Boolean).map(Z=>Z.ref.current);Rg(re,u)}}E.current=!1}),onBlur:he(e.onBlur,()=>b(!1))})})}),kg="RovingFocusGroupItem",Eg=p.forwardRef((e,s)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:i=!1,tabStopId:a,children:o,...l}=e,c=ir(),d=a||c,u=bA(kg,n),m=u.currentTabStopId===d,h=Sg(n),{onFocusableItemAdd:f,onFocusableItemRemove:g,currentTabStopId:x}=u;return p.useEffect(()=>{if(r)return f(),()=>g()},[r,f,g]),t.jsx(qo.ItemSlot,{scope:n,id:d,focusable:r,active:i,children:t.jsx(Ce.span,{tabIndex:m?0:-1,"data-orientation":u.orientation,...l,ref:s,onMouseDown:he(e.onMouseDown,y=>{r?u.onItemFocus(d):y.preventDefault()}),onFocus:he(e.onFocus,()=>u.onItemFocus(d)),onKeyDown:he(e.onKeyDown,y=>{if(y.key==="Tab"&&y.shiftKey){u.onItemShiftTab();return}if(y.target!==y.currentTarget)return;const v=SA(y,u.orientation,u.dir);if(v!==void 0){if(y.metaKey||y.ctrlKey||y.altKey||y.shiftKey)return;y.preventDefault();let N=h().filter(S=>S.focusable).map(S=>S.ref.current);if(v==="last")N.reverse();else if(v==="prev"||v==="next"){v==="prev"&&N.reverse();const S=N.indexOf(y.currentTarget);N=u.loop?CA(N,S+1):N.slice(S+1)}setTimeout(()=>Rg(N))}}),children:typeof o=="function"?o({isCurrentTabStop:m,hasTabStop:x!=null}):o})})});Eg.displayName=kg;var NA={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function wA(e,s){return s!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function SA(e,s,n){const r=wA(e.key,n);if(!(s==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(s==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return NA[r]}function Rg(e,s=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:s}),document.activeElement!==n))return}function CA(e,s){return e.map((n,r)=>e[(s+r)%e.length])}var TA=Tg,kA=Eg,ra="Tabs",[EA]=Ns(ra,[Cg]),Pg=Cg(),[RA,hc]=EA(ra),Ag=p.forwardRef((e,s)=>{const{__scopeTabs:n,value:r,onValueChange:i,defaultValue:a,orientation:o="horizontal",dir:l,activationMode:c="automatic",...d}=e,u=cc(l),[m,h]=cn({prop:r,onChange:i,defaultProp:a??"",caller:ra});return t.jsx(RA,{scope:n,baseId:ir(),value:m,onValueChange:h,orientation:o,dir:u,activationMode:c,children:t.jsx(Ce.div,{dir:u,"data-orientation":o,...d,ref:s})})});Ag.displayName=ra;var Dg="TabsList",Ig=p.forwardRef((e,s)=>{const{__scopeTabs:n,loop:r=!0,...i}=e,a=hc(Dg,n),o=Pg(n);return t.jsx(TA,{asChild:!0,...o,orientation:a.orientation,dir:a.dir,loop:r,children:t.jsx(Ce.div,{role:"tablist","aria-orientation":a.orientation,...i,ref:s})})});Ig.displayName=Dg;var Mg="TabsTrigger",_g=p.forwardRef((e,s)=>{const{__scopeTabs:n,value:r,disabled:i=!1,...a}=e,o=hc(Mg,n),l=Pg(n),c=Fg(o.baseId,r),d=Bg(o.baseId,r),u=r===o.value;return t.jsx(kA,{asChild:!0,...l,focusable:!i,active:u,children:t.jsx(Ce.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":d,"data-state":u?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:c,...a,ref:s,onMouseDown:he(e.onMouseDown,m=>{!i&&m.button===0&&m.ctrlKey===!1?o.onValueChange(r):m.preventDefault()}),onKeyDown:he(e.onKeyDown,m=>{[" ","Enter"].includes(m.key)&&o.onValueChange(r)}),onFocus:he(e.onFocus,()=>{const m=o.activationMode!=="manual";!u&&!i&&m&&o.onValueChange(r)})})})});_g.displayName=Mg;var Og="TabsContent",Lg=p.forwardRef((e,s)=>{const{__scopeTabs:n,value:r,forceMount:i,children:a,...o}=e,l=hc(Og,n),c=Fg(l.baseId,r),d=Bg(l.baseId,r),u=r===l.value,m=p.useRef(u);return p.useEffect(()=>{const h=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(h)},[]),t.jsx(Nt,{present:i||u,children:({present:h})=>t.jsx(Ce.div,{"data-state":u?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":c,hidden:!h,id:d,tabIndex:0,...o,ref:s,style:{...e.style,animationDuration:m.current?"0s":void 0},children:h&&a})})});Lg.displayName=Og;function Fg(e,s){return`${e}-trigger-${s}`}function Bg(e,s){return`${e}-content-${s}`}var PA=Ag,Vg=Ig,Ug=_g,$g=Lg;const AA=PA,zg=p.forwardRef(({className:e,...s},n)=>t.jsx(Vg,{ref:n,className:ae("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...s}));zg.displayName=Vg.displayName;const Hg=p.forwardRef(({className:e,isActive:s,children:n,...r},i)=>t.jsxs(Ug,{ref:i,className:ae("relative inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground z-10",e),...r,children:[s&&t.jsx(Ve.div,{layoutId:"activeTab",className:"absolute inset-0 rounded-sm bg-background shadow-sm",transition:{type:"spring",bounce:.2,duration:.6}}),t.jsx("span",{className:"relative z-20",children:n})]}));Hg.displayName=Ug.displayName;const Wg=p.forwardRef(({className:e,...s},n)=>t.jsx($g,{ref:n,className:ae("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...s}));Wg.displayName=$g.displayName;const DA=({snippets:e,className:s})=>{const n=Object.keys(e),[r,i]=p.useState(n[0]||"");return t.jsx("div",{className:ae("w-full space-y-4",s),children:t.jsxs(AA,{value:r,onValueChange:a=>i(a),className:"w-full",children:[t.jsx(zg,{className:"bg-muted/50 p-1 border border-border/50",children:n.map(a=>{var o;return t.jsx(Hg,{value:a,isActive:r===a,className:"px-4 py-2",children:((o=e[a])==null?void 0:o.title)||a},a)})}),t.jsx("div",{className:"mt-4",children:n.map(a=>{const o=e[a];return o?t.jsx(Wg,{value:a,className:"focus-visible:ring-0 mt-0",children:t.jsx(_,{title:o.title,code:o.code,language:o.language})},a):null})})]})})},Nm=[{id:"introduction",title:"1. Introduction",icon:ut},{id:"getting-access",title:"2. Getting Access",icon:hs},{id:"jenkinsfile-basics",title:"3. Jenkinsfile Basics",icon:Mt},{id:"build-test",title:"4. Build & Test",icon:Mp},{id:"deployment",title:"5. Deployment Pipelines",icon:pl},{id:"shared-libraries",title:"6. Shared Libraries",icon:SN},{id:"best-practices",title:"7. Best Practices",icon:jt},{id:"case-study",title:"8. Case Study: .NET",icon:ol}],IA=()=>{const[e,s]=p.useState("introduction"),n=[{label:"Home",href:"/"},{label:"DevOps & CI/CD"},{label:"Jenkins"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);s(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return Nm.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:"Jenkins CI/CD Guide",subtitle:"Build, test, and deploy applications using Jenkins pipelines on AXA's OpenShift platform.",breadcrumbs:n,readingTime:35}),t.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[t.jsxs("section",{id:"introduction",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Introduction"}),t.jsxs("p",{className:"text-xl text-muted-foreground leading-relaxed",children:["Jenkins is AXA's primary CI/CD automation server, hosted on OpenShift. We use ",t.jsx("strong",{children:"Jenkinsfile"})," in each project repository to define build, test, and deployment pipelines."]})]}),t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Pipeline as Code",icon:Mt},{text:"Jenkinsfile per Repo",icon:Dj},{text:"OpenShift Integration",icon:Oe},{text:"Automated Testing",icon:Mp},{text:"Multi-branch Pipelines",icon:ws},{text:"Declarative Syntax",icon:$t}].map((r,i)=>t.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[t.jsx(r.icon,{className:"h-5 w-5 text-primary"}),t.jsx("span",{className:"font-semibold text-sm",children:r.text})]},i))}),t.jsxs("div",{className:"p-8 rounded-3xl bg-slate-900 border border-slate-700 font-mono text-xs text-blue-400",children:[t.jsx("div",{className:"text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-4",children:"AXA CI/CD Pipeline Flow"}),t.jsx("pre",{className:"leading-relaxed",children:`┌─────────────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────────────┘`})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-2 text-amber-600",children:[t.jsx(fs,{className:"h-5 w-5"}),t.jsx("h4",{className:"font-bold",children:"AXA Jenkins Standard"})]}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Every project at AXA must include a ",t.jsx("code",{className:"text-primary bg-muted px-1.5 py-0.5 rounded",children:"Jenkinsfile"})," in the repository root. This file defines the complete CI/CD pipeline using declarative syntax. The pipeline triggers OpenShift Builds and manages deployments across environments."]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"getting-access",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Getting Access"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Set up your Jenkins access and configure credentials."})]}),t.jsxs("div",{className:"p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6",children:[t.jsxs("div",{className:"flex items-center gap-3 text-cyan-600",children:[t.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10",children:t.jsx(ce,{className:"h-6 w-6"})}),t.jsx("h3",{className:"text-2xl font-bold",children:"Access Checklist"})]}),t.jsx("div",{className:"grid gap-4",children:[{step:"Request Jenkins Access",desc:"Submit access request through AXA service portal for Jenkins."},{step:"Login to Jenkins",desc:"Access Jenkins via SSO at https://jenkins.apps.openshift.axa.com"},{step:"Find Your Project",desc:"Navigate to your team's folder/job in the Jenkins dashboard."},{step:"Configure Credentials",desc:"Add required credentials (Git tokens, registry secrets) in Jenkins Credentials."},{step:"Create Pipeline Job",desc:"Create a new Pipeline job pointing to your repository's Jenkinsfile."}].map((r,i)=>t.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[t.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-sm",children:i+1}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-foreground",children:r.step}),t.jsx("p",{className:"text-sm text-muted-foreground",children:r.desc})]})]},i))})]}),t.jsx(_,{title:"Required Jenkins Credentials",language:"groovy",code:`// Common credentials used in AXA Jenkins pipelines

// Git credentials for cloning repositories
credentials('github-axa-token')        // GitHub AXA personal access token

// OpenShift service account token
credentials('openshift-token')          // For oc login

// SonarQube token for code analysis
credentials('sonarqube-token')          // SonarQube authentication

// Container registry credentials (if external)
credentials('registry-credentials')     // Docker registry auth

// Notification credentials
credentials('teams-webhook')            // Microsoft Teams webhook URL`})]}),t.jsx(I,{}),t.jsxs("section",{id:"jenkinsfile-basics",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Jenkinsfile Basics"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Understanding the declarative pipeline syntax and structure."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"Basic Jenkinsfile Structure",language:"groovy",code:`// Jenkinsfile - Declarative Pipeline Syntax
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
}`}),t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"Declarative vs Scripted Pipeline"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-4 py-3 text-left",children:"Aspect"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Declarative (Preferred)"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Scripted"})]})}),t.jsxs("tbody",{className:"divide-y",children:[t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Syntax"}),t.jsx("td",{className:"px-4 py-2",children:"Structured, opinionated"}),t.jsx("td",{className:"px-4 py-2",children:"Flexible, Groovy-based"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Learning Curve"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{className:"bg-emerald-500",children:"Easier"})}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"secondary",children:"Steeper"})})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Error Checking"}),t.jsx("td",{className:"px-4 py-2",children:"Syntax validation built-in"}),t.jsx("td",{className:"px-4 py-2",children:"Runtime errors"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Restart"}),t.jsx("td",{className:"px-4 py-2",children:"Stage restart supported"}),t.jsx("td",{className:"px-4 py-2",children:"Not supported"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Use Case"}),t.jsx("td",{className:"px-4 py-2",children:"Most pipelines"}),t.jsx("td",{className:"px-4 py-2",children:"Complex logic"})]})]})]})})]}),t.jsx(_,{title:"Using script{} Block for Complex Logic",language:"groovy",code:`stage('Dynamic Stage') {
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
}`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"build-test",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Build & Test"}),t.jsxs("p",{className:"text-lg text-muted-foreground",children:["Configure ",t.jsx(vg,{children:"build and test stages"})," for different technology stacks."]})]}),t.jsx("div",{className:"space-y-8",children:t.jsx(DA,{snippets:{maven:{title:"Maven/Java",language:"groovy",code:`pipeline {
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
}`}}})})]}),t.jsx(I,{}),t.jsxs("section",{id:"deployment",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Deployment Pipelines"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Trigger OpenShift Builds and manage deployments across environments."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"Complete CI/CD Pipeline with OpenShift",language:"groovy",code:`pipeline {
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
}`}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ Deployment Best Practices"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsxs("li",{children:["• Use input"," for production approvals"]}),t.jsx("li",{children:"• Tag images with build numbers"}),t.jsx("li",{children:"• Run smoke tests after each deploy"}),t.jsx("li",{children:"• Keep production deployments immutable"}),t.jsx("li",{children:"• Use parallel stages for faster builds"})]})]}),t.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ Common Mistakes"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Deploying without running tests"}),t.jsx("li",{children:"• Not waiting for rollout to complete"}),t.jsx("li",{children:"• Hardcoding credentials in Jenkinsfile"}),t.jsxs("li",{children:["• Missing post"," failure handlers"]}),t.jsx("li",{children:"• No manual approval for production"})]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"shared-libraries",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Shared Libraries"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Reuse pipeline code across projects with shared libraries."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"Shared Library Structure",language:"bash",code:`# Repository: github.axa.com/devops/jenkins-shared-library
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
        └── deployment.yaml`}),t.jsx(_,{title:"vars/deployToOpenshift.groovy",language:"groovy",code:`// Shared library function for OpenShift deployment
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
}`}),t.jsx(_,{title:"Using Shared Library in Jenkinsfile",language:"groovy",code:`// Import shared library at the top of Jenkinsfile
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
}`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"best-practices",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Best Practices"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Follow these guidelines for maintainable, secure, and efficient pipelines."})]}),t.jsx("div",{className:"grid gap-6",children:[{title:"Pipeline Structure",icon:BN,color:"text-blue-500",items:["Use declarative syntax over scripted","Keep Jenkinsfile in repository root","Use meaningful stage names","Fail fast - run quick checks first","Use parallel stages where possible"]},{title:"Security",icon:jt,color:"text-emerald-500",items:["Never hardcode credentials in Jenkinsfile","Use Jenkins Credentials Manager","Mask sensitive values in logs","Restrict access to production jobs","Audit pipeline changes"]},{title:"Performance",icon:Np,color:"text-amber-500",items:["Cache dependencies between builds","Use lightweight agents when possible","Parallelize independent stages","Set appropriate timeouts","Clean workspace after builds"]},{title:"Maintainability",icon:mt,color:"text-purple-500",items:["Use shared libraries for common code","Document complex pipeline logic","Version control your Jenkinsfiles","Use environment variables for config","Test pipeline changes on feature branches"]}].map((r,i)=>t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(r.icon,{className:`h-5 w-5 ${r.color}`}),r.title]})}),t.jsx(ge,{children:t.jsx("ul",{className:"grid md:grid-cols-2 gap-2",children:r.items.map((a,o)=>t.jsxs("li",{className:"flex items-start gap-2 text-sm text-muted-foreground",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0"}),a]},o))})})]},i))}),t.jsx(_,{title:"Complete Jenkinsfile Template",language:"groovy",code:`@Library('axa-jenkins-shared-library@main') _

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
}`})]}),t.jsx(I,{}),t.jsxs("section",{id:"case-study",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Case Study: .NET Production Pipeline"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"A real-world example of a comprehensive .NET pipeline featuring SonarScanner integration, Artifactory authentication, and advanced test coverage processing."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:[{title:"NuGet/Artifactory",desc:"Dynamic nuget.config generation with credentials."},{title:"SonarScanner",desc:"Full analysis with PR vs Branch conditional logic."},{title:"Coverage Processing",desc:"Automated path fixing for SonarQube compatibility."}].map((r,i)=>t.jsxs("div",{className:"p-4 rounded-xl preview-card border bg-background/50",children:[t.jsx("h4",{className:"font-bold text-sm mb-1",children:r.title}),t.jsx("p",{className:"text-xs text-muted-foreground",children:r.desc})]},i))}),t.jsx(_,{title:"Production .NET Jenkinsfile (Surrounding Systems)",language:"groovy",code:`pipeline {
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
}`}),t.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2 text-primary",children:[t.jsx(mt,{className:"h-5 w-5"})," Key Takeaways"]}),t.jsxs("ul",{className:"space-y-3 text-sm text-muted-foreground",children:[t.jsxs("li",{className:"flex gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 shrink-0 mt-0.5"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Dynamic Config"}),": Generating `nuget.config` on the fly prevents credential leakage and ensures clean builds."]})]}),t.jsxs("li",{className:"flex gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 shrink-0 mt-0.5"}),t.jsxs("span",{children:[t.jsx("strong",{children:"PR Analysis"}),": Conditional use of `sonar.pullrequest` arguments allows Jenkins to report status directly back to GitHub PRs."]})]}),t.jsxs("li",{className:"flex gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 shrink-0 mt-0.5"}),t.jsxs("span",{children:[t.jsx("strong",{children:"Path Normalization"}),": Using `sed` or `tr` to fix coverage reports is often necessary when tools generate absolute paths that don't match the SonarQube workspace."]})]})]})]})]})]}),t.jsx(vn,{previous:{title:"OpenShift Platform",href:"/openshift-guideline"},next:{title:"SonarQube",href:"/sonarqube-guideline"}})]}),t.jsx("aside",{className:"hidden lg:block w-64 flex-shrink-0",children:t.jsxs("div",{className:"sticky top-28 space-y-4",children:[t.jsx("h4",{className:"font-bold text-sm text-muted-foreground uppercase tracking-wide",children:"On This Page"}),t.jsx("nav",{className:"space-y-1",children:Nm.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${e===r.id?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[t.jsx(r.icon,{className:"h-4 w-4"}),r.title]},r.id))})]})})]})]})},wm=[{id:"introduction",title:"1. Introduction",icon:ut},{id:"getting-started",title:"2. Getting Started",icon:$t},{id:"quality-gates",title:"3. Quality Gates",icon:Vi},{id:"code-analysis",title:"4. Code Analysis",icon:Fi},{id:"ide-integration",title:"5. IDE Integration",icon:dl},{id:"jenkins-integration",title:"6. Jenkins Integration",icon:ws},{id:"best-practices",title:"7. Best Practices",icon:jt}],MA=()=>{const[e,s]=p.useState("introduction"),n=[{label:"Home",href:"/"},{label:"DevOps & CI/CD"},{label:"SonarQube"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio||c.intersectionRatio===l.intersectionRatio&&c.boundingClientRect.top<l.boundingClientRect.top?c:l);s(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return wm.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:"SonarQube Code Quality Guide",subtitle:"Maintain high code quality standards using SonarQube for static code analysis, security scanning, and technical debt management.",breadcrumbs:n,readingTime:30}),t.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[t.jsxs("section",{id:"introduction",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Introduction"}),t.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"SonarQube is AXA's code quality and security analysis platform, hosted on OpenShift. It helps maintain clean, secure, and maintainable code across all projects."})]}),t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Static Code Analysis",icon:Fi},{text:"Security Vulnerabilities",icon:jt},{text:"Code Smells",icon:nr},{text:"Coverage Metrics",icon:pd},{text:"Technical Debt",icon:Ca},{text:"Quality Gates",icon:Vi}].map((r,i)=>t.jsxs("div",{className:"glass flex items-center gap-3 p-4 rounded-xl border border-border/50",children:[t.jsx(r.icon,{className:"h-5 w-5 text-primary"}),t.jsx("span",{className:"font-semibold text-sm",children:r.text})]},i))}),t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"SonarQube Issue Types"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-4 py-3 text-left",children:"Type"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Description"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Priority"})]})}),t.jsxs("tbody",{className:"divide-y",children:[t.jsxs("tr",{children:[t.jsxs("td",{className:"px-4 py-2 font-medium flex items-center gap-2",children:[t.jsx(nr,{className:"h-4 w-4 text-red-500"})," Bug"]}),t.jsx("td",{className:"px-4 py-2",children:"Code that is demonstrably wrong or highly likely to behave unexpectedly"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"destructive",children:"Critical"})})]}),t.jsxs("tr",{children:[t.jsxs("td",{className:"px-4 py-2 font-medium flex items-center gap-2",children:[t.jsx(jt,{className:"h-4 w-4 text-orange-500"})," Vulnerability"]}),t.jsx("td",{className:"px-4 py-2",children:"Security issue that could be exploited by attackers"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"destructive",children:"Critical"})})]}),t.jsxs("tr",{children:[t.jsxs("td",{className:"px-4 py-2 font-medium flex items-center gap-2",children:[t.jsx(fs,{className:"h-4 w-4 text-amber-500"})," Security Hotspot"]}),t.jsx("td",{className:"px-4 py-2",children:"Security-sensitive code that requires manual review"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"secondary",children:"Review"})})]}),t.jsxs("tr",{children:[t.jsxs("td",{className:"px-4 py-2 font-medium flex items-center gap-2",children:[t.jsx(aj,{className:"h-4 w-4 text-yellow-500"})," Code Smell"]}),t.jsx("td",{className:"px-4 py-2",children:"Maintainability issues that make code harder to understand"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"Medium"})})]})]})]})})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(cl,{className:"h-5 w-5 text-emerald-500"})," Key Metrics"]})}),t.jsxs(ge,{className:"space-y-3",children:[t.jsxs("div",{className:"flex justify-between text-sm",children:[t.jsx("span",{className:"text-muted-foreground",children:"Reliability Rating"}),t.jsx("span",{className:"font-medium",children:"A-E (bugs)"})]}),t.jsxs("div",{className:"flex justify-between text-sm",children:[t.jsx("span",{className:"text-muted-foreground",children:"Security Rating"}),t.jsx("span",{className:"font-medium",children:"A-E (vulnerabilities)"})]}),t.jsxs("div",{className:"flex justify-between text-sm",children:[t.jsx("span",{className:"text-muted-foreground",children:"Maintainability Rating"}),t.jsx("span",{className:"font-medium",children:"A-E (code smells)"})]}),t.jsxs("div",{className:"flex justify-between text-sm",children:[t.jsx("span",{className:"text-muted-foreground",children:"Coverage"}),t.jsx("span",{className:"font-medium",children:"% lines tested"})]}),t.jsxs("div",{className:"flex justify-between text-sm",children:[t.jsx("span",{className:"text-muted-foreground",children:"Duplications"}),t.jsx("span",{className:"font-medium",children:"% duplicated lines"})]})]})]}),t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(Ca,{className:"h-5 w-5 text-blue-500"})," Rating Scale"]})}),t.jsxs(ge,{className:"space-y-3",children:[t.jsxs("div",{className:"flex justify-between text-sm",children:[t.jsx("span",{className:"font-medium text-emerald-600",children:"A"}),t.jsx("span",{className:"text-muted-foreground",children:"No issues (best)"})]}),t.jsxs("div",{className:"flex justify-between text-sm",children:[t.jsx("span",{className:"font-medium text-green-600",children:"B"}),t.jsx("span",{className:"text-muted-foreground",children:"Minor issues only"})]}),t.jsxs("div",{className:"flex justify-between text-sm",children:[t.jsx("span",{className:"font-medium text-yellow-600",children:"C"}),t.jsx("span",{className:"text-muted-foreground",children:"At least 1 major issue"})]}),t.jsxs("div",{className:"flex justify-between text-sm",children:[t.jsx("span",{className:"font-medium text-orange-600",children:"D"}),t.jsx("span",{className:"text-muted-foreground",children:"At least 1 critical issue"})]}),t.jsxs("div",{className:"flex justify-between text-sm",children:[t.jsx("span",{className:"font-medium text-red-600",children:"E"}),t.jsx("span",{className:"text-muted-foreground",children:"At least 1 blocker issue"})]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"getting-started",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Getting Started"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Set up your project for SonarQube analysis."})]}),t.jsxs("div",{className:"p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 space-y-6",children:[t.jsxs("div",{className:"flex items-center gap-3 text-cyan-600",children:[t.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10",children:t.jsx(ce,{className:"h-6 w-6"})}),t.jsx("h3",{className:"text-2xl font-bold",children:"Setup Checklist"})]}),t.jsx("div",{className:"grid gap-4",children:[{step:"Access SonarQube",desc:"Login to https://sonarqube.apps.openshift.axa.com with SSO credentials."},{step:"Create Project",desc:"Create a new project or request access to existing project from admin."},{step:"Generate Token",desc:"Go to My Account → Security → Generate Token for CI/CD integration."},{step:"Configure Project",desc:"Create sonar-project.properties file in your repository root."},{step:"Add to Pipeline",desc:"Add SonarQube analysis stage to your Jenkinsfile."}].map((r,i)=>t.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50",children:[t.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-sm",children:i+1}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-foreground",children:r.step}),t.jsx("p",{className:"text-sm text-muted-foreground",children:r.desc})]})]},i))})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"sonar-project.properties",language:"properties",code:`# Required metadata
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
sonar.sourceEncoding=UTF-8`}),t.jsx(_,{title:"Running Analysis Locally",language:"bash",code:`# Install SonarScanner CLI
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
  -Dsonar.projectKey=my-application`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"quality-gates",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Quality Gates"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Quality Gates define the conditions that code must meet before being deployed."})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-2 text-amber-600",children:[t.jsx(fs,{className:"h-5 w-5"}),t.jsx("h4",{className:"font-bold",children:"AXA Quality Gate Standard"})]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:'All AXA projects must pass the default "AXA Standard" Quality Gate before deployment. This gate enforces security, reliability, and maintainability standards. Builds that fail the Quality Gate should not be deployed to production.'})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"AXA Standard Quality Gate Conditions"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase text-muted-foreground",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-4 py-3 text-left",children:"Metric"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Condition"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Applies To"})]})}),t.jsxs("tbody",{className:"divide-y",children:[t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"New Bugs"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{className:"bg-emerald-500",children:"= 0"})}),t.jsx("td",{className:"px-4 py-2",children:"New code"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"New Vulnerabilities"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{className:"bg-emerald-500",children:"= 0"})}),t.jsx("td",{className:"px-4 py-2",children:"New code"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"New Security Hotspots Reviewed"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"secondary",children:"= 100%"})}),t.jsx("td",{className:"px-4 py-2",children:"New code"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"New Coverage"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"≥ 80%"})}),t.jsx("td",{className:"px-4 py-2",children:"New code"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"New Duplicated Lines"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"≤ 3%"})}),t.jsx("td",{className:"px-4 py-2",children:"New code"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Reliability Rating"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{className:"bg-emerald-500",children:"A"})}),t.jsx("td",{className:"px-4 py-2",children:"New code"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Security Rating"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{className:"bg-emerald-500",children:"A"})}),t.jsx("td",{className:"px-4 py-2",children:"New code"})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-medium",children:"Maintainability Rating"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{className:"bg-emerald-500",children:"A"})}),t.jsx("td",{className:"px-4 py-2",children:"New code"})]})]})]})})]}),t.jsx(_,{title:"Waiting for Quality Gate in Jenkins",language:"groovy",code:`stage('SonarQube Analysis') {
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
}`})]}),t.jsx(I,{}),t.jsxs("section",{id:"code-analysis",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Analysis"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Understanding analysis results and fixing issues."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsx(_,{title:"Java Analysis Configuration",language:"xml",code:`<!-- pom.xml -->
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
</build>`}),t.jsx(_,{title:"JavaScript/TypeScript Configuration",language:"json",code:`// sonar-project.properties
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
}`})]}),t.jsx(_,{title:".NET Analysis Configuration",language:"bash",code:`# Install SonarScanner for .NET
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
dotnet sonarscanner end /d:sonar.token="your-token"`}),t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold",children:"Common Issue Categories"}),t.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{category:"SQL Injection",severity:"Critical",rule:"S3649",fix:"Use parameterized queries"},{category:"Hard-coded Credentials",severity:"Critical",rule:"S2068",fix:"Use environment variables"},{category:"Null Pointer",severity:"Major",rule:"S2259",fix:"Add null checks or use Optional"},{category:"Empty Catch Block",severity:"Major",rule:"S108",fix:"Log exception or rethrow"},{category:"Cognitive Complexity",severity:"Minor",rule:"S3776",fix:"Extract methods, simplify logic"},{category:"Unused Variables",severity:"Minor",rule:"S1481",fix:"Remove or use the variable"}].map((r,i)=>t.jsxs("div",{className:"p-4 rounded-xl border border-border/50 bg-background/50",children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("span",{className:"font-bold text-sm",children:r.category}),t.jsx(k,{variant:r.severity==="Critical"?"destructive":r.severity==="Major"?"secondary":"outline",children:r.severity})]}),t.jsxs("p",{className:"text-xs text-muted-foreground",children:["Rule: ",r.rule]}),t.jsxs("p",{className:"text-xs text-emerald-600 mt-1",children:["Fix: ",r.fix]})]},i))})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"ide-integration",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"IDE Integration"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Use SonarLint to catch issues before committing code."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:[{name:"VS Code",plugin:"SonarLint extension",icon:Mt},{name:"IntelliJ IDEA",plugin:"SonarLint plugin",icon:ol},{name:"Visual Studio",plugin:"SonarLint extension",icon:Oi}].map((r,i)=>t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(r.icon,{className:"h-5 w-5 text-primary"}),r.name]})}),t.jsx(ge,{children:t.jsx("p",{className:"text-sm text-muted-foreground",children:r.plugin})})]},i))}),t.jsx(_,{title:"SonarLint Connected Mode (VS Code settings.json)",language:"json",code:`{
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
}`}),t.jsx(_,{title:"SonarLint Connected Mode (IntelliJ)",language:"text",code:`1. Install SonarLint plugin from JetBrains Marketplace

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
   - Issues will match exactly what CI/CD sees`}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ SonarLint Benefits"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Real-time feedback while coding"}),t.jsx("li",{children:"• Quick fixes for common issues"}),t.jsx("li",{children:"• Synced rules with SonarQube server"}),t.jsx("li",{children:"• Reduced CI/CD failures"}),t.jsx("li",{children:"• Educational issue descriptions"})]})]}),t.jsxs("div",{className:"p-5 rounded-xl bg-blue-500/5 border border-blue-500/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-blue-600 mb-2",children:"💡 Tips"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Use Connected Mode to match CI rules"}),t.jsx("li",{children:"• Configure token as env variable"}),t.jsx("li",{children:"• Enable auto-analysis on save"}),t.jsx("li",{children:"• Review issue descriptions to learn"}),t.jsx("li",{children:"• Use keyboard shortcuts for quick fixes"})]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"jenkins-integration",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Jenkins Integration"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Automate code quality checks in your CI/CD pipeline."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsx(_,{title:"Complete SonarQube Pipeline Integration",language:"groovy",code:`pipeline {
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
}`}),t.jsx(_,{title:"Pull Request Analysis (Branch Analysis)",language:"groovy",code:`stage('SonarQube PR Analysis') {
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
}`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"best-practices",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Best Practices"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Maximize code quality with these guidelines."})]}),t.jsx("div",{className:"grid gap-6",children:[{title:"Fix as You Code",icon:nr,color:"text-red-500",items:["Use SonarLint in your IDE for real-time feedback","Fix issues immediately rather than accumulating debt","Don't merge code that fails Quality Gate","Prioritize security vulnerabilities and bugs","Address code smells during refactoring"]},{title:"Test Coverage",icon:pd,color:"text-emerald-500",items:["Maintain minimum 80% coverage on new code","Focus on meaningful tests, not just coverage numbers","Test edge cases and error conditions","Include integration tests for critical paths","Review coverage reports regularly"]},{title:"Security First",icon:jt,color:"text-amber-500",items:["Review all security hotspots immediately","Never ignore security vulnerabilities","Use secure coding patterns consistently","Keep dependencies updated","Follow OWASP guidelines"]},{title:"Technical Debt Management",icon:Ca,color:"text-purple-500",items:["Address new issues before merging","Allocate 20% of sprint time to debt reduction","Set debt reduction goals per release","Focus on high-impact areas first","Track debt trends over time"]}].map((r,i)=>t.jsxs(pe,{className:"glass shadow-sm",children:[t.jsx(ye,{children:t.jsxs(ve,{className:"text-lg flex items-center gap-2",children:[t.jsx(r.icon,{className:`h-5 w-5 ${r.color}`}),r.title]})}),t.jsx(ge,{children:t.jsx("ul",{className:"grid md:grid-cols-2 gap-2",children:r.items.map((a,o)=>t.jsxs("li",{className:"flex items-start gap-2 text-sm text-muted-foreground",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0"}),a]},o))})})]},i))}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-emerald-600 mb-2",children:"✅ DO"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Run analysis on every PR"}),t.jsx("li",{children:"• Block merges on Quality Gate failure"}),t.jsx("li",{children:"• Use SonarLint connected mode"}),t.jsx("li",{children:"• Review reports regularly"}),t.jsx("li",{children:"• Set team quality goals"})]})]}),t.jsxs("div",{className:"p-5 rounded-xl bg-destructive/5 border border-destructive/20",children:[t.jsx("p",{className:"text-xs font-bold uppercase text-destructive mb-2",children:"❌ DON'T"}),t.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[t.jsx("li",{children:"• Disable Quality Gate for deadlines"}),t.jsx("li",{children:"• Ignore security vulnerabilities"}),t.jsx("li",{children:"• Add exclusions to hide issues"}),t.jsx("li",{children:'• Skip analysis for "small" changes'}),t.jsx("li",{children:"• Blame developers for legacy issues"})]})]})]})]}),t.jsx(vn,{previous:{title:"Jenkins CI/CD",href:"/jenkins-guideline"},next:{title:"GitHub Workflow",href:"/github-axa-usage"}})]}),t.jsx("aside",{className:"hidden lg:block w-64 flex-shrink-0",children:t.jsxs("div",{className:"sticky top-28 space-y-4",children:[t.jsx("h4",{className:"font-bold text-sm text-muted-foreground uppercase tracking-wide",children:"On This Page"}),t.jsx("nav",{className:"space-y-1",children:wm.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${e===r.id?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[t.jsx(r.icon,{className:"h-4 w-4"}),r.title]},r.id))})]})})]})]})},Sm=[{id:"core-principles",title:"1. Core Principles",icon:un},{id:"naming",title:"2. Meaningful Naming",icon:Mt},{id:"solid",title:"3. SOLID Principles",icon:Oe},{id:"smells",title:"4. Code Smells",icon:fs},{id:"error-handling",title:"5. Error Handling",icon:jt},{id:"testing",title:"6. Clean Testing",icon:rt}],_A=()=>{const[e,s]=p.useState("core-principles"),n=[{label:"Home",href:"/"},{label:"Architecture & Standards"},{label:"Clean Code"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio?c:l);s(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return Sm.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:"Clean Code & Craftsmanship",subtitle:"Principles and best practices for writing readable, maintainable, and professional code.",breadcrumbs:n,readingTime:25}),t.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[t.jsxs("section",{id:"core-principles",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Core Principles"}),t.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"Clean code is not just about making code work; it's about making it sustainable, readable, and easy to modify by others."})]}),t.jsx("div",{className:"grid sm:grid-cols-2 gap-6",children:[{title:"KISS (Keep It Simple, Stupid)",desc:"Avoid unnecessary complexity. Simple code is easier to maintain and has fewer bugs.",icon:De,color:"yellow"},{title:"DRY (Don't Repeat Yourself)",desc:"Every piece of knowledge should have a single, unambiguous representation in the system.",icon:Vi,color:"blue"},{title:"YAGNI (You Ain't Gonna Need It)",desc:"Don't add functionality until it's actually required. Avoid premature optimization.",icon:jt,color:"green"},{title:"Boy Scout Rule",desc:"Always leave the code cleaner than you found it. Small, continuous improvements matter.",icon:un,color:"purple"}].map((r,i)=>t.jsxs("div",{className:"glass p-6 rounded-2xl border border-border/50 space-y-3",children:[t.jsx("div",{className:`w-10 h-10 rounded-lg bg-${r.color}-500/10 flex items-center justify-center text-${r.color}-500`,children:t.jsx(r.icon,{className:"h-6 w-6"})}),t.jsx("h4",{className:"font-bold text-lg",children:r.title}),t.jsx("p",{className:"text-sm text-muted-foreground",children:r.desc})]},i))})]}),t.jsx(I,{}),t.jsxs("section",{id:"naming",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Meaningful Naming"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Names should reveal intent. If a name requires a comment, then the name does not reveal its intent."})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-3",children:[t.jsx("h4",{className:"font-bold text-destructive",children:"❌ Bad Naming"}),t.jsxs("ul",{className:"text-sm space-y-2 text-muted-foreground",children:[t.jsxs("li",{children:["• ",t.jsx("code",{className:"text-destructive",children:"int d; // elapsed time in days"})]}),t.jsxs("li",{children:["• ",t.jsx("code",{className:"text-destructive",children:"void Process(Data data)"})]}),t.jsxs("li",{children:["• ",t.jsxs("code",{className:"text-destructive",children:["var list = new List","<","User",">","();"]})]}),t.jsxs("li",{children:["• ",t.jsx("code",{className:"text-destructive",children:"bool flag = true;"})]})]})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3",children:[t.jsx("h4",{className:"font-bold text-emerald-600",children:"✅ Clean Naming"}),t.jsxs("ul",{className:"text-sm space-y-2 text-muted-foreground",children:[t.jsxs("li",{children:["• ",t.jsx("code",{className:"text-emerald-600",children:"int elapsedTimeInDays;"})]}),t.jsxs("li",{children:["• ",t.jsx("code",{className:"text-emerald-600",children:"void ProcessOrder(Order order)"})]}),t.jsxs("li",{children:["• ",t.jsxs("code",{className:"text-emerald-600",children:["var activeUsers = new List","<","User",">","();"]})]}),t.jsxs("li",{children:["• ",t.jsx("code",{className:"text-emerald-600",children:"bool isOrderValid = true;"})]})]})]})]}),t.jsx(_,{title:"Function Smallness & Single Purpose",language:"typescript",code:`// ❌ Bad: Function does too many things
function handleForm(data: any) {
  validate(data);
  saveToDb(data);
  sendEmail(data);
  updateUI();
}

// ✅ Good: One thing per function
async function submitOrder(order: Order) {
  const validatedOrder = await validateOrder(order);
  const savedOrder = await saveOrderToDatabase(validatedOrder);
  notifyUserCompletion(savedOrder.id);
}`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"solid",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"SOLID Principles"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Five design principles intended to make software designs more understandable, flexible, and maintainable."})]}),t.jsx("div",{className:"grid gap-6",children:[{letter:"S",name:"Single Responsibility",desc:"A class should have one, and only one, reason to change."},{letter:"O",name:"Open/Closed",desc:"Software entities should be open for extension, but closed for modification."},{letter:"L",name:"Liskov Substitution",desc:"Derived classes must be substitutable for their base classes."},{letter:"I",name:"Interface Segregation",desc:"Clients should not be forced to depend on methods they do not use."},{letter:"D",name:"Dependency Inversion",desc:"Depend upon abstractions, not concretions."}].map((r,i)=>t.jsxs("div",{className:"flex gap-6 p-6 rounded-3xl border border-border/50 bg-background/50 hover:border-primary/30 transition-colors",children:[t.jsx("div",{className:"flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-black text-3xl",children:r.letter}),t.jsxs("div",{className:"space-y-1",children:[t.jsx("h4",{className:"font-bold text-xl",children:r.name}),t.jsx("p",{className:"text-muted-foreground",children:r.desc})]})]},i))}),t.jsx(_,{title:"Dependency Inversion Example",language:"typescript",code:`// Interface (Abstraction)
interface MessageService {
  send(message: string): void;
}

// Implementations (Details)
class EmailService implements MessageService {
  send(message: string) { /* send email */ }
}

// Client depends on Abstraction, not Detail
class NotificationManager {
  constructor(private service: MessageService) {}
  
  notify(msg: string) {
    this.service.send(msg);
  }
}`})]}),t.jsx(I,{}),t.jsxs("section",{id:"smells",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Code Smells"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Signs that indicate your code might need refactoring."})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[t.jsx(fs,{className:"h-5 w-5 text-amber-600"})," Common Smells"]}),t.jsxs("ul",{className:"text-sm space-y-3 text-muted-foreground",children:[t.jsxs("li",{children:[t.jsx("strong",{children:"• Long Method:"})," Functions larger than 20-30 lines."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"• Large Class:"})," Classes trying to do too much."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"• Primitive Obsession:"})," Using primitives for domain concepts (e.g., string for Email)."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"• Shotgun Surgery:"})," One change requires small changes to many classes."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"• Deep Nesting:"})," More than 2 levels of if/loops."]})]})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[t.jsx(dl,{className:"h-5 w-5 text-emerald-600"})," Quick Fixes"]}),t.jsxs("ul",{className:"text-sm space-y-3 text-muted-foreground",children:[t.jsxs("li",{children:[t.jsx("strong",{children:"• Extract Method:"})," Break large functions into smaller ones."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"• Replace Temp with Query:"})," Use a function instead of a local variable."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"• Guard Clauses:"})," Use early returns to reduce nesting."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"• Value Objects:"})," Create classes for domain concepts."]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"error-handling",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Error Handling"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Handle errors gracefully without cluttering the business logic."})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20",children:[t.jsx("h4",{className:"font-bold mb-4",children:"Error Handling Principles"}),t.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:["Prefer Exceptions over Error Codes","Use meaningful error messages","Don't ignore caught exceptions","Handle errors at the right level","Create custom domain exceptions","Don't return null (return Empty/Optional)"].map((r,i)=>t.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[t.jsx(ce,{className:"h-4 w-4 text-primary"}),t.jsx("span",{children:r})]},i))})]}),t.jsx(_,{title:"Guard Clauses & Early Return",language:"typescript",code:`// ❌ Deeply nested
function withdraw(amount: number) {
  if (amount > 0) {
    if (balance >= amount) {
      balance -= amount;
      return true;
    } else {
      throw new Error("Insufficient funds");
    }
  }
}

// ✅ Clean with Guard Clauses
function withdraw(amount: number) {
  if (amount <= 0) throw new InvalidAmountError();
  if (balance < amount) throw new InsufficientFundsError();

  balance -= amount;
  return true;
}`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"testing",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Clean Testing"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Tests keep your code flexible, maintainable, and reusable."})]}),t.jsxs("div",{className:"p-8 rounded-3xl bg-pink-500/5 border border-pink-500/10 space-y-6",children:[t.jsxs("div",{className:"flex items-center gap-3 text-pink-600",children:[t.jsx("div",{className:"p-2 rounded-lg bg-pink-500/10",children:t.jsx(rt,{className:"h-6 w-6"})}),t.jsx("h3",{className:"text-2xl font-bold",children:"F.I.R.S.T. Principles"})]}),t.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-5",children:[{l:"F",name:"Fast",desc:"Tests should run quickly."},{l:"I",name:"Independent",desc:"Tests should not depend on each other."},{l:"R",name:"Repeatable",desc:"Should work in any environment."},{l:"S",name:"Self-Validating",desc:"Have a boolean outcome."},{l:"T",name:"Timely",desc:"Written before production code."}].map((r,i)=>t.jsxs("div",{className:"text-center space-y-2",children:[t.jsx("div",{className:"mx-auto w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold",children:r.l}),t.jsx("h4",{className:"font-bold text-sm tracking-tight",children:r.name}),t.jsx("p",{className:"text-[10px] text-muted-foreground leading-tight",children:r.desc})]},i))})]}),t.jsx(_,{title:"Readable Test Names (Given-When-Then)",language:"typescript",code:`describe("Account", () => {
  it("should_throw_error_when_withdrawing_more_than_balance", () => {
    // Arrange (Given)
    const account = new Account(100);
    
    // Act (When) & Assert (Then)
    expect(() => account.withdraw(150)).toThrow(InsufficientFundsError);
  });
});`})]})]}),t.jsx("aside",{className:"lg:w-64 flex-shrink-0 hidden lg:block",children:t.jsxs("div",{className:"sticky top-28 space-y-4",children:[t.jsxs("div",{className:"p-1 rounded-2xl bg-muted/50 border border-border/50",children:[t.jsxs("div",{className:"px-4 py-3 flex items-center gap-2 border-b border-border/50",children:[t.jsx(ut,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-muted-foreground",children:"Chapters"})]}),t.jsx("div",{className:"p-2 space-y-1",children:Sm.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all ${e===r.id?"bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20":"text-muted-foreground hover:bg-primary/5 hover:text-primary"}`,children:[t.jsx(r.icon,{className:"h-4 w-4"}),r.title.split(". ")[1]]},r.id))})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-primary/5 border border-primary/10",children:[t.jsx("h4",{className:"font-bold text-sm mb-2",children:"Need Help?"}),t.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:"Refer to the global standards for specific language implementations."})]})]})})]})]})},Cm=[{id:"introduction",title:"1. FinOps Overview",icon:zs},{id:"visibility",title:"2. Cost Visibility",icon:Ur},{id:"optimization",title:"3. Cost Optimization",icon:ui},{id:"culture",title:"4. FinOps Culture",icon:xo},{id:"budgeting",title:"5. Budgeting & Forecasting",icon:Vi},{id:"tools",title:"6. Tools & Automation",icon:H0},{id:"maturity",title:"7. Maturity Model",icon:pl},{id:"case-studies",title:"8. Case Studies",icon:ut},{id:"checklist",title:"9. Quick Reference",icon:Zj}],OA=()=>{const[e,s]=p.useState("introduction"),n=[{label:"Home",href:"/"},{label:"Cloud & Cost Management"},{label:"FinOps Guide"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio?c:l);s(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return Cm.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:"FinOps & Cloud Financials",subtitle:"Strategic management of cloud costs to maximize business value through financial accountability.",breadcrumbs:n,readingTime:30}),t.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[t.jsxs("section",{id:"introduction",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"FinOps Overview"}),t.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"FinOps is an evolving cloud financial management discipline and cultural practice that enables organizations to get maximum business value by helping engineering, finance, technology and business teams to collaborate on data-driven spending decisions."})]}),t.jsxs("div",{className:"p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6",children:[t.jsx("h3",{className:"text-2xl font-bold text-blue-600",children:"The Core Principles"}),t.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:[{title:"Teams Need to Collaborate",desc:"Finance and engineering must speak the same language."},{title:"Decisions Driven by Business Value",desc:"Cloud spend should be an investment in growth."},{title:"Everyone Takes Ownership",desc:"Individual teams manage their own cloud usage."},{title:"Reports Should be Accessible",desc:"Cost visibility must be provided in near real-time."},{title:"Variable Cost Model",desc:"Take advantage of the pay-as-you-go nature of the cloud."},{title:"Centralized Team",desc:"A central team should manage discounts and commitment."}].map((r,i)=>t.jsxs("div",{className:"flex gap-3 items-start p-4 rounded-xl border border-border/50 bg-background/50",children:[t.jsx(ce,{className:"h-5 w-5 text-blue-500 shrink-0 mt-0.5"}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-bold text-sm",children:r.title}),t.jsx("p",{className:"text-xs text-muted-foreground",children:r.desc})]})]},i))})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"visibility",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Cost Visibility"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"You cannot manage what you do not measure. Proper allocation is the foundation of FinOps."})]}),t.jsxs("div",{className:"grid gap-6",children:[t.jsxs(pe,{children:[t.jsxs(ye,{children:[t.jsxs(ve,{className:"flex items-center gap-2",children:[t.jsx(Ur,{className:"h-5 w-5 text-primary"}),"Tagging Strategy"]}),t.jsx(ct,{children:"Mandatory tags for all cloud resources at AXA."})]}),t.jsx(ge,{children:t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-4 py-3 text-left",children:"Tag Key"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Description"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Example"})]})}),t.jsxs("tbody",{className:"divide-y",children:[t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-mono",children:"Environment"}),t.jsx("td",{className:"px-4 py-2",children:"Deployment tier"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"prod, dev, staging"})})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-mono",children:"ProjectCode"}),t.jsx("td",{className:"px-4 py-2",children:"Internal budget code"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"AXA-2024-X"})})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-mono",children:"Owner"}),t.jsx("td",{className:"px-4 py-2",children:"Team or individual email"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"team-alpha@axa.com"})})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2 font-mono",children:"ServiceType"}),t.jsx("td",{className:"px-4 py-2",children:"Functional category"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"api, database, frontend"})})]})]})]})})})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex gap-4",children:[t.jsx(jp,{className:"h-6 w-6 text-amber-600 shrink-0"}),t.jsxs("div",{className:"space-y-1",children:[t.jsx("h4",{className:"font-bold text-amber-600",children:"Untagged Resource Policy"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Resources without mandatory tags are subject to automatic termination in development environments and escalation in production."})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"optimization",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Cost Optimization"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Continuously optimizing your cloud footprint to eliminate waste."})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h3",{className:"text-xl font-bold flex items-center gap-2 text-emerald-600",children:[t.jsx(ui,{className:"h-5 w-5"}),"Efficiency Techniques"]}),t.jsx("div",{className:"space-y-4",children:[{title:"Right-sizing",desc:"Select the most cost-effective instance type that meets performance requirements."},{title:"Orphaned Resources",desc:"Identify and delete unattached EBS volumes, Elastic IPs, and old AMIs."},{title:"Stop/Start Schedules",desc:"Automatically shut down non-production resources during off-hours."}].map((r,i)=>t.jsxs("div",{className:"p-4 rounded-xl border border-border bg-background/50",children:[t.jsx("h4",{className:"font-bold text-sm tracking-tight",children:r.title}),t.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:r.desc})]},i))})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h3",{className:"text-xl font-bold flex items-center gap-2 text-blue-600",children:[t.jsx(tt,{className:"h-5 w-5"}),"Commitment Models"]}),t.jsxs("div",{className:"grid gap-3",children:[t.jsxs("div",{className:"p-4 rounded-xl border border-blue-500/20 bg-blue-500/5",children:[t.jsxs("div",{className:"flex justify-between items-center mb-1",children:[t.jsx("span",{className:"font-bold text-sm",children:"Savings Plans"}),t.jsx(k,{className:"bg-blue-500",children:"Up to 72% Off"})]}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Commit to a specific amount per hour for 1 or 3 years."})]}),t.jsxs("div",{className:"p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5",children:[t.jsxs("div",{className:"flex justify-between items-center mb-1",children:[t.jsx("span",{className:"font-bold text-sm",children:"Reserved Instances"}),t.jsx(k,{className:"bg-indigo-500",children:"Up to 60% Off"})]}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Reserved capacity for specific instance types or regions."})]}),t.jsxs("div",{className:"p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5",children:[t.jsxs("div",{className:"flex justify-between items-center mb-1",children:[t.jsx("span",{className:"font-bold text-sm",children:"Spot Instances"}),t.jsx(k,{className:"bg-emerald-500",children:"Up to 90% Off"})]}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Use spare AWS capacity for fault-tolerant workloads."})]})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"culture",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"FinOps Culture"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:'Moving from "Centralized Control" to "Distributed Ownership".'})]}),t.jsx("div",{className:"grid sm:grid-cols-3 gap-6",children:[{title:"Engineer",icon:Mt,desc:"Responsible for cost-efficient architecture and resource selection."},{title:"Finance",icon:q0,desc:"Monitors budgets, forecasts, and performs variance analysis."},{title:"Leadership",icon:xo,desc:"Sets cost-aware KPIs and fosters a culture of accountability."}].map((r,i)=>t.jsxs("div",{className:"text-center p-6 rounded-2xl border border-border bg-background/50 space-y-3",children:[t.jsx("div",{className:"mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary",children:t.jsx(r.icon,{className:"h-6 w-6"})}),t.jsx("h4",{className:"font-bold",children:r.title}),t.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:r.desc})]},i))}),t.jsxs("div",{className:"p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 space-y-4",children:[t.jsxs("h4",{className:"font-bold flex items-center gap-2",children:[t.jsx(V0,{className:"h-5 w-5 text-indigo-600"})," Unit Metrics"]}),t.jsx("p",{className:"text-sm text-muted-foreground underline decoration-indigo-500/30 underline-offset-4",children:'Instead of asking "How much did we spend?", ask "How much did it cost to serve one customer?"'})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"budgeting",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Budgeting & Forecasting"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Proactive cost management through alerts and predictive modeling."})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"p-6 rounded-2xl border border-border bg-background/50",children:[t.jsx("h4",{className:"font-bold mb-4",children:"The Forecasting Process"}),t.jsx("div",{className:"grid gap-4 sm:grid-cols-4",children:[{step:"Analyze",icon:Ur},{step:"Predict",icon:ui},{step:"Collaborate",icon:xo},{step:"Iterate",icon:De}].map((r,i)=>t.jsxs("div",{className:"flex flex-col items-center gap-2 py-4",children:[t.jsx("div",{className:"w-12 h-12 rounded-full border-2 border-primary/20 border-dashed flex items-center justify-center text-primary",children:t.jsx(r.icon,{className:"h-6 w-6"})}),t.jsx("span",{className:"font-semibold text-sm",children:r.step})]},i))})]}),t.jsx(_,{title:"Setting Budget Alerts (CloudFormation/Terraform)",language:"yaml",code:`MyBudgetAlert:
  Type: AWS::Budgets::Budget
  Properties:
    Budget:
      BudgetLimit:
        Amount: 500
        Unit: USD
      TimeUnit: MONTHLY
      BudgetType: COST
    NotificationsWithSubscribers:
      - Notification:
          NotificationType: ACTUAL
          ComparisonOperator: GREATER_THAN
          Threshold: 80
        Subscribers:
          - SubscriptionType: EMAIL
            Address: team-lead@axa.com`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"tools",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Tools & Automation"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Leveraging the ecosystem to automate FinOps activities."})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"font-bold text-sm uppercase tracking-widest text-muted-foreground",children:"Native AWS Tools"}),t.jsx("div",{className:"space-y-3",children:[{name:"AWS Cost Explorer",desc:"Visualize and analyze your cloud spend."},{name:"AWS Budgets",desc:"Set custom budgets and alerts."},{name:"AWS Trusted Advisor",desc:"Automated cost optimization recommendations."},{name:"Cost & Usage Report (CUR)",desc:"Deep-level granular cost data."}].map((r,i)=>t.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx(ce,{className:"h-5 w-5 text-emerald-500"})}),t.jsxs("div",{children:[t.jsx("h5",{className:"font-bold text-sm",children:r.name}),t.jsx("p",{className:"text-xs text-muted-foreground",children:r.desc})]})]},i))})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"font-bold text-sm uppercase tracking-widest text-muted-foreground",children:"Third-Party & Open Source"}),t.jsx("div",{className:"space-y-3",children:[{name:"CloudCustodian",desc:"Policy-as-code for resource compliance and cost control."},{name:"KubeCost",desc:"Real-time cost monitoring for Kubernetes."},{name:"Apptio / Cloudability",desc:"Enterprise cloud financial management platforms."},{name:"Terratag",desc:"CLI tool for automated resource tagging."}].map((r,i)=>t.jsxs("div",{className:"flex gap-4 p-4 rounded-xl border border-border hover:border-indigo-500/50 transition-colors",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx(De,{className:"h-5 w-5 text-indigo-500"})}),t.jsxs("div",{children:[t.jsx("h5",{className:"font-bold text-sm",children:r.name}),t.jsx("p",{className:"text-xs text-muted-foreground",children:r.desc})]})]},i))})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"maturity",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 7"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"FinOps Maturity Model"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Organizations evolve through three phases as they adopt FinOps practices."})]}),t.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{phase:"Crawl",color:"amber",items:["Basic tagging strategy","Monthly cost reviews","Reactive optimization","Siloed teams"]},{phase:"Walk",color:"blue",items:["Automated tagging","Weekly cost reviews","Proactive optimization","Cross-functional collaboration"]},{phase:"Run",color:"emerald",items:["Policy-as-code enforcement","Real-time dashboards","Predictive optimization","Cost-aware engineering culture"]}].map((r,i)=>t.jsxs("div",{className:`p-6 rounded-2xl border-2 border-${r.color}-500/20 bg-${r.color}-500/5 space-y-4`,children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:`w-10 h-10 rounded-full bg-${r.color}-500 text-white flex items-center justify-center font-bold`,children:i+1}),t.jsx("h4",{className:"font-bold text-xl",children:r.phase})]}),t.jsx("ul",{className:"space-y-2 text-sm text-muted-foreground",children:r.items.map((a,o)=>t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx(ce,{className:"h-4 w-4 text-primary"}),a]},o))})]},i))})]}),t.jsx(I,{}),t.jsxs("section",{id:"case-studies",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Case Studies"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Real-world examples of FinOps success."})]}),t.jsx("div",{className:"grid gap-6",children:[{title:"Right-sizing EC2 Fleet",savings:"$120K/year",desc:"Analyzed CloudWatch metrics to identify over-provisioned instances. Downsized 40% of fleet with no performance impact."},{title:"Spot Instance Migration",savings:"$85K/year",desc:"Moved batch processing workloads to Spot instances with proper interruption handling."},{title:"Reserved Instance Coverage",savings:"$200K/year",desc:"Achieved 70% RI coverage for steady-state workloads through centralized purchasing."}].map((r,i)=>t.jsxs(pe,{className:"border-l-4 border-l-emerald-500",children:[t.jsx(ye,{className:"pb-2",children:t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx(ve,{className:"text-lg",children:r.title}),t.jsx(k,{className:"bg-emerald-500",children:r.savings})]})}),t.jsx(ge,{children:t.jsx("p",{className:"text-sm text-muted-foreground",children:r.desc})})]},i))})]}),t.jsx(I,{}),t.jsxs("section",{id:"checklist",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-emerald-500 border-emerald-500/20 bg-emerald-500/5 px-3 py-1",children:"Chapter 9"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Quick Reference Checklist"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Actionable items to implement FinOps in your organization."})]}),t.jsx("div",{className:"p-8 rounded-3xl border-2 border-primary/10 bg-primary/[0.02] space-y-6",children:t.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:[{category:"Visibility",items:["Implement mandatory tagging","Set up cost allocation reports","Create team-level dashboards"]},{category:"Optimization",items:["Enable Trusted Advisor checks","Review right-sizing recommendations monthly","Implement stop/start schedules"]},{category:"Governance",items:["Define budget alerts at 50%, 80%, 100%","Establish anomaly detection","Create cost review cadence"]},{category:"Culture",items:["Train engineers on cost awareness","Include cost in architecture reviews","Celebrate cost savings wins"]}].map((r,i)=>t.jsxs("div",{className:"space-y-3",children:[t.jsx("h4",{className:"font-bold text-sm uppercase tracking-widest text-primary",children:r.category}),t.jsx("ul",{className:"space-y-2",children:r.items.map((a,o)=>t.jsxs("li",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[t.jsx(ce,{className:"h-4 w-4 text-emerald-500"}),a]},o))})]},i))})})]})]}),t.jsx("aside",{className:"lg:w-64 flex-shrink-0 hidden lg:block",children:t.jsx("div",{className:"sticky top-28 space-y-4",children:t.jsxs("div",{className:"p-1 rounded-2xl bg-muted/50 border border-border/50",children:[t.jsxs("div",{className:"px-4 py-3 flex items-center gap-2 border-b border-border/50",children:[t.jsx(Ur,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-muted-foreground",children:"On this page"})]}),t.jsx("div",{className:"p-2 space-y-1",children:Cm.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all ${e===r.id?"bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20":"text-muted-foreground hover:bg-primary/5 hover:text-primary"}`,children:[t.jsx(r.icon,{className:"h-4 w-4"}),r.title.split(". ")[1]]},r.id))})]})})})]})]})},Tm=[{id:"overview",title:"1. Framework Overview",icon:fr},{id:"operational-excellence",title:"2. Operational Excellence",icon:mt},{id:"security",title:"3. Security Pillar",icon:hs},{id:"reliability",title:"4. Reliability Pillar",icon:Ip},{id:"performance",title:"5. Performance Efficiency",icon:cl},{id:"cost",title:"6. Cost Optimization",icon:zs},{id:"sustainability",title:"7. Sustainability Pillar",icon:ho},{id:"patterns",title:"8. Design Patterns",icon:Oe},{id:"disaster-recovery",title:"9. Disaster Recovery",icon:fs},{id:"case-studies",title:"10. Case Studies",icon:ut}],LA=()=>{const[e,s]=p.useState("overview"),n=[{label:"Home",href:"/"},{label:"Cloud & Cost Management"},{label:"AWS Architecture"}];return p.useEffect(()=>{const r=new IntersectionObserver(i=>{const a=i.filter(o=>o.isIntersecting);if(a.length>0){const o=a.reduce((l,c)=>c.intersectionRatio>l.intersectionRatio?c:l);s(o.target.id)}},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-10% 0px -70% 0px"});return Tm.forEach(i=>{const a=document.getElementById(i.id);a&&r.observe(a)}),()=>r.disconnect()},[]),t.jsxs(nt,{children:[t.jsx(ot,{title:"AWS Cloud Architecture",subtitle:"Mastering the AWS Well-Architected Framework for building secure, high-performing, and resilient infrastructures.",breadcrumbs:n,readingTime:35}),t.jsxs("div",{className:"py-8 flex flex-col lg:flex-row gap-12",children:[t.jsxs("main",{className:"flex-1 min-w-0 space-y-16 pb-16",children:[t.jsxs("section",{id:"overview",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 1"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Framework Overview"}),t.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"The AWS Well-Architected Framework provides a consistent approach for customers and partners to evaluate architectures and implement designs that can scale over time."})]}),t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{text:"Operational Excellence",icon:mt,color:"blue"},{text:"Security",icon:jt,color:"red"},{text:"Reliability",icon:Ip,color:"orange"},{text:"Performance Efficiency",icon:cl,color:"emerald"},{text:"Cost Optimization",icon:zs,color:"yellow"},{text:"Sustainability",icon:ho,color:"green"}].map((r,i)=>t.jsxs("div",{className:"glass flex flex-col gap-3 p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors",children:[t.jsx(r.icon,{className:`h-8 w-8 text-${r.color}-500`}),t.jsx("span",{className:"font-bold text-sm tracking-tight",children:r.text})]},i))})]}),t.jsx(I,{}),t.jsxs("section",{id:"operational-excellence",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4 text-center max-w-3xl mx-auto",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 2"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Operational Excellence"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Focus on running and monitoring systems to deliver business value, and continuously improving processes."})]}),t.jsxs("div",{className:"grid gap-6",children:[t.jsxs("div",{className:"p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6",children:[t.jsxs("h4",{className:"font-bold text-xl flex items-center gap-2",children:[t.jsx(Me,{className:"h-5 w-5 text-blue-500"}),"Key Design Principles"]}),t.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:["Perform operations as code","Make frequent, small, reversible changes","Refine operations procedures frequently","Anticipate failure","Learn from all operational failures"].map((r,i)=>t.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[t.jsx(ce,{className:"h-4 w-4 text-blue-500"}),t.jsx("span",{children:r})]},i))})]}),t.jsx(_,{title:"Infrastructure as Code (Terraform)",language:"hcl",code:`resource "aws_instance" "app_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "OperationalExcellenceExample"
    ManagedBy = "Terraform"
  }
}`})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"security",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 3"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Security Pillar"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Protecting information, systems, and assets while delivering business value through risk assessments and mitigation strategies."})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[t.jsxs(pe,{className:"border-red-500/20 bg-red-500/5",children:[t.jsx(ye,{children:t.jsx(ve,{className:"text-red-700",children:"Identity & Access Management"})}),t.jsxs(ge,{className:"text-sm space-y-2 text-muted-foreground",children:[t.jsx("li",{children:"• Implement least-privilege permissions"}),t.jsx("li",{children:"• Use MFA for all human access"}),t.jsx("li",{children:"• Leverage IAM Roles for machine access"}),t.jsx("li",{children:"• Rotate credentials regularly"})]})]}),t.jsxs(pe,{className:"border-emerald-500/20 bg-emerald-500/5",children:[t.jsx(ye,{children:t.jsx(ve,{className:"text-emerald-700",children:"Data Protection"})}),t.jsxs(ge,{className:"text-sm space-y-2 text-muted-foreground",children:[t.jsx("li",{children:"• Encrypt data at rest (KMS)"}),t.jsx("li",{children:"• Encrypt data in transit (TLS)"}),t.jsx("li",{children:"• Automate data classification"}),t.jsx("li",{children:"• Maintain backups & DR plan"})]})]})]}),t.jsx(_,{title:"AWS IAM Policy (Least Privilege)",language:"json",code:`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::my-secure-bucket"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::my-secure-bucket/*"
    }
  ]
}`})]}),t.jsx(I,{}),t.jsxs("section",{id:"reliability",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 4"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Reliability Pillar"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Ensuring a workload performs its intended function correctly and consistently when it's expected to."})]}),t.jsx("div",{className:"p-8 rounded-3xl bg-orange-500/5 border border-orange-500/20 space-y-8",children:t.jsxs("div",{className:"flex flex-col md:flex-row gap-8 items-center",children:[t.jsxs("div",{className:"space-y-4 flex-1",children:[t.jsx("h4",{className:"font-bold text-xl",children:"Self-Healing Infrastructure"}),t.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"Automate recovery from failures by using services that can automatically replace unhealthy instances and scale based on demand."}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx(k,{variant:"secondary",children:"Multi-AZ"}),t.jsx(k,{variant:"secondary",children:"Auto Scaling"}),t.jsx(k,{variant:"secondary",children:"Health Checks"})]})]}),t.jsx("div",{className:"w-full md:w-64 aspect-video bg-slate-900 rounded-xl border border-slate-700 p-4 font-mono text-[10px] text-orange-400",children:t.jsx("pre",{children:`[Traffic] -> [ELB]
   |          |
   v          v
[AZ-1]      [AZ-2]
[Node]      [Node]`})})]})})]}),t.jsx(I,{}),t.jsxs("section",{id:"performance",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 5"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Performance Efficiency"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Using computing resources efficiently to meet system requirements and maintaining that efficiency as demand changes."})]}),t.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[{name:"Compute",service:"Lambda, Fargate, EC2",icon:De},{name:"Storage",service:"S3, EBS, EFS",icon:mt},{name:"Database",service:"RDS, DynamoDB, Aurora",icon:Tp},{name:"Network",service:"CloudFront, Global Accelerator",icon:Me}].map((r,i)=>t.jsxs("div",{className:"p-5 rounded-2xl border border-border bg-background/50 space-y-2",children:[t.jsx(r.icon,{className:"h-5 w-5 text-primary"}),t.jsx("h5",{className:"font-bold text-sm tracking-tight",children:r.name}),t.jsx("p",{className:"text-[10px] text-muted-foreground font-mono",children:r.service})]},i))}),t.jsxs("div",{className:"p-6 rounded-2xl bg-muted/30 border space-y-4",children:[t.jsx("h4",{className:"font-bold text-sm",children:"Optimization Checklist"}),t.jsxs("div",{className:"grid sm:grid-cols-2 gap-2 text-xs",children:[t.jsx("li",{className:"list-none flex gap-2",children:"✅ Review resource selection monthly"}),t.jsx("li",{className:"list-none flex gap-2",children:"✅ Implement caching at all layers"}),t.jsx("li",{className:"list-none flex gap-2",children:"✅ Use serverless wherever possible"}),t.jsx("li",{className:"list-none flex gap-2",children:"✅ Monitor latency and throughput"})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"cost",className:"scroll-mt-28 space-y-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 6"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Cost Optimization"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Avoiding unnecessary costs and ensuring every dollar spent translates into business value."})]}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"font-bold text-indigo-600 flex items-center gap-2",children:[t.jsx(ui,{className:"h-5 w-5"}),"Cost Effective Resources"]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Using the right instance sizes, purchasing options (Spot, RIs), and managed services to reduce heavy lifting."})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("h4",{className:"font-bold text-indigo-600 flex items-center gap-2",children:[t.jsx(Ur,{className:"h-5 w-5"}),"Demand & Supply"]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Match supply with demand using Auto Scaling and Buffer-based systems to handle spikes efficiently."})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"sustainability",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-emerald-500 border-emerald-500/20 bg-emerald-500/5 px-3 py-1",children:"Chapter 7"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Sustainability Pillar"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Minimize the environmental impact of running your cloud workloads."})]}),t.jsxs("div",{className:"p-8 rounded-3xl border-2 border-emerald-500/10 bg-emerald-500/[0.02] space-y-6",children:[t.jsxs("div",{className:"flex items-center gap-4 text-emerald-600",children:[t.jsx(ho,{className:"h-8 w-8"}),t.jsx("h3",{className:"text-2xl font-bold",children:"Green Computing Best Practices"})]}),t.jsx("div",{className:"grid gap-4 sm:grid-cols-3",children:[{title:"Optimize Utilization",desc:"Reduce idling resources to save power."},{title:"Data Patterns",desc:"Minimize data movement across the network."},{title:"Efficient Hardware",desc:"Use AWS Graviton processors for better performance/watt."}].map((r,i)=>t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"font-bold text-sm tracking-tight",children:r.title}),t.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:r.desc})]},i))})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"patterns",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 8"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Design Patterns"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Common architectural patterns for AWS workloads."})]}),t.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:[{title:"Multi-tier Architecture",desc:"Separate presentation, application, and data tiers for improved scalability and maintainability.",icon:Oe},{title:"Serverless",desc:"Use Lambda, API Gateway, and DynamoDB for event-driven, pay-per-use workloads.",icon:De},{title:"Event-driven",desc:"Decouple components with EventBridge, SNS, and SQS for asynchronous processing.",icon:Me},{title:"Microservices",desc:"Deploy independent services with ECS, EKS, or App Runner for team autonomy.",icon:Ss}].map((r,i)=>t.jsxs(pe,{className:"hover:border-primary/50 transition-colors",children:[t.jsx(ye,{children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(r.icon,{className:"h-5 w-5 text-primary"}),t.jsx(ve,{className:"text-lg",children:r.title})]})}),t.jsx(ge,{children:t.jsx("p",{className:"text-sm text-muted-foreground",children:r.desc})})]},i))})]}),t.jsx(I,{}),t.jsxs("section",{id:"disaster-recovery",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-amber-500 border-amber-500/20 bg-amber-500/5 px-3 py-1",children:"Chapter 9"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Disaster Recovery"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Strategies for business continuity and data protection."})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"p-6 rounded-2xl border border-border bg-background/50",children:[t.jsx("h4",{className:"font-bold mb-4",children:"RTO/RPO Strategies"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full text-sm",children:[t.jsx("thead",{className:"bg-muted text-xs font-bold uppercase",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-4 py-3 text-left",children:"Strategy"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"RTO"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"RPO"}),t.jsx("th",{className:"px-4 py-3 text-left",children:"Cost"})]})}),t.jsxs("tbody",{className:"divide-y",children:[t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2",children:"Backup & Restore"}),t.jsx("td",{className:"px-4 py-2",children:"Hours"}),t.jsx("td",{className:"px-4 py-2",children:"Hours"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"$"})})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2",children:"Pilot Light"}),t.jsx("td",{className:"px-4 py-2",children:"10s of min"}),t.jsx("td",{className:"px-4 py-2",children:"Minutes"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"$$"})})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2",children:"Warm Standby"}),t.jsx("td",{className:"px-4 py-2",children:"Minutes"}),t.jsx("td",{className:"px-4 py-2",children:"Seconds"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"$$$"})})]}),t.jsxs("tr",{children:[t.jsx("td",{className:"px-4 py-2",children:"Multi-site Active"}),t.jsx("td",{className:"px-4 py-2",children:"Real-time"}),t.jsx("td",{className:"px-4 py-2",children:"Zero"}),t.jsx("td",{className:"px-4 py-2",children:t.jsx(k,{variant:"outline",children:"$$$$"})})]})]})]})})]}),t.jsxs("div",{className:"p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex gap-4",children:[t.jsx(fs,{className:"h-6 w-6 text-amber-600 shrink-0"}),t.jsxs("div",{className:"space-y-1",children:[t.jsx("h4",{className:"font-bold text-amber-600",children:"Test Your DR Plan"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Regularly test failover procedures. AWS Fault Injection Simulator can help validate your resilience."})]})]})]})]}),t.jsx(I,{}),t.jsxs("section",{id:"case-studies",className:"scroll-mt-28 space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(k,{variant:"outline",className:"text-primary border-primary/20 bg-primary/5 px-3 py-1",children:"Chapter 10"}),t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight",children:"Reference Architectures"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Common patterns for real-world use cases."})]}),t.jsx("div",{className:"grid gap-6",children:[{title:"Web Application",services:"CloudFront + ALB + ECS + RDS",desc:"Scalable, secure web apps with managed container orchestration."},{title:"Data Lake",services:"S3 + Glue + Athena + QuickSight",desc:"Cost-effective analytics platform for structured and unstructured data."},{title:"Real-time Streaming",services:"Kinesis + Lambda + OpenSearch",desc:"Ingest and analyze streaming data at scale."}].map((r,i)=>t.jsxs(pe,{className:"border-l-4 border-l-primary",children:[t.jsxs(ye,{className:"pb-2",children:[t.jsx(ve,{className:"text-lg",children:r.title}),t.jsx(ct,{className:"font-mono text-xs",children:r.services})]}),t.jsx(ge,{children:t.jsx("p",{className:"text-sm text-muted-foreground",children:r.desc})})]},i))})]})]}),t.jsx("aside",{className:"lg:w-64 flex-shrink-0 hidden lg:block",children:t.jsx("div",{className:"sticky top-28 space-y-4",children:t.jsxs("div",{className:"p-1 rounded-2xl bg-muted/50 border border-border/50",children:[t.jsxs("div",{className:"px-4 py-3 flex items-center gap-2 border-b border-border/50",children:[t.jsx(fr,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-muted-foreground",children:"Pillars"})]}),t.jsx("div",{className:"p-2 space-y-1",children:Tm.map(r=>t.jsxs("a",{href:`#${r.id}`,className:`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all ${e===r.id?"bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20":"text-muted-foreground hover:bg-primary/5 hover:text-primary"}`,children:[t.jsx(r.icon,{className:"h-4 w-4"}),r.title.includes(".")?r.title.split(". ")[1]:r.title]},r.id))})]})})})]})]})},FA=()=>{const[e]=ob(),s=e.get("q")||"",[n,r]=p.useState([]),{search:i,loading:a,isReady:o}=jx();p.useEffect(()=>{(async()=>{if(s&&o){const d=await i(s);r(d)}})()},[s,o,i]);const l=[{label:"Home",href:"/"},{label:"Search Results"}];return t.jsxs(nt,{children:[t.jsx(ot,{title:`Search Results for "${s}"`,subtitle:o?a?"Searching...":n.length>0?`Found ${n.length} matches for your search.`:"We couldn't find any documents matching your search.":"Initializing search engine...",breadcrumbs:l}),t.jsx("div",{className:"py-12 px-4",children:t.jsx("div",{className:"space-y-6",children:a?t.jsxs("div",{className:"flex flex-col items-center justify-center py-20 opacity-50",children:[t.jsx("div",{className:"animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full mb-4"}),t.jsx("p",{children:"Searching documentation..."})]}):n.length>0?n.map((c,d)=>{var u;return t.jsx(qe,{to:c.url,className:"block group",children:t.jsx(pe,{className:"transition-all hover:border-primary/50 hover:shadow-md group-hover:-translate-y-1",children:t.jsxs(ye,{className:"flex flex-row items-center gap-4 space-y-0 text-left",children:[t.jsx("div",{className:"bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0",children:t.jsx(ll,{className:"h-5 w-5"})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("div",{className:"flex items-center justify-between mb-1 gap-4",children:t.jsx(ve,{className:"text-xl group-hover:text-primary transition-colors line-clamp-1",children:(u=c.meta)==null?void 0:u.title})}),t.jsx("p",{className:"text-muted-foreground line-clamp-3 text-sm",dangerouslySetInnerHTML:{__html:c.excerpt}})]}),t.jsx(hr,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0"})]})})},c.url+d)}):s&&!a?t.jsxs("div",{className:"text-center py-20 bg-muted/20 rounded-2xl border-2 border-dashed",children:[t.jsx(Os,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50"}),t.jsx("h3",{className:"text-xl font-bold mb-2",children:"No results found"}),t.jsx("p",{className:"text-muted-foreground mb-6",children:"Try searching for different keywords or browse our guides."}),t.jsx(Re,{asChild:!0,variant:"outline",children:t.jsx(qe,{to:"/dotnet-developer-guideline",children:"Browse documentation"})})]}):!s&&t.jsx("div",{className:"text-center py-20",children:t.jsx("p",{className:"text-muted-foreground",children:"Enter a search term above to find what you're looking for."})})})})]})},BA=[{path:"/",element:t.jsx(A2,{}),children:[{index:!0,element:t.jsx(eA,{})},{path:"dotnet-developer-guideline",element:t.jsx(aA,{})},{path:"react-developer-guideline",element:t.jsx(lA,{})},{path:"java-developer-guideline",element:t.jsx(cA,{})},{path:"python-developer-guideline",element:t.jsx(dA,{})},{path:"flutter-developer-guideline",element:t.jsx(uA,{})},{path:"clean-architecture",element:t.jsx(mA,{})},{path:"coding-standard",element:t.jsx(pA,{})},{path:"github-axa-usage",element:t.jsx(hA,{})},{path:"openshift-guideline",element:t.jsx(fA,{})},{path:"jenkins-guideline",element:t.jsx(IA,{})},{path:"sonarqube-guideline",element:t.jsx(MA,{})},{path:"clean-code-guideline",element:t.jsx(_A,{})},{path:"finops-guideline",element:t.jsx(OA,{})},{path:"aws-architecture-guideline",element:t.jsx(LA,{})},{path:"search",element:t.jsx(FA,{})}]}];Cb({routes:BA,basename:"/aii/developer-guideline/"});export{Ny as a,Ko as g,Em as r};
