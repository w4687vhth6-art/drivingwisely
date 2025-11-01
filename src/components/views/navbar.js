import { LitElement, html, css } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles";
import { Router } from "@vaadin/router";

class NavBarComponent extends LitElement {
  static properties = {};

  static styles = [sharedStyles];

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="dw-nav-bar">
        <button>INSTRUCTORS</button>
        <button @click="${this.__handleLocationsClick}">MAP</button>
        <button>SETTINGS</button> <button>ACCOUNT</button>
        <button>BOOKING</button> <button>BOOKING</button>
      </div>
    `;
  }
  _handleLocationsClick() {
    Router.go("/locations");
  }
}

customElements.define("dw-nav-bar", NavBarComponent);
