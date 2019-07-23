import{IoElement,html,IoStorage}from"./io.js";class IoTheme extends IoElement{static get Style(){return html`<style>body {--io-spacing: 4px;--io-border-radius: 3px;--io-border-width: 1px;}/* TODO: Move */@keyframes spinner {to {transform: rotate(360deg);}}body .io-loading {background-image: repeating-linear-gradient(135deg, var(--io-background-color-light), var(--io-background-color) 3px, var(--io-background-color) 7px, var(--io-background-color-light) 10px) !important;background-repeat: repeat;position: relative;}body .io-loading:after {content: '';box-sizing: border-box;position: absolute;top: 50%;left: 50%;width: 40px;height: 40px;margin-top: -20px;margin-left: -20px;border-radius: 50%;border: var(--io-border);border-top-color: #000;animation: spinner .6s linear infinite;}</style>`}static get Mixins(){return html`<style>item {display: inline-block;-webkit-tap-highlight-color: transparent;overflow: hidden;text-overflow: ellipsis;flex-wrap: nowrap;white-space: nowrap;height: 1.375em;border: var(--io-inset-border);border-radius: var(--io-border-radius);border-color: transparent;background-color: transparent;background-image: none;padding: var(--io-spacing);}button {background-color: var(--io-background-color-dark);background-image: var(--io-gradient-button);border: var(--io-outset-border);border-color: var(--io-outset-border-color);border-radius: var(--io-border-radius);padding: var(--io-spacing);padding-left: calc(2 * var(--io-spacing));padding-right: calc(2 * var(--io-spacing));transition: background-color 0.25s;}field {border: var(--io-inset-border);border-radius: var(--io-border-radius);color: var(--io-color-field);background-color: var(--io-background-color-field);background-image: none;box-shadow: var(--io-shadow-inset);padding: var(--io-spacing);user-select: text;width: 4.5em;height: 1.375em;min-width: 0.5em;}panel {display: flex;flex-direction: column;align-self: stretch;justify-self: stretch;align-items: flex-start;border: var(--io-outset-border);border-radius: var(--io-border-radius);border-color: var(--io-outset-border-color);padding: var(--io-spacing);background: var(--io-background-color-dark);background-image: var(--io-gradient-panel);}frame {display: flex;flex-direction: column;align-self: stretch;justify-self: stretch;align-items: flex-start;border: var(--io-inset-border);border-radius: var(--io-border-radius);color: var(--io-color);background-color: var(--io-background-color);background-image: none;box-shadow: var(--io-shadow-inset);padding: var(--io-spacing);}content {display: flex;flex-direction: column;flex: 1 1 auto;overflow-x: hidden;overflow-y: auto;-webkit-overflow-scrolling: touch;-webkit-tap-highlight-color: transparent;}</style>`}get dark(){return html`<style>body {--io-background-color: rgb(42, 42, 42);--io-background-color-light: rgb(56, 56, 56);--io-background-color-dark: rgb(64, 64, 64);--io-background-color-field: rgb(35, 35, 35);--io-color: rgb(210, 210, 210);--io-color-error: rgb(255, 96, 16);--io-color-link: rgb(190, 230, 150);--io-color-focus: rgb(80, 210, 355);--io-color-field: rgb(190, 190, 190);--io-color-number: rgb(32, 164, 255);--io-color-string: rgb(240, 64, 22);--io-color-boolean: rgb(210, 90, 190);--io-gradient-button: linear-gradient(0deg, rgba(0, 0, 0, 0.25), transparent 50%), linear-gradient(180deg, rgba(255, 255, 255, 0.075), transparent 50%);--io-gradient-panel: linear-gradient(100deg, rgba(0, 0, 0, 0.25), transparent 50%), linear-gradient(280deg, rgba(255, 255, 255, 0.075), transparent 50%);--io-border-color: rgb(140, 140, 140);--io-border: var(--io-border-width) solid var(--io-border-color);--io-inset-border-color: rgb(140, 140, 140) var(--io-border-color) var(--io-border-color) rgb(140, 140, 140);--io-inset-border: var(--io-border-width) inset var(--io-border-color);--io-outset-border-color: var(--io-border-color) rgb(32, 32, 32) rgb(32, 32, 32) var(--io-border-color);--io-outset-border: var(--io-border-width) outset var(--io-border-color);--io-shadow: 2px 2px 5px rgba(0,0,0,0.2);--io-shadow-inset: 2px 2px 2px inset rgba(0,0,0,0.05);--io-shadow-outset: -1px -1px 2px inset rgba(0,0,0,0.1), 2px 2px 2px inset rgba(255,255,255,0.3);}</style>`}get light(){return html`<style>body {--io-background-color: rgb(245, 245, 245);--io-background-color-light: rgb(255, 255, 255);--io-background-color-dark: rgb(215, 215, 215);--io-background-color-field: rgb(235, 235, 235);--io-color: rgb(42, 42, 42);--io-color-error: rgb(225, 100, 100);--io-color-link: rgb(30, 180, 30);--io-color-focus: rgb(80, 210, 355);--io-color-field: rgb(0, 0, 0);--io-color-number: rgb(32, 164, 255);--io-color-string: rgb(240, 64, 22);--io-color-boolean: rgb(210, 90, 190);--io-gradient-button: linear-gradient(0deg, rgba(0, 0, 0, 0.15), transparent 75%), linear-gradient(180deg, rgba(255, 255, 255, 0.25), transparent 75%);--io-gradient-panel: linear-gradient(100deg, rgba(0, 0, 0, 0.15), transparent 75%), linear-gradient(280deg, rgba(255, 255, 255, 0.25), transparent 75%);--io-border-color: rgb(180, 180, 180);--io-border: var(--io-border-width) solid var(--io-border-color);--io-inset-border-color: rgb(220, 220, 220) var(--io-border-color) var(--io-border-color) rgb(220, 220, 220);--io-inset-border: var(--io-border-width) inset var(--io-border-color);--io-outset-border-color: var(--io-border-color) rgb(210, 210, 210) rgb(210, 210, 210) var(--io-border-color);--io-outset-border: var(--io-border-width) outset var(--io-border-color);--io-shadow: 2px 2px 5px rgba(0,0,0,0.2);--io-shadow-inset: 1px 1px 1px inset rgba(0,0,0,0.1);--io-shadow-outset: -1px -1px 1px inset rgba(0,0,0,0.2), 1px 1px 1px inset rgba(255,255,255,0.6);}</style>`}static get Properties(){return{theme:IoStorage("theme","light"),cssBackgroundColor:[0,0,0,1],cssBackgroundColorField:[0,0,0,1],cssColor:[1,1,1,1],cssColorLink:[1,1,1,1],cssColorFocus:[1,1,1,1],cssBorderWidth:1}}constructor(e){super(e),this.styleElement=document.createElement("style"),this.styleElement.setAttribute("id","io-theme"),this.mixinsElement=document.createElement("style"),this.mixinsElement.setAttribute("id","io-theme-mixins"),this.mixinsElement.innerHTML=this.mixins,this.themeChanged(),document.head.appendChild(this.mixinsElement)}themeChanged(){this.styleElement.innerHTML=this[this.theme].string,setTimeout(()=>{this.updatePropertiesFromCSS()})}getCssRgba(e,t){return e.getPropertyValue(t).split("(")[1].split(")")[0].split(",").map(e=>e/255)}getCssFloat(e,t){return parseFloat(e.getPropertyValue(t))*window.devicePixelRatio}updatePropertiesFromCSS(){const e=getComputedStyle(document.body);this.setProperties({cssColor:this.getCssRgba(e,"--io-color"),cssBackgroundColor:this.getCssRgba(e,"--io-background-color"),cssBackgroundColorField:this.getCssRgba(e,"--io-background-color-field"),cssBorderWidth:this.getCssFloat(e,"--io-border-width"),cssColorLink:this.getCssRgba(e,"--io-color-link"),cssColorFocus:this.getCssRgba(e,"--io-color-focus")}),this.dispatchEvent("object-mutated",{object:this},!1,window)}}IoTheme.Register=function(){IoElement.Register.call(this);let e="";for(let t=this.prototype.__protochain.length;t--;){const o=this.prototype.__protochain[t].constructor.Mixins;if(o){const t=Array.from(o.string.matchAll(new RegExp(/([\s\S]*?){([\s\S]*?)}/,"g")));for(let o=0;o<t.length;o++){const i=t[o][1].replace(/\s/g,""),r=t[o][2];Object.defineProperty(this.prototype,i,{value:r}),e+=`.io-${i} {\n${r}\n}\n`}}}Object.defineProperty(this.prototype,"mixins",{value:e})},IoTheme.Register();const IoThemeSingleton=new IoTheme;IoThemeSingleton.connect(),document.head.appendChild(IoThemeSingleton.styleElement);class Item{constructor(e){"object"!=typeof e||void 0===e.options&&void 0===e.action&&void 0===e.value?this.value=e:Object.assign(this,e),void 0===this.label&&(this.value instanceof Array?this.label=String(`${this.value.constructor.name} (${this.value.length})`):"object"==typeof this.value?this.label=String(`${this.value.constructor.name}`):void 0!==this.value?this.label=String(this.value):console.warn("Option must have label or value!"))}}class IoItem extends IoElement{static get Style(){return html`<style>:host {${IoThemeSingleton.item};}:host {cursor: pointer;user-select: none;background-color: var(--io-background-color);color: var(--io-color);}:host:hover {background-color: var(--io-background-color-light);}:host:focus {text-overflow: inherit;border-color: var(--io-color-focus);outline: 0;}:host[aria-invalid] {text-decoration: underline;text-decoration-style: dashed;text-decoration-color: var(--io-color-error);border-color: var(--io-color-error);}:host[hidden] {display: none;}:host[selected] {color: var(--io-color-link);}</style>`}static get Attributes(){return{label:{notify:!0},hidden:Boolean,selected:Boolean,tabindex:0}}static get Properties(){return{value:void 0}}static get Listeners(){return{focus:"_onFocus"}}get textNode(){return this._flattenTextNode(),this._textNode.nodeValue}set textNode(e){this._flattenTextNode(),this._textNode.nodeValue!==String(e)&&(this._textNode.nodeValue=String(e))}_flattenTextNode(){if(0===this.childNodes.length&&this.appendChild(document.createTextNode("")),this._textNode=this.childNodes[0],this.childNodes.length>1){const e=this.textContent;for(let e=this.childNodes.length;e--;)0!==e&&this.removeChild(this.childNodes[e]);this._textNode.nodeValue=e}}constructor(e){super(e),this._textNode=document.createTextNode(""),this.appendChild(this._textNode)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this._onBlur),this.removeEventListener("keydown",this._onKeydown),this.removeEventListener("click",this._onClick)}_onFocus(){this.addEventListener("blur",this._onBlur),this.addEventListener("keydown",this._onKeydown),this.addEventListener("click",this._onClick)}_onBlur(){this.removeEventListener("blur",this._onBlur),this.removeEventListener("keydown",this._onKeydown),this.removeEventListener("click",this._onClick)}_onKeydown(e){13===e.which||32===e.which?(e.preventDefault(),this._onClick(e)):"ArrowLeft"===e.key?(e.preventDefault(),this.focusTo("left")):"ArrowUp"===e.key?(e.preventDefault(),this.focusTo("up")):"ArrowRight"===e.key?(e.preventDefault(),this.focusTo("right")):"ArrowDown"===e.key&&(e.preventDefault(),this.focusTo("down"))}_onClick(){this.dispatchEvent("item-clicked",{value:this.value,label:this.label},!0)}changed(){let e=String(this.value);this.value&&"object"==typeof this.value&&(e=`${this.value.constructor.name}`+(this.value instanceof Array?`(${this.value.length})`:"")),e=this.label||e,this.textNode=e,this.title=e}}IoItem.Register();class IoBoolean extends IoItem{static get Style(){return html`<style>:host {${IoThemeSingleton.button}}:host:not([value]) {opacity: 0.75;}</style>`}static get Attributes(){return{role:"switch"}}static get Properties(){return{value:{type:Boolean,reflect:1},true:"true",false:"false",role:"switch"}}_onClick(){this.toggle()}toggle(){this.set("value",!this.value)}valueChanged(){this.setAttribute("value",Boolean(this.value))}changed(){this.setAttribute("aria-checked",String(!!this.value)),this.setAttribute("aria-invalid","boolean"!=typeof this.value&&"true"),this.textNode=this.value?this.true:this.false}}IoBoolean.Register();class IoButton extends IoItem{static get Style(){return html`<style>:host {${IoThemeSingleton.button}}</style>`}static get Attributes(){return{label:"Button",role:"button"}}static get Properties(){return{action:Function,value:void 0}}_onClick(){"function"==typeof this.action&&this.action(this.value)}}IoButton.Register();class IoLayer extends IoElement{static get Style(){return html`<style>:host {display: block;visibility: hidden;position: fixed;top: 0;left: 0;bottom: 0;right: 0;z-index: 100000;user-select: none;overflow: hidden;pointer-events: none;touch-action: none;opacity: 0;transition: opacity 0.25s;/* background: rgba(0,0,0,0.2); */}:host[expanded] {visibility: visible;opacity: 1;}:host[expanded][clickblock] {pointer-events: all;/* background: rgba(255,0,0,0.2); */}:host > * {position: absolute;pointer-events: all;}:host > *:not([expanded]) {visibility: hidden;}</style>`}static get Attributes(){return{clickblock:!0,expanded:{value:!1,notify:!0}}}static get Properties(){return{srcElement:HTMLElement}}static get Listeners(){return{mousedown:"_onMousedown",touchstart:"_onTouchstart",contextmenu:"_onContextmenu"}}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this._onWindowChange,{capture:!0}),window.addEventListener("wheel",this._onWindowChange,{capture:!0}),window.addEventListener("resize",this._onWindowChange,{capture:!0})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this._onWindowChange,{capture:!0}),window.removeEventListener("wheel",this._onWindowChange,{capture:!0}),window.removeEventListener("resize",this._onWindowChange,{capture:!0})}_onWindowChange(){this.expanded=!1}_onMousedown(e){e.composedPath()[0]===this&&(e.preventDefault(),this._collapseOrFocusSrcElement(e))}_onTouchstart(e){e.composedPath()[0]===this&&(e.preventDefault(),this._collapseOrFocusSrcElement(e.changedTouches[0]))}_collapseOrFocusSrcElement(e){const t=e.clientX,o=e.clientY;if(this.srcElement){const e=this.srcElement.getBoundingClientRect();if(t>e.x&&t<e.right&&o>e.y&&o<e.bottom)return void this.srcElement.focus()}this.expanded=!1}_onContextmenu(e){e.composedPath()[0]===this&&(e.preventDefault(),this.expanded=!1)}onChildExpanded(e){const t=e.composedPath()[0];if(t.expanded)for(let e=0;e<this.children.length;e++)this.children[e]!==t&&(this.children[e].expanded=!1);this.expanded=t.expanded}nudgeBottom(e,t,o,i,r){return!!(o+i.height<window.innerHeight||r)&&(e.style.top=o+"px",e.style.left=Math.min(t,Math.max(0,window.innerWidth-i.width))+"px",!0)}nudgeTop(e,t,o,i,r){return!!(o-i.height>0||r)&&(e.style.top=o-i.height+"px",e.style.left=Math.min(t,Math.max(0,window.innerWidth-i.width))+"px",!0)}nudgeRight(e,t,o,i,r){return!!(t+i.width<window.innerWidth||r)&&(e.style.left=t+"px",e.style.top=Math.min(o,window.innerHeight-i.height)+"px",!0)}nudgeLeft(e,t,o,i,r){return!!(t-i.width>0||r)&&(e.style.left=t-i.width+"px",e.style.top=Math.min(o,window.innerHeight-i.height)+"px",!0)}setElementPosition(e,t,o){const i=e.getBoundingClientRect();switch(t){case"top":this.nudgeTop(e,o.x,o.top,i)||this.nudgeBottom(e,o.x,o.bottom,i)||this.nudgeTop(e,o.x,o.top,i,!0);break;case"left":this.nudgeLeft(e,o.x,o.top,i)||this.nudgeRight(e,o.right,o.top,i)||this.nudgeLeft(e,o.x,o.top,i,!0);break;case"bottom":this.nudgeBottom(e,o.x,o.bottom,i)||this.nudgeTop(e,o.x,o.top,i)||this.nudgeBottom(e,o.x,o.bottom,i,!0);break;case"right":default:this.nudgeRight(e,o.right,o.top,i)||this.nudgeLeft(e,o.x,o.top,i)||this.nudgeRight(e,o.right,o.top,i,!0)}}expandedChanged(){if(!this.expanded){for(let e=0;e<this.children.length;e++)this.children[e].expanded=!1;this.clickblock=!0}}}IoLayer.Register();const IoLayerSingleton=new IoLayer;document.body.appendChild(IoLayerSingleton);class IoNumberLadder extends IoElement{static get Style(){return html`<style>:host {position: relative;pointer-event: none;}:host > span {pointer-event: all;position: absolute;display: inline-block;cursor: ew-resize;border: var(--io-inset-border);text-align: center;background-color: var(--io-background-color);color: var(--io-color);padding: var(--io-spacing);box-shadow: var(--io-shadow);-webkit-tap-highlight-color: transparent;user-select: none;width: 3em;height: 1.375em;transform: translateZ(0);}:host > :nth-child(1) {border-top-left-radius: var(--io-border-radius);border-top-right-radius: var(--io-border-radius);}:host > :nth-child(8) {border-bottom-left-radius: var(--io-border-radius);border-bottom-right-radius: var(--io-border-radius);}:host > .io-up1,:host > .io-down1{transition: transform 0.10s;opacity: 0.3;}:host > .io-up2,:host > .io-down2 {transition: transform 0.15s;opacity: 0.20;}:host > .io-up3,:host > .io-down3 {transition: transform 0.20s;opacity: 0.12;}:host > .io-up4,:host > .io-down4 {transition: transform 0.25s;opacity: 0.05;}:host > .io-up4 { transform: translateY(-4em); }:host > .io-up3 { transform: translateY(-4em); }:host > .io-up2 { transform: translateY(-4em); }:host > .io-up1 { transform: translateY(-4em); }:host > .io-down1 { transform: translateY(0em); }:host > .io-down2 { transform: translateY(0em); }:host > .io-down3 { transform: translateY(0em); }:host > .io-down4 { transform: translateY(0em); }:host[expanded] > .io-up4 { transform: translateY(-10em); }:host[expanded] > .io-up3 { transform: translateY(-8em); }:host[expanded] > .io-up2 { transform: translateY(-6em); }:host[expanded] > .io-up1 { transform: translateY(-4em); }:host[expanded] > .io-down1 { transform: translateY(0em); }:host[expanded] > .io-down2 { transform: translateY(2em); }:host[expanded] > .io-down3 { transform: translateY(4em); }:host[expanded] > .io-down4 { transform: translateY(6em); }:host > span:hover {background-color: var(--io-background-color);opacity: 1;}:host:not([expanded]) > span {transition: transform 0s;}:host[_step="1000"] > .io-up4,:host[_step="100"] > .io-up3,:host[_step="10"] > .io-up2,:host[_step="1"] > .io-up1,:host[_step="0.1"] > .io-down1,:host[_step="0.01"] > .io-down2,:host[_step="0.001"] > .io-down3,:host[_step="0.0001"] > .io-down4 {background-color: var(--io-background-color-light);opacity: 1;}:host[opaque] > span {opacity: 1;}:host > span.hidden {display: none;}</style>`}static get Attributes(){return{_step:Number,opaque:Boolean}}static get Properties(){return{value:Number,expanded:{type:Boolean,reflect:1},step:1e-4}}static get Listeners(){return{mousedown:"_onMousedown",touchstart:"_onTouchstart"}}_onMousedown(e){e.preventDefault(),e.stopImmediatePropagation(),window.addEventListener("mousemove",this._onMousemove),window.addEventListener("mouseup",this._onMouseup);const t=e.composedPath()[0];this._step=Number(t.textContent),this._clickblockRestore=IoLayerSingleton.clickblock,IoLayerSingleton.clickblock=!0,IoLayerSingleton.style.cursor="ew-resize",this._value=Math.min(this.max,Math.max(this.min,this.value)),this._value=Math.round(this._value/this.step)*this.step,this._x=e.clientX}_onMousemove(e){const t=this._value+Math.round((e.clientX-this._x)/10)*this._step;this.set("value",Math.max(this.min,Math.min(this.max,t)))}_onMouseup(){window.removeEventListener("mousemove",this._onMousemove),window.removeEventListener("mouseup",this._onMouseup),IoLayerSingleton.clickblock=this._clickblockRestore,IoLayerSingleton.style.cursor="",this._step=0}_onTouchstart(e){e.preventDefault(),e.stopImmediatePropagation(),this.addEventListener("touchmove",this._onTouchmove),this.addEventListener("touchend",this._onTouchend);const t=e.composedPath()[0];this._step=Number(t.textContent),this._value=this.value,this._x=e.changedTouches[0].clientX}_onTouchmove(e){e.preventDefault();const t=this._value+Math.round((e.changedTouches[0].clientX-this._x)/5)*this._step;this.set("value",Math.max(this.min,Math.min(this.max,t)))}_onTouchend(e){e.preventDefault(),this.removeEventListener("touchmove",this._onTouchmove),this.removeEventListener("touchend",this._onTouchend),this._step=0}expandedChanged(){this.expanded||(this.srcElement=void 0,this.opaque=!1)}changed(){this.querySelector(".io-up4").classList.toggle("hidden",this.max-this.min<1e3),this.querySelector(".io-up3").classList.toggle("hidden",this.max-this.min<100),this.querySelector(".io-up2").classList.toggle("hidden",this.max-this.min<10),this.querySelector(".io-up1").classList.toggle("hidden",this.max-this.min<1),this.querySelector(".io-down1").classList.toggle("hidden",this.step>.1),this.querySelector(".io-down2").classList.toggle("hidden",this.step>.01),this.querySelector(".io-down3").classList.toggle("hidden",this.step>.001),this.querySelector(".io-down4").classList.toggle("hidden",this.step>1e-4)}constructor(e){super(e),this.template([["span",{class:"io-up4"},"1000"],["span",{class:"io-up3"},"100"],["span",{class:"io-up2"},"10"],["span",{class:"io-up1"},"1"],["span",{class:"io-down1"},".1"],["span",{class:"io-down2"},".01"],["span",{class:"io-down3"},".001"],["span",{class:"io-down4"},".0001"]])}}IoNumberLadder.Register();const IoNumberLadderSingleton=new IoNumberLadder;IoLayerSingleton.appendChild(IoNumberLadderSingleton),IoNumberLadderSingleton.addEventListener("expanded-changed",IoLayerSingleton.onChildExpanded);class IoNumber extends IoItem{static get Style(){return html`<style>:host {${IoThemeSingleton.field}}</style>`}static get Attributes(){return{role:"textbox",type:"number",pattern:'pattern="[0-9]*"',inputmode:"numeric",contenteditable:!0,spellcheck:!1}}static get Properties(){return{value:Number,conversion:1,step:.001,min:-1/0,max:1/0,strict:!0,ladder:!1}}static get Listeners(){return{touchstart:"_onTouchstart",touchend:"_onTouchend"}}_onTouchstart(e){this.ladder&&(this._x=e.changedTouches[0].clientX,this._y=e.changedTouches[0].clientY)}_onTouchend(e){if(!this.ladder)return;e.cancelable&&e.preventDefault();const t=e.changedTouches[0].clientX-this._x,o=e.changedTouches[0].clientY-this._y;Math.abs(t)<2&&Math.abs(o)<2&&(IoNumberLadderSingleton.expanded&&this.focus(),document.activeElement.blur(),IoLayerSingleton.clickblock=!0,IoNumberLadderSingleton.opaque=!0,this._expandLadder())}_onFocus(e){super._onFocus(e),this._textContentOnFocus=this.textNode,this.ladder&&(IoLayerSingleton.clickblock=!1)}_onBlur(e){super._onBlur(e),this._textContentOnFocus!==this.textNode&&this._setFromTextNode(),this.scrollTop=0,this.scrollLeft=0,IoLayerSingleton.expanded=!1}_onClick(e){super._onClick(e),this._expandLadder()}_onValueSet(e){this.set("value",e.detail.value)}_expandLadder(){this.ladder&&(IoNumberLadderSingleton.expanded=!0,IoNumberLadderSingleton.min=this.min,IoNumberLadderSingleton.max=this.max,IoNumberLadderSingleton.step=this.step,IoNumberLadderSingleton.value=this.value,IoNumberLadderSingleton._target&&IoNumberLadderSingleton.removeEventListener("value-set",IoNumberLadderSingleton._target._onValueSet),IoNumberLadderSingleton._target=this,IoNumberLadderSingleton.addEventListener("value-set",this._onValueSet),IoLayerSingleton.setElementPosition(IoNumberLadderSingleton,"bottom",this.getBoundingClientRect()),IoLayerSingleton.srcElement=this)}_onKeydown(e){const t=window.getSelection().getRangeAt(0),o=t.startOffset,i=t.endOffset,r=this.childNodes[0]?this.childNodes[0].length:0,n=t.startContainer===t.endContainer&&(t.startContainer===this.childNodes[0]||t.startContainer===this);13==e.which?(e.preventDefault(),this._setFromTextNode()):37==e.which?n&&o===i&&0===o&&(e.preventDefault(),this.focusTo("left")):38==e.which?n&&o===i&&0===o&&(e.preventDefault(),this.focusTo("up")):39==e.which?n&&o===i&&o===r&&(e.preventDefault(),this.focusTo("right")):40==e.which&&n&&o===i&&o===r&&(e.preventDefault(),this.focusTo("down"))}_setFromTextNode(){let e=this.textNode,t=Math.round(Number(e)/this.step)*this.step/this.conversion;this.strict&&(t=Math.min(this.max,Math.max(this.min,t))),isNaN(t)?this.textNode="NaN":this.set("value",t)}changed(){let e,t=this.value;if("number"!=typeof t||isNaN(t))e="NaN";else{t*=this.conversion;let o=-Math.round(Math.log(this.step)/Math.LN10);o=Math.max(0,Math.min(100,o)),t=t.toFixed(o),e=Number(String(t))}this.textNode=e,this.setAttribute("aria-invalid",!("number"==typeof this.value&&!isNaN(this.value))&&"true")}}IoNumber.Register();const chunk={translate:"vec2 translate(vec2 samplePosition, float x, float y){\n    return samplePosition - vec2(x, y);\n  }\n",circle:"float circle(vec2 samplePosition, float radius){\n    return saturate(length(samplePosition) - radius);\n  }\n",grid:"float grid(vec2 samplePosition, float gridWidth, float gridHeight, float lineWidth) {\n    vec2 sp = samplePosition / vec2(gridWidth, gridHeight);\n    float hw = lineWidth / 2.0;\n    float linex = abs(fract(sp.x - 0.5) - 0.5) / abs(dFdx(sp.x)) - hw;\n    float liney = abs(fract(sp.y - 0.5) - 0.5) / abs(dFdy(sp.y)) - hw;\n    return saturate(min(linex, liney));\n  }\n",hue2rgb:"vec3 hue2rgb(float hue) {\n    float R = abs(hue * 6. - 3.) - 1.;\n    float G = 2. - abs(hue * 6. - 2.);\n    float B = 2. - abs(hue * 6. - 4.);\n    return saturate(vec3(R,G,B));\n  }\n",hsv2rgb:"vec3 hsv2rgb(vec3 hsv) {\n    vec3 rgb = hue2rgb(hsv.r);\n    return ((rgb - 1.0) * hsv.g + 1.0) * hsv.b;\n  }\n"},animationQueue=new Array,animate=function(){requestAnimationFrame(animate);for(let e=animationQueue.length;e--;)animationQueue[e]();animationQueue.length=0};function queueAnimation(e){-1===animationQueue.indexOf(e)&&animationQueue.push(e)}requestAnimationFrame(animate);const canvas=document.createElement("canvas"),gl=canvas.getContext("webgl",{antialias:!1,premultipliedAlpha:!1});gl.imageSmoothingEnabled=!1,gl.getExtension("OES_standard_derivatives"),gl.enable(gl.BLEND),gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA),gl.disable(gl.DEPTH_TEST);const positionBuff=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,positionBuff),gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,1,0,-1,-1,0,1,-1,0,1,1,0]),gl.STATIC_DRAW),gl.bindBuffer(gl.ARRAY_BUFFER,null);const uvBuff=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,uvBuff),gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),gl.STATIC_DRAW),gl.bindBuffer(gl.ARRAY_BUFFER,null);const indexBuff=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexBuff),gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array([3,2,1,3,1,0]),gl.STATIC_DRAW),gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null),gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexBuff);const shadersCache=new WeakMap;let currentProgram;class IoGl extends IoElement{static get Style(){return html`<style>:host {overflow: hidden !important;position: relative !important;border: 0 !important;-webkit-tap-highlight-color: transparent;user-select: none;}:host > img {position: absolute !important;pointer-events: none;image-rendering: pixelated;width: 100%;height: 100%;}</style>`}static get Properties(){return{size:[0,0],color:[1,1,1,1],aspect:1,pxRatio:1,globals:Object}}static get Vert(){return"\n      attribute vec3 position;\n      attribute vec2 uv;\n      varying vec2 vUv;\n\n      void main(void) {\n        vUv = uv;\n        gl_Position = vec4(position, 1.0);\n      }\n\n"}static get Frag(){return"\n      varying vec2 vUv;\n      void main(void) {\n        vec2 px = uSize * vUv;\n        px = mod(px, 8.0);\n        gl_FragColor = uColor;\n        if (px.x <= 1.0 || px.y <= 1.0) gl_FragColor = vec4(vUv, 0.0, 1.0);\n      }\n\n"}initPropertyUniform(e,t){if(t.notify)switch(t.type){case Boolean:return"uniform int "+e+";\n";case Number:return"uniform float "+e+";\n";case Array:return this._vecLengths[e]=t.value.length,"uniform vec"+t.value.length+" "+e+";\n"}return""}constructor(e){super(e),this.globals=IoThemeSingleton;let t="\n      #extension GL_OES_standard_derivatives : enable\n      precision highp float;\n      #ifndef saturate\n        #define saturate(v) clamp(v, 0., 1.)\n      #endif\n\n";this._vecLengths={};for(let e in IoThemeSingleton.__properties){const o=IoThemeSingleton.__protoProperties[e];t+=this.initPropertyUniform(e,o)}t+="\n";for(let e in this.__properties){const o="u"+e.charAt(0).toUpperCase()+e.slice(1),i=this.__protoProperties[e];t+=this.initPropertyUniform(o,i)}const o=gl.createShader(gl.VERTEX_SHADER);if(gl.shaderSource(o,this.constructor.Vert),gl.compileShader(o),!gl.getShaderParameter(o,gl.COMPILE_STATUS)){let e=gl.getShaderInfoLog(o);console.error("IoGl [Vertex Shader] "+this.localName+" error:"),console.warn(e)}const i=gl.createShader(gl.FRAGMENT_SHADER);if(gl.shaderSource(i,t+this.constructor.Frag),gl.compileShader(i),!gl.getShaderParameter(i,gl.COMPILE_STATUS)){let e=gl.getShaderInfoLog(i);console.error("IoGl [Frament Shader] "+this.localName+" error:"),console.warn(e)}shadersCache.has(this.constructor)?this._shader=shadersCache.get(this.constructor):(this._shader=gl.createProgram(),gl.attachShader(this._shader,o),gl.attachShader(this._shader,i),shadersCache.set(this.constructor,this._shader)),gl.linkProgram(this._shader);const r=gl.getAttribLocation(this._shader,"position");gl.bindBuffer(gl.ARRAY_BUFFER,positionBuff),gl.vertexAttribPointer(r,3,gl.FLOAT,!1,0,0),gl.enableVertexAttribArray(r);const n=gl.getAttribLocation(this._shader,"uv");gl.bindBuffer(gl.ARRAY_BUFFER,uvBuff),gl.vertexAttribPointer(n,2,gl.FLOAT,!1,0,0),gl.enableVertexAttribArray(n),this.template([["img",{id:"img"}]]),this.render=this.render.bind(this),this.updateCssUniforms()}onResized(){const e=this.getBoundingClientRect(),t=window.devicePixelRatio,o=Math.ceil(e.width*t),i=Math.ceil(e.height*t);this.setProperties({size:[o,i],aspect:o/i,pxRatio:t})}globalsMutated(){this.updateCssUniforms(),queueAnimation(this.render)}changed(){queueAnimation(this.render)}render(){const e=this.size[0],t=this.size[1];if(e&&t){this.setShaderProgram();for(let e in this.__properties){const t="u"+e.charAt(0).toUpperCase()+e.slice(1);this.updatePropertyUniform(t,this.__properties[e])}canvas.width=e,canvas.height=t,gl.viewport(0,0,e,t),gl.clearColor(0,0,0,0),gl.clear(gl.COLOR_BUFFER_BIT),gl.drawElements(gl.TRIANGLES,6,gl.UNSIGNED_SHORT,0),this.$.img.src=canvas.toDataURL("image/png",.9)}}setShaderProgram(){currentProgram!==this._shader&&(currentProgram=this._shader,gl.useProgram(this._shader))}updatePropertyUniform(e,t){this.setShaderProgram(),t.notify&&this.setUniform(e,t.type,t.value)}updateCssUniforms(){this.setShaderProgram();for(let e in IoThemeSingleton.__properties)this.updatePropertyUniform(e,IoThemeSingleton.__properties[e])}setUniform(e,t,o){const i=gl.getUniformLocation(this._shader,e);let r;switch(t){case Boolean:gl.uniform1i(i,o?1:0);break;case Number:gl.uniform1f(i,o||0);break;case Array:switch(r=[0,1,2,3],o instanceof Array||"object"!=typeof o||(void 0!==o.x?r=["x","y","z","w"]:void 0!==o.r?r=["r","g","b","a"]:void 0!==o.h?r=["h","s","v","a"]:void 0!==o.c&&(r=["c","m","y","k"])),this._vecLengths[e]){case 2:gl.uniform2f(i,void 0!==o[r[0]]?o[r[0]]:1,void 0!==o[r[1]]?o[r[1]]:1);break;case 3:gl.uniform3f(i,void 0!==o[r[0]]?o[r[0]]:1,void 0!==o[r[1]]?o[r[1]]:1,void 0!==o[r[2]]?o[r[2]]:1);break;case 4:gl.uniform4f(i,void 0!==o[r[0]]?o[r[0]]:1,void 0!==o[r[1]]?o[r[1]]:1,void 0!==o[r[2]]?o[r[2]]:1,void 0!==o[r[3]]?o[r[3]]:1)}}}}IoGl.Register();class IoSlider extends IoElement{static get Style(){return html`<style>:host {display: flex;align-self: stretch;justify-self: stretch;}:host > io-number {flex: 0 0 auto;margin-right: var(--io-spacing);}:host > io-slider-knob {flex: 1 1 4.5em;}</style>`}static get Properties(){return{value:0,step:.001,min:0,max:1}}_onValueSet(e){this.value=e.detail.value,this.dispatchEvent("value-set",e.detail,!1)}changed(){this.template([["io-number",{id:"number",value:this.value,step:this.step,min:this.min,max:this.max,label:this.label,title:this.title,ladder:!0,"on-value-set":this._onValueSet}],["io-slider-knob",{id:"slider",value:this.value,step:this.step,min:this.min,max:this.max,label:this.label,title:this.title,"on-value-set":this._onValueSet}]])}}class IoSliderKnob extends IoGl{static get Style(){return html`<style>:host {cursor: ew-resize;border: var(--io-inset-border);border-radius: var(--io-border-radius);border-color: var(--io-inset-border-color);min-height: 1.2em;align-self: stretch;justify-self: stretch}:host[aria-invalid] {outline: 1px solid var(--io-color-focus);}:host:focus {outline: 1px solid var(--io-color-focus);}</style>`}static get Attributes(){return{role:"slider",tabindex:0}}static get Properties(){return{value:0,step:.01,min:0,max:1e3}}static get Listeners(){return{touchstart:"_onTouchstart",mousedown:"_onMousedown",keydown:"_onKeydown"}}_onTouchstart(e){this.addEventListener("touchmove",this._onTouchmove),this.addEventListener("touchend",this._onTouchend),this._onPointerdown(e)}_onTouchmove(e){this._onPointermove(e)}_onTouchend(){this.removeEventListener("touchmove",this._onTouchmove),this.removeEventListener("touchend",this._onTouchend)}_onMousedown(e){e.preventDefault(),this.focus(),window.addEventListener("mousemove",this._onMousemove),window.addEventListener("mouseup",this._onMouseup),this._onPointerdown(e)}_onMousemove(e){this._onPointermove(e)}_onMouseup(){window.removeEventListener("mousemove",this._onMousemove),window.removeEventListener("mouseup",this._onMouseup)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this._onMousemove),window.removeEventListener("mouseup",this._onMouseup)}_onPointerdown(e){const t=e.changedTouches?e.changedTouches[0]:e;this._x=t.clientX,this._y=t.clientY,this._active=-1}_onPointermove(e){const t=e.changedTouches?e.changedTouches[0]:e,o=Math.abs(this._x-t.clientX),i=Math.abs(this._y-t.clientY);if(-1===this._active&&o>5&&(this._active=o>i&&i<20?1:0),1!==this._active)return;if(!e.cancelable)return;e.preventDefault(),this.focus();const r=this.getBoundingClientRect(),n=Math.max(0,Math.min(1,(t.clientX-r.x)/r.width));let s=this.min*(1-n)+this.max*n;s=Math.min(this.max,Math.max(this.min,s)),s=Math.round(s/this.step)*this.step,s=Number(s.toFixed(4)),this.set("value",s)}_onKeydown(e){37==e.which?(e.preventDefault(),e.shiftKey?this._moveSliderByKey("decrease"):this.focusTo("left")):38==e.which?(e.preventDefault(),e.shiftKey?this._moveSliderByKey("decrease"):this.focusTo("up")):39==e.which?(e.preventDefault(),e.shiftKey?this._moveSliderByKey("increase"):this.focusTo("right")):40==e.which?(e.preventDefault(),e.shiftKey?this._moveSliderByKey("increase"):this.focusTo("down")):33==e.which?(e.preventDefault(),this._moveSliderByKey("increase")):34==e.which?(e.preventDefault(),this._moveSliderByKey("decrease")):36==e.which?(e.preventDefault(),this._moveSliderByKey("min")):35==e.which&&(e.preventDefault(),this._moveSliderByKey("max"))}_moveSliderByKey(e){let t=this.value;switch(e){case"increase":t+=this.step;break;case"decrease":t-=this.step;break;case"min":t=this.min;break;case"max":t=this.max}t=Math.min(this.max,Math.max(this.min,t)),t=Number(t.toFixed(4)),this.set("value",t)}changed(){super.changed(),this.setAttribute("aria-invalid",!!isNaN(this.value)&&"true"),this.setAttribute("aria-valuenow",isNaN(this.value)?0:this.value),this.setAttribute("aria-valuemin",this.min),this.setAttribute("aria-valuemax",this.max)}static get Frag(){return`\n    #extension GL_OES_standard_derivatives : enable\n\n    ${chunk.translate}\n    ${chunk.circle}\n    ${chunk.grid}\n\n    varying vec2 vUv;\n\n    void main(void) {\n      vec2 position = vUv * uSize;\n\n      vec4 finalColor = cssBackgroundColorField;\n      vec4 slotColorBg = mix(cssColor, cssBackgroundColorField, 0.5);\n      vec4 stepColorBg = mix(slotColorBg, cssBackgroundColorField, 0.75);\n      vec4 slotColor = mix(cssColorFocus, cssColorLink, vUv.x);\n\n      float lineWidth = cssBorderWidth;\n      float slotWidth = cssBorderWidth;\n\n      float stepInPx = uSize.x / ((uMax - uMin) / uStep);\n\n      if (stepInPx > lineWidth * 2.0) {\n        float gridWidth = uSize.x / ((uMax - uMin) / uStep);\n        float gridOffset = mod(uMin, uStep) / (uMax - uMin) * uSize.x;\n        float gridShape = grid(translate(position, - gridOffset, 0.0), gridWidth, uSize.y, lineWidth);\n        finalColor = mix(stepColorBg, finalColor, gridShape);\n      }\n\n      float valueInRange = (uValue - uMin) / (uMax - uMin);\n      float valueField = saturate((vUv.x - valueInRange) * uSize.x);\n      float slotField = saturate((abs(0.5 - vUv.y)) * uSize.y - slotWidth);\n\n      finalColor = mix(mix(slotColor, slotColorBg, valueField), finalColor, slotField);\n\n      float circleShape = circle(translate(position, valueInRange * uSize.x, 0.5 * uSize.y), uSize.y / 4.0);\n      finalColor = mix(slotColor, finalColor, circleShape);\n\n      gl_FragColor = finalColor;\n    }`}}IoSliderKnob.Register(),IoSlider.Register();class IoString extends IoItem{static get Style(){return html`<style>:host {${IoThemeSingleton.field}}</style>`}static get Attributes(){return{role:"textbox",contenteditable:!0}}static get Properties(){return{value:String}}_setFromTextNode(){const e=this.textNode;"string"!=typeof this.value&&e===String(this.value)||this.set("value",e)}_onBlur(e){super._onBlur(e),this.removeEventListener("blur",this._onBlur),this.removeEventListener("keydown",this._onKeydown),this._setFromTextNode(),this.scrollTop=0,this.scrollLeft=0}_onKeydown(e){const t=window.getSelection().getRangeAt(0),o=t.startOffset,i=t.endOffset,r=this.childNodes[0]?this.childNodes[0].length:0,n=t.startContainer===t.endContainer&&(t.startContainer===this.childNodes[0]||t.startContainer===this);13==e.which?(e.preventDefault(),this._setFromTextNode()):37==e.which?n&&o===i&&0===o&&(e.preventDefault(),this.focusTo("left")):38==e.which?n&&o===i&&0===o&&(e.preventDefault(),this.focusTo("up")):39==e.which?n&&o===i&&o===r&&(e.preventDefault(),this.focusTo("right")):40==e.which&&n&&o===i&&o===r&&(e.preventDefault(),this.focusTo("down"))}changed(){this.textNode=String(this.value).replace(new RegExp(" ","g")," "),this.setAttribute("aria-invalid","string"!=typeof this.value&&"true")}}IoString.Register();class IoSwitch extends IoButton{static get Style(){return html`<style>:host {--io-switch-size: 1.375em;text-align: center;position: relative;border: var(--io-inset-border);border-color: var(--io-inset-border-color);color: var(--io-color-field);background-image: none;background-color: var(--io-background-color-dark);box-shadow: var(--io-shadow-inset);padding: 0;margin: var(--io-spacing);width: 3.5em;height: 1.375em;height: var(--io-switch-size);border-radius: var(--io-switch-size);transition: background-color 0.4s;}:host:focus {outline: none;border-color: var(--io-color-focus);}:host:hover,:host[value] {background-color: var(--io-background-color);}:host:not([value]) {opacity: 0.75;}:host:after {display: inline-block;position: absolute;content: '';top: 0;left: 0;height: calc(var(--io-switch-size) - calc(2 * var(--io-border-width)));width: calc(var(--io-switch-size) - calc(2 * var(--io-border-width)));background-color: var(--io-background-color-dark);border: var(--io-outset-border);border-color: var(--io-outset-border-color);border-radius: var(--io-switch-size);transition-timing-function: ease-in-out;transition: left 0.25s;}:host[value]:after {background-color: rgba(80, 210, 355, 0.75);left: calc(100% - var(--io-switch-size));}:host[aria-invalid] > div:after {background-color: var(--io-color-error);}</style>`}static get Attributes(){return{role:"switch"}}static get Properties(){return{value:{type:Boolean,reflect:1}}}constructor(e){super(e),this.__properties.action.value=this.toggle}toggle(){this.set("value",!this.value)}changed(){this.setAttribute("aria-checked",String(this.value)),this.setAttribute("aria-invalid","boolean"!=typeof this.value&&"true")}}IoSwitch.Register();export{IoBoolean,IoButton,IoGl,IoItem,IoLayerSingleton,IoNumber,IoSlider,IoString,IoSwitch,IoThemeSingleton,Item,chunk};