class Component extends HTMLElement {
  constructor() {
    super();
    this.onClick = () => {};
    this.button = document.createElement('button');
  }

  connectedCallback() {
    this.button.textContent = this.label;
    this.button.addEventListener('click', evt => this.onClick(evt));
    this.append(this.button);
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
    this.button.innerHTML = this.label;
  }
}

window.customElements.define('my-button', Component);
