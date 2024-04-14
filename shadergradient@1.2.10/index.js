var di=Object.create;var we=Object.defineProperty,ui=Object.defineProperties,pi=Object.getOwnPropertyDescriptor,hi=Object.getOwnPropertyDescriptors,gi=Object.getOwnPropertyNames,je=Object.getOwnPropertySymbols,_i=Object.getPrototypeOf,zt=Object.prototype.hasOwnProperty,cr=Object.prototype.propertyIsEnumerable;var sr=(r,e,t)=>e in r?we(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,w=(r,e)=>{for(var t in e||(e={}))zt.call(e,t)&&sr(r,t,e[t]);if(je)for(var t of je(e))cr.call(e,t)&&sr(r,t,e[t]);return r},K=(r,e)=>ui(r,hi(e));var k=(r,e)=>{var t={};for(var o in r)zt.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&je)for(var o of je(r))e.indexOf(o)<0&&cr.call(r,o)&&(t[o]=r[o]);return t};var Oe=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),te=(r,e)=>{for(var t in e)we(r,t,{get:e[t],enumerable:!0})},Ke=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of gi(e))!zt.call(r,i)&&i!==t&&we(r,i,{get:()=>e[i],enumerable:!(o=pi(e,i))||o.enumerable});return r},De=(r,e,t)=>(Ke(r,e,"default"),t&&Ke(t,e,"default")),Q=(r,e,t)=>(t=r!=null?di(_i(r)):{},Ke(e||!r||!r.__esModule?we(t,"default",{value:r,enumerable:!0}):t,r)),vi=r=>Ke(we({},"__esModule",{value:!0}),r);var Rt=(r,e,t)=>new Promise((o,i)=>{var n=c=>{try{s(t.next(c))}catch(l){i(l)}},a=c=>{try{s(t.throw(c))}catch(l){i(l)}},s=c=>c.done?o(c.value):Promise.resolve(c.value).then(n,a);s((t=t.apply(r,e)).next())});var qo=Oe((Rc,Zo)=>{"use strict";Zo.exports=r=>encodeURIComponent(r).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)});var $o=Oe((Ac,Wo)=>{"use strict";var Qo="%[a-f0-9]{2}",jo=new RegExp("("+Qo+")|([^%]+?)","gi"),Ko=new RegExp("("+Qo+")+","gi");function or(r,e){try{return[decodeURIComponent(r.join(""))]}catch(i){}if(r.length===1)return r;e=e||1;var t=r.slice(0,e),o=r.slice(e);return Array.prototype.concat.call([],or(t),or(o))}function fn(r){try{return decodeURIComponent(r)}catch(o){for(var e=r.match(jo)||[],t=1;t<e.length;t++)r=or(e,t).join(""),e=r.match(jo)||[];return r}}function dn(r){for(var e={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},t=Ko.exec(r);t;){try{e[t[0]]=decodeURIComponent(t[0])}catch(s){var o=fn(t[0]);o!==t[0]&&(e[t[0]]=o)}t=Ko.exec(r)}e["%C2"]="\uFFFD";for(var i=Object.keys(e),n=0;n<i.length;n++){var a=i[n];r=r.replace(new RegExp(a,"g"),e[a])}return r}Wo.exports=function(r){if(typeof r!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return dn(r)}}});var ei=Oe((Lc,Jo)=>{"use strict";Jo.exports=(r,e)=>{if(!(typeof r=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[r];let t=r.indexOf(e);return t===-1?[r]:[r.slice(0,t),r.slice(t+e.length)]}});var ri=Oe((wc,ti)=>{"use strict";ti.exports=function(r,e){for(var t={},o=Object.keys(r),i=Array.isArray(e),n=0;n<o.length;n++){var a=o[n],s=r[a];(i?e.indexOf(a)!==-1:e(a,s,r))&&(t[a]=s)}return t}});var mi=Oe(q=>{"use strict";var un=qo(),pn=$o(),ii=ei(),hn=ri(),gn=r=>r==null,ir=Symbol("encodeFragmentIdentifier");function _n(r){switch(r.arrayFormat){case"index":return e=>(t,o)=>{let i=t.length;return o===void 0||r.skipNull&&o===null||r.skipEmptyString&&o===""?t:o===null?[...t,[H(e,r),"[",i,"]"].join("")]:[...t,[H(e,r),"[",H(i,r),"]=",H(o,r)].join("")]};case"bracket":return e=>(t,o)=>o===void 0||r.skipNull&&o===null||r.skipEmptyString&&o===""?t:o===null?[...t,[H(e,r),"[]"].join("")]:[...t,[H(e,r),"[]=",H(o,r)].join("")];case"colon-list-separator":return e=>(t,o)=>o===void 0||r.skipNull&&o===null||r.skipEmptyString&&o===""?t:o===null?[...t,[H(e,r),":list="].join("")]:[...t,[H(e,r),":list=",H(o,r)].join("")];case"comma":case"separator":case"bracket-separator":{let e=r.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(o,i)=>i===void 0||r.skipNull&&i===null||r.skipEmptyString&&i===""?o:(i=i===null?"":i,o.length===0?[[H(t,r),e,H(i,r)].join("")]:[[o,H(i,r)].join(r.arrayFormatSeparator)])}default:return e=>(t,o)=>o===void 0||r.skipNull&&o===null||r.skipEmptyString&&o===""?t:o===null?[...t,H(e,r)]:[...t,[H(e,r),"=",H(o,r)].join("")]}}function vn(r){let e;switch(r.arrayFormat){case"index":return(t,o,i)=>{if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e){i[t]=o;return}i[t]===void 0&&(i[t]={}),i[t][e[1]]=o};case"bracket":return(t,o,i)=>{if(e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),!e){i[t]=o;return}if(i[t]===void 0){i[t]=[o];return}i[t]=[].concat(i[t],o)};case"colon-list-separator":return(t,o,i)=>{if(e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!e){i[t]=o;return}if(i[t]===void 0){i[t]=[o];return}i[t]=[].concat(i[t],o)};case"comma":case"separator":return(t,o,i)=>{let n=typeof o=="string"&&o.includes(r.arrayFormatSeparator),a=typeof o=="string"&&!n&&de(o,r).includes(r.arrayFormatSeparator);o=a?de(o,r):o;let s=n||a?o.split(r.arrayFormatSeparator).map(c=>de(c,r)):o===null?o:de(o,r);i[t]=s};case"bracket-separator":return(t,o,i)=>{let n=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!n){i[t]=o&&de(o,r);return}let a=o===null?[]:o.split(r.arrayFormatSeparator).map(s=>de(s,r));if(i[t]===void 0){i[t]=a;return}i[t]=[].concat(i[t],a)};default:return(t,o,i)=>{if(i[t]===void 0){i[t]=o;return}i[t]=[].concat(i[t],o)}}}function ni(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function H(r,e){return e.encode?e.strict?un(r):encodeURIComponent(r):r}function de(r,e){return e.decode?pn(r):r}function ai(r){return Array.isArray(r)?r.sort():typeof r=="object"?ai(Object.keys(r)).sort((e,t)=>Number(e)-Number(t)).map(e=>r[e]):r}function si(r){let e=r.indexOf("#");return e!==-1&&(r=r.slice(0,e)),r}function yn(r){let e="",t=r.indexOf("#");return t!==-1&&(e=r.slice(t)),e}function ci(r){r=si(r);let e=r.indexOf("?");return e===-1?"":r.slice(e+1)}function oi(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):e.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function li(r,e){e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e),ni(e.arrayFormatSeparator);let t=vn(e),o=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return o;for(let i of r.split("&")){if(i==="")continue;let[n,a]=ii(e.decode?i.replace(/\+/g," "):i,"=");a=a===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?a:de(a,e),t(de(n,e),a,o)}for(let i of Object.keys(o)){let n=o[i];if(typeof n=="object"&&n!==null)for(let a of Object.keys(n))n[a]=oi(n[a],e);else o[i]=oi(n,e)}return e.sort===!1?o:(e.sort===!0?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce((i,n)=>{let a=o[n];return a&&typeof a=="object"&&!Array.isArray(a)?i[n]=ai(a):i[n]=a,i},Object.create(null))}q.extract=ci;q.parse=li;q.stringify=(r,e)=>{if(!r)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e),ni(e.arrayFormatSeparator);let t=a=>e.skipNull&&gn(r[a])||e.skipEmptyString&&r[a]==="",o=_n(e),i={};for(let a of Object.keys(r))t(a)||(i[a]=r[a]);let n=Object.keys(i);return e.sort!==!1&&n.sort(e.sort),n.map(a=>{let s=r[a];return s===void 0?"":s===null?H(a,e):Array.isArray(s)?s.length===0&&e.arrayFormat==="bracket-separator"?H(a,e)+"[]":s.reduce(o(a),[]).join("&"):H(a,e)+"="+H(s,e)}).filter(a=>a.length>0).join("&")};q.parseUrl=(r,e)=>{e=Object.assign({decode:!0},e);let[t,o]=ii(r,"#");return Object.assign({url:t.split("?")[0]||"",query:li(ci(r),e)},e&&e.parseFragmentIdentifier&&o?{fragmentIdentifier:de(o,e)}:{})};q.stringifyUrl=(r,e)=>{e=Object.assign({encode:!0,strict:!0,[ir]:!0},e);let t=si(r.url).split("?")[0]||"",o=q.extract(r.url),i=q.parse(o,{sort:!1}),n=Object.assign(i,r.query),a=q.stringify(n,e);a&&(a=`?${a}`);let s=yn(r.url);return r.fragmentIdentifier&&(s=`#${e[ir]?H(r.fragmentIdentifier,e):r.fragmentIdentifier}`),`${t}${a}${s}`};q.pick=(r,e,t)=>{t=Object.assign({parseFragmentIdentifier:!0,[ir]:!1},t);let{url:o,query:i,fragmentIdentifier:n}=q.parseUrl(r,t);return q.stringifyUrl({url:o,query:hn(i,e),fragmentIdentifier:n},t)};q.exclude=(r,e,t)=>{let o=Array.isArray(e)?i=>!e.includes(i):(i,n)=>!e(i,n);return q.pick(r,o,t)}});var Le={};te(Le,{ShaderGradient:()=>En,ShaderGradientCanvas:()=>yi});module.exports=vi(Le);var _r=require("@react-three/fiber");var lr=(r,e)=>({dpr:r,camera:{fov:e},linear:!0,flat:!0,gl:{preserveDrawingBuffer:!0}});var mr=1,fr=14,At={zoom:1,distance:14},Lt={zoom:5,distance:14};var dr={meshDelay:0,meshDur:0,rotDelay:1.7,rotDur:1,posDelay:1.3,posDur:2.2,logoTransition:3.1,text:2.5,to:1},Qe="https://ruucm.github.io/shadergradient/shadergradient@1.0.0/hdr/";var ur=[{title:"Halo",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uSpeed=0.4&uStrength=4&uTime=0&uFrequency=5.5&wireframe=false"},{title:"Pensive",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.5&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.5&color1=%23809bd6&color2=%23910aff&color3=%23af38ff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=7&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.4&uTime=0&wireframe=false"},{title:"Mint",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=%2394ffd1&color2=%236bf5ff&color3=%23ffffff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0.9&positionZ=-0.3&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false&shader=defaults"},{title:"Interstella",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&fov=45&positionX=-0.1&positionY=0&positionZ=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false"},{title:"Nighty night",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false"},{title:"Viola orientalis",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&brightness=1.1&cAzimuthAngle=0&cDistance=7.1&cPolarAngle=140&cameraZoom=17.3&color1=%23ffffff&color2=%23ffbb00&color3=%230700ff&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&type=sphere&uAmplitude=1.4&uDensity=1.1&uSpeed=0.1&uStrength=1&uTime=0&wireframe=false&uFrequency=5.5&shader=defaults"},{title:"Universe",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&brightness=1.1&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%235606FF&color2=%23FE8989&color3=%23000000&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=-0.5&positionY=0.1&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&type=waterPlane&uAmplitude=0&uDensity=1.1&uSpeed=0.1&uStrength=2.4&uTime=0.2&uFrequency=5.5&wireframe=false&shader=defaults"},{title:"Sunset",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.5&cAzimuthAngle=60&cDistance=7.1&cPolarAngle=90&cameraZoom=15.3&color1=%23ff7a33&color2=%2333a0ff&color3=%23ffc53d&embedMode=off&envPreset=dawn&grain=off&http%3A%2F%2Flocalhost%3A3002%2Fcustomize%3Fanimate=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=-0.15&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=sphere&uAmplitude=1.4&uDensity=1.1&uSpeed=0.1&uStrength=0.4&uTime=0&uFrequency=5.5&wireframe=false"},{title:"Mandarin",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.4&cPolarAngle=95&cameraZoom=1&color1=%23ff6a1a&color2=%23c73c00&color3=%23FD4912&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=-2.1&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=225&shader=defaults&type=waterPlane&uAmplitude=0&uFrequency=5.5&uDensity=1.8&uSpeed=0.2&uStrength=3&uTime=0.2&wireframe=false"},{title:"Cotton Candy",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23ebedff&color2=%23f3f2f8&color3=%23dbf8ff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=1.8&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&type=waterPlane&uDensity=1&uSpeed=0.3&uStrength=3&uTime=0.2&uFrequency=5.5&wireframe=false&shader=defaults"}];var pr=require("react");function hr(){let[r,e]=(0,pr.useState)(-1);return[r,o=>{let i=o.gl.domElement,n=c=>{c.preventDefault(),e(1),console.log("[Context Lost]")},a=c=>{e(0),console.log("[Context Restored]")},s=c=>{e(2),console.log("[Context Error]")};return i.addEventListener("webglcontextlost",n),i.addEventListener("webglcontextrestored",a),i.addEventListener("webglcontextcreationerror",s),()=>{i.removeEventListener("webglcontextlost",n),i.removeEventListener("webglcontextrestored",a),i.removeEventListener("webglcontextcreationerror",s)}}]}var wt=require("react/jsx-runtime");function gr({title:r="",color1:e="#ff7e5f",color2:t="#feb47b"}){return(0,wt.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:`linear-gradient(to right, ${e}, ${t})`,color:"white",fontSize:"20px",textAlign:"center",padding:"20px",fontFamily:"Inter",fontWeight:"500"},children:(0,wt.jsx)("p",{children:r})})}var xe=require("react/jsx-runtime");function yi(n){var a=n,{children:r,pointerEvents:e="none",pixelDensity:t=1,fov:o=45}=a,i=k(a,["children","pointerEvents","pixelDensity","fov"]);let[s,c]=hr();return s===1?(0,xe.jsx)(gr,{title:"The graphics context has been lost. Please wait while we try to restore it..."}):(0,xe.jsx)(xe.Fragment,{children:(0,xe.jsx)(_r.Canvas,K(w(K(w({id:"gradientCanvas",resize:{offsetSize:!0}},lr(t,o)),{style:{pointerEvents:e},onCreated:c}),i),{children:r}),t+o)})}var at=require("react");var B=require("three");var ce=require("three"),se=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},xi=new ce.OrthographicCamera(-1,1,1,-1,0,1),Ot=new ce.BufferGeometry;Ot.setAttribute("position",new ce.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3));Ot.setAttribute("uv",new ce.Float32BufferAttribute([0,2,0,0,2,0],2));var We=class{constructor(e){this._mesh=new ce.Mesh(Ot,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xi)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Fe=class extends se{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,o){let i=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let a,s;this.inverse?(a=0,s=1):(a=1,s=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),n.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),n.buffers.stencil.setClear(s),n.buffers.stencil.setLocked(!0),e.setRenderTarget(o),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(i.EQUAL,1,4294967295),n.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),n.buffers.stencil.setLocked(!0)}},$e=class extends se{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Me=require("three");var Ie=class extends se{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Me.ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Me.UniformsUtils.clone(e.uniforms),this.material=new Me.ShaderMaterial({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new We(this.material)}render(e,t,o){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=o.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}};var Dt={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};var Je=class{constructor(e,t){if(this.renderer=e,t===void 0){let o={minFilter:B.LinearFilter,magFilter:B.LinearFilter,format:B.RGBAFormat},i=e.getSize(new B.Vector2);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new B.WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio,o),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Dt===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Ie===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Ie(Dt),this.clock=new B.Clock}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),o=!1;for(let i=0,n=this.passes.length;i<n;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,o),a.needsSwap){if(o){let s=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Fe!==void 0&&(a instanceof Fe?o=!0:a instanceof $e&&(o=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new B.Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let o=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(o,i),this.renderTarget2.setSize(o,i);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(o,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}};var Gn=new B.OrthographicCamera(-1,1,1,-1,0,1),vr=new B.BufferGeometry;vr.setAttribute("position",new B.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3));vr.setAttribute("uv",new B.Float32BufferAttribute([0,2,0,0,2,0],2));var yr=require("three");var et=class extends se{constructor(e,t,o,i,n){super(),this.scene=e,this.camera=t,this.overrideMaterial=o,this.clearColor=i,this.clearAlpha=n!==void 0?n:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new yr.Color}render(e,t,o){let i=e.autoClear;e.autoClear=!1;let n,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),n=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:o),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,n),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}};var nt=require("three");var N={SKIP:0,ADD:1,ALPHA:2,AVERAGE:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,EXCLUSION:8,LIGHTEN:9,MULTIPLY:10,DIVIDE:11,NEGATION:12,NORMAL:13,OVERLAY:14,REFLECT:15,SCREEN:16,SOFT_LIGHT:17,SUBTRACT:18};var tt=require("three");var xr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x+y,1.0)*opacity+x*(1.0-opacity);}";var Er="vec3 blend(const in vec3 x,const in vec3 y,const in float opacity){return y*opacity+x*(1.0-opacity);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){float a=min(y.a,opacity);return vec4(blend(x.rgb,y.rgb,a),max(x.a,a));}";var Tr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y)*0.5*opacity+x*(1.0-opacity);}";var Sr="float blend(const in float x,const in float y){return(y==0.0)?y:max(1.0-(1.0-x)/y,0.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var br="float blend(const in float x,const in float y){return(y==1.0)?y:min(x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var Pr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x,y)*opacity+x*(1.0-opacity);}";var Cr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return abs(x-y)*opacity+x*(1.0-opacity);}";var zr="float blend(const in float x,const in float y){return(y>0.0)?min(x/y,1.0):1.0;}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var Rr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y-2.0*x*y)*opacity+x*(1.0-opacity);}";var Ar="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x,y)*opacity+x*(1.0-opacity);}";var Lr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return x*y*opacity+x*(1.0-opacity);}";var wr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-abs(1.0-x-y))*opacity+x*(1.0-opacity);}";var Or="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y*opacity+x*(1.0-opacity);}";var Dr="float blend(const in float x,const in float y){return(x<0.5)?(2.0*x*y):(1.0-2.0*(1.0-x)*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var Fr="float blend(const in float x,const in float y){return(y==1.0)?y:min(x*x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var Mr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-(1.0-x)*(1.0-y))*opacity+x*(1.0-opacity);}";var Ir="float blend(const in float x,const in float y){return(y<0.5)?(2.0*x*y+x*x*(1.0-2.0*y)):(sqrt(x)*(2.0*y-1.0)+2.0*x*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var Nr="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x+y-1.0,0.0)*opacity+x*(1.0-opacity);}";var Hi=new Map([[N.SKIP,null],[N.ADD,xr],[N.ALPHA,Er],[N.AVERAGE,Tr],[N.COLOR_BURN,Sr],[N.COLOR_DODGE,br],[N.DARKEN,Pr],[N.DIFFERENCE,Cr],[N.EXCLUSION,Rr],[N.LIGHTEN,Ar],[N.MULTIPLY,Lr],[N.DIVIDE,zr],[N.NEGATION,wr],[N.NORMAL,Or],[N.OVERLAY,Dr],[N.REFLECT,Fr],[N.SCREEN,Mr],[N.SOFT_LIGHT,Ir],[N.SUBTRACT,Nr]]),Ne=class extends tt.EventDispatcher{constructor(e,t=1){super(),this.blendFunction=e,this.opacity=new tt.Uniform(t)}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e,this.dispatchEvent({type:"change"})}getShaderCode(){return Hi.get(this.blendFunction)}};var he={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:2},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:1},width:{value:20},height:{value:20},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

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

		}`};var le=require("three"),rt=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},Bi=new le.OrthographicCamera(-1,1,1,-1,0,1),Ft=new le.BufferGeometry;Ft.setAttribute("position",new le.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3));Ft.setAttribute("uv",new le.Float32BufferAttribute([0,2,0,0,2,0],2));var ot=class{constructor(e){this._mesh=new le.Mesh(Ft,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bi)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ur=!0,it=class extends rt{constructor(e,t,o){super(),he===void 0&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=nt.UniformsUtils.clone(he.uniforms),this.material=new nt.ShaderMaterial({uniforms:this.uniforms,fragmentShader:he.fragmentShader,vertexShader:he.vertexShader}),Ur&&(this.uniforms.width.value=e,this.uniforms.height.value=t),this.uniforms.disable.value=o.disable,this.fsQuad=new ot(this.material),this.blendMode=new Ne(N.SCREEN),this.extensions=null}render(e,t,o){this.material.uniforms.tDiffuse.value=o.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){Ur&&(this.uniforms.width.value=e,this.uniforms.height.value=t)}initialize(e,t,o){}addEventListener(){}getAttributes(){return this.attributes}getFragmentShader(){return he.fragmentShader}getVertexShader(){return he.vertexShader}update(e,t,o){}};var st=require("@react-three/fiber");function Mt(r){let{gl:e,scene:t,camera:o,size:i}=(0,st.useThree)(),n=(0,at.useMemo)(()=>{let a=new Je(e);a.addPass(new et(t,o));let s={shape:1,radius:2,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:1,blending:1,blendingMode:1,greyscale:!1,disable:r},c=new it(i.width,i.height,s);return a.addPass(c),a},[e,t,o,i,r]);(0,at.useEffect)(()=>n==null?void 0:n.setSize(i.width,i.height),[n,i]),(0,st.useFrame)((a,s)=>(e.autoClear=!0,void n.render(s)),1)}var U=Q(require("react")),W=require("@react-three/fiber"),Y=require("three");var me=Q(require("react")),Te=require("@react-three/fiber");function Gi(r){return function(e){r.forEach(function(t){typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Hr=Gi;var Ee=Q(require("react")),ge=Q(require("three")),Br=require("@react-three/fiber");function Gr(r,e,t){let{gl:o,size:i,viewport:n}=(0,Br.useThree)(),a=typeof r=="number"?r:i.width*n.dpr,s=typeof e=="number"?e:i.height*n.dpr,T=(typeof r=="number"?t:r)||{},{samples:l}=T,y=k(T,["samples"]),g=Ee.useMemo(()=>{let d;return d=new ge.WebGLRenderTarget(a,s,w({minFilter:ge.LinearFilter,magFilter:ge.LinearFilter,encoding:o.outputEncoding,type:ge.HalfFloatType},y)),d.samples=l,d},[]);return Ee.useLayoutEffect(()=>{g.setSize(a,s),l&&(g.samples=l)},[l,g,a,s]),Ee.useEffect(()=>()=>g.dispose(),[]),g}var _e=require("react/jsx-runtime"),Vi=r=>typeof r=="function",Vr=me.forwardRef((s,a)=>{var c=s,{envMap:r,resolution:e=256,frames:t=1/0,children:o,makeDefault:i}=c,n=k(c,["envMap","resolution","frames","children","makeDefault"]);let l=(0,Te.useThree)(({set:h})=>h),y=(0,Te.useThree)(({camera:h})=>h),g=(0,Te.useThree)(({size:h})=>h),T=me.useRef(null),d=me.useRef(null),b=Gr(e);me.useLayoutEffect(()=>{n.manual||T.current.updateProjectionMatrix()},[g,n]),me.useLayoutEffect(()=>{T.current.updateProjectionMatrix()}),me.useLayoutEffect(()=>{if(i){let h=y;return l(()=>({camera:T.current})),()=>l(()=>({camera:h}))}},[T,i,l]);let S=0,L=null,z=Vi(o);return(0,Te.useFrame)(h=>{z&&(t===1/0||S<t)&&(d.current.visible=!1,h.gl.setRenderTarget(b),L=h.scene.background,r&&(h.scene.background=r),h.gl.render(h.scene,T.current),h.scene.background=L,h.gl.setRenderTarget(null),d.current.visible=!0,S++)}),(0,_e.jsxs)(_e.Fragment,{children:[(0,_e.jsx)("orthographicCamera",K(w({left:g.width/-2,right:g.width/2,top:g.height/2,bottom:g.height/-2,ref:Hr([T,a])},n),{children:!z&&o})),(0,_e.jsx)("group",{ref:d,children:z&&o(b.texture)})]})});var kr=Q(require("react")),ct=require("three"),lt=require("@react-three/fiber");function Yr(r,e){let t=(0,lt.useThree)(i=>i.pointer),[o]=kr.useState(()=>{let i=new ct.Raycaster;return e&&(0,lt.applyProps)(i,e,{}),function(n,a){i.setFromCamera(t,r instanceof ct.Camera?r:r.current);let s=this.constructor.prototype.raycast.bind(this);s&&s(i,a)}});return o}var Ue=require("react/jsx-runtime"),Kr=U.createContext({}),Qr=()=>U.useContext(Kr),ki=2*Math.PI,Xr=new Y.Object3D,Zr=new Y.Matrix4,[Se,It]=[new Y.Quaternion,new Y.Quaternion],qr=new Y.Vector3,jr=new Y.Vector3,Yi=r=>"minPolarAngle"in r,Wr=({alignment:r="bottom-right",margin:e=[80,80],renderPriority:t=0,autoClear:o=!0,onUpdate:i,onTarget:n,children:a})=>{let s=(0,W.useThree)(({size:D})=>D),c=(0,W.useThree)(({camera:D})=>D),l=(0,W.useThree)(({controls:D})=>D),y=(0,W.useThree)(({gl:D})=>D),g=(0,W.useThree)(({scene:D})=>D),T=(0,W.useThree)(({invalidate:D})=>D),d=U.useRef(),b=U.useRef(),S=U.useRef(null),[L]=U.useState(()=>new Y.Scene),z=U.useRef(!1),h=U.useRef(0),p=U.useRef(new Y.Vector3(0,0,0)),C=U.useRef(new Y.Vector3(0,0,0));U.useEffect(()=>{C.current.copy(c.up)},[c]);let m=U.useCallback(D=>{z.current=!0,(l||n)&&(p.current=(l==null?void 0:l.target)||(n==null?void 0:n())),h.current=c.position.distanceTo(qr),Se.copy(c.quaternion),jr.copy(D).multiplyScalar(h.current).add(qr),Xr.lookAt(jr),It.copy(Xr.quaternion),T()},[l,c,n,T]);U.useEffect(()=>(g.background&&(d.current=g.background,g.background=null,L.background=d.current),()=>{d.current&&(g.background=d.current)}),[]),(0,W.useFrame)((D,J)=>{var ee;if(S.current&&b.current){if(z.current)if(Se.angleTo(It)<.01)z.current=!1,Yi(l)&&c.up.copy(C.current);else{let j=J*ki;Se.rotateTowards(It,j),c.position.set(0,0,1).applyQuaternion(Se).multiplyScalar(h.current).add(p.current),c.up.set(0,1,0).applyQuaternion(Se).normalize(),c.quaternion.copy(Se),i?i():l&&l.update(),T()}Zr.copy(c.matrix).invert(),(ee=b.current)==null||ee.quaternion.setFromRotationMatrix(Zr),o&&(y.autoClear=!1),y.clearDepth(),y.render(L,S.current)}},t);let u=Yr(S),v=U.useMemo(()=>({tweenCamera:m,raycast:u}),[m]),[E,_]=e,R=r.endsWith("-center")?0:r.endsWith("-left")?-s.width/2+E:s.width/2-E,P=r.startsWith("center-")?0:r.startsWith("top-")?s.height/2-_:-s.height/2+_;return(0,W.createPortal)((0,Ue.jsxs)(Kr.Provider,{value:v,children:[(0,Ue.jsx)(Vr,{ref:S,position:[0,0,200]}),(0,Ue.jsx)("group",{ref:b,position:[R,P,0],children:a})]}),L)};var mt=Q(require("react")),$r=require("@react-three/fiber"),Jr=require("three");var F=require("react/jsx-runtime");function Nt({scale:r=[.8,.05,.05],color:e,rotation:t}){return(0,F.jsx)("group",{rotation:t,children:(0,F.jsxs)("mesh",{position:[.4,0,0],children:[(0,F.jsx)("boxGeometry",{args:r}),(0,F.jsx)("meshBasicMaterial",{color:e,toneMapped:!1})]})})}function be(c){var l=c,{onClick:r,font:e,disabled:t,arcStyle:o,label:i,labelColor:n,axisHeadScale:a=1}=l,s=k(l,["onClick","font","disabled","arcStyle","label","labelColor","axisHeadScale"]);let y=(0,$r.useThree)(z=>z.gl),g=mt.useMemo(()=>{let z=document.createElement("canvas");z.width=64,z.height=64;let h=z.getContext("2d");return h.beginPath(),h.arc(32,32,16,0,2*Math.PI),h.closePath(),h.fillStyle=o,h.fill(),i&&(h.font=e,h.textAlign="center",h.fillStyle=n,h.fillText(i,32,41)),new Jr.CanvasTexture(z)},[o,i,n,e]),[T,d]=mt.useState(!1),b=(i?1:.75)*(T?1.2:1)*a;return(0,F.jsx)("sprite",K(w({scale:b,onPointerOver:t?void 0:z=>{z.stopPropagation(),d(!0)},onPointerOut:t?void 0:r||(z=>{z.stopPropagation(),d(!1)})},s),{children:(0,F.jsx)("spriteMaterial",{map:g,"map-encoding":y.outputEncoding,"map-anisotropy":y.capabilities.getMaxAnisotropy()||1,alphaTest:.3,opacity:i?1:.75,toneMapped:!1})}))}var eo=g=>{var T=g,{hideNegativeAxes:r,hideAxisHeads:e,disabled:t,font:o="18px Inter var, Arial, sans-serif",axisColors:i=["#ff2060","#20df80","#2080ff"],axisHeadScale:n=1,axisScale:a,labels:s=["X","Y","Z"],labelColor:c="#000",onClick:l}=T,y=k(T,["hideNegativeAxes","hideAxisHeads","disabled","font","axisColors","axisHeadScale","axisScale","labels","labelColor","onClick"]);let[d,b,S]=i,{tweenCamera:L,raycast:z}=Qr(),h={font:o,disabled:t,labelColor:c,raycast:z,onClick:l,axisHeadScale:n,onPointerDown:t?void 0:p=>{L(p.object.position),p.stopPropagation()}};return(0,F.jsxs)("group",K(w({scale:40},y),{children:[(0,F.jsx)(Nt,{color:d,rotation:[0,0,0],scale:a}),(0,F.jsx)(Nt,{color:b,rotation:[0,0,Math.PI/2],scale:a}),(0,F.jsx)(Nt,{color:S,rotation:[0,-Math.PI/2,0],scale:a}),!e&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(be,w({arcStyle:d,position:[1,0,0],label:s[0]},h)),(0,F.jsx)(be,w({arcStyle:b,position:[0,1,0],label:s[1]},h)),(0,F.jsx)(be,w({arcStyle:S,position:[0,0,1],label:s[2]},h)),!r&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(be,w({arcStyle:d,position:[-1,0,0]},h)),(0,F.jsx)(be,w({arcStyle:b,position:[0,-1,0]},h)),(0,F.jsx)(be,w({arcStyle:S,position:[0,0,-1]},h))]})]}),(0,F.jsx)("ambientLight",{intensity:.5}),(0,F.jsx)("pointLight",{position:[10,10,10],intensity:.5})]}))};var Pe=require("react/jsx-runtime");function to({isFigmaPlugin:r}){return(0,Pe.jsx)(Pe.Fragment,{children:(0,Pe.jsx)(Wr,{alignment:"bottom-right",margin:r?[25,25]:[65,110],renderPriority:2,children:(0,Pe.jsx)(eo,{axisColors:["#FF430A","#FF430A","#FF430A"],labelColor:"white",hideNegativeAxes:!0,axisHeadScale:.8})})})}var V={LEFT:1,RIGHT:2,MIDDLE:4},f=Object.freeze({NONE:0,ROTATE:1,TRUCK:2,OFFSET:4,DOLLY:8,ZOOM:16,TOUCH_ROTATE:32,TOUCH_TRUCK:64,TOUCH_OFFSET:128,TOUCH_DOLLY:256,TOUCH_ZOOM:512,TOUCH_DOLLY_TRUCK:1024,TOUCH_DOLLY_OFFSET:2048,TOUCH_DOLLY_ROTATE:4096,TOUCH_ZOOM_TRUCK:8192,TOUCH_ZOOM_OFFSET:16384,TOUCH_ZOOM_ROTATE:32768});function ve(r){return r.isPerspectiveCamera}function pe(r){return r.isOrthographicCamera}var Ce=Math.PI*2,ro=Math.PI/2,fo=1e-5;function I(r,e=fo){return Math.abs(r)<e}function M(r,e,t=fo){return I(r-e,t)}function oo(r,e){return Math.round(r/e)*e}function He(r){return isFinite(r)?r:r<0?-Number.MAX_VALUE:Number.MAX_VALUE}function Be(r){return Math.abs(r)<Number.MAX_VALUE?r:r*(1/0)}function Ut(r,e){e.set(0,0),r.forEach(t=>{e.x+=t.clientX,e.y+=t.clientY}),e.x/=r.length,e.y/=r.length}function Ht(r,e){return pe(r)?(console.warn(`${e} is not supported in OrthographicCamera`),!0):!1}function io(r){return r.invert?r.invert():r.inverse(),r}var Yt=class{constructor(){this._listeners={}}addEventListener(e,t){let o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(t)===-1&&o[e].push(t)}removeEventListener(e,t){let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}removeAllEventListeners(e){if(!e){this._listeners={};return}Array.isArray(this._listeners[e])&&(this._listeners[e].length=0)}dispatchEvent(e){let o=this._listeners[e.type];if(o!==void 0){e.target=this;let i=o.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e)}}},uo=typeof window!="undefined",Xi=uo&&/Mac/.test(navigator.platform),no=!(uo&&"PointerEvent"in window),ft=1/8,x,ao,dt,Bt,X,A,O,ze,re,oe,ye,so,co,$,Ge,Re,lo,Gt,mo,Vt,kt,ut,Ve=class extends Yt{constructor(e,t){if(super(),this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.minDistance=0,this.maxDistance=1/0,this.infinityDolly=!1,this.minZoom=.01,this.maxZoom=1/0,this.dampingFactor=.05,this.draggingDampingFactor=.25,this.azimuthRotateSpeed=1,this.polarRotateSpeed=1,this.dollySpeed=1,this.truckSpeed=2,this.dollyToCursor=!1,this.dragToOffset=!1,this.verticalDragToForward=!1,this.boundaryFriction=0,this.restThreshold=.01,this.colliderMeshes=[],this.cancel=()=>{},this._enabled=!0,this._state=f.NONE,this._viewport=null,this._dollyControlAmount=0,this._hasRested=!0,this._boundaryEnclosesCamera=!1,this._needsUpdate=!0,this._updatedLastTime=!1,this._elementRect=new DOMRect,this._activePointers=[],this._truckInternal=(o,i,n)=>{if(ve(this._camera)){let a=A.copy(this._camera.position).sub(this._target),s=this._camera.getEffectiveFOV()*x.MathUtils.DEG2RAD,c=a.length()*Math.tan(s*.5),l=this.truckSpeed*o*c/this._elementRect.height,y=this.truckSpeed*i*c/this._elementRect.height;this.verticalDragToForward?(n?this.setFocalOffset(this._focalOffsetEnd.x+l,this._focalOffsetEnd.y,this._focalOffsetEnd.z,!0):this.truck(l,0,!0),this.forward(-y,!0)):n?this.setFocalOffset(this._focalOffsetEnd.x+l,this._focalOffsetEnd.y+y,this._focalOffsetEnd.z,!0):this.truck(l,y,!0)}else if(pe(this._camera)){let a=this._camera,s=o*(a.right-a.left)/a.zoom/this._elementRect.width,c=i*(a.top-a.bottom)/a.zoom/this._elementRect.height;n?this.setFocalOffset(this._focalOffsetEnd.x+s,this._focalOffsetEnd.y+c,this._focalOffsetEnd.z,!0):this.truck(s,c,!0)}},this._rotateInternal=(o,i)=>{let n=Ce*this.azimuthRotateSpeed*o/this._elementRect.height,a=Ce*this.polarRotateSpeed*i/this._elementRect.height;this.rotate(n,a,!0)},this._dollyInternal=(o,i,n)=>{let a=Math.pow(.95,-o*this.dollySpeed),s=this._sphericalEnd.radius*a,c=this._sphericalEnd.radius,l=c*(o>=0?-1:1);this.dollyTo(s),this.infinityDolly&&(s<this.minDistance||this.maxDistance===this.minDistance)&&(this._camera.getWorldDirection(A),this._targetEnd.add(A.normalize().multiplyScalar(l)),this._target.add(A.normalize().multiplyScalar(l))),this.dollyToCursor&&(this._dollyControlAmount+=this._sphericalEnd.radius-c,this.infinityDolly&&(s<this.minDistance||this.maxDistance===this.minDistance)&&(this._dollyControlAmount-=l),this._dollyControlCoord.set(i,n))},this._zoomInternal=(o,i,n)=>{let a=Math.pow(.95,o*this.dollySpeed),s=this._zoomEnd;this.zoomTo(this._zoom*a),this.dollyToCursor&&(this._dollyControlAmount+=this._zoomEnd-s,this._dollyControlCoord.set(i,n))},typeof x=="undefined"&&console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."),this._camera=e,this._yAxisUpSpace=new x.Quaternion().setFromUnitVectors(this._camera.up,dt),this._yAxisUpSpaceInverse=io(this._yAxisUpSpace.clone()),this._state=f.NONE,this._domElement=t,this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none",this._target=new x.Vector3,this._targetEnd=this._target.clone(),this._focalOffset=new x.Vector3,this._focalOffsetEnd=this._focalOffset.clone(),this._spherical=new x.Spherical().setFromVector3(A.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)),this._sphericalEnd=this._spherical.clone(),this._zoom=this._camera.zoom,this._zoomEnd=this._zoom,this._nearPlaneCorners=[new x.Vector3,new x.Vector3,new x.Vector3,new x.Vector3],this._updateNearPlaneCorners(),this._boundary=new x.Box3(new x.Vector3(-1/0,-1/0,-1/0),new x.Vector3(1/0,1/0,1/0)),this._target0=this._target.clone(),this._position0=this._camera.position.clone(),this._zoom0=this._zoom,this._focalOffset0=this._focalOffset.clone(),this._dollyControlAmount=0,this._dollyControlCoord=new x.Vector2,this.mouseButtons={left:f.ROTATE,middle:f.DOLLY,right:f.TRUCK,wheel:ve(this._camera)?f.DOLLY:pe(this._camera)?f.ZOOM:f.NONE},this.touches={one:f.TOUCH_ROTATE,two:ve(this._camera)?f.TOUCH_DOLLY_TRUCK:pe(this._camera)?f.TOUCH_ZOOM_TRUCK:f.NONE,three:f.TOUCH_TRUCK},this._domElement){let o=new x.Vector2,i=new x.Vector2,n=new x.Vector2,a=m=>{if(!this._enabled)return;let u={pointerId:m.pointerId,clientX:m.clientX,clientY:m.clientY,deltaX:0,deltaY:0};this._activePointers.push(u),this._domElement.ownerDocument.removeEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",T),this._domElement.ownerDocument.addEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",T),h(m)},s=m=>{if(!this._enabled)return;let u={pointerId:0,clientX:m.clientX,clientY:m.clientY,deltaX:0,deltaY:0};this._activePointers.push(u),this._domElement.ownerDocument.removeEventListener("mousemove",y),this._domElement.ownerDocument.removeEventListener("mouseup",d),this._domElement.ownerDocument.addEventListener("mousemove",y),this._domElement.ownerDocument.addEventListener("mouseup",d),h(m)},c=m=>{this._enabled&&(m.preventDefault(),Array.prototype.forEach.call(m.changedTouches,u=>{let v={pointerId:u.identifier,clientX:u.clientX,clientY:u.clientY,deltaX:0,deltaY:0};this._activePointers.push(v)}),this._domElement.ownerDocument.removeEventListener("touchmove",g,{passive:!1}),this._domElement.ownerDocument.removeEventListener("touchend",b),this._domElement.ownerDocument.addEventListener("touchmove",g,{passive:!1}),this._domElement.ownerDocument.addEventListener("touchend",b),h(m))},l=m=>{m.cancelable&&m.preventDefault();let u=m.pointerId,v=this._findPointerById(u);if(v){if(v.clientX=m.clientX,v.clientY=m.clientY,v.deltaX=m.movementX,v.deltaY=m.movementY,m.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=0,(m.buttons&V.LEFT)===V.LEFT&&(this._state=this._state|this.mouseButtons.left),(m.buttons&V.MIDDLE)===V.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(m.buttons&V.RIGHT)===V.RIGHT&&(this._state=this._state|this.mouseButtons.right);p()}},y=m=>{let u=this._findPointerById(0);u&&(u.clientX=m.clientX,u.clientY=m.clientY,u.deltaX=m.movementX,u.deltaY=m.movementY,this._state=0,(m.buttons&V.LEFT)===V.LEFT&&(this._state=this._state|this.mouseButtons.left),(m.buttons&V.MIDDLE)===V.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(m.buttons&V.RIGHT)===V.RIGHT&&(this._state=this._state|this.mouseButtons.right),p())},g=m=>{m.cancelable&&m.preventDefault(),Array.prototype.forEach.call(m.changedTouches,u=>{let v=u.identifier,E=this._findPointerById(v);E&&(E.clientX=u.clientX,E.clientY=u.clientY)}),p()},T=m=>{let u=m.pointerId,v=this._findPointerById(u);if(v&&this._activePointers.splice(this._activePointers.indexOf(v),1),m.pointerType==="touch")switch(this._activePointers.length){case 0:this._state=f.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=f.NONE;C()},d=()=>{let m=this._findPointerById(0);m&&this._activePointers.splice(this._activePointers.indexOf(m),1),this._state=f.NONE,C()},b=m=>{switch(Array.prototype.forEach.call(m.changedTouches,u=>{let v=u.identifier,E=this._findPointerById(v);E&&this._activePointers.splice(this._activePointers.indexOf(E),1)}),this._activePointers.length){case 0:this._state=f.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}C()},S=-1,L=m=>{if(!this._enabled||this.mouseButtons.wheel===f.NONE)return;if(m.preventDefault(),this.dollyToCursor||this.mouseButtons.wheel===f.ROTATE||this.mouseButtons.wheel===f.TRUCK){let R=performance.now();S-R<1e3&&this._getClientRect(this._elementRect),S=R}let u=Xi?-1:-3,v=m.deltaMode===1?m.deltaY/u:m.deltaY/(u*10),E=this.dollyToCursor?(m.clientX-this._elementRect.x)/this._elementRect.width*2-1:0,_=this.dollyToCursor?(m.clientY-this._elementRect.y)/this._elementRect.height*-2+1:0;switch(this.mouseButtons.wheel){case f.ROTATE:{this._rotateInternal(m.deltaX,m.deltaY);break}case f.TRUCK:{this._truckInternal(m.deltaX,m.deltaY,!1);break}case f.OFFSET:{this._truckInternal(m.deltaX,m.deltaY,!0);break}case f.DOLLY:{this._dollyInternal(-v,E,_);break}case f.ZOOM:{this._zoomInternal(-v,E,_);break}}this.dispatchEvent({type:"control"})},z=m=>{this._enabled&&m.preventDefault()},h=m=>{if(!this._enabled)return;if(Ut(this._activePointers,X),this._getClientRect(this._elementRect),o.copy(X),i.copy(X),this._activePointers.length>=2){let v=X.x-this._activePointers[1].clientX,E=X.y-this._activePointers[1].clientY,_=Math.sqrt(v*v+E*E);n.set(0,_);let R=(this._activePointers[0].clientX+this._activePointers[1].clientX)*.5,P=(this._activePointers[0].clientY+this._activePointers[1].clientY)*.5;i.set(R,P)}if("touches"in m||"pointerType"in m&&m.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=0,(m.buttons&V.LEFT)===V.LEFT&&(this._state=this._state|this.mouseButtons.left),(m.buttons&V.MIDDLE)===V.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(m.buttons&V.RIGHT)===V.RIGHT&&(this._state=this._state|this.mouseButtons.right);this.dispatchEvent({type:"controlstart"})},p=()=>{if(!this._enabled)return;Ut(this._activePointers,X);let m=this._domElement&&document.pointerLockElement===this._domElement,u=m?-this._activePointers[0].deltaX:i.x-X.x,v=m?-this._activePointers[0].deltaY:i.y-X.y;if(i.copy(X),((this._state&f.ROTATE)===f.ROTATE||(this._state&f.TOUCH_ROTATE)===f.TOUCH_ROTATE||(this._state&f.TOUCH_DOLLY_ROTATE)===f.TOUCH_DOLLY_ROTATE||(this._state&f.TOUCH_ZOOM_ROTATE)===f.TOUCH_ZOOM_ROTATE)&&this._rotateInternal(u,v),(this._state&f.DOLLY)===f.DOLLY||(this._state&f.ZOOM)===f.ZOOM){let E=this.dollyToCursor?(o.x-this._elementRect.x)/this._elementRect.width*2-1:0,_=this.dollyToCursor?(o.y-this._elementRect.y)/this._elementRect.height*-2+1:0;this._state===f.DOLLY?this._dollyInternal(v*ft,E,_):this._zoomInternal(v*ft,E,_)}if((this._state&f.TOUCH_DOLLY)===f.TOUCH_DOLLY||(this._state&f.TOUCH_ZOOM)===f.TOUCH_ZOOM||(this._state&f.TOUCH_DOLLY_TRUCK)===f.TOUCH_DOLLY_TRUCK||(this._state&f.TOUCH_ZOOM_TRUCK)===f.TOUCH_ZOOM_TRUCK||(this._state&f.TOUCH_DOLLY_OFFSET)===f.TOUCH_DOLLY_OFFSET||(this._state&f.TOUCH_ZOOM_OFFSET)===f.TOUCH_ZOOM_OFFSET||(this._state&f.TOUCH_DOLLY_ROTATE)===f.TOUCH_DOLLY_ROTATE||(this._state&f.TOUCH_ZOOM_ROTATE)===f.TOUCH_ZOOM_ROTATE){let E=X.x-this._activePointers[1].clientX,_=X.y-this._activePointers[1].clientY,R=Math.sqrt(E*E+_*_),P=n.y-R;n.set(0,R);let D=this.dollyToCursor?(i.x-this._elementRect.x)/this._elementRect.width*2-1:0,J=this.dollyToCursor?(i.y-this._elementRect.y)/this._elementRect.height*-2+1:0;this._state===f.TOUCH_DOLLY||this._state===f.TOUCH_DOLLY_ROTATE||this._state===f.TOUCH_DOLLY_TRUCK||this._state===f.TOUCH_DOLLY_OFFSET?this._dollyInternal(P*ft,D,J):this._zoomInternal(P*ft,D,J)}((this._state&f.TRUCK)===f.TRUCK||(this._state&f.TOUCH_TRUCK)===f.TOUCH_TRUCK||(this._state&f.TOUCH_DOLLY_TRUCK)===f.TOUCH_DOLLY_TRUCK||(this._state&f.TOUCH_ZOOM_TRUCK)===f.TOUCH_ZOOM_TRUCK)&&this._truckInternal(u,v,!1),((this._state&f.OFFSET)===f.OFFSET||(this._state&f.TOUCH_OFFSET)===f.TOUCH_OFFSET||(this._state&f.TOUCH_DOLLY_OFFSET)===f.TOUCH_DOLLY_OFFSET||(this._state&f.TOUCH_ZOOM_OFFSET)===f.TOUCH_ZOOM_OFFSET)&&this._truckInternal(u,v,!0),this.dispatchEvent({type:"control"})},C=()=>{Ut(this._activePointers,X),i.copy(X),this._activePointers.length===0&&(this._domElement.ownerDocument.removeEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",T),this._domElement.ownerDocument.removeEventListener("touchmove",g,{passive:!1}),this._domElement.ownerDocument.removeEventListener("touchend",b),this.dispatchEvent({type:"controlend"}))};this._domElement.addEventListener("pointerdown",a),no&&this._domElement.addEventListener("mousedown",s),no&&this._domElement.addEventListener("touchstart",c),this._domElement.addEventListener("pointercancel",T),this._domElement.addEventListener("wheel",L,{passive:!1}),this._domElement.addEventListener("contextmenu",z),this._removeAllEventListeners=()=>{this._domElement.removeEventListener("pointerdown",a),this._domElement.removeEventListener("mousedown",s),this._domElement.removeEventListener("touchstart",c),this._domElement.removeEventListener("pointercancel",T),this._domElement.removeEventListener("wheel",L,{passive:!1}),this._domElement.removeEventListener("contextmenu",z),this._domElement.ownerDocument.removeEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("mousemove",y),this._domElement.ownerDocument.removeEventListener("touchmove",g,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",T),this._domElement.ownerDocument.removeEventListener("mouseup",d),this._domElement.ownerDocument.removeEventListener("touchend",b)},this.cancel=()=>{this._state!==f.NONE&&(this._state=f.NONE,this._activePointers.length=0,C())}}this.update(0)}static install(e){x=e.THREE,ao=Object.freeze(new x.Vector3(0,0,0)),dt=Object.freeze(new x.Vector3(0,1,0)),Bt=Object.freeze(new x.Vector3(0,0,1)),X=new x.Vector2,A=new x.Vector3,O=new x.Vector3,ze=new x.Vector3,re=new x.Vector3,oe=new x.Vector3,ye=new x.Vector3,so=new x.Vector3,co=new x.Vector3,$=new x.Spherical,Ge=new x.Spherical,Re=new x.Box3,lo=new x.Box3,Gt=new x.Sphere,mo=new x.Quaternion,Vt=new x.Quaternion,kt=new x.Matrix4,ut=new x.Raycaster}static get ACTION(){return f}get camera(){return this._camera}set camera(e){this._camera=e,this.updateCameraUp(),this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,e?(this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none"):(this.cancel(),this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect="")}get active(){return!this._hasRested}get currentAction(){return this._state}get distance(){return this._spherical.radius}set distance(e){this._spherical.radius===e&&this._sphericalEnd.radius===e||(this._spherical.radius=e,this._sphericalEnd.radius=e,this._needsUpdate=!0)}get azimuthAngle(){return this._spherical.theta}set azimuthAngle(e){this._spherical.theta===e&&this._sphericalEnd.theta===e||(this._spherical.theta=e,this._sphericalEnd.theta=e,this._needsUpdate=!0)}get polarAngle(){return this._spherical.phi}set polarAngle(e){this._spherical.phi===e&&this._sphericalEnd.phi===e||(this._spherical.phi=e,this._sphericalEnd.phi=e,this._needsUpdate=!0)}get boundaryEnclosesCamera(){return this._boundaryEnclosesCamera}set boundaryEnclosesCamera(e){this._boundaryEnclosesCamera=e,this._needsUpdate=!0}addEventListener(e,t){super.addEventListener(e,t)}removeEventListener(e,t){super.removeEventListener(e,t)}rotate(e,t,o=!1){return this.rotateTo(this._sphericalEnd.theta+e,this._sphericalEnd.phi+t,o)}rotateAzimuthTo(e,t=!1){return this.rotateTo(e,this._sphericalEnd.phi,t)}rotatePolarTo(e,t=!1){return this.rotateTo(this._sphericalEnd.theta,e,t)}rotateTo(e,t,o=!1){let i=x.MathUtils.clamp(e,this.minAzimuthAngle,this.maxAzimuthAngle),n=x.MathUtils.clamp(t,this.minPolarAngle,this.maxPolarAngle);this._sphericalEnd.theta=i,this._sphericalEnd.phi=n,this._sphericalEnd.makeSafe(),this._needsUpdate=!0,o||(this._spherical.theta=this._sphericalEnd.theta,this._spherical.phi=this._sphericalEnd.phi);let a=!o||M(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&M(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold);return this._createOnRestPromise(a)}dolly(e,t=!1){return this.dollyTo(this._sphericalEnd.radius-e,t)}dollyTo(e,t=!1){let o=this._sphericalEnd.radius,i=x.MathUtils.clamp(e,this.minDistance,this.maxDistance);if(this.colliderMeshes.length>=1){let s=this._collisionTest(),c=M(s,this._spherical.radius);if(!(o>i)&&c)return Promise.resolve();this._sphericalEnd.radius=Math.min(i,s)}else this._sphericalEnd.radius=i;this._needsUpdate=!0,t||(this._spherical.radius=this._sphericalEnd.radius);let a=!t||M(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(a)}zoom(e,t=!1){return this.zoomTo(this._zoomEnd+e,t)}zoomTo(e,t=!1){this._zoomEnd=x.MathUtils.clamp(e,this.minZoom,this.maxZoom),this._needsUpdate=!0,t||(this._zoom=this._zoomEnd);let o=!t||M(this._zoom,this._zoomEnd,this.restThreshold);return this._createOnRestPromise(o)}pan(e,t,o=!1){return console.warn("`pan` has been renamed to `truck`"),this.truck(e,t,o)}truck(e,t,o=!1){this._camera.updateMatrix(),re.setFromMatrixColumn(this._camera.matrix,0),oe.setFromMatrixColumn(this._camera.matrix,1),re.multiplyScalar(e),oe.multiplyScalar(-t);let i=A.copy(re).add(oe),n=O.copy(this._targetEnd).add(i);return this.moveTo(n.x,n.y,n.z,o)}forward(e,t=!1){A.setFromMatrixColumn(this._camera.matrix,0),A.crossVectors(this._camera.up,A),A.multiplyScalar(e);let o=O.copy(this._targetEnd).add(A);return this.moveTo(o.x,o.y,o.z,t)}moveTo(e,t,o,i=!1){let n=A.set(e,t,o).sub(this._targetEnd);this._encloseToBoundary(this._targetEnd,n,this.boundaryFriction),this._needsUpdate=!0,i||this._target.copy(this._targetEnd);let a=!i||M(this._target.x,this._targetEnd.x,this.restThreshold)&&M(this._target.y,this._targetEnd.y,this.restThreshold)&&M(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(a)}fitToBox(e,t,{cover:o=!1,paddingLeft:i=0,paddingRight:n=0,paddingBottom:a=0,paddingTop:s=0}={}){let c=[],l=e.isBox3?Re.copy(e):Re.setFromObject(e);l.isEmpty()&&(console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"),Promise.resolve());let y=oo(this._sphericalEnd.theta,ro),g=oo(this._sphericalEnd.phi,ro);c.push(this.rotateTo(y,g,t));let T=A.setFromSpherical(this._sphericalEnd).normalize(),d=mo.setFromUnitVectors(T,Bt),b=M(Math.abs(T.y),1);b&&d.multiply(Vt.setFromAxisAngle(dt,y)),d.multiply(this._yAxisUpSpaceInverse);let S=lo.makeEmpty();O.copy(l.min).applyQuaternion(d),S.expandByPoint(O),O.copy(l.min).setX(l.max.x).applyQuaternion(d),S.expandByPoint(O),O.copy(l.min).setY(l.max.y).applyQuaternion(d),S.expandByPoint(O),O.copy(l.max).setZ(l.min.z).applyQuaternion(d),S.expandByPoint(O),O.copy(l.min).setZ(l.max.z).applyQuaternion(d),S.expandByPoint(O),O.copy(l.max).setY(l.min.y).applyQuaternion(d),S.expandByPoint(O),O.copy(l.max).setX(l.min.x).applyQuaternion(d),S.expandByPoint(O),O.copy(l.max).applyQuaternion(d),S.expandByPoint(O),S.min.x-=i,S.min.y-=a,S.max.x+=n,S.max.y+=s,d.setFromUnitVectors(Bt,T),b&&d.premultiply(Vt.invert()),d.premultiply(this._yAxisUpSpace);let L=S.getSize(A),z=S.getCenter(O).applyQuaternion(d);if(ve(this._camera)){let h=this.getDistanceToFitBox(L.x,L.y,L.z,o);c.push(this.moveTo(z.x,z.y,z.z,t)),c.push(this.dollyTo(h,t)),c.push(this.setFocalOffset(0,0,0,t))}else if(pe(this._camera)){let h=this._camera,p=h.right-h.left,C=h.top-h.bottom,m=o?Math.max(p/L.x,C/L.y):Math.min(p/L.x,C/L.y);c.push(this.moveTo(z.x,z.y,z.z,t)),c.push(this.zoomTo(m,t)),c.push(this.setFocalOffset(0,0,0,t))}return Promise.all(c)}fitToSphere(e,t){let o=[],n=e instanceof x.Sphere?Gt.copy(e):Zi(e,Gt);if(o.push(this.moveTo(n.center.x,n.center.y,n.center.z,t)),ve(this._camera)){let a=this.getDistanceToFitSphere(n.radius);o.push(this.dollyTo(a,t))}else if(pe(this._camera)){let a=this._camera.right-this._camera.left,s=this._camera.top-this._camera.bottom,c=2*n.radius,l=Math.min(a/c,s/c);o.push(this.zoomTo(l,t))}return o.push(this.setFocalOffset(0,0,0,t)),Promise.all(o)}setLookAt(e,t,o,i,n,a,s=!1){let c=O.set(i,n,a),l=A.set(e,t,o);this._targetEnd.copy(c),this._sphericalEnd.setFromVector3(l.sub(c).applyQuaternion(this._yAxisUpSpace)),this.normalizeRotations(),this._needsUpdate=!0,s||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let y=!s||M(this._target.x,this._targetEnd.x,this.restThreshold)&&M(this._target.y,this._targetEnd.y,this.restThreshold)&&M(this._target.z,this._targetEnd.z,this.restThreshold)&&M(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&M(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&M(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(y)}lerpLookAt(e,t,o,i,n,a,s,c,l,y,g,T,d,b=!1){let S=A.set(i,n,a),L=O.set(e,t,o);$.setFromVector3(L.sub(S).applyQuaternion(this._yAxisUpSpace));let z=ze.set(y,g,T),h=O.set(s,c,l);Ge.setFromVector3(h.sub(z).applyQuaternion(this._yAxisUpSpace)),this._targetEnd.copy(S.lerp(z,d));let p=Ge.theta-$.theta,C=Ge.phi-$.phi,m=Ge.radius-$.radius;this._sphericalEnd.set($.radius+m*d,$.phi+C*d,$.theta+p*d),this.normalizeRotations(),this._needsUpdate=!0,b||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let u=!b||M(this._target.x,this._targetEnd.x,this.restThreshold)&&M(this._target.y,this._targetEnd.y,this.restThreshold)&&M(this._target.z,this._targetEnd.z,this.restThreshold)&&M(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&M(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&M(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(u)}setPosition(e,t,o,i=!1){return this.setLookAt(e,t,o,this._targetEnd.x,this._targetEnd.y,this._targetEnd.z,i)}setTarget(e,t,o,i=!1){let n=this.getPosition(A);return this.setLookAt(n.x,n.y,n.z,e,t,o,i)}setFocalOffset(e,t,o,i=!1){this._focalOffsetEnd.set(e,t,o),this._needsUpdate=!0,i||this._focalOffset.copy(this._focalOffsetEnd);let n=!i||M(this._focalOffset.x,this._focalOffsetEnd.x,this.restThreshold)&&M(this._focalOffset.y,this._focalOffsetEnd.y,this.restThreshold)&&M(this._focalOffset.z,this._focalOffsetEnd.z,this.restThreshold);return this._createOnRestPromise(n)}setOrbitPoint(e,t,o){this._camera.updateMatrixWorld(),re.setFromMatrixColumn(this._camera.matrixWorldInverse,0),oe.setFromMatrixColumn(this._camera.matrixWorldInverse,1),ye.setFromMatrixColumn(this._camera.matrixWorldInverse,2);let i=A.set(e,t,o),n=i.distanceTo(this._camera.position),a=i.sub(this._camera.position);re.multiplyScalar(a.x),oe.multiplyScalar(a.y),ye.multiplyScalar(a.z),A.copy(re).add(oe).add(ye),A.z=A.z+n,this.dollyTo(n,!1),this.setFocalOffset(-A.x,A.y,-A.z,!1),this.moveTo(e,t,o,!1)}setBoundary(e){if(!e){this._boundary.min.set(-1/0,-1/0,-1/0),this._boundary.max.set(1/0,1/0,1/0),this._needsUpdate=!0;return}this._boundary.copy(e),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._needsUpdate=!0}setViewport(e,t,o,i){if(e===null){this._viewport=null;return}this._viewport=this._viewport||new x.Vector4,typeof e=="number"?this._viewport.set(e,t,o,i):this._viewport.copy(e)}getDistanceToFitBox(e,t,o,i=!1){if(Ht(this._camera,"getDistanceToFitBox"))return this._spherical.radius;let n=e/t,a=this._camera.getEffectiveFOV()*x.MathUtils.DEG2RAD,s=this._camera.aspect;return((i?n>s:n<s)?t:e/s)*.5/Math.tan(a*.5)+o*.5}getDistanceToFitSphere(e){if(Ht(this._camera,"getDistanceToFitSphere"))return this._spherical.radius;let t=this._camera.getEffectiveFOV()*x.MathUtils.DEG2RAD,o=Math.atan(Math.tan(t*.5)*this._camera.aspect)*2,i=1<this._camera.aspect?t:o;return e/Math.sin(i*.5)}getTarget(e){return(e&&e.isVector3?e:new x.Vector3).copy(this._targetEnd)}getPosition(e){return(e&&e.isVector3?e:new x.Vector3).setFromSpherical(this._sphericalEnd).applyQuaternion(this._yAxisUpSpaceInverse).add(this._targetEnd)}getFocalOffset(e){return(e&&e.isVector3?e:new x.Vector3).copy(this._focalOffsetEnd)}normalizeRotations(){this._sphericalEnd.theta=this._sphericalEnd.theta%Ce,this._sphericalEnd.theta<0&&(this._sphericalEnd.theta+=Ce),this._spherical.theta+=Ce*Math.round((this._sphericalEnd.theta-this._spherical.theta)/Ce)}reset(e=!1){let t=[this.setLookAt(this._position0.x,this._position0.y,this._position0.z,this._target0.x,this._target0.y,this._target0.z,e),this.setFocalOffset(this._focalOffset0.x,this._focalOffset0.y,this._focalOffset0.z,e),this.zoomTo(this._zoom0,e)];return Promise.all(t)}saveState(){this.getTarget(this._target0),this.getPosition(this._position0),this._zoom0=this._zoom,this._focalOffset0.copy(this._focalOffset)}updateCameraUp(){this._yAxisUpSpace.setFromUnitVectors(this._camera.up,dt),io(this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace))}update(e){let t=this._state===f.NONE?this.dampingFactor:this.draggingDampingFactor,o=Math.min(t*e*60,1),i=this._sphericalEnd.theta-this._spherical.theta,n=this._sphericalEnd.phi-this._spherical.phi,a=this._sphericalEnd.radius-this._spherical.radius,s=so.subVectors(this._targetEnd,this._target),c=co.subVectors(this._focalOffsetEnd,this._focalOffset);if(!I(i)||!I(n)||!I(a)||!I(s.x)||!I(s.y)||!I(s.z)||!I(c.x)||!I(c.y)||!I(c.z)?(this._spherical.set(this._spherical.radius+a*o,this._spherical.phi+n*o,this._spherical.theta+i*o),this._target.add(s.multiplyScalar(o)),this._focalOffset.add(c.multiplyScalar(o)),this._needsUpdate=!0):(this._spherical.copy(this._sphericalEnd),this._target.copy(this._targetEnd),this._focalOffset.copy(this._focalOffsetEnd)),this._dollyControlAmount!==0){if(ve(this._camera)){let d=this._camera,b=A.setFromSpherical(this._sphericalEnd).applyQuaternion(this._yAxisUpSpaceInverse).normalize().negate(),S=O.copy(b).cross(d.up).normalize();S.lengthSq()===0&&(S.x=1);let L=ze.crossVectors(S,b),z=this._sphericalEnd.radius*Math.tan(d.getEffectiveFOV()*x.MathUtils.DEG2RAD*.5),p=(this._sphericalEnd.radius-this._dollyControlAmount-this._sphericalEnd.radius)/this._sphericalEnd.radius,C=A.copy(this._targetEnd).add(S.multiplyScalar(this._dollyControlCoord.x*z*d.aspect)).add(L.multiplyScalar(this._dollyControlCoord.y*z));this._targetEnd.lerp(C,p)}else if(pe(this._camera)){let d=this._camera,b=d.getWorldDirection(A.clone()),S=this._targetEnd.x*b.x+this._targetEnd.y*b.y+this._targetEnd.z*b.z,L=A.set(this._dollyControlCoord.x,this._dollyControlCoord.y,(d.near+d.far)/(d.near-d.far)).unproject(d),z=O.set(0,0,-1).applyQuaternion(d.quaternion),h=ze.copy(L).add(z.multiplyScalar(-L.dot(d.up))),C=-(this._zoom-this._dollyControlAmount-this._zoomEnd)/this._zoom;this._targetEnd.lerp(h,C);let m=this._targetEnd.x*b.x+this._targetEnd.y*b.y+this._targetEnd.z*b.z,u=b.multiplyScalar(m-S);this._targetEnd.sub(u)}this._target.copy(this._targetEnd),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._dollyControlAmount=0}let l=this._collisionTest();this._spherical.radius=Math.min(this._spherical.radius,l),this._spherical.makeSafe(),this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target),this._camera.lookAt(this._target),(!I(this._focalOffset.x)||!I(this._focalOffset.y)||!I(this._focalOffset.z))&&(this._camera.updateMatrix(),re.setFromMatrixColumn(this._camera.matrix,0),oe.setFromMatrixColumn(this._camera.matrix,1),ye.setFromMatrixColumn(this._camera.matrix,2),re.multiplyScalar(this._focalOffset.x),oe.multiplyScalar(-this._focalOffset.y),ye.multiplyScalar(this._focalOffset.z),A.copy(re).add(oe).add(ye),this._camera.position.add(A)),this._boundaryEnclosesCamera&&this._encloseToBoundary(this._camera.position.copy(this._target),A.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse),1);let g=this._zoomEnd-this._zoom;this._zoom+=g*o,this._camera.zoom!==this._zoom&&(I(g)&&(this._zoom=this._zoomEnd),this._camera.zoom=this._zoom,this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0);let T=this._needsUpdate;return T&&!this._updatedLastTime?(this._hasRested=!1,this.dispatchEvent({type:"wake"}),this.dispatchEvent({type:"update"})):T?(this.dispatchEvent({type:"update"}),I(i,this.restThreshold)&&I(n,this.restThreshold)&&I(a,this.restThreshold)&&I(s.x,this.restThreshold)&&I(s.y,this.restThreshold)&&I(s.z,this.restThreshold)&&I(c.x,this.restThreshold)&&I(c.y,this.restThreshold)&&I(c.z,this.restThreshold)&&I(g,this.restThreshold)&&!this._hasRested&&(this._hasRested=!0,this.dispatchEvent({type:"rest"}))):!T&&this._updatedLastTime&&this.dispatchEvent({type:"sleep"}),this._updatedLastTime=T,this._needsUpdate=!1,T}toJSON(){return JSON.stringify({enabled:this._enabled,minDistance:this.minDistance,maxDistance:He(this.maxDistance),minZoom:this.minZoom,maxZoom:He(this.maxZoom),minPolarAngle:this.minPolarAngle,maxPolarAngle:He(this.maxPolarAngle),minAzimuthAngle:He(this.minAzimuthAngle),maxAzimuthAngle:He(this.maxAzimuthAngle),dampingFactor:this.dampingFactor,draggingDampingFactor:this.draggingDampingFactor,dollySpeed:this.dollySpeed,truckSpeed:this.truckSpeed,dollyToCursor:this.dollyToCursor,verticalDragToForward:this.verticalDragToForward,target:this._targetEnd.toArray(),position:A.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),zoom:this._zoomEnd,focalOffset:this._focalOffsetEnd.toArray(),target0:this._target0.toArray(),position0:this._position0.toArray(),zoom0:this._zoom0,focalOffset0:this._focalOffset0.toArray()})}fromJSON(e,t=!1){let o=JSON.parse(e),i=A.fromArray(o.position);this.enabled=o.enabled,this.minDistance=o.minDistance,this.maxDistance=Be(o.maxDistance),this.minZoom=o.minZoom,this.maxZoom=Be(o.maxZoom),this.minPolarAngle=o.minPolarAngle,this.maxPolarAngle=Be(o.maxPolarAngle),this.minAzimuthAngle=Be(o.minAzimuthAngle),this.maxAzimuthAngle=Be(o.maxAzimuthAngle),this.dampingFactor=o.dampingFactor,this.draggingDampingFactor=o.draggingDampingFactor,this.dollySpeed=o.dollySpeed,this.truckSpeed=o.truckSpeed,this.dollyToCursor=o.dollyToCursor,this.verticalDragToForward=o.verticalDragToForward,this._target0.fromArray(o.target0),this._position0.fromArray(o.position0),this._zoom0=o.zoom0,this._focalOffset0.fromArray(o.focalOffset0),this.moveTo(o.target[0],o.target[1],o.target[2],t),$.setFromVector3(i.sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)),this.rotateTo($.theta,$.phi,t),this.zoomTo(o.zoom,t),this.setFocalOffset(o.focalOffset[0],o.focalOffset[1],o.focalOffset[2],t),this._needsUpdate=!0}dispose(){this._removeAllEventListeners()}_findPointerById(e){let t=null;return this._activePointers.some(o=>o.pointerId===e?(t=o,!0):!1),t}_encloseToBoundary(e,t,o){let i=t.lengthSq();if(i===0)return e;let n=O.copy(t).add(e),s=this._boundary.clampPoint(n,ze).sub(n),c=s.lengthSq();if(c===0)return e.add(t);if(c===i)return e;if(o===0)return e.add(t).add(s);{let l=1+o*c/t.dot(s);return e.add(O.copy(t).multiplyScalar(l)).add(s.multiplyScalar(1-o))}}_updateNearPlaneCorners(){if(ve(this._camera)){let e=this._camera,t=e.near,o=e.getEffectiveFOV()*x.MathUtils.DEG2RAD,i=Math.tan(o*.5)*t,n=i*e.aspect;this._nearPlaneCorners[0].set(-n,-i,0),this._nearPlaneCorners[1].set(n,-i,0),this._nearPlaneCorners[2].set(n,i,0),this._nearPlaneCorners[3].set(-n,i,0)}else if(pe(this._camera)){let e=this._camera,t=1/e.zoom,o=e.left*t,i=e.right*t,n=e.top*t,a=e.bottom*t;this._nearPlaneCorners[0].set(o,n,0),this._nearPlaneCorners[1].set(i,n,0),this._nearPlaneCorners[2].set(i,a,0),this._nearPlaneCorners[3].set(o,a,0)}}_collisionTest(){let e=1/0;if(!(this.colliderMeshes.length>=1)||Ht(this._camera,"_collisionTest"))return e;let o=A.setFromSpherical(this._spherical).divideScalar(this._spherical.radius);kt.lookAt(ao,o,this._camera.up);for(let i=0;i<4;i++){let n=O.copy(this._nearPlaneCorners[i]);n.applyMatrix4(kt);let a=ze.addVectors(this._target,n);ut.set(a,o),ut.far=this._spherical.radius+1;let s=ut.intersectObjects(this.colliderMeshes);s.length!==0&&s[0].distance<e&&(e=s[0].distance)}return e}_getClientRect(e){let t=this._domElement.getBoundingClientRect();return e.x=t.left,e.y=t.top,this._viewport?(e.x+=this._viewport.x,e.y+=t.height-this._viewport.w-this._viewport.y,e.width=this._viewport.z,e.height=this._viewport.w):(e.width=t.width,e.height=t.height),e}_createOnRestPromise(e){return e?Promise.resolve():(this._hasRested=!1,this.dispatchEvent({type:"transitionstart"}),new Promise(t=>{let o=()=>{this.removeEventListener("rest",o),t()};this.addEventListener("rest",o)}))}_removeAllEventListeners(){}};function Zi(r,e){let t=e,o=t.center;Re.makeEmpty(),r.traverseVisible(n=>{n.isMesh&&Re.expandByObject(n)}),Re.getCenter(o);let i=0;return r.traverseVisible(n=>{if(!n.isMesh)return;let a=n,s=a.geometry.clone();if(s.applyMatrix4(a.matrixWorld),s.isBufferGeometry){let l=s.attributes.position;for(let y=0,g=l.count;y<g;y++)A.fromBufferAttribute(l,y),i=Math.max(i,o.distanceToSquared(A))}else{let c=s.attributes.position,l=new x.Vector3;for(let y=0,g=c.count;y<g;y++)l.fromBufferAttribute(c,y),i=Math.max(i,o.distanceToSquared(l))}}),t.radius=Math.sqrt(i),t}var qi=Q(require("three"));var ke=require("react");function pt(r){return r/180*Math.PI}function Xt(r){return r.map(e=>pt(e))}function Zt(r){return r.replace("http://localhost:3001/customize","").replace("https://shadergradient.co/customize","").replace("https://www.shadergradient.co/customize","")}var po=require("@react-three/fiber");function ho({type:r,cAzimuthAngle:e,cPolarAngle:t,cDistance:o,cameraZoom:i,zoomOut:n,enableTransition:a}){let s=(0,ke.useRef)(),c=s.current;return(0,po.useFrame)((l,y)=>s.current.update(y)),(0,ke.useEffect)(()=>{c==null||c.rotateTo(pt(e),pt(t),a)},[c,e,t]),(0,ke.useEffect)(()=>{n?r==="sphere"?(c==null||c.dollyTo(Lt.distance,a),c==null||c.zoomTo(Lt.zoom,a)):(c==null||c.dollyTo(At.distance,a),c==null||c.zoomTo(At.zoom,a)):r==="sphere"?(c==null||c.zoomTo(i,a),c==null||c.dollyTo(fr,a)):(c==null||c.dollyTo(o,a),c==null||c.zoomTo(mr,a))},[c,n,r,i,o]),s}var Ye=require("@react-three/fiber");var _o=require("react/jsx-runtime");function go(t){var o=t,{dampingFactor:r=.05}=o,e=k(o,["dampingFactor"]);Ve.install({THREE:qi}),(0,Ye.extend)({CameraControls:Ve});let i=(0,Ye.useThree)(s=>s.camera),n=(0,Ye.useThree)(s=>s.gl),a=ho(e);return(0,_o.jsx)("cameraControls",{ref:a,args:[i,n.domElement],enableDamping:!0,dampingFactor:r,zoomSpeed:10,dollySpeed:10,restThreshold:0})}var yo=Q(require("react")),xo=require("three"),Eo=require("@react-three/fiber");var G=require("three"),Xe=class extends G.DataTextureLoader{constructor(e){super(e),this.type=G.HalfFloatType}parse(e){let s=function(p,C){switch(p){case 1:console.error("THREE.RGBELoader Read Error: "+(C||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(C||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(C||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(C||""))}return-1},g=`
