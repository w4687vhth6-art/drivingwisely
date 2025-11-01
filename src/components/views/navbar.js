import { LitElement, html, css } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles";

class NavBarComponent extends LitElement {
  static properties = {};

  static styles = [sharedStyles];

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="dw-nav-bar">
        <button>INSTRUCTORS</button>   <button>MAP</button>   <button>SETTINGS</button>   <button>ACCOUNT </button>   <button>BOOKING</button>   <button>BOOKING</button>
      </div>
    `;
  }
}

customElements.define("dw-nav-bar", NavBarComponent);
