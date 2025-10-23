import { LitElement, html, css } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles";

class HomeComponent extends LitElement {
  static properties = {};

  static styles = [sharedStyles];

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="dw-wrapper">
        <h1>Driving Wisely</h1>
      </div>
    `;
  }
}

customElements.define("dw-home", HomeComponent);
