import { LitElement, html, css } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles";
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
        <h1>Driving Wisely</h1>
     

      <div class="container">
      <div class="box" id="box1">1</div>
      <div class="box" id="box2">2</div>
      <div class="box" id="box3">3</div>

      </div>
    `;
  }
}

customElements.define("dw-home", HomeComponent);
