import{IoNumber}from"./io-elements-core.js";import{IoElement,html,IoGl}from"./io.js";class IoMathLayer extends IoElement{static get Style(){return html`<style>:host {display: block;visibility: hidden;position: fixed;top: 0;left: 0;bottom: 0;right: 0;z-index: 100000;user-select: none;overflow: hidden;pointer-events: none;touch-action: none;opacity: 0;transition: opacity 0.25s;}:host[expanded] {visibility: visible;opacity: 1;}:host[expanded][clickblock] {pointer-events: all;}:host > * {position: absolute;pointer-events: all;}:host > *:not([expanded]) {visibility: hidden;}</style>`}static get Attributes(){return{clickblock:!0,expanded:{value:!1,notify:!0}}}static get Properties(){return{srcElement:HTMLElement}}static get Listeners(){return{mousedown:"_onMousedown",touchstart:"_onTouchstart",contextmenu:"_onContextmenu"}}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this._onWindowChange,{capture:!0}),window.addEventListener("wheel",this._onWindowChange,{capture:!0}),window.addEventListener("resize",this._onWindowChange,{capture:!0})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this._onWindowChange,{capture:!0}),window.removeEventListener("wheel",this._onWindowChange,{capture:!0}),window.removeEventListener("resize",this._onWindowChange,{capture:!0})}_onWindowChange(){this.expanded=!1}_onMousedown(e){e.composedPath()[0]===this&&(e.preventDefault(),this._collapseOrFocusSrcElement(e))}_onTouchstart(e){e.composedPath()[0]===this&&(e.preventDefault(),this._collapseOrFocusSrcElement(e.changedTouches[0]))}_collapseOrFocusSrcElement(e){const t=e.clientX,o=e.clientY;if(this.srcElement){const e=this.srcElement.getBoundingClientRect();if(t>e.x&&t<e.right&&o>e.y&&o<e.bottom)return void this.srcElement.focus()}this.expanded=!1}_onContextmenu(e){e.composedPath()[0]===this&&(e.preventDefault(),this.expanded=!1)}onChildExpanded(e){const t=e.composedPath()[0];if(t.expanded)for(let e=0;e<this.children.length;e++)this.children[e]!==t&&(this.children[e].expanded=!1);this.expanded=t.expanded}nudgeBottom(e,t,o,n,i){return!!(o+n.height<window.innerHeight||i)&&(e.style.top=o+"px",e.style.left=Math.min(t,Math.max(0,window.innerWidth-n.width))+"px",!0)}nudgeTop(e,t,o,n,i){return!!(o-n.height>0||i)&&(e.style.top=o-n.height+"px",e.style.left=Math.min(t,Math.max(0,window.innerWidth-n.width))+"px",!0)}nudgeRight(e,t,o,n,i){return!!(t+n.width<window.innerWidth||i)&&(e.style.left=t+"px",e.style.top=Math.min(o,window.innerHeight-n.height)+"px",!0)}nudgeLeft(e,t,o,n,i){return!!(t-n.width>0||i)&&(e.style.left=t-n.width+"px",e.style.top=Math.min(o,window.innerHeight-n.height)+"px",!0)}setElementPosition(e,t,o){const n=e.getBoundingClientRect();switch(t){case"top":this.nudgeTop(e,o.x,o.top,n)||this.nudgeBottom(e,o.x,o.bottom,n)||this.nudgeTop(e,o.x,o.top,n,!0);break;case"left":this.nudgeLeft(e,o.x,o.top,n)||this.nudgeRight(e,o.right,o.top,n)||this.nudgeLeft(e,o.x,o.top,n,!0);break;case"bottom":this.nudgeBottom(e,o.x,o.bottom,n)||this.nudgeTop(e,o.x,o.top,n)||this.nudgeBottom(e,o.x,o.bottom,n,!0);break;case"right":default:this.nudgeRight(e,o.right,o.top,n)||this.nudgeLeft(e,o.x,o.top,n)||this.nudgeRight(e,o.right,o.top,n,!0)}}expandedChanged(){if(!this.expanded){for(let e=0;e<this.children.length;e++)this.children[e].expanded=!1;this.clickblock=!0}}}IoMathLayer.Register(),IoMathLayer.singleton=new IoMathLayer,document.body.appendChild(IoMathLayer.singleton);class IoFloat extends IoNumber{static get Listeners(){return{touchstart:"_onTouchstart",touchend:"_onTouchend"}}_onTouchstart(e){this._x=e.changedTouches[0].clientX,this._y=e.changedTouches[0].clientY}_onTouchend(e){e.cancelable&&e.preventDefault();const t=e.changedTouches[0].clientX-this._x,o=e.changedTouches[0].clientY-this._y;Math.abs(t)<2&&Math.abs(o)<2&&(IoLadder.singleton.expanded&&this.focus(),document.activeElement.blur(),IoMathLayer.singleton.clickblock=!0,IoLadder.singleton.opaque=!0,this._expandLadder())}_onClick(e){super._onClick(e),this._expandLadder()}_onFocus(e){super._onFocus(e),IoMathLayer.singleton.clickblock=!1}_onBlur(e){super._onBlur(e),IoMathLayer.singleton.expanded=!1}_onValueSet(e){this.set("value",e.detail.value)}_expandLadder(){IoLadder.singleton.expanded=!0,IoLadder.singleton.min=this.min,IoLadder.singleton.max=this.max,IoLadder.singleton.step=this.step,IoLadder.singleton.value=this.value,IoLadder.singleton._target&&IoLadder.singleton.removeEventListener("value-set",IoLadder.singleton._target._onValueSet),IoLadder.singleton._target=this,IoLadder.singleton.addEventListener("value-set",this._onValueSet),IoMathLayer.singleton.setElementPosition(IoLadder.singleton,"bottom",this.getBoundingClientRect()),IoMathLayer.singleton.srcElement=this}}IoFloat.Register();class IoLadder extends IoElement{static get Style(){return html`<style>:host {position: relative;pointer-event: none;}:host > span {pointer-event: all;position: absolute;display: inline-block;cursor: ew-resize;border: var(--io-inset-border);text-align: center;background-color: var(--io-background-color);color: var(--io-color);padding: var(--io-spacing);box-shadow: var(--io-shadow);-webkit-tap-highlight-color: transparent;user-select: none;width: 3em;height: 1.375em;transform: translateZ(0);}:host > :nth-child(1) {border-top-left-radius: var(--io-border-radius);border-top-right-radius: var(--io-border-radius);}:host > :nth-child(8) {border-bottom-left-radius: var(--io-border-radius);border-bottom-right-radius: var(--io-border-radius);}:host > .io-up1,:host > .io-down1{transition: transform 0.10s;opacity: 0.3;}:host > .io-up2,:host > .io-down2 {transition: transform 0.15s;opacity: 0.20;}:host > .io-up3,:host > .io-down3 {transition: transform 0.20s;opacity: 0.12;}:host > .io-up4,:host > .io-down4 {transition: transform 0.25s;opacity: 0.05;}:host > .io-up4 { transform: translateY(-4em); }:host > .io-up3 { transform: translateY(-4em); }:host > .io-up2 { transform: translateY(-4em); }:host > .io-up1 { transform: translateY(-4em); }:host > .io-down1 { transform: translateY(0em); }:host > .io-down2 { transform: translateY(0em); }:host > .io-down3 { transform: translateY(0em); }:host > .io-down4 { transform: translateY(0em); }:host[expanded] > .io-up4 { transform: translateY(-10em); }:host[expanded] > .io-up3 { transform: translateY(-8em); }:host[expanded] > .io-up2 { transform: translateY(-6em); }:host[expanded] > .io-up1 { transform: translateY(-4em); }:host[expanded] > .io-down1 { transform: translateY(0em); }:host[expanded] > .io-down2 { transform: translateY(2em); }:host[expanded] > .io-down3 { transform: translateY(4em); }:host[expanded] > .io-down4 { transform: translateY(6em); }:host > span:hover {background-color: var(--io-background-color);opacity: 1;}:host:not([expanded]) > span {transition: transform 0s;}:host[_step="1000"] > .io-up4,:host[_step="100"] > .io-up3,:host[_step="10"] > .io-up2,:host[_step="1"] > .io-up1,:host[_step="0.1"] > .io-down1,:host[_step="0.01"] > .io-down2,:host[_step="0.001"] > .io-down3,:host[_step="0.0001"] > .io-down4 {background-color: var(--io-background-color-light);opacity: 1;}:host[opaque] > span {opacity: 1;}:host > span.hidden {display: none;}</style>`}static get Attributes(){return{_step:Number,opaque:Boolean}}static get Properties(){return{value:Number,expanded:{type:Boolean,reflect:1},step:1e-4}}static get Listeners(){return{mousedown:"_onMousedown",touchstart:"_onTouchstart"}}_onMousedown(e){e.preventDefault(),e.stopImmediatePropagation(),window.addEventListener("mousemove",this._onMousemove),window.addEventListener("mouseup",this._onMouseup);const t=e.composedPath()[0];this._step=Number(t.textContent),IoMathLayer.singleton.style.cursor="ew-resize",this._value=this.value,this._x=e.clientX}_onMousemove(e){const t=this._value+Math.round((e.clientX-this._x)/10)*this._step;this.set("value",Math.max(this.min,Math.min(this.max,t)))}_onMouseup(){window.removeEventListener("mousemove",this._onMousemove),window.removeEventListener("mouseup",this._onMouseup),IoMathLayer.singleton.style.cursor="",this._step=0}_onTouchstart(e){e.preventDefault(),e.stopImmediatePropagation(),this.addEventListener("touchmove",this._onTouchmove),this.addEventListener("touchend",this._onTouchend);const t=e.composedPath()[0];this._step=Number(t.textContent),this._value=this.value,this._x=e.changedTouches[0].clientX}_onTouchmove(e){e.preventDefault();const t=this._value+Math.round((e.changedTouches[0].clientX-this._x)/5)*this._step;this.set("value",Math.max(this.min,Math.min(this.max,t)))}_onTouchend(e){e.preventDefault(),this.removeEventListener("touchmove",this._onTouchmove),this.removeEventListener("touchend",this._onTouchend),this._step=0}expandedChanged(){this.expanded||(this.srcElement=void 0,this.opaque=!1)}changed(){this.querySelector(".io-up4").classList.toggle("hidden",this.max-this.min<1e3),this.querySelector(".io-up3").classList.toggle("hidden",this.max-this.min<100),this.querySelector(".io-up2").classList.toggle("hidden",this.max-this.min<10),this.querySelector(".io-up1").classList.toggle("hidden",this.max-this.min<1),this.querySelector(".io-down1").classList.toggle("hidden",this.step>.1),this.querySelector(".io-down2").classList.toggle("hidden",this.step>.01),this.querySelector(".io-down3").classList.toggle("hidden",this.step>.001),this.querySelector(".io-down4").classList.toggle("hidden",this.step>1e-4)}constructor(e){super(e),this.template([["span",{class:"io-up4"},"1000"],["span",{class:"io-up3"},"100"],["span",{class:"io-up2"},"10"],["span",{class:"io-up1"},"1"],["span",{class:"io-down1"},".1"],["span",{class:"io-down2"},".01"],["span",{class:"io-down3"},".001"],["span",{class:"io-down4"},".0001"]])}}IoLadder.Register(),IoLadder.singleton=new IoLadder,IoMathLayer.singleton.appendChild(IoLadder.singleton),IoLadder.singleton.addEventListener("expanded-changed",IoMathLayer.singleton.onChildExpanded);class IoVector2 extends IoElement{static get Style(){return html`<style>:host {display: flex;flex-direction: row;align-self: stretch;justify-self: stretch;}:host > io-float {width: inherit;flex: 1 1;}:host > io-float:not(:last-child) {margin-right: var(--io-spacing);}:host > io-boolean {flex: 0 0 auto;border-color: transparent;background: none;box-shadow: none;}:host > io-boolean:not([value]) {opacity: 0.25;}</style>`}static get Properties(){return{value:[0,0],conversion:1,step:.001,min:-1/0,max:1/0,linkable:!1,linked:!1,_c:[0,1]}}_onValueSet(e){const t=e.composedPath()[0].id;if(null!==t){const o=e.detail.value,n=e.detail.oldValue;if(this.value[t]=o,this.linked){const e=o/n;for(let i in this._c){const s=this._c[i];0===n?this.value[s]=o:s!==t&&(this.value[s]*=e)}}const i={object:this.value,prop:this.linked?null:t,value:o,oldValue:n};this.dispatchEvent("object-mutated",i,!1,window)}}valueChanged(){this._c=this.value instanceof Array?[0,1]:["x","y"]}changed(){const e=[];for(let t in this._c){const o=this._c[t];void 0!==this.value[o]&&e.push(["io-float",{id:o,value:this.value[o],conversion:this.conversion,step:this.step,min:this.min,max:this.max,"on-value-set":this._onValueSet}])}this.linkable&&e.push(["io-boolean",{value:this.bind("linked"),true:"🔗",false:"🔗"}]),this.template(e)}}IoVector2.Register();class IoVector3 extends IoVector2{static get Properties(){return{value:[0,0,0]}}valueChanged(){this._c=this.value instanceof Array?[0,1,2]:["x","y","z"]}}IoVector3.Register();class IoVector4 extends IoVector2{static get Properties(){return{value:[0,0,0,0]}}valueChanged(){this._c=this.value instanceof Array?[0,1,2,3]:["x","y","z","w"]}}IoVector4.Register();class IoMatrix2 extends IoElement{static get Style(){return html`<style>:host {display: grid;align-self: stretch;justify-self: stretch;grid-template-columns: repeat(2, 1fr);grid-gap: var(--io-spacing);}:host > io-float {width: inherit;}</style>`}static get Properties(){return{value:[0,0],step:.001,_c:[0,1,2,3]}}_onValueSet(e){if(e.detail.object)return;const t=e.composedPath()[0].id;if(null!==t){const o=e.detail.value,n=e.detail.oldValue;this.value[t]=o;const i={object:this.value,prop:t,value:o,oldValue:n};this.dispatchEvent("object-mutated",i,!1,window)}}changed(){const e=[];for(let t in this._c){const o=this._c[t];void 0!==this.value[o]&&e.push(["io-float",{id:o,value:this.value[o],step:this.step,"on-value-set":this._onValueSet}])}this.template(e)}}IoMatrix2.Register();class IoMatrix3 extends IoMatrix2{static get Style(){return html`<style>:host {grid-template-columns: repeat(3, 1fr);}</style>`}static get Properties(){return{value:[0,0,0,0,0,0,0,0,0],_c:[0,1,2,3,4,5,6,7,8]}}}IoMatrix3.Register();class IoMatrix4 extends IoMatrix2{static get Style(){return html`<style>:host {grid-template-columns: repeat(4, 1fr);}</style>`}static get Properties(){return{value:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],_c:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}}}IoMatrix4.Register();class IoHsva extends IoVector4{static get Style(){return html`<style>:host > io-float:nth-child(1) {background-image: linear-gradient(to top, transparent 2px, var(--io-background-color-field) 2.5px),linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);}:host > io-float:nth-child(2) {background-image: linear-gradient(to top, transparent 2px, var(--io-background-color-field) 2.5px),linear-gradient(to right, #ffffff 0%, #ff0000 100%);}:host > io-float:nth-child(3) {background-image: linear-gradient(to top, transparent 2px, var(--io-background-color-field) 2.5px),linear-gradient(to right, #000000 0%, #ffffff 100%);}:host > span {cursor: pointer;border: var(--io-inset-border);border-radius: var(--io-border-radius);border-color: var(--io-inset-border-color);padding: var(--io-spacing);-webkit-tap-highlight-color: transparent;width: 1.375em;height: 1.375em;flex: 1 1 auto;}</style>`}static get Properties(){return{value:[1,1,1,1],min:0,max:1}}valueChanged(){this._c=this.value instanceof Array?[0,1,2,3]:["h","s","v","a"]}changed(){const e=[];for(let t in this._c){const o=this._c[t];void 0!==this.value[o]&&e.push(["io-float",{id:o,value:this.value[o],conversion:this.conversion,step:this.step,min:this.min,max:this.max,"on-value-set":this._onValueSet}])}e.push(["io-hsva-swatch",{id:"swatch",value:this.value}]),this.template(e)}}IoHsva.Register();class IoHsvaHue extends IoGl{static get Style(){return html`<style>:host {cursor: move;min-width: 32px;min-height: 1.375em;}:host[aria-invalid] {outline: 1px solid var(--io-color-error);}:host:focus {outline: 1px solid var(--io-color-focus);}</style>`}static get Attributes(){return{role:"slider",tabindex:0}}static get Properties(){return{value:[.5,.5,.5,1],horizontal:!1}}static get Frag(){return"\n      varying vec2 vUv;\n\n      #ifndef saturate\n        #define saturate(v) clamp(v, 0., 1.)\n      #endif\n\n      vec3 hue_to_rgb(float hue) {\n        float R = abs(hue * 6. - 3.) - 1.;\n        float G = 2. - abs(hue * 6. - 2.);\n        float B = 2. - abs(hue * 6. - 4.);\n        return saturate(vec3(R,G,B));\n      }\n\n      vec3 hsv_to_rgb(vec3 hsv) {\n        vec3 rgb = hue_to_rgb(hsv.r);\n        return ((rgb - 1.0) * hsv.g + 1.0) * hsv.b;\n      }\n\n      void main(void) {\n\n        // Hue spectrum\n        float axis = (uHorizontal == 1) ? vUv.x : vUv.y;\n        vec3 final = hsv_to_rgb(vec3(axis, 1.0, 1.0));\n\n        float lineWidth = 1.0;\n\n        // Hue marker\n      \tfloat hueMarkerOffset = abs(axis - uValue[0]) * ((uHorizontal == 1) ? uSize.x : uSize.y);\n        float dist = hueMarkerOffset - lineWidth;\n        float dist2 = hueMarkerOffset - (lineWidth + 1.0);\n        final = mix(final, vec3(0.0), max(1.0 - dist2, 0.0));\n        final = mix(final, vec3(1.0), max(1.0 - dist, 0.0));\n\n        gl_FragColor = vec4(final, 1.0);\n      }\n    "}static get Listeners(){return{touchstart:"_onTouchstart",mousedown:"_onMousedown",keydown:"_onKeydown"}}valueChanged(){this._c=this.value instanceof Array?[0,1,2,3]:["h","s","v","a"]}_onTouchstart(e){e.preventDefault(),this.addEventListener("touchmove",this._onTouchmove),this.addEventListener("touchend",this._onTouchend),this._onPointerdown(e)}_onTouchmove(e){e.preventDefault(),this._onPointermove(e)}_onTouchend(){this.removeEventListener("touchmove",this._onTouchmove),this.removeEventListener("touchend",this._onTouchend)}_onMousedown(e){e.preventDefault(),this.focus(),window.addEventListener("mousemove",this._onMousemove),window.addEventListener("mouseup",this._onMouseup),this._onPointerdown(e)}_onMousemove(e){this._onPointermove(e)}_onMouseup(){window.removeEventListener("mousemove",this._onMousemove),window.removeEventListener("mouseup",this._onMouseup)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this._onMousemove),window.removeEventListener("mouseup",this._onMouseup)}_onPointerdown(e){this._onPointermove(e)}_onPointermove(e){const t=e.changedTouches?e.changedTouches[0]:e,o=this.getBoundingClientRect(),n=Math.max(0,Math.min(1,(t.clientX-o.x)/o.width)),i=Math.max(0,Math.min(1,(t.clientY-o.y)/o.height));this._setHSVA(n,i),this.dispatchEvent("object-mutated",{object:this.value},!1,window),this.dispatchEvent("value-set",{property:"value",value:this.value},!1),this.changed()}_setHSVA(e,t){this.value[this._c[0]]=Math.max(0,Math.min(1,this.horizontal?e:1-t))}}IoHsvaHue.Register();class IoHsvaSv extends IoHsvaHue{static get Frag(){return"\n      varying vec2 vUv;\n\n      #ifndef saturate\n        #define saturate(v) clamp(v, 0., 1.)\n      #endif\n\n      vec3 hue_to_rgb(float hue) {\n        float R = abs(hue * 6. - 3.) - 1.;\n        float G = 2. - abs(hue * 6. - 2.);\n        float B = 2. - abs(hue * 6. - 4.);\n        return saturate(vec3(R,G,B));\n      }\n\n      vec3 hsv_to_rgb(vec3 hsv) {\n        vec3 rgb = hue_to_rgb(hsv.r);\n        return ((rgb - 1.0) * hsv.g + 1.0) * hsv.b;\n      }\n\n      void main(void) {\n\n        float tileSize = uSize.x / 32.0;\n        tileSize = (tileSize - mod(tileSize, 1.0)) * 5.0;\n        vec2 alphaPos = floor(vUv * vec2(tileSize, tileSize / uAspect));\n        float alphaMask = mod(alphaPos.x + mod(alphaPos.y, 2.0), 2.0);\n        vec3 alphaPattern = mix(vec3(0.5), vec3(1.0), alphaMask);\n\n        vec3 currentColor = hsv_to_rgb(uValue.xyz);\n\n        vec3 final = alphaPattern;\n\n        float markerSize = 12.0;\n        float lineWidth = 1.0;\n\n        // SV gradient\n        final = hsv_to_rgb(vec3(uValue[0], vUv.x, vUv.y));\n\n        // Color marker\n        float offset = length((vUv - vec2(uValue[1], uValue[2])) * uSize);\n\n        float distOut = (offset - (markerSize - lineWidth));\n        float distIn = 1.0 - (offset - (markerSize + lineWidth));\n        float dist = saturate(min(distOut, distIn));\n\n        float distOut2 = (offset - (markerSize - (lineWidth + 1.0)));\n        float distIn2 = 1.0 - (offset - (markerSize + (lineWidth + 1.0)));\n        float dist2 = saturate(min(distOut2, distIn2));\n\n        currentColor = mix(alphaPattern, currentColor, uValue.a);\n\n        final = mix(final, currentColor, saturate(distIn));\n        final = mix(final, vec3(0.0), dist2);\n        final = mix(final, vec3(1.0), dist);\n\n        gl_FragColor = vec4(final, 1.0);\n      }\n    "}_setHSVA(e,t){this.value[this._c[1]]=Math.max(0,Math.min(1,e)),this.value[this._c[2]]=Math.max(0,Math.min(1,1-t))}}IoHsvaSv.Register();class IoHsvaAlpha extends IoHsvaHue{static get Frag(){return"\n      varying vec2 vUv;\n\n      #ifndef saturate\n        #define saturate(v) clamp(v, 0., 1.)\n      #endif\n\n      vec3 hue_to_rgb(float hue) {\n        float R = abs(hue * 6. - 3.) - 1.;\n        float G = 2. - abs(hue * 6. - 2.);\n        float B = 2. - abs(hue * 6. - 4.);\n        return saturate(vec3(R,G,B));\n      }\n\n      vec3 hsv_to_rgb(vec3 hsv) {\n        vec3 rgb = hue_to_rgb(hsv.r);\n        return ((rgb - 1.0) * hsv.g + 1.0) * hsv.b;\n      }\n\n      void main(void) {\n\n        float tileSize = uSize.x / 32.0;\n        tileSize = (tileSize - mod(tileSize, 1.0)) * 5.0;\n        vec2 alphaPos = floor(vUv * vec2(tileSize, tileSize / uAspect));\n        float alphaMask = mod(alphaPos.x + mod(alphaPos.y, 2.0), 2.0);\n        vec3 alphaPattern = mix(vec3(0.5), vec3(1.0), alphaMask);\n\n        vec3 currentColor = hsv_to_rgb(uValue.xyz);\n\n        vec3 final = alphaPattern;\n\n        float axis = (uHorizontal == 1) ? vUv.x : vUv.y;\n        float lineWidth = 1.0;\n\n        // Apha gradient\n        final = mix(alphaPattern, currentColor, axis);\n\n        // Apha marker\n      \tfloat hueMarkerOffset = abs(axis - uValue[3]) * ((uHorizontal == 1) ? uSize.x : uSize.y);\n        float dist = hueMarkerOffset - lineWidth;\n        float dist2 = hueMarkerOffset - (lineWidth + 1.0);\n        final = mix(final, vec3(0.0), max(1.0 - dist2, 0.0));\n        final = mix(final, vec3(1.0), max(1.0 - dist, 0.0));\n\n        gl_FragColor = vec4(final, 1.0);\n      }\n    "}valueChanged(){super.valueChanged();const e=void 0!==this.value[this._c[3]];this.setAttribute("aria-invalid",!e&&"true")}_setHSVA(e,t){void 0!==this.value[this._c[3]]&&(this.value[this._c[3]]=Math.max(0,Math.min(1,this.horizontal?e:1-t)))}}IoHsvaAlpha.Register();class IoHsvaPicker extends IoElement{static get Style(){return html`<style>:host {display: flex;cursor: move;border: var(--io-inset-border);border-radius: var(--io-border-radius);min-width: 2.75em;min-height: 1.375em;flex-direction: column;}:host[horizontal] {flex-direction: row;}:host > io-hsva-sv {flex: 1 1;}</style>`}static get Attributes(){return{horizontal:!0}}static get Properties(){return{expanded:{type:Boolean,reflect:1},value:[.5,.5,.5,1]}}changed(){const e=void 0!==this.value[3]||void 0!==this.value.a;this.template([["io-hsva-sv",{value:this.value}],["io-hsva-hue",{value:this.value,horizontal:!this.horizontal}],e?["io-hsva-alpha",{value:this.value,horizontal:!this.horizontal}]:null])}}IoHsvaPicker.Register(),IoHsvaPicker.singleton=new IoHsvaPicker,IoMathLayer.singleton.appendChild(IoHsvaPicker.singleton),IoHsvaPicker.singleton.addEventListener("expanded-changed",IoMathLayer.singleton.onChildExpanded);class IoHsvaSwatch extends IoGl{static get Style(){return html`<style>:host {cursor: pointer;border-radius: var(--io-border-radius);-webkit-tap-highlight-color: transparent;min-width: 32px;min-height: 1.375em;}:host[aria-invalid] {outline: 1px solid var(--io-color-focus);}:host:focus {outline: 1px solid var(--io-color-focus);}</style>`}static get Attributes(){return{role:"slider",tabindex:0}}static get Properties(){return{value:[.5,.5,.5,.5],horizontal:!1}}static get Frag(){return"\n      varying vec2 vUv;\n\n      #ifndef saturate\n        #define saturate(v) clamp(v, 0., 1.)\n      #endif\n\n      vec3 hue_to_rgb(float hue) {\n        float R = abs(hue * 6. - 3.) - 1.;\n        float G = 2. - abs(hue * 6. - 2.);\n        float B = 2. - abs(hue * 6. - 4.);\n        return saturate(vec3(R,G,B));\n      }\n\n      vec3 hsv_to_rgb(vec3 hsv) {\n        vec3 rgb = hue_to_rgb(hsv.r);\n        return ((rgb - 1.0) * hsv.g + 1.0) * hsv.b;\n      }\n\n      void main(void) {\n        float tileSize = uSize.x / 32.0;\n        tileSize = (tileSize - mod(tileSize, 1.0)) * 5.0;\n        vec2 alphaPos = floor(vUv * vec2(tileSize, tileSize / uAspect));\n        float alphaMask = mod(alphaPos.x + mod(alphaPos.y, 2.0), 2.0);\n        vec3 alphaPattern = mix(vec3(0.5), vec3(1.0), alphaMask);\n\n        float alpha = uValue.a;\n\n        float borderWidth = 4.0;\n        vec2 pxUv = vUv * uSize;\n        if (pxUv.x < borderWidth) alpha = 1.0;\n        if (pxUv.y < borderWidth) alpha = 1.0;\n        if (pxUv.x > uSize.x - borderWidth) alpha = 1.0;\n        if (pxUv.y > uSize.y - borderWidth) alpha = 1.0;\n\n        gl_FragColor = vec4(mix(alphaPattern, hsv_to_rgb(uValue.xyz), alpha), 1.0);\n      }\n    "}static get Listeners(){return{mousedown:"_onMousedown",keydown:"_onKeydown"}}_onMousedown(){event.preventDefault(),this.focus(),this._expand()}_onKeydown(){this._expand()}_expand(){const e=void 0!==this.value[3]||void 0!==this.value.a;IoHsvaPicker.singleton.value=this.value,IoHsvaPicker.singleton.style.width=e?"192px":"160px",IoHsvaPicker.singleton.style.height="128px",IoHsvaPicker.singleton.expanded=!0,IoMathLayer.singleton.setElementPosition(IoHsvaPicker.singleton,"bottom",this.getBoundingClientRect())}}IoHsvaSwatch.Register();class IoRgba extends IoVector4{static get Style(){return html`<style>:host > io-float:nth-child(1) {border-bottom-color: red;}:host > io-float:nth-child(2) {border-bottom-color: green;}:host > io-float:nth-child(3) {border-bottom-color: blue;}:host > span {cursor: pointer;border: var(--io-inset-border);border-radius: var(--io-border-radius);border-color: var(--io-inset-border-color);padding: var(--io-spacing);-webkit-tap-highlight-color: transparent;width: 1.375em;height: 1.375em;flex: 1 1 auto;}</style>`}static get Properties(){return{value:[1,1,1,1],min:0,max:1}}valueChanged(){this._c=this.value instanceof Array?[0,1,2,3]:["r","g","b","a"]}changed(){const e=[];for(let t in this._c){const o=this._c[t];void 0!==this.value[o]&&e.push(["io-float",{id:o,value:this.value[o],conversion:this.conversion,step:this.step,min:this.min,max:this.max,"on-value-set":this._onValueSet}])}e.push(["io-rgba-swatch",{id:"swatch",value:this.value}]),this.template(e)}}function rgb2hsv(e,t,o){const n=Math.max(e,t,o),i=Math.min(e,t,o);let s,a,r=n,l=n-i;if(a=0==n?0:l/n,n==i)s=0;else{switch(n){case e:s=(t-o)/l+(t<o?6:0);break;case t:s=(o-e)/l+2;break;case o:s=(e-t)/l+4}s/=6}return[s,a,r]}function hsv2rgb(e,t,o){const n=Math.floor(6*e),i=6*e-n,s=o*(1-t),a=o*(1-i*t),r=o*(1-(1-i)*t);switch(n%6){case 0:return[o,r,s];case 1:return[a,o,s];case 2:return[s,o,r];case 3:return[s,a,o];case 4:return[r,s,o];case 5:return[o,s,a]}}IoRgba.Register();class IoRgbaPicker extends IoElement{static get Style(){return html`<style>:host {display: flex;cursor: move;border: var(--io-inset-border);border-radius: var(--io-border-radius);min-width: 2.75em;min-height: 1.375em;flex-direction: column;}:host[horizontal] {flex-direction: row;}:host > io-hsva-sv {flex: 1 1;}</style>`}static get Attributes(){return{horizontal:!0}}static get Properties(){return{expanded:{type:Boolean,reflect:1},value:[.5,.5,.5,1]}}valueChanged(){this._c=this.value instanceof Array?[0,1,2,3]:["r","g","b","a"]}_onValueSet(e){const t=this._c,o=e.detail.value,n=hsv2rgb(o[0],o[1],o[2]);this.value[t[0]]=n[0],this.value[t[1]]=n[1],this.value[t[2]]=n[2],void 0!==this.value[t[3]]&&(this.value[t[3]]=o[3]),this._suspendLoop=!0,this.dispatchEvent("object-mutated",{object:this.value},!1,window),setTimeout(()=>{this._suspendLoop=!1})}changed(){if(this._suspendLoop)return;const e=this._c,t=rgb2hsv(this.value[e[0]],this.value[e[1]],this.value[e[2]]);this._hsva=[...t,this.value[e[3]]||1],this.template([["io-hsva-sv",{value:this._hsva,"on-value-set":this._onValueSet}],["io-hsva-hue",{value:this._hsva,horizontal:!this.horizontal,"on-value-set":this._onValueSet}],void 0!==this.value[e[3]]?["io-hsva-alpha",{value:this._hsva,horizontal:!this.horizontal,"on-value-set":this._onValueSet}]:null])}}IoRgbaPicker.Register(),IoRgbaPicker.singleton=new IoRgbaPicker,IoMathLayer.singleton.appendChild(IoRgbaPicker.singleton),IoRgbaPicker.singleton.addEventListener("expanded-changed",IoMathLayer.singleton.onChildExpanded);class IoRgbaSwatch extends IoGl{static get Style(){return html`<style>:host {cursor: pointer;border-radius: var(--io-border-radius);-webkit-tap-highlight-color: transparent;min-width: 32px;min-height: 1.375em;}:host[aria-invalid] {outline: 1px solid var(--io-color-focus);}:host:focus {outline: 1px solid var(--io-color-focus);}</style>`}static get Attributes(){return{role:"slider",tabindex:0}}static get Properties(){return{value:[.5,.5,.5,.5],horizontal:!1}}static get Frag(){return"\n      varying vec2 vUv;\n\n      void main(void) {\n        float tileSize = uSize.x / 32.0;\n        tileSize = (tileSize - mod(tileSize, 1.0)) * 5.0;\n        vec2 alphaPos = floor(vUv * vec2(tileSize, tileSize / uAspect));\n        float alphaMask = mod(alphaPos.x + mod(alphaPos.y, 2.0), 2.0);\n        vec3 alphaPattern = mix(vec3(0.5), vec3(1.0), alphaMask);\n\n        float alpha = uValue.a;\n\n        float borderWidth = 4.0;\n        vec2 pxUv = vUv * uSize;\n        if (pxUv.x < borderWidth) alpha = 1.0;\n        if (pxUv.y < borderWidth) alpha = 1.0;\n        if (pxUv.x > uSize.x - borderWidth) alpha = 1.0;\n        if (pxUv.y > uSize.y - borderWidth) alpha = 1.0;\n\n        gl_FragColor = vec4(mix(alphaPattern, uValue.rgb, alpha), 1.0);\n      }\n    "}static get Listeners(){return{mousedown:"_onMousedown",keydown:"_onKeydown"}}_onMousedown(){event.preventDefault(),this.focus(),this._expand()}_onKeydown(){this._expand()}_expand(){const e=void 0!==this.value[3]||void 0!==this.value.a;IoRgbaPicker.singleton.value=this.value,IoRgbaPicker.singleton.style.width=e?"192px":"160px",IoRgbaPicker.singleton.style.height="128px",IoRgbaPicker.singleton.expanded=!0,IoMathLayer.singleton.setElementPosition(IoRgbaPicker.singleton,"bottom",this.getBoundingClientRect())}}IoRgbaSwatch.Register();export{IoFloat,IoHsva,IoHsvaAlpha,IoHsvaHue,IoHsvaPicker,IoHsvaSv,IoHsvaSwatch,IoMatrix2,IoMatrix3,IoMatrix4,IoRgba,IoRgbaPicker,IoRgbaSwatch,IoVector2,IoVector3,IoVector4};