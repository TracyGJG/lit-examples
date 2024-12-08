import { LitElement, html } from "lit";

class WebComponent extends LitElement {
  static styles = /*css*/ `
    h1 {
      color: red;
    }

    h2.slot {
      color: orange;
    }

    h2.attr {
      color: green;
    }
  `;

  static properties = {
    attrProp: { type: String },
    eventProp: { type: Function },
  };

  constructor() {
    super();

    this.attrProp = this.attributes.prop.value;
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`<style>
        ${WebComponent.styles}
      </style>
      <div>
        <h1><slot>unnamedSlot</slot></h1>
        <h2 class="slot"><slot name="namedSlot">namedSlot</slot></h2>
        <h2 class="attr">${this.attrProp}</h2>
        <button @click=${this.#internalCallback}>Internal</button>
        <button @click=${this.#toggleCallback}>Toggle</button>
      </div>`;
  }

  #internalCallback(evt) {
    alert(`Button One, ${!!this.eventProp}`);
    this.eventProp && this.eventProp(evt);
  }

  #toggleCallback(evt) {
    const attrValues = ["Tick", "Tack", "Toe"];
    this.attrProp =
      attrValues[
        (1 + attrValues.findIndex((attrValue) => attrValue === this.attrProp)) %
          attrValues.length
      ];
  }
}

customElements.define("web-component", WebComponent);
