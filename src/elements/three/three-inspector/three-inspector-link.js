import {IoButton} from "../../io/io-button/io-button.js";

export class ThreeInspectorLink extends IoButton {
  static get style() {
    return `
      :host {
        padding: 0.3em 0;
        color: #fd9;
        flex: none;
        font-weight: bold;
      }
    `;
  }
  _onAction() {
    this.fire('three-inspector-item-clicked', {value: this.value});
  }
  update() {
    this.render([['span', this.value.constructor.name]]);
  }
}

ThreeInspectorLink.Register();
