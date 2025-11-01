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
       <button @click="${this._handleHomeClick}">HOME</button> 
        <button>INSTRUCTORS</button>
        <button @click="${this._handleLocationsClick}">MAP</button>
        <button>SETTINGS</button> <button>ACCOUNT</button>
        <button>BOOKING</button> <button>BOOKING</button>
      </div>
    `;
  }
  _handleHomeClick() {
    Router.go("/");
  }
  _handleLocationsClick() {
    Router.go("/locations");
  }
}

customElements.define("dw-nav-bar", NavBarComponent);
