import { LitElement, html, css } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "./navbar.js";

class LocationsComponent extends LitElement {
  static properties = {};

  static styles = [
    sharedStyles,
    css`
      .dw-locations-container {
        display: flex;
        gap: 10px;
        height: 40vh;
        width: 100%;
      }
      .dw-locations-left-window {
        flex: 1;
        border: 1px solid black;
      }
      .dw-locations-right-window {
        flex: 1;
        border: 1px solid black;
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
        <h1>Locations Page</h1>

        <div class="dw-locations-container">
          <div class="dw-locations-left-window">
            <div class="dw-locations-search">${this._searchInput()}</div>
            <div class="dw-locations-results">RESULTS</div>
          </div>
          <div class="dw-locations-right-window">MAP</div>
        </div>
      </div>
    `;
  }

  _searchInput() {
    return html`
      <label for="name">Search:</label>
      <input type="text" class="dw-input" id="name" name="name" />
    `;
  }
}

customElements.define("dw-locations", LocationsComponent);
