var tm=Object.defineProperty,Ix=Object.defineProperties;var Lx=Object.getOwnPropertyDescriptors;var La=Object.getOwnPropertySymbols;var nm=Object.prototype.hasOwnProperty,im=Object.prototype.propertyIsEnumerable;var rm=Math.pow,em=(r,e,t)=>e in r?tm(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Te=(r,e)=>{for(var t in e||(e={}))nm.call(e,t)&&em(r,t,e[t]);if(La)for(var t of La(e))im.call(e,t)&&em(r,t,e[t]);return r},xt=(r,e)=>Ix(r,Lx(e));var Zt=(r,e)=>{var t={};for(var n in r)nm.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&La)for(var n of La(r))e.indexOf(n)<0&&im.call(r,n)&&(t[n]=r[n]);return t};var Zr=(r,e)=>{for(var t in e)tm(r,t,{get:e[t],enumerable:!0})};var Qi=(r,e,t)=>new Promise((n,i)=>{var s=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(r,e)).next())});import{useCallback as vu}from"react";var Da={};Zr(Da,{default:()=>Dx});var sm={},om={get exports(){return sm},set exports(r){sm=r}};om.exports=function(r,e){for(var t={},n=Object.keys(r),i=Array.isArray(e),s=0;s<n.length;s++){var o=n[s],a=r[o];(i?e.indexOf(o)!==-1:e(o,a,r))&&(t[o]=a)}return t};var Dx=om.exports;var Oa={};Zr(Oa,{default:()=>Ox});var am={},lm={get exports(){return am},set exports(r){am=r}};lm.exports=(r,e)=>{if(!(typeof r=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[r];let t=r.indexOf(e);return t===-1?[r]:[r.slice(0,t),r.slice(t+e.length)]};var Ox=lm.exports;var Ua={};Zr(Ua,{default:()=>Fx});var cm={},fm={get exports(){return cm},set exports(r){cm=r}},dm="%[a-f0-9]{2}",hm=new RegExp("("+dm+")|([^%]+?)","gi"),um=new RegExp("("+dm+")+","gi");function gu(r,e){try{return[decodeURIComponent(r.join(""))]}catch(i){}if(r.length===1)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],gu(t),gu(n))}function Ux(r){try{return decodeURIComponent(r)}catch(n){for(var e=r.match(hm)||[],t=1;t<e.length;t++)r=gu(e,t).join(""),e=r.match(hm)||[];return r}}function Nx(r){for(var e={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},t=um.exec(r);t;){try{e[t[0]]=decodeURIComponent(t[0])}catch(a){var n=Ux(t[0]);n!==t[0]&&(e[t[0]]=n)}t=um.exec(r)}e["%C2"]="\uFFFD";for(var i=Object.keys(e),s=0;s<i.length;s++){var o=i[s];r=r.replace(new RegExp(o,"g"),e[o])}return r}fm.exports=function(r){if(typeof r!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return Nx(r)}};var Fx=fm.exports;var Na={};Zr(Na,{default:()=>Bx});var pm={},mm={get exports(){return pm},set exports(r){pm=r}};mm.exports=r=>encodeURIComponent(r).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`);var Bx=mm.exports;function Ba(r){var e=(typeof window!="undefined"&&window||typeof self!="undefined"&&self||typeof Fa!="undefined"&&Fa||typeof globalThis!="undefined"&&globalThis||{}).Object,t=!1,n=e.create(null),i=!1,s=!1;if(e.defineProperty(n,"__esModule",{value:!0,enumerable:!1,configurable:!0}),r){var o=e.getOwnPropertyNames(r);if(o.forEach(function(l){if(l==="default")s=!0;else if(!i&&l!="__esModule")try{i=r[l]!=null}catch(c){}e.defineProperty(n,l,{get:function(){return r[l]},enumerable:!0,configurable:!1})}),e.getOwnPropertySymbols){var a=e.getOwnPropertySymbols(r);a.forEach(function(l){e.defineProperty(n,l,{get:function(){return r[l]},enumerable:!1,configurable:!1})})}e.preventExtensions(n),e.seal(n),e.freeze&&e.freeze(n)}return i?n:s?(e.isExtensible(n.default)&&!("default"in n.default)&&e.defineProperty(n.default,"default",{value:n.default,configurable:!1,enumerable:!1}),n.default):n}var Fa=typeof window!="undefined"&&window||typeof self!="undefined"&&self||typeof Fa!="undefined"&&Fa||typeof globalThis!="undefined"&&globalThis||{},rn={},Xn={get exports(){return rn},set exports(r){rn=r}},zx=Ba(typeof Na!="undefined"?Na:{}),kx=Ba(typeof Ua!="undefined"?Ua:{}),_m=Ba(typeof Oa!="undefined"?Oa:{}),Hx=Ba(typeof Da!="undefined"?Da:{}),Vx=r=>r==null,_u=Symbol("encodeFragmentIdentifier");function Gx(r){switch(r.arrayFormat){case"index":return e=>(t,n)=>{let i=t.length;return n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[It(e,r),"[",i,"]"].join("")]:[...t,[It(e,r),"[",It(i,r),"]=",It(n,r)].join("")]};case"bracket":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[It(e,r),"[]"].join("")]:[...t,[It(e,r),"[]=",It(n,r)].join("")];case"colon-list-separator":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[It(e,r),":list="].join("")]:[...t,[It(e,r),":list=",It(n,r)].join("")];case"comma":case"separator":case"bracket-separator":{let e=r.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(n,i)=>i===void 0||r.skipNull&&i===null||r.skipEmptyString&&i===""?n:(i=i===null?"":i,n.length===0?[[It(t,r),e,It(i,r)].join("")]:[[n,It(i,r)].join(r.arrayFormatSeparator)])}default:return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,It(e,r)]:[...t,[It(e,r),"=",It(n,r)].join("")]}}function Wx(r){let e;switch(r.arrayFormat){case"index":return(t,n,i)=>{if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e){i[t]=n;return}i[t]===void 0&&(i[t]={}),i[t][e[1]]=n};case"bracket":return(t,n,i)=>{if(e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),!e){i[t]=n;return}if(i[t]===void 0){i[t]=[n];return}i[t]=[].concat(i[t],n)};case"colon-list-separator":return(t,n,i)=>{if(e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!e){i[t]=n;return}if(i[t]===void 0){i[t]=[n];return}i[t]=[].concat(i[t],n)};case"comma":case"separator":return(t,n,i)=>{let s=typeof n=="string"&&n.includes(r.arrayFormatSeparator),o=typeof n=="string"&&!s&&oi(n,r).includes(r.arrayFormatSeparator);n=o?oi(n,r):n;let a=s||o?n.split(r.arrayFormatSeparator).map(l=>oi(l,r)):n===null?n:oi(n,r);i[t]=a};case"bracket-separator":return(t,n,i)=>{let s=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!s){i[t]=n&&oi(n,r);return}let o=n===null?[]:n.split(r.arrayFormatSeparator).map(a=>oi(a,r));if(i[t]===void 0){i[t]=o;return}i[t]=[].concat(i[t],o)};default:return(t,n,i)=>{if(i[t]===void 0){i[t]=n;return}i[t]=[].concat(i[t],n)}}}function vm(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function It(r,e){return e.encode?e.strict?zx(r):encodeURIComponent(r):r}function oi(r,e){return e.decode?kx(r):r}function xm(r){return Array.isArray(r)?r.sort():typeof r=="object"?xm(Object.keys(r)).sort((e,t)=>Number(e)-Number(t)).map(e=>r[e]):r}function ym(r){let e=r.indexOf("#");return e!==-1&&(r=r.slice(0,e)),r}function Xx(r){let e="",t=r.indexOf("#");return t!==-1&&(e=r.slice(t)),e}function Sm(r){r=ym(r);let e=r.indexOf("?");return e===-1?"":r.slice(e+1)}function gm(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):e.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function bm(r,e){e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e),vm(e.arrayFormatSeparator);let t=Wx(e),n=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return n;for(let i of r.split("&")){if(i==="")continue;let[s,o]=_m(e.decode?i.replace(/\+/g," "):i,"=");o=o===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?o:oi(o,e),t(oi(s,e),o,n)}for(let i of Object.keys(n)){let s=n[i];if(typeof s=="object"&&s!==null)for(let o of Object.keys(s))s[o]=gm(s[o],e);else n[i]=gm(s,e)}return e.sort===!1?n:(e.sort===!0?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((i,s)=>{let o=n[s];return o&&typeof o=="object"&&!Array.isArray(o)?i[s]=xm(o):i[s]=o,i},Object.create(null))}rn.extract=Sm;rn.parse=bm;rn.stringify=(r,e)=>{if(!r)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e),vm(e.arrayFormatSeparator);let t=o=>e.skipNull&&Vx(r[o])||e.skipEmptyString&&r[o]==="",n=Gx(e),i={};for(let o of Object.keys(r))t(o)||(i[o]=r[o]);let s=Object.keys(i);return e.sort!==!1&&s.sort(e.sort),s.map(o=>{let a=r[o];return a===void 0?"":a===null?It(o,e):Array.isArray(a)?a.length===0&&e.arrayFormat==="bracket-separator"?It(o,e)+"[]":a.reduce(n(o),[]).join("&"):It(o,e)+"="+It(a,e)}).filter(o=>o.length>0).join("&")};rn.parseUrl=(r,e)=>{e=Object.assign({decode:!0},e);let[t,n]=_m(r,"#");return Object.assign({url:t.split("?")[0]||"",query:bm(Sm(r),e)},e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:oi(n,e)}:{})};rn.stringifyUrl=(r,e)=>{e=Object.assign({encode:!0,strict:!0,[_u]:!0},e);let t=ym(r.url).split("?")[0]||"",n=rn.extract(r.url),i=rn.parse(n,{sort:!1}),s=Object.assign(i,r.query),o=rn.stringify(s,e);o&&(o=`?${o}`);let a=Xx(r.url);return r.fragmentIdentifier&&(a=`#${e[_u]?It(r.fragmentIdentifier,e):r.fragmentIdentifier}`),`${t}${o}${a}`};rn.pick=(r,e,t)=>{t=Object.assign({parseFragmentIdentifier:!0,[_u]:!1},t);let{url:n,query:i,fragmentIdentifier:s}=rn.parseUrl(r,t);return rn.stringifyUrl({url:n,query:Hx(i,e),fragmentIdentifier:s},t)};rn.exclude=(r,e,t)=>{let n=Array.isArray(e)?i=>!e.includes(i):(i,s)=>!e(i,s);return rn.pick(r,n,t)};var Yx,ai,qx,Zx,za,Kx,$x;Object.isExtensible(Xn.exports)&&Object.keys(Xn.exports).length===7&&(Yx=Xn.exports.extract,ai=Xn.exports.parse,qx=Xn.exports.stringify,Zx=Xn.exports.parseUrl,za=Xn.exports.stringifyUrl,Kx=Xn.exports.pick,$x=Xn.exports.exclude);var YA=Xn.exports;var Mm=r=>{let e,t=new Set,n=(c,h)=>{let u=typeof c=="function"?c(e):c;if(!Object.is(u,e)){let f=e;e=(h!=null?h:typeof u!="object"||u===null)?u:Object.assign({},e,u),t.forEach(p=>p(e,f))}},i=()=>e,a={setState:n,getState:i,getInitialState:()=>l,subscribe:c=>(t.add(c),()=>t.delete(c))},l=e=r(n,i,a);return a},Em=r=>r?Mm(r):Mm;import Tm from"react";var Jx=r=>r;function jx(r,e=Jx){let t=Tm.useSyncExternalStore(r.subscribe,()=>e(r.getState()),()=>e(r.getInitialState()));return Tm.useDebugValue(t),t}var wm=r=>{let e=Em(r),t=n=>jx(e,n);return Object.assign(t,e),t},er=r=>r?wm(r):wm;var Am=(r,e)=>(...t)=>Object.assign({},r,e(...t));var Ws={base:{title:"Base",color:"white",props:{positionX:0,positionY:0,positionZ:0,rotationX:0,rotationY:0,rotationZ:0,uAmplitude:2,color1:"#ff5005",color2:"#dbba95",color3:"#d0bce1"}},halo:{title:"Halo",color:"white",props:{type:"plane",uAmplitude:1,uDensity:1.3,uSpeed:.4,uStrength:4,uTime:0,uFrequency:5.5,range:"enabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",axesHelper:"off",brightness:1.2,cAzimuthAngle:180,cDistance:3.6,cPolarAngle:90,cameraZoom:1,color1:"#ff5005",color2:"#dbba95",color3:"#d0bce1",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"on",lightType:"3d",pixelDensity:1,fov:45,positionX:-1.4,positionY:0,positionZ:0,reflection:.1,rotationX:0,rotationY:10,rotationZ:50,shader:"defaults",animate:"on",wireframe:!1}},pensive:{title:"Pensive",color:"white",props:{range:"enabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",animate:"on",axesHelper:"off",brightness:1.5,cAzimuthAngle:250,cDistance:1.5,cPolarAngle:140,cameraZoom:12.5,color1:"#809bd6",color2:"#910aff",color3:"#af38ff",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"on",lightType:"3d",pixelDensity:1,fov:45,positionX:0,positionY:0,positionZ:0,reflection:.5,rotationX:0,rotationY:0,rotationZ:140,shader:"defaults",type:"sphere",uAmplitude:7,uDensity:.8,uFrequency:5.5,uSpeed:.3,uStrength:.4,uTime:0,wireframe:!1}},mint:{title:"Mint",color:"white",props:{range:"enabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",animate:"on",axesHelper:"off",brightness:1.2,cAzimuthAngle:170,cDistance:4.4,cPolarAngle:70,cameraZoom:1,color1:"#94ffd1",color2:"#6bf5ff",color3:"#ffffff",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"off",lightType:"3d",pixelDensity:1,fov:45,positionX:0,positionY:.9,positionZ:-.3,reflection:.1,rotationX:45,rotationY:0,rotationZ:0,shader:"defaults",type:"waterPlane",uAmplitude:0,uDensity:1.2,uFrequency:0,uSpeed:.2,uStrength:3.4,uTime:0,wireframe:!1}},interstella:{title:"Interstella",color:"white",props:{range:"enabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",animate:"on",axesHelper:"off",brightness:.8,cAzimuthAngle:270,cDistance:.5,cPolarAngle:180,cameraZoom:15.1,color1:"#73bfc4",color2:"#ff810a",color3:"#8da0ce",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"on",lightType:"env",pixelDensity:1,fov:45,positionX:-.1,positionY:0,positionZ:0,reflection:.4,rotationX:0,rotationY:130,rotationZ:70,shader:"defaults",type:"sphere",uAmplitude:3.2,uDensity:.8,uFrequency:5.5,uSpeed:.3,uStrength:.3,uTime:0,wireframe:!1}}};var QA=Object.values(Ws);var Cm=0,Qx=ey(Ws),Rm=Qx[0].url;function ey(r){return Object.entries(r).map(([t,n])=>{let{title:i,color:s,props:o}=n,a=new URLSearchParams(Object.entries(o).reduce((l,[c,h])=>(l[c]=String(h),l),{})).toString();return{title:i,color:s,url:`?${a}`}})}var ty=Te({},Im()),Ri=er(r=>ty),Pm=r=>{let e=typeof r=="string",t=r;e&&(t=Im(r)),Ri.setState(t,e)};function Im(r=Rm){return ai(r,{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"})}var oC=er(()=>({dom:null})),Lm=er(r=>({hoverState:0,hover:"default",updateHoverState:e=>r({hoverState:e})})),aC=er(Am({activePreset:Cm,mode:"full",loadingPercentage:0},r=>({setActivePreset:e=>r(t=>({activePreset:e})),setMode:e=>r(t=>xt(Te({},t),{mode:e})),setLoadingPercentage:e=>r(t=>xt(Te({},t),{loadingPercentage:e}))}))),lC=er(r=>({figma:{selection:0,user:null},setFigma:e=>r(t=>({figma:Te(Te({},t.figma),e)}))}));var cC=er(r=>({billingInterval:"year",setBillingInterval:e=>r(t=>({billingInterval:e}))}));var $e=(r,e=null)=>{let t=vu(o=>typeof o[r]!="undefined"?o[r]:e,[r,e]),n=Ri(t),i=vu(o=>Ri.setState({[r]:o(Ri.getState()[r])}),[r]),s=vu(o=>{i(a=>(typeof o=="function"&&(o=o(a||e)),Number.isFinite(o)&&(o=parseFloat(o.toFixed(2))),setTimeout(()=>{let l=Ri.getState();Dm(za({url:window.location.pathname,query:l},{skipNull:!0,arrayFormat:"index"}))},0),o))},[i]);return[n,s]},pC=()=>e=>{setTimeout(()=>{let n=Ri.getState();Dm(za({url:window.location.pathname,query:n},{skipNull:!0,arrayFormat:"index"}))},0);let t=ai(e,{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"});Ri.setState(t)};function Dm(r){var e;window.history.pushState({prevUrls:[...((e=window.history.state)==null?void 0:e.prevUrls)||[],window.location.origin+r]},document.title,r)}import{Fragment as ny,jsx as xu,jsxs as iy}from"react/jsx-runtime";function Om({type:r}){return iy(ny,{children:[r==="plane"&&xu("planeGeometry",{args:[10,10,1,192]}),r==="sphere"&&xu("icosahedronGeometry",{args:[1,192/3]}),r==="waterPlane"&&xu("planeGeometry",{args:[10,10,192,192]})]})}import{useEffect as mA,useMemo as gA}from"react";var Zi={};Zr(Zi,{ACESFilmicToneMapping:()=>Th,AddEquation:()=>Bi,AddOperation:()=>D_,AdditiveAnimationBlendMode:()=>Gd,AdditiveBlending:()=>hf,AgXToneMapping:()=>B_,AlphaFormat:()=>Fd,AlwaysCompare:()=>Q_,AlwaysDepth:()=>Fl,AlwaysStencilFunc:()=>pf,AmbientLight:()=>ph,AnimationAction:()=>Mh,AnimationClip:()=>Fr,AnimationLoader:()=>Wf,AnimationMixer:()=>od,AnimationObjectGroup:()=>sd,AnimationUtils:()=>Vw,ArcCurve:()=>Dc,ArrayCamera:()=>yc,ArrowHelper:()=>Ad,AttachedBindMode:()=>df,Audio:()=>Sh,AudioAnalyser:()=>id,AudioContext:()=>ia,AudioListener:()=>td,AudioLoader:()=>Qf,AxesHelper:()=>Cd,BackSide:()=>ln,BasicDepthPacking:()=>W_,BasicShadowMap:()=>Ld,BatchedMesh:()=>Cc,Bone:()=>Fo,BooleanKeyframeTrack:()=>Mi,Box2:()=>pd,Box3:()=>Kt,Box3Helper:()=>Td,BoxGeometry:()=>wr,BoxHelper:()=>Ed,BufferAttribute:()=>at,BufferGeometry:()=>Ne,BufferGeometryLoader:()=>yh,ByteType:()=>Od,Cache:()=>_i,Camera:()=>Vi,CameraHelper:()=>Md,CanvasTexture:()=>zf,CapsuleGeometry:()=>zc,CatmullRomCurve3:()=>Oc,CineonToneMapping:()=>N_,CircleGeometry:()=>kc,ClampToEdgeWrapping:()=>Rn,Clock:()=>Xi,Color:()=>pe,ColorKeyframeTrack:()=>jo,ColorManagement:()=>tt,CompressedArrayTexture:()=>Ff,CompressedCubeTexture:()=>Bf,CompressedTexture:()=>Ts,CompressedTextureLoader:()=>Xf,ConeGeometry:()=>Hc,ConstantAlphaFactor:()=>P_,ConstantColorFactor:()=>C_,Controls:()=>Pd,CubeCamera:()=>vc,CubeReflectionMapping:()=>Si,CubeRefractionMapping:()=>ki,CubeTexture:()=>Ar,CubeTextureLoader:()=>Yf,CubeUVReflectionMapping:()=>Ps,CubicBezierCurve:()=>zo,CubicBezierCurve3:()=>Uc,CubicInterpolant:()=>ah,CullFaceBack:()=>cf,CullFaceFront:()=>d_,CullFaceFrontBack:()=>oy,CullFaceNone:()=>f_,Curve:()=>bn,CurvePath:()=>Bc,CustomBlending:()=>p_,CustomToneMapping:()=>F_,CylinderGeometry:()=>As,Cylindrical:()=>fd,Data3DTexture:()=>Co,DataArrayTexture:()=>Ss,DataTexture:()=>Pn,DataTextureLoader:()=>ea,DataUtils:()=>Is,DecrementStencilOp:()=>yy,DecrementWrapStencilOp:()=>by,DefaultLoadingManager:()=>g0,DepthFormat:()=>yr,DepthStencilFormat:()=>Tr,DepthTexture:()=>Lo,DetachedBindMode:()=>k_,DirectionalLight:()=>dh,DirectionalLightHelper:()=>bd,DiscreteInterpolant:()=>lh,DisplayP3ColorSpace:()=>Oh,DodecahedronGeometry:()=>Vc,DoubleSide:()=>Cn,DstAlphaFactor:()=>M_,DstColorFactor:()=>T_,DynamicCopyUsage:()=>Fy,DynamicDrawUsage:()=>Iy,DynamicReadUsage:()=>Oy,EdgesGeometry:()=>Gc,EllipseCurve:()=>ws,EqualCompare:()=>K_,EqualDepth:()=>zl,EqualStencilFunc:()=>wy,EquirectangularReflectionMapping:()=>Mr,EquirectangularRefractionMapping:()=>_o,Euler:()=>Sn,EventDispatcher:()=>dn,ExtrudeGeometry:()=>Wc,FileLoader:()=>Hn,Float16BufferAttribute:()=>Mf,Float32BufferAttribute:()=>me,FloatType:()=>Gt,Fog:()=>bc,FogExp2:()=>Sc,FramebufferTexture:()=>Nf,FrontSide:()=>yi,Frustum:()=>Cr,GLBufferAttribute:()=>cd,GLSL1:()=>zy,GLSL3:()=>mf,GreaterCompare:()=>$_,GreaterDepth:()=>Hl,GreaterEqualCompare:()=>j_,GreaterEqualDepth:()=>kl,GreaterEqualStencilFunc:()=>Py,GreaterStencilFunc:()=>Cy,GridHelper:()=>yd,Group:()=>zi,HalfFloatType:()=>Vn,HemisphereLight:()=>hh,HemisphereLightHelper:()=>xd,IcosahedronGeometry:()=>Xc,ImageBitmapLoader:()=>jf,ImageLoader:()=>Br,ImageUtils:()=>gc,IncrementStencilOp:()=>xy,IncrementWrapStencilOp:()=>Sy,InstancedBufferAttribute:()=>Gi,InstancedBufferGeometry:()=>xh,InstancedInterleavedBuffer:()=>ld,InstancedMesh:()=>Ac,Int16BufferAttribute:()=>Sf,Int32BufferAttribute:()=>bf,Int8BufferAttribute:()=>vf,IntType:()=>Ah,InterleavedBuffer:()=>Es,InterleavedBufferAttribute:()=>Pr,Interpolant:()=>Dr,InterpolateDiscrete:()=>yo,InterpolateLinear:()=>mc,InterpolateSmooth:()=>Ll,InvertStencilOp:()=>My,KeepStencilOp:()=>dr,KeyframeTrack:()=>Mn,LOD:()=>Ec,LatheGeometry:()=>Wo,Layers:()=>Jn,LessCompare:()=>Z_,LessDepth:()=>Bl,LessEqualCompare:()=>Wd,LessEqualDepth:()=>br,LessEqualStencilFunc:()=>Ay,LessStencilFunc:()=>Ty,Light:()=>ei,LightProbe:()=>_h,Line:()=>Qn,Line3:()=>md,LineBasicMaterial:()=>$t,LineCurve:()=>ko,LineCurve3:()=>Nc,LineDashedMaterial:()=>oh,LineLoop:()=>Ic,LineSegments:()=>Ln,LinearDisplayP3ColorSpace:()=>ca,LinearFilter:()=>mt,LinearInterpolant:()=>Jo,LinearMipMapLinearFilter:()=>hy,LinearMipMapNearestFilter:()=>cy,LinearMipmapLinearFilter:()=>Zn,LinearMipmapNearestFilter:()=>oo,LinearSRGBColorSpace:()=>Ti,LinearToneMapping:()=>O_,LinearTransfer:()=>bo,Loader:()=>tn,LoaderUtils:()=>na,LoadingManager:()=>Qo,LoopOnce:()=>H_,LoopPingPong:()=>G_,LoopRepeat:()=>V_,LuminanceAlphaFormat:()=>kd,LuminanceFormat:()=>zd,MOUSE:()=>ry,Material:()=>Nt,MaterialLoader:()=>vh,MathUtils:()=>nS,Matrix2:()=>dd,Matrix3:()=>Ye,Matrix4:()=>Oe,MaxEquation:()=>v_,Mesh:()=>ut,MeshBasicMaterial:()=>jn,MeshDepthMaterial:()=>Do,MeshDistanceMaterial:()=>Oo,MeshLambertMaterial:()=>rh,MeshMatcapMaterial:()=>sh,MeshNormalMaterial:()=>ih,MeshPhongMaterial:()=>th,MeshPhysicalMaterial:()=>Cs,MeshStandardMaterial:()=>$o,MeshToonMaterial:()=>nh,MinEquation:()=>__,MirroredRepeatWrapping:()=>xo,MixOperation:()=>L_,MultiplyBlending:()=>ff,MultiplyOperation:()=>aa,NearestFilter:()=>Vt,NearestMipMapLinearFilter:()=>ly,NearestMipMapNearestFilter:()=>ay,NearestMipmapLinearFilter:()=>ds,NearestMipmapNearestFilter:()=>Dd,NeutralToneMapping:()=>z_,NeverCompare:()=>q_,NeverDepth:()=>Nl,NeverStencilFunc:()=>Ey,NoBlending:()=>vi,NoColorSpace:()=>pi,NoToneMapping:()=>kn,NormalAnimationBlendMode:()=>Dh,NormalBlending:()=>xr,NotEqualCompare:()=>J_,NotEqualDepth:()=>Vl,NotEqualStencilFunc:()=>Ry,NumberKeyframeTrack:()=>Or,Object3D:()=>rt,ObjectLoader:()=>Jf,ObjectSpaceNormalMap:()=>Y_,OctahedronGeometry:()=>Zo,OneFactor:()=>y_,OneMinusConstantAlphaFactor:()=>I_,OneMinusConstantColorFactor:()=>R_,OneMinusDstAlphaFactor:()=>E_,OneMinusDstColorFactor:()=>w_,OneMinusSrcAlphaFactor:()=>Ul,OneMinusSrcColorFactor:()=>b_,OrthographicCamera:()=>pn,P3Primaries:()=>Eo,PCFShadowMap:()=>oa,PCFSoftShadowMap:()=>Rs,PMREMGenerator:()=>Io,Path:()=>Ir,PerspectiveCamera:()=>Dt,Plane:()=>Yn,PlaneGeometry:()=>Ms,PlaneHelper:()=>wd,PointLight:()=>fh,PointLightHelper:()=>vd,Points:()=>Lc,PointsMaterial:()=>Bo,PolarGridHelper:()=>Sd,PolyhedronGeometry:()=>Wi,PositionalAudio:()=>nd,PropertyBinding:()=>ht,PropertyMixer:()=>bh,QuadraticBezierCurve:()=>Ho,QuadraticBezierCurve3:()=>Vo,Quaternion:()=>en,QuaternionKeyframeTrack:()=>Ur,QuaternionLinearInterpolant:()=>ch,RED_GREEN_RGTC2_Format:()=>dc,RED_RGTC1_Format:()=>Vd,REVISION:()=>Eh,RGBADepthPacking:()=>X_,RGBAFormat:()=>Bt,RGBAIntegerFormat:()=>Lh,RGBA_ASTC_10x10_Format:()=>ac,RGBA_ASTC_10x5_Format:()=>rc,RGBA_ASTC_10x6_Format:()=>sc,RGBA_ASTC_10x8_Format:()=>oc,RGBA_ASTC_12x10_Format:()=>lc,RGBA_ASTC_12x12_Format:()=>cc,RGBA_ASTC_4x4_Format:()=>$l,RGBA_ASTC_5x4_Format:()=>Jl,RGBA_ASTC_5x5_Format:()=>jl,RGBA_ASTC_6x5_Format:()=>Ql,RGBA_ASTC_6x6_Format:()=>ec,RGBA_ASTC_8x5_Format:()=>tc,RGBA_ASTC_8x6_Format:()=>nc,RGBA_ASTC_8x8_Format:()=>ic,RGBA_BPTC_Format:()=>uo,RGBA_ETC2_EAC_Format:()=>Kl,RGBA_PVRTC_2BPPV1_Format:()=>Yl,RGBA_PVRTC_4BPPV1_Format:()=>Xl,RGBA_S3TC_DXT1_Format:()=>lo,RGBA_S3TC_DXT3_Format:()=>co,RGBA_S3TC_DXT5_Format:()=>ho,RGBDepthPacking:()=>my,RGBFormat:()=>Bd,RGBIntegerFormat:()=>uy,RGB_BPTC_SIGNED_Format:()=>hc,RGB_BPTC_UNSIGNED_Format:()=>uc,RGB_ETC1_Format:()=>ql,RGB_ETC2_Format:()=>Zl,RGB_PVRTC_2BPPV1_Format:()=>Wl,RGB_PVRTC_4BPPV1_Format:()=>Gl,RGB_S3TC_DXT1_Format:()=>ao,RGDepthPacking:()=>gy,RGFormat:()=>Hd,RGIntegerFormat:()=>Ih,RawShaderMaterial:()=>eh,Ray:()=>Hi,Raycaster:()=>sa,Rec709Primaries:()=>Mo,RectAreaLight:()=>mh,RedFormat:()=>Ph,RedIntegerFormat:()=>la,ReinhardToneMapping:()=>U_,RenderTarget:()=>_c,RepeatWrapping:()=>vo,ReplaceStencilOp:()=>vy,ReverseSubtractEquation:()=>g_,RingGeometry:()=>Yc,SIGNED_RED_GREEN_RGTC2_Format:()=>pc,SIGNED_RED_RGTC1_Format:()=>fc,SRGBColorSpace:()=>An,SRGBTransfer:()=>pt,Scene:()=>Rr,ShaderChunk:()=>He,ShaderLib:()=>zn,ShaderMaterial:()=>Xt,ShadowMaterial:()=>Qc,Shape:()=>xi,ShapeGeometry:()=>qc,ShapePath:()=>Rd,ShapeUtils:()=>$n,ShortType:()=>Ud,Skeleton:()=>wc,SkeletonHelper:()=>_d,SkinnedMesh:()=>Tc,Source:()=>gi,Sphere:()=>Wt,SphereGeometry:()=>Ko,Spherical:()=>ud,SphericalHarmonics3:()=>gh,SplineCurve:()=>Go,SpotLight:()=>uh,SpotLightHelper:()=>gd,Sprite:()=>Mc,SpriteMaterial:()=>No,SrcAlphaFactor:()=>Ol,SrcAlphaSaturateFactor:()=>A_,SrcColorFactor:()=>S_,StaticCopyUsage:()=>Ny,StaticDrawUsage:()=>To,StaticReadUsage:()=>Dy,StereoCamera:()=>ed,StreamCopyUsage:()=>By,StreamDrawUsage:()=>Ly,StreamReadUsage:()=>Uy,StringKeyframeTrack:()=>Ei,SubtractEquation:()=>m_,SubtractiveBlending:()=>uf,TOUCH:()=>sy,TangentSpaceNormalMap:()=>Yi,TetrahedronGeometry:()=>Zc,Texture:()=>wt,TextureLoader:()=>qf,TextureUtils:()=>$T,TorusGeometry:()=>Kc,TorusKnotGeometry:()=>$c,Triangle:()=>qn,TriangleFanDrawMode:()=>py,TriangleStripDrawMode:()=>dy,TrianglesDrawMode:()=>fy,TubeGeometry:()=>Jc,UVMapping:()=>wh,Uint16BufferAttribute:()=>Ro,Uint32BufferAttribute:()=>Po,Uint8BufferAttribute:()=>xf,Uint8ClampedBufferAttribute:()=>yf,Uniform:()=>ra,UniformsGroup:()=>ad,UniformsLib:()=>fe,UniformsUtils:()=>qi,UnsignedByteType:()=>In,UnsignedInt248Type:()=>Er,UnsignedInt5999Type:()=>Nd,UnsignedIntType:()=>bi,UnsignedShort4444Type:()=>Ch,UnsignedShort5551Type:()=>Rh,UnsignedShortType:()=>xs,VSMShadowMap:()=>wn,Vector2:()=>$,Vector3:()=>R,Vector4:()=>et,VectorKeyframeTrack:()=>Nr,VideoTexture:()=>Uf,WebGL3DRenderTarget:()=>_f,WebGLArrayRenderTarget:()=>gf,WebGLCoordinateSystem:()=>Kn,WebGLCubeRenderTarget:()=>xc,WebGLMultipleRenderTargets:()=>Id,WebGLRenderTarget:()=>cn,WebGLRenderer:()=>Uo,WebGLUtils:()=>c0,WebGPUCoordinateSystem:()=>wo,WireframeGeometry:()=>jc,WrapAroundEnding:()=>So,ZeroCurvatureEnding:()=>gr,ZeroFactor:()=>x_,ZeroSlopeEnding:()=>_r,ZeroStencilOp:()=>_y,createCanvasElement:()=>t0});var Eh="169",ry={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},sy={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},f_=0,cf=1,d_=2,oy=3,Ld=0,oa=1,Rs=2,wn=3,yi=0,ln=1,Cn=2,vi=0,xr=1,hf=2,uf=3,ff=4,p_=5,Bi=100,m_=101,g_=102,__=103,v_=104,x_=200,y_=201,S_=202,b_=203,Ol=204,Ul=205,M_=206,E_=207,T_=208,w_=209,A_=210,C_=211,R_=212,P_=213,I_=214,Nl=0,Fl=1,Bl=2,br=3,zl=4,kl=5,Hl=6,Vl=7,aa=0,L_=1,D_=2,kn=0,O_=1,U_=2,N_=3,Th=4,F_=5,B_=6,z_=7,df="attached",k_="detached",wh=300,Si=301,ki=302,Mr=303,_o=304,Ps=306,vo=1e3,Rn=1001,xo=1002,Vt=1003,Dd=1004,ay=1004,ds=1005,ly=1005,mt=1006,oo=1007,cy=1007,Zn=1008,hy=1008,In=1009,Od=1010,Ud=1011,xs=1012,Ah=1013,bi=1014,Gt=1015,Vn=1016,Ch=1017,Rh=1018,Er=1020,Nd=35902,Fd=1021,Bd=1022,Bt=1023,zd=1024,kd=1025,yr=1026,Tr=1027,Ph=1028,la=1029,Hd=1030,Ih=1031,uy=1032,Lh=1033,ao=33776,lo=33777,co=33778,ho=33779,Gl=35840,Wl=35841,Xl=35842,Yl=35843,ql=36196,Zl=37492,Kl=37496,$l=37808,Jl=37809,jl=37810,Ql=37811,ec=37812,tc=37813,nc=37814,ic=37815,rc=37816,sc=37817,oc=37818,ac=37819,lc=37820,cc=37821,uo=36492,hc=36494,uc=36495,Vd=36283,fc=36284,dc=36285,pc=36286,H_=2200,V_=2201,G_=2202,yo=2300,mc=2301,Ll=2302,gr=2400,_r=2401,So=2402,Dh=2500,Gd=2501,fy=0,dy=1,py=2,W_=3200,X_=3201,my=3202,gy=3203,Yi=0,Y_=1,pi="",An="srgb",Ti="srgb-linear",Oh="display-p3",ca="display-p3-linear",bo="linear",pt="srgb",Mo="rec709",Eo="p3",_y=0,dr=7680,vy=7681,xy=7682,yy=7683,Sy=34055,by=34056,My=5386,Ey=512,Ty=513,wy=514,Ay=515,Cy=516,Ry=517,Py=518,pf=519,q_=512,Z_=513,K_=514,Wd=515,$_=516,J_=517,j_=518,Q_=519,To=35044,Iy=35048,Ly=35040,Dy=35045,Oy=35049,Uy=35041,Ny=35046,Fy=35050,By=35042,zy="100",mf="300 es",Kn=2e3,wo=2001,dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Um=1234567,Sr=Math.PI/180,ys=180/Math.PI;function yn(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[r&255]+Jt[r>>8&255]+Jt[r>>16&255]+Jt[r>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Tt(r,e,t){return Math.max(e,Math.min(t,r))}function Xd(r,e){return(r%e+e)%e}function ky(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Hy(r,e,t){return r!==e?(t-r)/(e-r):0}function fo(r,e,t){return(1-t)*r+t*e}function Vy(r,e,t,n){return fo(r,e,1-Math.exp(-t*n))}function Gy(r,e=1){return e-Math.abs(Xd(r,e*2)-e)}function Wy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Xy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Yy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function qy(r,e){return r+Math.random()*(e-r)}function Zy(r){return r*(.5-Math.random())}function Ky(r){r!==void 0&&(Um=r);let e=Um+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $y(r){return r*Sr}function Jy(r){return r*ys}function jy(r){return(r&r-1)===0&&r!==0}function Qy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function eS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function tS(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),p=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*p,a*c);break;case"YXY":r.set(l*p,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function an(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qe(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var nS={DEG2RAD:Sr,RAD2DEG:ys,generateUUID:yn,clamp:Tt,euclideanModulo:Xd,mapLinear:ky,inverseLerp:Hy,lerp:fo,damp:Vy,pingpong:Gy,smoothstep:Wy,smootherstep:Xy,randInt:Yy,randFloat:qy,randFloatSpread:Zy,seededRandom:Ky,degToRad:$y,radToDeg:Jy,isPowerOfTwo:jy,ceilPowerOfTwo:Qy,floorPowerOfTwo:eS,setQuaternionFromProperEuler:tS,normalize:qe,denormalize:an},$=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],m=n[8],_=i[0],g=i[3],d=i[6],v=i[1],x=i[4],y=i[7],C=i[2],M=i[5],T=i[8];return s[0]=o*_+a*v+l*C,s[3]=o*g+a*x+l*M,s[6]=o*d+a*y+l*T,s[1]=c*_+h*v+u*C,s[4]=c*g+h*x+u*M,s[7]=c*d+h*y+u*T,s[2]=f*_+p*v+m*C,s[5]=f*g+p*x+m*M,s[8]=f*d+p*y+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,p=c*s-o*l,m=t*u+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yu.makeScale(e,t)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,t){return this.premultiply(yu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yu=new Ye;function e0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}var iS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ps(r,e){return new iS[r](e)}function Ao(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function t0(){let r=Ao("canvas");return r.style.display="block",r}var Nm={};function Dl(r){r in Nm||(Nm[r]=!0,console.warn(r))}function rS(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function sS(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function oS(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Fm=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bm=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[Ti]:{transfer:bo,primaries:Mo,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[An]:{transfer:pt,primaries:Mo,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ca]:{transfer:bo,primaries:Eo,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Bm),fromReference:r=>r.applyMatrix3(Fm)},[Oh]:{transfer:pt,primaries:Eo,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Bm),fromReference:r=>r.applyMatrix3(Fm).convertLinearToSRGB()}},aS=new Set([Ti,ca]),tt={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!aS.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=Xs[e].toReference,i=Xs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Xs[r].primaries},getTransfer:function(r){return r===pi?bo:Xs[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Xs[e].luminanceCoefficients)}};function _s(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Su(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Kr,gc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Kr===void 0&&(Kr=Ao("canvas")),Kr.width=e.width,Kr.height=e.height;let n=Kr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Kr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ao("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=_s(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_s(t[n]/255)*255):t[n]=_s(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lS=0,gi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(bu(i[o].image)):s.push(bu(i[o]))}else s=bu(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function bu(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?gc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cS=0,wt=class r extends dn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Rn,i=Rn,s=mt,o=Zn,a=Bt,l=In,c=r.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=yn(),this.name="",this.source=new gi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=wh;wt.DEFAULT_ANISOTROPY=1;var et=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],m=l[9],_=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(p+1)/2,C=(d+1)/2,M=(h+f)/4,T=(u+_)/4,A=(m+g)/4;return x>y&&x>C?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=M/n,s=T/n):y>C?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=M/i,s=A/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=A/s),this.set(n,i,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_c=class extends dn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new gi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends _c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ss=class extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},gf=class extends cn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ss(null,e,t,n),this.texture.isRenderTargetTexture=!0}},Co=class extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_f=class extends cn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Co(null,e,t,n),this.texture.isRenderTargetTexture=!0}},en=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],p=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==f||c!==p||h!==m){let g=1-a,d=l*f+c*p+h*m+u*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let C=Math.sqrt(x),M=Math.atan2(C,d*v);g=Math.sin(g*M)/C,a=Math.sin(a*M)/C}let y=a*v;if(l=l*g+f*y,c=c*g+p*y,h=h*g+m*y,u=u*g+_*y,g===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*p-c*f,e[t+1]=l*m+h*f+c*u-a*p,e[t+2]=c*m+h*p+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),p=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"YXZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"ZXY":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"ZYX":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"YZX":this._x=f*h*u+c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u-f*p*m;break;case"XZY":this._x=f*h*u-c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mu=new R,zm=new en,Kt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ha.copy(n.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Va.subVectors(this.max,Ys),$r.subVectors(e.a,Ys),Jr.subVectors(e.b,Ys),jr.subVectors(e.c,Ys),Pi.subVectors(Jr,$r),Ii.subVectors(jr,Jr),tr.subVectors($r,jr);let t=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-tr.z,tr.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,tr.z,0,-tr.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-tr.y,tr.x,0];return!Eu(t,$r,Jr,jr,Va)||(t=[1,0,0,0,1,0,0,0,1],!Eu(t,$r,Jr,jr,Va))?!1:(Ga.crossVectors(Pi,Ii),t=[Ga.x,Ga.y,Ga.z],Eu(t,$r,Jr,jr,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new R,new R,new R,new R,new R,new R,new R,new R],Nn=new R,Ha=new Kt,$r=new R,Jr=new R,jr=new R,Pi=new R,Ii=new R,tr=new R,Ys=new R,Va=new R,Ga=new R,nr=new R;function Eu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){nr.fromArray(r,s);let a=i.x*Math.abs(nr.x)+i.y*Math.abs(nr.y)+i.z*Math.abs(nr.z),l=e.dot(nr),c=t.dot(nr),h=n.dot(nr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var hS=new Kt,qs=new R,Tu=new R,Wt=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);let t=qs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Tu)),this.expandByPoint(qs.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ci=new R,wu=new R,Wa=new R,Li=new R,Au=new R,Xa=new R,Cu=new R,Hi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wu.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(wu);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Wa),a=Li.dot(this.direction),l=-Li.dot(Wa),c=Li.lengthSq(),h=Math.abs(1-o*o),u,f,p,m;if(h>0)if(u=o*l-a,f=o*a-l,m=s*h,u>=0)if(f>=-m)if(f<=m){let _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wu).addScaledVector(Wa,f),p}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),i=ci.dot(ci)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,i,s){Au.subVectors(t,e),Xa.subVectors(n,e),Cu.crossVectors(Au,Xa);let o=this.direction.dot(Cu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);let l=a*this.direction.dot(Xa.crossVectors(Li,Xa));if(l<0)return null;let c=a*this.direction.dot(Au.cross(Li));if(c<0||l+c>o)return null;let h=-a*Li.dot(Cu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oe=class r{constructor(e,t,n,i,s,o,a,l,c,h,u,f,p,m,_,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,f,p,m,_,g)}set(e,t,n,i,s,o,a,l,c,h,u,f,p,m,_,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=m,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,p=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=m+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,m=c*h,_=c*u;t[0]=f+_*a,t[4]=m*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,m=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=m*c-p,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=p*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=m*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+m,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,p=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uS,e,fS)}lookAt(e,t,n){let i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Di.crossVectors(n,vn),Di.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Di.crossVectors(n,vn)),Di.normalize(),Ya.crossVectors(vn,Di),i[0]=Di.x,i[4]=Ya.x,i[8]=vn.x,i[1]=Di.y,i[5]=Ya.y,i[9]=vn.y,i[2]=Di.z,i[6]=Ya.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],m=n[2],_=n[6],g=n[10],d=n[14],v=n[3],x=n[7],y=n[11],C=n[15],M=i[0],T=i[4],A=i[8],L=i[12],S=i[1],b=i[5],D=i[9],U=i[13],O=i[2],X=i[6],F=i[10],ee=i[14],G=i[3],oe=i[7],ie=i[11],se=i[15];return s[0]=o*M+a*S+l*O+c*G,s[4]=o*T+a*b+l*X+c*oe,s[8]=o*A+a*D+l*F+c*ie,s[12]=o*L+a*U+l*ee+c*se,s[1]=h*M+u*S+f*O+p*G,s[5]=h*T+u*b+f*X+p*oe,s[9]=h*A+u*D+f*F+p*ie,s[13]=h*L+u*U+f*ee+p*se,s[2]=m*M+_*S+g*O+d*G,s[6]=m*T+_*b+g*X+d*oe,s[10]=m*A+_*D+g*F+d*ie,s[14]=m*L+_*U+g*ee+d*se,s[3]=v*M+x*S+y*O+C*G,s[7]=v*T+x*b+y*X+C*oe,s[11]=v*A+x*D+y*F+C*ie,s[15]=v*L+x*U+y*ee+C*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],m=e[3],_=e[7],g=e[11],d=e[15];return m*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*p-n*l*p)+_*(+t*l*p-t*c*f+s*o*f-i*o*p+i*c*h-s*l*h)+g*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+d*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],m=e[12],_=e[13],g=e[14],d=e[15],v=u*g*c-_*f*c+_*l*p-a*g*p-u*l*d+a*f*d,x=m*f*c-h*g*c-m*l*p+o*g*p+h*l*d-o*f*d,y=h*_*c-m*u*c+m*a*p-o*_*p-h*a*d+o*u*d,C=m*u*l-h*_*l-m*a*f+o*_*f+h*a*g-o*u*g,M=t*v+n*x+i*y+s*C;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/M;return e[0]=v*T,e[1]=(_*f*s-u*g*s-_*i*p+n*g*p+u*i*d-n*f*d)*T,e[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*d+n*l*d)*T,e[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*p-n*l*p)*T,e[4]=x*T,e[5]=(h*g*s-m*f*s+m*i*p-t*g*p-h*i*d+t*f*d)*T,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*d-t*l*d)*T,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*p+t*l*p)*T,e[8]=y*T,e[9]=(m*u*s-h*_*s-m*n*p+t*_*p+h*n*d-t*u*d)*T,e[10]=(o*_*s-m*a*s+m*n*c-t*_*c-o*n*d+t*a*d)*T,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*T,e[12]=C*T,e[13]=(h*_*i-m*u*i+m*n*f-t*_*f-h*n*g+t*u*g)*T,e[14]=(m*a*i-o*_*i-m*n*l+t*_*l+o*n*g-t*a*g)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,p=s*h,m=s*u,_=o*h,g=o*u,d=a*u,v=l*c,x=l*h,y=l*u,C=n.x,M=n.y,T=n.z;return i[0]=(1-(_+d))*C,i[1]=(p+y)*C,i[2]=(m-x)*C,i[3]=0,i[4]=(p-y)*M,i[5]=(1-(f+d))*M,i[6]=(g+v)*M,i[7]=0,i[8]=(m+x)*T,i[9]=(g-v)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Qr.set(i[0],i[1],i[2]).length(),o=Qr.set(i[4],i[5],i[6]).length(),a=Qr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Fn.copy(this);let c=1/s,h=1/o,u=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,t.setFromRotationMatrix(Fn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Kn){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),p,m;if(a===Kn)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===wo)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Kn){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),f=(t+e)*c,p=(n+i)*h,m,_;if(a===Kn)m=(o+s)*u,_=-2*u;else if(a===wo)m=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qr=new R,Fn=new Oe,uS=new R(0,0,0),fS=new R(1,1,1),Di=new R,Ya=new R,vn=new R,km=new Oe,Hm=new en,Sn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(km,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Jn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dS=0,Vm=new R,es=new en,hi=new Oe,qa=new R,Zs=new R,pS=new R,mS=new en,Gm=new R(1,0,0),Wm=new R(0,1,0),Xm=new R(0,0,1),Ym={type:"added"},gS={type:"removed"},ts={type:"childadded",child:null},Ru={type:"childremoved",child:null},rt=class r extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new R,t=new Sn,n=new en,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Ye}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(Wm,e)}rotateZ(e){return this.rotateOnAxis(Xm,e)}translateOnAxis(e,t){return Vm.copy(e).applyQuaternion(this.quaternion),this.position.add(Vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(Wm,e)}translateZ(e){return this.translateOnAxis(Xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Zs,qa,this.up):hi.lookAt(qa,Zs,this.up),this.quaternion.setFromRotationMatrix(hi),i&&(hi.extractRotation(i.matrixWorld),es.setFromRotationMatrix(hi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ym),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gS),Ru.child=e,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ym),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,pS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,mS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};rt.DEFAULT_UP=new R(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=new R,ui=new R,Pu=new R,fi=new R,ns=new R,is=new R,qm=new R,Iu=new R,Lu=new R,Du=new R,Ou=new et,Uu=new et,Nu=new et,qn=class r{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bn.subVectors(e,t),i.cross(Bn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Bn.subVectors(i,t),ui.subVectors(n,t),Pu.subVectors(e,t);let o=Bn.dot(Bn),a=Bn.dot(ui),l=Bn.dot(Pu),c=ui.dot(ui),h=ui.dot(Pu),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,m=(o*h-a*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ou.setScalar(0),Uu.setScalar(0),Nu.setScalar(0),Ou.fromBufferAttribute(e,t),Uu.fromBufferAttribute(e,n),Nu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ou,s.x),o.addScaledVector(Uu,s.y),o.addScaledVector(Nu,s.z),o}static isFrontFacing(e,t,n,i){return Bn.subVectors(n,t),ui.subVectors(e,t),Bn.cross(ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Bn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;ns.subVectors(i,n),is.subVectors(s,n),Iu.subVectors(e,n);let l=ns.dot(Iu),c=is.dot(Iu);if(l<=0&&c<=0)return t.copy(n);Lu.subVectors(e,i);let h=ns.dot(Lu),u=is.dot(Lu);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ns,o);Du.subVectors(e,s);let p=ns.dot(Du),m=is.dot(Du);if(m>=0&&p<=m)return t.copy(s);let _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(is,a);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return qm.subVectors(s,i),a=(u-h)/(u-h+(p-m)),t.copy(i).addScaledVector(qm,a);let d=1/(g+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},n0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Fu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=Xd(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Fu(o,s,e+1/3),this.g=Fu(o,s,e),this.b=Fu(o,s,e-1/3)}return tt.toWorkingColorSpace(this,i),this}setStyle(e,t=An){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){let n=n0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=Su(e.r),this.g=Su(e.g),this.b=Su(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return tt.fromWorkingColorSpace(jt.copy(this),e),Math.round(Tt(jt.r*255,0,255))*65536+Math.round(Tt(jt.g*255,0,255))*256+Math.round(Tt(jt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(jt.copy(this),t);let n=jt.r,i=jt.g,s=jt.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=An){tt.fromWorkingColorSpace(jt.copy(this),e);let t=jt.r,n=jt.g,i=jt.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Za);let n=fo(Oi.h,Za.h,t),i=fo(Oi.s,Za.s,t),s=fo(Oi.l,Za.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new pe;pe.NAMES=n0;var _S=0,Nt=class extends dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=xr,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Ul,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ol&&(n.blendSrc=this.blendSrc),this.blendDst!==Ul&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},jn=class extends Nt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mi=vS();function vS(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function fn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Tt(r,-65504,65504),mi.floatView[0]=r;let e=mi.uint32View[0],t=e>>23&511;return mi.baseTable[t]+((e&8388607)>>mi.shiftTable[t])}function ro(r){let e=r>>10;return mi.uint32View[0]=mi.mantissaTable[mi.offsetTable[e]+(r&1023)]+mi.exponentTable[e],mi.floatView[0]}var Is={toHalfFloat:fn,fromHalfFloat:ro},Ut=new R,Ka=new $,at=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=To,this.updateRanges=[],this.gpuType=Gt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=an(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=an(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=an(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=an(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array),s=qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==To&&(e.usage=this.usage),e}},vf=class extends at{constructor(e,t,n){super(new Int8Array(e),t,n)}},xf=class extends at{constructor(e,t,n){super(new Uint8Array(e),t,n)}},yf=class extends at{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},Sf=class extends at{constructor(e,t,n){super(new Int16Array(e),t,n)}},Ro=class extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}},bf=class extends at{constructor(e,t,n){super(new Int32Array(e),t,n)}},Po=class extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Mf=class extends at{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ro(this.array[e*this.itemSize]);return this.normalized&&(t=an(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=fn(t),this}getY(e){let t=ro(this.array[e*this.itemSize+1]);return this.normalized&&(t=an(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=fn(t),this}getZ(e){let t=ro(this.array[e*this.itemSize+2]);return this.normalized&&(t=an(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=fn(t),this}getW(e){let t=ro(this.array[e*this.itemSize+3]);return this.normalized&&(t=an(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=fn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.array[e+0]=fn(t),this.array[e+1]=fn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array)),this.array[e+0]=fn(t),this.array[e+1]=fn(n),this.array[e+2]=fn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array),s=qe(s,this.array)),this.array[e+0]=fn(t),this.array[e+1]=fn(n),this.array[e+2]=fn(i),this.array[e+3]=fn(s),this}},me=class extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}},xS=0,Tn=new Oe,Bu=new rt,rs=new R,xn=new Kt,Ks=new Kt,Ht=new R,Ne=class r extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e0(e)?Po:Ro)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new me(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(xn.min,Ks.min),xn.expandByPoint(Ht),Ht.addVectors(xn.max,Ks.max),xn.expandByPoint(Ht)):(xn.expandByPoint(Ks.min),xn.expandByPoint(Ks.max))}xn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ht.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),Ht.add(rs)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new R,l[A]=new R;let c=new R,h=new R,u=new R,f=new $,p=new $,m=new $,_=new R,g=new R;function d(A,L,S){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,A),p.fromBufferAttribute(s,L),m.fromBufferAttribute(s,S),h.sub(c),u.sub(c),p.sub(f),m.sub(f);let b=1/(p.x*m.y-m.x*p.y);isFinite(b)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(b),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(b),a[A].add(_),a[L].add(_),a[S].add(_),l[A].add(g),l[L].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,L=v.length;A<L;++A){let S=v[A],b=S.start,D=S.count;for(let U=b,O=b+D;U<O;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let x=new R,y=new R,C=new R,M=new R;function T(A){C.fromBufferAttribute(i,A),M.copy(C);let L=a[A];x.copy(L),x.sub(C.multiplyScalar(C.dot(L))).normalize(),y.crossVectors(M,L);let b=y.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,b)}for(let A=0,L=v.length;A<L;++A){let S=v[A],b=S.start,D=S.count;for(let U=b,O=b+D;U<O;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new R,s=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let d=0;d<h;d++)f[m++]=c[p++]}return new at(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zm=new Oe,ir=new Hi,$a=new Wt,Km=new R,Ja=new R,ja=new R,Qa=new R,zu=new R,el=new R,$m=new R,tl=new R,ut=class extends rt{constructor(e=new Ne,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){el.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(zu.fromBufferAttribute(u,e),o?el.addScaledVector(zu,h):el.addScaledVector(zu.sub(t),h))}t.add(el)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!($a.containsPoint(ir.origin)===!1&&(ir.intersectSphere($a,Km)===null||ir.origin.distanceToSquared(Km)>rm(e.far-e.near,2)))&&(Zm.copy(s).invert(),ir.copy(e.ray).applyMatrix4(Zm),!(n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],d=o[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){let M=a.getX(y),T=a.getX(y+1),A=a.getX(y+2);i=nl(this,d,e,n,c,h,u,M,T,A),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=m,d=_;g<d;g+=3){let v=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);i=nl(this,o,e,n,c,h,u,v,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],d=o[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){let M=y,T=y+1,A=y+2;i=nl(this,d,e,n,c,h,u,M,T,A),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=m,d=_;g<d;g+=3){let v=g,x=g+1,y=g+2;i=nl(this,o,e,n,c,h,u,v,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function yS(r,e,t,n,i,s,o,a){let l;if(e.side===ln?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===yi,a),l===null)return null;tl.copy(a),tl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(tl);return c<t.near||c>t.far?null:{distance:c,point:tl.clone(),object:r}}function nl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ja),r.getVertexPosition(l,ja),r.getVertexPosition(c,Qa);let h=yS(r,e,t,n,Ja,ja,Qa,$m);if(h){let u=new R;qn.getBarycoord($m,Ja,ja,Qa,u),i&&(h.uv=qn.getInterpolatedAttribute(i,a,l,c,u,new $)),s&&(h.uv1=qn.getInterpolatedAttribute(s,a,l,c,u,new $)),o&&(h.normal=qn.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new R,materialIndex:0};qn.getNormal(Ja,ja,Qa,f.normal),h.face=f,h.barycoord=u}return h}var wr=class r extends Ne{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function m(_,g,d,v,x,y,C,M,T,A,L){let S=y/T,b=C/A,D=y/2,U=C/2,O=M/2,X=T+1,F=A+1,ee=0,G=0,oe=new R;for(let ie=0;ie<F;ie++){let se=ie*b-U;for(let _e=0;_e<X;_e++){let Pe=_e*S-D;oe[_]=Pe*v,oe[g]=se*x,oe[d]=O,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[g]=0,oe[d]=M>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(_e/T),u.push(1-ie/A),ee+=1}}for(let ie=0;ie<A;ie++)for(let se=0;se<T;se++){let _e=f+se+X*ie,Pe=f+se+X*(ie+1),W=f+(se+1)+X*(ie+1),te=f+(se+1)+X*ie;l.push(_e,Pe,te),l.push(Pe,W,te),G+=6}a.addGroup(p,G,L),p+=G,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function bs(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function on(r){let e={};for(let t=0;t<r.length;t++){let n=bs(r[t]);for(let i in n)e[i]=n[i]}return e}function SS(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function i0(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var qi={clone:bs,merge:on},bS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xt=class extends Nt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bS,this.fragmentShader=MS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=SS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Vi=class extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new R,Jm=new $,jm=new $,Dt=class extends Vi{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Jm,jm),t.subVectors(jm,Jm)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ss=-90,os=1,vc=class extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Dt(ss,os,e,t);i.layers=this.layers,this.add(i);let s=new Dt(ss,os,e,t);s.layers=this.layers,this.add(s);let o=new Dt(ss,os,e,t);o.layers=this.layers,this.add(o);let a=new Dt(ss,os,e,t);a.layers=this.layers,this.add(a);let l=new Dt(ss,os,e,t);l.layers=this.layers,this.add(l);let c=new Dt(ss,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ar=class extends wt{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Si,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xc=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ar(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new wr(5,5,5),s=new Xt({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:vi});s.uniforms.tEquirect.value=t;let o=new ut(i,s),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=mt),new vc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},ku=new R,ES=new R,TS=new Ye,Yn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ku.subVectors(n,t).cross(ES.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ku),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||TS.getNormalMatrix(e),i=this.coplanarPoint(ku).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rr=new Wt,il=new R,Cr=class{constructor(e=new Yn,t=new Yn,n=new Yn,i=new Yn,s=new Yn,o=new Yn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){let n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],m=i[9],_=i[10],g=i[11],d=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,g-p,y-d).normalize(),n[1].setComponents(l+s,f+c,g+p,y+d).normalize(),n[2].setComponents(l+o,f+h,g+m,y+v).normalize(),n[3].setComponents(l-o,f-h,g-m,y-v).normalize(),n[4].setComponents(l-a,f-u,g-_,y-x).normalize(),t===Kn)n[5].setComponents(l+a,f+u,g+_,y+x).normalize();else if(t===wo)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(il.x=i.normal.x>0?e.max.x:e.min.x,il.y=i.normal.y>0?e.max.y:e.min.y,il.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function r0(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function wS(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){let m=u[f],_=u[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){let _=u[p];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ms=class r extends Ne{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,p=[],m=[],_=[],g=[];for(let d=0;d<h;d++){let v=d*f-o;for(let x=0;x<c;x++){let y=x*u-s;m.push(y,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){let x=v+c*d,y=v+c*(d+1),C=v+1+c*(d+1),M=v+1+c*d;p.push(x,y,M),p.push(y,C,M)}this.setIndex(p),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},AS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,US=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$S=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,JS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",rb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ab=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ib=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:AS,alphahash_pars_fragment:CS,alphamap_fragment:RS,alphamap_pars_fragment:PS,alphatest_fragment:IS,alphatest_pars_fragment:LS,aomap_fragment:DS,aomap_pars_fragment:OS,batching_pars_vertex:US,batching_vertex:NS,begin_vertex:FS,beginnormal_vertex:BS,bsdfs:zS,iridescence_fragment:kS,bumpmap_pars_fragment:HS,clipping_planes_fragment:VS,clipping_planes_pars_fragment:GS,clipping_planes_pars_vertex:WS,clipping_planes_vertex:XS,color_fragment:YS,color_pars_fragment:qS,color_pars_vertex:ZS,color_vertex:KS,common:$S,cube_uv_reflection_fragment:JS,defaultnormal_vertex:jS,displacementmap_pars_vertex:QS,displacementmap_vertex:eb,emissivemap_fragment:tb,emissivemap_pars_fragment:nb,colorspace_fragment:ib,colorspace_pars_fragment:rb,envmap_fragment:sb,envmap_common_pars_fragment:ob,envmap_pars_fragment:ab,envmap_pars_vertex:lb,envmap_physical_pars_fragment:xb,envmap_vertex:cb,fog_vertex:hb,fog_pars_vertex:ub,fog_fragment:fb,fog_pars_fragment:db,gradientmap_pars_fragment:pb,lightmap_pars_fragment:mb,lights_lambert_fragment:gb,lights_lambert_pars_fragment:_b,lights_pars_begin:vb,lights_toon_fragment:yb,lights_toon_pars_fragment:Sb,lights_phong_fragment:bb,lights_phong_pars_fragment:Mb,lights_physical_fragment:Eb,lights_physical_pars_fragment:Tb,lights_fragment_begin:wb,lights_fragment_maps:Ab,lights_fragment_end:Cb,logdepthbuf_fragment:Rb,logdepthbuf_pars_fragment:Pb,logdepthbuf_pars_vertex:Ib,logdepthbuf_vertex:Lb,map_fragment:Db,map_pars_fragment:Ob,map_particle_fragment:Ub,map_particle_pars_fragment:Nb,metalnessmap_fragment:Fb,metalnessmap_pars_fragment:Bb,morphinstance_vertex:zb,morphcolor_vertex:kb,morphnormal_vertex:Hb,morphtarget_pars_vertex:Vb,morphtarget_vertex:Gb,normal_fragment_begin:Wb,normal_fragment_maps:Xb,normal_pars_fragment:Yb,normal_pars_vertex:qb,normal_vertex:Zb,normalmap_pars_fragment:Kb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:Jb,clearcoat_pars_fragment:jb,iridescence_pars_fragment:Qb,opaque_fragment:eM,packing:tM,premultiplied_alpha_fragment:nM,project_vertex:iM,dithering_fragment:rM,dithering_pars_fragment:sM,roughnessmap_fragment:oM,roughnessmap_pars_fragment:aM,shadowmap_pars_fragment:lM,shadowmap_pars_vertex:cM,shadowmap_vertex:hM,shadowmask_pars_fragment:uM,skinbase_vertex:fM,skinning_pars_vertex:dM,skinning_vertex:pM,skinnormal_vertex:mM,specularmap_fragment:gM,specularmap_pars_fragment:_M,tonemapping_fragment:vM,tonemapping_pars_fragment:xM,transmission_fragment:yM,transmission_pars_fragment:SM,uv_pars_fragment:bM,uv_pars_vertex:MM,uv_vertex:EM,worldpos_vertex:TM,background_vert:wM,background_frag:AM,backgroundCube_vert:CM,backgroundCube_frag:RM,cube_vert:PM,cube_frag:IM,depth_vert:LM,depth_frag:DM,distanceRGBA_vert:OM,distanceRGBA_frag:UM,equirect_vert:NM,equirect_frag:FM,linedashed_vert:BM,linedashed_frag:zM,meshbasic_vert:kM,meshbasic_frag:HM,meshlambert_vert:VM,meshlambert_frag:GM,meshmatcap_vert:WM,meshmatcap_frag:XM,meshnormal_vert:YM,meshnormal_frag:qM,meshphong_vert:ZM,meshphong_frag:KM,meshphysical_vert:$M,meshphysical_frag:JM,meshtoon_vert:jM,meshtoon_frag:QM,points_vert:eE,points_frag:tE,shadow_vert:nE,shadow_frag:iE,sprite_vert:rE,sprite_frag:sE},fe={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},zn={basic:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new pe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:on([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:on([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new pe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:on([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:on([fe.points,fe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:on([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:on([fe.common,fe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:on([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:on([fe.sprite,fe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:on([fe.common,fe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:on([fe.lights,fe.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};zn.physical={uniforms:on([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var rl={r:0,b:0,g:0},sr=new Sn,oE=new Oe;function aE(r,e,t,n,i,s,o){let a=new pe(0),l=s===!0?0:1,c,h,u=null,f=0,p=null;function m(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1,y=m(v);y===null?d(a,l):y&&y.isColor&&(d(y,1),x=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(v,x){let y=m(x);y&&(y.isCubeTexture||y.mapping===Ps)?(h===void 0&&(h=new ut(new wr(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:bs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),sr.copy(x.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(oE.makeRotationFromEuler(sr)),h.material.toneMapped=tt.getTransfer(y.colorSpace)!==pt,(u!==y||f!==y.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ut(new Ms(2,2),new Xt({name:"BackgroundMaterial",uniforms:bs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=tt.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,x){v.getRGB(rl,i0(r)),n.buffers.color.setClear(rl.r,rl.g,rl.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:g}}function lE(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(S,b,D,U,O){let X=!1,F=u(U,D,b);s!==F&&(s=F,c(s.object)),X=p(S,U,D,O),X&&m(S,U,D,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(S,b,D,U),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,b,D){let U=D.wireframe===!0,O=n[S.id];O===void 0&&(O={},n[S.id]=O);let X=O[b.id];X===void 0&&(X={},O[b.id]=X);let F=X[U];return F===void 0&&(F=f(l()),X[U]=F),F}function f(S){let b=[],D=[],U=[];for(let O=0;O<t;O++)b[O]=0,D[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:D,attributeDivisors:U,object:S,attributes:{},index:null}}function p(S,b,D,U){let O=s.attributes,X=b.attributes,F=0,ee=D.getAttributes();for(let G in ee)if(ee[G].location>=0){let ie=O[G],se=X[G];if(se===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),ie===void 0||ie.attribute!==se||se&&ie.data!==se.data)return!0;F++}return s.attributesNum!==F||s.index!==U}function m(S,b,D,U){let O={},X=b.attributes,F=0,ee=D.getAttributes();for(let G in ee)if(ee[G].location>=0){let ie=X[G];ie===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor));let se={};se.attribute=ie,ie&&ie.data&&(se.data=ie.data),O[G]=se,F++}s.attributes=O,s.attributesNum=F,s.index=U}function _(){let S=s.newAttributes;for(let b=0,D=S.length;b<D;b++)S[b]=0}function g(S){d(S,0)}function d(S,b){let D=s.newAttributes,U=s.enabledAttributes,O=s.attributeDivisors;D[S]=1,U[S]===0&&(r.enableVertexAttribArray(S),U[S]=1),O[S]!==b&&(r.vertexAttribDivisor(S,b),O[S]=b)}function v(){let S=s.newAttributes,b=s.enabledAttributes;for(let D=0,U=b.length;D<U;D++)b[D]!==S[D]&&(r.disableVertexAttribArray(D),b[D]=0)}function x(S,b,D,U,O,X,F){F===!0?r.vertexAttribIPointer(S,b,D,O,X):r.vertexAttribPointer(S,b,D,U,O,X)}function y(S,b,D,U){_();let O=U.attributes,X=D.getAttributes(),F=b.defaultAttributeValues;for(let ee in X){let G=X[ee];if(G.location>=0){let oe=O[ee];if(oe===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){let ie=oe.normalized,se=oe.itemSize,_e=e.get(oe);if(_e===void 0)continue;let Pe=_e.buffer,W=_e.type,te=_e.bytesPerElement,ge=W===r.INT||W===r.UNSIGNED_INT||oe.gpuType===Ah;if(oe.isInterleavedBufferAttribute){let ce=oe.data,Fe=ce.stride,Ue=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let We=0;We<G.locationSize;We++)d(G.location+We,ce.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let We=0;We<G.locationSize;We++)g(G.location+We);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let We=0;We<G.locationSize;We++)x(G.location+We,se/G.locationSize,W,ie,Fe*te,(Ue+se/G.locationSize*We)*te,ge)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)d(G.location+ce,oe.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<G.locationSize;ce++)g(G.location+ce);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let ce=0;ce<G.locationSize;ce++)x(G.location+ce,se/G.locationSize,W,ie,se*te,se/G.locationSize*ce*te,ge)}}else if(F!==void 0){let ie=F[ee];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(G.location,ie);break;case 3:r.vertexAttrib3fv(G.location,ie);break;case 4:r.vertexAttrib4fv(G.location,ie);break;default:r.vertexAttrib1fv(G.location,ie)}}}}v()}function C(){A();for(let S in n){let b=n[S];for(let D in b){let U=b[D];for(let O in U)h(U[O].object),delete U[O];delete b[D]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;let b=n[S.id];for(let D in b){let U=b[D];for(let O in U)h(U[O].object),delete U[O];delete b[D]}delete n[S.id]}function T(S){for(let b in n){let D=n[b];if(D[S.id]===void 0)continue;let U=D[S.id];for(let O in U)h(U[O].object),delete U[O];delete D[S.id]}}function A(){L(),o=!0,s!==i&&(s=i,c(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:L,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function cE(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];for(let _=0;_<f.length;_++)t.update(m,n,f[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Bt&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let A=T===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==In&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Gt&&!A)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:M}}function uE(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Yn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,d=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{let v=s?0:n,x=v*4,y=d.clippingState||null;l.value=y,y=h(m,f,x,p);for(let C=0;C!==x;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function fE(r){let e=new WeakMap;function t(o,a){return a===Mr?o.mapping=Si:a===_o&&(o.mapping=ki),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Mr||a===_o)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new xc(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var pn=class extends Vi{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ms=4,Qm=[.125,.215,.35,.446,.526,.582],mr=20,Hu=new pn,eg=new pe,Vu=null,Gu=0,Wu=0,Xu=!1,pr=(1+Math.sqrt(5))/2,as=1/pr,tg=[new R(-pr,as,0),new R(pr,as,0),new R(-as,0,pr),new R(as,0,pr),new R(0,pr,-as),new R(0,pr,as),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Io=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vu,Gu,Wu),this._renderer.xr.enabled=Xu,e.scissorTest=!1,sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:Vn,format:Bt,colorSpace:Ti,depthBuffer:!1},i=ng(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ng(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dE(s)),this._blurMaterial=pE(s,e,t)}return i}_compileMaterial(e){let t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,Hu)}_sceneToCubeUV(e,t,n,i){let a=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(eg),h.toneMapping=kn,h.autoClear=!1;let p=new jn({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),m=new ut(new wr,p),_=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,_=!0):(p.color.copy(eg),_=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let x=this._cubeSize;sl(i,v*x,d>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Si||e.mapping===ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ig());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;sl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Hu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=tg[(i-s-1)%tg.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ut(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mr-1),_=s/m,g=isFinite(s)?1+Math.floor(h*_):mr;g>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${mr}`);let d=[],v=0;for(let T=0;T<mr;++T){let A=T/_,L=Math.exp(-A*A/2);d.push(L),T===0?v+=L:T<g&&(v+=2*L)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;let y=this._sizeLods[i],C=3*y*(i>x-ms?i-x+ms:0),M=4*(this._cubeSize-y);sl(t,C,M,3*y,2*y),l.setRenderTarget(t),l.render(u,Hu)}};function dE(r){let e=[],t=[],n=[],i=r,s=r-ms+1+Qm.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ms?l=Qm[o-r+ms-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,_=3,g=2,d=1,v=new Float32Array(_*m*p),x=new Float32Array(g*m*p),y=new Float32Array(d*m*p);for(let M=0;M<p;M++){let T=M%3*2/3-1,A=M>2?0:-1,L=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];v.set(L,_*m*M),x.set(f,g*m*M);let S=[M,M,M,M,M,M];y.set(S,d*m*M)}let C=new Ne;C.setAttribute("position",new at(v,_)),C.setAttribute("uv",new at(x,g)),C.setAttribute("faceIndex",new at(y,d)),e.push(C),i>ms&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ng(r,e,t){let n=new cn(r,e,t);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function pE(r,e,t){let n=new Float32Array(mr),i=new R(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function ig(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function rg(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mE(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Mr||l===_o,h=l===Si||l===ki;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Io(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Io(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gE(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Dl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _E(r,e,t,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);for(let m in f.morphAttributes){let _=f.morphAttributes[m];for(let g=0,d=_.length;g<d;g++)e.remove(_[g])}f.removeEventListener("dispose",o),delete i[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)e.update(f[m],r.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let _=p[m];for(let g=0,d=_.length;g<d;g++)e.update(_[g],r.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,m=u.attributes.position,_=0;if(p!==null){let v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){let C=v[x+0],M=v[x+1],T=v[x+2];f.push(C,M,M,T,T,C)}}else if(m!==void 0){let v=m.array;_=m.version;for(let x=0,y=v.length/3-1;x<y;x+=3){let C=x+0,M=x+1,T=x+2;f.push(C,M,M,T,T,C)}}else return;let g=new(e0(f)?Po:Ro)(f,1);g.version=_;let d=s.get(u);d&&e.remove(d),s.set(u,g)}function h(u){let f=s.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function vE(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){r.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,m){m!==0&&(r.drawElementsInstanced(n,p,s,f*o,m),t.update(p,n,m))}function h(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];t.update(g,n,1)}function u(f,p,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,m);let d=0;for(let v=0;v<m;v++)d+=p[v];for(let v=0;v<_.length;v++)t.update(d,n,_[v])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xE(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function yE(r,e,t){let n=new WeakMap,i=new et;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let L=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],x=0;p===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*C*4*u),T=new Ss(M,y,C,u);T.type=Gt,T.needsUpdate=!0;let A=x*4;for(let S=0;S<u;S++){let b=g[S],D=d[S],U=v[S],O=y*C*4*S;for(let X=0;X<b.count;X++){let F=X*A;p===!0&&(i.fromBufferAttribute(b,X),M[O+F+0]=i.x,M[O+F+1]=i.y,M[O+F+2]=i.z,M[O+F+3]=0),m===!0&&(i.fromBufferAttribute(D,X),M[O+F+4]=i.x,M[O+F+5]=i.y,M[O+F+6]=i.z,M[O+F+7]=0),_===!0&&(i.fromBufferAttribute(U,X),M[O+F+8]=i.x,M[O+F+9]=i.y,M[O+F+10]=i.z,M[O+F+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new $(y,C)},n.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function SE(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Lo=class extends wt{constructor(e,t,n,i,s,o,a,l,c,h=yr){if(h!==yr&&h!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===yr&&(n=bi),n===void 0&&h===Tr&&(n=Er),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},s0=new wt,sg=new Lo(1,1),o0=new Ss,a0=new Co,l0=new Ar,og=[],ag=[],lg=new Float32Array(16),cg=new Float32Array(9),hg=new Float32Array(4);function Ls(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=og[i];if(s===void 0&&(s=new Float32Array(i),og[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Uh(r,e){let t=ag[e];t===void 0&&(t=new Int32Array(e),ag[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function bE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ME(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2fv(this.addr,e),kt(t,e)}}function EE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;r.uniform3fv(this.addr,e),kt(t,e)}}function TE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4fv(this.addr,e),kt(t,e)}}function wE(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;hg.set(n),r.uniformMatrix2fv(this.addr,!1,hg),kt(t,n)}}function AE(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;cg.set(n),r.uniformMatrix3fv(this.addr,!1,cg),kt(t,n)}}function CE(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;lg.set(n),r.uniformMatrix4fv(this.addr,!1,lg),kt(t,n)}}function RE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function PE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2iv(this.addr,e),kt(t,e)}}function IE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3iv(this.addr,e),kt(t,e)}}function LE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4iv(this.addr,e),kt(t,e)}}function DE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function OE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2uiv(this.addr,e),kt(t,e)}}function UE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3uiv(this.addr,e),kt(t,e)}}function NE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4uiv(this.addr,e),kt(t,e)}}function FE(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(sg.compareFunction=Wd,s=sg):s=s0,t.setTexture2D(e||s,i)}function BE(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||a0,i)}function zE(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||l0,i)}function kE(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||o0,i)}function HE(r){switch(r){case 5126:return bE;case 35664:return ME;case 35665:return EE;case 35666:return TE;case 35674:return wE;case 35675:return AE;case 35676:return CE;case 5124:case 35670:return RE;case 35667:case 35671:return PE;case 35668:case 35672:return IE;case 35669:case 35673:return LE;case 5125:return DE;case 36294:return OE;case 36295:return UE;case 36296:return NE;case 35678:case 36198:case 36298:case 36306:case 35682:return FE;case 35679:case 36299:case 36307:return BE;case 35680:case 36300:case 36308:case 36293:return zE;case 36289:case 36303:case 36311:case 36292:return kE}}function VE(r,e){r.uniform1fv(this.addr,e)}function GE(r,e){let t=Ls(e,this.size,2);r.uniform2fv(this.addr,t)}function WE(r,e){let t=Ls(e,this.size,3);r.uniform3fv(this.addr,t)}function XE(r,e){let t=Ls(e,this.size,4);r.uniform4fv(this.addr,t)}function YE(r,e){let t=Ls(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function qE(r,e){let t=Ls(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ZE(r,e){let t=Ls(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function KE(r,e){r.uniform1iv(this.addr,e)}function $E(r,e){r.uniform2iv(this.addr,e)}function JE(r,e){r.uniform3iv(this.addr,e)}function jE(r,e){r.uniform4iv(this.addr,e)}function QE(r,e){r.uniform1uiv(this.addr,e)}function eT(r,e){r.uniform2uiv(this.addr,e)}function tT(r,e){r.uniform3uiv(this.addr,e)}function nT(r,e){r.uniform4uiv(this.addr,e)}function iT(r,e,t){let n=this.cache,i=e.length,s=Uh(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||s0,s[o])}function rT(r,e,t){let n=this.cache,i=e.length,s=Uh(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||a0,s[o])}function sT(r,e,t){let n=this.cache,i=e.length,s=Uh(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||l0,s[o])}function oT(r,e,t){let n=this.cache,i=e.length,s=Uh(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||o0,s[o])}function aT(r){switch(r){case 5126:return VE;case 35664:return GE;case 35665:return WE;case 35666:return XE;case 35674:return YE;case 35675:return qE;case 35676:return ZE;case 5124:case 35670:return KE;case 35667:case 35671:return $E;case 35668:case 35672:return JE;case 35669:case 35673:return jE;case 5125:return QE;case 36294:return eT;case 36295:return tT;case 36296:return nT;case 35678:case 36198:case 36298:case 36306:case 35682:return iT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return oT}}var Ef=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=HE(t.type)}},Tf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aT(t.type)}},wf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},Yu=/(\w+)(\])?(\[|\.)?/g;function ug(r,e){r.seq.push(e),r.map[e.id]=e}function lT(r,e,t){let n=r.name,i=n.length;for(Yu.lastIndex=0;;){let s=Yu.exec(n),o=Yu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ug(t,c===void 0?new Ef(a,r,e):new Tf(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new wf(a),ug(t,u)),t=u}}}var vs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);lT(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function fg(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var cT=37297,hT=0;function uT(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function fT(r){let e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(r),n;switch(e===t?n="":e===Eo&&t===Mo?n="LinearDisplayP3ToLinearSRGB":e===Mo&&t===Eo&&(n="LinearSRGBToLinearDisplayP3"),r){case Ti:case ca:return[n,"LinearTransferOETF"];case An:case Oh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function dg(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+uT(r.getShaderSource(e),o)}else return i}function dT(r,e){let t=fT(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pT(r,e){let t;switch(e){case O_:t="Linear";break;case U_:t="Reinhard";break;case N_:t="Cineon";break;case Th:t="ACESFilmic";break;case B_:t="AgX";break;case z_:t="Neutral";break;case F_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ol=new R;function mT(){tt.getLuminanceCoefficients(ol);let r=ol.x.toFixed(4),e=ol.y.toFixed(4),t=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function _T(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vT(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function so(r){return r!==""}function pg(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(r){return r.replace(xT,ST)}var yT=new Map;function ST(r,e){let t=He[e];if(t===void 0){let n=yT.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Af(t)}var bT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gg(r){return r.replace(bT,MT)}function MT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function _g(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ET(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===oa?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Rs?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function TT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Si:case ki:e="ENVMAP_TYPE_CUBE";break;case Ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function AT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case aa:e="ENVMAP_BLENDING_MULTIPLY";break;case L_:e="ENVMAP_BLENDING_MIX";break;case D_:e="ENVMAP_BLENDING_ADD";break}return e}function CT(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function RT(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ET(t),c=TT(t),h=wT(t),u=AT(t),f=CT(t),p=gT(t),m=_T(s),_=i.createProgram(),g,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(so).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(so).join(`
`),d.length>0&&(d+=`
`)):(g=[_g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),d=[_g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?He.tonemapping_pars_fragment:"",t.toneMapping!==kn?pT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,dT("linearToOutputTexel",t.outputColorSpace),mT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=Af(o),o=pg(o,t),o=mg(o,t),a=Af(a),a=pg(a,t),a=mg(a,t),o=gg(o),a=gg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let x=v+g+o,y=v+d+a,C=fg(i,i.VERTEX_SHADER,x),M=fg(i,i.FRAGMENT_SHADER,y);i.attachShader(_,C),i.attachShader(_,M),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(b){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(C).trim(),O=i.getShaderInfoLog(M).trim(),X=!0,F=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,M);else{let ee=dg(i,C,"vertex"),G=dg(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+D+`
`+ee+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||O==="")&&(F=!1);F&&(b.diagnostics={runnable:X,programLog:D,vertexShader:{log:U,prefix:g},fragmentShader:{log:O,prefix:d}})}i.deleteShader(C),i.deleteShader(M),A=new vs(i,_),L=vT(i,_)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let L;this.getAttributes=function(){return L===void 0&&T(this),L};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,cT)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=M,this}var PT=0,Cf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rf(e),t.set(e,n)),n}},Rf=class{constructor(e){this.id=PT++,this.code=e,this.usedTimes=0}};function IT(r,e,t,n,i,s,o){let a=new Jn,l=new Cf,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,p=i.vertexTextures,m=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function d(S,b,D,U,O){let X=U.fog,F=O.geometry,ee=S.isMeshStandardMaterial?U.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||ee),oe=G&&G.mapping===Ps?G.image.height:null,ie=_[S.type];S.precision!==null&&(m=i.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,_e=se!==void 0?se.length:0,Pe=0;F.morphAttributes.position!==void 0&&(Pe=1),F.morphAttributes.normal!==void 0&&(Pe=2),F.morphAttributes.color!==void 0&&(Pe=3);let W,te,ge,ce;if(ie){let un=zn[ie];W=un.vertexShader,te=un.fragmentShader}else W=S.vertexShader,te=S.fragmentShader,l.update(S),ge=l.getVertexShaderID(S),ce=l.getFragmentShaderID(S);let Fe=r.getRenderTarget(),Ue=O.isInstancedMesh===!0,We=O.isBatchedMesh===!0,Ke=!!S.map,J=!!S.matcap,I=!!G,he=!!S.aoMap,le=!!S.lightMap,ne=!!S.bumpMap,ue=!!S.normalMap,Le=!!S.displacementMap,ye=!!S.emissiveMap,P=!!S.metalnessMap,E=!!S.roughnessMap,k=S.anisotropy>0,Z=S.clearcoat>0,j=S.dispersion>0,K=S.iridescence>0,Ce=S.sheen>0,de=S.transmission>0,Me=k&&!!S.anisotropyMap,Je=Z&&!!S.clearcoatMap,re=Z&&!!S.clearcoatNormalMap,Ee=Z&&!!S.clearcoatRoughnessMap,Ve=K&&!!S.iridescenceMap,Ge=K&&!!S.iridescenceThicknessMap,we=Ce&&!!S.sheenColorMap,je=Ce&&!!S.sheenRoughnessMap,Xe=!!S.specularMap,dt=!!S.specularColorMap,N=!!S.specularIntensityMap,Se=de&&!!S.transmissionMap,Y=de&&!!S.thicknessMap,Q=!!S.gradientMap,ve=!!S.alphaMap,be=S.alphaTest>0,Qe=!!S.alphaHash,Ot=!!S.extensions,hn=kn;S.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(hn=r.toneMapping);let it={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:W,fragmentShader:te,defines:S.defines,customVertexShaderID:ge,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:We,batchingColor:We&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Fe===null?r.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Ti,alphaToCoverage:!!S.alphaToCoverage,map:Ke,matcap:J,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:oe,aoMap:he,lightMap:le,bumpMap:ne,normalMap:ue,displacementMap:p&&Le,emissiveMap:ye,normalMapObjectSpace:ue&&S.normalMapType===Y_,normalMapTangentSpace:ue&&S.normalMapType===Yi,metalnessMap:P,roughnessMap:E,anisotropy:k,anisotropyMap:Me,clearcoat:Z,clearcoatMap:Je,clearcoatNormalMap:re,clearcoatRoughnessMap:Ee,dispersion:j,iridescence:K,iridescenceMap:Ve,iridescenceThicknessMap:Ge,sheen:Ce,sheenColorMap:we,sheenRoughnessMap:je,specularMap:Xe,specularColorMap:dt,specularIntensityMap:N,transmission:de,transmissionMap:Se,thicknessMap:Y,gradientMap:Q,opaque:S.transparent===!1&&S.blending===xr&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:be,alphaHash:Qe,combine:S.combine,mapUv:Ke&&g(S.map.channel),aoMapUv:he&&g(S.aoMap.channel),lightMapUv:le&&g(S.lightMap.channel),bumpMapUv:ne&&g(S.bumpMap.channel),normalMapUv:ue&&g(S.normalMap.channel),displacementMapUv:Le&&g(S.displacementMap.channel),emissiveMapUv:ye&&g(S.emissiveMap.channel),metalnessMapUv:P&&g(S.metalnessMap.channel),roughnessMapUv:E&&g(S.roughnessMap.channel),anisotropyMapUv:Me&&g(S.anisotropyMap.channel),clearcoatMapUv:Je&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:je&&g(S.sheenRoughnessMap.channel),specularMapUv:Xe&&g(S.specularMap.channel),specularColorMapUv:dt&&g(S.specularColorMap.channel),specularIntensityMapUv:N&&g(S.specularIntensityMap.channel),transmissionMapUv:Se&&g(S.transmissionMap.channel),thicknessMapUv:Y&&g(S.thicknessMap.channel),alphaMapUv:ve&&g(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ue||k),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(Ke||ve),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Pe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:hn,decodeVideoTexture:Ke&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cn,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ot&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&S.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function v(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)b.push(D),b.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(x(b,S),y(b,S),b.push(r.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),S.push(a.mask)}function C(S){let b=_[S.type],D;if(b){let U=zn[b];D=qi.clone(U.uniforms)}else D=S.uniforms;return D}function M(S,b){let D;for(let U=0,O=h.length;U<O;U++){let X=h[U];if(X.cacheKey===b){D=X,++D.usedTimes;break}}return D===void 0&&(D=new RT(r,b,S,s),h.push(D)),D}function T(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function L(){l.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:C,acquireProgram:M,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:L}}function LT(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function DT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function xg(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,p,m,_,g){let d=r[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},r[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=u.renderOrder,d.z=_,d.group=g),e++,d}function a(u,f,p,m,_,g){let d=o(u,f,p,m,_,g);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(u,f,p,m,_,g){let d=o(u,f,p,m,_,g);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||DT),n.length>1&&n.sort(f||vg),i.length>1&&i.sort(f||vg)}function h(){for(let u=e,f=r.length;u<f;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function OT(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new xg,r.set(n,[o])):i>=s.length?(o=new xg,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function UT(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new pe};break;case"SpotLight":t={position:new R,direction:new R,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function NT(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var FT=0;function BT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function zT(r){let e=new UT,t=NT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,s=new Oe,o=new Oe;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,m=0,_=0,g=0,d=0,v=0,x=0,y=0,C=0,M=0,T=0;c.sort(BT);for(let L=0,S=c.length;L<S;L++){let b=c[L],D=b.color,U=b.intensity,O=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=D.r*U,u+=D.g*U,f+=D.b*U;else if(b.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(b.sh.coefficients[F],U);T++}else if(b.isDirectionalLight){let F=e.get(b);if(F.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let ee=b.shadow,G=t.get(b);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=b.shadow.matrix,v++}n.directional[p]=F,p++}else if(b.isSpotLight){let F=e.get(b);F.position.setFromMatrixPosition(b.matrixWorld),F.color.copy(D).multiplyScalar(U),F.distance=O,F.coneCos=Math.cos(b.angle),F.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),F.decay=b.decay,n.spot[_]=F;let ee=b.shadow;if(b.map&&(n.spotLightMap[C]=b.map,C++,ee.updateMatrices(b),b.castShadow&&M++),n.spotLightMatrix[_]=ee.matrix,b.castShadow){let G=t.get(b);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=X,y++}_++}else if(b.isRectAreaLight){let F=e.get(b);F.color.copy(D).multiplyScalar(U),F.halfWidth.set(b.width*.5,0,0),F.halfHeight.set(0,b.height*.5,0),n.rectArea[g]=F,g++}else if(b.isPointLight){let F=e.get(b);if(F.color.copy(b.color).multiplyScalar(b.intensity),F.distance=b.distance,F.decay=b.decay,b.castShadow){let ee=b.shadow,G=t.get(b);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,G.shadowCameraNear=ee.camera.near,G.shadowCameraFar=ee.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=b.shadow.matrix,x++}n.point[m]=F,m++}else if(b.isHemisphereLight){let F=e.get(b);F.skyColor.copy(b.color).multiplyScalar(U),F.groundColor.copy(b.groundColor).multiplyScalar(U),n.hemi[d]=F,d++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let A=n.hash;(A.directionalLength!==p||A.pointLength!==m||A.spotLength!==_||A.rectAreaLength!==g||A.hemiLength!==d||A.numDirectionalShadows!==v||A.numPointShadows!==x||A.numSpotShadows!==y||A.numSpotMaps!==C||A.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+C-M,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,A.directionalLength=p,A.pointLength=m,A.spotLength=_,A.rectAreaLength=g,A.hemiLength=d,A.numDirectionalShadows=v,A.numPointShadows=x,A.numSpotShadows=y,A.numSpotMaps=C,A.numLightProbes=T,n.version=FT++)}function l(c,h){let u=0,f=0,p=0,m=0,_=0,g=h.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){let x=c[d];if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(x.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function yg(r){let e=new zT(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function kT(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new yg(r),e.set(i,[a])):s>=o.length?(a=new yg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Do=class extends Nt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oo=class extends Nt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},HT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GT(r,e,t){let n=new Cr,i=new $,s=new $,o=new et,a=new Do({depthPacking:X_}),l=new Oo,c={},h=t.maxTextureSize,u={[yi]:ln,[ln]:yi,[Cn]:Cn},f=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:HT,fragmentShader:VT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ne;m.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ut(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let d=this.type;this.render=function(M,T,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;let L=r.getRenderTarget(),S=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),D=r.state;D.setBlending(vi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=d!==wn&&this.type===wn,O=d===wn&&this.type!==wn;for(let X=0,F=M.length;X<F;X++){let ee=M[X],G=ee.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let oe=G.getFrameExtents();if(i.multiply(oe),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/oe.x),i.x=s.x*oe.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/oe.y),i.y=s.y*oe.y,G.mapSize.y=s.y)),G.map===null||U===!0||O===!0){let se=this.type!==wn?{minFilter:Vt,magFilter:Vt}:{};G.map!==null&&G.map.dispose(),G.map=new cn(i.x,i.y,se),G.map.texture.name=ee.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();let ie=G.getViewportCount();for(let se=0;se<ie;se++){let _e=G.getViewport(se);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),D.viewport(o),G.updateMatrices(ee,se),n=G.getFrustum(),y(T,A,G.camera,ee,this.type)}G.isPointLightShadow!==!0&&this.type===wn&&v(G,A),G.needsUpdate=!1}d=this.type,g.needsUpdate=!1,r.setRenderTarget(L,S,b)};function v(M,T){let A=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new cn(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(T,null,A,f,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(T,null,A,p,_,null)}function x(M,T,A,L){let S=null,b=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)S=b;else if(S=A.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let D=S.uuid,U=T.uuid,O=c[D];O===void 0&&(O={},c[D]=O);let X=O[U];X===void 0&&(X=S.clone(),O[U]=X,T.addEventListener("dispose",C)),S=X}if(S.visible=T.visible,S.wireframe=T.wireframe,L===wn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=r.properties.get(S);D.light=A}return S}function y(M,T,A,L,S){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===wn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);let U=e.update(M),O=M.material;if(Array.isArray(O)){let X=U.groups;for(let F=0,ee=X.length;F<ee;F++){let G=X[F],oe=O[G.materialIndex];if(oe&&oe.visible){let ie=x(M,oe,L,S);M.onBeforeShadow(r,M,T,A,U,ie,G),r.renderBufferDirect(A,null,U,ie,M,G),M.onAfterShadow(r,M,T,A,U,ie,G)}}}else if(O.visible){let X=x(M,O,L,S);M.onBeforeShadow(r,M,T,A,U,X,null),r.renderBufferDirect(A,null,U,X,M,null),M.onAfterShadow(r,M,T,A,U,X,null)}}let D=M.children;for(let U=0,O=D.length;U<O;U++)y(D[U],T,A,L,S)}function C(M){M.target.removeEventListener("dispose",C);for(let A in c){let L=c[A],S=M.target.uuid;S in L&&(L[S].dispose(),delete L[S])}}}var WT={[Nl]:Fl,[Bl]:Hl,[zl]:Vl,[br]:kl,[Fl]:Nl,[Hl]:Bl,[Vl]:zl,[kl]:br};function XT(r){function e(){let N=!1,Se=new et,Y=null,Q=new et(0,0,0,0);return{setMask:function(ve){Y!==ve&&!N&&(r.colorMask(ve,ve,ve,ve),Y=ve)},setLocked:function(ve){N=ve},setClear:function(ve,be,Qe,Ot,hn){hn===!0&&(ve*=Ot,be*=Ot,Qe*=Ot),Se.set(ve,be,Qe,Ot),Q.equals(Se)===!1&&(r.clearColor(ve,be,Qe,Ot),Q.copy(Se))},reset:function(){N=!1,Y=null,Q.set(-1,0,0,0)}}}function t(){let N=!1,Se=!1,Y=null,Q=null,ve=null;return{setReversed:function(be){Se=be},setTest:function(be){be?ge(r.DEPTH_TEST):ce(r.DEPTH_TEST)},setMask:function(be){Y!==be&&!N&&(r.depthMask(be),Y=be)},setFunc:function(be){if(Se&&(be=WT[be]),Q!==be){switch(be){case Nl:r.depthFunc(r.NEVER);break;case Fl:r.depthFunc(r.ALWAYS);break;case Bl:r.depthFunc(r.LESS);break;case br:r.depthFunc(r.LEQUAL);break;case zl:r.depthFunc(r.EQUAL);break;case kl:r.depthFunc(r.GEQUAL);break;case Hl:r.depthFunc(r.GREATER);break;case Vl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=be}},setLocked:function(be){N=be},setClear:function(be){ve!==be&&(r.clearDepth(be),ve=be)},reset:function(){N=!1,Y=null,Q=null,ve=null}}}function n(){let N=!1,Se=null,Y=null,Q=null,ve=null,be=null,Qe=null,Ot=null,hn=null;return{setTest:function(it){N||(it?ge(r.STENCIL_TEST):ce(r.STENCIL_TEST))},setMask:function(it){Se!==it&&!N&&(r.stencilMask(it),Se=it)},setFunc:function(it,un,si){(Y!==it||Q!==un||ve!==si)&&(r.stencilFunc(it,un,si),Y=it,Q=un,ve=si)},setOp:function(it,un,si){(be!==it||Qe!==un||Ot!==si)&&(r.stencilOp(it,un,si),be=it,Qe=un,Ot=si)},setLocked:function(it){N=it},setClear:function(it){hn!==it&&(r.clearStencil(it),hn=it)},reset:function(){N=!1,Se=null,Y=null,Q=null,ve=null,be=null,Qe=null,Ot=null,hn=null}}}let i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],p=null,m=!1,_=null,g=null,d=null,v=null,x=null,y=null,C=null,M=new pe(0,0,0),T=0,A=!1,L=null,S=null,b=null,D=null,U=null,O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,F=0,ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(ee)[1]),X=F>=1):ee.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),X=F>=2);let G=null,oe={},ie=r.getParameter(r.SCISSOR_BOX),se=r.getParameter(r.VIEWPORT),_e=new et().fromArray(ie),Pe=new et().fromArray(se);function W(N,Se,Y,Q){let ve=new Uint8Array(4),be=r.createTexture();r.bindTexture(N,be),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<Y;Qe++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(Se,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,ve):r.texImage2D(Se+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ve);return be}let te={};te[r.TEXTURE_2D]=W(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=W(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=W(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=W(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(r.DEPTH_TEST),s.setFunc(br),le(!1),ne(cf),ge(r.CULL_FACE),I(vi);function ge(N){c[N]!==!0&&(r.enable(N),c[N]=!0)}function ce(N){c[N]!==!1&&(r.disable(N),c[N]=!1)}function Fe(N,Se){return h[N]!==Se?(r.bindFramebuffer(N,Se),h[N]=Se,N===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Se),N===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ue(N,Se){let Y=f,Q=!1;if(N){Y=u.get(Se),Y===void 0&&(Y=[],u.set(Se,Y));let ve=N.textures;if(Y.length!==ve.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let be=0,Qe=ve.length;be<Qe;be++)Y[be]=r.COLOR_ATTACHMENT0+be;Y.length=ve.length,Q=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,Q=!0);Q&&r.drawBuffers(Y)}function We(N){return p!==N?(r.useProgram(N),p=N,!0):!1}let Ke={[Bi]:r.FUNC_ADD,[m_]:r.FUNC_SUBTRACT,[g_]:r.FUNC_REVERSE_SUBTRACT};Ke[__]=r.MIN,Ke[v_]=r.MAX;let J={[x_]:r.ZERO,[y_]:r.ONE,[S_]:r.SRC_COLOR,[Ol]:r.SRC_ALPHA,[A_]:r.SRC_ALPHA_SATURATE,[T_]:r.DST_COLOR,[M_]:r.DST_ALPHA,[b_]:r.ONE_MINUS_SRC_COLOR,[Ul]:r.ONE_MINUS_SRC_ALPHA,[w_]:r.ONE_MINUS_DST_COLOR,[E_]:r.ONE_MINUS_DST_ALPHA,[C_]:r.CONSTANT_COLOR,[R_]:r.ONE_MINUS_CONSTANT_COLOR,[P_]:r.CONSTANT_ALPHA,[I_]:r.ONE_MINUS_CONSTANT_ALPHA};function I(N,Se,Y,Q,ve,be,Qe,Ot,hn,it){if(N===vi){m===!0&&(ce(r.BLEND),m=!1);return}if(m===!1&&(ge(r.BLEND),m=!0),N!==p_){if(N!==_||it!==A){if((g!==Bi||x!==Bi)&&(r.blendEquation(r.FUNC_ADD),g=Bi,x=Bi),it)switch(N){case xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hf:r.blendFunc(r.ONE,r.ONE);break;case uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ff:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ff:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}d=null,v=null,y=null,C=null,M.set(0,0,0),T=0,_=N,A=it}return}ve=ve||Se,be=be||Y,Qe=Qe||Q,(Se!==g||ve!==x)&&(r.blendEquationSeparate(Ke[Se],Ke[ve]),g=Se,x=ve),(Y!==d||Q!==v||be!==y||Qe!==C)&&(r.blendFuncSeparate(J[Y],J[Q],J[be],J[Qe]),d=Y,v=Q,y=be,C=Qe),(Ot.equals(M)===!1||hn!==T)&&(r.blendColor(Ot.r,Ot.g,Ot.b,hn),M.copy(Ot),T=hn),_=N,A=!1}function he(N,Se){N.side===Cn?ce(r.CULL_FACE):ge(r.CULL_FACE);let Y=N.side===ln;Se&&(Y=!Y),le(Y),N.blending===xr&&N.transparent===!1?I(vi):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),i.setMask(N.colorWrite);let Q=N.stencilWrite;o.setTest(Q),Q&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(N){L!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),L=N)}function ne(N){N!==f_?(ge(r.CULL_FACE),N!==S&&(N===cf?r.cullFace(r.BACK):N===d_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ce(r.CULL_FACE),S=N}function ue(N){N!==b&&(X&&r.lineWidth(N),b=N)}function Le(N,Se,Y){N?(ge(r.POLYGON_OFFSET_FILL),(D!==Se||U!==Y)&&(r.polygonOffset(Se,Y),D=Se,U=Y)):ce(r.POLYGON_OFFSET_FILL)}function ye(N){N?ge(r.SCISSOR_TEST):ce(r.SCISSOR_TEST)}function P(N){N===void 0&&(N=r.TEXTURE0+O-1),G!==N&&(r.activeTexture(N),G=N)}function E(N,Se,Y){Y===void 0&&(G===null?Y=r.TEXTURE0+O-1:Y=G);let Q=oe[Y];Q===void 0&&(Q={type:void 0,texture:void 0},oe[Y]=Q),(Q.type!==N||Q.texture!==Se)&&(G!==Y&&(r.activeTexture(Y),G=Y),r.bindTexture(N,Se||te[N]),Q.type=N,Q.texture=Se)}function k(){let N=oe[G];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Je(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(N){_e.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),_e.copy(N))}function we(N){Pe.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Pe.copy(N))}function je(N,Se){let Y=l.get(Se);Y===void 0&&(Y=new WeakMap,l.set(Se,Y));let Q=Y.get(N);Q===void 0&&(Q=r.getUniformBlockIndex(Se,N.name),Y.set(N,Q))}function Xe(N,Se){let Q=l.get(Se).get(N);a.get(Se)!==Q&&(r.uniformBlockBinding(Se,Q,N.__bindingPointIndex),a.set(Se,Q))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},G=null,oe={},h={},u=new WeakMap,f=[],p=null,m=!1,_=null,g=null,d=null,v=null,x=null,y=null,C=null,M=new pe(0,0,0),T=0,A=!1,L=null,S=null,b=null,D=null,U=null,_e.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ge,disable:ce,bindFramebuffer:Fe,drawBuffers:Ue,useProgram:We,setBlending:I,setMaterial:he,setFlipSided:le,setCullFace:ne,setLineWidth:ue,setPolygonOffset:Le,setScissorTest:ye,activeTexture:P,bindTexture:E,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:Ee,texImage3D:Ve,updateUBOMapping:je,uniformBlockBinding:Xe,texStorage2D:Je,texStorage3D:re,texSubImage2D:K,texSubImage3D:Ce,compressedTexSubImage2D:de,compressedTexSubImage3D:Me,scissor:Ge,viewport:we,reset:dt}}function YT(r,e){let t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function qT(r,e){let t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function ZT(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Pf(r,e,t,n){let i=KT(n);switch(t){case Fd:return r*e;case zd:return r*e;case kd:return r*e*2;case Ph:return r*e/i.components*i.byteLength;case la:return r*e/i.components*i.byteLength;case Hd:return r*e*2/i.components*i.byteLength;case Ih:return r*e*2/i.components*i.byteLength;case Bd:return r*e*3/i.components*i.byteLength;case Bt:return r*e*4/i.components*i.byteLength;case Lh:return r*e*4/i.components*i.byteLength;case ao:case lo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case co:case ho:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wl:case Yl:return Math.max(r,16)*Math.max(e,8)/4;case Gl:case Xl:return Math.max(r,8)*Math.max(e,8)/2;case ql:case Zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case jl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case uo:case hc:case uc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Vd:case fc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case dc:case pc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KT(r){switch(r){case In:case Od:return{byteLength:1,components:1};case xs:case Ud:case Vn:return{byteLength:2,components:1};case Ch:case Rh:return{byteLength:2,components:4};case bi:case Ah:case Gt:return{byteLength:4,components:1};case Nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}var $T={contain:YT,cover:qT,fill:ZT,getByteLength:Pf};function JT(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(P){}function m(P,E){return p?new OffscreenCanvas(P,E):Ao("canvas")}function _(P,E,k){let Z=1,j=ye(P);if((j.width>k||j.height>k)&&(Z=k/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let K=Math.floor(Z*j.width),Ce=Math.floor(Z*j.height);u===void 0&&(u=m(K,Ce));let de=E?m(K,Ce):u;return de.width=K,de.height=Ce,de.getContext("2d").drawImage(P,0,0,K,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+Ce+")."),de}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function g(P){return P.generateMipmaps&&P.minFilter!==Vt&&P.minFilter!==mt}function d(P){r.generateMipmap(P)}function v(P,E,k,Z,j=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=E;if(E===r.RED&&(k===r.FLOAT&&(K=r.R32F),k===r.HALF_FLOAT&&(K=r.R16F),k===r.UNSIGNED_BYTE&&(K=r.R8)),E===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.R8UI),k===r.UNSIGNED_SHORT&&(K=r.R16UI),k===r.UNSIGNED_INT&&(K=r.R32UI),k===r.BYTE&&(K=r.R8I),k===r.SHORT&&(K=r.R16I),k===r.INT&&(K=r.R32I)),E===r.RG&&(k===r.FLOAT&&(K=r.RG32F),k===r.HALF_FLOAT&&(K=r.RG16F),k===r.UNSIGNED_BYTE&&(K=r.RG8)),E===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.RG8UI),k===r.UNSIGNED_SHORT&&(K=r.RG16UI),k===r.UNSIGNED_INT&&(K=r.RG32UI),k===r.BYTE&&(K=r.RG8I),k===r.SHORT&&(K=r.RG16I),k===r.INT&&(K=r.RG32I)),E===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.RGB8UI),k===r.UNSIGNED_SHORT&&(K=r.RGB16UI),k===r.UNSIGNED_INT&&(K=r.RGB32UI),k===r.BYTE&&(K=r.RGB8I),k===r.SHORT&&(K=r.RGB16I),k===r.INT&&(K=r.RGB32I)),E===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),k===r.UNSIGNED_INT&&(K=r.RGBA32UI),k===r.BYTE&&(K=r.RGBA8I),k===r.SHORT&&(K=r.RGBA16I),k===r.INT&&(K=r.RGBA32I)),E===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),E===r.RGBA){let Ce=j?bo:tt.getTransfer(Z);k===r.FLOAT&&(K=r.RGBA32F),k===r.HALF_FLOAT&&(K=r.RGBA16F),k===r.UNSIGNED_BYTE&&(K=Ce===pt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(P,E){let k;return P?E===null||E===bi||E===Er?k=r.DEPTH24_STENCIL8:E===Gt?k=r.DEPTH32F_STENCIL8:E===xs&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===bi||E===Er?k=r.DEPTH_COMPONENT24:E===Gt?k=r.DEPTH_COMPONENT32F:E===xs&&(k=r.DEPTH_COMPONENT16),k}function y(P,E){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vt&&P.minFilter!==mt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function C(P){let E=P.target;E.removeEventListener("dispose",C),T(E),E.isVideoTexture&&h.delete(E)}function M(P){let E=P.target;E.removeEventListener("dispose",M),L(E)}function T(P){let E=n.get(P);if(E.__webglInit===void 0)return;let k=P.source,Z=f.get(k);if(Z){let j=Z[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(P),Object.keys(Z).length===0&&f.delete(k)}n.remove(P)}function A(P){let E=n.get(P);r.deleteTexture(E.__webglTexture);let k=P.source,Z=f.get(k);delete Z[E.__cacheKey],o.memory.textures--}function L(P){let E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let j=0;j<E.__webglFramebuffer[Z].length;j++)r.deleteFramebuffer(E.__webglFramebuffer[Z][j]);else r.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)r.deleteFramebuffer(E.__webglFramebuffer[Z]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let k=P.textures;for(let Z=0,j=k.length;Z<j;Z++){let K=n.get(k[Z]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(k[Z])}n.remove(P)}let S=0;function b(){S=0}function D(){let P=S;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),S+=1,P}function U(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function O(P,E){let k=n.get(P);if(P.isVideoTexture&&ue(P),P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){let Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(k,P,E);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+E)}function X(P,E){let k=n.get(P);if(P.version>0&&k.__version!==P.version){Pe(k,P,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+E)}function F(P,E){let k=n.get(P);if(P.version>0&&k.__version!==P.version){Pe(k,P,E);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+E)}function ee(P,E){let k=n.get(P);if(P.version>0&&k.__version!==P.version){W(k,P,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+E)}let G={[vo]:r.REPEAT,[Rn]:r.CLAMP_TO_EDGE,[xo]:r.MIRRORED_REPEAT},oe={[Vt]:r.NEAREST,[Dd]:r.NEAREST_MIPMAP_NEAREST,[ds]:r.NEAREST_MIPMAP_LINEAR,[mt]:r.LINEAR,[oo]:r.LINEAR_MIPMAP_NEAREST,[Zn]:r.LINEAR_MIPMAP_LINEAR},ie={[q_]:r.NEVER,[Q_]:r.ALWAYS,[Z_]:r.LESS,[Wd]:r.LEQUAL,[K_]:r.EQUAL,[j_]:r.GEQUAL,[$_]:r.GREATER,[J_]:r.NOTEQUAL};function se(P,E){if(E.type===Gt&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===mt||E.magFilter===oo||E.magFilter===ds||E.magFilter===Zn||E.minFilter===mt||E.minFilter===oo||E.minFilter===ds||E.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,G[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,G[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,G[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,oe[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,oe[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Vt||E.minFilter!==ds&&E.minFilter!==Zn||E.type===Gt&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function _e(P,E){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",C));let Z=E.source,j=f.get(Z);j===void 0&&(j={},f.set(Z,j));let K=U(E);if(K!==P.__cacheKey){j[K]===void 0&&(j[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[K].usedTimes++;let Ce=j[P.__cacheKey];Ce!==void 0&&(j[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&A(E)),P.__cacheKey=K,P.__webglTexture=j[K].texture}return k}function Pe(P,E,k){let Z=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=r.TEXTURE_3D);let j=_e(P,E),K=E.source;t.bindTexture(Z,P.__webglTexture,r.TEXTURE0+k);let Ce=n.get(K);if(K.version!==Ce.__version||j===!0){t.activeTexture(r.TEXTURE0+k);let de=tt.getPrimaries(tt.workingColorSpace),Me=E.colorSpace===pi?null:tt.getPrimaries(E.colorSpace),Je=E.colorSpace===pi||de===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let re=_(E.image,!1,i.maxTextureSize);re=Le(E,re);let Ee=s.convert(E.format,E.colorSpace),Ve=s.convert(E.type),Ge=v(E.internalFormat,Ee,Ve,E.colorSpace,E.isVideoTexture);se(Z,E);let we,je=E.mipmaps,Xe=E.isVideoTexture!==!0,dt=Ce.__version===void 0||j===!0,N=K.dataReady,Se=y(E,re);if(E.isDepthTexture)Ge=x(E.format===Tr,E.type),dt&&(Xe?t.texStorage2D(r.TEXTURE_2D,1,Ge,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Ge,re.width,re.height,0,Ee,Ve,null));else if(E.isDataTexture)if(je.length>0){Xe&&dt&&t.texStorage2D(r.TEXTURE_2D,Se,Ge,je[0].width,je[0].height);for(let Y=0,Q=je.length;Y<Q;Y++)we=je[Y],Xe?N&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,we.width,we.height,Ee,Ve,we.data):t.texImage2D(r.TEXTURE_2D,Y,Ge,we.width,we.height,0,Ee,Ve,we.data);E.generateMipmaps=!1}else Xe?(dt&&t.texStorage2D(r.TEXTURE_2D,Se,Ge,re.width,re.height),N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,Ee,Ve,re.data)):t.texImage2D(r.TEXTURE_2D,0,Ge,re.width,re.height,0,Ee,Ve,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Xe&&dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Ge,je[0].width,je[0].height,re.depth);for(let Y=0,Q=je.length;Y<Q;Y++)if(we=je[Y],E.format!==Bt)if(Ee!==null)if(Xe){if(N)if(E.layerUpdates.size>0){let ve=Pf(we.width,we.height,E.format,E.type);for(let be of E.layerUpdates){let Qe=we.data.subarray(be*ve/we.data.BYTES_PER_ELEMENT,(be+1)*ve/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,be,we.width,we.height,1,Ee,Qe,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,we.width,we.height,re.depth,Ee,we.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Ge,we.width,we.height,re.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,we.width,we.height,re.depth,Ee,Ve,we.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,Ge,we.width,we.height,re.depth,0,Ee,Ve,we.data)}else{Xe&&dt&&t.texStorage2D(r.TEXTURE_2D,Se,Ge,je[0].width,je[0].height);for(let Y=0,Q=je.length;Y<Q;Y++)we=je[Y],E.format!==Bt?Ee!==null?Xe?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,we.width,we.height,Ee,we.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,Ge,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?N&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,we.width,we.height,Ee,Ve,we.data):t.texImage2D(r.TEXTURE_2D,Y,Ge,we.width,we.height,0,Ee,Ve,we.data)}else if(E.isDataArrayTexture)if(Xe){if(dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Ge,re.width,re.height,re.depth),N)if(E.layerUpdates.size>0){let Y=Pf(re.width,re.height,E.format,E.type);for(let Q of E.layerUpdates){let ve=re.data.subarray(Q*Y/re.data.BYTES_PER_ELEMENT,(Q+1)*Y/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,Ee,Ve,ve)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ee,Ve,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ge,re.width,re.height,re.depth,0,Ee,Ve,re.data);else if(E.isData3DTexture)Xe?(dt&&t.texStorage3D(r.TEXTURE_3D,Se,Ge,re.width,re.height,re.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ee,Ve,re.data)):t.texImage3D(r.TEXTURE_3D,0,Ge,re.width,re.height,re.depth,0,Ee,Ve,re.data);else if(E.isFramebufferTexture){if(dt)if(Xe)t.texStorage2D(r.TEXTURE_2D,Se,Ge,re.width,re.height);else{let Y=re.width,Q=re.height;for(let ve=0;ve<Se;ve++)t.texImage2D(r.TEXTURE_2D,ve,Ge,Y,Q,0,Ee,Ve,null),Y>>=1,Q>>=1}}else if(je.length>0){if(Xe&&dt){let Y=ye(je[0]);t.texStorage2D(r.TEXTURE_2D,Se,Ge,Y.width,Y.height)}for(let Y=0,Q=je.length;Y<Q;Y++)we=je[Y],Xe?N&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Ee,Ve,we):t.texImage2D(r.TEXTURE_2D,Y,Ge,Ee,Ve,we);E.generateMipmaps=!1}else if(Xe){if(dt){let Y=ye(re);t.texStorage2D(r.TEXTURE_2D,Se,Ge,Y.width,Y.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee,Ve,re)}else t.texImage2D(r.TEXTURE_2D,0,Ge,Ee,Ve,re);g(E)&&d(Z),Ce.__version=K.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function W(P,E,k){if(E.image.length!==6)return;let Z=_e(P,E),j=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+k);let K=n.get(j);if(j.version!==K.__version||Z===!0){t.activeTexture(r.TEXTURE0+k);let Ce=tt.getPrimaries(tt.workingColorSpace),de=E.colorSpace===pi?null:tt.getPrimaries(E.colorSpace),Me=E.colorSpace===pi||Ce===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Je=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let Q=0;Q<6;Q++)!Je&&!re?Ee[Q]=_(E.image[Q],!0,i.maxCubemapSize):Ee[Q]=re?E.image[Q].image:E.image[Q],Ee[Q]=Le(E,Ee[Q]);let Ve=Ee[0],Ge=s.convert(E.format,E.colorSpace),we=s.convert(E.type),je=v(E.internalFormat,Ge,we,E.colorSpace),Xe=E.isVideoTexture!==!0,dt=K.__version===void 0||Z===!0,N=j.dataReady,Se=y(E,Ve);se(r.TEXTURE_CUBE_MAP,E);let Y;if(Je){Xe&&dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Se,je,Ve.width,Ve.height);for(let Q=0;Q<6;Q++){Y=Ee[Q].mipmaps;for(let ve=0;ve<Y.length;ve++){let be=Y[ve];E.format!==Bt?Ge!==null?Xe?N&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,be.width,be.height,Ge,be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,je,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,be.width,be.height,Ge,we,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,je,be.width,be.height,0,Ge,we,be.data)}}}else{if(Y=E.mipmaps,Xe&&dt){Y.length>0&&Se++;let Q=ye(Ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Se,je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){Xe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ee[Q].width,Ee[Q].height,Ge,we,Ee[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,Ee[Q].width,Ee[Q].height,0,Ge,we,Ee[Q].data);for(let ve=0;ve<Y.length;ve++){let Qe=Y[ve].image[Q].image;Xe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,Qe.width,Qe.height,Ge,we,Qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,je,Qe.width,Qe.height,0,Ge,we,Qe.data)}}else{Xe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ge,we,Ee[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,Ge,we,Ee[Q]);for(let ve=0;ve<Y.length;ve++){let be=Y[ve];Xe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,Ge,we,be.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,je,Ge,we,be.image[Q])}}}g(E)&&d(r.TEXTURE_CUBE_MAP),K.__version=j.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function te(P,E,k,Z,j,K){let Ce=s.convert(k.format,k.colorSpace),de=s.convert(k.type),Me=v(k.internalFormat,Ce,de,k.colorSpace);if(!n.get(E).__hasExternalTextures){let re=Math.max(1,E.width>>K),Ee=Math.max(1,E.height>>K);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,K,Me,re,Ee,E.depth,0,Ce,de,null):t.texImage2D(j,K,Me,re,Ee,0,Ce,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),ne(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,j,n.get(k).__webglTexture,0,le(E)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,j,n.get(k).__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(P,E,k){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){let Z=E.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,K=x(E.stencilBuffer,j),Ce=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=le(E);ne(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,K,E.width,E.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,K,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,K,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ce,r.RENDERBUFFER,P)}else{let Z=E.textures;for(let j=0;j<Z.length;j++){let K=Z[j],Ce=s.convert(K.format,K.colorSpace),de=s.convert(K.type),Me=v(K.internalFormat,Ce,de,K.colorSpace),Je=le(E);k&&ne(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Me,E.width,E.height):ne(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Je,Me,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Me,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ce(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);let Z=n.get(E.depthTexture).__webglTexture,j=le(E);if(E.depthTexture.format===yr)ne(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(E.depthTexture.format===Tr)ne(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Fe(P){let E=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let Z=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){let j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=Z}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ce(E.__webglFramebuffer,P)}else if(k){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=r.createRenderbuffer(),ge(E.__webglDepthbuffer[Z],P,!1);else{let j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,K)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ge(E.__webglDepthbuffer,P,!1);else{let Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,j)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(P,E,k){let Z=n.get(P);E!==void 0&&te(Z.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Fe(P)}function We(P){let E=P.texture,k=n.get(P),Z=n.get(E);P.addEventListener("dispose",M);let j=P.textures,K=P.isWebGLCubeRenderTarget===!0,Ce=j.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=E.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let Me=0;Me<E.mipmaps.length;Me++)k.__webglFramebuffer[de][Me]=r.createFramebuffer()}else k.__webglFramebuffer[de]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)k.__webglFramebuffer[de]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let de=0,Me=j.length;de<Me;de++){let Je=n.get(j[de]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&ne(P)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<j.length;de++){let Me=j[de];k.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[de]);let Je=s.convert(Me.format,Me.colorSpace),re=s.convert(Me.type),Ee=v(Me.internalFormat,Je,re,Me.colorSpace,P.isXRRenderTarget===!0),Ve=le(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,Ee,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,k.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ge(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),se(r.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)te(k.__webglFramebuffer[de][Me],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me);else te(k.__webglFramebuffer[de],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(E)&&d(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let de=0,Me=j.length;de<Me;de++){let Je=j[de],re=n.get(Je);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),se(r.TEXTURE_2D,Je),te(k.__webglFramebuffer,P,Je,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),g(Je)&&d(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,Z.__webglTexture),se(de,E),E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)te(k.__webglFramebuffer[Me],P,E,r.COLOR_ATTACHMENT0,de,Me);else te(k.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,de,0);g(E)&&d(de),t.unbindTexture()}P.depthBuffer&&Fe(P)}function Ke(P){let E=P.textures;for(let k=0,Z=E.length;k<Z;k++){let j=E[k];if(g(j)){let K=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ce=n.get(j).__webglTexture;t.bindTexture(K,Ce),d(K),t.unbindTexture()}}}let J=[],I=[];function he(P){if(P.samples>0){if(ne(P)===!1){let E=P.textures,k=P.width,Z=P.height,j=r.COLOR_BUFFER_BIT,K=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=n.get(P),de=E.length>1;if(de)for(let Me=0;Me<E.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Me]);let Je=n.get(E[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Je,0)}r.blitFramebuffer(0,0,k,Z,0,0,k,Z,j,r.NEAREST),l===!0&&(J.length=0,I.length=0,J.push(r.COLOR_ATTACHMENT0+Me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(J.push(K),I.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let Me=0;Me<E.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Me]);let Je=n.get(E[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,Je,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function le(P){return Math.min(i.maxSamples,P.samples)}function ne(P){let E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ue(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Le(P,E){let k=P.colorSpace,Z=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Ti&&k!==pi&&(tt.getTransfer(k)===pt?(Z!==Bt||j!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function ye(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=b,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=F,this.setTextureCube=ee,this.rebindTextures=Ue,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ne}function c0(r,e){function t(n,i=pi){let s,o=tt.getTransfer(i);if(n===In)return r.UNSIGNED_BYTE;if(n===Ch)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Rh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Nd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Od)return r.BYTE;if(n===Ud)return r.SHORT;if(n===xs)return r.UNSIGNED_SHORT;if(n===Ah)return r.INT;if(n===bi)return r.UNSIGNED_INT;if(n===Gt)return r.FLOAT;if(n===Vn)return r.HALF_FLOAT;if(n===Fd)return r.ALPHA;if(n===Bd)return r.RGB;if(n===Bt)return r.RGBA;if(n===zd)return r.LUMINANCE;if(n===kd)return r.LUMINANCE_ALPHA;if(n===yr)return r.DEPTH_COMPONENT;if(n===Tr)return r.DEPTH_STENCIL;if(n===Ph)return r.RED;if(n===la)return r.RED_INTEGER;if(n===Hd)return r.RG;if(n===Ih)return r.RG_INTEGER;if(n===Lh)return r.RGBA_INTEGER;if(n===ao||n===lo||n===co||n===ho)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gl||n===Wl||n===Xl||n===Yl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===Zl||n===Kl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ql||n===Zl)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Kl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$l||n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===rc||n===sc||n===oc||n===ac||n===lc||n===cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$l)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ql)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ic)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===hc||n===uc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===uo)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vd||n===fc||n===dc||n===pc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===uo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var yc=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},zi=class extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jT={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),d=this._getHandJoint(c,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jT)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},QT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ew=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,If=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new wt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Xt({vertexShader:QT,fragmentShader:ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lf=class extends dn{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,m=null,_=new If,g=t.getContextAttributes(),d=null,v=null,x=[],y=[],C=new $,M=null,T=new Dt;T.layers.enable(1),T.viewport=new et;let A=new Dt;A.layers.enable(2),A.viewport=new et;let L=[T,A],S=new yc;S.layers.enable(1),S.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=x[W];return te===void 0&&(te=new po,x[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=x[W];return te===void 0&&(te=new po,x[W]=te),te.getGripSpace()},this.getHand=function(W){let te=x[W];return te===void 0&&(te=new po,x[W]=te),te.getHandSpace()};function U(W){let te=y.indexOf(W.inputSource);if(te===-1)return;let ge=x[te];ge!==void 0&&(ge.update(W.inputSource,W.frame,c||o),ge.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",X);for(let W=0;W<x.length;W++){let te=y[W];te!==null&&(y[W]=null,x[W].disconnect(te))}b=null,D=null,_.reset(),e.setRenderTarget(d),p=null,f=null,u=null,i=null,v=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=function(W){return Qi(this,null,function*(){if(i=W,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",O),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&(yield t.makeXRCompatible()),M=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){let te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new cn(p.framebufferWidth,p.framebufferHeight,{format:Bt,type:In,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,ge=null,ce=null;g.depth&&(ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=g.stencil?Tr:yr,ge=g.stencil?Er:bi);let Fe={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Fe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new cn(f.textureWidth,f.textureHeight,{format:Bt,type:In,depthTexture:new Lo(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield i.requestReferenceSpace(a),Pe.setContext(i),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(W){for(let te=0;te<W.removed.length;te++){let ge=W.removed[te],ce=y.indexOf(ge);ce>=0&&(y[ce]=null,x[ce].disconnect(ge))}for(let te=0;te<W.added.length;te++){let ge=W.added[te],ce=y.indexOf(ge);if(ce===-1){for(let Ue=0;Ue<x.length;Ue++)if(Ue>=y.length){y.push(ge),ce=Ue;break}else if(y[Ue]===null){y[Ue]=ge,ce=Ue;break}if(ce===-1)break}let Fe=x[ce];Fe&&Fe.connect(ge)}}let F=new R,ee=new R;function G(W,te,ge){F.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(ge.matrixWorld);let ce=F.distanceTo(ee),Fe=te.projectionMatrix.elements,Ue=ge.projectionMatrix.elements,We=Fe[14]/(Fe[10]-1),Ke=Fe[14]/(Fe[10]+1),J=(Fe[9]+1)/Fe[5],I=(Fe[9]-1)/Fe[5],he=(Fe[8]-1)/Fe[0],le=(Ue[8]+1)/Ue[0],ne=We*he,ue=We*le,Le=ce/(-he+le),ye=Le*-he;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ye),W.translateZ(Le),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Fe[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let P=We+Le,E=Ke+Le,k=ne-ye,Z=ue+(ce-ye),j=J*Ke/E*P,K=I*Ke/E*P;W.projectionMatrix.makePerspective(k,Z,j,K,P,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function oe(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let te=W.near,ge=W.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),S.near=A.near=T.near=te,S.far=A.far=T.far=ge,(b!==S.near||D!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,D=S.far);let ce=W.parent,Fe=S.cameras;oe(S,ce);for(let Ue=0;Ue<Fe.length;Ue++)oe(Fe[Ue],ce);Fe.length===2?G(S,T,A):S.projectionMatrix.copy(T.projectionMatrix),ie(W,S,ce)};function ie(W,te,ge){ge===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(ge.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ys*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let se=null;function _e(W,te){if(h=te.getViewerPose(c||o),m=te,h!==null){let ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ce=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let Ue=0;Ue<ge.length;Ue++){let We=ge[Ue],Ke=null;if(p!==null)Ke=p.getViewport(We);else{let I=u.getViewSubImage(f,We);Ke=I.viewport,Ue===0&&(e.setRenderTargetTextures(v,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(v))}let J=L[Ue];J===void 0&&(J=new Dt,J.layers.enable(Ue),J.viewport=new et,L[Ue]=J),J.matrix.fromArray(We.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(We.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ue===0&&(S.matrix.copy(J.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(J)}let Fe=i.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){let Ue=u.getDepthInformation(ge[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,i.renderState)}}for(let ge=0;ge<x.length;ge++){let ce=y[ge],Fe=x[ge];ce!==null&&Fe!==void 0&&Fe.update(ce,te,c||o)}se&&se(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}let Pe=new r0;Pe.setAnimationLoop(_e),this.setAnimationLoop=function(W){se=W},this.dispose=function(){}}},or=new Sn,tw=new Oe;function nw(r,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,i0(r)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),u(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),m(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),_(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,v,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===ln&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===ln&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let v=e.get(d),x=v.envMap,y=v.envMapRotation;x&&(g.envMap.value=x,or.copy(y),or.x*=-1,or.y*=-1,or.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),g.envMapRotation.value.setFromMatrix4(tw.makeRotationFromEuler(or)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=x*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){let v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function iw(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){let y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(m(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",g));let C=x.program;n.updateUBOMapping(v,C);let M=e.render.frame;s[v.id]!==M&&(f(v),s[v.id]=M)}function h(v){let x=u();v.__bindingPointIndex=x;let y=r.createBuffer(),C=v.__size,M=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,C,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let x=i[v.id],y=v.uniforms,C=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let M=0,T=y.length;M<T;M++){let A=Array.isArray(y[M])?y[M]:[y[M]];for(let L=0,S=A.length;L<S;L++){let b=A[L];if(p(b,M,L,C)===!0){let D=b.__offset,U=Array.isArray(b.value)?b.value:[b.value],O=0;for(let X=0;X<U.length;X++){let F=U[X],ee=_(F);typeof F=="number"||typeof F=="boolean"?(b.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,D+O,b.__data)):F.isMatrix3?(b.__data[0]=F.elements[0],b.__data[1]=F.elements[1],b.__data[2]=F.elements[2],b.__data[3]=0,b.__data[4]=F.elements[3],b.__data[5]=F.elements[4],b.__data[6]=F.elements[5],b.__data[7]=0,b.__data[8]=F.elements[6],b.__data[9]=F.elements[7],b.__data[10]=F.elements[8],b.__data[11]=0):(F.toArray(b.__data,O),O+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,b.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,x,y,C){let M=v.value,T=x+"_"+y;if(C[T]===void 0)return typeof M=="number"||typeof M=="boolean"?C[T]=M:C[T]=M.clone(),!0;{let A=C[T];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return C[T]=M,!0}else if(A.equals(M)===!1)return A.copy(M),!0}return!1}function m(v){let x=v.uniforms,y=0,C=16;for(let T=0,A=x.length;T<A;T++){let L=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,b=L.length;S<b;S++){let D=L[S],U=Array.isArray(D.value)?D.value:[D.value];for(let O=0,X=U.length;O<X;O++){let F=U[O],ee=_(F),G=y%C,oe=G%ee.boundary,ie=G+oe;y+=oe,ie!==0&&C-ie<ee.storage&&(y+=C-ie),D.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=ee.storage}}}let M=y%C;return M>0&&(y+=C-M),v.__size=y,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){let x=v.target;x.removeEventListener("dispose",g);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(let v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}var Uo=class{constructor(e={}){let{canvas:t=t0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),m=new Int32Array(4),_=null,g=null,d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this.toneMapping=kn,this.toneMappingExposure=1;let x=this,y=!1,C=0,M=0,T=null,A=-1,L=null,S=new et,b=new et,D=null,U=new pe(0),O=0,X=t.width,F=t.height,ee=1,G=null,oe=null,ie=new et(0,0,X,F),se=new et(0,0,X,F),_e=!1,Pe=new Cr,W=!1,te=!1,ge=new Oe,ce=new Oe,Fe=new R,Ue=new et,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function J(){return T===null?ee:1}let I=n;function he(w,B){return t.getContext(w,B)}try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eh}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",be,!1),I===null){let B="webgl2";if(I=he(B,w),I===null)throw he(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let le,ne,ue,Le,ye,P,E,k,Z,j,K,Ce,de,Me,Je,re,Ee,Ve,Ge,we,je,Xe,dt,N;function Se(){le=new gE(I),le.init(),Xe=new c0(I,le),ne=new hE(I,le,e,Xe),ue=new XT(I),ne.reverseDepthBuffer&&ue.buffers.depth.setReversed(!0),Le=new xE(I),ye=new LT,P=new JT(I,le,ue,ye,ne,Xe,Le),E=new fE(x),k=new mE(x),Z=new wS(I),dt=new lE(I,Z),j=new _E(I,Z,Le,dt),K=new SE(I,j,Z,Le),Ge=new yE(I,ne,P),re=new uE(ye),Ce=new IT(x,E,k,le,ne,dt,re),de=new nw(x,ye),Me=new OT,Je=new kT(le),Ve=new aE(x,E,k,ue,K,f,l),Ee=new GT(x,K,ne),N=new iw(I,Le,ne,ue),we=new cE(I,le,Le),je=new vE(I,le,Le),Le.programs=Ce.programs,x.capabilities=ne,x.extensions=le,x.properties=ye,x.renderLists=Me,x.shadowMap=Ee,x.state=ue,x.info=Le}Se();let Y=new Lf(x,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=le.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=le.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(X,F,!1))},this.getSize=function(w){return w.set(X,F)},this.setSize=function(w,B,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,F=B,t.width=Math.floor(w*ee),t.height=Math.floor(B*ee),H===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(X*ee,F*ee).floor()},this.setDrawingBufferSize=function(w,B,H){X=w,F=B,ee=H,t.width=Math.floor(w*H),t.height=Math.floor(B*H),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,B,H,V){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,B,H,V),ue.viewport(S.copy(ie).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,B,H,V){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,B,H,V),ue.scissor(b.copy(se).multiplyScalar(ee).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(w){ue.setScissorTest(_e=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){oe=w},this.getClearColor=function(w){return w.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(w=!0,B=!0,H=!0){let V=0;if(w){let z=!1;if(T!==null){let ae=T.texture.format;z=ae===Lh||ae===Ih||ae===la}if(z){let ae=T.texture.type,xe=ae===In||ae===bi||ae===xs||ae===Er||ae===Ch||ae===Rh,Ae=Ve.getClearColor(),Re=Ve.getClearAlpha(),Be=Ae.r,ke=Ae.g,Ie=Ae.b;xe?(p[0]=Be,p[1]=ke,p[2]=Ie,p[3]=Re,I.clearBufferuiv(I.COLOR,0,p)):(m[0]=Be,m[1]=ke,m[2]=Ie,m[3]=Re,I.clearBufferiv(I.COLOR,0,m))}else V|=I.COLOR_BUFFER_BIT}B&&(V|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Me.dispose(),Je.dispose(),ye.dispose(),E.dispose(),k.dispose(),K.dispose(),dt.dispose(),N.dispose(),Ce.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Yp),Y.removeEventListener("sessionend",qp),ji.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let w=Le.autoReset,B=Ee.enabled,H=Ee.autoUpdate,V=Ee.needsUpdate,z=Ee.type;Se(),Le.autoReset=w,Ee.enabled=B,Ee.autoUpdate=H,Ee.needsUpdate=V,Ee.type=z}function be(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qe(w){let B=w.target;B.removeEventListener("dispose",Qe),Ot(B)}function Ot(w){hn(w),ye.remove(w)}function hn(w){let B=ye.get(w).programs;B!==void 0&&(B.forEach(function(H){Ce.releaseProgram(H)}),w.isShaderMaterial&&Ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,H,V,z,ae){B===null&&(B=We);let xe=z.isMesh&&z.matrixWorld.determinant()<0,Ae=Ax(w,B,H,V,z);ue.setMaterial(V,xe);let Re=H.index,Be=1;if(V.wireframe===!0){if(Re=j.getWireframeAttribute(H),Re===void 0)return;Be=2}let ke=H.drawRange,Ie=H.attributes.position,ct=ke.start*Be,vt=(ke.start+ke.count)*Be;ae!==null&&(ct=Math.max(ct,ae.start*Be),vt=Math.min(vt,(ae.start+ae.count)*Be)),Re!==null?(ct=Math.max(ct,0),vt=Math.min(vt,Re.count)):Ie!=null&&(ct=Math.max(ct,0),vt=Math.min(vt,Ie.count));let Mt=vt-ct;if(Mt<0||Mt===1/0)return;dt.setup(z,V,Ae,H,Re);let gn,st=we;if(Re!==null&&(gn=Z.get(Re),st=je,st.setIndex(gn)),z.isMesh)V.wireframe===!0?(ue.setLineWidth(V.wireframeLinewidth*J()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(z.isLine){let De=V.linewidth;De===void 0&&(De=1),ue.setLineWidth(De*J()),z.isLineSegments?st.setMode(I.LINES):z.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else z.isPoints?st.setMode(I.POINTS):z.isSprite&&st.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)st.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let De=z._multiDrawStarts,qt=z._multiDrawCounts,ot=z._multiDrawCount,Un=Re?Z.get(Re).bytesPerElement:1,qr=ye.get(V).currentProgram.getUniforms();for(let _n=0;_n<ot;_n++)qr.setValue(I,"_gl_DrawID",_n),st.render(De[_n]/Un,qt[_n])}else if(z.isInstancedMesh)st.renderInstances(ct,Mt,z.count);else if(H.isInstancedBufferGeometry){let De=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,qt=Math.min(H.instanceCount,De);st.renderInstances(ct,Mt,qt)}else st.render(ct,Mt)};function it(w,B,H){w.transparent===!0&&w.side===Cn&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,Ia(w,B,H),w.side=yi,w.needsUpdate=!0,Ia(w,B,H),w.side=Cn):Ia(w,B,H)}this.compile=function(w,B,H=null){H===null&&(H=w),g=Je.get(H),g.init(B),v.push(g),H.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),w!==H&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();let V=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ae=z.material;if(ae)if(Array.isArray(ae))for(let xe=0;xe<ae.length;xe++){let Ae=ae[xe];it(Ae,H,z),V.add(Ae)}else it(ae,H,z),V.add(ae)}),v.pop(),g=null,V},this.compileAsync=function(w,B,H=null){let V=this.compile(w,B,H);return new Promise(z=>{function ae(){if(V.forEach(function(xe){ye.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){z(w);return}setTimeout(ae,10)}le.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let un=null;function si(w){un&&un(w)}function Yp(){ji.stop()}function qp(){ji.start()}let ji=new r0;ji.setAnimationLoop(si),typeof self!="undefined"&&ji.setContext(self),this.setAnimationLoop=function(w){un=w,Y.setAnimationLoop(w),w===null?ji.stop():ji.start()},Y.addEventListener("sessionstart",Yp),Y.addEventListener("sessionend",qp),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,B,T),g=Je.get(w,v.length),g.init(B),v.push(g),ce.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Pe.setFromProjectionMatrix(ce),te=this.localClippingEnabled,W=re.init(this.clippingPlanes,te),_=Me.get(w,d.length),_.init(),d.push(_),Y.enabled===!0&&Y.isPresenting===!0){let ae=x.xr.getDepthSensingMesh();ae!==null&&fu(ae,B,-1/0,x.sortObjects)}fu(w,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,oe),Ke=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ke&&Ve.addToRenderList(_,w),this.info.render.frame++,W===!0&&re.beginShadows();let H=g.state.shadowsArray;Ee.render(H,w,B),W===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=_.opaque,z=_.transmissive;if(g.setupLights(),B.isArrayCamera){let ae=B.cameras;if(z.length>0)for(let xe=0,Ae=ae.length;xe<Ae;xe++){let Re=ae[xe];Kp(V,z,w,Re)}Ke&&Ve.render(w);for(let xe=0,Ae=ae.length;xe<Ae;xe++){let Re=ae[xe];Zp(_,w,Re,Re.viewport)}}else z.length>0&&Kp(V,z,w,B),Ke&&Ve.render(w),Zp(_,w,B);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(x,w,B),dt.resetDefaultState(),A=-1,L=null,v.pop(),v.length>0?(g=v[v.length-1],W===!0&&re.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function fu(w,B,H,V){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Pe.intersectsSprite(w)){V&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);let xe=K.update(w),Ae=w.material;Ae.visible&&_.push(w,xe,Ae,H,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Pe.intersectsObject(w))){let xe=K.update(w),Ae=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ue.copy(xe.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(Ae)){let Re=xe.groups;for(let Be=0,ke=Re.length;Be<ke;Be++){let Ie=Re[Be],ct=Ae[Ie.materialIndex];ct&&ct.visible&&_.push(w,xe,ct,H,Ue.z,Ie)}}else Ae.visible&&_.push(w,xe,Ae,H,Ue.z,null)}}let ae=w.children;for(let xe=0,Ae=ae.length;xe<Ae;xe++)fu(ae[xe],B,H,V)}function Zp(w,B,H,V){let z=w.opaque,ae=w.transmissive,xe=w.transparent;g.setupLightsView(H),W===!0&&re.setGlobalState(x.clippingPlanes,H),V&&ue.viewport(S.copy(V)),z.length>0&&Pa(z,B,H),ae.length>0&&Pa(ae,B,H),xe.length>0&&Pa(xe,B,H),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Kp(w,B,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[V.id]===void 0&&(g.state.transmissionRenderTarget[V.id]=new cn(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Vn:In,minFilter:Zn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));let ae=g.state.transmissionRenderTarget[V.id],xe=V.viewport||S;ae.setSize(xe.z,xe.w);let Ae=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(U),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),Ke&&Ve.render(H);let Re=x.toneMapping;x.toneMapping=kn;let Be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),g.setupLightsView(V),W===!0&&re.setGlobalState(x.clippingPlanes,V),Pa(w,H,V),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae),le.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ie=0,ct=B.length;Ie<ct;Ie++){let vt=B[Ie],Mt=vt.object,gn=vt.geometry,st=vt.material,De=vt.group;if(st.side===Cn&&Mt.layers.test(V.layers)){let qt=st.side;st.side=ln,st.needsUpdate=!0,$p(Mt,H,V,gn,st,De),st.side=qt,st.needsUpdate=!0,ke=!0}}ke===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae))}x.setRenderTarget(Ae),x.setClearColor(U,O),Be!==void 0&&(V.viewport=Be),x.toneMapping=Re}function Pa(w,B,H){let V=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ae=w.length;z<ae;z++){let xe=w[z],Ae=xe.object,Re=xe.geometry,Be=V===null?xe.material:V,ke=xe.group;Ae.layers.test(H.layers)&&$p(Ae,B,H,Re,Be,ke)}}function $p(w,B,H,V,z,ae){w.onBeforeRender(x,B,H,V,z,ae),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(x,B,H,V,w,ae),z.transparent===!0&&z.side===Cn&&z.forceSinglePass===!1?(z.side=ln,z.needsUpdate=!0,x.renderBufferDirect(H,B,V,z,w,ae),z.side=yi,z.needsUpdate=!0,x.renderBufferDirect(H,B,V,z,w,ae),z.side=Cn):x.renderBufferDirect(H,B,V,z,w,ae),w.onAfterRender(x,B,H,V,z,ae)}function Ia(w,B,H){B.isScene!==!0&&(B=We);let V=ye.get(w),z=g.state.lights,ae=g.state.shadowsArray,xe=z.state.version,Ae=Ce.getParameters(w,z.state,ae,B,H),Re=Ce.getProgramCacheKey(Ae),Be=V.programs;V.environment=w.isMeshStandardMaterial?B.environment:null,V.fog=B.fog,V.envMap=(w.isMeshStandardMaterial?k:E).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",Qe),Be=new Map,V.programs=Be);let ke=Be.get(Re);if(ke!==void 0){if(V.currentProgram===ke&&V.lightsStateVersion===xe)return jp(w,Ae),ke}else Ae.uniforms=Ce.getUniforms(w),w.onBeforeCompile(Ae,x),ke=Ce.acquireProgram(Ae,Re),Be.set(Re,ke),V.uniforms=Ae.uniforms;let Ie=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=re.uniform),jp(w,Ae),V.needsLights=Rx(w),V.lightsStateVersion=xe,V.needsLights&&(Ie.ambientLightColor.value=z.state.ambient,Ie.lightProbe.value=z.state.probe,Ie.directionalLights.value=z.state.directional,Ie.directionalLightShadows.value=z.state.directionalShadow,Ie.spotLights.value=z.state.spot,Ie.spotLightShadows.value=z.state.spotShadow,Ie.rectAreaLights.value=z.state.rectArea,Ie.ltc_1.value=z.state.rectAreaLTC1,Ie.ltc_2.value=z.state.rectAreaLTC2,Ie.pointLights.value=z.state.point,Ie.pointLightShadows.value=z.state.pointShadow,Ie.hemisphereLights.value=z.state.hemi,Ie.directionalShadowMap.value=z.state.directionalShadowMap,Ie.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ie.spotShadowMap.value=z.state.spotShadowMap,Ie.spotLightMatrix.value=z.state.spotLightMatrix,Ie.spotLightMap.value=z.state.spotLightMap,Ie.pointShadowMap.value=z.state.pointShadowMap,Ie.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=ke,V.uniformsList=null,ke}function Jp(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=vs.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function jp(w,B){let H=ye.get(w);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.batchingColor=B.batchingColor,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.instancingMorph=B.instancingMorph,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function Ax(w,B,H,V,z){B.isScene!==!0&&(B=We),P.resetTextureUnits();let ae=B.fog,xe=V.isMeshStandardMaterial?B.environment:null,Ae=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ti,Re=(V.isMeshStandardMaterial?k:E).get(V.envMap||xe),Be=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ke=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ie=!!H.morphAttributes.position,ct=!!H.morphAttributes.normal,vt=!!H.morphAttributes.color,Mt=kn;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Mt=x.toneMapping);let gn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,st=gn!==void 0?gn.length:0,De=ye.get(V),qt=g.state.lights;if(W===!0&&(te===!0||w!==L)){let En=w===L&&V.id===A;re.setState(V,w,En)}let ot=!1;V.version===De.__version?(De.needsLights&&De.lightsStateVersion!==qt.state.version||De.outputColorSpace!==Ae||z.isBatchedMesh&&De.batching===!1||!z.isBatchedMesh&&De.batching===!0||z.isBatchedMesh&&De.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&De.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&De.instancing===!1||!z.isInstancedMesh&&De.instancing===!0||z.isSkinnedMesh&&De.skinning===!1||!z.isSkinnedMesh&&De.skinning===!0||z.isInstancedMesh&&De.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&De.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&De.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&De.instancingMorph===!1&&z.morphTexture!==null||De.envMap!==Re||V.fog===!0&&De.fog!==ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==re.numPlanes||De.numIntersection!==re.numIntersection)||De.vertexAlphas!==Be||De.vertexTangents!==ke||De.morphTargets!==Ie||De.morphNormals!==ct||De.morphColors!==vt||De.toneMapping!==Mt||De.morphTargetsCount!==st)&&(ot=!0):(ot=!0,De.__version=V.version);let Un=De.currentProgram;ot===!0&&(Un=Ia(V,B,z));let qr=!1,_n=!1,du=!1,Pt=Un.getUniforms(),Ci=De.uniforms;if(ue.useProgram(Un.program)&&(qr=!0,_n=!0,du=!0),V.id!==A&&(A=V.id,_n=!0),qr||L!==w){ne.reverseDepthBuffer?(ge.copy(w.projectionMatrix),sS(ge),oS(ge),Pt.setValue(I,"projectionMatrix",ge)):Pt.setValue(I,"projectionMatrix",w.projectionMatrix),Pt.setValue(I,"viewMatrix",w.matrixWorldInverse);let En=Pt.map.cameraPosition;En!==void 0&&En.setValue(I,Fe.setFromMatrixPosition(w.matrixWorld)),ne.logarithmicDepthBuffer&&Pt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Pt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),L!==w&&(L=w,_n=!0,du=!0)}if(z.isSkinnedMesh){Pt.setOptional(I,z,"bindMatrix"),Pt.setOptional(I,z,"bindMatrixInverse");let En=z.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Pt.setValue(I,"boneTexture",En.boneTexture,P))}z.isBatchedMesh&&(Pt.setOptional(I,z,"batchingTexture"),Pt.setValue(I,"batchingTexture",z._matricesTexture,P),Pt.setOptional(I,z,"batchingIdTexture"),Pt.setValue(I,"batchingIdTexture",z._indirectTexture,P),Pt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&Pt.setValue(I,"batchingColorTexture",z._colorsTexture,P));let pu=H.morphAttributes;if((pu.position!==void 0||pu.normal!==void 0||pu.color!==void 0)&&Ge.update(z,H,Un),(_n||De.receiveShadow!==z.receiveShadow)&&(De.receiveShadow=z.receiveShadow,Pt.setValue(I,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ci.envMap.value=Re,Ci.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&B.environment!==null&&(Ci.envMapIntensity.value=B.environmentIntensity),_n&&(Pt.setValue(I,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&Cx(Ci,du),ae&&V.fog===!0&&de.refreshFogUniforms(Ci,ae),de.refreshMaterialUniforms(Ci,V,ee,F,g.state.transmissionRenderTarget[w.id]),vs.upload(I,Jp(De),Ci,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(vs.upload(I,Jp(De),Ci,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Pt.setValue(I,"center",z.center),Pt.setValue(I,"modelViewMatrix",z.modelViewMatrix),Pt.setValue(I,"normalMatrix",z.normalMatrix),Pt.setValue(I,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let En=V.uniformsGroups;for(let mu=0,Px=En.length;mu<Px;mu++){let Qp=En[mu];N.update(Qp,Un),N.bind(Qp,Un)}}return Un}function Cx(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Rx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,B,H){ye.get(w.texture).__webglTexture=B,ye.get(w.depthTexture).__webglTexture=H;let V=ye.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){let H=ye.get(w);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,H=0){T=w,C=B,M=H;let V=!0,z=null,ae=!1,xe=!1;if(w){let Re=ye.get(w);if(Re.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(Re.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Re.__hasExternalTextures)P.rebindTextures(w,ye.get(w.texture).__webglTexture,ye.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ie=w.depthTexture;if(Re.__boundDepthTexture!==Ie){if(Ie!==null&&ye.has(Ie)&&(w.width!==Ie.image.width||w.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}let Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);let ke=ye.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?z=ke[B][H]:z=ke[B],ae=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?z=ye.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?z=ke[H]:z=ke,S.copy(w.viewport),b.copy(w.scissor),D=w.scissorTest}else S.copy(ie).multiplyScalar(ee).floor(),b.copy(se).multiplyScalar(ee).floor(),D=_e;if(ue.bindFramebuffer(I.FRAMEBUFFER,z)&&V&&ue.drawBuffers(w,z),ue.viewport(S),ue.scissor(b),ue.setScissorTest(D),ae){let Re=ye.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Re.__webglTexture,H)}else if(xe){let Re=ye.get(w.texture),Be=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.__webglTexture,H||0,Be)}A=-1},this.readRenderTargetPixels=function(w,B,H,V,z,ae,xe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){ue.bindFramebuffer(I.FRAMEBUFFER,Ae);try{let Re=w.texture,Be=Re.format,ke=Re.type;if(!ne.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-V&&H>=0&&H<=w.height-z&&I.readPixels(B,H,V,z,Xe.convert(Be),Xe.convert(ke),ae)}finally{let Re=T!==null?ye.get(T).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=function(w,B,H,V,z,ae,xe){return Qi(this,null,function*(){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){let Re=w.texture,Be=Re.format,ke=Re.type;if(!ne.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-V&&H>=0&&H<=w.height-z){ue.bindFramebuffer(I.FRAMEBUFFER,Ae);let Ie=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ie),I.bufferData(I.PIXEL_PACK_BUFFER,ae.byteLength,I.STREAM_READ),I.readPixels(B,H,V,z,Xe.convert(Be),Xe.convert(ke),0);let ct=T!==null?ye.get(T).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,ct);let vt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),yield rS(I,vt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ie),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ae),I.deleteBuffer(Ie),I.deleteSync(vt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(w,B=null,H=0){w.isTexture!==!0&&(Dl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-H),z=Math.floor(w.image.width*V),ae=Math.floor(w.image.height*V),xe=B!==null?B.x:0,Ae=B!==null?B.y:0;P.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,xe,Ae,z,ae),ue.unbindTexture()},this.copyTextureToTexture=function(w,B,H=null,V=null,z=0){w.isTexture!==!0&&(Dl("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],B=arguments[2],z=arguments[3]||0,H=null);let ae,xe,Ae,Re,Be,ke;H!==null?(ae=H.max.x-H.min.x,xe=H.max.y-H.min.y,Ae=H.min.x,Re=H.min.y):(ae=w.image.width,xe=w.image.height,Ae=0,Re=0),V!==null?(Be=V.x,ke=V.y):(Be=0,ke=0);let Ie=Xe.convert(B.format),ct=Xe.convert(B.type);P.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);let vt=I.getParameter(I.UNPACK_ROW_LENGTH),Mt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gn=I.getParameter(I.UNPACK_SKIP_PIXELS),st=I.getParameter(I.UNPACK_SKIP_ROWS),De=I.getParameter(I.UNPACK_SKIP_IMAGES),qt=w.isCompressedTexture?w.mipmaps[z]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,qt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Re),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,Be,ke,ae,xe,Ie,ct,qt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,Be,ke,qt.width,qt.height,Ie,qt.data):I.texSubImage2D(I.TEXTURE_2D,z,Be,ke,ae,xe,Ie,ct,qt),I.pixelStorei(I.UNPACK_ROW_LENGTH,vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gn),I.pixelStorei(I.UNPACK_SKIP_ROWS,st),I.pixelStorei(I.UNPACK_SKIP_IMAGES,De),z===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(w,B,H=null,V=null,z=0){w.isTexture!==!0&&(Dl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],B=arguments[3],z=arguments[4]||0);let ae,xe,Ae,Re,Be,ke,Ie,ct,vt,Mt=w.isCompressedTexture?w.mipmaps[z]:w.image;H!==null?(ae=H.max.x-H.min.x,xe=H.max.y-H.min.y,Ae=H.max.z-H.min.z,Re=H.min.x,Be=H.min.y,ke=H.min.z):(ae=Mt.width,xe=Mt.height,Ae=Mt.depth,Re=0,Be=0,ke=0),V!==null?(Ie=V.x,ct=V.y,vt=V.z):(Ie=0,ct=0,vt=0);let gn=Xe.convert(B.format),st=Xe.convert(B.type),De;if(B.isData3DTexture)P.setTexture3D(B,0),De=I.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)P.setTexture2DArray(B,0),De=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);let qt=I.getParameter(I.UNPACK_ROW_LENGTH),ot=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Un=I.getParameter(I.UNPACK_SKIP_PIXELS),qr=I.getParameter(I.UNPACK_SKIP_ROWS),_n=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),I.pixelStorei(I.UNPACK_SKIP_ROWS,Be),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(De,z,Ie,ct,vt,ae,xe,Ae,gn,st,Mt.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(De,z,Ie,ct,vt,ae,xe,Ae,gn,Mt.data):I.texSubImage3D(De,z,Ie,ct,vt,ae,xe,Ae,gn,st,Mt),I.pixelStorei(I.UNPACK_ROW_LENGTH,qt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Un),I.pixelStorei(I.UNPACK_SKIP_ROWS,qr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,_n),z===0&&B.generateMipmaps&&I.generateMipmap(De),ue.unbindTexture()},this.initRenderTarget=function(w){ye.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),ue.unbindTexture()},this.resetState=function(){C=0,M=0,T=null,ue.reset(),dt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Oh?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===ca?"display-p3":"srgb"}},Sc=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},bc=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rr=class extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Es=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=To,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new R,Pr=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=an(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=an(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=an(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=an(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array),s=qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},No=class extends Nt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ls,$s=new R,cs=new R,hs=new R,us=new $,Js=new $,h0=new Oe,al=new R,js=new R,ll=new R,Sg=new $,qu=new $,bg=new $,Mc=class extends rt{constructor(e=new No){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new Ne;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Es(t,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Pr(n,3,0,!1)),ls.setAttribute("uv",new Pr(n,2,3,!1))}this.geometry=ls,this.material=e,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),h0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-hs.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;cl(al.set(-.5,-.5,0),hs,o,cs,i,s),cl(js.set(.5,-.5,0),hs,o,cs,i,s),cl(ll.set(.5,.5,0),hs,o,cs,i,s),Sg.set(0,0),qu.set(1,0),bg.set(1,1);let a=e.ray.intersectTriangle(al,js,ll,!1,$s);if(a===null&&(cl(js.set(-.5,.5,0),hs,o,cs,i,s),qu.set(0,1),a=e.ray.intersectTriangle(al,ll,js,!1,$s),a===null))return;let l=e.ray.origin.distanceTo($s);l<e.near||l>e.far||t.push({distance:l,point:$s.clone(),uv:qn.getInterpolation($s,al,js,ll,Sg,qu,bg,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function cl(r,e,t,n,i,s){us.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Js.x=s*us.x-i*us.y,Js.y=i*us.x+s*us.y):Js.copy(us),r.copy(e),r.x+=Js.x,r.y+=Js.y,r.applyMatrix4(h0)}var hl=new R,Mg=new R,Ec=class extends rt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let i=this.levels,s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){hl.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(hl);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){hl.setFromMatrixPosition(e.matrixWorld),Mg.setFromMatrixPosition(this.matrixWorld);let n=hl.distanceTo(Mg)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let i=0,s=n.length;i<s;i++){let o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},Eg=new R,Tg=new et,wg=new et,rw=new R,Ag=new Oe,ul=new R,Zu=new Wt,Cg=new Oe,Ku=new Hi,Tc=class extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=df,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingBox.expandByPoint(ul)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingSphere.expandByPoint(ul)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zu.copy(this.boundingSphere),Zu.applyMatrix4(i),e.ray.intersectsSphere(Zu)!==!1&&(Cg.copy(i).invert(),Ku.copy(e.ray).applyMatrix4(Cg),!(this.boundingBox!==null&&Ku.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ku)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===df?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===k_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Tg.fromBufferAttribute(i.attributes.skinIndex,e),wg.fromBufferAttribute(i.attributes.skinWeight,e),Eg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=wg.getComponent(s);if(o!==0){let a=Tg.getComponent(s);Ag.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(rw.copy(Eg).applyMatrix4(Ag),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Fo=class extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Pn=class extends wt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Vt,h=Vt,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rg=new Oe,sw=new Oe,wc=class r{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:sw;Rg.multiplyMatrices(a,t[s]),Rg.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Pn(t,e,e,Bt,Gt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Fo),this.bones.push(o),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Gi=class extends at{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fs=new Oe,Pg=new Oe,fl=[],Ig=new Kt,ow=new Oe,Qs=new ut,eo=new Wt,Ac=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ow)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),Ig.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(Ig)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),eo.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eo.copy(this.boundingSphere),eo.applyMatrix4(n),e.ray.intersectsSphere(eo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,fs),Pg.multiplyMatrices(n,fs),Qs.matrixWorld=Pg,Qs.raycast(e,fl);for(let o=0,a=fl.length;o<a;o++){let l=fl[o];l.instanceId=s,l.object=this,t.push(l)}fl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pn(new Float32Array(i*this.count),i,this.count,Ph,Gt));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function aw(r,e){return r.z-e.z}function lw(r,e){return e.z-r.z}var Df=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){let i=this.pool,s=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});let o=i[this.index];s.push(o),this.index++,o.start=e.start,o.count=e.count,o.z=t,o.index=n}reset(){this.list.length=0,this.index=0}},Ni=new Oe,$u=new Oe,cw=new Oe,hw=new pe(1,1,1),Lg=new Oe,Ju=new Cr,dl=new Kt,ar=new Wt,to=new R,Dg=new R,uw=new R,ju=new Df,Qt=new ut,pl=[];function fw(r,e,t=0){let n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){let i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}var Cc=class extends ut{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new Ne,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new Pn(t,e,e,Bt,Gt);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new Pn(t,e,e,la,bi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new Pn(t,e,e,Bt,Gt);n.colorSpace=tt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let s in e.attributes){let o=e.getAttribute(s),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),u=new at(h,l,c);t.setAttribute(s,u)}if(e.getIndex()!==null){let s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new at(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let s=t[n].geometryIndex;this.getMatrixAt(n,Ni),this.getBoundingBoxAt(s,dl).applyMatrix4(Ni),e.union(dl)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wt);let e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;let s=t[n].geometryIndex;this.getMatrixAt(n,Ni),this.getBoundingSphereAt(s,ar).applyMatrix4(Ni),e.union(ar)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(i=this._availableInstanceIds.pop(),this._drawInfo[i]=n):(i=this._drawInfo.length,this._drawInfo.push(n));let s=this._matricesTexture,o=s.image.data;cw.toArray(o,i*16),s.needsUpdate=!0;let a=this._colorsTexture;return a&&(hw.toArray(a.image.data,i*4),a.needsUpdate=!0),i}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");let i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1},s=null,o=this._reservedRanges,a=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(s=o[o.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;let c=e.getIndex(),h=c!==null;if(h&&(n===-1?i.indexCount=c.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let u=this._geometryCount;return this._geometryCount++,o.push(i),a.push({start:h?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new Kt,sphereInitialized:!1,sphere:new Wt}),this.setGeometryAt(u,e),u}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._reservedRanges[e];if(i&&o.count>a.indexCount||t.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.vertexCount;for(let p in n.attributes){let m=t.getAttribute(p),_=n.getAttribute(p);fw(m,_,l);let g=m.itemSize;for(let d=m.count,v=c;d<v;d++){let x=l+d;for(let y=0;y<g;y++)_.setComponent(x,y,0)}_.needsUpdate=!0,_.addUpdateRange(l*g,c*g)}if(i){let p=a.indexStart;for(let m=0;m<o.count;m++)s.setX(p+m,l+o.getX(m));for(let m=o.count,_=a.indexCount;m<_;m++)s.setX(p+m,l);s.needsUpdate=!0,s.addUpdateRange(p,a.indexCount)}let h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;let u=this._drawRanges[e],f=t.getAttribute("position");return u.count=i?o.count:f.count,this._visibilityChanged=!0,e}deleteInstance(e){let t=this._drawInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this._bounds[e],i=n.box,s=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();let o=s.index,a=s.attributes.position,l=this._drawRanges[e];for(let c=l.start,h=l.start+l.count;c<h;c++){let u=c;o&&(u=o.getX(u)),i.expandByPoint(to.fromBufferAttribute(a,u))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this._bounds[e],i=n.sphere,s=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,dl),dl.getCenter(i.center);let o=s.index,a=s.attributes.position,l=this._drawRanges[e],c=0;for(let h=l.start,u=l.start+l.count;h<u;h++){let f=h;o&&(f=o.getX(f)),to.fromBufferAttribute(a,f),c=Math.max(c,i.center.distanceToSquared(to))}i.radius=Math.sqrt(c),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){let n=this._drawInfo,i=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){let n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();let n=this._colorsTexture,i=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){let n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){let n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){let t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){let n=this._drawInfo;return e>=n.length||n[e].active===!1||t<0||t>=this._geometryCount?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){let t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;let n=this._drawRanges[e];return t.start=n.start,t.count=n.count,t}raycast(e,t){let n=this._drawInfo,i=this._drawRanges,s=this.matrixWorld,o=this.geometry;Qt.material=this.material,Qt.geometry.index=o.index,Qt.geometry.attributes=o.attributes,Qt.geometry.boundingBox===null&&(Qt.geometry.boundingBox=new Kt),Qt.geometry.boundingSphere===null&&(Qt.geometry.boundingSphere=new Wt);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,h=i[c];Qt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Qt.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,Qt.geometry.boundingBox),this.getBoundingSphereAt(c,Qt.geometry.boundingSphere),Qt.raycast(e,pl);for(let u=0,f=pl.length;u<f;u++){let p=pl[u];p.object=this,p.batchId=a,t.push(p)}pl.length=0}Qt.material=null,Qt.geometry.index=null,Qt.geometry.attributes={},Qt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>Te({},t)),this._reservedRanges=e._reservedRanges.map(t=>Te({},t)),this._drawInfo=e._drawInfo.map(t=>Te({},t)),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._drawInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._drawRanges,f=this.perObjectFrustumCulled,p=this._indirectTexture,m=p.image.data;f&&(Lg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Ju.setFromProjectionMatrix(Lg,e.coordinateSystem));let _=0;if(this.sortObjects){$u.copy(this.matrixWorld).invert(),to.setFromMatrixPosition(n.matrixWorld).applyMatrix4($u),Dg.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection($u);for(let v=0,x=l.length;v<x;v++)if(l[v].visible&&l[v].active){let y=l[v].geometryIndex;this.getMatrixAt(v,Ni),this.getBoundingSphereAt(y,ar).applyMatrix4(Ni);let C=!1;if(f&&(C=!Ju.intersectsSphere(ar)),!C){let M=uw.subVectors(ar.center,to).dot(Dg);ju.push(u[y],M,v)}}let g=ju.list,d=this.customSort;d===null?g.sort(s.transparent?lw:aw):d.call(this,g,n);for(let v=0,x=g.length;v<x;v++){let y=g[v];c[_]=y.start*a,h[_]=y.count,m[_]=y.index,_++}ju.reset()}else for(let g=0,d=l.length;g<d;g++)if(l[g].visible&&l[g].active){let v=l[g].geometryIndex,x=!1;if(f&&(this.getMatrixAt(g,Ni),this.getBoundingSphereAt(v,ar).applyMatrix4(Ni),x=!Ju.intersectsSphere(ar)),!x){let y=u[v];c[_]=y.start*a,h[_]=y.count,m[_]=g,_++}}p.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}},$t=class extends Nt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Rc=new R,Pc=new R,Og=new Oe,no=new Hi,ml=new Wt,Qu=new R,Ug=new R,Qn=class extends rt{constructor(e=new Ne,t=new $t){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Rc.fromBufferAttribute(t,i-1),Pc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rc.distanceTo(Pc);e.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(i),ml.radius+=s,e.ray.intersectsSphere(ml)===!1)return;Og.copy(i).invert(),no.copy(e.ray).applyMatrix4(Og);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=c){let d=h.getX(_),v=h.getX(_+1),x=gl(this,e,no,l,d,v);x&&t.push(x)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(p),d=gl(this,e,no,l,_,g);d&&t.push(d)}}else{let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=c){let d=gl(this,e,no,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){let _=gl(this,e,no,l,m-1,p);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function gl(r,e,t,n,i,s){let o=r.geometry.attributes.position;if(Rc.fromBufferAttribute(o,i),Pc.fromBufferAttribute(o,s),t.distanceSqToSegment(Rc,Pc,Qu,Ug)>n)return;Qu.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(Qu);if(!(l<e.near||l>e.far))return{distance:l,point:Ug.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var Ng=new R,Fg=new R,Ln=class extends Qn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ng.fromBufferAttribute(t,i),Fg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ng.distanceTo(Fg);e.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ic=class extends Qn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Bo=class extends Nt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bg=new Oe,Of=new Hi,_l=new Wt,vl=new R,Lc=class extends rt{constructor(e=new Ne,t=new Bo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(i),_l.radius+=s,e.ray.intersectsSphere(_l)===!1)return;Bg.copy(i).invert(),Of.copy(e.ray).applyMatrix4(Bg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=f,_=p;m<_;m++){let g=c.getX(m);vl.fromBufferAttribute(u,g),zg(vl,g,l,i,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=f,_=p;m<_;m++)vl.fromBufferAttribute(u,m),zg(vl,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function zg(r,e,t,n,i,s,o){let a=Of.distanceSqToPoint(r);if(a<t){let l=new R;Of.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Uf=class extends wt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:mt,this.magFilter=s!==void 0?s:mt,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},Nf=class extends wt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Vt,this.minFilter=Vt,this.generateMipmaps=!1,this.needsUpdate=!0}},Ts=class extends wt{constructor(e,t,n,i,s,o,a,l,c,h,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Ff=class extends Ts{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Rn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Bf=class extends Ts{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Si),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},zf=class extends wt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new $:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new R,i=[],s=[],o=[],a=new R,l=new Oe;for(let p=0;p<=e;p++){let m=p/e;i[p]=this.getTangentAt(m,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Tt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Tt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ws=class extends bn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new $){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dc=class extends ws{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function qd(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,i(o,a,f,p)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var xl=new R,ef=new qd,tf=new qd,nf=new qd,Oc=class extends bn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(xl.subVectors(i[0],i[1]).add(i[0]),c=xl);let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(xl.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=xl),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),ef.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,_,g),tf.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,_,g),nf.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(ef.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),tf.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),nf.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ef.calc(l),tf.calc(l),nf.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function kg(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function dw(r,e){let t=1-r;return t*t*e}function pw(r,e){return 2*(1-r)*r*e}function mw(r,e){return r*r*e}function mo(r,e,t,n){return dw(r,e)+pw(r,t)+mw(r,n)}function gw(r,e){let t=1-r;return t*t*t*e}function _w(r,e){let t=1-r;return 3*t*t*r*e}function vw(r,e){return 3*(1-r)*r*r*e}function xw(r,e){return r*r*r*e}function go(r,e,t,n,i){return gw(r,e)+_w(r,t)+vw(r,n)+xw(r,i)}var zo=class extends bn{constructor(e=new $,t=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(go(e,i.x,s.x,o.x,a.x),go(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Uc=class extends bn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(go(e,i.x,s.x,o.x,a.x),go(e,i.y,s.y,o.y,a.y),go(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ko=class extends bn{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nc=class extends bn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends bn{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(mo(e,i.x,s.x,o.x),mo(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends bn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(mo(e,i.x,s.x,o.x),mo(e,i.y,s.y,o.y),mo(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Go=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(kg(a,l.x,c.x,h.x,u.x),kg(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new $().fromArray(i))}return this}},Fc=Object.freeze({__proto__:null,ArcCurve:Dc,CatmullRomCurve3:Oc,CubicBezierCurve:zo,CubicBezierCurve3:Uc,EllipseCurve:ws,LineCurve:ko,LineCurve3:Nc,QuadraticBezierCurve:Ho,QuadraticBezierCurve3:Vo,SplineCurve:Go}),Bc=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Fc[i.type]().fromJSON(i))}return this}},Ir=class extends Bc{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ko(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Ho(this.currentPoint.clone(),new $(e,t),new $(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){let a=new zo(this.currentPoint.clone(),new $(e,t),new $(n,i),new $(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Go(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){let c=new ws(e,t,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wo=class r extends Ne{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Tt(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/t,u=new R,f=new $,p=new R,m=new R,_=new R,g=0,d=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,p.x=d*1,p.y=-g,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,p.x=d*1,p.y=-g,p.z=d*0,m.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(m)}for(let v=0;v<=t;v++){let x=n+v*h*i,y=Math.sin(x),C=Math.cos(x);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*y,u.y=e[M].y,u.z=e[M].x*C,o.push(u.x,u.y,u.z),f.x=v/t,f.y=M/(e.length-1),a.push(f.x,f.y);let T=l[3*M+0]*y,A=l[3*M+1],L=l[3*M+0]*C;c.push(T,A,L)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let y=x+v*e.length,C=y,M=y+e.length,T=y+e.length+1,A=y+1;s.push(C,M,A),s.push(T,A,M)}this.setIndex(s),this.setAttribute("position",new me(o,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},zc=class r extends Wo{constructor(e=1,t=1,n=4,i=8){let s=new Ir;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},kc=class r extends Ne{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new R,h=new $;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},As=class r extends Ne{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],p=[],m=0,_=[],g=n/2,d=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(p,2));function v(){let y=new R,C=new R,M=0,T=(t-e)/n;for(let A=0;A<=s;A++){let L=[],S=A/s,b=S*(t-e)+e;for(let D=0;D<=i;D++){let U=D/i,O=U*l+a,X=Math.sin(O),F=Math.cos(O);C.x=b*X,C.y=-S*n+g,C.z=b*F,u.push(C.x,C.y,C.z),y.set(X,T,F).normalize(),f.push(y.x,y.y,y.z),p.push(U,1-S),L.push(m++)}_.push(L)}for(let A=0;A<i;A++)for(let L=0;L<s;L++){let S=_[L][A],b=_[L+1][A],D=_[L+1][A+1],U=_[L][A+1];e>0&&(h.push(S,b,U),M+=3),t>0&&(h.push(b,D,U),M+=3)}c.addGroup(d,M,0),d+=M}function x(y){let C=m,M=new $,T=new R,A=0,L=y===!0?e:t,S=y===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,g*S,0),f.push(0,S,0),p.push(.5,.5),m++;let b=m;for(let D=0;D<=i;D++){let O=D/i*l+a,X=Math.cos(O),F=Math.sin(O);T.x=L*F,T.y=g*S,T.z=L*X,u.push(T.x,T.y,T.z),f.push(0,S,0),M.x=X*.5+.5,M.y=F*.5*S+.5,p.push(M.x,M.y),m++}for(let D=0;D<i;D++){let U=C+D,O=b+D;y===!0?h.push(O,O+1,U):h.push(O+1,O,U),A+=3}c.addGroup(d,A,y===!0?1:2),d+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hc=class r extends As{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wi=class r extends Ne{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(s.slice(),3)),this.setAttribute("uv",new me(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let x=new R,y=new R,C=new R;for(let M=0;M<t.length;M+=3)p(t[M+0],x),p(t[M+1],y),p(t[M+2],C),l(x,y,C,v)}function l(v,x,y,C){let M=C+1,T=[];for(let A=0;A<=M;A++){T[A]=[];let L=v.clone().lerp(y,A/M),S=x.clone().lerp(y,A/M),b=M-A;for(let D=0;D<=b;D++)D===0&&A===M?T[A][D]=L:T[A][D]=L.clone().lerp(S,D/b)}for(let A=0;A<M;A++)for(let L=0;L<2*(M-A)-1;L++){let S=Math.floor(L/2);L%2===0?(f(T[A][S+1]),f(T[A+1][S]),f(T[A][S])):(f(T[A][S+1]),f(T[A+1][S+1]),f(T[A+1][S]))}}function c(v){let x=new R;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){let v=new R;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];let y=g(v)/2/Math.PI+.5,C=d(v)/Math.PI+.5;o.push(y,1-C)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let x=o[v+0],y=o[v+2],C=o[v+4],M=Math.max(x,y,C),T=Math.min(x,y,C);M>.9&&T<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function p(v,x){let y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function m(){let v=new R,x=new R,y=new R,C=new R,M=new $,T=new $,A=new $;for(let L=0,S=0;L<s.length;L+=9,S+=6){v.set(s[L+0],s[L+1],s[L+2]),x.set(s[L+3],s[L+4],s[L+5]),y.set(s[L+6],s[L+7],s[L+8]),M.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),A.set(o[S+4],o[S+5]),C.copy(v).add(x).add(y).divideScalar(3);let b=g(C);_(M,S+0,v,b),_(T,S+2,x,b),_(A,S+4,y,b)}}function _(v,x,y,C){C<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=C/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Vc=class r extends Wi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},yl=new R,Sl=new R,rf=new R,bl=new qn,Gc=class extends Ne{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Sr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:_,b:g,c:d}=bl;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),bl.getNormal(rf),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let x=(v+1)%3,y=u[v],C=u[x],M=bl[h[v]],T=bl[h[x]],A=`${y}_${C}`,L=`${C}_${y}`;L in f&&f[L]?(rf.dot(f[L].normal)<=s&&(p.push(M.x,M.y,M.z),p.push(T.x,T.y,T.z)),f[L]=null):A in f||(f[A]={index0:c[v],index1:c[x],normal:rf.clone()})}}for(let m in f)if(f[m]){let{index0:_,index1:g}=f[m];yl.fromBufferAttribute(a,_),Sl.fromBufferAttribute(a,g),p.push(yl.x,yl.y,yl.z),p.push(Sl.x,Sl.y,Sl.z)}this.setAttribute("position",new me(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},xi=class extends Ir{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ir().fromJSON(i))}return this}},yw={triangulate:function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=u0(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,p;if(n&&(s=Tw(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let m=t;m<i;m+=t)u=r[m],f=r[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Xo(s,o,t,a,l,p,0),o}};function u0(r,e,t,n,i){let s,o;if(i===Nw(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Hg(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Hg(s,r[s],r[s+1],o);return o&&Nh(o,o.next)&&(qo(o),o=o.next),o}function Lr(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Nh(t,t.next)||yt(t.prev,t,t.next)===0)){if(qo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xo(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Pw(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?bw(r,n,i,s):Sw(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),qo(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Mw(Lr(r),e,t),Xo(r,e,t,n,i,s,2)):o===2&&Ew(r,e,t,n,i,s):Xo(Lr(r),e,t,n,i,s,1);break}}}function Sw(r){let e=r.prev,t=r,n=r.next;if(yt(e,t,n)>=0)return!1;let i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=p&&gs(i,a,s,l,o,c,m.x,m.y)&&yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function bw(r,e,t,n){let i=r.prev,s=r,o=r.next;if(yt(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,d=kf(p,m,e,t,n),v=kf(_,g,e,t,n),x=r.prevZ,y=r.nextZ;for(;x&&x.z>=d&&y&&y.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&gs(a,h,l,u,c,f,x.x,x.y)&&yt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&gs(a,h,l,u,c,f,y.x,y.y)&&yt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&gs(a,h,l,u,c,f,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&gs(a,h,l,u,c,f,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Mw(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!Nh(i,s)&&f0(i,n,n.next,s)&&Yo(i,s)&&Yo(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),qo(n),qo(n.next),n=r=s),n=n.next}while(n!==r);return Lr(n)}function Ew(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dw(o,a)){let l=d0(o,a);o=Lr(o,o.next),l=Lr(l,l.next),Xo(o,e,t,n,i,s,0),Xo(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Tw(r,e,t,n){let i=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=u0(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Lw(c));for(i.sort(ww),s=0;s<i.length;s++)t=Aw(i[s],t);return t}function ww(r,e){return r.x-e.x}function Aw(r,e){let t=Cw(r,e);if(!t)return e;let n=d0(t,r);return Lr(n,n.next),Lr(t,t.next)}function Cw(r,e){let t=e,n=-1/0,i,s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&gs(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),Yo(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Rw(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Rw(r,e){return yt(r.prev,r,e.prev)<0&&yt(e.next,r,r.next)<0}function Pw(r,e,t,n){let i=r;do i.z===0&&(i.z=kf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Iw(i)}function Iw(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function kf(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Lw(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function gs(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Dw(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Ow(r,e)&&(Yo(r,e)&&Yo(e,r)&&Uw(r,e)&&(yt(r.prev,r,e.prev)||yt(r,e.prev,e))||Nh(r,e)&&yt(r.prev,r,r.next)>0&&yt(e.prev,e,e.next)>0)}function yt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Nh(r,e){return r.x===e.x&&r.y===e.y}function f0(r,e,t,n){let i=El(yt(r,e,t)),s=El(yt(r,e,n)),o=El(yt(t,n,r)),a=El(yt(t,n,e));return!!(i!==s&&o!==a||i===0&&Ml(r,t,e)||s===0&&Ml(r,n,e)||o===0&&Ml(t,r,n)||a===0&&Ml(t,e,n))}function Ml(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function El(r){return r>0?1:r<0?-1:0}function Ow(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&f0(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Yo(r,e){return yt(r.prev,r,r.next)<0?yt(r,e,r.next)>=0&&yt(r,r.prev,e)>=0:yt(r,e,r.prev)<0||yt(r,r.next,e)<0}function Uw(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function d0(r,e){let t=new Hf(r.i,r.x,r.y),n=new Hf(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Hg(r,e,t,n){let i=new Hf(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Hf(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nw(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var $n=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Vg(e),Gg(n,e);let o=e.length;t.forEach(Vg);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Gg(n,t[l]);let a=yw.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Vg(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Gg(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Wc=class r extends Ne{constructor(e=new xi([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new me(i,3)),this.setAttribute("uv",new me(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Fw,x,y=!1,C,M,T,A;d&&(x=d.getSpacedPoints(h),y=!0,f=!1,C=d.computeFrenetFrames(h,!1),M=new R,T=new R,A=new R),f||(g=0,p=0,m=0,_=0);let L=a.extractPoints(c),S=L.shape,b=L.holes;if(!$n.isClockWise(S)){S=S.reverse();for(let J=0,I=b.length;J<I;J++){let he=b[J];$n.isClockWise(he)&&(b[J]=he.reverse())}}let U=$n.triangulateShape(S,b),O=S;for(let J=0,I=b.length;J<I;J++){let he=b[J];S=S.concat(he)}function X(J,I,he){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(I,he)}let F=S.length,ee=U.length;function G(J,I,he){let le,ne,ue,Le=J.x-I.x,ye=J.y-I.y,P=he.x-J.x,E=he.y-J.y,k=Le*Le+ye*ye,Z=Le*E-ye*P;if(Math.abs(Z)>Number.EPSILON){let j=Math.sqrt(k),K=Math.sqrt(P*P+E*E),Ce=I.x-ye/j,de=I.y+Le/j,Me=he.x-E/K,Je=he.y+P/K,re=((Me-Ce)*E-(Je-de)*P)/(Le*E-ye*P);le=Ce+Le*re-J.x,ne=de+ye*re-J.y;let Ee=le*le+ne*ne;if(Ee<=2)return new $(le,ne);ue=Math.sqrt(Ee/2)}else{let j=!1;Le>Number.EPSILON?P>Number.EPSILON&&(j=!0):Le<-Number.EPSILON?P<-Number.EPSILON&&(j=!0):Math.sign(ye)===Math.sign(E)&&(j=!0),j?(le=-ye,ne=Le,ue=Math.sqrt(k)):(le=Le,ne=ye,ue=Math.sqrt(k/2))}return new $(le/ue,ne/ue)}let oe=[];for(let J=0,I=O.length,he=I-1,le=J+1;J<I;J++,he++,le++)he===I&&(he=0),le===I&&(le=0),oe[J]=G(O[J],O[he],O[le]);let ie=[],se,_e=oe.concat();for(let J=0,I=b.length;J<I;J++){let he=b[J];se=[];for(let le=0,ne=he.length,ue=ne-1,Le=le+1;le<ne;le++,ue++,Le++)ue===ne&&(ue=0),Le===ne&&(Le=0),se[le]=G(he[le],he[ue],he[Le]);ie.push(se),_e=_e.concat(se)}for(let J=0;J<g;J++){let I=J/g,he=p*Math.cos(I*Math.PI/2),le=m*Math.sin(I*Math.PI/2)+_;for(let ne=0,ue=O.length;ne<ue;ne++){let Le=X(O[ne],oe[ne],le);ce(Le.x,Le.y,-he)}for(let ne=0,ue=b.length;ne<ue;ne++){let Le=b[ne];se=ie[ne];for(let ye=0,P=Le.length;ye<P;ye++){let E=X(Le[ye],se[ye],le);ce(E.x,E.y,-he)}}}let Pe=m+_;for(let J=0;J<F;J++){let I=f?X(S[J],_e[J],Pe):S[J];y?(T.copy(C.normals[0]).multiplyScalar(I.x),M.copy(C.binormals[0]).multiplyScalar(I.y),A.copy(x[0]).add(T).add(M),ce(A.x,A.y,A.z)):ce(I.x,I.y,0)}for(let J=1;J<=h;J++)for(let I=0;I<F;I++){let he=f?X(S[I],_e[I],Pe):S[I];y?(T.copy(C.normals[J]).multiplyScalar(he.x),M.copy(C.binormals[J]).multiplyScalar(he.y),A.copy(x[J]).add(T).add(M),ce(A.x,A.y,A.z)):ce(he.x,he.y,u/h*J)}for(let J=g-1;J>=0;J--){let I=J/g,he=p*Math.cos(I*Math.PI/2),le=m*Math.sin(I*Math.PI/2)+_;for(let ne=0,ue=O.length;ne<ue;ne++){let Le=X(O[ne],oe[ne],le);ce(Le.x,Le.y,u+he)}for(let ne=0,ue=b.length;ne<ue;ne++){let Le=b[ne];se=ie[ne];for(let ye=0,P=Le.length;ye<P;ye++){let E=X(Le[ye],se[ye],le);y?ce(E.x,E.y+x[h-1].y,x[h-1].x+he):ce(E.x,E.y,u+he)}}}W(),te();function W(){let J=i.length/3;if(f){let I=0,he=F*I;for(let le=0;le<ee;le++){let ne=U[le];Fe(ne[2]+he,ne[1]+he,ne[0]+he)}I=h+g*2,he=F*I;for(let le=0;le<ee;le++){let ne=U[le];Fe(ne[0]+he,ne[1]+he,ne[2]+he)}}else{for(let I=0;I<ee;I++){let he=U[I];Fe(he[2],he[1],he[0])}for(let I=0;I<ee;I++){let he=U[I];Fe(he[0]+F*h,he[1]+F*h,he[2]+F*h)}}n.addGroup(J,i.length/3-J,0)}function te(){let J=i.length/3,I=0;ge(O,I),I+=O.length;for(let he=0,le=b.length;he<le;he++){let ne=b[he];ge(ne,I),I+=ne.length}n.addGroup(J,i.length/3-J,1)}function ge(J,I){let he=J.length;for(;--he>=0;){let le=he,ne=he-1;ne<0&&(ne=J.length-1);for(let ue=0,Le=h+g*2;ue<Le;ue++){let ye=F*ue,P=F*(ue+1),E=I+le+ye,k=I+ne+ye,Z=I+ne+P,j=I+le+P;Ue(E,k,Z,j)}}}function ce(J,I,he){l.push(J),l.push(I),l.push(he)}function Fe(J,I,he){We(J),We(I),We(he);let le=i.length/3,ne=v.generateTopUV(n,i,le-3,le-2,le-1);Ke(ne[0]),Ke(ne[1]),Ke(ne[2])}function Ue(J,I,he,le){We(J),We(I),We(le),We(I),We(he),We(le);let ne=i.length/3,ue=v.generateSideWallUV(n,i,ne-6,ne-3,ne-2,ne-1);Ke(ue[0]),Ke(ue[1]),Ke(ue[3]),Ke(ue[1]),Ke(ue[2]),Ke(ue[3])}function We(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function Ke(J){s.push(J.x),s.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bw(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Fc[i.type]().fromJSON(i)),new r(n,e.options)}},Fw={generateTopUV:function(r,e,t,n,i){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new $(s,o),new $(a,l),new $(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],p=e[i*3+1],m=e[i*3+2],_=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new $(o,1-l),new $(c,1-u),new $(f,1-m),new $(_,1-d)]:[new $(a,1-l),new $(h,1-u),new $(p,1-m),new $(g,1-d)]}};function Bw(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Xc=class r extends Wi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Zo=class r extends Wi{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Yc=class r extends Ne{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/i,p=new R,m=new $;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){let d=s+g/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let _=0;_<i;_++){let g=_*(n+1);for(let d=0;d<n;d++){let v=d+g,x=v,y=v+n+1,C=v+n+2,M=v+1;a.push(x,y,M),a.push(y,C,M)}}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},qc=class r extends Ne{constructor(e=new xi([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new me(i,3)),this.setAttribute("normal",new me(s,3)),this.setAttribute("uv",new me(o,2));function c(h){let u=i.length/3,f=h.extractPoints(t),p=f.shape,m=f.holes;$n.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,d=m.length;g<d;g++){let v=m[g];$n.isClockWise(v)===!0&&(m[g]=v.reverse())}let _=$n.triangulateShape(p,m);for(let g=0,d=m.length;g<d;g++){let v=m[g];p=p.concat(v)}for(let g=0,d=p.length;g<d;g++){let v=p[g];i.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let g=0,d=_.length;g<d;g++){let v=_[g],x=v[0]+u,y=v[1]+u,C=v[2]+u;n.push(x,y,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return zw(t,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let o=t[e.shapes[i]];n.push(o)}return new r(n,e.curveSegments)}};function zw(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}var Ko=class r extends Ne{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,f=new R,p=[],m=[],_=[],g=[];for(let d=0;d<=n;d++){let v=[],x=d/n,y=0;d===0&&o===0?y=.5/t:d===n&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){let M=C/t;u.x=-e*Math.cos(i+M*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+M*s)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(M+y,1-x),v.push(c++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){let x=h[d][v+1],y=h[d][v],C=h[d+1][v],M=h[d+1][v+1];(d!==0||o>0)&&p.push(x,y,M),(d!==n-1||l<Math.PI)&&p.push(y,C,M)}this.setIndex(p),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Zc=class r extends Wi{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Kc=class r extends Ne{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new R,u=new R,f=new R;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let _=m/i*s,g=p/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let _=(i+1)*p+m-1,g=(i+1)*(p-1)+m-1,d=(i+1)*(p-1)+m,v=(i+1)*p+m;o.push(_,g,v),o.push(g,d,v)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},$c=class r extends Ne{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new R,f=new R,p=new R,m=new R,_=new R,g=new R,d=new R;for(let x=0;x<=n;++x){let y=x/n*s*Math.PI*2;v(y,s,o,e,p),v(y+.01,s,o,e,m),g.subVectors(m,p),d.addVectors(m,p),_.crossVectors(g,d),d.crossVectors(_,g),_.normalize(),d.normalize();for(let C=0;C<=i;++C){let M=C/i*Math.PI*2,T=-t*Math.cos(M),A=t*Math.sin(M);u.x=p.x+(T*d.x+A*_.x),u.y=p.y+(T*d.y+A*_.y),u.z=p.z+(T*d.z+A*_.z),l.push(u.x,u.y,u.z),f.subVectors(u,p).normalize(),c.push(f.x,f.y,f.z),h.push(x/n),h.push(C/i)}}for(let x=1;x<=n;x++)for(let y=1;y<=i;y++){let C=(i+1)*(x-1)+(y-1),M=(i+1)*x+(y-1),T=(i+1)*x+y,A=(i+1)*(x-1)+y;a.push(C,M,A),a.push(M,T,A)}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2));function v(x,y,C,M,T){let A=Math.cos(x),L=Math.sin(x),S=C/y*x,b=Math.cos(S);T.x=M*(2+b)*.5*A,T.y=M*(2+b)*L*.5,T.z=M*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Jc=class r extends Ne{constructor(e=new Vo(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new $,h=new R,u=[],f=[],p=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(p,2));function _(){for(let x=0;x<t;x++)g(x);g(s===!1?t:0),v(),d()}function g(x){h=e.getPointAt(x/t,h);let y=o.normals[x],C=o.binormals[x];for(let M=0;M<=i;M++){let T=M/i*Math.PI*2,A=Math.sin(T),L=-Math.cos(T);l.x=L*y.x+A*C.x,l.y=L*y.y+A*C.y,l.z=L*y.z+A*C.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let x=1;x<=t;x++)for(let y=1;y<=i;y++){let C=(i+1)*(x-1)+(y-1),M=(i+1)*x+(y-1),T=(i+1)*x+y,A=(i+1)*(x-1)+y;m.push(C,M,A),m.push(M,T,A)}}function v(){for(let x=0;x<=t;x++)for(let y=0;y<=i;y++)c.x=x/t,c.y=y/i,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Fc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},jc=class extends Ne{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new R,s=new R;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,p=u.count;for(let m=f,_=f+p;m<_;m+=3)for(let g=0;g<3;g++){let d=a.getX(m+g),v=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,d),s.fromBufferAttribute(o,v),Wg(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),s.fromBufferAttribute(o,u),Wg(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new me(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Wg(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Xg=Object.freeze({__proto__:null,BoxGeometry:wr,CapsuleGeometry:zc,CircleGeometry:kc,ConeGeometry:Hc,CylinderGeometry:As,DodecahedronGeometry:Vc,EdgesGeometry:Gc,ExtrudeGeometry:Wc,IcosahedronGeometry:Xc,LatheGeometry:Wo,OctahedronGeometry:Zo,PlaneGeometry:Ms,PolyhedronGeometry:Wi,RingGeometry:Yc,ShapeGeometry:qc,SphereGeometry:Ko,TetrahedronGeometry:Zc,TorusGeometry:Kc,TorusKnotGeometry:$c,TubeGeometry:Jc,WireframeGeometry:jc}),Qc=class extends Nt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},eh=class extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$o=class extends Nt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cs=class extends $o{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},th=class extends Nt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nh=class extends Nt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ih=class extends Nt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},rh=class extends Nt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sh=class extends Nt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},oh=class extends $t{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function vr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function p0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function m0(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Vf(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Zd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function kw(r,e,t,n,i=30){let s=r.clone();s.name=e;let o=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],h=c.getValueSize(),u=[],f=[];for(let p=0;p<c.times.length;++p){let m=c.times[p]*i;if(!(m<t||m>=n)){u.push(c.times[p]);for(let _=0;_<h;++_)f.push(c.values[p*h+_])}}u.length!==0&&(c.times=vr(u,c.times.constructor),c.values=vr(f,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function Hw(r,e=0,t=r,n=30){n<=0&&(n=30);let i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=r.tracks.find(function(d){return d.name===a.name&&d.ValueTypeName===l});if(c===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0,p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=a.times.length-1,_;if(s<=a.times[0]){let d=h,v=u-h;_=a.values.slice(d,v)}else if(s>=a.times[m]){let d=m*u+h,v=d+u-h;_=a.values.slice(d,v)}else{let d=a.createInterpolant(),v=h,x=u-h;d.evaluate(s),_=d.resultBuffer.slice(v,x)}l==="quaternion"&&new en().fromArray(_).normalize().conjugate().toArray(_);let g=c.times.length;for(let d=0;d<g;++d){let v=d*p+f;if(l==="quaternion")en.multiplyQuaternionsFlat(c.values,v,_,0,c.values,v);else{let x=p-f*2;for(let y=0;y<x;++y)c.values[v+y]-=_[y]}}}return r.blendMode=Gd,r}var Vw={convertArray:vr,isTypedArray:p0,getKeyframeOrder:m0,sortedArray:Vf,flattenJSON:Zd,subclip:kw,makeClipAdditive:Hw},Dr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ah=class extends Dr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gr,endingEnd:gr}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case _r:s=e,a=2*t-n;break;case So:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _r:o=e,l=2*n-t;break;case So:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,d=-f*g+2*f*_-f*m,v=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,x=(-1-p)*g+(1.5+p)*_+.5*m,y=p*g-p*_;for(let C=0;C!==a;++C)s[C]=d*o[h+C]+v*o[c+C]+x*o[l+C]+y*o[u+C];return s}},Jo=class extends Dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},lh=class extends Dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Mn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vr(t,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vr(e.times,Array),values:vr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ah(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case mc:t=this.InterpolantFactoryMethodLinear;break;case Ll:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return mc;case this.InterpolantFactoryMethodSmooth:return Ll}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&p0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ll,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let m=0;m!==n;++m){let _=t[u+m];if(_!==t[f+m]||_!==t[p+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=mc;var Mi=class extends Mn{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=yo;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends Mn{};jo.prototype.ValueTypeName="color";var Or=class extends Mn{};Or.prototype.ValueTypeName="number";var ch=class extends Dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)en.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ur=class extends Mn{InterpolantFactoryMethodLinear(e){return new ch(this.times,this.values,this.getValueSize(),e)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends Mn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=yo;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Nr=class extends Mn{};Nr.prototype.ValueTypeName="vector";var Fr=class{constructor(e="",t=-1,n=[],i=Dh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ww(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Mn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let h=m0(l);l=Vf(l,1,h),c=Vf(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Or(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(s);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,m,_){if(p.length!==0){let g=[],d=[];Zd(p,g,d,m),g.length!==0&&_.push(new u(f,g,d))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)p[f[m].morphTargets[_]]=-1;for(let _ in p){let g=[],d=[];for(let v=0;v!==f[m].morphTargets.length;++v){let x=f[m];g.push(x.time),d.push(x.morphTarget===_?1:0)}i.push(new Or(".morphTargetInfluence["+_+"]",g,d))}l=p.length*o}else{let p=".bones["+t[u].name+"]";n(Nr,p+".position",f,"pos",i),n(Ur,p+".quaternion",f,"rot",i),n(Nr,p+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Gw(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Or;case"vector":case"vector2":case"vector3":case"vector4":return Nr;case"color":return jo;case"quaternion":return Ur;case"bool":case"boolean":return Mi;case"string":return Ei}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Ww(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Gw(r.type);if(r.times===void 0){let t=[],n=[];Zd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var _i={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Qo=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},g0=new Qo,tn=class{constructor(e){this.manager=e!==void 0?e:g0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};tn.DEFAULT_MATERIAL_NAME="__DEFAULT";var di={},Gf=class extends Error{constructor(e,t){super(e),this.response=t}},Hn=class extends tn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=_i.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:n,onError:i});return}di[e]=[],di[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=di[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,m=p!==0,_=0,g=new ReadableStream({start(d){v();function v(){u.read().then(({done:x,value:y})=>{if(x)d.close();else{_+=y.byteLength;let C=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:p});for(let M=0,T=h.length;M<T;M++){let A=h[M];A.onProgress&&A.onProgress(C)}d.enqueue(y),v()}},x=>{d.error(x)})}}});return new Response(g)}else throw new Gf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{_i.add(e,c);let h=di[e];delete di[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=di[e];if(h===void 0)throw this.manager.itemError(e),c;delete di[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Wf=class extends tn{constructor(e){super(e)}load(e,t,n,i){let s=this,o=new Hn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){let t=[];for(let n=0;n<e.length;n++){let i=Fr.parse(e[n]);t.push(i)}return t}},Xf=class extends tn{constructor(e){super(e)}load(e,t,n,i){let s=this,o=[],a=new Ts,l=new Hn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(u){l.load(e[u],function(f){let p=s.parse(f,!0);o[u]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(a.minFilter=mt),a.image=o,a.format=p.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let u=0,f=e.length;u<f;++u)h(u);else l.load(e,function(u){let f=s.parse(u,!0);if(f.isCubemap){let p=f.mipmaps.length/f.mipmapCount;for(let m=0;m<p;m++){o[m]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)o[m].mipmaps.push(f.mipmaps[m*f.mipmapCount+_]),o[m].format=f.format,o[m].width=f.width,o[m].height=f.height}a.image=o}else a.image.width=f.width,a.image.height=f.height,a.mipmaps=f.mipmaps;f.mipmapCount===1&&(a.minFilter=mt),a.format=f.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}},Br=class extends tn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=_i.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Ao("img");function l(){h(),_i.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},Yf=class extends tn{constructor(e){super(e)}load(e,t,n,i){let s=new Ar;s.colorSpace=An;let o=new Br(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}},ea=class extends tn{constructor(e){super(e)}load(e,t,n,i){let s=this,o=new Pn,a=new Hn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Rn,o.wrapT=c.wrapT!==void 0?c.wrapT:Rn,o.magFilter=c.magFilter!==void 0?c.magFilter:mt,o.minFilter=c.minFilter!==void 0?c.minFilter:mt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Zn),c.mipmapCount===1&&(o.minFilter=mt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}},qf=class extends tn{constructor(e){super(e)}load(e,t,n,i){let s=new wt,o=new Br(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},ei=class extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},hh=class extends ei{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},sf=new Oe,Yg=new R,qg=new R,ta=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Yg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yg),qg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qg),t.updateMatrixWorld(),sf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zf=class extends ta{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ys*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},uh=class extends ei{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Zf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Zg=new Oe,io=new R,of=new R,Kf=class extends ta{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),io.setFromMatrixPosition(e.matrixWorld),n.position.copy(io),of.copy(n.position),of.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(of),n.updateMatrixWorld(),i.makeTranslation(-io.x,-io.y,-io.z),Zg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zg)}},fh=class extends ei{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$f=class extends ta{constructor(){super(new pn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dh=class extends ei{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new $f}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ph=class extends ei{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},mh=class extends ei{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},gh=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}},_h=class extends ei{constructor(e=new gh,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},vh=class r extends tn{constructor(e){super(e),this.textures={}}load(e,t,n,i){let s=this,o=new Hn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){let t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}let i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let s in e.uniforms){let o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new pe().setHex(o.value);break;case"v2":i.uniforms[s].value=new $().fromArray(o.value);break;case"v3":i.uniforms[s].value=new R().fromArray(o.value);break;case"v4":i.uniforms[s].value=new et().fromArray(o.value);break;case"m3":i.uniforms[s].value=new Ye().fromArray(o.value);break;case"m4":i.uniforms[s].value=new Oe().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new $().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new $().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return r.createMaterialFromType(e)}static createMaterialFromType(e){let t={ShadowMaterial:Qc,SpriteMaterial:No,RawShaderMaterial:eh,ShaderMaterial:Xt,PointsMaterial:Bo,MeshPhysicalMaterial:Cs,MeshStandardMaterial:$o,MeshPhongMaterial:th,MeshToonMaterial:nh,MeshNormalMaterial:ih,MeshLambertMaterial:rh,MeshDepthMaterial:Do,MeshDistanceMaterial:Oo,MeshBasicMaterial:jn,MeshMatcapMaterial:sh,LineDashedMaterial:oh,LineBasicMaterial:$t,Material:Nt};return new t[e]}},na=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},xh=class extends Ne{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},yh=class extends tn{constructor(e){super(e)}load(e,t,n,i){let s=this,o=new Hn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){let t={},n={};function i(p,m){if(t[m]!==void 0)return t[m];let g=p.interleavedBuffers[m],d=s(p,g.buffer),v=ps(g.type,d),x=new Es(v,g.stride);return x.uuid=g.uuid,t[m]=x,x}function s(p,m){if(n[m]!==void 0)return n[m];let g=p.arrayBuffers[m],d=new Uint32Array(g).buffer;return n[m]=d,d}let o=e.isInstancedBufferGeometry?new xh:new Ne,a=e.data.index;if(a!==void 0){let p=ps(a.type,a.array);o.setIndex(new at(p,1))}let l=e.data.attributes;for(let p in l){let m=l[p],_;if(m.isInterleavedBufferAttribute){let g=i(e.data,m.data);_=new Pr(g,m.itemSize,m.offset,m.normalized)}else{let g=ps(m.type,m.array),d=m.isInstancedBufferAttribute?Gi:at;_=new d(g,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),o.setAttribute(p,_)}let c=e.data.morphAttributes;if(c)for(let p in c){let m=c[p],_=[];for(let g=0,d=m.length;g<d;g++){let v=m[g],x;if(v.isInterleavedBufferAttribute){let y=i(e.data,v.data);x=new Pr(y,v.itemSize,v.offset,v.normalized)}else{let y=ps(v.type,v.array);x=new at(y,v.itemSize,v.normalized)}v.name!==void 0&&(x.name=v.name),_.push(x)}o.morphAttributes[p]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let p=0,m=u.length;p!==m;++p){let _=u[p];o.addGroup(_.start,_.count,_.materialIndex)}let f=e.data.boundingSphere;if(f!==void 0){let p=new R;f.center!==void 0&&p.fromArray(f.center),o.boundingSphere=new Wt(p,f.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}},Jf=class extends tn{constructor(e){super(e)}load(e,t,n,i){let s=this,o=this.path===""?na.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;let a=new Hn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}loadAsync(e,t){return Qi(this,null,function*(){let n=this,i=this.path===""?na.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;let s=new Hn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);let o=yield s.loadAsync(e,t),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return yield n.parseAsync(a)})}parse(e,t){let n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(let f in o)if(o[f].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}parseAsync(e){return Qi(this,null,function*(){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=yield this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,i,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l})}parseShapes(e){let t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){let s=new xi().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){let n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){let a=new wc().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){let n={};if(e!==void 0){let i=new yh;for(let s=0,o=e.length;s<o;s++){let a,l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in Xg?a=Xg[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){let n={},i={};if(e!==void 0){let s=new vh;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){let l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let i=e[n],s=Fr.parse(i);t[s.uuid]=s}return t}parseImages(e,t){let n=this,i={},s;function o(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:ps(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new Qo(t);s=new Br(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){let u=e[c],f=u.url;if(Array.isArray(f)){let p=[];for(let m=0,_=f.length;m<_;m++){let g=f[m],d=a(g);d!==null&&(d instanceof HTMLImageElement?p.push(d):p.push(new Pn(d.data,d.width,d.height)))}i[u.uuid]=new gi(p)}else{let p=a(u.url);i[u.uuid]=new gi(p)}}}return i}parseImagesAsync(e){return Qi(this,null,function*(){let t=this,n={},i;function s(o){return Qi(this,null,function*(){if(typeof o=="string"){let a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return yield i.loadAsync(l)}else return o.data?{data:ps(o.type,o.data),width:o.width,height:o.height}:null})}if(e!==void 0&&e.length>0){i=new Br(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){let l=e[o],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u],m=yield s(p);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new Pn(m.data,m.width,m.height)))}n[l.uuid]=new gi(h)}else{let h=yield s(l.url);n[l.uuid]=new gi(h)}}}return n})}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}let i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){let a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let l=t[a.image],c=l.data,h;Array.isArray(c)?(h=new Ar,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Pn:h=new wt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,Xw)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],Kg),h.wrapT=n(a.wrap[1],Kg)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,$g)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,$g)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(e,t,n,i,s){let o;function a(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function l(f){if(f!==void 0){if(Array.isArray(f)){let p=[];for(let m=0,_=f.length;m<_;m++){let g=f[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),p.push(n[g])}return p}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function c(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let h,u;switch(e.type){case"Scene":o=new Rr,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new pe(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new bc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new Sc(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new Dt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new pn(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new ph(e.color,e.intensity);break;case"DirectionalLight":o=new dh(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new fh(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new mh(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new uh(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new hh(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new _h().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),u=l(e.material),o=new Tc(h,u),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),u=l(e.material),o=new ut(h,u);break;case"InstancedMesh":h=a(e.geometry),u=l(e.material);let f=e.count,p=e.instanceMatrix,m=e.instanceColor;o=new Ac(h,u,f),o.instanceMatrix=new Gi(new Float32Array(p.array),16),m!==void 0&&(o.instanceColor=new Gi(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=a(e.geometry),u=l(e.material),o=new Cc(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(_=>{let g=new Kt;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);let d=new Wt;return d.radius=_.sphereRadius,d.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:d}}),o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":o=new Ec;break;case"Line":o=new Qn(a(e.geometry),l(e.material));break;case"LineLoop":o=new Ic(a(e.geometry),l(e.material));break;case"LineSegments":o=new Ln(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new Lc(a(e.geometry),l(e.material));break;case"Sprite":o=new Mc(l(e.material));break;case"Group":o=new zi;break;case"Bone":o=new Fo;break;default:o=new rt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){let f=e.children;for(let p=0;p<f.length;p++)o.add(this.parseObject(f[p],t,n,i,s))}if(e.animations!==void 0){let f=e.animations;for(let p=0;p<f.length;p++){let m=f[p];o.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);let f=e.levels;for(let p=0;p<f.length;p++){let m=f[p],_=o.getObjectByProperty("uuid",m.object);_!==void 0&&o.addLevel(_,m.distance,m.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new rt}})}},Xw={UVMapping:wh,CubeReflectionMapping:Si,CubeRefractionMapping:ki,EquirectangularReflectionMapping:Mr,EquirectangularRefractionMapping:_o,CubeUVReflectionMapping:Ps},Kg={RepeatWrapping:vo,ClampToEdgeWrapping:Rn,MirroredRepeatWrapping:xo},$g={NearestFilter:Vt,NearestMipmapNearestFilter:Dd,NearestMipmapLinearFilter:ds,LinearFilter:mt,LinearMipmapNearestFilter:oo,LinearMipmapLinearFilter:Zn},jf=class extends tn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=_i.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),_i.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});_i.add(e,l),s.manager.itemStart(e)}},Tl,ia=class{static getContext(){return Tl===void 0&&(Tl=new(window.AudioContext||window.webkitAudioContext)),Tl}static setContext(e){Tl=e}},Qf=class extends tn{constructor(e){super(e)}load(e,t,n,i){let s=this,o=new Hn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{let c=l.slice(0);ia.getContext().decodeAudioData(c,function(u){t(u)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),s.manager.itemError(e)}}},Jg=new Oe,jg=new Oe,lr=new Oe,ed=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Dt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Dt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,lr.copy(e.projectionMatrix);let i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Sr*t.fov*.5)/t.zoom,a,l;jg.elements[12]=-i,Jg.elements[12]=i,a=-o*t.aspect+s,l=o*t.aspect+s,lr.elements[0]=2*t.near/(l-a),lr.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(lr),a=-o*t.aspect-s,l=o*t.aspect-s,lr.elements[0]=2*t.near/(l-a),lr.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(lr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(jg),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Jg)}},Xi=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Qg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Qg(){return performance.now()}var cr=new R,e_=new en,Yw=new R,hr=new R,td=class extends rt{constructor(){super(),this.type="AudioListener",this.context=ia.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Xi}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(cr,e_,Yw),hr.set(0,0,-1).applyQuaternion(e_),t.positionX){let i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(cr.x,i),t.positionY.linearRampToValueAtTime(cr.y,i),t.positionZ.linearRampToValueAtTime(cr.z,i),t.forwardX.linearRampToValueAtTime(hr.x,i),t.forwardY.linearRampToValueAtTime(hr.y,i),t.forwardZ.linearRampToValueAtTime(hr.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(cr.x,cr.y,cr.z),t.setOrientation(hr.x,hr.y,hr.z,n.x,n.y,n.z)}},Sh=class extends rt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},ur=new R,t_=new en,qw=new R,fr=new R,nd=class extends Sh{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ur,t_,qw),fr.set(0,0,1).applyQuaternion(t_);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ur.x,n),t.positionY.linearRampToValueAtTime(ur.y,n),t.positionZ.linearRampToValueAtTime(ur.z,n),t.orientationX.linearRampToValueAtTime(fr.x,n),t.orientationY.linearRampToValueAtTime(fr.y,n),t.orientationZ.linearRampToValueAtTime(fr.z,n)}else t.setPosition(ur.x,ur.y,ur.z),t.setOrientation(fr.x,fr.y,fr.z)}},id=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},bh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){en.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let o=this._workIndex*s;en.multiplyQuaternionsFlat(e,o,e,t,e,n),en.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Kd="\\[\\]\\.:\\/",Zw=new RegExp("["+Kd+"]","g"),$d="[^"+Kd+"]",Kw="[^"+Kd.replace("\\.","")+"]",$w=/((?:WC+[\/:])*)/.source.replace("WC",$d),Jw=/(WCOD+)?/.source.replace("WCOD",Kw),jw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$d),Qw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$d),e1=new RegExp("^"+$w+Jw+jw+Qw+"$"),t1=["material","materials","bones","map"],rd=class{constructor(e,t,n){let i=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ht=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zw,"")}static parseTrackName(e){let t=e1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);t1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=rd;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sd=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=yn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length,a,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let f=arguments[h],p=f.uuid,m=t[p];if(m===void 0){m=l++,t[p]=m,e.push(f);for(let _=0,g=o;_!==g;++_)s[_].push(new ht(f,n[_],i[_]))}else if(m<c){a=e[m];let _=--c,g=e[_];t[g.uuid]=m,e[m]=g,t[p]=_,e[_]=f;for(let d=0,v=o;d!==v;++d){let x=s[d],y=x[_],C=x[m];x[m]=y,C===void 0&&(C=new ht(f,n[d],i[d])),x[_]=C}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){let u=s++,f=e[u];t[f.uuid]=h,e[h]=f,t[c]=u,e[u]=l;for(let p=0,m=i;p!==m;++p){let _=n[p],g=_[u],d=_[h];_[h]=g,_[u]=d}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<s){let f=--s,p=e[f],m=--o,_=e[m];t[p.uuid]=u,e[u]=p,t[_.uuid]=f,e[f]=_,e.pop();for(let g=0,d=i;g!==d;++g){let v=n[g],x=v[f],y=v[m];v[u]=x,v[f]=y,v.pop()}}else{let f=--o,p=e[f];f>0&&(t[p.uuid]=u),e[u]=p,e.pop();for(let m=0,_=i;m!==_;++m){let g=n[m];g[u]=g[f],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],s=this._bindings;if(i!==void 0)return s[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(u);for(let f=h,p=l.length;f!==p;++f){let m=l[f];u[f]=new ht(m,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}},Mh=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:gr,endingEnd:gr};for(let c=0;c!==o;++c){let h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=V_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Gd:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Dh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,o=n===G_;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===H_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=_r,i.endingEnd=_r):(e?i.endingStart=this.zeroSlopeAtStart?_r:gr:i.endingStart=So,t?i.endingEnd=this.zeroSlopeAtEnd?_r:gr:i.endingEnd=So)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}},n1=new Float32Array(1),od=class extends dn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let f=i[u],p=f.name,m=h[p];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,p));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;m=new bh(ht.create(n,p,_),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,p),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Jo(new Float32Array(2),new Float32Array(2),1,n1),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,o=typeof e=="string"?Fr.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Dh),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Mh(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?Fr.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},ra=class r{constructor(e){this.value=e}clone(){return new r(this.value.clone===void 0?this.value:this.value.clone())}},i1=0,ad=class extends dn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:i1++}),this.name="",this.usage=To,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){let s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}},ld=class extends Es{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},cd=class{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},n_=new Oe,sa=class{constructor(e,t,n=0,i=1/0){this.ray=new Hi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Jn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return n_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(n_),this}intersectObject(e,t=!0,n=[]){return hd(e,this,n,t),n.sort(i_),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)hd(e[i],this,n,t);return n.sort(i_),n}};function i_(r,e){return r.distance-e.distance}function hd(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)hd(s[o],e,t,!0)}}var ud=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},fd=class{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},dd=class r{constructor(e,t,n,i){r.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}},r_=new $,pd=class{constructor(e=new $(1/0,1/0),t=new $(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=r_.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,r_).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},s_=new R,wl=new R,md=class{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){s_.subVectors(e,this.start),wl.subVectors(this.end,this.start);let n=wl.dot(wl),s=wl.dot(s_)/n;return t&&(s=Tt(s,0,1)),s}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},o_=new R,gd=class extends rt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let n=new Ne,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new me(i,3));let s=new $t({fog:!1,toneMapped:!1});this.cone=new Ln(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),o_.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(o_),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Fi=new R,Al=new Oe,af=new Oe,_d=class extends Ln{constructor(e){let t=_0(e),n=new Ne,i=[],s=[],o=new pe(0,0,1),a=new pe(0,1,0);for(let c=0;c<t.length;c++){let h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new me(i,3)),n.setAttribute("color",new me(s,3));let l=new $t({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");af.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(Al.multiplyMatrices(af,a.matrixWorld),Fi.setFromMatrixPosition(Al),i.setXYZ(o,Fi.x,Fi.y,Fi.z),Al.multiplyMatrices(af,a.parent.matrixWorld),Fi.setFromMatrixPosition(Al),i.setXYZ(o+1,Fi.x,Fi.y,Fi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}};function _0(r){let e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,_0(r.children[t]));return e}var vd=class extends ut{constructor(e,t,n){let i=new Ko(t,4,2),s=new jn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},r1=new R,a_=new pe,l_=new pe,xd=class extends rt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new Zo(t);i.rotateY(Math.PI*.5),this.material=new jn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new at(o,3)),this.add(new ut(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");a_.copy(this.light.color),l_.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){let s=n<i/2?a_:l_;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(r1.setFromMatrixPosition(this.light.matrixWorld).negate())}},yd=class extends Ln{constructor(e=10,t=10,n=4473924,i=8947848){n=new pe(n),i=new pe(i);let s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,m=-a;f<=t;f++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let _=f===s?n:i;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}let h=new Ne;h.setAttribute("position",new me(l,3)),h.setAttribute("color",new me(c,3));let u=new $t({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Sd=class extends Ln{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new pe(s),o=new pe(o);let a=[],l=[];if(t>1)for(let u=0;u<t;u++){let f=u/t*(Math.PI*2),p=Math.sin(f)*e,m=Math.cos(f)*e;a.push(0,0,0),a.push(p,0,m);let _=u&1?s:o;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){let f=u&1?s:o,p=e-e/n*u;for(let m=0;m<i;m++){let _=m/i*(Math.PI*2),g=Math.sin(_)*p,d=Math.cos(_)*p;a.push(g,0,d),l.push(f.r,f.g,f.b),_=(m+1)/i*(Math.PI*2),g=Math.sin(_)*p,d=Math.cos(_)*p,a.push(g,0,d),l.push(f.r,f.g,f.b)}}let c=new Ne;c.setAttribute("position",new me(a,3)),c.setAttribute("color",new me(l,3));let h=new $t({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},c_=new R,Cl=new R,h_=new R,bd=class extends rt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Ne;i.setAttribute("position",new me([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let s=new $t({fog:!1,toneMapped:!1});this.lightPlane=new Qn(i,s),this.add(this.lightPlane),i=new Ne,i.setAttribute("position",new me([0,0,0,0,0,1],3)),this.targetLine=new Qn(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),c_.setFromMatrixPosition(this.light.matrixWorld),Cl.setFromMatrixPosition(this.light.target.matrixWorld),h_.subVectors(Cl,c_),this.lightPlane.lookAt(Cl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Cl),this.targetLine.scale.z=h_.length()}},Rl=new R,Et=new Vi,Md=class extends Ln{constructor(e){let t=new Ne,n=new $t({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,_){l(m),l(_)}function l(m){i.push(0,0,0),s.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(i.length/3-1)}t.setAttribute("position",new me(i,3)),t.setAttribute("color",new me(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new pe(16755200),h=new pe(16711680),u=new pe(43775),f=new pe(16777215),p=new pe(3355443);this.setColors(c,h,u,f,p)}setColors(e,t,n,i,s){let a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0}update(){let e=this.geometry,t=this.pointMap,n=1,i=1;Et.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Lt("c",t,e,Et,0,0,-1),Lt("t",t,e,Et,0,0,1),Lt("n1",t,e,Et,-n,-i,-1),Lt("n2",t,e,Et,n,-i,-1),Lt("n3",t,e,Et,-n,i,-1),Lt("n4",t,e,Et,n,i,-1),Lt("f1",t,e,Et,-n,-i,1),Lt("f2",t,e,Et,n,-i,1),Lt("f3",t,e,Et,-n,i,1),Lt("f4",t,e,Et,n,i,1),Lt("u1",t,e,Et,n*.7,i*1.1,-1),Lt("u2",t,e,Et,-n*.7,i*1.1,-1),Lt("u3",t,e,Et,0,i*2,-1),Lt("cf1",t,e,Et,-n,0,1),Lt("cf2",t,e,Et,n,0,1),Lt("cf3",t,e,Et,0,-i,1),Lt("cf4",t,e,Et,0,i,1),Lt("cn1",t,e,Et,-n,0,-1),Lt("cn2",t,e,Et,n,0,-1),Lt("cn3",t,e,Et,0,-i,-1),Lt("cn4",t,e,Et,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Lt(r,e,t,n,i,s,o){Rl.set(i,s,o).unproject(n);let a=e[r];if(a!==void 0){let l=t.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Rl.x,Rl.y,Rl.z)}}var Pl=new Kt,Ed=class extends Ln{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new Ne;s.setIndex(new at(n,1)),s.setAttribute("position",new at(i,3)),super(s,new $t({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Pl.setFromObject(this.object),Pl.isEmpty())return;let t=Pl.min,n=Pl.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Td=class extends Ln{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Ne;s.setIndex(new at(n,1)),s.setAttribute("position",new me(i,3)),super(s,new $t({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},wd=class extends Qn{constructor(e,t=1,n=16776960){let i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Ne;o.setAttribute("position",new me(s,3)),o.computeBoundingSphere(),super(o,new $t({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ne;l.setAttribute("position",new me(a,3)),l.computeBoundingSphere(),this.add(new ut(l,new jn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},u_=new R,Il,lf,Ad=class extends rt{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",Il===void 0&&(Il=new Ne,Il.setAttribute("position",new me([0,0,0,0,1,0],3)),lf=new As(0,.5,1,5,1),lf.translate(0,-.5,0)),this.position.copy(t),this.line=new Qn(Il,new $t({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ut(lf,new jn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{u_.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(u_,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Cd=class extends Ln{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ne;i.setAttribute("position",new me(t,3)),i.setAttribute("color",new me(n,3));let s=new $t({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){let i=new pe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Rd=class{constructor(){this.type="ShapePath",this.color=new pe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ir,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){let v=[];for(let x=0,y=d.length;x<y;x++){let C=d[x],M=new xi;M.curves=C.curves,v.push(M)}return v}function n(d,v){let x=v.length,y=!1;for(let C=x-1,M=0;M<x;C=M++){let T=v[C],A=v[M],L=A.x-T.x,S=A.y-T.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(T=v[M],L=-L,A=v[C],S=-S),d.y<T.y||d.y>A.y)continue;if(d.y===T.y){if(d.x===T.x)return!0}else{let b=S*(d.x-T.x)-L*(d.y-T.y);if(b===0)return!0;if(b<0)continue;y=!y}}else{if(d.y!==T.y)continue;if(A.x<=d.x&&d.x<=T.x||T.x<=d.x&&d.x<=A.x)return!0}}return y}let i=$n.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l,c=[];if(s.length===1)return a=s[0],l=new xi,l.curves=a.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;let u=[],f=[],p=[],m=0,_;f[m]=void 0,p[m]=[];for(let d=0,v=s.length;d<v;d++)a=s[d],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!h&&f[m]&&m++,f[m]={s:new xi,p:_},f[m].s.curves=a.curves,h&&m++,p[m]=[]):p[m].push({h:a,p:_[0]});if(!f[0])return t(s);if(f.length>1){let d=!1,v=0;for(let x=0,y=f.length;x<y;x++)u[x]=[];for(let x=0,y=f.length;x<y;x++){let C=p[x];for(let M=0;M<C.length;M++){let T=C[M],A=!0;for(let L=0;L<f.length;L++)n(T.p,f[L].p)&&(x!==L&&v++,A?(A=!1,u[L].push(T)):d=!0);A&&u[x].push(T)}}v>0&&d===!1&&(p=u)}let g;for(let d=0,v=f.length;d<v;d++){l=f[d].s,c.push(l),g=p[d];for(let x=0,y=g.length;x<y;x++)l.holes.push(g[x].h)}return c}},Pd=class extends dn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}},Id=class extends cn{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,xt(Te({},i),{count:n})),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);function s1(r){let e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function o1(r){let e=r.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return e?{r:parseInt(e[1]),g:parseInt(e[2]),b:parseInt(e[3])}:null}function Fh(r){if(r.startsWith("#"))return s1(r);if(r.startsWith("rgb"))return o1(r);throw new Error("Invalid color format")}function ti(r=0){return r/255}function Bh(r){return r/180*Math.PI}function v0(r){return r.map(e=>Bh(e))}function zh(r){return r.replace("http://localhost:3001/customize","").replace("https://shadergradient.co/customize","").replace("https://www.shadergradient.co/customize","")}import*as Ft from"react";import{DefaultEventPriority as gp,ContinuousEventPriority as O1,DiscreteEventPriority as U1,ConcurrentRoot as N1}from"react-reconciler/constants";import{useReducer as a1,useRef as Ds,useDebugValue as l1,useEffect as c1,useLayoutEffect as h1}from"react";function u1(r){let e,t=new Set,n=(c,h)=>{let u=typeof c=="function"?c(e):c;if(u!==e){let f=e;e=h?u:Object.assign({},e,u),t.forEach(p=>p(e,f))}},i=()=>e,s=(c,h=i,u=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let f=h(e);function p(){let m=h(e);if(!u(f,m)){let _=f;c(f=m,_)}}return t.add(p),()=>t.delete(p)},l={setState:n,getState:i,subscribe:(c,h,u)=>h||u?s(c,h,u):(t.add(c),()=>t.delete(c)),destroy:()=>t.clear()};return e=r(n,i,l),l}var f1=typeof window=="undefined"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),x0=f1?c1:h1;function y0(r){let e=typeof r=="function"?u1(r):r,t=(n=e.getState,i=Object.is)=>{let[,s]=a1(g=>g+1,0),o=e.getState(),a=Ds(o),l=Ds(n),c=Ds(i),h=Ds(!1),u=Ds();u.current===void 0&&(u.current=n(o));let f,p=!1;(a.current!==o||l.current!==n||c.current!==i||h.current)&&(f=n(o),p=!i(u.current,f)),x0(()=>{p&&(u.current=f),a.current=o,l.current=n,c.current=i,h.current=!1});let m=Ds(o);x0(()=>{let g=()=>{try{let v=e.getState(),x=l.current(v);c.current(u.current,x)||(a.current=v,u.current=x,s())}catch(v){h.current=!0,s()}},d=e.subscribe(g);return e.getState()!==m.current&&g(),d},[]);let _=p?f:u.current;return l1(_),_};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");let n=[t,e];return{next(){let i=n.length<=0;return{value:n.shift(),done:i}}}},t}var d1=r=>typeof r=="object"&&typeof r.then=="function",zr=[];function S0(r,e,t=(n,i)=>n===i){if(r===e)return!0;if(!r||!e)return!1;let n=r.length;if(e.length!==n)return!1;for(let i=0;i<n;i++)if(!t(r[i],e[i]))return!1;return!0}function b0(r,e=null,t=!1,n={}){e===null&&(e=[r]);for(let s of zr)if(S0(e,s.keys,s.equal)){if(t)return;if(Object.prototype.hasOwnProperty.call(s,"error"))throw s.error;if(Object.prototype.hasOwnProperty.call(s,"response"))return n.lifespan&&n.lifespan>0&&(s.timeout&&clearTimeout(s.timeout),s.timeout=setTimeout(s.remove,n.lifespan)),s.response;if(!t)throw s.promise}let i={keys:e,equal:n.equal,remove:()=>{let s=zr.indexOf(i);s!==-1&&zr.splice(s,1)},promise:(d1(r)?r:r(...e)).then(s=>{i.response=s,n.lifespan&&n.lifespan>0&&(i.timeout=setTimeout(i.remove,n.lifespan))}).catch(s=>i.error=s)};if(zr.push(i),!t)throw i.promise}var M0=(r,e,t)=>b0(r,e,!1,t),E0=(r,e,t)=>void b0(r,e,!0,t);var T0=r=>{if(r===void 0||r.length===0)zr.splice(0,zr.length);else{let e=zr.find(t=>S0(r,t.keys,t.equal));e&&e.remove()}};import{jsx as cv,Fragment as UC}from"react/jsx-runtime";import F1 from"react-reconciler";var w0={},At={get exports(){return w0},set exports(r){w0=r}};var p1,Jd,m1,g1,_1,v1,x1,y1,S1,b1,M1,E1,T1,w1,A1,C1,jd,R1,P1;Object.isExtensible(At.exports)&&Object.keys(At.exports).length===19&&(p1=At.exports.unstable_now,Jd=At.exports.unstable_IdlePriority,m1=At.exports.unstable_ImmediatePriority,g1=At.exports.unstable_LowPriority,_1=At.exports.unstable_NormalPriority,v1=At.exports.unstable_Profiling,x1=At.exports.unstable_UserBlockingPriority,y1=At.exports.unstable_cancelCallback,S1=At.exports.unstable_continueExecution,b1=At.exports.unstable_forceFrameRate,M1=At.exports.unstable_getCurrentPriorityLevel,E1=At.exports.unstable_getFirstCallbackNode,T1=At.exports.unstable_next,w1=At.exports.unstable_pauseExecution,A1=At.exports.unstable_requestPaint,C1=At.exports.unstable_runWithPriority,jd=At.exports.unstable_scheduleCallback,R1=At.exports.unstable_shouldYield,P1=At.exports.unstable_wrapCallback);var TC=At.exports;var Xh={};Zr(Xh,{default:()=>L1,unstable_IdlePriority:()=>F0,unstable_ImmediatePriority:()=>B0,unstable_LowPriority:()=>z0,unstable_NormalPriority:()=>k0,unstable_Profiling:()=>H0,unstable_UserBlockingPriority:()=>V0,unstable_cancelCallback:()=>G0,unstable_continueExecution:()=>W0,unstable_forceFrameRate:()=>X0,unstable_getCurrentPriorityLevel:()=>Y0,unstable_getFirstCallbackNode:()=>q0,unstable_next:()=>Z0,unstable_now:()=>N0,unstable_pauseExecution:()=>K0,unstable_requestPaint:()=>$0,unstable_runWithPriority:()=>J0,unstable_scheduleCallback:()=>j0,unstable_shouldYield:()=>Q0,unstable_wrapCallback:()=>ev});var ft={},Ct={get exports(){return ft},set exports(r){ft=r}};function np(r,e){var t=r.length;r.push(e);e:for(;0<t;){var n=t-1>>>1,i=r[n];if(0<kh(i,e))r[n]=e,r[t]=i,t=n;else break e}}function Gn(r){return r.length===0?null:r[0]}function Vh(r){if(r.length===0)return null;var e=r[0],t=r.pop();if(t!==e){r[0]=t;e:for(var n=0,i=r.length,s=i>>>1;n<s;){var o=2*(n+1)-1,a=r[o],l=o+1,c=r[l];if(0>kh(a,t))l<i&&0>kh(c,a)?(r[n]=c,r[l]=t,n=l):(r[n]=a,r[o]=t,n=o);else if(l<i&&0>kh(c,t))r[n]=c,r[l]=t,n=l;else break e}}return e}function kh(r,e){var t=r.sortIndex-e.sortIndex;return t!==0?t:r.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(A0=performance,ft.unstable_now=function(){return A0.now()}):(Qd=Date,C0=Qd.now(),ft.unstable_now=function(){return Qd.now()-C0});var A0,Qd,C0,ni=[],Ki=[],I1=1,Dn=null,nn=3,Gh=!1,kr=!1,ua=!1,I0=typeof setTimeout=="function"?setTimeout:null,L0=typeof clearTimeout=="function"?clearTimeout:null,R0=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ip(r){for(var e=Gn(Ki);e!==null;){if(e.callback===null)Vh(Ki);else if(e.startTime<=r)Vh(Ki),e.sortIndex=e.expirationTime,np(ni,e);else break;e=Gn(Ki)}}function rp(r){if(ua=!1,ip(r),!kr)if(Gn(ni)!==null)kr=!0,op(sp);else{var e=Gn(Ki);e!==null&&ap(rp,e.startTime-r)}}function sp(r,e){kr=!1,ua&&(ua=!1,L0(fa),fa=-1),Gh=!0;var t=nn;try{for(ip(e),Dn=Gn(ni);Dn!==null&&(!(Dn.expirationTime>e)||r&&!U0());){var n=Dn.callback;if(typeof n=="function"){Dn.callback=null,nn=Dn.priorityLevel;var i=n(Dn.expirationTime<=e);e=ft.unstable_now(),typeof i=="function"?Dn.callback=i:Dn===Gn(ni)&&Vh(ni),ip(e)}else Vh(ni);Dn=Gn(ni)}if(Dn!==null)var s=!0;else{var o=Gn(Ki);o!==null&&ap(rp,o.startTime-e),s=!1}return s}finally{Dn=null,nn=t,Gh=!1}}var Wh=!1,Hh=null,fa=-1,D0=5,O0=-1;function U0(){return!(ft.unstable_now()-O0<D0)}function ep(){if(Hh!==null){var r=ft.unstable_now();O0=r;var e=!0;try{e=Hh(!0,r)}finally{e?ha():(Wh=!1,Hh=null)}}else Wh=!1}var ha;typeof R0=="function"?ha=function(){R0(ep)}:typeof MessageChannel!="undefined"?(tp=new MessageChannel,P0=tp.port2,tp.port1.onmessage=ep,ha=function(){P0.postMessage(null)}):ha=function(){I0(ep,0)};var tp,P0;function op(r){Hh=r,Wh||(Wh=!0,ha())}function ap(r,e){fa=I0(function(){r(ft.unstable_now())},e)}ft.unstable_IdlePriority=5;ft.unstable_ImmediatePriority=1;ft.unstable_LowPriority=4;ft.unstable_NormalPriority=3;ft.unstable_Profiling=null;ft.unstable_UserBlockingPriority=2;ft.unstable_cancelCallback=function(r){r.callback=null};ft.unstable_continueExecution=function(){kr||Gh||(kr=!0,op(sp))};ft.unstable_forceFrameRate=function(r){0>r||125<r?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D0=0<r?Math.floor(1e3/r):5};ft.unstable_getCurrentPriorityLevel=function(){return nn};ft.unstable_getFirstCallbackNode=function(){return Gn(ni)};ft.unstable_next=function(r){switch(nn){case 1:case 2:case 3:var e=3;break;default:e=nn}var t=nn;nn=e;try{return r()}finally{nn=t}};ft.unstable_pauseExecution=function(){};ft.unstable_requestPaint=function(){};ft.unstable_runWithPriority=function(r,e){switch(r){case 1:case 2:case 3:case 4:case 5:break;default:r=3}var t=nn;nn=r;try{return e()}finally{nn=t}};ft.unstable_scheduleCallback=function(r,e,t){var n=ft.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?n+t:n):t=n,r){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=t+i,r={id:I1++,callback:e,priorityLevel:r,startTime:t,expirationTime:i,sortIndex:-1},t>n?(r.sortIndex=t,np(Ki,r),Gn(ni)===null&&r===Gn(Ki)&&(ua?(L0(fa),fa=-1):ua=!0,ap(rp,t-n))):(r.sortIndex=i,np(ni,r),kr||Gh||(kr=!0,op(sp))),r};ft.unstable_shouldYield=U0;ft.unstable_wrapCallback=function(r){var e=nn;return function(){var t=nn;nn=e;try{return r.apply(this,arguments)}finally{nn=t}}};var N0,F0,B0,z0,k0,H0,V0,G0,W0,X0,Y0,q0,Z0,K0,$0,J0,j0,Q0,ev;Object.isExtensible(Ct.exports)&&Object.keys(Ct.exports).length===19&&(N0=Ct.exports.unstable_now,F0=Ct.exports.unstable_IdlePriority,B0=Ct.exports.unstable_ImmediatePriority,z0=Ct.exports.unstable_LowPriority,k0=Ct.exports.unstable_NormalPriority,H0=Ct.exports.unstable_Profiling,V0=Ct.exports.unstable_UserBlockingPriority,G0=Ct.exports.unstable_cancelCallback,W0=Ct.exports.unstable_continueExecution,X0=Ct.exports.unstable_forceFrameRate,Y0=Ct.exports.unstable_getCurrentPriorityLevel,q0=Ct.exports.unstable_getFirstCallbackNode,Z0=Ct.exports.unstable_next,K0=Ct.exports.unstable_pauseExecution,$0=Ct.exports.unstable_requestPaint,J0=Ct.exports.unstable_runWithPriority,j0=Ct.exports.unstable_scheduleCallback,Q0=Ct.exports.unstable_shouldYield,ev=Ct.exports.unstable_wrapCallback);var L1=Ct.exports;function D1(r){var e=(typeof window!="undefined"&&window||typeof self!="undefined"&&self||typeof Yh!="undefined"&&Yh||typeof globalThis!="undefined"&&globalThis||{}).Object,t=!1,n=e.create(null),i=!1,s=!1;if(e.defineProperty(n,"__esModule",{value:!0,enumerable:!1,configurable:!0}),r){var o=e.getOwnPropertyNames(r);if(o.forEach(function(l){if(l==="default")s=!0;else if(!i&&l!="__esModule")try{i=r[l]!=null}catch(c){}e.defineProperty(n,l,{get:function(){return r[l]},enumerable:!0,configurable:!1})}),e.getOwnPropertySymbols){var a=e.getOwnPropertySymbols(r);a.forEach(function(l){e.defineProperty(n,l,{get:function(){return r[l]},enumerable:!1,configurable:!1})})}e.preventExtensions(n),e.seal(n),e.freeze&&e.freeze(n)}return i?n:s?(e.isExtensible(n.default)&&!("default"in n.default)&&e.defineProperty(n.default,"default",{value:n.default,configurable:!1,enumerable:!1}),n.default):n}var Yh=typeof window!="undefined"&&window||typeof self!="undefined"&&self||typeof Yh!="undefined"&&Yh||typeof globalThis!="undefined"&&globalThis||{},tv={},nv={get exports(){return tv},set exports(r){tv=r}};nv.exports=D1(typeof Xh!="undefined"?Xh:{});var CC=nv.exports;var Sp={},ma=r=>void Object.assign(Sp,r);function B1(r,e){function t(h,_,m){var g=_,{args:u=[],attach:f}=g,p=Zt(g,["args","attach"]);let d=`${h[0].toUpperCase()}${h.slice(1)}`,v;if(h==="primitive"){if(p.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");let x=p.object;v=Ns(x,{type:h,root:m,attach:f,primitive:!0})}else{let x=Sp[d];if(!x)throw new Error(`R3F: ${d} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(u))throw new Error("R3F: The args prop must be an array!");v=Ns(new x(...u),{type:h,root:m,attach:f,memoizedProps:{args:u}})}return v.__r3f.attach===void 0&&(v instanceof Ne?v.__r3f.attach="geometry":v instanceof Nt&&(v.__r3f.attach="material")),d!=="inject"&&hp(v,p),v}function n(h,u){let f=!1;if(u){var p,m;(p=u.__r3f)!=null&&p.attach?cp(h,u,u.__r3f.attach):u.isObject3D&&h.isObject3D&&(h.add(u),f=!0),f||(m=h.__r3f)==null||m.objects.push(u),u.__r3f||Ns(u,{}),u.__r3f.parent=h,vp(u),Fs(u)}}function i(h,u,f){let p=!1;if(u){var m,_;if((m=u.__r3f)!=null&&m.attach)cp(h,u,u.__r3f.attach);else if(u.isObject3D&&h.isObject3D){u.parent=h,u.dispatchEvent({type:"added"}),h.dispatchEvent({type:"childadded",child:u});let g=h.children.filter(v=>v!==u),d=g.indexOf(f);h.children=[...g.slice(0,d),u,...g.slice(d)],p=!0}p||(_=h.__r3f)==null||_.objects.push(u),u.__r3f||Ns(u,{}),u.__r3f.parent=h,vp(u),Fs(u)}}function s(h,u,f=!1){h&&[...h].forEach(p=>o(u,p,f))}function o(h,u,f){if(u){var p,m,_;if(u.__r3f&&(u.__r3f.parent=null),(p=h.__r3f)!=null&&p.objects&&(h.__r3f.objects=h.__r3f.objects.filter(y=>y!==u)),(m=u.__r3f)!=null&&m.attach)av(h,u,u.__r3f.attach);else if(u.isObject3D&&h.isObject3D){var g;h.remove(u),(g=u.__r3f)!=null&&g.root&&G1(Kh(u),u)}let v=(_=u.__r3f)==null?void 0:_.primitive,x=!v&&(f===void 0?u.dispose!==null:f);if(!v){var d;s((d=u.__r3f)==null?void 0:d.objects,u,x),s(u.children,u,x)}if(delete u.__r3f,x&&u.dispose&&u.type!=="Scene"){let y=()=>{try{u.dispose()}catch(C){}};typeof IS_REACT_ACT_ENVIRONMENT=="undefined"?jd(Jd,y):y()}Fs(h)}}function a(h,u,f,p){var m;let _=(m=h.__r3f)==null?void 0:m.parent;if(!_)return;let g=t(u,f,h.__r3f.root);if(h.children){for(let d of h.children)d.__r3f&&n(g,d);h.children=h.children.filter(d=>!d.__r3f)}h.__r3f.objects.forEach(d=>n(g,d)),h.__r3f.objects=[],h.__r3f.autoRemovedBeforeAppend||o(_,h),g.parent&&(g.__r3f.autoRemovedBeforeAppend=!0),n(_,g),g.raycast&&g.__r3f.eventCount&&Kh(g).getState().internal.interaction.push(g),[p,p.alternate].forEach(d=>{d!==null&&(d.stateNode=g,d.ref&&(typeof d.ref=="function"?d.ref(g):d.ref.current=g))})}let l=()=>{};return{reconciler:F1({createInstance:t,removeChild:o,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(h,u)=>{if(!u)return;let f=h.getState().scene;f.__r3f&&(f.__r3f.root=h,n(f,u))},removeChildFromContainer:(h,u)=>{u&&o(h.getState().scene,u)},insertInContainerBefore:(h,u,f)=>{if(!u||!f)return;let p=h.getState().scene;p.__r3f&&i(p,u,f)},getRootHostContext:()=>null,getChildHostContext:h=>h,finalizeInitialChildren(h){var u;return!!((u=h==null?void 0:h.__r3f)!=null?u:{}).handlers},prepareUpdate(h,u,f,p){var m;if(((m=h==null?void 0:h.__r3f)!=null?m:{}).primitive&&p.object&&p.object!==h)return[!0];{let g=p,{args:v=[],children:x}=g,y=Zt(g,["args","children"]),d=f,{args:C=[],children:M}=d,T=Zt(d,["args","children"]);if(!Array.isArray(v))throw new Error("R3F: the args prop must be an array!");if(v.some((L,S)=>L!==C[S]))return[!0];let A=vv(h,y,T,!0);return A.changes.length?[!1,A]:null}},commitUpdate(h,[u,f],p,m,_,g){u?a(h,p,_,g):hp(h,f)},commitMount(h,u,f,p){var m;let _=(m=h.__r3f)!=null?m:{};h.raycast&&_.handlers&&_.eventCount&&Kh(h).getState().internal.interaction.push(h)},getPublicInstance:h=>h,prepareForCommit:()=>null,preparePortalMount:h=>Ns(h.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(h){var u;let{attach:f,parent:p}=(u=h.__r3f)!=null?u:{};f&&p&&av(p,h,f),h.isObject3D&&(h.visible=!1),Fs(h)},unhideInstance(h,u){var f;let{attach:p,parent:m}=(f=h.__r3f)!=null?f:{};p&&m&&cp(m,h,p),(h.isObject3D&&u.visible==null||u.visible)&&(h.visible=!0),Fs(h)},createTextInstance:l,hideTextInstance:l,unhideTextInstance:l,getCurrentEventPriority:()=>e?e():gp,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance!="undefined"&&gt.fun(performance.now)?performance.now:gt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:gt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:gt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:hp}}var iv,rv,lp=r=>"colorSpace"in r||"outputColorSpace"in r,hv=()=>{var r;return(r=Sp.ColorManagement)!=null?r:null},uv=r=>r&&r.isOrthographicCamera,fv=r=>r&&r.hasOwnProperty("current"),zs=typeof window!="undefined"&&((iv=window.document)!=null&&iv.createElement||((rv=window.navigator)==null?void 0:rv.product)==="ReactNative")?Ft.useLayoutEffect:Ft.useEffect;function bp(r){let e=Ft.useRef(r);return zs(()=>void(e.current=r),[r]),e}function dv({set:r}){return zs(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}var da=class extends Ft.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}};da.getDerivedStateFromError=()=>({error:!0});var pv="__default",sv=new Map,z1=r=>r&&!!r.memoized&&!!r.changes;function mv(r){var e;let t=typeof window!="undefined"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}var Us=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function Kh(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}var gt={obj:r=>r===Object(r)&&!gt.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(gt.str(r)||gt.num(r)||gt.boo(r))return r===e;let s=gt.obj(r);if(s&&n==="reference")return r===e;let o=gt.arr(r);if(o&&t==="reference")return r===e;if((o||s)&&r===e)return!0;let a;for(a in r)if(!(a in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(a in i?e:r)if(!gt.equ(r[a],e[a],{strict:i,objects:"reference"}))return!1}else for(a in i?e:r)if(r[a]!==e[a])return!1;if(gt.und(a)){if(o&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function gv(r){let e={nodes:{},materials:{}};return r&&r.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e}function _v(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(let e in r)e.dispose==null||e.dispose(),delete r[e]}function Ns(r,e){let t=r;return t.__r3f=Te({type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null},e),r}function _p(r,e){let t=r;if(e.includes("-")){let n=e.split("-"),i=n.pop();return t=n.reduce((s,o)=>s[o],r),{target:t,key:i}}else return{target:t,key:e}}var ov=/-\d+$/;function cp(r,e,t){if(gt.str(t)){if(ov.test(t)){let s=t.replace(ov,""),{target:o,key:a}=_p(r,s);Array.isArray(o[a])||(o[a]=[])}let{target:n,key:i}=_p(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function av(r,e,t){var n,i;if(gt.str(t)){let{target:s,key:o}=_p(r,t),a=e.__r3f.previousAttach;a===void 0?delete s[o]:s[o]=a}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function vv(r,h,f={},c=!1){var u=h,{children:e,key:t,ref:n}=u,i=Zt(u,["children","key","ref"]);var p=f,{children:s,key:o,ref:a}=p,l=Zt(p,["children","key","ref"]);let m=r.__r3f,_=Object.entries(i),g=[];if(c){let v=Object.keys(l);for(let x=0;x<v.length;x++)i.hasOwnProperty(v[x])||_.unshift([v[x],pv+"remove"])}_.forEach(([v,x])=>{var y;if((y=r.__r3f)!=null&&y.primitive&&v==="object"||gt.equ(x,l[v]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(v))return g.push([v,x,!0,[]]);let C=[];v.includes("-")&&(C=v.split("-")),g.push([v,x,!1,C]);for(let M in i){let T=i[M];M.startsWith(`${v}-`)&&g.push([M,T,!1,M.split("-")])}});let d=Te({},i);return m!=null&&m.memoizedProps&&m!=null&&m.memoizedProps.args&&(d.args=m.memoizedProps.args),m!=null&&m.memoizedProps&&m!=null&&m.memoizedProps.attach&&(d.attach=m.memoizedProps.attach),{memoized:d,changes:g}}var k1=typeof process!="undefined"&&!1;function hp(r,e){var t;let n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:o,changes:a}=z1(e)?e:vv(r,e),l=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=o);for(let h=0;h<a.length;h++){let[u,f,p,m]=a[h];if(lp(r)){let v="srgb",x="srgb-linear";u==="encoding"?(u="colorSpace",f=f===3001?v:x):u==="outputEncoding"&&(u="outputColorSpace",f=f===3001?v:x)}let _=r,g=_[u];if(m.length&&(g=m.reduce((d,v)=>d[v],r),!(g&&g.set))){let[d,...v]=m.reverse();_=v.reverse().reduce((x,y)=>x[y],r),u=d}if(f===pv+"remove")if(_.constructor){let d=sv.get(_.constructor);d||(d=new _.constructor,sv.set(_.constructor,d)),f=d[u]}else f=0;if(p&&n)f?n.handlers[u]=f:delete n.handlers[u],n.eventCount=Object.keys(n.handlers).length;else if(g&&g.set&&(g.copy||g instanceof Jn)){if(Array.isArray(f))g.fromArray?g.fromArray(f):g.set(...f);else if(g.copy&&f&&f.constructor&&(k1?g.constructor.name===f.constructor.name:g.constructor===f.constructor))g.copy(f);else if(f!==void 0){let d=g instanceof pe;!d&&g.setScalar?g.setScalar(f):g instanceof Jn&&f instanceof Jn?g.mask=f.mask:g.set(f),!hv()&&s&&!s.linear&&d&&g.convertSRGBToLinear()}}else if(_[u]=f,_[u]instanceof wt&&_[u].format===Bt&&_[u].type===In&&s){let d=_[u];lp(d)&&lp(s.gl)?d.colorSpace=s.gl.outputColorSpace:d.encoding=s.gl.outputEncoding}Fs(r)}if(n&&n.parent&&r.raycast&&l!==n.eventCount){let h=Kh(r).getState().internal,u=h.interaction.indexOf(r);u>-1&&h.interaction.splice(u,1),n.eventCount&&h.interaction.push(r)}return!(a.length===1&&a[0][0]==="onUpdate")&&a.length&&(t=r.__r3f)!=null&&t.parent&&vp(r),r}function Fs(r){var e,t;let n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function vp(r){r.onUpdate==null||r.onUpdate(r)}function H1(r,e){r.manual||(uv(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function qh(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function V1(){var r;let e=typeof self!="undefined"&&self||typeof window!="undefined"&&window;if(!e)return gp;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return U1;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return O1;default:return gp}}function xv(r,e,t,n){let i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function G1(r,e){let{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{xv(t.capturedMap,e,n,i)})}function yv(r){function e(l){let{internal:c}=r.getState(),h=l.offsetX-c.initialClick[0],u=l.offsetY-c.initialClick[1];return Math.round(Math.sqrt(h*h+u*u))}function t(l){return l.filter(c=>["Move","Over","Enter","Out","Leave"].some(h=>{var u;return(u=c.__r3f)==null?void 0:u.handlers["onPointer"+h]}))}function n(l,c){let h=r.getState(),u=new Set,f=[],p=c?c(h.internal.interaction):h.internal.interaction;for(let d=0;d<p.length;d++){let v=Us(p[d]);v&&(v.raycaster.camera=void 0)}h.previousRoot||h.events.compute==null||h.events.compute(l,h);function m(d){let v=Us(d);if(!v||!v.events.enabled||v.raycaster.camera===null)return[];if(v.raycaster.camera===void 0){var x;v.events.compute==null||v.events.compute(l,v,(x=v.previousRoot)==null?void 0:x.getState()),v.raycaster.camera===void 0&&(v.raycaster.camera=null)}return v.raycaster.camera?v.raycaster.intersectObject(d,!0):[]}let _=p.flatMap(m).sort((d,v)=>{let x=Us(d.object),y=Us(v.object);return!x||!y?d.distance-v.distance:y.events.priority-x.events.priority||d.distance-v.distance}).filter(d=>{let v=qh(d);return u.has(v)?!1:(u.add(v),!0)});h.events.filter&&(_=h.events.filter(_,h));for(let d of _){let v=d.object;for(;v;){var g;(g=v.__r3f)!=null&&g.eventCount&&f.push(xt(Te({},d),{eventObject:v})),v=v.parent}}if("pointerId"in l&&h.internal.capturedMap.has(l.pointerId))for(let d of h.internal.capturedMap.get(l.pointerId).values())u.has(qh(d.intersection))||f.push(d.intersection);return f}function i(l,c,h,u){let f=r.getState();if(l.length){let p={stopped:!1};for(let m of l){let _=Us(m.object)||f,{raycaster:g,pointer:d,camera:v,internal:x}=_,y=new R(d.x,d.y,0).unproject(v),C=S=>{var b,D;return(b=(D=x.capturedMap.get(S))==null?void 0:D.has(m.eventObject))!=null?b:!1},M=S=>{let b={intersection:m,target:c.target};x.capturedMap.has(S)?x.capturedMap.get(S).set(m.eventObject,b):x.capturedMap.set(S,new Map([[m.eventObject,b]])),c.target.setPointerCapture(S)},T=S=>{let b=x.capturedMap.get(S);b&&xv(x.capturedMap,m.eventObject,b,S)},A={};for(let S in c){let b=c[S];typeof b!="function"&&(A[S]=b)}let L=xt(Te(Te({},m),A),{pointer:d,intersections:l,stopped:p.stopped,delta:h,unprojectedPoint:y,ray:g.ray,camera:v,stopPropagation(){let S="pointerId"in c&&x.capturedMap.get(c.pointerId);if((!S||S.has(m.eventObject))&&(L.stopped=p.stopped=!0,x.hovered.size&&Array.from(x.hovered.values()).find(b=>b.eventObject===m.eventObject))){let b=l.slice(0,l.indexOf(m));s([...b,m])}},target:{hasPointerCapture:C,setPointerCapture:M,releasePointerCapture:T},currentTarget:{hasPointerCapture:C,setPointerCapture:M,releasePointerCapture:T},nativeEvent:c});if(u(L),p.stopped===!0)break}}return l}function s(l){let{internal:c}=r.getState();for(let h of c.hovered.values())if(!l.length||!l.find(u=>u.object===h.object&&u.index===h.index&&u.instanceId===h.instanceId)){let f=h.eventObject.__r3f,p=f==null?void 0:f.handlers;if(c.hovered.delete(qh(h)),f!=null&&f.eventCount){let m=xt(Te({},h),{intersections:l});p.onPointerOut==null||p.onPointerOut(m),p.onPointerLeave==null||p.onPointerLeave(m)}}}function o(l,c){for(let h=0;h<c.length;h++){let u=c[h].__r3f;u==null||u.handlers.onPointerMissed==null||u.handlers.onPointerMissed(l)}}function a(l){switch(l){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return c=>{let{internal:h}=r.getState();"pointerId"in c&&h.capturedMap.has(c.pointerId)&&requestAnimationFrame(()=>{h.capturedMap.has(c.pointerId)&&(h.capturedMap.delete(c.pointerId),s([]))})}}return function(h){let{onPointerMissed:u,internal:f}=r.getState();f.lastEvent.current=h;let p=l==="onPointerMove",m=l==="onClick"||l==="onContextMenu"||l==="onDoubleClick",g=n(h,p?t:void 0),d=m?e(h):0;l==="onPointerDown"&&(f.initialClick=[h.offsetX,h.offsetY],f.initialHits=g.map(x=>x.eventObject)),m&&!g.length&&d<=2&&(o(h,f.interaction),u&&u(h)),p&&s(g);function v(x){let y=x.eventObject,C=y.__r3f,M=C==null?void 0:C.handlers;if(C!=null&&C.eventCount)if(p){if(M.onPointerOver||M.onPointerEnter||M.onPointerOut||M.onPointerLeave){let T=qh(x),A=f.hovered.get(T);A?A.stopped&&x.stopPropagation():(f.hovered.set(T,x),M.onPointerOver==null||M.onPointerOver(x),M.onPointerEnter==null||M.onPointerEnter(x))}M.onPointerMove==null||M.onPointerMove(x)}else{let T=M[l];T?(!m||f.initialHits.includes(y))&&(o(h,f.interaction.filter(A=>!f.initialHits.includes(A))),T(x)):m&&f.initialHits.includes(y)&&o(h,f.interaction.filter(A=>!f.initialHits.includes(A)))}}i(g,h,d,v)}}return{handlePointer:a}}var Sv=r=>!!(r!=null&&r.render),Mp=Ft.createContext(null),W1=(r,e)=>{let t=y0((a,l)=>{let c=new R,h=new R,u=new R;function f(d=l().camera,v=h,x=l().size){let{width:y,height:C,top:M,left:T}=x,A=y/C;v instanceof R?u.copy(v):u.set(...v);let L=d.getWorldPosition(c).distanceTo(u);if(uv(d))return{width:y/d.zoom,height:C/d.zoom,top:M,left:T,factor:1,distance:L,aspect:A};{let S=d.fov*Math.PI/180,b=2*Math.tan(S/2)*L,D=b*(y/C);return{width:D,height:b,top:M,left:T,factor:y/D,distance:L,aspect:A}}}let p,m=d=>a(v=>({performance:xt(Te({},v.performance),{current:d})})),_=new $;return{set:a,get:l,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(d=1)=>r(l(),d),advance:(d,v)=>e(d,v,l()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Xi,pointer:_,mouse:_,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{let d=l();p&&clearTimeout(p),d.performance.current!==d.performance.min&&m(d.performance.min),p=setTimeout(()=>m(l().performance.max),d.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:f},setEvents:d=>a(v=>xt(Te({},v),{events:Te(Te({},v.events),d)})),setSize:(d,v,x,y,C)=>{let M=l().camera,T={width:d,height:v,top:y||0,left:C||0,updateStyle:x};a(A=>({size:T,viewport:Te(Te({},A.viewport),f(M,h,T))}))},setDpr:d=>a(v=>{let x=mv(d);return{viewport:xt(Te({},v.viewport),{dpr:x,initialDpr:v.viewport.initialDpr||x})}}),setFrameloop:(d="always")=>{let v=l().clock;v.stop(),v.elapsedTime=0,d!=="never"&&(v.start(),v.elapsedTime=0),a(()=>({frameloop:d}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:Ft.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(d,v,x)=>{let y=l().internal;return y.priority=y.priority+(v>0?1:0),y.subscribers.push({ref:d,priority:v,store:x}),y.subscribers=y.subscribers.sort((C,M)=>C.priority-M.priority),()=>{let C=l().internal;C!=null&&C.subscribers&&(C.priority=C.priority-(v>0?1:0),C.subscribers=C.subscribers.filter(M=>M.ref!==d))}}}}}),n=t.getState(),i=n.size,s=n.viewport.dpr,o=n.camera;return t.subscribe(()=>{let{camera:a,size:l,viewport:c,gl:h,set:u}=t.getState();if(l.width!==i.width||l.height!==i.height||c.dpr!==s){var f;i=l,s=c.dpr,H1(a,l),h.setPixelRatio(c.dpr);let p=(f=l.updateStyle)!=null?f:typeof HTMLCanvasElement!="undefined"&&h.domElement instanceof HTMLCanvasElement;h.setSize(l.width,l.height,p)}a!==o&&(o=a,u(p=>({viewport:Te(Te({},p.viewport),p.viewport.getCurrentViewport(a))})))}),t.subscribe(a=>r(a)),t};var Zh,X1=new Set,Y1=new Set,q1=new Set;function up(r,e){if(r.size)for(let{callback:t}of r.values())t(e)}function Bs(r,e){switch(r){case"before":return up(X1,e);case"after":return up(Y1,e);case"tail":return up(q1,e)}}var fp,dp;function pp(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),fp=e.internal.subscribers,Zh=0;Zh<fp.length;Zh++)dp=fp[Zh],dp.ref.current(dp.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function Z1(r){let e=!1,t=!1,n,i,s;function o(c){i=requestAnimationFrame(o),e=!0,n=0,Bs("before",c),t=!0;for(let u of r.values()){var h;s=u.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((h=s.gl.xr)!=null&&h.isPresenting)&&(n+=pp(c,s))}if(t=!1,Bs("after",c),n===0)return Bs("tail",c),e=!1,cancelAnimationFrame(i)}function a(c,h=1){var u;if(!c)return r.forEach(f=>a(f.store.getState(),h));(u=c.gl.xr)!=null&&u.isPresenting||!c.internal.active||c.frameloop==="never"||(h>1?c.internal.frames=Math.min(60,c.internal.frames+h):t?c.internal.frames=2:c.internal.frames=1,e||(e=!0,requestAnimationFrame(o)))}function l(c,h=!0,u,f){if(h&&Bs("before",c),u)pp(c,u,f);else for(let p of r.values())pp(c,p.store.getState());h&&Bs("after",c)}return{loop:o,invalidate:a,advance:l}}function Ep(){let r=Ft.useContext(Mp);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function $i(r=t=>t,e){return Ep()(r,e)}function Gr(r,e=0){let t=Ep(),n=t.getState().internal.subscribe,i=bp(r);return zs(()=>n(i,e,t),[e,n,t]),null}var lv=new WeakMap;function bv(r,e){return function(t,...n){let i=lv.get(t);return i||(i=new t,lv.set(t,i)),r&&r(i),Promise.all(n.map(s=>new Promise((o,a)=>i.load(s,l=>{l.scene&&Object.assign(l,gv(l.scene)),o(l)},e,l=>a(new Error(`Could not load ${s}: ${l==null?void 0:l.message}`))))))}}function ga(r,e,t,n){let i=Array.isArray(e)?e:[e],s=M0(bv(t,n),[r,...i],{equal:gt.equ});return Array.isArray(e)?s:s[0]}ga.preload=function(r,e,t){let n=Array.isArray(e)?e:[e];return E0(bv(t),[r,...n])};ga.clear=function(r,e){let t=Array.isArray(e)?e:[e];return T0([r,...t])};var Vr=new Map,{invalidate:xp,advance:yp}=Z1(Vr),{reconciler:pa,applyProps:Hr}=B1(Vr,V1),Os={objects:"shallow",strict:!1},K1=(r,e)=>{let t=typeof r=="function"?r(e):r;return Sv(t)?t:new Uo(Te({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0},r))};function $1(r,e){let t=typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement;if(e){let{width:n,height:i,top:s,left:o,updateStyle:a=t}=e;return{width:n,height:i,top:s,left:o,updateStyle:a}}else if(typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement&&r.parentElement){let{width:n,height:i,top:s,left:o}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:o,updateStyle:t}}else if(typeof OffscreenCanvas!="undefined"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function Tp(r){let e=Vr.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");let i=typeof reportError=="function"?reportError:console.error,s=n||W1(xp,yp),o=t||pa.createContainer(s,N1,null,!1,null,"",i,null);e||Vr.set(r,{fiber:o,store:s});let a,l=!1,c;return{configure(h={}){let{gl:u,size:f,scene:p,events:m,onCreated:_,shadows:g=!1,linear:d=!1,flat:v=!1,legacy:x=!1,orthographic:y=!1,frameloop:C="always",dpr:M=[1,2],performance:T,raycaster:A,camera:L,onPointerMissed:S}=h,b=s.getState(),D=b.gl;b.gl||b.set({gl:D=K1(u,r)});let U=b.raycaster;U||b.set({raycaster:U=new sa});let ie=A||{},{params:O}=ie,X=Zt(ie,["params"]);if(gt.equ(X,U,Os)||Hr(U,Te({},X)),gt.equ(O,U.params,Os)||Hr(U,{params:Te(Te({},U.params),O)}),!b.camera||b.camera===c&&!gt.equ(c,L,Os)){c=L;let se=L instanceof Vi,_e=se?L:y?new pn(0,0,0,0,.1,1e3):new Dt(75,0,.1,1e3);se||(_e.position.z=5,L&&(Hr(_e,L),("aspect"in L||"left"in L||"right"in L||"bottom"in L||"top"in L)&&(_e.manual=!0,_e.updateProjectionMatrix())),!b.camera&&!(L!=null&&L.rotation)&&_e.lookAt(0,0,0)),b.set({camera:_e}),U.camera=_e}if(!b.scene){let se;p instanceof Rr?se=p:(se=new Rr,p&&Hr(se,p)),b.set({scene:Ns(se)})}if(!b.xr){var F;let se=(W,te)=>{let ge=s.getState();ge.frameloop!=="never"&&yp(W,!0,ge,te)},_e=()=>{let W=s.getState();W.gl.xr.enabled=W.gl.xr.isPresenting,W.gl.xr.setAnimationLoop(W.gl.xr.isPresenting?se:null),W.gl.xr.isPresenting||xp(W)},Pe={connect(){let W=s.getState().gl;W.xr.addEventListener("sessionstart",_e),W.xr.addEventListener("sessionend",_e)},disconnect(){let W=s.getState().gl;W.xr.removeEventListener("sessionstart",_e),W.xr.removeEventListener("sessionend",_e)}};typeof((F=D.xr)==null?void 0:F.addEventListener)=="function"&&Pe.connect(),b.set({xr:Pe})}if(D.shadowMap){let se=D.shadowMap.enabled,_e=D.shadowMap.type;if(D.shadowMap.enabled=!!g,gt.boo(g))D.shadowMap.type=Rs;else if(gt.str(g)){var ee;let Pe={basic:Ld,percentage:oa,soft:Rs,variance:wn};D.shadowMap.type=(ee=Pe[g])!=null?ee:Rs}else gt.obj(g)&&Object.assign(D.shadowMap,g);(se!==D.shadowMap.enabled||_e!==D.shadowMap.type)&&(D.shadowMap.needsUpdate=!0)}let G=hv();G&&("enabled"in G?G.enabled=!x:"legacyMode"in G&&(G.legacyMode=x)),l||Hr(D,{outputEncoding:d?3e3:3001,toneMapping:v?kn:Th}),b.legacy!==x&&b.set(()=>({legacy:x})),b.linear!==d&&b.set(()=>({linear:d})),b.flat!==v&&b.set(()=>({flat:v})),u&&!gt.fun(u)&&!Sv(u)&&!gt.equ(u,D,Os)&&Hr(D,u),m&&!b.events.handlers&&b.set({events:m(s)});let oe=$1(r,f);return gt.equ(oe,b.size,Os)||b.setSize(oe.width,oe.height,oe.updateStyle,oe.top,oe.left),M&&b.viewport.dpr!==mv(M)&&b.setDpr(M),b.frameloop!==C&&b.setFrameloop(C),b.onPointerMissed||b.set({onPointerMissed:S}),T&&!gt.equ(T,b.performance,Os)&&b.set(se=>({performance:Te(Te({},se.performance),T)})),a=_,l=!0,this},render(h){return l||this.configure(),pa.updateContainer(cv(J1,{store:s,children:h,onCreated:a,rootElement:r}),o,null,()=>{}),s},unmount(){$h(r)}}}function J1({store:r,children:e,onCreated:t,rootElement:n}){return zs(()=>{let i=r.getState();i.set(s=>({internal:xt(Te({},s.internal),{active:!0})})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),cv(Mp.Provider,{value:r,children:e})}function $h(r,e){let t=Vr.get(r),n=t==null?void 0:t.fiber;if(n){let i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),pa.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,o,a,l;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(o=s.renderLists)==null||o.dispose==null||o.dispose(),(a=i.gl)==null||a.forceContextLoss==null||a.forceContextLoss(),(l=i.gl)!=null&&l.xr&&i.xr.disconnect(),_v(i),Vr.delete(r),e&&e(r)}catch(c){}},500)})}}pa.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:Ft.version});var mp={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function Jh(r){let{handlePointer:e}=yv(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(mp).reduce((t,n)=>xt(Te({},t),{[n]:e(n)}),{}),update:()=>{var t;let{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;let{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(o=>({events:xt(Te({},o.events),{connected:t})})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([o,a])=>{let[l,c]=mp[o];t.addEventListener(l,a,{passive:c})})},disconnect:()=>{let{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,o])=>{if(n&&n.connected instanceof HTMLElement){let[a]=mp[s];n.connected.removeEventListener(a,o)}}),t(s=>({events:xt(Te({},s.events),{connected:void 0})}))}}}}import*as Yt from"react";import{useState as aA,useRef as Iv,useEffect as va,useMemo as lA}from"react";var Mv={},Ev={get exports(){return Mv},set exports(r){Mv=r}};function wp(r,e,t){var n,i,s,o,a;e==null&&(e=100);function l(){var h=Date.now()-o;h<e&&h>=0?n=setTimeout(l,e-h):(n=null,t||(a=r.apply(s,i),s=i=null))}var c=function(){s=this,i=arguments,o=Date.now();var h=t&&!n;return n||(n=setTimeout(l,e)),h&&(a=r.apply(s,i),s=i=null),a};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(a=r.apply(s,i),s=i=null,clearTimeout(n),n=null)},c}wp.debounce=wp;Ev.exports=wp;var Ap=Ev.exports;import*as Rt from"react";var j1=Object.defineProperty,Q1=Object.defineProperties,eA=Object.getOwnPropertyDescriptors,Tv=Object.getOwnPropertySymbols,tA=Object.prototype.hasOwnProperty,nA=Object.prototype.propertyIsEnumerable,wv=(r,e,t)=>e in r?j1(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Av=(r,e)=>{for(var t in e||(e={}))tA.call(e,t)&&wv(r,t,e[t]);if(Tv)for(var t of Tv(e))nA.call(e,t)&&wv(r,t,e[t]);return r},iA=(r,e)=>Q1(r,eA(e));function Cv(r,e,t){if(!r)return;if(t(r)===!0)return r;let n=e?r.return:r.child;for(;n;){let i=Cv(n,e,t);if(i)return i;n=e?null:n.sibling}}function Rv(r){try{return Object.defineProperties(r,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch(e){return r}}var Cp=Rv(Rt.createContext(null)),_a=class extends Rt.Component{render(){return Rt.createElement(Cp.Provider,{value:this._reactInternals},this.props.children)}},{ReactCurrentOwner:rA,ReactCurrentDispatcher:sA}=Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function oA(){let r=Rt.useContext(Cp);if(!r)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");let e=Rt.useId();return Rt.useMemo(()=>{var n;return(n=rA.current)!=null?n:Cv(r,!1,i=>{let s=i.memoizedState;for(;s;){if(s.memoizedState===e)return!0;s=s.next}})},[r,e])}function Pv(){var r,e;let t=oA(),[n]=Rt.useState(()=>new Map);n.clear();let i=t;for(;i;){let s=(r=i.type)==null?void 0:r._context;s&&s!==Cp&&!n.has(s)&&n.set(s,(e=sA.current)==null?void 0:e.readContext(Rv(s))),i=i.return}return Rt.useMemo(()=>Array.from(n.keys()).reduce((s,o)=>a=>Rt.createElement(s,null,Rt.createElement(o.Provider,iA(Av({},a),{value:n.get(o)}))),s=>Rt.createElement(_a,Av({},s))),[n])}import{jsx as wi}from"react/jsx-runtime";import"react-reconciler/constants";import"react-reconciler";function cA({debounce:r,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){let i=t||typeof window!="undefined"&&window.ResizeObserver,[s,o]=aA({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0});if(!i)return s.width=1280,s.height=800,[()=>{},s,()=>{}];let a=Iv({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s,orientationHandler:null}),l=r?typeof r=="number"?r:r.scroll:null,c=r?typeof r=="number"?r:r.resize:null,h=Iv(!1);va(()=>(h.current=!0,()=>void(h.current=!1)));let[u,f,p]=lA(()=>{let d=()=>{if(!a.current.element)return;let{left:v,top:x,width:y,height:C,bottom:M,right:T,x:A,y:L}=a.current.element.getBoundingClientRect(),S={left:v,top:x,width:y,height:C,bottom:M,right:T,x:A,y:L};a.current.element instanceof HTMLElement&&n&&(S.height=a.current.element.offsetHeight,S.width=a.current.element.offsetWidth),Object.freeze(S),h.current&&!dA(a.current.lastBounds,S)&&o(a.current.lastBounds=S)};return[d,c?Ap(d,c):d,l?Ap(d,l):d]},[o,n,l,c]);function m(){a.current.scrollContainers&&(a.current.scrollContainers.forEach(d=>d.removeEventListener("scroll",p,!0)),a.current.scrollContainers=null),a.current.resizeObserver&&(a.current.resizeObserver.disconnect(),a.current.resizeObserver=null),a.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",a.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",a.current.orientationHandler))}function _(){var d;a.current.element&&(a.current.resizeObserver=new i(f),(d=a.current.resizeObserver)==null||d.observe(a.current.element),e&&a.current.scrollContainers&&a.current.scrollContainers.forEach(v=>v.addEventListener("scroll",p,{capture:!0,passive:!0})),a.current.orientationHandler=()=>{p()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",a.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",a.current.orientationHandler))}let g=d=>{!d||d===a.current.element||(m(),a.current.element=d,a.current.scrollContainers=Lv(d),_())};return uA(p,!!e),hA(f),va(()=>{m(),_()},[e,p,f]),va(()=>m,[]),[g,s,u]}function hA(r){va(()=>{let e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function uA(r,e){va(()=>{if(e){let t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function Lv(r){let e=[];if(!r||r===document.body)return e;let{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...Lv(r.parentElement)]}var fA=["x","y","top","bottom","left","right","width","height"],dA=(r,e)=>fA.every(t=>r[t]===e[t]),pA=Yt.forwardRef(function(A,T){var L=A,{children:e,fallback:t,resize:n,style:i,gl:s,events:o=Jh,eventSource:a,eventPrefix:l,shadows:c,linear:h,flat:u,legacy:f,orthographic:p,frameloop:m,dpr:_,performance:g,raycaster:d,camera:v,scene:x,onPointerMissed:y,onCreated:C}=L,M=Zt(L,["children","fallback","resize","style","gl","events","eventSource","eventPrefix","shadows","linear","flat","legacy","orthographic","frameloop","dpr","performance","raycaster","camera","scene","onPointerMissed","onCreated"]);Yt.useMemo(()=>ma(Zi),[]);let S=Pv(),[b,D]=cA(Te({scroll:!0,debounce:{scroll:50,resize:0}},n)),U=Yt.useRef(null),O=Yt.useRef(null);Yt.useImperativeHandle(T,()=>U.current);let X=bp(y),[F,ee]=Yt.useState(!1),[G,oe]=Yt.useState(!1);if(F)throw F;if(G)throw G;let ie=Yt.useRef(null);return zs(()=>{let _e=U.current;D.width>0&&D.height>0&&_e&&(ie.current||(ie.current=Tp(_e)),ie.current.configure({gl:s,events:o,shadows:c,linear:h,flat:u,legacy:f,orthographic:p,frameloop:m,dpr:_,performance:g,raycaster:d,camera:v,scene:x,size:D,onPointerMissed:(...Pe)=>X.current==null?void 0:X.current(...Pe),onCreated:Pe=>{Pe.events.connect==null||Pe.events.connect(a?fv(a)?a.current:a:O.current),l&&Pe.setEvents({compute:(W,te)=>{let ge=W[l+"X"],ce=W[l+"Y"];te.pointer.set(ge/te.size.width*2-1,-(ce/te.size.height)*2+1),te.raycaster.setFromCamera(te.pointer,te.camera)}}),C==null||C(Pe)}}),ie.current.render(wi(S,{children:wi(da,{set:oe,children:wi(Yt.Suspense,{fallback:wi(dv,{set:ee}),children:e})})})))}),Yt.useEffect(()=>{let _e=U.current;if(_e)return()=>$h(_e)},[]),wi("div",xt(Te({ref:O,style:Te({position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:a?"none":"auto"},i)},M),{children:wi("div",{ref:b,style:{width:"100%",height:"100%"},children:wi("canvas",{ref:U,style:{display:"block"},children:t})})}))}),Dv=Yt.forwardRef(function(e,t){return wi(_a,{children:wi(pA,xt(Te({},e),{ref:t}))})});import{jsx as _A}from"react/jsx-runtime";var Ov=({animate:r,uniforms:e,vertexShader:t,fragmentShader:n,onInit:i})=>{let s=gA(()=>{let o=Object.entries(e),a=e.colors,l=Fh(a[0]),c=Fh(a[1]),h=Fh(a[2]),u={uC1r:{value:ti(l==null?void 0:l.r)},uC1g:{value:ti(l==null?void 0:l.g)},uC1b:{value:ti(l==null?void 0:l.b)},uC2r:{value:ti(c==null?void 0:c.r)},uC2g:{value:ti(c==null?void 0:c.g)},uC2b:{value:ti(c==null?void 0:c.b)},uC3r:{value:ti(h==null?void 0:h.r)},uC3g:{value:ti(h==null?void 0:h.g)},uC3b:{value:ti(h==null?void 0:h.b)}},f=o.reduce((m,[_,g])=>{let d=qi.clone({[_]:{value:g}});return Te(Te({},m),d)},{}),p=new Cs({userData:f,metalness:.2,side:Cn,onBeforeCompile:m=>{m.uniforms=Te(Te(Te({},m.uniforms),f),u),m.vertexShader=t,m.fragmentShader=n}});return o.forEach(([m])=>Object.defineProperty(p,m,{get:()=>p.uniforms[m].value,set:_=>p.uniforms[m].value=_})),i&&i(p),p},[e,t,n,i]);return mA(()=>()=>{s.dispose()},[s]),Gr(({clock:o})=>{r==="on"&&s.userData.uTime&&(s.userData.uTime.value=o.getElapsedTime())}),_A("primitive",{attach:"material",object:s})};var Rp=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`;var Pp=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include\uB97C \uD1B5\uD574 \uAC00\uC838\uC628 \uAC12\uC740 \uB300\uBD80\uBD84 \uD658\uACBD, \uBE5B \uB4F1\uC744 \uACC4\uC0B0\uD558\uAE30 \uC704\uD574\uC11C \uAE30\uBCF8 fragment
// shader\uC758 \uAC12\uB4E4\uC744 \uBC1B\uC544\uC654\uC2B5\uB2C8\uB2E4. \uC77C\uB2E8\uC740 \uBB34\uC2DC\uD558\uC154\uB3C4 \uB429\uB2C8\uB2E4.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;

  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(
      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),
      1);
  // diffuseColor\uB294 \uC624\uBE0C\uC81D\uD2B8\uC758 \uBCA0\uC774\uC2A4 \uC0C9\uC0C1 (\uD658\uACBD\uC774\uB098 \uBE5B\uC774 \uACE0\uB824\uB418\uC9C0 \uC54A\uC740 \uBCF8\uC5F0\uC758
  // \uC0C9)

  // mix(x, y, a): a\uB97C \uCD95\uC73C\uB85C \uD588\uC744 \uB54C \uAC00\uC7A5 \uB0AE\uC740 \uAC12\uC5D0\uC11C x\uAC12\uC758 \uC601\uD5A5\uB825\uC744 100%, \uAC00\uC7A5
  // \uB192\uC740 \uAC12\uC5D0\uC11C y\uAC12\uC758 \uC601\uD5A5\uB825\uC744 100%\uB85C \uB9CC\uB4E0\uB2E4. smoothstep(x, y, a): a\uCD95\uC744
  // \uAE30\uC900\uC73C\uB85C x\uB97C \uCD5C\uC18C\uAC12, y\uB97C \uCD5C\uB300\uAC12\uC73C\uB85C \uADF8 \uC0AC\uC774\uC758 \uAC12\uC744 \uCABC\uAC20\uB2E4. x\uC640 y \uC0AC\uC774\uB97C
  // 0-100 \uC0AC\uC774\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uCC98\uB7FC \uB2E8\uACC4\uBCC4\uB85C \uD45C\uD604\uD558\uACE0, x \uBBF8\uB9CC\uC758 \uAC12\uC740 0, y \uC774\uC0C1\uC758
  // \uAC12\uC740 100\uC73C\uB85C \uCC98\uB9AC

  // 1. smoothstep(-3.0, 3.0,vPos.x)\uB85C x\uCD95\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uAC00 \uD45C\uD604 \uB420 \uBC94\uC704\uB97C -3,
  // 3\uC73C\uB85C \uC815\uD55C\uB2E4.
  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))\uB85C color1\uACFC color3\uC744
  // \uC704\uC758 \uBC94\uC704 \uC548\uC5D0\uC11C \uADF8\uB77C\uB514\uC5B8\uD2B8\uB85C \uD45C\uD604\uD55C\uB2E4.
  // \uC608\uB97C \uB4E4\uC5B4 color1\uC774 \uB178\uB791, color3\uC774 \uD30C\uB791\uC774\uB77C\uACE0 \uCE58\uBA74, x\uCD95 \uAE30\uC900 -3\uBD80\uD130 3\uAE4C\uC9C0
  // \uB178\uB791\uACFC \uD30C\uB791 \uC0AC\uC774\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uAC00 \uB098\uD0C0\uB098\uACE0, -3\uBCF4\uB2E4 \uC791\uC740 \uAC12\uC5D0\uC11C\uB294 \uACC4\uC18D \uB178\uB791,
  // 3\uBCF4\uB2E4 \uD070 \uAC12\uC5D0\uC11C\uB294 \uACC4\uC18D \uD30C\uB791\uC774 \uB098\uD0C0\uB09C\uB2E4.
  // 3. mix()\uB97C \uD55C \uBC88 \uB354 \uC0AC\uC6A9\uD574\uC11C \uC704\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uC640 color2\uB97C z\uCD95 \uAE30\uC900\uC73C\uB85C
  // \uBD84\uBC30\uD55C\uB2E4.

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //\uC704\uC5D0\uC11C \uC815\uC758\uD55C diffuseColor\uC5D0 \uD658\uACBD\uC774\uB098 \uBC18\uC0AC\uAC12\uB4E4\uC744 \uBC18\uC601\uD55C \uAC12.
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
                    linearToRelativeLuminance2(reflectedLight.directSpecular +
                                              reflectedLight.indirectSpecular)),
            1.0, metalness);
  #endif


  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>


  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor\uAC00 fragment shader\uB97C \uD1B5\uD574 \uB098\uD0C0\uB098\uB294 \uCD5C\uC885\uAC12\uC73C\uB85C, diffuseColor\uC5D0\uC11C
  // \uC815\uC758\uD55C \uADF8\uB77C\uB514\uC5B8\uD2B8 \uC0C9\uC0C1 \uC704\uC5D0 \uBC18\uC0AC\uB098 \uBE5B\uC744 \uACC4\uC0B0\uD55C \uAC12\uC744 \uCD5C\uC885\uAC12\uC73C\uB85C \uC815\uC758.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); \uC704\uCC98\uB7FC \uCD5C\uC885\uAC12\uC744 \uADF8\uB77C\uB514\uC5B8\uD2B8 \uAC12 \uC790\uCCB4\uB97C \uB123\uC73C\uBA74 \uD658\uACBD
  // \uC601\uD5A5\uC5C6\uB294 \uADF8\uB77C\uB514\uC5B8\uD2B8\uB9CC \uD45C\uD604\uB428.
}
`;var Ip=`// #pragma glslify: pnoise = require(glsl-noise/periodic/3d)

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}


//-------- start here ------------

varying vec3 vNormal;
uniform float uTime;
uniform float uSpeed;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying vec3 vViewPosition;

#define STANDARD
#ifndef FLAT_SHADED
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif

#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>


// rotation
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

void main() {
  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  float distortion =
      pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;
  vec3 pos = position + (normal * distortion);
  float angle = sin(uv.y * uFrequency + t) * uAmplitude;
  pos = rotateY(pos, angle);

  vPos = pos;
  vDistort = distortion;
  vNormal = normal;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`;var Lp=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include\uB97C \uD1B5\uD574 \uAC00\uC838\uC628 \uAC12\uC740 \uB300\uBD80\uBD84 \uD658\uACBD, \uBE5B \uB4F1\uC744 \uACC4\uC0B0\uD558\uAE30 \uC704\uD574\uC11C \uAE30\uBCF8 fragment
// shader\uC758 \uAC12\uB4E4\uC744 \uBC1B\uC544\uC654\uC2B5\uB2C8\uB2E4. \uC77C\uB2E8\uC740 \uBB34\uC2DC\uD558\uC154\uB3C4 \uB429\uB2C8\uB2E4.
varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;
varying vec3 color1;
varying vec3 color2;
varying vec3 color3;
varying float distanceToCenter;


// for npm package, need to add this manually
// 'linearToRelativeLuminance' : function already has a body
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {
  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;
#include <clipping_planes_fragment>

  float distanceToCenter = distance(vPos, vec3(0, 0, 0));
  // distanceToCenter\uB85C \uC911\uC2EC\uC810\uACFC\uC758 \uAC70\uB9AC\uB97C \uAD6C\uD568.

  vec4 diffuseColor =
      vec4(mix(color3, mix(color2, color1, smoothstep(-1.0, 1.0, vPos.y)),
               distanceToCenter),
           1);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
#ifdef TRANSMISSION
  float totalTransmission = transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
// #include <transmissionmap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
  vec3 outgoingLight =
      reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
      reflectedLight.directSpecular + reflectedLight.indirectSpecular;
//\uC704\uC5D0\uC11C \uC815\uC758\uD55C diffuseColor\uC5D0 \uD658\uACBD\uC774\uB098 \uBC18\uC0AC\uAC12\uB4E4\uC744 \uBC18\uC601\uD55C \uAC12.
#ifdef TRANSMISSION
  diffuseColor.a *=
      mix(saturate(1. - totalTransmission +
                   linearToRelativeLuminance2(reflectedLight.directSpecular +
                                             reflectedLight.indirectSpecular)),
          1.0, metalness);
#endif
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor\uAC00 fragment shader\uB97C \uD1B5\uD574 \uB098\uD0C0\uB098\uB294 \uCD5C\uC885\uAC12\uC73C\uB85C, diffuseColor\uC5D0\uC11C
  // \uC815\uC758\uD55C \uADF8\uB77C\uB514\uC5B8\uD2B8 \uC0C9\uC0C1 \uC704\uC5D0 \uBC18\uC0AC\uB098 \uBE5B\uC744 \uACC4\uC0B0\uD55C \uAC12\uC744 \uCD5C\uC885\uAC12\uC73C\uB85C \uC815\uC758.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); \uC704\uCC98\uB7FC \uCD5C\uC885\uAC12\uC744 \uADF8\uB77C\uB514\uC5B8\uD2B8 \uAC12 \uC790\uCCB4\uB97C \uB123\uC73C\uBA74 \uD658\uACBD
  // \uC601\uD5A5\uC5C6\uB294 \uADF8\uB77C\uB514\uC5B8\uD2B8\uB9CC \uD45C\uD604\uB428.

#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}
`;import{jsx as Uv,jsxs as vA}from"react/jsx-runtime";function Nv({animate:r,positionX:e,positionY:t,positionZ:n,rotationX:i,rotationY:s,rotationZ:o,type:a,color1:l,color2:c,color3:h,uTime:u,uSpeed:f,uDensity:p,uStrength:m,uFrequency:_,uAmplitude:g}){return vA("mesh",{name:"shadergradient-mesh",position:[e,t,n],rotation:v0([i,s,o]),children:[Uv(Om,{type:a}),Uv(Ov,{animate:r,uniforms:{colors:[l,c,h],uTime:u,uSpeed:f,uLoadingTime:1,uNoiseDensity:p,uNoiseStrength:m,uFrequency:_,uAmplitude:g,uIntensity:.5},vertexShader:a==="sphere"?Ip:Rp,fragmentShader:a==="sphere"?Lp:Pp,onInit:d=>{console.log("material (onInit)",d)}})]})}import{Suspense as bA}from"react";import xA from"react";var Fv=(r,e)=>({dpr:r,camera:{fov:e},linear:!0,flat:!0,gl:{preserveDrawingBuffer:!0}});var Bv=1,zv=14,Dp={zoom:1,distance:14},Op={zoom:5,distance:14};var jh="https://ruucm.github.io/shadergradient/shadergradient@1.0.0/hdr/";var xa=class extends ea{constructor(e){super(e),this.type=Vn}parse(e){let o=function(A,L){switch(A){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(L||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(L||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(L||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(L||""))}},h=`
`,u=function(A,L,S){L=L||1024;let D=A.pos,U=-1,O=0,X="",F=String.fromCharCode.apply(null,new Uint16Array(A.subarray(D,D+128)));for(;0>(U=F.indexOf(h))&&O<L&&D<A.byteLength;)X+=F,O+=F.length,D+=128,F+=String.fromCharCode.apply(null,new Uint16Array(A.subarray(D,D+128)));return-1<U?(S!==!1&&(A.pos+=O+U+1),X+F.slice(0,U)):!1},f=function(A){let L=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,b=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,O={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},X,F;for((A.pos>=A.byteLength||!(X=u(A)))&&o(1,"no header found"),(F=X.match(L))||o(3,"bad initial token"),O.valid|=1,O.programtype=F[1],O.string+=X+`
`;X=u(A),X!==!1;){if(O.string+=X+`
`,X.charAt(0)==="#"){O.comments+=X+`
`;continue}if((F=X.match(S))&&(O.gamma=parseFloat(F[1])),(F=X.match(b))&&(O.exposure=parseFloat(F[1])),(F=X.match(D))&&(O.valid|=2,O.format=F[1]),(F=X.match(U))&&(O.valid|=4,O.height=parseInt(F[1],10),O.width=parseInt(F[2],10)),O.valid&2&&O.valid&4)break}return O.valid&2||o(3,"missing format specifier"),O.valid&4||o(3,"missing image size specifier"),O},p=function(A,L,S){let b=L;if(b<8||b>32767||A[0]!==2||A[1]!==2||A[2]&128)return new Uint8Array(A);b!==(A[2]<<8|A[3])&&o(3,"wrong scanline width");let D=new Uint8Array(4*L*S);D.length||o(4,"unable to allocate buffer space");let U=0,O=0,X=4*b,F=new Uint8Array(4),ee=new Uint8Array(X),G=S;for(;G>0&&O<A.byteLength;){O+4>A.byteLength&&o(1),F[0]=A[O++],F[1]=A[O++],F[2]=A[O++],F[3]=A[O++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=b)&&o(3,"bad rgbe scanline format");let oe=0,ie;for(;oe<X&&O<A.byteLength;){ie=A[O++];let _e=ie>128;if(_e&&(ie-=128),(ie===0||oe+ie>X)&&o(3,"bad scanline data"),_e){let Pe=A[O++];for(let W=0;W<ie;W++)ee[oe++]=Pe}else ee.set(A.subarray(O,O+ie),oe),oe+=ie,O+=ie}let se=b;for(let _e=0;_e<se;_e++){let Pe=0;D[U]=ee[_e+Pe],Pe+=b,D[U+1]=ee[_e+Pe],Pe+=b,D[U+2]=ee[_e+Pe],Pe+=b,D[U+3]=ee[_e+Pe],U+=4}G--}return D},m=function(A,L,S,b){let D=A[L+3],U=Math.pow(2,D-128)/255;S[b+0]=A[L+0]*U,S[b+1]=A[L+1]*U,S[b+2]=A[L+2]*U,S[b+3]=1},_=function(A,L,S,b){let D=A[L+3],U=Math.pow(2,D-128)/255;S[b+0]=Is.toHalfFloat(Math.min(A[L+0]*U,65504)),S[b+1]=Is.toHalfFloat(Math.min(A[L+1]*U,65504)),S[b+2]=Is.toHalfFloat(Math.min(A[L+2]*U,65504)),S[b+3]=Is.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let d=f(g),v=d.width,x=d.height,y=p(g.subarray(g.pos),v,x),C,M,T;switch(this.type){case Gt:T=y.length/4;let A=new Float32Array(T*4);for(let S=0;S<T;S++)m(y,S*4,A,S*4);C=A,M=Gt;break;case Vn:T=y.length/4;let L=new Uint16Array(T*4);for(let S=0;S<T;S++)_(y,S*4,L,S*4);C=L,M=Vn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:v,height:x,data:C,header:d.string,gamma:d.gamma,exposure:d.exposure,type:M}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case Gt:case Vn:"colorSpace"in o?o.colorSpace="srgb-linear":o.encoding=3e3,o.minFilter=mt,o.magFilter=mt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}};function Qh(r,{path:e}){return ga(xa,r,n=>n.setPath(e))}var yA=r=>r.current&&r.current.isScene,SA=r=>yA(r)?r.current:r;function kv({background:r=!1,envPreset:e}){let t=Qh("city.hdr",{path:jh}),n=Qh("dawn.hdr",{path:jh}),i=Qh("lobby.hdr",{path:jh}),o={city:t,dawn:n,lobby:i}[e],a=$i(c=>c.scene);xA.useLayoutEffect(()=>{if(o){let c=SA(a),h=c.background,u=c.environment;return r!=="only"&&(c.environment=o),r&&(c.background=o),()=>{r!=="only"&&(c.environment=u),r&&(c.background="black")}}},[a,o,r]);let l=o;return l.mapping=Mr,null}import{Fragment as EA,jsx as ya,jsxs as TA}from"react/jsx-runtime";function Hv({lightType:r,brightness:e,envPreset:t}){return TA(EA,{children:[r==="3d"&&ya("ambientLight",{intensity:(e||1)*Math.PI}),r==="env"&&ya(bA,{fallback:ya(MA,{}),children:ya(kv,{envPreset:t,background:!1,loadingCallback:()=>{}})})]})}function MA(){return ya("ambientLight",{intensity:.4})}import{useEffect as RA,useMemo as PA}from"react";var Ai=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},wA=new pn(-1,1,1,-1,0,1),Up=new Ne;Up.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3));Up.setAttribute("uv",new me([0,2,0,0,2,0],2));var eu=class{constructor(e){this._mesh=new ut(Up,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Sa=class extends Ai{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},tu=class extends Ai{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ba=class extends Ai{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qi.clone(e.uniforms),this.material=new Xt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new eu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}};var Np={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};var nu=class{constructor(e,t){if(this.renderer=e,t===void 0){let n={minFilter:mt,magFilter:mt,format:Bt},i=e.getSize(new $);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Np===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),ba===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new ba(Np),this.clock=new Xi}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Sa!==void 0&&(o instanceof Sa?n=!0:o instanceof tu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}};var cP=new pn(-1,1,1,-1,0,1),Vv=new Ne;Vv.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3));Vv.setAttribute("uv",new me([0,2,0,0,2,0],2));var iu=class extends Ai{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}};var St={SKIP:0,ADD:1,ALPHA:2,AVERAGE:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,EXCLUSION:8,LIGHTEN:9,MULTIPLY:10,DIVIDE:11,NEGATION:12,NORMAL:13,OVERLAY:14,REFLECT:15,SCREEN:16,SOFT_LIGHT:17,SUBTRACT:18};var Gv=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x + y, 1.0) * opacity + x * (1.0 - opacity);

}
`;var Wv=`vec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	float a = min(y.a, opacity);

	return vec4(blend(x.rgb, y.rgb, a), max(x.a, a));

}
`;var Xv=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y) * 0.5 * opacity + x * (1.0 - opacity);

}
`;var Yv=`float blend(const in float x, const in float y) {

	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`;var qv=`float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`;var Zv=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x, y) * opacity + x * (1.0 - opacity);

}
`;var Kv=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return abs(x - y) * opacity + x * (1.0 - opacity);

}
`;var $v=`float blend(const in float x, const in float y) {

	return (y > 0.0) ? min(x / y, 1.0) : 1.0;

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`;var Jv=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y - 2.0 * x * y) * opacity + x * (1.0 - opacity);

}
`;var jv=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x, y) * opacity + x * (1.0 - opacity);

}
`;var Qv=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return x * y * opacity + x * (1.0 - opacity);

}
`;var ex=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - abs(1.0 - x - y)) * opacity + x * (1.0 - opacity);

}
`;var tx=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}
`;var nx=`float blend(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`;var ix=`float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`;var rx=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - (1.0 - x) * (1.0 - y)) * opacity + x * (1.0 - opacity);

}
`;var sx=`float blend(const in float x, const in float y) {

	return (y < 0.5) ?
		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :
		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`;var ox=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x + y - 1.0, 0.0) * opacity + x * (1.0 - opacity);

}
`;var AA=new Map([[St.SKIP,null],[St.ADD,Gv],[St.ALPHA,Wv],[St.AVERAGE,Xv],[St.COLOR_BURN,Yv],[St.COLOR_DODGE,qv],[St.DARKEN,Zv],[St.DIFFERENCE,Kv],[St.EXCLUSION,Jv],[St.LIGHTEN,jv],[St.MULTIPLY,Qv],[St.DIVIDE,$v],[St.NEGATION,ex],[St.NORMAL,tx],[St.OVERLAY,nx],[St.REFLECT,ix],[St.SCREEN,rx],[St.SOFT_LIGHT,sx],[St.SUBTRACT,ox]]),Ma=class extends dn{constructor(e,t=1){super(),this.blendFunction=e,this.opacity=new ra(t)}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e,this.dispatchEvent({type:"change"})}getShaderCode(){return AA.get(this.blendFunction)}};var Wr={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:2},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:1},width:{value:20},height:{value:20},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

		varying vec2 vUV;
		varying vec3 vPosition;

		void main() {

			vUV = uv;
			vPosition = position;

			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,fragmentShader:`

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		varying vec3 vPosition;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			// float dist = radius * 0.66;
			float dist = radius * 0.0;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			// res = 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;
			// return 2

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height ) - vec2(vPosition.x, vPosition.y) * 3.0; // - position values to remove black borders.
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;
				// float aa = 0.0;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				
				// add masking before blendColour
				if (colour.r == 0.0) {
					r = 0.0;
				} else {
					r = blendColour( r, colour.r, blending );
				}

				if (colour.g == 0.0) {
					g = 0.0;
				} else {
					g = blendColour( g, colour.g, blending );
				}

				if (colour.b == 0.0) {
					b = 0.0;
				} else {
					b = blendColour( b, colour.b, blending );
				}
				
				
				

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				// add alpha channel to each r, g, b colors
				vec4 vR;
				vec4 vG;
				vec4 vB;
	
				// apply transparent to outside of mesh
				if (r == 0.0 && colour.r == 0.0) {
					vR = vec4( 0, 0, 0, 0 );
				} else {
					vR = vec4( r, 0, 0, 1 );
				}
	
				if (g == 0.0 && colour.g == 0.0) {
					vG = vec4( 0, 0, 0, 0 );
				} else {
					vG = vec4( 0, g, 0, 1 );
				}
	
				if (b == 0.0 && colour.b == 0.0) {
					vB = vec4( 0, 0, 0, 0 );
				} else {
					vB = vec4( 0, 0, b, 1 );
				}

				// gl_FragColor = vec4( r, g, b, 1.0 );
				gl_FragColor = vR + vG + vB;

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`};var ru=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},CA=new pn(-1,1,1,-1,0,1),Fp=new Ne;Fp.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3));Fp.setAttribute("uv",new me([0,2,0,0,2,0],2));var su=class{constructor(e){this._mesh=new ut(Fp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,CA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ax=!0,ou=class extends ru{constructor(e,t,n){super(),Wr===void 0&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=qi.clone(Wr.uniforms),this.material=new Xt({uniforms:this.uniforms,fragmentShader:Wr.fragmentShader,vertexShader:Wr.vertexShader}),ax&&(this.uniforms.width.value=e,this.uniforms.height.value=t),this.uniforms.disable.value=n.disable,this.fsQuad=new su(this.material),this.blendMode=new Ma(St.SCREEN),this.extensions=null}render(e,t,n){this.material.uniforms.tDiffuse.value=n.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){ax&&(this.uniforms.width.value=e,this.uniforms.height.value=t)}initialize(e,t,n){}addEventListener(){}getAttributes(){return this.attributes}getFragmentShader(){return Wr.fragmentShader}getVertexShader(){return Wr.vertexShader}update(e,t,n){}};import{Fragment as IA,jsx as LA}from"react/jsx-runtime";function lx({disable:r=!1}){let{gl:e,scene:t,camera:n,size:i}=$i(),s=PA(()=>{let o=new nu(e);o.addPass(new iu(t,n));let a={shape:1,radius:2,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:1,blending:1,blendingMode:1,greyscale:!1,disable:r},l=new ou(i.width,i.height,a);return o.addPass(l),o},[e,t,n,i,r]);return RA(()=>s==null?void 0:s.setSize(i.width,i.height),[s,i]),Gr((o,a)=>(e.autoClear=!0,void s.render(a)),1),LA(IA,{})}var bt={LEFT:1,RIGHT:2,MIDDLE:4},q=Object.freeze({NONE:0,ROTATE:1,TRUCK:2,OFFSET:4,DOLLY:8,ZOOM:16,TOUCH_ROTATE:32,TOUCH_TRUCK:64,TOUCH_OFFSET:128,TOUCH_DOLLY:256,TOUCH_ZOOM:512,TOUCH_DOLLY_TRUCK:1024,TOUCH_DOLLY_OFFSET:2048,TOUCH_DOLLY_ROTATE:4096,TOUCH_ZOOM_TRUCK:8192,TOUCH_ZOOM_OFFSET:16384,TOUCH_ZOOM_ROTATE:32768}),ks={NONE:0,IN:1,OUT:-1};function Xr(r){return r.isPerspectiveCamera}function Ji(r){return r.isOrthographicCamera}var Hs=Math.PI*2,cx=Math.PI/2,_x=1e-5,Ea=Math.PI/180;function Wn(r,e,t){return Math.max(e,Math.min(t,r))}function _t(r,e=_x){return Math.abs(r)<e}function lt(r,e,t=_x){return _t(r-e,t)}function hx(r,e){return Math.round(r/e)*e}function Ta(r){return isFinite(r)?r:r<0?-Number.MAX_VALUE:Number.MAX_VALUE}function wa(r){return Math.abs(r)<Number.MAX_VALUE?r:r*(1/0)}function au(r,e,t,n,i=1/0,s){n=Math.max(1e-4,n);let o=2/n,a=o*s,l=1/(1+a+.48*a*a+.235*a*a*a),c=r-e,h=e,u=i*n;c=Wn(c,-u,u),e=r-c;let f=(t.value+o*c)*s;t.value=(t.value-o*f)*l;let p=e+(c+f)*l;return h-r>0==p>h&&(p=h,t.value=(p-h)/s),p}function ux(r,e,t,n,i=1/0,s,o){n=Math.max(1e-4,n);let a=2/n,l=a*s,c=1/(1+l+.48*l*l+.235*l*l*l),h=e.x,u=e.y,f=e.z,p=r.x-h,m=r.y-u,_=r.z-f,g=h,d=u,v=f,x=i*n,y=x*x,C=p*p+m*m+_*_;if(C>y){let X=Math.sqrt(C);p=p/X*x,m=m/X*x,_=_/X*x}h=r.x-p,u=r.y-m,f=r.z-_;let M=(t.x+a*p)*s,T=(t.y+a*m)*s,A=(t.z+a*_)*s;t.x=(t.x-a*M)*c,t.y=(t.y-a*T)*c,t.z=(t.z-a*A)*c,o.x=h+(p+M)*c,o.y=u+(m+T)*c,o.z=f+(_+A)*c;let L=g-r.x,S=d-r.y,b=v-r.z,D=o.x-g,U=o.y-d,O=o.z-v;return L*D+S*U+b*O>0&&(o.x=g,o.y=d,o.z=v,t.x=(o.x-g)/s,t.y=(o.y-d)/s,t.z=(o.z-v)/s),o}function Bp(r,e){e.set(0,0),r.forEach(t=>{e.x+=t.clientX,e.y+=t.clientY}),e.x/=r.length,e.y/=r.length}function zp(r,e){return Ji(r)?(console.warn(`${e} is not supported in OrthographicCamera`),!0):!1}var Xp=class{constructor(){this._listeners={}}addEventListener(e,t){let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}removeAllEventListeners(e){if(!e){this._listeners={};return}Array.isArray(this._listeners[e])&&(this._listeners[e].length=0)}dispatchEvent(e){let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e)}}},kp,DA="2.9.0",lu=1/8,OA=/Mac/.test((kp=globalThis==null?void 0:globalThis.navigator)===null||kp===void 0?void 0:kp.platform),ze,fx,cu,Hp,mn,Ze,nt,Vs,Aa,ii,ri,Yr,dx,px,On,Ca,Gs,mx,Vp,gx,Gp,Wp,hu,Ra=class r extends Xp{static install(e){ze=e.THREE,fx=Object.freeze(new ze.Vector3(0,0,0)),cu=Object.freeze(new ze.Vector3(0,1,0)),Hp=Object.freeze(new ze.Vector3(0,0,1)),mn=new ze.Vector2,Ze=new ze.Vector3,nt=new ze.Vector3,Vs=new ze.Vector3,Aa=new ze.Vector3,ii=new ze.Vector3,ri=new ze.Vector3,Yr=new ze.Vector3,dx=new ze.Vector3,px=new ze.Vector3,On=new ze.Spherical,Ca=new ze.Spherical,Gs=new ze.Box3,mx=new ze.Box3,Vp=new ze.Sphere,gx=new ze.Quaternion,Gp=new ze.Quaternion,Wp=new ze.Matrix4,hu=new ze.Raycaster}static get ACTION(){return q}constructor(e,t){super(),this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.minDistance=Number.EPSILON,this.maxDistance=1/0,this.infinityDolly=!1,this.minZoom=.01,this.maxZoom=1/0,this.smoothTime=.25,this.draggingSmoothTime=.125,this.maxSpeed=1/0,this.azimuthRotateSpeed=1,this.polarRotateSpeed=1,this.dollySpeed=1,this.dollyDragInverted=!1,this.truckSpeed=2,this.dollyToCursor=!1,this.dragToOffset=!1,this.verticalDragToForward=!1,this.boundaryFriction=0,this.restThreshold=.01,this.colliderMeshes=[],this.cancel=()=>{},this._enabled=!0,this._state=q.NONE,this._viewport=null,this._changedDolly=0,this._changedZoom=0,this._hasRested=!0,this._boundaryEnclosesCamera=!1,this._needsUpdate=!0,this._updatedLastTime=!1,this._elementRect=new DOMRect,this._isDragging=!1,this._dragNeedsUpdate=!0,this._activePointers=[],this._lockedPointer=null,this._interactiveArea=new DOMRect(0,0,1,1),this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._isUserControllingOffset=!1,this._isUserControllingZoom=!1,this._lastDollyDirection=ks.NONE,this._thetaVelocity={value:0},this._phiVelocity={value:0},this._radiusVelocity={value:0},this._targetVelocity=new ze.Vector3,this._focalOffsetVelocity=new ze.Vector3,this._zoomVelocity={value:0},this._truckInternal=(d,v,x)=>{let y,C;if(Xr(this._camera)){let M=Ze.copy(this._camera.position).sub(this._target),T=this._camera.getEffectiveFOV()*Ea,A=M.length()*Math.tan(T*.5);y=this.truckSpeed*d*A/this._elementRect.height,C=this.truckSpeed*v*A/this._elementRect.height}else if(Ji(this._camera)){let M=this._camera;y=d*(M.right-M.left)/M.zoom/this._elementRect.width,C=v*(M.top-M.bottom)/M.zoom/this._elementRect.height}else return;this.verticalDragToForward?(x?this.setFocalOffset(this._focalOffsetEnd.x+y,this._focalOffsetEnd.y,this._focalOffsetEnd.z,!0):this.truck(y,0,!0),this.forward(-C,!0)):x?this.setFocalOffset(this._focalOffsetEnd.x+y,this._focalOffsetEnd.y+C,this._focalOffsetEnd.z,!0):this.truck(y,C,!0)},this._rotateInternal=(d,v)=>{let x=Hs*this.azimuthRotateSpeed*d/this._elementRect.height,y=Hs*this.polarRotateSpeed*v/this._elementRect.height;this.rotate(x,y,!0)},this._dollyInternal=(d,v,x)=>{let y=Math.pow(.95,-d*this.dollySpeed),C=this._sphericalEnd.radius,M=this._sphericalEnd.radius*y,T=Wn(M,this.minDistance,this.maxDistance),A=T-M;this.infinityDolly&&this.dollyToCursor?this._dollyToNoClamp(M,!0):this.infinityDolly&&!this.dollyToCursor?(this.dollyInFixed(A,!0),this._dollyToNoClamp(T,!0)):this._dollyToNoClamp(T,!0),this.dollyToCursor&&(this._changedDolly+=(this.infinityDolly?M:T)-C,this._dollyControlCoord.set(v,x)),this._lastDollyDirection=Math.sign(-d)},this._zoomInternal=(d,v,x)=>{let y=Math.pow(.95,d*this.dollySpeed),C=this._zoom,M=this._zoom*y;this.zoomTo(M,!0),this.dollyToCursor&&(this._changedZoom+=M-C,this._dollyControlCoord.set(v,x))},typeof ze=="undefined"&&console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."),this._camera=e,this._yAxisUpSpace=new ze.Quaternion().setFromUnitVectors(this._camera.up,cu),this._yAxisUpSpaceInverse=this._yAxisUpSpace.clone().invert(),this._state=q.NONE,this._target=new ze.Vector3,this._targetEnd=this._target.clone(),this._focalOffset=new ze.Vector3,this._focalOffsetEnd=this._focalOffset.clone(),this._spherical=new ze.Spherical().setFromVector3(Ze.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)),this._sphericalEnd=this._spherical.clone(),this._lastDistance=this._spherical.radius,this._zoom=this._camera.zoom,this._zoomEnd=this._zoom,this._lastZoom=this._zoom,this._nearPlaneCorners=[new ze.Vector3,new ze.Vector3,new ze.Vector3,new ze.Vector3],this._updateNearPlaneCorners(),this._boundary=new ze.Box3(new ze.Vector3(-1/0,-1/0,-1/0),new ze.Vector3(1/0,1/0,1/0)),this._cameraUp0=this._camera.up.clone(),this._target0=this._target.clone(),this._position0=this._camera.position.clone(),this._zoom0=this._zoom,this._focalOffset0=this._focalOffset.clone(),this._dollyControlCoord=new ze.Vector2,this.mouseButtons={left:q.ROTATE,middle:q.DOLLY,right:q.TRUCK,wheel:Xr(this._camera)?q.DOLLY:Ji(this._camera)?q.ZOOM:q.NONE},this.touches={one:q.TOUCH_ROTATE,two:Xr(this._camera)?q.TOUCH_DOLLY_TRUCK:Ji(this._camera)?q.TOUCH_ZOOM_TRUCK:q.NONE,three:q.TOUCH_TRUCK};let n=new ze.Vector2,i=new ze.Vector2,s=new ze.Vector2,o=d=>{if(!this._enabled||!this._domElement)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){let y=this._domElement.getBoundingClientRect(),C=d.clientX/y.width,M=d.clientY/y.height;if(C<this._interactiveArea.left||C>this._interactiveArea.right||M<this._interactiveArea.top||M>this._interactiveArea.bottom)return}let v=d.pointerType!=="mouse"?null:(d.buttons&bt.LEFT)===bt.LEFT?bt.LEFT:(d.buttons&bt.MIDDLE)===bt.MIDDLE?bt.MIDDLE:(d.buttons&bt.RIGHT)===bt.RIGHT?bt.RIGHT:null;if(v!==null){let y=this._findPointerByMouseButton(v);y&&this._disposePointer(y)}if((d.buttons&bt.LEFT)===bt.LEFT&&this._lockedPointer)return;let x={pointerId:d.pointerId,clientX:d.clientX,clientY:d.clientY,deltaX:0,deltaY:0,mouseButton:v};this._activePointers.push(x),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l),this._domElement.ownerDocument.addEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",l),this._isDragging=!0,f(d)},a=d=>{d.cancelable&&d.preventDefault();let v=d.pointerId,x=this._lockedPointer||this._findPointerById(v);if(x){if(x.clientX=d.clientX,x.clientY=d.clientY,x.deltaX=d.movementX,x.deltaY=d.movementY,this._state=0,d.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else(!this._isDragging&&this._lockedPointer||this._isDragging&&(d.buttons&bt.LEFT)===bt.LEFT)&&(this._state=this._state|this.mouseButtons.left),this._isDragging&&(d.buttons&bt.MIDDLE)===bt.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),this._isDragging&&(d.buttons&bt.RIGHT)===bt.RIGHT&&(this._state=this._state|this.mouseButtons.right);p()}},l=d=>{let v=this._findPointerById(d.pointerId);if(!(v&&v===this._lockedPointer)){if(v&&this._disposePointer(v),d.pointerType==="touch")switch(this._activePointers.length){case 0:this._state=q.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=q.NONE;m()}},c=-1,h=d=>{if(!this._domElement||!this._enabled||this.mouseButtons.wheel===q.NONE)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){let M=this._domElement.getBoundingClientRect(),T=d.clientX/M.width,A=d.clientY/M.height;if(T<this._interactiveArea.left||T>this._interactiveArea.right||A<this._interactiveArea.top||A>this._interactiveArea.bottom)return}if(d.preventDefault(),this.dollyToCursor||this.mouseButtons.wheel===q.ROTATE||this.mouseButtons.wheel===q.TRUCK){let M=performance.now();c-M<1e3&&this._getClientRect(this._elementRect),c=M}let v=OA?-1:-3,x=d.deltaMode===1?d.deltaY/v:d.deltaY/(v*10),y=this.dollyToCursor?(d.clientX-this._elementRect.x)/this._elementRect.width*2-1:0,C=this.dollyToCursor?(d.clientY-this._elementRect.y)/this._elementRect.height*-2+1:0;switch(this.mouseButtons.wheel){case q.ROTATE:{this._rotateInternal(d.deltaX,d.deltaY),this._isUserControllingRotate=!0;break}case q.TRUCK:{this._truckInternal(d.deltaX,d.deltaY,!1),this._isUserControllingTruck=!0;break}case q.OFFSET:{this._truckInternal(d.deltaX,d.deltaY,!0),this._isUserControllingOffset=!0;break}case q.DOLLY:{this._dollyInternal(-x,y,C),this._isUserControllingDolly=!0;break}case q.ZOOM:{this._zoomInternal(-x,y,C),this._isUserControllingZoom=!0;break}}this.dispatchEvent({type:"control"})},u=d=>{if(!(!this._domElement||!this._enabled)){if(this.mouseButtons.right===r.ACTION.NONE){let v=d instanceof PointerEvent?d.pointerId:0,x=this._findPointerById(v);x&&this._disposePointer(x),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l);return}d.preventDefault()}},f=d=>{if(!this._enabled)return;if(Bp(this._activePointers,mn),this._getClientRect(this._elementRect),n.copy(mn),i.copy(mn),this._activePointers.length>=2){let x=mn.x-this._activePointers[1].clientX,y=mn.y-this._activePointers[1].clientY,C=Math.sqrt(x*x+y*y);s.set(0,C);let M=(this._activePointers[0].clientX+this._activePointers[1].clientX)*.5,T=(this._activePointers[0].clientY+this._activePointers[1].clientY)*.5;i.set(M,T)}if(this._state=0,!d)this._lockedPointer&&(this._state=this._state|this.mouseButtons.left);else if("pointerType"in d&&d.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else!this._lockedPointer&&(d.buttons&bt.LEFT)===bt.LEFT&&(this._state=this._state|this.mouseButtons.left),(d.buttons&bt.MIDDLE)===bt.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(d.buttons&bt.RIGHT)===bt.RIGHT&&(this._state=this._state|this.mouseButtons.right);((this._state&q.ROTATE)===q.ROTATE||(this._state&q.TOUCH_ROTATE)===q.TOUCH_ROTATE||(this._state&q.TOUCH_DOLLY_ROTATE)===q.TOUCH_DOLLY_ROTATE||(this._state&q.TOUCH_ZOOM_ROTATE)===q.TOUCH_ZOOM_ROTATE)&&(this._sphericalEnd.theta=this._spherical.theta,this._sphericalEnd.phi=this._spherical.phi,this._thetaVelocity.value=0,this._phiVelocity.value=0),((this._state&q.TRUCK)===q.TRUCK||(this._state&q.TOUCH_TRUCK)===q.TOUCH_TRUCK||(this._state&q.TOUCH_DOLLY_TRUCK)===q.TOUCH_DOLLY_TRUCK||(this._state&q.TOUCH_ZOOM_TRUCK)===q.TOUCH_ZOOM_TRUCK)&&(this._targetEnd.copy(this._target),this._targetVelocity.set(0,0,0)),((this._state&q.DOLLY)===q.DOLLY||(this._state&q.TOUCH_DOLLY)===q.TOUCH_DOLLY||(this._state&q.TOUCH_DOLLY_TRUCK)===q.TOUCH_DOLLY_TRUCK||(this._state&q.TOUCH_DOLLY_OFFSET)===q.TOUCH_DOLLY_OFFSET||(this._state&q.TOUCH_DOLLY_ROTATE)===q.TOUCH_DOLLY_ROTATE)&&(this._sphericalEnd.radius=this._spherical.radius,this._radiusVelocity.value=0),((this._state&q.ZOOM)===q.ZOOM||(this._state&q.TOUCH_ZOOM)===q.TOUCH_ZOOM||(this._state&q.TOUCH_ZOOM_TRUCK)===q.TOUCH_ZOOM_TRUCK||(this._state&q.TOUCH_ZOOM_OFFSET)===q.TOUCH_ZOOM_OFFSET||(this._state&q.TOUCH_ZOOM_ROTATE)===q.TOUCH_ZOOM_ROTATE)&&(this._zoomEnd=this._zoom,this._zoomVelocity.value=0),((this._state&q.OFFSET)===q.OFFSET||(this._state&q.TOUCH_OFFSET)===q.TOUCH_OFFSET||(this._state&q.TOUCH_DOLLY_OFFSET)===q.TOUCH_DOLLY_OFFSET||(this._state&q.TOUCH_ZOOM_OFFSET)===q.TOUCH_ZOOM_OFFSET)&&(this._focalOffsetEnd.copy(this._focalOffset),this._focalOffsetVelocity.set(0,0,0)),this.dispatchEvent({type:"controlstart"})},p=()=>{if(!this._enabled||!this._dragNeedsUpdate)return;this._dragNeedsUpdate=!1,Bp(this._activePointers,mn);let v=this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement?this._lockedPointer||this._activePointers[0]:null,x=v?-v.deltaX:i.x-mn.x,y=v?-v.deltaY:i.y-mn.y;if(i.copy(mn),((this._state&q.ROTATE)===q.ROTATE||(this._state&q.TOUCH_ROTATE)===q.TOUCH_ROTATE||(this._state&q.TOUCH_DOLLY_ROTATE)===q.TOUCH_DOLLY_ROTATE||(this._state&q.TOUCH_ZOOM_ROTATE)===q.TOUCH_ZOOM_ROTATE)&&(this._rotateInternal(x,y),this._isUserControllingRotate=!0),(this._state&q.DOLLY)===q.DOLLY||(this._state&q.ZOOM)===q.ZOOM){let C=this.dollyToCursor?(n.x-this._elementRect.x)/this._elementRect.width*2-1:0,M=this.dollyToCursor?(n.y-this._elementRect.y)/this._elementRect.height*-2+1:0,T=this.dollyDragInverted?-1:1;(this._state&q.DOLLY)===q.DOLLY?(this._dollyInternal(T*y*lu,C,M),this._isUserControllingDolly=!0):(this._zoomInternal(T*y*lu,C,M),this._isUserControllingZoom=!0)}if((this._state&q.TOUCH_DOLLY)===q.TOUCH_DOLLY||(this._state&q.TOUCH_ZOOM)===q.TOUCH_ZOOM||(this._state&q.TOUCH_DOLLY_TRUCK)===q.TOUCH_DOLLY_TRUCK||(this._state&q.TOUCH_ZOOM_TRUCK)===q.TOUCH_ZOOM_TRUCK||(this._state&q.TOUCH_DOLLY_OFFSET)===q.TOUCH_DOLLY_OFFSET||(this._state&q.TOUCH_ZOOM_OFFSET)===q.TOUCH_ZOOM_OFFSET||(this._state&q.TOUCH_DOLLY_ROTATE)===q.TOUCH_DOLLY_ROTATE||(this._state&q.TOUCH_ZOOM_ROTATE)===q.TOUCH_ZOOM_ROTATE){let C=mn.x-this._activePointers[1].clientX,M=mn.y-this._activePointers[1].clientY,T=Math.sqrt(C*C+M*M),A=s.y-T;s.set(0,T);let L=this.dollyToCursor?(i.x-this._elementRect.x)/this._elementRect.width*2-1:0,S=this.dollyToCursor?(i.y-this._elementRect.y)/this._elementRect.height*-2+1:0;(this._state&q.TOUCH_DOLLY)===q.TOUCH_DOLLY||(this._state&q.TOUCH_DOLLY_ROTATE)===q.TOUCH_DOLLY_ROTATE||(this._state&q.TOUCH_DOLLY_TRUCK)===q.TOUCH_DOLLY_TRUCK||(this._state&q.TOUCH_DOLLY_OFFSET)===q.TOUCH_DOLLY_OFFSET?(this._dollyInternal(A*lu,L,S),this._isUserControllingDolly=!0):(this._zoomInternal(A*lu,L,S),this._isUserControllingZoom=!0)}((this._state&q.TRUCK)===q.TRUCK||(this._state&q.TOUCH_TRUCK)===q.TOUCH_TRUCK||(this._state&q.TOUCH_DOLLY_TRUCK)===q.TOUCH_DOLLY_TRUCK||(this._state&q.TOUCH_ZOOM_TRUCK)===q.TOUCH_ZOOM_TRUCK)&&(this._truckInternal(x,y,!1),this._isUserControllingTruck=!0),((this._state&q.OFFSET)===q.OFFSET||(this._state&q.TOUCH_OFFSET)===q.TOUCH_OFFSET||(this._state&q.TOUCH_DOLLY_OFFSET)===q.TOUCH_DOLLY_OFFSET||(this._state&q.TOUCH_ZOOM_OFFSET)===q.TOUCH_ZOOM_OFFSET)&&(this._truckInternal(x,y,!0),this._isUserControllingOffset=!0),this.dispatchEvent({type:"control"})},m=()=>{Bp(this._activePointers,mn),i.copy(mn),this._dragNeedsUpdate=!1,(this._activePointers.length===0||this._activePointers.length===1&&this._activePointers[0]===this._lockedPointer)&&(this._isDragging=!1),this._activePointers.length===0&&this._domElement&&(this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l),this.dispatchEvent({type:"controlend"}))};this.lockPointer=()=>{!this._enabled||!this._domElement||(this.cancel(),this._lockedPointer={pointerId:-1,clientX:0,clientY:0,deltaX:0,deltaY:0,mouseButton:null},this._activePointers.push(this._lockedPointer),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l),this._domElement.requestPointerLock(),this._domElement.ownerDocument.addEventListener("pointerlockchange",_),this._domElement.ownerDocument.addEventListener("pointerlockerror",g),this._domElement.ownerDocument.addEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",l),f())},this.unlockPointer=()=>{var d,v,x;this._lockedPointer!==null&&(this._disposePointer(this._lockedPointer),this._lockedPointer=null),(d=this._domElement)===null||d===void 0||d.ownerDocument.exitPointerLock(),(v=this._domElement)===null||v===void 0||v.ownerDocument.removeEventListener("pointerlockchange",_),(x=this._domElement)===null||x===void 0||x.ownerDocument.removeEventListener("pointerlockerror",g),this.cancel()};let _=()=>{this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement||this.unlockPointer()},g=()=>{this.unlockPointer()};this._addAllEventListeners=d=>{this._domElement=d,this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none",this._domElement.addEventListener("pointerdown",o),this._domElement.addEventListener("pointercancel",l),this._domElement.addEventListener("wheel",h,{passive:!1}),this._domElement.addEventListener("contextmenu",u)},this._removeAllEventListeners=()=>{this._domElement&&(this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect="",this._domElement.removeEventListener("pointerdown",o),this._domElement.removeEventListener("pointercancel",l),this._domElement.removeEventListener("wheel",h,{passive:!1}),this._domElement.removeEventListener("contextmenu",u),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l),this._domElement.ownerDocument.removeEventListener("pointerlockchange",_),this._domElement.ownerDocument.removeEventListener("pointerlockerror",g))},this.cancel=()=>{this._state!==q.NONE&&(this._state=q.NONE,this._activePointers.length=0,m())},t&&this.connect(t),this.update(0)}get camera(){return this._camera}set camera(e){this._camera=e,this.updateCameraUp(),this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._domElement&&(e?(this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none"):(this.cancel(),this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect=""))}get active(){return!this._hasRested}get currentAction(){return this._state}get distance(){return this._spherical.radius}set distance(e){this._spherical.radius===e&&this._sphericalEnd.radius===e||(this._spherical.radius=e,this._sphericalEnd.radius=e,this._needsUpdate=!0)}get azimuthAngle(){return this._spherical.theta}set azimuthAngle(e){this._spherical.theta===e&&this._sphericalEnd.theta===e||(this._spherical.theta=e,this._sphericalEnd.theta=e,this._needsUpdate=!0)}get polarAngle(){return this._spherical.phi}set polarAngle(e){this._spherical.phi===e&&this._sphericalEnd.phi===e||(this._spherical.phi=e,this._sphericalEnd.phi=e,this._needsUpdate=!0)}get boundaryEnclosesCamera(){return this._boundaryEnclosesCamera}set boundaryEnclosesCamera(e){this._boundaryEnclosesCamera=e,this._needsUpdate=!0}set interactiveArea(e){this._interactiveArea.width=Wn(e.width,0,1),this._interactiveArea.height=Wn(e.height,0,1),this._interactiveArea.x=Wn(e.x,0,1-this._interactiveArea.width),this._interactiveArea.y=Wn(e.y,0,1-this._interactiveArea.height)}addEventListener(e,t){super.addEventListener(e,t)}removeEventListener(e,t){super.removeEventListener(e,t)}rotate(e,t,n=!1){return this.rotateTo(this._sphericalEnd.theta+e,this._sphericalEnd.phi+t,n)}rotateAzimuthTo(e,t=!1){return this.rotateTo(e,this._sphericalEnd.phi,t)}rotatePolarTo(e,t=!1){return this.rotateTo(this._sphericalEnd.theta,e,t)}rotateTo(e,t,n=!1){this._isUserControllingRotate=!1;let i=Wn(e,this.minAzimuthAngle,this.maxAzimuthAngle),s=Wn(t,this.minPolarAngle,this.maxPolarAngle);this._sphericalEnd.theta=i,this._sphericalEnd.phi=s,this._sphericalEnd.makeSafe(),this._needsUpdate=!0,n||(this._spherical.theta=this._sphericalEnd.theta,this._spherical.phi=this._sphericalEnd.phi);let o=!n||lt(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&lt(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold);return this._createOnRestPromise(o)}dolly(e,t=!1){return this.dollyTo(this._sphericalEnd.radius-e,t)}dollyTo(e,t=!1){return this._isUserControllingDolly=!1,this._lastDollyDirection=ks.NONE,this._changedDolly=0,this._dollyToNoClamp(Wn(e,this.minDistance,this.maxDistance),t)}_dollyToNoClamp(e,t=!1){let n=this._sphericalEnd.radius;if(this.colliderMeshes.length>=1){let o=this._collisionTest(),a=lt(o,this._spherical.radius);if(!(n>e)&&a)return Promise.resolve();this._sphericalEnd.radius=Math.min(e,o)}else this._sphericalEnd.radius=e;this._needsUpdate=!0,t||(this._spherical.radius=this._sphericalEnd.radius);let s=!t||lt(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(s)}dollyInFixed(e,t=!1){this._targetEnd.add(this._getCameraDirection(Aa).multiplyScalar(e)),t||this._target.copy(this._targetEnd);let n=!t||lt(this._target.x,this._targetEnd.x,this.restThreshold)&&lt(this._target.y,this._targetEnd.y,this.restThreshold)&&lt(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(n)}zoom(e,t=!1){return this.zoomTo(this._zoomEnd+e,t)}zoomTo(e,t=!1){this._isUserControllingZoom=!1,this._zoomEnd=Wn(e,this.minZoom,this.maxZoom),this._needsUpdate=!0,t||(this._zoom=this._zoomEnd);let n=!t||lt(this._zoom,this._zoomEnd,this.restThreshold);return this._changedZoom=0,this._createOnRestPromise(n)}pan(e,t,n=!1){return console.warn("`pan` has been renamed to `truck`"),this.truck(e,t,n)}truck(e,t,n=!1){this._camera.updateMatrix(),ii.setFromMatrixColumn(this._camera.matrix,0),ri.setFromMatrixColumn(this._camera.matrix,1),ii.multiplyScalar(e),ri.multiplyScalar(-t);let i=Ze.copy(ii).add(ri),s=nt.copy(this._targetEnd).add(i);return this.moveTo(s.x,s.y,s.z,n)}forward(e,t=!1){Ze.setFromMatrixColumn(this._camera.matrix,0),Ze.crossVectors(this._camera.up,Ze),Ze.multiplyScalar(e);let n=nt.copy(this._targetEnd).add(Ze);return this.moveTo(n.x,n.y,n.z,t)}elevate(e,t=!1){return Ze.copy(this._camera.up).multiplyScalar(e),this.moveTo(this._targetEnd.x+Ze.x,this._targetEnd.y+Ze.y,this._targetEnd.z+Ze.z,t)}moveTo(e,t,n,i=!1){this._isUserControllingTruck=!1;let s=Ze.set(e,t,n).sub(this._targetEnd);this._encloseToBoundary(this._targetEnd,s,this.boundaryFriction),this._needsUpdate=!0,i||this._target.copy(this._targetEnd);let o=!i||lt(this._target.x,this._targetEnd.x,this.restThreshold)&&lt(this._target.y,this._targetEnd.y,this.restThreshold)&&lt(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(o)}lookInDirectionOf(e,t,n,i=!1){let a=Ze.set(e,t,n).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);return this.setPosition(a.x,a.y,a.z,i)}fitToBox(e,t,{cover:n=!1,paddingLeft:i=0,paddingRight:s=0,paddingBottom:o=0,paddingTop:a=0}={}){let l=[],c=e.isBox3?Gs.copy(e):Gs.setFromObject(e);c.isEmpty()&&(console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"),Promise.resolve());let h=hx(this._sphericalEnd.theta,cx),u=hx(this._sphericalEnd.phi,cx);l.push(this.rotateTo(h,u,t));let f=Ze.setFromSpherical(this._sphericalEnd).normalize(),p=gx.setFromUnitVectors(f,Hp),m=lt(Math.abs(f.y),1);m&&p.multiply(Gp.setFromAxisAngle(cu,h)),p.multiply(this._yAxisUpSpaceInverse);let _=mx.makeEmpty();nt.copy(c.min).applyQuaternion(p),_.expandByPoint(nt),nt.copy(c.min).setX(c.max.x).applyQuaternion(p),_.expandByPoint(nt),nt.copy(c.min).setY(c.max.y).applyQuaternion(p),_.expandByPoint(nt),nt.copy(c.max).setZ(c.min.z).applyQuaternion(p),_.expandByPoint(nt),nt.copy(c.min).setZ(c.max.z).applyQuaternion(p),_.expandByPoint(nt),nt.copy(c.max).setY(c.min.y).applyQuaternion(p),_.expandByPoint(nt),nt.copy(c.max).setX(c.min.x).applyQuaternion(p),_.expandByPoint(nt),nt.copy(c.max).applyQuaternion(p),_.expandByPoint(nt),_.min.x-=i,_.min.y-=o,_.max.x+=s,_.max.y+=a,p.setFromUnitVectors(Hp,f),m&&p.premultiply(Gp.invert()),p.premultiply(this._yAxisUpSpace);let g=_.getSize(Ze),d=_.getCenter(nt).applyQuaternion(p);if(Xr(this._camera)){let v=this.getDistanceToFitBox(g.x,g.y,g.z,n);l.push(this.moveTo(d.x,d.y,d.z,t)),l.push(this.dollyTo(v,t)),l.push(this.setFocalOffset(0,0,0,t))}else if(Ji(this._camera)){let v=this._camera,x=v.right-v.left,y=v.top-v.bottom,C=n?Math.max(x/g.x,y/g.y):Math.min(x/g.x,y/g.y);l.push(this.moveTo(d.x,d.y,d.z,t)),l.push(this.zoomTo(C,t)),l.push(this.setFocalOffset(0,0,0,t))}return Promise.all(l)}fitToSphere(e,t){let n=[],s="isObject3D"in e?r.createBoundingSphere(e,Vp):Vp.copy(e);if(n.push(this.moveTo(s.center.x,s.center.y,s.center.z,t)),Xr(this._camera)){let o=this.getDistanceToFitSphere(s.radius);n.push(this.dollyTo(o,t))}else if(Ji(this._camera)){let o=this._camera.right-this._camera.left,a=this._camera.top-this._camera.bottom,l=2*s.radius,c=Math.min(o/l,a/l);n.push(this.zoomTo(c,t))}return n.push(this.setFocalOffset(0,0,0,t)),Promise.all(n)}setLookAt(e,t,n,i,s,o,a=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=ks.NONE,this._changedDolly=0;let l=nt.set(i,s,o),c=Ze.set(e,t,n);this._targetEnd.copy(l),this._sphericalEnd.setFromVector3(c.sub(l).applyQuaternion(this._yAxisUpSpace)),this.normalizeRotations(),this._needsUpdate=!0,a||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let h=!a||lt(this._target.x,this._targetEnd.x,this.restThreshold)&&lt(this._target.y,this._targetEnd.y,this.restThreshold)&&lt(this._target.z,this._targetEnd.z,this.restThreshold)&&lt(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&lt(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&lt(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(h)}lerpLookAt(e,t,n,i,s,o,a,l,c,h,u,f,p,m=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=ks.NONE,this._changedDolly=0;let _=Ze.set(i,s,o),g=nt.set(e,t,n);On.setFromVector3(g.sub(_).applyQuaternion(this._yAxisUpSpace));let d=Vs.set(h,u,f),v=nt.set(a,l,c);Ca.setFromVector3(v.sub(d).applyQuaternion(this._yAxisUpSpace)),this._targetEnd.copy(_.lerp(d,p));let x=Ca.theta-On.theta,y=Ca.phi-On.phi,C=Ca.radius-On.radius;this._sphericalEnd.set(On.radius+C*p,On.phi+y*p,On.theta+x*p),this.normalizeRotations(),this._needsUpdate=!0,m||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let M=!m||lt(this._target.x,this._targetEnd.x,this.restThreshold)&&lt(this._target.y,this._targetEnd.y,this.restThreshold)&&lt(this._target.z,this._targetEnd.z,this.restThreshold)&&lt(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&lt(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&lt(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(M)}setPosition(e,t,n,i=!1){return this.setLookAt(e,t,n,this._targetEnd.x,this._targetEnd.y,this._targetEnd.z,i)}setTarget(e,t,n,i=!1){let s=this.getPosition(Ze),o=this.setLookAt(s.x,s.y,s.z,e,t,n,i);return this._sphericalEnd.phi=Wn(this._sphericalEnd.phi,this.minPolarAngle,this.maxPolarAngle),o}setFocalOffset(e,t,n,i=!1){this._isUserControllingOffset=!1,this._focalOffsetEnd.set(e,t,n),this._needsUpdate=!0,i||this._focalOffset.copy(this._focalOffsetEnd);let s=!i||lt(this._focalOffset.x,this._focalOffsetEnd.x,this.restThreshold)&&lt(this._focalOffset.y,this._focalOffsetEnd.y,this.restThreshold)&&lt(this._focalOffset.z,this._focalOffsetEnd.z,this.restThreshold);return this._createOnRestPromise(s)}setOrbitPoint(e,t,n){this._camera.updateMatrixWorld(),ii.setFromMatrixColumn(this._camera.matrixWorldInverse,0),ri.setFromMatrixColumn(this._camera.matrixWorldInverse,1),Yr.setFromMatrixColumn(this._camera.matrixWorldInverse,2);let i=Ze.set(e,t,n),s=i.distanceTo(this._camera.position),o=i.sub(this._camera.position);ii.multiplyScalar(o.x),ri.multiplyScalar(o.y),Yr.multiplyScalar(o.z),Ze.copy(ii).add(ri).add(Yr),Ze.z=Ze.z+s,this.dollyTo(s,!1),this.setFocalOffset(-Ze.x,Ze.y,-Ze.z,!1),this.moveTo(e,t,n,!1)}setBoundary(e){if(!e){this._boundary.min.set(-1/0,-1/0,-1/0),this._boundary.max.set(1/0,1/0,1/0),this._needsUpdate=!0;return}this._boundary.copy(e),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._needsUpdate=!0}setViewport(e,t,n,i){if(e===null){this._viewport=null;return}this._viewport=this._viewport||new ze.Vector4,typeof e=="number"?this._viewport.set(e,t,n,i):this._viewport.copy(e)}getDistanceToFitBox(e,t,n,i=!1){if(zp(this._camera,"getDistanceToFitBox"))return this._spherical.radius;let s=e/t,o=this._camera.getEffectiveFOV()*Ea,a=this._camera.aspect;return((i?s>a:s<a)?t:e/a)*.5/Math.tan(o*.5)+n*.5}getDistanceToFitSphere(e){if(zp(this._camera,"getDistanceToFitSphere"))return this._spherical.radius;let t=this._camera.getEffectiveFOV()*Ea,n=Math.atan(Math.tan(t*.5)*this._camera.aspect)*2,i=1<this._camera.aspect?t:n;return e/Math.sin(i*.5)}getTarget(e,t=!0){return(e&&e.isVector3?e:new ze.Vector3).copy(t?this._targetEnd:this._target)}getPosition(e,t=!0){return(e&&e.isVector3?e:new ze.Vector3).setFromSpherical(t?this._sphericalEnd:this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(t?this._targetEnd:this._target)}getSpherical(e,t=!0){return(e||new ze.Spherical).copy(t?this._sphericalEnd:this._spherical)}getFocalOffset(e,t=!0){return(e&&e.isVector3?e:new ze.Vector3).copy(t?this._focalOffsetEnd:this._focalOffset)}normalizeRotations(){this._sphericalEnd.theta=this._sphericalEnd.theta%Hs,this._sphericalEnd.theta<0&&(this._sphericalEnd.theta+=Hs),this._spherical.theta+=Hs*Math.round((this._sphericalEnd.theta-this._spherical.theta)/Hs)}stop(){this._focalOffset.copy(this._focalOffsetEnd),this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd),this._zoom=this._zoomEnd}reset(e=!1){if(!lt(this._camera.up.x,this._cameraUp0.x)||!lt(this._camera.up.y,this._cameraUp0.y)||!lt(this._camera.up.z,this._cameraUp0.z)){this._camera.up.copy(this._cameraUp0);let n=this.getPosition(Ze);this.updateCameraUp(),this.setPosition(n.x,n.y,n.z)}let t=[this.setLookAt(this._position0.x,this._position0.y,this._position0.z,this._target0.x,this._target0.y,this._target0.z,e),this.setFocalOffset(this._focalOffset0.x,this._focalOffset0.y,this._focalOffset0.z,e),this.zoomTo(this._zoom0,e)];return Promise.all(t)}saveState(){this._cameraUp0.copy(this._camera.up),this.getTarget(this._target0),this.getPosition(this._position0),this._zoom0=this._zoom,this._focalOffset0.copy(this._focalOffset)}updateCameraUp(){this._yAxisUpSpace.setFromUnitVectors(this._camera.up,cu),this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert()}applyCameraUp(){let e=Ze.subVectors(this._target,this._camera.position).normalize(),t=nt.crossVectors(e,this._camera.up);this._camera.up.crossVectors(t,e).normalize(),this._camera.updateMatrixWorld();let n=this.getPosition(Ze);this.updateCameraUp(),this.setPosition(n.x,n.y,n.z)}update(e){let t=this._sphericalEnd.theta-this._spherical.theta,n=this._sphericalEnd.phi-this._spherical.phi,i=this._sphericalEnd.radius-this._spherical.radius,s=dx.subVectors(this._targetEnd,this._target),o=px.subVectors(this._focalOffsetEnd,this._focalOffset),a=this._zoomEnd-this._zoom;if(_t(t))this._thetaVelocity.value=0,this._spherical.theta=this._sphericalEnd.theta;else{let u=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.theta=au(this._spherical.theta,this._sphericalEnd.theta,this._thetaVelocity,u,1/0,e),this._needsUpdate=!0}if(_t(n))this._phiVelocity.value=0,this._spherical.phi=this._sphericalEnd.phi;else{let u=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.phi=au(this._spherical.phi,this._sphericalEnd.phi,this._phiVelocity,u,1/0,e),this._needsUpdate=!0}if(_t(i))this._radiusVelocity.value=0,this._spherical.radius=this._sphericalEnd.radius;else{let u=this._isUserControllingDolly?this.draggingSmoothTime:this.smoothTime;this._spherical.radius=au(this._spherical.radius,this._sphericalEnd.radius,this._radiusVelocity,u,this.maxSpeed,e),this._needsUpdate=!0}if(_t(s.x)&&_t(s.y)&&_t(s.z))this._targetVelocity.set(0,0,0),this._target.copy(this._targetEnd);else{let u=this._isUserControllingTruck?this.draggingSmoothTime:this.smoothTime;ux(this._target,this._targetEnd,this._targetVelocity,u,this.maxSpeed,e,this._target),this._needsUpdate=!0}if(_t(o.x)&&_t(o.y)&&_t(o.z))this._focalOffsetVelocity.set(0,0,0),this._focalOffset.copy(this._focalOffsetEnd);else{let u=this._isUserControllingOffset?this.draggingSmoothTime:this.smoothTime;ux(this._focalOffset,this._focalOffsetEnd,this._focalOffsetVelocity,u,this.maxSpeed,e,this._focalOffset),this._needsUpdate=!0}if(_t(a))this._zoomVelocity.value=0,this._zoom=this._zoomEnd;else{let u=this._isUserControllingZoom?this.draggingSmoothTime:this.smoothTime;this._zoom=au(this._zoom,this._zoomEnd,this._zoomVelocity,u,1/0,e)}if(this.dollyToCursor){if(Xr(this._camera)&&this._changedDolly!==0){let u=this._spherical.radius-this._lastDistance,f=this._camera,p=this._getCameraDirection(Aa),m=Ze.copy(p).cross(f.up).normalize();m.lengthSq()===0&&(m.x=1);let _=nt.crossVectors(m,p),g=this._sphericalEnd.radius*Math.tan(f.getEffectiveFOV()*Ea*.5),v=(this._sphericalEnd.radius-u-this._sphericalEnd.radius)/this._sphericalEnd.radius,x=Vs.copy(this._targetEnd).add(m.multiplyScalar(this._dollyControlCoord.x*g*f.aspect)).add(_.multiplyScalar(this._dollyControlCoord.y*g)),y=Ze.copy(this._targetEnd).lerp(x,v),C=this._lastDollyDirection===ks.IN&&this._spherical.radius<=this.minDistance,M=this._lastDollyDirection===ks.OUT&&this.maxDistance<=this._spherical.radius;if(this.infinityDolly&&(C||M)){this._sphericalEnd.radius-=u,this._spherical.radius-=u;let A=nt.copy(p).multiplyScalar(-u);y.add(A)}this._boundary.clampPoint(y,y);let T=nt.subVectors(y,this._targetEnd);this._targetEnd.copy(y),this._target.add(T),this._changedDolly-=u,_t(this._changedDolly)&&(this._changedDolly=0)}else if(Ji(this._camera)&&this._changedZoom!==0){let u=this._zoom-this._lastZoom,f=this._camera,p=Ze.set(this._dollyControlCoord.x,this._dollyControlCoord.y,(f.near+f.far)/(f.near-f.far)).unproject(f),m=nt.set(0,0,-1).applyQuaternion(f.quaternion),_=Vs.copy(p).add(m.multiplyScalar(-p.dot(f.up))),d=-(this._zoom-u-this._zoom)/this._zoom,v=this._getCameraDirection(Aa),x=this._targetEnd.dot(v),y=Ze.copy(this._targetEnd).lerp(_,d),C=y.dot(v),M=v.multiplyScalar(C-x);y.sub(M),this._boundary.clampPoint(y,y);let T=nt.subVectors(y,this._targetEnd);this._targetEnd.copy(y),this._target.add(T),this._changedZoom-=u,_t(this._changedZoom)&&(this._changedZoom=0)}}this._camera.zoom!==this._zoom&&(this._camera.zoom=this._zoom,this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0),this._dragNeedsUpdate=!0;let l=this._collisionTest();this._spherical.radius=Math.min(this._spherical.radius,l),this._spherical.makeSafe(),this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target),this._camera.lookAt(this._target),(!_t(this._focalOffset.x)||!_t(this._focalOffset.y)||!_t(this._focalOffset.z))&&(this._camera.updateMatrixWorld(),ii.setFromMatrixColumn(this._camera.matrix,0),ri.setFromMatrixColumn(this._camera.matrix,1),Yr.setFromMatrixColumn(this._camera.matrix,2),ii.multiplyScalar(this._focalOffset.x),ri.multiplyScalar(-this._focalOffset.y),Yr.multiplyScalar(this._focalOffset.z),Ze.copy(ii).add(ri).add(Yr),this._camera.position.add(Ze)),this._boundaryEnclosesCamera&&this._encloseToBoundary(this._camera.position.copy(this._target),Ze.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse),1);let h=this._needsUpdate;return h&&!this._updatedLastTime?(this._hasRested=!1,this.dispatchEvent({type:"wake"}),this.dispatchEvent({type:"update"})):h?(this.dispatchEvent({type:"update"}),_t(t,this.restThreshold)&&_t(n,this.restThreshold)&&_t(i,this.restThreshold)&&_t(s.x,this.restThreshold)&&_t(s.y,this.restThreshold)&&_t(s.z,this.restThreshold)&&_t(o.x,this.restThreshold)&&_t(o.y,this.restThreshold)&&_t(o.z,this.restThreshold)&&_t(a,this.restThreshold)&&!this._hasRested&&(this._hasRested=!0,this.dispatchEvent({type:"rest"}))):!h&&this._updatedLastTime&&this.dispatchEvent({type:"sleep"}),this._lastDistance=this._spherical.radius,this._lastZoom=this._zoom,this._updatedLastTime=h,this._needsUpdate=!1,h}toJSON(){return JSON.stringify({enabled:this._enabled,minDistance:this.minDistance,maxDistance:Ta(this.maxDistance),minZoom:this.minZoom,maxZoom:Ta(this.maxZoom),minPolarAngle:this.minPolarAngle,maxPolarAngle:Ta(this.maxPolarAngle),minAzimuthAngle:Ta(this.minAzimuthAngle),maxAzimuthAngle:Ta(this.maxAzimuthAngle),smoothTime:this.smoothTime,draggingSmoothTime:this.draggingSmoothTime,dollySpeed:this.dollySpeed,truckSpeed:this.truckSpeed,dollyToCursor:this.dollyToCursor,verticalDragToForward:this.verticalDragToForward,target:this._targetEnd.toArray(),position:Ze.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),zoom:this._zoomEnd,focalOffset:this._focalOffsetEnd.toArray(),target0:this._target0.toArray(),position0:this._position0.toArray(),zoom0:this._zoom0,focalOffset0:this._focalOffset0.toArray()})}fromJSON(e,t=!1){let n=JSON.parse(e);this.enabled=n.enabled,this.minDistance=n.minDistance,this.maxDistance=wa(n.maxDistance),this.minZoom=n.minZoom,this.maxZoom=wa(n.maxZoom),this.minPolarAngle=n.minPolarAngle,this.maxPolarAngle=wa(n.maxPolarAngle),this.minAzimuthAngle=wa(n.minAzimuthAngle),this.maxAzimuthAngle=wa(n.maxAzimuthAngle),this.smoothTime=n.smoothTime,this.draggingSmoothTime=n.draggingSmoothTime,this.dollySpeed=n.dollySpeed,this.truckSpeed=n.truckSpeed,this.dollyToCursor=n.dollyToCursor,this.verticalDragToForward=n.verticalDragToForward,this._target0.fromArray(n.target0),this._position0.fromArray(n.position0),this._zoom0=n.zoom0,this._focalOffset0.fromArray(n.focalOffset0),this.moveTo(n.target[0],n.target[1],n.target[2],t),On.setFromVector3(Ze.fromArray(n.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)),this.rotateTo(On.theta,On.phi,t),this.dollyTo(On.radius,t),this.zoomTo(n.zoom,t),this.setFocalOffset(n.focalOffset[0],n.focalOffset[1],n.focalOffset[2],t),this._needsUpdate=!0}connect(e){if(this._domElement){console.warn("camera-controls is already connected.");return}e.setAttribute("data-camera-controls-version",DA),this._addAllEventListeners(e),this._getClientRect(this._elementRect)}disconnect(){this.cancel(),this._removeAllEventListeners(),this._domElement&&(this._domElement.removeAttribute("data-camera-controls-version"),this._domElement=void 0)}dispose(){this.removeAllEventListeners(),this.disconnect()}_getTargetDirection(e){return e.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse)}_getCameraDirection(e){return this._getTargetDirection(e).negate()}_findPointerById(e){return this._activePointers.find(t=>t.pointerId===e)}_findPointerByMouseButton(e){return this._activePointers.find(t=>t.mouseButton===e)}_disposePointer(e){this._activePointers.splice(this._activePointers.indexOf(e),1)}_encloseToBoundary(e,t,n){let i=t.lengthSq();if(i===0)return e;let s=nt.copy(t).add(e),a=this._boundary.clampPoint(s,Vs).sub(s),l=a.lengthSq();if(l===0)return e.add(t);if(l===i)return e;if(n===0)return e.add(t).add(a);{let c=1+n*l/t.dot(a);return e.add(nt.copy(t).multiplyScalar(c)).add(a.multiplyScalar(1-n))}}_updateNearPlaneCorners(){if(Xr(this._camera)){let e=this._camera,t=e.near,n=e.getEffectiveFOV()*Ea,i=Math.tan(n*.5)*t,s=i*e.aspect;this._nearPlaneCorners[0].set(-s,-i,0),this._nearPlaneCorners[1].set(s,-i,0),this._nearPlaneCorners[2].set(s,i,0),this._nearPlaneCorners[3].set(-s,i,0)}else if(Ji(this._camera)){let e=this._camera,t=1/e.zoom,n=e.left*t,i=e.right*t,s=e.top*t,o=e.bottom*t;this._nearPlaneCorners[0].set(n,s,0),this._nearPlaneCorners[1].set(i,s,0),this._nearPlaneCorners[2].set(i,o,0),this._nearPlaneCorners[3].set(n,o,0)}}_collisionTest(){let e=1/0;if(!(this.colliderMeshes.length>=1)||zp(this._camera,"_collisionTest"))return e;let n=this._getTargetDirection(Aa);Wp.lookAt(fx,n,this._camera.up);for(let i=0;i<4;i++){let s=nt.copy(this._nearPlaneCorners[i]);s.applyMatrix4(Wp);let o=Vs.addVectors(this._target,s);hu.set(o,n),hu.far=this._spherical.radius+1;let a=hu.intersectObjects(this.colliderMeshes);a.length!==0&&a[0].distance<e&&(e=a[0].distance)}return e}_getClientRect(e){if(!this._domElement)return;let t=this._domElement.getBoundingClientRect();return e.x=t.left,e.y=t.top,this._viewport?(e.x+=this._viewport.x,e.y+=t.height-this._viewport.w-this._viewport.y,e.width=this._viewport.z,e.height=this._viewport.w):(e.width=t.width,e.height=t.height),e}_createOnRestPromise(e){return e?Promise.resolve():(this._hasRested=!1,this.dispatchEvent({type:"transitionstart"}),new Promise(t=>{let n=()=>{this.removeEventListener("rest",n),t()};this.addEventListener("rest",n)}))}_addAllEventListeners(e){}_removeAllEventListeners(){}get dampingFactor(){return console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead."),0}set dampingFactor(e){console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.")}get draggingDampingFactor(){return console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."),0}set draggingDampingFactor(e){console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.")}static createBoundingSphere(e,t=new ze.Sphere){let n=t,i=n.center;Gs.makeEmpty(),e.traverseVisible(o=>{o.isMesh&&Gs.expandByObject(o)}),Gs.getCenter(i);let s=0;return e.traverseVisible(o=>{if(!o.isMesh)return;let a=o,l=a.geometry.clone();l.applyMatrix4(a.matrixWorld);let h=l.attributes.position;for(let u=0,f=h.count;u<f;u++)Ze.fromBufferAttribute(h,u),s=Math.max(s,i.distanceToSquared(Ze))}),n.radius=Math.sqrt(s),n}};import{useEffect as vx,useRef as UA}from"react";function xx({type:r,cAzimuthAngle:e,cPolarAngle:t,cDistance:n,cameraZoom:i,zoomOut:s,enableTransition:o=!0}){let a=UA();return Gr((l,c)=>a.current.update(c)),vx(()=>{let l=a.current;l==null||l.rotateTo(Bh(e),Bh(t),o)},[a,e,t]),vx(()=>{let l=a.current;s?r==="sphere"?(l==null||l.dollyTo(Op.distance,o),l==null||l.zoomTo(Op.zoom,o)):(l==null||l.dollyTo(Dp.distance,o),l==null||l.zoomTo(Dp.zoom,o)):r==="sphere"?(l==null||l.zoomTo(i,o),l==null||l.dollyTo(zv,o)):(l==null||l.dollyTo(n,o),l==null||l.zoomTo(Bv,o))},[a,s,r,i,n]),a}import{jsx as NA}from"react/jsx-runtime";function yx(t){var n=t,{smoothTime:r=.05}=n,e=Zt(n,["smoothTime"]);Ra.install({THREE:Zi}),ma({CameraControls:Ra});let i=$i(a=>a.camera),s=$i(a=>a.gl),o=xx(e);return NA("cameraControls",{ref:o,args:[i,s.domElement],enableDamping:!0,smoothTime:r,zoomSpeed:10,dollySpeed:10,restThreshold:0})}import{Fragment as FA,jsx as Sx}from"react/jsx-runtime";function bx(r){return Sx(FA,{children:Sx(yx,Te({},r))})}import{Fragment as BA,jsx as uu,jsxs as zA}from"react/jsx-runtime";function Mx(r){let u=Te(Te({},Ws.halo.props),r),{control:e,urlString:t}=u,i=Zt(u,["control","urlString"]);e==="query"&&(i=ai(zh(t),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"}));let f=i,{lightType:s,envPreset:o,brightness:a,grain:l,toggleAxis:c}=f,h=Zt(f,["lightType","envPreset","brightness","grain","toggleAxis"]);return zA(BA,{children:[uu(Nv,Te({},i)),uu(Hv,{lightType:s,brightness:a,envPreset:o}),l!=="off"&&uu(lx,{}),uu(bx,Te({},i))]})}import{useEffect as kA}from"react";function Ex(){kA(()=>{Pm(window.location.search)},[])}function wx(r,n){var i=n,{urlString:e}=i,t=Zt(i,["urlString"]);let[s]=$e("type"),[o]=$e("animate"),[a]=$e("range"),[l]=$e("rangeStart"),[c]=$e("rangeEnd"),[h]=$e("uTime"),[u]=$e("uSpeed"),[f]=$e("uStrength"),[p]=$e("uDensity"),[m]=$e("uFrequency"),[_]=$e("uAmplitude"),[g]=$e("positionX"),[d]=$e("positionY"),[v]=$e("positionZ"),[x]=$e("rotationX"),[y]=$e("rotationY"),[C]=$e("rotationZ"),[M]=$e("color1"),[T]=$e("color2"),[A]=$e("color3"),[L]=$e("cAzimuthAngle"),[S]=$e("cPolarAngle"),[b]=$e("cDistance"),[D]=$e("cameraZoom"),[U]=$e("wireframe"),[O]=$e("shader"),[X]=$e("lightType"),[F]=$e("brightness"),[ee]=$e("envPreset"),[G]=$e("grain"),[oe]=$e("reflection"),[ie]=$e("zoomOut"),[se]=$e("toggleAxis"),_e=Lm(ce=>ce.hoverState),[Pe]=$e("frameRate"),[W]=$e("destination"),[te]=$e("format"),ge={type:s,animate:o,range:a,rangeStart:l,rangeEnd:c,frameRate:Pe,destination:W,format:te,uTime:h,uSpeed:u,uStrength:f,uDensity:p,uFrequency:m,uAmplitude:_,positionX:g,positionY:d,positionZ:v,rotationX:x,rotationY:y,rotationZ:C,color1:M,color2:T,color3:A,cAzimuthAngle:L,cPolarAngle:S,cDistance:b,cameraZoom:D,wireframe:U,shader:O,lightType:X,brightness:F,envPreset:ee,grain:G,reflection:oe,zoomOut:ie,toggleAxis:se,hoverState:_e};if(r==="props")return Tx(Te(Te({},ge),t));if(r==="query")return Tx(e?ai(zh(e),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"}):ge)}function Tx(r){let e={};for(let t in r)r[t]!==null&&(e[t]=r[t]);return e}import{jsx as HA}from"react/jsx-runtime";function tL(r){Ex();let e=wx(r.control,r);return HA(Mx,Te({},e))}import{useEffect as VA}from"react";import{jsx as WA}from"react/jsx-runtime";function lL({children:r,style:e={},pixelDensity:t=1,fov:n=45,pointerEvents:i}){return GA(),WA(Dv,xt(Te({style:xt(Te({},e),{pointerEvents:i}),resize:{offsetSize:!0}},Fv(t,n)),{children:r}))}function GA(){VA(()=>{He.uv2_pars_vertex="",He.uv2_vertex="",He.uv2_pars_fragment="",He.encodings_fragment=""},[])}export{tL as ShaderGradientStateless,lL as ShaderGradientStatelessCanvas,$e as useQueryState,pC as useURLQueryState};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

scheduler/cjs/scheduler.development.js:
  (**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

camera-controls/dist/camera-controls.module.js:
  (*!
   * camera-controls
   * https://github.com/yomotsu/camera-controls
   * (c) 2017 @yomotsu
   * Released under the MIT License.
   *)
*/
