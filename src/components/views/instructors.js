import { LitElement, html, css } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "./navbar.js";

class InstructorsComponent extends LitElement {
  static properties = {};

  static styles = [
    sharedStyles,
    css`
      .dw-input {
        padding: 8px;
        margin: 4px 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      }
      .dw-submit-button {
        padding: 8px;
        margin: 4px 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
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
        <h1>Instructors Page</h1>
        ${this._instructorDetails()}
      </div>
    `;
  }

  _instructorDetails() {
    return html`
      <div>
        <div>Enter your details.</div>
        <form>
          <label for="name">Name:</label>
          <input
            type="text"
            class="dw-input"
            id="name"
            name="name"
          /><br /><br />
          <label for="email">Email:</label>
          <input
            type="email"
            class="dw-input"
            id="email"
            name="email"
          /><br /><br />
          <input type="submit" class="dw-submit-button" value="Submit" />
        </form>
      </div>
    `;
  }
}

customElements.define("dw-instructors", InstructorsComponent);
