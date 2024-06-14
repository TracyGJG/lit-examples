const style = `
    .container {
      padding: 8px;
    }

    button {
      display: block;
      overflow: hidden;
      position: relative;
      padding: 0 16px;
      font-size: 16px;
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      outline: none;

      width: 100%;
      height: 40px;

      box-sizing: border-box;
      border: 1px solid #a1a1a1;
      background: #ffffff;
      box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);
      color: #363636;
    }
`;

const template = `
  <div class="container">
    <button>Label</button>
  </div>
`;

const domTemplate = document.createElement('template');

domTemplate.innerHTML = `
  <style>
    ${style}
  </style>

  ${template}
`;

class Component extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(domTemplate.content.cloneNode(true));

    this.$button = this._shadowRoot.querySelector('button');
    this.onClick = () => {};

    this.$button.addEventListener('click', evt => {
      this.onClick(evt);
    });
  }

  get label() {
    return this.getAttribute('label');
  }

  set label(value) {
    this.setAttribute('label', value);
  }

  static get observedAttributes() {
    return ['label'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attributeChangedCallback', name, oldVal, newVal);
    if (oldVal !== newVal) {
      this.render();
    }
  }

  render() {
    console.log('render', this.label);
    this.$button.innerHTML = this.label;
  }
}

window.customElements.define('my-button', Component);
