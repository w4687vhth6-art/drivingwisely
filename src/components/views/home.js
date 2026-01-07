import { LitElement, html } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "./navbar.js";

class HomeComponent extends LitElement {
  static properties = {};

  static styles = sharedStyles;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="dw-wrapper">
        <dw-nav-bar></dw-nav-bar>

        <section class="hero-card">
          <div class="hero">
            <div class="hero-left">
              <h1 class="hero-title">Find the right driving instructor</h1>
              <p class="hero-sub">
                Search trusted instructors in your area<br />
                and book lessons instantly.
              </p>

              <div class="hero-search">
                <input
                  class="hero-input"
                  type="text"
                  placeholder="Enter your postcode or town"
                />
                <button class="hero-btn" type="button">Search</button>
              </div>
            </div>

            <div class="hero-right"></div>
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define("dw-home", HomeComponent);