import {html} from "../core/element.js";
import {IoObject} from "./object.js";

//TODO: test

export class IoColorHsv extends IoObject {
  static get style() {
    return html`<style>
    :host {
      display: flex;
      flex-direction: row;
    }
    :host > io-number {
      flex: 1 1;
    }
    </style>`;
  }
  changed() {

    const r = parseInt(this.value.r * 255);
    const g = parseInt(this.value.g * 255);
    const b = parseInt(this.value.b * 255);
    const rgb = 'rgba(' + r + ',' + g + ',' + b + ')';

    this.template([
      ['io-number', {value: this.value.r, id: 'h', step: 0.01, min: 0, max: 1, strict: false, underslider: true, style: {'--slider-color': '#ff9977'}}],
      ['io-number', {value: this.value.g, id: 's', step: 0.01, min: 0, max: 1, strict: false, underslider: true, style: {'--slider-color': '#55ff44'}}],
      ['io-number', {value: this.value.b, id: 'v', step: 0.01, min: 0, max: 1, strict: false, underslider: true, style: {'--slider-color': '#4499ff'}}]
    ]);

  }
}

IoColorHsv.Register();