class WebComponent extends HTMLElement {
  static ObservedAttributes = ["prop"];
  #buttons = null;
  #attr = null;
  #internalClickEvent;

  static styling = /*css*/ `
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

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.createTemplate());

    this.shadowRoot.addEventListener("click", this);
    this.#buttons = this.shadowRoot.querySelectorAll("button");
    this.#attr = this.shadowRoot.querySelector("h2.attr");
  }

  get attrProp() {
    return this.getAttribute("prop");
  }

  set attrProp(value) {
    this.setAttribute("prop", value);
  }

  get eventProp() {
    return this.#internalClickEvent;
  }

  set eventProp(fn) {
    this.#internalClickEvent = fn;
  }

  static get observedAttributes() {
    return this.ObservedAttributes;
  }

  createTemplate() {
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
  <style>${WebComponent.styling}</style>
  <div>
      <h1><slot>unnamedSlot</slot></h1>
      <h2 class="slot"><slot name="namedSlot">namedSlot</slot></h2>
      <h2 class="attr">${this.attrProp}</h2>
      <button>Internal</button>
      <button>Toggle</button>
  </div>`;
    return template.content.cloneNode(true);
  }

  handleEvent(evt) {
    const attrValues = ["Tick", "Tack", "Toe"];
    if ("Toggle" === evt.target.textContent) {
      this.attrProp =
        attrValues[
          (1 +
            attrValues.findIndex((attrValue) => attrValue === this.attrProp)) %
            attrValues.length
        ];
    }
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (WebComponent.ObservedAttributes.includes(name)) {
      if (name === "prop") {
        this.#attr.textContent = newVal;
      }
    }
  }

  connectedCallback() {
    this.#buttons[0].addEventListener("click", (evt) => {
      alert(`Button One, ${!!this.#internalClickEvent}`);
      this.#internalClickEvent && this.#internalClickEvent(evt);
    });
  }

  disconnectedCallback() {}
}

customElements.define("web-component", WebComponent);
