import {IoElement} from "../../dist/io.js";

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export class TodoItem extends IoElement {
  static get Properties() {
    return {
      item: Object,
      model: Object,
      editing: false
    };
  }
  changed() {
    this.template([
      ['li', {class: (this.item.completed ? 'completed' : '') + (this.editing ? ' editing' : '')}, [
        ['input', {type: 'checkbox', class: 'toggle', checked: this.item.completed, 'on-click': this.onToggleItem}],
        ['label', {'on-dblclick': this.onStartEdit}, this.item.title],
        ['button', {class: 'destroy', 'on-click': this.onDestroyItem}],
        this.editing ? ['input', {id: 'input', class: 'edit', value: this.item.title, 'on-blur': this.onEndEdit, 'on-keyup': this.onInputKey}] : null
      ]]
    ]);
  }
  onDestroyItem() {
    this.model.destroyItem(this.item);
  }
  onToggleItem() {
    this.model.toggleItem(this.item);
  }
  onStartEdit() {
    this.editing = true;
    this.querySelector('input.edit').focus();
  }
  onEndEdit() {
    this.model.updateItemTitle(this.item, this.querySelector('input.edit').value);
    this.editing = false;
  }
  onInputKey(event) {
    if (event.which === ENTER_KEY) {
      this.$.input.blur();
    }
    if (event.which === ESCAPE_KEY) {
      this.$.input.value = this.item.title;
      this.$.input.blur();
    }
  }
}

TodoItem.Register();
