import { LitElement, html } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "./navbar.js";

class MyaccountComponent extends LitElement {
  static properties = {};

  // IMPORTANT: sharedStyles is already an array in your project
  static styles = sharedStyles;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="dw-wrapper">
        <dw-nav-bar></dw-nav-bar>

        <section class="acct-shell">
          <div class="acct-left">
            <div class="acct-card">
              <div class="acct-avatar"></div>
              <div class="acct-name">Charlie Elliott</div>
              <div class="acct-email muted">charlie@example.com</div>
              <button class="btn btn-ghost" type="button">Edit Profile</button>
            </div>
          </div>

          <div class="acct-right">
            <div class="acct-panel">
              <div class="acct-row acct-row-head">
                <div class="acct-title">Personal Info</div>
                <a class="acct-edit" href="#" @click=${(e) => e.preventDefault()}>Edit</a>
              </div>

              <div class="acct-row">
                <div class="acct-label">Name</div>
                <div class="acct-value">Charlie Elliott</div>
                <a class="acct-edit" href="#" @click=${(e) => e.preventDefault()}>Edit</a>
              </div>

              <div class="acct-row">
                <div class="acct-label">Email address</div>
                <div class="acct-value">charlie@example.com</div>
                <a class="acct-edit" href="#" @click=${(e) => e.preventDefault()}>Edit</a>
              </div>

              <div class="acct-section">
                <div class="acct-row acct-row-head">
                  <div class="acct-title">Preferences</div>
                  <a class="acct-edit" href="#" @click=${(e) => e.preventDefault()}>Edit</a>
                </div>

                <div class="acct-row">
                  <div class="acct-label">Preferences</div>
                  <div class="acct-value">Various preferences</div>
                  <a class="acct-edit" href="#" @click=${(e) => e.preventDefault()}>Edit</a>
                </div>

                <div class="acct-row">
                  <div class="acct-label">Payment</div>
                  <div class="acct-value">
                    <span class="pill">Visa</span>
                    <span class="muted">Ending in 4242</span>
                  </div>
                  <a class="acct-edit" href="#" @click=${(e) => e.preventDefault()}>Edit</a>
                </div>

                <div class="acct-row">
                  <div class="acct-label">Notifications</div>
                  <div class="acct-value">Email and SMS notifications</div>
                  <a class="acct-edit" href="#" @click=${(e) => e.preventDefault()}>Edit</a>
                </div>

                <div class="acct-row">
                  <div class="acct-label">Security</div>
                  <div class="acct-value">Password: ****</div>
                  <a class="acct-edit" href="#" @click=${(e) => e.preventDefault()}>Edit</a>
                </div>
              </div>

              <div class="acct-section">
                <div class="acct-row acct-row-head">
                  <div class="acct-title">Bookings Summary</div>
                  <div class="acct-summary">
                    <span><b>0</b> upcoming</span>
                    <span><b>5</b> completed</span>
                    <span><b>1</b> cancelled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define("dw-myaccount", MyaccountComponent);