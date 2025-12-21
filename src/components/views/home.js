import { LitElement, html, css } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles";
import "./navbar.js";

class HomeComponent extends LitElement {
  static properties = {};

  static styles = [
    sharedStyles,
    css`
      .box-container {
        display: flex;
        gap: 20px;
        flex-direction: row;
      }

      .box {
        height: 100px;
        width: 100px;
        background-color: lightblue;
        font-size: 24px;
      }

      media (width: 600px) {
        .box-container {
          flex-direction: column;
        }
        .box {
          background-color: lightcoral;
        }
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
        <h1>Driving Wisely</h1>

        <div class="box-container">
          <div class="box" id="box1">1</div>
          <div class="box" id="box2">2</div>
          <div class="box" id="box3">3</div>
        </div>

        <label for="email">Email:</label>
        <input type="email" class="dw-input" id="email" name="email" />
        <div class="password-wrapper">
          <label>Password:</label>
          <input type="password" />
        </div>
      </div>
    `;
  }
}

customElements.define("dw-home", HomeComponent);
