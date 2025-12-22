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
      .dw-login-label {
      display: inline-block;
      width: 100px;
      font-size: 18px;
      margin-bottom: 8px;
    }
      @media (max-width: 600px) {
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

        <div class="login-container">
          <div class="email-wrapper">
            <label for="email" class = "dw-login-label">Email:</label>
            <input type="email" class="dw-input" id="email" name="email" />
          </div>

          <div class="password-wrapper">
            <label for="password" class = "dw-login-label">Password:</label>
            <input type="password" class="dw-input" id="password" name="password"  />
          </div>
        </div>
    `;
  }
}

customElements.define("dw-home", HomeComponent);
