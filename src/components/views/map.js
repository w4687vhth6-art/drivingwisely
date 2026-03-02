import { LitElement, html, css } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "./navbar.js";

class MapComponent extends LitElement {
  static properties = {};

  static styles = [
    sharedStyles,
    css`
      .dw-map-main-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 30px;
      }
      .dw-map-main-item-1 {
        background-color: #be1b1bff;
        flex: 1;
      }
      .dw-map-main-item-2 {
        background-color: #6fbe1bff;
        flex: 1;
      }
      .dw-input {
        padding: 8px;
        margin: 4px 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      }
      .dw-submit-button {
        padding: 8px;
        margin: 4px 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      }
    `,
  ];

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="dw-wrapper">
        <dw-nav-bar></dw-nav-bar>
        <h1>Map Page</h1>
        ${this._instructorDetails()}
      </div>
    `;
  }

  _instructorDetails() {
    return html`
      <div class="dw-map-main-container">
        <div class="dw-map-main-item-1">
          <div>Ollie West.</div>
        </div>
        <div class="dw-map-main-item-2">
          <div>Enter your details.</div>
        </div>
      </div>
    `;
  }
}

customElements.define("dw-map", MapComponent);
