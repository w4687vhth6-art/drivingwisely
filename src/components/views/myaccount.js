import { LitElement, html, css } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "./navbar.js";

class MyaccountComponent extends LitElement {
  static properties = {};

  static styles = [sharedStyles];

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="dw-wrapper">
      <dw-nav-bar></dw-nav-bar>
        <h1>My Account Page</h1>


     
      </div>
    `;
  }
}

customElements.define("dw-myaccount", MyaccountComponent);
