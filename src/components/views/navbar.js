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
        <button @click="${this._handleInstructorsClick}">INSTRUCTORS</button>
        <button @click="${this._handleLocationsClick}">MAP</button>
        <button @click="${this._handleMyaccountClick}">ACCOUNT</button>
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
  _handleMyaccountClick() {
    Router.go("/myaccount");
  } 
  _handleInstructorsClick() {
    Router.go("/instructors");
  }
}

customElements.define("dw-nav-bar", NavBarComponent);
