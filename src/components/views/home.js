import { LitElement, html, css } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles";
import "./navbar.js";

class HomeComponent extends LitElement {
  static properties = {};

  static styles = [
    sharedStyles,
    css`
      .dw-home-main {
        background-color: #45a20bff;
        height: 50vh;
      }
      .dw-home-blurb {
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #0b105bff;
        color: #ffffff;
        width: 50%;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        padding: 20px;
        margin: 20px;
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
        <div class="dw-home-main">
          <h1>Driving Wisely</h1>
          ${this._mainPage()}
        </div>
      </div>
    `;
  }

  _mainPage() {
    return html`${this._heading()}${this._blurb()}`;
  }
  _heading() {
    return html`<h2>Welcome to Driving Wisely!</h2>`;
  }

  _blurb() {
    return html`
      <div class="dw-home-blurb">
        <p>Welcome to the Driving Wisely application!</p>
        <p>
          This app is designed to help you find the driving instructor of your
          dreams.
        </p>
        <p>
          Use the navigation bar above to explore different features and tools
          we offer.
        </p>
      </div>
    `;
  }
}

customElements.define("dw-home", HomeComponent);
