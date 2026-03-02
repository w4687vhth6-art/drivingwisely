import { LitElement, html } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "./navbar.js";

class InstructorsComponent extends LitElement {
  static styles = sharedStyles;

  static properties = {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    postcode: { type: String },
    message: { type: String },
  };

  constructor() {
    super();
    this.name = "";
    this.email = "";
    this.phone = "";
    this.postcode = "";
    this.message = "";
  }

  _onSubmit(e) {
    e.preventDefault();
    // For now just demo behaviour:
    alert(
      `Thanks ${this.name || "!"} We'll be in touch at ${this.email || "(no email)"}`
    );

    // reset (optional)
    this.name = "";
    this.email = "";
    this.phone = "";
    this.postcode = "";
    this.message = "";
  }

  render() {
    return html`
      <div class="dw-wrapper">
        <dw-nav-bar></dw-nav-bar>

        <div class="page">
          <header class="page-head">
            <h1 class="page-title">Become an instructor</h1>
            <p class="page-sub">
              Join DrivingWisely and get more bookings with less admin. Tell us a
              little about you and we’ll help you get set up.
            </p>
          </header>

          <div class="two-col">
            <!-- Left info card -->
            <section class="info-card">
              <h2 class="info-title">Why join DrivingWisely?</h2>

              <div class="info-list">
                <div class="info-item">
                  <div class="dot"></div>
                  <div>
                    <div class="info-label">More learners, less hassle</div>
                    <div class="info-text">
                      Learners can find you by area and request lessons quickly.
                    </div>
                  </div>
                </div>

                <div class="info-item">
                  <div class="dot"></div>
                  <div>
                    <div class="info-label">Manage bookings easily</div>
                    <div class="info-text">
                      Keep everything in one place — availability, enquiries, and
                      bookings.
                    </div>
                  </div>
                </div>

                <div class="info-item">
                  <div class="dot"></div>
                  <div>
                    <div class="info-label">Build trust</div>
                    <div class="info-text">
                      Create a professional profile learners can rely on.
                    </div>
                  </div>
                </div>
              </div>

              <div class="help-box">
                <div class="help-title">Need help?</div>
                <div class="help-text">
                  Email us at <b>support@drivingwisely.co.uk</b> and we’ll respond
                  quickly.
                </div>
              </div>
            </section>

            <!-- Right form card -->
            <section class="card form-card">
              <h2 class="card-title">Your details</h2>
              <p class="muted">We’ll use this to contact you and set up your profile.</p>

              <form class="form" @submit=${this._onSubmit}>
                <div class="form-grid">
                  <label class="field">
                    <span>Name</span>
                    <input
                      class="input"
                      type="text"
                      .value=${this.name}
                      @input=${(e) => (this.name = e.target.value)}
                      placeholder="e.g. Charlie Elliott"
                      required
                    />
                  </label>

                  <label class="field">
                    <span>Email</span>
                    <input
                      class="input"
                      type="email"
                      .value=${this.email}
                      @input=${(e) => (this.email = e.target.value)}
                      placeholder="e.g. charlie@email.com"
                      required
                    />
                  </label>

                  <label class="field">
                    <span>Phone (optional)</span>
                    <input
                      class="input"
                      type="tel"
                      .value=${this.phone}
                      @input=${(e) => (this.phone = e.target.value)}
                      placeholder="e.g. 07xxx xxx xxx"
                    />
                  </label>

                  <label class="field">
                    <span>Postcode / area</span>
                    <input
                      class="input"
                      type="text"
                      .value=${this.postcode}
                      @input=${(e) => (this.postcode = e.target.value)}
                      placeholder="e.g. SW1A 1AA"
                      required
                    />
                  </label>

                  <label class="field field--full">
                    <span>Message (optional)</span>
                    <textarea
                      class="textarea"
                      .value=${this.message}
                      @input=${(e) => (this.message = e.target.value)}
                      placeholder="Anything you'd like learners to know? (car type, availability, experience...)"
                      rows="4"
                    ></textarea>
                  </label>
                </div>

                <div class="actions">
                  <button class="btn-primary" type="submit">Submit</button>
                  <a
                    class="btn-secondary"
                    href="/about"
                    @click=${(e) => {
                      e.preventDefault();
                      window.history.pushState({}, "", "/about");
                      window.dispatchEvent(new PopStateEvent("popstate"));
                    }}
                  >
                    Learn about DrivingWisely
                  </a>
                </div>

                <p class="tiny muted">
                  By submitting, you agree we can contact you about setting up your
                  instructor profile.
                </p>
              </form>
            </section>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("dw-instructors", InstructorsComponent);
