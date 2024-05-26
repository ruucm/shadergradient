var vi=Object.create;var Me=Object.defineProperty,yi=Object.defineProperties,xi=Object.getOwnPropertyDescriptor,Ei=Object.getOwnPropertyDescriptors,Ti=Object.getOwnPropertyNames,$e=Object.getOwnPropertySymbols,Si=Object.getPrototypeOf,Lt=Object.prototype.hasOwnProperty,pr=Object.prototype.propertyIsEnumerable;var ur=(r,e,t)=>e in r?Me(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,w=(r,e)=>{for(var t in e||(e={}))Lt.call(e,t)&&ur(r,t,e[t]);if($e)for(var t of $e(e))pr.call(e,t)&&ur(r,t,e[t]);return r},$=(r,e)=>yi(r,Ei(e));var q=(r,e)=>{var t={};for(var o in r)Lt.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&$e)for(var o of $e(r))e.indexOf(o)<0&&pr.call(r,o)&&(t[o]=r[o]);return t};var Ie=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),oe=(r,e)=>{for(var t in e)Me(r,t,{get:e[t],enumerable:!0})},Je=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Ti(e))!Lt.call(r,i)&&i!==t&&Me(r,i,{get:()=>e[i],enumerable:!(o=xi(e,i))||o.enumerable});return r},Ne=(r,e,t)=>(Je(r,e,"default"),t&&Je(t,e,"default")),J=(r,e,t)=>(t=r!=null?vi(Si(r)):{},Je(e||!r||!r.__esModule?Me(t,"default",{value:r,enumerable:!0}):t,r)),bi=r=>Je(Me({},"__esModule",{value:!0}),r);var Ot=(r,e,t)=>new Promise((o,i)=>{var a=c=>{try{s(t.next(c))}catch(l){i(l)}},n=c=>{try{s(t.throw(c))}catch(l){i(l)}},s=c=>c.done?o(c.value):Promise.resolve(c.value).then(a,n);s((t=t.apply(r,e)).next())});var Jo=Ie((Mc,$o)=>{"use strict";$o.exports=r=>encodeURIComponent(r).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)});var ii=Ie((Ic,oi)=>{"use strict";var ri="%[a-f0-9]{2}",ei=new RegExp("("+ri+")|([^%]+?)","gi"),ti=new RegExp("("+ri+")+","gi");function sr(r,e){try{return[decodeURIComponent(r.join(""))]}catch(i){}if(r.length===1)return r;e=e||1;var t=r.slice(0,e),o=r.slice(e);return Array.prototype.concat.call([],sr(t),sr(o))}function _n(r){try{return decodeURIComponent(r)}catch(o){for(var e=r.match(ei)||[],t=1;t<e.length;t++)r=sr(e,t).join(""),e=r.match(ei)||[];return r}}function vn(r){for(var e={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},t=ti.exec(r);t;){try{e[t[0]]=decodeURIComponent(t[0])}catch(s){var o=_n(t[0]);o!==t[0]&&(e[t[0]]=o)}t=ti.exec(r)}e["%C2"]="\uFFFD";for(var i=Object.keys(e),a=0;a<i.length;a++){var n=i[a];r=r.replace(new RegExp(n,"g"),e[n])}return r}oi.exports=function(r){if(typeof r!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return vn(r)}}});var ai=Ie((Nc,ni)=>{"use strict";ni.exports=(r,e)=>{if(!(typeof r=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[r];let t=r.indexOf(e);return t===-1?[r]:[r.slice(0,t),r.slice(t+e.length)]}});var ci=Ie((Uc,si)=>{"use strict";si.exports=function(r,e){for(var t={},o=Object.keys(r),i=Array.isArray(e),a=0;a<o.length;a++){var n=o[a],s=r[n];(i?e.indexOf(n)!==-1:e(n,s,r))&&(t[n]=s)}return t}});var gi=Ie(W=>{"use strict";var yn=Jo(),xn=ii(),mi=ai(),En=ci(),Tn=r=>r==null,cr=Symbol("encodeFragmentIdentifier");function Sn(r){switch(r.arrayFormat){case"index":return e=>(t,o)=>{let i=t.length;return o===void 0||r.skipNull&&o===null||r.skipEmptyString&&o===""?t:o===null?[...t,[k(e,r),"[",i,"]"].join("")]:[...t,[k(e,r),"[",k(i,r),"]=",k(o,r)].join("")]};case"bracket":return e=>(t,o)=>o===void 0||r.skipNull&&o===null||r.skipEmptyString&&o===""?t:o===null?[...t,[k(e,r),"[]"].join("")]:[...t,[k(e,r),"[]=",k(o,r)].join("")];case"colon-list-separator":return e=>(t,o)=>o===void 0||r.skipNull&&o===null||r.skipEmptyString&&o===""?t:o===null?[...t,[k(e,r),":list="].join("")]:[...t,[k(e,r),":list=",k(o,r)].join("")];case"comma":case"separator":case"bracket-separator":{let e=r.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(o,i)=>i===void 0||r.skipNull&&i===null||r.skipEmptyString&&i===""?o:(i=i===null?"":i,o.length===0?[[k(t,r),e,k(i,r)].join("")]:[[o,k(i,r)].join(r.arrayFormatSeparator)])}default:return e=>(t,o)=>o===void 0||r.skipNull&&o===null||r.skipEmptyString&&o===""?t:o===null?[...t,k(e,r)]:[...t,[k(e,r),"=",k(o,r)].join("")]}}function bn(r){let e;switch(r.arrayFormat){case"index":return(t,o,i)=>{if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e){i[t]=o;return}i[t]===void 0&&(i[t]={}),i[t][e[1]]=o};case"bracket":return(t,o,i)=>{if(e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),!e){i[t]=o;return}if(i[t]===void 0){i[t]=[o];return}i[t]=[].concat(i[t],o)};case"colon-list-separator":return(t,o,i)=>{if(e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!e){i[t]=o;return}if(i[t]===void 0){i[t]=[o];return}i[t]=[].concat(i[t],o)};case"comma":case"separator":return(t,o,i)=>{let a=typeof o=="string"&&o.includes(r.arrayFormatSeparator),n=typeof o=="string"&&!a&&he(o,r).includes(r.arrayFormatSeparator);o=n?he(o,r):o;let s=a||n?o.split(r.arrayFormatSeparator).map(c=>he(c,r)):o===null?o:he(o,r);i[t]=s};case"bracket-separator":return(t,o,i)=>{let a=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!a){i[t]=o&&he(o,r);return}let n=o===null?[]:o.split(r.arrayFormatSeparator).map(s=>he(s,r));if(i[t]===void 0){i[t]=n;return}i[t]=[].concat(i[t],n)};default:return(t,o,i)=>{if(i[t]===void 0){i[t]=o;return}i[t]=[].concat(i[t],o)}}}function fi(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function k(r,e){return e.encode?e.strict?yn(r):encodeURIComponent(r):r}function he(r,e){return e.decode?xn(r):r}function di(r){return Array.isArray(r)?r.sort():typeof r=="object"?di(Object.keys(r)).sort((e,t)=>Number(e)-Number(t)).map(e=>r[e]):r}function ui(r){let e=r.indexOf("#");return e!==-1&&(r=r.slice(0,e)),r}function Pn(r){let e="",t=r.indexOf("#");return t!==-1&&(e=r.slice(t)),e}function pi(r){r=ui(r);let e=r.indexOf("?");return e===-1?"":r.slice(e+1)}function li(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):e.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function hi(r,e){e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e),fi(e.arrayFormatSeparator);let t=bn(e),o=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return o;for(let i of r.split("&")){if(i==="")continue;let[a,n]=mi(e.decode?i.replace(/\+/g," "):i,"=");n=n===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?n:he(n,e),t(he(a,e),n,o)}for(let i of Object.keys(o)){let a=o[i];if(typeof a=="object"&&a!==null)for(let n of Object.keys(a))a[n]=li(a[n],e);else o[i]=li(a,e)}return e.sort===!1?o:(e.sort===!0?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce((i,a)=>{let n=o[a];return n&&typeof n=="object"&&!Array.isArray(n)?i[a]=di(n):i[a]=n,i},Object.create(null))}W.extract=pi;W.parse=hi;W.stringify=(r,e)=>{if(!r)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e),fi(e.arrayFormatSeparator);let t=n=>e.skipNull&&Tn(r[n])||e.skipEmptyString&&r[n]==="",o=Sn(e),i={};for(let n of Object.keys(r))t(n)||(i[n]=r[n]);let a=Object.keys(i);return e.sort!==!1&&a.sort(e.sort),a.map(n=>{let s=r[n];return s===void 0?"":s===null?k(n,e):Array.isArray(s)?s.length===0&&e.arrayFormat==="bracket-separator"?k(n,e)+"[]":s.reduce(o(n),[]).join("&"):k(n,e)+"="+k(s,e)}).filter(n=>n.length>0).join("&")};W.parseUrl=(r,e)=>{e=Object.assign({decode:!0},e);let[t,o]=mi(r,"#");return Object.assign({url:t.split("?")[0]||"",query:hi(pi(r),e)},e&&e.parseFragmentIdentifier&&o?{fragmentIdentifier:he(o,e)}:{})};W.stringifyUrl=(r,e)=>{e=Object.assign({encode:!0,strict:!0,[cr]:!0},e);let t=ui(r.url).split("?")[0]||"",o=W.extract(r.url),i=W.parse(o,{sort:!1}),a=Object.assign(i,r.query),n=W.stringify(a,e);n&&(n=`?${n}`);let s=Pn(r.url);return r.fragmentIdentifier&&(s=`#${e[cr]?k(r.fragmentIdentifier,e):r.fragmentIdentifier}`),`${t}${n}${s}`};W.pick=(r,e,t)=>{t=Object.assign({parseFragmentIdentifier:!0,[cr]:!1},t);let{url:o,query:i,fragmentIdentifier:a}=W.parseUrl(r,t);return W.stringifyUrl({url:o,query:En(i,e),fragmentIdentifier:a},t)};W.exclude=(r,e,t)=>{let o=Array.isArray(e)?i=>!e.includes(i):(i,a)=>!e(i,a);return W.pick(r,o,t)}});var De={};oe(De,{Placeholder:()=>Rn,ShaderGradient:()=>zn,ShaderGradientCanvas:()=>Pi});module.exports=bi(De);var Sr=require("@react-three/fiber");var hr=(r,e)=>({dpr:r,camera:{fov:e},linear:!0,flat:!0,gl:{preserveDrawingBuffer:!0}});var gr=1,_r=14,Dt={zoom:1,distance:14},Ft={zoom:5,distance:14};var vr={meshDelay:0,meshDur:0,rotDelay:1.7,rotDur:1,posDelay:1.3,posDur:2.2,logoTransition:3.1,text:2.5,to:1},et="https://ruucm.github.io/shadergradient/shadergradient@1.0.0/hdr/";var yr=[{title:"Halo",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uSpeed=0.4&uStrength=4&uTime=0&uFrequency=5.5&wireframe=false"},{title:"Pensive",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.5&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.5&color1=%23809bd6&color2=%23910aff&color3=%23af38ff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=7&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.4&uTime=0&wireframe=false"},{title:"Mint",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=%2394ffd1&color2=%236bf5ff&color3=%23ffffff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0.9&positionZ=-0.3&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false&shader=defaults"},{title:"Interstella",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&fov=45&positionX=-0.1&positionY=0&positionZ=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false"},{title:"Nighty night",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false"},{title:"Viola orientalis",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&brightness=1.1&cAzimuthAngle=0&cDistance=7.1&cPolarAngle=140&cameraZoom=17.3&color1=%23ffffff&color2=%23ffbb00&color3=%230700ff&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&type=sphere&uAmplitude=1.4&uDensity=1.1&uSpeed=0.1&uStrength=1&uTime=0&wireframe=false&uFrequency=5.5&shader=defaults"},{title:"Universe",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&brightness=1.1&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%235606FF&color2=%23FE8989&color3=%23000000&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=-0.5&positionY=0.1&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&type=waterPlane&uAmplitude=0&uDensity=1.1&uSpeed=0.1&uStrength=2.4&uTime=0.2&uFrequency=5.5&wireframe=false&shader=defaults"},{title:"Sunset",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.5&cAzimuthAngle=60&cDistance=7.1&cPolarAngle=90&cameraZoom=15.3&color1=%23ff7a33&color2=%2333a0ff&color3=%23ffc53d&embedMode=off&envPreset=dawn&grain=off&http%3A%2F%2Flocalhost%3A3002%2Fcustomize%3Fanimate=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=-0.15&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=sphere&uAmplitude=1.4&uDensity=1.1&uSpeed=0.1&uStrength=0.4&uTime=0&uFrequency=5.5&wireframe=false"},{title:"Mandarin",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.4&cPolarAngle=95&cameraZoom=1&color1=%23ff6a1a&color2=%23c73c00&color3=%23FD4912&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=-2.1&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=225&shader=defaults&type=waterPlane&uAmplitude=0&uFrequency=5.5&uDensity=1.8&uSpeed=0.2&uStrength=3&uTime=0.2&wireframe=false"},{title:"Cotton Candy",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23ebedff&color2=%23f3f2f8&color3=%23dbf8ff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=1.8&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&type=waterPlane&uDensity=1&uSpeed=0.3&uStrength=3&uTime=0.2&uFrequency=5.5&wireframe=false&shader=defaults"}];var xr=require("react");function Er(){let[r,e]=(0,xr.useState)(-1);return[r,o=>{let i=o.gl.domElement,a=c=>{c.preventDefault(),e(1),console.log("[Context Lost]")},n=c=>{e(0),console.log("[Context Restored]")},s=c=>{e(2),console.log("[Context Error]")};return i.addEventListener("webglcontextlost",a),i.addEventListener("webglcontextrestored",n),i.addEventListener("webglcontextcreationerror",s),()=>{i.removeEventListener("webglcontextlost",a),i.removeEventListener("webglcontextrestored",n),i.removeEventListener("webglcontextcreationerror",s)}}]}var Mt=require("react/jsx-runtime");function Tr({title:r="",color1:e="#ff7e5f",color2:t="#feb47b"}){return(0,Mt.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:`linear-gradient(to right, ${e}, ${t})`,color:"white",fontSize:"20px",textAlign:"center",padding:"20px",fontFamily:"Inter",fontWeight:"500"},children:(0,Mt.jsx)("p",{children:r})})}var be=require("react/jsx-runtime");function Pi(a){var n=a,{children:r,pointerEvents:e="none",pixelDensity:t=1,fov:o=45}=n,i=q(n,["children","pointerEvents","pixelDensity","fov"]);let[s,c]=Er();return s===1?(0,be.jsx)(Tr,{title:"The graphics context has been lost. Please wait while we try to restore it..."}):(0,be.jsx)(be.Fragment,{children:(0,be.jsx)(Sr.Canvas,$(w($(w({id:"gradientCanvas",resize:{offsetSize:!0}},hr(t,o)),{style:{pointerEvents:e},onCreated:c}),i),{children:r}),t+o)})}var mt=require("react");var Y=require("three");var fe=require("three"),me=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},Ci=new fe.OrthographicCamera(-1,1,1,-1,0,1),It=new fe.BufferGeometry;It.setAttribute("position",new fe.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3));It.setAttribute("uv",new fe.Float32BufferAttribute([0,2,0,0,2,0],2));var tt=class{constructor(e){this._mesh=new fe.Mesh(It,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ci)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ue=class extends me{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,o){let i=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let n,s;this.inverse?(n=0,s=1):(n=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,n,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(o),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}},rt=class extends me{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var He=require("three");var Be=class extends me{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof He.ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=He.UniformsUtils.clone(e.uniforms),this.material=new He.ShaderMaterial({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new tt(this.material)}render(e,t,o){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=o.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}};var Nt={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};var ot=class{constructor(e,t){if(this.renderer=e,t===void 0){let o={minFilter:Y.LinearFilter,magFilter:Y.LinearFilter,format:Y.RGBAFormat},i=e.getSize(new Y.Vector2);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new Y.WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio,o),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Nt===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Be===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Be(Nt),this.clock=new Y.Clock}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),o=!1;for(let i=0,a=this.passes.length;i<a;i++){let n=this.passes[i];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,o),n.needsSwap){if(o){let s=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Ue!==void 0&&(n instanceof Ue?o=!0:n instanceof rt&&(o=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Y.Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let o=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(o,i),this.renderTarget2.setSize(o,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(o,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}};var jn=new Y.OrthographicCamera(-1,1,1,-1,0,1),br=new Y.BufferGeometry;br.setAttribute("position",new Y.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3));br.setAttribute("uv",new Y.Float32BufferAttribute([0,2,0,0,2,0],2));var Pr=require("three");var it=class extends me{constructor(e,t,o,i,a){super(),this.scene=e,this.camera=t,this.overrideMaterial=o,this.clearColor=i,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pr.Color}render(e,t,o){let i=e.autoClear;e.autoClear=!1;let a,n;this.overrideMaterial!==void 0&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:o),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=n),e.autoClear=i}};var lt=require("three");var B={SKIP:0,ADD:1,ALPHA:2,AVERAGE:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,EXCLUSION:8,LIGHTEN:9,MULTIPLY:10,DIVIDE:11,NEGATION:12,NORMAL:13,OVERLAY:14,REFLECT:15,SCREEN:16,SOFT_LIGHT:17,SUBTRACT:18};var nt=require("three");var Cr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x+y,1.0)*opacity+x*(1.0-opacity);}";var zr="vec3 blend(const in vec3 x,const in vec3 y,const in float opacity){return y*opacity+x*(1.0-opacity);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){float a=min(y.a,opacity);return vec4(blend(x.rgb,y.rgb,a),max(x.a,a));}";var Rr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y)*0.5*opacity+x*(1.0-opacity);}";var Ar="float blend(const in float x,const in float y){return(y==0.0)?y:max(1.0-(1.0-x)/y,0.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var wr="float blend(const in float x,const in float y){return(y==1.0)?y:min(x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var Lr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x,y)*opacity+x*(1.0-opacity);}";var Or="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return abs(x-y)*opacity+x*(1.0-opacity);}";var Dr="float blend(const in float x,const in float y){return(y>0.0)?min(x/y,1.0):1.0;}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var Fr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y-2.0*x*y)*opacity+x*(1.0-opacity);}";var Mr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x,y)*opacity+x*(1.0-opacity);}";var Ir="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return x*y*opacity+x*(1.0-opacity);}";var Nr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-abs(1.0-x-y))*opacity+x*(1.0-opacity);}";var Ur="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y*opacity+x*(1.0-opacity);}";var Hr="float blend(const in float x,const in float y){return(x<0.5)?(2.0*x*y):(1.0-2.0*(1.0-x)*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var Br="float blend(const in float x,const in float y){return(y==1.0)?y:min(x*x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var Gr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-(1.0-x)*(1.0-y))*opacity+x*(1.0-opacity);}";var Vr="float blend(const in float x,const in float y){return(y<0.5)?(2.0*x*y+x*x*(1.0-2.0*y)):(sqrt(x)*(2.0*y-1.0)+2.0*x*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var kr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x+y-1.0,0.0)*opacity+x*(1.0-opacity);}";var Xi=new Map([[B.SKIP,null],[B.ADD,Cr],[B.ALPHA,zr],[B.AVERAGE,Rr],[B.COLOR_BURN,Ar],[B.COLOR_DODGE,wr],[B.DARKEN,Lr],[B.DIFFERENCE,Or],[B.EXCLUSION,Fr],[B.LIGHTEN,Mr],[B.MULTIPLY,Ir],[B.DIVIDE,Dr],[B.NEGATION,Nr],[B.NORMAL,Ur],[B.OVERLAY,Hr],[B.REFLECT,Br],[B.SCREEN,Gr],[B.SOFT_LIGHT,Vr],[B.SUBTRACT,kr]]),Ge=class extends nt.EventDispatcher{constructor(e,t=1){super(),this.blendFunction=e,this.opacity=new nt.Uniform(t)}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e,this.dispatchEvent({type:"change"})}getShaderCode(){return Xi.get(this.blendFunction)}};var ve={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:2},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:1},width:{value:20},height:{value:20},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

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

		}`};var de=require("three"),at=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},Zi=new de.OrthographicCamera(-1,1,1,-1,0,1),Ut=new de.BufferGeometry;Ut.setAttribute("position",new de.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3));Ut.setAttribute("uv",new de.Float32BufferAttribute([0,2,0,0,2,0],2));var st=class{constructor(e){this._mesh=new de.Mesh(Ut,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Zi)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Yr=!0,ct=class extends at{constructor(e,t,o){super(),ve===void 0&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=lt.UniformsUtils.clone(ve.uniforms),this.material=new lt.ShaderMaterial({uniforms:this.uniforms,fragmentShader:ve.fragmentShader,vertexShader:ve.vertexShader}),Yr&&(this.uniforms.width.value=e,this.uniforms.height.value=t),this.uniforms.disable.value=o.disable,this.uniforms.blending.value=o.blending,this.fsQuad=new st(this.material),this.blendMode=new Ge(B.SCREEN),this.extensions=null}render(e,t,o){this.material.uniforms.tDiffuse.value=o.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){Yr&&(this.uniforms.width.value=e,this.uniforms.height.value=t)}initialize(e,t,o){}addEventListener(){}getAttributes(){return this.attributes}getFragmentShader(){return ve.fragmentShader}getVertexShader(){return ve.vertexShader}update(e,t,o){}};var ft=require("@react-three/fiber");function Ht(r,e){let{gl:t,scene:o,camera:i,size:a}=(0,ft.useThree)(),n=(0,mt.useMemo)(()=>{let s=new ot(t);s.addPass(new it(o,i));let c={shape:1,radius:2,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:1,blending:e,blendingMode:1,greyscale:!1,disable:r},l=new ct(a.width,a.height,c);return s.addPass(l),s},[t,o,i,a,r,e]);(0,mt.useEffect)(()=>n==null?void 0:n.setSize(a.width,a.height),[n,a]),(0,ft.useFrame)((s,c)=>(t.autoClear=!0,void n.render(c)),1)}var V=J(require("react")),ee=require("@react-three/fiber"),j=require("three");var ue=J(require("react")),Ce=require("@react-three/fiber");function qi(r){return function(e){r.forEach(function(t){typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Xr=qi;var Pe=J(require("react")),ye=J(require("three")),Zr=require("@react-three/fiber");function qr(r,e,t){let{gl:o,size:i,viewport:a}=(0,Zr.useThree)(),n=typeof r=="number"?r:i.width*a.dpr,s=typeof e=="number"?e:i.height*a.dpr,v=(typeof r=="number"?t:r)||{},{samples:l}=v,g=q(v,["samples"]),p=Pe.useMemo(()=>{let d;return d=new ye.WebGLRenderTarget(n,s,w({minFilter:ye.LinearFilter,magFilter:ye.LinearFilter,encoding:o.outputEncoding,type:ye.HalfFloatType},g)),d.samples=l,d},[]);return Pe.useLayoutEffect(()=>{p.setSize(n,s),l&&(p.samples=l)},[l,p,n,s]),Pe.useEffect(()=>()=>p.dispose(),[]),p}var xe=require("react/jsx-runtime"),ji=r=>typeof r=="function",jr=ue.forwardRef((s,n)=>{var c=s,{envMap:r,resolution:e=256,frames:t=1/0,children:o,makeDefault:i}=c,a=q(c,["envMap","resolution","frames","children","makeDefault"]);let l=(0,Ce.useThree)(({set:h})=>h),g=(0,Ce.useThree)(({camera:h})=>h),p=(0,Ce.useThree)(({size:h})=>h),v=ue.useRef(null),d=ue.useRef(null),T=qr(e);ue.useLayoutEffect(()=>{a.manual||v.current.updateProjectionMatrix()},[p,a]),ue.useLayoutEffect(()=>{v.current.updateProjectionMatrix()}),ue.useLayoutEffect(()=>{if(i){let h=g;return l(()=>({camera:v.current})),()=>l(()=>({camera:h}))}},[v,i,l]);let x=0,P=null,y=ji(o);return(0,Ce.useFrame)(h=>{y&&(t===1/0||x<t)&&(d.current.visible=!1,h.gl.setRenderTarget(T),P=h.scene.background,r&&(h.scene.background=r),h.gl.render(h.scene,v.current),h.scene.background=P,h.gl.setRenderTarget(null),d.current.visible=!0,x++)}),(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)("orthographicCamera",$(w({left:p.width/-2,right:p.width/2,top:p.height/2,bottom:p.height/-2,ref:Xr([v,n])},a),{children:!y&&o})),(0,xe.jsx)("group",{ref:d,children:y&&o(T.texture)})]})});var Kr=J(require("react")),dt=require("three"),ut=require("@react-three/fiber");function Qr(r,e){let t=(0,ut.useThree)(i=>i.pointer),[o]=Kr.useState(()=>{let i=new dt.Raycaster;return e&&(0,ut.applyProps)(i,e,{}),function(a,n){i.setFromCamera(t,r instanceof dt.Camera?r:r.current);let s=this.constructor.prototype.raycast.bind(this);s&&s(i,n)}});return o}var Ve=require("react/jsx-runtime"),to=V.createContext({}),ro=()=>V.useContext(to),Ki=2*Math.PI,Wr=new j.Object3D,$r=new j.Matrix4,[ze,Bt]=[new j.Quaternion,new j.Quaternion],Jr=new j.Vector3,eo=new j.Vector3,Qi=r=>"minPolarAngle"in r,oo=({alignment:r="bottom-right",margin:e=[80,80],renderPriority:t=0,autoClear:o=!0,onUpdate:i,onTarget:a,children:n})=>{let s=(0,ee.useThree)(({size:C})=>C),c=(0,ee.useThree)(({camera:C})=>C),l=(0,ee.useThree)(({controls:C})=>C),g=(0,ee.useThree)(({gl:C})=>C),p=(0,ee.useThree)(({scene:C})=>C),v=(0,ee.useThree)(({invalidate:C})=>C),d=V.useRef(),T=V.useRef(),x=V.useRef(null),[P]=V.useState(()=>new j.Scene),y=V.useRef(!1),h=V.useRef(0),G=V.useRef(new j.Vector3(0,0,0)),U=V.useRef(new j.Vector3(0,0,0));V.useEffect(()=>{U.current.copy(c.up)},[c]);let m=V.useCallback(C=>{y.current=!0,(l||a)&&(G.current=(l==null?void 0:l.target)||(a==null?void 0:a())),h.current=c.position.distanceTo(Jr),ze.copy(c.quaternion),eo.copy(C).multiplyScalar(h.current).add(Jr),Wr.lookAt(eo),Bt.copy(Wr.quaternion),v()},[l,c,a,v]);V.useEffect(()=>(p.background&&(d.current=p.background,p.background=null,P.background=d.current),()=>{d.current&&(p.background=d.current)}),[]),(0,ee.useFrame)((C,O)=>{var z;if(x.current&&T.current){if(y.current)if(ze.angleTo(Bt)<.01)y.current=!1,Qi(l)&&c.up.copy(U.current);else{let H=O*Ki;ze.rotateTowards(Bt,H),c.position.set(0,0,1).applyQuaternion(ze).multiplyScalar(h.current).add(G.current),c.up.set(0,1,0).applyQuaternion(ze).normalize(),c.quaternion.copy(ze),i?i():l&&l.update(),v()}$r.copy(c.matrix).invert(),(z=T.current)==null||z.quaternion.setFromRotationMatrix($r),o&&(g.autoClear=!1),g.clearDepth(),g.render(P,x.current)}},t);let S=Qr(x),R=V.useMemo(()=>({tweenCamera:m,raycast:S}),[m]),[u,E]=e,b=r.endsWith("-center")?0:r.endsWith("-left")?-s.width/2+u:s.width/2-u,L=r.startsWith("center-")?0:r.startsWith("top-")?s.height/2-E:-s.height/2+E;return(0,ee.createPortal)((0,Ve.jsxs)(to.Provider,{value:R,children:[(0,Ve.jsx)(jr,{ref:x,position:[0,0,200]}),(0,Ve.jsx)("group",{ref:T,position:[b,L,0],children:n})]}),P)};var pt=J(require("react")),io=require("@react-three/fiber"),no=require("three");var M=require("react/jsx-runtime");function Gt({scale:r=[.8,.05,.05],color:e,rotation:t}){return(0,M.jsx)("group",{rotation:t,children:(0,M.jsxs)("mesh",{position:[.4,0,0],children:[(0,M.jsx)("boxGeometry",{args:r}),(0,M.jsx)("meshBasicMaterial",{color:e,toneMapped:!1})]})})}function Re(c){var l=c,{onClick:r,font:e,disabled:t,arcStyle:o,label:i,labelColor:a,axisHeadScale:n=1}=l,s=q(l,["onClick","font","disabled","arcStyle","label","labelColor","axisHeadScale"]);let g=(0,io.useThree)(y=>y.gl),p=pt.useMemo(()=>{let y=document.createElement("canvas");y.width=64,y.height=64;let h=y.getContext("2d");return h.beginPath(),h.arc(32,32,16,0,2*Math.PI),h.closePath(),h.fillStyle=o,h.fill(),i&&(h.font=e,h.textAlign="center",h.fillStyle=a,h.fillText(i,32,41)),new no.CanvasTexture(y)},[o,i,a,e]),[v,d]=pt.useState(!1),T=(i?1:.75)*(v?1.2:1)*n;return(0,M.jsx)("sprite",$(w({scale:T,onPointerOver:t?void 0:y=>{y.stopPropagation(),d(!0)},onPointerOut:t?void 0:r||(y=>{y.stopPropagation(),d(!1)})},s),{children:(0,M.jsx)("spriteMaterial",{map:p,"map-encoding":g.outputEncoding,"map-anisotropy":g.capabilities.getMaxAnisotropy()||1,alphaTest:.3,opacity:i?1:.75,toneMapped:!1})}))}var ao=p=>{var v=p,{hideNegativeAxes:r,hideAxisHeads:e,disabled:t,font:o="18px Inter var, Arial, sans-serif",axisColors:i=["#ff2060","#20df80","#2080ff"],axisHeadScale:a=1,axisScale:n,labels:s=["X","Y","Z"],labelColor:c="#000",onClick:l}=v,g=q(v,["hideNegativeAxes","hideAxisHeads","disabled","font","axisColors","axisHeadScale","axisScale","labels","labelColor","onClick"]);let[d,T,x]=i,{tweenCamera:P,raycast:y}=ro(),h={font:o,disabled:t,labelColor:c,raycast:y,onClick:l,axisHeadScale:a,onPointerDown:t?void 0:G=>{P(G.object.position),G.stopPropagation()}};return(0,M.jsxs)("group",$(w({scale:40},g),{children:[(0,M.jsx)(Gt,{color:d,rotation:[0,0,0],scale:n}),(0,M.jsx)(Gt,{color:T,rotation:[0,0,Math.PI/2],scale:n}),(0,M.jsx)(Gt,{color:x,rotation:[0,-Math.PI/2,0],scale:n}),!e&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Re,w({arcStyle:d,position:[1,0,0],label:s[0]},h)),(0,M.jsx)(Re,w({arcStyle:T,position:[0,1,0],label:s[1]},h)),(0,M.jsx)(Re,w({arcStyle:x,position:[0,0,1],label:s[2]},h)),!r&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Re,w({arcStyle:d,position:[-1,0,0]},h)),(0,M.jsx)(Re,w({arcStyle:T,position:[0,-1,0]},h)),(0,M.jsx)(Re,w({arcStyle:x,position:[0,0,-1]},h))]})]}),(0,M.jsx)("ambientLight",{intensity:.5}),(0,M.jsx)("pointLight",{position:[10,10,10],intensity:.5})]}))};var Ae=require("react/jsx-runtime");function so({isFigmaPlugin:r}){return(0,Ae.jsx)(Ae.Fragment,{children:(0,Ae.jsx)(oo,{alignment:"bottom-right",margin:r?[25,25]:[65,110],renderPriority:2,children:(0,Ae.jsx)(ao,{axisColors:["#FF430A","#FF430A","#FF430A"],labelColor:"white",hideNegativeAxes:!0,axisHeadScale:.8})})})}var Z={LEFT:1,RIGHT:2,MIDDLE:4},f=Object.freeze({NONE:0,ROTATE:1,TRUCK:2,OFFSET:4,DOLLY:8,ZOOM:16,TOUCH_ROTATE:32,TOUCH_TRUCK:64,TOUCH_OFFSET:128,TOUCH_DOLLY:256,TOUCH_ZOOM:512,TOUCH_DOLLY_TRUCK:1024,TOUCH_DOLLY_OFFSET:2048,TOUCH_DOLLY_ROTATE:4096,TOUCH_ZOOM_TRUCK:8192,TOUCH_ZOOM_OFFSET:16384,TOUCH_ZOOM_ROTATE:32768});function Ee(r){return r.isPerspectiveCamera}function _e(r){return r.isOrthographicCamera}var we=Math.PI*2,co=Math.PI/2,vo=1e-5;function N(r,e=vo){return Math.abs(r)<e}function I(r,e,t=vo){return N(r-e,t)}function lo(r,e){return Math.round(r/e)*e}function ke(r){return isFinite(r)?r:r<0?-Number.MAX_VALUE:Number.MAX_VALUE}function Ye(r){return Math.abs(r)<Number.MAX_VALUE?r:r*(1/0)}function Vt(r,e){e.set(0,0),r.forEach(t=>{e.x+=t.clientX,e.y+=t.clientY}),e.x/=r.length,e.y/=r.length}function kt(r,e){return _e(r)?(console.warn(`${e} is not supported in OrthographicCamera`),!0):!1}function mo(r){return r.invert?r.invert():r.inverse(),r}var jt=class{constructor(){this._listeners={}}addEventListener(e,t){let o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(t)===-1&&o[e].push(t)}removeEventListener(e,t){let i=this._listeners[e];if(i!==void 0){let a=i.indexOf(t);a!==-1&&i.splice(a,1)}}removeAllEventListeners(e){if(!e){this._listeners={};return}Array.isArray(this._listeners[e])&&(this._listeners[e].length=0)}dispatchEvent(e){let o=this._listeners[e.type];if(o!==void 0){e.target=this;let i=o.slice(0);for(let a=0,n=i.length;a<n;a++)i[a].call(this,e)}}},yo=typeof window!="undefined",Wi=yo&&/Mac/.test(navigator.platform),fo=!(yo&&"PointerEvent"in window),ht=1/8,_,uo,gt,Yt,K,A,D,Le,ie,ne,Te,po,ho,te,Xe,Oe,go,Xt,_o,Zt,qt,_t,Ze=class extends jt{constructor(e,t){if(super(),this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.minDistance=0,this.maxDistance=1/0,this.infinityDolly=!1,this.minZoom=.01,this.maxZoom=1/0,this.dampingFactor=.05,this.draggingDampingFactor=.25,this.azimuthRotateSpeed=1,this.polarRotateSpeed=1,this.dollySpeed=1,this.truckSpeed=2,this.dollyToCursor=!1,this.dragToOffset=!1,this.verticalDragToForward=!1,this.boundaryFriction=0,this.restThreshold=.01,this.colliderMeshes=[],this.cancel=()=>{},this._enabled=!0,this._state=f.NONE,this._viewport=null,this._dollyControlAmount=0,this._hasRested=!0,this._boundaryEnclosesCamera=!1,this._needsUpdate=!0,this._updatedLastTime=!1,this._elementRect=new DOMRect,this._activePointers=[],this._truckInternal=(o,i,a)=>{if(Ee(this._camera)){let n=A.copy(this._camera.position).sub(this._target),s=this._camera.getEffectiveFOV()*_.MathUtils.DEG2RAD,c=n.length()*Math.tan(s*.5),l=this.truckSpeed*o*c/this._elementRect.height,g=this.truckSpeed*i*c/this._elementRect.height;this.verticalDragToForward?(a?this.setFocalOffset(this._focalOffsetEnd.x+l,this._focalOffsetEnd.y,this._focalOffsetEnd.z,!0):this.truck(l,0,!0),this.forward(-g,!0)):a?this.setFocalOffset(this._focalOffsetEnd.x+l,this._focalOffsetEnd.y+g,this._focalOffsetEnd.z,!0):this.truck(l,g,!0)}else if(_e(this._camera)){let n=this._camera,s=o*(n.right-n.left)/n.zoom/this._elementRect.width,c=i*(n.top-n.bottom)/n.zoom/this._elementRect.height;a?this.setFocalOffset(this._focalOffsetEnd.x+s,this._focalOffsetEnd.y+c,this._focalOffsetEnd.z,!0):this.truck(s,c,!0)}},this._rotateInternal=(o,i)=>{let a=we*this.azimuthRotateSpeed*o/this._elementRect.height,n=we*this.polarRotateSpeed*i/this._elementRect.height;this.rotate(a,n,!0)},this._dollyInternal=(o,i,a)=>{let n=Math.pow(.95,-o*this.dollySpeed),s=this._sphericalEnd.radius*n,c=this._sphericalEnd.radius,l=c*(o>=0?-1:1);this.dollyTo(s),this.infinityDolly&&(s<this.minDistance||this.maxDistance===this.minDistance)&&(this._camera.getWorldDirection(A),this._targetEnd.add(A.normalize().multiplyScalar(l)),this._target.add(A.normalize().multiplyScalar(l))),this.dollyToCursor&&(this._dollyControlAmount+=this._sphericalEnd.radius-c,this.infinityDolly&&(s<this.minDistance||this.maxDistance===this.minDistance)&&(this._dollyControlAmount-=l),this._dollyControlCoord.set(i,a))},this._zoomInternal=(o,i,a)=>{let n=Math.pow(.95,o*this.dollySpeed),s=this._zoomEnd;this.zoomTo(this._zoom*n),this.dollyToCursor&&(this._dollyControlAmount+=this._zoomEnd-s,this._dollyControlCoord.set(i,a))},typeof _=="undefined"&&console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."),this._camera=e,this._yAxisUpSpace=new _.Quaternion().setFromUnitVectors(this._camera.up,gt),this._yAxisUpSpaceInverse=mo(this._yAxisUpSpace.clone()),this._state=f.NONE,this._domElement=t,this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none",this._target=new _.Vector3,this._targetEnd=this._target.clone(),this._focalOffset=new _.Vector3,this._focalOffsetEnd=this._focalOffset.clone(),this._spherical=new _.Spherical().setFromVector3(A.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)),this._sphericalEnd=this._spherical.clone(),this._zoom=this._camera.zoom,this._zoomEnd=this._zoom,this._nearPlaneCorners=[new _.Vector3,new _.Vector3,new _.Vector3,new _.Vector3],this._updateNearPlaneCorners(),this._boundary=new _.Box3(new _.Vector3(-1/0,-1/0,-1/0),new _.Vector3(1/0,1/0,1/0)),this._target0=this._target.clone(),this._position0=this._camera.position.clone(),this._zoom0=this._zoom,this._focalOffset0=this._focalOffset.clone(),this._dollyControlAmount=0,this._dollyControlCoord=new _.Vector2,this.mouseButtons={left:f.ROTATE,middle:f.DOLLY,right:f.TRUCK,wheel:Ee(this._camera)?f.DOLLY:_e(this._camera)?f.ZOOM:f.NONE},this.touches={one:f.TOUCH_ROTATE,two:Ee(this._camera)?f.TOUCH_DOLLY_TRUCK:_e(this._camera)?f.TOUCH_ZOOM_TRUCK:f.NONE,three:f.TOUCH_TRUCK},this._domElement){let o=new _.Vector2,i=new _.Vector2,a=new _.Vector2,n=m=>{if(!this._enabled)return;let S={pointerId:m.pointerId,clientX:m.clientX,clientY:m.clientY,deltaX:0,deltaY:0};this._activePointers.push(S),this._domElement.ownerDocument.removeEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",v),this._domElement.ownerDocument.addEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",v),h(m)},s=m=>{if(!this._enabled)return;let S={pointerId:0,clientX:m.clientX,clientY:m.clientY,deltaX:0,deltaY:0};this._activePointers.push(S),this._domElement.ownerDocument.removeEventListener("mousemove",g),this._domElement.ownerDocument.removeEventListener("mouseup",d),this._domElement.ownerDocument.addEventListener("mousemove",g),this._domElement.ownerDocument.addEventListener("mouseup",d),h(m)},c=m=>{this._enabled&&(m.preventDefault(),Array.prototype.forEach.call(m.changedTouches,S=>{let R={pointerId:S.identifier,clientX:S.clientX,clientY:S.clientY,deltaX:0,deltaY:0};this._activePointers.push(R)}),this._domElement.ownerDocument.removeEventListener("touchmove",p,{passive:!1}),this._domElement.ownerDocument.removeEventListener("touchend",T),this._domElement.ownerDocument.addEventListener("touchmove",p,{passive:!1}),this._domElement.ownerDocument.addEventListener("touchend",T),h(m))},l=m=>{m.cancelable&&m.preventDefault();let S=m.pointerId,R=this._findPointerById(S);if(R){if(R.clientX=m.clientX,R.clientY=m.clientY,R.deltaX=m.movementX,R.deltaY=m.movementY,m.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=0,(m.buttons&Z.LEFT)===Z.LEFT&&(this._state=this._state|this.mouseButtons.left),(m.buttons&Z.MIDDLE)===Z.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(m.buttons&Z.RIGHT)===Z.RIGHT&&(this._state=this._state|this.mouseButtons.right);G()}},g=m=>{let S=this._findPointerById(0);S&&(S.clientX=m.clientX,S.clientY=m.clientY,S.deltaX=m.movementX,S.deltaY=m.movementY,this._state=0,(m.buttons&Z.LEFT)===Z.LEFT&&(this._state=this._state|this.mouseButtons.left),(m.buttons&Z.MIDDLE)===Z.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(m.buttons&Z.RIGHT)===Z.RIGHT&&(this._state=this._state|this.mouseButtons.right),G())},p=m=>{m.cancelable&&m.preventDefault(),Array.prototype.forEach.call(m.changedTouches,S=>{let R=S.identifier,u=this._findPointerById(R);u&&(u.clientX=S.clientX,u.clientY=S.clientY)}),G()},v=m=>{let S=m.pointerId,R=this._findPointerById(S);if(R&&this._activePointers.splice(this._activePointers.indexOf(R),1),m.pointerType==="touch")switch(this._activePointers.length){case 0:this._state=f.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=f.NONE;U()},d=()=>{let m=this._findPointerById(0);m&&this._activePointers.splice(this._activePointers.indexOf(m),1),this._state=f.NONE,U()},T=m=>{switch(Array.prototype.forEach.call(m.changedTouches,S=>{let R=S.identifier,u=this._findPointerById(R);u&&this._activePointers.splice(this._activePointers.indexOf(u),1)}),this._activePointers.length){case 0:this._state=f.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}U()},x=-1,P=m=>{if(!this._enabled||this.mouseButtons.wheel===f.NONE)return;if(m.preventDefault(),this.dollyToCursor||this.mouseButtons.wheel===f.ROTATE||this.mouseButtons.wheel===f.TRUCK){let b=performance.now();x-b<1e3&&this._getClientRect(this._elementRect),x=b}let S=Wi?-1:-3,R=m.deltaMode===1?m.deltaY/S:m.deltaY/(S*10),u=this.dollyToCursor?(m.clientX-this._elementRect.x)/this._elementRect.width*2-1:0,E=this.dollyToCursor?(m.clientY-this._elementRect.y)/this._elementRect.height*-2+1:0;switch(this.mouseButtons.wheel){case f.ROTATE:{this._rotateInternal(m.deltaX,m.deltaY);break}case f.TRUCK:{this._truckInternal(m.deltaX,m.deltaY,!1);break}case f.OFFSET:{this._truckInternal(m.deltaX,m.deltaY,!0);break}case f.DOLLY:{this._dollyInternal(-R,u,E);break}case f.ZOOM:{this._zoomInternal(-R,u,E);break}}this.dispatchEvent({type:"control"})},y=m=>{this._enabled&&m.preventDefault()},h=m=>{if(!this._enabled)return;if(Vt(this._activePointers,K),this._getClientRect(this._elementRect),o.copy(K),i.copy(K),this._activePointers.length>=2){let R=K.x-this._activePointers[1].clientX,u=K.y-this._activePointers[1].clientY,E=Math.sqrt(R*R+u*u);a.set(0,E);let b=(this._activePointers[0].clientX+this._activePointers[1].clientX)*.5,L=(this._activePointers[0].clientY+this._activePointers[1].clientY)*.5;i.set(b,L)}if("touches"in m||"pointerType"in m&&m.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=0,(m.buttons&Z.LEFT)===Z.LEFT&&(this._state=this._state|this.mouseButtons.left),(m.buttons&Z.MIDDLE)===Z.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(m.buttons&Z.RIGHT)===Z.RIGHT&&(this._state=this._state|this.mouseButtons.right);this.dispatchEvent({type:"controlstart"})},G=()=>{if(!this._enabled)return;Vt(this._activePointers,K);let m=this._domElement&&document.pointerLockElement===this._domElement,S=m?-this._activePointers[0].deltaX:i.x-K.x,R=m?-this._activePointers[0].deltaY:i.y-K.y;if(i.copy(K),((this._state&f.ROTATE)===f.ROTATE||(this._state&f.TOUCH_ROTATE)===f.TOUCH_ROTATE||(this._state&f.TOUCH_DOLLY_ROTATE)===f.TOUCH_DOLLY_ROTATE||(this._state&f.TOUCH_ZOOM_ROTATE)===f.TOUCH_ZOOM_ROTATE)&&this._rotateInternal(S,R),(this._state&f.DOLLY)===f.DOLLY||(this._state&f.ZOOM)===f.ZOOM){let u=this.dollyToCursor?(o.x-this._elementRect.x)/this._elementRect.width*2-1:0,E=this.dollyToCursor?(o.y-this._elementRect.y)/this._elementRect.height*-2+1:0;this._state===f.DOLLY?this._dollyInternal(R*ht,u,E):this._zoomInternal(R*ht,u,E)}if((this._state&f.TOUCH_DOLLY)===f.TOUCH_DOLLY||(this._state&f.TOUCH_ZOOM)===f.TOUCH_ZOOM||(this._state&f.TOUCH_DOLLY_TRUCK)===f.TOUCH_DOLLY_TRUCK||(this._state&f.TOUCH_ZOOM_TRUCK)===f.TOUCH_ZOOM_TRUCK||(this._state&f.TOUCH_DOLLY_OFFSET)===f.TOUCH_DOLLY_OFFSET||(this._state&f.TOUCH_ZOOM_OFFSET)===f.TOUCH_ZOOM_OFFSET||(this._state&f.TOUCH_DOLLY_ROTATE)===f.TOUCH_DOLLY_ROTATE||(this._state&f.TOUCH_ZOOM_ROTATE)===f.TOUCH_ZOOM_ROTATE){let u=K.x-this._activePointers[1].clientX,E=K.y-this._activePointers[1].clientY,b=Math.sqrt(u*u+E*E),L=a.y-b;a.set(0,b);let C=this.dollyToCursor?(i.x-this._elementRect.x)/this._elementRect.width*2-1:0,O=this.dollyToCursor?(i.y-this._elementRect.y)/this._elementRect.height*-2+1:0;this._state===f.TOUCH_DOLLY||this._state===f.TOUCH_DOLLY_ROTATE||this._state===f.TOUCH_DOLLY_TRUCK||this._state===f.TOUCH_DOLLY_OFFSET?this._dollyInternal(L*ht,C,O):this._zoomInternal(L*ht,C,O)}((this._state&f.TRUCK)===f.TRUCK||(this._state&f.TOUCH_TRUCK)===f.TOUCH_TRUCK||(this._state&f.TOUCH_DOLLY_TRUCK)===f.TOUCH_DOLLY_TRUCK||(this._state&f.TOUCH_ZOOM_TRUCK)===f.TOUCH_ZOOM_TRUCK)&&this._truckInternal(S,R,!1),((this._state&f.OFFSET)===f.OFFSET||(this._state&f.TOUCH_OFFSET)===f.TOUCH_OFFSET||(this._state&f.TOUCH_DOLLY_OFFSET)===f.TOUCH_DOLLY_OFFSET||(this._state&f.TOUCH_ZOOM_OFFSET)===f.TOUCH_ZOOM_OFFSET)&&this._truckInternal(S,R,!0),this.dispatchEvent({type:"control"})},U=()=>{Vt(this._activePointers,K),i.copy(K),this._activePointers.length===0&&(this._domElement.ownerDocument.removeEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",v),this._domElement.ownerDocument.removeEventListener("touchmove",p,{passive:!1}),this._domElement.ownerDocument.removeEventListener("touchend",T),this.dispatchEvent({type:"controlend"}))};this._domElement.addEventListener("pointerdown",n),fo&&this._domElement.addEventListener("mousedown",s),fo&&this._domElement.addEventListener("touchstart",c),this._domElement.addEventListener("pointercancel",v),this._domElement.addEventListener("wheel",P,{passive:!1}),this._domElement.addEventListener("contextmenu",y),this._removeAllEventListeners=()=>{this._domElement.removeEventListener("pointerdown",n),this._domElement.removeEventListener("mousedown",s),this._domElement.removeEventListener("touchstart",c),this._domElement.removeEventListener("pointercancel",v),this._domElement.removeEventListener("wheel",P,{passive:!1}),this._domElement.removeEventListener("contextmenu",y),this._domElement.ownerDocument.removeEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("mousemove",g),this._domElement.ownerDocument.removeEventListener("touchmove",p,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",v),this._domElement.ownerDocument.removeEventListener("mouseup",d),this._domElement.ownerDocument.removeEventListener("touchend",T)},this.cancel=()=>{this._state!==f.NONE&&(this._state=f.NONE,this._activePointers.length=0,U())}}this.update(0)}static install(e){_=e.THREE,uo=Object.freeze(new _.Vector3(0,0,0)),gt=Object.freeze(new _.Vector3(0,1,0)),Yt=Object.freeze(new _.Vector3(0,0,1)),K=new _.Vector2,A=new _.Vector3,D=new _.Vector3,Le=new _.Vector3,ie=new _.Vector3,ne=new _.Vector3,Te=new _.Vector3,po=new _.Vector3,ho=new _.Vector3,te=new _.Spherical,Xe=new _.Spherical,Oe=new _.Box3,go=new _.Box3,Xt=new _.Sphere,_o=new _.Quaternion,Zt=new _.Quaternion,qt=new _.Matrix4,_t=new _.Raycaster}static get ACTION(){return f}get camera(){return this._camera}set camera(e){this._camera=e,this.updateCameraUp(),this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,e?(this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none"):(this.cancel(),this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect="")}get active(){return!this._hasRested}get currentAction(){return this._state}get distance(){return this._spherical.radius}set distance(e){this._spherical.radius===e&&this._sphericalEnd.radius===e||(this._spherical.radius=e,this._sphericalEnd.radius=e,this._needsUpdate=!0)}get azimuthAngle(){return this._spherical.theta}set azimuthAngle(e){this._spherical.theta===e&&this._sphericalEnd.theta===e||(this._spherical.theta=e,this._sphericalEnd.theta=e,this._needsUpdate=!0)}get polarAngle(){return this._spherical.phi}set polarAngle(e){this._spherical.phi===e&&this._sphericalEnd.phi===e||(this._spherical.phi=e,this._sphericalEnd.phi=e,this._needsUpdate=!0)}get boundaryEnclosesCamera(){return this._boundaryEnclosesCamera}set boundaryEnclosesCamera(e){this._boundaryEnclosesCamera=e,this._needsUpdate=!0}addEventListener(e,t){super.addEventListener(e,t)}removeEventListener(e,t){super.removeEventListener(e,t)}rotate(e,t,o=!1){return this.rotateTo(this._sphericalEnd.theta+e,this._sphericalEnd.phi+t,o)}rotateAzimuthTo(e,t=!1){return this.rotateTo(e,this._sphericalEnd.phi,t)}rotatePolarTo(e,t=!1){return this.rotateTo(this._sphericalEnd.theta,e,t)}rotateTo(e,t,o=!1){let i=_.MathUtils.clamp(e,this.minAzimuthAngle,this.maxAzimuthAngle),a=_.MathUtils.clamp(t,this.minPolarAngle,this.maxPolarAngle);this._sphericalEnd.theta=i,this._sphericalEnd.phi=a,this._sphericalEnd.makeSafe(),this._needsUpdate=!0,o||(this._spherical.theta=this._sphericalEnd.theta,this._spherical.phi=this._sphericalEnd.phi);let n=!o||I(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&I(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold);return this._createOnRestPromise(n)}dolly(e,t=!1){return this.dollyTo(this._sphericalEnd.radius-e,t)}dollyTo(e,t=!1){let o=this._sphericalEnd.radius,i=_.MathUtils.clamp(e,this.minDistance,this.maxDistance);if(this.colliderMeshes.length>=1){let s=this._collisionTest(),c=I(s,this._spherical.radius);if(!(o>i)&&c)return Promise.resolve();this._sphericalEnd.radius=Math.min(i,s)}else this._sphericalEnd.radius=i;this._needsUpdate=!0,t||(this._spherical.radius=this._sphericalEnd.radius);let n=!t||I(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(n)}zoom(e,t=!1){return this.zoomTo(this._zoomEnd+e,t)}zoomTo(e,t=!1){this._zoomEnd=_.MathUtils.clamp(e,this.minZoom,this.maxZoom),this._needsUpdate=!0,t||(this._zoom=this._zoomEnd);let o=!t||I(this._zoom,this._zoomEnd,this.restThreshold);return this._createOnRestPromise(o)}pan(e,t,o=!1){return console.warn("`pan` has been renamed to `truck`"),this.truck(e,t,o)}truck(e,t,o=!1){this._camera.updateMatrix(),ie.setFromMatrixColumn(this._camera.matrix,0),ne.setFromMatrixColumn(this._camera.matrix,1),ie.multiplyScalar(e),ne.multiplyScalar(-t);let i=A.copy(ie).add(ne),a=D.copy(this._targetEnd).add(i);return this.moveTo(a.x,a.y,a.z,o)}forward(e,t=!1){A.setFromMatrixColumn(this._camera.matrix,0),A.crossVectors(this._camera.up,A),A.multiplyScalar(e);let o=D.copy(this._targetEnd).add(A);return this.moveTo(o.x,o.y,o.z,t)}moveTo(e,t,o,i=!1){let a=A.set(e,t,o).sub(this._targetEnd);this._encloseToBoundary(this._targetEnd,a,this.boundaryFriction),this._needsUpdate=!0,i||this._target.copy(this._targetEnd);let n=!i||I(this._target.x,this._targetEnd.x,this.restThreshold)&&I(this._target.y,this._targetEnd.y,this.restThreshold)&&I(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(n)}fitToBox(e,t,{cover:o=!1,paddingLeft:i=0,paddingRight:a=0,paddingBottom:n=0,paddingTop:s=0}={}){let c=[],l=e.isBox3?Oe.copy(e):Oe.setFromObject(e);l.isEmpty()&&(console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"),Promise.resolve());let g=lo(this._sphericalEnd.theta,co),p=lo(this._sphericalEnd.phi,co);c.push(this.rotateTo(g,p,t));let v=A.setFromSpherical(this._sphericalEnd).normalize(),d=_o.setFromUnitVectors(v,Yt),T=I(Math.abs(v.y),1);T&&d.multiply(Zt.setFromAxisAngle(gt,g)),d.multiply(this._yAxisUpSpaceInverse);let x=go.makeEmpty();D.copy(l.min).applyQuaternion(d),x.expandByPoint(D),D.copy(l.min).setX(l.max.x).applyQuaternion(d),x.expandByPoint(D),D.copy(l.min).setY(l.max.y).applyQuaternion(d),x.expandByPoint(D),D.copy(l.max).setZ(l.min.z).applyQuaternion(d),x.expandByPoint(D),D.copy(l.min).setZ(l.max.z).applyQuaternion(d),x.expandByPoint(D),D.copy(l.max).setY(l.min.y).applyQuaternion(d),x.expandByPoint(D),D.copy(l.max).setX(l.min.x).applyQuaternion(d),x.expandByPoint(D),D.copy(l.max).applyQuaternion(d),x.expandByPoint(D),x.min.x-=i,x.min.y-=n,x.max.x+=a,x.max.y+=s,d.setFromUnitVectors(Yt,v),T&&d.premultiply(Zt.invert()),d.premultiply(this._yAxisUpSpace);let P=x.getSize(A),y=x.getCenter(D).applyQuaternion(d);if(Ee(this._camera)){let h=this.getDistanceToFitBox(P.x,P.y,P.z,o);c.push(this.moveTo(y.x,y.y,y.z,t)),c.push(this.dollyTo(h,t)),c.push(this.setFocalOffset(0,0,0,t))}else if(_e(this._camera)){let h=this._camera,G=h.right-h.left,U=h.top-h.bottom,m=o?Math.max(G/P.x,U/P.y):Math.min(G/P.x,U/P.y);c.push(this.moveTo(y.x,y.y,y.z,t)),c.push(this.zoomTo(m,t)),c.push(this.setFocalOffset(0,0,0,t))}return Promise.all(c)}fitToSphere(e,t){let o=[],a=e instanceof _.Sphere?Xt.copy(e):$i(e,Xt);if(o.push(this.moveTo(a.center.x,a.center.y,a.center.z,t)),Ee(this._camera)){let n=this.getDistanceToFitSphere(a.radius);o.push(this.dollyTo(n,t))}else if(_e(this._camera)){let n=this._camera.right-this._camera.left,s=this._camera.top-this._camera.bottom,c=2*a.radius,l=Math.min(n/c,s/c);o.push(this.zoomTo(l,t))}return o.push(this.setFocalOffset(0,0,0,t)),Promise.all(o)}setLookAt(e,t,o,i,a,n,s=!1){let c=D.set(i,a,n),l=A.set(e,t,o);this._targetEnd.copy(c),this._sphericalEnd.setFromVector3(l.sub(c).applyQuaternion(this._yAxisUpSpace)),this.normalizeRotations(),this._needsUpdate=!0,s||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let g=!s||I(this._target.x,this._targetEnd.x,this.restThreshold)&&I(this._target.y,this._targetEnd.y,this.restThreshold)&&I(this._target.z,this._targetEnd.z,this.restThreshold)&&I(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&I(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&I(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(g)}lerpLookAt(e,t,o,i,a,n,s,c,l,g,p,v,d,T=!1){let x=A.set(i,a,n),P=D.set(e,t,o);te.setFromVector3(P.sub(x).applyQuaternion(this._yAxisUpSpace));let y=Le.set(g,p,v),h=D.set(s,c,l);Xe.setFromVector3(h.sub(y).applyQuaternion(this._yAxisUpSpace)),this._targetEnd.copy(x.lerp(y,d));let G=Xe.theta-te.theta,U=Xe.phi-te.phi,m=Xe.radius-te.radius;this._sphericalEnd.set(te.radius+m*d,te.phi+U*d,te.theta+G*d),this.normalizeRotations(),this._needsUpdate=!0,T||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let S=!T||I(this._target.x,this._targetEnd.x,this.restThreshold)&&I(this._target.y,this._targetEnd.y,this.restThreshold)&&I(this._target.z,this._targetEnd.z,this.restThreshold)&&I(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&I(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&I(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(S)}setPosition(e,t,o,i=!1){return this.setLookAt(e,t,o,this._targetEnd.x,this._targetEnd.y,this._targetEnd.z,i)}setTarget(e,t,o,i=!1){let a=this.getPosition(A);return this.setLookAt(a.x,a.y,a.z,e,t,o,i)}setFocalOffset(e,t,o,i=!1){this._focalOffsetEnd.set(e,t,o),this._needsUpdate=!0,i||this._focalOffset.copy(this._focalOffsetEnd);let a=!i||I(this._focalOffset.x,this._focalOffsetEnd.x,this.restThreshold)&&I(this._focalOffset.y,this._focalOffsetEnd.y,this.restThreshold)&&I(this._focalOffset.z,this._focalOffsetEnd.z,this.restThreshold);return this._createOnRestPromise(a)}setOrbitPoint(e,t,o){this._camera.updateMatrixWorld(),ie.setFromMatrixColumn(this._camera.matrixWorldInverse,0),ne.setFromMatrixColumn(this._camera.matrixWorldInverse,1),Te.setFromMatrixColumn(this._camera.matrixWorldInverse,2);let i=A.set(e,t,o),a=i.distanceTo(this._camera.position),n=i.sub(this._camera.position);ie.multiplyScalar(n.x),ne.multiplyScalar(n.y),Te.multiplyScalar(n.z),A.copy(ie).add(ne).add(Te),A.z=A.z+a,this.dollyTo(a,!1),this.setFocalOffset(-A.x,A.y,-A.z,!1),this.moveTo(e,t,o,!1)}setBoundary(e){if(!e){this._boundary.min.set(-1/0,-1/0,-1/0),this._boundary.max.set(1/0,1/0,1/0),this._needsUpdate=!0;return}this._boundary.copy(e),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._needsUpdate=!0}setViewport(e,t,o,i){if(e===null){this._viewport=null;return}this._viewport=this._viewport||new _.Vector4,typeof e=="number"?this._viewport.set(e,t,o,i):this._viewport.copy(e)}getDistanceToFitBox(e,t,o,i=!1){if(kt(this._camera,"getDistanceToFitBox"))return this._spherical.radius;let a=e/t,n=this._camera.getEffectiveFOV()*_.MathUtils.DEG2RAD,s=this._camera.aspect;return((i?a>s:a<s)?t:e/s)*.5/Math.tan(n*.5)+o*.5}getDistanceToFitSphere(e){if(kt(this._camera,"getDistanceToFitSphere"))return this._spherical.radius;let t=this._camera.getEffectiveFOV()*_.MathUtils.DEG2RAD,o=Math.atan(Math.tan(t*.5)*this._camera.aspect)*2,i=1<this._camera.aspect?t:o;return e/Math.sin(i*.5)}getTarget(e){return(e&&e.isVector3?e:new _.Vector3).copy(this._targetEnd)}getPosition(e){return(e&&e.isVector3?e:new _.Vector3).setFromSpherical(this._sphericalEnd).applyQuaternion(this._yAxisUpSpaceInverse).add(this._targetEnd)}getFocalOffset(e){return(e&&e.isVector3?e:new _.Vector3).copy(this._focalOffsetEnd)}normalizeRotations(){this._sphericalEnd.theta=this._sphericalEnd.theta%we,this._sphericalEnd.theta<0&&(this._sphericalEnd.theta+=we),this._spherical.theta+=we*Math.round((this._sphericalEnd.theta-this._spherical.theta)/we)}reset(e=!1){let t=[this.setLookAt(this._position0.x,this._position0.y,this._position0.z,this._target0.x,this._target0.y,this._target0.z,e),this.setFocalOffset(this._focalOffset0.x,this._focalOffset0.y,this._focalOffset0.z,e),this.zoomTo(this._zoom0,e)];return Promise.all(t)}saveState(){this.getTarget(this._target0),this.getPosition(this._position0),this._zoom0=this._zoom,this._focalOffset0.copy(this._focalOffset)}updateCameraUp(){this._yAxisUpSpace.setFromUnitVectors(this._camera.up,gt),mo(this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace))}update(e){let t=this._state===f.NONE?this.dampingFactor:this.draggingDampingFactor,o=Math.min(t*e*60,1),i=this._sphericalEnd.theta-this._spherical.theta,a=this._sphericalEnd.phi-this._spherical.phi,n=this._sphericalEnd.radius-this._spherical.radius,s=po.subVectors(this._targetEnd,this._target),c=ho.subVectors(this._focalOffsetEnd,this._focalOffset);if(!N(i)||!N(a)||!N(n)||!N(s.x)||!N(s.y)||!N(s.z)||!N(c.x)||!N(c.y)||!N(c.z)?(this._spherical.set(this._spherical.radius+n*o,this._spherical.phi+a*o,this._spherical.theta+i*o),this._target.add(s.multiplyScalar(o)),this._focalOffset.add(c.multiplyScalar(o)),this._needsUpdate=!0):(this._spherical.copy(this._sphericalEnd),this._target.copy(this._targetEnd),this._focalOffset.copy(this._focalOffsetEnd)),this._dollyControlAmount!==0){if(Ee(this._camera)){let d=this._camera,T=A.setFromSpherical(this._sphericalEnd).applyQuaternion(this._yAxisUpSpaceInverse).normalize().negate(),x=D.copy(T).cross(d.up).normalize();x.lengthSq()===0&&(x.x=1);let P=Le.crossVectors(x,T),y=this._sphericalEnd.radius*Math.tan(d.getEffectiveFOV()*_.MathUtils.DEG2RAD*.5),G=(this._sphericalEnd.radius-this._dollyControlAmount-this._sphericalEnd.radius)/this._sphericalEnd.radius,U=A.copy(this._targetEnd).add(x.multiplyScalar(this._dollyControlCoord.x*y*d.aspect)).add(P.multiplyScalar(this._dollyControlCoord.y*y));this._targetEnd.lerp(U,G)}else if(_e(this._camera)){let d=this._camera,T=d.getWorldDirection(A.clone()),x=this._targetEnd.x*T.x+this._targetEnd.y*T.y+this._targetEnd.z*T.z,P=A.set(this._dollyControlCoord.x,this._dollyControlCoord.y,(d.near+d.far)/(d.near-d.far)).unproject(d),y=D.set(0,0,-1).applyQuaternion(d.quaternion),h=Le.copy(P).add(y.multiplyScalar(-P.dot(d.up))),U=-(this._zoom-this._dollyControlAmount-this._zoomEnd)/this._zoom;this._targetEnd.lerp(h,U);let m=this._targetEnd.x*T.x+this._targetEnd.y*T.y+this._targetEnd.z*T.z,S=T.multiplyScalar(m-x);this._targetEnd.sub(S)}this._target.copy(this._targetEnd),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._dollyControlAmount=0}let l=this._collisionTest();this._spherical.radius=Math.min(this._spherical.radius,l),this._spherical.makeSafe(),this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target),this._camera.lookAt(this._target),(!N(this._focalOffset.x)||!N(this._focalOffset.y)||!N(this._focalOffset.z))&&(this._camera.updateMatrix(),ie.setFromMatrixColumn(this._camera.matrix,0),ne.setFromMatrixColumn(this._camera.matrix,1),Te.setFromMatrixColumn(this._camera.matrix,2),ie.multiplyScalar(this._focalOffset.x),ne.multiplyScalar(-this._focalOffset.y),Te.multiplyScalar(this._focalOffset.z),A.copy(ie).add(ne).add(Te),this._camera.position.add(A)),this._boundaryEnclosesCamera&&this._encloseToBoundary(this._camera.position.copy(this._target),A.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse),1);let p=this._zoomEnd-this._zoom;this._zoom+=p*o,this._camera.zoom!==this._zoom&&(N(p)&&(this._zoom=this._zoomEnd),this._camera.zoom=this._zoom,this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0);let v=this._needsUpdate;return v&&!this._updatedLastTime?(this._hasRested=!1,this.dispatchEvent({type:"wake"}),this.dispatchEvent({type:"update"})):v?(this.dispatchEvent({type:"update"}),N(i,this.restThreshold)&&N(a,this.restThreshold)&&N(n,this.restThreshold)&&N(s.x,this.restThreshold)&&N(s.y,this.restThreshold)&&N(s.z,this.restThreshold)&&N(c.x,this.restThreshold)&&N(c.y,this.restThreshold)&&N(c.z,this.restThreshold)&&N(p,this.restThreshold)&&!this._hasRested&&(this._hasRested=!0,this.dispatchEvent({type:"rest"}))):!v&&this._updatedLastTime&&this.dispatchEvent({type:"sleep"}),this._updatedLastTime=v,this._needsUpdate=!1,v}toJSON(){return JSON.stringify({enabled:this._enabled,minDistance:this.minDistance,maxDistance:ke(this.maxDistance),minZoom:this.minZoom,maxZoom:ke(this.maxZoom),minPolarAngle:this.minPolarAngle,maxPolarAngle:ke(this.maxPolarAngle),minAzimuthAngle:ke(this.minAzimuthAngle),maxAzimuthAngle:ke(this.maxAzimuthAngle),dampingFactor:this.dampingFactor,draggingDampingFactor:this.draggingDampingFactor,dollySpeed:this.dollySpeed,truckSpeed:this.truckSpeed,dollyToCursor:this.dollyToCursor,verticalDragToForward:this.verticalDragToForward,target:this._targetEnd.toArray(),position:A.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),zoom:this._zoomEnd,focalOffset:this._focalOffsetEnd.toArray(),target0:this._target0.toArray(),position0:this._position0.toArray(),zoom0:this._zoom0,focalOffset0:this._focalOffset0.toArray()})}fromJSON(e,t=!1){let o=JSON.parse(e),i=A.fromArray(o.position);this.enabled=o.enabled,this.minDistance=o.minDistance,this.maxDistance=Ye(o.maxDistance),this.minZoom=o.minZoom,this.maxZoom=Ye(o.maxZoom),this.minPolarAngle=o.minPolarAngle,this.maxPolarAngle=Ye(o.maxPolarAngle),this.minAzimuthAngle=Ye(o.minAzimuthAngle),this.maxAzimuthAngle=Ye(o.maxAzimuthAngle),this.dampingFactor=o.dampingFactor,this.draggingDampingFactor=o.draggingDampingFactor,this.dollySpeed=o.dollySpeed,this.truckSpeed=o.truckSpeed,this.dollyToCursor=o.dollyToCursor,this.verticalDragToForward=o.verticalDragToForward,this._target0.fromArray(o.target0),this._position0.fromArray(o.position0),this._zoom0=o.zoom0,this._focalOffset0.fromArray(o.focalOffset0),this.moveTo(o.target[0],o.target[1],o.target[2],t),te.setFromVector3(i.sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)),this.rotateTo(te.theta,te.phi,t),this.zoomTo(o.zoom,t),this.setFocalOffset(o.focalOffset[0],o.focalOffset[1],o.focalOffset[2],t),this._needsUpdate=!0}dispose(){this._removeAllEventListeners()}_findPointerById(e){let t=null;return this._activePointers.some(o=>o.pointerId===e?(t=o,!0):!1),t}_encloseToBoundary(e,t,o){let i=t.lengthSq();if(i===0)return e;let a=D.copy(t).add(e),s=this._boundary.clampPoint(a,Le).sub(a),c=s.lengthSq();if(c===0)return e.add(t);if(c===i)return e;if(o===0)return e.add(t).add(s);{let l=1+o*c/t.dot(s);return e.add(D.copy(t).multiplyScalar(l)).add(s.multiplyScalar(1-o))}}_updateNearPlaneCorners(){if(Ee(this._camera)){let e=this._camera,t=e.near,o=e.getEffectiveFOV()*_.MathUtils.DEG2RAD,i=Math.tan(o*.5)*t,a=i*e.aspect;this._nearPlaneCorners[0].set(-a,-i,0),this._nearPlaneCorners[1].set(a,-i,0),this._nearPlaneCorners[2].set(a,i,0),this._nearPlaneCorners[3].set(-a,i,0)}else if(_e(this._camera)){let e=this._camera,t=1/e.zoom,o=e.left*t,i=e.right*t,a=e.top*t,n=e.bottom*t;this._nearPlaneCorners[0].set(o,a,0),this._nearPlaneCorners[1].set(i,a,0),this._nearPlaneCorners[2].set(i,n,0),this._nearPlaneCorners[3].set(o,n,0)}}_collisionTest(){let e=1/0;if(!(this.colliderMeshes.length>=1)||kt(this._camera,"_collisionTest"))return e;let o=A.setFromSpherical(this._spherical).divideScalar(this._spherical.radius);qt.lookAt(uo,o,this._camera.up);for(let i=0;i<4;i++){let a=D.copy(this._nearPlaneCorners[i]);a.applyMatrix4(qt);let n=Le.addVectors(this._target,a);_t.set(n,o),_t.far=this._spherical.radius+1;let s=_t.intersectObjects(this.colliderMeshes);s.length!==0&&s[0].distance<e&&(e=s[0].distance)}return e}_getClientRect(e){let t=this._domElement.getBoundingClientRect();return e.x=t.left,e.y=t.top,this._viewport?(e.x+=this._viewport.x,e.y+=t.height-this._viewport.w-this._viewport.y,e.width=this._viewport.z,e.height=this._viewport.w):(e.width=t.width,e.height=t.height),e}_createOnRestPromise(e){return e?Promise.resolve():(this._hasRested=!1,this.dispatchEvent({type:"transitionstart"}),new Promise(t=>{let o=()=>{this.removeEventListener("rest",o),t()};this.addEventListener("rest",o)}))}_removeAllEventListeners(){}};function $i(r,e){let t=e,o=t.center;Oe.makeEmpty(),r.traverseVisible(a=>{a.isMesh&&Oe.expandByObject(a)}),Oe.getCenter(o);let i=0;return r.traverseVisible(a=>{if(!a.isMesh)return;let n=a,s=n.geometry.clone();if(s.applyMatrix4(n.matrixWorld),s.isBufferGeometry){let l=s.attributes.position;for(let g=0,p=l.count;g<p;g++)A.fromBufferAttribute(l,g),i=Math.max(i,o.distanceToSquared(A))}else{let c=s.attributes.position,l=new _.Vector3;for(let g=0,p=c.count;g<p;g++)l.fromBufferAttribute(c,g),i=Math.max(i,o.distanceToSquared(l))}}),t.radius=Math.sqrt(i),t}var Ji=J(require("three"));var qe=require("react");function vt(r){return r/180*Math.PI}function Kt(r){return r.map(e=>vt(e))}function Qt(r){return r.replace("http://localhost:3001/customize","").replace("https://shadergradient.co/customize","").replace("https://www.shadergradient.co/customize","")}var xo=require("@react-three/fiber");function Eo({type:r,cAzimuthAngle:e,cPolarAngle:t,cDistance:o,cameraZoom:i,zoomOut:a,enableTransition:n}){let s=(0,qe.useRef)(),c=s.current;return(0,xo.useFrame)((l,g)=>s.current.update(g)),(0,qe.useEffect)(()=>{c==null||c.rotateTo(vt(e),vt(t),n)},[c,e,t]),(0,qe.useEffect)(()=>{a?r==="sphere"?(c==null||c.dollyTo(Ft.distance,n),c==null||c.zoomTo(Ft.zoom,n)):(c==null||c.dollyTo(Dt.distance,n),c==null||c.zoomTo(Dt.zoom,n)):r==="sphere"?(c==null||c.zoomTo(i,n),c==null||c.dollyTo(_r,n)):(c==null||c.dollyTo(o,n),c==null||c.zoomTo(gr,n))},[c,a,r,i,o]),s}var je=require("@react-three/fiber");var So=require("react/jsx-runtime");function To(t){var o=t,{dampingFactor:r=.05}=o,e=q(o,["dampingFactor"]);Ze.install({THREE:Ji}),(0,je.extend)({CameraControls:Ze});let i=(0,je.useThree)(s=>s.camera),a=(0,je.useThree)(s=>s.gl),n=Eo(e);return(0,So.jsx)("cameraControls",{ref:n,args:[i,a.domElement],enableDamping:!0,dampingFactor:r,zoomSpeed:10,dollySpeed:10,restThreshold:0})}var Po=J(require("react")),Co=require("three"),zo=require("@react-three/fiber");var X=require("three"),Ke=class extends X.DataTextureLoader{constructor(e){super(e),this.type=X.HalfFloatType}parse(e){let n=function(u,E){switch(u){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(E||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(E||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(E||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(E||""))}},g=`
