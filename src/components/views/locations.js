import { LitElement, html, css } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "./navbar.js";

class HomeComponent extends LitElement {
  static properties = {};

  static styles = [sharedStyles];

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="dw-wrapper">
      <dw-nav-bar></dw-nav-bar>
        <h1>Locations Page</h1>


     
      </div>
    `;
  }
}

customElements.define("dw-home", HomeComponent);
