import { LitElement, html } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "./navbar.js";

class HomeComponent extends LitElement {

  static styles = sharedStyles;

  render() {
    return html`
      <div class="page-bg">
        <div class="dw-wrapper">
          <dw-nav-bar></dw-nav-bar>

          <div class="page">
            <!-- HERO (centred, no car image) -->
            <section class="hero hero--center">
  <h1 class="hero-title">Find the right driving instructor</h1>

  <p class="hero-sub">
    Search trusted instructors in your area and book lessons instantly.
  </p>

  <div class="hero-search">
    <input
      class="hero-input"
      type="text"
      placeholder="Enter your postcode or town"
    />
    <button class="hero-btn" type="button">Search</button>
  </div>
</section>

            <!-- FAQ -->
            <section class="faq">
              <h2>Frequently asked questions</h2>

              <details class="faq-item">
                <summary>
                  <span>How do I find a driving instructor?</span>
                  <span class="faq-chevron">▾</span>
                </summary>
                <p>
                  Enter your postcode and browse instructors available in your
                  area.
                </p>
              </details>

              <details class="faq-item">
                <summary>
                  <span>Can I choose my instructor?</span>
                  <span class="faq-chevron">▾</span>
                </summary>
                <p>
                  Yes — you can view profiles and select the instructor that
                  suits you.
                </p>
              </details>

              <details class="faq-item">
                <summary>
                  <span>How do bookings work?</span>
                  <span class="faq-chevron">▾</span>
                </summary>
                <p>
                  Choose a date, time, and lesson length, then confirm your
                  booking.
                </p>
              </details>
            </section>

            <!-- FREE CALL -->
            <section class="free-call">
              <div class="free-call-inner">
                <div class="free-call-left">
                  <h2 class="free-call-title">
                    Book a free call with a driving instructor
                  </h2>
                  <p class="free-call-sub">
                    Ask questions, discuss pricing, and plan your first lesson
                    with a qualified instructor — no commitment.
                  </p>

                  <div class="free-call-actions">
                    <button class="free-call-btn" type="button">
                      Book free call
                    </button>
                    <a class="free-call-link" href="/instructors"
                      >Browse instructors</a
                    >
                  </div>
                </div>

                <div class="free-call-right" aria-hidden="true">
                  <!-- Inline SVG: phone + student (no image files needed) -->
                  <svg
                    class="free-call-svg"
                    viewBox="0 0 520 360"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stop-color="#c7f9cc" />
                        <stop offset="1" stop-color="#e9ffef" />
                      </linearGradient>
                    </defs>

                    <!-- background blob -->
                    <path
                      d="M52 86c40-60 160-84 252-50 94 34 148 120 134 194-14 74-92 116-186 118-94 2-248-14-260-96C-18 170 12 146 52 86Z"
                      fill="url(#g)"
                    />

                    <!-- phone -->
                    <rect
                      x="310"
                      y="86"
                      width="120"
                      height="200"
                      rx="22"
                      fill="#0f172a"
                    />
                    <rect
                      x="324"
                      y="106"
                      width="92"
                      height="152"
                      rx="14"
                      fill="#ffffff"
                      opacity="0.12"
                    />
                    <circle
                      cx="370"
                      cy="272"
                      r="10"
                      fill="#ffffff"
                      opacity="0.25"
                    />

                    <!-- student head -->
                    <circle cx="210" cy="170" r="46" fill="#58b65c" />
                    <circle
                      cx="210"
                      cy="158"
                      r="40"
                      fill="#7ae582"
                      opacity="0.6"
                    />

                    <!-- student body -->
                    <path
                      d="M136 310c14-56 62-86 118-86s104 30 118 86"
                      fill="#ffffff"
                      opacity="0.22"
                    />
                    <path
                      d="M152 310c12-44 52-68 96-68s84 24 96 68"
                      fill="#0f172a"
                      opacity="0.10"
                    />

                    <!-- small accents -->
                    <circle cx="120" cy="120" r="10" fill="#22c55e" opacity="0.45" />
                    <circle cx="450" cy="140" r="8" fill="#22c55e" opacity="0.35" />
                    <circle cx="420" cy="300" r="12" fill="#22c55e" opacity="0.25" />
                  </svg>
                </div>
              </div>
            </section>

            <!-- FOOTER INFO -->
            <section class="footer-info">
              <div>
                <h3>Company</h3>
                <ul>
                  <li>
                    <a class="footer-link" href="/about">About us</a>
                  </li>
                  <li>Become an instructor</li>
                  <li>Careers</li>
                  <li>Privacy policy</li>
                </ul>
              </div>

              <div>
                <h3>We’re here to help</h3>
                <p>📞 020 3773 6020</p>
                <p>✉️ support@drivingwisely.co.uk</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("dw-home", HomeComponent);