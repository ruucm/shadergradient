var ta=Object.create;var wt=Object.defineProperty,ra=Object.defineProperties,oa=Object.getOwnPropertyDescriptor,na=Object.getOwnPropertyDescriptors,ia=Object.getOwnPropertyNames,Rt=Object.getOwnPropertySymbols,sa=Object.getPrototypeOf,zr=Object.prototype.hasOwnProperty,Zo=Object.prototype.propertyIsEnumerable;var Xo=(t,e,r)=>e in t?wt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,D=(t,e)=>{for(var r in e||={})zr.call(e,r)&&Xo(t,r,e[r]);if(Rt)for(var r of Rt(e))Zo.call(e,r)&&Xo(t,r,e[r]);return t},W=(t,e)=>ra(t,na(e));var Z=(t,e)=>{var r={};for(var o in t)zr.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&Rt)for(var o of Rt(t))e.indexOf(o)<0&&Zo.call(t,o)&&(r[o]=t[o]);return r};var Je=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),me=(t,e)=>{for(var r in e)wt(t,r,{get:e[r],enumerable:!0})},aa=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ia(e))!zr.call(t,n)&&n!==r&&wt(t,n,{get:()=>e[n],enumerable:!(o=oa(e,n))||o.enumerable});return t};var ca=(t,e,r)=>(r=t!=null?ta(sa(t)):{},aa(e||!t||!t.__esModule?wt(r,"default",{value:t,enumerable:!0}):r,t));var Ar=(t,e,r)=>new Promise((o,n)=>{var i=l=>{try{a(r.next(l))}catch(c){n(c)}},s=l=>{try{a(r.throw(l))}catch(c){n(c)}},a=l=>l.done?o(l.value):Promise.resolve(l.value).then(i,s);a((r=r.apply(t,e)).next())});var Is=Je((np,Ms)=>{"use strict";Ms.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)});var Vs=Je((ip,Hs)=>{"use strict";var Bs="%[a-f0-9]{2}",Ns=new RegExp("("+Bs+")|([^%]+?)","gi"),Us=new RegExp("("+Bs+")+","gi");function ko(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var r=t.slice(0,e),o=t.slice(e);return Array.prototype.concat.call([],ko(r),ko(o))}function df(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(Ns)||[],r=1;r<e.length;r++)t=ko(e,r).join(""),e=t.match(Ns)||[];return t}}function uf(t){for(var e={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},r=Us.exec(t);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch{var o=df(r[0]);o!==r[0]&&(e[r[0]]=o)}r=Us.exec(t)}e["%C2"]="\uFFFD";for(var n=Object.keys(e),i=0;i<n.length;i++){var s=n[i];t=t.replace(new RegExp(s,"g"),e[s])}return t}Hs.exports=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return uf(t)}}});var Gs=Je((sp,ks)=>{"use strict";ks.exports=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];let r=t.indexOf(e);return r===-1?[t]:[t.slice(0,r),t.slice(r+e.length)]}});var qs=Je((ap,Ys)=>{"use strict";Ys.exports=function(t,e){for(var r={},o=Object.keys(t),n=Array.isArray(e),i=0;i<o.length;i++){var s=o[i],a=t[s];(n?e.indexOf(s)!==-1:e(s,a,t))&&(r[s]=a)}return r}});var Js=Je(K=>{"use strict";var mf=Is(),hf=Vs(),Xs=Gs(),pf=qs(),gf=t=>t==null,Go=Symbol("encodeFragmentIdentifier");function _f(t){switch(t.arrayFormat){case"index":return e=>(r,o)=>{let n=r.length;return o===void 0||t.skipNull&&o===null||t.skipEmptyString&&o===""?r:o===null?[...r,[V(e,t),"[",n,"]"].join("")]:[...r,[V(e,t),"[",V(n,t),"]=",V(o,t)].join("")]};case"bracket":return e=>(r,o)=>o===void 0||t.skipNull&&o===null||t.skipEmptyString&&o===""?r:o===null?[...r,[V(e,t),"[]"].join("")]:[...r,[V(e,t),"[]=",V(o,t)].join("")];case"colon-list-separator":return e=>(r,o)=>o===void 0||t.skipNull&&o===null||t.skipEmptyString&&o===""?r:o===null?[...r,[V(e,t),":list="].join("")]:[...r,[V(e,t),":list=",V(o,t)].join("")];case"comma":case"separator":case"bracket-separator":{let e=t.arrayFormat==="bracket-separator"?"[]=":"=";return r=>(o,n)=>n===void 0||t.skipNull&&n===null||t.skipEmptyString&&n===""?o:(n=n===null?"":n,o.length===0?[[V(r,t),e,V(n,t)].join("")]:[[o,V(n,t)].join(t.arrayFormatSeparator)])}default:return e=>(r,o)=>o===void 0||t.skipNull&&o===null||t.skipEmptyString&&o===""?r:o===null?[...r,V(e,t)]:[...r,[V(e,t),"=",V(o,t)].join("")]}}function vf(t){let e;switch(t.arrayFormat){case"index":return(r,o,n)=>{if(e=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),!e){n[r]=o;return}n[r]===void 0&&(n[r]={}),n[r][e[1]]=o};case"bracket":return(r,o,n)=>{if(e=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),!e){n[r]=o;return}if(n[r]===void 0){n[r]=[o];return}n[r]=[].concat(n[r],o)};case"colon-list-separator":return(r,o,n)=>{if(e=/(:list)$/.exec(r),r=r.replace(/:list$/,""),!e){n[r]=o;return}if(n[r]===void 0){n[r]=[o];return}n[r]=[].concat(n[r],o)};case"comma":case"separator":return(r,o,n)=>{let i=typeof o=="string"&&o.includes(t.arrayFormatSeparator),s=typeof o=="string"&&!i&&ye(o,t).includes(t.arrayFormatSeparator);o=s?ye(o,t):o;let a=i||s?o.split(t.arrayFormatSeparator).map(l=>ye(l,t)):o===null?o:ye(o,t);n[r]=a};case"bracket-separator":return(r,o,n)=>{let i=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),!i){n[r]=o&&ye(o,t);return}let s=o===null?[]:o.split(t.arrayFormatSeparator).map(a=>ye(a,t));if(n[r]===void 0){n[r]=s;return}n[r]=[].concat(n[r],s)};default:return(r,o,n)=>{if(n[r]===void 0){n[r]=o;return}n[r]=[].concat(n[r],o)}}}function Zs(t){if(typeof t!="string"||t.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function V(t,e){return e.encode?e.strict?mf(t):encodeURIComponent(t):t}function ye(t,e){return e.decode?hf(t):t}function Qs(t){return Array.isArray(t)?t.sort():typeof t=="object"?Qs(Object.keys(t)).sort((e,r)=>Number(e)-Number(r)).map(e=>t[e]):t}function $s(t){let e=t.indexOf("#");return e!==-1&&(t=t.slice(0,e)),t}function xf(t){let e="",r=t.indexOf("#");return r!==-1&&(e=t.slice(r)),e}function Ks(t){t=$s(t);let e=t.indexOf("?");return e===-1?"":t.slice(e+1)}function js(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&typeof t=="string"&&t.trim()!==""?t=Number(t):e.parseBooleans&&t!==null&&(t.toLowerCase()==="true"||t.toLowerCase()==="false")&&(t=t.toLowerCase()==="true"),t}function Ws(t,e){e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e),Zs(e.arrayFormatSeparator);let r=vf(e),o=Object.create(null);if(typeof t!="string"||(t=t.trim().replace(/^[?#&]/,""),!t))return o;for(let n of t.split("&")){if(n==="")continue;let[i,s]=Xs(e.decode?n.replace(/\+/g," "):n,"=");s=s===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?s:ye(s,e),r(ye(i,e),s,o)}for(let n of Object.keys(o)){let i=o[n];if(typeof i=="object"&&i!==null)for(let s of Object.keys(i))i[s]=js(i[s],e);else o[n]=js(i,e)}return e.sort===!1?o:(e.sort===!0?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce((n,i)=>{let s=o[i];return Boolean(s)&&typeof s=="object"&&!Array.isArray(s)?n[i]=Qs(s):n[i]=s,n},Object.create(null))}K.extract=Ks;K.parse=Ws;K.stringify=(t,e)=>{if(!t)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e),Zs(e.arrayFormatSeparator);let r=s=>e.skipNull&&gf(t[s])||e.skipEmptyString&&t[s]==="",o=_f(e),n={};for(let s of Object.keys(t))r(s)||(n[s]=t[s]);let i=Object.keys(n);return e.sort!==!1&&i.sort(e.sort),i.map(s=>{let a=t[s];return a===void 0?"":a===null?V(s,e):Array.isArray(a)?a.length===0&&e.arrayFormat==="bracket-separator"?V(s,e)+"[]":a.reduce(o(s),[]).join("&"):V(s,e)+"="+V(a,e)}).filter(s=>s.length>0).join("&")};K.parseUrl=(t,e)=>{e=Object.assign({decode:!0},e);let[r,o]=Xs(t,"#");return Object.assign({url:r.split("?")[0]||"",query:Ws(Ks(t),e)},e&&e.parseFragmentIdentifier&&o?{fragmentIdentifier:ye(o,e)}:{})};K.stringifyUrl=(t,e)=>{e=Object.assign({encode:!0,strict:!0,[Go]:!0},e);let r=$s(t.url).split("?")[0]||"",o=K.extract(t.url),n=K.parse(o,{sort:!1}),i=Object.assign(n,t.query),s=K.stringify(i,e);s&&(s=`?${s}`);let a=xf(t.url);return t.fragmentIdentifier&&(a=`#${e[Go]?V(t.fragmentIdentifier,e):t.fragmentIdentifier}`),`${r}${s}${a}`};K.pick=(t,e,r)=>{r=Object.assign({parseFragmentIdentifier:!0,[Go]:!1},r);let{url:o,query:n,fragmentIdentifier:i}=K.parseUrl(t,r);return K.stringifyUrl({url:o,query:pf(n,e),fragmentIdentifier:i},r)};K.exclude=(t,e,r)=>{let o=Array.isArray(e)?n=>!e.includes(n):(n,i)=>!e(n,i);return K.pick(t,o,r)}});import{Canvas as la}from"@react-three/fiber";var Qo=(t,e)=>({dpr:t,camera:{fov:e},linear:!0,flat:!0,gl:{preserveDrawingBuffer:!0}});import{Fragment as fa,jsx as $o}from"react/jsx-runtime";function Rf(i){var s=i,{children:t,pointerEvents:e="none",pixelDensity:r=1,fov:o=45}=s,n=Z(s,["children","pointerEvents","pixelDensity","fov"]);return $o(fa,{children:$o(la,W(D(W(D({id:"gradientCanvas",resize:{offsetSize:!0}},Qo(r,o)),{style:{pointerEvents:e}}),n),{children:t}),r+o)})}import{useEffect as Qa,useMemo as $a}from"react";import{BufferGeometry as ga,Clock as _a,Float32BufferAttribute as tn,LinearFilter as Jo,Mesh as Hf,OrthographicCamera as va,RGBAFormat as xa,Vector2 as en,WebGLRenderTarget as ya}from"three";import{BufferGeometry as da,Float32BufferAttribute as Ko,OrthographicCamera as ua,Mesh as ma}from"three";var he=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},ha=new ua(-1,1,1,-1,0,1),Or=new da;Or.setAttribute("position",new Ko([-1,3,0,-1,-1,0,3,-1,0],3));Or.setAttribute("uv",new Ko([0,2,0,0,2,0],2));var zt=class{constructor(e){this._mesh=new ma(Or,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ha)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var et=class extends he{constructor(e,r){super(),this.scene=e,this.camera=r,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,r,o){let n=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),i.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),i.buffers.stencil.setClear(a),i.buffers.stencil.setLocked(!0),e.setRenderTarget(o),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(n.EQUAL,1,4294967295),i.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),i.buffers.stencil.setLocked(!0)}},At=class extends he{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};import{ShaderMaterial as Wo,UniformsUtils as pa}from"three";var tt=class extends he{constructor(e,r){super(),this.textureID=r!==void 0?r:"tDiffuse",e instanceof Wo?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pa.clone(e.uniforms),this.material=new Wo({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new zt(this.material)}render(e,r,o){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=o.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}};var Lr={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};var Ot=class{constructor(e,r){if(this.renderer=e,r===void 0){let o={minFilter:Jo,magFilter:Jo,format:xa},n=e.getSize(new en);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,r=new ya(this._width*this._pixelRatio,this._height*this._pixelRatio,o),r.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=r.width,this._height=r.height;this.renderTarget1=r,this.renderTarget2=r.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Lr===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),tt===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new tt(Lr),this.clock=new _a}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,r){this.passes.splice(r,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let r=this.passes.indexOf(e);r!==-1&&this.passes.splice(r,1)}isLastEnabledPass(e){for(let r=e+1;r<this.passes.length;r++)if(this.passes[r].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let r=this.renderer.getRenderTarget(),o=!1;for(let n=0,i=this.passes.length;n<i;n++){let s=this.passes[n];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,o),s.needsSwap){if(o){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}et!==void 0&&(s instanceof et?o=!0:s instanceof At&&(o=!1))}}this.renderer.setRenderTarget(r)}reset(e){if(e===void 0){let r=this.renderer.getSize(new en);this._pixelRatio=this.renderer.getPixelRatio(),this._width=r.width,this._height=r.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,r){this._width=e,this._height=r;let o=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(o,n),this.renderTarget2.setSize(o,n);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(o,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}};var qf=new va(-1,1,1,-1,0,1),rn=new ga;rn.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3));rn.setAttribute("uv",new tn([0,2,0,0,2,0],2));import{Color as ba}from"three";var Lt=class extends he{constructor(e,r,o,n,i){super(),this.scene=e,this.camera=r,this.overrideMaterial=o,this.clearColor=n,this.clearAlpha=i!==void 0?i:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ba}render(e,r,o){let n=e.autoClear;e.autoClear=!1;let i,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),i=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:o),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,i),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=n}};import{ShaderMaterial as Xa,UniformsUtils as Za}from"three";var B={SKIP:0,ADD:1,ALPHA:2,AVERAGE:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,EXCLUSION:8,LIGHTEN:9,MULTIPLY:10,DIVIDE:11,NEGATION:12,NORMAL:13,OVERLAY:14,REFLECT:15,SCREEN:16,SOFT_LIGHT:17,SUBTRACT:18};import{EventDispatcher as Ha,Uniform as Va}from"three";var on="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x+y,1.0)*opacity+x*(1.0-opacity);}";var nn="vec3 blend(const in vec3 x,const in vec3 y,const in float opacity){return y*opacity+x*(1.0-opacity);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){float a=min(y.a,opacity);return vec4(blend(x.rgb,y.rgb,a),max(x.a,a));}";var sn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y)*0.5*opacity+x*(1.0-opacity);}";var an="float blend(const in float x,const in float y){return(y==0.0)?y:max(1.0-(1.0-x)/y,0.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var cn="float blend(const in float x,const in float y){return(y==1.0)?y:min(x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var ln="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x,y)*opacity+x*(1.0-opacity);}";var fn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return abs(x-y)*opacity+x*(1.0-opacity);}";var dn="float blend(const in float x,const in float y){return(y>0.0)?min(x/y,1.0):1.0;}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var un="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y-2.0*x*y)*opacity+x*(1.0-opacity);}";var mn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x,y)*opacity+x*(1.0-opacity);}";var hn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return x*y*opacity+x*(1.0-opacity);}";var pn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-abs(1.0-x-y))*opacity+x*(1.0-opacity);}";var gn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y*opacity+x*(1.0-opacity);}";var _n="float blend(const in float x,const in float y){return(x<0.5)?(2.0*x*y):(1.0-2.0*(1.0-x)*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var vn="float blend(const in float x,const in float y){return(y==1.0)?y:min(x*x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var xn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-(1.0-x)*(1.0-y))*opacity+x*(1.0-opacity);}";var yn="float blend(const in float x,const in float y){return(y<0.5)?(2.0*x*y+x*x*(1.0-2.0*y)):(sqrt(x)*(2.0*y-1.0)+2.0*x*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";var bn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x+y-1.0,0.0)*opacity+x*(1.0-opacity);}";var ka=new Map([[B.SKIP,null],[B.ADD,on],[B.ALPHA,nn],[B.AVERAGE,sn],[B.COLOR_BURN,an],[B.COLOR_DODGE,cn],[B.DARKEN,ln],[B.DIFFERENCE,fn],[B.EXCLUSION,un],[B.LIGHTEN,mn],[B.MULTIPLY,hn],[B.DIVIDE,dn],[B.NEGATION,pn],[B.NORMAL,gn],[B.OVERLAY,_n],[B.REFLECT,vn],[B.SCREEN,xn],[B.SOFT_LIGHT,yn],[B.SUBTRACT,bn]]),rt=class extends Ha{constructor(e,r=1){super(),this.blendFunction=e,this.opacity=new Va(r)}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e,this.dispatchEvent({type:"change"})}getShaderCode(){return ka.get(this.blendFunction)}};var Re={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:2},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:1},width:{value:20},height:{value:20},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

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

		}`};import{BufferGeometry as Ga,Float32BufferAttribute as En,OrthographicCamera as Ya,Mesh as qa}from"three";var Ft=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},ja=new Ya(-1,1,1,-1,0,1),Fr=new Ga;Fr.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3));Fr.setAttribute("uv",new En([0,2,0,0,2,0],2));var Dt=class{constructor(e){this._mesh=new qa(Fr,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ja)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Tn=!0,Mt=class extends Ft{constructor(e,r,o){super(),Re===void 0&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=Za.clone(Re.uniforms),this.material=new Xa({uniforms:this.uniforms,fragmentShader:Re.fragmentShader,vertexShader:Re.vertexShader}),Tn&&(this.uniforms.width.value=e,this.uniforms.height.value=r),this.uniforms.disable.value=o.disable,this.fsQuad=new Dt(this.material),this.blendMode=new rt(B.SCREEN),this.extensions=null}render(e,r,o){this.material.uniforms.tDiffuse.value=o.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,r){Tn&&(this.uniforms.width.value=e,this.uniforms.height.value=r)}initialize(e,r,o){}addEventListener(){}getAttributes(){return this.attributes}getFragmentShader(){return Re.fragmentShader}getVertexShader(){return Re.vertexShader}update(e,r,o){}};import{useThree as Ka,useFrame as Wa}from"@react-three/fiber";function Dr(t){let{gl:e,scene:r,camera:o,size:n}=Ka(),i=$a(()=>{let s=new Ot(e);s.addPass(new Lt(r,o));let a={shape:1,radius:2,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:1,blending:1,blendingMode:1,greyscale:!1,disable:t},l=new Mt(n.width,n.height,a);return s.addPass(l),s},[e,r,o,n,t]);Qa(()=>i==null?void 0:i.setSize(n.width,n.height),[i,n]),Wa((s,a)=>(e.autoClear=!0,void i.render(a)),1)}import*as H from"react";import{createPortal as lc,useFrame as fc,useThree as Ie}from"@react-three/fiber";import{Matrix4 as dc,Object3D as uc,Quaternion as An,Scene as mc,Vector3 as It}from"three";import*as pe from"react";import{useThree as Mr,useFrame as tc}from"@react-three/fiber";function Ja(t){return function(e){t.forEach(function(r){typeof r=="function"?r(e):r!=null&&(r.current=e)})}}var Pn=Ja;import*as Me from"react";import*as we from"three";import{useThree as ec}from"@react-three/fiber";function Sn(t,e,r){let{gl:o,size:n,viewport:i}=ec(),s=typeof t=="number"?t:n.width*i.dpr,a=typeof e=="number"?e:n.height*i.dpr,v=(typeof t=="number"?r:t)||{},{samples:c}=v,d=Z(v,["samples"]),u=Me.useMemo(()=>{let h;return h=new we.WebGLRenderTarget(s,a,D({minFilter:we.LinearFilter,magFilter:we.LinearFilter,encoding:o.outputEncoding,type:we.HalfFloatType},d)),h.samples=c,h},[]);return Me.useLayoutEffect(()=>{u.setSize(s,a),c&&(u.samples=c)},[c,u,s,a]),Me.useEffect(()=>()=>u.dispose(),[]),u}import{Fragment as oc,jsx as Cn,jsxs as nc}from"react/jsx-runtime";var rc=t=>typeof t=="function",Rn=pe.forwardRef((a,s)=>{var l=a,{envMap:t,resolution:e=256,frames:r=1/0,children:o,makeDefault:n}=l,i=Z(l,["envMap","resolution","frames","children","makeDefault"]);let c=Mr(({set:m})=>m),d=Mr(({camera:m})=>m),u=Mr(({size:m})=>m),v=pe.useRef(null),h=pe.useRef(null),p=Sn(e);pe.useLayoutEffect(()=>{i.manual||v.current.updateProjectionMatrix()},[u,i]),pe.useLayoutEffect(()=>{v.current.updateProjectionMatrix()}),pe.useLayoutEffect(()=>{if(n){let m=d;return c(()=>({camera:v.current})),()=>c(()=>({camera:m}))}},[v,n,c]);let g=0,E=null,x=rc(o);return tc(m=>{x&&(r===1/0||g<r)&&(h.current.visible=!1,m.gl.setRenderTarget(p),E=m.scene.background,t&&(m.scene.background=t),m.gl.render(m.scene,v.current),m.scene.background=E,m.gl.setRenderTarget(null),h.current.visible=!0,g++)}),nc(oc,{children:[Cn("orthographicCamera",W(D({left:u.width/-2,right:u.width/2,top:u.height/2,bottom:u.height/-2,ref:Pn([v,s])},i),{children:!x&&o})),Cn("group",{ref:h,children:x&&o(p.texture)})]})});import*as wn from"react";import{Raycaster as ic,Camera as sc}from"three";import{useThree as ac,applyProps as cc}from"@react-three/fiber";function zn(t,e){let r=ac(n=>n.pointer),[o]=wn.useState(()=>{let n=new ic;return e&&cc(n,e,{}),function(i,s){n.setFromCamera(r,t instanceof sc?t:t.current);let a=this.constructor.prototype.raycast.bind(this);a&&a(n,s)}});return o}import{jsx as Mn,jsxs as gc}from"react/jsx-runtime";var In=H.createContext({}),Nn=()=>H.useContext(In),hc=2*Math.PI,On=new uc,Ln=new dc,[Ne,Ir]=[new An,new An],Fn=new It,Dn=new It,pc=t=>"minPolarAngle"in t,Un=({alignment:t="bottom-right",margin:e=[80,80],renderPriority:r=0,autoClear:o=!0,onUpdate:n,onTarget:i,children:s})=>{let a=Ie(({size:L})=>L),l=Ie(({camera:L})=>L),c=Ie(({controls:L})=>L),d=Ie(({gl:L})=>L),u=Ie(({scene:L})=>L),v=Ie(({invalidate:L})=>L),h=H.useRef(),p=H.useRef(),g=H.useRef(null),[E]=H.useState(()=>new mc),x=H.useRef(!1),m=H.useRef(0),_=H.useRef(new It(0,0,0)),y=H.useRef(new It(0,0,0));H.useEffect(()=>{y.current.copy(l.up)},[l]);let f=H.useCallback(L=>{x.current=!0,(c||i)&&(_.current=(c==null?void 0:c.target)||(i==null?void 0:i())),m.current=l.position.distanceTo(Fn),Ne.copy(l.quaternion),Dn.copy(L).multiplyScalar(m.current).add(Fn),On.lookAt(Dn),Ir.copy(On.quaternion),v()},[c,l,i,v]);H.useEffect(()=>(u.background&&(h.current=u.background,u.background=null,E.background=h.current),()=>{h.current&&(u.background=h.current)}),[]),fc((L,Y)=>{var X;if(g.current&&p.current){if(x.current)if(Ne.angleTo(Ir)<.01)x.current=!1,pc(c)&&l.up.copy(y.current);else{let j=Y*hc;Ne.rotateTowards(Ir,j),l.position.set(0,0,1).applyQuaternion(Ne).multiplyScalar(m.current).add(_.current),l.up.set(0,1,0).applyQuaternion(Ne).normalize(),l.quaternion.copy(Ne),n?n():c&&c.update(),v()}Ln.copy(l.matrix).invert(),(X=p.current)==null||X.quaternion.setFromRotationMatrix(Ln),o&&(d.autoClear=!1),d.clearDepth(),d.render(E,g.current)}},r);let T=zn(g),C=H.useMemo(()=>({tweenCamera:f,raycast:T}),[f]),[R,S]=e,A=t.endsWith("-center")?0:t.endsWith("-left")?-a.width/2+R:a.width/2-R,w=t.startsWith("center-")?0:t.startsWith("top-")?a.height/2-S:-a.height/2+S;return lc(gc(In.Provider,{value:C,children:[Mn(Rn,{ref:g,position:[0,0,200]}),Mn("group",{ref:p,position:[A,w,0],children:s})]}),E)};import*as Ut from"react";import{useThree as _c}from"@react-three/fiber";import{CanvasTexture as vc}from"three";import{Fragment as Bn,jsx as q,jsxs as Nt}from"react/jsx-runtime";function Nr({scale:t=[.8,.05,.05],color:e,rotation:r}){return q("group",{rotation:r,children:Nt("mesh",{position:[.4,0,0],children:[q("boxGeometry",{args:t}),q("meshBasicMaterial",{color:e,toneMapped:!1})]})})}function Ue(l){var c=l,{onClick:t,font:e,disabled:r,arcStyle:o,label:n,labelColor:i,axisHeadScale:s=1}=c,a=Z(c,["onClick","font","disabled","arcStyle","label","labelColor","axisHeadScale"]);let d=_c(x=>x.gl),u=Ut.useMemo(()=>{let x=document.createElement("canvas");x.width=64,x.height=64;let m=x.getContext("2d");return m.beginPath(),m.arc(32,32,16,0,2*Math.PI),m.closePath(),m.fillStyle=o,m.fill(),n&&(m.font=e,m.textAlign="center",m.fillStyle=i,m.fillText(n,32,41)),new vc(x)},[o,n,i,e]),[v,h]=Ut.useState(!1),p=(n?1:.75)*(v?1.2:1)*s;return q("sprite",W(D({scale:p,onPointerOver:r?void 0:x=>{x.stopPropagation(),h(!0)},onPointerOut:r?void 0:t||(x=>{x.stopPropagation(),h(!1)})},a),{children:q("spriteMaterial",{map:u,"map-encoding":d.outputEncoding,"map-anisotropy":d.capabilities.getMaxAnisotropy()||1,alphaTest:.3,opacity:n?1:.75,toneMapped:!1})}))}var Hn=u=>{var v=u,{hideNegativeAxes:t,hideAxisHeads:e,disabled:r,font:o="18px Inter var, Arial, sans-serif",axisColors:n=["#ff2060","#20df80","#2080ff"],axisHeadScale:i=1,axisScale:s,labels:a=["X","Y","Z"],labelColor:l="#000",onClick:c}=v,d=Z(v,["hideNegativeAxes","hideAxisHeads","disabled","font","axisColors","axisHeadScale","axisScale","labels","labelColor","onClick"]);let[h,p,g]=n,{tweenCamera:E,raycast:x}=Nn(),m={font:o,disabled:r,labelColor:l,raycast:x,onClick:c,axisHeadScale:i,onPointerDown:r?void 0:_=>{E(_.object.position),_.stopPropagation()}};return Nt("group",W(D({scale:40},d),{children:[q(Nr,{color:h,rotation:[0,0,0],scale:s}),q(Nr,{color:p,rotation:[0,0,Math.PI/2],scale:s}),q(Nr,{color:g,rotation:[0,-Math.PI/2,0],scale:s}),!e&&Nt(Bn,{children:[q(Ue,D({arcStyle:h,position:[1,0,0],label:a[0]},m)),q(Ue,D({arcStyle:p,position:[0,1,0],label:a[1]},m)),q(Ue,D({arcStyle:g,position:[0,0,1],label:a[2]},m)),!t&&Nt(Bn,{children:[q(Ue,D({arcStyle:h,position:[-1,0,0]},m)),q(Ue,D({arcStyle:p,position:[0,-1,0]},m)),q(Ue,D({arcStyle:g,position:[0,0,-1]},m))]})]}),q("ambientLight",{intensity:.5}),q("pointLight",{position:[10,10,10],intensity:.5})]}))};import{Fragment as xc,jsx as Ur}from"react/jsx-runtime";function Vn({isFigmaPlugin:t}){return Ur(xc,{children:Ur(Un,{alignment:"bottom-right",margin:t?[25,25]:[65,110],renderPriority:2,children:Ur(Hn,{axisColors:["#FF430A","#FF430A","#FF430A"],labelColor:"white",hideNegativeAxes:!0,axisHeadScale:.8})})})}var k={LEFT:1,RIGHT:2,MIDDLE:4},P=Object.freeze({NONE:0,ROTATE:1,TRUCK:2,OFFSET:4,DOLLY:8,ZOOM:16,TOUCH_ROTATE:32,TOUCH_TRUCK:64,TOUCH_OFFSET:128,TOUCH_DOLLY:256,TOUCH_ZOOM:512,TOUCH_DOLLY_TRUCK:1024,TOUCH_DOLLY_OFFSET:2048,TOUCH_DOLLY_ROTATE:4096,TOUCH_ZOOM_TRUCK:8192,TOUCH_ZOOM_OFFSET:16384,TOUCH_ZOOM_ROTATE:32768});function ze(t){return t.isPerspectiveCamera}function be(t){return t.isOrthographicCamera}var Be=Math.PI*2,kn=Math.PI/2,Kn=1e-5;function U(t,e=Kn){return Math.abs(t)<e}function N(t,e,r=Kn){return U(t-e,r)}function Gn(t,e){return Math.round(t/e)*e}function ot(t){return isFinite(t)?t:t<0?-Number.MAX_VALUE:Number.MAX_VALUE}function nt(t){return Math.abs(t)<Number.MAX_VALUE?t:t*(1/0)}function Br(t,e){e.set(0,0),t.forEach(r=>{e.x+=r.clientX,e.y+=r.clientY}),e.x/=t.length,e.y/=t.length}function Hr(t,e){return be(t)?(console.warn(`${e} is not supported in OrthographicCamera`),!0):!1}function Yn(t){return t.invert?t.invert():t.inverse(),t}var qr=class{constructor(){this._listeners={}}addEventListener(e,r){let o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(r)===-1&&o[e].push(r)}removeEventListener(e,r){let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(r);i!==-1&&n.splice(i,1)}}removeAllEventListeners(e){if(!e){this._listeners={};return}Array.isArray(this._listeners[e])&&(this._listeners[e].length=0)}dispatchEvent(e){let o=this._listeners[e.type];if(o!==void 0){e.target=this;let n=o.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}}},Wn=typeof window<"u",yc=Wn&&/Mac/.test(navigator.platform),qn=!(Wn&&"PointerEvent"in window),Bt=1/8,z,jn,Ht,Vr,Q,F,I,He,ce,le,Ae,Xn,Zn,oe,it,Ve,Qn,kr,$n,Gr,Yr,Vt,st=class extends qr{constructor(e,r){if(super(),this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.minDistance=0,this.maxDistance=1/0,this.infinityDolly=!1,this.minZoom=.01,this.maxZoom=1/0,this.dampingFactor=.05,this.draggingDampingFactor=.25,this.azimuthRotateSpeed=1,this.polarRotateSpeed=1,this.dollySpeed=1,this.truckSpeed=2,this.dollyToCursor=!1,this.dragToOffset=!1,this.verticalDragToForward=!1,this.boundaryFriction=0,this.restThreshold=.01,this.colliderMeshes=[],this.cancel=()=>{},this._enabled=!0,this._state=P.NONE,this._viewport=null,this._dollyControlAmount=0,this._hasRested=!0,this._boundaryEnclosesCamera=!1,this._needsUpdate=!0,this._updatedLastTime=!1,this._elementRect=new DOMRect,this._activePointers=[],this._truckInternal=(o,n,i)=>{if(ze(this._camera)){let s=F.copy(this._camera.position).sub(this._target),a=this._camera.getEffectiveFOV()*z.MathUtils.DEG2RAD,l=s.length()*Math.tan(a*.5),c=this.truckSpeed*o*l/this._elementRect.height,d=this.truckSpeed*n*l/this._elementRect.height;this.verticalDragToForward?(i?this.setFocalOffset(this._focalOffsetEnd.x+c,this._focalOffsetEnd.y,this._focalOffsetEnd.z,!0):this.truck(c,0,!0),this.forward(-d,!0)):i?this.setFocalOffset(this._focalOffsetEnd.x+c,this._focalOffsetEnd.y+d,this._focalOffsetEnd.z,!0):this.truck(c,d,!0)}else if(be(this._camera)){let s=this._camera,a=o*(s.right-s.left)/s.zoom/this._elementRect.width,l=n*(s.top-s.bottom)/s.zoom/this._elementRect.height;i?this.setFocalOffset(this._focalOffsetEnd.x+a,this._focalOffsetEnd.y+l,this._focalOffsetEnd.z,!0):this.truck(a,l,!0)}},this._rotateInternal=(o,n)=>{let i=Be*this.azimuthRotateSpeed*o/this._elementRect.height,s=Be*this.polarRotateSpeed*n/this._elementRect.height;this.rotate(i,s,!0)},this._dollyInternal=(o,n,i)=>{let s=Math.pow(.95,-o*this.dollySpeed),a=this._sphericalEnd.radius*s,l=this._sphericalEnd.radius,c=l*(o>=0?-1:1);this.dollyTo(a),this.infinityDolly&&(a<this.minDistance||this.maxDistance===this.minDistance)&&(this._camera.getWorldDirection(F),this._targetEnd.add(F.normalize().multiplyScalar(c)),this._target.add(F.normalize().multiplyScalar(c))),this.dollyToCursor&&(this._dollyControlAmount+=this._sphericalEnd.radius-l,this.infinityDolly&&(a<this.minDistance||this.maxDistance===this.minDistance)&&(this._dollyControlAmount-=c),this._dollyControlCoord.set(n,i))},this._zoomInternal=(o,n,i)=>{let s=Math.pow(.95,o*this.dollySpeed),a=this._zoomEnd;this.zoomTo(this._zoom*s),this.dollyToCursor&&(this._dollyControlAmount+=this._zoomEnd-a,this._dollyControlCoord.set(n,i))},typeof z>"u"&&console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."),this._camera=e,this._yAxisUpSpace=new z.Quaternion().setFromUnitVectors(this._camera.up,Ht),this._yAxisUpSpaceInverse=Yn(this._yAxisUpSpace.clone()),this._state=P.NONE,this._domElement=r,this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none",this._target=new z.Vector3,this._targetEnd=this._target.clone(),this._focalOffset=new z.Vector3,this._focalOffsetEnd=this._focalOffset.clone(),this._spherical=new z.Spherical().setFromVector3(F.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)),this._sphericalEnd=this._spherical.clone(),this._zoom=this._camera.zoom,this._zoomEnd=this._zoom,this._nearPlaneCorners=[new z.Vector3,new z.Vector3,new z.Vector3,new z.Vector3],this._updateNearPlaneCorners(),this._boundary=new z.Box3(new z.Vector3(-1/0,-1/0,-1/0),new z.Vector3(1/0,1/0,1/0)),this._target0=this._target.clone(),this._position0=this._camera.position.clone(),this._zoom0=this._zoom,this._focalOffset0=this._focalOffset.clone(),this._dollyControlAmount=0,this._dollyControlCoord=new z.Vector2,this.mouseButtons={left:P.ROTATE,middle:P.DOLLY,right:P.TRUCK,wheel:ze(this._camera)?P.DOLLY:be(this._camera)?P.ZOOM:P.NONE},this.touches={one:P.TOUCH_ROTATE,two:ze(this._camera)?P.TOUCH_DOLLY_TRUCK:be(this._camera)?P.TOUCH_ZOOM_TRUCK:P.NONE,three:P.TOUCH_TRUCK},this._domElement){let o=new z.Vector2,n=new z.Vector2,i=new z.Vector2,s=f=>{if(!this._enabled)return;let T={pointerId:f.pointerId,clientX:f.clientX,clientY:f.clientY,deltaX:0,deltaY:0};this._activePointers.push(T),this._domElement.ownerDocument.removeEventListener("pointermove",c,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",v),this._domElement.ownerDocument.addEventListener("pointermove",c,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",v),m(f)},a=f=>{if(!this._enabled)return;let T={pointerId:0,clientX:f.clientX,clientY:f.clientY,deltaX:0,deltaY:0};this._activePointers.push(T),this._domElement.ownerDocument.removeEventListener("mousemove",d),this._domElement.ownerDocument.removeEventListener("mouseup",h),this._domElement.ownerDocument.addEventListener("mousemove",d),this._domElement.ownerDocument.addEventListener("mouseup",h),m(f)},l=f=>{this._enabled&&(f.preventDefault(),Array.prototype.forEach.call(f.changedTouches,T=>{let C={pointerId:T.identifier,clientX:T.clientX,clientY:T.clientY,deltaX:0,deltaY:0};this._activePointers.push(C)}),this._domElement.ownerDocument.removeEventListener("touchmove",u,{passive:!1}),this._domElement.ownerDocument.removeEventListener("touchend",p),this._domElement.ownerDocument.addEventListener("touchmove",u,{passive:!1}),this._domElement.ownerDocument.addEventListener("touchend",p),m(f))},c=f=>{f.cancelable&&f.preventDefault();let T=f.pointerId,C=this._findPointerById(T);if(C){if(C.clientX=f.clientX,C.clientY=f.clientY,C.deltaX=f.movementX,C.deltaY=f.movementY,f.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=0,(f.buttons&k.LEFT)===k.LEFT&&(this._state=this._state|this.mouseButtons.left),(f.buttons&k.MIDDLE)===k.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(f.buttons&k.RIGHT)===k.RIGHT&&(this._state=this._state|this.mouseButtons.right);_()}},d=f=>{let T=this._findPointerById(0);T&&(T.clientX=f.clientX,T.clientY=f.clientY,T.deltaX=f.movementX,T.deltaY=f.movementY,this._state=0,(f.buttons&k.LEFT)===k.LEFT&&(this._state=this._state|this.mouseButtons.left),(f.buttons&k.MIDDLE)===k.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(f.buttons&k.RIGHT)===k.RIGHT&&(this._state=this._state|this.mouseButtons.right),_())},u=f=>{f.cancelable&&f.preventDefault(),Array.prototype.forEach.call(f.changedTouches,T=>{let C=T.identifier,R=this._findPointerById(C);R&&(R.clientX=T.clientX,R.clientY=T.clientY)}),_()},v=f=>{let T=f.pointerId,C=this._findPointerById(T);if(C&&this._activePointers.splice(this._activePointers.indexOf(C),1),f.pointerType==="touch")switch(this._activePointers.length){case 0:this._state=P.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=P.NONE;y()},h=()=>{let f=this._findPointerById(0);f&&this._activePointers.splice(this._activePointers.indexOf(f),1),this._state=P.NONE,y()},p=f=>{switch(Array.prototype.forEach.call(f.changedTouches,T=>{let C=T.identifier,R=this._findPointerById(C);R&&this._activePointers.splice(this._activePointers.indexOf(R),1)}),this._activePointers.length){case 0:this._state=P.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}y()},g=-1,E=f=>{if(!this._enabled||this.mouseButtons.wheel===P.NONE)return;if(f.preventDefault(),this.dollyToCursor||this.mouseButtons.wheel===P.ROTATE||this.mouseButtons.wheel===P.TRUCK){let A=performance.now();g-A<1e3&&this._getClientRect(this._elementRect),g=A}let T=yc?-1:-3,C=f.deltaMode===1?f.deltaY/T:f.deltaY/(T*10),R=this.dollyToCursor?(f.clientX-this._elementRect.x)/this._elementRect.width*2-1:0,S=this.dollyToCursor?(f.clientY-this._elementRect.y)/this._elementRect.height*-2+1:0;switch(this.mouseButtons.wheel){case P.ROTATE:{this._rotateInternal(f.deltaX,f.deltaY);break}case P.TRUCK:{this._truckInternal(f.deltaX,f.deltaY,!1);break}case P.OFFSET:{this._truckInternal(f.deltaX,f.deltaY,!0);break}case P.DOLLY:{this._dollyInternal(-C,R,S);break}case P.ZOOM:{this._zoomInternal(-C,R,S);break}}this.dispatchEvent({type:"control"})},x=f=>{this._enabled&&f.preventDefault()},m=f=>{if(!this._enabled)return;if(Br(this._activePointers,Q),this._getClientRect(this._elementRect),o.copy(Q),n.copy(Q),this._activePointers.length>=2){let C=Q.x-this._activePointers[1].clientX,R=Q.y-this._activePointers[1].clientY,S=Math.sqrt(C*C+R*R);i.set(0,S);let A=(this._activePointers[0].clientX+this._activePointers[1].clientX)*.5,w=(this._activePointers[0].clientY+this._activePointers[1].clientY)*.5;n.set(A,w)}if("touches"in f||"pointerType"in f&&f.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=0,(f.buttons&k.LEFT)===k.LEFT&&(this._state=this._state|this.mouseButtons.left),(f.buttons&k.MIDDLE)===k.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(f.buttons&k.RIGHT)===k.RIGHT&&(this._state=this._state|this.mouseButtons.right);this.dispatchEvent({type:"controlstart"})},_=()=>{if(!this._enabled)return;Br(this._activePointers,Q);let f=this._domElement&&document.pointerLockElement===this._domElement,T=f?-this._activePointers[0].deltaX:n.x-Q.x,C=f?-this._activePointers[0].deltaY:n.y-Q.y;if(n.copy(Q),((this._state&P.ROTATE)===P.ROTATE||(this._state&P.TOUCH_ROTATE)===P.TOUCH_ROTATE||(this._state&P.TOUCH_DOLLY_ROTATE)===P.TOUCH_DOLLY_ROTATE||(this._state&P.TOUCH_ZOOM_ROTATE)===P.TOUCH_ZOOM_ROTATE)&&this._rotateInternal(T,C),(this._state&P.DOLLY)===P.DOLLY||(this._state&P.ZOOM)===P.ZOOM){let R=this.dollyToCursor?(o.x-this._elementRect.x)/this._elementRect.width*2-1:0,S=this.dollyToCursor?(o.y-this._elementRect.y)/this._elementRect.height*-2+1:0;this._state===P.DOLLY?this._dollyInternal(C*Bt,R,S):this._zoomInternal(C*Bt,R,S)}if((this._state&P.TOUCH_DOLLY)===P.TOUCH_DOLLY||(this._state&P.TOUCH_ZOOM)===P.TOUCH_ZOOM||(this._state&P.TOUCH_DOLLY_TRUCK)===P.TOUCH_DOLLY_TRUCK||(this._state&P.TOUCH_ZOOM_TRUCK)===P.TOUCH_ZOOM_TRUCK||(this._state&P.TOUCH_DOLLY_OFFSET)===P.TOUCH_DOLLY_OFFSET||(this._state&P.TOUCH_ZOOM_OFFSET)===P.TOUCH_ZOOM_OFFSET||(this._state&P.TOUCH_DOLLY_ROTATE)===P.TOUCH_DOLLY_ROTATE||(this._state&P.TOUCH_ZOOM_ROTATE)===P.TOUCH_ZOOM_ROTATE){let R=Q.x-this._activePointers[1].clientX,S=Q.y-this._activePointers[1].clientY,A=Math.sqrt(R*R+S*S),w=i.y-A;i.set(0,A);let L=this.dollyToCursor?(n.x-this._elementRect.x)/this._elementRect.width*2-1:0,Y=this.dollyToCursor?(n.y-this._elementRect.y)/this._elementRect.height*-2+1:0;this._state===P.TOUCH_DOLLY||this._state===P.TOUCH_DOLLY_ROTATE||this._state===P.TOUCH_DOLLY_TRUCK||this._state===P.TOUCH_DOLLY_OFFSET?this._dollyInternal(w*Bt,L,Y):this._zoomInternal(w*Bt,L,Y)}((this._state&P.TRUCK)===P.TRUCK||(this._state&P.TOUCH_TRUCK)===P.TOUCH_TRUCK||(this._state&P.TOUCH_DOLLY_TRUCK)===P.TOUCH_DOLLY_TRUCK||(this._state&P.TOUCH_ZOOM_TRUCK)===P.TOUCH_ZOOM_TRUCK)&&this._truckInternal(T,C,!1),((this._state&P.OFFSET)===P.OFFSET||(this._state&P.TOUCH_OFFSET)===P.TOUCH_OFFSET||(this._state&P.TOUCH_DOLLY_OFFSET)===P.TOUCH_DOLLY_OFFSET||(this._state&P.TOUCH_ZOOM_OFFSET)===P.TOUCH_ZOOM_OFFSET)&&this._truckInternal(T,C,!0),this.dispatchEvent({type:"control"})},y=()=>{Br(this._activePointers,Q),n.copy(Q),this._activePointers.length===0&&(this._domElement.ownerDocument.removeEventListener("pointermove",c,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",v),this._domElement.ownerDocument.removeEventListener("touchmove",u,{passive:!1}),this._domElement.ownerDocument.removeEventListener("touchend",p),this.dispatchEvent({type:"controlend"}))};this._domElement.addEventListener("pointerdown",s),qn&&this._domElement.addEventListener("mousedown",a),qn&&this._domElement.addEventListener("touchstart",l),this._domElement.addEventListener("pointercancel",v),this._domElement.addEventListener("wheel",E,{passive:!1}),this._domElement.addEventListener("contextmenu",x),this._removeAllEventListeners=()=>{this._domElement.removeEventListener("pointerdown",s),this._domElement.removeEventListener("mousedown",a),this._domElement.removeEventListener("touchstart",l),this._domElement.removeEventListener("pointercancel",v),this._domElement.removeEventListener("wheel",E,{passive:!1}),this._domElement.removeEventListener("contextmenu",x),this._domElement.ownerDocument.removeEventListener("pointermove",c,{passive:!1}),this._domElement.ownerDocument.removeEventListener("mousemove",d),this._domElement.ownerDocument.removeEventListener("touchmove",u,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",v),this._domElement.ownerDocument.removeEventListener("mouseup",h),this._domElement.ownerDocument.removeEventListener("touchend",p)},this.cancel=()=>{this._state!==P.NONE&&(this._state=P.NONE,this._activePointers.length=0,y())}}this.update(0)}static install(e){z=e.THREE,jn=Object.freeze(new z.Vector3(0,0,0)),Ht=Object.freeze(new z.Vector3(0,1,0)),Vr=Object.freeze(new z.Vector3(0,0,1)),Q=new z.Vector2,F=new z.Vector3,I=new z.Vector3,He=new z.Vector3,ce=new z.Vector3,le=new z.Vector3,Ae=new z.Vector3,Xn=new z.Vector3,Zn=new z.Vector3,oe=new z.Spherical,it=new z.Spherical,Ve=new z.Box3,Qn=new z.Box3,kr=new z.Sphere,$n=new z.Quaternion,Gr=new z.Quaternion,Yr=new z.Matrix4,Vt=new z.Raycaster}static get ACTION(){return P}get camera(){return this._camera}set camera(e){this._camera=e,this.updateCameraUp(),this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,e?(this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none"):(this.cancel(),this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect="")}get active(){return!this._hasRested}get currentAction(){return this._state}get distance(){return this._spherical.radius}set distance(e){this._spherical.radius===e&&this._sphericalEnd.radius===e||(this._spherical.radius=e,this._sphericalEnd.radius=e,this._needsUpdate=!0)}get azimuthAngle(){return this._spherical.theta}set azimuthAngle(e){this._spherical.theta===e&&this._sphericalEnd.theta===e||(this._spherical.theta=e,this._sphericalEnd.theta=e,this._needsUpdate=!0)}get polarAngle(){return this._spherical.phi}set polarAngle(e){this._spherical.phi===e&&this._sphericalEnd.phi===e||(this._spherical.phi=e,this._sphericalEnd.phi=e,this._needsUpdate=!0)}get boundaryEnclosesCamera(){return this._boundaryEnclosesCamera}set boundaryEnclosesCamera(e){this._boundaryEnclosesCamera=e,this._needsUpdate=!0}addEventListener(e,r){super.addEventListener(e,r)}removeEventListener(e,r){super.removeEventListener(e,r)}rotate(e,r,o=!1){return this.rotateTo(this._sphericalEnd.theta+e,this._sphericalEnd.phi+r,o)}rotateAzimuthTo(e,r=!1){return this.rotateTo(e,this._sphericalEnd.phi,r)}rotatePolarTo(e,r=!1){return this.rotateTo(this._sphericalEnd.theta,e,r)}rotateTo(e,r,o=!1){let n=z.MathUtils.clamp(e,this.minAzimuthAngle,this.maxAzimuthAngle),i=z.MathUtils.clamp(r,this.minPolarAngle,this.maxPolarAngle);this._sphericalEnd.theta=n,this._sphericalEnd.phi=i,this._sphericalEnd.makeSafe(),this._needsUpdate=!0,o||(this._spherical.theta=this._sphericalEnd.theta,this._spherical.phi=this._sphericalEnd.phi);let s=!o||N(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&N(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold);return this._createOnRestPromise(s)}dolly(e,r=!1){return this.dollyTo(this._sphericalEnd.radius-e,r)}dollyTo(e,r=!1){let o=this._sphericalEnd.radius,n=z.MathUtils.clamp(e,this.minDistance,this.maxDistance);if(this.colliderMeshes.length>=1){let a=this._collisionTest(),l=N(a,this._spherical.radius);if(!(o>n)&&l)return Promise.resolve();this._sphericalEnd.radius=Math.min(n,a)}else this._sphericalEnd.radius=n;this._needsUpdate=!0,r||(this._spherical.radius=this._sphericalEnd.radius);let s=!r||N(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(s)}zoom(e,r=!1){return this.zoomTo(this._zoomEnd+e,r)}zoomTo(e,r=!1){this._zoomEnd=z.MathUtils.clamp(e,this.minZoom,this.maxZoom),this._needsUpdate=!0,r||(this._zoom=this._zoomEnd);let o=!r||N(this._zoom,this._zoomEnd,this.restThreshold);return this._createOnRestPromise(o)}pan(e,r,o=!1){return console.warn("`pan` has been renamed to `truck`"),this.truck(e,r,o)}truck(e,r,o=!1){this._camera.updateMatrix(),ce.setFromMatrixColumn(this._camera.matrix,0),le.setFromMatrixColumn(this._camera.matrix,1),ce.multiplyScalar(e),le.multiplyScalar(-r);let n=F.copy(ce).add(le),i=I.copy(this._targetEnd).add(n);return this.moveTo(i.x,i.y,i.z,o)}forward(e,r=!1){F.setFromMatrixColumn(this._camera.matrix,0),F.crossVectors(this._camera.up,F),F.multiplyScalar(e);let o=I.copy(this._targetEnd).add(F);return this.moveTo(o.x,o.y,o.z,r)}moveTo(e,r,o,n=!1){let i=F.set(e,r,o).sub(this._targetEnd);this._encloseToBoundary(this._targetEnd,i,this.boundaryFriction),this._needsUpdate=!0,n||this._target.copy(this._targetEnd);let s=!n||N(this._target.x,this._targetEnd.x,this.restThreshold)&&N(this._target.y,this._targetEnd.y,this.restThreshold)&&N(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(s)}fitToBox(e,r,{cover:o=!1,paddingLeft:n=0,paddingRight:i=0,paddingBottom:s=0,paddingTop:a=0}={}){let l=[],c=e.isBox3?Ve.copy(e):Ve.setFromObject(e);c.isEmpty()&&(console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"),Promise.resolve());let d=Gn(this._sphericalEnd.theta,kn),u=Gn(this._sphericalEnd.phi,kn);l.push(this.rotateTo(d,u,r));let v=F.setFromSpherical(this._sphericalEnd).normalize(),h=$n.setFromUnitVectors(v,Vr),p=N(Math.abs(v.y),1);p&&h.multiply(Gr.setFromAxisAngle(Ht,d)),h.multiply(this._yAxisUpSpaceInverse);let g=Qn.makeEmpty();I.copy(c.min).applyQuaternion(h),g.expandByPoint(I),I.copy(c.min).setX(c.max.x).applyQuaternion(h),g.expandByPoint(I),I.copy(c.min).setY(c.max.y).applyQuaternion(h),g.expandByPoint(I),I.copy(c.max).setZ(c.min.z).applyQuaternion(h),g.expandByPoint(I),I.copy(c.min).setZ(c.max.z).applyQuaternion(h),g.expandByPoint(I),I.copy(c.max).setY(c.min.y).applyQuaternion(h),g.expandByPoint(I),I.copy(c.max).setX(c.min.x).applyQuaternion(h),g.expandByPoint(I),I.copy(c.max).applyQuaternion(h),g.expandByPoint(I),g.min.x-=n,g.min.y-=s,g.max.x+=i,g.max.y+=a,h.setFromUnitVectors(Vr,v),p&&h.premultiply(Gr.invert()),h.premultiply(this._yAxisUpSpace);let E=g.getSize(F),x=g.getCenter(I).applyQuaternion(h);if(ze(this._camera)){let m=this.getDistanceToFitBox(E.x,E.y,E.z,o);l.push(this.moveTo(x.x,x.y,x.z,r)),l.push(this.dollyTo(m,r)),l.push(this.setFocalOffset(0,0,0,r))}else if(be(this._camera)){let m=this._camera,_=m.right-m.left,y=m.top-m.bottom,f=o?Math.max(_/E.x,y/E.y):Math.min(_/E.x,y/E.y);l.push(this.moveTo(x.x,x.y,x.z,r)),l.push(this.zoomTo(f,r)),l.push(this.setFocalOffset(0,0,0,r))}return Promise.all(l)}fitToSphere(e,r){let o=[],i=e instanceof z.Sphere?kr.copy(e):bc(e,kr);if(o.push(this.moveTo(i.center.x,i.center.y,i.center.z,r)),ze(this._camera)){let s=this.getDistanceToFitSphere(i.radius);o.push(this.dollyTo(s,r))}else if(be(this._camera)){let s=this._camera.right-this._camera.left,a=this._camera.top-this._camera.bottom,l=2*i.radius,c=Math.min(s/l,a/l);o.push(this.zoomTo(c,r))}return o.push(this.setFocalOffset(0,0,0,r)),Promise.all(o)}setLookAt(e,r,o,n,i,s,a=!1){let l=I.set(n,i,s),c=F.set(e,r,o);this._targetEnd.copy(l),this._sphericalEnd.setFromVector3(c.sub(l).applyQuaternion(this._yAxisUpSpace)),this.normalizeRotations(),this._needsUpdate=!0,a||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let d=!a||N(this._target.x,this._targetEnd.x,this.restThreshold)&&N(this._target.y,this._targetEnd.y,this.restThreshold)&&N(this._target.z,this._targetEnd.z,this.restThreshold)&&N(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&N(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&N(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(d)}lerpLookAt(e,r,o,n,i,s,a,l,c,d,u,v,h,p=!1){let g=F.set(n,i,s),E=I.set(e,r,o);oe.setFromVector3(E.sub(g).applyQuaternion(this._yAxisUpSpace));let x=He.set(d,u,v),m=I.set(a,l,c);it.setFromVector3(m.sub(x).applyQuaternion(this._yAxisUpSpace)),this._targetEnd.copy(g.lerp(x,h));let _=it.theta-oe.theta,y=it.phi-oe.phi,f=it.radius-oe.radius;this._sphericalEnd.set(oe.radius+f*h,oe.phi+y*h,oe.theta+_*h),this.normalizeRotations(),this._needsUpdate=!0,p||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let T=!p||N(this._target.x,this._targetEnd.x,this.restThreshold)&&N(this._target.y,this._targetEnd.y,this.restThreshold)&&N(this._target.z,this._targetEnd.z,this.restThreshold)&&N(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&N(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&N(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(T)}setPosition(e,r,o,n=!1){return this.setLookAt(e,r,o,this._targetEnd.x,this._targetEnd.y,this._targetEnd.z,n)}setTarget(e,r,o,n=!1){let i=this.getPosition(F);return this.setLookAt(i.x,i.y,i.z,e,r,o,n)}setFocalOffset(e,r,o,n=!1){this._focalOffsetEnd.set(e,r,o),this._needsUpdate=!0,n||this._focalOffset.copy(this._focalOffsetEnd);let i=!n||N(this._focalOffset.x,this._focalOffsetEnd.x,this.restThreshold)&&N(this._focalOffset.y,this._focalOffsetEnd.y,this.restThreshold)&&N(this._focalOffset.z,this._focalOffsetEnd.z,this.restThreshold);return this._createOnRestPromise(i)}setOrbitPoint(e,r,o){this._camera.updateMatrixWorld(),ce.setFromMatrixColumn(this._camera.matrixWorldInverse,0),le.setFromMatrixColumn(this._camera.matrixWorldInverse,1),Ae.setFromMatrixColumn(this._camera.matrixWorldInverse,2);let n=F.set(e,r,o),i=n.distanceTo(this._camera.position),s=n.sub(this._camera.position);ce.multiplyScalar(s.x),le.multiplyScalar(s.y),Ae.multiplyScalar(s.z),F.copy(ce).add(le).add(Ae),F.z=F.z+i,this.dollyTo(i,!1),this.setFocalOffset(-F.x,F.y,-F.z,!1),this.moveTo(e,r,o,!1)}setBoundary(e){if(!e){this._boundary.min.set(-1/0,-1/0,-1/0),this._boundary.max.set(1/0,1/0,1/0),this._needsUpdate=!0;return}this._boundary.copy(e),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._needsUpdate=!0}setViewport(e,r,o,n){if(e===null){this._viewport=null;return}this._viewport=this._viewport||new z.Vector4,typeof e=="number"?this._viewport.set(e,r,o,n):this._viewport.copy(e)}getDistanceToFitBox(e,r,o,n=!1){if(Hr(this._camera,"getDistanceToFitBox"))return this._spherical.radius;let i=e/r,s=this._camera.getEffectiveFOV()*z.MathUtils.DEG2RAD,a=this._camera.aspect;return((n?i>a:i<a)?r:e/a)*.5/Math.tan(s*.5)+o*.5}getDistanceToFitSphere(e){if(Hr(this._camera,"getDistanceToFitSphere"))return this._spherical.radius;let r=this._camera.getEffectiveFOV()*z.MathUtils.DEG2RAD,o=Math.atan(Math.tan(r*.5)*this._camera.aspect)*2,n=1<this._camera.aspect?r:o;return e/Math.sin(n*.5)}getTarget(e){return(e&&e.isVector3?e:new z.Vector3).copy(this._targetEnd)}getPosition(e){return(e&&e.isVector3?e:new z.Vector3).setFromSpherical(this._sphericalEnd).applyQuaternion(this._yAxisUpSpaceInverse).add(this._targetEnd)}getFocalOffset(e){return(e&&e.isVector3?e:new z.Vector3).copy(this._focalOffsetEnd)}normalizeRotations(){this._sphericalEnd.theta=this._sphericalEnd.theta%Be,this._sphericalEnd.theta<0&&(this._sphericalEnd.theta+=Be),this._spherical.theta+=Be*Math.round((this._sphericalEnd.theta-this._spherical.theta)/Be)}reset(e=!1){let r=[this.setLookAt(this._position0.x,this._position0.y,this._position0.z,this._target0.x,this._target0.y,this._target0.z,e),this.setFocalOffset(this._focalOffset0.x,this._focalOffset0.y,this._focalOffset0.z,e),this.zoomTo(this._zoom0,e)];return Promise.all(r)}saveState(){this.getTarget(this._target0),this.getPosition(this._position0),this._zoom0=this._zoom,this._focalOffset0.copy(this._focalOffset)}updateCameraUp(){this._yAxisUpSpace.setFromUnitVectors(this._camera.up,Ht),Yn(this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace))}update(e){let r=this._state===P.NONE?this.dampingFactor:this.draggingDampingFactor,o=Math.min(r*e*60,1),n=this._sphericalEnd.theta-this._spherical.theta,i=this._sphericalEnd.phi-this._spherical.phi,s=this._sphericalEnd.radius-this._spherical.radius,a=Xn.subVectors(this._targetEnd,this._target),l=Zn.subVectors(this._focalOffsetEnd,this._focalOffset);if(!U(n)||!U(i)||!U(s)||!U(a.x)||!U(a.y)||!U(a.z)||!U(l.x)||!U(l.y)||!U(l.z)?(this._spherical.set(this._spherical.radius+s*o,this._spherical.phi+i*o,this._spherical.theta+n*o),this._target.add(a.multiplyScalar(o)),this._focalOffset.add(l.multiplyScalar(o)),this._needsUpdate=!0):(this._spherical.copy(this._sphericalEnd),this._target.copy(this._targetEnd),this._focalOffset.copy(this._focalOffsetEnd)),this._dollyControlAmount!==0){if(ze(this._camera)){let h=this._camera,p=F.setFromSpherical(this._sphericalEnd).applyQuaternion(this._yAxisUpSpaceInverse).normalize().negate(),g=I.copy(p).cross(h.up).normalize();g.lengthSq()===0&&(g.x=1);let E=He.crossVectors(g,p),x=this._sphericalEnd.radius*Math.tan(h.getEffectiveFOV()*z.MathUtils.DEG2RAD*.5),_=(this._sphericalEnd.radius-this._dollyControlAmount-this._sphericalEnd.radius)/this._sphericalEnd.radius,y=F.copy(this._targetEnd).add(g.multiplyScalar(this._dollyControlCoord.x*x*h.aspect)).add(E.multiplyScalar(this._dollyControlCoord.y*x));this._targetEnd.lerp(y,_)}else if(be(this._camera)){let h=this._camera,p=h.getWorldDirection(F.clone()),g=this._targetEnd.x*p.x+this._targetEnd.y*p.y+this._targetEnd.z*p.z,E=F.set(this._dollyControlCoord.x,this._dollyControlCoord.y,(h.near+h.far)/(h.near-h.far)).unproject(h),x=I.set(0,0,-1).applyQuaternion(h.quaternion),m=He.copy(E).add(x.multiplyScalar(-E.dot(h.up))),y=-(this._zoom-this._dollyControlAmount-this._zoomEnd)/this._zoom;this._targetEnd.lerp(m,y);let f=this._targetEnd.x*p.x+this._targetEnd.y*p.y+this._targetEnd.z*p.z,T=p.multiplyScalar(f-g);this._targetEnd.sub(T)}this._target.copy(this._targetEnd),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._dollyControlAmount=0}let c=this._collisionTest();this._spherical.radius=Math.min(this._spherical.radius,c),this._spherical.makeSafe(),this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target),this._camera.lookAt(this._target),(!U(this._focalOffset.x)||!U(this._focalOffset.y)||!U(this._focalOffset.z))&&(this._camera.updateMatrix(),ce.setFromMatrixColumn(this._camera.matrix,0),le.setFromMatrixColumn(this._camera.matrix,1),Ae.setFromMatrixColumn(this._camera.matrix,2),ce.multiplyScalar(this._focalOffset.x),le.multiplyScalar(-this._focalOffset.y),Ae.multiplyScalar(this._focalOffset.z),F.copy(ce).add(le).add(Ae),this._camera.position.add(F)),this._boundaryEnclosesCamera&&this._encloseToBoundary(this._camera.position.copy(this._target),F.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse),1);let u=this._zoomEnd-this._zoom;this._zoom+=u*o,this._camera.zoom!==this._zoom&&(U(u)&&(this._zoom=this._zoomEnd),this._camera.zoom=this._zoom,this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0);let v=this._needsUpdate;return v&&!this._updatedLastTime?(this._hasRested=!1,this.dispatchEvent({type:"wake"}),this.dispatchEvent({type:"update"})):v?(this.dispatchEvent({type:"update"}),U(n,this.restThreshold)&&U(i,this.restThreshold)&&U(s,this.restThreshold)&&U(a.x,this.restThreshold)&&U(a.y,this.restThreshold)&&U(a.z,this.restThreshold)&&U(l.x,this.restThreshold)&&U(l.y,this.restThreshold)&&U(l.z,this.restThreshold)&&U(u,this.restThreshold)&&!this._hasRested&&(this._hasRested=!0,this.dispatchEvent({type:"rest"}))):!v&&this._updatedLastTime&&this.dispatchEvent({type:"sleep"}),this._updatedLastTime=v,this._needsUpdate=!1,v}toJSON(){return JSON.stringify({enabled:this._enabled,minDistance:this.minDistance,maxDistance:ot(this.maxDistance),minZoom:this.minZoom,maxZoom:ot(this.maxZoom),minPolarAngle:this.minPolarAngle,maxPolarAngle:ot(this.maxPolarAngle),minAzimuthAngle:ot(this.minAzimuthAngle),maxAzimuthAngle:ot(this.maxAzimuthAngle),dampingFactor:this.dampingFactor,draggingDampingFactor:this.draggingDampingFactor,dollySpeed:this.dollySpeed,truckSpeed:this.truckSpeed,dollyToCursor:this.dollyToCursor,verticalDragToForward:this.verticalDragToForward,target:this._targetEnd.toArray(),position:F.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),zoom:this._zoomEnd,focalOffset:this._focalOffsetEnd.toArray(),target0:this._target0.toArray(),position0:this._position0.toArray(),zoom0:this._zoom0,focalOffset0:this._focalOffset0.toArray()})}fromJSON(e,r=!1){let o=JSON.parse(e),n=F.fromArray(o.position);this.enabled=o.enabled,this.minDistance=o.minDistance,this.maxDistance=nt(o.maxDistance),this.minZoom=o.minZoom,this.maxZoom=nt(o.maxZoom),this.minPolarAngle=o.minPolarAngle,this.maxPolarAngle=nt(o.maxPolarAngle),this.minAzimuthAngle=nt(o.minAzimuthAngle),this.maxAzimuthAngle=nt(o.maxAzimuthAngle),this.dampingFactor=o.dampingFactor,this.draggingDampingFactor=o.draggingDampingFactor,this.dollySpeed=o.dollySpeed,this.truckSpeed=o.truckSpeed,this.dollyToCursor=o.dollyToCursor,this.verticalDragToForward=o.verticalDragToForward,this._target0.fromArray(o.target0),this._position0.fromArray(o.position0),this._zoom0=o.zoom0,this._focalOffset0.fromArray(o.focalOffset0),this.moveTo(o.target[0],o.target[1],o.target[2],r),oe.setFromVector3(n.sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)),this.rotateTo(oe.theta,oe.phi,r),this.zoomTo(o.zoom,r),this.setFocalOffset(o.focalOffset[0],o.focalOffset[1],o.focalOffset[2],r),this._needsUpdate=!0}dispose(){this._removeAllEventListeners()}_findPointerById(e){let r=null;return this._activePointers.some(o=>o.pointerId===e?(r=o,!0):!1),r}_encloseToBoundary(e,r,o){let n=r.lengthSq();if(n===0)return e;let i=I.copy(r).add(e),a=this._boundary.clampPoint(i,He).sub(i),l=a.lengthSq();if(l===0)return e.add(r);if(l===n)return e;if(o===0)return e.add(r).add(a);{let c=1+o*l/r.dot(a);return e.add(I.copy(r).multiplyScalar(c)).add(a.multiplyScalar(1-o))}}_updateNearPlaneCorners(){if(ze(this._camera)){let e=this._camera,r=e.near,o=e.getEffectiveFOV()*z.MathUtils.DEG2RAD,n=Math.tan(o*.5)*r,i=n*e.aspect;this._nearPlaneCorners[0].set(-i,-n,0),this._nearPlaneCorners[1].set(i,-n,0),this._nearPlaneCorners[2].set(i,n,0),this._nearPlaneCorners[3].set(-i,n,0)}else if(be(this._camera)){let e=this._camera,r=1/e.zoom,o=e.left*r,n=e.right*r,i=e.top*r,s=e.bottom*r;this._nearPlaneCorners[0].set(o,i,0),this._nearPlaneCorners[1].set(n,i,0),this._nearPlaneCorners[2].set(n,s,0),this._nearPlaneCorners[3].set(o,s,0)}}_collisionTest(){let e=1/0;if(!(this.colliderMeshes.length>=1)||Hr(this._camera,"_collisionTest"))return e;let o=F.setFromSpherical(this._spherical).divideScalar(this._spherical.radius);Yr.lookAt(jn,o,this._camera.up);for(let n=0;n<4;n++){let i=I.copy(this._nearPlaneCorners[n]);i.applyMatrix4(Yr);let s=He.addVectors(this._target,i);Vt.set(s,o),Vt.far=this._spherical.radius+1;let a=Vt.intersectObjects(this.colliderMeshes);a.length!==0&&a[0].distance<e&&(e=a[0].distance)}return e}_getClientRect(e){let r=this._domElement.getBoundingClientRect();return e.x=r.left,e.y=r.top,this._viewport?(e.x+=this._viewport.x,e.y+=r.height-this._viewport.w-this._viewport.y,e.width=this._viewport.z,e.height=this._viewport.w):(e.width=r.width,e.height=r.height),e}_createOnRestPromise(e){return e?Promise.resolve():(this._hasRested=!1,this.dispatchEvent({type:"transitionstart"}),new Promise(r=>{let o=()=>{this.removeEventListener("rest",o),r()};this.addEventListener("rest",o)}))}_removeAllEventListeners(){}};function bc(t,e){let r=e,o=r.center;Ve.makeEmpty(),t.traverseVisible(i=>{i.isMesh&&Ve.expandByObject(i)}),Ve.getCenter(o);let n=0;return t.traverseVisible(i=>{if(!i.isMesh)return;let s=i,a=s.geometry.clone();if(a.applyMatrix4(s.matrixWorld),a.isBufferGeometry){let c=a.attributes.position;for(let d=0,u=c.count;d<u;d++)F.fromBufferAttribute(c,d),n=Math.max(n,o.distanceToSquared(F))}else{let l=a.attributes.position,c=new z.Vector3;for(let d=0,u=l.count;d<u;d++)c.fromBufferAttribute(l,d),n=Math.max(n,o.distanceToSquared(c))}}),r.radius=Math.sqrt(n),r}import*as Pc from"three";import{useEffect as ri,useRef as Ec}from"react";var Jn=1,ei=14,jr={zoom:1,distance:14},Xr={zoom:5,distance:14};var ti={meshDelay:0,meshDur:0,rotDelay:1.7,rotDur:1,posDelay:1.3,posDur:2.2,logoTransition:3.1,text:2.5,to:1},kt="https://ruucm.github.io/shadergradient/shadergradient@1.0.0/hdr/";function Gt(t){return t/180*Math.PI}function Zr(t){return t.map(e=>Gt(e))}function Qr(t){return t.replace("http://localhost:3001/customize","").replace("https://shadergradient.co/customize","").replace("https://www.shadergradient.co/customize","")}import{useFrame as Tc}from"@react-three/fiber";function oi({type:t,cAzimuthAngle:e,cPolarAngle:r,cDistance:o,cameraZoom:n,zoomOut:i}){let s=Ec(),a=s.current;return Tc((l,c)=>s.current.update(c)),ri(()=>{a==null||a.rotateTo(Gt(e),Gt(r),!0)},[a,e,r]),ri(()=>{i?t==="sphere"?(a==null||a.dollyTo(Xr.distance,!0),a==null||a.zoomTo(Xr.zoom,!0)):(a==null||a.dollyTo(jr.distance,!0),a==null||a.zoomTo(jr.zoom,!0)):t==="sphere"?(a==null||a.zoomTo(n,!0),a==null||a.dollyTo(ei,!0)):(a==null||a.dollyTo(o,!0),a==null||a.zoomTo(Jn,!0))},[a,i,t,n,o]),s}import{extend as Sc,useThree as ni}from"@react-three/fiber";import{jsx as Cc}from"react/jsx-runtime";function ii(r){var o=r,{dampingFactor:t=.05}=o,e=Z(o,["dampingFactor"]);st.install({THREE:Pc}),Sc({CameraControls:st});let n=ni(a=>a.camera),i=ni(a=>a.gl),s=oi(e);return Cc("cameraControls",{ref:s,args:[n,i.domElement],enableDamping:!0,dampingFactor:t,zoomSpeed:10,dollySpeed:10,restThreshold:0})}import Ac from"react";import{EquirectangularReflectionMapping as Oc}from"three";import{useThree as Lc}from"@react-three/fiber";import{DataTextureLoader as Rc,HalfFloatType as Yt,FloatType as $r,DataUtils as qt,LinearEncoding as wc,LinearFilter as si}from"three";var at=class extends Rc{constructor(e){super(e),this.type=Yt}parse(e){let a=function(_,y){switch(_){case 1:console.error("THREE.RGBELoader Read Error: "+(y||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(y||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(y||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(y||""))}return-1},u=`
`,v=function(_,y,f){y=y||1024;let C=_.pos,R=-1,S=0,A="",w=String.fromCharCode.apply(null,new Uint16Array(_.subarray(C,C+128)));for(;0>(R=w.indexOf(u))&&S<y&&C<_.byteLength;)A+=w,S+=w.length,C+=128,w+=String.fromCharCode.apply(null,new Uint16Array(_.subarray(C,C+128)));return-1<R?(f!==!1&&(_.pos+=S+R+1),A+w.slice(0,R)):!1},h=function(_){let y=/^#\?(\S+)/,f=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,R=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,S={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},A,w;if(_.pos>=_.byteLength||!(A=v(_)))return a(1,"no header found");if(!(w=A.match(y)))return a(3,"bad initial token");for(S.valid|=1,S.programtype=w[1],S.string+=A+`
`;A=v(_),A!==!1;){if(S.string+=A+`
`,A.charAt(0)==="#"){S.comments+=A+`
`;continue}if((w=A.match(f))&&(S.gamma=parseFloat(w[1])),(w=A.match(T))&&(S.exposure=parseFloat(w[1])),(w=A.match(C))&&(S.valid|=2,S.format=w[1]),(w=A.match(R))&&(S.valid|=4,S.height=parseInt(w[1],10),S.width=parseInt(w[2],10)),S.valid&2&&S.valid&4)break}return S.valid&2?S.valid&4?S:a(3,"missing image size specifier"):a(3,"missing format specifier")},p=function(_,y,f){let T=y;if(T<8||T>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);if(T!==(_[2]<<8|_[3]))return a(3,"wrong scanline width");let C=new Uint8Array(4*y*f);if(!C.length)return a(4,"unable to allocate buffer space");let R=0,S=0,A=4*T,w=new Uint8Array(4),L=new Uint8Array(A),Y=f;for(;Y>0&&S<_.byteLength;){if(S+4>_.byteLength)return a(1);if(w[0]=_[S++],w[1]=_[S++],w[2]=_[S++],w[3]=_[S++],w[0]!=2||w[1]!=2||(w[2]<<8|w[3])!=T)return a(3,"bad rgbe scanline format");let X=0,j;for(;X<A&&S<_.byteLength;){j=_[S++];let de=j>128;if(de&&(j-=128),j===0||X+j>A)return a(3,"bad scanline data");if(de){let ue=_[S++];for(let jo=0;jo<j;jo++)L[X++]=ue}else L.set(_.subarray(S,S+j),X),X+=j,S+=j}let ea=T;for(let de=0;de<ea;de++){let ue=0;C[R]=L[de+ue],ue+=T,C[R+1]=L[de+ue],ue+=T,C[R+2]=L[de+ue],ue+=T,C[R+3]=L[de+ue],R+=4}Y--}return C},g=function(_,y,f,T){let C=_[y+3],R=Math.pow(2,C-128)/255;f[T+0]=_[y+0]*R,f[T+1]=_[y+1]*R,f[T+2]=_[y+2]*R,f[T+3]=1},E=function(_,y,f,T){let C=_[y+3],R=Math.pow(2,C-128)/255;f[T+0]=qt.toHalfFloat(Math.min(_[y+0]*R,65504)),f[T+1]=qt.toHalfFloat(Math.min(_[y+1]*R,65504)),f[T+2]=qt.toHalfFloat(Math.min(_[y+2]*R,65504)),f[T+3]=qt.toHalfFloat(1)},x=new Uint8Array(e);x.pos=0;let m=h(x);if(m!==-1){let _=m.width,y=m.height,f=p(x.subarray(x.pos),_,y);if(f!==-1){let T,C,R;switch(this.type){case $r:R=f.length/4;let S=new Float32Array(R*4);for(let w=0;w<R;w++)g(f,w*4,S,w*4);T=S,C=$r;break;case Yt:R=f.length/4;let A=new Uint16Array(R*4);for(let w=0;w<R;w++)E(f,w*4,A,w*4);T=A,C=Yt;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:_,height:y,data:T,header:m.string,gamma:m.gamma,exposure:m.exposure,type:C}}}return null}setDataType(e){return this.type=e,this}load(e,r,o,n){function i(s,a){switch(s.type){case $r:case Yt:s.encoding=wc,s.minFilter=si,s.magFilter=si,s.generateMipmaps=!1,s.flipY=!0;break}r&&r(s,a)}return super.load(e,i,o,n)}};import{useLoader as zc}from"@react-three/fiber";function jt(t,{path:e}){return zc(at,t,o=>o.setPath(e))}var Fc=t=>t.current&&t.current.isScene,Dc=t=>Fc(t)?t.current:t;function ai({background:t=!1,envPreset:e}){let r=jt("city.hdr",{path:kt}),o=jt("dawn.hdr",{path:kt}),n=jt("lobby.hdr",{path:kt}),s={city:r,dawn:o,lobby:n}[e],a=Lc(c=>c.scene);Ac.useLayoutEffect(()=>{if(s){let c=Dc(a),d=c.background,u=c.environment;return t!=="only"&&(c.environment=s),t&&(c.background=s),()=>{t!=="only"&&(c.environment=u),t&&(c.background="black")}}},[a,s,t]);let l=s;return l.mapping=Oc,null}import{Suspense as Ic,useEffect as Nc}from"react";import{useState as Mc}from"react";import{DefaultLoadingManager as ci}from"three";var Kr=0;function li(){let[t,e]=Mc({});return ci.onLoad=()=>{e(r=>W(D({},r),{active:!1}))},ci.onProgress=(r,o,n)=>{o===n&&(Kr=n);let i=(o-Kr)/(n-Kr)*100||100;e(s=>W(D({},s),{active:!0,item:r,loaded:o,total:n,progress:i}))},t}import{Fragment as Bc,jsx as ct,jsxs as Hc}from"react/jsx-runtime";function fi({lightType:t,brightness:e,envPreset:r}){return Hc(Bc,{children:[t==="3d"&&ct("ambientLight",{intensity:e||1}),t==="env"&&ct(Ic,{fallback:ct(Uc,{}),children:ct(ai,{envPreset:r,background:!1,loadingCallback:()=>{}})})]})}function Uc(){let{progress:t}=li();return Nc(()=>{let e=document.getElementById("LoaderRoot");e&&t&&(t===100?(e.innerHTML="Ligths are loaded",setTimeout(()=>{e.innerHTML=""},1e3)):e.innerHTML="Loading lights...")},[t]),ct("ambientLight",{intensity:.4})}import{addEffect as Gl,applyProps as Yl}from"@react-three/fiber";var Jr=ft(),O=t=>lt(t,Jr),eo=ft();O.write=t=>lt(t,eo);var Xt=ft();O.onStart=t=>lt(t,Xt);var to=ft();O.onFrame=t=>lt(t,to);var ro=ft();O.onFinish=t=>lt(t,ro);var ke=[];O.setTimeout=(t,e)=>{let r=O.now()+e,o=()=>{let i=ke.findIndex(s=>s.cancel==o);~i&&ke.splice(i,1),Te-=~i?1:0},n={time:r,handler:t,cancel:o};return ke.splice(di(r),0,n),Te+=1,ui(),n};var di=t=>~(~ke.findIndex(e=>e.time>t)||~ke.length);O.cancel=t=>{Xt.delete(t),to.delete(t),ro.delete(t),Jr.delete(t),eo.delete(t)};O.sync=t=>{Wr=!0,O.batchedUpdates(t),Wr=!1};O.throttle=t=>{let e;function r(){try{t(...e)}finally{e=null}}function o(...n){e=n,O.onStart(r)}return o.handler=t,o.cancel=()=>{Xt.delete(r),e=null},o};var oo=typeof window<"u"?window.requestAnimationFrame:()=>{};O.use=t=>oo=t;O.now=typeof performance<"u"?()=>performance.now():Date.now;O.batchedUpdates=t=>t();O.catch=console.error;O.frameLoop="always";O.advance=()=>{O.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):hi()};var Ee=-1,Te=0,Wr=!1;function lt(t,e){Wr?(e.delete(t),t(0)):(e.add(t),ui())}function ui(){Ee<0&&(Ee=0,O.frameLoop!=="demand"&&oo(mi))}function Vc(){Ee=-1}function mi(){~Ee&&(oo(mi),O.batchedUpdates(hi))}function hi(){let t=Ee;Ee=O.now();let e=di(Ee);if(e&&(pi(ke.splice(0,e),r=>r.handler()),Te-=e),!Te){Vc();return}Xt.flush(),Jr.flush(t?Math.min(64,Ee-t):16.667),to.flush(),eo.flush(),ro.flush()}function ft(){let t=new Set,e=t;return{add(r){Te+=e==t&&!t.has(r)?1:0,t.add(r)},delete(r){return Te-=e==t&&t.has(r)?1:0,t.delete(r)},flush(r){e.size&&(t=new Set,Te-=e.size,pi(e,o=>o(r)&&t.add(o)),Te+=t.size,e=t)}}}function pi(t,e){t.forEach(r=>{try{e(r)}catch(o){O.catch(o)}})}import{useRef as lo,useEffect as rr,useLayoutEffect as kc,useState as Pi}from"react";function or(){}var Si=(t,e,r)=>Object.defineProperty(t,e,{value:r,writable:!0,configurable:!0}),b={arr:Array.isArray,obj:t=>!!t&&t.constructor.name==="Object",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",und:t=>t===void 0};function fe(t,e){if(b.arr(t)){if(!b.arr(e)||t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}return t===e}var M=(t,e)=>t.forEach(e);function ie(t,e,r){if(b.arr(t)){for(let o=0;o<t.length;o++)e.call(r,t[o],`${o}`);return}for(let o in t)t.hasOwnProperty(o)&&e.call(r,t[o],o)}var J=t=>b.und(t)?[]:b.arr(t)?t:[t];function qe(t,e){if(t.size){let r=Array.from(t);t.clear(),M(r,e)}}var je=(t,...e)=>qe(t,r=>r(...e)),fo=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),uo,Ci,Pe=null,Ri=!1,mo=or,Gc=t=>{t.to&&(Ci=t.to),t.now&&(O.now=t.now),t.colors!==void 0&&(Pe=t.colors),t.skipAnimation!=null&&(Ri=t.skipAnimation),t.createStringInterpolator&&(uo=t.createStringInterpolator),t.requestAnimationFrame&&O.use(t.requestAnimationFrame),t.batchedUpdates&&(O.batchedUpdates=t.batchedUpdates),t.willAdvance&&(mo=t.willAdvance),t.frameLoop&&(O.frameLoop=t.frameLoop)},ee=Object.freeze({__proto__:null,get createStringInterpolator(){return uo},get to(){return Ci},get colors(){return Pe},get skipAnimation(){return Ri},get willAdvance(){return mo},assign:Gc}),dt=new Set,te=[],no=[],Wt=0,Xe={get idle(){return!dt.size&&!te.length},start(t){Wt>t.priority?(dt.add(t),O.onStart(Yc)):(wi(t),O(ao))},advance:ao,sort(t){if(Wt)O.onFrame(()=>Xe.sort(t));else{let e=te.indexOf(t);~e&&(te.splice(e,1),zi(t))}},clear(){te=[],dt.clear()}};function Yc(){dt.forEach(wi),dt.clear(),O(ao)}function wi(t){te.includes(t)||zi(t)}function zi(t){te.splice(qc(te,e=>e.priority>t.priority),0,t)}function ao(t){let e=no;for(let r=0;r<te.length;r++){let o=te[r];Wt=o.priority,o.idle||(mo(o),o.advance(t),o.idle||e.push(o))}return Wt=0,no=te,no.length=0,te=e,te.length>0}function qc(t,e){let r=t.findIndex(e);return r<0?t.length:r}var jc=(t,e,r)=>Math.min(Math.max(r,t),e),Ai={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},ne="[-+]?\\d*\\.?\\d+",Jt=ne+"%";function nr(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var Xc=new RegExp("rgb"+nr(ne,ne,ne)),Zc=new RegExp("rgba"+nr(ne,ne,ne,ne)),Qc=new RegExp("hsl"+nr(ne,Jt,Jt)),$c=new RegExp("hsla"+nr(ne,Jt,Jt,ne)),Kc=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Wc=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Jc=/^#([0-9a-fA-F]{6})$/,el=/^#([0-9a-fA-F]{8})$/;function tl(t){let e;return typeof t=="number"?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=Jc.exec(t))?parseInt(e[1]+"ff",16)>>>0:Pe&&Pe[t]!==void 0?Pe[t]:(e=Xc.exec(t))?(Ge(e[1])<<24|Ge(e[2])<<16|Ge(e[3])<<8|255)>>>0:(e=Zc.exec(t))?(Ge(e[1])<<24|Ge(e[2])<<16|Ge(e[3])<<8|vi(e[4]))>>>0:(e=Kc.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=el.exec(t))?parseInt(e[1],16)>>>0:(e=Wc.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=Qc.exec(t))?(gi(_i(e[1]),Zt(e[2]),Zt(e[3]))|255)>>>0:(e=$c.exec(t))?(gi(_i(e[1]),Zt(e[2]),Zt(e[3]))|vi(e[4]))>>>0:null}function io(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function gi(t,e,r){let o=r<.5?r*(1+e):r+e-r*e,n=2*r-o,i=io(n,o,t+1/3),s=io(n,o,t),a=io(n,o,t-1/3);return Math.round(i*255)<<24|Math.round(s*255)<<16|Math.round(a*255)<<8}function Ge(t){let e=parseInt(t,10);return e<0?0:e>255?255:e}function _i(t){return(parseFloat(t)%360+360)%360/360}function vi(t){let e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function Zt(t){let e=parseFloat(t);return e<0?0:e>100?1:e/100}function xi(t){let e=tl(t);if(e===null)return t;e=e||0;let r=(e&4278190080)>>>24,o=(e&16711680)>>>16,n=(e&65280)>>>8,i=(e&255)/255;return`rgba(${r}, ${o}, ${n}, ${i})`}var Se=(t,e,r)=>{if(b.fun(t))return t;if(b.arr(t))return Se({range:t,output:e,extrapolate:r});if(b.str(t.output[0]))return uo(t);let o=t,n=o.output,i=o.range||[0,1],s=o.extrapolateLeft||o.extrapolate||"extend",a=o.extrapolateRight||o.extrapolate||"extend",l=o.easing||(c=>c);return c=>{let d=ol(c,i);return rl(c,i[d],i[d+1],n[d],n[d+1],l,s,a,o.map)}};function rl(t,e,r,o,n,i,s,a,l){let c=l?l(t):t;if(c<e){if(s==="identity")return c;s==="clamp"&&(c=e)}if(c>r){if(a==="identity")return c;a==="clamp"&&(c=r)}return o===n?o:e===r?t<=e?o:n:(e===-1/0?c=-c:r===1/0?c=c-e:c=(c-e)/(r-e),c=i(c),o===-1/0?c=-c:n===1/0?c=c+o:c=c*(n-o)+o,c)}function ol(t,e){for(var r=1;r<e.length-1&&!(e[r]>=t);++r);return r-1}var nl=(t,e="end")=>r=>{r=e==="end"?Math.min(r,.999):Math.max(r,.001);let o=r*t,n=e==="end"?Math.floor(o):Math.ceil(o);return jc(0,1,n/t)},er=1.70158,Qt=er*1.525,yi=er+1,bi=2*Math.PI/3,Ei=2*Math.PI/4.5,$t=t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,ho={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>t===0?0:Math.pow(2,10*t-10),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>yi*t*t*t-er*t*t,easeOutBack:t=>1+yi*Math.pow(t-1,3)+er*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*((Qt+1)*2*t-Qt)/2:(Math.pow(2*t-2,2)*((Qt+1)*(t*2-2)+Qt)+2)/2,easeInElastic:t=>t===0?0:t===1?1:-Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*bi),easeOutElastic:t=>t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*bi)+1,easeInOutElastic:t=>t===0?0:t===1?1:t<.5?-(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*Ei))/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*Ei)/2+1,easeInBounce:t=>1-$t(1-t),easeOutBounce:$t,easeInOutBounce:t=>t<.5?(1-$t(1-2*t))/2:(1+$t(2*t-1))/2,steps:nl};function co(){return co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},co.apply(this,arguments)}var Ye=Symbol.for("FluidValue.get"),Oe=Symbol.for("FluidValue.observers"),re=t=>Boolean(t&&t[Ye]),$=t=>t&&t[Ye]?t[Ye]():t,po=t=>t[Oe]||null;function il(t,e){t.eventObserved?t.eventObserved(e):t(e)}function ut(t,e){let r=t[Oe];r&&r.forEach(o=>{il(o,e)})}var tr=class{constructor(e){if(this[Ye]=void 0,this[Oe]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");sl(this,e)}},sl=(t,e)=>Oi(t,Ye,e);function Le(t,e){if(t[Ye]){let r=t[Oe];r||Oi(t,Oe,r=new Set),r.has(e)||(r.add(e),t.observerAdded&&t.observerAdded(r.size,e))}return e}function Ze(t,e){let r=t[Oe];if(r&&r.has(e)){let o=r.size-1;o?r.delete(e):t[Oe]=null,t.observerRemoved&&t.observerRemoved(o,e)}}var Oi=(t,e,r)=>Object.defineProperty(t,e,{value:r,writable:!0,configurable:!0}),Kt=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,al=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ti=new RegExp(`(${Kt.source})(%|[a-z]+)`,"i"),cl=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ir=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Li=t=>{let[e,r]=ll(t);if(!e||fo())return t;let o=window.getComputedStyle(document.documentElement).getPropertyValue(e);if(o)return o.trim();if(r&&r.startsWith("--")){let n=window.getComputedStyle(document.documentElement).getPropertyValue(r);return n||t}else{if(r&&ir.test(r))return Li(r);if(r)return r}return t},ll=t=>{let e=ir.exec(t);if(!e)return[,];let[,r,o]=e;return[r,o]},so,fl=(t,e,r,o,n)=>`rgba(${Math.round(e)}, ${Math.round(r)}, ${Math.round(o)}, ${n})`,sr=t=>{so||(so=Pe?new RegExp(`(${Object.keys(Pe).join("|")})(?!\\w)`,"g"):/^\b$/);let e=t.output.map(i=>$(i).replace(ir,Li).replace(al,xi).replace(so,xi)),r=e.map(i=>i.match(Kt).map(Number)),n=r[0].map((i,s)=>r.map(a=>{if(!(s in a))throw Error('The arity of each "output" value must be equal');return a[s]})).map(i=>Se(co({},t,{output:i})));return i=>{var s;let a=!Ti.test(e[0])&&((s=e.find(c=>Ti.test(c)))==null?void 0:s.replace(Kt,"")),l=0;return e[0].replace(Kt,()=>`${n[l++](i)}${a||""}`).replace(cl,fl)}},go="react-spring: ",Fi=t=>{let e=t,r=!1;if(typeof e!="function")throw new TypeError(`${go}once requires a function parameter`);return(...o)=>{r||(e(...o),r=!0)}},dl=Fi(console.warn);function Di(){dl(`${go}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var ul=Fi(console.warn);function Mi(){ul(`${go}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function Qe(t){return b.str(t)&&(t[0]=="#"||/\d/.test(t)||!fo()&&ir.test(t)||t in(Pe||{}))}var $e=fo()?rr:kc,ml=()=>{let t=lo(!1);return $e(()=>(t.current=!0,()=>{t.current=!1}),[]),t};function ar(){let t=Pi()[1],e=ml();return()=>{e.current&&t(Math.random())}}function Ii(t,e){let[r]=Pi(()=>({inputs:e,result:t()})),o=lo(),n=o.current,i=n;return i?Boolean(e&&i.inputs&&hl(e,i.inputs))||(i={inputs:e,result:t()}):i=r,rr(()=>{o.current=i,n==r&&(r.inputs=r.result=void 0)},[i]),i.result}function hl(t,e){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}var cr=t=>rr(t,pl),pl=[];function _o(t){let e=lo();return rr(()=>{e.current=t}),e.current}import*as St from"react";import{useContext as Ji,useMemo as hr,useRef as Gi,useState as Ym}from"react";import*as Vi from"react";import{forwardRef as gl,useRef as Ni,useCallback as _l,useEffect as vl}from"react";var mt=Symbol.for("Animated:node"),xl=t=>!!t&&t[mt]===t,se=t=>t&&t[mt],ur=(t,e)=>Si(t,mt,e),gt=t=>t&&t[mt]&&t[mt].getPayload(),lr=class{constructor(){this.payload=void 0,ur(this,this)}getPayload(){return this.payload||[]}},ge=class extends lr{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,b.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ge(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,r){return b.num(e)&&(this.lastPosition=e,r&&(e=Math.round(e/r)*r,this.done&&(this.lastPosition=e))),this._value===e?!1:(this._value=e,!0)}reset(){let{done:e}=this;this.done=!1,b.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},_e=class extends ge{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Se({output:[e,e]})}static create(e){return new _e(e)}getValue(){let e=this._string;return e??(this._string=this._toString(this._value))}setValue(e){if(b.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=Se({output:[this.getValue(),e]})),this._value=0,super.reset()}},fr={dependencies:null},ht=class extends lr{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){let r={};return ie(this.source,(o,n)=>{xl(o)?r[n]=o.getValue(e):re(o)?r[n]=$(o):e||(r[n]=o)}),r}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&M(this.payload,e=>e.reset())}_makePayload(e){if(e){let r=new Set;return ie(e,this._addToPayload,r),Array.from(r)}}_addToPayload(e){fr.dependencies&&re(e)&&fr.dependencies.add(e);let r=gt(e);r&&M(r,o=>this.add(o))}},pt=class extends ht{constructor(e){super(e)}static create(e){return new pt(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let r=this.getPayload();return e.length==r.length?r.map((o,n)=>o.setValue(e[n])).some(Boolean):(super.setValue(e.map(yl)),!0)}};function yl(t){return(Qe(t)?_e:ge).create(t)}function mr(t){let e=se(t);return e?e.constructor:b.arr(t)?pt:Qe(t)?_e:ge}function dr(){return dr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},dr.apply(this,arguments)}var Ui=(t,e)=>{let r=!b.fun(t)||t.prototype&&t.prototype.isReactComponent;return gl((o,n)=>{let i=Ni(null),s=r&&_l(p=>{i.current=El(n,p)},[n]),[a,l]=bl(o,e),c=ar(),d=()=>{let p=i.current;if(r&&!p)return;(p?e.applyAnimatedValues(p,a.getValue(!0)):!1)===!1&&c()},u=new vo(d,l),v=Ni();$e(()=>(v.current=u,M(l,p=>Le(p,u)),()=>{v.current&&(M(v.current.deps,p=>Ze(p,v.current)),O.cancel(v.current.update))})),vl(d,[]),cr(()=>()=>{let p=v.current;M(p.deps,g=>Ze(g,p))});let h=e.getComponentProps(a.getValue());return Vi.createElement(t,dr({},h,{ref:s}))})},vo=class{constructor(e,r){this.update=e,this.deps=r}eventObserved(e){e.type=="change"&&O.write(this.update)}};function bl(t,e){let r=new Set;return fr.dependencies=r,t.style&&(t=dr({},t,{style:e.createAnimatedStyle(t.style)})),t=new ht(t),fr.dependencies=null,[t,r]}function El(t,e){return t&&(b.fun(t)?t(e):t.current=e),e}var Bi=Symbol.for("AnimatedComponent"),ki=(t,{applyAnimatedValues:e=()=>!1,createAnimatedStyle:r=n=>new ht(n),getComponentProps:o=n=>n}={})=>{let n={applyAnimatedValues:e,createAnimatedStyle:r,getComponentProps:o},i=s=>{let a=Hi(s)||"Anonymous";return b.str(s)?s=i[s]||(i[s]=Ui(s,n)):s=s[Bi]||(s[Bi]=Ui(s,n)),s.displayName=`Animated(${a})`,s};return ie(t,(s,a)=>{b.arr(t)&&(a=Hi(s)),i[a]=i(s)}),{animated:i}},Hi=t=>b.str(t)?t:t&&b.str(t.displayName)?t.displayName:b.fun(t)&&t.name||null;function G(){return G=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},G.apply(this,arguments)}function Fe(t,...e){return b.fun(t)?t(...e):t}var yt=(t,e)=>t===!0||!!(e&&t&&(b.fun(t)?t(e):J(t).includes(e))),es=(t,e)=>b.obj(t)?e&&t[e]:t,ts=(t,e)=>t.default===!0?t[e]:t.default?t.default[e]:void 0,Tl=t=>t,Lo=(t,e=Tl)=>{let r=Pl;t.default&&t.default!==!0&&(t=t.default,r=Object.keys(t));let o={};for(let n of r){let i=e(t[n],n);b.und(i)||(o[n]=i)}return o},Pl=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Sl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Cl(t){let e={},r=0;if(ie(t,(o,n)=>{Sl[n]||(e[n]=o,r++)}),r)return e}function rs(t){let e=Cl(t);if(e){let r={to:e};return ie(t,(o,n)=>n in e||(r[n]=o)),r}return G({},t)}function bt(t){return t=$(t),b.arr(t)?t.map(bt):Qe(t)?ee.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function Rl(t){for(let e in t)return!0;return!1}function bo(t){return b.fun(t)||b.arr(t)&&b.obj(t[0])}function wl(t,e){var r;(r=t.ref)==null||r.delete(t),e?.delete(t)}function zl(t,e){if(e&&t.ref!==e){var r;(r=t.ref)==null||r.delete(t),e.add(t),t.ref=e}}var Al={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},Eo=G({},Al.default,{mass:1,damping:1,easing:ho.linear,clamp:!1}),To=class{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Eo)}};function Ol(t,e,r){r&&(r=G({},r),Yi(r,e),e=G({},r,e)),Yi(t,e),Object.assign(t,e);for(let s in Eo)t[s]==null&&(t[s]=Eo[s]);let{mass:o,frequency:n,damping:i}=t;return b.und(n)||(n<.01&&(n=.01),i<0&&(i=0),t.tension=Math.pow(2*Math.PI/n,2)*o,t.friction=4*Math.PI*i*o/n),t}function Yi(t,e){if(!b.und(e.decay))t.duration=void 0;else{let r=!b.und(e.tension)||!b.und(e.friction);(r||!b.und(e.frequency)||!b.und(e.damping)||!b.und(e.mass))&&(t.duration=void 0,t.decay=void 0),r&&(t.frequency=void 0)}}var qi=[],Po=class{constructor(){this.changed=!1,this.values=qi,this.toValues=null,this.fromValues=qi,this.to=void 0,this.from=void 0,this.config=new To,this.immediate=!1}};function os(t,{key:e,props:r,defaultProps:o,state:n,actions:i}){return new Promise((s,a)=>{var l;let c,d,u=yt((l=r.cancel)!=null?l:o?.cancel,e);if(u)p();else{b.und(r.pause)||(n.paused=yt(r.pause,e));let g=o?.pause;g!==!0&&(g=n.paused||yt(g,e)),c=Fe(r.delay||0,e),g?(n.resumeQueue.add(h),i.pause()):(i.resume(),h())}function v(){n.resumeQueue.add(h),n.timeouts.delete(d),d.cancel(),c=d.time-O.now()}function h(){c>0&&!ee.skipAnimation?(n.delayed=!0,d=O.setTimeout(p,c),n.pauseQueue.add(v),n.timeouts.add(d)):p()}function p(){n.delayed&&(n.delayed=!1),n.pauseQueue.delete(v),n.timeouts.delete(d),t<=(n.cancelId||0)&&(u=!0);try{i.start(G({},r,{callId:t,cancel:u}),s)}catch(g){a(g)}}})}var Fo=(t,e)=>e.length==1?e[0]:e.some(r=>r.cancelled)?Ke(t.get()):e.every(r=>r.noop)?ns(t.get()):ae(t.get(),e.every(r=>r.finished)),ns=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),ae=(t,e,r=!1)=>({value:t,finished:e,cancelled:r}),Ke=t=>({value:t,cancelled:!0,finished:!1});function is(t,e,r,o){let{callId:n,parentId:i,onRest:s}=e,{asyncTo:a,promise:l}=r;return!i&&t===a&&!e.reset?l:r.promise=(async()=>{r.asyncId=n,r.asyncTo=t;let c=Lo(e,(E,x)=>x==="onRest"?void 0:E),d,u,v=new Promise((E,x)=>(d=E,u=x)),h=E=>{let x=n<=(r.cancelId||0)&&Ke(o)||n!==r.asyncId&&ae(o,!1);if(x)throw E.result=x,u(E),E},p=(E,x)=>{let m=new pr,_=new gr;return(async()=>{if(ee.skipAnimation)throw Et(r),_.result=ae(o,!1),u(_),_;h(m);let y=b.obj(E)?G({},E):G({},x,{to:E});y.parentId=n,ie(c,(T,C)=>{b.und(y[C])&&(y[C]=T)});let f=await o.start(y);return h(m),r.paused&&await new Promise(T=>{r.resumeQueue.add(T)}),f})()},g;if(ee.skipAnimation)return Et(r),ae(o,!1);try{let E;b.arr(t)?E=(async x=>{for(let m of x)await p(m)})(t):E=Promise.resolve(t(p,o.stop.bind(o))),await Promise.all([E.then(d),v]),g=ae(o.get(),!0,!1)}catch(E){if(E instanceof pr)g=E.result;else if(E instanceof gr)g=E.result;else throw E}finally{n==r.asyncId&&(r.asyncId=i,r.asyncTo=i?a:void 0,r.promise=i?l:void 0)}return b.fun(s)&&O.batchedUpdates(()=>{s(g,o,o.item)}),g})()}function Et(t,e){qe(t.timeouts,r=>r.cancel()),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}var pr=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}},gr=class extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}},So=t=>t instanceof Tt,Ll=1,Tt=class extends tr{constructor(...e){super(...e),this.id=Ll++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){let e=se(this);return e&&e.getValue()}to(...e){return ee.to(this,e)}interpolate(...e){return Di(),ee.to(this,e)}toJSON(){return this.get()}observerAdded(e){e==1&&this._attach()}observerRemoved(e){e==0&&this._detach()}_attach(){}_detach(){}_onChange(e,r=!1){ut(this,{type:"change",parent:this,value:e,idle:r})}_onPriorityChange(e){this.idle||Xe.sort(this),ut(this,{type:"priority",parent:this,priority:e})}},De=Symbol.for("SpringPhase"),ss=1,Co=2,Ro=4,xo=t=>(t[De]&ss)>0,Ce=t=>(t[De]&Co)>0,_t=t=>(t[De]&Ro)>0,ji=(t,e)=>e?t[De]|=Co|ss:t[De]&=~Co,Xi=(t,e)=>e?t[De]|=Ro:t[De]&=~Ro,wo=class extends Tt{constructor(e,r){if(super(),this.key=void 0,this.animation=new Po,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!b.und(e)||!b.und(r)){let o=b.obj(e)?G({},e):G({},r,{from:e});b.und(o.default)&&(o.default=!0),this.start(o)}}get idle(){return!(Ce(this)||this._state.asyncTo)||_t(this)}get goal(){return $(this.animation.to)}get velocity(){let e=se(this);return e instanceof ge?e.lastVelocity||0:e.getPayload().map(r=>r.lastVelocity||0)}get hasAnimated(){return xo(this)}get isAnimating(){return Ce(this)}get isPaused(){return _t(this)}get isDelayed(){return this._state.delayed}advance(e){let r=!0,o=!1,n=this.animation,{config:i,toValues:s}=n,a=gt(n.to);!a&&re(n.to)&&(s=J($(n.to))),n.values.forEach((d,u)=>{if(d.done)return;let v=d.constructor==_e?1:a?a[u].lastPosition:s[u],h=n.immediate,p=v;if(!h){if(p=d.lastPosition,i.tension<=0){d.done=!0;return}let g=d.elapsedTime+=e,E=n.fromValues[u],x=d.v0!=null?d.v0:d.v0=b.arr(i.velocity)?i.velocity[u]:i.velocity,m,_=i.precision||(E==v?.005:Math.min(1,Math.abs(v-E)*.001));if(b.und(i.duration))if(i.decay){let y=i.decay===!0?.998:i.decay,f=Math.exp(-(1-y)*g);p=E+x/(1-y)*(1-f),h=Math.abs(d.lastPosition-p)<=_,m=x*f}else{m=d.lastVelocity==null?x:d.lastVelocity;let y=i.restVelocity||_/10,f=i.clamp?0:i.bounce,T=!b.und(f),C=E==v?d.v0>0:E<v,R,S=!1,A=1,w=Math.ceil(e/A);for(let L=0;L<w&&(R=Math.abs(m)>y,!(!R&&(h=Math.abs(v-p)<=_,h)));++L){T&&(S=p==v||p>v==C,S&&(m=-m*f,p=v));let Y=-i.tension*1e-6*(p-v),X=-i.friction*.001*m,j=(Y+X)/i.mass;m=m+j*A,p=p+m*A}}else{let y=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,d.durationProgress>0&&(d.elapsedTime=i.duration*d.durationProgress,g=d.elapsedTime+=e)),y=(i.progress||0)+g/this._memoizedDuration,y=y>1?1:y<0?0:y,d.durationProgress=y),p=E+i.easing(y)*(v-E),m=(p-d.lastPosition)/e,h=y==1}d.lastVelocity=m,Number.isNaN(p)&&(console.warn("Got NaN while animating:",this),h=!0)}a&&!a[u].done&&(h=!1),h?d.done=!0:r=!1,d.setValue(p,i.round)&&(o=!0)});let l=se(this),c=l.getValue();if(r){let d=$(n.to);(c!==d||o)&&!i.decay?(l.setValue(d),this._onChange(d)):o&&i.decay&&this._onChange(c),this._stop()}else o&&this._onChange(c)}set(e){return O.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ce(this)){let{to:e,config:r}=this.animation;O.batchedUpdates(()=>{this._onStart(),r.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,r){let o;return b.und(e)?(o=this.queue||[],this.queue=[]):o=[b.obj(e)?e:G({},r,{to:e})],Promise.all(o.map(n=>this._update(n))).then(n=>Fo(this,n))}stop(e){let{to:r}=this.animation;return this._focus(this.get()),Et(this._state,e&&this._lastCallId),O.batchedUpdates(()=>this._stop(r,e)),this}reset(){this._update({reset:!0})}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1)}_prepareNode(e){let r=this.key||"",{to:o,from:n}=e;o=b.obj(o)?o[r]:o,(o==null||bo(o))&&(o=void 0),n=b.obj(n)?n[r]:n,n==null&&(n=void 0);let i={to:o,from:n};return xo(this)||(e.reverse&&([o,n]=[n,o]),n=$(n),b.und(n)?se(this)||this._set(o):this._set(n)),i}_update(e,r){let o=G({},e),{key:n,defaultProps:i}=this;o.default&&Object.assign(i,Lo(o,(l,c)=>/^on/.test(c)?es(l,n):l)),Qi(this,o,"onProps"),xt(this,"onProps",o,this);let s=this._prepareNode(o);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let a=this._state;return os(++this._lastCallId,{key:n,props:o,defaultProps:i,state:a,actions:{pause:()=>{_t(this)||(Xi(this,!0),je(a.pauseQueue),xt(this,"onPause",ae(this,vt(this,this.animation.to)),this))},resume:()=>{_t(this)&&(Xi(this,!1),Ce(this)&&this._resume(),je(a.resumeQueue),xt(this,"onResume",ae(this,vt(this,this.animation.to)),this))},start:this._merge.bind(this,s)}}).then(l=>{if(o.loop&&l.finished&&!(r&&l.noop)){let c=as(o);if(c)return this._update(c,!0)}return l})}_merge(e,r,o){if(r.cancel)return this.stop(!0),o(Ke(this));let n=!b.und(e.to),i=!b.und(e.from);if(n||i)if(r.callId>this._lastToId)this._lastToId=r.callId;else return o(Ke(this));let{key:s,defaultProps:a,animation:l}=this,{to:c,from:d}=l,{to:u=c,from:v=d}=e;i&&!n&&(!r.default||b.und(u))&&(u=v),r.reverse&&([u,v]=[v,u]);let h=!fe(v,d);h&&(l.from=v),v=$(v);let p=!fe(u,c);p&&this._focus(u);let g=bo(r.to),{config:E}=l,{decay:x,velocity:m}=E;(n||i)&&(E.velocity=0),r.config&&!g&&Ol(E,Fe(r.config,s),r.config!==a.config?Fe(a.config,s):void 0);let _=se(this);if(!_||b.und(u))return o(ae(this,!0));let y=b.und(r.reset)?i&&!r.default:!b.und(v)&&yt(r.reset,s),f=y?v:this.get(),T=bt(u),C=b.num(T)||b.arr(T)||Qe(T),R=!g&&(!C||yt(a.immediate||r.immediate,s));if(p){let L=mr(u);if(L!==_.constructor)if(R)_=this._set(T);else throw Error(`Cannot animate between ${_.constructor.name} and ${L.name}, as the "to" prop suggests`)}let S=_.constructor,A=re(u),w=!1;if(!A){let L=y||!xo(this)&&h;(p||L)&&(w=fe(bt(f),T),A=!w),(!fe(l.immediate,R)&&!R||!fe(E.decay,x)||!fe(E.velocity,m))&&(A=!0)}if(w&&Ce(this)&&(l.changed&&!y?A=!0:A||this._stop(c)),!g&&((A||re(c))&&(l.values=_.getPayload(),l.toValues=re(u)?null:S==_e?[1]:J(T)),l.immediate!=R&&(l.immediate=R,!R&&!y&&this._set(c)),A)){let{onRest:L}=l;M(Dl,X=>Qi(this,r,X));let Y=ae(this,vt(this,c));je(this._pendingCalls,Y),this._pendingCalls.add(o),l.changed&&O.batchedUpdates(()=>{l.changed=!y,L?.(Y,this),y?Fe(a.onRest,Y):l.onStart==null||l.onStart(Y,this)})}y&&this._set(f),g?o(is(r.to,r,this._state,this)):A?this._start():Ce(this)&&!p?this._pendingCalls.add(o):o(ns(f))}_focus(e){let r=this.animation;e!==r.to&&(po(this)&&this._detach(),r.to=e,po(this)&&this._attach())}_attach(){let e=0,{to:r}=this.animation;re(r)&&(Le(r,this),So(r)&&(e=r.priority+1)),this.priority=e}_detach(){let{to:e}=this.animation;re(e)&&Ze(e,this)}_set(e,r=!0){let o=$(e);if(!b.und(o)){let n=se(this);if(!n||!fe(o,n.getValue())){let i=mr(o);!n||n.constructor!=i?ur(this,i.create(o)):n.setValue(o),n&&O.batchedUpdates(()=>{this._onChange(o,r)})}}return se(this)}_onStart(){let e=this.animation;e.changed||(e.changed=!0,xt(this,"onStart",ae(this,vt(this,e.to)),this))}_onChange(e,r){r||(this._onStart(),Fe(this.animation.onChange,e,this)),Fe(this.defaultProps.onChange,e,this),super._onChange(e,r)}_start(){let e=this.animation;se(this).reset($(e.to)),e.immediate||(e.fromValues=e.values.map(r=>r.lastPosition)),Ce(this)||(ji(this,!0),_t(this)||this._resume())}_resume(){ee.skipAnimation?this.finish():Xe.start(this)}_stop(e,r){if(Ce(this)){ji(this,!1);let o=this.animation;M(o.values,i=>{i.done=!0}),o.toValues&&(o.onChange=o.onPause=o.onResume=void 0),ut(this,{type:"idle",parent:this});let n=r?Ke(this.get()):ae(this.get(),vt(this,e??o.to));je(this._pendingCalls,n),o.changed&&(o.changed=!1,xt(this,"onRest",n,this))}}};function vt(t,e){let r=bt(e),o=bt(t.get());return fe(o,r)}function as(t,e=t.loop,r=t.to){let o=Fe(e);if(o){let n=o!==!0&&rs(o),i=(n||t).reverse,s=!n||n.reset;return Pt(G({},t,{loop:e,default:!1,pause:void 0,to:!i||bo(r)?r:void 0,from:s?t.from:void 0,reset:s},n))}}function Pt(t){let{to:e,from:r}=t=rs(t),o=new Set;return b.obj(e)&&Zi(e,o),b.obj(r)&&Zi(r,o),t.keys=o.size?Array.from(o):null,t}function Fl(t){let e=Pt(t);return b.und(e.default)&&(e.default=Lo(e)),e}function Zi(t,e){ie(t,(r,o)=>r!=null&&e.add(o))}var Dl=["onStart","onRest","onChange","onPause","onResume"];function Qi(t,e,r){t.animation[r]=e[r]!==ts(e,r)?es(e[r],t.key):void 0}function xt(t,e,...r){var o,n,i,s;(o=(n=t.animation)[e])==null||o.call(n,...r),(i=(s=t.defaultProps)[e])==null||i.call(s,...r)}var Ml=["onStart","onChange","onRest"],Il=1,zo=class{constructor(e,r){this.id=Il++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),r&&(this._flush=r),e&&this.start(G({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){let e={};return this.each((r,o)=>e[o]=r.get()),e}set(e){for(let r in e){let o=e[r];b.und(o)||this.springs[r].set(o)}}update(e){return e&&this.queue.push(Pt(e)),this}start(e){let{queue:r}=this;return e?r=J(e).map(Pt):this.queue=[],this._flush?this._flush(this,r):(us(this,r),Ao(this,r))}stop(e,r){if(e!==!!e&&(r=e),r){let o=this.springs;M(J(r),n=>o[n].stop(!!e))}else Et(this._state,this._lastAsyncId),this.each(o=>o.stop(!!e));return this}pause(e){if(b.und(e))this.start({pause:!0});else{let r=this.springs;M(J(e),o=>r[o].pause())}return this}resume(e){if(b.und(e))this.start({pause:!1});else{let r=this.springs;M(J(e),o=>r[o].resume())}return this}each(e){ie(this.springs,e)}_onFrame(){let{onStart:e,onChange:r,onRest:o}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,qe(e,([l,c])=>{c.value=this.get(),l(c,this,this._item)}));let s=!n&&this._started,a=i||s&&o.size?this.get():null;i&&r.size&&qe(r,([l,c])=>{c.value=a,l(c,this,this._item)}),s&&(this._started=!1,qe(o,([l,c])=>{c.value=a,l(c,this,this._item)}))}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;O.onFrame(this._onFrame)}};function Ao(t,e){return Promise.all(e.map(r=>cs(t,r))).then(r=>Fo(t,r))}async function cs(t,e,r){let{keys:o,to:n,from:i,loop:s,onRest:a,onResolve:l}=e,c=b.obj(e.default)&&e.default;s&&(e.loop=!1),n===!1&&(e.to=null),i===!1&&(e.from=null);let d=b.arr(n)||b.fun(n)?n:void 0;d?(e.to=void 0,e.onRest=void 0,c&&(c.onRest=void 0)):M(Ml,g=>{let E=e[g];if(b.fun(E)){let x=t._events[g];e[g]=({finished:m,cancelled:_})=>{let y=x.get(E);y?(m||(y.finished=!1),_&&(y.cancelled=!0)):x.set(E,{value:null,finished:m||!1,cancelled:_||!1})},c&&(c[g]=e[g])}});let u=t._state;e.pause===!u.paused?(u.paused=e.pause,je(e.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(e.pause=!0);let v=(o||Object.keys(t.springs)).map(g=>t.springs[g].start(e)),h=e.cancel===!0||ts(e,"cancel")===!0;(d||h&&u.asyncId)&&v.push(os(++t._lastAsyncId,{props:e,state:u,actions:{pause:or,resume:or,start(g,E){h?(Et(u,t._lastAsyncId),E(Ke(t))):(g.onRest=a,E(is(d,g,u,t)))}}})),u.paused&&await new Promise(g=>{u.resumeQueue.add(g)});let p=Fo(t,await Promise.all(v));if(s&&p.finished&&!(r&&p.noop)){let g=as(e,s,n);if(g)return us(t,[g]),cs(t,g,!0)}return l&&O.batchedUpdates(()=>l(p,t,t.item)),p}function $i(t,e){let r=G({},t.springs);return e&&M(J(e),o=>{b.und(o.keys)&&(o=Pt(o)),b.obj(o.to)||(o=G({},o,{to:void 0})),ds(r,o,n=>fs(n))}),ls(t,r),r}function ls(t,e){ie(e,(r,o)=>{t.springs[o]||(t.springs[o]=r,Le(r,t))})}function fs(t,e){let r=new wo;return r.key=t,e&&Le(r,e),r}function ds(t,e,r){e.keys&&M(e.keys,o=>{(t[o]||(t[o]=r(o)))._prepareNode(e)})}function us(t,e){M(e,r=>{ds(t.springs,r,o=>fs(o,t))})}function Nl(t,e){if(t==null)return{};var r={},o=Object.keys(t),n,i;for(i=0;i<o.length;i++)n=o[i],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}var Ul=["children"],vr=t=>{let{children:e}=t,r=Nl(t,Ul),o=Ji(_r),n=r.pause||!!o.pause,i=r.immediate||!!o.immediate;r=Ii(()=>({pause:n,immediate:i}),[n,i]);let{Provider:s}=_r;return St.createElement(s,{value:r},e)},_r=Bl(vr,{});vr.Provider=_r.Provider;vr.Consumer=_r.Consumer;function Bl(t,e){return Object.assign(t,St.createContext(e)),t.Provider._context=t,t.Consumer._context=t,t}var Hl=()=>{let t=[],e=function(n){Mi();let i=[];return M(t,(s,a)=>{if(b.und(n))i.push(s.start());else{let l=r(n,s,a);l&&i.push(s.start(l))}}),i};e.current=t,e.add=function(o){t.includes(o)||t.push(o)},e.delete=function(o){let n=t.indexOf(o);~n&&t.splice(n,1)},e.pause=function(){return M(t,o=>o.pause(...arguments)),this},e.resume=function(){return M(t,o=>o.resume(...arguments)),this},e.set=function(o){M(t,n=>n.set(o))},e.start=function(o){let n=[];return M(t,(i,s)=>{if(b.und(o))n.push(i.start());else{let a=this._getProps(o,i,s);a&&n.push(i.start(a))}}),n},e.stop=function(){return M(t,o=>o.stop(...arguments)),this},e.update=function(o){return M(t,(n,i)=>n.update(this._getProps(o,n,i))),this};let r=function(n,i,s){return b.fun(n)?n(s,i):n};return e._getProps=r,e};function Vl(t,e,r){let o=b.fun(e)&&e;o&&!r&&(r=[]);let n=hr(()=>o||arguments.length==3?Hl():void 0,[]),i=Gi(0),s=ar(),a=hr(()=>({ctrls:[],queue:[],flush(x,m){let _=$i(x,m);return i.current>0&&!a.queue.length&&!Object.keys(_).some(f=>!x.springs[f])?Ao(x,m):new Promise(f=>{ls(x,_),a.queue.push(()=>{f(Ao(x,m))}),s()})}}),[]),l=Gi([...a.ctrls]),c=[],d=_o(t)||0;hr(()=>{M(l.current.slice(t,d),x=>{wl(x,n),x.stop(!0)}),l.current.length=t,u(d,t)},[t]),hr(()=>{u(0,Math.min(d,t))},r);function u(x,m){for(let _=x;_<m;_++){let y=l.current[_]||(l.current[_]=new zo(null,a.flush)),f=o?o(_,y):e[_];f&&(c[_]=Fl(f))}}let v=l.current.map((x,m)=>$i(x,c[m])),h=Ji(vr),p=_o(h),g=h!==p&&Rl(h);$e(()=>{i.current++,a.ctrls=l.current;let{queue:x}=a;x.length&&(a.queue=[],M(x,m=>m())),M(l.current,(m,_)=>{n?.add(m),g&&m.start({default:h});let y=c[_];y&&(zl(m,y.ref),m.ref?m.queue.push(y):m.start(y))})}),cr(()=>()=>{M(a.ctrls,x=>x.stop(!0))});let E=v.map(x=>G({},x));return n?[E,n]:E}function Do(t,e){let r=b.fun(t),[[o],n]=Vl(1,r?t:[t],r?e||[]:e);return r||arguments.length==2?[o,n]:o}var Ki;(function(t){t.MOUNT="mount",t.ENTER="enter",t.UPDATE="update",t.LEAVE="leave"})(Ki||(Ki={}));var Oo=class extends Tt{constructor(e,r){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Se(...r);let o=this._get(),n=mr(o);ur(this,n.create(o))}advance(e){let r=this._get(),o=this.get();fe(r,o)||(se(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&Wi(this._active)&&yo(this)}_get(){let e=b.arr(this.source)?this.source.map($):J($(this.source));return this.calc(...e)}_start(){this.idle&&!Wi(this._active)&&(this.idle=!1,M(gt(this),e=>{e.done=!1}),ee.skipAnimation?(O.batchedUpdates(()=>this.advance()),yo(this)):Xe.start(this))}_attach(){let e=1;M(J(this.source),r=>{re(r)&&Le(r,this),So(r)&&(r.idle||this._active.add(r),e=Math.max(e,r.priority+1))}),this.priority=e,this._start()}_detach(){M(J(this.source),e=>{re(e)&&Ze(e,this)}),this._active.clear(),yo(this)}eventObserved(e){e.type=="change"?e.idle?this.advance():(this._active.add(e.parent),this._start()):e.type=="idle"?this._active.delete(e.parent):e.type=="priority"&&(this.priority=J(this.source).reduce((r,o)=>Math.max(r,(So(o)?o.priority:0)+1),0))}};function kl(t){return t.idle!==!1}function Wi(t){return!t.size||Array.from(t).every(kl)}function yo(t){t.idle||(t.idle=!0,M(gt(t),e=>{e.done=!0}),ut(t,{type:"idle",parent:t}))}ee.assign({createStringInterpolator:sr,to:(t,e)=>new Oo(t,e)});var jm=Xe.advance;import*as ql from"three";var jl=["primitive"].concat(Object.keys(ql).filter(t=>/^[A-Z]/.test(t)).map(t=>t[0].toLowerCase()+t.slice(1)));ee.assign({createStringInterpolator:sr,colors:Ai,frameLoop:"demand"});Gl(()=>{O.advance()});var Xl=ki(jl,{applyAnimatedValues:Yl}),ms=Xl.animated;import{extend as ws}from"@react-three/fiber";import{useState as af,useEffect as cf}from"react";import*as xr from"three";function hs(t,e,r){return class extends xr.LineBasicMaterial{constructor(){let o=Object.entries(t),n=o.reduce((i,[s,a])=>{let l=xr.UniformsUtils.clone({[s]:{value:a}});return D(D({},i),l)},{});super({color:"#ffffff",linewidth:5,userData:n,onBeforeCompile:i=>{i.uniforms=D(D({},i.uniforms),n),i.vertexShader=e}}),o.forEach(([i])=>Object.defineProperty(this,i,{get:()=>this.uniforms[i].value,set:s=>this.uniforms[i].value=s})),r&&r(this)}}}import*as We from"three";function ps(t,e,r,o){return class extends We.MeshPhysicalMaterial{constructor(){let n=Object.entries(t),i=t.colors,s=Mo(i[0]),a=Mo(i[1]),l=Mo(i[2]),c={uC1r:{value:ve(s==null?void 0:s.r)},uC1g:{value:ve(s==null?void 0:s.g)},uC1b:{value:ve(s==null?void 0:s.b)},uC2r:{value:ve(a==null?void 0:a.r)},uC2g:{value:ve(a==null?void 0:a.g)},uC2b:{value:ve(a==null?void 0:a.b)},uC3r:{value:ve(l==null?void 0:l.r)},uC3g:{value:ve(l==null?void 0:l.g)},uC3b:{value:ve(l==null?void 0:l.b)}},d=n.reduce((u,[v,h])=>{let p=We.UniformsUtils.clone({[v]:{value:h}});return D(D({},u),p)},{});super({metalness:.2,userData:d,side:We.DoubleSide,onBeforeCompile:u=>{u.uniforms=D(D(D({},u.uniforms),d),c),u.vertexShader=e,u.fragmentShader=r}}),n.forEach(([u])=>Object.defineProperty(this,u,{get:()=>this.uniforms[u].value,set:v=>this.uniforms[u].value=v})),o&&o(this)}}}function Mo(t){let e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function ve(t=0){return t/255}var No={};me(No,{defaults:()=>Ct,positionMix:()=>Io});var Ct={};me(Ct,{plane:()=>yr,sphere:()=>br,waterPlane:()=>Er});var yr={};me(yr,{fragment:()=>gs,vertex:()=>_s});var gs=`
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
gl_FragColor=vec4(outgoingLight,diffuseColor.a);}`;var _s=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;
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
vUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var br={};me(br,{fragment:()=>vs,vertex:()=>xs});var vs=`
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
}`;var xs=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float pnoise(vec3 P,vec3 rep){vec3 Pi0=mod(floor(P),rep);vec3 Pi1=mod(Pi0+vec3(1.0),rep);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}varying vec3 vNormal;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;uniform float uFrequency;uniform float uAmplitude;varying vec3 vPos;varying float vDistort;varying vec2 vUv;varying vec3 vViewPosition;
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
float t=uTime*uSpeed;float distortion=pnoise((normal+t)*uNoiseDensity,vec3(10.0))*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vPos=pos;vDistort=distortion;vNormal=normal;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var Er={};me(Er,{fragment:()=>ys,vertex:()=>bs});var ys=`
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
gl_FragColor=vec4(outgoingLight,diffuseColor.a);}`;var bs=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;
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
float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var Io={};me(Io,{plane:()=>Tr,sphere:()=>Pr,waterPlane:()=>Sr});var Tr={};me(Tr,{fragment:()=>Es,vertex:()=>Ts});var Es="uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec3 vPos;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);gl_FragColor=vec4(color1*vPos.x+color2*vPos.y+color3*vPos.z,1.);}";var Ts=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;
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
vUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var Pr={};me(Pr,{fragment:()=>Ps,vertex:()=>Ss});var Ps=`
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
}`;var Ss=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float pnoise(vec3 P,vec3 rep){vec3 Pi0=mod(floor(P),rep);vec3 Pi1=mod(Pi0+vec3(1.0),rep);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}varying vec3 vNormal;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;uniform float uFrequency;uniform float uAmplitude;varying vec3 vPos;varying float vDistort;varying vec2 vUv;varying vec3 vViewPosition;
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
float t=uTime*uSpeed;float distortion=pnoise((normal+t)*uNoiseDensity,vec3(10.0))*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vPos=pos;vDistort=distortion;vNormal=normal;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;var Sr={};me(Sr,{fragment:()=>Cs,vertex:()=>Rs});var Cs="uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec3 vPos;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);gl_FragColor=vec4(color1*vPos.x+color2*vPos.y+color3*vPos.z,1.);}";var Rs=`vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;
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
vUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}`;function zs({type:t,shader:e,color1:r,color2:o,color3:n,uTime:i,uSpeed:s,uDensity:a,uStrength:l,uFrequency:c,uAmplitude:d}){let[u,v]=af(!1),h=t!=null?t:"plane",p=Ct[h];e&&e!=="defaults"&&(p=No[e][h]);let g=ps({colors:[r,o,n],uTime:i,uSpeed:s,uLoadingTime:0,uNoiseDensity:a,uNoiseStrength:l,uFrequency:c,uAmplitude:d,uIntensity:.5},p.vertex,p.fragment),E=hs({uTime:i,uSpeed:s,uNoiseDensity:a,uNoiseStrength:l,uFrequency:c,uAmplitude:d,uIntensity:.5},p.vertex);return ws({ColorShiftMaterial:g}),ws({HoveredLineMaterial:E}),cf(()=>{v(!0)},[]),u}import{useFrame as lf}from"@react-three/fiber";import{useRef as As}from"react";import*as Ls from"three";var{to:Os,rotDur:Vh,meshDur:Uo,rotDelay:kh,meshDelay:Bo}=ti,Ho=new Ls.Clock,ff=20;function Fs({animate:t,range:e,rangeStart:r,rangeEnd:o}){let n=As(),i=As(),s=0;return lf((a,l)=>{if(n.current){let c=Ho.getElapsedTime();if(e==="enabled"&&(c=r,c=c+Ho.getElapsedTime(),c>=o&&(c=r,Ho.start())),c>Bo){let d=n.current.userData.uLoadingTime.value,u=c<Uo+Bo?Math.easeInOutCubic(s,d,Os-d,Uo*1e3):Os;n.current.userData.uLoadingTime.value=u,c<Uo+Bo&&(s+=ff)}t==="on"&&(n.current.userData.uTime.value=c,i.current!==void 0&&(i.current.userData.uTime.value=c))}}),{material:n,linemat:i}}import{jsx as xe,jsxs as Vo}from"react/jsx-runtime";Math.easeInOutCubic=function(t,e,r,o){return t/=o/2,t<1?r/2*t*t*t+e:(t-=2,r/2*(t*t*t+2)+e)};var Cr=192,Rr=36,Ds=({type:t,animate:e,range:r,rangeStart:o,rangeEnd:n,uTime:i,uSpeed:s,uStrength:a,uDensity:l,uFrequency:c,uAmplitude:d,positionX:u,positionY:v,positionZ:h,rotationX:p,rotationY:g,rotationZ:E,color1:x,color2:m,color3:_,reflection:y,wireframe:f,shader:T,rotSpringOption:C=({rotation:S})=>({to:(A,w)=>Ar(void 0,null,function*(){yield A({animatedRotation:S})}),from:{rotation:Zr([0,0,0])},config:{duration:300}}),posSpringOption:R=({position:S})=>({to:(A,w)=>Ar(void 0,null,function*(){yield A({animatedPosition:S})}),from:{position:[0,0,0]},config:{duration:300}})})=>{let S=zs({type:t,shader:T,color1:x,color2:m,color3:_,uTime:i,uSpeed:s,uDensity:l,uStrength:a,uFrequency:c,uAmplitude:d}),{material:A,linemat:w}=Fs({animate:e,range:r,rangeStart:o,rangeEnd:n}),L=[u,v,h],Y=Zr([p,g,E]),{animatedPosition:X}=Do(R({position:L})),{animatedRotation:j}=Do(C({rotation:Y}));return Vo("group",{children:[Vo(ms.mesh,{position:X,rotation:j,children:[t==="plane"&&xe("planeGeometry",{args:[10,10,1,Cr]}),t==="sphere"&&xe("icosahedronGeometry",{args:[1,Cr/3]}),t==="waterPlane"&&xe("planeGeometry",{args:[10,10,Cr,Cr]}),S&&xe("colorShiftMaterial",{ref:A,roughness:1-y})]}),xe("mesh",{children:Vo("lineSegments",{renderOrder:1,position:L,rotation:Y,visible:!1,children:[t==="plane"&&xe("planeGeometry",{args:[10,10,1,Rr]}),t==="sphere"&&xe("icosahedronGeometry",{args:[1,Rr/3]}),t==="waterPlane"&&xe("planeGeometry",{args:[10,10,Rr,Rr]}),S&&xe("hoveredLineMaterial",{ref:w})]})})]})};var qo=ca(Js());var Yo=[{title:"Halo",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uSpeed=0.4&uStrength=4&uTime=0&uFrequency=5.5&wireframe=false"},{title:"Pensive",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.5&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.5&color1=%23809bd6&color2=%23910aff&color3=%23af38ff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=7&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.4&uTime=0&wireframe=false"},{title:"Mint",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=%2394ffd1&color2=%236bf5ff&color3=%23ffffff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0.9&positionZ=-0.3&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false&shader=defaults"},{title:"Interstella",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&fov=45&positionX=-0.1&positionY=0&positionZ=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false"},{title:"Nighty night",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false"},{title:"Viola orientalis",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&brightness=1.1&cAzimuthAngle=0&cDistance=7.1&cPolarAngle=140&cameraZoom=17.3&color1=%23ffffff&color2=%23ffbb00&color3=%230700ff&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&type=sphere&uAmplitude=1.4&uDensity=1.1&uSpeed=0.1&uStrength=1&uTime=0&wireframe=false&uFrequency=5.5&shader=defaults"},{title:"Universe",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&brightness=1.1&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%235606FF&color2=%23FE8989&color3=%23000000&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=-0.5&positionY=0.1&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&type=waterPlane&uAmplitude=0&uDensity=1.1&uSpeed=0.1&uStrength=2.4&uTime=0.2&uFrequency=5.5&wireframe=false&shader=defaults"},{title:"Sunset",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.5&cAzimuthAngle=60&cDistance=7.1&cPolarAngle=90&cameraZoom=15.3&color1=%23ff7a33&color2=%2333a0ff&color3=%23ffc53d&embedMode=off&envPreset=dawn&grain=off&http%3A%2F%2Flocalhost%3A3002%2Fcustomize%3Fanimate=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=-0.15&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=sphere&uAmplitude=1.4&uDensity=1.1&uSpeed=0.1&uStrength=0.4&uTime=0&uFrequency=5.5&wireframe=false"},{title:"Mandarin",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.4&cPolarAngle=95&cameraZoom=1&color1=%23ff6a1a&color2=%23c73c00&color3=%23FD4912&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=-2.1&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=225&shader=defaults&type=waterPlane&uAmplitude=0&uFrequency=5.5&uDensity=1.8&uSpeed=0.2&uStrength=3&uTime=0.2&wireframe=false"},{title:"Cotton Candy",color:"white",url:"?range=enabled&rangeStart=0&rangeEnd=40&frameRate=10&destination=onCanvas&format=gif&animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23ebedff&color2=%23f3f2f8&color3=%23dbf8ff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=1.8&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&type=waterPlane&uDensity=1&uSpeed=0.3&uStrength=3&uTime=0.2&uFrequency=5.5&wireframe=false&shader=defaults"}],lp=Yo[0].url;import{Fragment as bf,jsx as wr,jsxs as Ef}from"react/jsx-runtime";var yf=qo.parse(Qr(Yo[0].url),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"});function pp(s){var a=s,{control:t="props",dampingFactor:e,rotSpringOption:r,posSpringOption:o,isFigmaPlugin:n=!1}=a,i=Z(a,["control","dampingFactor","rotSpringOption","posSpringOption","isFigmaPlugin"]);let l=D(D({},yf),i);t==="query"&&(l=qo.parse(Qr(i.urlString),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"}));let g=l,{lightType:c,envPreset:d,brightness:u,grain:v,toggleAxis:h}=g,p=Z(g,["lightType","envPreset","brightness","grain","toggleAxis"]);return Dr(v==="off"),Ef(bf,{children:[wr(fi,{lightType:c,brightness:u,envPreset:d}),wr(Ds,W(D({},p),{rotSpringOption:r,posSpringOption:o}),JSON.stringify(p)),h&&wr(Vn,{isFigmaPlugin:n}),wr(ii,D({dampingFactor:e},p))]})}export{pp as ShaderGradient,Rf as ShaderGradientCanvas};