`,p=function(u,E,b){E=E||1024;let C=u.pos,O=-1,z=0,H="",F=String.fromCharCode.apply(null,new Uint16Array(u.subarray(C,C+128)));for(;0>(O=F.indexOf(g))&&z<E&&C<u.byteLength;)H+=F,z+=F.length,C+=128,F+=String.fromCharCode.apply(null,new Uint16Array(u.subarray(C,C+128)));return-1<O?(b!==!1&&(u.pos+=z+O+1),H+F.slice(0,O)):!1},v=function(u){let E=/^#\?(\S+)/,b=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,O=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},H,F;for((u.pos>=u.byteLength||!(H=p(u)))&&n(1,"no header found"),(F=H.match(E))||n(3,"bad initial token"),z.valid|=1,z.programtype=F[1],z.string+=H+`
`;H=p(u),H!==!1;){if(z.string+=H+`
`,H.charAt(0)==="#"){z.comments+=H+`
`;continue}if((F=H.match(b))&&(z.gamma=parseFloat(F[1])),(F=H.match(L))&&(z.exposure=parseFloat(F[1])),(F=H.match(C))&&(z.valid|=2,z.format=F[1]),(F=H.match(O))&&(z.valid|=4,z.height=parseInt(F[1],10),z.width=parseInt(F[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||n(3,"missing format specifier"),z.valid&4||n(3,"missing image size specifier"),z},d=function(u,E,b){let L=E;if(L<8||L>32767||u[0]!==2||u[1]!==2||u[2]&128)return new Uint8Array(u);L!==(u[2]<<8|u[3])&&n(3,"wrong scanline width");let C=new Uint8Array(4*E*b);C.length||n(4,"unable to allocate buffer space");let O=0,z=0,H=4*L,F=new Uint8Array(4),Se=new Uint8Array(H),fr=b;for(;fr>0&&z<u.byteLength;){z+4>u.byteLength&&n(1),F[0]=u[z++],F[1]=u[z++],F[2]=u[z++],F[3]=u[z++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=L)&&n(3,"bad rgbe scanline format");let Fe=0,se;for(;Fe<H&&z<u.byteLength;){se=u[z++];let ce=se>128;if(ce&&(se-=128),(se===0||Fe+se>H)&&n(3,"bad scanline data"),ce){let le=u[z++];for(let dr=0;dr<se;dr++)Se[Fe++]=le}else Se.set(u.subarray(z,z+se),Fe),Fe+=se,z+=se}let _i=L;for(let ce=0;ce<_i;ce++){let le=0;C[O]=Se[ce+le],le+=L,C[O+1]=Se[ce+le],le+=L,C[O+2]=Se[ce+le],le+=L,C[O+3]=Se[ce+le],O+=4}fr--}return C},T=function(u,E,b,L){let C=u[E+3],O=Math.pow(2,C-128)/255;b[L+0]=u[E+0]*O,b[L+1]=u[E+1]*O,b[L+2]=u[E+2]*O,b[L+3]=1},x=function(u,E,b,L){let C=u[E+3],O=Math.pow(2,C-128)/255;b[L+0]=X.DataUtils.toHalfFloat(Math.min(u[E+0]*O,65504)),b[L+1]=X.DataUtils.toHalfFloat(Math.min(u[E+1]*O,65504)),b[L+2]=X.DataUtils.toHalfFloat(Math.min(u[E+2]*O,65504)),b[L+3]=X.DataUtils.toHalfFloat(1)},P=new Uint8Array(e);P.pos=0;let y=v(P),h=y.width,G=y.height,U=d(P.subarray(P.pos),h,G),m,S,R;switch(this.type){case X.FloatType:R=U.length/4;let u=new Float32Array(R*4);for(let b=0;b<R;b++)T(U,b*4,u,b*4);m=u,S=X.FloatType;break;case X.HalfFloatType:R=U.length/4;let E=new Uint16Array(R*4);for(let b=0;b<R;b++)x(U,b*4,E,b*4);m=E,S=X.HalfFloatType;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:h,height:G,data:m,header:y.string,gamma:y.gamma,exposure:y.exposure,type:S}}setDataType(e){return this.type=e,this}load(e,t,o,i){function a(n,s){switch(n.type){case X.FloatType:case X.HalfFloatType:"colorSpace"in n?n.colorSpace="srgb-linear":n.encoding=3e3,n.minFilter=X.LinearFilter,n.magFilter=X.LinearFilter,n.generateMipmaps=!1,n.flipY=!0;break}t&&t(n,s)}return super.load(e,a,o,i)}};var bo=require("@react-three/fiber");function yt(r,{path:e}){return(0,bo.useLoader)(Ke,r,o=>o.setPath(e))}var en=r=>r.current&&r.current.isScene,tn=r=>en(r)?r.current:r;function Ro({background:r=!1,envPreset:e}){let t=yt("city.hdr",{path:et}),o=yt("dawn.hdr",{path:et}),i=yt("lobby.hdr",{path:et}),n={city:t,dawn:o,lobby:i}[e],s=(0,zo.useThree)(l=>l.scene);Po.default.useLayoutEffect(()=>{if(n){let l=tn(s),g=l.background,p=l.environment;return r!=="only"&&(l.environment=n),r&&(l.background=n),()=>{r!=="only"&&(l.environment=p),r&&(l.background="black")}}},[s,n,r]);let c=n;return c.mapping=Co.EquirectangularReflectionMapping,null}var xt=require("react");var Ao=require("react"),$t=require("three");var Wt=0;function wo(){let[r,e]=(0,Ao.useState)({});return $t.DefaultLoadingManager.onLoad=()=>{e(t=>$(w({},t),{active:!1}))},$t.DefaultLoadingManager.onProgress=(t,o,i)=>{o===i&&(Wt=i);let a=(o-Wt)/(i-Wt)*100||100;e(n=>$(w({},n),{active:!0,item:t,loaded:o,total:i,progress:a}))},r}var ae=require("react/jsx-runtime");function Lo({lightType:r,brightness:e,envPreset:t}){return(0,ae.jsxs)(ae.Fragment,{children:[r==="3d"&&(0,ae.jsx)("ambientLight",{intensity:e||1}),r==="env"&&(0,ae.jsx)(xt.Suspense,{fallback:(0,ae.jsx)(rn,{}),children:(0,ae.jsx)(Ro,{envPreset:t,background:!1,loadingCallback:()=>{}})})]})}function rn(){let{progress:r}=wo();return(0,xt.useEffect)(()=>{let e=document.getElementById("LoaderRoot");e&&r&&(r===100?(e.innerHTML="Ligths are loaded",setTimeout(()=>{e.innerHTML=""},1e3)):e.innerHTML="Loading lights...")},[r]),(0,ae.jsx)("ambientLight",{intensity:.4})}var We=require("@react-spring/three");var rr=require("@react-three/fiber"),Rt=require("react");var Et=J(require("three"));function Oo(r,e,t){return class extends Et.LineBasicMaterial{constructor(){let o=Object.entries(r),i=o.reduce((a,[n,s])=>{let c=Et.UniformsUtils.clone({[n]:{value:s}});return w(w({},a),c)},{});super({color:"#ffffff",linewidth:5,userData:i,onBeforeCompile:a=>{a.uniforms=w(w({},a.uniforms),i),a.vertexShader=e}}),o.forEach(([a])=>Object.defineProperty(this,a,{get:()=>this.uniforms[a].value,set:n=>this.uniforms[a].value=n})),t&&t(this)}}}var re=J(require("three"));re.ShaderChunk.uv2_pars_vertex="";re.ShaderChunk.uv2_vertex="";re.ShaderChunk.uv2_pars_fragment="";re.ShaderChunk.encodings_fragment="";function Do(r,e,t,o){return class extends re.MeshPhysicalMaterial{constructor(){let i=Object.entries(r),a=r.colors,n=Jt(a[0]),s=Jt(a[1]),c=Jt(a[2]),l={uC1r:{value:pe(n==null?void 0:n.r)},uC1g:{value:pe(n==null?void 0:n.g)},uC1b:{value:pe(n==null?void 0:n.b)},uC2r:{value:pe(s==null?void 0:s.r)},uC2g:{value:pe(s==null?void 0:s.g)},uC2b:{value:pe(s==null?void 0:s.b)},uC3r:{value:pe(c==null?void 0:c.r)},uC3g:{value:pe(c==null?void 0:c.g)},uC3b:{value:pe(c==null?void 0:c.b)}},g=i.reduce((p,[v,d])=>{let T=re.UniformsUtils.clone({[v]:{value:d}});return w(w({},p),T)},{});super({metalness:.2,userData:g,side:re.DoubleSide,onBeforeCompile:p=>{p.uniforms=w(w(w({},p.uniforms),g),l),p.vertexShader=e,p.fragmentShader=t}}),i.forEach(([p])=>Object.defineProperty(this,p,{get:()=>this.uniforms[p].value,set:v=>this.uniforms[p].value=v})),o&&o(this)}}}function Jt(r){let e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function pe(r=0){return r/255}var tr={};oe(tr,{defaults:()=>Qe,positionMix:()=>er});var Qe={};oe(Qe,{plane:()=>Tt,sphere:()=>St,waterPlane:()=>bt});var Tt={};oe(Tt,{fragment:()=>Fo,vertex:()=>Mo});var Fo=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
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
varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 color1;varying vec3 color2;varying vec3 color3;float linearToRelativeLuminance2(const in vec3 color){vec3 weights=vec3(0.2126,0.7152,0.0722);return dot(weights,color.rgb);}void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);float clearcoat=1.0;float clearcoatRoughness=0.5;
#include <clipping_planes_fragment>
vec4 diffuseColor=vec4(mix(mix(color1,color2,smoothstep(-3.0,3.0,vPos.x)),color3,vPos.z),1);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;
#ifdef TRANSMISSION
float totalTransmission=transmission;
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
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular;
#ifdef TRANSMISSION
diffuseColor.a*=mix(saturate(1.-totalTransmission+linearToRelativeLuminance2(reflectedLight.directSpecular+reflectedLight.indirectSpecular)),1.0,metalness);
#endif
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
gl_FragColor=vec4(outgoingLight,diffuseColor.a);}`;var Mo=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;
#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
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
void main(){
#include <beginnormal_vertex>
#include <color_vertex>
#include <defaultnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <uv2_vertex>
#include <uv_vertex>
#ifndef FLAT_SHADED
vNormal=normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);
#endif
#endif
#include <begin_vertex>
#include <clipping_planes_vertex>
#include <displacementmap_vertex>
#include <logdepthbuf_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <skinning_vertex>
vViewPosition=-mvPosition.xyz;
#include <fog_vertex>
#include <shadowmap_vertex>
#include <worldpos_vertex>
vUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var St={};oe(St,{fragment:()=>Io,vertex:()=>No});var Io=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
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
varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 color1;varying vec3 color2;varying vec3 color3;varying float distanceToCenter;float linearToRelativeLuminance2(const in vec3 color){vec3 weights=vec3(0.2126,0.7152,0.0722);return dot(weights,color.rgb);}void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);float clearcoat=1.0;float clearcoatRoughness=0.5;
#include <clipping_planes_fragment>
float distanceToCenter=distance(vPos,vec3(0,0,0));vec4 diffuseColor=vec4(mix(color3,mix(color2,color1,smoothstep(-1.0,1.0,vPos.y)),distanceToCenter),1);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;
#ifdef TRANSMISSION
float totalTransmission=transmission;
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
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular;
#ifdef TRANSMISSION
diffuseColor.a*=mix(saturate(1.-totalTransmission+linearToRelativeLuminance2(reflectedLight.directSpecular+reflectedLight.indirectSpecular)),1.0,metalness);
#endif
gl_FragColor=vec4(outgoingLight,diffuseColor.a);
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`;var No=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float pnoise(vec3 P,vec3 rep){vec3 Pi0=mod(floor(P),rep);vec3 Pi1=mod(Pi0+vec3(1.0),rep);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}varying vec3 vNormal;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;uniform float uFrequency;uniform float uAmplitude;varying vec3 vPos;varying float vDistort;varying vec2 vUv;varying vec3 vViewPosition;
#define STANDARD
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
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
mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}void main(){
#include <beginnormal_vertex>
#include <color_vertex>
#include <defaultnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <uv2_vertex>
#include <uv_vertex>
#ifndef FLAT_SHADED
vNormal=normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);
#endif
#endif
#include <begin_vertex>
#include <clipping_planes_vertex>
#include <displacementmap_vertex>
#include <logdepthbuf_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <skinning_vertex>
vViewPosition=-mvPosition.xyz;
#include <fog_vertex>
#include <shadowmap_vertex>
#include <worldpos_vertex>
float t=uTime*uSpeed;float distortion=pnoise((normal+t)*uNoiseDensity,vec3(10.0))*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vPos=pos;vDistort=distortion;vNormal=normal;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var bt={};oe(bt,{fragment:()=>Uo,vertex:()=>Ho});var Uo=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
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
varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 color1;varying vec3 color2;varying vec3 color3;float linearToRelativeLuminance2(const in vec3 color){vec3 weights=vec3(0.2126,0.7152,0.0722);return dot(weights,color.rgb);}void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);float clearcoat=1.0;float clearcoatRoughness=0.5;
#include <clipping_planes_fragment>
vec4 diffuseColor=vec4(mix(mix(color1,color2,smoothstep(-3.0,3.0,vPos.x)),color3,vPos.z),1);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;
#ifdef TRANSMISSION
float totalTransmission=transmission;
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
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular;
#ifdef TRANSMISSION
diffuseColor.a*=mix(saturate(1.-totalTransmission+linearToRelativeLuminance2(reflectedLight.directSpecular+reflectedLight.indirectSpecular)),1.0,metalness);
#endif
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
gl_FragColor=vec4(outgoingLight,diffuseColor.a);}`;var Ho=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;
#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
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
void main(){
#include <beginnormal_vertex>
#include <color_vertex>
#include <defaultnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <uv2_vertex>
#include <uv_vertex>
#ifndef FLAT_SHADED
vNormal=normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);
#endif
#endif
#include <begin_vertex>
#include <clipping_planes_vertex>
#include <displacementmap_vertex>
#include <logdepthbuf_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <skinning_vertex>
vViewPosition=-mvPosition.xyz;
#include <fog_vertex>
#include <shadowmap_vertex>
#include <worldpos_vertex>
float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var er={};oe(er,{plane:()=>Pt,sphere:()=>Ct,waterPlane:()=>zt});var Pt={};oe(Pt,{fragment:()=>Bo,vertex:()=>Go});var Bo="uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec3 vPos;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);gl_FragColor=vec4(color1*vPos.x+color2*vPos.y+color3*vPos.z,1.);}";var Go=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;
#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
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
void main(){
#include <beginnormal_vertex>
#include <color_vertex>
#include <defaultnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <uv2_vertex>
#include <uv_vertex>
#ifndef FLAT_SHADED
vNormal=normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);
#endif
#endif
#include <begin_vertex>
#include <clipping_planes_vertex>
#include <displacementmap_vertex>
#include <logdepthbuf_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <skinning_vertex>
vViewPosition=-mvPosition.xyz;
#include <fog_vertex>
#include <shadowmap_vertex>
#include <worldpos_vertex>
vUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var Ct={};oe(Ct,{fragment:()=>Vo,vertex:()=>ko});var Vo=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
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
varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 color1;varying vec3 color2;varying vec3 color3;varying float distanceToCenter;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);float clearcoat=1.0;float clearcoatRoughness=0.5;
#include <clipping_planes_fragment>
float distanceToCenter=distance(vPos,vec3(0,0,0));vec4 diffuseColor=vec4(mix(color3,mix(color2,color1,smoothstep(-1.0,1.0,vPos.y)),distanceToCenter),1);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;
#ifdef TRANSMISSION
float totalTransmission=transmission;
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
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
vec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular;
#ifdef TRANSMISSION
diffuseColor.a*=mix(saturate(1.-totalTransmission+linearToRelativeLuminance(reflectedLight.directSpecular+reflectedLight.indirectSpecular)),1.0,metalness);
#endif
gl_FragColor=vec4(outgoingLight,diffuseColor.a);
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`;var ko=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float pnoise(vec3 P,vec3 rep){vec3 Pi0=mod(floor(P),rep);vec3 Pi1=mod(Pi0+vec3(1.0),rep);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}varying vec3 vNormal;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;uniform float uFrequency;uniform float uAmplitude;varying vec3 vPos;varying float vDistort;varying vec2 vUv;varying vec3 vViewPosition;
#define STANDARD
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
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
mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}void main(){
#include <beginnormal_vertex>
#include <color_vertex>
#include <defaultnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <uv2_vertex>
#include <uv_vertex>
#ifndef FLAT_SHADED
vNormal=normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);
#endif
#endif
#include <begin_vertex>
#include <clipping_planes_vertex>
#include <displacementmap_vertex>
#include <logdepthbuf_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <skinning_vertex>
vViewPosition=-mvPosition.xyz;
#include <fog_vertex>
#include <shadowmap_vertex>
#include <worldpos_vertex>
float t=uTime*uSpeed;float distortion=pnoise((normal+t)*uNoiseDensity,vec3(10.0))*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vPos=pos;vDistort=distortion;vNormal=normal;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var zt={};oe(zt,{fragment:()=>Yo,vertex:()=>Xo});var Yo="uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec3 vPos;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);gl_FragColor=vec4(color1*vPos.x+color2*vPos.y+color3*vPos.z,1.);}";var Xo=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;
#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;varying vec3 vBitangent;
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
void main(){
#include <beginnormal_vertex>
#include <color_vertex>
#include <defaultnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <uv2_vertex>
#include <uv_vertex>
#ifndef FLAT_SHADED
vNormal=normalize(transformedNormal);
#ifdef USE_TANGENT
vTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);
#endif
#endif
#include <begin_vertex>
#include <clipping_planes_vertex>
#include <displacementmap_vertex>
#include <logdepthbuf_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <skinning_vertex>
vViewPosition=-mvPosition.xyz;
#include <fog_vertex>
#include <shadowmap_vertex>
#include <worldpos_vertex>
vUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;function Zo({type:r,shader:e,color1:t,color2:o,color3:i,uTime:a,uSpeed:n,uDensity:s,uStrength:c,uFrequency:l,uAmplitude:g}){let[p,v]=(0,Rt.useState)(!1),d=r!=null?r:"plane",T=Qe[d];e&&e!=="defaults"&&(T=tr[e][d]);let x=Do({colors:[t,o,i],uTime:a,uSpeed:n,uLoadingTime:0,uNoiseDensity:s,uNoiseStrength:c,uFrequency:l,uAmplitude:g,uIntensity:.5},T.vertex,T.fragment),P=Oo({uTime:a,uSpeed:n,uNoiseDensity:s,uNoiseStrength:c,uFrequency:l,uAmplitude:g,uIntensity:.5},T.vertex);return(0,rr.extend)({ColorShiftMaterial:x}),(0,rr.extend)({HoveredLineMaterial:P}),(0,Rt.useEffect)(()=>{v(!0)},[]),p}var jo=require("@react-three/fiber"),ar=require("react"),Ko=J(require("three")),{to:qo,rotDur:zc,meshDur:or,rotDelay:Rc,meshDelay:ir}=vr,nr=new Ko.Clock,gn=20;function Qo({animate:r,range:e,rangeStart:t,rangeEnd:o}){let i=(0,ar.useRef)(),a=(0,ar.useRef)(),n=0;return(0,jo.useFrame)((s,c)=>{if(i.current){let l=nr.getElapsedTime();if(e==="enabled"&&(l=t,l=l+nr.getElapsedTime(),l>=o&&(l=t,nr.start())),l>ir){let g=i.current.userData.uLoadingTime.value,p=l<or+ir?Math.easeInOutCubic(n,g,qo-g,or*1e3):qo;i.current.userData.uLoadingTime.value=p,l<or+ir&&(n+=gn)}r==="on"&&(i.current.userData.uTime.value=l,a.current!==void 0&&(a.current.userData.uTime.value=l))}}),{material:i,linemat:a}}var Q=require("react/jsx-runtime");Math.easeInOutCubic=function(r,e,t,o){return r/=o/2,r<1?t/2*r*r*r+e:(r-=2,t/2*(r*r*r+2)+e)};var At=192,wt=36,Wo=({type:r,animate:e,range:t,rangeStart:o,rangeEnd:i,uTime:a,uSpeed:n,uStrength:s,uDensity:c,uFrequency:l,uAmplitude:g,positionX:p,positionY:v,positionZ:d,rotationX:T,rotationY:x,rotationZ:P,color1:y,color2:h,color3:G,reflection:U,wireframe:m,shader:S,rotSpringOption:R=({rotation:E})=>({to:(b,L)=>Ot(void 0,null,function*(){yield b({animatedRotation:E})}),from:{rotation:Kt([0,0,0])},config:{duration:300}}),posSpringOption:u=({position:E})=>({to:(b,L)=>Ot(void 0,null,function*(){yield b({animatedPosition:E})}),from:{position:[0,0,0]},config:{duration:300}})})=>{let E=Zo({type:r,shader:S,color1:y,color2:h,color3:G,uTime:a,uSpeed:n,uDensity:c,uStrength:s,uFrequency:l,uAmplitude:g}),{material:b,linemat:L}=Qo({animate:e,range:t,rangeStart:o,rangeEnd:i}),C=[p,v,d],O=Kt([T,x,P]),{animatedPosition:z}=(0,We.useSpring)(u({position:C})),{animatedRotation:H}=(0,We.useSpring)(R({rotation:O}));return(0,Q.jsxs)("group",{children:[(0,Q.jsxs)(We.animated.mesh,{position:z,rotation:H,name:"shadergradient-mesh",children:[r==="plane"&&(0,Q.jsx)("planeGeometry",{args:[10,10,1,At]}),r==="sphere"&&(0,Q.jsx)("icosahedronGeometry",{args:[1,At/3]}),r==="waterPlane"&&(0,Q.jsx)("planeGeometry",{args:[10,10,At,At]}),E&&(0,Q.jsx)("colorShiftMaterial",{ref:b,roughness:1-U})]}),(0,Q.jsx)("mesh",{children:(0,Q.jsxs)("lineSegments",{renderOrder:1,position:C,rotation:O,visible:!1,children:[r==="plane"&&(0,Q.jsx)("planeGeometry",{args:[10,10,1,wt]}),r==="sphere"&&(0,Q.jsx)("icosahedronGeometry",{args:[1,wt/3]}),r==="waterPlane"&&(0,Q.jsx)("planeGeometry",{args:[10,10,wt,wt]}),E&&(0,Q.jsx)("hoveredLineMaterial",{ref:L})]})})]})};var lr=J(gi());var ge=require("react/jsx-runtime"),Cn=lr.parse(Qt(yr[0].url),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"});function zn(s){var c=s,{control:r="props",dampingFactor:e,rotSpringOption:t,posSpringOption:o,isFigmaPlugin:i=!1,enableTransition:a=!0}=c,n=q(c,["control","dampingFactor","rotSpringOption","posSpringOption","isFigmaPlugin","enableTransition"]);let l=w(w({},Cn),n);r==="query"&&(l=lr.parse(Qt(n.urlString),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"}));let y=l,{lightType:g,envPreset:p,brightness:v,grain:d,grainBlending:T,toggleAxis:x}=y,P=q(y,["lightType","envPreset","brightness","grain","grainBlending","toggleAxis"]);return Ht(d==="off",T||1),(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)(Lo,{lightType:g,brightness:v,envPreset:p}),(0,ge.jsx)(Wo,$(w({},P),{rotSpringOption:t,posSpringOption:o}),JSON.stringify(P)),x&&(0,ge.jsx)(so,{isFigmaPlugin:i}),(0,ge.jsx)(To,w({dampingFactor:e,enableTransition:a},P))]})}var mr=require("react/jsx-runtime");function Rn({title:r="",color1:e="#ff7e5f",color2:t="#feb47b"}){return(0,mr.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:`linear-gradient(to right, ${e}, ${t})`,color:"white",fontSize:"20px",textAlign:"center",padding:"20px",fontFamily:"Inter",fontWeight:"500"},children:(0,mr.jsx)("p",{children:r})})}Ne(De,require("@react-three/fiber"),module.exports);0&&(module.exports={Placeholder,ShaderGradient,ShaderGradientCanvas,...require("@react-three/fiber")});
/*! Bundled license information:

camera-controls/dist/camera-controls.module.js:
  (*!
   * camera-controls
   * https://github.com/yomotsu/camera-controls
   * (c) 2017 @yomotsu
   * Released under the MIT License.
   *)
*/
