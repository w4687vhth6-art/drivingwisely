import { LitElement, html, css } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "../navbar.js";

export class NewUserComponent extends LitElement {
  static styles = [
    sharedStyles,
    css`
      .page-container {
        width: 100%;
      }

      .content {
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
      }

      h1 {
        margin-bottom: 30px;
      }

      .form-wrapper {
        width: 500px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      input {
        height: 55px;
        padding: 0 15px;
        border: 2px solid #000;
        font-size: 16px;
      }

      button {
        height: 55px;
        background: #6fbe1b;
        border: none;
        font-size: 16px;
        cursor: pointer;
        font-weight: 600;
      }

      button:hover {
        opacity: 0.9;
      }
    `,
  ];

  render() {
    return html`
      <dw-navbar></dw-navbar>

      <div class="page-container">
        <div class="content">
          <h1>New User</h1>

          <div class="form-wrapper">
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <button>Create Account</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("dw-new-user", NewUserComponent);
