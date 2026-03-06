import { LitElement, html } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "./navbar.js";

class MyaccountComponent extends LitElement {
  static properties = {
    // 1. Add a property to track auth status
    isLoggedIn: { type: Boolean },
  };

  static styles = sharedStyles;

  constructor() {
    super();
    // Default to false (you would usually check a token/cookie here)
    this.isLoggedIn = false;
  }

  // Helper functions for the buttons
  _handleLogin() {
    this.isLoggedIn = true; // Simulate login
  }

  _handleLogout() {
    this.isLoggedIn = false; // Simulate logout
  }

  render() {
    return html`
      <div class="dw-wrapper">
        <dw-nav-bar></dw-nav-bar>

        <section class="acct-shell">
          ${this.isLoggedIn
            ? this.renderAccountDetails()
            : this.renderLoginPrompt()}
        </section>
      </div>
    `;
  }

  // 2. The "Logged Out" View
  renderLoginPrompt() {
    return html`
      <div class="acct-panel" style="text-align: center; padding: 2rem;">
        <h2>Access Denied</h2>
        <p class="muted">Please log in to view your account details.</p>
        <button class="btn btn-primary" @click=${this._handleLogin}>
          Log In / Create Account
        </button>
      </div>
    `;
  }

  // 3. The "Logged In" View (Your original code)
  renderAccountDetails() {
    return html`
      <div class="acct-left">
        <div class="acct-card">
          <div class="acct-avatar"></div>
          <div class="acct-name">Charlie Elliott</div>
          <div class="acct-email muted">charlie@example.com</div>
          <button class="btn btn-ghost" @click=${this._handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div class="acct-right">
        <div class="acct-panel">
          <div class="acct-row acct-row-head">
            <div class="acct-title">Personal Info</div>
            <a class="acct-edit" href="#" @click=${(e) => e.preventDefault()}
              >Edit</a
            >
          </div>
          <!-- ... rest of your original rows ... -->
          <div class="acct-row">
            <div class="acct-label">Name</div>
            <div class="acct-value">Charlie Elliott</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("dw-myaccount", MyaccountComponent);
