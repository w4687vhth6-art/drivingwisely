import { LitElement, html } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";

class NavBar extends LitElement {
  static styles = sharedStyles;

  static properties = {
    currentPath: { type: String },
  };

  constructor() {
    super();
    this.currentPath = window.location.pathname || "/";
    this._onPopState = () => {
      this.currentPath = window.location.pathname || "/";
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("popstate", this._onPopState);
  }

  disconnectedCallback() {
    window.removeEventListener("popstate", this._onPopState);
    super.disconnectedCallback();
  }

  _navigate(e, path) {
    e.preventDefault();
    // Update URL and let your router render the new component
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
    this.currentPath = path;
  }

  _isActive(path) {
    return this.currentPath === path;
  }

  render() {
    return html`
      <header class="topnav">
        <div class="topnav__inner">
          <div class="topnav__left">
            <a
              class="topnav__brand"
              href="/"
              @click=${(e) => this._navigate(e, "/")}
            >
              DrivingWisely
            </a>
          </div>

          <nav class="topnav__center" aria-label="Primary navigation">
            <a
              class="topnav__link ${this._isActive("/instructors")
                ? "is-active"
                : ""}"
              href="/instructors"
              @click=${(e) => this._navigate(e, "/instructors")}
              >Instructors</a
            >
            <a
              class="topnav__link ${this._isActive("/map") ? "is-active" : ""}"
              href="/map"
              @click=${(e) => this._navigate(e, "/map")}
              >Map</a
            >
            <a
              class="topnav__link ${this._isActive("/booking")
                ? "is-active"
                : ""}"
              href="/booking"
              @click=${(e) => this._navigate(e, "/booking")}
              >Bookings</a
            >
          </nav>

          <div class="topnav__right">
            <a
              class="topnav__avatar"
              href="/myaccount"
              @click=${(e) => this._navigate(e, "/myaccount")}
              aria-label="My account"
              title="My account"
            >
              <span class="topnav__avatarCircle">CE</span>
            </a>
          </div>
        </div>
      </header>
    `;
    
  }
}

customElements.define("dw-nav-bar", NavBar);