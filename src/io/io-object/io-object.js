import {html} from "../ioutil.js"
import {Io} from "../io.js"

import {IoBoolean} from "../io-value/io-boolean.js"
import {IoNumber} from "../io-value/io-number.js"
import {IoString} from "../io-value/io-string.js"
import {IoFunction} from "../io-function/io-function.js"

import {IoObjectLabel} from "./io-object-label.js"
import {IoObjectProp} from "./io-object-prop.js"
import {IoCollapsable} from "../io-collapsable/io-collapsable.js"

export class IoObject extends Io {
  static get shadowStyle() {
    return html`
      <style>
        :host {
          display: inline-block;
        }
      </style>
    `;
  }
  static get style() {
    return html`
      <style>
        :host .io-wrapper {
          margin: 2px;
          border-radius: 2px;
          background: #444;
        }
        :host .io-row {
          display: flex;
          flex-direction: row;
        }
      </style>
    `;
  }
  static get properties() {
    return {
      value: {
        type: Object,
        observer: '_update'
      },
      expanded: {
        type: Boolean,
        observer: '_update',
        reflectToAttribute: true
      }
    }
  }
  getPropConfigs(keys) {
    let configs = {};
    let proto = this.value.__proto__;

    while (proto) {
      let c = IoObject.CONFIG[proto.constructor.name]
      if (c) configs = Object.assign(configs, c);
      proto = proto.__proto__;
    }

    let propConfigs = {};

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = this.value[key];
      let type = typeof value;
      let cstr = (value && value.constructor) ? value.constructor.name : 'null';

      propConfigs[key] = {};

      if (configs.hasOwnProperty('type:' + type)) {
        propConfigs[key] = configs['type:' + type];
      }
      if (configs.hasOwnProperty('constructor:'+cstr)) {
        propConfigs[key] = configs['constructor:'+cstr];
      }
      if (configs.hasOwnProperty('key:' + key)) {
        propConfigs[key] = configs['key:' + key];
      }
      if (configs.hasOwnProperty('value:' + String(value))) {
        propConfigs[key] = configs['value:' + String(value)];
      }
    }
    return propConfigs;
  }
  _update() {
    let propConfigs = this.getPropConfigs(Object.keys(this.value));
    const Prop = entry => ['div', {className: 'io-row'}, [
      ['io-object-label', {key: entry[0]}],
      ['io-object-prop', {key: entry[0], value: this.value, config: entry[1]}]
    ]];
    let label = this.value.constructor.name || 'Object';
    this.render([
      ['io-collapsable', {label: label, expanded: this.expanded}, [
        this.expanded ? Object.entries(propConfigs).map(Prop) : null
      ]]
    ]);
    // TODO: declarative binding
    this.bind('expanded', this.querySelector('io-collapsable'), 'expanded');
  }
}

IoObject.CONFIG = {
  'Object' : {
    'type:string': {tag: 'io-string', props: {}},
    'type:number': {tag: 'io-number', props: {step: 0.1}},
    'type:boolean': {tag: 'io-boolean', props: {}},
    'type:object': {tag: 'io-object', props: {}},
    'type:function': {tag: 'io-function', props: {}},
    'value:null': {tag: 'io-string', props: {}},
    'value:undefined': {tag: 'io-string', props: {}}
  }
};

window.customElements.define('io-object', IoObject);