`,T=function(p,C,m){C=C||1024;let v=p.pos,E=-1,_=0,R="",P=String.fromCharCode.apply(null,new Uint16Array(p.subarray(v,v+128)));for(;0>(E=P.indexOf(g))&&_<C&&v<p.byteLength;)R+=P,_+=P.length,v+=128,P+=String.fromCharCode.apply(null,new Uint16Array(p.subarray(v,v+128)));return-1<E?(m!==!1&&(p.pos+=_+E+1),R+P.slice(0,E)):!1},d=function(p){let C=/^#\?(\S+)/,m=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,u=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,v=/^\s*FORMAT=(\S+)\s*$/,E=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,_={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},R,P;if(p.pos>=p.byteLength||!(R=T(p)))return s(1,"no header found");if(!(P=R.match(C)))return s(3,"bad initial token");for(_.valid|=1,_.programtype=P[1],_.string+=R+`
`;R=T(p),R!==!1;){if(_.string+=R+`
`,R.charAt(0)==="#"){_.comments+=R+`
`;continue}if((P=R.match(m))&&(_.gamma=parseFloat(P[1])),(P=R.match(u))&&(_.exposure=parseFloat(P[1])),(P=R.match(v))&&(_.valid|=2,_.format=P[1]),(P=R.match(E))&&(_.valid|=4,_.height=parseInt(P[1],10),_.width=parseInt(P[2],10)),_.valid&2&&_.valid&4)break}return _.valid&2?_.valid&4?_:s(3,"missing image size specifier"):s(3,"missing format specifier")},b=function(p,C,m){let u=C;if(u<8||u>32767||p[0]!==2||p[1]!==2||p[2]&128)return new Uint8Array(p);if(u!==(p[2]<<8|p[3]))return s(3,"wrong scanline width");let v=new Uint8Array(4*C*m);if(!v.length)return s(4,"unable to allocate buffer space");let E=0,_=0,R=4*u,P=new Uint8Array(4),D=new Uint8Array(R),J=m;for(;J>0&&_<p.byteLength;){if(_+4>p.byteLength)return s(1);if(P[0]=p[_++],P[1]=p[_++],P[2]=p[_++],P[3]=p[_++],P[0]!=2||P[1]!=2||(P[2]<<8|P[3])!=u)return s(3,"bad rgbe scanline format");let ee=0,j;for(;ee<R&&_<p.byteLength;){j=p[_++];let ne=j>128;if(ne&&(j-=128),j===0||ee+j>R)return s(3,"bad scanline data");if(ne){let ae=p[_++];for(let ar=0;ar<j;ar++)D[ee++]=ae}else D.set(p.subarray(_,_+j),ee),ee+=j,_+=j}let fi=u;for(let ne=0;ne<fi;ne++){let ae=0;v[E]=D[ne+ae],ae+=u,v[E+1]=D[ne+ae],ae+=u,v[E+2]=D[ne+ae],ae+=u,v[E+3]=D[ne+ae],E+=4}J--}return v},S=function(p,C,m,u){let v=p[C+3],E=Math.pow(2,v-128)/255;m[u+0]=p[C+0]*E,m[u+1]=p[C+1]*E,m[u+2]=p[C+2]*E,m[u+3]=1},L=function(p,C,m,u){let v=p[C+3],E=Math.pow(2,v-128)/255;m[u+0]=G.DataUtils.toHalfFloat(Math.min(p[C+0]*E,65504)),m[u+1]=G.DataUtils.toHalfFloat(Math.min(p[C+1]*E,65504)),m[u+2]=G.DataUtils.toHalfFloat(Math.min(p[C+2]*E,65504)),m[u+3]=G.DataUtils.toHalfFloat(1)},z=new Uint8Array(e);z.pos=0;let h=d(z);if(h!==-1){let p=h.width,C=h.height,m=b(z.subarray(z.pos),p,C);if(m!==-1){let u,v,E;switch(this.type){case G.FloatType:E=m.length/4;let _=new Float32Array(E*4);for(let P=0;P<E;P++)S(m,P*4,_,P*4);u=_,v=G.FloatType;break;case G.HalfFloatType:E=m.length/4;let R=new Uint16Array(E*4);for(let P=0;P<E;P++)L(m,P*4,R,P*4);u=R,v=G.HalfFloatType;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:p,height:C,data:u,header:h.string,gamma:h.gamma,exposure:h.exposure,type:v}}}return null}setDataType(e){return this.type=e,this}load(e,t,o,i){function n(a,s){switch(a.type){case G.FloatType:case G.HalfFloatType:"colorSpace"in a?a.colorSpace="srgb-linear":a.encoding=3e3,a.minFilter=G.LinearFilter,a.magFilter=G.LinearFilter,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,s)}return super.load(e,n,o,i)}};var vo=require("@react-three/fiber");function ht(r,{path:e}){return(0,vo.useLoader)(Xe,r,o=>o.setPath(e))}var ji=r=>r.current&&r.current.isScene,Ki=r=>ji(r)?r.current:r;function To({background:r=!1,envPreset:e}){let t=ht("city.hdr",{path:Qe}),o=ht("dawn.hdr",{path:Qe}),i=ht("lobby.hdr",{path:Qe}),a={city:t,dawn:o,lobby:i}[e],s=(0,Eo.useThree)(l=>l.scene);yo.default.useLayoutEffect(()=>{if(a){let l=Ki(s),y=l.background,g=l.environment;return r!=="only"&&(l.environment=a),r&&(l.background=a),()=>{r!=="only"&&(l.environment=g),r&&(l.background="black")}}},[s,a,r]);let c=a;return c.mapping=xo.EquirectangularReflectionMapping,null}var gt=require("react");var So=require("react"),jt=require("three");var qt=0;function bo(){let[r,e]=(0,So.useState)({});return jt.DefaultLoadingManager.onLoad=()=>{e(t=>K(w({},t),{active:!1}))},jt.DefaultLoadingManager.onProgress=(t,o,i)=>{o===i&&(qt=i);let n=(o-qt)/(i-qt)*100||100;e(a=>K(w({},a),{active:!0,item:t,loaded:o,total:i,progress:n}))},r}var ie=require("react/jsx-runtime");function Po({lightType:r,brightness:e,envPreset:t}){return(0,ie.jsxs)(ie.Fragment,{children:[r==="3d"&&(0,ie.jsx)("ambientLight",{intensity:e||1}),r==="env"&&(0,ie.jsx)(gt.Suspense,{fallback:(0,ie.jsx)(Qi,{}),children:(0,ie.jsx)(To,{envPreset:t,background:!1,loadingCallback:()=>{}})})]})}function Qi(){let{progress:r}=bo();return(0,gt.useEffect)(()=>{let e=document.getElementById("LoaderRoot");e&&r&&(r===100?(e.innerHTML="Ligths are loaded",setTimeout(()=>{e.innerHTML=""},1e3)):e.innerHTML="Loading lights...")},[r]),(0,ie.jsx)("ambientLight",{intensity:.4})}var qe=require("@react-spring/three");var $t=require("@react-three/fiber"),bt=require("react");var _t=Q(require("three"));function Co(r,e,t){return class extends _t.LineBasicMaterial{constructor(){let o=Object.entries(r),i=o.reduce((n,[a,s])=>{let c=_t.UniformsUtils.clone({[a]:{value:s}});return w(w({},n),c)},{});super({color:"#ffffff",linewidth:5,userData:i,onBeforeCompile:n=>{n.uniforms=w(w({},n.uniforms),i),n.vertexShader=e}}),o.forEach(([n])=>Object.defineProperty(this,n,{get:()=>this.uniforms[n].value,set:a=>this.uniforms[n].value=a})),t&&t(this)}}}var Ae=Q(require("three"));function zo(r,e,t,o){return class extends Ae.MeshPhysicalMaterial{constructor(){let i=Object.entries(r),n=r.colors,a=Kt(n[0]),s=Kt(n[1]),c=Kt(n[2]),l={uC1r:{value:fe(a==null?void 0:a.r)},uC1g:{value:fe(a==null?void 0:a.g)},uC1b:{value:fe(a==null?void 0:a.b)},uC2r:{value:fe(s==null?void 0:s.r)},uC2g:{value:fe(s==null?void 0:s.g)},uC2b:{value:fe(s==null?void 0:s.b)},uC3r:{value:fe(c==null?void 0:c.r)},uC3g:{value:fe(c==null?void 0:c.g)},uC3b:{value:fe(c==null?void 0:c.b)}},y=i.reduce((g,[T,d])=>{let b=Ae.UniformsUtils.clone({[T]:{value:d}});return w(w({},g),b)},{});super({metalness:.2,userData:y,side:Ae.DoubleSide,onBeforeCompile:g=>{g.uniforms=w(w(w({},g.uniforms),y),l),g.vertexShader=e,g.fragmentShader=t}}),i.forEach(([g])=>Object.defineProperty(this,g,{get:()=>this.uniforms[g].value,set:T=>this.uniforms[g].value=T})),o&&o(this)}}}function Kt(r){let e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function fe(r=0){return r/255}var Wt={};te(Wt,{defaults:()=>Ze,positionMix:()=>Qt});var Ze={};te(Ze,{plane:()=>vt,sphere:()=>yt,waterPlane:()=>xt});var vt={};te(vt,{fragment:()=>Ro,vertex:()=>Ao});var Ro=`
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
gl_FragColor=vec4(outgoingLight,diffuseColor.a);}`;var Ao=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;
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
vUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var yt={};te(yt,{fragment:()=>Lo,vertex:()=>wo});var Lo=`
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
}`;var wo=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float pnoise(vec3 P,vec3 rep){vec3 Pi0=mod(floor(P),rep);vec3 Pi1=mod(Pi0+vec3(1.0),rep);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}varying vec3 vNormal;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;uniform float uFrequency;uniform float uAmplitude;varying vec3 vPos;varying float vDistort;varying vec2 vUv;varying vec3 vViewPosition;
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
float t=uTime*uSpeed;float distortion=pnoise((normal+t)*uNoiseDensity,vec3(10.0))*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vPos=pos;vDistort=distortion;vNormal=normal;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var xt={};te(xt,{fragment:()=>Oo,vertex:()=>Do});var Oo=`
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
gl_FragColor=vec4(outgoingLight,diffuseColor.a);}`;var Do=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;
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
float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var Qt={};te(Qt,{plane:()=>Et,sphere:()=>Tt,waterPlane:()=>St});var Et={};te(Et,{fragment:()=>Fo,vertex:()=>Mo});var Fo="uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec3 vPos;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);gl_FragColor=vec4(color1*vPos.x+color2*vPos.y+color3*vPos.z,1.);}";var Mo=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;
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
vUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var Tt={};te(Tt,{fragment:()=>Io,vertex:()=>No});var Io=`
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
float t=uTime*uSpeed;float distortion=pnoise((normal+t)*uNoiseDensity,vec3(10.0))*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vPos=pos;vDistort=distortion;vNormal=normal;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var St={};te(St,{fragment:()=>Uo,vertex:()=>Ho});var Uo="uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec3 vPos;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);gl_FragColor=vec4(color1*vPos.x+color2*vPos.y+color3*vPos.z,1.);}";var Ho=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;
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
vUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;function Bo({type:r,shader:e,color1:t,color2:o,color3:i,uTime:n,uSpeed:a,uDensity:s,uStrength:c,uFrequency:l,uAmplitude:y}){let[g,T]=(0,bt.useState)(!1),d=r!=null?r:"plane",b=Ze[d];e&&e!=="defaults"&&(b=Wt[e][d]);let S=zo({colors:[t,o,i],uTime:n,uSpeed:a,uLoadingTime:0,uNoiseDensity:s,uNoiseStrength:c,uFrequency:l,uAmplitude:y,uIntensity:.5},b.vertex,b.fragment),L=Co({uTime:n,uSpeed:a,uNoiseDensity:s,uNoiseStrength:c,uFrequency:l,uAmplitude:y,uIntensity:.5},b.vertex);return(0,$t.extend)({ColorShiftMaterial:S}),(0,$t.extend)({HoveredLineMaterial:L}),(0,bt.useEffect)(()=>{T(!0)},[]),g}var Vo=require("@react-three/fiber"),rr=require("react"),ko=Q(require("three")),{to:Go,rotDur:xc,meshDur:Jt,rotDelay:Ec,meshDelay:er}=dr,tr=new ko.Clock,mn=20;function Yo({animate:r,range:e,rangeStart:t,rangeEnd:o}){let i=(0,rr.useRef)(),n=(0,rr.useRef)(),a=0;return(0,Vo.useFrame)((s,c)=>{if(i.current){let l=tr.getElapsedTime();if(e==="enabled"&&(l=t,l=l+tr.getElapsedTime(),l>=o&&(l=t,tr.start())),l>er){let y=i.current.userData.uLoadingTime.value,g=l<Jt+er?Math.easeInOutCubic(a,y,Go-y,Jt*1e3):Go;i.current.userData.uLoadingTime.value=g,l<Jt+er&&(a+=mn)}r==="on"&&(i.current.userData.uTime.value=l,n.current!==void 0&&(n.current.userData.uTime.value=l))}}),{material:i,linemat:n}}var Z=require("react/jsx-runtime");Math.easeInOutCubic=function(r,e,t,o){return r/=o/2,r<1?t/2*r*r*r+e:(r-=2,t/2*(r*r*r+2)+e)};var Pt=192,Ct=36,Xo=({type:r,animate:e,range:t,rangeStart:o,rangeEnd:i,uTime:n,uSpeed:a,uStrength:s,uDensity:c,uFrequency:l,uAmplitude:y,positionX:g,positionY:T,positionZ:d,rotationX:b,rotationY:S,rotationZ:L,color1:z,color2:h,color3:p,reflection:C,wireframe:m,shader:u,rotSpringOption:v=({rotation:_})=>({to:(R,P)=>Rt(void 0,null,function*(){yield R({animatedRotation:_})}),from:{rotation:Xt([0,0,0])},config:{duration:300}}),posSpringOption:E=({position:_})=>({to:(R,P)=>Rt(void 0,null,function*(){yield R({animatedPosition:_})}),from:{position:[0,0,0]},config:{duration:300}})})=>{let _=Bo({type:r,shader:u,color1:z,color2:h,color3:p,uTime:n,uSpeed:a,uDensity:c,uStrength:s,uFrequency:l,uAmplitude:y}),{material:R,linemat:P}=Yo({animate:e,range:t,rangeStart:o,rangeEnd:i}),D=[g,T,d],J=Xt([b,S,L]),{animatedPosition:ee}=(0,qe.useSpring)(E({position:D})),{animatedRotation:j}=(0,qe.useSpring)(v({rotation:J}));return(0,Z.jsxs)("group",{children:[(0,Z.jsxs)(qe.animated.mesh,{position:ee,rotation:j,name:"shadergradient-mesh",children:[r==="plane"&&(0,Z.jsx)("planeGeometry",{args:[10,10,1,Pt]}),r==="sphere"&&(0,Z.jsx)("icosahedronGeometry",{args:[1,Pt/3]}),r==="waterPlane"&&(0,Z.jsx)("planeGeometry",{args:[10,10,Pt,Pt]}),_&&(0,Z.jsx)("colorShiftMaterial",{ref:R,roughness:1-C})]}),(0,Z.jsx)("mesh",{children:(0,Z.jsxs)("lineSegments",{renderOrder:1,position:D,rotation:J,visible:!1,children:[r==="plane"&&(0,Z.jsx)("planeGeometry",{args:[10,10,1,Ct]}),r==="sphere"&&(0,Z.jsx)("icosahedronGeometry",{args:[1,Ct/3]}),r==="waterPlane"&&(0,Z.jsx)("planeGeometry",{args:[10,10,Ct,Ct]}),_&&(0,Z.jsx)("hoveredLineMaterial",{ref:P})]})})]})};var nr=Q(mi());var ue=require("react/jsx-runtime"),xn=nr.parse(Zt(ur[0].url),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"});function En(s){var c=s,{control:r="props",dampingFactor:e,rotSpringOption:t,posSpringOption:o,isFigmaPlugin:i=!1,enableTransition:n=!0}=c,a=k(c,["control","dampingFactor","rotSpringOption","posSpringOption","isFigmaPlugin","enableTransition"]);let l=w(w({},xn),a);r==="query"&&(l=nr.parse(Zt(a.urlString),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"}));let L=l,{lightType:y,envPreset:g,brightness:T,grain:d,toggleAxis:b}=L,S=k(L,["lightType","envPreset","brightness","grain","toggleAxis"]);return Mt(d==="off"),(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(Po,{lightType:y,brightness:T,envPreset:g}),(0,ue.jsx)(Xo,K(w({},S),{rotSpringOption:t,posSpringOption:o}),JSON.stringify(S)),b&&(0,ue.jsx)(to,{isFigmaPlugin:i}),(0,ue.jsx)(go,w({dampingFactor:e,enableTransition:n},S))]})}De(Le,require("@react-three/fiber"),module.exports);0&&(module.exports={ShaderGradient,ShaderGradientCanvas,...require("@react-three/fiber")});
/*! Bundled license information:

camera-controls/dist/camera-controls.module.js:
  (*!
   * camera-controls
   * https://github.com/yomotsu/camera-controls
   * (c) 2017 @yomotsu
   * Released under the MIT License.
   *)
*/
