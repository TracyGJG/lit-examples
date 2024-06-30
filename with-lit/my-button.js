import { html, css, LitElement } from 'lit';

export class Component extends LitElement {
  static styles = css`
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
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05),
        0 2px 8px 0 rgba(161, 161, 161, 0.4);
      color: #363636;
    }
  `;

  static properties = {
    label: { type: String },
    onClick: { type: Function },
  };

  constructor() {
    super();
    this.label = 'Click me';
    this.onClick = () => {};
  }

  render() {
    return html`<div class="container">
      <button @click=${this.onClick}>${this.label}</button>
    </div>`;
  }
}

customElements.define('my-button', Component);
